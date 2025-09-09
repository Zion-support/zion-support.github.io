#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

class LintFixer {
  constructor() {
    this.logFile = path.join(__dirname, '../logs/lint-fixer.log');
    this.fixedCount = 0;
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}\n`;
    console.log(logMessage.trim());
    
    const logsDir = path.dirname(this.logFile);
    if (!fs.existsSync(logsDir)) {
      fs.mkdirSync(logsDir, { recursive: true });
    }
    
    fs.appendFileSync(this.logFile, logMessage);
  }

  async runLintFix() {
    try {
      this.log('Running automatic lint fixes...');
      
      // Fix ESLint errors
      execSync('npx eslint app/ components/ lib/ utils/ --ext .ts,.tsx,.js,.jsx --fix', {
        encoding: 'utf8',
        cwd: process.cwd()
      });
      
      this.log('ESLint fixes applied successfully.');
      this.fixedCount++;
      
      // Format code with Prettier
      try {
        execSync('npx prettier --write app/ components/ lib/ utils/', {
          encoding: 'utf8',
          cwd: process.cwd()
        });
        this.log('Code formatted with Prettier.');
      } catch (prettierError) {
        this.log(`Prettier formatting failed: ${prettierError.message}`);
      }
      
      return true;
    } catch (error) {
      this.log(`Lint fixing failed: ${error.message}`);
      return false;
    }
  }

  async checkAndFix() {
    this.log('Starting lint fix cycle...');
    
    const success = await this.runLintFix();
    
    if (success) {
      this.log(`Lint fix cycle completed. Total fixes applied: ${this.fixedCount}`);
    } else {
      this.log('Lint fix cycle failed.');
    }
  }

  async start() {
    this.log('Lint Fixer started');
    
    await this.checkAndFix();
    
    // Run every 6 hours
    setInterval(async () => {
      await this.checkAndFix();
    }, 6 * 60 * 60 * 1000);
    
    process.on('SIGINT', () => {
      this.log('Lint Fixer stopped');
      process.exit(0);
    });
  }
}

const fixer = new LintFixer();
fixer.start().catch(console.error);