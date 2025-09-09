#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Bundle analyzer for performance optimization
 */
class BundleAnalyzer {
  constructor() {
    this.distPath = path.join(__dirname, '../dist');
    this.analysis = {
      totalSize: 0,
      files: [],
      recommendations: []
    };
  }

  analyze() {
    console.log('🔍 Analyzing bundle...\n');
    
    this.analyzeFiles();
    this.generateRecommendations();
    this.printReport();
  }

  analyzeFiles() {
    if (!fs.existsSync(this.distPath)) {
      console.error('❌ Dist folder not found. Run npm run build first.');
      return;
    }

    const files = this.getFilesRecursively(this.distPath);
    
    files.forEach(file => {
      const stats = fs.statSync(file);
      const size = stats.size;
      const relativePath = path.relative(this.distPath, file);
      
      this.analysis.files.push({
        path: relativePath,
        size: size,
        sizeKB: (size / 1024).toFixed(2),
        type: this.getFileType(file)
      });
      
      this.analysis.totalSize += size;
    });

    // Sort by size
    this.analysis.files.sort((a, b) => b.size - a.size);
  }

  getFilesRecursively(dir) {
    let files = [];
    const items = fs.readdirSync(dir);
    
    items.forEach(item => {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        files = files.concat(this.getFilesRecursively(fullPath));
      } else {
        files.push(fullPath);
      }
    });
    
    return files;
  }

  getFileType(filePath) {
    const ext = path.extname(filePath);
    switch (ext) {
      case '.js':
        return 'JavaScript';
      case '.css':
        return 'CSS';
      case '.html':
        return 'HTML';
      case '.png':
      case '.jpg':
      case '.jpeg':
      case '.gif':
      case '.svg':
        return 'Image';
      case '.woff':
      case '.woff2':
      case '.ttf':
        return 'Font';
      default:
        return 'Other';
    }
  }

  generateRecommendations() {
    const { files, totalSize } = this.analysis;
    
    // Large files
    const largeFiles = files.filter(f => f.size > 100 * 1024); // > 100KB
    if (largeFiles.length > 0) {
      this.analysis.recommendations.push({
        type: 'warning',
        message: `Found ${largeFiles.length} large files (>100KB)`,
        files: largeFiles.map(f => f.path)
      });
    }

    // JavaScript bundle size
    const jsFiles = files.filter(f => f.type === 'JavaScript');
    const totalJSSize = jsFiles.reduce((sum, f) => sum + f.size, 0);
    
    if (totalJSSize > 500 * 1024) { // > 500KB
      this.analysis.recommendations.push({
        type: 'error',
        message: `JavaScript bundle is too large (${(totalJSSize / 1024).toFixed(2)}KB). Consider code splitting.`
      });
    }

    // CSS bundle size
    const cssFiles = files.filter(f => f.type === 'CSS');
    const totalCSSSize = cssFiles.reduce((sum, f) => sum + f.size, 0);
    
    if (totalCSSSize > 100 * 1024) { // > 100KB
      this.analysis.recommendations.push({
        type: 'warning',
        message: `CSS bundle is large (${(totalCSSSize / 1024).toFixed(2)}KB). Consider purging unused styles.`
      });
    }

    // Image optimization
    const imageFiles = files.filter(f => f.type === 'Image');
    const largeImages = imageFiles.filter(f => f.size > 50 * 1024); // > 50KB
    
    if (largeImages.length > 0) {
      this.analysis.recommendations.push({
        type: 'info',
        message: `Found ${largeImages.length} large images. Consider optimizing them.`,
        files: largeImages.map(f => f.path)
      });
    }

    // Total bundle size
    if (totalSize > 1024 * 1024) { // > 1MB
      this.analysis.recommendations.push({
        type: 'error',
        message: `Total bundle size is too large (${(totalSize / 1024 / 1024).toFixed(2)}MB). Consider optimization.`
      });
    }
  }

  printReport() {
    const { files, totalSize, recommendations } = this.analysis;
    
    console.log('📊 Bundle Analysis Report');
    console.log('='.repeat(50));
    console.log(`Total Bundle Size: ${(totalSize / 1024).toFixed(2)} KB (${(totalSize / 1024 / 1024).toFixed(2)} MB)\n`);
    
    console.log('📁 File Breakdown:');
    console.log('-'.repeat(50));
    files.forEach(file => {
      const sizeStr = file.sizeKB + ' KB';
      const padding = ' '.repeat(12 - sizeStr.length);
      console.log(`${sizeStr}${padding} ${file.path} (${file.type})`);
    });
    
    console.log('\n💡 Recommendations:');
    console.log('-'.repeat(50));
    recommendations.forEach((rec, index) => {
      const icon = rec.type === 'error' ? '❌' : rec.type === 'warning' ? '⚠️' : 'ℹ️';
      console.log(`${icon} ${rec.message}`);
      
      if (rec.files && rec.files.length > 0) {
        rec.files.forEach(file => {
          console.log(`   - ${file}`);
        });
      }
    });
    
    console.log('\n🎯 Optimization Tips:');
    console.log('-'.repeat(50));
    console.log('• Use dynamic imports for route-based code splitting');
    console.log('• Implement lazy loading for heavy components');
    console.log('• Optimize images (WebP, compression)');
    console.log('• Remove unused CSS with PurgeCSS');
    console.log('• Use tree shaking to eliminate dead code');
    console.log('• Consider using a CDN for static assets');
    
    // Save report to file
    this.saveReport();
  }

  saveReport() {
    const reportPath = path.join(__dirname, '../bundle-analysis-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(this.analysis, null, 2));
    console.log(`\n📄 Report saved to: ${reportPath}`);
  }
}

// Run analysis
const analyzer = new BundleAnalyzer();
analyzer.analyze();