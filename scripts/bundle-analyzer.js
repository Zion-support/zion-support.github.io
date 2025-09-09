#!/usr/bin/env node

/**
 * Bundle analyzer script to identify optimization opportunities
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class BundleAnalyzer {
  constructor() {
    this.distPath = path.join(__dirname, '..', 'dist');
    this.analysis = {
      totalSize: 0,
      files: [],
      recommendations: [],
      duplicates: [],
      unused: []
    };
  }

  async analyze() {
    console.log('🔍 Analyzing bundle...\n');

    if (!fs.existsSync(this.distPath)) {
      console.error('❌ Dist directory not found. Please run build first.');
      process.exit(1);
    }

    await this.analyzeFiles();
    this.generateRecommendations();
    this.printReport();
    this.saveReport();
  }

  async analyzeFiles() {
    const files = fs.readdirSync(this.distPath, { recursive: true });
    
    for (const file of files) {
      const filePath = path.join(this.distPath, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isFile() && this.isAssetFile(file)) {
        const size = stat.size;
        const sizeKB = (size / 1024).toFixed(2);
        
        this.analysis.files.push({
          name: file,
          size: size,
          sizeKB: parseFloat(sizeKB),
          type: this.getFileType(file)
        });
        
        this.analysis.totalSize += size;
      }
    }

    // Sort by size (largest first)
    this.analysis.files.sort((a, b) => b.size - a.size);
  }

  isAssetFile(filename) {
    const assetExtensions = ['.js', '.css', '.html', '.json', '.svg', '.png', '.jpg', '.jpeg', '.gif', '.webp'];
    return assetExtensions.some(ext => filename.endsWith(ext));
  }

  getFileType(filename) {
    if (filename.endsWith('.js')) return 'JavaScript';
    if (filename.endsWith('.css')) return 'CSS';
    if (filename.endsWith('.html')) return 'HTML';
    if (filename.endsWith('.json')) return 'JSON';
    if (filename.match(/\.(png|jpg|jpeg|gif|webp|svg)$/)) return 'Image';
    return 'Other';
  }

  generateRecommendations() {
    const { files, totalSize } = this.analysis;
    const totalSizeMB = (totalSize / (1024 * 1024)).toFixed(2);

    // Large file recommendations
    files.forEach(file => {
      if (file.sizeKB > 100) {
        this.analysis.recommendations.push({
          type: 'large-file',
          file: file.name,
          size: file.sizeKB,
          suggestion: `Consider splitting ${file.name} (${file.sizeKB}KB) into smaller chunks`
        });
      }
    });

    // Bundle size recommendations
    if (totalSizeMB > 1) {
      this.analysis.recommendations.push({
        type: 'bundle-size',
        size: totalSizeMB,
        suggestion: `Total bundle size is ${totalSizeMB}MB. Consider implementing code splitting and lazy loading.`
      });
    }

    // JavaScript optimization recommendations
    const jsFiles = files.filter(f => f.type === 'JavaScript');
    const totalJSSize = jsFiles.reduce((sum, f) => sum + f.size, 0);
    
    if (totalJSSize > 500 * 1024) { // 500KB
      this.analysis.recommendations.push({
        type: 'js-optimization',
        size: (totalJSSize / 1024).toFixed(2),
        suggestion: `JavaScript bundle is ${(totalJSSize / 1024).toFixed(2)}KB. Consider tree shaking and removing unused code.`
      });
    }

    // CSS optimization recommendations
    const cssFiles = files.filter(f => f.type === 'CSS');
    const totalCSSSize = cssFiles.reduce((sum, f) => sum + f.size, 0);
    
    if (totalCSSSize > 100 * 1024) { // 100KB
      this.analysis.recommendations.push({
        type: 'css-optimization',
        size: (totalCSSSize / 1024).toFixed(2),
        suggestion: `CSS bundle is ${(totalCSSSize / 1024).toFixed(2)}KB. Consider purging unused CSS.`
      });
    }
  }

  printReport() {
    const { files, totalSize, recommendations } = this.analysis;
    const totalSizeMB = (totalSize / (1024 * 1024)).toFixed(2);

    console.log('📊 Bundle Analysis Report');
    console.log('========================\n');

    console.log(`📦 Total Bundle Size: ${totalSizeMB} MB\n`);

    console.log('📁 File Analysis:');
    console.log('-----------------');
    files.slice(0, 10).forEach((file, index) => {
      console.log(`${index + 1}. ${file.name} - ${file.sizeKB}KB (${file.type})`);
    });

    if (files.length > 10) {
      console.log(`... and ${files.length - 10} more files\n`);
    }

    console.log('\n💡 Recommendations:');
    console.log('-------------------');
    recommendations.forEach((rec, index) => {
      console.log(`${index + 1}. ${rec.suggestion}`);
    });

    console.log('\n🎯 Optimization Opportunities:');
    console.log('-------------------------------');
    
    const largeFiles = files.filter(f => f.sizeKB > 100);
    if (largeFiles.length > 0) {
      console.log(`• ${largeFiles.length} files larger than 100KB`);
    }

    const jsFiles = files.filter(f => f.type === 'JavaScript');
    const cssFiles = files.filter(f => f.type === 'CSS');
    
    console.log(`• ${jsFiles.length} JavaScript files`);
    console.log(`• ${cssFiles.length} CSS files`);
    console.log(`• ${files.filter(f => f.type === 'Image').length} image files`);

    console.log('\n✨ Next Steps:');
    console.log('---------------');
    console.log('1. Implement dynamic imports for large components');
    console.log('2. Use tree shaking to remove unused code');
    console.log('3. Optimize images and use modern formats (WebP)');
    console.log('4. Consider code splitting by route');
    console.log('5. Implement lazy loading for non-critical components');
  }

  saveReport() {
    const reportPath = path.join(__dirname, '..', 'bundle-analysis-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(this.analysis, null, 2));
    console.log(`\n📄 Detailed report saved to: ${reportPath}`);
  }
}

// Run the analyzer
const analyzer = new BundleAnalyzer();
analyzer.analyze().catch(console.error);