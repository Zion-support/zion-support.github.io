#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Performance monitoring script for Zion Tech Group website
 * Monitors build performance, bundle sizes, and provides optimization recommendations
 */

class PerformanceMonitor {
  constructor() {
    this.distPath = path.join(process.cwd(), 'dist');
    this.reportPath = path.join(process.cwd(), 'performance-report.json');
    this.metrics = {
      buildTime: 0,
      bundleSizes: {},
      totalSize: 0,
      gzipSize: 0,
      recommendations: []
    };
  }

  async analyzeBuild() {
    console.log('🔍 Analyzing build performance...');
    
    try {
      // Check if dist directory exists
      if (!fs.existsSync(this.distPath)) {
        throw new Error('Dist directory not found. Please run build first.');
      }

      // Analyze bundle sizes
      await this.analyzeBundleSizes();
      
      // Generate recommendations
      this.generateRecommendations();
      
      // Save report
      await this.saveReport();
      
      // Display results
      this.displayResults();
      
    } catch (error) {
      console.error('❌ Performance analysis failed:', error.message);
      process.exit(1);
    }
  }

  async analyzeBundleSizes() {
    const assetsPath = path.join(this.distPath, 'assets');
    
    if (!fs.existsSync(assetsPath)) {
      // Try alternative path structure
      const altAssetsPath = this.distPath;
      if (!fs.existsSync(altAssetsPath)) {
        throw new Error('Dist directory not found. Please run build first.');
      }
      
      // Analyze files directly in dist directory
      const files = fs.readdirSync(altAssetsPath);
      for (const file of files) {
        if (file.endsWith('.js') || file.endsWith('.css') || file.endsWith('.html')) {
          const filePath = path.join(altAssetsPath, file);
          const stats = fs.statSync(filePath);
          const sizeKB = Math.round(stats.size / 1024 * 100) / 100;
          
          this.metrics.bundleSizes[file] = {
            size: sizeKB,
            type: this.getFileType(file)
          };
          
          this.metrics.totalSize += sizeKB;
        }
      }
      return;
    }

    const files = fs.readdirSync(assetsPath);
    
    for (const file of files) {
      const filePath = path.join(assetsPath, file);
      const stats = fs.statSync(filePath);
      const sizeKB = Math.round(stats.size / 1024 * 100) / 100;
      
      this.metrics.bundleSizes[file] = {
        size: sizeKB,
        type: this.getFileType(file)
      };
      
      this.metrics.totalSize += sizeKB;
    }

    // Estimate gzip size (roughly 30% of original)
    this.metrics.gzipSize = Math.round(this.metrics.totalSize * 0.3 * 100) / 100;
  }

  getFileType(filename) {
    if (filename.endsWith('.js')) return 'JavaScript';
    if (filename.endsWith('.css')) return 'CSS';
    if (filename.endsWith('.woff2')) return 'Font';
    if (filename.endsWith('.webp') || filename.endsWith('.png') || filename.endsWith('.jpg')) return 'Image';
    return 'Other';
  }

  generateRecommendations() {
    const { bundleSizes, totalSize } = this.metrics;

    // Check for large bundles
    Object.entries(bundleSizes).forEach(([file, data]) => {
      if (data.size > 100) {
        this.metrics.recommendations.push({
          type: 'warning',
          message: `Large bundle detected: ${file} (${data.size}KB)`,
          suggestion: 'Consider code splitting or lazy loading for this bundle'
        });
      }
    });

    // Check total size
    if (totalSize > 500) {
      this.metrics.recommendations.push({
        type: 'warning',
        message: `Total bundle size is large: ${totalSize}KB`,
        suggestion: 'Consider implementing more aggressive code splitting and tree shaking'
      });
    } else if (totalSize < 200) {
      this.metrics.recommendations.push({
        type: 'success',
        message: `Bundle size is optimized: ${totalSize}KB`,
        suggestion: 'Great job! Bundle size is within recommended limits'
      });
    }

    // Check for missing optimizations
    const jsFiles = Object.keys(bundleSizes).filter(f => f.endsWith('.js'));
    if (jsFiles.length > 5) {
      this.metrics.recommendations.push({
        type: 'info',
        message: `Multiple JS chunks detected: ${jsFiles.length}`,
        suggestion: 'Consider consolidating smaller chunks to reduce HTTP requests'
      });
    }

    // Check for CSS optimization
    const cssFiles = Object.keys(bundleSizes).filter(f => f.endsWith('.css'));
    if (cssFiles.length > 1) {
      this.metrics.recommendations.push({
        type: 'info',
        message: `Multiple CSS files detected: ${cssFiles.length}`,
        suggestion: 'Consider CSS bundling for better performance'
      });
    }
  }

  async saveReport() {
    const report = {
      timestamp: new Date().toISOString(),
      metrics: this.metrics,
      buildInfo: {
        nodeVersion: process.version,
        platform: process.platform,
        arch: process.arch
      }
    };

    fs.writeFileSync(this.reportPath, JSON.stringify(report, null, 2));
  }

  displayResults() {
    console.log('\n📊 Performance Analysis Results');
    console.log('================================');
    
    console.log(`\n📦 Bundle Analysis:`);
    console.log(`Total Size: ${this.metrics.totalSize}KB`);
    console.log(`Estimated Gzip Size: ${this.metrics.gzipSize}KB`);
    console.log(`Number of Assets: ${Object.keys(this.metrics.bundleSizes).length}`);
    
    console.log(`\n📋 Bundle Breakdown:`);
    Object.entries(this.metrics.bundleSizes)
      .sort(([,a], [,b]) => b.size - a.size)
      .forEach(([file, data]) => {
        console.log(`  ${file}: ${data.size}KB (${data.type})`);
      });

    console.log(`\n💡 Recommendations:`);
    this.metrics.recommendations.forEach(rec => {
      const icon = rec.type === 'warning' ? '⚠️' : rec.type === 'success' ? '✅' : 'ℹ️';
      console.log(`  ${icon} ${rec.message}`);
      console.log(`     → ${rec.suggestion}`);
    });

    console.log(`\n📄 Full report saved to: ${this.reportPath}`);
  }
}

// Run the performance monitor
if (import.meta.url === `file://${process.argv[1]}`) {
  const monitor = new PerformanceMonitor();
  monitor.analyzeBuild().catch(console.error);
}

export default PerformanceMonitor;