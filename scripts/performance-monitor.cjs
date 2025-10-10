const fs = require('fs');
const path = require('path');

// Performance monitoring and optimization script
class PerformanceMonitor {
  constructor() {
    this.metrics = {
      bundleSize: 0,
      imageCount: 0,
      cssSize: 0,
      jsSize: 0,
      totalSize: 0,
      recommendations: []
    };
  }

  // Analyze bundle size
  analyzeBundleSize() {
    const distPath = path.join(__dirname, '../dist');
    
    if (!fs.existsSync(distPath)) {
      console.log('❌ Dist directory not found. Run build first.');
      return;
    }

    const files = this.getAllFiles(distPath);
    let totalSize = 0;
    let jsSize = 0;
    let cssSize = 0;
    let imageCount = 0;

    files.forEach(file => {
      const stats = fs.statSync(file);
      const size = stats.size;
      totalSize += size;

      if (file.endsWith('.js')) {
        jsSize += size;
      } else if (file.endsWith('.css')) {
        cssSize += size;
      } else if (this.isImageFile(file)) {
        imageCount++;
      }
    });

    this.metrics.bundleSize = totalSize;
    this.metrics.jsSize = jsSize;
    this.metrics.cssSize = cssSize;
    this.metrics.imageCount = imageCount;
    this.metrics.totalSize = totalSize;

    console.log('📊 Bundle Analysis:');
    console.log(`   Total Size: ${this.formatBytes(totalSize)}`);
    console.log(`   JS Size: ${this.formatBytes(jsSize)}`);
    console.log(`   CSS Size: ${this.formatBytes(cssSize)}`);
    console.log(`   Images: ${imageCount}`);
  }

  // Get all files recursively
  getAllFiles(dir) {
    let files = [];
    const items = fs.readdirSync(dir);

    items.forEach(item => {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory()) {
        files = files.concat(this.getAllFiles(fullPath));
      } else {
        files.push(fullPath);
      }
    });

    return files;
  }

  // Check if file is an image
  isImageFile(file) {
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.svg', '.webp', '.avif'];
    return imageExtensions.some(ext => file.toLowerCase().endsWith(ext));
  }

  // Format bytes to human readable
  formatBytes(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }

  // Generate performance recommendations
  generateRecommendations() {
    const recommendations = [];

    // Bundle size recommendations
    if (this.metrics.jsSize > 500000) { // 500KB
      recommendations.push({
        type: 'warning',
        category: 'Bundle Size',
        message: 'JavaScript bundle is large. Consider code splitting or tree shaking.',
        impact: 'high'
      });
    }

    if (this.metrics.cssSize > 100000) { // 100KB
      recommendations.push({
        type: 'warning',
        category: 'CSS Size',
        message: 'CSS bundle is large. Consider purging unused styles.',
        impact: 'medium'
      });
    }

    if (this.metrics.totalSize > 2000000) { // 2MB
      recommendations.push({
        type: 'error',
        category: 'Total Size',
        message: 'Total bundle size is very large. This will impact loading performance.',
        impact: 'high'
      });
    }

    // Image recommendations
    if (this.metrics.imageCount > 20) {
      recommendations.push({
        type: 'info',
        category: 'Images',
        message: 'Consider lazy loading for images below the fold.',
        impact: 'medium'
      });
    }

    // General recommendations
    recommendations.push({
      type: 'info',
      category: 'Performance',
      message: 'Enable gzip compression on your server.',
      impact: 'high'
    });

    recommendations.push({
      type: 'info',
      category: 'Caching',
      message: 'Set appropriate cache headers for static assets.',
      impact: 'medium'
    });

    this.metrics.recommendations = recommendations;
  }

  // Generate performance report
  generateReport() {
    this.generateRecommendations();

    const report = {
      timestamp: new Date().toISOString(),
      metrics: this.metrics,
      score: this.calculateScore()
    };

    const reportPath = path.join(__dirname, '../performance-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));

    console.log('\n🎯 Performance Recommendations:');
    this.metrics.recommendations.forEach((rec, index) => {
      const icon = rec.type === 'error' ? '❌' : rec.type === 'warning' ? '⚠️' : '💡';
      console.log(`   ${index + 1}. ${icon} [${rec.category}] ${rec.message}`);
    });

    console.log(`\n📈 Performance Score: ${report.score}/100`);
    console.log(`📄 Full report saved to: ${reportPath}`);

    return report;
  }

  // Calculate performance score
  calculateScore() {
    let score = 100;

    // Deduct points for large bundles
    if (this.metrics.jsSize > 500000) score -= 20;
    if (this.metrics.cssSize > 100000) score -= 15;
    if (this.metrics.totalSize > 2000000) score -= 25;

    // Deduct points for too many images
    if (this.metrics.imageCount > 20) score -= 10;

    return Math.max(0, score);
  }

  // Optimize images
  optimizeImages() {
    console.log('\n🖼️  Image Optimization:');
    console.log('   Consider using WebP format for better compression');
    console.log('   Implement responsive images with srcset');
    console.log('   Add lazy loading for images below the fold');
    console.log('   Use appropriate image dimensions');
  }

  // Check for unused CSS
  checkUnusedCSS() {
    console.log('\n🎨 CSS Analysis:');
    console.log('   Consider using PurgeCSS to remove unused styles');
    console.log('   Use CSS-in-JS for component-specific styles');
    console.log('   Implement critical CSS inlining');
  }

  // Main execution
  run() {
    console.log('🚀 Starting Performance Analysis...\n');
    
    this.analyzeBundleSize();
    this.optimizeImages();
    this.checkUnusedCSS();
    
    const report = this.generateReport();
    
    console.log('\n✅ Performance analysis complete!');
    
    return report;
  }
}

// Run the performance monitor
const monitor = new PerformanceMonitor();
monitor.run();