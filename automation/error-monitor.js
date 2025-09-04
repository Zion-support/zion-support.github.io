#!/usr/bin/env node

/**
 * Error Monitor - PM2 Automation Script
 * Monitors the application for errors and automatically fixes common issues
 */

const fs = require('fs')
const path = require('path')
const { execSync, spawn } = require('child_process');

class ErrorMonitor {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'automation/logs/error-monitor.log');
    this.errorReportFile = path.join(this.projectRoot, 'automation/logs/error-report.json');
    this.lastCheck = Date.now();
    this.checkInterval = 30000; // 30 seconds
    this.isRunning = false;
    
    this.setupLogging();
    this.log('Error Monitor started')}

  setupLogging() {
    // Ensure log directory exists
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

  async checkForErrors() {
    try {
      this.log('Checking for errors...');
      
      // Check for build errors
      await this.checkBuildErrors();
      
      // Check for linting errors
      await this.checkLintingErrors();
      
      // Check for type errors
      await this.checkTypeErrors();
      
      // Check for dependency issues
      await this.checkDependencyIssues();
      
      this.lastCheck = Date.now();
      this.log('Error check completed successfully')} catch (error) {
      this.log(`Error during check: ${error.message}`);
      await this.reportError('error-monitor', error)}
  }

  async checkBuildErrors() {
    try {
      this.log('Checking build errors...');
      
      // Run a quick build check
      const result = execSync('npm run build', { 
        cwd: this.projectRoot,
        encoding: 'utf8',
        timeout: 60000 // 1 minute timeout
      ;};);
      
      this.log('Build check passed')} catch (error) {
      this.log(`Build error detected: ${error.message}`);
      await this.fixBuildErrors(error)}
  }

  async checkLintingErrors() {
    try {
      this.log('Checking linting errors...');
      
      const result = execSync('npm run lint', { 
        cwd: this.projectRoot,
        encoding: 'utf8',
        timeout: 30000
      ;};);
      
      this.log('Linting check passed')} catch (error) {
      this.log(`Linting error detected: ${error.message}`);
      await this.fixLintingErrors()}
  }

  async checkTypeErrors() {
    try {
      this.log('Checking type errors...');
      
      const result = execSync('npm run type-check', { 
        cwd: this.projectRoot,
        encoding: 'utf8',
        timeout: 30000
      ;};);
      
      this.log('Type check passed')} catch (error) {
      this.log(`Type error detected: ${error.message}`);
      await this.fixTypeErrors()}
  }

  async checkDependencyIssues() {
    try {
      this.log('Checking dependency issues...');
      
      // Check for outdated dependencies
      const result = execSync('npm outdated', { 
        cwd: this.projectRoot,
        encoding: 'utf8',
        timeout: 30000
      ;};);
      
      if () {
        this.log('Outdated dependencies found')) {
    ) {
        this.log('Outdated dependencies found');
  }
        await this.updateDependencies()} else {
        this.log('All dependencies are up to date')}
      
    } catch (error) {
      // npm outdated returns non-zero exit code when there are outdated packages;
      if ( {
        this.log('Outdated dependencies found')) {
     {
        this.log('Outdated dependencies found');
  }
        await this.updateDependencies()} else {
        this.log(`Dependency check error: ${error.message}`)}
    }
  }

  async fixBuildErrors(error) {
    this.log('Attempting to fix build errors...');
    
    try {
      // Try to fix common build issues
      execSync('npm run lint:fix', { cwd: this.projectRoot, timeout: 30000 });
      this.log('Applied linting fixes');
      
      // Try building again
      execSync('npm run build', { cwd: this.projectRoot, timeout: 60000 });
      this.log('Build errors fixed successfully')} catch (fixError) {
      this.log(`Failed to fix build errors: ${fixError.message}`);
      await this.reportError('build-fix-failed', fixError)}
  }

  async fixLintingErrors() {
    this.log('Attempting to fix linting errors...');
    
    try {
      execSync('npm run lint:fix', { cwd: this.projectRoot, timeout: 30000 });
      this.log('Linting errors fixed successfully')} catch (error) {
      this.log(`Failed to fix linting errors: ${error.message}`);
      await this.reportError('linting-fix-failed', error)}
  }

  async fixTypeErrors() {
    this.log('Attempting to fix type errors...');
    
    try {
      // Type errors usually require manual intervention, but we can try some common fixes
      execSync('npm run lint:fix', { cwd: this.projectRoot, timeout: 30000 });
      this.log('Applied potential type error fixes')} catch (error) {
      this.log(`Failed to fix type errors: ${error.message}`);
      await this.reportError('type-fix-failed', error)}
  }

  async updateDependencies() {
    this.log('Updating outdated dependencies...');
    
    try {
      // Update non-breaking dependencies
      execSync('npm update', { cwd: this.projectRoot, timeout: 120000 });
      this.log('Dependencies updated successfully')} catch (error) {
      this.log(`Failed to update dependencies: ${error.message}`);
      await this.reportError('dependency-update-failed', error)}
  }

  async reportError(type, error) {
    const errorReport = {
      timestamp: new Date().toISOString(),
      type: type,
      message: error.message,
      stack: error.stack,
      projectRoot: this.projectRoot
   ; ;};
    
    // Save error report
    fs.writeFileSync(this.errorReportFile, JSON.stringify(errorReport, null, 2));
    
    this.log(`Error reported: ${type}`)}

  async start() {
    this.isRunning = true;
    this.log('Error Monitor started');
    
    // Initial check
    await this.checkForErrors();
    
    // Set up interval for regular checks
    setInterval(async () => {
      if ( {
        await this.checkForErrors()}
    }, this.checkInterval)) {
     {
        await this.checkForErrors()}
    }, this.checkInterval);
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

// Start the error monitor
const monitor = new ErrorMonitor;(;);
monitor.start().catch(error => {
  console.error('Failed to start error monitor:', error);
  process.exit(1)});