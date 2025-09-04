#!/usr/bin/env node

/**
 * Lint Automation Script
 * Automated linting and code quality checks
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

class LintAutomation {
  constructor() {
    this.logFile = './automation/logs/lint-automation.log';
    this.errorFile = './automation/logs/lint-automation-error.log';
    this.startTime = new Date();
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}\n`;
    
    console.log(logMessage.trim());
    
    try {
      fs.appendFileSync(this.logFile, logMessage);
    } catch (error) {
      console.error('Failed to write to log file:', error.message);
    }
  }

  error(message) {
    this.log(message, 'ERROR');
    try {
      fs.appendFileSync(this.errorFile, `[${new Date().toISOString()}] [ERROR] ${message}\n`);
    } catch (err) {
      console.error('Failed to write to error log:', err.message);
    }
  }

  async runCommand(command, description) {
    this.log(`Starting: ${description}`);
    
    try {
      const result = execSync(command, { 
        encoding: 'utf8', 
        stdio: 'pipe',
        cwd: process.cwd()
      });
      
      this.log(`Completed: ${description}`);
      return { success: true, output: result };
    } catch (error) {
      this.error(`Failed: ${description} - ${error.message}`);
      return { success: false, error: error.message };
    }
  }

  async runLinting() {
    this.log('Running linting automation...');
    
    const lintTasks = [
      { cmd: 'npm run lint', desc: 'ESLint check' },
      { cmd: 'npm run lint:fix', desc: 'ESLint auto-fix' },
      { cmd: 'npm run type-check', desc: 'TypeScript type check' }
    ];

    const results = [];
    for (const task of lintTasks) {
      const result = await this.runCommand(task.cmd, task.desc);
      results.push({ ...task, result });
    }

    return results;
  }

  async generateLintReport() {
    this.log('Generating lint report...');
    
    const report = {
      timestamp: new Date().toISOString(),
      duration: Date.now() - this.startTime.getTime(),
      tasks: await this.runLinting()
    };

    const reportFile = `./automation/logs/lint-report-${Date.now()}.json`;
    try {
      fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
      this.log(`Lint report saved to: ${reportFile}`);
    } catch (error) {
      this.error(`Failed to save lint report: ${error.message}`);
    }

    return report;
  }

  async runLintAutomation() {
    this.log('Starting Lint Automation');
    this.log('='.repeat(50));

    try {
      const report = await this.generateLintReport();

      // Summary
      const successCount = report.tasks.filter(task => task.result.success).length;
      const totalCount = report.tasks.length;

      this.log('Lint Automation Summary:');
      this.log(`- Tasks completed: ${successCount}/${totalCount}`);
      this.log(`- Duration: ${report.duration}ms`);

      if (successCount === totalCount) {
        this.log('✅ All lint tasks completed successfully');
      } else {
        this.log('⚠️  Some lint tasks failed');
      }

      this.log('Lint automation completed');

    } catch (error) {
      this.error(`Lint automation failed: ${error.message}`);
      throw error;
    }
  }
}

// Main execution
async function main() {
  const lintAutomation = new LintAutomation();
  
  try {
    await lintAutomation.runLintAutomation();
  } catch (error) {
    lintAutomation.error(`Unexpected error: ${error.message}`);
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  main().catch(error => {
    console.error('Fatal error:', error);
    process.exit(1);
  });
}

module.exports = LintAutomation;