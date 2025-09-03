#!/usr/bin/env node

/**
 * Performance Monitor
 * Monitors and analyzes application performance
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

class PerformanceMonitor {
  constructor() {
    this.metrics = {
      buildTime: 0,
      bundleSize: 0,
      testTime: 0,
      memoryUsage: 0
    };
    this.startTime = Date.now();
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] [${level}] ${message}`);
  }

  async monitorPerformance() {
    this.log('⚡ Starting performance monitoring...');
    
    try {
      // Monitor build performance
      this.log('Monitoring build performance...');
      const buildStart = Date.now();
      execSync('npm run build', { stdio: 'inherit' });
      this.metrics.buildTime = Date.now() - buildStart;
      
      // Check bundle size
      const buildDir = './.next';
      if (fs.existsSync(buildDir)) {
        this.metrics.bundleSize = this.getDirectorySize(buildDir);
      }
      
      // Monitor test performance
      this.log('Monitoring test performance...');
      const testStart = Date.now();
      try {
        execSync('npm test', { stdio: 'inherit' });
        this.metrics.testTime = Date.now() - testStart;
      } catch (error) {
        this.log('Tests failed, but continuing with performance monitoring', 'WARN');
      }
      
      // Monitor memory usage
      this.metrics.memoryUsage = process.memoryUsage();
      
      this.log('✅ Performance monitoring completed successfully');
      return { success: true, metrics: this.metrics };
    } catch (error) {
      this.log(`❌ Performance monitoring failed: ${error.message}`, 'ERROR');
      return { success: false, error: error.message, metrics: this.metrics };
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
      this.log(`Error calculating directory size: ${error.message}`, 'WARN');
    }
    
    return totalSize;
  }

  async generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      duration: Date.now() - this.startTime,
      metrics: this.metrics,
      recommendations: this.generateRecommendations()
    };

    const reportPath = path.join(__dirname, '..', 'automation', 'logs', 'performance-report.json');
    const logDir = path.dirname(reportPath);
    
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
    
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    this.log(`📄 Report saved to: ${reportPath}`);
    
    return report;
  }

  generateRecommendations() {
    const recommendations = [];
    
    if (this.metrics.buildTime > 60000) { // 1 minute
      recommendations.push('Consider optimizing build process - build time is high');
    }
    
    if (this.metrics.bundleSize > 50 * 1024 * 1024) { // 50MB
      recommendations.push('Bundle size is large - consider code splitting and tree shaking');
    }
    
    if (this.metrics.testTime > 30000) { // 30 seconds
      recommendations.push('Test execution time is high - consider parallel test execution');
    }
    
    if (this.metrics.memoryUsage.heapUsed > 100 * 1024 * 1024) { // 100MB
      recommendations.push('High memory usage detected - consider memory optimization');
    }
    
    return recommendations;
  }

  async run() {
    try {
      const result = await this.monitorPerformance();
      const report = await this.generateReport();
      
      this.log('🎉 Performance monitoring completed!');
      this.log(`📊 Build time: ${this.metrics.buildTime}ms`);
      this.log(`📦 Bundle size: ${(this.metrics.bundleSize / 1024 / 1024).toFixed(2)}MB`);
      
      if (report.recommendations.length > 0) {
        this.log('💡 Recommendations:');
        report.recommendations.forEach(rec => this.log(`  - ${rec}`));
      }
      
      return report;
    } catch (error) {
      this.log(`💥 Performance monitoring failed: ${error.message}`, 'ERROR');
      throw error;
    }
  }
}

// Run if called directly
if (require.main === module) {
  const monitor = new PerformanceMonitor();
  monitor.run().catch(console.error);
}

module.exports = PerformanceMonitor;