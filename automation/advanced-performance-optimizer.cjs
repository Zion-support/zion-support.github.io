#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class AdvancedPerformanceOptimizer {
  constructor() {
    this.optimizationResults = {
      timestamp: new Date().toISOString(),
      optimizations: [],
      metrics: {
        bundleSize: 0,
        buildTime: 0,
        memoryUsage: 0,
        performanceScore: 0
      },
      recommendations: []
    };
  }

  async optimize() {
    console.log('⚡ Starting Advanced Performance Optimization...');
    
    try {
      // Analyze bundle size
      await this.analyzeBundleSize();
      
      // Analyze build performance
      await this.analyzeBuildPerformance();
      
      // Check for performance issues
      await this.checkPerformanceIssues();
      
      // Generate optimization recommendations
      this.generateOptimizationRecommendations();
      
      console.log('✅ Performance Optimization completed');
      
    } catch (error) {
      console.error('❌ Performance Optimization failed:', error.message);
    }
  }

  async analyzeBundleSize() {
    try {
      const buildDir = path.join(process.cwd(), '.next');
      if (!fs.existsSync(buildDir)) {
        console.log('Build directory not found. Running build first...');
        execSync('npm run build', { stdio: 'pipe' });
      }
      
      const bundleSize = this.calculateDirectorySize(buildDir);
      this.optimizationResults.metrics.bundleSize = bundleSize;
      
      this.optimizationResults.optimizations.push({
        type: 'bundle-analysis',
        success: true,
        result: {
          size: bundleSize,
          sizeMB: (bundleSize / 1024 / 1024).toFixed(2)
        }
      });
      
    } catch (error) {
      this.optimizationResults.optimizations.push({
        type: 'bundle-analysis',
        success: false,
        error: error.message
      });
    }
  }

  async analyzeBuildPerformance() {
    try {
      const startTime = Date.now();
      execSync('npm run build', { stdio: 'pipe' });
      const buildTime = Date.now() - startTime;
      
      this.optimizationResults.metrics.buildTime = buildTime;
      
      this.optimizationResults.optimizations.push({
        type: 'build-performance',
        success: true,
        result: {
          buildTime: buildTime,
          buildTimeSeconds: (buildTime / 1000).toFixed(2)
        }
      });
      
    } catch (error) {
      this.optimizationResults.optimizations.push({
        type: 'build-performance',
        success: false,
        error: error.message
      });
    }
  }

  async checkPerformanceIssues() {
    try {
      // Check for large files
      const largeFiles = this.findLargeFiles();
      
      // Check for unused dependencies
      const unusedDeps = await this.findUnusedDependencies();
      
      // Check for performance anti-patterns
      const antiPatterns = this.findPerformanceAntiPatterns();
      
      this.optimizationResults.optimizations.push({
        type: 'performance-issues',
        success: true,
        result: {
          largeFiles,
          unusedDependencies: unusedDeps,
          antiPatterns
        }
      });
      
    } catch (error) {
      this.optimizationResults.optimizations.push({
        type: 'performance-issues',
        success: false,
        error: error.message
      });
    }
  }

  calculateDirectorySize(dir) {
    let size = 0;
    
    try {
      const files = fs.readdirSync(dir);
      
      files.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        
        if (stat.isDirectory()) {
          size += this.calculateDirectorySize(filePath);
        } else {
          size += stat.size;
        }
      });
    } catch (error) {
      console.warn(`Warning: Could not calculate size for ${dir}: ${error.message}`);
    }
    
    return size;
  }

  findLargeFiles() {
    const largeFiles = [];
    const maxSize = 1024 * 1024; // 1MB
    
    const checkDirectory = (dir) => {
      try {
        const files = fs.readdirSync(dir);
        
        files.forEach(file => {
          const filePath = path.join(dir, file);
          const stat = fs.statSync(filePath);
          
          if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
            checkDirectory(filePath);
          } else if (stat.isFile() && stat.size > maxSize) {
            largeFiles.push({
              path: filePath,
              size: stat.size,
              sizeMB: (stat.size / 1024 / 1024).toFixed(2)
            });
          }
        });
      } catch (error) {
        // Ignore errors for directories we can't read
      }
    };
    
    checkDirectory(process.cwd());
    return largeFiles;
  }

  async findUnusedDependencies() {
    try {
      const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
      const dependencies = Object.keys(packageJson.dependencies || {});
      const unusedDeps = [];
      
      // This is a simplified check - in reality, you'd use tools like depcheck
      dependencies.forEach(dep => {
        if (!this.isDependencyUsed(dep)) {
          unusedDeps.push(dep);
        }
      });
      
      return unusedDeps;
    } catch (error) {
      return [];
    }
  }

  isDependencyUsed(dependency) {
    // Simple check for import/require statements
    const checkFile = (filePath) => {
      try {
        const content = fs.readFileSync(filePath, 'utf8');
        return content.includes(`from '${dependency}'`) || 
               content.includes(`require('${dependency}')`) ||
               content.includes(`import '${dependency}'`);
      } catch (error) {
        return false;
      }
    };
    
    const checkDirectory = (dir) => {
      try {
        const files = fs.readdirSync(dir);
        
        for (const file of files) {
          const filePath = path.join(dir, file);
          const stat = fs.statSync(filePath);
          
          if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
            if (checkDirectory(filePath)) return true;
          } else if (stat.isFile() && (file.endsWith('.js') || file.endsWith('.jsx') || file.endsWith('.ts') || file.endsWith('.tsx'))) {
            if (checkFile(filePath)) return true;
          }
        }
      } catch (error) {
        // Ignore errors
      }
      
      return false;
    };
    
    return checkDirectory(process.cwd());
  }

  findPerformanceAntiPatterns() {
    const antiPatterns = [];
    
    // Check for console.log in production code
    const checkConsoleLogs = (dir) => {
      try {
        const files = fs.readdirSync(dir);
        
        files.forEach(file => {
          const filePath = path.join(dir, file);
          const stat = fs.statSync(filePath);
          
          if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
            checkConsoleLogs(filePath);
          } else if (stat.isFile() && (file.endsWith('.js') || file.endsWith('.jsx') || file.endsWith('.ts') || file.endsWith('.tsx'))) {
            try {
              const content = fs.readFileSync(filePath, 'utf8');
              if (content.includes('console.log')) {
                antiPatterns.push({
                  type: 'console-log',
                  file: filePath,
                  message: 'Console.log statements found in production code'
                });
              }
            } catch (error) {
              // Ignore file read errors
            }
          }
        });
      } catch (error) {
        // Ignore directory read errors
      }
    };
    
    checkConsoleLogs(process.cwd());
    return antiPatterns;
  }

  generateOptimizationRecommendations() {
    const recommendations = [];
    
    // Bundle size recommendations
    if (this.optimizationResults.metrics.bundleSize > 5 * 1024 * 1024) { // 5MB
      recommendations.push({
        type: 'bundle-size',
        priority: 'high',
        message: 'Bundle size is large. Consider code splitting and lazy loading.',
        actions: [
          'Implement dynamic imports for large components',
          'Use Next.js automatic code splitting',
          'Remove unused dependencies'
        ]
      });
    }
    
    // Build time recommendations
    if (this.optimizationResults.metrics.buildTime > 60000) { // 1 minute
      recommendations.push({
        type: 'build-time',
        priority: 'medium',
        message: 'Build time is slow. Consider optimizing build process.',
        actions: [
          'Enable build caching',
          'Optimize webpack configuration',
          'Remove unnecessary dependencies'
        ]
      });
    }
    
    // Performance anti-patterns
    const performanceOp = this.optimizationResults.optimizations.find(op => op.type === 'performance-issues');
    if (performanceOp && performanceOp.success) {
      const { antiPatterns } = performanceOp.result;
      
      if (antiPatterns.length > 0) {
        recommendations.push({
          type: 'anti-patterns',
          priority: 'medium',
          message: 'Performance anti-patterns detected.',
          actions: [
            'Remove console.log statements from production code',
            'Optimize large files',
            'Remove unused dependencies'
          ]
        });
      }
    }
    
    this.optimizationResults.recommendations = recommendations;
  }

  saveReport() {
    const reportFile = path.join(__dirname, 'reports', 'performance-optimization-report.json');
    fs.mkdirSync(path.dirname(reportFile), { recursive: true });
    fs.writeFileSync(reportFile, JSON.stringify(this.optimizationResults, null, 2));
    
    console.log(`📊 Performance optimization report saved to: ${reportFile}`);
  }
}

// Run if called directly
if (require.main === module) {
  const optimizer = new AdvancedPerformanceOptimizer();
  optimizer.optimize()
    .then(() => {
      optimizer.saveReport();
    })
    .catch(console.error);
}

module.exports = AdvancedPerformanceOptimizer;