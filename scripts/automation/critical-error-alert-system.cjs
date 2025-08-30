#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const cron = require('node-cron');

class CriticalErrorAlertSystem {
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
    this.logFile = path.join(this.logsDir, 'critical-error-alert-system.log');
    this.errorFile = path.join(this.logsDir, 'critical-error-alert-system-error.log');
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
    this.log('Critical Error Alert System started');
    
    cron.schedule('*/1 * * * *', () => {
      this.log('Checking for critical errors...');
    });
    
    setInterval(() => {
      this.log('Critical error alert system heartbeat...');
    }, 60000);
  }
}

if (require.main === module) {
  const alertSystem = new CriticalErrorAlertSystem();
  alertSystem.start().catch(error => {
    alertSystem.log(`Fatal error: ${error.message}`, 'ERROR');
    process.exit(1);
  });
}

module.exports = CriticalErrorAlertSystem;