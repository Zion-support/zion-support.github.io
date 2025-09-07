#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

class PerformanceMonitor {
  constructor() {
    this.reportFile = path.join(process.cwd(), 'performance-monitor-report.json');
    this.metrics = {
      timestamp: new Date().toISOString(),
      buildTime: 0,
      bundleSize: 0,
      pageLoadTime: 0,
      memoryUsage: process.memoryUsage(),
      recommendations: []
    };
  }

  async monitorBuild() {
    console.log('🔍 Monitoring build performance...');
    
    const startTime = Date.now();
    
    try {
      // Check if build exists
      const buildDir = path.join(process.cwd(), '.next');
      if (fs.existsSync(buildDir)) {
        this.metrics.buildTime = Date.now() - startTime;
        this.metrics.bundleSize = this.calculateBundleSize(buildDir);
        console.log(`✅ Build found - Size: ${this.metrics.bundleSize} bytes`);
      } else {
        console.log('⚠️ No build found, running build...');
        const { execSync } = require('child_process');
        execSync('npm run build', { stdio: 'inherit' });
        this.metrics.buildTime = Date.now() - startTime;
        this.metrics.bundleSize = this.calculateBundleSize(buildDir);
      }
      
      this.generateRecommendations();
      this.saveReport();
      
      return {
        success: true,
        metrics: this.metrics
      };
    } catch (error) {
      console.error('❌ Performance monitoring failed:', error.message);
      return {
        success: false,
        error: error.message
      };
    }
  }

  calculateBundleSize(dir) {
    let totalSize = 0;
    
    function calculateDirSize(dirPath) {
      const items = fs.readdirSync(dirPath);
      
      for (const item of items) {
        const itemPath = path.join(dirPath, item);
        const stats = fs.statSync(itemPath);
        
        if (stats.isDirectory()) {
          calculateDirSize(itemPath);
        } else {
          totalSize += stats.size;
        }
      }
    }
    
    if (fs.existsSync(dir)) {
      calculateDirSize(dir);
    }
    
    return totalSize;
  }

  generateRecommendations() {
    const recommendations = [];
    
    // Bundle size recommendations
    if (this.metrics.bundleSize > 5 * 1024 * 1024) { // 5MB
      recommendations.push({
        type: 'bundle_size',
        priority: 'high',
        message: 'Bundle size is large (>5MB). Consider code splitting and lazy loading.',
        action: 'Implement dynamic imports and optimize dependencies'
      });
    }
    
    // Build time recommendations
    if (this.metrics.buildTime > 60000) { // 1 minute
      recommendations.push({
        type: 'build_time',
        priority: 'medium',
        message: 'Build time is slow (>1 minute). Consider optimizing build process.',
        action: 'Review webpack configuration and dependencies'
      });
    }
    
    // Memory usage recommendations
    const memoryUsage = this.metrics.memoryUsage;
    const memoryMB = memoryUsage.heapUsed / 1024 / 1024;
    
    if (memoryMB > 500) { // 500MB
      recommendations.push({
        type: 'memory_usage',
        priority: 'medium',
        message: `High memory usage (${memoryMB.toFixed(2)}MB). Consider memory optimization.`,
        action: 'Review memory leaks and optimize data structures'
      });
    }
    
    this.metrics.recommendations = recommendations;
  }

  saveReport() {
    try {
      fs.writeFileSync(this.reportFile, JSON.stringify(this.metrics, null, 2));
      console.log(`📊 Performance report saved: ${this.reportFile}`);
    } catch (error) {
      console.error('❌ Failed to save performance report:', error.message);
    }
  }
}

// Run if called directly
if (require.main === module) {
  const monitor = new PerformanceMonitor();
  monitor.monitorBuild().catch(console.error);
}

module.exports = PerformanceMonitor;