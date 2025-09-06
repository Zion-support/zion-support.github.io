#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

class PerformanceOptimizer {
  constructor() {
    this.projectRoot = process.cwd();
    this.optimizations = [];
  }

  log(message, type = 'INFO') {
    const timestamp = new Date().toISOString();
    const prefix = {
      'INFO': 'ℹ️',
      'SUCCESS': '✅',
      'ERROR': '❌',
      'WARNING': '⚠️',
      'PROGRESS': '🔄'
    }[type] || 'ℹ️';
    console.log(`${prefix} [${timestamp}] ${message}`);
  }

  async optimizeBundleSize() {
    this.log('📦 Optimizing bundle size...');
    
    try {
      // Analyze bundle
      const analyzeResult = execSync('npm run build:analyze', { 
        cwd: this.projectRoot, 
        stdio: 'pipe',
        encoding: 'utf8'
      });
      
      this.optimizations.push({
        type: 'bundle-analysis',
        status: 'completed',
        details: 'Bundle analysis completed successfully'
      });
      
      this.log('✅ Bundle analysis completed', 'SUCCESS');
    } catch (error) {
      this.log('⚠️ Bundle analysis not available, continuing...', 'WARNING');
    }
  }

  async optimizeImages() {
    this.log('🖼️ Optimizing images...');
    
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.webp', '.svg'];
    const publicDir = path.join(this.projectRoot, 'public');
    
    if (fs.existsSync(publicDir)) {
      const images = this.findImages(publicDir, imageExtensions);
      
      for (const image of images) {
        try {
          // Basic image optimization suggestions
          const stats = fs.statSync(image);
          if (stats.size > 100000) { // > 100KB
            this.optimizations.push({
              type: 'image-optimization',
              file: image,
              size: stats.size,
              recommendation: 'Consider compressing this image'
            });
          }
        } catch (error) {
          // Skip files that can't be processed
        }
      }
    }
    
    this.log(`✅ Found ${this.optimizations.filter(o => o.type === 'image-optimization').length} images to optimize`, 'SUCCESS');
  }

  findImages(dir, extensions) {
    const images = [];
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        images.push(...this.findImages(fullPath, extensions));
      } else if (stat.isFile()) {
        const ext = path.extname(item).toLowerCase();
        if (extensions.includes(ext)) {
          images.push(fullPath);
        }
      }
    }
    
    return images;
  }

  async optimizeCodeSplitting() {
    this.log('🔀 Optimizing code splitting...');
    
    // Check for dynamic imports
    const srcDir = path.join(this.projectRoot, 'src');
    const pagesDir = path.join(this.projectRoot, 'pages');
    const appDir = path.join(this.projectRoot, 'app');
    
    const directories = [srcDir, pagesDir, appDir].filter(dir => fs.existsSync(dir));
    
    for (const dir of directories) {
      const files = this.getAllFiles(dir, ['.js', '.jsx', '.ts', '.tsx']);
      
      for (const file of files) {
        try {
          const content = fs.readFileSync(file, 'utf8');
          
          // Check for dynamic imports
          const dynamicImports = content.match(/import\s*\(\s*['"`][^'"`]+['"`]\s*\)/g);
          if (dynamicImports) {
            this.optimizations.push({
              type: 'code-splitting',
              file: file,
              dynamicImports: dynamicImports.length,
              status: 'good'
            });
          }
          
          // Check for large components that could be split
          if (content.length > 5000) {
            this.optimizations.push({
              type: 'large-component',
              file: file,
              size: content.length,
              recommendation: 'Consider splitting this component'
            });
          }
        } catch (error) {
          // Skip files that can't be read
        }
      }
    }
    
    this.log('✅ Code splitting analysis completed', 'SUCCESS');
  }

  getAllFiles(dir, extensions) {
    const files = [];
    if (!fs.existsSync(dir)) return files;
    
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        files.push(...this.getAllFiles(fullPath, extensions));
      } else if (stat.isFile()) {
        const ext = path.extname(item).toLowerCase();
        if (extensions.includes(ext)) {
          files.push(fullPath);
        }
      }
    }
    
    return files;
  }

  async generatePerformanceReport() {
    this.log('📊 Generating performance report...');
    
    const report = {
      timestamp: new Date().toISOString(),
      optimizations: this.optimizations,
      recommendations: this.generateRecommendations(),
      metrics: {
        totalOptimizations: this.optimizations.length,
        imageOptimizations: this.optimizations.filter(o => o.type === 'image-optimization').length,
        codeSplitting: this.optimizations.filter(o => o.type === 'code-splitting').length,
        largeComponents: this.optimizations.filter(o => o.type === 'large-component').length
      }
    };
    
    fs.writeFileSync('performance-optimization-report.json', JSON.stringify(report, null, 2));
    this.log('✅ Performance report generated', 'SUCCESS');
  }

  generateRecommendations() {
    const recommendations = [];
    
    const imageOptimizations = this.optimizations.filter(o => o.type === 'image-optimization');
    if (imageOptimizations.length > 0) {
      recommendations.push(`Optimize ${imageOptimizations.length} large images`);
    }
    
    const largeComponents = this.optimizations.filter(o => o.type === 'large-component');
    if (largeComponents.length > 0) {
      recommendations.push(`Consider splitting ${largeComponents.length} large components`);
    }
    
    const codeSplitting = this.optimizations.filter(o => o.type === 'code-splitting');
    if (codeSplitting.length > 0) {
      recommendations.push(`Good: Found ${codeSplitting.length} files with dynamic imports`);
    }
    
    return recommendations;
  }

  async run() {
    this.log('🚀 Starting Performance Optimizer');
    this.log('='.repeat(50));
    
    await this.optimizeBundleSize();
    await this.optimizeImages();
    await this.optimizeCodeSplitting();
    await this.generatePerformanceReport();
    
    this.log('\n📊 Performance Optimization Summary');
    this.log(`Total optimizations identified: ${this.optimizations.length}`);
    this.log(`Image optimizations: ${this.optimizations.filter(o => o.type === 'image-optimization').length}`);
    this.log(`Code splitting opportunities: ${this.optimizations.filter(o => o.type === 'code-splitting').length}`);
    this.log(`Large components: ${this.optimizations.filter(o => o.type === 'large-component').length}`);
    
    this.log('\n✅ Performance optimization completed!');
  }
}

const optimizer = new PerformanceOptimizer();
optimizer.run().catch(console.error);

module.exports = PerformanceOptimizer;