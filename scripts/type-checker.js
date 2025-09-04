#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

class TypeChecker {
  constructor() {
    this.logFile = path.join(__dirname, '../logs/type-checker.log');
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

  async runTypeCheck() {
    try {
      this.log('Running TypeScript type check...');
      
      execSync('npx tsc --noEmit', {
        encoding: 'utf8',
        cwd: process.cwd()
      });
      
      this.log('TypeScript type check passed.');
      this.errorCount = 0;
      return true;
    } catch (error) {
      this.errorCount++;
      this.log(`TypeScript type check failed: ${error.message}`);
      
      // Generate type error report
      this.generateTypeErrorReport(error.message);
      return false;
    }
  }

  generateTypeErrorReport(errorMessage) {
    const report = {
      timestamp: new Date().toISOString(),
      errorCount: this.errorCount,
      errorMessage: errorMessage,
      status: 'failed'
    };
    
    const reportFile = path.join(__dirname, '../logs/type-error-report.json');
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    this.log(`Type error report generated: ${reportFile}`);
  }

  async checkTypes() {
    this.log('Starting type check cycle...');
    
    const success = await this.runTypeCheck();
    
    if (success) {
      this.log('Type check cycle completed successfully.');
    } else {
      this.log(`Type check cycle failed. Error count: ${this.errorCount}`);
    }
  }

  async start() {
    this.log('Type Checker started');
    
    await this.checkTypes();
    
    // Run every 4 hours
    setInterval(async () => {
      await this.checkTypes();
    }, 4 * 60 * 60 * 1000);
    
    process.on('SIGINT', () => {
      this.log('Type Checker stopped');
      process.exit(0);
    });
  }
}

const checker = new TypeChecker();
checker.start().catch(console.error);