#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');

class EnhancedAutomationRunner {
  constructor() {
    this.projectRoot = process.cwd();
    this.reportFile = path.join(this.projectRoot, 'enhanced-automation-runner-report.json');
    this.automations = [];
    this.results = [];
    this.startTime = Date.now();
  }

  async start() {
    console.log('🚀 Starting Enhanced Automation Runner...');
    
    try {
      // Initialize automations
      this.initializeAutomations();
      
      // Run all automations
      await this.runAllAutomations();
      
      // Generate comprehensive report
      await this.generateReport();
      
      console.log('✅ Enhanced Automation Runner completed successfully!');
      
    } catch (error) {
      console.error('❌ Error in Enhanced Automation Runner:', error);
      await this.generateReport();
    }
  }

  initializeAutomations() {
    console.log('🔧 Initializing automations...');
    
    this.automations = [
      {
        name: 'comprehensive-error-fixer',
        script: './scripts/automation/comprehensive-error-fixer.cjs',
        priority: 1,
        description: 'Fixes all types of project errors comprehensively'
      },
      {
        name: 'typescript-error-fixer',
        script: './scripts/automation/typescript-error-fixer.cjs',
        priority: 2,
        description: 'Fixes TypeScript-specific errors'
      },
      {
        name: 'general-error-fixer',
        script: './scripts/automation/error-fixer.cjs',
        priority: 3,
        description: 'Fixes general linting and syntax errors'
      },
      {
        name: 'console-error-fixer',
        script: './scripts/automation/console-error-fixer.cjs',
        priority: 4,
        description: 'Fixes console statement issues'
      }
    ];

    // Sort by priority
    this.automations.sort((a, b) => a.priority - b.priority);
  }

  async runAllAutomations() {
    console.log('🔄 Running all automations...');
    
    for (const automation of this.automations) {
      try {
        console.log(`\n🔧 Running ${automation.name}...`);
        const result = await this.runAutomation(automation);
        this.results.push(result);
        
        if (result.success) {
          console.log(`✅ ${automation.name} completed successfully`);
        } else {
          console.log(`⚠️ ${automation.name} completed with issues`);
        }
        
      } catch (error) {
        console.error(`❌ ${automation.name} failed:`, error.message);
        this.results.push({
          name: automation.name,
          success: false,
          error: error.message,
          timestamp: new Date().toISOString()
        });
      }
    }
  }

  async runAutomation(automation) {
    return new Promise((resolve, reject) => {
      const startTime = Date.now();
      
      try {
        // Run the automation script
        const result = execSync(`node ${automation.script}`, { 
          encoding: 'utf8',
          cwd: this.projectRoot,
          stdio: 'pipe'
        });
        
        const endTime = Date.now();
        const duration = endTime - startTime;
        
        // Check if automation generated a report
        const reportFile = this.getReportFile(automation.name);
        let report = null;
        
        if (fs.existsSync(reportFile)) {
          try {
            report = JSON.parse(fs.readFileSync(reportFile, 'utf8'));
          } catch (parseError) {
            console.warn(`⚠️ Could not parse report for ${automation.name}`);
          }
        }
        
        resolve({
          name: automation.name,
          success: true,
          duration: `${duration}ms`,
          timestamp: new Date().toISOString(),
          output: result,
          report: report
        });
        
      } catch (error) {
        const endTime = Date.now();
        const duration = endTime - startTime;
        
        resolve({
          name: automation.name,
          success: false,
          duration: `${duration}ms`,
          timestamp: new Date().toISOString(),
          error: error.message,
          output: error.stdout || error.stderr || ''
        });
      }
    });
  }

  getReportFile(automationName) {
    const reportMappings = {
      'comprehensive-error-fixer': 'comprehensive-error-fixer-report.json',
      'typescript-error-fixer': 'typescript-error-fixer-report.json',
      'general-error-fixer': 'general-error-fixer-report.json',
      'console-error-fixer': 'console-error-fixer-report.json'
    };
    
    return path.join(this.projectRoot, reportMappings[automationName] || 'unknown-report.json');
  }

  async generateReport() {
    const endTime = Date.now();
    const totalDuration = endTime - this.startTime;
    
    // Collect all individual reports
    const allReports = [];
    for (const automation of this.automations) {
      const reportFile = this.getReportFile(automation.name);
      if (fs.existsSync(reportFile)) {
        try {
          const report = JSON.parse(fs.readFileSync(reportFile, 'utf8'));
          allReports.push({
            automation: automation.name,
            report: report
          });
        } catch (parseError) {
          console.warn(`⚠️ Could not parse report for ${automation.name}`);
        }
      }
    }
    
    // Calculate overall statistics
    const successfulAutomations = this.results.filter(r => r.success).length;
    const totalErrorsFixed = allReports.reduce((total, item) => {
      if (item.report.summary && item.report.summary.fixedFiles) {
        return total + item.report.summary.fixedFiles;
      }
      return total;
    }, 0);
    
    const totalRemainingErrors = allReports.reduce((total, item) => {
      if (item.report.summary && item.report.summary.remainingErrors !== undefined) {
        return total + item.report.summary.remainingErrors;
      }
      return total;
    }, 0);
    
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        totalAutomations: this.automations.length,
        successfulAutomations: successfulAutomations,
        failedAutomations: this.automations.length - successfulAutomations,
        totalDuration: `${totalDuration}ms`,
        totalErrorsFixed: totalErrorsFixed,
        totalRemainingErrors: totalRemainingErrors,
        successRate: `${Math.round((successfulAutomations / this.automations.length) * 100)}%`
      },
      automations: this.results,
      individualReports: allReports,
      recommendations: this.generateRecommendations(allReports)
    };
    
    fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2));
    console.log(`📊 Enhanced Automation Runner report generated: ${this.reportFile}`);
    
    // Print summary
    this.printSummary(report);
  }

  generateRecommendations(allReports) {
    const recommendations = [];
    
    // Check for high error counts
    const highErrorCounts = allReports.filter(item => 
      item.report.summary && 
      item.report.summary.remainingErrors > 100
    );
    
    if (highErrorCounts.length > 0) {
      recommendations.push({
        type: 'high_error_count',
        message: 'Some automations have high remaining error counts. Consider manual review.',
        automations: highErrorCounts.map(item => item.automation)
      });
    }
    
    // Check for failed automations
    const failedAutomations = this.results.filter(r => !r.success);
    if (failedAutomations.length > 0) {
      recommendations.push({
        type: 'failed_automations',
        message: 'Some automations failed to complete. Check logs for details.',
        automations: failedAutomations.map(r => r.name)
      });
    }
    
    // Check for console statements
    const consoleReports = allReports.filter(item => 
      item.automation === 'console-error-fixer'
    );
    
    if (consoleReports.length > 0 && consoleReports[0].report.summary.totalConsoleErrors > 0) {
      recommendations.push({
        type: 'console_statements',
        message: 'Console statements detected. Consider implementing proper logging.',
        count: consoleReports[0].report.summary.totalConsoleErrors
      });
    }
    
    // Check for TypeScript errors
    const tsReports = allReports.filter(item => 
      item.automation === 'typescript-error-fixer'
    );
    
    if (tsReports.length > 0 && tsReports[0].report.summary.remainingErrors > 50) {
      recommendations.push({
        type: 'typescript_errors',
        message: 'High number of TypeScript errors remaining. Consider type annotation improvements.',
        count: tsReports[0].report.summary.remainingErrors
      });
    }
    
    return recommendations;
  }

  printSummary(report) {
    console.log('\n📊 ENHANCED AUTOMATION RUNNER SUMMARY');
    console.log('=====================================');
    console.log(`Total Automations: ${report.summary.totalAutomations}`);
    console.log(`Successful: ${report.summary.successfulAutomations}`);
    console.log(`Failed: ${report.summary.failedAutomations}`);
    console.log(`Success Rate: ${report.summary.successRate}`);
    console.log(`Total Duration: ${report.summary.totalDuration}`);
    console.log(`Errors Fixed: ${report.summary.totalErrorsFixed}`);
    console.log(`Remaining Errors: ${report.summary.totalRemainingErrors}`);
    
    if (report.recommendations.length > 0) {
      console.log('\n💡 RECOMMENDATIONS:');
      report.recommendations.forEach((rec, index) => {
        console.log(`${index + 1}. ${rec.message}`);
      });
    }
    
    console.log('\n📁 Detailed report saved to:', this.reportFile);
  }
}

// Auto-start if run directly
if (require.main === module) {
  const runner = new EnhancedAutomationRunner();
  runner.start();
}

module.exports = EnhancedAutomationRunner;