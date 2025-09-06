<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
#!/usr/bin/env node/usr/bin/env nodeconst fs = require("fs");"const path = require("path");"const { execSync } = require("child_process");class PerformanceMonitor { constructor() { this.projectRoot = process.cwd(); this.logFile = path.join( this.projectRoot," "automation/logs/performance-monitor.log" ); this.performanceReportFile = path.join( this.projectRoot," "automation/logs/performance-report.json" ); this.lastCheck = null; this.checkInterval = 300000; / 5 minutes this.isRunning = false; this.setupLogging();" this.log("Performance Monitor initialized"); } setupLogging() { const logDir = path.dirname(this.logFile); if (!fs.existsSync(logDir)) { fs.mkdirSync(logDir, { recursive: true }); } } log(message) { const timestamp = new Date().toISOString(); const logMessage = `[${timestamp}] ${message}\n`; process.stdout.write(logMessage); try { fs.appendFileSync(this.logFile, logMessage); } catch (_) { / ignore } } async checkPerformance() { try {" this.log("Checking performance metrics."); const startTime = Date.now(); const systemMetrics = await this.getSystemMetrics(); const buildMetrics = await this.getBuildMetrics(); const bundleMetrics = await this.getBundleMetrics(); const endTime = Date.now(); const checkTime = endTime - startTime; this.lastCheck = {" timestamp: new Date().toISOString(), checkTime, systemMetrics, buildMetrics, bundleMetrics};` this.log(`Performance check completed in ${checkTime}ms`); await this.savePerformanceReport(); await this.checkOptimizationNeeded(); } catch (error) {"` this.log(`Performance check failed: ${error.message}`); await this.reportPerformanceError(error); } } async getSystemMetrics() { try { const metrics = {" memory: process.memoryUsage()," uptime: process.uptime()," cpuUsage: process.cpuUsage()," nodeVersion: process.version," platform: process.platform}; try {" const diskUsage = execSync("df -h .", {" cwd: this.projectRoot,"" encoding: "utf8"," timeout: 10000}); metrics.diskUsage = diskUsage; } catch (_) {" metrics.diskUsage = "Unavailable"; } return metrics; } catch (error) {"` this.log(`Failed to get system metrics: ${error.message}`);" return { error: error.message }; } } async getBuildMetrics() { try {" const buildDir = path.join(this.projectRoot, ".next"); if (!fs.existsSync(buildDir)) {" return { exists: false }; } const stats = fs.statSync(buildDir); const buildSize = this.getDirectorySize(buildDir); return {" exists: true," lastModified: stats.mtime," size: buildSize," age: Date.now() - stats.mtime.getTime()}; } catch (error) {"` this.log(`Failed to get build metrics: ${error.message}`);" return { error: error.message }; } } async getBundleMetrics() { try {" const pkgPath = path.join(this.projectRoot, "package.json"); if (!fs.existsSync(pkgPath)) {" return { analyzerAvailable: false }; }" const packageJson = JSON.parse(fs.readFileSync(pkgPath, "utf8")); const hasAnalyze = packageJson.scripts && packageJson.scripts.analyze; return hasAnalyze"" ? { analyzerAvailable: true, script: "npm run analyze" } : {" analyzerAvailable: false,"" recommendation: "Consider adding bundle analyzer"}; } catch (error) {"` this.log(`Failed to get bundle metrics: ${error.message}`);" return { error: error.message }; } } getDirectorySize(dirPath) { let totalSize = 0; try { const stack = [dirPath]; while (stack.length) { const current = stack.pop();" const entries = fs.readdirSync(current, { withFileTypes: true }); for (const entry of entries) { const full = path.join(current, entry.name); if (entry.isDirectory()) { stack.push(full); } else { try { totalSize += fs.statSync(full).size; } catch (_) {} } } } } catch (_) {} return totalSize; } async checkOptimizationNeeded() { if (!this.lastCheck | !this.lastCheck.systemMetrics) return; try { const memory = this.lastCheck.systemMetrics.memory; const memoryUsagePercent = memory.heapTotal ? (memory.heapUsed / memory.heapTotal) * 100 : 0; if (memoryUsagePercent > 80) {" this.log("High memory usage detected, considering optimization."); await this.optimizeMemory(); } if (this.lastCheck.buildMetrics && this.lastCheck.buildMetrics.exists) { if (this.lastCheck.buildMetrics.age > 3600000) {" this.log("Build is stale, considering rebuild."); await this.optimizeBuild(); } if (this.lastCheck.buildMetrics.size > 100 * 1024 * 1024) {" this.log("Large build size detected, considering optimization."); await this.optimizeBuildSize(); } } } catch (error) {"` this.log(`Optimization check failed: ${error.message}`); } } async optimizeMemory() { try { if (global.gc) { global.gc();" this.log("Garbage collection performed"); } } catch (error) {"` this.log(`Memory optimization failed: ${error.message}`); } } async optimizeBuild() { try {" execSync("npm run clean", {" cwd: this.projectRoot,"" stdio: "ignore"," timeout: 30000});" execSync("npm run build", {" cwd: this.projectRoot,"" stdio: "ignore"," timeout: 300000});" this.log("Build optimization completed"); } catch (error) {"` this.log(`Build optimization failed: ${error.message}`); } } async optimizeBuildSize() { try { const pkg = JSON.parse(" fs.readFileSync(path.join(this.projectRoot, "package.json"), "utf8") ); if (pkg.scripts && pkg.scripts.analyze) {" execSync("npm run analyze", {" cwd: this.projectRoot,"" stdio: "ignore"," timeout: 300000});" this.log("Bundle analysis completed"); } await this.optimizeBuild(); } catch (error) {"` this.log(`Build size optimization failed: ${error.message}`); } } async savePerformanceReport() { const report = {" lastCheck: this.lastCheck," projectRoot: this.projectRoot," recommendations: this.getPerformanceRecommendations()}; try { fs.writeFileSync( this.performanceReportFile, JSON.stringify(report, null, 2) ); } catch (_) {} } getPerformanceRecommendations() { const recommendations = []; if (!this.lastCheck) return recommendations; const metrics = this.lastCheck.systemMetrics; if (metrics && metrics.memory && metrics.memory.heapTotal) { const memoryUsagePercent (metrics.memory.heapUsed / metrics.memory.heapTotal) * 100; if (memoryUsagePercent > 80) { recommendations.push(" "High memory usage detected. Consider optimizing memory usage." ); } if (memoryUsagePercent > 90) { recommendations.push(" "Critical memory usage. Immediate optimization required." ); } } if (this.lastCheck.buildMetrics && this.lastCheck.buildMetrics.exists) { if (this.lastCheck.buildMetrics.age > 3600000) { recommendations.push(" "Build is stale. Consider rebuilding for optimal performance." ); } if (this.lastCheck.buildMetrics.size > 100 * 1024 * 1024) { recommendations.push(" "Large build size detected. Consider code splitting and optimization." ); } } return recommendations; } async reportPerformanceError(error) { try { const errorReport = {" timestamp: new Date().toISOString()," error: error.message," stack: error.stack," projectRoot: this.projectRoot}; const errorFile = path.join( this.projectRoot," "automation/logs/performance-error-report.json" ); fs.writeFileSync(errorFile, JSON.stringify(errorReport, null, 2));" this.log("Performance error reported"); } catch (_) {} } async start() { this.isRunning = true;" this.log("Performance Monitor started"); await this.checkPerformance(); setInterval(async () => { if (!this.isRunning) return; await this.checkPerformance(); }, this.checkInterval);" process.on("SIGTERM", () => {" this.log("Received SIGTERM, shutting down gracefully"); this.isRunning = false; process.exit(0); });" process.on("SIGINT", () => {" this.log("Received SIGINT, shutting down gracefully"); this.isRunning = false; process.exit(0); }); }}const monitor = new PerformanceMonitor();monitor.start().catch(error => {"" console.error("Failed to start performance monitor: ", error); process.exit(1);});""`"`
=======
>>>>>>> main
#!/usr/bin/env node;
/**
 * Performance Monitor - PM2 Automation Script;
 * Monitors application performance and optimizes when needed;
 */
=======
#!/usr/bin/env node
>>>>>>> a44a2a22d07cd86ac622dee3484c03de69b51a7b

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

<<<<<<< HEAD
class PerformanceMonitor {}
  constructor() {}
    this.projectRoot = process.cwd();
    this.logFile = path.join()
      this.projectRoot,
      'automation/logs/performance-monitor.log'
    );
    this.performanceReportFile = path.join()
      this.projectRoot,
      'automation/logs/performance-report.json'
    );
    this.lastCheck = null;
    this.checkInterval = 300000; // 5 minutes;
    this.isRunning = false;

    this.setupLogging();
    this.log('Performance Monitor initialized');
  };
  setupLogging() {}
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
=======
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
#!/usr/bin/env node
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
      lastUpdated: new Date().toISOString(),
    };
    this.logFile = path.join(__dirname, 'logs', 'performance-monitor.log');
    this.ensureLogDirectory();
  }
  ensureLogDirectory() {
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {}
      fs.mkdirSync(logDir, { "recursive": true }
});
    };
  };
  log(message) {}
    const timestamp = new Date().toISOString();
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
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
<<<<<<< HEAD
      return {
        exists: true,
        lastModified: stats.mtime,
        size: buildSize,
        age: Date.now() - stats.mtime.getTime(),
      };
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
=======
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
    const logMessage = `[${timestamp}] [${level}] ${message}\n`;
    console.log(`[${level}] ${message}`);
    fs.appendFileSync(this.logFile, logMessage);
  }
  async monitorPerformance() {
    this.log('⚡ Starting performance monitoring...');
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
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
    } catch (error) {
      this.log(`Failed to get build metrics: ${error.message}`);
      return { error: error.message };
    }
  }
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
  async getBundleMetrics() {
    try {
=======

>>>>>>> main
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
<<<<<<< HEAD
      return hasAnalyze
        ? { analyzerAvailable: true, script: 'npm run analyze' }
        : {
            analyzerAvailable: false,
            recommendation: 'Consider adding bundle analyzer',
          };
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
=======

>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  async measureBuildTime() {
    const startTime = Date.now();
    try {
      execSync('npm run build', { stdio: 'pipe', cwd: process.cwd() });
      return Date.now() - startTime;
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
    } catch (error) {
      this.log(`Failed to get bundle metrics: ${error.message}`);
      return { error: error.message };
    }
  }
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
  getDirectorySize(dirPath) {
=======
>>>>>>> main
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
<<<<<<< HEAD
      }
    } catch (error) {
      this.log(`Memory optimization failed: ${error.message}`);
    }
  }
  async optimizeBuild() {
    try {
      execSync('npm run clean', {
        cwd: this.projectRoot,
        stdio: 'ignore',
        timeout: 30000,
      });
      execSync('npm run build', {
        cwd: this.projectRoot,
        stdio: 'ignore',
        timeout: 300000,
      });
      this.log('Build optimization completed');
    } catch (error) {
      this.log(`Build optimization failed: ${error.message}`);
    }
  }
  async optimizeBuildSize() {
    try {
      const pkg = JSON.parse(
        fs.readFileSync(path.join(this.projectRoot, 'package.json'), 'utf8')
      );
      if (pkg.scripts && pkg.scripts.analyze) {
        execSync('npm run analyze', {
          cwd: this.projectRoot,
          stdio: 'ignore',
          timeout: 300000,
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
=======

>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  async measureBundleSize() {
    try {
      const buildDir = path.join(process.cwd(), '.next');
      if (!fs.existsSync(buildDir)) {
        return 0;
      }
      const getDirSize = dir => {
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
        });
        this.log('Bundle analysis completed');
      }
      await this.optimizeBuild();
    } catch (error) {
      this.log(`Build size optimization failed: ${error.message}`);
    }
  }
<<<<<<< HEAD
=======
<<<<<<< HEAD
  async savePerformanceReport() {
=======
<<<<<<< HEAD
<<<<<<< HEAD
  async savePerformanceReport() {
=======
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127

>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  async saveMetrics() {
    const metricsFile = path.join(
      __dirname,
      'reports',
      'performance-metrics.json'
    );
    fs.mkdirSync(path.dirname(metricsFile), { recursive: true });
    fs.writeFileSync(metricsFile, JSON.stringify(this.metrics, null, 2));
  }
  async generatePerformanceReport() {
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
    const report = {
      lastCheck: this.lastCheck,
      projectRoot: this.projectRoot,
      recommendations: this.getPerformanceRecommendations(),
    };
    try {
      fs.writeFileSync(
        this.performanceReportFile,
        JSON.stringify(report, null, 2)
      );
    } catch (_) {}
  }
<<<<<<< HEAD
  getPerformanceRecommendations() {
=======
<<<<<<< HEAD
<<<<<<< HEAD
  getPerformanceRecommendations() {
=======

  generateRecommendations() {
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======

  generateRecommendations() {
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
    const recommendations = [];
    if (!this.lastCheck) return recommendations;
    const metrics = this.lastCheck.systemMetrics;
    if (metrics && metrics.memory && metrics.memory.heapTotal) {
      const memoryUsagePercent =
        (metrics.memory.heapUsed / metrics.memory.heapTotal) * 100;
      if (memoryUsagePercent > 80) {
        recommendations.push(
          'High memory usage detected. Consider optimizing memory usage.'
        );
      }
      if (memoryUsagePercent > 90) {
        recommendations.push(
          'Critical memory usage. Immediate optimization required.'
        );
      }
    }
    if (this.lastCheck.buildMetrics && this.lastCheck.buildMetrics.exists) {
      if (this.lastCheck.buildMetrics.age > 3600000) {
        recommendations.push(
          'Build is stale. Consider rebuilding for optimal performance.'
        );
      }
      if (this.lastCheck.buildMetrics.size > 100 * 1024 * 1024) {
        recommendations.push(
          'Large build size detected. Consider code splitting and optimization.'
        );
      }
    }
    return recommendations;
  }
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
  async reportPerformanceError(error) {
    try {
      const errorReport = {
        timestamp: new Date().toISOString(),
        error: error.message,
        stack: error.stack,
        projectRoot: this.projectRoot,
      };
      const errorFile = path.join(
=======
>>>>>>> main
      };
    } catch (error) {}
      this.log(`Memory optimization "failed": ${error.message}`);
    };
  };
  async optimizeBuild() {}
    try {}
      execSync('npm run clean', {})
        "cwd": this.projectRoot,
        "stdio": 'ignore',
        "timeout": 30000}
});
      execSync('npm run build', {})
        "cwd": this.projectRoot,
        "stdio": 'ignore',
        "timeout": 300000}
});
      this.log('Build optimization completed');
    } catch (error) {}
      this.log(`Build optimization "failed": ${error.message}`);
    };
  };
  async optimizeBuildSize() {}
    try {}
      const pkg = JSON.parse()
        fs.readFileSync(path.join(this.projectRoot, 'package.json'), 'utf8');
      );
      if (pkg.scripts && pkg.scripts.analyze) {}
        execSync('npm run analyze', {})
          "cwd": this.projectRoot,
          "stdio": 'ignore',
          "timeout": 300000}
});
        this.log('Bundle analysis completed');
      };
      await this.optimizeBuild();
    } catch (error) {}
      this.log(`Build size optimization "failed": ${error.message}`);
    };
  };
  async savePerformanceReport() {}
    const report = {}
      "lastCheck": this.lastCheck,
      "projectRoot": this.projectRoot,
      "recommendations": this.getPerformanceRecommendations()};
    try {}
      fs.writeFileSync()
        this.performanceReportFile,
        JSON.stringify(report, null, 2);
      );
    } catch (_) {};
  };
  getPerformanceRecommendations() {}
    const recommendations = [];
    if (!this.lastCheck) return recommendations;
    const metrics = this.lastCheck.systemMetrics;
    if (metrics && metrics.memory && metrics.memory.heapTotal) {}
      const memoryUsagePercent =
        (metrics.memory.heapUsed / metrics.memory.heapTotal) * 100;
      if (memoryUsagePercent > 80) {}
        recommendations.push()
          'High memory usage detected. Consider optimizing memory usage.'
        );
      };
      if (memoryUsagePercent > 90) {}
        recommendations.push()
          'Critical memory usage. Immediate optimization required.'
        );
      };
    };
    if (this.lastCheck.buildMetrics && this.lastCheck.buildMetrics.exists) {}
      if (this.lastCheck.buildMetrics.age > 3600000) {}
        recommendations.push()
          'Build is stale. Consider rebuilding for optimal performance.'
        );
      };
      if (this.lastCheck.buildMetrics.size > 100 * 1024 * 1024) {}
        recommendations.push()
          'Large build size detected. Consider code splitting and optimization.'
        );
      };
    };
    return recommendations;
  };
  async reportPerformanceError(error) {}
    try {}
      const errorReport = {}
        "timestamp": new Date().toISOString(),
        "error": error.message,
        "stack": error.stack,
        "projectRoot": this.projectRoot};
      const errorFile = path.join()
        this.projectRoot,
        'automation/logs/performance-error-report.json'
      );
      fs.writeFileSync(errorFile, JSON.stringify(errorReport, null, 2));
      this.log('Performance error reported');
    } catch (_) {};
  };
  async start() {}
    this.isRunning = true;
    this.log('Performance Monitor started');
    await this.checkPerformance();
    setInterval(async () => {}
      if (!this.isRunning) return;
      await this.checkPerformance();
    }, this.checkInterval);

    process.on('SIGTERM', () => {}
      this.log('Received SIGTERM, shutting down gracefully');
      this.isRunning = false;
      process.exit(0);
<<<<<<< HEAD
    }
});
    process.on('SIGINT', () => {}
      this.log('Received SIGINT, shutting down gracefully');
      this.isRunning = false;
      process.exit(0);
    }
});
  };
};
const monitor = new PerformanceMonitor();
monitor.start().catch(error => {})
  console.error('Failed to start performance "monitor": ', error);
  process.exit(1);
});
}
<<<<<<< HEAD
});
=======
<<<<<<< HEAD
});
=======
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
}

>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
// Run if called directly
if (require.main === module) {
    const monitor = new PerformanceMonitor(),
    monitor.monitorPerformance().catch(console.error)
  }
<<<<<<< HEAD
module.exports = PerformanceMonitor;
=======

module.exports = PerformanceMonitor;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
=======
=======
class PerformanceMonitor {
  constructor() {
    this.projectRoot = process.cwd();
    this.metrics = {};
    this.performanceIssues = [];
    this.optimizations = [];
  }

  log(message) {
    console.log(`[${new Date().toISOString()}] [PERFORMANCE-MONITOR] ${message}`);
  }

  async measureBuildPerformance() {
    this.log('🏗️ Measuring build performance...');
    
    try {
      const startTime = Date.now();
      
      // Run build
      execSync('npm run build', { 
        stdio: 'pipe',
        encoding: 'utf8'
      });
      
      const endTime = Date.now();
      const buildTime = endTime - startTime;
      
      this.metrics.buildTime = buildTime;
      this.log(`Build completed in ${buildTime}ms`);
      
      // Check bundle size
      const buildDir = path.join(this.projectRoot, '.next');
      if (fs.existsSync(buildDir)) {
        const bundleSize = this.getDirectorySize(buildDir);
        this.metrics.bundleSize = bundleSize;
        this.log(`Bundle size: ${(bundleSize / 1024 / 1024).toFixed(2)} MB`);
      }
      
    } catch (error) {
      this.log(`❌ Build performance measurement failed: ${error.message}`);
    }
  }

  async measureLintPerformance() {
    this.log('🔍 Measuring lint performance...');
    
    try {
      const startTime = Date.now();
      
      execSync('npm run lint', { 
        stdio: 'pipe',
        encoding: 'utf8'
      });
      
      const endTime = Date.now();
      const lintTime = endTime - startTime;
      
      this.metrics.lintTime = lintTime;
      this.log(`Lint completed in ${lintTime}ms`);
      
    } catch (error) {
      this.log(`❌ Lint performance measurement failed: ${error.message}`);
    }
  }

  async measureTypeCheckPerformance() {
    this.log('📝 Measuring TypeScript type check performance...');
    
    try {
      const startTime = Date.now();
      
      execSync('npm run type-check', { 
        stdio: 'pipe',
        encoding: 'utf8'
      });
      
      const endTime = Date.now();
      const typeCheckTime = endTime - startTime;
      
      this.metrics.typeCheckTime = typeCheckTime;
      this.log(`Type check completed in ${typeCheckTime}ms`);
      
    } catch (error) {
      this.log(`❌ Type check performance measurement failed: ${error.message}`);
    }
  }

  async analyzeCodePerformance() {
    this.log('💻 Analyzing code performance...');
    
    try {
      const srcFiles = this.findSourceFiles();
      let performanceIssues = 0;
      
      for (const file of srcFiles) {
        const content = fs.readFileSync(file, 'utf8');
        
        // Check for performance anti-patterns
        if (content.includes('useEffect(() => {}, [])') && content.includes('setState')) {
          performanceIssues++;
          this.performanceIssues.push({
            file: file,
            type: 'infinite_rerender',
            severity: 'warning',
            message: 'Potential infinite re-render in useEffect'
          });
        }
        
        if (content.includes('console.log') || content.includes('console.warn')) {
          performanceIssues++;
          this.performanceIssues.push({
            file: file,
            type: 'console_statements',
            severity: 'info',
            message: 'Console statements found (remove in production)'
          });
        }
        
        if (content.includes('document.querySelector') && !content.includes('useEffect')) {
          performanceIssues++;
          this.performanceIssues.push({
            file: file,
            type: 'dom_manipulation',
            severity: 'warning',
            message: 'Direct DOM manipulation detected (use React refs instead)'
          });
        }
        
        if (content.includes('Array.map') && content.includes('Array.map')) {
          performanceIssues++;
          this.performanceIssues.push({
            file: file,
            type: 'nested_loops',
            severity: 'warning',
            message: 'Nested array operations detected (consider optimization)'
          });
        }
      }
      
      this.log(`${performanceIssues > 0 ? '⚠️' : '✅'} Found ${performanceIssues} performance issues`);
      
    } catch (error) {
      this.log(`❌ Code performance analysis failed: ${error.message}`);
    }
  }

  async analyzeDependencies() {
    this.log('📚 Analyzing dependencies for performance...');
    
    try {
      const packageJson = JSON.parse(fs.readFileSync(path.join(this.projectRoot, 'package.json'), 'utf8'));
      const dependencies = { ...packageJson.dependencies, ...packageJson.devDependencies };
      
      let heavyDependencies = 0;
      const knownHeavyDeps = ['lodash', 'moment', 'jquery', 'bootstrap', 'material-ui'];
      
      for (const dep of knownHeavyDeps) {
        if (dependencies[dep]) {
          heavyDependencies++;
          this.performanceIssues.push({
            type: 'heavy_dependency',
            severity: 'info',
            message: `Heavy dependency detected: ${dep}`,
            suggestion: `Consider using lighter alternatives like date-fns instead of moment`
          });
        }
      }
      
      this.log(`${heavyDependencies > 0 ? '⚠️' : '✅'} Found ${heavyDependencies} heavy dependencies`);
      
    } catch (error) {
      this.log(`❌ Dependencies analysis failed: ${error.message}`);
    }
  }

  async generateOptimizations() {
    this.log('⚡ Generating performance optimizations...');
    
    // Generate optimizations based on findings
    if (this.metrics.buildTime > 30000) { // 30 seconds
      this.optimizations.push({
        priority: 'high',
        category: 'build_performance',
        message: 'Build time is slow',
        action: 'Consider code splitting, lazy loading, and reducing bundle size'
      });
    }
    
    if (this.metrics.bundleSize > 5 * 1024 * 1024) { // 5MB
      this.optimizations.push({
        priority: 'high',
        category: 'bundle_size',
        message: 'Bundle size is large',
        action: 'Implement code splitting, tree shaking, and remove unused code'
      });
    }
    
    const infiniteRerenderIssues = this.performanceIssues.filter(issue => issue.type === 'infinite_rerender');
    if (infiniteRerenderIssues.length > 0) {
      this.optimizations.push({
        priority: 'high',
        category: 'react_performance',
        message: 'Infinite re-render issues detected',
        action: 'Fix useEffect dependencies and state updates to prevent infinite loops'
      });
    }
    
    const consoleIssues = this.performanceIssues.filter(issue => issue.type === 'console_statements');
    if (consoleIssues.length > 0) {
      this.optimizations.push({
        priority: 'medium',
        category: 'production_optimization',
        message: 'Console statements in production code',
        action: 'Remove console.log statements or use a build-time tool to strip them'
      });
    }
    
    const heavyDepIssues = this.performanceIssues.filter(issue => issue.type === 'heavy_dependency');
    if (heavyDepIssues.length > 0) {
      this.optimizations.push({
        priority: 'medium',
        category: 'dependencies',
        message: 'Heavy dependencies detected',
        action: 'Consider replacing heavy dependencies with lighter alternatives'
      });
    }
  }

  findSourceFiles() {
    const srcFiles = [];
    const srcDir = path.join(this.projectRoot, 'src');
    const pagesDir = path.join(this.projectRoot, 'pages');
    const componentsDir = path.join(this.projectRoot, 'components');
    
    const dirs = [srcDir, pagesDir, componentsDir].filter(dir => fs.existsSync(dir));
    
    for (const dir of dirs) {
      this.findFilesRecursively(dir, srcFiles);
    }
    
    return srcFiles.filter(file => 
      /\.(ts|tsx|js|jsx)$/.test(file) && 
      !file.includes('node_modules') &&
      !file.includes('.next')
    );
  }

  findFilesRecursively(dir, files) {
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        this.findFilesRecursively(fullPath, files);
      } else if (/\.(ts|tsx|js|jsx)$/.test(item)) {
        files.push(fullPath);
      }
    }
  }

  getDirectorySize(dir) {
    let size = 0;
    const files = fs.readdirSync(dir);
    
    for (const file of files) {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        size += this.getDirectorySize(filePath);
      } else {
        size += stat.size;
      }
    }
    
    return size;
  }

  generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      metrics: this.metrics,
      performanceIssues: this.performanceIssues,
      optimizations: this.optimizations,
      summary: {
        buildTime: this.metrics.buildTime || 0,
        bundleSize: this.metrics.bundleSize || 0,
        totalIssues: this.performanceIssues.length,
        criticalIssues: this.performanceIssues.filter(i => i.severity === 'error').length,
        warnings: this.performanceIssues.filter(i => i.severity === 'warning').length,
        info: this.performanceIssues.filter(i => i.severity === 'info').length,
        totalOptimizations: this.optimizations.length
      }
    };

    const reportPath = path.join(this.projectRoot, 'performance-monitor-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    this.log(`📊 Performance report saved to: ${reportPath}`);
    
    return report;
  }

  async run() {
    this.log('🚀 Starting Performance Monitor...');
    
    try {
      await this.measureBuildPerformance();
      await this.measureLintPerformance();
      await this.measureTypeCheckPerformance();
      await this.analyzeCodePerformance();
      await this.analyzeDependencies();
      await this.generateOptimizations();
      
      const report = this.generateReport();
      
      this.log('✅ Performance Monitor completed!');
      this.log(`📈 Found ${report.summary.totalIssues} performance issues and ${report.summary.totalOptimizations} optimizations`);
      
      return report;
    } catch (error) {
      this.log(`❌ Performance Monitor failed: ${error.message}`);
      throw error;
>>>>>>> a44a2a22d07cd86ac622dee3484c03de69b51a7b
    }
  }
}

// Run the performance monitor
const monitor = new PerformanceMonitor();
<<<<<<< HEAD
monitor.start().catch(error => {})
  console.error('Failed to start performance "monitor": ', error);
  process.exit(1);
}
});
=======
monitor.run().catch(console.error);
>>>>>>> a44a2a22d07cd86ac622dee3484c03de69b51a7b
>>>>>>> main
