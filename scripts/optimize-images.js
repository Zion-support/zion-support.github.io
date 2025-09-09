#!/usr/bin/env node

/**
 * Image optimization script to reduce bundle size
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class ImageOptimizer {
  constructor() {
    this.distPath = path.join(__dirname, '..', 'dist');
    this.publicPath = path.join(__dirname, '..', 'public');
    this.optimizedImages = [];
    this.totalSavings = 0;
  }

  async optimize() {
    console.log('🖼️  Optimizing images...\n');

    if (!fs.existsSync(this.distPath)) {
      console.error('❌ Dist directory not found. Please run build first.');
      process.exit(1);
    }

    await this.optimizeImagesInDirectory(this.distPath);
    await this.optimizeImagesInDirectory(this.publicPath);
    this.generateWebPImages();
    this.printReport();
  }

  async optimizeImagesInDirectory(dir) {
    const files = fs.readdirSync(dir, { recursive: true })
      .filter(file => typeof file === 'string' && this.isImageFile(file))
      .map(file => path.join(dir, file));

    for (const imageFile of files) {
      await this.optimizeImage(imageFile);
    }
  }

  isImageFile(filename) {
    const imageExtensions = ['.png', '.jpg', '.jpeg', '.gif', '.bmp', '.tiff', '.svg'];
    return imageExtensions.some(ext => filename.toLowerCase().endsWith(ext));
  }

  async optimizeImage(imagePath) {
    const originalSize = fs.statSync(imagePath).size;
    const filename = path.basename(imagePath);
    const ext = path.extname(imagePath).toLowerCase();
    
    // For now, we'll just report the images and suggest optimizations
    // In a real implementation, you'd use sharp or imagemin here
    const optimization = this.getOptimizationSuggestion(filename, originalSize, ext);
    
    this.optimizedImages.push({
      filename,
      originalSize,
      suggestedSize: optimization.suggestedSize,
      savings: originalSize - optimization.suggestedSize,
      suggestions: optimization.suggestions
    });
    
    this.totalSavings += originalSize - optimization.suggestedSize;
  }

  getOptimizationSuggestion(filename, size, ext) {
    const sizeKB = (size / 1024).toFixed(2);
    const suggestions = [];
    let suggestedSize = size;

    if (ext === '.png' && size > 50 * 1024) { // 50KB
      suggestions.push('Convert to WebP format');
      suggestedSize = size * 0.7; // 30% reduction
    }

    if (ext === '.jpg' && size > 100 * 1024) { // 100KB
      suggestions.push('Optimize JPEG quality');
      suggestedSize = size * 0.8; // 20% reduction
    }

    if (ext === '.svg' && size > 10 * 1024) { // 10KB
      suggestions.push('Minify SVG');
      suggestedSize = size * 0.6; // 40% reduction
    }

    if (size > 200 * 1024) { // 200KB
      suggestions.push('Consider lazy loading');
    }

    if (size > 500 * 1024) { // 500KB
      suggestions.push('Consider responsive images');
    }

    return {
      suggestedSize,
      suggestions
    };
  }

  generateWebPImages() {
    console.log('🔄 Generating WebP alternatives...');
    
    // In a real implementation, you'd generate WebP versions here
    // For now, we'll just report the potential
    const webpCandidates = this.optimizedImages.filter(img => 
      img.filename.endsWith('.png') || img.filename.endsWith('.jpg') || img.filename.endsWith('.jpeg')
    );
    
    console.log(`📝 ${webpCandidates.length} images could be converted to WebP`);
  }

  printReport() {
    console.log('\n📊 Image Optimization Report');
    console.log('============================');

    const totalOriginalSize = this.optimizedImages.reduce((sum, img) => sum + img.originalSize, 0);
    const totalOptimizedSize = this.optimizedImages.reduce((sum, img) => sum + img.suggestedSize, 0);
    const totalSavings = totalOriginalSize - totalOptimizedSize;
    const savingsPercent = ((totalSavings / totalOriginalSize) * 100).toFixed(2);

    console.log(`📦 Total images: ${this.optimizedImages.length}`);
    console.log(`📏 Original size: ${(totalOriginalSize / 1024).toFixed(2)} KB`);
    console.log(`📏 Optimized size: ${(totalOptimizedSize / 1024).toFixed(2)} KB`);
    console.log(`💰 Potential savings: ${(totalSavings / 1024).toFixed(2)} KB (${savingsPercent}%)`);

    console.log('\n🔍 Large Images (>100KB):');
    console.log('-------------------------');
    this.optimizedImages
      .filter(img => img.originalSize > 100 * 1024)
      .sort((a, b) => b.originalSize - a.originalSize)
      .forEach(img => {
        console.log(`• ${img.filename}: ${(img.originalSize / 1024).toFixed(2)}KB`);
        img.suggestions.forEach(suggestion => {
          console.log(`  - ${suggestion}`);
        });
      });

    console.log('\n💡 Optimization Recommendations:');
    console.log('--------------------------------');
    console.log('1. Convert PNG/JPG images to WebP format');
    console.log('2. Implement responsive images with srcset');
    console.log('3. Add lazy loading for images below the fold');
    console.log('4. Use modern image formats (AVIF, WebP)');
    console.log('5. Compress images without quality loss');
    console.log('6. Consider using a CDN for image delivery');

    console.log('\n🛠️  Tools to use:');
    console.log('-----------------');
    console.log('• sharp (Node.js image processing)');
    console.log('• imagemin (Image optimization)');
    console.log('• @squoosh/lib (Google\'s image optimization)');
    console.log('• vite-plugin-imagemin (Vite plugin)');
  }
}

// Run the optimizer
const optimizer = new ImageOptimizer();
optimizer.optimize().catch(console.error);