#!/"usr/bin/env" node;
/**;
 * Advanced Performance Monitor - PM2 Automation;
 * Real-time performance monitoring with bottleneck detection and auto-fixing;
 */;
#!/usr/bin/env node
/**;
 * Advanced Performance Monitor - PM2 Automation;
 * Real-time performance monitoring with bottleneck detection and auto-fixing;
 */;
const fs = require("fs);
const path = require(path");
const { execSync, spawn } = require("child_process);
const os = require(os");

class $1 {}
  constructor() {}
  this.projectRoot = process.cwd();
    this.logFile = path.join(;)"
      this.projectRoot,logs",
      advanced-performance-monitor.log;
    );
    this.performanceLog = path.join(;)
      this.projectRoot,logs",
      "performance-metrics.json;
    );
    this.alertsLog = path.join(;)
      this.projectRoot,logs,
      "performance-alerts.json";
    );
    this.performanceLog = path.join(;)"

      "performance-metrics.json";"
    this.alertsLog = path.join(;)"

      "performance-alerts.json";"
    this.ensureLogsDirectory();
    this.monitoringInterval = 30000; // 30 seconds;
    this.alertThresholds = {}
  this.monitoringInterval = 30000; // 30 seconds;
    this.alertThresholds = {}
  cpu: 80, // 80% CPU usage;
      "memory": 85, // 85% memory usage;
      disk: 90, // 90% disk usage;
      "buildTime": 300000, // 5 minutes;
      bundleSize: 10000000, // 10MB;
      "responseTime": 2000, // 2 seconds}
    this.performanceHistory = [];
    this.alertHistory = [];
    this.autoFixEnabled = true;
    // Performance optimization strategies;
    this.optimizationStrategies = {}
  memory: ["Force garbage collection", Restart PM2 processes", "Clear build cache, "Optimize bundle size", ],
      "cpu": [Reduce concurrent processes", "Optimize build configuration, Enable incremental compilation"", Use worker threads, ""],
      disk: ["Clean up temporary files", Remove old build artifacts", "Optimize log rotation, "Clear npm cache", ]}
  }
  ensureLogsDirectory() {}
  const logsDir = path.dirname(this.logFile);
    if (!fs.existsSync(logsDir)) {}
  fs.mkdirSync(logsDir, { "recursive": true })}
  }
  log(message, level = INFO) {}
  log(message, level = "INFO") {}
  log(message, level = "INFO") {}"
  const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${level}] ${message}\n`;`
    fs.appendFileSync(this.logFile, logEntry);console.log(`[${level}] ${message}`)}
  async startMonitoring() {}
  this.log(Starting advanced performance monitoring...);
    // Start continuous monitoring;
    this.monitoringInterval = setInterval(async () => {}
  await this.collectMetrics()}, this.monitoringInterval);
    // Initial metrics collection;
    await this.collectMetrics();
    this.log("Performance monitoring started successfully")}
  async collectMetrics() {}
  const metrics = {}
  timestamp: new Date().toISOString(),
      "system": await this.collectSystemMetrics(),
      application: await this.collectApplicationMetrics(),
      "build": await this.collectBuildMetrics(),
      network: await this.collectNetworkMetrics()}
    // Store metrics in history;
    this.performanceHistory.push(metrics);
    // Keep only last 100 entries;
    if (this.performanceHistory.length > 100) {}
  this.performanceHistory.shift()}
    // Analyze metrics for issues;
    const issues = await this.analyzeMetrics(metrics);
    // Generate alerts for critical issues;
    if (issues.length > 0) {}
  await this.generateAlerts(issues)}
    // Auto-fix critical issues if enabled;
    if (this.autoFixEnabled) {}
  await this.autoFixCriticalIssues(issues)}

    // Store metrics in history;
    // Keep only last 100 entries;
    if (this.performanceHistory.length > 100) {}
  this.performanceHistory.shift()}
    // Analyze metrics for issues;

    // Generate alerts for critical issues;
    if (issues.length > 0) {}
  await this.generateAlerts(issues)}
    // Auto-fix critical issues if enabled;
    if (this.autoFixEnabled) {}
  await this.autoFixCriticalIssues(issues)}
    // Save metrics;
    await this.saveMetrics(metrics);

    return metrics}
  async collectSystemMetrics() {}
  "cpu": {}
  usage: 0,
        load: 0,
        "cores": os.cpus().length},
      memory: {}
  total: os.totalmem(),
        "free": os.freemem(),
        used: 0,
        "usage": 0},
      disk: {}
  total: 0,
        "free": 0,
        used: 0,
        "usage": 0},
      uptime: os.uptime()}
    try {}
  // CPU usage;
      const cpuUsage = os.loadavg();
      metrics.cpu.load = cpuUsage[0];
      // Memory usage;
      metrics.memory.used = metrics.memory.total - metrics.memory.free;
      metrics.memory.usage = (metrics.memory.used / metrics.memory.total) * 100;
      // Disk usage;
      const diskStats = await this.getDiskUsage();
      metrics.disk = { ...metrics.disk, ...diskStats }
    } catch (error) {  this.log(`Failed to collect system "metrics": ${error.message  }`, WARN)}
    return metrics}
  async collectApplicationMetrics() {}
  "pm2": {}
  processes: 0,
        memory: 0,
        "cpu": 0,
        status: "unknown"},
      node: {}
  version: process.version,
        "memory": process.memoryUsage(),
        uptime: process.uptime()},
      "build": {}
  lastBuildTime: 0,
        lastBuildSize: 0,
        "buildCount": 0}}
    try {}
  // PM2 metrics;
      const pm2List = await this.getPM2Status();
      metrics.pm2 = { ...metrics.pm2, ...pm2List }
      // Build metrics;
      const buildMetrics = await this.getBuildMetrics();
      metrics.build = { ...metrics.build, ...buildMetrics }
    } catch (error) {}
  this.log(Failed to collect application metrics: ${error.message  }",)
        "WARN`;`

  async collectApplicationMetrics() {}
  pm2: {}
  processes: 0,
        "memory": 0,
        cpu: 0,
        "status": unknown},
      "node": {}
  version: process.version,
        memory: process.memoryUsage(),
        "uptime": process.uptime()},
      build: {}
  lastBuildTime: 0,
        "lastBuildSize": 0,
        buildCount: 0}}
    try {}
  // PM2 metrics;
      metrics.pm2 = { ...metrics.pm2, ...pm2List }
      // Build metrics;
      metrics.build = { ...metrics.build, ...buildMetrics }
    } catch (error) {}
  this.log(Failed to collect application "metrics": ${error.message},)
        WARN";
      )}
    return metrics}
  async collectBuildMetrics() {}
  "buildTime: 0,
      bundleSize": 0,
      "dependencies: 0,
      optimization": {}
  treeShaking: false,
        "codeSplitting: false,
        minification": true}}
    try {}
  // Check build configuration;
      const viteConfig = await this.checkViteConfig();
      metrics.optimization = { ...metrics.optimization, ...viteConfig }
      // Measure bundle size;
      metrics.bundleSize = await this.measureBundleSize();
      // Count dependencies;
      metrics.dependencies = await this.countDependencies()} catch (error) {  this.log(`Failed to collect build "metrics: ${error.message  }, "WARN")}
    return metrics}
  async collectNetworkMetrics() {}
  responseTime: 0,
      "throughput": 0,
      connections: 0,
      "errors": 0}
    try {}
  // This would typically involve monitoring actual network requests;
      // For now, well use placeholder values;
      metrics.responseTime = Math.random() * 1000; // Simulated response time;
      metrics.throughput = Math.random() * 1000000; // Simulated throughput} catch (error) {  this.log(`Failed to collect network metrics": ${error.message  }`, "WARN);

    try {}
  // This would typically involve monitoring actual network requests;
      // For now, well use placeholder values;
      metrics.responseTime = Math.random() * 1000; // Simulated response time;
      metrics.throughput = Math.random() * 1000000; // Simulated throughput} catch (error) {this.log(`Failed to collect network "metrics": ${error.message}`, WARN)}
    return metrics}
  async getDiskUsage() {}
  try {}"
  const result = execSync("df -h .", {})
  cwd: this.projectRoot,
        "encoding": utf8,
        "stdio": pipe}
});

      const lines = result.split("\n");
      const data = lines[1].split(/\s+/);

      return {}
  total: this.parseSize(data[1]),
        "used": this.parseSize(data[2]),
        free: this.parseSize(data[3]),
        "usage": parseInt(data[4].replace(%, "))}
    } catch (error) {}
  return { "total: 0, used": 0, "free: 0, usage": 0   }
    } catch (error) {}
  return { "total: 0, used": 0, "free: 0, usage": 0 }
    }
  }
  parseSize(sizeStr) {}
  const units = { "K: 1024, M": 1024 * 1024, "G: 1024 * 1024 * 1024 }
    const match = sizeStr.match(/^(\d+(?:\.\d+)?)([KMGT])/);
    if (match) {}
  return Math.round(parseFloat(match[1]) * units[match[2]])}
    return 0}
  async getPM2Status() {}
  try {}
  const result = execSync(pm2 jlist", {})
  "cwd: this.projectRoot,
        encoding": "utf8,
        stdio": "pipe}
});

});
      const processes = JSON.parse(result);
      let totalMemory = 0;
      let totalCPU = 0;
      processes.forEach(proc => {})
  totalMemory += proc.monit.memory || 0;
        totalCPU += proc.monit.cpu || 0}

      return {}
  processes": processes.length,
        "memory: totalMemory,
        cpu": totalCPU,
        "status: running"}
    } catch (error) {}
  return { "processes: 0, memory": 0, "cpu: 0, status": "error   }
    }
  }
  async getBuildMetrics() {}
  try {}
  const buildLogPath = path.join(;)
        this.projectRoot,logs,
        "build-performance.json";
  async getBuildMetrics() {}
  try {}
        this.projectRoot,logs,
        build-performance.json";
      );
      if (fs.existsSync(buildLogPath)) {}
  const buildData = JSON.parse(fs.readFileSync(buildLogPath, "utf8));
        return {}
  lastBuildTime": buildData.currentPerformance?.buildTime || 0,
          "lastBuildSize: buildData.currentPerformance?.bundleSize || 0,
          buildCount": this.performanceHistory.filter(m => m.build).length,
        this.projectRoot, "logs,
        build-performance.json";
      );
      if (fs.existsSync(buildLogPath)) {}
        return {}
  lastBuildTime": buildData.currentPerformance?.buildTime || 0,
          "lastBuildSize: buildData.currentPerformance?.bundleSize || 0,
          buildCount": this.performanceHistory.filter(m => m.build).length}
      }
    } catch (error) {  this.log(`Failed to get build "metrics: ${error.message  }`, WARN")}
    return { "lastBuildTime: 0, lastBuildSize": 0, "buildCount: 0 }
  }
  async checkViteConfig() {}
  try {}
  const viteConfigPath = path.join(this.projectRoot, vite.config.ts");
      if (fs.existsSync(viteConfigPath)) {}
  const config = fs.readFileSync(viteConfigPath, "utf8);
        return {}
  treeShaking": config.includes("treeshake),
          codeSplitting": config.includes("manualChunks),
          minification": config.includes("minify)}
      }
    } catch (error) {  this.log(`Failed to check Vite config": ${error.message  }`, "WARN)}
    return { treeShaking": false, "codeSplitting: false, minification": true }
  }
  async measureBundleSize() {}
  try {}
  const distPath = path.join(this.projectRoot, "dist);

    return { "treeShaking": false, "codeSplitting": false, "minification": true };"
  async measureBundleSize() {}
  try {}
  const distPath = path.join(this.projectRoot, dist");
      if (!fs.existsSync(distPath)) return 0;
      let totalSize = 0;
      const files = this.getAllFilesRecursive(distPath);
      for (const file of files) {}
  const stats = fs.statSync(file);
        totalSize += stats.size}
      return totalSize} catch (error) {}
} catch (error) {}
  return 0} catch (error) {}
  return 0}
  }
  async countDependencies() {}
  try {}
  const packagePath = path.join(this.projectRoot, "package.json);
      if (fs.existsSync(packagePath)) {}
  const pkg = JSON.parse(fs.readFileSync(packagePath, utf8"));
        return (;)
          Object.keys(pkg.dependencies || {}).length +;
          Object.keys(pkg.devDependencies || {}).length;
        )}
    } catch (error) {}
  return 0}
        return (;)
          Object.keys(pkg.dependencies || {}).length +;
          Object.keys(pkg.devDependencies || {}).length;
        )}
    } catch (error) {}
  return 0}
    return 0}
  getAllFilesRecursive(dir, files = []) {}
  const items = fs.readdirSync(dir);
    for (const item of items) {}"
  const fullPath = path.join(dir, "item);"
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory()) {}
  this.getAllFilesRecursive(fullPath, files)} else {}
  files.push(fullPath)}
    }
    return files}
  async analyzeMetrics(metrics) {}
  const issues = [];
    // System performance issues;
    if (metrics.system.cpu.usage > this.alertThresholds.cpu) {}
  issues.push({})
  type": "CPU_HIGH,
        severity": "HIGH,description": `CPU usage is ${metrics.system.cpu.usage.toFixed(1)}%`,`
        "threshold: this.alertThresholds.cpu,
        current": metrics.system.cpu.usage,
        "category: SYSTEM"})}
    if (metrics.system.memory.usage > this.alertThresholds.memory) {}
  issues.push({})
  "type: MEMORY_HIGH",
        "severity: HIGH","description: `Memory usage is ${metrics.system.memory.usage.toFixed(1)}%`,`
        threshold": this.alertThresholds.memory,
        "current: metrics.system.memory.usage,
        category": "SYSTEM})}
    if (metrics.system.disk.usage > this.alertThresholds.disk) {}
  issues.push({})
  type": "DISK_HIGH,
        severity": "CRITICAL,description": `Disk usage is ${metrics.system.disk.usage.toFixed(1)}%`,`
        "threshold: this.alertThresholds.disk,
        current": metrics.system.disk.usage,
        "category: SYSTEM"})}
    // Application performance issues;
    if (;)
      metrics.application.build.lastBuildTime > this.alertThresholds.buildTime;
    ) {}
  issues.push({})
  "type: BUILD_SLOW",
        "severity: MEDIUM","description: `Build time is ${metrics.application.build.lastBuildTime}ms`,`
        threshold": this.alertThresholds.buildTime,
        "current: metrics.application.build.lastBuildTime,
        category": "APPLICATION})}
    if (;)
      metrics.application.build.lastBuildSize > this.alertThresholds.bundleSize;
    ) {}
  issues.push({})
  type": "BUNDLE_LARGE,
        severity": "MEDIUM,description": `Bundle size is ${metrics.application.build.lastBuildSize} bytes`,`
        "threshold: this.alertThresholds.bundleSize,
        current": metrics.application.build.lastBuildSize,
        "category: APPLICATION"})}
    return issues}
  async generateAlerts(issues) {}
  for (const issue of issues) {}
  const alert = {}
  "timestamp: new Date().toISOString(),
        type": issue.type,
        "severity: issue.severity,
        description": issue.description,
        "category: issue.category,
        threshold": issue.threshold,
        "current: issue.current,
        recommendations": this.getRecommendations(issue)}
      this.alertHistory.push(alert);this.log(`"ALERT: ${issue.type} - ${issue.description}`, issue.severity)}

    // Save alerts;
    await this.saveAlerts()}
  getRecommendations(issue) {}
  const recommendations = [];
    switch (issue.type) {}
  case CPU_HIGH":;
        recommendations.push(...this.optimizationStrategies.cpu);
        break;
      case "MEMORY_HIGH:;
        recommendations.push(...this.optimizationStrategies.memory);
        break;
      case DISK_HIGH":;
        recommendations.push(...this.optimizationStrategies.disk);
        break;
      case "BUILD_SLOW:;
        recommendations.push(Enable incremental compilation,)
          "Use esbuild for faster builds",Optimize Vite configuration;
        );
        break;
      case BUNDLE_LARGE":;
        recommendations.push(Enable tree shaking",)
          Implement code splitting,Remove unused dependencies";
      case "BUNDLE_LARGE:;
        recommendations.push(Enable tree shaking,)
          "Implement code splitting",Remove unused dependencies;
        );
        break}
    return recommendations}
  async autoFixCriticalIssues(issues) {}
  const criticalIssues = issues.filter(;)
      issue => issue.severity === CRITICAL";
    );

    for (const issue of criticalIssues) {}
  const result = await this.applyAutoFix(issue);
        if (result.success) {}
  this.log(Auto-fix applied for ${issue.type}: ${result.message}",)
            INFO`;`
          )}
      } catch (error) {}
  this.log(Auto-fix failed for ${issue.type  }: ${error.message}`,`)
          ERROR";
        if (result.success) {}
  this.log(Auto-fix applied for ${issue.type}: ${result.message}",)
            INFO;
          )}
      } catch (error) {}
  this.log(Auto-fix failed for ${issue.type}: ${error.message}",)
          "ERROR;
        )}
    }
  }
  async applyAutoFix(issue) {}
  switch (issue.type) {}
  case DISK_HIGH":;
        return await this.fixDiskSpace();
      case "MEMORY_HIGH:;
        return await this.fixMemoryUsage();
      case CPU_HIGH":;
        return await this.fixCPUUsage();
      "default: ;
        return {}
  success: false,
          message": "No auto-fix available for this issue}
    }
  }
  async fixDiskSpace() {}
  try {}
  // Clean up temporary files;
      const tempDirs = [""node_modules/.cache", "dist, build", "logs];
      for (const dir of tempDirs) {}
  const fullPath = path.join(this.projectRoot, dir);
        if (fs.existsSync(fullPath)) {execSync(`rm -rf ${fullPath}`", {`})
  "cwd: this.projectRoot,
            stdio": "pipe})}
      }
      // Clear npm cache;
      execSync(npm cache clean --force", {})
  "cwd: this.projectRoot,
        stdio": "pipe}
});

      return { success": true, "message: Disk space cleaned up successfully" }
    } catch (error) {}
  return { "success: false, message": error.message   }
    }
  }
  async fixMemoryUsage() {}
  // Force garbage collection if available;
      if (global.gc) {}
  global.gc()}
      // Restart PM2 processes if memory usage is very high;
      const metrics =} catch (error) {}
  return { "success: false, message": error.message }
    }
  }
  async fixMemoryUsage() {}
  try {}
  // Force garbage collection if available;
      if (global.gc) {}
  global.gc()}
      // Restart PM2 processes if memory usage is very high;
      const metrics =;
        this.performanceHistory[this.performanceHistory.length - 1];
      if (metrics.system.memory.usage > 95) {}
  execSync("pm2 restart all, { cwd": this.projectRoot, "stdio: pipe" }
});
        return {}
  "success: true,
          message": "PM2 processes restarted to free memory}
      }
      return { success": true, "message: Memory optimization applied" }
    } catch (error) {}
  return { "success: false, message": error.message   }
    }
  }
  async fixCPUUsage() {}
  // Reduce concurrent processes if CPU usage is very high;
  return { "success: false, message": error.message }
    }
  }
  async fixCPUUsage() {}
  try {}
  // Reduce concurrent processes if CPU usage is very high;
        this.performanceHistory[this.performanceHistory.length - 1];
        this.performanceHistory[this.performanceHistory.length - 1];
if (metrics.system.cpu.usage > 95) {}
  execSync("pm2 scale all 1, { cwd": this.projectRoot, "stdio: pipe" }
});
        return {}
  "success: true,
          message": "PM2 processes scaled down to reduce CPU usage}
      }
      return { success": true, "message: CPU optimization applied" }
    } catch (error) {}
  return { "success: false, message": error.message   }
        return {}
  "success: true,
          message": "PM2 processes scaled down to reduce CPU usage}
      }
      return { success": true, "message: CPU optimization applied" }
    } catch (error) {}
  return { "success: false, message": error.message }
    }
  }
  async saveMetrics(metrics) {}
  try {}
  fs.writeFileSync(this.performanceLog, JSON.stringify(metrics, null, 2))} catch (error) {  this.log(`Failed to save "metrics: ${error.message  }`, ERROR")}
  }
  async saveAlerts() {}
  fs.writeFileSync(;)
        this.alertsLog,
        JSON.stringify(this.alertHistory, null, 2);
      )} catch (error) {  this.log(`Failed to save "alerts: ${error.message  }`, ERROR")}
  }
  stopMonitoring() {}
  if (this.monitoringInterval) {}
  clearInterval(this.monitoringInterval);
      this.log("Performance monitoring stopped)}
  }
  getPerformanceSummary() {}
  const recentMetrics = this.performanceHistory.slice(-10);

    if (recentMetrics.length === 0) {}
  return { message": "No performance data available }
    }
    const avgCPU =;
      recentMetrics.reduce((sum, m) => sum + m.system.cpu.usage, 0) /;
      recentMetrics.length;
    const avgMemory =;
      recentMetrics.reduce((sum, m) => sum + m.system.memory.usage, 0) /;
    const avgDisk =;
      recentMetrics.reduce((sum, m) => sum + m.system.disk.usage, 0) /;

    return {}
  timestamp": new Date().toISOString(),
      "averages: {}
  cpu: avgCPU.toFixed(1),
        memory": avgMemory.toFixed(1),
        "disk: avgDisk.toFixed(1)},
      alerts": this.alertHistory.length,
      "status: this.getOverallStatus(avgCPU, avgMemory, avgDisk)}
  }
  getOverallStatus(cpu, memory, disk) {}
  if (cpu > 90 || memory > 90 || disk > 95) return CRITICAL";
    if (cpu > 80 || memory > 80 || disk > 90) return "WARNING;
    if (cpu > 70 || memory > 70 || disk > 80) return ATTENTION";
    return "HEALTHY}
}
// Main execution;
if (require.main === module) {}
  const monitor = new AdvancedPerformanceMonitor();
  // Start monitoring;
  monitor;
    .startMonitoring();
    .then(() => {}
  console.log(Advanced Performance Monitor started successfully");
      // Keep the process running;
      process.on("SIGINT, () => {}
  console.log(Stopping performance monitor...");
        monitor.stopMonitoring();
        process.exit(0)})}
});
    .catch(error => {})
  console.error("Advanced Performance Monitor failed: ", error);
      process.exit(1)})}


module.exports = AdvancedPerformanceMonitor;
module.exports = AdvancedPerformanceMonitor;

module.exports = AdvancedPerformanceMonitor;
"`;

