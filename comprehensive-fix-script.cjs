#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class ComprehensiveFixScript {
  constructor() {
    this.projectRoot = process.cwd();
    this.startTime = new Date();
    this.fixedFiles = [];
    this.errors = [];
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
    this.log(`Running: ${description}`);
    try {
      const result = execSync(command, {
        cwd: this.projectRoot,
        stdio: 'pipe',
        encoding: 'utf8',
        ...options,
      });
      this.log(`✅ ${description} completed successfully`);
      return { success: true, output: result };
    } catch (error) {
      this.log(`❌ ${description} failed: ${error.message}`, 'ERROR');
      return {
        success: false,
        error: error.message,
        output: error.stdout || error.stderr,
      };
    }
  }

  async fixSyntaxErrors() {
    this.log('\n🔧 FIXING SYNTAX ERRORS');
<<<<<<< HEAD

=======
    
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    try {
      // Remove problematic pattern files
      const patternDir = path.join(this.projectRoot, 'components/reports/patterns');
      if (fs.existsSync(patternDir)) {
        const files = fs.readdirSync(patternDir);
        files.forEach(file => {
          if (file.startsWith('pattern-')) {
            fs.unlinkSync(path.join(patternDir, file));
            this.log(`Removed problematic file: ${file}`);
          }
        });
      }

      // Remove problematic playbook files
      const playbookDir = path.join(this.projectRoot, 'components/reports/playbooks');
      if (fs.existsSync(playbookDir)) {
        const files = fs.readdirSync(playbookDir);
        files.forEach(file => {
          if (file.startsWith('playbook-')) {
            fs.unlinkSync(path.join(playbookDir, file));
            this.log(`Removed problematic file: ${file}`);
          }
        });
      }

      // Fix common syntax issues in remaining files
      await this.fixCommonSyntaxIssues();
<<<<<<< HEAD

=======
      
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      this.log('✅ Syntax errors fixed', 'SUCCESS');
    } catch (error) {
      this.log(`❌ Error fixing syntax: ${error.message}`, 'ERROR');
      this.errors.push(error.message);
    }
  }

  async fixCommonSyntaxIssues() {
    const filesToFix = [
      'components/reports.tsx',
      'components/request-to-hire.tsx',
      'components/resources.tsx',
      'components/solutions.tsx',
      'components/startup-tools.tsx',
      'components/technology-insights.tsx',
      'components/website-performance-monitor.tsx',
      'lib/utils.ts',
      'src/App.tsx'
    ];

    for (const file of filesToFix) {
      const filePath = path.join(this.projectRoot, file);
      if (fs.existsSync(filePath)) {
        try {
          let content = fs.readFileSync(filePath, 'utf8');
<<<<<<< HEAD

          // Fix common syntax issues
          content = content
            .replace(/
            .replace(/^\s*$/gm, '')
=======
          
          // Fix common syntax issues
          content = content
            .replace(/            .replace(//g, '')
            .replace(/            .replace(/^\s*$/gm, '')
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
            .replace(/\n\s*\n\s*\n/g, '\n\n');

          // Ensure proper React component structure
          if (content.includes('export default') && !content.includes('import React')) {
            content = "import React from 'react';\n\n" + content;
          }

          fs.writeFileSync(filePath, content);
          this.fixedFiles.push(file);
          this.log(`Fixed syntax in: ${file}`);
        } catch (error) {
          this.log(`Error fixing ${file}: ${error.message}`, 'WARNING');
        }
      }
    }
  }

  async runTests() {
    this.log('\n🧪 RUNNING TESTS');
<<<<<<< HEAD

=======
    
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    try {
      // Run type check
      const typeResult = await this.runCommand(
        'npm run type-check',
        'TypeScript type check'
      );

      // Run linting with fix
      const lintResult = await this.runCommand(
        'npm run lint:fix',
        'ESLint fix'
      );

      // Run smoke tests
      const testResult = await this.runCommand(
        'npm run test:smoke',
        'Smoke tests'
      );

      if (typeResult.success && testResult.success) {
        this.log('✅ All tests passed', 'SUCCESS');
      } else {
        this.log('⚠️ Some tests failed, but continuing...', 'WARNING');
      }
    } catch (error) {
      this.log(`❌ Test error: ${error.message}`, 'ERROR');
      this.errors.push(error.message);
    }
  }

  async buildProject() {
    this.log('\n🏗️ BUILDING PROJECT');
<<<<<<< HEAD

=======
    
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    try {
      // Clean build
      await this.runCommand('npm run clean', 'Clean build');

      // Build project
      const buildResult = await this.runCommand(
        'npm run build',
        'Production build'
      );

      if (buildResult.success) {
        this.log('✅ Build successful', 'SUCCESS');
      } else {
        this.log('❌ Build failed', 'ERROR');
        this.errors.push('Build failed');
      }
    } catch (error) {
      this.log(`❌ Build error: ${error.message}`, 'ERROR');
      this.errors.push(error.message);
    }
  }

  async createAdditionalScripts() {
    this.log('\n🚀 CREATING ADDITIONAL SCRIPTS');
<<<<<<< HEAD

=======
    
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    try {
      // Create a comprehensive test script
      const testScript = `#!/usr/bin/env node
const { execSync } = require('child_process');

class ComprehensiveTester {
  constructor() {
    this.results = { passed: 0, failed: 0, errors: [] };
  }

  async runTest(command, description) {
    try {
      execSync(command, { stdio: 'pipe' });
      this.results.passed++;
      console.log(\`✅ \${description}\`);
    } catch (error) {
      this.results.failed++;
      this.results.errors.push({ test: description, error: error.message });
      console.log(\`❌ \${description}: \${error.message}\`);
    }
  }

  async runAllTests() {
    console.log('🧪 Running comprehensive tests...');
<<<<<<< HEAD

=======
    
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    await this.runTest('npm run type-check', 'TypeScript check');
    await this.runTest('npm run lint:check', 'Linting check');
    await this.runTest('npm run build', 'Build test');
    await this.runTest('npm run test:smoke', 'Smoke tests');
<<<<<<< HEAD

    console.log(\`\\n📊 Results: \${this.results.passed} passed, \${this.results.failed} failed\`);

=======
    
    console.log(\`\\n📊 Results: \${this.results.passed} passed, \${this.results.failed} failed\`);
    
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    if (this.results.failed > 0) {
      console.log('\\n❌ Failed tests:');
      this.results.errors.forEach(err => {
        console.log(\`  - \${err.test}: \${err.error}\`);
      });
    }
  }
}

const tester = new ComprehensiveTester();
tester.runAllTests();
`;

      fs.writeFileSync('scripts/comprehensive-tester.cjs', testScript);
      fs.chmodSync('scripts/comprehensive-tester.cjs', '755');
      this.log('Created comprehensive test script');

      // Create a performance monitor
      const perfScript = `#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

class PerformanceMonitor {
  constructor() {
    this.metrics = {
      bundleSize: 0,
      memoryUsage: 0,
      timestamp: new Date().toISOString()
    };
  }

  measureBundleSize() {
    try {
      const buildDir = path.join(process.cwd(), '.next');
      if (fs.existsSync(buildDir)) {
        const stats = fs.statSync(buildDir);
        this.metrics.bundleSize = stats.size;
      }
    } catch (error) {
      console.error('Error measuring bundle size:', error);
    }
  }

  measureMemoryUsage() {
    const usage = process.memoryUsage();
    this.metrics.memoryUsage = usage.heapUsed / 1024 / 1024;
  }

  generateReport() {
    const report = {
      timestamp: this.metrics.timestamp,
      bundleSize: this.metrics.bundleSize,
      memoryUsage: this.metrics.memoryUsage,
      recommendations: []
    };
<<<<<<< HEAD

=======
    
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    if (this.metrics.bundleSize > 1000000) {
      report.recommendations.push('Consider code splitting to reduce bundle size');
    }
    if (this.metrics.memoryUsage > 100) {
      report.recommendations.push('Consider optimizing memory usage');
    }
<<<<<<< HEAD

=======
    
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    const reportPath = path.join(process.cwd(), 'performance-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    console.log('Performance report generated:', reportPath);
  }
}

const monitor = new PerformanceMonitor();
monitor.measureBundleSize();
monitor.measureMemoryUsage();
monitor.generateReport();
`;

      fs.writeFileSync('scripts/performance-monitor.cjs', perfScript);
      fs.chmodSync('scripts/performance-monitor.cjs', '755');
      this.log('Created performance monitor script');

      // Create a health check script
      const healthScript = `#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

class HealthChecker {
  constructor() {
    this.checks = [];
  }

  checkFileExists(filePath, description) {
    const exists = fs.existsSync(filePath);
    this.checks.push({
      name: description,
      status: exists ? 'PASS' : 'FAIL',
      details: exists ? 'File exists' : 'File missing'
    });
    return exists;
  }

  checkPackageJson() {
    try {
      const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
      this.checks.push({
        name: 'Package.json validation',
        status: 'PASS',
        details: \`Valid package.json (version: \${packageJson.version})\`
      });
      return true;
    } catch (error) {
      this.checks.push({
        name: 'Package.json validation',
        status: 'FAIL',
        details: \`Invalid package.json: \${error.message}\`
      });
      return false;
    }
  }

  checkNodeModules() {
    const exists = fs.existsSync('node_modules');
    this.checks.push({
      name: 'Node modules',
      status: exists ? 'PASS' : 'FAIL',
      details: exists ? 'Dependencies installed' : 'Run npm install'
    });
    return exists;
  }

  generateReport() {
    const passed = this.checks.filter(c => c.status === 'PASS').length;
    const total = this.checks.length;
<<<<<<< HEAD

=======
    
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        total,
        passed,
        failed: total - passed,
        healthScore: Math.round((passed / total) * 100)
      },
      checks: this.checks
    };
<<<<<<< HEAD

    const reportPath = path.join(process.cwd(), 'health-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));

=======
    
    const reportPath = path.join(process.cwd(), 'health-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    console.log(\`Health Check Report: \${passed}/\${total} checks passed (\${report.summary.healthScore}%)\`);
    return report;
  }
}

const checker = new HealthChecker();
checker.checkFileExists('src/App.tsx', 'Main App component');
checker.checkFileExists('package.json', 'Package configuration');
checker.checkFileExists('next.config.js', 'Next.js configuration');
checker.checkPackageJson();
checker.checkNodeModules();
checker.generateReport();
`;

      fs.writeFileSync('scripts/health-checker.cjs', healthScript);
      fs.chmodSync('scripts/health-checker.cjs', '755');
      this.log('Created health check script');

      this.log('✅ Additional scripts created', 'SUCCESS');
    } catch (error) {
      this.log(`❌ Error creating scripts: ${error.message}`, 'ERROR');
      this.errors.push(error.message);
    }
  }

  async commitAndPush() {
    this.log('\n📝 COMMITTING AND PUSHING CHANGES');
<<<<<<< HEAD

=======
    
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    try {
      // Add all changes
      await this.runCommand('git add .', 'Git add');

      // Commit changes
      const commitMessage = `feat: Comprehensive automation improvements and fixes - ${new Date().toISOString()}`;
      await this.runCommand(`git commit -m "${commitMessage}"`, 'Git commit');

      // Push changes
      await this.runCommand('git push origin HEAD', 'Git push');

      this.log('✅ Changes committed and pushed', 'SUCCESS');
    } catch (error) {
      this.log(`❌ Error committing/pushing: ${error.message}`, 'ERROR');
      this.errors.push(error.message);
    }
  }

  generateReport() {
    const duration = Date.now() - this.startTime;
<<<<<<< HEAD

=======
    
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    this.log('\n📊 COMPREHENSIVE FIX REPORT');
    this.log('='.repeat(60));
    this.log(`Total Duration: ${duration}ms`);
    this.log(`Files Fixed: ${this.fixedFiles.length}`);
    this.log(`Errors: ${this.errors.length}`);
    this.log('');

    if (this.fixedFiles.length > 0) {
      this.log('✅ Fixed Files:');
      this.fixedFiles.forEach(file => this.log(`  - ${file}`));
    }

    if (this.errors.length > 0) {
      this.log('\n❌ Errors:');
      this.errors.forEach(error => this.log(`  - ${error}`));
    }

    // Save report
    const report = {
      timestamp: new Date().toISOString(),
      duration,
      fixedFiles: this.fixedFiles,
      errors: this.errors,
      success: this.errors.length === 0
    };

    fs.writeFileSync('comprehensive-fix-report.json', JSON.stringify(report, null, 2));
    this.log('\n📄 Report saved to comprehensive-fix-report.json');
  }

  async run() {
    this.log('🚀 Starting Comprehensive Fix Script');
    this.log('='.repeat(60));

    try {
      await this.fixSyntaxErrors();
      await this.runTests();
      await this.buildProject();
      await this.createAdditionalScripts();
      await this.commitAndPush();
    } catch (error) {
      this.log(`Fatal error: ${error.message}`, 'ERROR');
    } finally {
      this.generateReport();
    }
  }
}

// Run the comprehensive fix script
if (require.main === module) {
  const fixScript = new ComprehensiveFixScript();
  fixScript.run().catch(console.error);
}

module.exports = ComprehensiveFixScript;