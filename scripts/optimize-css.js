#!/usr/bin/env node

/**
 * CSS Optimizer
 * Advanced CSS optimization for Zion Tech Group website
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class CSSOptimizer {
  constructor() {
    this.optimizations = [];
    this.startTime = Date.now();
  }

  log(message, type = 'info') {
    const timestamp = new Date().toISOString();
    const prefix = type === 'error' ? '❌' : type === 'success' ? '✅' : 'ℹ️';
    console.log(`${prefix} [${timestamp}] ${message}`);
  }

  async optimizeCSS() {
    this.log('Starting CSS optimization...');
    
    try {
      // Find all CSS files
      const cssFiles = this.findCSSFiles('src');
      this.log(`Found ${cssFiles.length} CSS files`);

      let totalSize = 0;
      let optimizedSize = 0;

      for (const file of cssFiles) {
        const content = fs.readFileSync(file, 'utf8');
        const originalSize = content.length;
        totalSize += originalSize;

        // Apply optimizations
        let optimized = this.optimizeCSSContent(content);
        optimizedSize += optimized.length;

        // Write optimized content
        fs.writeFileSync(file, optimized);
        
        const savings = originalSize - optimized.length;
        if (savings > 0) {
          this.log(`Optimized ${path.relative(process.cwd(), file)}: ${savings} bytes saved`);
          this.optimizations.push(`Optimized ${path.relative(process.cwd(), file)}: ${savings} bytes saved`);
        }
      }

      const totalSavings = totalSize - optimizedSize;
      const savingsPercent = ((totalSavings / totalSize) * 100).toFixed(2);

      this.log(`CSS optimization completed`, 'success');
      this.log(`Total size: ${(totalSize / 1024).toFixed(2)} KB`);
      this.log(`Optimized size: ${(optimizedSize / 1024).toFixed(2)} KB`);
      this.log(`Total savings: ${(totalSavings / 1024).toFixed(2)} KB (${savingsPercent}%)`);

      return {
        totalSize,
        optimizedSize,
        savings: totalSavings,
        savingsPercent: parseFloat(savingsPercent),
        optimizations: this.optimizations
      };
    } catch (error) {
      this.log(`CSS optimization failed: ${error.message}`, 'error');
      throw error;
    }
  }

  findCSSFiles(dir) {
    const files = [];
    
    const walkDir = (currentDir) => {
      if (!fs.existsSync(currentDir)) return;
      
      const items = fs.readdirSync(currentDir);
      items.forEach(item => {
        const itemPath = path.join(currentDir, item);
        const stat = fs.statSync(itemPath);
        
        if (stat.isDirectory()) {
          walkDir(itemPath);
        } else if (item.endsWith('.css')) {
          files.push(itemPath);
        }
      });
    };

    walkDir(dir);
    return files;
  }

  optimizeCSSContent(css) {
    let optimized = css;

    // Remove comments (except important ones)
    optimized = optimized.replace(/\/\*![\s\S]*?\*\//g, ''); // Remove important comments
    optimized = optimized.replace(/\/\*[\s\S]*?\*\//g, ''); // Remove regular comments

    // Remove unnecessary whitespace
    optimized = optimized.replace(/\s+/g, ' '); // Replace multiple spaces with single space
    optimized = optimized.replace(/\s*{\s*/g, '{'); // Remove spaces around opening braces
    optimized = optimized.replace(/;\s*}/g, '}'); // Remove semicolon before closing braces
    optimized = optimized.replace(/\s*;\s*/g, ';'); // Remove spaces around semicolons
    optimized = optimized.replace(/\s*,\s*/g, ','); // Remove spaces around commas
    optimized = optimized.replace(/\s*:\s*/g, ':'); // Remove spaces around colons

    // Remove unnecessary quotes
    optimized = optimized.replace(/url\(['"]([^'"]+)['"]\)/g, 'url($1)'); // Remove quotes from URLs
    optimized = optimized.replace(/['"]([a-zA-Z-]+)['"]:/g, '$1:'); // Remove quotes from property names

    // Optimize colors
    optimized = this.optimizeColors(optimized);

    // Remove redundant properties
    optimized = this.removeRedundantProperties(optimized);

    // Optimize selectors
    optimized = this.optimizeSelectors(optimized);

    // Remove empty rules
    optimized = optimized.replace(/[^{}]+{\s*}/g, '');

    // Final cleanup
    optimized = optimized.replace(/\s+/g, ' ').trim();

    return optimized;
  }

  optimizeColors(css) {
    // Convert hex to short form where possible
    css = css.replace(/#([0-9a-fA-F])\1([0-9a-fA-F])\2([0-9a-fA-F])\3/g, '#$1$2$3');
    
    // Convert common colors to keywords
    const colorMap = {
      '#ffffff': 'white',
      '#000000': 'black',
      '#ff0000': 'red',
      '#00ff00': 'lime',
      '#0000ff': 'blue',
      '#ffff00': 'yellow',
      '#ff00ff': 'magenta',
      '#00ffff': 'cyan'
    };

    Object.entries(colorMap).forEach(([hex, keyword]) => {
      css = css.replace(new RegExp(hex, 'gi'), keyword);
    });

    return css;
  }

  removeRedundantProperties(css) {
    // Remove redundant properties (simplified)
    const redundant = [
      /margin:\s*0\s*0\s*0\s*0;?/g,
      /padding:\s*0\s*0\s*0\s*0;?/g,
      /border:\s*none;?/g,
      /background:\s*none;?/g,
      /font-weight:\s*normal;?/g,
      /font-style:\s*normal;?/g,
      /text-decoration:\s*none;?/g
    ];

    redundant.forEach(pattern => {
      css = css.replace(pattern, '');
    });

    return css;
  }

  optimizeSelectors(css) {
    // Remove redundant selectors (simplified)
    // This would be more complex in a real implementation
    
    // Remove universal selector where not needed
    css = css.replace(/\*\s*{\s*}/g, '');
    
    // Optimize descendant selectors
    css = css.replace(/\s+>\s+/g, '>');
    
    return css;
  }

  async generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      duration: Date.now() - this.startTime,
      optimizations: this.optimizations,
      recommendations: [
        'Use CSS custom properties for better maintainability',
        'Implement critical CSS inlining',
        'Use CSS modules or styled-components for scoped styles',
        'Consider using a CSS framework like Tailwind CSS',
        'Implement CSS purging for unused styles',
        'Use CSS Grid and Flexbox for layouts',
        'Optimize font loading with font-display: swap',
        'Use CSS containment for better performance'
      ]
    };

    const reportPath = path.join(process.cwd(), 'css-optimization-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    this.log(`CSS optimization report saved to ${reportPath}`, 'success');
    return report;
  }

  async run() {
    this.log('🎨 Starting CSS Optimization...');
    
    try {
      const result = await this.optimizeCSS();
      const report = await this.generateReport();
      
      this.log('🎉 CSS optimization completed!', 'success');
      this.log(`Duration: ${report.duration}ms`);
      this.log(`Optimizations: ${report.optimizations.length}`);
      
      return { ...result, report };
    } catch (error) {
      this.log(`CSS optimization failed: ${error.message}`, 'error');
      throw error;
    }
  }
}

// Run the optimizer
if (import.meta.url === `file://${process.argv[1]}`) {
  const optimizer = new CSSOptimizer();
  optimizer.run().catch(console.error);
}

export default CSSOptimizer;