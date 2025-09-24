#!/usr/bin/env node

/**
 * Performance monitoring script for Zion.app
 * Monitors build performance, bundle size, and deployment metrics
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class PerformanceMonitor {
  constructor() {
    this.metrics = {
      buildTime: 0,
      bundleSize: 0,
      timestamp: new Date().toISOString(),
    };
  }

  async measureBuildPerformance() {
    console.log('🔍 Measuring build performance...');
    
    const startTime = Date.now();
    
    try {
      // Run build and capture output
      const buildOutput = execSync('npm run build', { 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      
      this.metrics.buildTime = Date.now() - startTime;
      
      // Extract bundle size from build output
      const bundleSizeMatch = buildOutput.match(/First Load JS shared by all\s+(\d+(?:\.\d+)?)\s+kB/);
      if (bundleSizeMatch) {
        this.metrics.bundleSize = parseFloat(bundleSizeMatch[1]);
      }
      
      console.log(`✅ Build completed in ${this.metrics.buildTime}ms`);
      console.log(`📦 Bundle size: ${this.metrics.bundleSize}kB`);
      
    } catch (error) {
      console.error('❌ Build failed:', error.message);
      throw error;
    }
  }

  async analyzeBundleSize() {
    console.log('📊 Analyzing bundle size...');
    
    const nextDir = path.join(process.cwd(), '.next');
    if (!fs.existsSync(nextDir)) {
      console.log('⚠️  No .next directory found. Run build first.');
      return;
    }

    // Analyze static files
    const staticDir = path.join(nextDir, 'static');
    if (fs.existsSync(staticDir)) {
      const files = this.getFilesRecursively(staticDir);
      const totalSize = files.reduce((sum, file) => {
        const stats = fs.statSync(file);
        return sum + stats.size;
      }, 0);
      
      console.log(`📁 Static files: ${(totalSize / 1024).toFixed(2)}kB`);
    }
  }

  getFilesRecursively(dir) {
    let files = [];
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        files = files.concat(this.getFilesRecursively(fullPath));
      } else {
        files.push(fullPath);
      }
    }
    
    return files;
  }

  async generateReport() {
    console.log('📋 Generating performance report...');
    
    const report = {
      timestamp: this.metrics.timestamp,
      buildTime: this.metrics.buildTime,
      bundleSize: this.metrics.bundleSize,
      recommendations: this.getRecommendations(),
    };

    const reportPath = path.join(process.cwd(), 'performance-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    console.log(`📄 Report saved to: ${reportPath}`);
    console.log('\n🎯 Recommendations:');
    report.recommendations.forEach(rec => console.log(`  • ${rec}`));
  }

  getRecommendations() {
    const recommendations = [];
    
    if (this.metrics.buildTime > 10000) {
      recommendations.push('Consider optimizing build process - build time is over 10s');
    }
    
    if (this.metrics.bundleSize > 200) {
      recommendations.push('Bundle size is large - consider code splitting or tree shaking');
    }
    
    if (this.metrics.bundleSize < 100) {
      recommendations.push('Great bundle size! Keep up the good work');
    }
    
    recommendations.push('Enable compression in production');
    recommendations.push('Consider implementing service worker for caching');
    recommendations.push('Monitor Core Web Vitals in production');
    
    return recommendations;
  }

  async run() {
    try {
      console.log('🚀 Starting performance monitoring...\n');
      
      await this.measureBuildPerformance();
      await this.analyzeBundleSize();
      await this.generateReport();
      
      console.log('\n✅ Performance monitoring completed!');
      
    } catch (error) {
      console.error('❌ Performance monitoring failed:', error.message);
      process.exit(1);
    }
  }
}

// Run if called directly
if (require.main === module) {
  const monitor = new PerformanceMonitor();
  monitor.run();
}

module.exports = PerformanceMonitor;