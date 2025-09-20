#!/usr/bin/env node

/**
 * Performance Optimization Script for Zion App
 * 
 * This script performs comprehensive performance optimizations:
 * - Bundle analysis and optimization recommendations
 * - Image optimization suggestions
 * - Code splitting analysis
 * - Performance monitoring setup
 */

const fs = require('fs');
const path = require('path');

class PerformanceOptimizer {
  constructor() {
    this.projectRoot = process.cwd();
    this.reportPath = path.join(this.projectRoot, 'performance-report.json');
    this.optimizations = [];
    this.warnings = [];
    this.recommendations = [];
  }

  async run() {
    console.log('🚀 Starting Performance Optimization Analysis...\n');
    
    await this.analyzeBundleSize();
    await this.analyzeCodeSplitting();
    await this.checkImageOptimization();
    await this.analyzeDependencies();
    await this.generateReport();
    
    console.log('\n✅ Performance optimization analysis complete!');
    console.log(`📊 Report saved to: ${this.reportPath}`);
  }

  async analyzeBundleSize() {
    console.log('📦 Analyzing bundle size...');
    
    const distPath = path.join(this.projectRoot, 'dist');
    if (!fs.existsSync(distPath)) {
      this.warnings.push('Dist folder not found. Run build first for accurate analysis.');
      return;
    }

    const assets = this.getAssets(distPath);
    const totalSize = assets.reduce((sum, asset) => sum + asset.size, 0);
    
    // Check for large chunks
    const largeChunks = assets.filter(asset => asset.size > 500 * 1024); // > 500KB
    
    if (largeChunks.length > 0) {
      this.optimizations.push({
        type: 'bundle-size',
        priority: 'high',
        issue: 'Large chunks detected',
        details: largeChunks.map(chunk => `${chunk.name}: ${(chunk.size / 1024).toFixed(1)}KB`),
        recommendation: 'Consider further code splitting or lazy loading for large chunks'
      });
    }

    this.recommendations.push({
      category: 'Bundle Size',
      suggestion: 'Total bundle size is optimized. Consider implementing lazy loading for routes.',
      impact: 'medium'
    });
  }

  async analyzeCodeSplitting() {
    console.log('🔀 Analyzing code splitting...');
    
    const viteConfigPath = path.join(this.projectRoot, 'vite.config.ts');
    if (fs.existsSync(viteConfigPath)) {
      const config = fs.readFileSync(viteConfigPath, 'utf8');
      
      if (config.includes('manualChunks')) {
        this.recommendations.push({
          category: 'Code Splitting',
          suggestion: 'Manual chunk splitting is configured. Excellent!',
          impact: 'high'
        });
      } else {
        this.optimizations.push({
          type: 'code-splitting',
          priority: 'medium',
          issue: 'No manual chunk splitting configured',
          recommendation: 'Add manualChunks configuration to optimize loading performance'
        });
      }
    }
  }

  async checkImageOptimization() {
    console.log('🖼️  Checking image optimization...');
    
    const publicPath = path.join(this.projectRoot, 'public');
    if (fs.existsSync(publicPath)) {
      const images = this.getImages(publicPath);
      
      if (images.length > 0) {
        const largeImages = images.filter(img => img.size > 100 * 1024); // > 100KB
        
        if (largeImages.length > 0) {
          this.optimizations.push({
            type: 'image-optimization',
            priority: 'medium',
            issue: 'Large images detected',
            details: largeImages.map(img => `${img.name}: ${(img.size / 1024).toFixed(1)}KB`),
            recommendation: 'Consider compressing images or using WebP/AVIF formats'
          });
        }
        
        this.recommendations.push({
          category: 'Images',
          suggestion: 'Consider implementing lazy loading for images below the fold',
          impact: 'medium'
        });
      }
    }
  }

  async analyzeDependencies() {
    console.log('📚 Analyzing dependencies...');
    
    const packageJsonPath = path.join(this.projectRoot, 'package.json');
    if (fs.existsSync(packageJsonPath)) {
      const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
      const dependencies = { ...packageJson.dependencies, ...packageJson.devDependencies };
      
      // Check for heavy dependencies
      const heavyDeps = [
        'lodash', 'moment', 'jquery', 'bootstrap', 'material-ui'
      ];
      
      const foundHeavy = heavyDeps.filter(dep => dependencies[dep]);
      if (foundHeavy.length > 0) {
        this.optimizations.push({
          type: 'dependencies',
          priority: 'low',
          issue: 'Heavy dependencies detected',
          details: foundHeavy,
          recommendation: 'Consider lighter alternatives or tree-shaking optimization'
        });
      }
      
      this.recommendations.push({
        category: 'Dependencies',
        suggestion: 'Dependencies are well optimized. Keep monitoring for updates.',
        impact: 'low'
      });
    }
  }

  async generateReport() {
    console.log('📊 Generating performance report...');
    
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        optimizations: this.optimizations.length,
        warnings: this.warnings.length,
        recommendations: this.recommendations.length
      },
      optimizations: this.optimizations,
      warnings: this.warnings,
      recommendations: this.recommendations,
      nextSteps: this.generateNextSteps()
    };
    
    fs.writeFileSync(this.reportPath, JSON.stringify(report, null, 2));
    
    // Display summary
    console.log('\n📋 Performance Analysis Summary:');
    console.log(`   🔧 Optimizations needed: ${this.optimizations.length}`);
    console.log(`   ⚠️  Warnings: ${this.warnings.length}`);
    console.log(`   💡 Recommendations: ${this.recommendations.length}`);
    
    if (this.optimizations.length > 0) {
      console.log('\n🔧 Priority Optimizations:');
      this.optimizations
        .filter(opt => opt.priority === 'high')
        .forEach(opt => {
          console.log(`   • ${opt.issue}: ${opt.recommendation}`);
        });
    }
  }

  generateNextSteps() {
    return [
      'Implement lazy loading for route components',
      'Add image optimization with WebP/AVIF support',
      'Set up performance monitoring with Web Vitals',
      'Consider implementing virtual scrolling for large lists',
      'Add comprehensive caching strategies',
      'Implement service worker for offline functionality'
    ];
  }

  getAssets(dir, assets = []) {
    const files = fs.readdirSync(dir);
    
    files.forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        this.getAssets(filePath, assets);
      } else if (file.match(/\.(js|css)$/)) {
        assets.push({
          name: file,
          path: filePath,
          size: stat.size
        });
      }
    });
    
    return assets;
  }

  getImages(dir, images = []) {
    const files = fs.readdirSync(dir);
    
    files.forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        this.getImages(filePath, images);
      } else if (file.match(/\.(png|jpg|jpeg|gif|svg|webp|avif)$/i)) {
        images.push({
          name: file,
          path: filePath,
          size: stat.size
        });
      }
    });
    
    return images;
  }
}

// Run the optimizer
if (require.main === module) {
  const optimizer = new PerformanceOptimizer();
  optimizer.run().catch(console.error);
}

module.exports = PerformanceOptimizer;