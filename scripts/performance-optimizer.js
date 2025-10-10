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
    console.log('🖼️ Optimizing images...');
    
    const publicDir = path.join(__dirname, '../public');
    if (!fs.existsSync(publicDir)) {
      console.log('⚠️ Public directory not found, skipping image optimization');
      return;
    }

    // This is a placeholder for image optimization
    // In a real implementation, you would use libraries like sharp or imagemin
    console.log('✅ Image optimization completed (placeholder)');
  }

  /**
   * Optimize CSS
   */
  optimizeCSS() {
    console.log('🎨 Optimizing CSS...');
    
    const distDir = path.join(__dirname, '../dist');
    if (!fs.existsSync(distDir)) {
      console.log('⚠️ Dist directory not found, skipping CSS optimization');
      return;
    }

    // Find all CSS files in dist
    const cssFiles = this.findFiles(distDir, '.css');
    
    cssFiles.forEach(file => {
      let content = fs.readFileSync(file, 'utf8');
      
      // Remove comments
      content = content.replace(/\/\*[\s\S]*?\*\//g, '');
      
      // Remove extra whitespace
      content = content.replace(/\s+/g, ' ');
      content = content.replace(/;\s*}/g, '}');
      content = content.replace(/{\s*/g, '{');
      content = content.replace(/;\s*/g, ';');
      
      fs.writeFileSync(file, content);
    });

    console.log(`✅ Optimized ${cssFiles.length} CSS files`);
  }

  /**
   * Optimize JavaScript
   */
  optimizeJS() {
    console.log('⚡ Optimizing JavaScript...');
    
    const distDir = path.join(__dirname, '../dist');
    if (!fs.existsSync(distDir)) {
      console.log('⚠️ Dist directory not found, skipping JS optimization');
      return;
    }

    // Find all JS files in dist
    const jsFiles = this.findFiles(distDir, '.js');
    
    jsFiles.forEach(file => {
      let content = fs.readFileSync(file, 'utf8');
      
      // Remove console.log statements in production
      content = content.replace(/console\.log\([^)]*\);?/g, '');
      content = content.replace(/console\.warn\([^)]*\);?/g, '');
      content = content.replace(/console\.error\([^)]*\);?/g, '');
      
      // Remove extra whitespace
      content = content.replace(/\s+/g, ' ');
      
      fs.writeFileSync(file, content);
    });

    console.log(`✅ Optimized ${jsFiles.length} JavaScript files`);
  }

  /**
   * Generate performance report
   */
  generatePerformanceReport() {
    console.log('📊 Generating performance report...');
    
    const distDir = path.join(__dirname, '../dist');
    if (!fs.existsSync(distDir)) {
      console.log('⚠️ Dist directory not found, skipping report generation');
      return;
    }

    const report = {
      timestamp: new Date().toISOString(),
      buildSize: this.getDirectorySize(distDir),
      fileCount: this.countFiles(distDir),
      optimizations: [
        'CSS minification',
        'JavaScript optimization',
        'Console log removal',
        'Whitespace reduction'
      ]
    };

    const reportPath = path.join(__dirname, '../performance-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    console.log('✅ Performance report generated');
    console.log(`📁 Build size: ${this.formatBytes(report.buildSize)}`);
    console.log(`📄 Files: ${report.fileCount}`);
  }

  /**
   * Find files with specific extension
   */
  findFiles(dir, extension) {
    const files = [];
    
    function scanDirectory(currentDir) {
      const items = fs.readdirSync(currentDir);
      
      items.forEach(item => {
        const fullPath = path.join(currentDir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          scanDirectory(fullPath);
        } else if (item.endsWith(extension)) {
          files.push(fullPath);
        }
      });
    }
    
    scanDirectory(dir);
    return files;
  }

  /**
   * Get directory size in bytes
   */
  getDirectorySize(dir) {
    let size = 0;
    
    function scanDirectory(currentDir) {
      const items = fs.readdirSync(currentDir);
      
      items.forEach(item => {
        const fullPath = path.join(currentDir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          scanDirectory(fullPath);
        } else {
          size += stat.size;
        }
      });
    }
    
    scanDirectory(dir);
    return size;
  }

  /**
   * Count files in directory
   */
  countFiles(dir) {
    let count = 0;
    
    function scanDirectory(currentDir) {
      const items = fs.readdirSync(currentDir);
      
      items.forEach(item => {
        const fullPath = path.join(currentDir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          scanDirectory(fullPath);
        } else {
          count++;
        }
      });
    }
    
    scanDirectory(dir);
    return count;
  }

  /**
   * Format bytes to human readable format
   */
  formatBytes(bytes) {
    if (bytes === 0) return '0 Bytes';
    
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }
}

// Run the optimizer
new PerformanceOptimizer();