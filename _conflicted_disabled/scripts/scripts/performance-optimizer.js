#!/usr/bin/env node

/**
 * Performance Optimization Script
 * Analyzes bundle size and provides optimization recommendations
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

class PerformanceOptimizer {
  constructor() {
    this.distPath = path.join(__dirname, '../dist');
    this.reportPath = path.join(__dirname, '../performance-report.json');
  }

  async analyzeBundle() {
    console.log('🔍 Analyzing bundle performance...\n');

    if (!fs.existsSync(this.distPath)) {
      console.error('❌ Dist folder not found. Run npm run build first.');
      process.exit(1);
    }

    const assets = this.getAssets();
    const analysis = this.analyzeAssets(assets);
    const recommendations = this.generateRecommendations(analysis);

    const report = {
      timestamp: new Date().toISOString(),
      analysis,
      recommendations,
      summary: this.generateSummary(analysis)
    };

    // Save report
    fs.writeFileSync(this.reportPath, JSON.stringify(report, null, 2));
    
    this.displayReport(report);
    return report;
  }

  getAssets() {
    const assets = [];
    const files = fs.readdirSync(this.distPath, { recursive: true });

    for (const file of files) {
      const filePath = path.join(this.distPath, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isFile()) {
        const size = stat.size;
        const ext = path.extname(file);
        
        assets.push({
          name: file,
          path: filePath,
          size,
          sizeKB: Math.round(size / 1024 * 100) / 100,
          extension: ext,
          type: this.getAssetType(ext)
        });
      }
    }

    return assets.sort((a, b) => b.size - a.size);
  }

  getAssetType(ext) {
    const types = {
      '.js': 'JavaScript',
      '.css': 'CSS',
      '.html': 'HTML',
      '.png': 'Image',
      '.jpg': 'Image',
      '.jpeg': 'Image',
      '.svg': 'Image',
      '.woff': 'Font',
      '.woff2': 'Font',
      '.ttf': 'Font',
      '.eot': 'Font'
    };
    return types[ext] || 'Other';
  }

  analyzeAssets(assets) {
    const totalSize = assets.reduce((sum, asset) => sum + asset.size, 0);
    const jsAssets = assets.filter(a => a.extension === '.js');
    const cssAssets = assets.filter(a => a.extension === '.css');
    const imageAssets = assets.filter(a => a.type === 'Image');
    const fontAssets = assets.filter(a => a.type === 'Font');

    const largestAssets = assets.slice(0, 10);
    const largestJS = jsAssets.slice(0, 5);
    const largestCSS = cssAssets.slice(0, 3);

    return {
      totalSize,
      totalSizeKB: Math.round(totalSize / 1024 * 100) / 100,
      totalSizeMB: Math.round(totalSize / (1024 * 1024) * 100) / 100,
      assetCount: assets.length,
      jsAssets: {
        count: jsAssets.length,
        totalSize: jsAssets.reduce((sum, a) => sum + a.size, 0),
        largest: largestJS
      },
      cssAssets: {
        count: cssAssets.length,
        totalSize: cssAssets.reduce((sum, a) => sum + a.size, 0),
        largest: largestCSS
      },
      imageAssets: {
        count: imageAssets.length,
        totalSize: imageAssets.reduce((sum, a) => sum + a.size, 0)
      },
      fontAssets: {
        count: fontAssets.length,
        totalSize: fontAssets.reduce((sum, a) => sum + a.size, 0)
      },
      largestAssets
    };
  }

  generateRecommendations(analysis) {
    const recommendations = [];

    // Bundle size recommendations
    if (analysis.totalSizeMB > 1) {
      recommendations.push({
        type: 'warning',
        category: 'Bundle Size',
        message: `Total bundle size is ${analysis.totalSizeMB}MB, which is quite large.`,
        suggestions: [
          'Implement more aggressive code splitting',
          'Use dynamic imports for non-critical features',
          'Remove unused dependencies',
          'Optimize images and assets'
        ]
      });
    }

    return recommendations;
  }

  generateSummary(analysis) {
    const score = this.calculatePerformanceScore(analysis);
    const grade = this.getPerformanceGrade(score);

    return {
      score,
      grade,
      totalAssets: analysis.assetCount,
      totalSize: `${analysis.totalSizeMB}MB`,
      jsFiles: analysis.jsAssets.count,
      cssFiles: analysis.cssAssets.count,
      imageFiles: analysis.imageAssets.count
    };
  }

  calculatePerformanceScore(analysis) {
    let score = 100;

    // Deduct points for large bundle size
    if (analysis.totalSizeMB > 2) score -= 30;
    else if (analysis.totalSizeMB > 1) score -= 20;
    else if (analysis.totalSizeMB > 0.5) score -= 10;

    return Math.max(0, score);
  }

  getPerformanceGrade(score) {
    if (score >= 90) return 'A';
    if (score >= 80) return 'B';
    if (score >= 70) return 'C';
    if (score >= 60) return 'D';
    return 'F';
  }

  displayReport(report) {
    console.log('📊 Performance Analysis Report');
    console.log('================================\n');

    console.log(`📈 Performance Score: ${report.summary.score}/100 (Grade: ${report.summary.grade})`);
    console.log(`📦 Total Bundle Size: ${report.summary.totalSize}`);
    console.log(`📁 Total Assets: ${report.summary.totalAssets}`);
    console.log(`🔧 JavaScript Files: ${report.summary.jsFiles}`);
    console.log(`🎨 CSS Files: ${report.summary.cssFiles}`);
    console.log(`🖼️  Image Files: ${report.summary.imageFiles}\n`);

    console.log(`📄 Full report saved to: ${this.reportPath}`);
  }
}

// Run the analysis
const optimizer = new PerformanceOptimizer();
optimizer.analyzeBundle().catch(console.error);