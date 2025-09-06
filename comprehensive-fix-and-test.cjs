#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class ComprehensiveFixAndTest {
  constructor() {
    this.projectRoot = process.cwd();
    this.startTime = new Date();
    this.results = {
      fixes: [],
      tests: [],
      errors: []
    };
  }

  log(message, type = 'INFO') {
    const timestamp = new Date().toISOString();
    const prefix = {
      'INFO': 'ℹ️',
      'SUCCESS': '✅',
      'ERROR': '❌',
      'WARNING': '⚠️',
      'PROGRESS': '🔄'
    }[type] || 'ℹ️';
    console.log(`${prefix} [${timestamp}] ${message}`);
  }

  async runCommand(command, description, options = {}) {
    this.log(`Running: ${description}`, 'PROGRESS');
    try {
      const result = execSync(command, {
        cwd: this.projectRoot,
        stdio: 'pipe',
        encoding: 'utf8',
        timeout: 300000, // 5 minutes
        maxBuffer: 1024 * 1024 * 10, // 10MB buffer
        ...options,
      });
      this.log(`${description} completed successfully`, 'SUCCESS');
      return { success: true, output: result };
    } catch (error) {
      this.log(`${description} failed: ${error.message}`, 'ERROR');
      this.results.errors.push({ command, description, error: error.message });
      return { success: false, error: error.message };
    }
  }

  async fixTypeScriptIssues() {
    this.log('Fixing TypeScript issues...', 'PROGRESS');
    
    try {
      // Create a basic tsconfig.json if it doesn't exist
      const tsconfigPath = path.join(this.projectRoot, 'tsconfig.json');
      if (!fs.existsSync(tsconfigPath)) {
        const tsconfig = {
          "compilerOptions": {
            "target": "es5",
            "lib": ["dom", "dom.iterable", "es6"],
            "allowJs": true,
            "skipLibCheck": true,
            "strict": false,
            "forceConsistentCasingInFileNames": true,
            "noEmit": true,
            "esModuleInterop": true,
            "module": "esnext",
            "moduleResolution": "node",
            "resolveJsonModule": true,
            "isolatedModules": true,
            "jsx": "preserve",
            "incremental": true,
            "plugins": [
              {
                "name": "next"
              }
            ],
            "baseUrl": ".",
            "paths": {
              "@/*": ["./*"]
            }
          },
          "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
          "exclude": ["node_modules"]
        };
        
        fs.writeFileSync(tsconfigPath, JSON.stringify(tsconfig, null, 2));
        this.log('Created tsconfig.json', 'SUCCESS');
        this.results.fixes.push('Created tsconfig.json');
      }

      // Try to run type check with increased memory
      const typeResult = await this.runCommand(
        'node --max-old-space-size=8192 ./node_modules/.bin/tsc --noEmit --skipLibCheck',
        'TypeScript type check'
      );
      
      if (typeResult.success) {
        this.results.tests.push({ name: 'TypeScript type check', status: 'passed' });
      } else {
        this.results.tests.push({ name: 'TypeScript type check', status: 'failed' });
      }
    } catch (error) {
      this.log(`TypeScript fix failed: ${error.message}`, 'ERROR');
      this.results.errors.push(`TypeScript fix: ${error.message}`);
    }
  }

  async fixESLintIssues() {
    this.log('Fixing ESLint issues...', 'PROGRESS');
    
    try {
      // Try to run ESLint with the new config
      const lintResult = await this.runCommand(
        'npx eslint . --max-warnings 1000',
        'ESLint check'
      );
      
      if (lintResult.success) {
        this.results.tests.push({ name: 'ESLint check', status: 'passed' });
      } else {
        this.results.tests.push({ name: 'ESLint check', status: 'failed' });
      }

      // Try to fix ESLint issues
      const lintFixResult = await this.runCommand(
        'npx eslint . --fix --max-warnings 1000',
        'ESLint auto-fix'
      );
      
      if (lintFixResult.success) {
        this.log('ESLint auto-fix completed', 'SUCCESS');
        this.results.fixes.push('ESLint auto-fix applied');
      }
    } catch (error) {
      this.log(`ESLint fix failed: ${error.message}`, 'ERROR');
      this.results.errors.push(`ESLint fix: ${error.message}`);
    }
  }

  async runTests() {
    this.log('Running tests...', 'PROGRESS');
    
    try {
      // Run Jest tests
      const testResult = await this.runCommand(
        'npm test -- --passWithNoTests',
        'Jest tests'
      );
      
      if (testResult.success) {
        this.results.tests.push({ name: 'Jest tests', status: 'passed' });
      } else {
        this.results.tests.push({ name: 'Jest tests', status: 'failed' });
      }
    } catch (error) {
      this.log(`Test run failed: ${error.message}`, 'ERROR');
      this.results.errors.push(`Test run: ${error.message}`);
    }
  }

  async buildProject() {
    this.log('Building project...', 'PROGRESS');
    
    try {
      // Try to build the project
      const buildResult = await this.runCommand(
        'npm run build',
        'Project build'
      );
      
      if (buildResult.success) {
        this.results.tests.push({ name: 'Project build', status: 'passed' });
        this.log('Build completed successfully', 'SUCCESS');
      } else {
        this.results.tests.push({ name: 'Project build', status: 'failed' });
        this.log('Build failed', 'ERROR');
      }
    } catch (error) {
      this.log(`Build failed: ${error.message}`, 'ERROR');
      this.results.errors.push(`Build: ${error.message}`);
    }
  }

  async runAllAutomationScripts() {
    this.log('Running all automation scripts...', 'PROGRESS');
    
    const scripts = [
      { path: 'scripts/performance-monitor.cjs', description: 'Performance Monitor' },
      { path: 'scripts/health-checker.cjs', description: 'Health Checker' },
      { path: 'scripts/bundle-analyzer.cjs', description: 'Bundle Analyzer' },
      { path: 'scripts/performance-optimizer.cjs', description: 'Performance Optimizer' },
      { path: 'scripts/security-enhancer.cjs', description: 'Security Enhancer' }
    ];

    for (const script of scripts) {
      if (fs.existsSync(script.path)) {
        const result = await this.runCommand(`node ${script.path}`, script.description);
        if (result.success) {
          this.results.tests.push({ name: script.description, status: 'passed' });
        } else {
          this.results.tests.push({ name: script.description, status: 'failed' });
        }
      } else {
        this.log(`Script not found: ${script.path}`, 'WARNING');
      }
    }
  }

  async generateReport() {
    const duration = Date.now() - this.startTime;
    const successfulTests = this.results.tests.filter(t => t.status === 'passed').length;
    const totalTests = this.results.tests.length;
    
    this.log('\n📊 COMPREHENSIVE FIX AND TEST REPORT', 'INFO');
    this.log('='.repeat(60), 'INFO');
    this.log(`Total Duration: ${duration}ms`, 'INFO');
    this.log(`Tests Passed: ${successfulTests}/${totalTests}`, 'INFO');
    this.log(`Fixes Applied: ${this.results.fixes.length}`, 'INFO');
    this.log(`Errors: ${this.results.errors.length}`, 'INFO');
    this.log('', 'INFO');

    if (this.results.tests.length > 0) {
      this.log('Test Results:', 'INFO');
      this.results.tests.forEach(test => {
        const status = test.status === 'passed' ? '✅' : '❌';
        this.log(`  ${status} ${test.name}`, 'INFO');
      });
    }

    if (this.results.fixes.length > 0) {
      this.log('\nFixes Applied:', 'INFO');
      this.results.fixes.forEach(fix => {
        this.log(`  ✅ ${fix}`, 'INFO');
      });
    }

    if (this.results.errors.length > 0) {
      this.log('\nErrors:', 'INFO');
      this.results.errors.forEach(error => {
        this.log(`  ❌ ${error}`, 'INFO');
      });
    }

    const reportData = {
      timestamp: new Date().toISOString(),
      duration,
      summary: {
        totalTests,
        successfulTests,
        failedTests: totalTests - successfulTests,
        fixesApplied: this.results.fixes.length,
        errors: this.results.errors.length
      },
      results: this.results
    };

    fs.writeFileSync('comprehensive-fix-and-test-report.json', JSON.stringify(reportData, null, 2));
    this.log('\n📄 Report saved to: comprehensive-fix-and-test-report.json', 'INFO');
  }

  async run() {
    this.log('🚀 Starting Comprehensive Fix and Test', 'PROGRESS');
    this.log('='.repeat(60), 'INFO');

    try {
      await this.fixTypeScriptIssues();
      await this.fixESLintIssues();
      await this.runTests();
      await this.buildProject();
      await this.runAllAutomationScripts();
    } catch (error) {
      this.log(`Fatal error: ${error.message}`, 'ERROR');
    } finally {
      await this.generateReport();
    }
  }
}

// Run the comprehensive fix and test
if (require.main === module) {
  const fixer = new ComprehensiveFixAndTest();
  fixer.run().catch(console.error);
}

module.exports = ComprehensiveFixAndTest;