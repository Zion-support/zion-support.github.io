#!/usr/bin/env node

/**
 * Build Monitor - PM2 Automation Script
 * Monitors build processes and ensures successful builds
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class BuildMonitor {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'automation/logs/build-monitor.log');
    this.buildReportFile = path.join(this.projectRoot, 'automation/logs/build-report.json');
    this.lastBuild = null;
    this.buildInterval = 300000; // 5 minutes
    this.isRunning = false;

    this.setupLogging();
    this.log('Build Monitor initialized')}

  setupLogging() {
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true })}
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}\n`;
    process.stdout.write(logMessage);
    try {
      fs.appendFileSync(this.logFile, logMessage)} catch (_) {}
  }

  async performBuild() {
    try {
      this.log('Starting build process...');
      const startTime = Date.now();

      execSync('npm run clean', { cwd: this.projectRoot, stdio: 'ignore', timeout: 30000 });
      this.log('Build cleaned');

      const buildOutput = execSync('npm run build', {
        cwd: this.projectRoot,
        encoding: 'utf8',
        timeout: 300000
      });

      const endTime = Date.now();
      const buildTime = endTime - startTime;

      this.lastBuild = {
        timestamp: new Date().toISOString(),
        success: true,
        buildTime,
        output: buildOutput
      };

      this.log(`Build completed successfully in ${buildTime}ms`);
      await this.saveBuildReport()} catch (error) {
      this.log(`Build failed: ${error.message}`);
      this.lastBuild = {
        timestamp: new Date().toISOString(),
        success: false,
        error: error.message,
        output: error.stdout || error.stderr
      };
      await this.saveBuildReport();
      await this.handleBuildFailure(error)}
  }

  async handleBuildFailure(error) {
    this.log('Handling build failure...');
    try {
      execSync('npm run lint:fix', { cwd: this.projectRoot, stdio: 'ignore', timeout: 60000 });
      this.log('Applied linting fixes');
      execSync('npm run build', { cwd: this.projectRoot, stdio: 'ignore', timeout: 300000 });
      this.log('Build fixed and completed successfully')} catch (fixError) {
      this.log(`Failed to fix build: ${fixError.message}`);
      await this.reportBuildFailure(fixError)}
  }

  async saveBuildReport() {
    const report = {
      lastBuild: this.lastBuild,
      projectRoot: this.projectRoot,
      nodeVersion: process.version,
      platform: process.platform
    };
    try {
      fs.writeFileSync(this.buildReportFile, JSON.stringify(report, null, 2))} catch (_) {}
  }

  async reportBuildFailure(error) {
    try {
      const failureReport = {
        timestamp: new Date().toISOString(),
        error: error.message,
        stack: error.stack,
        projectRoot: this.projectRoot
      };
      const failureFile = path.join(this.projectRoot, 'automation/logs/build-failure-report.json');
      fs.writeFileSync(failureFile, JSON.stringify(failureReport, null, 2));
      this.log('Build failure reported')} catch (_) {}
  }

  async checkBuildHealth() {
    try {
      this.log('Checking build health...');
      const nextDir = path.join(this.projectRoot, '.next');
      if (fs.existsSync(nextDir)) {
        const stats = fs.statSync(nextDir);
        const age = Date.now() - stats.mtime.getTime();
        if (age > 3600000) {
          this.log('Build is stale, performing fresh build...');
          await this.performBuild()} else {
          this.log('Build is fresh')}
      } else {
        this.log('No build found, performing build...');
        await this.performBuild()}
    } catch (error) {
      this.log(`Build health check failed: ${error.message}`)}
  }

  async start() {
    this.isRunning = true;
    this.log('Build Monitor started');
    await this.checkBuildHealth();
    setInterval(async () => {
      if (!this.isRunning) return;
      await this.performBuild()}, this.buildInterval);

    process.on('SIGTERM', () => {
      this.log('Received SIGTERM, shutting down gracefully');
      this.isRunning = false;
      process.exit(0)});
    process.on('SIGINT', () => {
      this.log('Received SIGINT, shutting down gracefully');
      this.isRunning = false;
      process.exit(0)})}
}

const monitor = new BuildMonitor();
monitor.start().catch(error => {
  console.error('Failed to start build monitor:', error);
  process.exit(1)});