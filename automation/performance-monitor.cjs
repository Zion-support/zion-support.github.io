#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class PerformanceMonitor {
  constructor() {
    this.metrics = {
      buildTime: 0,
      bundleSize: 0,
      memoryUsage: 0,
      cpuUsage: 0,
      lastUpdated: new Date().toISOString()
    };
    this.logFile = path.join(__dirname, 'logs', 'performance-monitor.log');
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
    console.log(`[${level}] ${message}`);
    fs.appendFileSync(this.logFile, logMessage);
  }

  async monitorPerformance() {
    this.log('⚡ Starting performance monitoring...');
    
    try {
      // Monitor build time
      const buildTime = await this.measureBuildTime();
      this.metrics.buildTime = buildTime;
      
      // Monitor bundle size
      const bundleSize = await this.measureBundleSize();
      this.metrics.bundleSize = bundleSize;
      
      // Monitor memory usage
      const memoryUsage = process.memoryUsage();
      this.metrics.memoryUsage = memoryUsage.heapUsed / 1024 / 1024; // MB
      
      // Monitor CPU usage
      const cpuUsage = process.cpuUsage();
      this.metrics.cpuUsage = cpuUsage.user / 1000000; // seconds
      
      this.metrics.lastUpdated = new Date().toISOString();
      
      await this.saveMetrics();
      await this.generatePerformanceReport();
      
      this.log('Performance monitoring completed');
      return this.metrics;
    } catch (error) {
      this.log(`Performance monitoring failed: ${error.message}`, 'ERROR');
      return null;
    }
  }

  async measureBuildTime() {
    const startTime = Date.now();
    try {
      execSync('npm run build', { stdio: 'pipe', cwd: process.cwd() });
      return Date.now() - startTime;
    } catch (error) {
      return -1; // Build failed
    }
  }

  async measureBundleSize() {
    try {
      const buildDir = path.join(process.cwd(), '.next');
      if (!fs.existsSync(buildDir)) {
        return 0;
      }
      
      const getDirSize = (dir) => {
        let size = 0;
        const files = fs.readdirSync(dir);
        
        files.forEach(file => {
          const filePath = path.join(dir, file);
          const stat = fs.statSync(filePath);
          
          if (stat.isDirectory()) {
            size += getDirSize(filePath);
          } else {
            size += stat.size;
          }
        });
        
        return size;
      };
      
      return getDirSize(buildDir);
    } catch (error) {
      return 0;
    }
  }

  async saveMetrics() {
    const metricsFile = path.join(__dirname, 'reports', 'performance-metrics.json');
    fs.mkdirSync(path.dirname(metricsFile), { recursive: true });
    fs.writeFileSync(metricsFile, JSON.stringify(this.metrics, null, 2));
  }

  async generatePerformanceReport() {
    const report = {
      ...this.metrics,
      recommendations: this.generateRecommendations()
    };

    const reportFile = path.join(__dirname, 'reports', 'performance-report.json');
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    
    this.log(`Performance report generated: ${reportFile}`);
  }

  generateRecommendations() {
    const recommendations = [];
    
    if (this.metrics.buildTime > 60000) { // 1 minute
      recommendations.push('Consider optimizing build process - build time is high');
    }
    
    if (this.metrics.bundleSize > 5000000) { // 5MB
      recommendations.push('Consider code splitting - bundle size is large');
    }
    
    if (this.metrics.memoryUsage > 100) { // 100MB
      recommendations.push('Consider memory optimization - high memory usage detected');
    }
    
    return recommendations;
  }
}

// Run if called directly
if (require.main === module) {
  const monitor = new PerformanceMonitor();
  monitor.monitorPerformance().catch(console.error);
}

module.exports = PerformanceMonitor;