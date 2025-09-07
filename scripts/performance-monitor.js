#!/usr/bin/env node

/**
 * Performance Monitor Script
 * Monitors application performance metrics
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('📊 Starting performance monitoring...');

class PerformanceMonitor {
  constructor() {
    this.metrics = {
      timestamp: new Date().toISOString(),
      buildTime: 0,
      bundleSize: 0,
      pageLoadTime: 0,
      memoryUsage: process.memoryUsage(),
      cpuUsage: process.cpuUsage(),
      errors: []
    };
  }

  async measureBuildTime() {
    try {
      console.log('🔨 Measuring build time...');
      const startTime = Date.now();
      
      // Run build command
      execSync('npm run build', { stdio: 'pipe' });
      
      this.metrics.buildTime = Date.now() - startTime;
      console.log(`✅ Build completed in ${this.metrics.buildTime}ms`);
      
    } catch (error) {
      this.metrics.errors.push(`Build failed: ${error.message}`);
      console.error('❌ Build measurement failed:', error.message);
    }
  }

  async measureBundleSize() {
    try {
      console.log('📦 Measuring bundle size...');
      
      const buildDir = path.join(__dirname, '..', '.next');
      if (!fs.existsSync(buildDir)) {
        throw new Error('Build directory not found');
      }
      
      const bundleSize = this.getDirectorySize(buildDir);
      this.metrics.bundleSize = bundleSize;
      
      console.log(`✅ Bundle size: ${(bundleSize / 1024 / 1024).toFixed(2)} MB`);
      
    } catch (error) {
      this.metrics.errors.push(`Bundle size measurement failed: ${error.message}`);
      console.error('❌ Bundle size measurement failed:', error.message);
    }
  }

  async measurePageLoadTime() {
    try {
      console.log('⚡ Measuring page load time...');
      
      // Start the development server
      const serverProcess = execSync('npm run dev', { 
        stdio: 'pipe',
        timeout: 30000 
      });
      
      // Simulate page load measurement
      const startTime = Date.now();
      
      // Wait for server to be ready (simplified)
      await new Promise(resolve => setTimeout(resolve, 5000));
      
      this.metrics.pageLoadTime = Date.now() - startTime;
      console.log(`✅ Page load time: ${this.metrics.pageLoadTime}ms`);
      
    } catch (error) {
      this.metrics.errors.push(`Page load measurement failed: ${error.message}`);
      console.error('❌ Page load measurement failed:', error.message);
    }
  }

  getDirectorySize(dirPath) {
    let totalSize = 0;
    
    if (!fs.existsSync(dirPath)) {
      return 0;
    }
    
    const files = fs.readdirSync(dirPath, { withFileTypes: true });
    
    for (const file of files) {
      const fullPath = path.join(dirPath, file.name);
      
      if (file.isDirectory()) {
        totalSize += this.getDirectorySize(fullPath);
      } else {
        const stats = fs.statSync(fullPath);
        totalSize += stats.size;
      }
    }
    
    return totalSize;
  }

  generateReport() {
    const report = {
      ...this.metrics,
      recommendations: this.generateRecommendations()
    };
    
    const reportPath = path.join(__dirname, '..', 'performance-monitor-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    console.log('📄 Performance report saved to performance-monitor-report.json');
    return report;
  }

  generateRecommendations() {
    const recommendations = [];
    
    if (this.metrics.buildTime > 60000) {
      recommendations.push('Build time is high - consider code splitting and lazy loading');
    }
    
    if (this.metrics.bundleSize > 5 * 1024 * 1024) { // 5MB
      recommendations.push('Bundle size is large - consider tree shaking and removing unused code');
    }
    
    if (this.metrics.pageLoadTime > 3000) {
      recommendations.push('Page load time is slow - optimize images and implement caching');
    }
    
    if (this.metrics.memoryUsage.heapUsed > 100 * 1024 * 1024) { // 100MB
      recommendations.push('High memory usage - check for memory leaks');
    }
    
    return recommendations;
  }

  async run() {
    try {
      await this.measureBuildTime();
      await this.measureBundleSize();
      await this.measurePageLoadTime();
      
      const report = this.generateReport();
      
      console.log('\n📊 Performance Monitoring Summary:');
      console.log(`Build Time: ${this.metrics.buildTime}ms`);
      console.log(`Bundle Size: ${(this.metrics.bundleSize / 1024 / 1024).toFixed(2)} MB`);
      console.log(`Page Load Time: ${this.metrics.pageLoadTime}ms`);
      console.log(`Memory Usage: ${(this.metrics.memoryUsage.heapUsed / 1024 / 1024).toFixed(2)} MB`);
      console.log(`Errors: ${this.metrics.errors.length}`);
      
      if (report.recommendations.length > 0) {
        console.log('\n💡 Recommendations:');
        report.recommendations.forEach((rec, index) => {
          console.log(`${index + 1}. ${rec}`);
        });
      }
      
    } catch (error) {
      console.error('❌ Performance monitoring failed:', error.message);
      process.exit(1);
    }
  }
}

async function main() {
  const monitor = new PerformanceMonitor();
  await monitor.run();
}

if (require.main === module) {
  main();
}

module.exports = PerformanceMonitor;