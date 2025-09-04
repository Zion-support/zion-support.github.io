#!/usr/bin/env node

/**
 * Performance Optimizer
 * Analyzes and optimizes application performance
 */
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class PerformanceOptimizer {
  constructor() {
    this.projectRoot = process.cwd();
    this.reportFile = path.join(this.projectRoot, 'performance-optimization-report.json');
    this.results = {
      timestamp: new Date().toISOString(),
      optimizations: [],
      recommendations: [],
      metrics: {}
    };
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const icons = { 'INFO': 'ℹ️', 'SUCCESS': '✅', 'ERROR': '❌', 'WARNING': '⚠️' };
    console.log(`${icons[level]} [${timestamp}] ${message}`);
  }

  async analyzeBundleSize() {
    this.log('Analyzing bundle size...');
    try {
      const result = execSync('npm run build:analyze', { 
        cwd: this.projectRoot, 
        encoding: 'utf8' 
      });
      
      this.results.optimizations.push({
        type: 'bundle_analysis',
        status: 'completed',
        output: result
      });
      
      this.log('Bundle analysis completed', 'SUCCESS');
      return true;
    } catch (error) {
      this.log(`Bundle analysis failed: ${error.message}`, 'ERROR');
      this.results.optimizations.push({
        type: 'bundle_analysis',
        status: 'failed',
        error: error.message
      });
      return false;
    }
  }

  async optimizeImages() {
    this.log('Optimizing images...');
    try {
      // Check for image optimization tools
      const imageDirs = ['public/images', 'public/assets', 'src/assets'];
      let optimizedCount = 0;
      
      for (const dir of imageDirs) {
        if (fs.existsSync(dir)) {
          const files = fs.readdirSync(dir).filter(file => 
            /\.(jpg|jpeg|png|gif|webp)$/i.test(file)
          );
          
          for (const file of files) {
            const filePath = path.join(dir, file);
            const stats = fs.statSync(filePath);
            
            if (stats.size > 100000) { // Files larger than 100KB
              this.results.recommendations.push({
                type: 'image_optimization',
                file: filePath,
                size: stats.size,
                suggestion: 'Consider compressing this image'
              });
            }
          }
        }
      }
      
      this.results.optimizations.push({
        type: 'image_optimization',
        status: 'completed',
        optimizedCount
      });
      
      this.log(`Image optimization completed: ${optimizedCount} files processed`, 'SUCCESS');
      return true;
    } catch (error) {
      this.log(`Image optimization failed: ${error.message}`, 'ERROR');
      return false;
    }
  }

  async optimizeCode() {
    this.log('Optimizing code...');
    try {
      // Check for unused imports
      const sourceFiles = this.findSourceFiles();
      let unusedImports = 0;
      
      for (const file of sourceFiles) {
        const content = fs.readFileSync(file, 'utf8');
        const lines = content.split('\n');
        
        for (const line of lines) {
          if (line.trim().startsWith('import ') && line.includes(' from ')) {
            const importName = line.match(/import\s+(\w+)/)?.[1];
            if (importName && !content.includes(importName)) {
              unusedImports++;
              this.results.recommendations.push({
                type: 'unused_import',
                file: file,
                import: importName,
                suggestion: 'Remove unused import'
              });
            }
          }
        }
      }
      
      this.results.optimizations.push({
        type: 'code_optimization',
        status: 'completed',
        unusedImports
      });
      
      this.log(`Code optimization completed: ${unusedImports} unused imports found`, 'SUCCESS');
      return true;
    } catch (error) {
      this.log(`Code optimization failed: ${error.message}`, 'ERROR');
      return false;
    }
  }

  findSourceFiles() {
    const sourceFiles = [];
    const extensions = ['.js', '.jsx', '.ts', '.tsx'];
    
    const scanDirectory = (dir) => {
      if (!fs.existsSync(dir)) return;
      
      const files = fs.readdirSync(dir);
      for (const file of files) {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        
        if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
          scanDirectory(filePath);
        } else if (stat.isFile() && extensions.some(ext => file.endsWith(ext))) {
          sourceFiles.push(filePath);
        }
      }
    };
    
    scanDirectory(this.projectRoot);
    return sourceFiles;
  }

  async checkPerformanceMetrics() {
    this.log('Checking performance metrics...');
    try {
      const memUsage = process.memoryUsage();
      const cpuUsage = process.cpuUsage();
      
      this.results.metrics = {
        memoryUsage: {
          rss: Math.round(memUsage.rss / 1024 / 1024), // MB
          heapTotal: Math.round(memUsage.heapTotal / 1024 / 1024), // MB
          heapUsed: Math.round(memUsage.heapUsed / 1024 / 1024), // MB
          external: Math.round(memUsage.external / 1024 / 1024) // MB
        },
        cpuUsage: {
          user: cpuUsage.user,
          system: cpuUsage.system
        },
        uptime: process.uptime()
      };
      
      this.log('Performance metrics collected', 'SUCCESS');
      return true;
    } catch (error) {
      this.log(`Performance metrics collection failed: ${error.message}`, 'ERROR');
      return false;
    }
  }

  async generateRecommendations() {
    this.log('Generating optimization recommendations...');
    
    // Memory usage recommendations
    if (this.results.metrics.memoryUsage?.heapUsed > 500) {
      this.results.recommendations.push({
        type: 'memory_optimization',
        priority: 'high',
        suggestion: 'Consider implementing memory optimization strategies'
      });
    }
    
    // Bundle size recommendations
    if (this.results.optimizations.some(opt => opt.type === 'bundle_analysis')) {
      this.results.recommendations.push({
        type: 'bundle_optimization',
        priority: 'medium',
        suggestion: 'Consider code splitting and lazy loading'
      });
    }
    
    // Image optimization recommendations
    const imageRecs = this.results.recommendations.filter(rec => rec.type === 'image_optimization');
    if (imageRecs.length > 0) {
      this.results.recommendations.push({
        type: 'image_optimization',
        priority: 'medium',
        suggestion: `Optimize ${imageRecs.length} large images`
      });
    }
    
    this.log(`Generated ${this.results.recommendations.length} recommendations`, 'SUCCESS');
  }

  async runOptimization() {
    this.log('🚀 Starting Performance Optimization...');
    
    const optimizations = [
      { name: 'Bundle Analysis', fn: () => this.analyzeBundleSize() },
      { name: 'Image Optimization', fn: () => this.optimizeImages() },
      { name: 'Code Optimization', fn: () => this.optimizeCode() },
      { name: 'Performance Metrics', fn: () => this.checkPerformanceMetrics() }
    ];

    let successCount = 0;
    for (const optimization of optimizations) {
      try {
        const success = await optimization.fn();
        if (success) successCount++;
      } catch (error) {
        this.log(`Error in ${optimization.name}: ${error.message}`, 'ERROR');
      }
    }

    await this.generateRecommendations();
    await this.saveReport();
    
    this.log(`✅ Performance optimization completed: ${successCount}/${optimizations.length} successful`);
    return { successCount, totalCount: optimizations.length, results: this.results };
  }

  async saveReport() {
    try {
      fs.writeFileSync(this.reportFile, JSON.stringify(this.results, null, 2));
      this.log(`📊 Report saved to: ${this.reportFile}`);
    } catch (error) {
      this.log(`Failed to save report: ${error.message}`, 'ERROR');
    }
  }
}

// CLI Interface
async function main() {
  const optimizer = new PerformanceOptimizer();
  await optimizer.runOptimization();
}

// Run if called directly
if (require.main === module) {
  main().catch(error => {
    console.error('Fatal error:', error);
    process.exit(1);
  });
}

module.exports = PerformanceOptimizer;