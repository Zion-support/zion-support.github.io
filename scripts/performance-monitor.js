#!/usr/bin/env node

/**
 * Performance Monitoring Script for Zion App
 * Monitors build performance, bundle sizes, and deployment metrics
 */

import { readFileSync, writeFileSync, existsSync } from 'fs';
import { execSync } from 'child_process';
import path from 'path';

const colors = {
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
  reset: '\x1b[0m',
  bold: '\x1b[1m'
};

class PerformanceMonitor {
  constructor() {
    this.startTime = Date.now();
    this.metrics = {
      buildTime: 0,
      bundleSize: 0,
      chunkCount: 0,
      warnings: 0,
      errors: 0
    };
  }

  log(message, color = 'reset') {
    console.log(`${colors[color]}${message}${colors.reset}`);
  }

  async monitorBuild() {
    this.log('🚀 Starting performance monitoring...', 'cyan');
    
    try {
      // Check if dist directory exists
      if (existsSync('dist')) {
        this.log('📊 Analyzing bundle sizes...', 'blue');
        this.analyzeBundleSizes();
        
        this.log('📈 Generating performance report...', 'blue');
        this.generatePerformanceReport();
      } else {
        this.log('❌ No dist directory found. Run build first.', 'red');
      }
    } catch (error) {
      this.log(`❌ Error during monitoring: ${error.message}`, 'red');
    }
  }

  analyzeBundleSizes() {
    const bundleInfo = this.getBundleInfo();
    this.metrics.bundleSize = bundleInfo.totalSize;
    this.metrics.chunkCount = bundleInfo.chunkCount;

    this.log(`\n📦 Bundle Analysis:`, 'bold');
    this.log(`   Total Size: ${this.formatBytes(bundleInfo.totalSize)}`, 'green');
    this.log(`   Chunk Count: ${bundleInfo.chunkCount}`, 'blue');
    this.log(`   Largest Chunk: ${bundleInfo.largestChunk.name} (${this.formatBytes(bundleInfo.largestChunk.size)})`, 'yellow');
    
    // Performance recommendations
    this.log(`\n💡 Performance Recommendations:`, 'bold');
    if (bundleInfo.largestChunk.size > 500000) { // 500KB
      this.log(`   ⚠️  Largest chunk is ${this.formatBytes(bundleInfo.largestChunk.size)}. Consider code splitting.`, 'yellow');
    }
    if (bundleInfo.totalSize > 2000000) { // 2MB
      this.log(`   ⚠️  Total bundle size is ${this.formatBytes(bundleInfo.totalSize)}. Consider optimization.`, 'yellow');
    }
    if (bundleInfo.chunkCount < 5) {
      this.log(`   💡 Consider more granular code splitting for better caching.`, 'blue');
    }
  }

  getBundleInfo() {
    const distPath = 'dist/assets';
    if (!existsSync(distPath)) {
      return { totalSize: 0, chunkCount: 0, largestChunk: { name: 'none', size: 0 } };
    }

    const files = execSync(`find ${distPath} -name "*.js" -o -name "*.css"`, { encoding: 'utf8' })
      .trim()
      .split('\n')
      .filter(file => file.length > 0);

    let totalSize = 0;
    let largestChunk = { name: 'none', size: 0 };

    const fileSizes = files.map(file => {
      const stats = execSync(`stat -c%s "${file}"`, { encoding: 'utf8' });
      const size = parseInt(stats.trim());
      totalSize += size;

      if (size > largestChunk.size) {
        largestChunk = { name: path.basename(file), size };
      }

      return { name: path.basename(file), size };
    });

    return {
      totalSize,
      chunkCount: files.length,
      largestChunk,
      files: fileSizes.sort((a, b) => b.size - a.size)
    };
  }

  generatePerformanceReport() {
    const report = {
      timestamp: new Date().toISOString(),
      buildTime: this.metrics.buildTime,
      bundleSize: this.metrics.bundleSize,
      chunkCount: this.metrics.chunkCount,
      recommendations: this.getRecommendations()
    };

    // Save to file
    writeFileSync('performance-report.json', JSON.stringify(report, null, 2));
    this.log('📄 Performance report saved to performance-report.json', 'green');
  }

  getRecommendations() {
    const recommendations = [];
    
    if (this.metrics.bundleSize > 2000000) {
      recommendations.push('Consider implementing lazy loading for routes');
      recommendations.push('Review and remove unused dependencies');
      recommendations.push('Implement tree shaking for better bundle optimization');
    }

    if (this.metrics.chunkCount < 5) {
      recommendations.push('Implement more granular code splitting');
      recommendations.push('Consider dynamic imports for large components');
    }

    recommendations.push('Enable gzip/brotli compression on server');
    recommendations.push('Implement service worker for caching');
    recommendations.push('Use CDN for static assets');

    return recommendations;
  }

  formatBytes(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }

  async run() {
    await this.monitorBuild();
    this.log('\n✅ Performance monitoring completed!', 'green');
  }
}

// Run the monitor
const monitor = new PerformanceMonitor();
monitor.run().catch(console.error);