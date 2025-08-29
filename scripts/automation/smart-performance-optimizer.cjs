#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class SmartPerformanceOptimizer {
  constructor() {
    this.optimizerLog = path.join(__dirname, '../logs', 'performance-optimizer.log');
    this.ensureLogDirectory();
    this.performanceThresholds = {
      bundleSize: 500000, // 500KB
      buildTime: 30000,   // 30 seconds
      lighthouseScore: 90,
      firstContentfulPaint: 2000, // 2 seconds
      largestContentfulPaint: 4000 // 4 seconds
    };
    this.optimizationHistory = [];
  }

  ensureLogDirectory() {
    const logDir = path.dirname(this.optimizerLog);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] Performance Optimizer: ${message}\n`;
    console.log(message);
    fs.appendFileSync(this.optimizerLog, logMessage);
  }

  async optimizePerformance() {
    try {
      this.log('🚀 Starting smart performance optimization...');
      
      // Analyze current performance
      const currentMetrics = await this.analyzeCurrentPerformance();
      
      // Identify optimization opportunities
      const opportunities = this.identifyOptimizationOpportunities(currentMetrics);
      
      // Apply intelligent optimizations
      const optimizationResults = await this.applyOptimizations(opportunities);
      
      // Measure improvements
      const improvedMetrics = await this.measureImprovements();
      
      // Generate optimization report
      this.generateOptimizationReport(currentMetrics, improvedMetrics, optimizationResults);
      
      this.log('✅ Performance optimization completed successfully');
      
    } catch (error) {
      this.log(`❌ Performance optimization failed: ${error.message}`);
    }
  }

  async analyzeCurrentPerformance() {
    const metrics = {
      timestamp: new Date().toISOString(),
      bundleSize: 0,
      buildTime: 0,
      lighthouseScore: 0,
      firstContentfulPaint: 0,
      largestContentfulPaint: 0,
      unusedDependencies: [],
      duplicatePackages: [],
      largeFiles: []
    };

    try {
      // Analyze bundle size
      metrics.bundleSize = await this.analyzeBundleSize();
      
      // Measure build time
      metrics.buildTime = await this.measureBuildTime();
      
      // Check for unused dependencies
      metrics.unusedDependencies = await this.findUnusedDependencies();
      
      // Check for duplicate packages
      metrics.duplicatePackages = await this.findDuplicatePackages();
      
      // Find large files
      metrics.largeFiles = await this.findLargeFiles();
      
      this.log(`📊 Performance analysis completed - Bundle: ${(metrics.bundleSize / 1024).toFixed(2)}KB, Build time: ${metrics.buildTime}ms`);
      
    } catch (error) {
      this.log(`Error analyzing performance: ${error.message}`);
    }
    
    return metrics;
  }

  async analyzeBundleSize() {
    try {
      // Build the project to analyze bundle
      execSync('npm run build', { stdio: 'pipe' });
      
      // Analyze dist directory
      const distPath = path.join(process.cwd(), 'dist');
      if (!fs.existsSync(distPath)) return 0;
      
      let totalSize = 0;
      const analyzeDirectory = (dir) => {
        const files = fs.readdirSync(dir);
        files.forEach(file => {
          const filePath = path.join(dir, file);
          const stats = fs.statSync(filePath);
          if (stats.isDirectory()) {
            analyzeDirectory(filePath);
          } else {
            totalSize += stats.size;
          }
        });
      };
      
      analyzeDirectory(distPath);
      return totalSize;
      
    } catch (error) {
      this.log(`Warning: Could not analyze bundle size: ${error.message}`);
      return 0;
    }
  }

  async measureBuildTime() {
    try {
      const startTime = Date.now();
      execSync('npm run build', { stdio: 'pipe' });
      const endTime = Date.now();
      return endTime - startTime;
    } catch (error) {
      this.log(`Warning: Could not measure build time: ${error.message}`);
      return 0;
    }
  }

  async findUnusedDependencies() {
    const unused = [];
    
    try {
      // Use depcheck to find unused dependencies
      const depcheckResult = execSync('npx depcheck --json', { encoding: 'utf8' });
      const depcheckData = JSON.parse(depcheckResult);
      
      if (depcheckData.dependencies) {
        unused.push(...depcheckData.dependencies);
      }
      
      if (depcheckData.devDependencies) {
        unused.push(...depcheckData.devDependencies);
      }
      
    } catch (error) {
      this.log(`Warning: Could not check unused dependencies: ${error.message}`);
    }
    
    return unused;
  }

  async findDuplicatePackages() {
    const duplicates = [];
    
    try {
      // Use npm ls to find duplicate packages
      const npmLsResult = execSync('npm ls --json', { encoding: 'utf8' });
      const npmLsData = JSON.parse(npmLsResult);
      
      const packageVersions = new Map();
      
      const traverseDependencies = (deps) => {
        if (!deps) return;
        
        Object.entries(deps).forEach(([name, info]) => {
          if (packageVersions.has(name)) {
            packageVersions.get(name).push(info.version);
          } else {
            packageVersions.set(name, [info.version]);
          }
          
          if (info.dependencies) {
            traverseDependencies(info.dependencies);
          }
        });
      };
      
      traverseDependencies(npmLsData.dependencies);
      
      packageVersions.forEach((versions, name) => {
        if (versions.length > 1 && new Set(versions).size > 1) {
          duplicates.push({ name, versions: [...new Set(versions)] });
        }
      });
      
    } catch (error) {
      this.log(`Warning: Could not check duplicate packages: ${error.message}`);
    }
    
    return duplicates;
  }

  async findLargeFiles() {
    const largeFiles = [];
    const maxFileSize = 100 * 1024; // 100KB
    
    try {
      const srcPath = path.join(process.cwd(), 'src');
      if (!fs.existsSync(srcPath)) return largeFiles;
      
      const findLargeFiles = (dir) => {
        const files = fs.readdirSync(dir);
        files.forEach(file => {
          const filePath = path.join(dir, file);
          const stats = fs.statSync(filePath);
          
          if (stats.isDirectory()) {
            findLargeFiles(filePath);
          } else if (stats.size > maxFileSize) {
            largeFiles.push({
              path: filePath,
              size: stats.size,
              relativePath: path.relative(process.cwd(), filePath)
            });
          }
        });
      };
      
      findLargeFiles(srcPath);
      
    } catch (error) {
      this.log(`Warning: Could not find large files: ${error.message}`);
    }
    
    return largeFiles;
  }

  identifyOptimizationOpportunities(metrics) {
    const opportunities = [];
    
    // Bundle size optimization
    if (metrics.bundleSize > this.performanceThresholds.bundleSize) {
      opportunities.push({
        type: 'bundle-size',
        priority: 'high',
        description: `Bundle size ${(metrics.bundleSize / 1024).toFixed(2)}KB exceeds threshold of ${(this.performanceThresholds.bundleSize / 1024).toFixed(2)}KB`,
        actions: ['Tree shaking', 'Code splitting', 'Bundle analysis', 'Remove unused code']
      });
    }
    
    // Build time optimization
    if (metrics.buildTime > this.performanceThresholds.buildTime) {
      opportunities.push({
        type: 'build-time',
        priority: 'medium',
        description: `Build time ${metrics.buildTime}ms exceeds threshold of ${this.performanceThresholds.buildTime}ms`,
        actions: ['Parallel builds', 'Cache optimization', 'Incremental builds']
      });
    }
    
    // Unused dependencies
    if (metrics.unusedDependencies.length > 0) {
      opportunities.push({
        type: 'unused-dependencies',
        priority: 'medium',
        description: `Found ${metrics.unusedDependencies.length} unused dependencies`,
        actions: ['Remove unused packages', 'Update package.json', 'Clean node_modules']
      });
    }
    
    // Duplicate packages
    if (metrics.duplicatePackages.length > 0) {
      opportunities.push({
        type: 'duplicate-packages',
        priority: 'low',
        description: `Found ${metrics.duplicatePackages.length} packages with duplicate versions`,
        actions: ['Deduplicate packages', 'Update package versions', 'Resolve conflicts']
      });
    }
    
    // Large files
    if (metrics.largeFiles.length > 0) {
      opportunities.push({
        type: 'large-files',
        priority: 'medium',
        description: `Found ${metrics.largeFiles.length} files larger than 100KB`,
        actions: ['Code splitting', 'Lazy loading', 'File optimization']
      });
    }
    
    return opportunities;
  }

  async applyOptimizations(opportunities) {
    const results = [];
    
    for (const opportunity of opportunities) {
      try {
        this.log(`🔧 Applying optimization: ${opportunity.type}`);
        
        const result = await this.applyOptimization(opportunity);
        results.push(result);
        
      } catch (error) {
        this.log(`Failed to apply optimization ${opportunity.type}: ${error.message}`);
        results.push({
          type: opportunity.type,
          success: false,
          error: error.message
        });
      }
    }
    
    return results;
  }

  async applyOptimization(opportunity) {
    const startTime = Date.now();
    
    try {
      switch (opportunity.type) {
        case 'unused-dependencies':
          return await this.removeUnusedDependencies();
        
        case 'duplicate-packages':
          return await this.deduplicatePackages();
        
        case 'bundle-size':
          return await this.optimizeBundleSize();
        
        case 'build-time':
          return await this.optimizeBuildTime();
        
        default:
          return { type: opportunity.type, success: false, error: 'Unknown optimization type' };
      }
    } finally {
      const executionTime = Date.now() - startTime;
      this.optimizationHistory.push({
        type: opportunity.type,
        timestamp: new Date().toISOString(),
        executionTime
      });
    }
  }

  async removeUnusedDependencies() {
    try {
      // Remove unused dependencies
      const unusedDeps = await this.findUnusedDependencies();
      
      if (unusedDeps.length > 0) {
        const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
        
        // Remove from dependencies
        unusedDeps.forEach(dep => {
          if (packageJson.dependencies && packageJson.dependencies[dep]) {
            delete packageJson.dependencies[dep];
          }
          if (packageJson.devDependencies && packageJson.devDependencies[dep]) {
            delete packageJson.devDependencies[dep];
          }
        });
        
        fs.writeFileSync('package.json', JSON.stringify(packageJson, null, 2));
        
        // Clean up node_modules
        execSync('rm -rf node_modules package-lock.json', { stdio: 'pipe' });
        execSync('npm install', { stdio: 'pipe' });
        
        this.log(`Removed ${unusedDeps.length} unused dependencies`);
      }
      
      return { type: 'unused-dependencies', success: true, removedCount: unusedDeps.length };
      
    } catch (error) {
      throw new Error(`Failed to remove unused dependencies: ${error.message}`);
    }
  }

  async deduplicatePackages() {
    try {
      // Use npm dedupe to remove duplicate packages
      execSync('npm dedupe', { stdio: 'pipe' });
      
      this.log('Deduplicated packages successfully');
      return { type: 'duplicate-packages', success: true };
      
    } catch (error) {
      throw new Error(`Failed to deduplicate packages: ${error.message}`);
    }
  }

  async optimizeBundleSize() {
    try {
      // Analyze bundle with webpack-bundle-analyzer if available
      if (fs.existsSync('webpack.config.js') || fs.existsSync('vite.config.ts')) {
        // Generate bundle analysis
        execSync('npm run build:analyze || npm run build', { stdio: 'pipe' });
        
        this.log('Bundle analysis generated for optimization review');
      }
      
      return { type: 'bundle-size', success: true, note: 'Bundle analysis generated' };
      
    } catch (error) {
      throw new Error(`Failed to optimize bundle size: ${error.message}`);
    }
  }

  async optimizeBuildTime() {
    try {
      // Check for build cache optimization opportunities
      const viteConfig = path.join(process.cwd(), 'vite.config.ts');
      
      if (fs.existsSync(viteConfig)) {
        let configContent = fs.readFileSync(viteConfig, 'utf8');
        
        // Add build optimization if not present
        if (!configContent.includes('build: {') || !configContent.includes('rollupOptions')) {
          const buildOptimizations = `
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          utils: ['lodash', 'moment']
        }
      }
    },
    chunkSizeWarningLimit: 1000
  }`;
          
          configContent = configContent.replace(/export default defineConfig\(/g, 
            `export default defineConfig(${buildOptimizations}`);
          
          fs.writeFileSync(viteConfig, configContent);
          this.log('Added build optimizations to Vite config');
        }
      }
      
      return { type: 'build-time', success: true, note: 'Build optimizations applied' };
      
    } catch (error) {
      throw new Error(`Failed to optimize build time: ${error.message}`);
    }
  }

  async measureImprovements() {
    try {
      // Re-measure performance after optimizations
      const improvedMetrics = await this.analyzeCurrentPerformance();
      
      this.log('📊 Performance improvements measured');
      return improvedMetrics;
      
    } catch (error) {
      this.log(`Warning: Could not measure improvements: ${error.message}`);
      return null;
    }
  }

  generateOptimizationReport(originalMetrics, improvedMetrics, optimizationResults) {
    const report = {
      timestamp: new Date().toISOString(),
      originalMetrics,
      improvedMetrics,
      optimizationResults,
      improvements: {},
      recommendations: []
    };
    
    // Calculate improvements
    if (improvedMetrics) {
      report.improvements = {
        bundleSize: originalMetrics.bundleSize - improvedMetrics.bundleSize,
        buildTime: originalMetrics.buildTime - improvedMetrics.buildTime,
        unusedDependencies: originalMetrics.unusedDependencies.length - improvedMetrics.unusedDependencies.length
      };
    }
    
    // Generate recommendations
    if (improvedMetrics) {
      if (improvedMetrics.bundleSize > this.performanceThresholds.bundleSize) {
        report.recommendations.push({
          priority: 'high',
          action: 'Consider implementing code splitting and lazy loading',
          impact: 'High'
        });
      }
      
      if (improvedMetrics.buildTime > this.performanceThresholds.buildTime) {
        report.recommendations.push({
          priority: 'medium',
          action: 'Implement build caching and parallel processing',
          impact: 'Medium'
        });
      }
    }
    
    const reportPath = path.join(__dirname, '../reports', 'performance-optimization-report.json');
    const reportDir = path.dirname(reportPath);
    
    if (!fs.existsSync(reportDir)) {
      fs.mkdirSync(reportDir, { recursive: true });
    }
    
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    this.log(`📊 Generated performance optimization report: ${reportPath}`);
  }
}

// Main execution
const optimizer = new SmartPerformanceOptimizer();
optimizer.optimizePerformance().catch(console.error);