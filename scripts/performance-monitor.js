#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class PerformanceMonitor {
  constructor() {
    this.metrics = {
      pageLoadTime: 0,
      bundleSize: 0,
      imageOptimization: 0,
      cacheHitRate: 0,
      memoryUsage: 0,
      timestamp: new Date().toISOString()
    };
  }

  /**
   * Measure page load time
   */
  measurePageLoadTime() {
    // Simulate page load time measurement
    const startTime = Date.now();
    
    // Simulate some processing
    setTimeout(() => {
      this.metrics.pageLoadTime = Date.now() - startTime;
    }, 100);
  }

  /**
   * Measure bundle size
   */
  measureBundleSize() {
    try {
      if (fs.existsSync('.next')) {
        const buildSize = execSync('du -sh .next', { encoding: 'utf8' }).trim();
        console.log(`✅ Build size: ${buildSize}`);
        
        const sizeInMB = parseInt(buildSize.split('\t')[0]);
        this.metrics.bundleSize = sizeInMB;
        
        if (sizeInMB < 50) {
          console.log('✅ Build size is within acceptable limits');
        } else {
          console.log('⚠️ Build size is large, consider optimization');
        }
      }
    } catch (error) {
      console.log('⚠️ Could not measure bundle size:', error.message);
    }
  }

  /**
   * Check image optimization
   */
  checkImageOptimization() {
    try {
      const imageFiles = this.findImageFiles();
      const optimizedImages = imageFiles.filter(file => 
        file.endsWith('.webp') || file.endsWith('.avif')
      );
      
      this.metrics.imageOptimization = (optimizedImages.length / imageFiles.length) * 100;
      
      if (this.metrics.imageOptimization > 50) {
        console.log('✅ Good image optimization');
      } else {
        console.log('⚠️ Consider optimizing images to WebP/AVIF format');
      }
    } catch (error) {
      console.log('⚠️ Could not check image optimization:', error.message);
    }
  }

  /**
   * Find image files
   */
  findImageFiles() {
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.avif'];
    const imageFiles = [];
    
    const scanDirectory = (dir) => {
      try {
        const files = fs.readdirSync(dir);
        files.forEach(file => {
          const filePath = path.join(dir, file);
          const stat = fs.statSync(filePath);
          
          if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
            scanDirectory(filePath);
          } else if (stat.isFile()) {
            const ext = path.extname(file).toLowerCase();
            if (imageExtensions.includes(ext)) {
              imageFiles.push(filePath);
            }
          }
        });
      } catch (error) {
        // Ignore errors
      }
    };
    
    scanDirectory(process.cwd());
    return imageFiles;
  }

  /**
   * Measure memory usage
   */
  measureMemoryUsage() {
    const usage = process.memoryUsage();
    this.metrics.memoryUsage = Math.round(usage.heapUsed / 1024 / 1024);
    
    console.log(`💾 Memory usage: ${this.metrics.memoryUsage}MB`);
    
    if (this.metrics.memoryUsage > 100) {
      console.log('⚠️ High memory usage detected');
    } else {
      console.log('✅ Memory usage is acceptable');
    }
  }

  /**
   * Check if application is running
   */
  checkApplicationStatus() {
    try {
      const isRunning = execSync('curl -s -o /dev/null -w "%{http_code}" http://localhost:3000', { 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      
      if (isRunning.trim() === '200') {
        console.log('✅ Application is running on localhost:3000');
        
        // Measure response time
        const responseTime = execSync('curl -s -o /dev/null -w "%{time_total}" http://localhost:3000', { 
          encoding: 'utf8',
          stdio: 'pipe'
        });
        
        const loadTime = parseFloat(responseTime) * 1000;
        this.metrics.pageLoadTime = loadTime;
        
        console.log(`✅ Response time: ${loadTime.toFixed(2)}ms`);
        
        if (loadTime < 1000) {
          console.log('✅ Response time is good');
        } else {
          console.log('⚠️ Response time could be improved');
        }
        
        return true;
      } else {
        console.log('⚠️ Application not running on localhost:3000');
        return false;
      }
    } catch (error) {
      console.log('⚠️ Could not check application status:', error.message);
      return false;
    }
  }

  /**
   * Generate performance report
   */
  generateReport() {
    const report = {
      timestamp: this.metrics.timestamp,
      metrics: this.metrics,
      recommendations: this.generateRecommendations()
    };
    
    const reportPath = path.join(process.cwd(), 'performance-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    console.log(`📄 Performance report generated: ${reportPath}`);
    
    return report;
  }

  /**
   * Generate recommendations based on metrics
   */
  generateRecommendations() {
    const recommendations = [];
    
    if (this.metrics.pageLoadTime > 2000) {
      recommendations.push('Consider implementing code splitting to reduce initial load time');
    }
    
    if (this.metrics.bundleSize > 50) {
      recommendations.push('Bundle size is large, consider tree shaking and code splitting');
    }
    
    if (this.metrics.imageOptimization < 50) {
      recommendations.push('Optimize images by converting to WebP or AVIF format');
    }
    
    if (this.metrics.memoryUsage > 100) {
      recommendations.push('High memory usage detected, consider optimization');
    }
    
    return recommendations;
  }

  /**
   * Run all performance checks
   */
  async runPerformanceCheck() {
    console.log('🚀 Starting performance monitoring...');
    
    this.measureBundleSize();
    this.checkImageOptimization();
    this.measureMemoryUsage();
    this.checkApplicationStatus();
    
    const report = this.generateReport();
    
    console.log('\n📊 Performance Summary:');
    console.log(`Bundle Size: ${this.metrics.bundleSize}MB`);
    console.log(`Memory Usage: ${this.metrics.memoryUsage}MB`);
    console.log(`Image Optimization: ${this.metrics.imageOptimization.toFixed(1)}%`);
    console.log(`Page Load Time: ${this.metrics.pageLoadTime}ms`);
    
    if (report.recommendations.length > 0) {
      console.log('\n💡 Recommendations:');
      report.recommendations.forEach((rec, index) => {
        console.log(`${index + 1}. ${rec}`);
      });
    }
    
    return report;
  }
}

// Run if called directly
if (require.main === module) {
  const monitor = new PerformanceMonitor();
  monitor.runPerformanceCheck().catch(console.error);
}

module.exports = PerformanceMonitor;