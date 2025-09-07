#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class PerformanceMonitor {
  constructor() {
    this.workspaceRoot = '/workspace';
    this.reportFile = path.join(this.workspaceRoot, 'automation_logs', 'performance-monitor-report.json');
    this.ensureLogDirectory();
  }

  ensureLogDirectory() {
    const logDir = path.dirname(this.reportFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
  }

  log(message) {
    console.log(`[Performance Monitor] ${message}`);
  }

  async runPerformanceMonitoring() {
    this.log('Starting performance monitoring...');
    
    const report = {
      timestamp: new Date().toISOString(),
      metrics: {},
      recommendations: [],
      score: 0
    };

    try {
      // Monitor build performance
      await this.monitorBuildPerformance(report);
      
      // Monitor bundle size
      await this.monitorBundleSize(report);
      
      // Monitor dependencies
      await this.monitorDependencies(report);
      
      // Calculate performance score
      report.score = this.calculatePerformanceScore(report);
      
      // Generate recommendations
      this.generateRecommendations(report);
      
      // Save report
      fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2));
      
      this.log(`Performance monitoring complete. Score: ${report.score}/100`);
      this.log(`Report saved to: ${this.reportFile}`);
      
      return report;
    } catch (error) {
      this.log(`Error during performance monitoring: ${error.message}`);
      report.error = error.message;
      return report;
    }
  }

  async monitorBuildPerformance(report) {
    this.log('Monitoring build performance...');
    
    const startTime = Date.now();
    
    try {
      execSync('npm run build', { 
        encoding: 'utf8', 
        cwd: this.workspaceRoot,
        stdio: 'pipe'
      });
      
      const buildTime = Date.now() - startTime;
      report.metrics.buildTime = buildTime;
      report.metrics.buildTimeSeconds = (buildTime / 1000).toFixed(2);
      
      if (buildTime > 60000) { // 1 minute
        report.recommendations.push({
          priority: 'high',
          category: 'build',
          message: 'Build time exceeds 1 minute - consider optimization'
        });
      }
      
    } catch (error) {
      this.log('Build failed, skipping build performance monitoring');
      report.metrics.buildTime = 0;
    }
  }

  async monitorBundleSize(report) {
    this.log('Monitoring bundle size...');
    
    const distDir = path.join(this.workspaceRoot, 'dist');
    if (fs.existsSync(distDir)) {
      const bundleSize = this.getDirectorySize(distDir);
      report.metrics.bundleSize = bundleSize;
      report.metrics.bundleSizeMB = (bundleSize / (1024 * 1024)).toFixed(2);
      
      if (bundleSize > 2 * 1024 * 1024) { // 2MB
        report.recommendations.push({
          priority: 'high',
          category: 'bundle',
          message: 'Bundle size exceeds 2MB - implement code splitting'
        });
      }
    } else {
      report.metrics.bundleSize = 0;
      report.metrics.bundleSizeMB = '0.00';
    }
  }

  async monitorDependencies(report) {
    this.log('Monitoring dependencies...');
    
    const packageJsonPath = path.join(this.workspaceRoot, 'package.json');
    if (fs.existsSync(packageJsonPath)) {
      const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
      const dependencies = { ...packageJson.dependencies, ...packageJson.devDependencies };
      
      report.metrics.totalDependencies = Object.keys(dependencies).length;
      
      // Check for heavy dependencies
      const heavyDeps = ['lodash', 'moment', 'jquery', 'bootstrap'];
      const foundHeavyDeps = Object.keys(dependencies).filter(dep => heavyDeps.includes(dep));
      
      report.metrics.heavyDependencies = foundHeavyDeps.length;
      
      if (foundHeavyDeps.length > 0) {
        report.recommendations.push({
          priority: 'medium',
          category: 'dependencies',
          message: `Consider replacing heavy dependencies: ${foundHeavyDeps.join(', ')}`
        });
      }
    }
  }

  calculatePerformanceScore(report) {
    let score = 100;
    
    // Deduct for build time
    if (report.metrics.buildTime > 60000) {
      score -= 20;
    } else if (report.metrics.buildTime > 30000) {
      score -= 10;
    }
    
    // Deduct for bundle size
    if (report.metrics.bundleSize > 2 * 1024 * 1024) {
      score -= 30;
    } else if (report.metrics.bundleSize > 1024 * 1024) {
      score -= 15;
    }
    
    // Deduct for heavy dependencies
    if (report.metrics.heavyDependencies > 2) {
      score -= 15;
    } else if (report.metrics.heavyDependencies > 0) {
      score -= 5;
    }
    
    return Math.max(0, Math.min(100, score));
  }

  generateRecommendations(report) {
    if (report.metrics.buildTime > 60000) {
      report.recommendations.push({
        priority: 'high',
        category: 'build',
        message: 'Optimize build process - consider parallel builds'
      });
    }
    
    if (report.metrics.bundleSize > 2 * 1024 * 1024) {
      report.recommendations.push({
        priority: 'high',
        category: 'bundle',
        message: 'Implement tree shaking and code splitting'
      });
    }
    
    report.recommendations.push({
      priority: 'medium',
      category: 'general',
      message: 'Set up continuous performance monitoring'
    });
  }

  getDirectorySize(dir) {
    let size = 0;
    const items = fs.readdirSync(dir);
    
    items.forEach(item => {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        size += this.getDirectorySize(fullPath);
      } else {
        size += stat.size;
      }
    });
    
    return size;
  }
}

// CLI interface
if (require.main === module) {
  const monitor = new PerformanceMonitor();
  monitor.runPerformanceMonitoring().catch(console.error);
}

module.exports = PerformanceMonitor;