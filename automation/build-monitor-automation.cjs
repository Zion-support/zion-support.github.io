#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class BuildMonitorAutomation {
  constructor() {
    this.logFile = 'automation/logs/build-monitor.log';
    this.buildCount = 0;
    this.errorCount = 0;
    this.startTime = Date.now();
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}\n`;

    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }

    fs.appendFileSync(this.logFile, logMessage);
    console.log(`[${level}] ${message}`);
  }

  async runCommand(command, options = {}) {
    try {
      this.log(`Running command: ${command}`);
      const result = execSync(command, {
        encoding: 'utf8',
        cwd: '/workspace',
        ...options,
      });
      return result;
    } catch (error) {
      this.log(`Command failed: ${command} - ${error.message}`, 'ERROR');
      throw error;
    }
  }

  async runBuild() {
    this.log('Running build...');

    try {
      await this.runCommand('npm run build');
      this.log('Build successful');
      this.buildCount++;
      return true;
    } catch (error) {
      this.log(`Build failed: ${error.message}`, 'ERROR');
      this.errorCount++;
      return false;
    }
  }

  async runTypeCheck() {
    this.log('Running type check...');

    try {
      await this.runCommand('npm run type-check');
      this.log('Type check successful');
      return true;
    } catch (error) {
      this.log(`Type check failed: ${error.message}`, 'ERROR');
      this.errorCount++;
      return false;
    }
  }

  async runTests() {
    this.log('Running tests...');

    try {
      await this.runCommand('npm run test:smoke');
      this.log('Tests passed');
      return true;
    } catch (error) {
      this.log(`Tests failed: ${error.message}`, 'ERROR');
      this.errorCount++;
      return false;
    }
  }

  async generateReport() {
    const endTime = Date.now();
    const duration = (endTime - this.startTime) / 1000;

    const report = {
      timestamp: new Date().toISOString(),
      duration: `${duration}s`,
      buildsRun: this.buildCount,
      errorsFound: this.errorCount,
      success: this.errorCount === 0,
      status: this.errorCount === 0 ? 'SUCCESS' : 'FAILED',
    };

    const reportFile = 'automation/logs/build-monitor-report.json';
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));

    this.log(`Report generated: ${reportFile}`);
    this.log(
      `Summary: ${this.buildCount} builds run, ${this.errorCount} errors found`
    );

    return report;
  }

  async run() {
    this.log('Starting build monitor automation...');

    try {
      await this.runTypeCheck();
      await this.runBuild();
      await this.runTests();
      await this.generateReport();
      this.log('Build monitor automation completed');
    } catch (error) {
      this.log(`Build monitor automation failed: ${error.message}`, 'ERROR');
      this.errorCount++;
    }
  }
}

// Run the automation
if (require.main === module) {
  const automation = new BuildMonitorAutomation();
  automation.run().catch(console.error);
}

module.exports = BuildMonitorAutomation;
