/**
 * Enhanced Performance Optimizer
 * Implements advanced performance optimizations for the Zion Tech Group website
 */

const fs = require('fs');
const path = require('path');

class PerformanceOptimizer {
  constructor() {
    this.optimizations = [];
    this.metrics = {
      bundleSize: 0,
      imageOptimizations: 0,
      cssOptimizations: 0,
      jsOptimizations: 0,
    };
  }

  async optimize() {
    console.log('🚀 Starting enhanced performance optimizations...');
    
    try {

      await this.optimizeBundleSize();
      await this.optimizeImages();
      await this.optimizeCSS();
      await this.optimizeJavaScript();
      await this.generatePerformanceReport();
      
      console.log('✅ Enhanced performance optimizations completed successfully!');
    
} catch (error) {
  console.error('Error:', error);
} catch (error) {
      console.error('❌ Performance optimization failed:', error);
    }
  }

  async optimizeBundleSize() {
    console.log('📦 Optimizing bundle size...');
    
    const distPath = path.join(__dirname, '../dist');
    if (!fs.existsSync(distPath)) {
      console.log('⚠️  Dist folder not found, skipping bundle optimization');
      return;
    }

    // Analyze bundle sizes
    const files = fs.readdirSync(distPath, { recursive: true });
    let totalSize = 0;
    
    files.forEach(file => {
      if (typeof file === 'string' && (file.endsWith('.js') || file.endsWith('.css'))) {
        const filePath = path.join(distPath, file);
        const stats = fs.statSync(filePath);
        totalSize += stats.size;
      }
    });

    this.metrics.bundleSize = totalSize;
    
    // Implement code splitting recommendations
    const recommendations = this.generateBundleRecommendations(totalSize);
    this.optimizations.push(...recommendations);
    
    console.log(`📊 Total bundle size: ${(totalSize / 1024 / 1024).toFixed(2)} MB`);
  }

  async optimizeImages() {
    console.log('🖼️  Optimizing images...');
    
    const distPath = path.join(__dirname, '../dist');
    if (!fs.existsSync(distPath)) {
      console.log('⚠️  Dist folder not found, skipping image optimization');
      return;
    }

    // Check for unoptimized images
    const imageFiles = this.findImageFiles(distPath);
    let optimizedCount = 0;

    imageFiles.forEach(file => {
      const filePath = path.join(distPath, file);
      const stats = fs.statSync(filePath);
      
      // Recommend WebP conversion for large images
      if (stats.size > 100000 && (file.endsWith('.png') || file.endsWith('.jpg'))) {
        this.optimizations.push({
          type: 'image',
          file: file,
          recommendation: 'Convert to WebP format for better compression',
          potentialSavings: Math.round(stats.size * 0.3),
        });
        optimizedCount++;
      }
    });

    this.metrics.imageOptimizations = optimizedCount;
    console.log(`🖼️  Found ${optimizedCount} images that could be optimized`);
  }

  async optimizeCSS() {
    console.log('🎨 Optimizing CSS...');
    
    const distPath = path.join(__dirname, '../dist');
    if (!fs.existsSync(distPath)) {
      console.log('⚠️  Dist folder not found, skipping CSS optimization');
      return;
    }

    // Find CSS files
    const cssFiles = this.findFilesByExtension(distPath, '.css');
    let cssOptimizations = 0;

    cssFiles.forEach(file => {
      const filePath = path.join(distPath, file);
      const content = fs.readFileSync(filePath, 'utf8');
      
      // Check for unused CSS
      const unusedSelectors = this.findUnusedCSSSelectors(content);
      if (unusedSelectors.length > 0) {
        this.optimizations.push({
          type: 'css',
          file: file,
          recommendation: `Remove ${unusedSelectors.length} unused CSS selectors`,
          details: unusedSelectors.slice(0, 5), // Show first 5
        });
        cssOptimizations++;
      }

      // Check for CSS minification
      if (content.includes('  ') || content.includes('\n\n')) {
        this.optimizations.push({
          type: 'css',
          file: file,
          recommendation: 'Minify CSS to reduce file size',
        });
        cssOptimizations++;
      }
    });

    this.metrics.cssOptimizations = cssOptimizations;
    console.log(`🎨 Found ${cssOptimizations} CSS optimization opportunities`);
  }

  async optimizeJavaScript() {
    console.log('⚡ Optimizing JavaScript...');
    
    const distPath = path.join(__dirname, '../dist');
    if (!fs.existsSync(distPath)) {
      console.log('⚠️  Dist folder not found, skipping JS optimization');
      return;
    }

    // Find JS files
    const jsFiles = this.findFilesByExtension(distPath, '.js');
    let jsOptimizations = 0;

    jsFiles.forEach(file => {
      const filePath = path.join(distPath, file);
      const content = fs.readFileSync(filePath, 'utf8');
      
      // Check for console.log statements in production
      const consoleLogs = (content.match(/console\.log/g) || []).length;
      if (consoleLogs > 0) {
        this.optimizations.push({
          type: 'javascript',
          file: file,
          recommendation: `Remove ${consoleLogs} console.log statements`,
        });
        jsOptimizations++;
      }

      // Check for large files that could be split
      const stats = fs.statSync(filePath);
      if (stats.size > 500000) { // 500KB
        this.optimizations.push({
          type: 'javascript',
          file: file,
          recommendation: 'Consider code splitting for large bundle',
          size: Math.round(stats.size / 1024) + 'KB',
        });
        jsOptimizations++;
      }
    });

    this.metrics.jsOptimizations = jsOptimizations;
    console.log(`⚡ Found ${jsOptimizations} JavaScript optimization opportunities`);
  }

  findImageFiles(dir, files = []) {
    const items = fs.readdirSync(dir);
    
    items.forEach(item => {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        this.findImageFiles(fullPath, files);
      } else if (/\.(png|jpg|jpeg|gif|svg|webp)$/i.test(item)) {
        files.push(path.relative(dir, fullPath));
      }
    });
    
    return files;
  }

  findFilesByExtension(dir, extension) {
    const files = [];
    const items = fs.readdirSync(dir);
    
    items.forEach(item => {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        files.push(...this.findFilesByExtension(fullPath, extension));
      } else if (item.endsWith(extension)) {
        files.push(path.relative(dir, fullPath));
      }
    });
    
    return files;
  }

  findUnusedCSSSelectors(css) {
    // Simple heuristic to find potentially unused selectors
    const selectors = css.match(/[.#][a-zA-Z0-9_-]+/g) || [];
    const uniqueSelectors = [...new Set(selectors)];
    
    // This is a simplified check - in a real implementation,
    // you'd compare against actual HTML content
    return uniqueSelectors.filter(selector => 
      selector.includes('unused') || 
      selector.includes('old') ||
      selector.includes('deprecated')
    );
  }

  generateBundleRecommendations(totalSize) {
    const recommendations = [];
    const sizeMB = totalSize / 1024 / 1024;

    if (sizeMB > 1) {
      recommendations.push({
        type: 'bundle',
        recommendation: 'Bundle size is large. Consider implementing code splitting.',
        priority: 'high',
        potentialSavings: '20-40%',
      });
    }

    if (sizeMB > 2) {
      recommendations.push({
        type: 'bundle',
        recommendation: 'Implement lazy loading for non-critical components.',
        priority: 'high',
        potentialSavings: '30-50%',
      });
    }

    return recommendations;
  }

  async generatePerformanceReport() {
    const report = {
      timestamp: new Date().toISOString(),
      metrics: this.metrics,
      optimizations: this.optimizations,
      summary: {
        totalOptimizations: this.optimizations.length,
        highPriority: this.optimizations.filter(opt => opt.priority === 'high').length,
        estimatedSavings: this.calculateEstimatedSavings(),
      },
    };

    const reportPath = path.join(__dirname, '../performance-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    console.log('📊 Performance report generated:', reportPath);
    console.log(`📈 Total optimizations found: ${report.summary.totalOptimizations}`);
    console.log(`🔥 High priority optimizations: ${report.summary.highPriority}`);
  }

  calculateEstimatedSavings() {
    let totalSavings = 0;
    
    this.optimizations.forEach(opt => {
      if (opt.potentialSavings) {
        const savings = parseInt(opt.potentialSavings.replace(/[^\d]/g, ''));
        if (!isNaN(savings)) {
          totalSavings += savings;
        }
      }
    });
    
    return totalSavings + 'KB';
  }
}

// Run the optimizer
if (require.main === module) {
  const optimizer = new PerformanceOptimizer();
  optimizer.optimize();
}

module.exports = PerformanceOptimizer;