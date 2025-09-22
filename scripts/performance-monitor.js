#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class PerformanceMonitor {
  constructor() {
    this.startTime = null;
    this.endTime = null;
    this.metrics = {
      buildTime: 0,
      bundleSize: 0,
      pageCount: 0,
      staticAssets: 0,
      memoryUsage: 0,
      cpuUsage: 0
    };
    this.reportPath = path.join(__dirname, '..', 'performance-report.json');
  }

  start() {
    console.log('🚀 Starting performance monitoring...');
    this.startTime = Date.now();
    
    // Monitor system resources
    this.monitorSystemResources();
    
    console.log('📊 Performance monitoring started');
  }

  end() {
    if (!this.startTime) {
      console.log('❌ Performance monitoring was not started');
      return;
    }

    this.endTime = Date.now();
    this.metrics.buildTime = this.endTime - this.startTime;
    
    console.log('⏹️  Stopping performance monitoring...');
    
    // Calculate additional metrics
    this.calculateBundleSize();
    this.calculatePageCount();
    this.calculateStaticAssets();
    
    // Generate report
    this.generateReport();
    
    console.log('✅ Performance monitoring completed');
    console.log(`📊 Build time: ${this.metrics.buildTime}ms`);
    console.log(`📦 Bundle size: ${this.metrics.bundleSize}KB`);
    console.log(`📄 Pages: ${this.metrics.pageCount}`);
  }

  monitorSystemResources() {
    try {
      const memUsage = process.memoryUsage();
      this.metrics.memoryUsage = Math.round(memUsage.heapUsed / 1024 / 1024); // MB
    } catch (error) {
      console.log('⚠️  Could not monitor memory usage:', error.message);
    }
  }

  calculateBundleSize() {
    try {
      const outDir = path.join(__dirname, '..', 'out');
      if (fs.existsSync(outDir)) {
        const bundleSize = this.getDirectorySize(outDir);
        this.metrics.bundleSize = Math.round(bundleSize / 1024); // KB
      }
    } catch (error) {
      console.log('⚠️  Could not calculate bundle size:', error.message);
    }
  }

  calculatePageCount() {
    try {
      const pagesDir = path.join(__dirname, '..', 'pages');
      if (fs.existsSync(pagesDir)) {
        const pages = fs.readdirSync(pagesDir)
          .filter(file => file.endsWith('.js') || file.endsWith('.jsx'))
          .filter(file => !file.startsWith('_'));
        this.metrics.pageCount = pages.length;
      }
    } catch (error) {
      console.log('⚠️  Could not calculate page count:', error.message);
    }
  }

  calculateStaticAssets() {
    try {
      const publicDir = path.join(__dirname, '..', 'public');
      if (fs.existsSync(publicDir)) {
        const assets = this.getDirectorySize(publicDir);
        this.metrics.staticAssets = Math.round(assets / 1024); // KB
      }
    } catch (error) {
      console.log('⚠️  Could not calculate static assets:', error.message);
    }
  }

  getDirectorySize(dirPath) {
    let totalSize = 0;
    
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
    
    return totalSize;
  }

  generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      metrics: this.metrics,
      performance: {
        score: this.calculatePerformanceScore(),
        recommendations: this.generateRecommendations()
      }
    };

    try {
      fs.writeFileSync(this.reportPath, JSON.stringify(report, null, 2));
      console.log(`📄 Performance report saved to: ${this.reportPath}`);
    } catch (error) {
      console.log('❌ Could not save performance report:', error.message);
    }
  }

  calculatePerformanceScore() {
    let score = 100;
    
    // Deduct points for slow build time
    if (this.metrics.buildTime > 60000) score -= 20; // > 1 minute
    else if (this.metrics.buildTime > 30000) score -= 10; // > 30 seconds
    
    // Deduct points for large bundle size
    if (this.metrics.bundleSize > 1000) score -= 20; // > 1MB
    else if (this.metrics.bundleSize > 500) score -= 10; // > 500KB
    
    // Deduct points for high memory usage
    if (this.metrics.memoryUsage > 1000) score -= 15; // > 1GB
    else if (this.metrics.memoryUsage > 500) score -= 5; // > 500MB
    
    return Math.max(0, score);
  }

  generateRecommendations() {
    const recommendations = [];
    
    if (this.metrics.buildTime > 30000) {
      recommendations.push({
        type: 'performance',
        priority: 'high',
        message: 'Build time is slow. Consider optimizing webpack configuration or reducing bundle size.'
      });
    }
    
    if (this.metrics.bundleSize > 500) {
      recommendations.push({
        type: 'bundle',
        priority: 'medium',
        message: 'Bundle size is large. Consider implementing code splitting or removing unused dependencies.'
      });
    }
    
    if (this.metrics.memoryUsage > 500) {
      recommendations.push({
        type: 'memory',
        priority: 'low',
        message: 'High memory usage detected. Consider optimizing image sizes or implementing lazy loading.'
      });
    }
    
    if (this.metrics.pageCount > 20) {
      recommendations.push({
        type: 'architecture',
        priority: 'medium',
        message: 'Many pages detected. Consider implementing dynamic routing or page optimization.'
      });
    }
    
    return recommendations;
  }

  compare() {
    try {
      if (fs.existsSync(this.reportPath)) {
        const report = JSON.parse(fs.readFileSync(this.reportPath, 'utf8'));
        console.log('\n📊 Performance Comparison:');
        console.log(`Build Time: ${report.metrics.buildTime}ms`);
        console.log(`Bundle Size: ${report.metrics.bundleSize}KB`);
        console.log(`Pages: ${report.metrics.pageCount}`);
        console.log(`Performance Score: ${report.performance.score}/100`);
        
        if (report.performance.recommendations.length > 0) {
          console.log('\n💡 Recommendations:');
          report.performance.recommendations.forEach((rec, index) => {
            console.log(`${index + 1}. [${rec.priority.toUpperCase()}] ${rec.message}`);
          });
        }
      } else {
        console.log('❌ No performance report found. Run "npm run build" first.');
      }
    } catch (error) {
      console.log('❌ Could not read performance report:', error.message);
    }
  }
}

// CLI Interface
const monitor = new PerformanceMonitor();
const command = process.argv[2];

switch (command) {
  case 'start':
    monitor.start();
    break;
  case 'end':
    monitor.end();
    break;
  case 'compare':
    monitor.compare();
    break;
  default:
    console.log('Usage: node performance-monitor.js [start|end|compare]');
    console.log('  start  - Start performance monitoring');
    console.log('  end    - End performance monitoring and generate report');
    console.log('  compare - Compare current performance metrics');
}