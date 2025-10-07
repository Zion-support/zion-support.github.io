#!/usr/bin/env node;
/**
 * Performance Monitor - PM2 Automation Script;
 * Monitors application performance and optimizes when needed;
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

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
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {}
      fs.mkdirSync(logDir, { "recursive": true }
});
    };
  };
  log(message) {}
    const timestamp = new Date().toISOString();

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

      return {}
        exists: true,
        "lastModified": stats.mtime,
        size: buildSize,
        "age": Date.now() - stats.mtime.getTime()}
    } catch (error) {}
      this.log(`Failed to get build metrics: ${error.message}`);
      return { "error": error.message }
    }
  }
  async getBundleMetrics() {}
    try {}
      const pkgPath = path.join(this.projectRoot, 'package.json);
      if (!fs.existsSync(pkgPath)) {}
        return { analyzerAvailable: false }
      }
      const packageJson = JSON.parse(fs.readFileSync(pkgPath, utf8'));
      const hasAnalyze = packageJson.scripts && packageJson.scripts.analyze;
      return hasAnalyze
        ? { analyzerAvailable: true, script: 'npm run analyze }
        : {
            analyzerAvailable: false,
            recommendation: Consider adding bundle analyzer'}

  async measureBuildTime() {

    
    





















  async monitorPerformance() {"

    try {
      // Build performance
      const buildStart = Date.now();
      await this.runCommand('npm run build, Build performance test');
      const buildTime = Date.now() - buildStart;
      
      // Bundle size analysis
      const distPath = '/workspace/dist;
      let bundleSize = 0;
      if (fs.existsSync(distPath)) {
        bundleSize = this.getDirectorySize(distPath);
      execSync(npm run build', { stdio: 'pipe, cwd: process.cwd() });
      return Date.now() - startTime;


;
  async monitorPerformance() {;
    this.log('⚡ Starting performance monitoring...');
;
    try {;
      // Monitor build time;
      const buildTime = await this.measureBuildTime();
      this.metrics.buildTime = buildTime;
;
      // Monitor bundle size;
      const bundleSize = await this.measureBundleSize();
      this.metrics.bundleSize = bundleSize;
;
      // Monitor memory usage;
      const memoryUsage = process.memoryUsage();
      this.metrics.memoryUsage = memoryUsage.heapUsed / 1024 / 1024; // MB;
      // Monitor CPU usage;
      const cpuUsage = process.cpuUsage();
      this.metrics.cpuUsage = cpuUsage.user / 1000000; // seconds;
      this.metrics.lastUpdated = new Date().toISOString();
;
      await this.saveMetrics();
      await this.generatePerformanceReport();
;
      this.log('Performance monitoring completed');
      return this.metrics;






      return { error: error.message };


      return {}
        "exists": true,
        "lastModified": stats.mtime,
        "size": buildSize,
        "age": Date.now() - stats.mtime.getTime()};"
    } catch (error) {}"
      this.log(`Failed to get build "metrics": ${error.message});
      return { "error": error.message };"
    };
  };
  async getBundleMetrics() {}
    try {}"
      const pkgPath = path.join(this.projectRoot,package.json');
      if (!fs.existsSync(pkgPath)) {}
        return { "analyzerAvailable": false };"
      };"
      const packageJson = JSON.parse(fs.readFileSync(pkgPath,utf8));

      const hasAnalyze = packageJson.scripts && packageJson.scripts.analyze;
      return hasAnalyze;
        ? { "analyzerAvailable": true, script: npm run analyze' }
        : {}
            "analyzerAvailable": false,
            recommendation: 'Consider adding bundle analyzer}
    } catch (error) {}
      this.log(`Failed to get bundle "metrics": ${error.message}`);
      return { error: error.message }
    }
  }
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
            } catch (_) {}
          }
        }
      }
    } catch (_) {}
    return totalSize;
  }
  async checkOptimizationNeeded() {}
    if (!this.lastCheck || !this.lastCheck.systemMetrics) return;
    try {}
      const memory = this.lastCheck.systemMetrics.memory;
      const memoryUsagePercent = memory.heapTotal;
        ? (memory.heapUsed / memory.heapTotal) * 100;
        : 0;
      if (memoryUsagePercent > 80) {}
        this.log(High memory usage detected, considering optimization...');
        await this.optimizeMemory();
      }
      if (this.lastCheck.buildMetrics && this.lastCheck.buildMetrics.exists) {}
        if (this.lastCheck.buildMetrics.age > 3600000) {}
          this.log('Build is stale, considering rebuild...);
          await this.optimizeBuild();
        }
        if (this.lastCheck.buildMetrics.size > 100 * 1024 * 1024) {}
          this.log(Large build size detected, considering optimization...');
          await this.optimizeBuildSize();
        }
      }
    } catch (error) {}
      this.log(`Optimization check failed: ${error.message}`);
    }
  }
  async optimizeMemory() {}
    try {}
      if (global.gc) {}
        global.gc();
        this.log('Garbage collection performed');
      };
    } catch (error) {}
      this.log(`Memory optimization "failed": ${error.message});"
    };
  };
  async optimizeBuild() {}
    try {}"
      execSync('npm run clean, {})
        "cwd": this.projectRoot,
        "stdio": ignore,
        "timeout": 30000}"
});"
      execSync('npm run build, {})
        "cwd": this.projectRoot,
        "stdio": ignore,
        "timeout": 300000}"
});"
      this.log('Build optimization completed');
    } catch (error) {}
      this.log(`Build optimization "failed": ${error.message});"
    };
  };

  async optimizeBuildSize() {}
      const pkg = JSON.parse()"

  async savePerformanceReport() {}
    const report = {}"
      "lastCheck": this.lastCheck,
      "projectRoot": this.projectRoot,
      "recommendations": this.getPerformanceRecommendations()};"
      fs.writeFileSync()
        this.performanceReportFile,
        JSON.stringify(report, null, 2);
  getPerformanceRecommendations() {}
    if (metrics && metrics.memory && metrics.memory.heapTotal) {}
      if (memoryUsagePercent > 80) {}
        recommendations.push()"
          'High memory usage detected. Consider optimizing memory usage.

        "projectRoot": this.projectRoot};"
      const errorFile = path.join()
        this.projectRoot,"
        'automation/logs/performance-error-report.json

  async start() {}
    this.isRunning = true
    this.log('Performance Monitor started')
    await this.checkPerformance()
    setInterval(async () => {}
      if (!this.isRunning) return;
    }, this.checkInterval);

    process.on('SIGTERM', () => {}
      this.log('Received SIGTERM, shutting down gracefully');
      this.isRunning = false;
      process.exit(0);
    }
});
    process.on('SIGINT', () => {}

// Run if called directly
if (require.main === module) {
    const monitor = new PerformanceMonitor(),
    monitor.monitorPerformance().catch(console.error)
  }

module.exports = PerformanceMonitor;

module.exports = PerformanceMonitor;

module.exports = PerformanceMonitor;
origin/cursor/integrate-build-improve-and-re-verify-c7b5



    this.metrics = {};
    this.performanceIssues = [];
    this.optimizations = [];


  async measureBuildPerformance() {
    this.log(🏗️ Measuring build performance...');
    
    try {

main
      
      // Generate recommendations
  // TODO: Implement




      // Generate recommendations;
      if (buildTime > 30000) {
        performance.recommendations.push('Build time is slow - consider optimizing dependencies);
      }
    } catch (error) {
      this.log(`❌ Build performance measurement failed: ${error.message}`, ERROR');
    }
  }

  async measureTestPerformance() {
    this.log('🧪 Measuring test performance...);
    try {
      execSync(npm test -- --passWithNoTests', { 
        cwd: this.projectRoot, 
        stdio: 'pipe 
      });
      const testTime = Date.now() - startTime;
      
      this.metrics.testTime = testTime;
      this.log(`✅ Tests completed in ${testTime}ms`);
    } catch (error) {
      this.log(`❌ Test performance measurement failed: ${error.message}`, ERROR');
    }
  }

  async analyzeBundleSize() {
    this.log('📦 Analyzing bundle size...);
    try {
      const buildDir = path.join(this.projectRoot, .next/static');
      if (fs.existsSync(buildDir)) {
        const bundleSize = this.getDirectorySize(buildDir);
        this.metrics.bundleSize = bundleSize;
        this.log(`📊 Bundle size: ${(bundleSize / 1024 / 1024).toFixed(2)} MB`);
        
        // Check for large files
        const largeFiles = this.findLargeFiles(buildDir);
        if (largeFiles.length > 0) {
          this.recommendations.push('Consider code splitting for large files);
          this.log(`⚠️ Found ${largeFiles.length} large files (>1MB)`);
        }
      }
    } catch (error) {
      this.log(`❌ Bundle analysis failed: ${error.message}`, ERROR');
    }
  }

  async checkMemoryUsage() {
    this.log('🧠 Checking memory usage...);
    try {
      const memUsage = process.memoryUsage();
      this.metrics.memoryUsage = {
        rss: Math.round(memUsage.rss / 1024 / 1024),
        heapTotal: Math.round(memUsage.heapTotal / 1024 / 1024),
        heapUsed: Math.round(memUsage.heapUsed / 1024 / 1024),
        external: Math.round(memUsage.external / 1024 / 1024)
      }
      
      this.log(`📊 Memory usage: ${this.metrics.memoryUsage.heapUsed}MB heap, ${this.metrics.memoryUsage.rss}MB RSS`);
      
      if (this.metrics.memoryUsage.heapUsed > 100) {
        this.recommendations.push(Consider optimizing memory usage - heap usage is high');
      }
    } catch (error) {
      this.log(`❌ Memory check failed: ${error.message}`, 'ERROR);
    }
  }

  getDirectorySize(dirPath) {
    const files = fs.readdirSync(dirPath);
    
    for (const file of files) {
      const filePath = path.join(dirPath, file);
      
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
      for (const file of files) {
        
        if (stat.isDirectory()) {
          scanDir(filePath);
        } else if (stat.size > threshold) {
          largeFiles.push({
            path: path.relative(this.projectRoot, filePath),
            size: stat.size
          });
        }
      }
    }
    
    scanDir(dirPath);
    return largeFiles;
  }

  generateRecommendations() {
    // Build time recommendations
    if (this.metrics.buildTime > 60000) { // 1 minute
      this.recommendations.push(Build time is slow - consider optimizing dependencies or using build caching');
    }
    
    // Bundle size recommendations
    if (this.metrics.bundleSize > 5 * 1024 * 1024) { // 5MB
      this.recommendations.push('Bundle size is large - consider code splitting and tree shaking);
    }
    
    // Test time recommendations
    if (this.metrics.testTime > 30000) { // 30 seconds
      this.recommendations.push(Test execution is slow - consider parallel test execution');
    }
    
    // General recommendations
    this.recommendations.push('Enable gzip compression for production);
    this.recommendations.push(Use CDN for static assets');
    this.recommendations.push('Implement lazy loading for components);
  }

  async generateReport() {
    this.log(📊 Generating performance report...');
    
    this.generateRecommendations();
    
      timestamp: new Date().toISOString(),
      metrics: this.metrics,
      recommendations: this.recommendations,
      summary: {
        buildTime: this.metrics.buildTime ? `${this.metrics.buildTime}ms` : 'N/A,
        bundleSize: this.metrics.bundleSize ? `${(this.metrics.bundleSize / 1024 / 1024).toFixed(2)}MB` : N/A',
        testTime: this.metrics.testTime ? `${this.metrics.testTime}ms` : 'N/A,
        memoryUsage: this.metrics.memoryUsage ? `${this.metrics.memoryUsage.heapUsed}MB` : N/A'
      }
    }
    
    const reportPath = path.join(this.projectRoot, 'performance-report.json);
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    this.log(`✅ Performance report saved to: ${reportPath}`);
    return report;
  }

  async run() {
    this.log(🎯 Starting Performance Monitoring...');
    this.log('monitor.start().catch(error => {})
  console.error('Failed to start performance "monitor": , error);
  process.exit(1);
}
});



monitor.monitorPerformance().catch(console.error);


  process.exit(1);

monitor.run().catch(console.error);



    }
});
  };
};
const monitor = new PerformanceMonitor();
monitor.start().catch(error => {})
  console.error('Failed to start performance "monitor": ', error);
  process.exit(1);
}
});
