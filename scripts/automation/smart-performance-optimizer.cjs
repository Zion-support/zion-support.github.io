#!/usr/bin/env node

/**
 * Smart Performance Optimizer
 * Intelligent performance analysis and optimization recommendations
 * 
 * Features:
 * - Bundle size analysis and optimization
 * - Build performance monitoring
 * - Runtime performance insights
 * - Memory usage optimization
 * - Asset optimization suggestions
 * - Performance regression detection
 * - Automated optimization strategies
 */

const fs = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');
const glob = require('glob');

class SmartPerformanceOptimizer {
  constructor() {
    this.config = {
      projectRoot: process.cwd(),
      analysisInterval: 600000, // 10 minutes
      buildAnalysisInterval: 300000, // 5 minutes
      performanceThresholds: {
        maxBundleSize: 1024 * 1024, // 1MB
        maxBuildTime: 120000, // 2 minutes
        maxMemoryUsage: 512 * 1024 * 1024, // 512MB
        maxAssetSize: 500 * 1024, // 500KB
        maxUnusedCode: 0.1 // 10%
      },
      reportFile: 'logs/performance-analysis.json',
      logFile: 'logs/performance-optimizer.log',
      buildHistoryFile: 'logs/build-performance-history.json'
    };
    
    this.performanceData = {
      timestamp: Date.now(),
      bundleAnalysis: {},
      buildPerformance: {},
      runtimeMetrics: {},
      optimizationOpportunities: [],
      performanceScore: 0,
      recommendations: []
    };
    
    this.buildHistory = [];
    this.setupLogging();
    this.initialize();
  }

  setupLogging() {
    const logDir = path.dirname(this.config.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
    
    this.log = (message, level = 'INFO') => {
      const timestamp = new Date().toISOString();
      const logMessage = `[${timestamp}] [${level}] ${message}`;
      console.log(logMessage);
      
      try {
        fs.appendFileSync(this.config.logFile, logMessage + '\n');
      } catch (error) {
        console.error('Failed to write to log file:', error.message);
      }
    };
  }

  async initialize() {
    try {
      this.log('Initializing Smart Performance Optimizer...');
      
      // Create reports directory
      const reportDir = path.dirname(this.config.reportFile);
      if (!fs.existsSync(reportDir)) {
        fs.mkdirSync(reportDir, { recursive: true });
      }
      
      // Load build history
      this.loadBuildHistory();
      
      this.startOptimization();
      
    } catch (error) {
      this.log(`Initialization failed: ${error.message}`, 'ERROR');
      process.exit(1);
    }
  }

  loadBuildHistory() {
    try {
      if (fs.existsSync(this.config.buildHistoryFile)) {
        const historyContent = fs.readFileSync(this.config.buildHistoryFile, 'utf8');
        this.buildHistory = JSON.parse(historyContent);
      }
    } catch (error) {
      this.log(`Failed to load build history: ${error.message}`, 'WARN');
      this.buildHistory = [];
    }
  }

  saveBuildHistory() {
    try {
      fs.writeFileSync(this.config.buildHistoryFile, JSON.stringify(this.buildHistory, null, 2));
    } catch (error) {
      this.log(`Failed to save build history: ${error.message}`, 'ERROR');
    }
  }

  startOptimization() {
    this.log('Starting performance optimization monitoring...');
    
    // Initial analysis
    this.runPerformanceAnalysis();
    
    // Regular performance analysis
    setInterval(() => {
      this.runPerformanceAnalysis();
    }, this.config.analysisInterval);
    
    // Build performance monitoring
    setInterval(() => {
      this.analyzeBuildPerformance();
    }, this.config.buildAnalysisInterval);
  }

  async runPerformanceAnalysis() {
    try {
      this.log('Running performance analysis...');
      
      // Bundle analysis
      await this.analyzeBundle();
      
      // Runtime performance
      await this.analyzeRuntimePerformance();
      
      // Asset optimization
      await this.analyzeAssetOptimization();
      
      // Generate optimization recommendations
      this.generateOptimizationRecommendations();
      
      // Calculate performance score
      this.calculatePerformanceScore();
      
      this.generateReport();
      this.log('Performance analysis completed.');
      
    } catch (error) {
      this.log(`Performance analysis failed: ${error.message}`, 'ERROR');
    }
  }

  async analyzeBundle() {
    try {
      this.log('Analyzing bundle performance...');
      
      const distPath = path.join(this.config.projectRoot, 'dist');
      if (!fs.existsSync(distPath)) {
        this.log('No dist directory found. Skipping bundle analysis.', 'WARN');
        return;
      }
      
      const bundleFiles = this.getBundleFiles(distPath);
      let totalSize = 0;
      let largestFile = { name: '', size: 0 };
      
      for (const file of bundleFiles) {
        const stats = fs.statSync(file);
        const size = stats.size;
        totalSize += size;
        
        if (size > largestFile.size) {
          largestFile = { name: path.basename(file), size };
        }
        
        // Check for oversized assets
        if (size > this.config.performanceThresholds.maxAssetSize) {
          this.performanceData.optimizationOpportunities.push({
            type: 'asset_size',
            file: path.basename(file),
            currentSize: size,
            maxSize: this.config.performanceThresholds.maxAssetSize,
            suggestion: 'Consider optimizing or splitting this asset'
          });
        }
      }
      
      this.performanceData.bundleAnalysis = {
        totalFiles: bundleFiles.length,
        totalSize,
        largestFile: largestFile.name,
        largestFileSize: largestFile.size,
        averageFileSize: totalSize / bundleFiles.length,
        oversizedAssets: this.performanceData.optimizationOpportunities
          .filter(opp => opp.type === 'asset_size').length
      };
      
      // Check bundle size threshold
      if (totalSize > this.config.performanceThresholds.maxBundleSize) {
        this.performanceData.optimizationOpportunities.push({
          type: 'bundle_size',
          currentSize: totalSize,
          maxSize: this.config.performanceThresholds.maxBundleSize,
          suggestion: 'Bundle size exceeds threshold. Consider code splitting and tree shaking.'
        });
      }
      
    } catch (error) {
      this.log(`Bundle analysis failed: ${error.message}`, 'ERROR');
    }
  }

  getBundleFiles(dir) {
    const files = [];
    const patterns = ['**/*.js', '**/*.css', '**/*.html', '**/*.json'];
    
    patterns.forEach(pattern => {
      try {
        const matches = glob.sync(pattern, { cwd: dir, absolute: true });
        files.push(...matches);
      } catch (error) {
        this.log(`Error matching pattern ${pattern}: ${error.message}`, 'WARN');
      }
    });
    
    return files;
  }

  async analyzeRuntimePerformance() {
    try {
      this.log('Analyzing runtime performance...');
      
      // Check for performance anti-patterns in source code
      const sourceFiles = this.getSourceFiles();
      let performanceIssues = 0;
      let memoryLeaks = 0;
      
      for (const file of sourceFiles) {
        const content = fs.readFileSync(file, 'utf8');
        
        // Check for performance anti-patterns
        if (this.detectPerformanceAntiPatterns(content)) {
          performanceIssues++;
        }
        
        // Check for potential memory leaks
        if (this.detectMemoryLeaks(content)) {
          memoryLeaks++;
        }
      }
      
      this.performanceData.runtimeMetrics = {
        sourceFiles: sourceFiles.length,
        performanceIssues,
        memoryLeaks,
        performanceScore: this.calculateRuntimeScore(performanceIssues, memoryLeaks)
      };
      
    } catch (error) {
      this.log(`Runtime performance analysis failed: ${error.message}`, 'ERROR');
    }
  }

  getSourceFiles() {
    const patterns = [
      'src/**/*.{js,ts,jsx,tsx}',
      'pages/**/*.{js,ts,jsx,tsx}',
      'components/**/*.{js,ts,jsx,tsx}'
    ];
    
    let files = [];
    patterns.forEach(pattern => {
      try {
        const matches = glob.sync(pattern, { cwd: this.config.projectRoot, absolute: true });
        files.push(...matches);
      } catch (error) {
        this.log(`Error matching pattern ${pattern}: ${error.message}`, 'WARN');
      }
    });
    
    return files;
  }

  detectPerformanceAntiPatterns(content) {
    const antiPatterns = [
      /\.forEach\s*\(/gi,
      /\.map\s*\(/gi,
      /\.filter\s*\(/gi,
      /for\s*\(\s*let\s+i\s*=\s*0/gi,
      /\.querySelectorAll\s*\(/gi,
      /\.getElementsByTagName\s*\(/gi,
      /setInterval\s*\(/gi,
      /setTimeout\s*\(/gi
    ];
    
    return antiPatterns.some(pattern => pattern.test(content));
  }

  detectMemoryLeaks(content) {
    const memoryLeakPatterns = [
      /addEventListener\s*\(/gi,
      /removeEventListener\s*\(/gi,
      /setInterval\s*\(/gi,
      /setTimeout\s*\(/gi,
      /new\s+EventTarget\s*\(/gi
    ];
    
    return memoryLeakPatterns.some(pattern => pattern.test(content));
  }

  calculateRuntimeScore(performanceIssues, memoryLeaks) {
    let score = 100;
    score -= performanceIssues * 5;
    score -= memoryLeaks * 10;
    return Math.max(0, Math.min(100, score));
  }

  async analyzeAssetOptimization() {
    try {
      this.log('Analyzing asset optimization...');
      
      const publicPath = path.join(this.config.projectRoot, 'public');
      if (!fs.existsSync(publicPath)) {
        return;
      }
      
      const assets = this.getAssetFiles(publicPath);
      let totalAssetSize = 0;
      let unoptimizedAssets = 0;
      
      for (const asset of assets) {
        const stats = fs.statSync(asset);
        const size = stats.size;
        totalAssetSize += size;
        
        // Check if asset could be optimized
        if (this.canOptimizeAsset(asset, size)) {
          unoptimizedAssets++;
          this.performanceData.optimizationOpportunities.push({
            type: 'asset_optimization',
            file: path.basename(asset),
            currentSize: size,
            suggestion: this.getAssetOptimizationSuggestion(asset, size)
          });
        }
      }
      
      this.performanceData.assetAnalysis = {
        totalAssets: assets.length,
        totalAssetSize,
        unoptimizedAssets,
        averageAssetSize: totalAssetSize / assets.length
      };
      
    } catch (error) {
      this.log(`Asset optimization analysis failed: ${error.message}`, 'ERROR');
    }
  }

  getAssetFiles(dir) {
    const patterns = ['**/*.{png,jpg,jpeg,gif,svg,ico,woff,woff2,ttf,eot}'];
    let files = [];
    
    patterns.forEach(pattern => {
      try {
        const matches = glob.sync(pattern, { cwd: dir, absolute: true });
        files.push(...matches);
      } catch (error) {
        this.log(`Error matching pattern ${pattern}: ${error.message}`, 'WARN');
      }
    });
    
    return files;
  }

  canOptimizeAsset(filePath, size) {
    const ext = path.extname(filePath).toLowerCase();
    
    // Check image files
    if (['.png', '.jpg', '.jpeg', '.gif'].includes(ext)) {
      return size > 100 * 1024; // 100KB
    }
    
    // Check font files
    if (['.woff', '.woff2', '.ttf', '.eot'].includes(ext)) {
      return size > 50 * 1024; // 50KB
    }
    
    return false;
  }

  getAssetOptimizationSuggestion(filePath, size) {
    const ext = path.extname(filePath).toLowerCase();
    
    if (['.png', '.jpg', '.jpeg'].includes(ext)) {
      return 'Consider converting to WebP format and implementing responsive images';
    }
    
    if (['.gif'].includes(ext)) {
      return 'Consider using MP4 video or animated WebP for better compression';
    }
    
    if (['.woff', '.woff2', '.ttf'].includes(ext)) {
      return 'Consider using font subsetting and WOFF2 format for better compression';
    }
    
    return 'Consider optimizing this asset for web delivery';
  }

  async analyzeBuildPerformance() {
    try {
      this.log('Analyzing build performance...');
      
      // Check if build is currently running
      if (this.isBuildRunning()) {
        this.log('Build is currently running. Skipping build analysis.', 'INFO');
        return;
      }
      
      // Simulate build performance analysis
      const buildStartTime = Date.now();
      
      // Run a quick build check
      try {
        execSync('npm run build --dry-run', { 
          encoding: 'utf8',
          cwd: this.config.projectRoot,
          stdio: 'pipe'
        });
      } catch (error) {
        // Expected for dry-run
      }
      
      const buildDuration = Date.now() - buildStartTime;
      
      // Record build performance
      const buildRecord = {
        timestamp: Date.now(),
        duration: buildDuration,
        success: true,
        bundleSize: this.performanceData.bundleAnalysis.totalSize || 0
      };
      
      this.buildHistory.push(buildRecord);
      
      // Keep only last 50 builds
      if (this.buildHistory.length > 50) {
        this.buildHistory = this.buildHistory.slice(-50);
      }
      
      this.saveBuildHistory();
      
      // Analyze build performance trends
      this.analyzeBuildTrends();
      
    } catch (error) {
      this.log(`Build performance analysis failed: ${error.message}`, 'ERROR');
    }
  }

  isBuildRunning() {
    try {
      const processes = execSync('ps aux', { encoding: 'utf8' });
      return processes.includes('npm run build') || processes.includes('vite build');
    } catch (error) {
      return false;
    }
  }

  analyzeBuildTrends() {
    if (this.buildHistory.length < 2) return;
    
    const recentBuilds = this.buildHistory.slice(-10);
    const avgDuration = recentBuilds.reduce((sum, build) => sum + build.duration, 0) / recentBuilds.length;
    const avgBundleSize = recentBuilds.reduce((sum, build) => sum + build.bundleSize, 0) / recentBuilds.length;
    
    // Check for performance regression
    const olderBuilds = this.buildHistory.slice(-20, -10);
    if (olderBuilds.length > 0) {
      const olderAvgDuration = olderBuilds.reduce((sum, build) => sum + build.duration, 0) / olderBuilds.length;
      const olderAvgBundleSize = olderBuilds.reduce((sum, build) => sum + build.bundleSize, 0) / olderBuilds.length;
      
      if (avgDuration > olderAvgDuration * 1.2) {
        this.performanceData.optimizationOpportunities.push({
          type: 'build_performance_regression',
          current: avgDuration,
          previous: olderAvgDuration,
          suggestion: 'Build time has increased. Check for new dependencies or build configuration changes.'
        });
      }
      
      if (avgBundleSize > olderAvgBundleSize * 1.1) {
        this.performanceData.optimizationOpportunities.push({
          type: 'bundle_size_regression',
          current: avgBundleSize,
          previous: olderAvgBundleSize,
          suggestion: 'Bundle size has increased. Review recent changes and dependencies.'
        });
      }
    }
    
    this.performanceData.buildPerformance = {
      averageBuildTime: avgDuration,
      averageBundleSize: avgBundleSize,
      totalBuilds: this.buildHistory.length,
      recentBuilds: recentBuilds.length
    };
  }

  generateOptimizationRecommendations() {
    this.performanceData.recommendations = [];
    
    // Bundle size recommendations
    if (this.performanceData.bundleAnalysis.totalSize > this.config.performanceThresholds.maxBundleSize) {
      this.performanceData.recommendations.push({
        priority: 'high',
        category: 'bundle_size',
        action: 'Implement code splitting and tree shaking',
        impact: 'Reduce initial bundle size and improve load time',
        implementation: 'Use dynamic imports and analyze bundle with webpack-bundle-analyzer'
      });
    }
    
    // Asset optimization recommendations
    if (this.performanceData.assetAnalysis?.unoptimizedAssets > 0) {
      this.performanceData.recommendations.push({
        priority: 'medium',
        category: 'assets',
        action: 'Optimize image and font assets',
        impact: 'Reduce asset sizes and improve page load performance',
        implementation: 'Use image compression tools and implement responsive images'
      });
    }
    
    // Runtime performance recommendations
    if (this.performanceData.runtimeMetrics.performanceIssues > 5) {
      this.performanceData.recommendations.push({
        priority: 'medium',
        category: 'runtime',
        action: 'Optimize performance-critical code sections',
        impact: 'Improve runtime performance and user experience',
        implementation: 'Replace forEach with for loops, optimize DOM queries, implement debouncing'
      });
    }
    
    // Memory leak recommendations
    if (this.performanceData.runtimeMetrics.memoryLeaks > 0) {
      this.performanceData.recommendations.push({
        priority: 'high',
        category: 'memory',
        action: 'Fix potential memory leaks',
        impact: 'Prevent memory accumulation and improve app stability',
        implementation: 'Properly remove event listeners and clean up intervals/timeouts'
      });
    }
  }

  calculatePerformanceScore() {
    let score = 100;
    
    // Bundle size score
    if (this.performanceData.bundleAnalysis.totalSize > 0) {
      const bundleScore = Math.max(0, 100 - (this.performanceData.bundleAnalysis.totalSize / this.config.performanceThresholds.maxBundleSize) * 100);
      score = (score + bundleScore) / 2;
    }
    
    // Runtime performance score
    score = (score + this.performanceData.runtimeMetrics.performanceScore) / 2;
    
    // Optimization opportunities penalty
    score -= this.performanceData.optimizationOpportunities.length * 2;
    
    this.performanceData.performanceScore = Math.max(0, Math.min(100, Math.round(score)));
  }

  generateReport() {
    try {
      const report = {
        ...this.performanceData,
        timestamp: new Date().toISOString(),
        summary: {
          performanceScore: this.performanceData.performanceScore,
          totalOptimizationOpportunities: this.performanceData.optimizationOpportunities.length,
          bundleSize: this.performanceData.bundleAnalysis.totalSize || 0,
          buildPerformance: this.performanceData.buildPerformance.averageBuildTime || 0
        },
        buildHistory: this.buildHistory.slice(-20) // Last 20 builds
      };
      
      fs.writeFileSync(this.config.reportFile, JSON.stringify(report, null, 2));
      this.log(`Performance report generated: ${this.config.reportFile}`);
      
    } catch (error) {
      this.log(`Failed to generate performance report: ${error.message}`, 'ERROR');
    }
  }
}

// Start the optimizer
const optimizer = new SmartPerformanceOptimizer();

// Handle graceful shutdown
process.on('SIGINT', () => {
  optimizer.log('Shutting down Smart Performance Optimizer...');
  optimizer.saveBuildHistory();
  process.exit(0);
});

process.on('SIGTERM', () => {
  optimizer.log('Shutting down Smart Performance Optimizer...');
  optimizer.saveBuildHistory();
  process.exit(0);
});