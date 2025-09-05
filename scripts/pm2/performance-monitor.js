#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class PerformanceMonitor {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'logs/pm2/performance-monitor.log');
    this.reportFile = path.join(this.projectRoot, 'logs/pm2/performance-report.json');
    this.startTime = Date.now();
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}\n`;
    
    try {
      fs.appendFileSync(this.logFile, logMessage);
    } catch (error) {
      console.error('Failed to write to log file:', error.message);
    }
  }

  async checkBuildPerformance() {
    try {
      this.log('🏗️  Testing build performance...');
      
      const startTime = Date.now();
      
      // Clean previous build
      if (fs.existsSync('dist')) {
        execSync('rm -rf dist', { cwd: this.projectRoot, stdio: 'pipe' });
      }
      
      // Run build
      execSync('npm run build', {
        cwd: this.projectRoot,
        stdio: 'pipe',
        timeout: 300000 // 5 minutes timeout
      });
      
      const buildTime = Date.now() - startTime;
      
      // Check build output size
      const distPath = path.join(this.projectRoot, 'dist');
      const buildSize = this.getDirectorySize(distPath);
      
      this.log(`Build completed in ${buildTime}ms, size: ${this.formatBytes(buildSize)}`);
      
      return {
        buildTime,
        buildSize,
        success: true
      };
    } catch (error) {
      this.log(`Build performance test failed: ${error.message}`);
      return {
        buildTime: 0,
        buildSize: 0,
        success: false,
        error: error.message
      };
    }
  }

  getDirectorySize(dirPath) {
    let totalSize = 0;
    
    try {
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
    } catch (error) {
      this.log(`Error calculating directory size: ${error.message}`);
    }
    
    return totalSize;
  }

  formatBytes(bytes) {
    if (bytes === 0) return '0 Bytes';
    
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }

  async generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      duration: Date.now() - this.startTime,
      build: await this.checkBuildPerformance()
    };

    // Save report
    fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2));
    
    this.log(`Performance report generated: ${this.reportFile}`);
    
    return report;
  }

  async start() {
    this.log('Performance Monitor started');
    
    try {
      const report = await this.generateReport();
      this.log(`Performance monitoring completed in ${report.duration}ms`);
      
    } catch (error) {
      this.log(`Performance Monitor error: ${error.message}`);
      process.exit(1);
    }
  }
}

// Start the monitor if this script is run directly
if (require.main === module) {
  const monitor = new PerformanceMonitor();
  monitor.start().catch(error => {
    console.error('Performance Monitor failed:', error.message);
    process.exit(1);
  });
}

module.exports = PerformanceMonitor;