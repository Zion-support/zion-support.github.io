#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const cron = require('node-cron');

class ErrorAnalyticsDashboard {
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
    this.logFile = path.join(this.logsDir, 'error-analytics-dashboard.log');
    this.errorFile = path.join(this.logsDir, 'error-analytics-dashboard-error.log');
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
    this.log('Error Analytics Dashboard started');
    
    cron.schedule('0 0 * * *', () => {
      this.log('Generating daily error analytics report...');
    });
    
    setInterval(() => {
      this.log('Error analytics dashboard heartbeat...');
    }, 60000);
  }
}

if (require.main === module) {
  const dashboard = new ErrorAnalyticsDashboard();
  dashboard.start().catch(error => {
    dashboard.log(`Fatal error: ${error.message}`, 'ERROR');
    process.exit(1);
  });
}

module.exports = ErrorAnalyticsDashboard;