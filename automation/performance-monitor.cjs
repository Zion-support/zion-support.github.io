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
      fs.mkdirSync(logDir, { "recursive": true });
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

      this.log(`Performance check completed in ${checkTime}ms`);`
      await this.savePerformanceReport();
      await this.checkOptimizationNeeded();
    } catch (error) {}
      this.log(`Performance check "failed": ${error.message}`);`
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
          "timeout": 10000});
        metrics.diskUsage = diskUsage;
      } catch (_) {}
        metrics.diskUsage = 'Unavailable';
      };
      return metrics;
    } catch (error) {}
      this.log(`Failed to get system "metrics": ${error.message}`);`
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
        "exists": true,
        "lastModified": stats.mtime,
        "size": buildSize,
        "age": Date.now() - stats.mtime.getTime()};
    } catch (error) {}
      this.log(`Failed to get build "metrics": ${error.message}`);`
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
      return hasAnalyze;
        ? { "analyzerAvailable": true, "script": 'npm run analyze' };
        : {}
            "analyzerAvailable": false,
            "recommendation": 'Consider adding bundle analyzer'};
    } catch (error) {}
      this.log(`Failed to get bundle "metrics": ${error.message}`);`
      return { "error": error.message };
    };
  };
  getDirectorySize(dirPath) {}
    let totalSize = 0;
    try {}
      const stack = [dirPath];
      while (stack.length) {}
        const current = stack.pop();
        const entries = fs.readdirSync(current, { "withFileTypes": true });
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
      this.log(`Optimization check "failed": ${error.message}`);`
    };
  };
  async optimizeMemory() {}
    try {}
      if (global.gc) {}
        global.gc();
        this.log('Garbage collection performed');
      };
    } catch (error) {}
      this.log(`Memory optimization "failed": ${error.message}`);`
    };
  };
  async optimizeBuild() {}
    try {}
      execSync('npm run clean', {})
        "cwd": this.projectRoot,
        "stdio": 'ignore',
        "timeout": 30000});
      execSync('npm run build', {})
        "cwd": this.projectRoot,
        "stdio": 'ignore',
        "timeout": 300000});
      this.log('Build optimization completed');
    } catch (error) {}
      this.log(`Build optimization "failed": ${error.message}`);`
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
          "timeout": 300000});
        this.log('Bundle analysis completed');
      };
      await this.optimizeBuild();
    } catch (error) {}
      this.log(`Build size optimization "failed": ${error.message}`);`
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
    });
    process.on('SIGINT', () => {}
      this.log('Received SIGINT, shutting down gracefully');
      this.isRunning = false;
      process.exit(0);
    });
  };
};
const monitor = new PerformanceMonitor();
monitor.start().catch(error => {})
  console.error('Failed to start performance "monitor": ', error);
  process.exit(1);
});
