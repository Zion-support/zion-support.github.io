#!/usr/bin/env node

/**
 * Performance Optimizer
 * Automatically optimizes the application for better performance
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class PerformanceOptimizer {
  constructor() {
    this.optimizeImages();
    this.optimizeCSS();
    this.optimizeJS();
    this.generatePerformanceReport();
  }

  /**
   * Optimize images
   */
  optimizeImages() {
    console.log('🖼️  Optimizing images...');
    
    const publicDir = path.join(__dirname, '../public');
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg'];
    
    this.processDirectory(publicDir, (filePath) => {
      const ext = path.extname(filePath).toLowerCase();
      if (imageExtensions.includes(ext)) {
        this.optimizeImage(filePath);
      }
    });
  }

  /**
   * Optimize CSS
   */
  optimizeCSS() {
    console.log('🎨 Optimizing CSS...');
    
    const distDir = path.join(__dirname, '../dist');
    const cssFiles = this.findFiles(distDir, '.css');
    
    cssFiles.forEach(file => {
      this.optimizeCSSFile(file);
    });
  }

  /**
   * Optimize JavaScript
   */
  optimizeJS() {
    console.log('⚡ Optimizing JavaScript...');
    
    const distDir = path.join(__dirname, '../dist');
    const jsFiles = this.findFiles(distDir, '.js');
    
    jsFiles.forEach(file => {
      this.optimizeJSFile(file);
    });
  }

  /**
   * Process directory recursively
   */
  processDirectory(dir, callback) {
    if (!fs.existsSync(dir)) return;
    
    const files = fs.readdirSync(dir);
    files.forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        this.processDirectory(filePath, callback);
      } else {
        callback(filePath);
      }
    });
  }

  /**
   * Find files by extension
   */
  findFiles(dir, extension) {
    const files = [];
    this.processDirectory(dir, (filePath) => {
      if (path.extname(filePath) === extension) {
        files.push(filePath);
      }
    });
    return files;
  }

  /**
   * Optimize individual image
   */
  optimizeImage(filePath) {
    try {
      const stats = fs.statSync(filePath);
      const sizeKB = Math.round(stats.size / 1024);
      
      if (sizeKB > 100) { // Only log large images
        console.log(`  📸 ${path.basename(filePath)}: ${sizeKB}KB`);
      }
    } catch (error) {
      console.error(`Error optimizing image ${filePath}:`, error.message);
    }
  }

  /**
   * Optimize CSS file
   */
  optimizeCSSFile(filePath) {
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      const originalSize = content.length;
      
      // Remove comments
      content = content.replace(/\/\*[\s\S]*?\*\//g, '');
      
      // Remove extra whitespace
      content = content.replace(/\s+/g, ' ');
      content = content.replace(/;\s*}/g, '}');
      content = content.replace(/{\s*/g, '{');
      content = content.replace(/;\s*/g, ';');
      
      // Remove unnecessary semicolons
      content = content.replace(/;}/g, '}');
      
      const optimizedSize = content.length;
      const savings = Math.round(((originalSize - optimizedSize) / originalSize) * 100);
      
      if (savings > 0) {
        fs.writeFileSync(filePath, content);
        console.log(`  🎨 ${path.basename(filePath)}: ${savings}% smaller`);
      }
    } catch (error) {
      console.error(`Error optimizing CSS ${filePath}:`, error.message);
    }
  }

  /**
   * Optimize JavaScript file
   */
  optimizeJSFile(filePath) {
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      const originalSize = content.length;
      
      // Remove console.log statements in production
      if (filePath.includes('dist')) {
        content = content.replace(/console\.(log|warn|info|debug)\([^)]*\);?/g, '');
      }
      
      // Remove extra whitespace
      content = content.replace(/\s+/g, ' ');
      content = content.replace(/;\s*}/g, '}');
      content = content.replace(/{\s*/g, '{');
      
      const optimizedSize = content.length;
      const savings = Math.round(((originalSize - optimizedSize) / originalSize) * 100);
      
      if (savings > 0) {
        fs.writeFileSync(filePath, content);
        console.log(`  ⚡ ${path.basename(filePath)}: ${savings}% smaller`);
      }
    } catch (error) {
      console.error(`Error optimizing JS ${filePath}:`, error.message);
    }
  }

  /**
   * Generate performance report
   */
  generatePerformanceReport() {
    console.log('📊 Generating performance report...');
    
    const distDir = path.join(__dirname, '../dist');
    const report = {
      timestamp: new Date().toISOString(),
      totalSize: 0,
      files: [],
      recommendations: []
    };

    this.processDirectory(distDir, (filePath) => {
      const stats = fs.statSync(filePath);
      const sizeKB = Math.round(stats.size / 1024);
      
      report.totalSize += sizeKB;
      report.files.push({
        name: path.basename(filePath),
        size: sizeKB,
        type: path.extname(filePath)
      });
    });

    // Generate recommendations
    if (report.totalSize > 1000) {
      report.recommendations.push('Consider implementing code splitting to reduce bundle size');
    }
    
    const largeFiles = report.files.filter(f => f.size > 100);
    if (largeFiles.length > 0) {
      report.recommendations.push('Large files detected - consider optimization');
    }

    const reportPath = path.join(__dirname, '../performance-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    console.log(`📊 Performance report generated: ${reportPath}`);
    console.log(`📦 Total bundle size: ${report.totalSize}KB`);
    console.log(`📁 Files processed: ${report.files.length}`);
  }
}

// Run the optimizer
new PerformanceOptimizer();