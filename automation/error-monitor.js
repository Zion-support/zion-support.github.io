#!/usr/bin/env node

<<<<<<< HEAD
/**
 * Error Monitor - PM2 Automation Script
 * Monitors the application for errors and automatically fixes common issues
 */

const fs = // // require('fs')
const path = // // require('path')
const { execSync, spawn } = // // require('child_process');
=======
const fs = // // require('fs');
const path = // // require('path');
const { execSync } = // // require('child_process');
>>>>>>> origin/merge-pr-10625

class ErrorMonitor {
  constructor() {
    this.projectRoot = process.cwd();
<<<<<<< HEAD
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
=======
    this.monitoringReport = {
      timestamp: new Date().toISOString(),
      duration: 0,
      errorsDetected: [],
      warnings: [],
      healthStatus: 'healthy',
      metrics: {
        totalErrors: 0,
        totalWarnings: 0,
        buildSuccess: false,
        typeCheckSuccess: false,
        lintSuccess: false
      }
    };
    this.startTime = Date.now();
    this.isRunning = false;
    this.checkInterval = 60000; // 1 minute
    this.alertThreshold = 10;
  }

  async start() {
    console.log('🔍 Starting Error Monitor...');
    this.isRunning = true;
    
    // Create logs directory
    const logsDir = path.join(this.projectRoot, 'automation', 'logs');
    if (!fs.existsSync(logsDir)) {
      fs.mkdirSync(logsDir, { recursive: true });
    }
    
    // Initial health check
    await this.performHealthCheck();
    
    // Start continuous monitoring
    this.startContinuousMonitoring();
    
    // Handle graceful shutdown
    process.on('SIGINT', () => this.shutdown());
    process.on('SIGTERM', () => this.shutdown());
  }

  async performHealthCheck() {
    console.log('🏥 Performing health check...');
    
    try {
      // Check TypeScript errors
      await this.checkTypeScriptErrors();
      
      // Check ESLint errors
      await this.checkESLintErrors();
      
      // Check build status
      await this.checkBuildStatus();
      
      // Check for critical files
      await this.checkCriticalFiles();
      
      // Update health status
      this.updateHealthStatus();
      
      // Log results
      this.logHealthStatus();
      
      // Trigger error fixer if needed
      if (this.monitoringReport.metrics.totalErrors > this.alertThreshold) {
        await this.triggerErrorFixer();
      }
      
    } catch (error) {
      console.error('❌ Health check failed:', error);
      this.monitoringReport.errorsDetected.push({
        type: 'health_check_failure',
        message: error.message,
        timestamp: new Date().toISOString()
      });
    }
  }

  async checkTypeScriptErrors() {
    try {
      const result = execSync('npx tsc --noEmit --pretty false', { 
        encoding: 'utf8', 
        cwd: this.projectRoot,
        stdio: ['pipe', 'pipe', 'pipe']
      });
      
      this.monitoringReport.metrics.typeCheckSuccess = true;
      console.log('✅ TypeScript check passed');
      
    } catch (error) {
      if (error.stdout) {
        const errors = this.parseTypeScriptErrors(error.stdout);
        this.monitoringReport.errorsDetected.push(...errors);
        this.monitoringReport.metrics.totalErrors += errors.length;
        this.monitoringReport.metrics.typeCheckSuccess = false;
        console.log(`❌ TypeScript check failed with ${errors.length} errors`);
      }
    }
  }

  async checkESLintErrors() {
    try {
      const result = execSync('npx eslint . --format=compact --no-eslintrc', { 
        encoding: 'utf8', 
        cwd: this.projectRoot,
        stdio: ['pipe', 'pipe', 'pipe']
      });
      
      this.monitoringReport.metrics.lintSuccess = true;
      console.log('✅ ESLint check passed');
      
    } catch (error) {
      if (error.stdout) {
        const errors = this.parseESLintErrors(error.stdout);
        this.monitoringReport.errorsDetected.push(...errors);
        this.monitoringReport.metrics.totalErrors += errors.length;
        this.monitoringReport.metrics.lintSuccess = false;
        console.log(`❌ ESLint check failed with ${errors.length} errors`);
      }
    }
  }

  async checkBuildStatus() {
    try {
      // Quick build check (without full build)
      const result = execSync('npx next build --dry-run', { 
        encoding: 'utf8', 
        cwd: this.projectRoot,
        stdio: ['pipe', 'pipe', 'pipe'],
        timeout: 30000 // 30 second timeout
      });
      
      this.monitoringReport.metrics.buildSuccess = true;
      console.log('✅ Build check passed');
      
    } catch (error) {
      this.monitoringReport.metrics.buildSuccess = false;
      this.monitoringReport.errorsDetected.push({
        type: 'build_failure',
        message: error.message,
        timestamp: new Date().toISOString()
      });
      this.monitoringReport.metrics.totalErrors += 1;
      console.log('❌ Build check failed');
    }
  }

  async checkCriticalFiles() {
    const criticalFiles = [
      'package.json',
      'tsconfig.json',
      'next.config.js',
      'src/App.tsx',
      'src/pages/index.tsx'
    ];
    
    for (const file of criticalFiles) {
      const filePath = path.join(this.projectRoot, file);
      if (!fs.existsSync(filePath)) {
        this.monitoringReport.errorsDetected.push({
          type: 'missing_critical_file',
          file: file,
          message: `Critical file ${file} is missing`,
          timestamp: new Date().toISOString()
        });
        this.monitoringReport.metrics.totalErrors += 1;
      }
    }
  }

  parseTypeScriptErrors(output) {
    const errors = [];
    const lines = output.split('\n');
    
    for (const line of lines) {
      if (line.includes('error TS')) {
        const match = line.match(/(.+):(\d+):(\d+)\s*-\s*error\s+TS\d+:\s*(.+)/);
        if (match) {
          errors.push({
            type: 'typescript_error',
            file: match[1].trim(),
            line: parseInt(match[2]),
            column: parseInt(match[3]),
            message: match[4].trim(),
            timestamp: new Date().toISOString()
          });
        }
      }
    }
    
    return errors;
  }

  parseESLintErrors(output) {
    const errors = [];
    const lines = output.split('\n');
    
    for (const line of lines) {
      const match = line.match(/(.+):(\d+):(\d+):\s*(.+)/);
      if (match) {
        errors.push({
          type: 'eslint_error',
          file: match[1].trim(),
          line: parseInt(match[2]),
          column: parseInt(match[3]),
          message: match[4].trim(),
          timestamp: new Date().toISOString()
        });
      }
    }
    
    return errors;
  }

  updateHealthStatus() {
    const totalErrors = this.monitoringReport.metrics.totalErrors;
    const totalWarnings = this.monitoringReport.metrics.totalWarnings;
    
    if (totalErrors === 0 && totalWarnings === 0) {
      this.monitoringReport.healthStatus = 'healthy';
    } else if (totalErrors <= this.alertThreshold) {
      this.monitoringReport.healthStatus = 'warning';
    } else {
      this.monitoringReport.healthStatus = 'critical';
    }
  }

  logHealthStatus() {
    const status = this.monitoringReport.healthStatus;
    const totalErrors = this.monitoringReport.metrics.totalErrors;
    const totalWarnings = this.monitoringReport.metrics.totalWarnings;
    
    console.log(`📊 Health Status: ${status.toUpperCase()}`);
    console.log(`📈 Total Errors: ${totalErrors}`);
    console.log(`⚠️  Total Warnings: ${totalWarnings}`);
    console.log(`🏗️  Build Success: ${this.monitoringReport.metrics.buildSuccess ? '✅' : '❌'}`);
    console.log(`🔍 Type Check Success: ${this.monitoringReport.metrics.typeCheckSuccess ? '✅' : '❌'}`);
    console.log(`🧹 Lint Success: ${this.monitoringReport.metrics.lintSuccess ? '✅' : '❌'}`);
  }

  async triggerErrorFixer() {
    console.log('🚀 Triggering error fixer...');
    
    try {
      const ErrorFixerAutomation = // // require('./error-fixer-automation.js');
      const automation = new ErrorFixerAutomation();
      await automation.run();
      
      console.log('✅ Error fixer completed');
      
    } catch (error) {
      console.error('❌ Error fixer failed:', error);
      this.monitoringReport.errorsDetected.push({
        type: 'error_fixer_failure',
        message: error.message,
        timestamp: new Date().toISOString()
      });
    }
  }

  startContinuousMonitoring() {
    console.log(`🔄 Starting continuous monitoring (checking every ${this.checkInterval / 1000} seconds)...`);
    
    setInterval(async () => {
      if (this.isRunning) {
        await this.performHealthCheck();
        await this.saveReport();
      }
    }, this.checkInterval);
  }

  async saveReport() {
    const reportPath = path.join(this.projectRoot, 'error-reports', `error-monitor-report-${Date.now()}.json`);
    const reportDir = path.dirname(reportPath);
    
    if (!fs.existsSync(reportDir)) {
      fs.mkdirSync(reportDir, { recursive: true });
    }
    
    // Add duration to report
    this.monitoringReport.duration = Date.now() - this.startTime;
    
    fs.writeFileSync(reportPath, JSON.stringify(this.monitoringReport, null, 2));
    
    // Keep only the latest 10 reports
    this.cleanupOldReports(reportDir);
  }

  cleanupOldReports(reportDir) {
    try {
      const files = fs.readdirSync(reportDir)
        .filter(file => file.startsWith('error-monitor-report-'))
        .map(file => ({
          name: file,
          path: path.join(reportDir, file),
          time: fs.statSync(path.join(reportDir, file)).mtime.getTime()
        }))
        .sort((a, b) => b.time - a.time);
      
      // Remove old reports (keep only the latest 10)
      if (files.length > 10) {
        for (let i = 10; i < files.length; i++) {
          fs.unlinkSync(files[i].path);
        }
      }
    } catch (error) {
      console.error('Error cleaning up old reports:', error);
    }
  }

  async shutdown() {
    console.log('🛑 Shutting down Error Monitor...');
    this.isRunning = false;
    
    // Save final report
    await this.saveReport();
    
    console.log('✅ Error Monitor shutdown complete');
    process.exit(0);
  }
}

// Run the monitor
if (require.main === module) {
  const monitor = new ErrorMonitor();
  monitor.start().catch(console.error);
}

module.exports = ErrorMonitor;
>>>>>>> origin/merge-pr-10625
