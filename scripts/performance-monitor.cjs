#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class PerformanceMonitor {
  constructor() {
    this.metrics = {
      bundleSize: 0,
      memoryUsage: 0,
      timestamp: new Date().toISOString()
    };
  }

  async checkBuildSize() {
    try {
      if (fs.existsSync('.next')) {
        const buildSize = execSync('du -sh .next', { encoding: 'utf8' }).trim();
        const sizeInMB = parseInt(buildSize.split('\t')[0]);
        this.metrics.bundleSize = sizeInMB;
        console.log(`📦 Build size: ${sizeInMB}MB`);
        return sizeInMB < 50;
      }
      return false;
    } catch (error) {
      console.log('❌ Could not check build size:', error.message);
      return false;
    }
  }

  async checkMemoryUsage() {
    try {
      const usage = process.memoryUsage();
      this.metrics.memoryUsage = Math.round(usage.heapUsed / 1024 / 1024);
      console.log(`🧠 Memory usage: ${this.metrics.memoryUsage}MB`);
      return this.metrics.memoryUsage < 100;
    } catch (error) {
      console.log('❌ Could not check memory usage:', error.message);
      return false;
    }
  }

  generateRecommendations() {
    const recommendations = [];
    
    if (this.metrics.bundleSize > 50) {
      recommendations.push('Consider code splitting to reduce bundle size');
    }
    
    if (this.metrics.memoryUsage > 100) {
      recommendations.push('Optimize memory usage - check for memory leaks');
    }
    
    return recommendations;
  }

  generateReport() {
    const report = {
      timestamp: this.metrics.timestamp,
      metrics: this.metrics,
      recommendations: this.generateRecommendations()
    };

    const reportPath = path.join(process.cwd(), 'performance-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    console.log(`📊 Performance report saved to ${reportPath}`);
    
    return report;
  }

  async run() {
    console.log('🚀 Starting performance monitoring...');
    
    const buildSizeOk = await this.checkBuildSize();
    const memoryOk = await this.checkMemoryUsage();
    
    const report = this.generateReport();
    
    console.log('✅ Performance monitoring completed');
    console.log(`📦 Build size: ${buildSizeOk ? '✅' : '❌'}`);
    console.log(`🧠 Memory usage: ${memoryOk ? '✅' : '❌'}`);
    
    return report;
  }
}

// Main execution
if (require.main === module) {
  const monitor = new PerformanceMonitor();
  monitor.run().catch(console.error);
}

module.exports = PerformanceMonitor;