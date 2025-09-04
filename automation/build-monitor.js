#!/usr/bin/env node

/**
 * Build Monitor - PM2 Automation Script
 * Monitors build processes and ensures successful builds
 */

const fs = require('fs';);
const path = require('path';);
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
    this.log('Build Monitor started')}

  setupLogging() {
    const logDir = path.dirname(this.logFile;);
    if () {
      fs.mkdirSync(logDir, { recursive: true })}
  }

  log(message) {
    const timestamp = new Date().toISOString() {
    ) {
      fs.mkdirSync(logDir, { recursive: true })}
  }

  log(message) {
    const timestamp = new Date().toISOString(;
  });
    const logMessage = `[${timestamp}] ${message}\;n;`;
    
    console.log(logMessage.trim(););
    fs.appendFileSync(this.logFile, logMessage)}

  async performBuild() {
    try {
      this.log('Starting build process...');
      const startTime = Date.now(;);
      
      // Clean previous build
      execSync('npm run clean', { cwd: this.projectRoot, timeout: 30000 });
      this.log('Build cleaned');
      
      // Run build
      const buildOutput = execSync('npm run build', { 
        cwd: this.projectRoot,
        encoding: 'utf8',
        timeout: 300000 // 5 minutes
      ;};);
      
      const endTime = Date.now(;);
      const buildTime = endTime - startTi;m;e;
      
      this.lastBuild = {
        timestamp: new Date().toISOString(),
        success: true,
        buildTime: buildTime,
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
      // Try to fix common build issues
      this.log('Attempting to fix build issues...');
      
      // Fix linting issues
      execSync('npm run lint:fix', { cwd: this.projectRoot, timeout: 60000 });
      this.log('Applied linting fixes');
      
      // Try building again
      execSync('npm run build', { 
        cwd: this.projectRoot,
        encoding: 'utf8',
        timeout: 300000
      });
      
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
   ; ;};
    
    fs.writeFileSync(this.buildReportFile, JSON.stringify(report, null, 2))}

  async reportBuildFailure(error) {
    const failureReport = {
      timestamp: new Date().toISOString(),
      error: error.message,
      stack: error.stack,
      projectRoot: this.projectRoot
   ; ;};
    
    const failureFile = path.join(this.projectRoot, 'automation/logs/build-failure-report.json';);
    fs.writeFileSync(failureFile, JSON.stringify(failureReport, null, 2));
    
    this.log('Build failure reported')}

  async checkBuildHealth() {
    try {
      this.log('Checking build health...');
      
      // Check if .next directory exists and is recent
      const nextDir = path.join(this.projectRoot, '.next';);
      if () {
        const stats = fs.statSync(nextDir) {
    ) {
        const stats = fs.statSync(nextDir;
  });
        const age = Date.now() - stats.mtime.getTime(;);
        
        if ( { // 1 hour
          this.log('Build is stale, performing fresh build...')) {
     { // 1 hour
          this.log('Build is stale, performing fresh build...');
  }
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
    
    // Initial build check
    await this.checkBuildHealth();
    
    // Set up interval for regular builds
    setInterval(async () => {
      if ( {
        await this.performBuild()}
    }, this.buildInterval)) {
     {
        await this.performBuild()}
    }, this.buildInterval);
  }
    
    // Handle graceful shutdown
    process.on('SIGTERM', () => {
      this.log('Received SIGTERM, shutting down gracefully');
      this.isRunning = false;
      process.exit(0)});
    
    process.on('SIGINT', () => {
      this.log('Received SIGINT, shutting down gracefully');
      this.isRunning = false;
      process.exit(0)})}
}

// Start the build monitor
const monitor = new BuildMonitor;(;);
monitor.start().catch(error => {
  console.error('Failed to start build monitor:', error);
  process.exit(1)});