#!/usr/bin/env node

/**
 * Performance Monitor Automation Script
 * Monitors application performance and optimizes when needed
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

class PerformanceMonitor {
  constructor() {
    this.logFile = './logs/pm2/performance-monitor.log';
    this.errorFile = './logs/pm2/performance-monitor-error.log';
    this.performanceReport = './logs/performance-report.json';
    this.ensureLogDirectory();
  }

  ensureLogDirectory() {
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}\n`;
    
    try {
      fs.appendFileSync(this.logFile, logMessage);
      if (level === 'ERROR') {
        fs.appendFileSync(this.errorFile, logMessage);
      }
    } catch (err) {
      console.error('Failed to write to log file:', err.message);
    }
  }

  async monitorPerformance() {
    try {
      this.log('Starting performance monitoring...');
      
      // Check build performance
      const buildMetrics = await this.checkBuildPerformance();
      
      // Check bundle size
      const bundleMetrics = await this.checkBundleSize();
      
      // Check runtime performance
      const runtimeMetrics = await this.checkRuntimePerformance();
      
      // Generate performance report
      const performanceReport = {
        timestamp: new Date().toISOString(),
        build: buildMetrics,
        bundle: bundleMetrics,
        runtime: runtimeMetrics,
        recommendations: this.generateRecommendations(buildMetrics, bundleMetrics, runtimeMetrics)
      };
      
      // Save performance report
      fs.writeFileSync(this.performanceReport, JSON.stringify(performanceReport, null, 2));
      
      this.log('Performance monitoring completed');
      
      return performanceReport;
      
    } catch (error) {
      this.log(`Performance monitoring failed: ${error.message}`, 'ERROR');
      throw error;
    }
  }

  async checkBuildPerformance() {
    try {
      this.log('Checking build performance...');
      
      const startTime = Date.now();
      
      // Run build command
      execSync('npm run build', { 
        stdio: 'pipe',
        cwd: process.cwd()
      });
      
      const buildTime = Date.now() - startTime;
      
      return {
        buildTime: buildTime,
        status: buildTime < 60000 ? 'good' : buildTime < 120000 ? 'acceptable' : 'slow'
      };
    } catch (error) {
      this.log(`Build performance check failed: ${error.message}`, 'ERROR');
      return { error: error.message };
    }
  }

  async checkBundleSize() {
    try {
      this.log('Checking bundle size...');
      
      const buildDir = './.next/static';
      if (!fs.existsSync(buildDir)) {
        return { error: 'Build directory not found' };
      }
      
      // Get bundle sizes
      const bundleSizes = this.getDirectorySize(buildDir);
      
      return {
        totalSize: bundleSizes.total,
        fileCount: bundleSizes.fileCount,
        averageSize: bundleSizes.average,
        status: bundleSizes.total < 2000000 ? 'good' : bundleSizes.total < 5000000 ? 'acceptable' : 'large'
      };
    } catch (error) {
      this.log(`Bundle size check failed: ${error.message}`, 'ERROR');
      return { error: error.message };
    }
  }

  async checkRuntimePerformance() {
    try {
      this.log('Checking runtime performance...');
      
      // Check PM2 process performance
      const pm2Processes = this.getPM2ProcessPerformance();
      
      return {
        pm2Processes,
        memoryUsage: process.memoryUsage(),
        uptime: process.uptime()
      };
    } catch (error) {
      this.log(`Runtime performance check failed: ${error.message}`, 'ERROR');
      return { error: error.message };
    }
  }

  getDirectorySize(dirPath) {
    let totalSize = 0;
    let fileCount = 0;
    
    try {
      const files = fs.readdirSync(dirPath, { withFileTypes: true });
      
      for (const file of files) {
        const filePath = path.join(dirPath, file.name);
        
        if (file.isDirectory()) {
          const subDirSize = this.getDirectorySize(filePath);
          totalSize += subDirSize.total;
          fileCount += subDirSize.fileCount;
        } else {
          const stats = fs.statSync(filePath);
          totalSize += stats.size;
          fileCount++;
        }
      }
    } catch (error) {
      this.log(`Error calculating directory size: ${error.message}`, 'ERROR');
    }
    
    return {
      total: totalSize,
      fileCount: fileCount,
      average: fileCount > 0 ? totalSize / fileCount : 0
    };
  }

  getPM2ProcessPerformance() {
    try {
      const result = execSync('pm2 jlist', { encoding: 'utf8' });
      const processes = JSON.parse(result);
      
      return processes.map(p => ({
        name: p.name,
        memory: p.monit.memory,
        cpu: p.monit.cpu,
        status: p.pm2_env.status
      }));
    } catch (error) {
      this.log(`Failed to get PM2 process performance: ${error.message}`, 'ERROR');
      return [];
    }
  }

  generateRecommendations(buildMetrics, bundleMetrics, runtimeMetrics) {
    const recommendations = [];
    
    if (buildMetrics.buildTime > 120000) {
      recommendations.push('Consider optimizing build process - build time is slow');
    }
    
    if (bundleMetrics.total > 5000000) {
      recommendations.push('Bundle size is large - consider code splitting and tree shaking');
    }
    
    if (runtimeMetrics.pm2Processes.some(p => p.memory > 100000000)) {
      recommendations.push('Some processes are using high memory - consider optimization');
    }
    
    if (recommendations.length === 0) {
      recommendations.push('Performance looks good - no immediate optimizations needed');
    }
    
    return recommendations;
  }
}

// Run performance monitoring
async function main() {
  const monitor = new PerformanceMonitor();
  
  try {
    await monitor.monitorPerformance();
    process.exit(0);
  } catch (error) {
    monitor.log(`Performance monitoring failed: ${error.message}`, 'ERROR');
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = PerformanceMonitor;