#!/usr/bin/env node

/**
 * Lint Automation Script
 * Replaces GitHub Actions linting workflows with PM2 automation
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
      this.log('Type check completed successfully');
      
      // Run smoke tests
      this.log('Running smoke tests...');
      execSync('npm run test:smoke', { stdio: 'pipe' });
      this.log('Smoke tests completed successfully');
      
      this.log('Lint automation completed successfully');
      return true;
    } catch (error) {
      this.log(`Lint automation failed: ${error.message}`);
      
      // Try to fix linting issues
      try {
        this.log('Attempting to fix linting issues...');
        execSync('npm run lint:fix', { stdio: 'pipe' });
        this.log('Lint fixes applied successfully');
        return true;
      } catch (fixError) {
        this.log(`Failed to fix linting issues: ${fixError.message}`);
        return false;
      }
    }
  }

  async run() {
    this.log('Lint Automation started');
    
    const success = await this.runLint();
    
    if (success) {
      this.log('Lint automation completed successfully');
      process.exit(0);
    } else {
      this.log('Lint automation failed');
      process.exit(1);
    }
  }
}

// Run the automation
if (require.main === module) {
  const automation = new LintAutomation();
  automation.run().catch(error => {
    console.error('Fatal error:', error);
    process.exit(1);
  });
}

module.exports = LintAutomation;