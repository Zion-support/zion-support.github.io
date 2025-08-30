#!/usr/bin/env node

/**
 * Comprehensive Code Quality Automator - Orchestrates all error fixing scripts
 * Runs every 2 hours to maintain high code quality standards
 */

const { execSync, spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

class ComprehensiveCodeQualityAutomator {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'comprehensive-code-quality-report.json');
    this.startTime = new Date();
    this.results = {
      eslint: { success: false, errorsFixed: 0, remainingErrors: 0 },
      typescript: { success: false, errorsFixed: 0, remainingErrors: 0 },
      unusedImports: { success: false, itemsRemoved: 0 },
      build: { success: false, buildTime: 0 },
      test: { success: false, testsPassed: 0, testsFailed: 0 }
    };
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] [${level}] ${message}`);
  }

  async runComprehensiveQualityCheck() {
    try {
      this.log('🚀 Starting Comprehensive Code Quality Automation...');
      this.log('This will run all quality checks and fixes automatically');
      
      // Step 1: ESLint Auto-Fix
      await this.runESLintAutoFix();
      
      // Step 2: TypeScript Error Fix
      await this.runTypeScriptErrorFix();
      
      // Step 3: Unused Import Cleanup
      await this.runUnusedImportCleanup();
      
      // Step 4: Build Test
      await this.runBuildTest();
      
      // Step 5: Test Suite
      await this.runTestSuite();
      
      // Step 6: Generate Comprehensive Report
      await this.generateComprehensiveReport();
      
      this.log('✅ Comprehensive Code Quality Automation completed successfully!');
      
    } catch (error) {
      this.log(`❌ Error during comprehensive quality check: ${error.message}`, 'ERROR');
    }
  }

  async runESLintAutoFix() {
    try {
      this.log('🔧 Running ESLint Auto-Fix...');
      
      const eslintFixer = require('./eslint-auto-fixer.cjs');
      const fixer = new eslintFixer();
      
      await fixer.runESLintFix();
      
      // Read the report
      const reportPath = path.join(this.projectRoot, 'eslint-fixes-report.json');
      if (fs.existsSync(reportPath)) {
        const report = JSON.parse(fs.readFileSync(reportPath, 'utf8'));
        this.results.eslint = {
          success: report.success,
          errorsFixed: report.fixedErrors,
          remainingErrors: report.remainingErrors
        };
        
        this.log(`✅ ESLint: Fixed ${report.fixedErrors} errors, ${report.remainingErrors} remaining`);
      }
      
    } catch (error) {
      this.log(`❌ ESLint Auto-Fix failed: ${error.message}`, 'ERROR');
      this.results.eslint.success = false;
    }
  }

  async runTypeScriptErrorFix() {
    try {
      this.log('🔧 Running TypeScript Error Fix...');
      
      const typescriptFixer = require('./typescript-error-fixer.cjs');
      const fixer = new typescriptFixer();
      
      await fixer.runTypeScriptFix();
      
      // Read the report
      const reportPath = path.join(this.projectRoot, 'typescript-fixes-report.json');
      if (fs.existsSync(reportPath)) {
        const report = JSON.parse(fs.readFileSync(reportPath, 'utf8'));
        this.results.typescript = {
          success: report.success,
          errorsFixed: report.fixedErrors,
          remainingErrors: report.remainingErrors
        };
        
        this.log(`✅ TypeScript: Fixed ${report.fixedErrors} errors, ${report.remainingErrors} remaining`);
      }
      
    } catch (error) {
      this.log(`❌ TypeScript Error Fix failed: ${error.message}`, 'ERROR');
      this.results.typescript.success = false;
    }
  }

  async runUnusedImportCleanup() {
    try {
      this.log('🔧 Running Unused Import Cleanup...');
      
      const unusedImportCleaner = require('./unused-import-cleaner.cjs');
      const cleaner = new unusedImportCleaner();
      
      await cleaner.runUnusedImportCleanup();
      
      // Read the report
      const reportPath = path.join(this.projectRoot, 'unused-imports-cleanup-report.json');
      if (fs.existsSync(reportPath)) {
        const report = JSON.parse(fs.readFileSync(reportPath, 'utf8'));
        this.results.unusedImports = {
          success: report.success,
          itemsRemoved: report.totalRemoved
        };
        
        this.log(`✅ Unused Imports: Removed ${report.totalRemoved} items`);
      }
      
    } catch (error) {
      this.log(`❌ Unused Import Cleanup failed: ${error.message}`, 'ERROR');
      this.results.unusedImports.success = false;
    }
  }

  async runBuildTest() {
    try {
      this.log('🔧 Running Build Test...');
      
      const buildStartTime = Date.now();
      
      const result = await this.runCommand('npm run build');
      
      if (result.success) {
        const buildTime = Date.now() - buildStartTime;
        this.results.build = {
          success: true,
          buildTime: buildTime
        };
        
        this.log(`✅ Build: Successful in ${buildTime}ms`);
      } else {
        this.results.build = {
          success: false,
          buildTime: 0
        };
        
        this.log(`❌ Build: Failed - ${result.stderr}`);
      }
      
    } catch (error) {
      this.log(`❌ Build Test failed: ${error.message}`, 'ERROR');
      this.results.build.success = false;
    }
  }

  async runTestSuite() {
    try {
      this.log('🔧 Running Test Suite...');
      
      const result = await this.runCommand('npm test -- --passWithNoTests --silent');
      
      if (result.success) {
        // Parse test results
        const testOutput = result.stdout;
        const passedMatch = testOutput.match(/(\d+)\s+passing/);
        const failedMatch = testOutput.match(/(\d+)\s+failing/);
        
        const testsPassed = passedMatch ? parseInt(passedMatch[1]) : 0;
        const testsFailed = failedMatch ? parseInt(failedMatch[1]) : 0;
        
        this.results.test = {
          success: testsFailed === 0,
          testsPassed: testsPassed,
          testsFailed: testsFailed
        };
        
        this.log(`✅ Tests: ${testsPassed} passed, ${testsFailed} failed`);
      } else {
        this.results.test = {
          success: false,
          testsPassed: 0,
          testsFailed: 0
        };
        
        this.log(`❌ Tests: Failed to run - ${result.stderr}`);
      }
      
    } catch (error) {
      this.log(`❌ Test Suite failed: ${error.message}`, 'ERROR');
      this.results.test.success = false;
    }
  }

  async runCommand(command) {
    return new Promise((resolve) => {
      const [cmd, ...args] = command.split(' ');
      const child = spawn(cmd, args, {
        cwd: this.projectRoot,
        stdio: 'pipe'
      });

      let stdout = '';
      let stderr = '';

      child.stdout.on('data', (data) => {
        stdout += data.toString();
      });

      child.stderr.on('data', (data) => {
        stderr += data.toString();
      });

      child.on('close', (code) => {
        resolve({
          success: code === 0,
          stdout,
          stderr,
          code
        });
      });
    });
  }

  async generateComprehensiveReport() {
    const endTime = new Date();
    const duration = endTime - this.startTime;
    
    // Calculate overall success rate
    const totalChecks = Object.keys(this.results).length;
    const successfulChecks = Object.values(this.results).filter(r => r.success).length;
    const successRate = (successfulChecks / totalChecks) * 100;
    
    // Calculate total improvements
    const totalErrorsFixed = this.results.eslint.errorsFixed + this.results.typescript.errorsFixed;
    const totalItemsRemoved = this.results.unusedImports.itemsRemoved;
    
    const report = {
      timestamp: endTime.toISOString(),
      duration: duration.getTime(),
      overallSuccess: successRate >= 80, // 80% threshold for overall success
      successRate: successRate.toFixed(2),
      summary: {
        totalChecks: totalChecks,
        successfulChecks: successfulChecks,
        failedChecks: totalChecks - successfulChecks
      },
      results: this.results,
      improvements: {
        totalErrorsFixed: totalErrorsFixed,
        totalItemsRemoved: totalItemsRemoved,
        totalImprovements: totalErrorsFixed + totalItemsRemoved
      },
      recommendations: this.generateRecommendations(),
      details: {
        startTime: this.startTime.toISOString(),
        endTime: endTime.toISOString(),
        projectRoot: this.projectRoot
      }
    };
    
    // Save comprehensive report
    fs.writeFileSync(this.logFile, JSON.stringify(report, null, 2));
    
    // Log comprehensive summary
    this.log('📊 === Comprehensive Code Quality Report ===');
    this.log(`Overall Success Rate: ${successRate.toFixed(2)}%`);
    this.log(`Total Errors Fixed: ${totalErrorsFixed}`);
    this.log(`Total Items Removed: ${totalItemsRemoved}`);
    this.log(`Total Improvements: ${report.improvements.totalImprovements}`);
    this.log(`Duration: ${duration.getTime()}ms`);
    this.log(`Report saved to: ${this.logFile}`);
    
    // Log individual results
    this.log('\n📋 Individual Results:');
    Object.entries(this.results).forEach(([key, result]) => {
      const status = result.success ? '✅' : '❌';
      this.log(`${status} ${key}: ${JSON.stringify(result)}`);
    });
    
    // Log recommendations
    if (report.recommendations.length > 0) {
      this.log('\n💡 Recommendations:');
      report.recommendations.forEach((rec, index) => {
        this.log(`${index + 1}. ${rec}`);
      });
    }
    
    return report;
  }

  generateRecommendations() {
    const recommendations = [];
    
    // ESLint recommendations
    if (this.results.eslint.remainingErrors > 0) {
      recommendations.push(`Review and manually fix remaining ${this.results.eslint.remainingErrors} ESLint errors`);
    }
    
    // TypeScript recommendations
    if (this.results.typescript.remainingErrors > 0) {
      recommendations.push(`Address remaining ${this.results.typescript.remainingErrors} TypeScript compilation errors`);
    }
    
    // Build recommendations
    if (!this.results.build.success) {
      recommendations.push('Investigate build failures and fix compilation issues');
    }
    
    // Test recommendations
    if (!this.results.test.success) {
      recommendations.push('Fix failing tests to ensure code reliability');
    }
    
    // General recommendations
    if (this.results.unusedImports.itemsRemoved > 0) {
      recommendations.push('Consider implementing pre-commit hooks to prevent unused imports');
    }
    
    if (recommendations.length === 0) {
      recommendations.push('Code quality is excellent! Consider implementing additional quality gates');
    }
    
    return recommendations;
  }

  async runQuickFix() {
    try {
      this.log('⚡ Running Quick Fix (ESLint + TypeScript only)...');
      
      await this.runESLintAutoFix();
      await this.runTypeScriptErrorFix();
      
      this.log('✅ Quick Fix completed!');
      
    } catch (error) {
      this.log(`❌ Quick Fix failed: ${error.message}`, 'ERROR');
    }
  }

  async runFullQualityCheck() {
    try {
      this.log('🔍 Running Full Quality Check (all checks + build + tests)...');
      
      await this.runComprehensiveQualityCheck();
      
      this.log('✅ Full Quality Check completed!');
      
    } catch (error) {
      this.log(`❌ Full Quality Check failed: ${error.message}`, 'ERROR');
    }
  }
}

// Main execution
if (require.main === module) {
  const automator = new ComprehensiveCodeQualityAutomator();
  
  // Check command line arguments
  const args = process.argv.slice(2);
  
  if (args.includes('--quick')) {
    automator.runQuickFix().catch(console.error);
  } else if (args.includes('--full')) {
    automator.runFullQualityCheck().catch(console.error);
  } else {
    // Default: comprehensive check
    automator.runComprehensiveQualityCheck().catch(console.error);
  }
}

module.exports = ComprehensiveCodeQualityAutomator;