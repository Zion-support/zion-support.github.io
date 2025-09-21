#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

class BuildOptimizer {
  constructor() {
    this.optimizations = [];
    this.recommendations = [];
  }

  async analyzeAndOptimize() {
    console.log('🚀 Starting build optimization analysis...');
    
    await this.checkBundleSize();
    await this.checkImageOptimization();
    await this.checkCodeSplitting();
    await this.checkCaching();
    await this.checkCompression();
    
    this.generateReport();
  }

  async checkBundleSize() {
    console.log('📦 Analyzing bundle size...');
    
    const outDir = path.join(process.cwd(), 'out');
    if (fs.existsSync(outDir)) {
      const stats = this.getDirectorySize(outDir);
      const sizeMB = (stats.size / 1024 / 1024).toFixed(2);
      
      if (stats.size > 25 * 1024 * 1024) { // 25MB
        this.recommendations.push({
          type: 'bundle-size',
          priority: 'high',
          issue: `Bundle size is ${sizeMB}MB, which is quite large`,
          recommendation: 'Consider implementing code splitting and lazy loading for better performance'
        });
      } else {
        this.optimizations.push({
          type: 'bundle-size',
          status: 'good',
          message: `Bundle size is ${sizeMB}MB, which is acceptable`
        });
      }
    }
  }

  async checkImageOptimization() {
    console.log('🖼️ Checking image optimization...');
    
    const publicDir = path.join(process.cwd(), 'public');
    if (fs.existsSync(publicDir)) {
      const images = this.findImages(publicDir);
      
      if (images.length > 20) {
        this.recommendations.push({
          type: 'images',
          priority: 'medium',
          issue: `Found ${images.length} images in public directory`,
          recommendation: 'Consider implementing next/image optimization and WebP conversion'
        });
      } else {
        this.optimizations.push({
          type: 'images',
          status: 'good',
          message: `Found ${images.length} images, which is reasonable`
        });
      }
    }
  }

  async checkCodeSplitting() {
    console.log('📚 Checking code splitting...');
    
    const pagesDir = path.join(process.cwd(), 'pages');
    if (fs.existsSync(pagesDir)) {
      const pages = this.findPages(pagesDir);
      
      if (pages.length > 10) {
        this.recommendations.push({
          type: 'code-splitting',
          priority: 'medium',
          issue: `Found ${pages.length} pages`,
          recommendation: 'Consider implementing dynamic imports for large components'
        });
      } else {
        this.optimizations.push({
          type: 'code-splitting',
          status: 'good',
          message: `Found ${pages.length} pages, which is manageable`
        });
      }
    }
  }

  async checkCaching() {
    console.log('💾 Checking caching configuration...');
    
    const nextConfigPath = path.join(process.cwd(), 'next.config.js');
    if (fs.existsSync(nextConfigPath)) {
      const content = fs.readFileSync(nextConfigPath, 'utf8');
      
      if (content.includes('generateBuildId')) {
        this.optimizations.push({
          type: 'caching',
          status: 'good',
          message: 'Build ID generation is configured for better caching'
        });
      } else {
        this.recommendations.push({
          type: 'caching',
          priority: 'low',
          issue: 'No build ID generation found',
          recommendation: 'Add generateBuildId function for better caching'
        });
      }
    }
  }

  async checkCompression() {
    console.log('🗜️ Checking compression...');
    
    const nextConfigPath = path.join(process.cwd(), 'next.config.js');
    if (fs.existsSync(nextConfigPath)) {
      const content = fs.readFileSync(nextConfigPath, 'utf8');
      
      if (content.includes('CompressionPlugin')) {
        this.optimizations.push({
          type: 'compression',
          status: 'good',
          message: 'Compression plugin is configured'
        });
      } else {
        this.recommendations.push({
          type: 'compression',
          priority: 'medium',
          issue: 'No compression plugin found',
          recommendation: 'Add compression-webpack-plugin for better asset compression'
        });
      }
    }
  }

  getDirectorySize(dir) {
    let size = 0;
    let files = 0;
    
    const readDir = (dirPath) => {
      const items = fs.readdirSync(dirPath);
      
      for (const item of items) {
        const itemPath = path.join(dirPath, item);
        const stat = fs.statSync(itemPath);
        
        if (stat.isDirectory()) {
          readDir(itemPath);
        } else {
          size += stat.size;
          files++;
        }
      }
    };
    
    readDir(dir);
    return { size, files };
  }

  findImages(dir) {
    const images = [];
    const extensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg'];
    
    const readDir = (dirPath) => {
      const items = fs.readdirSync(dirPath);
      
      for (const item of items) {
        const itemPath = path.join(dirPath, item);
        const stat = fs.statSync(itemPath);
        
        if (stat.isDirectory()) {
          readDir(itemPath);
        } else {
          const ext = path.extname(item).toLowerCase();
          if (extensions.includes(ext)) {
            images.push(itemPath);
          }
        }
      }
    };
    
    readDir(dir);
    return images;
  }

  findPages(dir) {
    const pages = [];
    
    const readDir = (dirPath) => {
      const items = fs.readdirSync(dirPath);
      
      for (const item of items) {
        const itemPath = path.join(dirPath, item);
        const stat = fs.statSync(itemPath);
        
        if (stat.isDirectory()) {
          readDir(itemPath);
        } else if (item.endsWith('.js') || item.endsWith('.jsx') || item.endsWith('.ts') || item.endsWith('.tsx')) {
          pages.push(itemPath);
        }
      }
    };
    
    readDir(dir);
    return pages;
  }

  generateReport() {
    console.log('\n📊 Build Optimization Report');
    console.log('=====================================\n');

    console.log('✅ Optimizations Found:');
    this.optimizations.forEach(opt => {
      console.log(`  • ${opt.type}: ${opt.message}`);
    });

    if (this.recommendations.length > 0) {
      console.log('\n💡 Recommendations:');
      this.recommendations
        .sort((a, b) => {
          const priorityOrder = { high: 3, medium: 2, low: 1 };
          return priorityOrder[b.priority] - priorityOrder[a.priority];
        })
        .forEach(rec => {
          console.log(`  [${rec.priority.toUpperCase()}] ${rec.issue}`);
          console.log(`      → ${rec.recommendation}\n`);
        });
    }

    console.log('✅ Build optimization analysis completed!');
  }
}

// Run the optimizer
if (require.main === module) {
  const optimizer = new BuildOptimizer();
  optimizer.analyzeAndOptimize().catch(console.error);
}

module.exports = BuildOptimizer;