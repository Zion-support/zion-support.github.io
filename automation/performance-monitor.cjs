

#!/usr/bin/env node/usr/bin/env nodeconst fs = require("fs");"const path = require("path");"const { execSync } = require("child_process");class PerformanceMonitor { constructor() { this.projectRoot = process.cwd(); this.logFile = path.join( this.projectRoot," "automation/logs/performance-monitor.log" ); this.performanceReportFile = path.join( this.projectRoot," "automation/logs/performance-report.json" ); this.lastCheck = null; this.checkInterval = 300000; / 5 minutes this.isRunning = false; this.setupLogging();" this.log("Performance Monitor initialized"); } setupLogging() { const logDir = path.dirname(this.logFile); if (!fs.existsSync(logDir)) { fs.mkdirSync(logDir, { recursive: true }); } } log(message) { const timestamp = new Date().toISOString(); const logMessage = `[${timestamp}] ${message}\n`; process.stdout.write(logMessage); try { fs.appendFileSync(this.logFile, logMessage); } catch (_) { / ignore } } async checkPerformance() { try {" this.log("Checking performance metrics."); const startTime = Date.now(); const systemMetrics = await this.getSystemMetrics(); const buildMetrics = await this.getBuildMetrics(); const bundleMetrics = await this.getBundleMetrics(); const endTime = Date.now(); const checkTime = endTime - startTime; this.lastCheck = {" timestamp: new Date().toISOString(), checkTime, systemMetrics, buildMetrics, bundleMetrics};` this.log(`Performance check completed in ${checkTime}ms`); await this.savePerformanceReport(); await this.checkOptimizationNeeded(); } catch (error) {"` this.log(`Performance check failed: ${error.message}`); await this.reportPerformanceError(error); } } async getSystemMetrics() { try { const metrics = {" memory: process.memoryUsage()," uptime: process.uptime()," cpuUsage: process.cpuUsage()," nodeVersion: process.version," platform: process.platform}; try {" const diskUsage = execSync("df -h .", {" cwd: this.projectRoot,"" encoding: "utf8"," timeout: 10000}); metrics.diskUsage = diskUsage; } catch (_) {" metrics.diskUsage = "Unavailable"; } return metrics; } catch (error) {"` this.log(`Failed to get system metrics: ${error.message}`);" return { error: error.message }; } } async getBuildMetrics() { try {" const buildDir = path.join(this.projectRoot, ".next"); if (!fs.existsSync(buildDir)) {" return { exists: false }; } const stats = fs.statSync(buildDir); const buildSize = this.getDirectorySize(buildDir); return {" exists: true," lastModified: stats.mtime," size: buildSize," age: Date.now() - stats.mtime.getTime()}; } catch (error) {"` this.log(`Failed to get build metrics: ${error.message}`);" return { error: error.message }; } } async getBundleMetrics() { try {" const pkgPath = path.join(this.projectRoot, "package.json"); if (!fs.existsSync(pkgPath)) {" return { analyzerAvailable: false }; }" const packageJson = JSON.parse(fs.readFileSync(pkgPath, "utf8")); const hasAnalyze = packageJson.scripts && packageJson.scripts.analyze; return hasAnalyze"" ? { analyzerAvailable: true, script: "npm run analyze" } : {" analyzerAvailable: false,"" recommendation: "Consider adding bundle analyzer"}; } catch (error) {"` this.log(`Failed to get bundle metrics: ${error.message}`);" return { error: error.message }; } } getDirectorySize(dirPath) { let totalSize = 0; try { const stack = [dirPath]; while (stack.length) { const current = stack.pop();" const entries = fs.readdirSync(current, { withFileTypes: true }); for (const entry of entries) { const full = path.join(current, entry.name); if (entry.isDirectory()) { stack.push(full); } else { try { totalSize += fs.statSync(full).size; } catch (_) {} } } } } catch (_) {} return totalSize; } async checkOptimizationNeeded() { if (!this.lastCheck | !this.lastCheck.systemMetrics) return; try { const memory = this.lastCheck.systemMetrics.memory; const memoryUsagePercent = memory.heapTotal ? (memory.heapUsed / memory.heapTotal) * 100 : 0; if (memoryUsagePercent > 80) {" this.log("High memory usage detected, considering optimization."); await this.optimizeMemory(); } if (this.lastCheck.buildMetrics && this.lastCheck.buildMetrics.exists) { if (this.lastCheck.buildMetrics.age > 3600000) {" this.log("Build is stale, considering rebuild."); await this.optimizeBuild(); } if (this.lastCheck.buildMetrics.size > 100 * 1024 * 1024) {" this.log("Large build size detected, considering optimization."); await this.optimizeBuildSize(); } } } catch (error) {"` this.log(`Optimization check failed: ${error.message}`); } } async optimizeMemory() { try { if (global.gc) { global.gc();" this.log("Garbage collection performed"); } } catch (error) {"` this.log(`Memory optimization failed: ${error.message}`); } } async optimizeBuild() { try {" execSync("npm run clean", {" cwd: this.projectRoot,"" stdio: "ignore"," timeout: 30000});" execSync("npm run build", {" cwd: this.projectRoot,"" stdio: "ignore"," timeout: 300000});" this.log("Build optimization completed"); } catch (error) {"` this.log(`Build optimization failed: ${error.message}`); } } async optimizeBuildSize() { try { const pkg = JSON.parse(" fs.readFileSync(path.join(this.projectRoot, "package.json"), "utf8") ); if (pkg.scripts && pkg.scripts.analyze) {" execSync("npm run analyze", {" cwd: this.projectRoot,"" stdio: "ignore"," timeout: 300000});" this.log("Bundle analysis completed"); } await this.optimizeBuild(); } catch (error) {"` this.log(`Build size optimization failed: ${error.message}`); } } async savePerformanceReport() { const report = {" lastCheck: this.lastCheck," projectRoot: this.projectRoot," recommendations: this.getPerformanceRecommendations()}; try { fs.writeFileSync( this.performanceReportFile, JSON.stringify(report, null, 2) ); } catch (_) {} } getPerformanceRecommendations() { const recommendations = []; if (!this.lastCheck) return recommendations; const metrics = this.lastCheck.systemMetrics; if (metrics && metrics.memory && metrics.memory.heapTotal) { const memoryUsagePercent (metrics.memory.heapUsed / metrics.memory.heapTotal) * 100; if (memoryUsagePercent > 80) { recommendations.push(" "High memory usage detected. Consider optimizing memory usage." ); } if (memoryUsagePercent > 90) { recommendations.push(" "Critical memory usage. Immediate optimization required." ); } } if (this.lastCheck.buildMetrics && this.lastCheck.buildMetrics.exists) { if (this.lastCheck.buildMetrics.age > 3600000) { recommendations.push(" "Build is stale. Consider rebuilding for optimal performance." ); } if (this.lastCheck.buildMetrics.size > 100 * 1024 * 1024) { recommendations.push(" "Large build size detected. Consider code splitting and optimization." ); } } return recommendations; } async reportPerformanceError(error) { try { const errorReport = {" timestamp: new Date().toISOString()," error: error.message," stack: error.stack," projectRoot: this.projectRoot}; const errorFile = path.join( this.projectRoot," "automation/logs/performance-error-report.json" ); fs.writeFileSync(errorFile, JSON.stringify(errorReport, null, 2));" this.log("Performance error reported"); } catch (_) {} } async start() { this.isRunning = true;" this.log("Performance Monitor started"); await this.checkPerformance(); setInterval(async () => { if (!this.isRunning) return; await this.checkPerformance(); }, this.checkInterval);" process.on("SIGTERM", () => {" this.log("Received SIGTERM, shutting down gracefully"); this.isRunning = false; process.exit(0); });" process.on("SIGINT", () => {" this.log("Received SIGINT, shutting down gracefully"); this.isRunning = false; process.exit(0); }); }}const monitor = new PerformanceMonitor();monitor.start().catch(error => {"" console.error("Failed to start performance monitor: ", error); process.exit(1);});""`"`
<<<<<<< HEAD
main
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295

#!/usr/bin/env node;
/**
 * Performance Monitor - PM2 Automation Script;
 * Monitors application performance and optimizes when needed;
 */
<<<<<<< HEAD
#!/usr/bin/env node


main
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

#!/usr/bin/env node


main
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

=======

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295

class PerformanceMonitor {
  constructor() {
    this.logsDir = path.join(__dirname, '../logs');
    this.ensureLogsDir();
  }

  ensureLogsDir() {
    if (!fs.existsSync(this.logsDir)) {
      fs.mkdirSync(this.logsDir, { recursive: true });
    }
  }

  log(message, type = 'info') {
    const timestamp = new Date().toISOString();
<<<<<<< HEAD
origin/cursor/integrate-build-improve-and-re-verify-c7b5

=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295

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



    const logMessage = `[${timestamp}] [${level}] ${message}\n`;
    console.log(`[${level}] ${message}`);
    fs.appendFileSync(this.logFile, logMessage);
main
=======
    const logMessage = `[${timestamp}] [${level}] ${message}\n`;
    console.log(`[${level}] ${message}`);
    fs.appendFileSync(this.logFile, logMessage);

>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
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
origin/cursor/integrate-build-improve-and-re-verify-c7b5

=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295

    } catch (error) {
      this.log(`Failed to get build metrics: ${error.message}`);
      return { error: error.message };
    }
  }

<<<<<<< HEAD

  async getBundleMetrics() {
    try {

main

=======
  async getBundleMetrics() {
    try {

>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
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


  async measureBuildTime() {
main
    const startTime = Date.now();
    
    try {
      execSync('npm run build', { stdio: 'pipe', cwd: process.cwd() });
      return Date.now() - startTime;
origin/cursor/integrate-build-improve-and-re-verify-c7b5

=======
  async measureBuildTime() {

    const startTime = Date.now();
    
    try {
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295

    } catch (error) {
      this.log(`Failed to get bundle metrics: ${error.message}`);
      return { error: error.message };
    }
  }

<<<<<<< HEAD

  getDirectorySize(dirPath) {
main
=======
  getDirectorySize(dirPath) {
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295

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
        });
        this.log('Bundle analysis completed');
      }
      await this.optimizeBuild();
        });
        this.log('Bundle analysis completed');
      }
      await this.optimizeBuild();
    } catch (error) {
      this.log(`Build size optimization failed: ${error.message}`);
    }
  }

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

  generateRecommendations() {

  generateRecommendations() {

  generateRecommendations() {
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
  async reportPerformanceError(error) {
    try {
      const errorReport = {
      const errorFile = path.join(
main
=======

      }
      
      const performance = {
        timestamp: new Date().toISOString(),
        buildTime: buildTime,
        bundleSize: bundleSize,
        totalTime: Date.now() - startTime,
        recommendations: []
      };
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295

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

}

<<<<<<< HEAD

=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
// Run if called directly
if (require.main === module) {
    const monitor = new PerformanceMonitor(),
    monitor.monitorPerformance().catch(console.error)
  }

<<<<<<< HEAD
module.exports = PerformanceMonitor;
origin/cursor/integrate-build-improve-and-re-verify-c7b5


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
main
      
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
      // Generate recommendations
      if (buildTime > 30000) {
        performance.recommendations.push('Build time is slow - consider optimizing dependencies');
      }
      
      if (bundleSize > 5000000) { // 5MB
        performance.recommendations.push('Bundle size is large - consider code splitting');
      }
      
      const reportFile = path.join(this.logsDir, 'performance-report.json');
      fs.writeFileSync(reportFile, JSON.stringify(performance, null, 2));
      
      this.log(`📊 Performance Report:`);
      this.log(`Build time: ${buildTime}ms`);
      this.log(`Bundle size: ${(bundleSize / 1024 / 1024).toFixed(2)}MB`);
      this.log(`Recommendations: ${performance.recommendations.length}`);
      
      return performance;
      
    } catch (error) {
      this.log(`Performance monitoring failed: ${error.message}`, 'error');
      throw error;
    }
  }

  async runCommand(command, description) {
    try {
      this.log(`Running: ${description}`);
      const output = execSync(command, { 
        encoding: 'utf8', 
        cwd: '/workspace',
        stdio: 'pipe'
      });
      this.log(`✅ ${description} completed successfully`);
      return output;
    } catch (error) {
      this.log(`❌ ${description} failed: ${error.message}`, 'error');
      throw error;
    }
  }

  getDirectorySize(dirPath) {
    let size = 0;
    const items = fs.readdirSync(dirPath);
    
    for (const item of items) {
      const fullPath = path.join(dirPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        size += this.getDirectorySize(fullPath);
      } else {
        size += stat.size;
      }
    }
    
    return size;
  }
}

const monitor = new PerformanceMonitor();
<<<<<<< HEAD
monitor.run().catch(console.error);

main

main

=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295

