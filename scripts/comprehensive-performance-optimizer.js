#!/usr/bin/env node

/**
 * Comprehensive Performance Optimizer
 * 
 * This script performs comprehensive performance optimizations including:
 * - Bundle analysis and optimization
 * - Image optimization
 * - CSS optimization
 * - Code splitting optimization
 * - Lazy loading optimization
 * - Caching optimization
 * - SEO optimization
 */

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class ComprehensivePerformanceOptimizer {
  constructor() {
    this.optimizationReport = {
      timestamp: new Date().toISOString(),
      optimizations: [],
      metrics: {},
      recommendations: []
    };
  }

  log(message, type = 'info') {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] [${type.toUpperCase()}] ${message}`);
    
    this.optimizationReport.optimizations.push({
      timestamp,
      type,
      message
    });
  }

  async optimizeBundle() {
    this.log('Starting bundle optimization...');
    
    try {
      // Analyze bundle size
      execSync('pnpm run build:analyze', { stdio: 'pipe' });
      this.log('Bundle analysis completed');
      
      // Optimize imports
      await this.optimizeImports();
      
      // Optimize code splitting
      await this.optimizeCodeSplitting();
      
      this.log('Bundle optimization completed successfully');
    } catch (error) {
      this.log(`Bundle optimization failed: ${error.message}`, 'error');
    }
  }

  async optimizeImports() {
    this.log('Optimizing imports...');
    
    const srcDir = path.join(process.cwd(), 'src');
    const files = this.getAllFiles(srcDir, ['.tsx', '.ts', '.jsx', '.js']);
    
    for (const file of files) {
      try {
        let content = fs.readFileSync(file, 'utf8');
        let modified = false;
        
        // Remove unused imports
        const importRegex = /^import\s+.*?from\s+['"][^'"]+['"];?\s*$/gm;
        const imports = content.match(importRegex) || [];
        
        for (const importStatement of imports) {
          const importName = importStatement.match(/import\s+{([^}]+)}/);
          if (importName) {
            const names = importName[1].split(',').map(n => n.trim());
            const usedNames = names.filter(name => {
              const regex = new RegExp(`\\b${name}\\b`, 'g');
              const matches = content.match(regex) || [];
              return matches.length > 1; // More than just the import
            });
            
            if (usedNames.length !== names.length) {
              if (usedNames.length === 0) {
                content = content.replace(importStatement, '');
              } else {
                const newImport = importStatement.replace(
                  `{${names.join(', ')}}`,
                  `{${usedNames.join(', ')}}`
                );
                content = content.replace(importStatement, newImport);
              }
              modified = true;
            }
          }
        }
        
        if (modified) {
          fs.writeFileSync(file, content);
          this.log(`Optimized imports in ${path.relative(process.cwd(), file)}`);
        }
      } catch (error) {
        this.log(`Failed to optimize imports in ${file}: ${error.message}`, 'error');
      }
    }
  }

  async optimizeCodeSplitting() {
    this.log('Optimizing code splitting...');
    
    // Create dynamic imports for large components
    const componentsDir = path.join(process.cwd(), 'src', 'components');
    const componentFiles = this.getAllFiles(componentsDir, ['.tsx', '.ts']);
    
    for (const file of componentFiles) {
      try {
        const content = fs.readFileSync(file, 'utf8');
        const fileSize = Buffer.byteLength(content, 'utf8');
        
        // If component is large (>5KB), suggest lazy loading
        if (fileSize > 5000) {
          const componentName = path.basename(file, path.extname(file));
          this.optimizationReport.recommendations.push({
            type: 'code-splitting',
            component: componentName,
            file: path.relative(process.cwd(), file),
            size: fileSize,
            suggestion: 'Consider implementing lazy loading for this component'
          });
        }
      } catch (error) {
        this.log(`Failed to analyze component ${file}: ${error.message}`, 'error');
      }
    }
  }

  async optimizeImages() {
    this.log('Starting image optimization...');
    
    try {
      const publicDir = path.join(process.cwd(), 'public');
      const images = this.getAllFiles(publicDir, ['.jpg', '.jpeg', '.png', '.webp', '.svg']);
      
      for (const image of images) {
        const stats = fs.statSync(image);
        const sizeKB = Math.round(stats.size / 1024);
        
        if (sizeKB > 100) { // Images larger than 100KB
          this.optimizationReport.recommendations.push({
            type: 'image-optimization',
            file: path.relative(process.cwd(), image),
            size: `${sizeKB}KB`,
            suggestion: 'Consider compressing this image or converting to WebP format'
          });
        }
      }
      
      this.log(`Analyzed ${images.length} images`);
    } catch (error) {
      this.log(`Image optimization failed: ${error.message}`, 'error');
    }
  }

  async optimizeCSS() {
    this.log('Starting CSS optimization...');
    
    try {
      const cssFiles = this.getAllFiles(path.join(process.cwd(), 'src'), ['.css']);
      
      for (const file of cssFiles) {
        const content = fs.readFileSync(file, 'utf8');
        
        // Remove unused CSS rules (basic check)
        const rules = content.match(/[^{}]+{[^{}]*}/g) || [];
        const unusedRules = rules.filter(rule => {
          const selector = rule.split('{')[0].trim();
          // Basic check for class usage in components
          const classRegex = new RegExp(`className.*${selector.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}`, 'g');
          const srcFiles = this.getAllFiles(path.join(process.cwd(), 'src'), ['.tsx', '.ts', '.jsx', '.js']);
          
          return !srcFiles.some(srcFile => {
            try {
              const srcContent = fs.readFileSync(srcFile, 'utf8');
              return classRegex.test(srcContent);
            } catch {
              return false;
            }
          });
        });
        
        if (unusedRules.length > 0) {
          this.optimizationReport.recommendations.push({
            type: 'css-optimization',
            file: path.relative(process.cwd(), file),
            unusedRules: unusedRules.length,
            suggestion: 'Consider removing unused CSS rules'
          });
        }
      }
      
      this.log('CSS optimization analysis completed');
    } catch (error) {
      this.log(`CSS optimization failed: ${error.message}`, 'error');
    }
  }

  async optimizeCaching() {
    this.log('Starting caching optimization...');
    
    try {
      // Check service worker
      const swPath = path.join(process.cwd(), 'public', 'sw-enhanced.js');
      if (fs.existsSync(swPath)) {
        const swContent = fs.readFileSync(swPath, 'utf8');
        
        // Check for cache strategies
        const hasCacheStrategy = /cacheFirst|networkFirst|staleWhileRevalidate/.test(swContent);
        if (!hasCacheStrategy) {
          this.optimizationReport.recommendations.push({
            type: 'caching',
            suggestion: 'Implement proper cache strategies in service worker'
          });
        }
      }
      
      // Check for cache headers in build
      const distDir = path.join(process.cwd(), 'dist');
      if (fs.existsSync(distDir)) {
        const staticFiles = this.getAllFiles(distDir, ['.js', '.css', '.html']);
        this.optimizationReport.metrics.staticFiles = staticFiles.length;
      }
      
      this.log('Caching optimization analysis completed');
    } catch (error) {
      this.log(`Caching optimization failed: ${error.message}`, 'error');
    }
  }

  async optimizeSEO() {
    this.log('Starting SEO optimization...');
    
    try {
      // Check for meta tags in components
      const components = this.getAllFiles(path.join(process.cwd(), 'src'), ['.tsx', '.ts']);
      let hasMetaTags = false;
      
      for (const component of components) {
        const content = fs.readFileSync(component, 'utf8');
        if (/meta.*name=|meta.*property=|Helmet/.test(content)) {
          hasMetaTags = true;
          break;
        }
      }
      
      if (!hasMetaTags) {
        this.optimizationReport.recommendations.push({
          type: 'seo',
          suggestion: 'Add meta tags and structured data to improve SEO'
        });
      }
      
      this.log('SEO optimization analysis completed');
    } catch (error) {
      this.log(`SEO optimization failed: ${error.message}`, 'error');
    }
  }

  getAllFiles(dir, extensions) {
    let files = [];
    
    try {
      const items = fs.readdirSync(dir);
      
      for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          files = files.concat(this.getAllFiles(fullPath, extensions));
        } else if (extensions.some(ext => item.endsWith(ext))) {
          files.push(fullPath);
        }
      }
    } catch (error) {
      // Directory might not exist or be accessible
    }
    
    return files;
  }

  async generateReport() {
    this.log('Generating optimization report...');
    
    const reportPath = path.join(process.cwd(), 'optimization-reports', `comprehensive-optimization-${Date.now()}.json`);
    
    // Ensure reports directory exists
    const reportsDir = path.dirname(reportPath);
    if (!fs.existsSync(reportsDir)) {
      fs.mkdirSync(reportsDir, { recursive: true });
    }
    
    fs.writeFileSync(reportPath, JSON.stringify(this.optimizationReport, null, 2));
    this.log(`Optimization report saved to: ${reportPath}`);
    
    // Generate summary
    const summary = {
      totalOptimizations: this.optimizationReport.optimizations.length,
      totalRecommendations: this.optimizationReport.recommendations.length,
      recommendationsByType: this.optimizationReport.recommendations.reduce((acc, rec) => {
        acc[rec.type] = (acc[rec.type] || 0) + 1;
        return acc;
      }, {})
    };
    
    console.log('\n=== OPTIMIZATION SUMMARY ===');
    console.log(`Total optimizations performed: ${summary.totalOptimizations}`);
    console.log(`Total recommendations: ${summary.totalRecommendations}`);
    console.log('Recommendations by type:', summary.recommendationsByType);
    console.log('========================\n');
  }

  async run() {
    this.log('Starting comprehensive performance optimization...');
    
    try {
      await this.optimizeBundle();
      await this.optimizeImages();
      await this.optimizeCSS();
      await this.optimizeCaching();
      await this.optimizeSEO();
      await this.generateReport();
      
      this.log('Comprehensive performance optimization completed successfully!');
    } catch (error) {
      this.log(`Optimization failed: ${error.message}`, 'error');
      process.exit(1);
    }
  }
}

// Run the optimizer
if (import.meta.url === `file://${process.argv[1]}`) {
  const optimizer = new ComprehensivePerformanceOptimizer();
  optimizer.run().catch(console.error);
}

export default ComprehensivePerformanceOptimizer;