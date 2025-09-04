#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

class BuildMonitor {
  constructor() {
    this.logFile = path.join(__dirname, '../logs/build-monitor.log');
    this.buildCount = 0;
    this.failedBuilds = 0;
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

  async runBuild() {
    try {
      this.log('Running build check...');
      
      execSync('npm run build', {
        encoding: 'utf8',
        cwd: process.cwd()
      });
      
      this.log('Build completed successfully.');
      this.buildCount++;
      return true;
    } catch (error) {
      this.failedBuilds++;
      this.log(`Build failed: ${error.message}`);
      
      this.generateBuildErrorReport(error.message);
      return false;
    }
  }

  generateBuildErrorReport(errorMessage) {
    const report = {
      timestamp: new Date().toISOString(),
      buildCount: this.buildCount,
      failedBuilds: this.failedBuilds,
      errorMessage: errorMessage,
      status: 'failed'
    };
    
    const reportFile = path.join(__dirname, '../logs/build-error-report.json');
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    this.log(`Build error report generated: ${reportFile}`);
  }

  async monitorBuild() {
    this.log('Starting build monitoring cycle...');
    
    const success = await this.runBuild();
    
    if (success) {
      this.log(`Build monitoring cycle completed. Total builds: ${this.buildCount}`);
    } else {
      this.log(`Build monitoring cycle failed. Failed builds: ${this.failedBuilds}`);
    }
  }

  async start() {
    this.log('Build Monitor started');
    
    await this.monitorBuild();
    
    // Run every 2 hours
    setInterval(async () => {
      await this.monitorBuild();
    }, 2 * 60 * 60 * 1000);
    
    process.on('SIGINT', () => {
      this.log('Build Monitor stopped');
      process.exit(0);
    });
  }
}

const monitor = new BuildMonitor();
monitor.start().catch(console.error);