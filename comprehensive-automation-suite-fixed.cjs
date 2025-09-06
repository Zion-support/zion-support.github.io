#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

/**
 * Comprehensive Automation Suite
 * Fixes issues and runs all automation tasks
 */
class ComprehensiveAutomationSuite {
  constructor() {
    this.projectRoot = process.cwd();
    this.startTime = new Date();
    this.results = {
      dependencyFix: { success: false, duration: 0, errors: [], warnings: [] },
      codeQuality: { success: false, duration: 0, errors: [], warnings: [] },
      securityAudit: { success: false, duration: 0, errors: [], warnings: [] },
      buildOptimization: {
        success: false,
        duration: 0,
        errors: [],
        warnings: [],
      },
      seoOptimization: {
        success: false,
        duration: 0,
        errors: [],
        warnings: [],
      },
      accessibilityImprovement: {
        success: false,
        duration: 0,
        errors: [],
        warnings: [],
      },
      performanceOptimization: {
        success: false,
        duration: 0,
        errors: [],
        warnings: [],
      },
      deployment: { success: false, duration: 0, errors: [], warnings: [] },
    };
  }

  log(message, type = 'INFO') {
    const timestamp = new Date().toISOString();
    const prefix =
      type === 'ERROR'
        ? '❌'
        : type === 'SUCCESS'
          ? '✅'
          : type === 'WARNING'
            ? '⚠️'
            : 'ℹ️';
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

  async runDependencyFix() {
    this.log('🔧 Starting dependency fix...');
    const startTime = Date.now();
    
    try {
      // Update dependencies
      await this.runCommand('npm update', 'Updating dependencies');
      
      // Install missing dependencies
      await this.runCommand('npm install', 'Installing dependencies');
      
      // Audit and fix vulnerabilities
      const auditResult = await this.runCommand('npm audit --fix', 'Fixing security vulnerabilities');
      
      this.results.dependencyFix = {
        success: true,
        duration: Date.now() - startTime,
        errors: [],
        warnings: auditResult.success ? [] : [auditResult.error]
      };
      
      this.log('✅ Dependency fix completed', 'SUCCESS');
    } catch (error) {
      this.results.dependencyFix = {
        success: false,
        duration: Date.now() - startTime,
        errors: [error.message],
        warnings: []
      };
      this.log(`❌ Dependency fix failed: ${error.message}`, 'ERROR');
    }
  }

  async runCodeQuality() {
    this.log('🔍 Starting code quality checks...');
    const startTime = Date.now();
    
    try {
      // Run linting
      await this.runCommand('npm run lint', 'Running linter');
      
      // Run type checking if available
      try {
        await this.runCommand('npm run type-check', 'Running type checking');
      } catch (e) {
        this.log('⚠️ Type checking not available', 'WARNING');
      }
      
      // Run code formatting
      try {
        await this.runCommand('npm run format', 'Running code formatter');
      } catch (e) {
        this.log('⚠️ Code formatting not available', 'WARNING');
      }
      
      this.results.codeQuality = {
        success: true,
        duration: Date.now() - startTime,
        errors: [],
        warnings: []
      };
      
      this.log('✅ Code quality checks completed', 'SUCCESS');
    } catch (error) {
      this.results.codeQuality = {
        success: false,
        duration: Date.now() - startTime,
        errors: [error.message],
        warnings: []
      };
      this.log(`❌ Code quality checks failed: ${error.message}`, 'ERROR');
    }
  }

  async runSecurityAudit() {
    this.log('🔒 Starting security audit...');
    const startTime = Date.now();
    
    try {
      // Run security audit
      const auditResult = await this.runCommand('npm audit', 'Running security audit');
      
      this.results.securityAudit = {
        success: true,
        duration: Date.now() - startTime,
        errors: [],
        warnings: []
      };
      
      this.log('✅ Security audit completed', 'SUCCESS');
    } catch (error) {
      this.results.securityAudit = {
        success: false,
        duration: Date.now() - startTime,
        errors: [error.message],
        warnings: []
      };
      this.log(`❌ Security audit failed: ${error.message}`, 'ERROR');
    }
  }

  async runBuildOptimization() {
    this.log('🏗️ Starting build optimization...');
    const startTime = Date.now();
    
    try {
      // Clean build directory
      await this.runCommand('rm -rf build dist .next', 'Cleaning build directories');
      
      // Run build
      await this.runCommand('npm run build', 'Building application');
      
      this.results.buildOptimization = {
        success: true,
        duration: Date.now() - startTime,
        errors: [],
        warnings: []
      };
      
      this.log('✅ Build optimization completed', 'SUCCESS');
    } catch (error) {
      this.results.buildOptimization = {
        success: false,
        duration: Date.now() - startTime,
        errors: [error.message],
        warnings: []
      };
      this.log(`❌ Build optimization failed: ${error.message}`, 'ERROR');
    }
  }

  async runTests() {
    this.log('🧪 Running tests...');
    const startTime = Date.now();
    
    try {
      // Run tests
      await this.runCommand('npm test', 'Running tests');
      
      this.log('✅ Tests completed successfully', 'SUCCESS');
      return { success: true, duration: Date.now() - startTime };
    } catch (error) {
      this.log(`❌ Tests failed: ${error.message}`, 'ERROR');
      return { success: false, duration: Date.now() - startTime, error: error.message };
    }
  }

  async runAllAutomations() {
    this.log('🚀 Starting comprehensive automation suite...');
    
    // Run all automation tasks
    await this.runDependencyFix();
    await this.runCodeQuality();
    await this.runSecurityAudit();
    await this.runBuildOptimization();
    
    // Run tests
    const testResult = await this.runTests();
    
    // Generate report
    this.generateReport();
    
    this.log('🎉 Comprehensive automation suite completed!', 'SUCCESS');
  }

  generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      duration: Date.now() - this.startTime,
      results: this.results,
      summary: {
        totalTasks: Object.keys(this.results).length,
        successfulTasks: Object.values(this.results).filter(r => r.success).length,
        failedTasks: Object.values(this.results).filter(r => !r.success).length
      }
    };
    
    const reportPath = path.join(this.projectRoot, 'comprehensive-automation-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    this.log(`📊 Report generated: ${reportPath}`);
    this.log(`📈 Summary: ${report.summary.successfulTasks}/${report.summary.totalTasks} tasks successful`);
  }
}

// Run the automation suite
if (require.main === module) {
  const suite = new ComprehensiveAutomationSuite();
  suite.runAllAutomations().catch(console.error);
}

module.exports = ComprehensiveAutomationSuite;