#!/usr/bin/env node

/**
 * Bundle Optimizer Script
 * Optimizes bundle size and removes console.log statements
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class BundleOptimizer {
  constructor() {
    this.outDir = path.join(__dirname, '..', 'out');
    this.optimizations = [];
  }

  async optimizeBundle() {
    console.log('📦 Optimizing bundle...');
    
    try {
      // Remove console.log statements
      await this.removeConsoleLogs();
      
      // Optimize JavaScript files
      await this.optimizeJavaScriptFiles();
      
      // Optimize CSS files
      await this.optimizeCSSFiles();
      
      // Generate report
      await this.generateOptimizationReport();
      
      console.log('✅ Bundle optimization completed successfully');
    } catch (error) {
      console.error('❌ Bundle optimization failed:', error.message);
      process.exit(1);
    }
  }

  async removeConsoleLogs() {
    const jsFiles = this.findJSFiles(this.outDir);
    
    for (const file of jsFiles) {
      let content = fs.readFileSync(file, 'utf8');
      let modified = false;
      
      // Remove console.log statements
      const consoleLogRegex = /console\.log\([^)]*\);?\s*/g;
      const matches = content.match(consoleLogRegex);
      
      if (matches && matches.length > 0) {
        content = content.replace(consoleLogRegex, '');
        modified = true;
        this.optimizations.push(`Removed ${matches.length} console.log statements from ${path.basename(file)}`);
      }
      
      // Remove console.warn statements
      const consoleWarnRegex = /console\.warn\([^)]*\);?\s*/g;
      const warnMatches = content.match(consoleWarnRegex);
      
      if (warnMatches && warnMatches.length > 0) {
        content = content.replace(consoleWarnRegex, '');
        modified = true;
        this.optimizations.push(`Removed ${warnMatches.length} console.warn statements from ${path.basename(file)}`);
      }
      
      // Remove console.error statements
      const consoleErrorRegex = /console\.error\([^)]*\);?\s*/g;
      const errorMatches = content.match(consoleErrorRegex);
      
      if (errorMatches && errorMatches.length > 0) {
        content = content.replace(consoleErrorRegex, '');
        modified = true;
        this.optimizations.push(`Removed ${errorMatches.length} console.error statements from ${path.basename(file)}`);
      }
      
      if (modified) {
        fs.writeFileSync(file, content);
        console.log(`✅ Optimized ${path.basename(file)}`);
      }
    }
  }

  async optimizeJavaScriptFiles() {
    const jsFiles = this.findJSFiles(this.outDir);
    
    for (const file of jsFiles) {
      let content = fs.readFileSync(file, 'utf8');
      let modified = false;
      
      // Remove unnecessary whitespace
      const originalLength = content.length;
      content = content.replace(/\s+/g, ' ').trim();
      
      if (content.length < originalLength) {
        modified = true;
        this.optimizations.push(`Minified whitespace in ${path.basename(file)}`);
      }
      
      // Remove comments (basic)
      const commentRegex = /\/\*[\s\S]*?\*\//g;
      const commentMatches = content.match(commentRegex);
      
      if (commentMatches && commentMatches.length > 0) {
        content = content.replace(commentRegex, '');
        modified = true;
        this.optimizations.push(`Removed ${commentMatches.length} comments from ${path.basename(file)}`);
      }
      
      if (modified) {
        fs.writeFileSync(file, content);
        console.log(`✅ Optimized JavaScript ${path.basename(file)}`);
      }
    }
  }

  async optimizeCSSFiles() {
    const cssFiles = this.findCSSFiles(this.outDir);
    
    for (const file of cssFiles) {
      let content = fs.readFileSync(file, 'utf8');
      let modified = false;
      
      // Remove unnecessary whitespace
      const originalLength = content.length;
      content = content.replace(/\s+/g, ' ').trim();
      
      if (content.length < originalLength) {
        modified = true;
        this.optimizations.push(`Minified CSS whitespace in ${path.basename(file)}`);
      }
      
      // Remove comments
      const commentRegex = /\/\*[\s\S]*?\*\//g;
      const commentMatches = content.match(commentRegex);
      
      if (commentMatches && commentMatches.length > 0) {
        content = content.replace(commentRegex, '');
        modified = true;
        this.optimizations.push(`Removed ${commentMatches.length} CSS comments from ${path.basename(file)}`);
      }
      
      if (modified) {
        fs.writeFileSync(file, content);
        console.log(`✅ Optimized CSS ${path.basename(file)}`);
      }
    }
  }

  findJSFiles(dir) {
    const files = [];
    
    const findInDir = (dirPath) => {
      const items = fs.readdirSync(dirPath, { withFileTypes: true });
      
      for (const item of items) {
        const fullPath = path.join(dirPath, item.name);
        
        if (item.isDirectory()) {
          findInDir(fullPath);
        } else if (item.isFile() && item.name.endsWith('.js')) {
          files.push(fullPath);
        }
      }
    };
    
    findInDir(dir);
    return files;
  }

  findCSSFiles(dir) {
    const files = [];
    
    const findInDir = (dirPath) => {
      const items = fs.readdirSync(dirPath, { withFileTypes: true });
      
      for (const item of items) {
        const fullPath = path.join(dirPath, item.name);
        
        if (item.isDirectory()) {
          findInDir(fullPath);
        } else if (item.isFile() && item.name.endsWith('.css')) {
          files.push(fullPath);
        }
      }
    };
    
    findInDir(dir);
    return files;
  }

  async generateOptimizationReport() {
    const report = {
      timestamp: new Date().toISOString(),
      optimizations: this.optimizations,
      summary: {
        totalOptimizations: this.optimizations.length,
        consoleLogRemovals: this.optimizations.filter(opt => opt.includes('console.log')).length,
        consoleWarnRemovals: this.optimizations.filter(opt => opt.includes('console.warn')).length,
        consoleErrorRemovals: this.optimizations.filter(opt => opt.includes('console.error')).length,
        whitespaceOptimizations: this.optimizations.filter(opt => opt.includes('whitespace')).length,
        commentRemovals: this.optimizations.filter(opt => opt.includes('comments')).length,
      }
    };

    // Save report
    const reportPath = path.join(__dirname, '..', 'bundle-optimization-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    // Log summary
    console.log('\n📊 Bundle Optimization Report:');
    console.log(`🗑️  Console.log removals: ${report.summary.consoleLogRemovals}`);
    console.log(`⚠️  Console.warn removals: ${report.summary.consoleWarnRemovals}`);
    console.log(`❌ Console.error removals: ${report.summary.consoleErrorRemovals}`);
    console.log(`📝 Whitespace optimizations: ${report.summary.whitespaceOptimizations}`);
    console.log(`💬 Comment removals: ${report.summary.commentRemovals}`);
    console.log(`✅ Total optimizations: ${report.summary.totalOptimizations}`);
  }
}

// Run if called directly
if (import.meta.url === `file://${__filename}`) {
  const optimizer = new BundleOptimizer();
  optimizer.optimizeBundle().catch(console.error);
}

export default BundleOptimizer;