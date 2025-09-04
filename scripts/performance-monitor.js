#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

class PerformanceMonitor {
  constructor() {
    this.metrics = {
      bundleSize: 0,
      memoryUsage: 0,
      timestamp: new Date().toISOString()
    }
  measureBundleSize() { 
    try {
      const buildDir = path.join(process.cwd(), '.next');
      if (fs.existsSync(buildDir)) {
        this.metrics.bundleSize = this.getDirectorySize(buildDir); 
      }
    } catch (error) { 
      console.error('Error measuring bundle size:', error); 
    }
  getDirectorySize(dirPath) { 
    let totalSize = 0;
    try {
      const files = fs.readdirSync(dirPath);
      files.forEach(file => {
        const filePath = path.join(dirPath, file);
        const stats = fs.statSync(filePath);
        if (stats.isDirectory()) {
          totalSize += this.getDirectorySize(filePath); 
        } else {
          totalSize += stats.size;
        }
      });
    } catch (error) { 
      console.error('Error reading directory:', error); 
    }
    return totalSize;
  }

  measureMemoryUsage() { 
    const usage = process.memoryUsage();
    this.metrics.memoryUsage = Math.round(usage.heapUsed / 1024 / 1024); // MB
  }

  generateReport() { 
    const report = {
      timestamp: this.metrics.timestamp,
      metrics: this.metrics,
      recommendations: this.generateRecommendations()
    }
    const reportPath = path.join(process.cwd(), 'performance-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    console.log('Performance report generated:', reportPath);
  }

  generateRecommendations() { 
    const recommendations = [];
    
    if (this.metrics.bundleSize > 1000000) {
      recommendations.push('Consider code splitting to reduce bundle size'); 
    }
    
    if (this.metrics.memoryUsage > 100) { 
      recommendations.push('High memory usage detected, consider optimization'); 
    }
    
    return recommendations;
  }
if (require.main === module) { 
  const monitor = new PerformanceMonitor();
  monitor.measureBundleSize();
  monitor.measureMemoryUsage();
  monitor.generateReport(); 
}

module.exports = PerformanceMonitor;