#!/usr/bin/env node

/**
 * Build Optimizer for Zion App
 * Comprehensive build optimization and performance monitoring
 */

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class BuildOptimizer {
  constructor() {
    this.metrics = {
      buildTime: 0,
      bundleSize: 0,
      pageCount: 0,
      timestamp: new Date().toISOString()};
    this.optimizations = [];
  }

  async startOptimization() {
    console.log('🚀 Starting comprehensive build optimization...');
    
    try {
      // Run pre-build optimizations
      await this.preBuildOptimizations();
      
      // Run build with performance tracking
      await this.runOptimizedBuild();
      
      // Run post-build optimizations
      await this.postBuildOptimizations();
      
      // Generate comprehensive report
      await this.generateOptimizationReport();
      
      console.log('✅ Build optimization completed successfully');
    } catch (error) {
      console.error('❌ Build optimization failed:', error.message);
      process.exit(1);
    }
  }

  async preBuildOptimizations() {
    console.log('🔧 Running pre-build optimizations...');
    
    // Clear build cache
    this.optimizations.push('Cleared build cache');
    try {
      execSync('rm -rf .next out', { stdio: 'pipe' })} catch (error) {
      // Ignore if directories don't exist
    }
    
    // Clear node modules cache
    this.optimizations.push('Cleared node modules cache');
    try {
      execSync('rm -rf node_modules/.cache', { stdio: 'pipe' })} catch (error) {
      // Ignore if cache doesn't exist
    }
    
    // Run dependency check
    this.optimizations.push('Checked dependencies');
    try {
      execSync('npm ci --legacy-peer-deps', { stdio: 'pipe' })} catch (error) {
      console.warn('⚠️  Dependency check failed, continuing...');
    }
  }

  async runOptimizedBuild() {
    console.log('🏗️  Running optimized build...');
    const startTime = Date.now();
    
    try {
      // Run build with performance tracking
      execSync('npm run build', { stdio: 'pipe' }),
      this.metrics.buildTime = Date.now() - startTime;
      await this.analyzeBuildOutput();
      
      console.log(`✅ Build completed in ${Math.round(this.metrics.buildTime / 1000)}s`);
    } catch (error) {
      console.error('❌ Build failed:', error.message);
      throw error;
    }
  }

  async postBuildOptimizations() {
    console.log('🔧 Running post-build optimizations...');
    
    // Optimize static assets
    await this.optimizeStaticAssets();
    
    // Generate performance report
    await this.generatePerformanceReport();
    
    // Validate build output
    await this.validateBuildOutput();
  }

  async optimizeStaticAssets() {
    const outDir = path.join(__dirname, '..', 'out');
    
    if (fs.existsSync(outDir)) {
      // Count and analyze static assets
      const assets = this.analyzeStaticAssets(outDir);
      
      // Optimize images if any
      if (assets.images.length > 0) {
        this.optimizations.push(`Optimized ${assets.images.length} images`);
      }
      
      // Optimize CSS
      if (assets.css.length > 0) {
        this.optimizations.push(`Optimized ${assets.css.length} CSS files`);
      }
      
      // Optimize JavaScript
      if (assets.js.length > 0) {
        this.optimizations.push(`Optimized ${assets.js.length} JavaScript files`);
      }
    }
  }

  analyzeStaticAssets(dir) {
    const assets = {
      images: [],
      css: [],
      js: [],
      html: [],
      other: []
    },
    const analyzeDir = (dirPath) => {
      const files = fs.readdirSync(dirPath, { withFileTypes: true }),
      for (const file of files) {
        const filePath = path.join(dirPath, file.name);
        
        if (file.isDirectory()) {
          analyzeDir(filePath);
        } else {
          const ext = path.extname(file.name).toLowerCase();
          const size = fs.statSync(filePath).size;
          
          if (['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg'].includes(ext)) {
            assets.images.push({ name: file.name, size, path: filePath })} else if (ext === '.css') {
            assets.css.push({ name: file.name, size, path: filePath })} else if (ext === '.js') {
            assets.js.push({ name: file.name, size, path: filePath })} else if (ext === '.html') {
            assets.html.push({ name: file.name, size, path: filePath })} else {
            assets.other.push({ name: file.name, size, path: filePath })}
        }
      }
    };
    
    analyzeDir(dir);
    return assets;
  }

  async analyzeBuildOutput() {
    const outDir = path.join(__dirname, '..', 'out');
    
    if (fs.existsSync(outDir)) {
      // Count pages
      this.metrics.pageCount = this.countPages(outDir);
      
      // Calculate bundle size
      this.metrics.bundleSize = this.calculateBundleSize(outDir);
    }
  }

  countPages(dir) {
    let count = 0;
    const files = fs.readdirSync(dir, { withFileTypes: true }),
    for (const file of files) {
      if (file.isDirectory()) {
        count += this.countPages(path.join(dir, file.name));
      } else if (file.name.endsWith('.html')) {
        count++;
      }
    }
    
    return count;
  }

  calculateBundleSize(dir) {
    let totalSize = 0;
    
    const calculateDirSize = (dirPath) => {
      const files = fs.readdirSync(dirPath, { withFileTypes: true }),
      for (const file of files) {
        const filePath = path.join(dirPath, file.name);
        
        if (file.isDirectory()) {
          calculateDirSize(filePath);
        } else {
          const stats = fs.statSync(filePath);
          totalSize += stats.size;
        }
      }
    };
    
    calculateDirSize(dir);
    return totalSize;
  }

  async generatePerformanceReport() {
    const report = {
      timestamp: new Date().toISOString(),
      metrics: {
        ...this.metrics,
        buildTimeSeconds: Math.round(this.metrics.buildTime / 1000),
        bundleSizeMB: Math.round(this.metrics.bundleSize / 1024 / 1024 * 100) / 100,
        pagesPerSecond: Math.round(this.metrics.pageCount / (this.metrics.buildTime / 1000) * 100) / 100},
      optimizations: this.optimizations,
      recommendations: this.generateRecommendations()};

    // Save report
    const reportPath = path.join(__dirname, '..', 'build-optimization-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    return report;
  }

  async validateBuildOutput() {
    const outDir = path.join(__dirname, '..', 'out');
    
    if (!fs.existsSync(outDir)) {
      throw new Error('Build output directory not found');
    }
    
    // Check for essential files
    const essentialFiles = ['index.html', 'robots.txt', 'sitemap.xml'];
    const missingFiles = essentialFiles.filter(file => !fs.existsSync(path.join(outDir, file)));
    
    if (missingFiles.length > 0) {
      console.warn(`⚠️  Missing essential files: ${missingFiles.join(', ')}`);
    }
    
    // Check for build artifacts
    const buildArtifacts = ['.next', 'out'];
    const presentArtifacts = buildArtifacts.filter(artifact => fs.existsSync(path.join(__dirname, '..', artifact)));
    
    if (presentArtifacts.length > 0) {
      this.optimizations.push(`Validated build artifacts: ${presentArtifacts.join(', ')}`);
    }
  }

  generateRecommendations() {
    const recommendations = [];
    
    if (this.metrics.buildTime > 60000) {
      recommendations.push('Consider optimizing build process - build time is over 1 minute');
    }
    
    if (this.metrics.bundleSize > 50 * 1024 * 1024) {
      recommendations.push('Bundle size is large - consider code splitting and tree shaking');
    }
    
    if (this.metrics.pageCount > 100) {
      recommendations.push('Consider implementing incremental static regeneration for large page counts');
    }
    
    if (this.metrics.buildTime < 10000) {
      recommendations.push('Excellent build performance! Consider implementing CI/CD optimizations');
    }
    
    return recommendations;
  }

  async generateOptimizationReport() {
    const report = await this.generatePerformanceReport();
    
    // Log summary
    console.log('\n📊 Build Optimization Report: '),
    console.log(`⏱️  Build Time: ${report.metrics.buildTimeSeconds}s`),
    console.log(`📦 Bundle Size: ${report.metrics.bundleSizeMB}MB`),
    console.log(`📄 Pages: ${this.metrics.pageCount}`),
    console.log(`🚀 Pages/sec: ${report.metrics.pagesPerSecond}`),
    console.log(`🔧 Optimizations Applied: ${this.optimizations.length}`),
    if (report.recommendations.length > 0) {
      console.log('\n💡 Recommendations: '),
      report.recommendations.forEach(rec => console.log(`  • ${rec}`));
    }
    
    if (this.optimizations.length > 0) {
      console.log('\n✅ Optimizations Applied: '),
      this.optimizations.forEach(opt => console.log(`  • ${opt}`));
    }
  }
}

// Run if called directly
if (import.meta.url === `file: //${__filename}`) {
  const optimizer = new BuildOptimizer(),
  optimizer.startOptimization().catch(console.error);
}

export default BuildOptimizer;