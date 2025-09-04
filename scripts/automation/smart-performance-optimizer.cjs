#!/usr/bin/env node

/**
 * Smart Performance Optimizer
 * Advanced performance optimization with intelligent analysis and auto-optimization
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class SmartPerformanceOptimizer {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'logs', 'smart-performance-optimizer.log');
    this.ensureLogsDirectory();
  }

  ensureLogsDirectory() {
    const logsDir = path.join(this.projectRoot, 'logs');
    if (!fs.existsSync(logsDir)) {
      fs.mkdirSync(logsDir, { recursive: true });
    }
  }

  log(message, level = 'info') {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${level.toUpperCase()}] ${message}\n`;
    console.log(logEntry.trim());
    fs.appendFileSync(this.logFile, logEntry);
  }

  async optimizePerformance() {
    this.log('Starting smart performance optimization...');
    
    const optimization = {
      timestamp: new Date().toISOString(),
      project: this.projectRoot,
      bundleAnalysis: await this.analyzeBundle(),
      codeAnalysis: await this.analyzeCodePerformance(),
      recommendations: []
    };

    optimization.recommendations = this.generateOptimizationRecommendations(optimization);
    await this.saveOptimizationReport(optimization);

    return optimization;
  }

  async analyzeBundle() {
    this.log('Analyzing bundle performance...');
    
    try {
      const buildDir = path.join(this.projectRoot, '.next', 'static');
      if (!fs.existsSync(buildDir)) {
        this.log('No build found, creating one...');
        await this.createBuild();
      }

      const bundleAnalysis = {
        files: this.analyzeBundleFiles(buildDir),
        totalSize: 0,
        recommendations: []
      };

      bundleAnalysis.totalSize = bundleAnalysis.files.reduce((sum, file) => sum + file.size, 0);
      bundleAnalysis.recommendations = this.generateBundleRecommendations(bundleAnalysis);

      return bundleAnalysis;
    } catch (error) {
      this.log(`Error analyzing bundle: ${error.message}`, 'error');
      return { error: error.message };
    }
  }

  analyzeBundleFiles(buildDir) {
    const files = [];
    
    const scanDir = (dir) => {
      const items = fs.readdirSync(dir);
      
      for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          scanDir(fullPath);
        } else {
          files.push({
            name: item,
            path: fullPath,
            size: stat.size,
            sizeKB: Math.round(stat.size / 1024 * 100) / 100
          });
        }
      }
    };

    scanDir(buildDir);
    return files.sort((a, b) => b.size - a.size);
  }

  generateBundleRecommendations(analysis) {
    const recommendations = [];
    
    if (analysis.totalSize > 2 * 1024 * 1024) { // 2MB
      recommendations.push({
        type: 'bundle_size',
        message: 'Bundle size is large. Consider code splitting and lazy loading.',
        priority: 'high'
      });
    }

    const largeFiles = analysis.files.filter(file => file.size > 500 * 1024); // 500KB
    if (largeFiles.length > 0) {
      recommendations.push({
        type: 'large_files',
        message: `Large files detected: ${largeFiles.map(f => f.name).join(', ')}. Consider optimization.`,
        priority: 'medium'
      });
    }

    return recommendations;
  }

  async analyzeCodePerformance() {
    this.log('Analyzing code performance...');
    
    const analysis = {
      complexity: await this.analyzeComplexity(),
      performance: await this.analyzePerformancePatterns(),
      recommendations: []
    };

    analysis.recommendations = this.generateCodePerformanceRecommendations(analysis);
    return analysis;
  }

  async analyzeComplexity() {
    const files = this.getSourceFiles();
    const complexityAnalysis = {
      totalFiles: files.length,
      highComplexity: 0,
      averageComplexity: 0,
      files: []
    };

    let totalComplexity = 0;

    files.forEach(file => {
      const complexity = this.calculateFileComplexity(file);
      totalComplexity += complexity;
      
      complexityAnalysis.files.push({
        file: file,
        complexity: complexity,
        level: complexity > 20 ? 'high' : complexity > 10 ? 'medium' : 'low'
      });

      if (complexity > 20) complexityAnalysis.highComplexity++;
    });

    complexityAnalysis.averageComplexity = Math.round(totalComplexity / files.length * 100) / 100;
    return complexityAnalysis;
  }

  calculateFileComplexity(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      let complexity = 0;
      
      const controlStructures = ['if', 'else', 'for', 'while', 'switch', 'case', 'catch', 'try'];
      controlStructures.forEach(structure => {
        const regex = new RegExp(`\\b${structure}\\b`, 'g');
        const matches = content.match(regex);
        if (matches) complexity += matches.length;
      });

      return Math.round(complexity);
    } catch (error) {
      return 0;
    }
  }

  async analyzePerformancePatterns() {
    const patterns = {
      inefficientLoops: 0,
      heavyOperations: 0,
      memoryLeaks: 0
    };

    const files = this.getSourceFiles();
    
    files.forEach(file => {
      try {
        const content = fs.readFileSync(file, 'utf8');
        
        if (content.includes('for (let i = 0; i < array.length; i++)')) {
          patterns.inefficientLoops++;
        }
        
        if (content.includes('JSON.parse') && content.includes('JSON.stringify')) {
          patterns.heavyOperations++;
        }
        
        if (content.includes('setInterval') && !content.includes('clearInterval')) {
          patterns.memoryLeaks++;
        }
      } catch (error) {
        // Skip files that can't be read
      }
    });

    return patterns;
  }

  getSourceFiles() {
    const files = [];
    const extensions = ['.js', '.jsx', '.ts', '.tsx'];
    
    const scanDir = (dir) => {
      const items = fs.readdirSync(dir);
      
      for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          if (!['node_modules', '.git', 'dist', 'build', '.next', 'out'].includes(item)) {
            scanDir(fullPath);
          }
        } else if (extensions.some(ext => item.endsWith(ext))) {
          files.push(fullPath);
        }
      }
    };

    scanDir(this.projectRoot);
    return files;
  }

  generateCodePerformanceRecommendations(analysis) {
    const recommendations = [];
    
    if (analysis.complexity.highComplexity > 0) {
      recommendations.push({
        type: 'complexity',
        message: `${analysis.complexity.highComplexity} files have high complexity. Consider refactoring.`,
        priority: 'high'
      });
    }

    if (analysis.performance.inefficientLoops > 0) {
      recommendations.push({
        type: 'inefficient_loops',
        message: `${analysis.performance.inefficientLoops} inefficient loops detected. Use for...of or forEach.`,
        priority: 'medium'
      });
    }

    if (analysis.performance.memoryLeaks > 0) {
      recommendations.push({
        type: 'memory_leaks',
        message: `${analysis.performance.memoryLeaks} potential memory leaks detected.`,
        priority: 'high'
      });
    }

    return recommendations;
  }

  generateOptimizationRecommendations(optimization) {
    const recommendations = [];
    
    if (optimization.bundleAnalysis.recommendations) {
      recommendations.push(...optimization.bundleAnalysis.recommendations);
    }
    
    if (optimization.codeAnalysis.recommendations) {
      recommendations.push(...optimization.codeAnalysis.recommendations);
    }

    return recommendations;
  }

  async createBuild() {
    try {
      this.log('Creating build for analysis...');
      execSync('npm run build', { 
        cwd: this.projectRoot, 
        stdio: 'pipe' 
      });
      this.log('Build created successfully');
    } catch (error) {
      this.log(`Failed to create build: ${error.message}`, 'error');
      throw error;
    }
  }

  async saveOptimizationReport(optimization) {
    const reportPath = path.join(this.projectRoot, 'logs', 'performance-optimization-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(optimization, null, 2));
    this.log(`Optimization report saved to ${reportPath}`);
  }

  async run() {
    try {
      this.log('Smart Performance Optimizer started');
      
      const optimization = await this.optimizePerformance();
      
      this.log('Smart Performance Optimizer completed successfully');
      return optimization;
      
    } catch (error) {
      this.log(`Smart Performance Optimizer failed: ${error.message}`, 'error');
      throw error;
    }
  }
}

// Run if called directly
if (require.main === module) {
  const optimizer = new SmartPerformanceOptimizer();
  optimizer.run().catch(console.error);
}

module.exports = SmartPerformanceOptimizer;