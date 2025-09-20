#!/usr/bin/env node

/**
 * Performance Monitor for Zion App
 * Tracks build performance, bundle size, and optimization metrics
 */

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class PerformanceMonitor {
  constructor() {
    this.metrics = {
      buildTime: 0,
      bundleSize: 0,
      pageCount: 0,
      timestamp: new Date().toISOString(),
    };
  }

  async startBuild() {
    console.log('🚀 Starting performance monitoring...');
    const startTime = Date.now();
    
    try {
      // Run build with performance tracking
      execSync('npm run build', { stdio: 'pipe' });
      
      this.metrics.buildTime = Date.now() - startTime;
      await this.analyzeBuildOutput();
      await this.generateReport();
      
      console.log('✅ Performance monitoring completed');
    } catch (error) {
      console.error('❌ Build failed:', error.message);
      process.exit(1);
    }
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
    const files = fs.readdirSync(dir, { withFileTypes: true });
    
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
      const files = fs.readdirSync(dirPath, { withFileTypes: true });
      
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

  async generateReport() {
    const report = {
      ...this.metrics,
      performance: {
        buildTimeSeconds: Math.round(this.metrics.buildTime / 1000),
        bundleSizeMB: Math.round(this.metrics.bundleSize / 1024 / 1024 * 100) / 100,
        pagesPerSecond: Math.round(this.metrics.pageCount / (this.metrics.buildTime / 1000) * 100) / 100,
      },
      recommendations: this.generateRecommendations(),
    };

    // Save report
    const reportPath = path.join(__dirname, '..', 'performance-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    // Log summary
    console.log('\n📊 Performance Report:');
    console.log(`⏱️  Build Time: ${report.performance.buildTimeSeconds}s`);
    console.log(`📦 Bundle Size: ${report.performance.bundleSizeMB}MB`);
    console.log(`📄 Pages: ${this.metrics.pageCount}`);
    console.log(`🚀 Pages/sec: ${report.performance.pagesPerSecond}`);
    
    if (report.recommendations.length > 0) {
      console.log('\n💡 Recommendations:');
      report.recommendations.forEach(rec => console.log(`  • ${rec}`));
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
    
    return recommendations;
  }
}

// Run if called directly
if (import.meta.url === `file://${__filename}`) {
  const monitor = new PerformanceMonitor();
  monitor.startBuild().catch(console.error);
}

export default PerformanceMonitor;