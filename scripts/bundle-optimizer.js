import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Bundle Optimization Script for Zion Tech Group
 * Analyzes and optimizes the build bundle for better performance
 */

class BundleOptimizer {
  constructor() {
    this.distPath = path.join(__dirname, '../dist');
    this.analysis = {
      totalSize: 0,
      jsSize: 0,
      cssSize: 0,
      imageSize: 0,
      fontSize: 0,
      chunks: [],
      recommendations: []
    };
  }

  async analyze() {
    console.log('🔍 Analyzing bundle...');
    
    if (!fs.existsSync(this.distPath)) {
      console.error('❌ Dist folder not found. Please run build first.');
      return;
    }

    this.analyzeDirectory(this.distPath);
    this.generateRecommendations();
    this.printReport();
  }

  analyzeDirectory(dir) {
    const items = fs.readdirSync(dir);
    
    items.forEach(item => {
      const itemPath = path.join(dir, item);
      const stat = fs.statSync(itemPath);
      
      if (stat.isDirectory()) {
        this.analyzeDirectory(itemPath);
      } else {
        this.analyzeFile(itemPath, item);
      }
    });
  }

  analyzeFile(filePath, fileName) {
    const stats = fs.statSync(filePath);
    const size = stats.size;
    const ext = path.extname(fileName).toLowerCase();
    
    this.analysis.totalSize += size;
    
    // Categorize files
    if (ext === '.js') {
      this.analysis.jsSize += size;
      this.analyzeJSChunk(filePath, fileName, size);
    } else if (ext === '.css') {
      this.analysis.cssSize += size;
    } else if (['.png', '.jpg', '.jpeg', '.gif', '.svg', '.webp'].includes(ext)) {
      this.analysis.imageSize += size;
    } else if (['.woff', '.woff2', '.ttf', '.otf', '.eot'].includes(ext)) {
      this.analysis.fontSize += size;
    }
  }

  analyzeJSChunk(filePath, fileName, size) {
    const relativePath = path.relative(this.distPath, filePath);
    const chunk = {
      name: fileName,
      path: relativePath,
      size: size,
      sizeKB: Math.round(size / 1024),
      type: this.getChunkType(fileName)
    };
    
    this.analysis.chunks.push(chunk);
  }

  getChunkType(fileName) {
    if (fileName.includes('vendor')) return 'vendor';
    if (fileName.includes('chunk')) return 'chunk';
    if (fileName.includes('index')) return 'main';
    if (fileName.includes('page')) return 'page';
    return 'other';
  }

  generateRecommendations() {
    const { totalSize, jsSize, cssSize, imageSize, chunks } = this.analysis;
    
    // Bundle size recommendations
    if (totalSize > 2 * 1024 * 1024) { // 2MB
      this.analysis.recommendations.push({
        type: 'warning',
        message: `Total bundle size is ${this.formatSize(totalSize)}. Consider code splitting.`
      });
    }
    
    // JS size recommendations
    if (jsSize > 1024 * 1024) { // 1MB
      this.analysis.recommendations.push({
        type: 'warning',
        message: `JavaScript bundle is ${this.formatSize(jsSize)}. Consider lazy loading.`
      });
    }
    
    // Large chunks
    const largeChunks = chunks.filter(chunk => chunk.size > 200 * 1024); // 200KB
    if (largeChunks.length > 0) {
      this.analysis.recommendations.push({
        type: 'info',
        message: `Large chunks detected: ${largeChunks.map(c => c.name).join(', ')}`
      });
    }
    
    // Vendor chunk optimization
    const vendorChunks = chunks.filter(chunk => chunk.type === 'vendor');
    if (vendorChunks.length > 1) {
      this.analysis.recommendations.push({
        type: 'info',
        message: 'Multiple vendor chunks detected. Consider consolidating.'
      });
    }
    
    // Image optimization
    if (imageSize > 500 * 1024) { // 500KB
      this.analysis.recommendations.push({
        type: 'warning',
        message: `Images total ${this.formatSize(imageSize)}. Consider WebP format or compression.`
      });
    }
    
    // CSS optimization
    if (cssSize > 100 * 1024) { // 100KB
      this.analysis.recommendations.push({
        type: 'info',
        message: `CSS bundle is ${this.formatSize(cssSize)}. Consider purging unused styles.`
      });
    }
  }

  printReport() {
    console.log('\n📊 Bundle Analysis Report');
    console.log('=' .repeat(50));
    
    console.log('\n📦 Bundle Sizes:');
    console.log(`Total: ${this.formatSize(this.analysis.totalSize)}`);
    console.log(`JavaScript: ${this.formatSize(this.analysis.jsSize)}`);
    console.log(`CSS: ${this.formatSize(this.analysis.cssSize)}`);
    console.log(`Images: ${this.formatSize(this.analysis.imageSize)}`);
    console.log(`Fonts: ${this.formatSize(this.analysis.fontSize)}`);
    
    console.log('\n📄 JavaScript Chunks:');
    this.analysis.chunks
      .sort((a, b) => b.size - a.size)
      .forEach(chunk => {
        console.log(`  ${chunk.name}: ${this.formatSize(chunk.size)} (${chunk.type})`);
      });
    
    console.log('\n💡 Recommendations:');
    this.analysis.recommendations.forEach(rec => {
      const icon = rec.type === 'warning' ? '⚠️' : 'ℹ️';
      console.log(`  ${icon} ${rec.message}`);
    });
    
    console.log('\n✅ Analysis complete!');
  }

  formatSize(bytes) {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }

  async optimize() {
    console.log('\n🚀 Running optimizations...');
    
    // Generate source map analysis
    this.generateSourceMapAnalysis();
    
    // Optimize images
    await this.optimizeImages();
    
    // Generate bundle report
    this.generateBundleReport();
    
    console.log('✅ Optimizations complete!');
  }

  generateSourceMapAnalysis() {
    try {
      execSync('npx webpack-bundle-analyzer dist/stats.html --mode static --report dist/bundle-report.html', { stdio: 'inherit' });
      console.log('📊 Bundle analyzer report generated');
    } catch (error) {
      console.log('ℹ️ Bundle analyzer not available, skipping...');
    }
  }

  async optimizeImages() {
    const imageExtensions = ['.png', '.jpg', '.jpeg', '.gif'];
    const images = this.findImages(this.distPath, imageExtensions);
    
    if (images.length === 0) {
      console.log('ℹ️ No images found to optimize');
      return;
    }
    
    console.log(`🖼️ Found ${images.length} images to optimize`);
    
    // Note: In a real implementation, you would use tools like imagemin
    // For now, we'll just log the images that could be optimized
    images.forEach(image => {
      console.log(`  - ${image}`);
    });
  }

  findImages(dir, extensions) {
    const images = [];
    const items = fs.readdirSync(dir);
    
    items.forEach(item => {
      const itemPath = path.join(dir, item);
      const stat = fs.statSync(itemPath);
      
      if (stat.isDirectory()) {
        images.push(...this.findImages(itemPath, extensions));
      } else if (extensions.includes(path.extname(item).toLowerCase())) {
        images.push(path.relative(this.distPath, itemPath));
      }
    });
    
    return images;
  }

  generateBundleReport() {
    const report = {
      timestamp: new Date().toISOString(),
      analysis: this.analysis,
      performance: {
        totalRequests: this.analysis.chunks.length,
        estimatedLoadTime: this.estimateLoadTime(),
        compressionRatio: this.calculateCompressionRatio()
      }
    };
    
    const reportPath = path.join(this.distPath, 'bundle-analysis.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    console.log(`📄 Bundle report saved to ${reportPath}`);
  }

  estimateLoadTime() {
    // Rough estimation based on bundle size
    const totalSizeKB = this.analysis.totalSize / 1024;
    const estimatedTime = Math.round(totalSizeKB / 100); // Assume 100KB/s
    return `${estimatedTime}s`;
  }

  calculateCompressionRatio() {
    // This would require comparing original vs compressed sizes
    return 'N/A';
  }
}

// Run the optimizer
async function main() {
  const optimizer = new BundleOptimizer();
  
  try {
    await optimizer.analyze();
    await optimizer.optimize();
  } catch (error) {
    console.error('❌ Optimization failed:', error.message);
    process.exit(1);
  }
}

// Run the optimizer if this is the main module
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export default BundleOptimizer;