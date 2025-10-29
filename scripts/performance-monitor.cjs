#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Performance monitoring script
class PerformanceMonitor {
  constructor() {
    this.metrics = {
      bundleSize: 0,
      assetCount: 0,
      cssSize: 0,
      jsSize: 0,
      imageSize: 0,
      fontSize: 0,
      otherSize: 0,
      timestamp: new Date().toISOString()
    };
  }

  // Analyze build output
  analyzeBuild() {
    const distPath = path.join(__dirname, '../dist');
    
    if (!fs.existsSync(distPath)) {
      console.error('❌ Dist directory not found. Run build first.');
      process.exit(1);
    }

    console.log('🔍 Analyzing build output...');
    
    this.analyzeDirectory(distPath);
    this.generateReport();
  }

  // Recursively analyze directory
  analyzeDirectory(dirPath, relativePath = '') {
    const items = fs.readdirSync(dirPath);
    
    items.forEach(item => {
      const itemPath = path.join(dirPath, item);
      const itemRelativePath = path.join(relativePath, item);
      const stats = fs.statSync(itemPath);
      
      if (stats.isDirectory()) {
        this.analyzeDirectory(itemPath, itemRelativePath);
      } else {
        this.analyzeFile(itemPath, itemRelativePath, stats.size);
      }
    });
  }

  // Analyze individual file
  analyzeFile(filePath, relativePath, size) {
    this.metrics.assetCount++;
    this.metrics.bundleSize += size;
    
    const ext = path.extname(filePath).toLowerCase();
    
    switch (ext) {
      case '.css':
        this.metrics.cssSize += size;
        break;
      case '.js':
        this.metrics.jsSize += size;
        break;
      case '.png':
      case '.jpg':
      case '.jpeg':
      case '.gif':
      case '.svg':
      case '.webp':
        this.metrics.imageSize += size;
        break;
      case '.woff':
      case '.woff2':
      case '.ttf':
      case '.eot':
        this.metrics.fontSize += size;
        break;
      default:
        this.metrics.otherSize += size;
    }
  }

  // Generate performance report
  generateReport() {
    const report = {
      ...this.metrics,
      recommendations: this.generateRecommendations(),
      performance: this.calculatePerformanceScore()
    };

    // Save report
    const reportPath = path.join(__dirname, '../performance-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    // Display summary
    this.displaySummary();
  }

  // Generate recommendations
  generateRecommendations() {
    const recommendations = [];
    
    // Bundle size recommendations
    if (this.metrics.bundleSize > 1024 * 1024) { // > 1MB
      recommendations.push({
        type: 'warning',
        message: 'Bundle size is large (>1MB). Consider code splitting or tree shaking.',
        impact: 'high'
      });
    }
    
    // CSS size recommendations
    if (this.metrics.cssSize > 100 * 1024) { // > 100KB
      recommendations.push({
        type: 'info',
        message: 'CSS size is large (>100KB). Consider purging unused styles.',
        impact: 'medium'
      });
    }
    
    // Image size recommendations
    if (this.metrics.imageSize > 500 * 1024) { // > 500KB
      recommendations.push({
        type: 'info',
        message: 'Image size is large (>500KB). Consider optimizing images.',
        impact: 'medium'
      });
    }
    
    // Asset count recommendations
    if (this.metrics.assetCount > 50) {
      recommendations.push({
        type: 'info',
        message: 'High number of assets. Consider bundling or lazy loading.',
        impact: 'low'
      });
    }
    
    return recommendations;
  }

  // Calculate performance score
  calculatePerformanceScore() {
    let score = 100;
    
    // Deduct points for large bundle size
    if (this.metrics.bundleSize > 1024 * 1024) score -= 20;
    else if (this.metrics.bundleSize > 500 * 1024) score -= 10;
    
    // Deduct points for large CSS
    if (this.metrics.cssSize > 100 * 1024) score -= 15;
    else if (this.metrics.cssSize > 50 * 1024) score -= 5;
    
    // Deduct points for large images
    if (this.metrics.imageSize > 500 * 1024) score -= 15;
    else if (this.metrics.imageSize > 200 * 1024) score -= 5;
    
    // Deduct points for too many assets
    if (this.metrics.assetCount > 100) score -= 10;
    else if (this.metrics.assetCount > 50) score -= 5;
    
    return Math.max(0, score);
  }

  // Display summary
  displaySummary() {
    console.log('\n📊 Performance Analysis Summary');
    console.log('================================');
    console.log(`📦 Total Bundle Size: ${this.formatBytes(this.metrics.bundleSize)}`);
    console.log(`📄 Total Assets: ${this.metrics.assetCount}`);
    console.log(`🎨 CSS Size: ${this.formatBytes(this.metrics.cssSize)}`);
    console.log(`⚡ JavaScript Size: ${this.formatBytes(this.metrics.jsSize)}`);
    console.log(`🖼️  Image Size: ${this.formatBytes(this.metrics.imageSize)}`);
    console.log(`🔤 Font Size: ${this.formatBytes(this.metrics.fontSize)}`);
    console.log(`📁 Other Size: ${this.formatBytes(this.metrics.otherSize)}`);
    console.log(`🏆 Performance Score: ${this.metrics.performance}/100`);
    
    if (this.metrics.recommendations && this.metrics.recommendations.length > 0) {
      console.log('\n💡 Recommendations:');
      this.metrics.recommendations.forEach((rec, index) => {
        const icon = rec.type === 'warning' ? '⚠️' : 'ℹ️';
        console.log(`  ${index + 1}. ${icon} ${rec.message}`);
      });
    }
    
    console.log('\n✅ Performance report saved to performance-report.json');
  }

  // Format bytes to human readable format
  formatBytes(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }
}

// Run performance monitor
if (require.main === module) {
  const monitor = new PerformanceMonitor();
  monitor.analyzeBuild();
}

module.exports = PerformanceMonitor;