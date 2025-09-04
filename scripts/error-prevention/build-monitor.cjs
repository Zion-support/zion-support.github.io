#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

class BuildMonitor {
  constructor() {
    this.logFile = path.join(process.cwd(), 'automation/logs/build-monitor.log');
    this.reportFile = path.join(process.cwd(), 'automation/logs/build-report.json');
    this.lastBuildTime = null;
    this.buildCount = 0;
    this.errorCount = 0;
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}\n`;
    console.log(logMessage.trim());
    fs.appendFileSync(this.logFile, logMessage);
  }

  async checkBuild() {
    this.log('Starting build check...');
    
    try {
      // Clean previous build
      this.log('Cleaning previous build...');
      execSync('npm run clean', { stdio: 'pipe' });
      
      // Run type check first
      this.log('Running TypeScript type check...');
      execSync('npm run type-check', { stdio: 'pipe' });
      
      // Run the build
      this.log('Running production build...');
      const startTime = Date.now();
      execSync('npm run build', { stdio: 'pipe' });
      const buildTime = Date.now() - startTime;
      
      this.buildCount++;
      this.lastBuildTime = new Date();
      
      this.log(`Build completed successfully in ${buildTime}ms`);
      
      // Generate build report
      const report = {
        timestamp: this.lastBuildTime.toISOString(),
        buildTime: buildTime,
        buildCount: this.buildCount,
        status: 'success',
        errors: [],
        warnings: []
      };
      
      fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2));
      
      // Check bundle size
      this.checkBundleSize();
      
    } catch (error) {
      this.errorCount++;
      this.log(`Build failed (attempt ${this.errorCount}):`);
      this.log(error.stdout || error.message);
      
      const report = {
        timestamp: new Date().toISOString(),
        buildCount: this.buildCount,
        errorCount: this.errorCount,
        status: 'failed',
        errors: [error.stdout || error.message],
        warnings: []
      };
      
      fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2));
      
      // Try to fix common build issues
      this.attemptBuildFix();
    }
  }

  checkBundleSize() {
    try {
      const nextDir = path.join(process.cwd(), '.next');
      if (fs.existsSync(nextDir)) {
        const stats = this.getDirectorySize(nextDir);
        this.log(`Build size: ${(stats / 1024 / 1024).toFixed(2)} MB`);
        
        if (stats > 50 * 1024 * 1024) { // 50MB warning
          this.log('WARNING: Build size is larger than 50MB');
        }
      }
    } catch (error) {
      this.log(`Error checking bundle size: ${error.message}`);
    }
  }

  getDirectorySize(dirPath) {
    let totalSize = 0;
    const files = fs.readdirSync(dirPath);
    
    for (const file of files) {
      const filePath = path.join(dirPath, file);
      const stats = fs.statSync(filePath);
      
      if (stats.isDirectory()) {
        totalSize += this.getDirectorySize(filePath);
      } else {
        totalSize += stats.size;
      }
    }
    
    return totalSize;
  }

  attemptBuildFix() {
    this.log('Attempting to fix build issues...');
    
    try {
      // Clear Next.js cache
      this.log('Clearing Next.js cache...');
      execSync('rm -rf .next', { stdio: 'pipe' });
      
      // Reinstall dependencies if needed
      if (this.errorCount % 3 === 0) {
        this.log('Reinstalling dependencies...');
        execSync('npm ci', { stdio: 'pipe' });
      }
      
      // Try building again
      setTimeout(() => this.checkBuild(), 5000);
      
    } catch (error) {
      this.log(`Build fix attempt failed: ${error.message}`);
    }
  }

  start() {
    this.log('Build monitor started...');
    
    // Run initial build check
    this.checkBuild();
    
    // Schedule regular checks (every 6 hours)
    setInterval(() => {
      this.checkBuild();
    }, 6 * 60 * 60 * 1000);
    
    // Keep process alive
    process.on('SIGINT', () => {
      this.log('Shutting down build monitor...');
      process.exit(0);
    });
  }
}

// Start the monitor
const monitor = new BuildMonitor();
monitor.start();