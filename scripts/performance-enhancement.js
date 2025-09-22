#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

class PerformanceEnhancement {
  constructor() {
    this.improvements = [];
    this.optimizations = [];
  }

  async enhancePerformance() {
    console.log('🚀 Starting performance enhancements...');
    
    await this.implementCodeSplitting();
    await this.optimizeImages();
    await this.enhanceCaching();
    await this.improveBundleSize();
    await this.addLazyLoading();
    
    this.generateReport();
  }

  async implementCodeSplitting() {
    console.log('📚 Implementing code splitting...');
    
    // Check for large components that could benefit from code splitting
    const componentsDir = path.join(process.cwd(), 'components');
    if (fs.existsSync(componentsDir)) {
      const components = this.findLargeComponents(componentsDir);
      
      if (components.length > 0) {
        this.improvements.push({
          type: 'code-splitting',
          action: `Found ${components.length} large components that could benefit from dynamic imports`,
          status: 'recommended'
        });
      } else {
        this.optimizations.push({
          type: 'code-splitting',
          status: 'good',
          message: 'Component sizes are reasonable'
        });
      }
    }
  }

  async optimizeImages() {
    console.log('🖼️ Optimizing images...');
    
    const publicDir = path.join(process.cwd(), 'public');
    if (fs.existsSync(publicDir)) {
      const images = this.findImages(publicDir);
      
      if (images.length > 0) {
        // Create image optimization configuration
        const imageConfigPath = path.join(process.cwd(), 'next.config.js');
        let configContent = fs.readFileSync(imageConfigPath, 'utf8');
        
        // Check if image optimization is already configured
        if (!configContent.includes('imageOptimization')) {
          this.improvements.push({
            type: 'image-optimization',
            action: 'Image optimization configuration recommended',
            status: 'recommended'
          });
        }
      } else {
        this.optimizations.push({
          type: 'image-optimization',
          status: 'good',
          message: 'No images found requiring optimization'
        });
      }
    }
  }

  async enhanceCaching() {
    console.log('💾 Enhancing caching...');
    
    const nextConfigPath = path.join(process.cwd(), 'next.config.js');
    if (fs.existsSync(nextConfigPath)) {
      const configContent = fs.readFileSync(nextConfigPath, 'utf8');
      
      if (configContent.includes('generateBuildId')) {
        this.optimizations.push({
          type: 'caching',
          status: 'good',
          message: 'Build ID generation is configured for better caching'
        });
      } else {
        this.improvements.push({
          type: 'caching',
          action: 'Add generateBuildId function for better caching',
          status: 'recommended'
        });
      }
    }
  }

  async improveBundleSize() {
    console.log('📦 Improving bundle size...');
    
    const outDir = path.join(process.cwd(), 'out');
    if (fs.existsSync(outDir)) {
      const stats = this.getDirectorySize(outDir);
      const sizeMB = (stats.size / 1024 / 1024).toFixed(2);
      
      if (stats.size > 50 * 1024 * 1024) { // 50MB
        this.improvements.push({
          type: 'bundle-size',
          action: `Bundle size is ${sizeMB}MB - consider implementing tree shaking and dead code elimination`,
          status: 'critical'
        });
      } else if (stats.size > 30 * 1024 * 1024) { // 30MB
        this.improvements.push({
          type: 'bundle-size',
          action: `Bundle size is ${sizeMB}MB - consider code splitting and lazy loading`,
          status: 'recommended'
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

  async addLazyLoading() {
    console.log('⚡ Adding lazy loading recommendations...');
    
    const pagesDir = path.join(process.cwd(), 'pages');
    if (fs.existsSync(pagesDir)) {
      const pages = this.findPages(pagesDir);
      
      if (pages.length > 10) {
        this.improvements.push({
          type: 'lazy-loading',
          action: 'Consider implementing dynamic imports for large pages',
          status: 'recommended'
        });
      } else {
        this.optimizations.push({
          type: 'lazy-loading',
          status: 'good',
          message: 'Page count is reasonable for lazy loading'
        });
      }
    }
  }

  findLargeComponents(dir) {
    const largeComponents = [];
    const extensions = ['.js', '.jsx', '.ts', '.tsx'];
    
    const readDir = (dirPath) => {
      const items = fs.readdirSync(dirPath);
      
      for (const item of items) {
        const itemPath = path.join(dirPath, item);
        const stat = fs.statSync(itemPath);
        
        if (stat.isDirectory()) {
          readDir(itemPath);
        } else {
          const ext = path.extname(item).toLowerCase();
          if (extensions.includes(ext) && stat.size > 10240) { // 10KB
            largeComponents.push({
              name: item,
              size: stat.size,
              path: itemPath
            });
          }
        }
      }
    };
    
    readDir(dir);
    return largeComponents;
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
            images.push({
              name: item,
              size: stat.size,
              path: itemPath
            });
          }
        }
      }
    };
    
    readDir(dir);
    return images;
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

  findPages(dir) {
    const pages = [];
    const extensions = ['.js', '.jsx', '.ts', '.tsx'];
    
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
            pages.push(itemPath);
          }
        }
      }
    };
    
    readDir(dir);
    return pages;
  }

  generateReport() {
    console.log('\n🚀 Performance Enhancement Report');
    console.log('=====================================\n');

    console.log('✅ Current Optimizations:');
    this.optimizations.forEach(opt => {
      console.log(`  • ${opt.type}: ${opt.message}`);
    });

    if (this.improvements.length > 0) {
      console.log('\n💡 Recommended Improvements:');
      this.improvements
        .sort((a, b) => {
          const priorityOrder = { critical: 3, recommended: 2, good: 1 };
          return priorityOrder[b.status] - priorityOrder[a.status];
        })
        .forEach(imp => {
          console.log(`  [${imp.status.toUpperCase()}] ${imp.action}\n`);
        });
    }

    console.log('✅ Performance enhancement analysis completed!');
  }
}

// Run the performance enhancement
if (require.main === module) {
  const enhancer = new PerformanceEnhancement();
  enhancer.enhancePerformance().catch(console.error);
}

module.exports = PerformanceEnhancement;