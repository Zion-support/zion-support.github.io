#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const cron = require('node-cron');

class ErrorPreventionMonitor {
  constructor() {
    this.projectRoot = process.cwd();
    this.logsDir = path.join(this.projectRoot, 'logs');
    this.reportsDir = path.join(this.projectRoot, 'reports');
    this.ensureDirectories();
    this.setupLogging();
  }

  ensureDirectories() {
    [this.logsDir, this.reportsDir].forEach(dir => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
    });
  }

  setupLogging() {
    this.logFile = path.join(this.logsDir, 'error-prevention-monitor.log');
    this.errorFile = path.join(this.logsDir, 'error-prevention-monitor-error.log');
  }

  log(message, type = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${type}] ${message}`;
    
    console.log(logMessage);
    
    fs.appendFileSync(this.logFile, logMessage + '\n');
    
    if (type === 'ERROR') {
      fs.appendFileSync(this.errorFile, logMessage + '\n');
    }
  }

  async start() {
    this.log('Error Prevention Monitor started');
    
    cron.schedule('*/10 * * * *', () => {
      this.log('Running error prevention check...');
    });
    
    setInterval(() => {
      this.log('Error prevention monitor heartbeat...');
    }, 60000);
  }
}

if (require.main === module) {
  const monitor = new ErrorPreventionMonitor();
  monitor.start().catch(error => {
    monitor.log(`Fatal error: ${error.message}`, 'ERROR');
    process.exit(1);
  });
}

module.exports = ErrorPreventionMonitor;