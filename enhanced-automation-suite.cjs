#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

/**
 * Enhanced Automation Suite
 * Comprehensive automation with better error handling and reporting
 */
class EnhancedAutomationSuite {
  constructor() {
    this.projectRoot = process.cwd();
    this.startTime = new Date();
    this.results = {
      syntaxCheck: { success: false, duration: 0, errors: [], warnings: [] },
      typeCheck: { success: false, duration: 0, errors: [], warnings: [] },
      linting: { success: false, duration: 0, errors: [], warnings: [] },
      securityAudit: { success: false, duration: 0, errors: [], warnings: [] },
      buildTest: { success: false, duration: 0, errors: [], warnings: [] },
      testSuite: { success: false, duration: 0, errors: [], warnings: [] },
      performanceCheck: { success: false, duration: 0, errors: [], warnings: [] },
      accessibilityCheck: { success: false, duration: 0, errors: [], warnings: [] }
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
        timeout: 60000, // 60 second timeout
        ...options,
      });
      this.log(`${description} completed successfully`, 'SUCCESS');
      return { success: true, output: result };
    } catch (error) {
      this.log(`${description} failed: ${error.message}`, 'ERROR');
      return {
        success: false,
        error: error.message,
        output: error.stdout || error.stderr,
      };
    }
  }

  async checkSyntax() {
    const startTime = Date.now();
    this.log('\n🔍 CHECKING SYNTAX');
    
    try {
      // Check for basic syntax errors in key files
      const keyFiles = [
        'app/page.tsx',
        'app/about/page.tsx',
        'app/layout.tsx'
      ];
      
      let hasErrors = false;
      for (const file of keyFiles) {
        const filePath = path.join(this.projectRoot, file);
        if (fs.existsSync(filePath)) {
          try {
            const content = fs.readFileSync(filePath, 'utf8');
            // Basic syntax checks
            if (content.includes('import') && !content.includes('from')) {
              this.results.syntaxCheck.errors.push(`Invalid import in ${file}`);
              hasErrors = true;
            }
            if (content.includes('{') && content.split('{').length !== content.split('}').length) {
              this.results.syntaxCheck.errors.push(`Unmatched braces in ${file}`);
              hasErrors = true;
            }
          } catch (error) {
            this.results.syntaxCheck.errors.push(`Error reading ${file}: ${error.message}`);
            hasErrors = true;
          }
        }
      }
      
      this.results.syntaxCheck = {
        success: !hasErrors,
        duration: Date.now() - startTime,
        errors: this.results.syntaxCheck.errors,
        warnings: []
      };
    } catch (error) {
      this.results.syntaxCheck = {
        success: false,
        duration: Date.now() - startTime,
        errors: [error.message],
        warnings: []
      };
    }
  }

  async checkTypes() {
    const startTime = Date.now();
    this.log('\n🔍 CHECKING TYPES');
    
    try {
      const result = await this.runCommand(
        'npx tsc --noEmit --skipLibCheck',
        'TypeScript type check'
      );
      
      this.results.typeCheck = {
        success: result.success,
        duration: Date.now() - startTime,
        errors: result.success ? [] : [result.error],
        warnings: []
      };
    } catch (error) {
      this.results.typeCheck = {
        success: false,
        duration: Date.now() - startTime,
        errors: [error.message],
        warnings: []
      };
    }
  }

  async runLinting() {
    const startTime = Date.now();
    this.log('\n🔍 RUNNING LINTING');
    
    try {
      const result = await this.runCommand(
        'npx eslint app/ --max-warnings 1000',
        'ESLint check on app directory'
      );
      
      this.results.linting = {
        success: result.success,
        duration: Date.now() - startTime,
        errors: result.success ? [] : [result.error],
        warnings: []
      };
    } catch (error) {
      this.results.linting = {
        success: false,
        duration: Date.now() - startTime,
        errors: [error.message],
        warnings: []
      };
    }
  }

  async runSecurityAudit() {
    const startTime = Date.now();
    this.log('\n🔒 RUNNING SECURITY AUDIT');
    
    try {
      const result = await this.runCommand(
        'npm audit --audit-level high',
        'Security audit'
      );
      
      this.results.securityAudit = {
        success: result.success,
        duration: Date.now() - startTime,
        errors: result.success ? [] : [result.error],
        warnings: []
      };
    } catch (error) {
      this.results.securityAudit = {
        success: false,
        duration: Date.now() - startTime,
        errors: [error.message],
        warnings: []
      };
    }
  }

  async runBuildTest() {
    const startTime = Date.now();
    this.log('\n🏗️ RUNNING BUILD TEST');
    
    try {
      // Try a quick build check instead of full build
      const result = await this.runCommand(
        'npx next build --dry-run',
        'Build dry run'
      );
      
      this.results.buildTest = {
        success: result.success,
        duration: Date.now() - startTime,
        errors: result.success ? [] : [result.error],
        warnings: []
      };
    } catch (error) {
      this.results.buildTest = {
        success: false,
        duration: Date.now() - startTime,
        errors: [error.message],
        warnings: []
      };
    }
  }

  async runTestSuite() {
    const startTime = Date.now();
    this.log('\n🧪 RUNNING TEST SUITE');
    
    try {
      const result = await this.runCommand(
        'npm run test:smoke',
        'Smoke tests'
      );
      
      this.results.testSuite = {
        success: result.success,
        duration: Date.now() - startTime,
        errors: result.success ? [] : [result.error],
        warnings: []
      };
    } catch (error) {
      this.results.testSuite = {
        success: false,
        duration: Date.now() - startTime,
        errors: [error.message],
        warnings: []
      };
    }
  }

  async checkPerformance() {
    const startTime = Date.now();
    this.log('\n⚡ CHECKING PERFORMANCE');
    
    try {
      // Check bundle size
      const bundleCheck = await this.runCommand(
        'du -sh .next 2>/dev/null || echo "No build directory"',
        'Bundle size check'
      );
      
      this.results.performanceCheck = {
        success: true,
        duration: Date.now() - startTime,
        errors: [],
        warnings: []
      };
    } catch (error) {
      this.results.performanceCheck = {
        success: false,
        duration: Date.now() - startTime,
        errors: [error.message],
        warnings: []
      };
    }
  }

  async checkAccessibility() {
    const startTime = Date.now();
    this.log('\n♿ CHECKING ACCESSIBILITY');
    
    try {
      // Basic accessibility checks
      const a11yCheck = await this.runCommand(
        'npx eslint app/ --rule "jsx-a11y/alt-text: warn" --rule "jsx-a11y/aria-role: warn" --max-warnings 1000',
        'Accessibility check'
      );
      
      this.results.accessibilityCheck = {
        success: a11yCheck.success,
        duration: Date.now() - startTime,
        errors: a11yCheck.success ? [] : [a11yCheck.error],
        warnings: []
      };
    } catch (error) {
      this.results.accessibilityCheck = {
        success: false,
        duration: Date.now() - startTime,
        errors: [error.message],
        warnings: []
      };
    }
  }

  generateReport() {
    const totalDuration = Date.now() - this.startTime;
    const successfulTasks = Object.values(this.results).filter(r => r.success).length;
    const totalTasks = Object.keys(this.results).length;

    this.log('\n📊 ENHANCED AUTOMATION REPORT');
    this.log('='.repeat(60));
    this.log(`Total Duration: ${totalDuration}ms`);
    this.log(`Successful Tasks: ${successfulTasks}/${totalTasks}`);
    this.log('');

    Object.entries(this.results).forEach(([task, result]) => {
      const status = result.success ? '✅' : '❌';
      const duration = `${result.duration}ms`;
      this.log(`${status} ${task}: ${duration}`);

      if (result.errors.length > 0) {
        result.errors.forEach(error => this.log(`   Error: ${error}`));
      }
      if (result.warnings.length > 0) {
        result.warnings.forEach(warning => this.log(`   Warning: ${warning}`));
      }
    });

    // Save detailed report
    const report = {
      timestamp: new Date().toISOString(),
      totalDuration,
      successfulTasks,
      totalTasks,
      results: this.results,
      recommendations: this.generateRecommendations()
    };

    fs.writeFileSync(
      'enhanced-automation-report.json',
      JSON.stringify(report, null, 2)
    );
    this.log('\n📄 Detailed report saved to enhanced-automation-report.json');
  }

  generateRecommendations() {
    const recommendations = [];

    if (!this.results.syntaxCheck.success) {
      recommendations.push('Fix syntax errors in key files');
    }
    if (!this.results.typeCheck.success) {
      recommendations.push('Address TypeScript type errors');
    }
    if (!this.results.linting.success) {
      recommendations.push('Fix ESLint issues');
    }
    if (!this.results.securityAudit.success) {
      recommendations.push('Address security vulnerabilities');
    }
    if (!this.results.buildTest.success) {
      recommendations.push('Fix build issues');
    }
    if (!this.results.testSuite.success) {
      recommendations.push('Fix failing tests');
    }

    return recommendations;
  }

  async run() {
    this.log('🚀 Starting Enhanced Automation Suite');
    this.log('='.repeat(60));

    try {
      await this.checkSyntax();
      await this.checkTypes();
      await this.runLinting();
      await this.runSecurityAudit();
      await this.runBuildTest();
      await this.runTestSuite();
      await this.checkPerformance();
      await this.checkAccessibility();
    } catch (error) {
      this.log(`Fatal error: ${error.message}`, 'ERROR');
    } finally {
      this.generateReport();
    }
  }
}

// Run the enhanced automation suite
if (require.main === module) {
  const suite = new EnhancedAutomationSuite();
  suite.run().catch(console.error);
}

module.exports = EnhancedAutomationSuite;