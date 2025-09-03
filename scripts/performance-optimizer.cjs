#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('⚡ Zion Tech Group - Performance Optimizer');
console.log('==========================================');

class PerformanceOptimizer {
  constructor() {
    this.projectRoot = process.cwd();
    this.results = {
      optimizations: [],
      warnings: [],
      metrics: {}
    };
  }

  log(message, type = 'info') {
    const timestamp = new Date().toISOString();
    const prefix = type === 'error' ? '❌' : type === 'success' ? '✅' : 'ℹ️';
    console.log(`[${timestamp}] ${prefix} ${message}`);
  }

  async analyzeBundleSize() {
    this.log('📦 Analyzing bundle size...');
    
    try {
      // Check if .next directory exists
      if (fs.existsSync(path.join(this.projectRoot, '.next'))) {
        const buildInfo = fs.readdirSync(path.join(this.projectRoot, '.next'));
        this.log(`Build artifacts found: ${buildInfo.length} items`);
        
        // Analyze static files
        const staticDir = path.join(this.projectRoot, '.next/static');
        if (fs.existsSync(staticDir)) {
          const staticFiles = this.getDirectorySize(staticDir);
          this.results.metrics.staticSize = staticFiles;
          this.log(`Static files size: ${(staticFiles / 1024 / 1024).toFixed(2)} MB`);
        }
        
        this.results.optimizations.push('Bundle size analysis completed');
      } else {
        this.log('No build found. Run npm run build first.', 'warning');
        this.results.warnings.push('No build artifacts found for analysis');
      }
    } catch (error) {
      this.log(`Bundle analysis failed: ${error.message}`, 'error');
    }
  }

  getDirectorySize(dirPath) {
    let totalSize = 0;
    try {
      const files = fs.readdirSync(dirPath);
      for (const file of files) {
        const filePath = path.join(dirPath, file);
        const stats = fs.statSync(filePath);
        if (stats.isDirectory()) {
          totalSize += this.getDirectorySize(filePath);
        } else {
          totalSize += stats.size;
        }
      }
    } catch (error) {
      // Ignore errors for inaccessible directories
    }
    return totalSize;
  }

  async optimizeImages() {
    this.log('🖼️ Optimizing images...');
    
    try {
      // Check for common image directories
      const imageDirs = ['public/images', 'public/img', 'static/images', 'assets/images'];
      let imagesFound = 0;
      
      for (const dir of imageDirs) {
        const fullPath = path.join(this.projectRoot, dir);
        if (fs.existsSync(fullPath)) {
          const images = fs.readdirSync(fullPath).filter(file => 
            /\.(jpg|jpeg|png|gif|webp|svg)$/i.test(file)
          );
          imagesFound += images.length;
        }
      }
      
      if (imagesFound > 0) {
        this.log(`Found ${imagesFound} images to optimize`);
        this.results.optimizations.push(`Image optimization recommended for ${imagesFound} images`);
      } else {
        this.log('No images found for optimization');
      }
    } catch (error) {
      this.log(`Image optimization check failed: ${error.message}`, 'error');
    }
  }

  async checkDependencies() {
    this.log('📋 Checking dependencies for optimization...');
    
    try {
      const packageJson = JSON.parse(fs.readFileSync(path.join(this.projectRoot, 'package.json'), 'utf8'));
      const dependencies = { ...packageJson.dependencies, ...packageJson.devDependencies };
      
      // Check for large or outdated packages
      const largePackages = [];
      const outdatedPackages = [];
      
      for (const [name, version] of Object.entries(dependencies)) {
        // Check for common large packages
        if (['framer-motion', 'lodash', 'moment', 'jquery'].includes(name)) {
          largePackages.push({ name, version });
        }
      }
      
      if (largePackages.length > 0) {
        this.log(`Found ${largePackages.length} potentially large packages`);
        this.results.optimizations.push(`Consider tree-shaking or alternatives for: ${largePackages.map(p => p.name).join(', ')}`);
      }
      
      this.results.optimizations.push('Dependency analysis completed');
    } catch (error) {
      this.log(`Dependency check failed: ${error.message}`, 'error');
    }
  }

  async generatePerformanceReport() {
    this.log('📊 Generating performance report...');
    
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        optimizations: this.results.optimizations.length,
        warnings: this.results.warnings.length,
        metrics: Object.keys(this.results.metrics).length
      },
      results: this.results,
      recommendations: [
        'Enable Next.js Image Optimization',
        'Implement code splitting for large components',
        'Use dynamic imports for heavy libraries',
        'Optimize images to WebP format',
        'Enable gzip compression',
        'Implement service worker for caching',
        'Use React.memo for expensive components',
        'Consider using a CDN for static assets'
      ]
    };

    const reportPath = path.join(this.projectRoot, 'performance-optimization-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    this.log(`Performance report saved to: ${reportPath}`, 'success');
    return report;
  }

  async runOptimization() {
    try {
      this.log('🚀 Starting performance optimization...');
      
      await this.analyzeBundleSize();
      await this.optimizeImages();
      await this.checkDependencies();
      
      const report = await this.generatePerformanceReport();
      
      this.log('🎉 Performance optimization completed!');
      this.log(`📊 Summary: ${report.summary.optimizations} optimizations identified`);
      
      if (report.summary.warnings > 0) {
        this.log(`⚠️ ${report.summary.warnings} warnings - review recommendations`);
      }
      
    } catch (error) {
      this.log(`❌ Performance optimization failed: ${error.message}`, 'error');
      process.exit(1);
    }
  }
}

// Run the performance optimizer
if (require.main === module) {
  const optimizer = new PerformanceOptimizer();
  optimizer.runOptimization().catch(console.error);
}

module.exports = PerformanceOptimizer;