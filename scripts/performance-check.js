#!/usr/bin/env node

/**
 * Performance Check Script
 * Analyzes bundle size, performance metrics, and provides optimization recommendations
 */

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class PerformanceChecker {
  constructor() {
    this.results = {
      bundleSize: {},
      performance: {},
      recommendations: []
    };
  }

  async run() {
    console.log('🚀 Starting Performance Analysis...\n');

    try {
      await this.checkBundleSize();
      await this.checkPerformanceMetrics();
      await this.generateRecommendations();
      await this.saveReport();
      
      console.log('\n✅ Performance analysis completed!');
      console.log('📊 Report saved to: performance-report.json');
    } catch (error) {
      console.error('❌ Performance analysis failed:', error.message);
      process.exit(1);
    }
  }

  async checkBundleSize() {
    console.log('📦 Analyzing bundle size...');
    
    try {
      // Check if .next directory exists
      const nextDir = path.join(process.cwd(), '.next');
      if (!fs.existsSync(nextDir)) {
        console.log('⚠️  .next directory not found. Run "npm run build" first.');
        return;
      }

      // Analyze static files
      const staticDir = path.join(nextDir, 'static');
      if (fs.existsSync(staticDir)) {
        const staticSize = this.getDirectorySize(staticDir);
        this.results.bundleSize.static = staticSize;
      }

      // Analyze pages
      const pagesDir = path.join(nextDir, 'server', 'pages');
      if (fs.existsSync(pagesDir)) {
        const pagesSize = this.getDirectorySize(pagesDir);
        this.results.bundleSize.pages = pagesSize;
      }

      console.log(`   Static files: ${this.formatBytes(this.results.bundleSize.static || 0)}`);
      console.log(`   Pages: ${this.formatBytes(this.results.bundleSize.pages || 0)}`);

    } catch (error) {
      console.log(`   ⚠️  Bundle analysis failed: ${error.message}`);
    }
  }

  async checkPerformanceMetrics() {
    console.log('⚡ Checking performance metrics...');
    
    try {
      // Check package.json for performance-related dependencies
      const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
      
      const performanceDeps = [
        'next',
        'react',
        'react-dom',
        'tailwindcss',
        'lucide-react'
      ];

      this.results.performance.dependencies = {};
      performanceDeps.forEach(dep => {
        if (packageJson.dependencies[dep]) {
          this.results.performance.dependencies[dep] = packageJson.dependencies[dep];
        }
      });

      // Check for performance optimizations in code
      const optimizations = this.checkCodeOptimizations();
      this.results.performance.optimizations = optimizations;

      console.log(`   Dependencies checked: ${Object.keys(this.results.performance.dependencies).length}`);
      console.log(`   Optimizations found: ${optimizations.length}`);

    } catch (error) {
      console.log(`   ⚠️  Performance metrics check failed: ${error.message}`);
    }
  }

  checkCodeOptimizations() {
    const optimizations = [];
    
    try {
      // Check for React.memo usage
      const memoCount = this.countOccurrences('React.memo');
      if (memoCount > 0) {
        optimizations.push(`React.memo usage: ${memoCount} components`);
      }

      // Check for useCallback usage
      const callbackCount = this.countOccurrences('useCallback');
      if (callbackCount > 0) {
        optimizations.push(`useCallback usage: ${callbackCount} hooks`);
      }

      // Check for useMemo usage
      const memoHookCount = this.countOccurrences('useMemo');
      if (memoHookCount > 0) {
        optimizations.push(`useMemo usage: ${memoHookCount} hooks`);
      }

      // Check for lazy loading
      const lazyCount = this.countOccurrences('lazy');
      if (lazyCount > 0) {
        optimizations.push(`Lazy loading: ${lazyCount} components`);
      }

      // Check for dynamic imports
      const dynamicCount = this.countOccurrences('dynamic');
      if (dynamicCount > 0) {
        optimizations.push(`Dynamic imports: ${dynamicCount} modules`);
      }

    } catch (error) {
      console.log(`   ⚠️  Code optimization check failed: ${error.message}`);
    }

    return optimizations;
  }

  countOccurrences(pattern) {
    let count = 0;
    const srcDir = path.join(process.cwd(), 'app');
    
    if (!fs.existsSync(srcDir)) return 0;

    const files = this.getAllFiles(srcDir, ['.tsx', '.ts', '.js', '.jsx']);
    
    files.forEach(file => {
      try {
        const content = fs.readFileSync(file, 'utf8');
        const matches = content.match(new RegExp(pattern, 'g'));
        if (matches) {
          count += matches.length;
        }
      } catch (error) {
        // Skip files that can't be read
      }
    });

    return count;
  }

  getAllFiles(dir, extensions) {
    let files = [];
    const items = fs.readdirSync(dir);
    
    items.forEach(item => {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        files = files.concat(this.getAllFiles(fullPath, extensions));
      } else if (extensions.some(ext => item.endsWith(ext))) {
        files.push(fullPath);
      }
    });
    
    return files;
  }

  async generateRecommendations() {
    console.log('💡 Generating optimization recommendations...');
    
    const recommendations = [];

    // Bundle size recommendations
    if (this.results.bundleSize.static > 1000000) { // 1MB
      recommendations.push({
        type: 'bundle-size',
        priority: 'high',
        message: 'Static bundle size is large. Consider code splitting and lazy loading.',
        action: 'Implement dynamic imports and route-based code splitting'
      });
    }

    // Performance recommendations
    const optimizations = this.results.performance.optimizations || [];
    
    if (optimizations.length < 3) {
      recommendations.push({
        type: 'performance',
        priority: 'medium',
        message: 'Consider adding more performance optimizations like React.memo, useCallback, and useMemo.',
        action: 'Review components and add appropriate memoization'
      });
    }

    // Dependency recommendations
    const deps = this.results.performance.dependencies || {};
    if (deps['lucide-react']) {
      recommendations.push({
        type: 'dependencies',
        priority: 'low',
        message: 'Consider using tree-shaking with lucide-react to reduce bundle size.',
        action: 'Import only needed icons: import { IconName } from "lucide-react"'
      });
    }

    // Next.js specific recommendations
    recommendations.push({
      type: 'nextjs',
      priority: 'medium',
      message: 'Enable Next.js Image Optimization for better performance.',
      action: 'Use next/image component for all images'
    });

    recommendations.push({
      type: 'nextjs',
      priority: 'high',
      message: 'Consider enabling Next.js experimental features for better performance.',
      action: 'Add experimental features to next.config.js'
    });

    this.results.recommendations = recommendations;
    console.log(`   Generated ${recommendations.length} recommendations`);
  }

  async saveReport() {
    const reportPath = path.join(process.cwd(), 'performance-report.json');
    const report = {
      timestamp: new Date().toISOString(),
      ...this.results
    };

    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
  }

  getDirectorySize(dir) {
    let size = 0;
    
    try {
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
    } catch (error) {
      // Skip directories that can't be read
    }
    
    return size;
  }

  formatBytes(bytes) {
    if (bytes === 0) return '0 Bytes';
    
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }
}

// Run the performance checker
if (import.meta.url === `file://${process.argv[1]}`) {
  const checker = new PerformanceChecker();
  checker.run().catch(console.error);
}

export default PerformanceChecker;