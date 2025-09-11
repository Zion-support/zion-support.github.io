#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

class PerformanceMonitor {
  constructor() {
    this.metrics = {
      bundleSize: 0,
      loadTime: 0,
      memoryUsage: 0,
      timestamp: new Date().toISOString(),
    };
  }

  async measureBundleSize() {
    try {
      const buildDir = path.join(process.cwd(), '.next');
      if (fs.existsSync(buildDir)) {
        const stats = fs.statSync(buildDir);
        this.metrics.bundleSize = stats.size;
      }
    } catch (error) {
      console.error('Error measuring bundle size:', error);
    }
  }

  async measureMemoryUsage() {
    const usage = process.memoryUsage();
    this.metrics.memoryUsage = usage.heapUsed / 1024 / 1024; // MB
  }

  generateReport() {
    const report = {
      timestamp: this.metrics.timestamp,
      bundleSize: this.metrics.bundleSize,
      memoryUsage: this.metrics.memoryUsage,
      recommendations: [],
    };

    if (this.metrics.bundleSize > 1000000) {
      report.recommendations.push(
        'Consider code splitting to reduce bundle size'
      );
    }
    if (this.metrics.memoryUsage > 100) {
      report.recommendations.push('Consider optimizing memory usage');
    }

    return report;
  }
}

const monitor = new PerformanceMonitor();
monitor.measureBundleSize();
monitor.measureMemoryUsage();
const report = monitor.generateReport();
const reportPath = path.join(process.cwd(), 'performance-report.json');
fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
console.log('Performance report generated:', reportPath);
