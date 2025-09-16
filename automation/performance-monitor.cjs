<<<<<<< HEAD
#!/usr/bin/env node
=======


#!/usr/bin/env node/usr/bin/env nodeconst fs = require("fs");"const path = require("path");"const { execSync } = require("child_process");class PerformanceMonitor { constructor() { this.projectRoot = process.cwd(); this.logFile = path.join( this.projectRoot," "automation/logs/performance-monitor.log" ); this.performanceReportFile = path.join( this.projectRoot," "automation/logs/performance-report.json" ); this.lastCheck = null; this.checkInterval = 300000; / 5 minutes this.isRunning = false; this.setupLogging();" this.log("Performance Monitor initialized"); } setupLogging() { const logDir = path.dirname(this.logFile); if (!fs.existsSync(logDir)) { fs.mkdirSync(logDir, { recursive: true }); } } log(message) { const timestamp = new Date().toISOString(); const logMessage = `[${timestamp}] ${message}\n`; process.stdout.write(logMessage); try { fs.appendFileSync(this.logFile, logMessage); } catch (_) { / ignore } } async checkPerformance() { try {" this.log("Checking performance metrics."); const startTime = Date.now(); const systemMetrics = await this.getSystemMetrics(); const buildMetrics = await this.getBuildMetrics(); const bundleMetrics = await this.getBundleMetrics(); const endTime = Date.now(); const checkTime = endTime - startTime; this.lastCheck = {" timestamp: new Date().toISOString(), checkTime, systemMetrics, buildMetrics, bundleMetrics};` this.log(`Performance check completed in ${checkTime}ms`); await this.savePerformanceReport(); await this.checkOptimizationNeeded(); } catch (error) {"` this.log(`Performance check failed: ${error.message}`); await this.reportPerformanceError(error); } } async getSystemMetrics() { try { const metrics = {" memory: process.memoryUsage()," uptime: process.uptime()," cpuUsage: process.cpuUsage()," nodeVersion: process.version," platform: process.platform}; try {" const diskUsage = execSync("df -h .", {" cwd: this.projectRoot,"" encoding: "utf8"," timeout: 10000}); metrics.diskUsage = diskUsage; } catch (_) {" metrics.diskUsage = "Unavailable"; } return metrics; } catch (error) {"` this.log(`Failed to get system metrics: ${error.message}`);" return { error: error.message }; } } async getBuildMetrics() { try {" const buildDir = path.join(this.projectRoot, ".next"); if (!fs.existsSync(buildDir)) {" return { exists: false }; } const stats = fs.statSync(buildDir); const buildSize = this.getDirectorySize(buildDir); return {" exists: true," lastModified: stats.mtime," size: buildSize," age: Date.now() - stats.mtime.getTime()}; } catch (error) {"` this.log(`Failed to get build metrics: ${error.message}`);" return { error: error.message }; } } async getBundleMetrics() { try {" const pkgPath = path.join(this.projectRoot, "package.json"); if (!fs.existsSync(pkgPath)) {" return { analyzerAvailable: false }; }" const packageJson = JSON.parse(fs.readFileSync(pkgPath, "utf8")); const hasAnalyze = packageJson.scripts && packageJson.scripts.analyze; return hasAnalyze"" ? { analyzerAvailable: true, script: "npm run analyze" } : {" analyzerAvailable: false,"" recommendation: "Consider adding bundle analyzer"}; } catch (error) {"` this.log(`Failed to get bundle metrics: ${error.message}`);" return { error: error.message }; } } getDirectorySize(dirPath) { let totalSize = 0; try { const stack = [dirPath]; while (stack.length) { const current = stack.pop();" const entries = fs.readdirSync(current, { withFileTypes: true }); for (const entry of entries) { const full = path.join(current, entry.name); if (entry.isDirectory()) { stack.push(full); } else { try { totalSize += fs.statSync(full).size; } catch (_) {} } } } } catch (_) {} return totalSize; } async checkOptimizationNeeded() { if (!this.lastCheck | !this.lastCheck.systemMetrics) return; try { const memory = this.lastCheck.systemMetrics.memory; const memoryUsagePercent = memory.heapTotal ? (memory.heapUsed / memory.heapTotal) * 100 : 0; if (memoryUsagePercent > 80) {" this.log("High memory usage detected, considering optimization."); await this.optimizeMemory(); } if (this.lastCheck.buildMetrics && this.lastCheck.buildMetrics.exists) { if (this.lastCheck.buildMetrics.age > 3600000) {" this.log("Build is stale, considering rebuild."); await this.optimizeBuild(); } if (this.lastCheck.buildMetrics.size > 100 * 1024 * 1024) {" this.log("Large build size detected, considering optimization."); await this.optimizeBuildSize(); } } } catch (error) {"` this.log(`Optimization check failed: ${error.message}`); } } async optimizeMemory() { try { if (global.gc) { global.gc();" this.log("Garbage collection performed"); } } catch (error) {"` this.log(`Memory optimization failed: ${error.message}`); } } async optimizeBuild() { try {" execSync("npm run clean", {" cwd: this.projectRoot,"" stdio: "ignore"," timeout: 30000});" execSync("npm run build", {" cwd: this.projectRoot,"" stdio: "ignore"," timeout: 300000});" this.log("Build optimization completed"); } catch (error) {"` this.log(`Build optimization failed: ${error.message}`); } } async optimizeBuildSize() { try { const pkg = JSON.parse(" fs.readFileSync(path.join(this.projectRoot, "package.json"), "utf8") ); if (pkg.scripts && pkg.scripts.analyze) {" execSync("npm run analyze", {" cwd: this.projectRoot,"" stdio: "ignore"," timeout: 300000});" this.log("Bundle analysis completed"); } await this.optimizeBuild(); } catch (error) {"` this.log(`Build size optimization failed: ${error.message}`); } } async savePerformanceReport() { const report = {" lastCheck: this.lastCheck," projectRoot: this.projectRoot," recommendations: this.getPerformanceRecommendations()}; try { fs.writeFileSync( this.performanceReportFile, JSON.stringify(report, null, 2) ); } catch (_) {} } getPerformanceRecommendations() { const recommendations = []; if (!this.lastCheck) return recommendations; const metrics = this.lastCheck.systemMetrics; if (metrics && metrics.memory && metrics.memory.heapTotal) { const memoryUsagePercent (metrics.memory.heapUsed / metrics.memory.heapTotal) * 100; if (memoryUsagePercent > 80) { recommendations.push(" "High memory usage detected. Consider optimizing memory usage." ); } if (memoryUsagePercent > 90) { recommendations.push(" "Critical memory usage. Immediate optimization required." ); } } if (this.lastCheck.buildMetrics && this.lastCheck.buildMetrics.exists) { if (this.lastCheck.buildMetrics.age > 3600000) { recommendations.push(" "Build is stale. Consider rebuilding for optimal performance." ); } if (this.lastCheck.buildMetrics.size > 100 * 1024 * 1024) { recommendations.push(" "Large build size detected. Consider code splitting and optimization." ); } } return recommendations; } async reportPerformanceError(error) { try { const errorReport = {" timestamp: new Date().toISOString()," error: error.message," stack: error.stack," projectRoot: this.projectRoot}; const errorFile = path.join( this.projectRoot," "automation/logs/performance-error-report.json" ); fs.writeFileSync(errorFile, JSON.stringify(errorReport, null, 2));" this.log("Performance error reported"); } catch (_) {} } async start() { this.isRunning = true;" this.log("Performance Monitor started"); await this.checkPerformance(); setInterval(async () => { if (!this.isRunning) return; await this.checkPerformance(); }, this.checkInterval);" process.on("SIGTERM", () => {" this.log("Received SIGTERM, shutting down gracefully"); this.isRunning = false; process.exit(0); });" process.on("SIGINT", () => {" this.log("Received SIGINT, shutting down gracefully"); this.isRunning = false; process.exit(0); }); }}const monitor = new PerformanceMonitor();monitor.start().catch(error => {"" console.error("Failed to start performance monitor: ", error); process.exit(1);});""`"`

#!/usr/bin/env node;
/**
 * Performance Monitor - PM2 Automation Script;
 * Monitors application performance and optimizes when needed;
 */
>>>>>>> origin/merge-pr-12271

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class PerformanceMonitor {
  constructor() {
    this.metrics = {
      buildTime: 0,
      bundleSize: 0,
      memoryUsage: 0,
      cpuUsage: 0,
      lastUpdated: new Date().toISOString()
    };
    this.logFile = path.join(__dirname, 'logs', 'performance-monitor.log');
    this.ensureLogDirectory();
  }

  ensureLogDirectory() {
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
<<<<<<< HEAD
=======

    const logMessage = `[${timestamp}] ${message}\n`;`
    process.stdout.write(logMessage);
    try {}
      fs.appendFileSync(this.logFile, logMessage);
    } catch (_) {}
      // ignore;
    };
  };
  async checkPerformance() {}
    try {}
      this.log('Checking performance metrics...');
      const startTime = Date.now();

      const systemMetrics = await this.getSystemMetrics();
      const buildMetrics = await this.getBuildMetrics();
      const bundleMetrics = await this.getBundleMetrics();

      const endTime = Date.now();
      const checkTime = endTime - startTime;

      this.lastCheck = {}
        "timestamp": new Date().toISOString(),
        checkTime,
        systemMetrics,
        buildMetrics,
        bundleMetrics};

      this.log(`Performance check completed in ${checkTime}ms`);
      await this.savePerformanceReport();
      await this.checkOptimizationNeeded();
    } catch (error) {}
      this.log(`Performance check "failed": ${error.message}`);
      await this.reportPerformanceError(error);
    };
  };
  async getSystemMetrics() {}
    try {}
      const metrics = {}
        "memory": process.memoryUsage(),
        "uptime": process.uptime(),
        "cpuUsage": process.cpuUsage(),
        "nodeVersion": process.version,
        "platform": process.platform};

      try {}
        const diskUsage = execSync('df -h .', {})
          "cwd": this.projectRoot,
          "encoding": 'utf8',
          "timeout": 10000}
});
        metrics.diskUsage = diskUsage;
      } catch (_) {}
        metrics.diskUsage = 'Unavailable';
      };
      return metrics;
    } catch (error) {}
      this.log(`Failed to get system "metrics": ${error.message}`);
      return { "error": error.message };
    };
  };
  async getBuildMetrics() {}
    try {}
      const buildDir = path.join(this.projectRoot, '.next');
      if (!fs.existsSync(buildDir)) {}
        return { "exists": false };
      };
      const stats = fs.statSync(buildDir);
      const buildSize = this.getDirectorySize(buildDir);

>>>>>>> origin/merge-pr-12271
    const logMessage = `[${timestamp}] [${level}] ${message}\n`;
    console.log(`[${level}] ${message}`);
    fs.appendFileSync(this.logFile, logMessage);
  }

  async monitorPerformance() {
    this.log('⚡ Starting performance monitoring...');
<<<<<<< HEAD
    
    try {
      // Monitor build time
      const buildTime = await this.measureBuildTime();
      this.metrics.buildTime = buildTime;
      
      // Monitor bundle size
      const bundleSize = await this.measureBundleSize();
      this.metrics.bundleSize = bundleSize;
      
      // Monitor memory usage
      const memoryUsage = process.memoryUsage();
      this.metrics.memoryUsage = memoryUsage.heapUsed / 1024 / 1024; // MB
      
      // Monitor CPU usage
      const cpuUsage = process.cpuUsage();
      this.metrics.cpuUsage = cpuUsage.user / 1000000; // seconds
      
      this.metrics.lastUpdated = new Date().toISOString();
      
      await this.saveMetrics();
      await this.generatePerformanceReport();
      
      this.log('Performance monitoring completed');
      return this.metrics;
=======

>>>>>>> origin/merge-pr-12271
    } catch (error) {
      this.log(`Performance monitoring failed: ${error.message}`, 'ERROR');
      return null;
    }
  }
<<<<<<< HEAD
=======

  async getBundleMetrics() {
    try {

      return {}
        "exists": true,
        "lastModified": stats.mtime,
        "size": buildSize,
        "age": Date.now() - stats.mtime.getTime()};
    } catch (error) {}
      this.log(`Failed to get build "metrics": ${error.message}`);
      return { "error": error.message };
    };
  };
  async getBundleMetrics() {}
    try {}
      const pkgPath = path.join(this.projectRoot, 'package.json');
      if (!fs.existsSync(pkgPath)) {}
        return { "analyzerAvailable": false };
      };
      const packageJson = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
      const hasAnalyze = packageJson.scripts && packageJson.scripts.analyze;
>>>>>>> origin/merge-pr-12271

  async measureBuildTime() {
    const startTime = Date.now();
    try {
<<<<<<< HEAD
      execSync('npm run build', { stdio: 'pipe', cwd: process.cwd() });
      return Date.now() - startTime;
=======

>>>>>>> origin/merge-pr-12271
    } catch (error) {
      return -1; // Build failed
    }
  }

<<<<<<< HEAD
  async measureBundleSize() {
    try {
      const buildDir = path.join(process.cwd(), '.next');
      if (!fs.existsSync(buildDir)) {
        return 0;
=======
  getDirectorySize(dirPath) {

      return hasAnalyze;
        ? { "analyzerAvailable": true, "script": 'npm run analyze' };
        : {}
            "analyzerAvailable": false,
            "recommendation": 'Consider adding bundle analyzer'};
    } catch (error) {}
      this.log(`Failed to get bundle "metrics": ${error.message}`);
      return { "error": error.message };
    };
  };
  getDirectorySize(dirPath) {}
    let totalSize = 0;
    try {}
      const stack = [dirPath];
      while (stack.length) {}
        const current = stack.pop();
        const entries = fs.readdirSync(current, { "withFileTypes": true }
});
        for (const entry of entries) {}
          const full = path.join(current, entry.name);
          if (entry.isDirectory()) {}
            stack.push(full);
          } else {}
            try {}
              totalSize += fs.statSync(full).size;
            } catch (_) {};
          };
        };
      };
    } catch (_) {};
    return totalSize;
  };
  async checkOptimizationNeeded() {}
    if (!this.lastCheck || !this.lastCheck.systemMetrics) return;
    try {}
      const memory = this.lastCheck.systemMetrics.memory;
      const memoryUsagePercent = memory.heapTotal;
        ? (memory.heapUsed / memory.heapTotal) * 100;
        : 0;
      if (memoryUsagePercent > 80) {}
        this.log('High memory usage detected, considering optimization...');
        await this.optimizeMemory();
      };
      if (this.lastCheck.buildMetrics && this.lastCheck.buildMetrics.exists) {}
        if (this.lastCheck.buildMetrics.age > 3600000) {}
          this.log('Build is stale, considering rebuild...');
          await this.optimizeBuild();
        };
        if (this.lastCheck.buildMetrics.size > 100 * 1024 * 1024) {}
          this.log('Large build size detected, considering optimization...');
          await this.optimizeBuildSize();
        };
      };
    } catch (error) {}
      this.log(`Optimization check "failed": ${error.message}`);
    };
  };
  async optimizeMemory() {}
    try {}
      if (global.gc) {}
        global.gc();
        this.log('Garbage collection performed');

>>>>>>> origin/merge-pr-12271
      }
      
      const getDirSize = (dir) => {
        let size = 0;
        const files = fs.readdirSync(dir);
        
        files.forEach(file => {
          const filePath = path.join(dir, file);
          const stat = fs.statSync(filePath);
          
          if (stat.isDirectory()) {
            size += getDirSize(filePath);
          } else {
            size += stat.size;
          }
        });
        
        return size;
      };
      
      return getDirSize(buildDir);
    } catch (error) {
      return 0;
    }
  }

  async saveMetrics() {
    const metricsFile = path.join(__dirname, 'reports', 'performance-metrics.json');
    fs.mkdirSync(path.dirname(metricsFile), { recursive: true });
    fs.writeFileSync(metricsFile, JSON.stringify(this.metrics, null, 2));
  }

  async generatePerformanceReport() {
    const report = {
      ...this.metrics,
      recommendations: this.generateRecommendations()
    };

    const reportFile = path.join(__dirname, 'reports', 'performance-report.json');
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    
    this.log(`Performance report generated: ${reportFile}`);
  }

  generateRecommendations() {
    const recommendations = [];
    
    if (this.metrics.buildTime > 60000) { // 1 minute
      recommendations.push('Consider optimizing build process - build time is high');
    }
    
    if (this.metrics.bundleSize > 5000000) { // 5MB
      recommendations.push('Consider code splitting - bundle size is large');
    }
    
    if (this.metrics.memoryUsage > 100) { // 100MB
      recommendations.push('Consider memory optimization - high memory usage detected');
    }
    
    return recommendations;
  }
}

// Run if called directly
if (require.main === module) {
<<<<<<< HEAD
  const monitor = new PerformanceMonitor();
  monitor.monitorPerformance().catch(console.error);
}

module.exports = PerformanceMonitor;
=======
    const monitor = new PerformanceMonitor(),
    monitor.monitorPerformance().catch(console.error)
  }

      // Generate recommendations
      if (buildTime > 30000) {
        performance.recommendations.push('Build time is slow - consider optimizing dependencies');
      }
    } catch (error) {
      this.log(`❌ Build performance measurement failed: ${error.message}`, 'ERROR');
    }
  }

  async measureTestPerformance() {
    this.log('🧪 Measuring test performance...');
    try {
      const startTime = Date.now();
      execSync('npm test -- --passWithNoTests', { 
        cwd: this.projectRoot, 
        stdio: 'pipe' 
      });
      const testTime = Date.now() - startTime;
      
      this.metrics.testTime = testTime;
      this.log(`✅ Tests completed in ${testTime}ms`);
    } catch (error) {
      this.log(`❌ Test performance measurement failed: ${error.message}`, 'ERROR');
    }
  }

  async analyzeBundleSize() {
    this.log('📦 Analyzing bundle size...');
    try {
      const buildDir = path.join(this.projectRoot, '.next/static');
      if (fs.existsSync(buildDir)) {
        const bundleSize = this.getDirectorySize(buildDir);
        this.metrics.bundleSize = bundleSize;
        this.log(`📊 Bundle size: ${(bundleSize / 1024 / 1024).toFixed(2)} MB`);
        
        // Check for large files
        const largeFiles = this.findLargeFiles(buildDir);
        if (largeFiles.length > 0) {
          this.recommendations.push('Consider code splitting for large files');
          this.log(`⚠️ Found ${largeFiles.length} large files (>1MB)`);
        }
      }
    } catch (error) {
      this.log(`❌ Bundle analysis failed: ${error.message}`, 'ERROR');
    }
  }

  async checkMemoryUsage() {
    this.log('🧠 Checking memory usage...');
    try {
      const memUsage = process.memoryUsage();
      this.metrics.memoryUsage = {
        rss: Math.round(memUsage.rss / 1024 / 1024),
        heapTotal: Math.round(memUsage.heapTotal / 1024 / 1024),
        heapUsed: Math.round(memUsage.heapUsed / 1024 / 1024),
        external: Math.round(memUsage.external / 1024 / 1024)
      };
      
      this.log(`📊 Memory usage: ${this.metrics.memoryUsage.heapUsed}MB heap, ${this.metrics.memoryUsage.rss}MB RSS`);
      
      if (this.metrics.memoryUsage.heapUsed > 100) {
        this.recommendations.push('Consider optimizing memory usage - heap usage is high');
      }
    } catch (error) {
      this.log(`❌ Memory check failed: ${error.message}`, 'ERROR');
    }
  }

  getDirectorySize(dirPath) {
    let totalSize = 0;
    const files = fs.readdirSync(dirPath);
    
    for (const file of files) {
      const filePath = path.join(dirPath, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        totalSize += this.getDirectorySize(filePath);
      } else {
        totalSize += stat.size;
      }
    }
    
    return totalSize;
  }

  findLargeFiles(dirPath, threshold = 1024 * 1024) { // 1MB threshold
    const largeFiles = [];
    
    const scanDir = (dir) => {
      const files = fs.readdirSync(dir);
      for (const file of files) {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        
        if (stat.isDirectory()) {
          scanDir(filePath);
        } else if (stat.size > threshold) {
          largeFiles.push({
            path: path.relative(this.projectRoot, filePath),
            size: stat.size
          });
        }
      }
    };
    
    scanDir(dirPath);
    return largeFiles;
  }

  generateRecommendations() {
    // Build time recommendations
    if (this.metrics.buildTime > 60000) { // 1 minute
      this.recommendations.push('Build time is slow - consider optimizing dependencies or using build caching');
    }
    
    // Bundle size recommendations
    if (this.metrics.bundleSize > 5 * 1024 * 1024) { // 5MB
      this.recommendations.push('Bundle size is large - consider code splitting and tree shaking');
    }
    
    // Test time recommendations
    if (this.metrics.testTime > 30000) { // 30 seconds
      this.recommendations.push('Test execution is slow - consider parallel test execution');
    }
    
    // General recommendations
    this.recommendations.push('Enable gzip compression for production');
    this.recommendations.push('Use CDN for static assets');
    this.recommendations.push('Implement lazy loading for components');
  }

  async generateReport() {
    this.log('📊 Generating performance report...');
    
    this.generateRecommendations();
    
    const report = {
      timestamp: new Date().toISOString(),
      metrics: this.metrics,
      recommendations: this.recommendations,
      summary: {
        buildTime: this.metrics.buildTime ? `${this.metrics.buildTime}ms` : 'N/A',
        bundleSize: this.metrics.bundleSize ? `${(this.metrics.bundleSize / 1024 / 1024).toFixed(2)}MB` : 'N/A',
        testTime: this.metrics.testTime ? `${this.metrics.testTime}ms` : 'N/A',
        memoryUsage: this.metrics.memoryUsage ? `${this.metrics.memoryUsage.heapUsed}MB` : 'N/A'
      }
    };
    
    const reportPath = path.join(this.projectRoot, 'performance-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    this.log(`✅ Performance report saved to: ${reportPath}`);
    return report;
  }

  async run() {
    this.log('🎯 Starting Performance Monitoring...');
    this.log('=====================================');
    try {
      await this.measureBuildPerformance();
      await this.measureTestPerformance();
      await this.analyzeBundleSize();
      await this.checkMemoryUsage();
      
      const report = await this.generateReport();
      
      this.log('\n📊 PERFORMANCE MONITORING REPORT');
      this.log('==================================');
      this.log(`Build Time: ${report.summary.buildTime}`);
      this.log(`Bundle Size: ${report.summary.bundleSize}`);
      this.log(`Test Time: ${report.summary.testTime}`);
      this.log(`Memory Usage: ${report.summary.memoryUsage}`);
      
      if (this.recommendations.length > 0) {
        this.log('\n💡 Recommendations:');
        this.recommendations.forEach((rec, index) => {
          this.log(`  ${index + 1}. ${rec}`);
        });
      }
      
      this.log('\n🎉 Performance monitoring completed!');
    } catch (error) {
      this.log(`💥 Fatal error: ${error.message}`, 'ERROR');
      process.exit(1);
    }
  }
}

const monitor = new PerformanceMonitor();

>>>>>>> origin/merge-pr-12271
