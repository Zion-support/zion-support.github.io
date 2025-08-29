#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class PredictivePerformanceMonitor {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'logs/pm2/predictive-performance-monitor.log');
    this.performanceReportFile = path.join(this.projectRoot, 'logs/pm2/predictive-performance-report.json');
    this.performanceDataFile = path.join(this.projectRoot, 'logs/pm2/performance-data.json');
    this.predictionModelFile = path.join(this.projectRoot, 'logs/pm2/performance-prediction-model.json');
    this.startTime = Date.now();
    
    this.performanceMetrics = {
      buildTime: 0,
      bundleSize: 0,
      loadTime: 0,
      runtimePerformance: 0,
      memoryUsage: 0,
      cpuUsage: 0,
      overallScore: 0
    };
    
    this.performanceData = this.loadPerformanceData();
    this.predictionModel = this.loadPredictionModel();
    this.performanceHistory = [];
    this.predictions = {};
    this.alertThresholds = {};
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}\n`;

    try {
      const logsDir = path.dirname(this.logFile);
      if (!fs.existsSync(logsDir)) {
        fs.mkdirSync(logsDir, { recursive: true });
      }
      fs.appendFileSync(this.logFile, logMessage);
    } catch (error) {
      // Silent fail for logging
    }
  }

  loadPerformanceData() {
    try {
      if (fs.existsSync(this.performanceDataFile)) {
        return JSON.parse(fs.readFileSync(this.performanceDataFile, 'utf8'));
      }
    } catch (error) {
      this.log('Failed to load performance data, starting fresh');
    }
    return {
      buildMetrics: [],
      runtimeMetrics: [],
      bundleMetrics: [],
      memoryMetrics: [],
      cpuMetrics: [],
      lastUpdated: Date.now()
    };
  }

  loadPredictionModel() {
    try {
      if (fs.existsSync(this.predictionModelFile)) {
        return JSON.parse(fs.readFileSync(this.predictionModelFile, 'utf8'));
      }
    } catch (error) {
      this.log('Failed to load prediction model, starting fresh');
    }
    return {
      buildTimeModel: {},
      bundleSizeModel: {},
      performanceModel: {},
      alertThresholds: {
        buildTime: 30000, // 30 seconds
        bundleSize: 5 * 1024 * 1024, // 5MB
        loadTime: 3000, // 3 seconds
        memoryUsage: 0.8, // 80%
        cpuUsage: 0.7 // 70%
      },
      lastUpdated: Date.now()
    };
  }

  savePerformanceData() {
    try {
      this.performanceData.lastUpdated = Date.now();
      fs.writeFileSync(this.performanceDataFile, JSON.stringify(this.performanceData, null, 2));
    } catch (error) {
      this.log('Failed to save performance data');
    }
  }

  savePredictionModel() {
    try {
      this.predictionModel.lastUpdated = Date.now();
      fs.writeFileSync(this.predictionModelFile, JSON.stringify(this.predictionModel, null, 2));
    } catch (error) {
      this.log('Failed to save prediction model');
    }
  }

  async monitorPerformance() {
    this.log('🚀 Starting Predictive Performance Monitoring...');
    
    try {
      // Collect current performance metrics
      const currentMetrics = await this.collectPerformanceMetrics();
      
      // Analyze performance trends
      const trendAnalysis = this.analyzePerformanceTrends(currentMetrics);
      
      // Generate performance predictions
      const predictions = this.generatePerformancePredictions(currentMetrics, trendAnalysis);
      
      // Check for performance alerts
      const alerts = this.checkPerformanceAlerts(currentMetrics, predictions);
      
      // Generate optimization recommendations
      const recommendations = this.generateOptimizationRecommendations(currentMetrics, predictions, alerts);
      
      // Update prediction model
      this.updatePredictionModel(currentMetrics, predictions);
      
      // Generate comprehensive report
      await this.generatePerformanceReport(currentMetrics, trendAnalysis, predictions, alerts, recommendations);
      
      this.log('✅ Predictive Performance Monitoring complete!');
      
    } catch (error) {
      this.log(`❌ Error during performance monitoring: ${error.message}`);
    }
  }

  async collectPerformanceMetrics() {
    const metrics = {
      timestamp: Date.now(),
      build: {},
      bundle: {},
      runtime: {},
      system: {}
    };

    try {
      // Collect build performance metrics
      metrics.build = await this.collectBuildMetrics();
      
      // Collect bundle analysis metrics
      metrics.bundle = await this.collectBundleMetrics();
      
      // Collect runtime performance metrics
      metrics.runtime = await this.collectRuntimeMetrics();
      
      // Collect system resource metrics
      metrics.system = await this.collectSystemMetrics();
      
      // Calculate overall performance score
      metrics.overallScore = this.calculateOverallScore(metrics);
      
    } catch (error) {
      this.log(`Error collecting performance metrics: ${error.message}`);
    }

    return metrics;
  }

  async collectBuildMetrics() {
    const buildMetrics = {
      buildTime: 0,
      buildSuccess: false,
      buildErrors: 0,
      buildWarnings: 0
    };

    try {
      // Check if build output exists and get build time
      const buildDirs = ['dist', 'build', '.next', 'out'];
      let buildExists = false;
      
      for (const dir of buildDirs) {
        if (fs.existsSync(dir)) {
          buildExists = true;
          const stats = fs.statSync(dir);
          buildMetrics.buildTime = Date.now() - stats.mtime.getTime();
          break;
        }
      }

      if (buildExists) {
        buildMetrics.buildSuccess = true;
        
        // Try to get build logs for errors/warnings
        try {
          const buildLogs = this.getBuildLogs();
          buildMetrics.buildErrors = (buildLogs.match(/error/gi) || []).length;
          buildMetrics.buildWarnings = (buildLogs.match(/warning/gi) || []).length;
        } catch (error) {
          // Build logs not available
        }
      }
      
    } catch (error) {
      this.log(`Error collecting build metrics: ${error.message}`);
    }

    return buildMetrics;
  }

  getBuildLogs() {
    // Try to get build logs from various sources
    const logSources = [
      'logs/build.log',
      'logs/pm2/build.log',
      '.next/build-manifest.json',
      'dist/build-info.json'
    ];

    for (const source of logSources) {
      if (fs.existsSync(source)) {
        try {
          return fs.readFileSync(source, 'utf8');
        } catch (error) {
          // Continue to next source
        }
      }
    }

    return '';
  }

  async collectBundleMetrics() {
    const bundleMetrics = {
      totalSize: 0,
      fileCount: 0,
      largestFile: 0,
      fileTypes: {},
      compressionRatio: 0
    };

    try {
      const buildDirs = ['dist', 'build', '.next', 'out'];
      
      for (const dir of buildDirs) {
        if (fs.existsSync(dir)) {
          this.analyzeBundleDirectory(dir, bundleMetrics);
        }
      }

      // Calculate compression ratio (estimate)
      if (bundleMetrics.totalSize > 0) {
        bundleMetrics.compressionRatio = 0.7; // Assume 30% compression
      }
      
    } catch (error) {
      this.log(`Error collecting bundle metrics: ${error.message}`);
    }

    return bundleMetrics;
  }

  analyzeBundleDirectory(dir, metrics) {
    try {
      const items = fs.readdirSync(dir);
      
      items.forEach(item => {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          this.analyzeBundleDirectory(fullPath, metrics);
        } else {
          const size = stat.size;
          const ext = path.extname(item);
          
          metrics.totalSize += size;
          metrics.fileCount++;
          
          if (size > metrics.largestFile) {
            metrics.largestFile = size;
          }
          
          if (!metrics.fileTypes[ext]) {
            metrics.fileTypes[ext] = { count: 0, size: 0 };
          }
          metrics.fileTypes[ext].count++;
          metrics.fileTypes[ext].size += size;
        }
      });
    } catch (error) {
      this.log(`Error analyzing bundle directory ${dir}: ${error.message}`);
    }
  }

  async collectRuntimeMetrics() {
    const runtimeMetrics = {
      loadTime: 0,
      firstContentfulPaint: 0,
      largestContentfulPaint: 0,
      timeToInteractive: 0,
      totalBlockingTime: 0
    };

    try {
      // For now, we'll use estimated values based on bundle size
      // In a real implementation, this would come from actual runtime measurements
      const bundleSize = await this.getCurrentBundleSize();
      
      if (bundleSize > 0) {
        // Estimate load time based on bundle size and network conditions
        runtimeMetrics.loadTime = Math.max(1000, bundleSize / (1024 * 50)); // 50KB/s baseline
        runtimeMetrics.firstContentfulPaint = runtimeMetrics.loadTime * 0.8;
        runtimeMetrics.largestContentfulPaint = runtimeMetrics.loadTime * 1.2;
        runtimeMetrics.timeToInteractive = runtimeMetrics.loadTime * 1.5;
        runtimeMetrics.totalBlockingTime = Math.max(0, runtimeMetrics.loadTime - 1000);
      }
      
    } catch (error) {
      this.log(`Error collecting runtime metrics: ${error.message}`);
    }

    return runtimeMetrics;
  }

  async getCurrentBundleSize() {
    const buildDirs = ['dist', 'build', '.next', 'out'];
    
    for (const dir of buildDirs) {
      if (fs.existsSync(dir)) {
        return this.calculateDirectorySize(dir);
      }
    }
    
    return 0;
  }

  calculateDirectorySize(dir) {
    let totalSize = 0;
    
    try {
      const items = fs.readdirSync(dir);
      
      items.forEach(item => {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          totalSize += this.calculateDirectorySize(fullPath);
        } else {
          totalSize += stat.size;
        }
      });
    } catch (error) {
      // Directory not accessible
    }
    
    return totalSize;
  }

  async collectSystemMetrics() {
    const systemMetrics = {
      memoryUsage: 0,
      cpuUsage: 0,
      diskUsage: 0,
      networkLatency: 0
    };

    try {
      // Get system resource usage
      const memoryInfo = process.memoryUsage();
      systemMetrics.memoryUsage = memoryInfo.heapUsed / memoryInfo.heapTotal;
      
      // CPU usage is not directly available in Node.js
      // We'll estimate based on process uptime and activity
      const uptime = process.uptime();
      systemMetrics.cpuUsage = Math.min(0.8, uptime / 3600 * 0.1); // Estimate
      
      // Disk usage
      systemMetrics.diskUsage = await this.getDiskUsage();
      
      // Network latency (estimate)
      systemMetrics.networkLatency = 50; // 50ms baseline
      
    } catch (error) {
      this.log(`Error collecting system metrics: ${error.message}`);
    }

    return systemMetrics;
  }

  async getDiskUsage() {
    try {
      // This would require additional system monitoring tools
      // For now, return an estimated value
      return 0.6; // 60% disk usage estimate
    } catch (error) {
      return 0.5; // Default estimate
    }
  }

  calculateOverallScore(metrics) {
    let score = 100;
    
    // Build performance (25% weight)
    if (metrics.build.buildTime > 30000) score -= 15;
    if (metrics.build.buildErrors > 0) score -= 10;
    
    // Bundle size (25% weight)
    if (metrics.bundle.totalSize > 5 * 1024 * 1024) score -= 15;
    if (metrics.bundle.largestFile > 1024 * 1024) score -= 10;
    
    // Runtime performance (25% weight)
    if (metrics.runtime.loadTime > 3000) score -= 15;
    if (metrics.runtime.totalBlockingTime > 300) score -= 10;
    
    // System resources (25% weight)
    if (metrics.system.memoryUsage > 0.8) score -= 15;
    if (metrics.system.cpuUsage > 0.7) score -= 10;
    
    return Math.max(0, score);
  }

  analyzePerformanceTrends(currentMetrics) {
    // Add current metrics to history
    this.performanceHistory.push({
      timestamp: currentMetrics.timestamp,
      metrics: currentMetrics
    });

    // Keep only last 50 entries
    if (this.performanceHistory.length > 50) {
      this.performanceHistory = this.performanceHistory.slice(-50);
    }

    const trends = {
      buildTime: 'stable',
      bundleSize: 'stable',
      performance: 'stable',
      system: 'stable'
    };

    // Calculate trends if we have enough data
    if (this.performanceHistory.length > 5) {
      const recent = this.performanceHistory.slice(-5);
      const older = this.performanceHistory.slice(-10, -5);
      
      if (older.length > 0) {
        trends.buildTime = this.calculateMetricTrend(recent, older, 'build.buildTime');
        trends.bundleSize = this.calculateMetricTrend(recent, older, 'bundle.totalSize');
        trends.performance = this.calculateMetricTrend(recent, older, 'overallScore');
        trends.system = this.calculateMetricTrend(recent, older, 'system.memoryUsage');
      }
    }

    return trends;
  }

  calculateMetricTrend(recent, older, metricPath) {
    const recentAvg = recent.reduce((sum, entry) => {
      const value = this.getNestedValue(entry.metrics, metricPath);
      return sum + (value || 0);
    }, 0) / recent.length;
    
    const olderAvg = older.reduce((sum, entry) => {
      const value = this.getNestedValue(entry.metrics, metricPath);
      return sum + (value || 0);
    }, 0) / older.length;
    
    if (olderAvg === 0) return 'stable';
    
    const change = ((recentAvg - olderAvg) / olderAvg) * 100;
    
    if (change > 10) return 'improving';
    if (change < -10) return 'declining';
    return 'stable';
  }

  getNestedValue(obj, path) {
    return path.split('.').reduce((current, key) => current?.[key], obj);
  }

  generatePerformancePredictions(currentMetrics, trendAnalysis) {
    const predictions = {
      buildTime: {},
      bundleSize: {},
      performance: {},
      system: {},
      alerts: []
    };

    // Predict build time
    predictions.buildTime = this.predictBuildTime(currentMetrics, trendAnalysis);
    
    // Predict bundle size
    predictions.bundleSize = this.predictBundleSize(currentMetrics, trendAnalysis);
    
    // Predict overall performance
    predictions.performance = this.predictPerformance(currentMetrics, trendAnalysis);
    
    // Predict system resource usage
    predictions.system = this.predictSystemUsage(currentMetrics, trendAnalysis);
    
    // Generate alert predictions
    predictions.alerts = this.predictAlerts(currentMetrics, predictions);

    return predictions;
  }

  predictBuildTime(currentMetrics, trendAnalysis) {
    const current = currentMetrics.build.buildTime;
    const trend = trendAnalysis.buildTime;
    
    let prediction = current;
    
    if (trend === 'improving') {
      prediction = current * 0.9; // 10% improvement
    } else if (trend === 'declining') {
      prediction = current * 1.15; // 15% degradation
    }
    
    return {
      current,
      predicted: prediction,
      trend,
      confidence: this.calculatePredictionConfidence(trend),
      threshold: this.predictionModel.alertThresholds.buildTime
    };
  }

  predictBundleSize(currentMetrics, trendAnalysis) {
    const current = currentMetrics.bundle.totalSize;
    const trend = trendAnalysis.bundleSize;
    
    let prediction = current;
    
    if (trend === 'improving') {
      prediction = current * 0.95; // 5% improvement
    } else if (trend === 'declining') {
      prediction = current * 1.1; // 10% degradation
    }
    
    return {
      current,
      predicted: prediction,
      trend,
      confidence: this.calculatePredictionConfidence(trend),
      threshold: this.predictionModel.alertThresholds.bundleSize
    };
  }

  predictPerformance(currentMetrics, trendAnalysis) {
    const current = currentMetrics.overallScore;
    const trend = trendAnalysis.performance;
    
    let prediction = current;
    
    if (trend === 'improving') {
      prediction = Math.min(100, current + 5); // 5 point improvement
    } else if (trend === 'declining') {
      prediction = Math.max(0, current - 8); // 8 point degradation
    }
    
    return {
      current,
      predicted: prediction,
      trend,
      confidence: this.calculatePredictionConfidence(trend),
      threshold: 70 // Performance threshold
    };
  }

  predictSystemUsage(currentMetrics, trendAnalysis) {
    const current = currentMetrics.system.memoryUsage;
    const trend = trendAnalysis.system;
    
    let prediction = current;
    
    if (trend === 'improving') {
      prediction = current * 0.95; // 5% improvement
    } else if (trend === 'declining') {
      prediction = current * 1.1; // 10% degradation
    }
    
    return {
      current,
      predicted: prediction,
      trend,
      confidence: this.calculatePredictionConfidence(trend),
      threshold: this.predictionModel.alertThresholds.memoryUsage
    };
  }

  calculatePredictionConfidence(trend) {
    // Base confidence on trend stability
    if (trend === 'stable') return 0.8;
    if (trend === 'improving') return 0.7;
    if (trend === 'declining') return 0.6;
    return 0.5;
  }

  predictAlerts(currentMetrics, predictions) {
    const alerts = [];
    
    // Check build time predictions
    if (predictions.buildTime.predicted > predictions.buildTime.threshold) {
      alerts.push({
        type: 'build-time',
        severity: 'warning',
        message: `Build time predicted to exceed threshold: ${(predictions.buildTime.predicted / 1000).toFixed(1)}s`,
        confidence: predictions.buildTime.confidence,
        threshold: predictions.buildTime.threshold
      });
    }
    
    // Check bundle size predictions
    if (predictions.bundleSize.predicted > predictions.bundleSize.threshold) {
      alerts.push({
        type: 'bundle-size',
        severity: 'warning',
        message: `Bundle size predicted to exceed threshold: ${(predictions.bundleSize.predicted / (1024 * 1024)).toFixed(2)}MB`,
        confidence: predictions.bundleSize.confidence,
        threshold: predictions.bundleSize.threshold
      });
    }
    
    // Check performance predictions
    if (predictions.performance.predicted < predictions.performance.threshold) {
      alerts.push({
        type: 'performance',
        severity: 'critical',
        message: `Performance predicted to fall below threshold: ${predictions.performance.predicted.toFixed(1)}/100`,
        confidence: predictions.performance.confidence,
        threshold: predictions.performance.threshold
      });
    }
    
    // Check system usage predictions
    if (predictions.system.predicted > predictions.system.threshold) {
      alerts.push({
        type: 'system-usage',
        severity: 'warning',
        message: `System usage predicted to exceed threshold: ${(predictions.system.predicted * 100).toFixed(1)}%`,
        confidence: predictions.system.confidence,
        threshold: predictions.system.threshold
      });
    }
    
    return alerts;
  }

  checkPerformanceAlerts(currentMetrics, predictions) {
    const alerts = [];
    
    // Check current metrics against thresholds
    if (currentMetrics.build.buildTime > this.predictionModel.alertThresholds.buildTime) {
      alerts.push({
        type: 'build-time',
        severity: 'critical',
        message: `Build time exceeds threshold: ${(currentMetrics.build.buildTime / 1000).toFixed(1)}s`,
        current: currentMetrics.build.buildTime,
        threshold: this.predictionModel.alertThresholds.buildTime
      });
    }
    
    if (currentMetrics.bundle.totalSize > this.predictionModel.alertThresholds.bundleSize) {
      alerts.push({
        type: 'bundle-size',
        severity: 'critical',
        message: `Bundle size exceeds threshold: ${(currentMetrics.bundle.totalSize / (1024 * 1024)).toFixed(2)}MB`,
        current: currentMetrics.bundle.totalSize,
        threshold: this.predictionModel.alertThresholds.bundleSize
      });
    }
    
    if (currentMetrics.overallScore < 70) {
      alerts.push({
        type: 'performance',
        severity: 'critical',
        message: `Performance below acceptable level: ${currentMetrics.overallScore.toFixed(1)}/100`,
        current: currentMetrics.overallScore,
        threshold: 70
      });
    }
    
    if (currentMetrics.system.memoryUsage > this.predictionModel.alertThresholds.memoryUsage) {
      alerts.push({
        type: 'memory-usage',
        severity: 'warning',
        message: `Memory usage exceeds threshold: ${(currentMetrics.system.memoryUsage * 100).toFixed(1)}%`,
        current: currentMetrics.system.memoryUsage,
        threshold: this.predictionModel.alertThresholds.memoryUsage
      });
    }
    
    return alerts;
  }

  generateOptimizationRecommendations(currentMetrics, predictions, alerts) {
    const recommendations = {
      critical: [],
      high: [],
      medium: [],
      low: []
    };

    // Critical recommendations based on alerts
    alerts.forEach(alert => {
      if (alert.severity === 'critical') {
        recommendations.critical.push({
          type: alert.type,
          priority: 'critical',
          description: alert.message,
          actions: this.getOptimizationActions(alert.type)
        });
      }
    });

    // High priority recommendations based on predictions
    predictions.alerts.forEach(alert => {
      if (alert.severity === 'warning' && alert.confidence > 0.6) {
        recommendations.high.push({
          type: alert.type,
          priority: 'high',
          description: `Predicted: ${alert.message}`,
          actions: this.getOptimizationActions(alert.type),
          confidence: alert.confidence
        });
      }
    });

    // Medium priority recommendations based on trends
    if (predictions.performance.trend === 'declining') {
      recommendations.medium.push({
        type: 'performance-trend',
        priority: 'medium',
        description: 'Performance trend is declining',
        actions: [
          'Review recent code changes',
          'Analyze performance bottlenecks',
          'Implement performance monitoring',
          'Consider code splitting and lazy loading'
        ]
      });
    }

    // Low priority recommendations for general improvements
    if (currentMetrics.bundle.totalSize > 2 * 1024 * 1024) { // > 2MB
      recommendations.low.push({
        type: 'bundle-optimization',
        priority: 'low',
        description: 'Bundle size could be optimized',
        actions: [
          'Implement tree shaking',
          'Use dynamic imports',
          'Optimize images and assets',
          'Consider code splitting'
        ]
      });
    }

    return recommendations;
  }

  getOptimizationActions(alertType) {
    const actionMap = {
      'build-time': [
        'Optimize build configuration',
        'Implement build caching',
        'Use parallel builds',
        'Review build dependencies'
      ],
      'bundle-size': [
        'Implement code splitting',
        'Remove unused dependencies',
        'Optimize imports',
        'Use tree shaking'
      ],
      'performance': [
        'Profile application performance',
        'Optimize critical rendering path',
        'Implement lazy loading',
        'Review component rendering'
      ],
      'system-usage': [
        'Monitor memory leaks',
        'Optimize data structures',
        'Implement caching strategies',
        'Review resource usage patterns'
      ]
    };

    return actionMap[alertType] || ['Review and optimize'];
  }

  updatePredictionModel(currentMetrics, predictions) {
    // Update prediction accuracy based on actual vs predicted values
    const accuracy = this.calculatePredictionAccuracy(currentMetrics, predictions);
    
    // Update model confidence
    Object.keys(this.predictionModel).forEach(key => {
      if (key.endsWith('Model')) {
        this.predictionModel[key].accuracy = accuracy;
        this.predictionModel[key].lastUpdated = Date.now();
      }
    });
    
    // Adjust thresholds based on performance patterns
    this.adjustAlertThresholds(currentMetrics);
    
    this.savePredictionModel();
  }

  calculatePredictionAccuracy(currentMetrics, predictions) {
    let totalAccuracy = 0;
    let count = 0;
    
    // Compare predictions with actual values
    if (predictions.buildTime.predicted > 0) {
      const accuracy = 1 - Math.abs(currentMetrics.build.buildTime - predictions.buildTime.predicted) / currentMetrics.build.buildTime;
      totalAccuracy += accuracy;
      count++;
    }
    
    if (predictions.bundleSize.predicted > 0) {
      const accuracy = 1 - Math.abs(currentMetrics.bundle.totalSize - predictions.bundleSize.predicted) / currentMetrics.bundle.totalSize;
      totalAccuracy += accuracy;
      count++;
    }
    
    if (predictions.performance.predicted > 0) {
      const accuracy = 1 - Math.abs(currentMetrics.overallScore - predictions.performance.predicted) / 100;
      totalAccuracy += accuracy;
      count++;
    }
    
    return count > 0 ? totalAccuracy / count : 0.5;
  }

  adjustAlertThresholds(currentMetrics) {
    // Dynamically adjust thresholds based on performance patterns
    const adjustmentFactor = 0.1; // 10% adjustment
    
    // Adjust build time threshold
    if (currentMetrics.build.buildTime > this.predictionModel.alertThresholds.buildTime * 0.8) {
      this.predictionModel.alertThresholds.buildTime *= (1 + adjustmentFactor);
    } else if (currentMetrics.build.buildTime < this.predictionModel.alertThresholds.buildTime * 0.6) {
      this.predictionModel.alertThresholds.buildTime *= (1 - adjustmentFactor);
    }
    
    // Adjust bundle size threshold
    if (currentMetrics.bundle.totalSize > this.predictionModel.alertThresholds.bundleSize * 0.8) {
      this.predictionModel.alertThresholds.bundleSize *= (1 + adjustmentFactor);
    } else if (currentMetrics.bundle.totalSize < this.predictionModel.alertThresholds.bundleSize * 0.6) {
      this.predictionModel.alertThresholds.bundleSize *= (1 - adjustmentFactor);
    }
  }

  async generatePerformanceReport(currentMetrics, trendAnalysis, predictions, alerts, recommendations) {
    const report = {
      timestamp: Date.now(),
      summary: {
        overallScore: currentMetrics.overallScore,
        buildTime: currentMetrics.build.buildTime,
        bundleSize: currentMetrics.bundle.totalSize,
        alerts: alerts.length,
        predictions: predictions.alerts.length
      },
      currentMetrics,
      trendAnalysis,
      predictions,
      alerts,
      recommendations,
      model: this.predictionModel,
      history: this.performanceHistory.slice(-10) // Last 10 entries
    };

    try {
      fs.writeFileSync(this.performanceReportFile, JSON.stringify(report, null, 2));
      this.log('📊 Predictive Performance Report generated');
    } catch (error) {
      this.log('Failed to generate performance report');
    }
  }

  async start() {
    this.log('🚀 Predictive Performance Monitor started');
    
    // Run initial monitoring
    await this.monitorPerformance();
    
    // Schedule periodic monitoring
    setInterval(async () => {
      await this.monitorPerformance();
    }, 4 * 60 * 60 * 1000); // Every 4 hours
  }
}

// Start the Predictive Performance Monitor
const monitor = new PredictivePerformanceMonitor();
monitor.start().catch(error => {
  console.error('Predictive Performance Monitor failed to start:', error);
  process.exit(1);
});