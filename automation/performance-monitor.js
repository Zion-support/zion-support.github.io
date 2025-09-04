#!/usr/bin/env node

/**
 * Performance Monitor - PM2 Automation Script
 * Monitors application performance and optimizes when needed
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class PerformanceMonitor {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'automation/logs/performance-monitor.log');
    this.performanceReportFile = path.join(this.projectRoot, 'automation/logs/performance-report.json');
    this.lastCheck = null;
    this.checkInterval = 300000; // 5 minutes
    this.isRunning = false;
    
    this.setupLogging();
    this.log('Performance Monitor started');
  }

  setupLogging() {
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}\n`;
    
    console.log(logMessage.trim());
    fs.appendFileSync(this.logFile, logMessage);
  }

  async checkPerformance() {
    try {
      this.log('Checking performance metrics...');
      const startTime = Date.now();
      
      // Get system metrics
      const systemMetrics = await this.getSystemMetrics();
      
      // Get build metrics
      const buildMetrics = await this.getBuildMetrics();
      
      // Get bundle analysis
      const bundleMetrics = await this.getBundleMetrics();
      
      const endTime = Date.now();
      const checkTime = endTime - startTime;
      
      this.lastCheck = {
        timestamp: new Date().toISOString(),
        checkTime: checkTime,
        systemMetrics: systemMetrics,
        buildMetrics: buildMetrics,
        bundleMetrics: bundleMetrics
      };
      
      this.log(`Performance check completed in ${checkTime}ms`);
      await this.savePerformanceReport();
      
      // Check if optimization is needed
      await this.checkOptimizationNeeded();
      
    } catch (error) {
      this.log(`Performance check failed: ${error.message}`);
      await this.reportPerformanceError(error);
    }
  }

  async getSystemMetrics() {
    try {
      const metrics = {
        memory: process.memoryUsage(),
        uptime: process.uptime(),
        cpuUsage: process.cpuUsage(),
        nodeVersion: process.version,
        platform: process.platform
      };
      
      // Get disk usage
      try {
        const diskUsage = execSync('df -h .', { 
          cwd: this.projectRoot,
          encoding: 'utf8',
          timeout: 10000
        });
        metrics.diskUsage = diskUsage;
      } catch (error) {
        metrics.diskUsage = 'Unable to get disk usage';
      }
      
      return metrics;
      
    } catch (error) {
      this.log(`Failed to get system metrics: ${error.message}`);
      return { error: error.message };
    }
  }

  async getBuildMetrics() {
    try {
      const buildDir = path.join(this.projectRoot, '.next');
      
      if (!fs.existsSync(buildDir)) {
        return { exists: false };
      }
      
      const stats = fs.statSync(buildDir);
      const buildSize = this.getDirectorySize(buildDir);
      
      return {
        exists: true,
        lastModified: stats.mtime,
        size: buildSize,
        age: Date.now() - stats.mtime.getTime()
      };
      
    } catch (error) {
      this.log(`Failed to get build metrics: ${error.message}`);
      return { error: error.message };
    }
  }

  async getBundleMetrics() {
    try {
      // Check if bundle analyzer is available
      const packageJson = JSON.parse(fs.readFileSync(path.join(this.projectRoot, 'package.json'), 'utf8'));
      
      if (packageJson.scripts && packageJson.scripts.analyze) {
        return {
          analyzerAvailable: true,
          script: 'npm run analyze'
        };
      } else {
        return {
          analyzerAvailable: false,
          recommendation: 'Consider adding bundle analyzer for detailed metrics'
        };
      }
      
    } catch (error) {
      this.log(`Failed to get bundle metrics: ${error.message}`);
      return { error: error.message };
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
      // Ignore errors
    }
    
    return totalSize;
  }

  async checkOptimizationNeeded() {
    try {
      const metrics = this.lastCheck;
      
      // Check memory usage
      const memoryUsage = metrics.systemMetrics.memory;
      const memoryUsagePercent = (memoryUsage.heapUsed / memoryUsage.heapTotal) * 100;
      
      if (memoryUsagePercent > 80) {
        this.log('High memory usage detected, considering optimization...');
        await this.optimizeMemory();
      }
      
      // Check build age
      if (metrics.buildMetrics.exists && metrics.buildMetrics.age > 3600000) { // 1 hour
        this.log('Build is stale, considering rebuild...');
        await this.optimizeBuild();
      }
      
      // Check build size
      if (metrics.buildMetrics.exists && metrics.buildMetrics.size > 100 * 1024 * 1024) { // 100MB
        this.log('Large build size detected, considering optimization...');
        await this.optimizeBuildSize();
      }
      
    } catch (error) {
      this.log(`Optimization check failed: ${error.message}`);
    }
  }

  async optimizeMemory() {
    try {
      this.log('Performing memory optimization...');
      
      // Force garbage collection if available
      if (global.gc) {
        global.gc();
        this.log('Garbage collection performed');
      }
      
      // Clear any caches if possible
      if (global.clearImmediate) {
        // Clear any pending immediates
      }
      
      this.log('Memory optimization completed');
      
    } catch (error) {
      this.log(`Memory optimization failed: ${error.message}`);
    }
  }

  async optimizeBuild() {
    try {
      this.log('Performing build optimization...');
      
      // Clean and rebuild
      execSync('npm run clean', { cwd: this.projectRoot, timeout: 30000 });
      execSync('npm run build', { cwd: this.projectRoot, timeout: 300000 });
      
      this.log('Build optimization completed');
      
    } catch (error) {
      this.log(`Build optimization failed: ${error.message}`);
    }
  }

  async optimizeBuildSize() {
    try {
      this.log('Performing build size optimization...');
      
      // Run build with analysis if available
      if (this.lastCheck.bundleMetrics.analyzerAvailable) {
        execSync('npm run analyze', { cwd: this.projectRoot, timeout: 300000 });
        this.log('Bundle analysis completed');
      }
      
      // Clean and rebuild
      execSync('npm run clean', { cwd: this.projectRoot, timeout: 30000 });
      execSync('npm run build', { cwd: this.projectRoot, timeout: 300000 });
      
      this.log('Build size optimization completed');
      
    } catch (error) {
      this.log(`Build size optimization failed: ${error.message}`);
    }
  }

  async savePerformanceReport() {
    const report = {
      lastCheck: this.lastCheck,
      projectRoot: this.projectRoot,
      recommendations: this.getPerformanceRecommendations()
    };
    
    fs.writeFileSync(this.performanceReportFile, JSON.stringify(report, null, 2));
  }

  getPerformanceRecommendations() {
    const recommendations = [];
    
    if (this.lastCheck) {
      const metrics = this.lastCheck.systemMetrics;
      
      if (metrics.memory) {
        const memoryUsagePercent = (metrics.memory.heapUsed / metrics.memory.heapTotal) * 100;
        
        if (memoryUsagePercent > 80) {
          recommendations.push('High memory usage detected. Consider optimizing memory usage.');
        }
        
        if (memoryUsagePercent > 90) {
          recommendations.push('Critical memory usage. Immediate optimization required.');
        }
      }
      
      if (this.lastCheck.buildMetrics.exists) {
        if (this.lastCheck.buildMetrics.age > 3600000) {
          recommendations.push('Build is stale. Consider rebuilding for optimal performance.');
        }
        
        if (this.lastCheck.buildMetrics.size > 100 * 1024 * 1024) {
          recommendations.push('Large build size detected. Consider code splitting and optimization.');
        }
      }
    }
    
    return recommendations;
  }

  async reportPerformanceError(error) {
    const errorReport = {
      timestamp: new Date().toISOString(),
      error: error.message,
      stack: error.stack,
      projectRoot: this.projectRoot
    };
    
    const errorFile = path.join(this.projectRoot, 'automation/logs/performance-error-report.json');
    fs.writeFileSync(errorFile, JSON.stringify(errorReport, null, 2));
    
    this.log('Performance error reported');
  }

  async start() {
    this.isRunning = true;
    this.log('Performance Monitor started');
    
    // Initial performance check
    await this.checkPerformance();
    
    // Set up interval for regular checks
    setInterval(async () => {
      if (this.isRunning) {
        await this.checkPerformance();
      }
    }, this.checkInterval);
    
    // Handle graceful shutdown
    process.on('SIGTERM', () => {
      this.log('Received SIGTERM, shutting down gracefully');
      this.isRunning = false;
      process.exit(0);
    });
    
    process.on('SIGINT', () => {
      this.log('Received SIGINT, shutting down gracefully');
      this.isRunning = false;
      process.exit(0);
    });
  }
}

// Start the performance monitor
const monitor = new PerformanceMonitor();
monitor.start().catch(error => {
  console.error('Failed to start performance monitor:', error);
  process.exit(1);
});