#!/usr/bin/env node

/**
 * Linting Automation - PM2 Automation Script
 * Automatically runs linting and fixes common issues
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class LintingAutomation {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'automation/logs/linting-automation.log');
    this.lintReportFile = path.join(this.projectRoot, 'automation/logs/lint-report.json');
    this.lastLint = null;
    this.lintInterval = 60000; // 1 minute
    this.isRunning = false;
    
    this.setupLogging();
    this.log('Linting Automation started');
  }

  setupLogging() {
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

  async runLinting() {
    try {
      this.log('Running linting check...');
      const startTime = Date.now();
      
      // Run linting
      const lintOutput = execSync('npm run lint', {
        encoding: 'utf8',
        stdio: 'pipe',
        cwd: this.projectRoot
      });
      
      const endTime = Date.now();
      const duration = endTime - startTime;
      
      this.log(`✅ Linting completed successfully in ${duration}ms`);
      this.lastLint = new Date();
      
      // Save report
      const report = {
        timestamp: this.lastLint.toISOString(),
        duration: duration,
        status: 'success',
        output: lintOutput
      };
      
      fs.writeFileSync(this.lintReportFile, JSON.stringify(report, null, 2));
      
      return { success: true, output: lintOutput };
    } catch (error) {
      this.log(`❌ Linting failed: ${error.message}`);
      
      // Try to fix automatically
      try {
        this.log('🔧 Attempting to fix linting errors...');
        const fixOutput = execSync('npm run lint -- --fix', {
          encoding: 'utf8',
          stdio: 'pipe',
          cwd: this.projectRoot
        });
        
        this.log('✅ Linting errors fixed automatically');
        
        // Save report
        const report = {
          timestamp: new Date().toISOString(),
          status: 'fixed',
          output: fixOutput
        };
        
        fs.writeFileSync(this.lintReportFile, JSON.stringify(report, null, 2));
        
        return { success: true, output: fixOutput, fixed: true };
      } catch (fixError) {
        this.log(`❌ Auto-fix failed: ${fixError.message}`);
        
        // Save error report
        const report = {
          timestamp: new Date().toISOString(),
          status: 'error',
          error: error.message,
          fixError: fixError.message
        };
        
        fs.writeFileSync(this.lintReportFile, JSON.stringify(report, null, 2));
        
        return { success: false, error: error.message };
      }
    }
  }

  async start() {
    if (this.isRunning) {
      this.log('⚠️ Linting automation is already running');
      return;
    }
    
    this.isRunning = true;
    this.log('🚀 Starting linting automation...');
    
    // Initial linting
    await this.runLinting();
    
    // Set up interval
    this.lintTimer = setInterval(async () => {
      if (this.isRunning) {
        await this.runLinting();
      }
    }, this.lintInterval);
    
    this.log('✅ Linting automation started successfully');
  }

  stop() {
    if (!this.isRunning) {
      this.log('⚠️ Linting automation is not running');
      return;
    }
    
    this.isRunning = false;
    
    if (this.lintTimer) {
      clearInterval(this.lintTimer);
      this.lintTimer = null;
    }
    
    this.log('🛑 Linting automation stopped');
  }

  status() {
    const status = {
      running: this.isRunning,
      lastLint: this.lastLint,
      interval: this.lintInterval
    };
    
    this.log(`📊 Status: ${status.running ? 'Running' : 'Stopped'}`);
    this.log(`📊 Last Lint: ${status.lastLint ? status.lastLint.toISOString() : 'Never'}`);
    this.log(`📊 Interval: ${status.interval}ms`);
    
    return status;
  }
}

// CLI handling
const automation = new LintingAutomation();
const command = process.argv[2];

switch (command) {
  case 'start':
    automation.start();
    break;
  case 'stop':
    automation.stop();
    process.exit(0);
    break;
  case 'status':
    automation.status();
    process.exit(0);
    break;
  case 'run':
    automation.runLinting();
    process.exit(0);
    break;
  default:
    console.log('Usage: node linting-automation.js [start|stop|status|run]');
    process.exit(1);
}

// Graceful shutdown
process.on('SIGINT', () => {
  automation.stop();
  process.exit(0);
});

process.on('SIGTERM', () => {
  automation.stop();
  process.exit(0);
});