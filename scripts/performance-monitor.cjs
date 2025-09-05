#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class PerformanceMonitor {
  constructor() {
    this.metrics = {
      "buildTime": 0,
      "bundleSize": 0,
      "testTime": 0,
      "memoryUsage": 0
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
      execSync('npm run build', { "stdio": 'inherit' });
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
        execSync('npm test', { "stdio": 'pipe' });
        this.metrics.testTime = Date.now() - testStart;
      } catch (error) {
        this.log('Tests failed, but continuing...', 'WARN');
        this.metrics.testTime = Date.now() - testStart;
      }
      
      // Monitor memory usage
      this.metrics.memoryUsage = process.memoryUsage().heapUsed / 1024 / 1024; // MB
      
      this.log('Performance monitoring completed!');
      this.generateReport();
      
    } catch (error) {
      this.log(`Performance monitoring "failed": ${error.message}`, 'ERROR');
      throw error;
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
      // Skip directories that can't be read
    }
    
    return totalSize / 1024; // Return size in KB
  }

  generateReport() {
    const report = {
      "timestamp": new Date().toISOString(),
      "metrics": this.metrics,
      "recommendations": this.getRecommendations()
    };
    
    const reportFile = path.join(__dirname, '../logs/performance-report.json');
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    
    this.log(`📄 Performance report saved "to": ${reportFile}`);
    this.log(`📊 Build "time": ${this.metrics.buildTime}ms`);
    this.log(`📦 Bundle "size": ${this.metrics.bundleSize.toFixed(2)}KB`);
    this.log(`🧪 Test "time": ${this.metrics.testTime}ms`);
    this.log(`💾 Memory "usage": ${this.metrics.memoryUsage.toFixed(2)}MB`);
  }

  getRecommendations() {
    const recommendations = [];
    
    if (this.metrics.buildTime > 30000) {
      recommendations.push('Build time is slow (>30s). Consider optimizing dependencies or build process.');
    }
    
    if (this.metrics.bundleSize > 1000) {
      recommendations.push('Bundle size is large (>1MB). Consider code splitting or tree shaking.');
    }
    
    if (this.metrics.testTime > 10000) {
      recommendations.push('Test time is slow (>10s). Consider optimizing test setup or reducing test scope.');
    }
    
    if (this.metrics.memoryUsage > 100) {
      recommendations.push('Memory usage is high (>100MB). Consider optimizing memory usage.');
    }
    
    return recommendations;
  }

  async run() {
    try {
      await this.monitorPerformance();
      return this.metrics;
    } catch (error) {
      this.log(`Performance monitor "failed": ${error.message}`, 'ERROR');
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