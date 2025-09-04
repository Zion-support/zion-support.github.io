#!/usr/bin/env node

<<<<<<< HEAD
=======
/**
 * Lint Automation Script
 * Replaces GitHub Actions linting workflows
 * Runs every 6 hours via PM2 cron restart
 */

>>>>>>> cursor/migrate-github-actions-to-pm2-and-clean-up-f06c
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
<<<<<<< HEAD
    console.log(message);
=======
    console.log(logMessage.trim());
>>>>>>> cursor/migrate-github-actions-to-pm2-and-clean-up-f06c
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
<<<<<<< HEAD
      this.log('Type check completed successfully');
      
      this.log('Lint automation completed successfully');
      
    } catch (error) {
      this.log(`Lint automation failed: ${error.message}`);
      
      // Try to fix linting issues
      try {
        this.log('Attempting to fix linting issues...');
        execSync('npm run lint:fix', { stdio: 'pipe' });
        this.log('Lint fixes applied successfully');
      } catch (fixError) {
        this.log(`Failed to fix linting issues: ${fixError.message}`);
      }
    }
  }

  async start() {
    this.log('Lint automation service started');
    
    // Run initial lint
    await this.runLint();
    
    // Set up interval for periodic linting (every 6 hours)
    setInterval(async () => {
      await this.runLint();
    }, 6 * 60 * 60 * 1000);
  }
}

// Start the automation if this file is run directly
if (require.main === module) {
  const automation = new LintAutomation();
  automation.start().catch(console.error);
=======
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
>>>>>>> cursor/migrate-github-actions-to-pm2-and-clean-up-f06c
}

module.exports = LintAutomation;