#!/usr/bin/env node

/**
 * Performance Monitor Script
 * Monitors and reports on application performance metrics
 */

const fs = require('fs');
const path = require('path');

class PerformanceMonitor {
  constructor() {
    this.metrics = {
      bundleSize: 0,
      buildTime: 0,
      fileCount: 0,
      dependencies: 0,
      vulnerabilities: 0,
      performanceScore: 0
    };
  }

  async analyzeBuild() {
    console.log('🔍 Analyzing build performance...\n');
    
    // Analyze dist folder
    await this.analyzeDistFolder();
    
    // Analyze package.json
    await this.analyzeDependencies();
    
    // Calculate performance score
    this.calculatePerformanceScore();
    
    // Generate report
    this.generateReport();
  }

  async analyzeDistFolder() {
    const distPath = path.join(process.cwd(), 'dist');
    
    if (!fs.existsSync(distPath)) {
      console.log('❌ Dist folder not found. Run npm run build first.');
      return;
    }

    const files = this.getFilesRecursively(distPath);
    let totalSize = 0;
    let jsFiles = 0;
    let cssFiles = 0;

    files.forEach(file => {
      const stats = fs.statSync(file);
      totalSize += stats.size;
      
      if (file.endsWith('.js')) jsFiles++;
      if (file.endsWith('.css')) cssFiles++;
    });

    this.metrics.bundleSize = totalSize;
    this.metrics.fileCount = files.length;

    console.log(`📊 Bundle Analysis:`);
    console.log(`   Total size: ${this.formatBytes(totalSize)}`);
    console.log(`   Files: ${files.length}`);
    console.log(`   JS files: ${jsFiles}`);
    console.log(`   CSS files: ${cssFiles}\n`);
  }

  async analyzeDependencies() {
    const packagePath = path.join(process.cwd(), 'package.json');
    
    if (!fs.existsSync(packagePath)) {
      console.log('❌ package.json not found.');
      return;
    }

    const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
    const dependencies = Object.keys(packageJson.dependencies || {}).length;
    const devDependencies = Object.keys(packageJson.devDependencies || {}).length;

    this.metrics.dependencies = dependencies + devDependencies;

    console.log(`📦 Dependencies:`);
    console.log(`   Production: ${dependencies}`);
    console.log(`   Development: ${devDependencies}`);
    console.log(`   Total: ${this.metrics.dependencies}\n`);
  }

  calculatePerformanceScore() {
    let score = 100;

    // Bundle size scoring (target: < 500KB)
    if (this.metrics.bundleSize > 500000) {
      score -= Math.min(30, (this.metrics.bundleSize - 500000) / 10000);
    }

    // File count scoring (target: < 50 files)
    if (this.metrics.fileCount > 50) {
      score -= Math.min(20, (this.metrics.fileCount - 50) / 5);
    }

    // Dependencies scoring (target: < 100)
    if (this.metrics.dependencies > 100) {
      score -= Math.min(20, (this.metrics.dependencies - 100) / 10);
    }

    this.metrics.performanceScore = Math.max(0, Math.round(score));
  }

  generateReport() {
    console.log('📈 Performance Report');
    console.log('='.repeat(50));
    console.log(`Bundle Size: ${this.formatBytes(this.metrics.bundleSize)}`);
    console.log(`File Count: ${this.metrics.fileCount}`);
    console.log(`Dependencies: ${this.metrics.dependencies}`);
    console.log(`Performance Score: ${this.metrics.performanceScore}/100`);
    
    console.log('\n🎯 Recommendations:');
    
    if (this.metrics.bundleSize > 500000) {
      console.log('   ⚠️  Bundle size is large. Consider code splitting.');
    }
    
    if (this.metrics.fileCount > 50) {
      console.log('   ⚠️  Many files in dist. Consider bundling optimization.');
    }
    
    if (this.metrics.dependencies > 100) {
      console.log('   ⚠️  Many dependencies. Consider removing unused packages.');
    }
    
    if (this.metrics.performanceScore >= 90) {
      console.log('   ✅ Excellent performance!');
    } else if (this.metrics.performanceScore >= 70) {
      console.log('   ⚠️  Good performance, room for improvement.');
    } else {
      console.log('   ❌ Performance needs significant improvement.');
    }

    // Save report to file
    const report = {
      timestamp: new Date().toISOString(),
      metrics: this.metrics,
      recommendations: this.getRecommendations()
    };

    fs.writeFileSync(
      path.join(process.cwd(), 'performance-report.json'),
      JSON.stringify(report, null, 2)
    );

    console.log('\n💾 Report saved to performance-report.json');
  }

  getRecommendations() {
    const recommendations = [];

    if (this.metrics.bundleSize > 500000) {
      recommendations.push('Implement code splitting for large components');
      recommendations.push('Use dynamic imports for route-based splitting');
      recommendations.push('Optimize images and assets');
    }

    if (this.metrics.fileCount > 50) {
      recommendations.push('Consider bundling smaller files together');
      recommendations.push('Implement better chunk splitting strategy');
    }

    if (this.metrics.dependencies > 100) {
      recommendations.push('Audit and remove unused dependencies');
      recommendations.push('Consider lighter alternatives for heavy packages');
    }

    return recommendations;
  }

  getFilesRecursively(dir) {
    const files = [];
    const items = fs.readdirSync(dir);

    items.forEach(item => {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory()) {
        files.push(...this.getFilesRecursively(fullPath));
      } else {
        files.push(fullPath);
      }
    });

    return files;
  }

  formatBytes(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }
}

// Run the performance monitor
if (require.main === module) {
  const monitor = new PerformanceMonitor();
  monitor.analyzeBuild().catch(console.error);
}

module.exports = PerformanceMonitor;