#!/usr/bin/env node
/**
 * Performance Optimization Script for Zion Tech Group
 * Analyzes and optimizes application performance
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class PerformanceOptimizer {
  constructor() {
    this.report = {
      timestamp: new Date().toISOString(),
      optimizations: [],
      recommendations: [],
      metrics: {}
    };
  }

  log(message, type = 'INFO') {
    const icons = { INFO: 'ℹ️', SUCCESS: '✅', ERROR: '❌', WARNING: '⚠️' };
    console.log(`${icons[type]} ${message}`);
  }

  async optimize() {
    this.log('Starting Performance Optimizer...', 'INFO');
    
    try {
      await this.analyzeBundleSize();
      await this.analyzeDependencies();
      await this.optimizeImages();
      await this.checkLighthouse();
      this.generateReport();
      
      this.log('Performance optimization complete!', 'SUCCESS');
      return true;
    } catch (error) {
      this.log(`Performance optimization failed: ${error.message}`, 'ERROR');
      return false;
    }
  }

  async analyzeBundleSize() {
    this.log('Analyzing bundle size...', 'INFO');
    
    try {
      if (fs.existsSync('dist')) {
        const stats = execSync('du -sh dist', { encoding: 'utf8' });
        const size = stats.trim().split('\t')[0];
        this.report.metrics.bundleSize = size;
        this.log(`Bundle size: ${size}`, 'SUCCESS');
        
        if (size.includes('M') && parseInt(size) > 50) {
          this.report.recommendations.push({
            type: 'bundle_size',
            message: 'Bundle size is large, consider code splitting',
            priority: 'high'
          });
        }
      } else {
        this.log('No build found, run npm run build first', 'WARNING');
      }
    } catch (error) {
      this.log(`Error analyzing bundle: ${error.message}`, 'ERROR');
    }
  }

  async analyzeDependencies() {
    this.log('Analyzing dependencies...', 'INFO');
    
    try {
      if (fs.existsSync('package.json')) {
        const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
        const dependencies = Object.keys(packageJson.dependencies || {});
        const devDependencies = Object.keys(packageJson.devDependencies || {});
        
        this.report.metrics.dependencies = {
          production: dependencies.length,
          development: devDependencies.length,
          total: dependencies.length + devDependencies.length
        };
        
        this.log(`Dependencies: ${dependencies.length} production, ${devDependencies.length} development`, 'SUCCESS');
        
        // Check for heavy dependencies
        const heavyDeps = ['lodash', 'moment', 'jquery', 'bootstrap'];
        const foundHeavy = dependencies.filter(dep => heavyDeps.includes(dep));
        
        if (foundHeavy.length > 0) {
          this.report.recommendations.push({
            type: 'heavy_dependencies',
            message: `Consider replacing heavy dependencies: ${foundHeavy.join(', ')}`,
            priority: 'medium'
          });
        }
      }
    } catch (error) {
      this.log(`Error analyzing dependencies: ${error.message}`, 'ERROR');
    }
  }

  async optimizeImages() {
    this.log('Optimizing images...', 'INFO');
    
    const publicDir = 'public';
    if (!fs.existsSync(publicDir)) {
      this.log('Public directory not found', 'WARNING');
      return;
    }

    try {
      const imageFiles = this.findImageFiles(publicDir);
      let optimizedCount = 0;
      
      for (const imagePath of imageFiles) {
        const stats = fs.statSync(imagePath);
        const sizeKB = Math.round(stats.size / 1024);
        
        if (sizeKB > 100) { // Optimize images larger than 100KB
          try {
            const outputPath = imagePath.replace(/(\.[^.]+)$/, '_optimized$1');
            execSync(`npx sharp -i "${imagePath}" -o "${outputPath}" --quality 80`, { stdio: 'pipe' });
            
            const newStats = fs.statSync(outputPath);
            const newSizeKB = Math.round(newStats.size / 1024);
            const savings = Math.round(((sizeKB - newSizeKB) / sizeKB) * 100);
            
            this.report.optimizations.push({
              file: imagePath,
              originalSize: sizeKB,
              optimizedSize: newSizeKB,
              savings: `${savings}%`
            });
            
            optimizedCount++;
            this.log(`Optimized ${path.basename(imagePath)}: ${sizeKB}KB → ${newSizeKB}KB (${savings}% savings)`, 'SUCCESS');
          } catch (error) {
            this.log(`Failed to optimize ${imagePath}: ${error.message}`, 'ERROR');
          }
        }
      }
      
      if (optimizedCount === 0) {
        this.log('No large images found to optimize', 'INFO');
      }
    } catch (error) {
      this.log('Sharp not available, skipping image optimization', 'WARNING');
    }
  }

  findImageFiles(dir) {
    const imageFiles = [];
    const files = fs.readdirSync(dir, { withFileTypes: true });
    
    for (const file of files) {
      const fullPath = path.join(dir, file.name);
      if (file.isDirectory()) {
        imageFiles.push(...this.findImageFiles(fullPath));
      } else if (file.isFile() && /\.(jpg|jpeg|png|gif|webp)$/i.test(file.name)) {
        imageFiles.push(fullPath);
      }
    }
    
    return imageFiles;
  }

  async checkLighthouse() {
    try {
      execSync('npx lighthouse --version', { stdio: 'pipe' });
      this.log('Lighthouse available, consider running: npx lighthouse http://localhost:3000', 'INFO');
    } catch (error) {
      this.log('Lighthouse not available, install with: npm install -g lighthouse', 'WARNING');
    }
  }

  generateReport() {
    const reportPath = 'performance-optimization-report.json';
    fs.writeFileSync(reportPath, JSON.stringify(this.report, null, 2));
    this.log(`Performance report saved to ${reportPath}`, 'SUCCESS');
  }