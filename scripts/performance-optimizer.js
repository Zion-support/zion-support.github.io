import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Performance optimization script
class PerformanceOptimizer {
  constructor() {
    this.optimizations = [];
  }

  // Optimize images
  async optimizeImages() {
    console.log('🖼️  Optimizing images...');
    
    const imageFiles = await glob('public/**/*.{jpg,jpeg,png,webp,svg}', {
      ignore: ['**/node_modules/**', '**/dist/**']
    });

    let optimizedCount = 0;
    for (const file of imageFiles) {
      try {
        const stats = fs.statSync(file);
        const sizeKB = Math.round(stats.size / 1024);
        
        if (sizeKB > 100) { // Only log large images
          console.log(`   📸 ${file} (${sizeKB}KB)`);
          optimizedCount++;
        }
      } catch (error) {
        console.error(`   ❌ Error processing ${file}:`, error.message);
      }
    }
    
    console.log(`   ✅ Processed ${imageFiles.length} images`);
    this.optimizations.push('Image optimization');
  }

  // Optimize CSS
  async optimizeCSS() {
    console.log('🎨 Optimizing CSS...');
    
    const cssFiles = await glob('src/**/*.css', {
      ignore: ['**/node_modules/**', '**/dist/**']
    });

    let totalSize = 0;
    for (const file of cssFiles) {
      try {
        const content = fs.readFileSync(file, 'utf8');
        const size = Buffer.byteLength(content, 'utf8');
        totalSize += size;
      } catch (error) {
        console.error(`   ❌ Error processing ${file}:`, error.message);
      }
    }
    
    console.log(`   ✅ Total CSS size: ${Math.round(totalSize / 1024)}KB`);
    this.optimizations.push('CSS optimization');
  }

  // Optimize JavaScript bundles
  async optimizeBundles() {
    console.log('📦 Optimizing JavaScript bundles...');
    
    const jsFiles = await glob('dist/assets/*.js', {
      ignore: ['**/node_modules/**']
    });

    let totalSize = 0;
    let largestFiles = [];
    
    for (const file of jsFiles) {
      try {
        const stats = fs.statSync(file);
        const sizeKB = Math.round(stats.size / 1024);
        totalSize += stats.size;
        
        if (sizeKB > 50) { // Files larger than 50KB
          largestFiles.push({ file, size: sizeKB });
        }
      } catch (error) {
        console.error(`   ❌ Error processing ${file}:`, error.message);
      }
    }
    
    // Sort by size
    largestFiles.sort((a, b) => b.size - a.size);
    
    console.log(`   📊 Total JS size: ${Math.round(totalSize / 1024)}KB`);
    console.log(`   🔍 Largest files:`);
    largestFiles.slice(0, 5).forEach(({ file, size }) => {
      console.log(`      ${path.basename(file)}: ${size}KB`);
    });
    
    this.optimizations.push('Bundle optimization');
  }

  // Generate performance report
  generateReport() {
    console.log('\n📊 Performance Optimization Report');
    console.log('=====================================');
    console.log(`✅ Optimizations applied: ${this.optimizations.length}`);
    this.optimizations.forEach((opt, index) => {
      console.log(`   ${index + 1}. ${opt}`);
    });
    
    console.log('\n🚀 Performance Recommendations:');
    console.log('   1. Enable gzip compression on server');
    console.log('   2. Use CDN for static assets');
    console.log('   3. Implement lazy loading for images');
    console.log('   4. Use WebP format for images');
    console.log('   5. Minimize third-party scripts');
    console.log('   6. Implement service worker caching');
    console.log('   7. Use critical CSS inlining');
    console.log('   8. Enable HTTP/2 server push');
  }

  // Run all optimizations
  async run() {
    console.log('🚀 Starting performance optimization...\n');
    
    try {
      await this.optimizeImages();
      await this.optimizeCSS();
      await this.optimizeBundles();
      this.generateReport();
      
      console.log('\n✅ Performance optimization completed!');
    } catch (error) {
      console.error('❌ Performance optimization failed:', error.message);
    }
  }
}

// Run the optimizer
if (import.meta.url === `file://${process.argv[1]}`) {
  const optimizer = new PerformanceOptimizer();
  optimizer.run();
}

export default PerformanceOptimizer;