#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

class ErrorMonitor {
  constructor() {
    this.logFile = path.join(__dirname, '../logs/error-monitor.log');
    this.errorCount = 0;
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

  async runLinting() {
    try {
      this.log('Running ESLint check...');
      const result = execSync('npx eslint app/ components/ lib/ utils/ --ext .ts,.tsx,.js,.jsx --format json', {
        encoding: 'utf8',
        cwd: process.cwd()
      });
      
      const errors = JSON.parse(result);
      this.log(`ESLint completed. Found ${errors.length} issues.`);
      return errors;
    } catch (error) {
      this.log(`ESLint failed: ${error.message}`);
      return [];
    }
  }

  async runTypeCheck() {
    try {
      this.log('Running TypeScript type check...');
      execSync('npx tsc --noEmit', {
        encoding: 'utf8',
        cwd: process.cwd()
      });
      this.log('TypeScript type check passed.');
      return [];
    } catch (error) {
      this.log(`TypeScript type check failed: ${error.message}`);
      return [error.message];
    }
  }

  async fixLintingErrors() {
    try {
      this.log('Attempting to fix linting errors...');
      execSync('npx eslint app/ components/ lib/ utils/ --ext .ts,.tsx,.js,.jsx --fix', {
        encoding: 'utf8',
        cwd: process.cwd()
      });
      this.log('Linting errors fixed successfully.');
      return true;
    } catch (error) {
      this.log(`Failed to fix linting errors: ${error.message}`);
      return false;
    }
  }

  async checkForErrors() {
    this.log('Starting error monitoring cycle...');
    
    const lintErrors = await this.runLinting();
    const typeErrors = await this.runTypeCheck();
    
    const totalErrors = lintErrors.length + typeErrors.length;
    
    if (totalErrors > 0) {
      this.errorCount++;
      this.log(`Found ${totalErrors} total errors. Error count: ${this.errorCount}`);
      
      if (lintErrors.length > 0) {
        await this.fixLintingErrors();
      }
    } else {
      this.log('No errors detected. System is healthy.');
      this.errorCount = 0;
    }
  }

  async start() {
    this.log('Error Monitor started');
    
    await this.checkForErrors();
    
    setInterval(async () => {
      await this.checkForErrors();
    }, 30 * 60 * 1000);
    
    process.on('SIGINT', () => {
      this.log('Error Monitor stopped');
      process.exit(0);
    });
  }
}

const monitor = new ErrorMonitor();
monitor.start().catch(console.error);