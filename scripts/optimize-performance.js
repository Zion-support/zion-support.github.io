#!/usr/bin/env node

/**
 * Performance Optimization Script
 * Analyzes and optimizes the Next.js application for better performance
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class PerformanceOptimizer {
  constructor() {
    this.optimizations = [];
    this.recommendations = [];
  }

  async analyzeAndOptimize() {
    console.log('🚀 Starting performance optimization analysis...');
    
    await this.analyzeBundleSize();
    await this.optimizeImages();
    await this.analyzeDependencies();
    await this.optimizeCode();
    await this.generateReport();
  }

  async analyzeBundleSize() {
    console.log('📦 Analyzing bundle size...');
    
    try {
      // Check if build directory exists
      if (fs.existsSync('out')) {
        const buildSize = this.getDirectorySize('out');
        this.optimizations.push({
          type: 'bundle-analysis',
          current: buildSize,
          recommendation: buildSize > 50 * 1024 * 1024 ? 'Consider code splitting and lazy loading' : 'Bundle size is acceptable'
        });
      }
    } catch (error) {
      console.error('Error analyzing bundle:', error.message);
    }
  }

  async optimizeImages() {
    console.log('🖼️ Optimizing images...');
    
    const publicDir = 'public';
    if (fs.existsSync(publicDir)) {
      const images = this.findImages(publicDir);
      
      this.optimizations.push({
        type: 'image-optimization',
        found: images.length,
        recommendation: images.length > 10 ? 'Consider using WebP format and lazy loading' : 'Image count is reasonable'
      });
    }
  }

  async analyzeDependencies() {
    console.log('📚 Analyzing dependencies...');
    
    try {
      const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
      const dependencies = Object.keys(packageJson.dependencies || {});
      const devDependencies = Object.keys(packageJson.devDependencies || {});
      
      this.optimizations.push({
        type: 'dependencies',
        production: dependencies.length,
        development: devDependencies.length,
        recommendation: dependencies.length > 50 ? 'Consider removing unused dependencies' : 'Dependency count is reasonable'
      });
    } catch (error) {
      console.error('Error analyzing dependencies:', error.message);
    }
  }

  async optimizeCode() {
    console.log('💻 Analyzing code quality...');
    
    // Check for large files
    const largeFiles = this.findLargeFiles('.', 10000); // Files larger than 10KB
    
    this.optimizations.push({
      type: 'code-quality',
      largeFiles: largeFiles.length,
      recommendation: largeFiles.length > 5 ? 'Consider splitting large files into smaller modules' : 'File sizes are reasonable'
    });
  }

  getDirectorySize(dirPath) {
    let size = 0;
    const files = fs.readdirSync(dirPath);
    
    for (const file of files) {
      const filePath = path.join(dirPath, file);
      const stats = fs.statSync(filePath);
      
      if (stats.isDirectory()) {
        size += this.getDirectorySize(filePath);
      } else {
        size += stats.size;
      }
    }
    
    return size;
  }

  findImages(dirPath) {
    const images = [];
    const extensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg'];
    
    const files = fs.readdirSync(dirPath);
    
    for (const file of files) {
      const filePath = path.join(dirPath, file);
      const stats = fs.statSync(filePath);
      
      if (stats.isDirectory()) {
        images.push(...this.findImages(filePath));
      } else {
        const ext = path.extname(file).toLowerCase();
        if (extensions.includes(ext)) {
          images.push(filePath);
        }
      }
    }
    
    return images;
  }

  findLargeFiles(dirPath, minSize) {
    const largeFiles = [];
    
    try {
      const files = fs.readdirSync(dirPath);
      
      for (const file of files) {
        // Skip node_modules and other large directories
        if (['node_modules', '.git', 'out', '.next'].includes(file)) continue;
        
        const filePath = path.join(dirPath, file);
        const stats = fs.statSync(filePath);
        
        if (stats.isDirectory()) {
          largeFiles.push(...this.findLargeFiles(filePath, minSize));
        } else if (stats.size > minSize) {
          largeFiles.push({
            path: filePath,
            size: stats.size
          });
        }
      }
    } catch (error) {
      // Skip files we can't read
    }
    
    return largeFiles;
  }

  generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      optimizations: this.optimizations,
      recommendations: this.recommendations,
      summary: this.generateSummary()
    };

    fs.writeFileSync('performance-optimization-report.json', JSON.stringify(report, null, 2));
    
    console.log('\n📊 Performance Optimization Report');
    console.log('=====================================');
    
    this.optimizations.forEach(opt => {
      console.log(`\n${opt.type}:`);
      console.log(`  Current: ${JSON.stringify(opt.current || opt.found || opt.production || opt.largeFiles)}`);
      console.log(`  Recommendation: ${opt.recommendation}`);
    });
    
    console.log('\n✅ Performance analysis completed!');
  }

  generateSummary() {
    const totalOptimizations = this.optimizations.length;
    const criticalIssues = this.optimizations.filter(opt => 
      opt.recommendation.includes('Consider') || opt.recommendation.includes('large')
    ).length;
    
    return {
      totalOptimizations,
      criticalIssues,
      status: criticalIssues === 0 ? 'excellent' : criticalIssues < 3 ? 'good' : 'needs-attention'
    };
  }
}

// Run optimization if called directly
if (require.main === module) {
  const optimizer = new PerformanceOptimizer();
  optimizer.analyzeAndOptimize().catch(console.error);
}

module.exports = PerformanceOptimizer;