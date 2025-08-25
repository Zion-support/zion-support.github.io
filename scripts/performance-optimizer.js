#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Zion Tech Group - Performance Optimization Script
 * Analyzes and optimizes the application for better performance
 */

class PerformanceOptimizer {
  constructor() {
    this.projectRoot = path.resolve(__dirname, '..');
    this.distPath = path.join(this.projectRoot, 'dist');
    this.reportPath = path.join(this.projectRoot, 'performance-report.json');
  }

  async run() {
    console.log('🚀 Zion Tech Group - Performance Analysis Starting...\n');
    
    try {
      // Check if build exists
      if (!fs.existsSync(this.distPath)) {
        console.log('❌ Build directory not found. Please run "npm run build" first.');
        return;
      }

      // Analyze bundle size
      const bundleAnalysis = this.analyzeBundleSize();
      
      // Analyze dependencies
      const dependencyAnalysis = this.analyzeDependencies();
      
      // Generate recommendations
      const recommendations = this.generateRecommendations(bundleAnalysis, dependencyAnalysis);
      
      // Save report
      await this.saveReport({
        timestamp: new Date().toISOString(),
        bundleAnalysis,
        dependencyAnalysis,
        recommendations
      });

      console.log('✅ Performance analysis complete! Check performance-report.json for details.');
      
    } catch (error) {
      console.error('❌ Error during performance analysis:', error.message);
    }
  }

  analyzeBundleSize() {
    console.log('📊 Analyzing bundle size...');
    
    const files = this.getBuildFiles();
    const totalSize = this.calculateTotalSize(files);
    const largestFiles = this.getLargestFiles(files, 10);
    const chunkAnalysis = this.analyzeChunks(files);
    
    return {
      totalSize,
      fileCount: files.length,
      largestFiles,
      chunks: chunkAnalysis
    };
  }

  analyzeDependencies() {
    console.log('🔍 Analyzing dependencies...');
    
    const packageJsonPath = path.join(this.projectRoot, 'package.json');
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
    
    const dependencies = packageJson.dependencies || {};
    const devDependencies = packageJson.devDependencies || {};
    
    const allDeps = { ...dependencies, ...devDependencies };
    const largePackages = this.identifyLargePackages(allDeps);
    
    return {
      totalDependencies: Object.keys(allDeps).length,
      productionDependencies: Object.keys(dependencies).length,
      devDependencies: Object.keys(devDependencies).length,
      largePackages
    };
  }

  generateRecommendations(bundleAnalysis, dependencyAnalysis) {
    console.log('💡 Generating optimization recommendations...');
    
    const recommendations = [];
    
    // Bundle size recommendations
    if (bundleAnalysis.totalSize > 1024 * 1024) { // > 1MB
      recommendations.push({
        category: 'Bundle Size',
        priority: 'High',
        title: 'Reduce Bundle Size',
        description: 'Bundle size exceeds 1MB. Consider code splitting and tree shaking.',
        actions: [
          'Implement dynamic imports for route-based code splitting',
          'Review and remove unused dependencies',
          'Optimize images and assets',
          'Use compression (gzip/brotli)'
        ]
      });
    }
    
    // Chunk analysis recommendations
    const largeChunks = bundleAnalysis.chunks.filter(chunk => chunk.size > 200 * 1024); // > 200KB
    if (largeChunks.length > 0) {
      recommendations.push({
        category: 'Code Splitting',
        priority: 'Medium',
        title: 'Optimize Large Chunks',
        description: `Found ${largeChunks.length} chunks larger than 200KB.`,
        actions: [
          'Review chunk splitting strategy in vite.config.ts',
          'Implement lazy loading for heavy components',
          'Consider vendor chunk optimization'
        ]
      });
    }
    
    // Dependency recommendations
    if (dependencyAnalysis.largePackages.length > 0) {
      recommendations.push({
        category: 'Dependencies',
        priority: 'Medium',
        title: 'Review Large Dependencies',
        description: 'Some dependencies may be unnecessarily large.',
        actions: [
          'Review alternatives for large packages',
          'Check for duplicate functionality',
          'Consider bundle analyzer tools'
        ]
      });
    }
    
    // Performance best practices
    recommendations.push({
      category: 'Best Practices',
      priority: 'Low',
      title: 'Performance Monitoring',
      description: 'Implement ongoing performance monitoring.',
      actions: [
        'Set up Core Web Vitals monitoring',
        'Implement performance budgets',
        'Regular bundle analysis',
        'User experience metrics tracking'
      ]
    });
    
    return recommendations;
  }

  async saveReport(data) {
    const report = {
      summary: {
        totalSize: this.formatBytes(data.bundleAnalysis.totalSize),
        fileCount: data.bundleAnalysis.fileCount,
        dependencies: data.dependencyAnalysis.totalDependencies,
        recommendations: data.recommendations.length
      },
      ...data
    };
    
    fs.writeFileSync(this.reportPath, JSON.stringify(report, null, 2));
    console.log(`📄 Report saved to: ${this.reportPath}`);
  }

  // Helper methods
  getBuildFiles() {
    const files = [];
    
    const scanDirectory = (dir) => {
      const items = fs.readdirSync(dir);
      
      for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          scanDirectory(fullPath);
        } else if (stat.isFile()) {
          files.push({
            path: fullPath,
            size: stat.size,
            relativePath: path.relative(this.distPath, fullPath)
          });
        }
      }
    };
    
    scanDirectory(this.distPath);
    return files;
  }

  calculateTotalSize(files) {
    return files.reduce((total, file) => total + file.size, 0);
  }

  getLargestFiles(files, count) {
    return files
      .sort((a, b) => b.size - a.size)
      .slice(0, count)
      .map(file => ({
        ...file,
        sizeFormatted: this.formatBytes(file.size)
      }));
  }

  analyzeChunks(files) {
    const chunks = {};
    
    files.forEach(file => {
      const chunkName = this.getChunkName(file.relativePath);
      if (!chunks[chunkName]) {
        chunks[chunkName] = { size: 0, files: [] };
      }
      chunks[chunkName].size += file.size;
      chunks[chunkName].files.push(file);
    });
    
    return Object.entries(chunks).map(([name, data]) => ({
      name,
      size: data.size,
      sizeFormatted: this.formatBytes(data.size),
      fileCount: data.files.length
    })).sort((a, b) => b.size - a.size);
  }

  getChunkName(filePath) {
    if (filePath.includes('assets/')) {
      const match = filePath.match(/assets\/([^-]+)/);
      return match ? match[1] : 'assets';
    }
    return 'root';
  }

  identifyLargePackages(dependencies) {
    // This is a simplified analysis - in a real scenario, you'd use tools like bundle-analyzer
    const largePackages = [];
    
    // Common large packages to watch out for
    const knownLargePackages = [
      'moment', 'lodash', 'antd', 'material-ui', 'bootstrap'
    ];
    
    knownLargePackages.forEach(pkg => {
      if (dependencies[pkg]) {
        largePackages.push({
          name: pkg,
          reason: 'Known large package - consider alternatives'
        });
      }
    });
    
    return largePackages;
  }

  formatBytes(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }
}

// Run the optimizer
if (import.meta.url === `file://${process.argv[1]}`) {
  const optimizer = new PerformanceOptimizer();
  optimizer.run().catch(console.error);
}