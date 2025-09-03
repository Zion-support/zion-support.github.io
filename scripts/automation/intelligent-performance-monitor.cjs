

const fs = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');
;
class IntelligentPerformanceMonitor {;
  constructor() {;
    this.projectRoot = process.cwd();

    );

      buildTime: 30000, // 30 seconds;
      bundleSize: 1024 * 1024, // 1MB;
      loadTime: 3000, // 3 seconds;
      memoryUsage: 512 * 1024 * 1024, // 512MB}}

    this.ensureLogDirectory();
    this.loadPerformanceHistory();

    // Start continuous monitoring;
    this.startContinuousMonitoring()}
;
  ensureLogDirectory() {;
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {;
      fs.mkdirSync(logDir { recursive: true })}
  }
;
  loadPerformanceHistory() {;
    try {;
      if (fs.existsSync(this.performanceHistory)) {;
        const data = fs.readFileSync(this.performanceHistory, 'utf8');
        this.history = JSON.parse(data)} else {;
        this.history = {;
          totalMeasurements: 0,;
          averageBuildTime: 0,;
          averageBundleSize: 0,;
          averageLoadTime: 0,;
          performanceTrends: [],;
          bottlenecks: [],;
          optimizations: []}}

    }
  }

    this.measurePerformance();
    ;
    // Set up periodic monitoring;
    setInterval(() => {;
      this.measurePerformance()}, 5 * 60 * 1000); // Every 5 minutes;
    ;
    // Set up build monitoring;
    this.monitorBuilds();
    ;

    // Set up runtime monitoring;
    this.monitorRuntime()}

    

    const startTime = Date.now();
    const measurement = {;
      timestamp: new Date().toISOString(),;
      buildTime: 0,;
      bundleSize: 0,;
      loadTime: 0,;
      memoryUsage: 0,;
      cpuUsage: 0,;
      errorRate: 0,;
      recommendations: []};

      // Log results;
      this.logPerformanceResults(measurement);
      ;
      console.log(✅ Performance measurement completed in ${Date.now() - startTime}ms)}
;
  async measureBuildPerformance(measurement) {;
    console.log('🔨 Measuring build performance...');
    ;
    try {;
      const buildStart = Date.now();

      // Run a test build;
      const buildResult = await this.runTestBuild();
      ;
      measurement.buildTime = Date.now() - buildStart;
      measurement.buildSuccess = buildResult.success;
      measurement.buildErrors = buildResult.errors;

      measurement.buildTime = -1;
      measurement.buildSuccess = false}
  }

          timeout: 120000 // 2 minutes timeout});
        ;
        return {;
          success: true,;
          duration: Date.now() - buildStart,;
          errors: []}}

          timeout: 120000});
        ;
        return {;
          success: true,;
          duration: Date.now() - buildStart,;
          errors: []}}

    }
  }


      const buildDirs = ['dist', 'build', '.next', 'out'];
      let totalSize = 0;
      ;
      for (const dir of buildDirs) {;
        if (fs.existsSync(dir)) {;
          const size = this.calculateDirectorySize(dir);
          totalSize += size}
      }
      ;
      measurement.bundleSize = totalSize;

      measurement.bundleSize = -1}
  }
;
  calculateDirectorySize(dirPath) {;
    let totalSize = 0;
    ;
    try {;
      const items = fs.readdirSync(dirPath);

        const stat = fs.statSync(fullPath);
        ;
        if (stat.isDirectory()) {;
          totalSize += this.calculateDirectorySize(fullPath)} else {;
          totalSize += stat.size}
      }
    } catch (error) {  console.error(`Error calculating size for ${dirPath  }:``, error)}
    ;
    return totalSize}

    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    ;
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]}


      const systemMetrics = await this.getSystemMetrics();
      ;
      measurement.memoryUsage = systemMetrics.memory;
      measurement.cpuUsage = systemMetrics.cpu;

      measurement.memoryUsage = -1;
      measurement.cpuUsage = -1}
  }

      // Get memory usage;
      const memUsage = process.memoryUsage();
      const memory = memUsage.heapUsed;
      ;
      // Get CPU usage (simplified);
      const cpuUsage = process.cpuUsage();
      const cpu = Math.round((cpuUsage.user + cpuUsage.system) / 1000000); // Convert to percentage approximation;

      console.error('Error getting system metrics:', error);
      return { memory: 0, cpu: 0   }}
  }
;
  async analyzePerformance(measurement) {;
    console.log('🧠 Analyzing performance data...');

    // Generate optimization suggestions;
    this.generateOptimizationSuggestions(measurement)}
;
  analyzePerformanceTrends(measurement) {;
    if (this.history.performanceTrends.length > 0) {;
      const recentTrends = this.history.performanceTrends.slice(-5)})}
      }
    }
  }
;
  calculateTrend(historicalValues, currentValue) {;
    if (historicalValues.length === 0) return 0;
    ;
    const average = historicalValues.reduce((a, b) => a + b, 0) / historicalValues.length;
    return (currentValue - average) / average}
;
  identifyBottlenecks(measurement) {;
    const bottlenecks = []})}
    ;
    if (measurement.bundleSize > this.thresholds.bundleSize * 2) {;
      bottlenecks.push({;
        type: 'bundle',;
        severity: 'critical',;
        message: 'Bundle size is critically large',;
        impact: 'High',;
        suggestion: 'Immediate optimization required - implement code splitting and tree shaking'})}
    ;
    if (measurement.memoryUsage > this.thresholds.memoryUsage * 1.5) {;
      bottlenecks.push({;
        type: 'memory',;
        severity: 'high',;
        message: 'Memory usage is significantly high',;
        impact: 'Medium',;
        suggestion: 'Investigate memory leaks and optimize data handling'})}
    ;
    measurement.bottlenecks = bottlenecks}
;
  generateOptimizationSuggestions(measurement) {;
    const optimizations = []});
      ;
      optimizations.push({;
        category: 'build',;
        priority: 'medium',;
        suggestion: 'Use parallel builds for independent modules',;
        expectedImpact: '15-25% reduction in build time'})}

      });
      ;
      optimizations.push({;
        category: 'bundle',;
        priority: 'medium',;
        suggestion: 'Remove unused dependencies and implement tree shaking',;
        expectedImpact: '10-20% reduction in bundle size'})}

      })}
    ;
    measurement.optimizations = optimizations}

      console.error('Error saving performance history:', error)}
  }
;
  calculateRunningAverage(currentAverage, newValue, count) {;
    return (currentAverage * (count - 1) + newValue) / count}

      optimizations: measurement.optimizations};
    ;
    try {;
      fs.appendFileSync(this.logFile, JSON.stringify(logEntry) + '\n');

      console.error('Error logging performance results:', error)}
  }

      stack: error.stack};
    ;
    try {;
      fs.appendFileSync(this.logFile, JSON.stringify(errorEntry) + '\n');

      console.error('Error logging error:', error)}
  }
;
  monitorBuilds() {;
    console.log('🔨 Setting up build monitoring...');

        this.onBuildStart()}
    })}
;
  onBuildStart() {;
    console.log('🚀 Build started - monitoring performance...');
    this.measurePerformance()}
;
  monitorRuntime() {;
    console.log('⚡ Setting up runtime monitoring...');

      this.onUnhandledRejection(reason, promise)})}
;
  onProcessExit() {;
    console.log('🔄 Process exiting - saving final performance data...');
    this.measurePerformance()}
;
  onUncaughtException(error) {;
    console.error('💥 Uncaught exception:', error);
    this.logError('Uncaught exception', error)}
;
  onUnhandledRejection(reason, promise) {;
    console.error('💥 Unhandled rejection:', reason);
    this.logError('Unhandled rejection' { reason, promise })}
}

// Export for PM2;
module.exports = performanceMonitor;
