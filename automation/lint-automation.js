#!/usr/bin/env node

/**
 * Lint Automation Script
 * Replaces GitHub Actions linting workflows
 * Runs every 6 hours via PM2 cron restart
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

class LintAutomation {
  constructor() {
    this.logFile = path.join(__dirname, 'logs', 'lint-automation.log');
    this.ensureLogDir();
  }

  ensureLogDir() {
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}\n`;
    console.log(logMessage.trim());
    fs.appendFileSync(this.logFile, logMessage);
  }

  async runLint() {
    try {
      this.log('Starting lint automation...');
      
      // Run ESLint
      this.log('Running ESLint...');
      execSync('npm run lint', { stdio: 'pipe' });
      this.log('ESLint completed successfully');
      
      // Run type checking
      this.log('Running TypeScript type check...');
      execSync('npm run type-check', { stdio: 'pipe' });
      this.log('TypeScript type check completed successfully');
      
      this.log('Lint automation completed successfully');
      return true;
    } catch (error) {
      this.log(`Lint automation failed: ${error.message}`);
      return false;
    }
  }

  async runLintFix() {
    try {
      this.log('Starting lint fix automation...');
      
      // Run ESLint with fix
      this.log('Running ESLint with auto-fix...');
      execSync('npm run lint:fix', { stdio: 'pipe' });
      this.log('ESLint auto-fix completed');
      
      this.log('Lint fix automation completed successfully');
      return true;
    } catch (error) {
      this.log(`Lint fix automation failed: ${error.message}`);
      return false;
    }
  }

  async run() {
    this.log('=== Lint Automation Started ===');
    
    // Try to fix linting issues first
    const fixSuccess = await this.runLintFix();
    
    // Then run linting to check for remaining issues
    const lintSuccess = await this.runLint();
    
    if (fixSuccess && lintSuccess) {
      this.log('=== Lint Automation Completed Successfully ===');
    } else {
      this.log('=== Lint Automation Completed with Issues ===');
    }
  }
}

// Run the automation
if (require.main === module) {
  const automation = new LintAutomation();
  automation.run().catch(console.error);
}

module.exports = LintAutomation;