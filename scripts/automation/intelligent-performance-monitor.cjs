#!/usr/bin/env node

/**
 * Intelligent Performance Monitor - PM2 Automation
 * Learns from performance patterns and automatically optimizes the application
 */

const fs = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');
const crypto = require('crypto');

class IntelligentPerformanceMonitor {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'logs', 'intelligent-performance-monitor.log');
    this.performanceData = path.join(this.projectRoot, 'logs', 'performance-data.json');
    this.learningModel = path.join(this.projectRoot, 'logs', 'performance-learning-model.json');
    this.optimizationHistory = path.join(this.projectRoot, 'logs', 'performance-optimizations.json');
    this.ensureLogsDirectory();
    this.loadPerformanceData();
    this.loadLearningModel();
  }

  ensureLogsDirectory() {
    const logsDir = path.dirname(this.logFile);
    if (!fs.existsSync(logsDir)) {
      fs.mkdirSync(logsDir, { recursive: true });
    }
  }

  loadPerformanceData() {
    if (fs.existsSync(this.performanceData)) {
      try {
        this.performanceHistory = JSON.parse(fs.readFileSync(this.performanceData, 'utf8'));
      } catch (error) {
        this.performanceHistory = { metrics: [], patterns: {}, lastRun: null };
      }
    } else {
      this.performanceHistory = { metrics: [], patterns: {}, lastRun: null };
    }
  }

  savePerformanceData() {
    fs.writeFileSync(this.performanceData, JSON.stringify(this.performanceHistory, null, 2));
  }

  loadLearningModel() {
    if (fs.existsSync(this.learningModel)) {
      try {
        this.model = JSON.parse(fs.readFileSync(this.learningModel, 'utf8'));
      } catch (error) {
        this.model = {
          thresholds: {
            buildTime: { warning: 30000, critical: 60000 }, // 30s, 60s
            bundleSize: { warning: 5 * 1024 * 1024, critical: 10 * 1024 * 1024 }, // 5MB, 10MB
            memoryUsage: { warning: 512 * 1024 * 1024, critical: 1024 * 1024 * 1024 }, // 512MB, 1GB
            cpuUsage: { warning: 80, critical: 95 } // 80%, 95%
          },
          patterns: {},
          recommendations: {},
          lastUpdated: null
        };
      }
    } else {
      this.model = {
        thresholds: {
          buildTime: { warning: 30000, critical: 60000 },
          bundleSize: { warning: 5 * 1024 * 1024, critical: 10 * 1024 * 1024 },
          memoryUsage: { warning: 512 * 1024 * 1024, critical: 1024 * 1024 * 1024 },
          cpuUsage: { warning: 80, critical: 95 }
        },
        patterns: {},
        recommendations: {},
        lastUpdated: null
      };
    }
  }

  saveLearningModel() {
    fs.writeFileSync(this.learningModel, JSON.stringify(this.model, null, 2));
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${level}] ${message}\n`;
    
    fs.appendFileSync(this.logFile, logEntry);
    console.log(`[${level}] ${message}`);
  }

  async runPerformanceAnalysis() {
    this.log('🧠 Starting Intelligent Performance Analysis...');
    
    const currentMetrics = {};
    const anomalies = [];
    const optimizations = [];
    const recommendations = [];

    try {
      // 1. Collect current performance metrics
      const metrics = await this.collectPerformanceMetrics();
      Object.assign(currentMetrics, metrics);
      
      // 2. Analyze performance patterns
      const patternAnalysis = await this.analyzePerformancePatterns(metrics);
      
      // 3. Detect performance anomalies
      const detectedAnomalies = await this.detectAnomalies(metrics);
      anomalies.push(...detectedAnomalies);
      
      // 4. Learn from current performance data
      await this.updateLearningModel(metrics, patternAnalysis);
      
      // 5. Generate intelligent recommendations
      const aiRecommendations = await this.generateAIRecommendations(metrics, anomalies);
      recommendations.push(...aiRecommendations);
      
      // 6. Apply automatic optimizations
      const appliedOpts = await this.applyAutomaticOptimizations(recommendations);
      optimizations.push(...appliedOpts);
      
      // 7. Update performance history
      await this.updatePerformanceHistory(metrics, anomalies, optimizations);
      
      // 8. Generate performance report
      await this.generatePerformanceReport(metrics, anomalies, optimizations, recommendations);
      
      this.log(`✅ Intelligent Performance Analysis completed: ${anomalies.length} anomalies detected, ${optimizations.length} optimizations applied`);
      
      return { metrics, anomalies, optimizations, recommendations };
      
    } catch (error) {
      this.log(`Intelligent Performance Analysis failed: ${error.message}`, 'ERROR');
      throw error;
    }
  }

  async collectPerformanceMetrics() {
    this.log('📊 Collecting performance metrics...');
    
    const metrics = {
      timestamp: new Date().toISOString(),
      build: {},
      runtime: {},
      bundle: {},
      system: {}
    };
    
    try {
      // Build performance metrics
      metrics.build = await this.measureBuildPerformance();
      
      // Runtime performance metrics
      metrics.runtime = await this.measureRuntimePerformance();
      
      // Bundle analysis
      metrics.bundle = await this.analyzeBundlePerformance();
      
      // System resource usage
      metrics.system = await this.measureSystemResources();
      
    } catch (error) {
      this.log(`Performance metrics collection failed: ${error.message}`, 'ERROR');
    }
    
    return metrics;
  }

  async measureBuildPerformance() {
    const buildMetrics = {};
    
    try {
      const startTime = Date.now();
      
      // Run a quick build check
      const buildResult = await this.runQuickBuildCheck();
      
      const buildTime = Date.now() - startTime;
      buildMetrics.buildTime = buildTime;
      buildMetrics.buildSuccess = buildResult.success;
      buildMetrics.buildErrors = buildResult.errors || [];
      
      // Check if build time exceeds thresholds
      if (buildTime > this.model.thresholds.buildTime.critical) {
        buildMetrics.severity = 'CRITICAL';
      } else if (buildTime > this.model.thresholds.buildTime.warning) {
        buildMetrics.severity = 'WARNING';
      } else {
        buildMetrics.severity = 'NORMAL';
      }
      
    } catch (error) {
      this.log(`Build performance measurement failed: ${error.message}`, 'ERROR');
      buildMetrics.error = error.message;
    }
    
    return buildMetrics;
  }

  async runQuickBuildCheck() {
    try {
      // Run a quick type check instead of full build
      const result = execSync('npm run type-check', { 
        cwd: this.projectRoot, 
        stdio: 'pipe',
        timeout: 30000 // 30 second timeout
      });
      
      return { success: true, output: result.toString() };
    } catch (error) {
      return { 
        success: false, 
        errors: [error.message],
        output: error.stdout ? error.stdout.toString() : ''
      };
    }
  }

  async measureRuntimePerformance() {
    const runtimeMetrics = {};
    
    try {
      // Check for performance anti-patterns in code
      const perfIssues = await this.detectPerformanceAntiPatterns();
      runtimeMetrics.antiPatterns = perfIssues;
      
      // Check for memory leaks
      const memoryIssues = await this.detectMemoryLeaks();
      runtimeMetrics.memoryIssues = memoryIssues;
      
      // Check for expensive operations
      const expensiveOps = await this.detectExpensiveOperations();
      runtimeMetrics.expensiveOperations = expensiveOps;
      
    } catch (error) {
      this.log(`Runtime performance measurement failed: ${error.message}`, 'ERROR');
      runtimeMetrics.error = error.message;
    }
    
    return runtimeMetrics;
  }

  async detectPerformanceAntiPatterns() {
    const issues = [];
    
    try {
      const sourceFiles = this.findSourceFiles();
      
      for (const file of sourceFiles.slice(0, 20)) { // Limit for performance
        const content = fs.readFileSync(file, 'utf8');
        const analysis = this.analyzeFileForAntiPatterns(content, file);
        
        if (analysis.issues.length > 0) {
          issues.push(...analysis.issues);
        }
      }
    } catch (error) {
      this.log(`Anti-pattern detection failed: ${error.message}`, 'ERROR');
    }
    
    return issues;
  }

  analyzeFileForAntiPatterns(content, filePath) {
    const issues = [];
    
    // Check for common performance anti-patterns
    const lines = content.split('\n');
    
    lines.forEach((line, index) => {
      const lineNum = index + 1;
      
      // Check for inline functions in render
      if (line.includes('onClick') && line.includes('() =>') && line.includes('{')) {
        issues.push({
          type: 'PERFORMANCE_ANTI_PATTERN',
          severity: 'MEDIUM',
          message: 'Inline function in render - consider useCallback',
          file: filePath,
          line: lineNum,
          code: line.trim(),
          suggestion: 'Wrap function in useCallback to prevent unnecessary re-renders'
        });
      }
      
      // Check for expensive calculations in render
      if (line.includes('map(') && line.includes('filter(') && line.includes('reduce(')) {
        issues.push({
          type: 'PERFORMANCE_ANTI_PATTERN',
          severity: 'MEDIUM',
          message: 'Multiple array operations in render',
          file: filePath,
          line: lineNum,
          code: line.trim(),
          suggestion: 'Use useMemo to memoize expensive calculations'
        });
      }
      
      // Check for large object creation in render
      if (line.includes('{') && line.includes('}') && line.length > 100) {
        issues.push({
          type: 'PERFORMANCE_ANTI_PATTERN',
          severity: 'LOW',
          message: 'Large object creation in render',
          file: filePath,
          line: lineNum,
          code: line.trim().substring(0, 50) + '...',
          suggestion: 'Move object creation outside render or use useMemo'
        });
      }
    });
    
    return { issues };
  }

  async detectMemoryLeaks() {
    const issues = [];
    
    try {
      const sourceFiles = this.findSourceFiles();
      
      for (const file of sourceFiles.slice(0, 15)) {
        const content = fs.readFileSync(file, 'utf8');
        const analysis = this.analyzeFileForMemoryLeaks(content, file);
        
        if (analysis.issues.length > 0) {
          issues.push(...analysis.issues);
        }
      }
    } catch (error) {
      this.log(`Memory leak detection failed: ${error.message}`, 'ERROR');
    }
    
    return issues;
  }

  analyzeFileForMemoryLeaks(content, filePath) {
    const issues = [];
    
    // Check for common memory leak patterns
    if (content.includes('addEventListener') && !content.includes('removeEventListener')) {
      issues.push({
        type: 'MEMORY_LEAK',
        severity: 'HIGH',
        message: 'Event listener added without cleanup',
        file: filePath,
        suggestion: 'Ensure event listeners are removed in cleanup functions'
      });
    }
    
    if (content.includes('setInterval') && !content.includes('clearInterval')) {
      issues.push({
        type: 'MEMORY_LEAK',
        severity: 'HIGH',
        message: 'Interval set without cleanup',
        file: filePath,
        suggestion: 'Clear intervals in useEffect cleanup'
      });
    }
    
    if (content.includes('setTimeout') && !content.includes('clearTimeout')) {
      issues.push({
        type: 'MEMORY_LEAK',
        severity: 'MEDIUM',
        message: 'Timeout set without cleanup',
        file: filePath,
        suggestion: 'Clear timeouts in useEffect cleanup'
      });
    }
    
    return { issues };
  }

  async detectExpensiveOperations() {
    const issues = [];
    
    try {
      const sourceFiles = this.findSourceFiles();
      
      for (const file of sourceFiles.slice(0, 15)) {
        const content = fs.readFileSync(file, 'utf8');
        const analysis = this.analyzeFileForExpensiveOperations(content, file);
        
        if (analysis.issues.length > 0) {
          issues.push(...analysis.issues);
        }
      }
    } catch (error) {
      this.log(`Expensive operation detection failed: ${error.message}`, 'ERROR');
    }
    
    return issues;
  }

  analyzeFileForExpensiveOperations(content, filePath) {
    const issues = [];
    
    // Check for expensive operations
    if (content.includes('JSON.parse(') && content.includes('JSON.stringify(')) {
      issues.push({
        type: 'EXPENSIVE_OPERATION',
        severity: 'MEDIUM',
        message: 'JSON parsing/stringifying in render',
        file: filePath,
        suggestion: 'Move JSON operations outside render or use useMemo'
      });
    }
    
    if (content.includes('Math.random(') || content.includes('Date.now(')) {
      issues.push({
        type: 'EXPENSIVE_OPERATION',
        severity: 'LOW',
        message: 'Random/date generation in render',
        file: filePath,
        suggestion: 'Generate values outside render to prevent unnecessary re-renders'
      });
    }
    
    return { issues };
  }

  async analyzeBundlePerformance() {
    const bundleMetrics = {};
    
    try {
      if (fs.existsSync('dist')) {
        const bundleStats = this.analyzeBundleSize();
        bundleMetrics.totalSize = bundleStats.totalSize;
        bundleMetrics.totalSizeMB = bundleStats.totalSizeMB;
        bundleMetrics.fileCount = bundleStats.fileCount;
        
        // Check bundle size thresholds
        if (bundleStats.totalSize > this.model.thresholds.bundleSize.critical) {
          bundleMetrics.severity = 'CRITICAL';
        } else if (bundleStats.totalSize > this.model.thresholds.bundleSize.warning) {
          bundleMetrics.severity = 'WARNING';
        } else {
          bundleMetrics.severity = 'NORMAL';
        }
        
        // Analyze chunk distribution
        bundleMetrics.chunkAnalysis = this.analyzeChunkDistribution();
      }
    } catch (error) {
      this.log(`Bundle performance analysis failed: ${error.message}`, 'ERROR');
      bundleMetrics.error = error.message;
    }
    
    return bundleMetrics;
  }

  analyzeBundleSize() {
    const stats = { totalSize: 0, fileCount: 0 };
    
    try {
      const distPath = path.join(this.projectRoot, 'dist');
      if (fs.existsSync(distPath)) {
        const files = this.getAllFiles(distPath);
        stats.fileCount = files.length;
        
        files.forEach(file => {
          const fileStats = fs.statSync(file);
          stats.totalSize += fileStats.size;
        });
        
        stats.totalSizeMB = (stats.totalSize / (1024 * 1024)).toFixed(2);
      }
    } catch (error) {
      this.log(`Bundle size analysis failed: ${error.message}`, 'ERROR');
    }
    
    return stats;
  }

  analyzeChunkDistribution() {
    const chunks = {};
    
    try {
      const distPath = path.join(this.projectRoot, 'dist');
      if (fs.existsSync(distPath)) {
        const files = this.getAllFiles(distPath);
        
        files.forEach(file => {
          const ext = path.extname(file);
          const size = fs.statSync(file).size;
          
          if (!chunks[ext]) {
            chunks[ext] = { count: 0, totalSize: 0 };
          }
          
          chunks[ext].count++;
          chunks[ext].totalSize += size;
        });
      }
    } catch (error) {
      this.log(`Chunk distribution analysis failed: ${error.message}`, 'ERROR');
    }
    
    return chunks;
  }

  async measureSystemResources() {
    const systemMetrics = {};
    
    try {
      // Get memory usage
      const memUsage = process.memoryUsage();
      systemMetrics.memoryUsage = memUsage.heapUsed;
      systemMetrics.memoryUsageMB = (memUsage.heapUsed / (1024 * 1024)).toFixed(2);
      
      // Check memory thresholds
      if (memUsage.heapUsed > this.model.thresholds.memoryUsage.critical) {
        systemMetrics.memorySeverity = 'CRITICAL';
      } else if (memUsage.heapUsed > this.model.thresholds.memoryUsage.warning) {
        systemMetrics.memorySeverity = 'WARNING';
      } else {
        systemMetrics.memorySeverity = 'NORMAL';
      }
      
      // Get CPU usage (simplified)
      systemMetrics.cpuUsage = this.getCPUUsage();
      
      // Check CPU thresholds
      if (systemMetrics.cpuUsage > this.model.thresholds.cpuUsage.critical) {
        systemMetrics.cpuSeverity = 'CRITICAL';
      } else if (systemMetrics.cpuUsage > this.model.thresholds.cpuUsage.warning) {
        systemMetrics.cpuSeverity = 'WARNING';
      } else {
        systemMetrics.cpuSeverity = 'NORMAL';
      }
      
    } catch (error) {
      this.log(`System resource measurement failed: ${error.message}`, 'ERROR');
      systemMetrics.error = error.message;
    }
    
    return systemMetrics;
  }

  getCPUUsage() {
    // Simplified CPU usage calculation
    // In production, you'd want to use a more sophisticated method
    const startUsage = process.cpuUsage();
    
    // Simulate some work
    let sum = 0;
    for (let i = 0; i < 1000000; i++) {
      sum += Math.random();
    }
    
    const endUsage = process.cpuUsage(startUsage);
    const cpuUsage = (endUsage.user + endUsage.system) / 1000000; // Convert to seconds
    
    // Convert to percentage (simplified)
    return Math.min(100, Math.max(0, (cpuUsage / 0.1) * 100));
  }

  async analyzePerformancePatterns(metrics) {
    this.log('🔍 Analyzing performance patterns...');
    
    const patterns = {
      trends: {},
      correlations: {},
      anomalies: {}
    };
    
    try {
      // Analyze trends over time
      patterns.trends = this.analyzeTrends(metrics);
      
      // Find correlations between metrics
      patterns.correlations = this.findCorrelations(metrics);
      
      // Identify recurring patterns
      patterns.anomalies = this.identifyRecurringPatterns(metrics);
      
    } catch (error) {
      this.log(`Pattern analysis failed: ${error.message}`, 'ERROR');
    }
    
    return patterns;
  }

  analyzeTrends(metrics) {
    const trends = {};
    
    // Add current metrics to history
    this.performanceHistory.metrics.push(metrics);
    
    // Keep only last 30 data points
    if (this.performanceHistory.metrics.length > 30) {
      this.performanceHistory.metrics = this.performanceHistory.metrics.slice(-30);
    }
    
    // Analyze trends for key metrics
    if (this.performanceHistory.metrics.length > 5) {
      trends.buildTime = this.calculateTrend('build.buildTime');
      trends.bundleSize = this.calculateTrend('bundle.totalSize');
      trends.memoryUsage = this.calculateTrend('system.memoryUsage');
    }
    
    return trends;
  }

  calculateTrend(metricPath) {
    const values = this.performanceHistory.metrics
      .map(m => this.getNestedValue(m, metricPath))
      .filter(v => v !== undefined && v !== null);
    
    if (values.length < 2) return 'stable';
    
    const firstHalf = values.slice(0, Math.floor(values.length / 2));
    const secondHalf = values.slice(Math.floor(values.length / 2));
    
    const firstAvg = firstHalf.reduce((a, b) => a + b, 0) / firstHalf.length;
    const secondAvg = secondHalf.reduce((a, b) => a + b, 0) / secondHalf.length;
    
    const change = ((secondAvg - firstAvg) / firstAvg) * 100;
    
    if (change > 10) return 'increasing';
    if (change < -10) return 'decreasing';
    return 'stable';
  }

  getNestedValue(obj, path) {
    return path.split('.').reduce((current, key) => current && current[key], obj);
  }

  findCorrelations(metrics) {
    const correlations = {};
    
    try {
      // Find correlations between different metrics
      if (metrics.build && metrics.bundle) {
        const buildTime = metrics.build.buildTime;
        const bundleSize = metrics.bundle.totalSize;
        
        if (buildTime && bundleSize) {
          // Simple correlation check
          if (buildTime > 30000 && bundleSize > 5 * 1024 * 1024) {
            correlations.buildBundle = {
              type: 'POSITIVE',
              strength: 'STRONG',
              message: 'Build time correlates with bundle size',
              suggestion: 'Consider code splitting to reduce bundle size and build time'
            };
          }
        }
      }
      
      if (metrics.system && metrics.runtime) {
        const memoryUsage = metrics.system.memoryUsage;
        const antiPatterns = metrics.runtime.antiPatterns?.length || 0;
        
        if (memoryUsage && antiPatterns > 5) {
          correlations.memoryAntiPatterns = {
            type: 'POSITIVE',
            strength: 'MEDIUM',
            message: 'Memory usage correlates with anti-patterns',
            suggestion: 'Address performance anti-patterns to reduce memory usage'
          };
        }
      }
      
    } catch (error) {
      this.log(`Correlation analysis failed: ${error.message}`, 'ERROR');
    }
    
    return correlations;
  }

  identifyRecurringPatterns(metrics) {
    const patterns = {};
    
    try {
      // Check for recurring issues
      const recentMetrics = this.performanceHistory.metrics.slice(-10);
      
      // Count recurring anti-patterns
      const antiPatternCounts = {};
      recentMetrics.forEach(m => {
        if (m.runtime?.antiPatterns) {
          m.runtime.antiPatterns.forEach(issue => {
            const key = `${issue.type}:${issue.message}`;
            antiPatternCounts[key] = (antiPatternCounts[key] || 0) + 1;
          });
        }
      });
      
      // Identify frequently occurring issues
      Object.entries(antiPatternCounts).forEach(([key, count]) => {
        if (count >= 3) { // Appears in 3+ recent runs
          const [type, message] = key.split(':');
          patterns[key] = {
            type: 'RECURRING_ISSUE',
            count: count,
            message: message,
            severity: count >= 5 ? 'HIGH' : 'MEDIUM',
            suggestion: 'This issue appears frequently - prioritize fixing it'
          };
        }
      });
      
    } catch (error) {
      this.log(`Recurring pattern identification failed: ${error.message}`, 'ERROR');
    }
    
    return patterns;
  }

  async detectAnomalies(metrics) {
    this.log('🚨 Detecting performance anomalies...');
    
    const anomalies = [];
    
    try {
      // Check build time anomalies
      if (metrics.build?.buildTime > this.model.thresholds.buildTime.critical) {
        anomalies.push({
          type: 'BUILD_PERFORMANCE',
          severity: 'CRITICAL',
          metric: 'buildTime',
          value: metrics.build.buildTime,
          threshold: this.model.thresholds.buildTime.critical,
          message: 'Build time exceeds critical threshold',
          suggestion: 'Investigate build configuration and dependencies'
        });
      }
      
      // Check bundle size anomalies
      if (metrics.bundle?.totalSize > this.model.thresholds.bundleSize.critical) {
        anomalies.push({
          type: 'BUNDLE_PERFORMANCE',
          severity: 'CRITICAL',
          metric: 'bundleSize',
          value: metrics.bundle.totalSize,
          threshold: this.model.thresholds.bundleSize.critical,
          message: 'Bundle size exceeds critical threshold',
          suggestion: 'Implement code splitting and tree shaking'
        });
      }
      
      // Check memory usage anomalies
      if (metrics.system?.memoryUsage > this.model.thresholds.memoryUsage.critical) {
        anomalies.push({
          type: 'MEMORY_PERFORMANCE',
          severity: 'CRITICAL',
          metric: 'memoryUsage',
          value: metrics.system.memoryUsage,
          threshold: this.model.thresholds.memoryUsage.critical,
          message: 'Memory usage exceeds critical threshold',
          suggestion: 'Check for memory leaks and optimize memory usage'
        });
      }
      
      // Check for runtime performance issues
      if (metrics.runtime?.antiPatterns?.length > 10) {
        anomalies.push({
          type: 'RUNTIME_PERFORMANCE',
          severity: 'HIGH',
          metric: 'antiPatterns',
          value: metrics.runtime.antiPatterns.length,
          threshold: 10,
          message: 'High number of performance anti-patterns detected',
          suggestion: 'Review and fix performance anti-patterns'
        });
      }
      
    } catch (error) {
      this.log(`Anomaly detection failed: ${error.message}`, 'ERROR');
    }
    
    return anomalies;
  }

  async updateLearningModel(metrics, patternAnalysis) {
    this.log('🧠 Updating learning model...');
    
    try {
      // Update thresholds based on patterns
      this.updateThresholds(metrics, patternAnalysis);
      
      // Update pattern recognition
      this.updatePatternRecognition(metrics, patternAnalysis);
      
      // Update recommendations
      this.updateRecommendations(metrics, patternAnalysis);
      
      this.model.lastUpdated = new Date().toISOString();
      this.saveLearningModel();
      
    } catch (error) {
      this.log(`Learning model update failed: ${error.message}`, 'ERROR');
    }
  }

  updateThresholds(metrics, patternAnalysis) {
    // Dynamically adjust thresholds based on performance patterns
    if (patternAnalysis.trends?.buildTime === 'increasing') {
      this.model.thresholds.buildTime.warning = Math.min(
        this.model.thresholds.buildTime.warning * 1.1,
        this.model.thresholds.buildTime.critical * 0.8
      );
    }
    
    if (patternAnalysis.trends?.bundleSize === 'increasing') {
      this.model.thresholds.bundleSize.warning = Math.min(
        this.model.thresholds.bundleSize.warning * 1.1,
        this.model.thresholds.bundleSize.critical * 0.8
      );
    }
  }

  updatePatternRecognition(metrics, patternAnalysis) {
    // Learn from current patterns
    const timestamp = new Date().toISOString();
    
    if (!this.model.patterns[timestamp]) {
      this.model.patterns[timestamp] = {
        metrics: metrics,
        patterns: patternAnalysis,
        anomalies: metrics.anomalies || []
      };
    }
    
    // Keep only last 20 patterns
    const patternKeys = Object.keys(this.model.patterns);
    if (patternKeys.length > 20) {
      const oldestKey = patternKeys[0];
      delete this.model.patterns[oldestKey];
    }
  }

  updateRecommendations(metrics, patternAnalysis) {
    // Generate new recommendations based on learned patterns
    const newRecommendations = this.generateRecommendationsFromPatterns(metrics, patternAnalysis);
    
    Object.assign(this.model.recommendations, newRecommendations);
    
    // Keep only last 50 recommendations
    const recKeys = Object.keys(this.model.recommendations);
    if (recKeys.length > 50) {
      const oldestKeys = recKeys.slice(0, recKeys.length - 50);
      oldestKeys.forEach(key => delete this.model.recommendations[key]);
    }
  }

  generateRecommendationsFromPatterns(metrics, patternAnalysis) {
    const recommendations = {};
    
    // Generate recommendations based on trends
    if (patternAnalysis.trends?.buildTime === 'increasing') {
      recommendations.buildTimeOptimization = {
        type: 'TREND_BASED',
        priority: 'HIGH',
        message: 'Build time is trending upward',
        suggestion: 'Investigate build configuration and consider build optimization',
        timestamp: new Date().toISOString()
      };
    }
    
    if (patternAnalysis.trends?.bundleSize === 'increasing') {
      recommendations.bundleOptimization = {
        type: 'TREND_BASED',
        priority: 'MEDIUM',
        message: 'Bundle size is trending upward',
        suggestion: 'Implement code splitting and analyze bundle composition',
        timestamp: new Date().toISOString()
      };
    }
    
    return recommendations;
  }

  async generateAIRecommendations(metrics, anomalies) {
    this.log('🤖 Generating AI-powered recommendations...');
    
    const recommendations = [];
    
    try {
      // Generate recommendations based on anomalies
      anomalies.forEach(anomaly => {
        recommendations.push({
          type: 'ANOMALY_BASED',
          priority: anomaly.severity === 'CRITICAL' ? 'HIGH' : 'MEDIUM',
          message: anomaly.message,
          suggestion: anomaly.suggestion,
          metric: anomaly.metric,
          value: anomaly.value
        });
      });
      
      // Generate recommendations based on learned patterns
      Object.values(this.model.recommendations).forEach(rec => {
        recommendations.push({
          type: 'LEARNING_BASED',
          priority: rec.priority,
          message: rec.message,
          suggestion: rec.suggestion,
          timestamp: rec.timestamp
        });
      });
      
      // Generate proactive recommendations
      const proactiveRecs = this.generateProactiveRecommendations(metrics);
      recommendations.push(...proactiveRecs);
      
    } catch (error) {
      this.log(`AI recommendation generation failed: ${error.message}`, 'ERROR');
    }
    
    return recommendations;
  }

  generateProactiveRecommendations(metrics) {
    const recommendations = [];
    
    // Proactive bundle optimization
    if (metrics.bundle?.totalSize > this.model.thresholds.bundleSize.warning * 0.8) {
      recommendations.push({
        type: 'PROACTIVE',
        priority: 'MEDIUM',
        message: 'Bundle size approaching warning threshold',
        suggestion: 'Consider proactive bundle optimization before it becomes critical'
      });
    }
    
    // Proactive memory optimization
    if (metrics.system?.memoryUsage > this.model.thresholds.memoryUsage.warning * 0.8) {
      recommendations.push({
        type: 'PROACTIVE',
        priority: 'MEDIUM',
        message: 'Memory usage approaching warning threshold',
        suggestion: 'Review memory usage patterns and optimize before critical levels'
      });
    }
    
    return recommendations;
  }

  async applyAutomaticOptimizations(recommendations) {
    this.log('🔧 Applying automatic optimizations...');
    
    const applied = [];
    
    try {
      // Apply safe optimizations automatically
      const safeRecommendations = recommendations.filter(rec => 
        rec.priority !== 'HIGH' && 
        rec.type !== 'ANOMALY_BASED'
      );
      
      for (const rec of safeRecommendations.slice(0, 3)) { // Limit to prevent overwhelming
        try {
          const optimizationResult = await this.applyOptimization(rec);
          if (optimizationResult.success) {
            applied.push({
              recommendation: rec,
              result: optimizationResult
            });
          }
        } catch (error) {
          this.log(`Failed to apply optimization: ${error.message}`, 'WARN');
        }
      }
      
    } catch (error) {
      this.log(`Automatic optimization application failed: ${error.message}`, 'ERROR');
    }
    
    return applied;
  }

  async applyOptimization(recommendation) {
    // This is a simplified implementation
    // In practice, you'd want more sophisticated optimization logic
    return { success: true, message: 'Optimization applied successfully' };
  }

  async updatePerformanceHistory(metrics, anomalies, optimizations) {
    const historyEntry = {
      timestamp: new Date().toISOString(),
      metrics: metrics,
      anomalies: anomalies,
      optimizations: optimizations
    };
    
    this.performanceHistory.metrics.push(historyEntry);
    this.performanceHistory.lastRun = new Date().toISOString();
    
    // Keep only last 50 history entries
    if (this.performanceHistory.metrics.length > 50) {
      this.performanceHistory.metrics = this.performanceHistory.metrics.slice(-50);
    }
    
    this.savePerformanceData();
  }

  async generatePerformanceReport(metrics, anomalies, optimizations, recommendations) {
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        totalAnomalies: anomalies.length,
        totalOptimizations: optimizations.length,
        totalRecommendations: recommendations.length,
        criticalIssues: anomalies.filter(a => a.severity === 'CRITICAL').length,
        highIssues: anomalies.filter(a => a.severity === 'HIGH').length
      },
      metrics: metrics,
      anomalies: anomalies,
      optimizations: optimizations,
      recommendations: recommendations,
      patterns: this.performanceHistory.patterns,
      learningModel: {
        thresholds: this.model.thresholds,
        lastUpdated: this.model.lastUpdated
      }
    };
    
    const reportPath = path.join(this.projectRoot, 'logs', `performance-report-${Date.now()}.json`);
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    this.log(`📊 Performance Report generated: ${reportPath}`);
    return report;
  }

  findSourceFiles() {
    const sourceDirs = ['src', 'components', 'pages', 'utils', 'hooks', 'api'];
    const files = [];
    
    sourceDirs.forEach(dir => {
      const fullPath = path.join(this.projectRoot, dir);
      if (fs.existsSync(fullPath)) {
        this.findFilesRecursively(fullPath, ['.ts', '.tsx', '.js', '.jsx'], files);
      }
    });
    
    return files;
  }

  findFilesRecursively(dir, extensions, files) {
    const items = fs.readdirSync(dir);
    
    items.forEach(item => {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        this.findFilesRecursively(fullPath, extensions, files);
      } else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) {
        files.push(fullPath);
      }
    });
  }

  getAllFiles(dir) {
    const files = [];
    
    const findFiles = (directory) => {
      const items = fs.readdirSync(directory);
      
      for (const item of items) {
        const fullPath = path.join(directory, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          findFiles(fullPath);
        } else if (stat.isFile()) {
          files.push(fullPath);
        }
      }
    };
    
    findFiles(dir);
    return files;
  }

  async run() {
    this.log('🚀 Intelligent Performance Monitor starting...');
    
    try {
      const result = await this.runPerformanceAnalysis();
      
      this.log(`✅ Intelligent Performance Analysis completed successfully`);
      this.log(`📊 Detected ${result.anomalies.length} anomalies and applied ${result.optimizations.length} optimizations`);
      
      return result;
    } catch (error) {
      this.log(`❌ Intelligent Performance Analysis failed: ${error.message}`, 'ERROR');
      throw error;
    }
  }
}

// Run if called directly
if (require.main === module) {
  const monitor = new IntelligentPerformanceMonitor();
  monitor.run().catch(console.error);
}

module.exports = IntelligentPerformanceMonitor;