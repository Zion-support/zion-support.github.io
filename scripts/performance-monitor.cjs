#!/usr/bin/env node

/**
 * Real-time Performance Monitoring Script
 * Monitors build performance and provides optimization suggestions
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class PerformanceMonitor {
  constructor() {
    this.metrics = {
      buildTime: 0,
      bundleSize: 0,
      chunkCount: 0,
      timestamp: new Date().toISOString()
    };
  }

  async measureBuildPerformance() {
    const startTime = Date.now();
    
    try {
      execSync('pnpm run build:netlify', { 
        cwd: process.cwd(), 
        stdio: 'pipe'
      });
      
      this.metrics.buildTime = Date.now() - startTime;
      this.analyzeBundle();
      
      console.log(`✅ Build completed in ${this.metrics.buildTime}ms`);
      console.log(`📦 Bundle size: ${(this.metrics.bundleSize / 1024).toFixed(2)} KB`);
      console.log(`📊 Chunk count: ${this.metrics.chunkCount}`);
      
      return this.metrics;
    } catch (error) {
      console.error('❌ Build failed:', error.message);
      throw error;
    }
  }

  analyzeBundle() {
    const distPath = path.join(process.cwd(), 'dist');
    if (!fs.existsSync(distPath)) return;

    const files = fs.readdirSync(distPath, { recursive: true });
    let totalSize = 0;
    let jsFiles = 0;

    files.forEach(file => {
      if (typeof file === 'string' && file.endsWith('.js')) {
        const filePath = path.join(distPath, file);
        const stats = fs.statSync(filePath);
        totalSize += stats.size;
        jsFiles++;
      }
    });

    this.metrics.bundleSize = totalSize;
    this.metrics.chunkCount = jsFiles;
  }

  generateReport() {
    const report = {
      ...this.metrics,
      recommendations: this.getRecommendations(),
      score: this.calculatePerformanceScore()
    };

    const reportPath = path.join(process.cwd(), 'performance-monitor-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    console.log(`📊 Performance report saved: ${reportPath}`);
    return report;
  }

  getRecommendations() {
    const recommendations = [];
    
    if (this.metrics.buildTime > 10000) {
      recommendations.push('Consider optimizing build process - build time is >10s');
    }
    
    if (this.metrics.bundleSize > 1500000) {
      recommendations.push('Bundle size is large - consider code splitting');
    }
    
    if (this.metrics.chunkCount > 15) {
      recommendations.push('High chunk count - consider consolidating chunks');
    }
    
    return recommendations;
  }

  calculatePerformanceScore() {
    let score = 100;
    
    if (this.metrics.buildTime > 10000) score -= 20;
    if (this.metrics.bundleSize > 1500000) score -= 25;
    if (this.metrics.chunkCount > 15) score -= 15;
    
    return Math.max(0, score);
  }
}

// Run the monitor
if (require.main === module) {
  const monitor = new PerformanceMonitor();
  monitor.measureBuildPerformance()
    .then(() => monitor.generateReport())
    .catch(console.error);
}

module.exports = PerformanceMonitor;
