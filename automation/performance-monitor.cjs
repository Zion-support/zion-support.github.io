#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class PerformanceMonitor {
  constructor() {
    this.projectRoot = process.cwd();
    this.metrics = {};
    this.recommendations = [];
  }

  log(message, type = 'INFO') {
    const timestamp = new Date().toISOString();
    const prefix = {
      'INFO': 'ℹ️',
      'SUCCESS': '✅',
      'ERROR': '❌',
      'WARNING': '⚠️',
      'PROGRESS': '🔄'
    }[type] || 'ℹ️';
    console.log(`${prefix} [${timestamp}] ${message}`);
  }

  async measureBuildPerformance() {
    this.log('🏗️ Measuring build performance...');
    try {
      const startTime = Date.now();
      execSync('npm run build', { 
        cwd: this.projectRoot, 
        stdio: 'pipe' 
      });
      const buildTime = Date.now() - startTime;
      
      this.metrics.buildTime = buildTime;
      this.log(`✅ Build completed in ${buildTime}ms`);
      
      // Analyze build output
      const buildDir = path.join(this.projectRoot, '.next');
      if (fs.existsSync(buildDir)) {
        const buildSize = this.getDirectorySize(buildDir);
        this.metrics.buildSize = buildSize;
        this.log(`📊 Build size: ${(buildSize / 1024 / 1024).toFixed(2)} MB`);
      }
    } catch (error) {
      this.log(`❌ Build performance measurement failed: ${error.message}`, 'ERROR');
    }
  }

  async measureTestPerformance() {
    this.log('🧪 Measuring test performance...');
    try {
      const startTime = Date.now();
      execSync('npm test -- --passWithNoTests', { 
        cwd: this.projectRoot, 
        stdio: 'pipe' 
      });
      const testTime = Date.now() - startTime;
      
      this.metrics.testTime = testTime;
      this.log(`✅ Tests completed in ${testTime}ms`);
    } catch (error) {
      this.log(`❌ Test performance measurement failed: ${error.message}`, 'ERROR');
    }
  }

  async analyzeBundleSize() {
    this.log('📦 Analyzing bundle size...');
    try {
      const buildDir = path.join(this.projectRoot, '.next/static');
      if (fs.existsSync(buildDir)) {
        const bundleSize = this.getDirectorySize(buildDir);
        this.metrics.bundleSize = bundleSize;
        this.log(`📊 Bundle size: ${(bundleSize / 1024 / 1024).toFixed(2)} MB`);
        
        // Check for large files
        const largeFiles = this.findLargeFiles(buildDir);
        if (largeFiles.length > 0) {
          this.recommendations.push('Consider code splitting for large files');
          this.log(`⚠️ Found ${largeFiles.length} large files (>1MB)`);
        }
      }
    } catch (error) {
      this.log(`❌ Bundle analysis failed: ${error.message}`, 'ERROR');
    }
  }

  async checkMemoryUsage() {
    this.log('🧠 Checking memory usage...');
    try {
      const memUsage = process.memoryUsage();
      this.metrics.memoryUsage = {
        rss: Math.round(memUsage.rss / 1024 / 1024),
        heapTotal: Math.round(memUsage.heapTotal / 1024 / 1024),
        heapUsed: Math.round(memUsage.heapUsed / 1024 / 1024),
        external: Math.round(memUsage.external / 1024 / 1024)
      };
      
      this.log(`📊 Memory usage: ${this.metrics.memoryUsage.heapUsed}MB heap, ${this.metrics.memoryUsage.rss}MB RSS`);
      
      if (this.metrics.memoryUsage.heapUsed > 100) {
        this.recommendations.push('Consider optimizing memory usage - heap usage is high');
      }
    } catch (error) {
      this.log(`❌ Memory check failed: ${error.message}`, 'ERROR');
    }
  }

  getDirectorySize(dirPath) {
    let totalSize = 0;
    const files = fs.readdirSync(dirPath);
    
    for (const file of files) {
      const filePath = path.join(dirPath, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        totalSize += this.getDirectorySize(filePath);
      } else {
        totalSize += stat.size;
      }
    }
    
    return totalSize;
  }

  findLargeFiles(dirPath, threshold = 1024 * 1024) { // 1MB threshold
    const largeFiles = [];
    
    const scanDir = (dir) => {
      const files = fs.readdirSync(dir);
      for (const file of files) {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        
        if (stat.isDirectory()) {
          scanDir(filePath);
        } else if (stat.size > threshold) {
          largeFiles.push({
            path: path.relative(this.projectRoot, filePath),
            size: stat.size
          });
        }
      }
    };
    
    scanDir(dirPath);
    return largeFiles;
  }

  generateRecommendations() {
    // Build time recommendations
    if (this.metrics.buildTime > 60000) { // 1 minute
      this.recommendations.push('Build time is slow - consider optimizing dependencies or using build caching');
    }
    
    // Bundle size recommendations
    if (this.metrics.bundleSize > 5 * 1024 * 1024) { // 5MB
      this.recommendations.push('Bundle size is large - consider code splitting and tree shaking');
    }
    
    // Test time recommendations
    if (this.metrics.testTime > 30000) { // 30 seconds
      this.recommendations.push('Test execution is slow - consider parallel test execution');
    }
    
    // General recommendations
    this.recommendations.push('Enable gzip compression for production');
    this.recommendations.push('Use CDN for static assets');
    this.recommendations.push('Implement lazy loading for components');
  }

  async generateReport() {
    this.log('📊 Generating performance report...');
    
    this.generateRecommendations();
    
    const report = {
      timestamp: new Date().toISOString(),
      metrics: this.metrics,
      recommendations: this.recommendations,
      summary: {
        buildTime: this.metrics.buildTime ? `${this.metrics.buildTime}ms` : 'N/A',
        bundleSize: this.metrics.bundleSize ? `${(this.metrics.bundleSize / 1024 / 1024).toFixed(2)}MB` : 'N/A',
        testTime: this.metrics.testTime ? `${this.metrics.testTime}ms` : 'N/A',
        memoryUsage: this.metrics.memoryUsage ? `${this.metrics.memoryUsage.heapUsed}MB` : 'N/A'
      }
    };
    
    const reportPath = path.join(this.projectRoot, 'performance-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    this.log(`✅ Performance report saved to: ${reportPath}`);
    return report;
  }

  async run() {
    this.log('🎯 Starting Performance Monitoring...');
    this.log('=====================================');
    try {
      await this.measureBuildPerformance();
      await this.measureTestPerformance();
      await this.analyzeBundleSize();
      await this.checkMemoryUsage();
      
      const report = await this.generateReport();
      
      this.log('\n📊 PERFORMANCE MONITORING REPORT');
      this.log('==================================');
      this.log(`Build Time: ${report.summary.buildTime}`);
      this.log(`Bundle Size: ${report.summary.bundleSize}`);
      this.log(`Test Time: ${report.summary.testTime}`);
      this.log(`Memory Usage: ${report.summary.memoryUsage}`);
      
      if (this.recommendations.length > 0) {
        this.log('\n💡 Recommendations:');
        this.recommendations.forEach((rec, index) => {
          this.log(`  ${index + 1}. ${rec}`);
        });
      }
      
      this.log('\n🎉 Performance monitoring completed!');
    } catch (error) {
      this.log(`💥 Fatal error: ${error.message}`, 'ERROR');
      process.exit(1);
    }
  }
}

const monitor = new PerformanceMonitor();
monitor.run().catch(console.error);

module.exports = PerformanceMonitor;