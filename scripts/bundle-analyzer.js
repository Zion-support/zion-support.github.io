#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Bundle analyzer to identify optimization opportunities
class BundleAnalyzer {
  constructor(distPath = './dist') {
    this.distPath = distPath;
    this.analysis = {
      totalSize: 0,
      files: [],
      recommendations: [],
      warnings: []
    };
  }

  analyze() {
    console.log('🔍 Analyzing bundle...\n');
    
    this.scanDirectory(this.distPath);
    this.analyzeFiles();
    this.generateRecommendations();
    this.printReport();
    
    return this.analysis;
  }

  scanDirectory(dirPath) {
    const items = fs.readdirSync(dirPath);
    
    items.forEach(item => {
      const fullPath = path.join(dirPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        this.scanDirectory(fullPath);
      } else if (stat.isFile()) {
        const size = stat.size;
        const ext = path.extname(item);
        
        this.analysis.files.push({
          name: item,
          path: fullPath,
          size: size,
          sizeKB: Math.round(size / 1024),
          sizeMB: Math.round(size / (1024 * 1024) * 100) / 100,
          extension: ext
        });
        
        this.analysis.totalSize += size;
      }
    });
  }

  analyzeFiles() {
    // Sort files by size
    this.analysis.files.sort((a, b) => b.size - a.size);
    
    // Categorize files
    const categories = {
      js: this.analysis.files.filter(f => f.extension === '.js'),
      css: this.analysis.files.filter(f => f.extension === '.css'),
      images: this.analysis.files.filter(f => ['.png', '.jpg', '.jpeg', '.gif', '.svg', '.webp'].includes(f.extension)),
      fonts: this.analysis.files.filter(f => ['.woff', '.woff2', '.ttf', '.otf'].includes(f.extension)),
      other: this.analysis.files.filter(f => !['.js', '.css', '.png', '.jpg', '.jpeg', '.gif', '.svg', '.webp', '.woff', '.woff2', '.ttf', '.otf'].includes(f.extension))
    };

    this.analysis.categories = categories;
  }

  generateRecommendations() {
    const { files, categories } = this.analysis;
    
    // Large file warnings
    files.forEach(file => {
      if (file.sizeMB > 1) {
        this.analysis.warnings.push({
          type: 'large-file',
          file: file.name,
          size: file.sizeMB,
          message: `Large file detected: ${file.name} (${file.sizeMB}MB)`
        });
      }
    });

    // JavaScript bundle analysis
    const jsFiles = categories.js;
    const totalJSSize = jsFiles.reduce((sum, file) => sum + file.size, 0);
    
    if (totalJSSize > 500 * 1024) { // 500KB
      this.analysis.recommendations.push({
        type: 'bundle-size',
        priority: 'high',
        message: `Total JS bundle size is ${Math.round(totalJSSize / 1024)}KB. Consider code splitting.`
      });
    }

    // Large individual JS files
    jsFiles.forEach(file => {
      if (file.sizeKB > 200) {
        this.analysis.recommendations.push({
          type: 'large-js-file',
          priority: 'medium',
          file: file.name,
          size: file.sizeKB,
          message: `Large JS file: ${file.name} (${file.sizeKB}KB). Consider splitting.`
        });
      }
    });

    // CSS analysis
    const cssFiles = categories.css;
    const totalCSSSize = cssFiles.reduce((sum, file) => sum + file.size, 0);
    
    if (totalCSSSize > 100 * 1024) { // 100KB
      this.analysis.recommendations.push({
        type: 'css-size',
        priority: 'medium',
        message: `Total CSS size is ${Math.round(totalCSSSize / 1024)}KB. Consider purging unused styles.`
      });
    }

    // Image optimization
    const imageFiles = categories.images;
    imageFiles.forEach(file => {
      if (file.sizeKB > 500) {
        this.analysis.recommendations.push({
          type: 'image-optimization',
          priority: 'medium',
          file: file.name,
          size: file.sizeKB,
          message: `Large image: ${file.name} (${file.sizeKB}KB). Consider compression or WebP format.`
        });
      }
    });

    // Unused files detection
    const htmlFiles = files.filter(f => f.extension === '.html');
    if (htmlFiles.length > 0) {
      const htmlFile = htmlFiles[0];
      const htmlContent = fs.readFileSync(htmlFile.path, 'utf8');
      
      files.forEach(file => {
        if (file.extension === '.js' && !htmlContent.includes(file.name)) {
          this.analysis.warnings.push({
            type: 'unused-file',
            file: file.name,
            message: `Potentially unused file: ${file.name}`
          });
        }
      });
    }
  }

  printReport() {
    const { totalSize, files, categories, recommendations, warnings } = this.analysis;
    
    console.log('📊 Bundle Analysis Report');
    console.log('========================\n');
    
    // Summary
    console.log('📈 Summary:');
    console.log(`Total bundle size: ${Math.round(totalSize / (1024 * 1024) * 100) / 100}MB`);
    console.log(`Total files: ${files.length}`);
    console.log(`JavaScript files: ${categories.js.length} (${Math.round(categories.js.reduce((sum, f) => sum + f.size, 0) / 1024)}KB)`);
    console.log(`CSS files: ${categories.css.length} (${Math.round(categories.css.reduce((sum, f) => sum + f.size, 0) / 1024)}KB)`);
    console.log(`Image files: ${categories.images.length} (${Math.round(categories.images.reduce((sum, f) => sum + f.size, 0) / 1024)}KB)`);
    console.log(`Font files: ${categories.fonts.length} (${Math.round(categories.fonts.reduce((sum, f) => sum + f.size, 0) / 1024)}KB)`);
    console.log(`Other files: ${categories.other.length} (${Math.round(categories.other.reduce((sum, f) => sum + f.size, 0) / 1024)}KB)\n`);
    
    // Top 10 largest files
    console.log('🔝 Top 10 Largest Files:');
    files.slice(0, 10).forEach((file, index) => {
      console.log(`${index + 1}. ${file.name} - ${file.sizeMB}MB (${file.sizeKB}KB)`);
    });
    console.log('');
    
    // Warnings
    if (warnings.length > 0) {
      console.log('⚠️  Warnings:');
      warnings.forEach(warning => {
        console.log(`- ${warning.message}`);
      });
      console.log('');
    }
    
    // Recommendations
    if (recommendations.length > 0) {
      console.log('💡 Recommendations:');
      const highPriority = recommendations.filter(r => r.priority === 'high');
      const mediumPriority = recommendations.filter(r => r.priority === 'medium');
      
      if (highPriority.length > 0) {
        console.log('\n🔴 High Priority:');
        highPriority.forEach(rec => {
          console.log(`- ${rec.message}`);
        });
      }
      
      if (mediumPriority.length > 0) {
        console.log('\n🟡 Medium Priority:');
        mediumPriority.forEach(rec => {
          console.log(`- ${rec.message}`);
        });
      }
      console.log('');
    }
    
    // Performance score
    const performanceScore = this.calculatePerformanceScore();
    console.log(`🎯 Performance Score: ${performanceScore}/100`);
    
    if (performanceScore < 70) {
      console.log('❌ Bundle needs optimization');
    } else if (performanceScore < 85) {
      console.log('⚠️  Bundle could be improved');
    } else {
      console.log('✅ Bundle is well optimized');
    }
  }

  calculatePerformanceScore() {
    let score = 100;
    const { totalSize, files } = this.analysis;
    
    // Deduct points for large total size
    if (totalSize > 2 * 1024 * 1024) score -= 20; // 2MB
    else if (totalSize > 1 * 1024 * 1024) score -= 10; // 1MB
    
    // Deduct points for large individual files
    files.forEach(file => {
      if (file.sizeMB > 1) score -= 5;
      else if (file.sizeKB > 500) score -= 2;
    });
    
    // Deduct points for too many files
    if (files.length > 100) score -= 10;
    else if (files.length > 50) score -= 5;
    
    return Math.max(0, score);
  }
}

// Run analysis if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  const analyzer = new BundleAnalyzer();
  analyzer.analyze();
}

export default BundleAnalyzer;