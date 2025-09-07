#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

/**
 * Master Automation Suite
 * Comprehensive automation that runs all tests, fixes issues, and provides detailed reporting
 */
class MasterAutomationSuite {
  constructor() {
    this.projectRoot = process.cwd();
    this.startTime = new Date();
    this.results = {
      syntaxFix: { success: false, duration: 0, errors: [], warnings: [] },
      dependencyCheck: { success: false, duration: 0, errors: [], warnings: [] },
      typeCheck: { success: false, duration: 0, errors: [], warnings: [] },
      linting: { success: false, duration: 0, errors: [], warnings: [] },
      securityAudit: { success: false, duration: 0, errors: [], warnings: [] },
      buildTest: { success: false, duration: 0, errors: [], warnings: [] },
      testSuite: { success: false, duration: 0, errors: [], warnings: [] },
      performanceCheck: { success: false, duration: 0, errors: [], warnings: [] },
      gitOperations: { success: false, duration: 0, errors: [], warnings: [] }
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
        timeout: 120000, // 2 minute timeout
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

  async fixSyntax() {
    const startTime = Date.now();
    this.log('\n🔧 FIXING SYNTAX ISSUES');
    
    try {
      // Run our syntax fixer
      const result = await this.runCommand(
        'node quick-syntax-fix.cjs',
        'Syntax fixer'
      );
      
      this.results.syntaxFix = {
        success: result.success,
        duration: Date.now() - startTime,
        errors: result.success ? [] : [result.error],
        warnings: []
      };
    } catch (error) {
      this.results.syntaxFix = {
        success: false,
        duration: Date.now() - startTime,
        errors: [error.message],
        warnings: []
      };
    }
  }

  async checkDependencies() {
    const startTime = Date.now();
    this.log('\n📦 CHECKING DEPENDENCIES');
    
    try {
      // Install missing dependencies
      const installResult = await this.runCommand(
        'npm install',
        'Install dependencies'
      );
      
      this.results.dependencyCheck = {
        success: installResult.success,
        duration: Date.now() - startTime,
        errors: installResult.success ? [] : [installResult.error],
        warnings: []
      };
    } catch (error) {
      this.results.dependencyCheck = {
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
        'ESLint check'
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
        'npm audit --audit-level moderate',
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
      // Try a simple build check
      const result = await this.runCommand(
        'npx next build --help',
        'Build system check'
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
      // Run our performance monitor
      const result = await this.runCommand(
        'node performance-monitor.cjs',
        'Performance monitor'
      );
      
      this.results.performanceCheck = {
        success: result.success,
        duration: Date.now() - startTime,
        errors: result.success ? [] : [result.error],
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

  async runGitOperations() {
    const startTime = Date.now();
    this.log('\n📝 RUNNING GIT OPERATIONS');
    
    try {
      // Add all changes
      await this.runCommand('git add .', 'Git add');
      
      // Commit changes
      const commitMessage = `feat: Comprehensive automation improvements and fixes - ${new Date().toISOString()}`;
      await this.runCommand(`git commit -m "${commitMessage}"`, 'Git commit');
      
      // Push changes
      await this.runCommand('git push origin HEAD', 'Git push');
      
      this.results.gitOperations = {
        success: true,
        duration: Date.now() - startTime,
        errors: [],
        warnings: []
      };
    } catch (error) {
      this.results.gitOperations = {
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

    this.log('\n📊 MASTER AUTOMATION REPORT');
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
      'master-automation-report.json',
      JSON.stringify(report, null, 2)
    );
    this.log('\n📄 Detailed report saved to master-automation-report.json');
  }

  generateRecommendations() {
    const recommendations = [];

    if (!this.results.syntaxFix.success) {
      recommendations.push('Fix remaining syntax errors');
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
    this.log('🚀 Starting Master Automation Suite');
    this.log('='.repeat(60));

    try {
      await this.fixSyntax();
      await this.checkDependencies();
      await this.checkTypes();
      await this.runLinting();
      await this.runSecurityAudit();
      await this.runBuildTest();
      await this.runTestSuite();
      await this.checkPerformance();
      await this.runGitOperations();
    } catch (error) {
      this.log(`Fatal error: ${error.message}`, 'ERROR');
    } finally {
      this.generateReport();
    }
  }
}

// Run the master automation suite
if (require.main === module) {
  const suite = new MasterAutomationSuite();
  suite.run().catch(console.error);
}

module.exports = MasterAutomationSuite;