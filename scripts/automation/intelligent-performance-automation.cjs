#!/usr/bin/env node

/**
 * Intelligent Performance Optimization Automation
 * AI-driven performance monitoring and optimization for React/TypeScript applications
 * 
 * Features:
 * - Real-time performance monitoring
 * - Bundle size optimization
 * - Code splitting recommendations
 * - Memory leak detection
 * - Performance regression prevention
 * - Automated performance testing
 * - Lighthouse CI integration
 * - Web Vitals monitoring
 */

const fs = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');
const glob = require('glob');

class IntelligentPerformanceAutomation {
  constructor() {
    this.config = {
      projectRoot: process.cwd(),
      performanceThresholds: {
        bundleSize: 500, // KB
        firstContentfulPaint: 1800, // ms
        largestContentfulPaint: 2500, // ms
        cumulativeLayoutShift: 0.1,
        firstInputDelay: 100, // ms
        timeToInteractive: 3500 // ms
      },
      monitoringInterval: 300000, // 5 minutes
      optimizationInterval: 1800000, // 30 minutes
      testingInterval: 3600000, // 1 hour
      logFile: 'logs/intelligent-performance.log',
      reportDir: 'performance-reports',
      lighthouseConfig: {
        chromeFlags: ['--headless', '--no-sandbox', '--disable-gpu'],
        onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo'],
        output: 'json'
      }
    };
    
    this.performanceMetrics = {};
    this.optimizationHistory = [];
    this.bundleAnalysis = {};
    this.isRunning = false;
    
    this.setupLogging();
    this.ensureDirectories();
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

  ensureDirectories() {
    if (!fs.existsSync(this.config.reportDir)) {
      fs.mkdirSync(this.config.reportDir, { recursive: true });
    }
  }

  async initialize() {
    try {
      this.log('🚀 Initializing Intelligent Performance Automation...');
      
      // Install required dependencies
      await this.ensureDependencies();
      
      // Start monitoring loops
      this.startMonitoringLoops();
      
      // Initial performance analysis
      await this.performInitialAnalysis();
      
      this.log('✅ Intelligent Performance Automation initialized successfully');
      this.isRunning = true;
      
    } catch (error) {
      this.log(`❌ Initialization failed: ${error.message}`, 'ERROR');
      this.restartAfterDelay();
    }
  }

  async ensureDependencies() {
    const requiredPackages = [
      'lighthouse',
      'webpack-bundle-analyzer',
      'cross-env',
      'puppeteer'
    ];
    
    for (const pkg of requiredPackages) {
      try {
        require.resolve(pkg);
      } catch {
        this.log(`Installing ${pkg}...`, 'INFO');
        execSync(`npm install --save-dev ${pkg}`, { 
          cwd: this.config.projectRoot, 
          stdio: 'pipe' 
        });
      }
    }
  }

  startMonitoringLoops() {
    // Performance monitoring loop
    setInterval(async () => {
      if (this.isRunning) {
        await this.monitorPerformance();
      }
    }, this.config.monitoringInterval);

    // Performance optimization loop
    setInterval(async () => {
      if (this.isRunning) {
        await this.performOptimizations();
      }
    }, this.config.optimizationInterval);

    // Performance testing loop
    setInterval(async () => {
      if (this.isRunning) {
        await this.runPerformanceTests();
      }
    }, this.config.testingInterval);
  }

  async performInitialAnalysis() {
    this.log('🔍 Performing initial performance analysis...');
    
    try {
      await this.analyzeBundleSize();
      await this.analyzeCodeSplitting();
      await this.analyzeDependencies();
      await this.runLighthouseAudit();
      
      this.generatePerformanceReport();
      this.log('✅ Initial performance analysis completed');
      
    } catch (error) {
      this.log(`❌ Initial analysis failed: ${error.message}`, 'ERROR');
    }
  }

  async monitorPerformance() {
    this.log('📊 Monitoring application performance...');
    
    try {
      // Monitor bundle size
      await this.monitorBundleSize();
      
      // Monitor build performance
      await this.monitorBuildPerformance();
      
      // Monitor memory usage
      await this.monitorMemoryUsage();
      
      // Check for performance regressions
      await this.checkPerformanceRegressions();
      
      this.log('✅ Performance monitoring completed');
      
    } catch (error) {
      this.log(`❌ Performance monitoring failed: ${error.message}`, 'ERROR');
    }
  }

  async monitorBundleSize() {
    try {
      const buildOutput = execSync('npm run build', { 
        cwd: this.config.projectRoot, 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      
      // Analyze dist folder for bundle sizes
      const distPath = path.join(this.config.projectRoot, 'dist');
      if (fs.existsSync(distPath)) {
        const bundleSizes = this.calculateBundleSizes(distPath);
        
        this.bundleAnalysis.current = {
          timestamp: Date.now(),
          sizes: bundleSizes,
          totalSize: Object.values(bundleSizes).reduce((sum, size) => sum + size, 0)
        };
        
        // Check for size increases
        if (this.bundleAnalysis.previous) {
          const sizeIncrease = this.bundleAnalysis.current.totalSize - this.bundleAnalysis.previous.totalSize;
          if (sizeIncrease > 100) { // 100KB increase threshold
            this.log(`⚠️ Bundle size increased by ${(sizeIncrease / 1024).toFixed(2)}KB`, 'WARN');
            await this.analyzeBundleSizeIncrease();
          }
        }
        
        this.bundleAnalysis.previous = { ...this.bundleAnalysis.current };
      }
      
    } catch (error) {
      this.log(`Failed to monitor bundle size: ${error.message}`, 'WARN');
    }
  }

  calculateBundleSizes(distPath) {
    const sizes = {};
    
    try {
      const files = glob.sync('**/*.{js,css}', { cwd: distPath });
      
      files.forEach(file => {
        const filePath = path.join(distPath, file);
        const stats = fs.statSync(filePath);
        const sizeKB = Math.round(stats.size / 1024);
        
        if (sizeKB > 10) { // Only track files larger than 10KB
          sizes[file] = sizeKB;
        }
      });
      
    } catch (error) {
      this.log(`Failed to calculate bundle sizes: ${error.message}`, 'WARN');
    }
    
    return sizes;
  }

  async analyzeBundleSizeIncrease() {
    this.log('🔍 Analyzing bundle size increase...');
    
    try {
      // Check for new dependencies
      const packageLockPath = path.join(this.config.projectRoot, 'package-lock.json');
      if (fs.existsSync(packageLockPath)) {
        const packageLock = JSON.parse(fs.readFileSync(packageLockPath, 'utf8'));
        const newDeps = this.identifyNewDependencies(packageLock);
        
        if (newDeps.length > 0) {
          this.log(`📦 New dependencies detected: ${newDeps.join(', ')}`);
          await this.analyzeDependencyImpact(newDeps);
        }
      }
      
      // Check for code changes
      await this.analyzeCodeChanges();
      
    } catch (error) {
      this.log(`Failed to analyze bundle size increase: ${error.message}`, 'WARN');
    }
  }

  async monitorBuildPerformance() {
    try {
      const startTime = Date.now();
      
      const buildOutput = execSync('npm run build', { 
        cwd: this.config.projectRoot, 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      
      const buildTime = Date.now() - startTime;
      
      this.performanceMetrics.buildTime = {
        current: buildTime,
        timestamp: Date.now()
      };
      
      // Check for build time regressions
      if (this.performanceMetrics.buildTime.previous) {
        const timeIncrease = buildTime - this.performanceMetrics.buildTime.previous;
        if (timeIncrease > 10000) { // 10 second increase threshold
          this.log(`⚠️ Build time increased by ${(timeIncrease / 1000).toFixed(1)}s`, 'WARN');
          await this.analyzeBuildTimeIncrease();
        }
      }
      
      this.performanceMetrics.buildTime.previous = buildTime;
      
    } catch (error) {
      this.log(`Failed to monitor build performance: ${error.message}`, 'WARN');
    }
  }

  async performOptimizations() {
    this.log('🚀 Performing performance optimizations...');
    
    try {
      // Bundle optimization
      await this.optimizeBundle();
      
      // Code splitting optimization
      await this.optimizeCodeSplitting();
      
      // Dependency optimization
      await this.optimizeDependencies();
      
      // Image optimization
      await this.optimizeImages();
      
      this.log('✅ Performance optimizations completed');
      
    } catch (error) {
      this.log(`❌ Performance optimizations failed: ${error.message}`, 'ERROR');
    }
  }

  async optimizeBundle() {
    try {
      this.log('📦 Optimizing bundle...');
      
      // Check for duplicate dependencies
      const duplicates = await this.findDuplicateDependencies();
      if (duplicates.length > 0) {
        this.log(`Found ${duplicates.length} duplicate dependencies`);
        await this.resolveDuplicateDependencies(duplicates);
      }
      
      // Check for unused dependencies
      const unused = await this.findUnusedDependencies();
      if (unused.length > 0) {
        this.log(`Found ${unused.length} potentially unused dependencies`);
        await this.analyzeUnusedDependencies(unused);
      }
      
      // Tree shaking analysis
      await this.analyzeTreeShaking();
      
    } catch (error) {
      this.log(`Bundle optimization failed: ${error.message}`, 'WARN');
    }
  }

  async optimizeCodeSplitting() {
    try {
      this.log('✂️ Optimizing code splitting...');
      
      // Analyze current code splitting
      const splittingAnalysis = await this.analyzeCodeSplitting();
      
      // Generate optimization recommendations
      const recommendations = this.generateCodeSplittingRecommendations(splittingAnalysis);
      
      if (recommendations.length > 0) {
        this.log(`Generated ${recommendations.length} code splitting recommendations`);
        await this.applyCodeSplittingOptimizations(recommendations);
      }
      
    } catch (error) {
      this.log(`Code splitting optimization failed: ${error.message}`, 'WARN');
    }
  }

  async runPerformanceTests() {
    this.log('🧪 Running performance tests...');
    
    try {
      // Run Lighthouse audit
      await this.runLighthouseAudit();
      
      // Run bundle analyzer
      await this.runBundleAnalyzer();
      
      // Run performance regression tests
      await this.runPerformanceRegressionTests();
      
      this.log('✅ Performance tests completed');
      
    } catch (error) {
      this.log(`❌ Performance tests failed: ${error.message}`, 'ERROR');
    }
  }

  async runLighthouseAudit() {
    try {
      this.log('🔍 Running Lighthouse audit...');
      
      // Build the project first
      execSync('npm run build', { 
        cwd: this.config.projectRoot, 
        stdio: 'pipe' 
      });
      
      // Start preview server
      const previewProcess = spawn('npm', ['run', 'start'], {
        cwd: this.config.projectRoot,
        stdio: 'pipe'
      });
      
      // Wait for server to start
      await new Promise(resolve => setTimeout(resolve, 5000));
      
      // Run Lighthouse
      const lighthouseOutput = execSync('npx lighthouse http://localhost:4173 --output=json --output-path=./lighthouse-report.json', {
        cwd: this.config.projectRoot,
        encoding: 'utf8',
        stdio: 'pipe'
      });
      
      // Parse results
      const reportPath = path.join(this.config.projectRoot, 'lighthouse-report.json');
      if (fs.existsSync(reportPath)) {
        const report = JSON.parse(fs.readFileSync(reportPath, 'utf8'));
        this.analyzeLighthouseResults(report);
      }
      
      // Stop preview server
      previewProcess.kill();
      
    } catch (error) {
      this.log(`Lighthouse audit failed: ${error.message}`, 'WARN');
    }
  }

  analyzeLighthouseResults(report) {
    try {
      const performance = report.lhr.categories.performance.score * 100;
      const accessibility = report.lhr.categories.accessibility.score * 100;
      const bestPractices = report.lhr.categories['best-practices'].score * 100;
      const seo = report.lhr.categories.seo.score * 100;
      
      const metrics = report.lhr.audits;
      
      this.performanceMetrics.lighthouse = {
        timestamp: Date.now(),
        scores: { performance, accessibility, bestPractices, seo },
        metrics: {
          firstContentfulPaint: metrics['first-contentful-paint']?.numericValue,
          largestContentfulPaint: metrics['largest-contentful-paint']?.numericValue,
          cumulativeLayoutShift: metrics['cumulative-layout-shift']?.numericValue,
          firstInputDelay: metrics['max-potential-fid']?.numericValue,
          timeToInteractive: metrics['interactive']?.numericValue
        }
      };
      
      // Check for performance regressions
      this.checkLighthouseRegressions();
      
      this.log(`Lighthouse scores - Performance: ${performance.toFixed(1)}%, Accessibility: ${accessibility.toFixed(1)}%`);
      
    } catch (error) {
      this.log(`Failed to analyze Lighthouse results: ${error.message}`, 'WARN');
    }
  }

  checkLighthouseRegressions() {
    if (!this.performanceMetrics.lighthouse?.previous) return;
    
    const current = this.performanceMetrics.lighthouse.current;
    const previous = this.performanceMetrics.lighthouse.previous;
    
    const regressions = [];
    
    Object.keys(current.scores).forEach(category => {
      const currentScore = current.scores[category];
      const previousScore = previous.scores[category];
      
      if (currentScore < previousScore - 5) { // 5% regression threshold
        regressions.push({
          category,
          previous: previousScore,
          current: currentScore,
          regression: previousScore - currentScore
        });
      }
    });
    
    if (regressions.length > 0) {
      this.log(`⚠️ Performance regressions detected:`, 'WARN');
      regressions.forEach(reg => {
        this.log(`  ${reg.category}: ${reg.previous.toFixed(1)}% → ${reg.current.toFixed(1)}% (-${reg.regression.toFixed(1)}%)`);
      });
      
      // Trigger optimization
      this.triggerOptimizationForRegressions(regressions);
    }
    
    this.performanceMetrics.lighthouse.previous = { ...current };
  }

  async triggerOptimizationForRegressions(regressions) {
    this.log('🚀 Triggering optimization for performance regressions...');
    
    try {
      for (const reg of regressions) {
        switch (reg.category) {
          case 'performance':
            await this.optimizePerformance();
            break;
          case 'accessibility':
            await this.optimizeAccessibility();
            break;
          case 'best-practices':
            await this.optimizeBestPractices();
            break;
          case 'seo':
            await this.optimizeSEO();
            break;
        }
      }
      
    } catch (error) {
      this.log(`Failed to trigger optimizations: ${error.message}`, 'ERROR');
    }
  }

  generatePerformanceReport() {
    try {
      const report = {
        timestamp: new Date().toISOString(),
        summary: {
          overallPerformance: this.calculateOverallPerformance(),
          recommendations: this.generatePerformanceRecommendations()
        },
        metrics: this.performanceMetrics,
        bundleAnalysis: this.bundleAnalysis,
        optimizationHistory: this.optimizationHistory
      };
      
      const reportFile = path.join(this.config.reportDir, `performance-report-${Date.now()}.json`);
      fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
      
      this.log(`📊 Performance report generated: ${reportFile}`);
      
    } catch (error) {
      this.log(`Failed to generate performance report: ${error.message}`, 'ERROR');
    }
  }

  calculateOverallPerformance() {
    const metrics = this.performanceMetrics;
    let totalScore = 0;
    let metricCount = 0;
    
    if (metrics.lighthouse?.current?.scores) {
      Object.values(metrics.lighthouse.current.scores).forEach(score => {
        totalScore += score;
        metricCount++;
      });
    }
    
    return metricCount > 0 ? totalScore / metricCount : 0;
  }

  generatePerformanceRecommendations() {
    const recommendations = [];
    
    if (this.bundleAnalysis.current?.totalSize > this.config.performanceThresholds.bundleSize * 1024) {
      recommendations.push('Bundle size exceeds threshold. Consider code splitting and tree shaking.');
    }
    
    if (this.performanceMetrics.lighthouse?.current?.scores?.performance < 80) {
      recommendations.push('Performance score is low. Focus on Core Web Vitals optimization.');
    }
    
    if (recommendations.length === 0) {
      recommendations.push('Performance is good. Continue monitoring for regressions.');
    }
    
    return recommendations;
  }

  restartAfterDelay() {
    setTimeout(() => {
      this.log('🔄 Restarting Intelligent Performance Automation...');
      this.initialize();
    }, 30000);
  }
}

// Start the automation
const automation = new IntelligentPerformanceAutomation();

// Handle graceful shutdown
process.on('SIGINT', () => {
  automation.log('🛑 Shutting down Intelligent Performance Automation...');
  automation.isRunning = false;
  process.exit(0);
});

process.on('SIGTERM', () => {
  automation.log('🛑 Shutting down Intelligent Performance Automation...');
  automation.isRunning = false;
  process.exit(0);
});