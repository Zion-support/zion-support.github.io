=======
#!/usr/bin/env node;
/**
 * Performance Monitor - PM2 Automation Script;
 * Monitors application performance and optimizes when needed;
 */
=======
#!/usr/bin/env node
>>>>>>> a44a2a22d07cd86ac622dee3484c03de69b51a7b
>>>>>>> main
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
#!/usr/bin/env node
>>>>>>> a44a2a22d07cd86ac622dee3484c03de69b51a7b
>>>>>>> main
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
>>>>>>> f6b849a806966ab0803a1eba10ab812addf04f56
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
const logMessage = `[${timestamp}] [${type.toUpperCase()}] ${message}`;
    console.log(logMessage);
    const logFile = path.join(this.logsDir, 'performance-monitor.log');
    fs.appendFileSync(logFile, logMessage + '\n');
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
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
=======
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
    const logMessage = `[${timestamp}] [${level}] ${message}\n`;
    console.log(`[${level}] ${message}`);
    fs.appendFileSync(this.logFile, logMessage);
>>>>>>> main
  }
  async monitorPerformance() {
    this.log('⚡ Starting performance monitoring...');
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
    } catch (error) {
      this.log(`Failed to get build metrics: ${error.message}`);
      return { error: error.message };
    }
  }
=======
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
=======
return hasAnalyze
        ? { analyzerAvailable: true, script: 'npm run analyze' }
        : {
            analyzerAvailable: false,
            recommendation: 'Consider adding bundle analyzer',
          };
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
    } catch (error) {
      this.log(`Failed to get bundle metrics: ${error.message}`);
      return { error: error.message };
    }
  }
=======
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
>>>>>>> f6b849a806966ab0803a1eba10ab812addf04f56;
    timestamp: new Date().toISOString(),
        buildTime: buildTime,
        bundleSize: bundleSize,
        totalTime: Date.now() - startTime,
        recommendations: []
      };
// Run if called directly
if (require.main === module) {
    const monitor = new PerformanceMonitor(),
    monitor.monitorPerformance().catch(console.error)
  }
module.exports = PerformanceMonitor;
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
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
>>>>>>> main
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
monitor.monitorPerformance().catch(console.error);
=======
>>>>>>> main
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> main
<<<<<<< HEAD