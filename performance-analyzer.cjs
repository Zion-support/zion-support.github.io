#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class PerformanceAnalyzer {
  constructor() {
    this.results = {
      timestamp: new Date().toISOString(),
      metrics: {},
      analysis: [],
      optimizations: [],
      score: 0
    };
  }

  async analyzeBundleSize() {
    try {
      const buildDir = path.join(process.cwd(), '.next');
      if (fs.existsSync(buildDir)) {
        const staticDir = path.join(buildDir, 'static');
        if (fs.existsSync(staticDir)) {
          const totalSize = this.getDirectorySize(staticDir);
          const sizeInMB = (totalSize / (1024 * 1024)).toFixed(2);
          
          this.results.metrics.bundleSize = {
            bytes: totalSize,
            mb: parseFloat(sizeInMB),
            status: totalSize < 1024 * 1024 ? 'excellent' : 
                   totalSize < 5 * 1024 * 1024 ? 'good' : 
                   totalSize < 10 * 1024 * 1024 ? 'warning' : 'critical'
          };
          
          if (totalSize > 5 * 1024 * 1024) {
            this.results.optimizations.push({
              type: 'bundle_size',
              priority: 'high',
              description: 'Bundle size is large, consider code splitting and tree shaking',
              impact: 'Reduces initial load time'
            });
          }
        }
      }
    } catch (error) {
      this.results.analysis.push({
        type: 'error',
        message: `Bundle analysis failed: ${error.message}`
      });
    }
  }

  getDirectorySize(dirPath) {
    let totalSize = 0;
    try {
      const files = fs.readdirSync(dirPath);
      for (const file of files) {
        const filePath = path.join(dirPath, file);
        const stats = fs.statSync(filePath);
        if (stats.isDirectory()) {
          totalSize += this.getDirectorySize(filePath);
        } else {
          totalSize += stats.size;
        }
      }
    } catch (error) {
      // Ignore permission errors
    }
    return totalSize;
  }

  async analyzeCodeComplexity() {
    try {
      const pagesDir = path.join(process.cwd(), 'pages');
      const componentsDir = path.join(process.cwd(), 'components');
      
      let totalFiles = 0;
      let totalLines = 0;
      let complexFiles = 0;
      
      [pagesDir, componentsDir].forEach(dir => {
        if (fs.existsSync(dir)) {
          this.analyzeDirectory(dir, (file, lines) => {
            totalFiles++;
            totalLines += lines;
            if (lines > 200) complexFiles++;
          });
        }
      });
      
      this.results.metrics.codeComplexity = {
        totalFiles,
        totalLines,
        averageLinesPerFile: Math.round(totalLines / totalFiles),
        complexFiles,
        complexityRatio: (complexFiles / totalFiles * 100).toFixed(1)
      };
      
      if (complexFiles > totalFiles * 0.2) {
        this.results.optimizations.push({
          type: 'code_complexity',
          priority: 'medium',
          description: 'Many files are complex (>200 lines), consider refactoring',
          impact: 'Improves maintainability and performance'
        });
      }
    } catch (error) {
      this.results.analysis.push({
        type: 'error',
        message: `Code complexity analysis failed: ${error.message}`
      });
    }
  }

  analyzeDirectory(dirPath, callback) {
    try {
      const files = fs.readdirSync(dirPath);
      for (const file of files) {
        const filePath = path.join(dirPath, file);
        const stats = fs.statSync(filePath);
        
        if (stats.isDirectory()) {
          this.analyzeDirectory(filePath, callback);
        } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js')) {
          const content = fs.readFileSync(filePath, 'utf8');
          const lines = content.split('\n').length;
          callback(filePath, lines);
        }
      }
    } catch (error) {
      // Ignore permission errors
    }
  }

  async analyzeDependencies() {
    try {
      const packageJsonPath = path.join(process.cwd(), 'package.json');
      if (fs.existsSync(packageJsonPath)) {
        const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
        const deps = Object.keys(packageJson.dependencies || {});
        const devDeps = Object.keys(packageJson.devDependencies || {});
        
        this.results.metrics.dependencies = {
          production: deps.length,
          development: devDeps.length,
          total: deps.length + devDeps.length
        };
        
        if (deps.length > 50) {
          this.results.optimizations.push({
            type: 'dependencies',
            priority: 'medium',
            description: 'Large number of dependencies, review and remove unused ones',
            impact: 'Reduces bundle size and build time'
          });
        }
      }
    } catch (error) {
      this.results.analysis.push({
        type: 'error',
        message: `Dependency analysis failed: ${error.message}`
      });
    }
  }

  calculatePerformanceScore() {
    let score = 100;
    
    // Bundle size impact
    if (this.results.metrics.bundleSize) {
      const status = this.results.metrics.bundleSize.status;
      if (status === 'critical') score -= 30;
      else if (status === 'warning') score -= 15;
      else if (status === 'good') score -= 5;
    }
    
    // Code complexity impact
    if (this.results.metrics.codeComplexity) {
      const ratio = parseFloat(this.results.metrics.codeComplexity.complexityRatio);
      if (ratio > 30) score -= 20;
      else if (ratio > 20) score -= 10;
      else if (ratio > 10) score -= 5;
    }
    
    // Dependencies impact
    if (this.results.metrics.dependencies) {
      const total = this.results.metrics.dependencies.total;
      if (total > 100) score -= 15;
      else if (total > 75) score -= 10;
      else if (total > 50) score -= 5;
    }
    
    this.results.score = Math.max(0, score);
  }

  async run() {
    console.log('⚡ Starting Performance Analyzer...');
    
    await this.analyzeBundleSize();
    await this.analyzeCodeComplexity();
    await this.analyzeDependencies();
    
    this.calculatePerformanceScore();
    
    // Save results
    fs.writeFileSync('performance-analysis-report.json', JSON.stringify(this.results, null, 2));
    
    console.log(`⚡ Performance analysis completed. Score: ${this.results.score}/100`);
    console.log(`🔧 ${this.results.optimizations.length} optimization opportunities found`);
    
    return this.results;
  }
}

// Run performance analyzer
if (require.main === module) {
  const analyzer = new PerformanceAnalyzer();
  analyzer.run().catch(console.error);
}

module.exports = PerformanceAnalyzer;
