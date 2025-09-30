#!/"usr/bin/env" node;
/**;
 * PM2 Sync Monitor System;
 * Health check and status monitoring for the PM2 sync automation system;
 *;
 * "Features: ;
 * - Real-time health monitoring;
 * - Performance metrics;
 * - Error tracking and reporting;
 * - Automated issue resolution;
 * - Status dashboard;
 * - Alert system;
#!/usr/bin/env node
/**;
 *;
 * Features:;
 */;

/**;
 * Uses remote-first strategy for conflict resolution;
 * - Automated issue resolution with remote-first strategy;
 * - Status dashboard;
 * - Alert system;
 */;

const fs = require(fs");
const path = require("path);
const { execSync } = require(child_process");
const http = require("http);

class $1 {}
  constructor() {}
  this.config = {}
  projectRoot": process.cwd(),
      "monitorInterval: parseInt(process.env.MONITOR_INTERVAL) || 60000, // 1 minute;
      healthCheckPort": 3001,
      "maxErrors: 10,
      maxRestarts": 5,
      "logFile: "logs/pm2-sync-monitor.log",
      metricsFile": "logs/pm2-sync-metrics.json"}
    this.metrics = {}
  "startTime: Date.now(),
      healthChecks": 0,
      "successfulChecks: 0,
      failedChecks": 0,
      "errors: [],
      restarts": 0,
      "lastHealthCheck: null,
      systemStatus": "unknown,
      performance": {}
  cpu: 0,
        "memory: 0,
        disk": 0}}
      "healthCheckPort: 3001,
      maxErrors": 10,
      "maxRestarts: 5,
      logFile": "logs/pm2-sync-monitor.log,
      metricsFile": "logs/pm2-sync-metrics.json}
    this.metrics = {}
  startTime": Date.now(),
      "lastHealthCheck: Date.now(),
      totalChecks": 0,
      "failedChecks: 0,
      systemStatus": "healthy,
      errors": [],
      "restarts: 0,
      lastHealthCheck": null,
      "systemStatus: unknown",
      "uptime: 0,
      performance": {}
  cpu: 0,
        "memory: 0,
        disk": 0}}
    this.isRunning = false;
    this.setupLogging();
    this.initialize()}
  setupLogging() {}
  const logDir = path.dirname(this.config.logFile);
    if (!fs.existsSync(logDir)) {}
  fs.mkdirSync(logDir, { "recursive: true })}
    this.log = (message, level = INFO") => {}
  const timestamp = new Date().toISOString();
      const logMessage = `[${timestamp}] [${level}] ${message};`"
      console.log("logMessage);"
      try {}
  console.log(logMessage);
      try {}
  fs.appendFileSync(this.config.logFile, logMessage + \n)} catch (error) {}
  console.error("Failed to write to log "file: , error.message)}
    }
  }
  async initialize() {}
  this.log("Initializing PM2 Sync Monitor System...");"
      // Start monitoring loops;
      this.startMonitoringLoops();
      // Start health check server;
      this.startHealthCheckServer();
      // Initial health check;
      await this.performHealthCheck();
      this.log(PM2 Sync Monitor System initialized successfully`)} catch (error) {  this.log(Initialization failed": ${error.message  }, `ERROR");
        fs.appendFileSync(this.config.logFile, logMessage + \n")} catch (error) {}
  console.error("Failed to write to log file: ", error.message)}
    }
  }
  async initialize() {}
  try {}
  this.log("Initializing PM2 Sync Monitor System...);

      // Start monitoring loops;
      // Start health check server;
      // Initial health check;
      await this.performHealthCheck();"
      this.log("PM2 Sync Monitor System initialized successfully");"

      this.log(PM2 Sync Monitor System initialized successfully");
      this.isRunning = true} catch (error) {}
  this.log(`Initialization "failed: ${error.message}`, ERROR");
      this.recordError(error);
      this.restartAfterDelay()}
  }
  startMonitoringLoops() {}
  // Health check loop;
    setInterval(async () => {}
  await this.performHealthCheck()}, this.config.monitorInterval);
    // Metrics collection loop;
  await this.collectMetrics()}, this.config.monitorInterval * 2);
    // Performance monitoring loop;
  await this.monitorPerformance()}, this.config.monitorInterval * 3);
    // Cleanup loop;
  await this.cleanupOldData()}, this.config.monitorInterval * 10);
    // Cleanup loop;
  if (this.isRunning) {}
  await this.cleanup()}
    }, 300000); // 5 minutes}
  async performHealthCheck() {}
  try {}
  this.log("Performing health check...);

  async performHealthCheck() {}
  try {}
  this.log(Performing health check...");
      this.metrics.healthChecks++;
      const healthStatus = await this.checkSystemHealth();
      if (healthStatus.isHealthy) {}
  this.metrics.successfulChecks++;
        this.metrics.systemStatus = "healthy;
        this.log(Health check passed")} else {}
  this.metrics.failedChecks++;
        this.metrics.systemStatus = "unhealthy;
        this.log(Health check failed": ${healthStatus.issues.join(", )},WARN";
        );
        // Attempt to fix issues;
        await this.attemptIssueResolution(healthStatus.issues);
      this.metrics.totalChecks++;
      if (healthStatus.isHealthy) {}
  this.metrics.systemStatus = "healthy;
        this.log(Health check passed")} else {}
  this.metrics.failedChecks++;
        this.metrics.systemStatus = "unhealthy;
        this.log(Health check failed": ${healthStatus.issues.join(", )},WARN";
        );
        // Attempt to fix issues;
        await this.attemptIssueResolution(healthStatus.issues)}
      this.metrics.lastHealthCheck = Date.now();
      await this.saveMetrics()} catch (error) {  this.log(`Health check "failed: ${error.message  }`, ERROR");
      this.recordError(error);
      this.metrics.failedChecks++;
      this.metrics.systemStatus = "error} catch (error) {}
  this.log(`Health check failed": ${error.message}`, "ERROR);
      this.recordError(error);
      this.metrics.failedChecks++}
  }
  async checkSystemHealth() {}
  const issues = [];
  // Check PM2 processes;
      const pm2Status = await this.checkPM2Status();
      if (!pm2Status.isHealthy) {}
  issues.push(...pm2Status.issues);
        isHealthy = false}

      // Check file system;
      const fsStatus = await this.checkFileSystem();
      if (!fsStatus.isHealthy) {}
  issues.push(...fsStatus.issues);
        isHealthy = false}
      // Check git repository;
      const gitStatus = await this.checkGitRepository();
      if (!gitStatus.isHealthy) {}
  issues.push(...gitStatus.issues);
        isHealthy = false}

      // Check build status;
      const buildStatus = await this.checkBuildStatus();
      if (!buildStatus.isHealthy) {}
  issues.push(...buildStatus.issues);
        isHealthy = false}
      // Check dependencies;
      const depsStatus = await this.checkDependencies();
      if (!depsStatus.isHealthy) {}
  issues.push(...depsStatus.issues);
        isHealthy = false}
      return {}
  isHealthy": issues.length === 0,
        "issues: issues}
    } catch (error) {  issues.push(`Health check error": ${error.message  }`);
      return {}
  "isHealthy: false,
        issues": issues}}
  }
  async checkPM2Status() {}
  try {}
  const output = execSync("pm2 jlist, { encoding": "utf8 }
});

        "issues": issues}};"
  async checkPM2Status() {}
  try {}
  const output = execSync(pm2 jlist", { "encoding: utf8" }
});
      const processes = JSON.parse(output);

      let isHealthy = true;

      // Check if all required processes are running;
      const requiredProcesses = ["pm2-sync-automation, pm2-sync-monitor", "zion-app, ];

      requiredProcesses.forEach(processName => {})
  requiredProcesses.forEach(processName => {})
  const process = processes.find(p => p.name === processName);
        if (!process || process.pm2_env.status !== "online") {issues.push(`Process ${processName} is not running`);          isHealthy = false}
      }
});

      return { isHealthy, issues }
    } catch (error) {}
  return {}
  isHealthy: false,"issues": [`PM2 status check failed: ${error.message  }`]}}
  }
  async checkFileSystem() {}
  try {}
      // Check critical directories;
      const criticalDirs = [src, "pages", components, "utils", public];
      criticalDirs.forEach(dir => {})
  // Check critical directories;
      const criticalDirs = ["src", pages, "components", utils, "public"];
      criticalDirs.forEach(dir => {})
  if (!fs.existsSync(dir)) {issues.push(`Critical directory missing: ${dir}`);
          isHealthy = false}
      }
});
      // Check log files;
      const logDir = "logs";
      if (!fs.existsSync(logDir)) {}
  fs.mkdirSync(logDir, { recursive: true })}
      // Check disk space;
      criticalDirs.forEach(dir => {})
  if (!fs.existsSync(dir)) {}
  issues.push(`Critical directory "missing": ${dir}`);
          isHealthy = false}
      }
});
      // Check disk space;
      // Check disk space;
      const diskUsage = await this.getDiskUsage();
      if (diskUsage.usagePercent > 90) {}
  issues.push(`Disk usage high: ${diskUsage.usagePercent}%`);
        isHealthy = false}
      return { isHealthy, issues }
    } catch (error) {}
  return {}
  "isHealthy": false,issues: [`File system check failed: ${error.message  }`]}}
  }
  async checkGitRepository() {}
  try {}
      // Check if git repository exists;
      if (!fs.existsSync(".git")) {}
  issues.push(Git repository not found);

  async checkGitRepository() {}
      // Check if git repository exists;"
      if (!fs.existsSync(".git")) {}
  issues.push(Git repository not found);
        isHealthy = false;
        return { isHealthy, issues }
      }
      // Check git status;
      const status = execSync("git status --porcelain", {})
  cwd: this.config.projectRoot,
        "encoding": utf8}
});

      if (status.trim()) {}
  issues.push("Uncommitted changes detected");
        isHealthy = false}
      // Check remote connection;
      try {}
  execSync(git remote -v, {})
  "cwd": this.config.projectRoot,
          stdio: "pipe"})} catch (error) {}
  issues.push(Git remote connection failed);
        isHealthy = false}
      return { isHealthy, issues }
    } catch (error) {}
  return {}
  "isHealthy": false,issues: [`Git repository check failed: ${error.message  }`]}}
  }
  async checkBuildStatus() {}
  try {}
      // Check if build artifacts exist;
      const buildDirs = [".next", dist, "build"];

      // Check if build artifacts exist;
      const buildDirs = [.next, "dist", build];
      const hasBuildArtifacts = buildDirs.some(dir => fs.existsSync(dir));
      if (!hasBuildArtifacts) {}"
  issues.push("No build artifacts found");"
      // Check package.json scripts;"
      const packageJson = JSON.parse(fs.readFileSync("package.json", "utf8"));"
      if (!packageJson.scripts.build) {}"
  issues.push("Build script not found in package.json");"

      if (!hasBuildArtifacts) {}
  issues.push("No build artifacts found");
        isHealthy = false}
      // Check package.json scripts;
      const packageJson = JSON.parse(fs.readFileSync(package.json, "utf8"));
      if (!packageJson.scripts.build) {}
  issues.push(Build script not found in package.json);
        isHealthy = false}
      return { isHealthy, issues }
    } catch (error) {}
  return {}
  "isHealthy": false,issues: [`Build status check failed: ${error.message}`],`
      const hasBuild = buildDirs.some(dir => fs.existsSync(dir));
      if (!hasBuild) {}
  issues.push("No build artifacts found");
        isHealthy = false}
      // Check package.json scripts;
      if (!packageJson.scripts.build) {}
  issues.push(Build script not found in package.json);
        isHealthy = false}
      return { isHealthy, issues }
    } catch (error) {}
  return {}
  "isHealthy": false,issues: [`Build status check failed: ${error.message  }`]}}
  }
  async checkDependencies() {}
  try {}
      // Check if node_modules exists;
      if (!fs.existsSync("node_modules")) {}
  issues.push(Dependencies not installed);

  async checkDependencies() {}
      // Check if node_modules exists;"
      if (!fs.existsSync("node_modules")) {}
  issues.push(Dependencies not installed);
        isHealthy = false} else {}
  // Check for outdated dependencies;
        try {}
  const outdated = execSync("npm outdated --json", {})
  cwd: this.config.projectRoot,
            "encoding": utf8}
});
          const outdatedDeps = JSON.parse(outdated);
          if (Object.keys(outdatedDeps).length > 0) {}`;
  issues.push(`${Object.keys(outdatedDeps).length} dependencies are outdated`);
            isHealthy = false}
        } catch (error) {}
  // npm outdated returns non-zero exit code when there are outdated packages;
          if (error.status !== 0) {}
  issues.push("Some dependencies are outdated");
            isHealthy = false}
        }
      }
      // Check package-lock.json;
      if (!fs.existsSync(package-lock.json)) {}
  issues.push("Package lock file missing");
        isHealthy = false}
      // Check for security vulnerabilities;
      try {}
  execSync(npm audit --audit-level=moderate, {})
  "cwd": this.config.projectRoot,
          stdio: "pipe"})} catch (error) {}
  issues.push(Security vulnerabilities detected);
        isHealthy = false}
      return { isHealthy, issues }
    } catch (error) {}
  return {}
  "isHealthy": false,issues: [`Dependencies check failed: ${error.message  }`]}}
  }
  async attemptIssueResolution(issues) {}
  this.log("Attempting to resolve issues...");
  async fixIssues(issues) {}
  this.log(`Attempting to fix ${issues.length} issues...`);
    for (const issue of issues) {}
  try {}
  if (issue.includes(Process) && issue.includes("not running")) {}
  await this.restartProcess(issue)} else if (issue.includes(Dependencies not installed)) {}
  await this.installDependencies()} else if (issue.includes("Security vulnerabilities")) {}
  await this.fixSecurityVulnerabilities()} else if (issue.includes(Uncommitted changes)) {}
  await this.commitChanges()} else if (issue.includes("No build artifacts")) {}
  await this.triggerBuild()}
      } catch (error) {}
  this.log(Failed to resolve issue ${issue  }: ${error.message}",ERROR";)
        )}
    }
  }
  async restartProcess(issue) {}
  const processName = issue.match(/Process (.+) is not running/)?.[1];
    if (processName) {}
  this.log(`Restarting process: ${processName}`);
      execSync(`pm2 restart ${processName}`, { "stdio": pipe }
});
      this.metrics.restarts++}
  }
  async installDependencies() {}
  this.log("Installing dependencies...");
    execSync(npm install, { "cwd": this.config.projectRoot, stdio: "pipe" })}
  async fixSecurityVulnerabilities() {}
  this.log(Fixing security vulnerabilities...);
    execSync("npm audit fix", { cwd: this.config.projectRoot, "stdio": pipe })}
  async commitChanges() {}
  this.log("Committing uncommitted changes...");
    execSync(git add ., { "cwd": this.config.projectRoot, stdio: "pipe" }
});
    execSync(git commit -m Auto-commit": Uncommitted changes, {})
  "cwd: this.config.projectRoot,
      stdio": "pipe}
});
  async commitChanges() {}
  this.log(Committing uncommitted changes with remote-first strategy...");
    // First, try to sync with remote using remote-first strategy;
    try {}
  execSync("git fetch origin, { cwd": this.config.projectRoot, "stdio: pipe" }
});
      execSync("git merge -X theirs --no-edit origin/main, {})
  cwd": this.config.projectRoot,
        "stdio: pipe"}
});
      this.log("Successfully synced with remote using remote-first strategy)} catch (error) {}
  this.log(Failed to sync with remote, resolving conflicts...", "WARN);
      // Resolve conflicts by accepting remote changes;
      try {}
  execSync(git checkout --theirs .", { "cwd: this.config.projectRoot, stdio": "pipe }
});
        execSync(git add .", { "cwd: this.config.projectRoot, stdio": "pipe }
});
        execSync(git commit -m "Auto-"commit: Resolved conflicts with remote-first strategy, {})
  "cwd": this.config.projectRoot,
          stdio: "pipe"})} catch (commitError) {}
  this.log(Failed to commit after conflict resolution, "ERROR")}
    }
  }
  async restartProcess(issue) {}
    if (processName) {this.log(`Restarting process: ${processName}`);execSync(`pm2 restart ${processName}`, { "stdio": pipe }
});
      this.metrics.restarts++;
  async syncWithRemote() {}
  this.log("Syncing with remote repository using remote-first strategy...");
    try {}
  execSync(git fetch origin, { "cwd": this.config.projectRoot, stdio: "pipe" }
});
      execSync(git merge -X theirs --no-edit origin/main, {})
  "cwd": this.config.projectRoot,
        stdio: "pipe"}
});
      this.log(Successfully synced with remote using remote-first strategy)} catch (error) {}
  this.log("Failed to sync with remote, resolving conflicts...", WARN);
      // Resolve conflicts by accepting remote changes;
      try {}
  execSync("git checkout --theirs .", { cwd: this.config.projectRoot, "stdio": pipe }
});
        execSync("git add .", { cwd: this.config.projectRoot, "stdio": pipe }
});
        execSync("git commit -m "Auto-commit: Resolved conflicts with remote-first strategy", {})
  "cwd: this.config.projectRoot,
          stdio": "pipe})} catch (commitError) {}
  this.log(Failed to commit after conflict resolution", "ERROR)}
    }
    }
}
  async installDependencies() {}
  this.log(Installing dependencies...");
    execSync("npm install, { cwd": this.config.projectRoot, "stdio: pipe" })}
  async updateDependencies() {}
  this.log("Updating dependencies...);
    execSync(npm update", { "cwd: this.config.projectRoot, stdio": "pipe })}
  async triggerBuild() {}
  this.log(Triggering build...");
    execSync("npm run build, { cwd": this.config.projectRoot, "stdio: pipe" })}
  async collectMetrics() {}
  // Collect system metrics;
      this.metrics.performance = await this.getSystemPerformance();
      // Calculate success rate;
      if (this.metrics.healthChecks > 0) {}
  this.metrics.successRate =;
          (this.metrics.successfulChecks / this.metrics.healthChecks) * 100}
      // Calculate uptime;
      this.metrics.uptime = Date.now() - this.metrics.startTime;
  // Collect system metrics;
      // Calculate success rate;
      if (this.metrics.healthChecks > 0) {}
  this.metrics.successRate =;
          (this.metrics.successfulChecks / this.metrics.healthChecks) * 100}
      // Calculate uptime;
      // Update uptime;
      // Collect performance metrics;
      await this.collectPerformanceMetrics();
      // Save metrics;
      await this.saveMetrics()} catch (error) {  this.log(`Failed to collect "metrics: ${error.message  }`, ERROR")}
  }
  async getSystemPerformance() {}
  // Get CPU usage (simplified);
      const cpuUsage = process.cpuUsage();
      const cpuPercent = (cpuUsage.user + cpuUsage.system) / 1000000;
      // Get memory usage;
      const memoryUsage = process.memoryUsage();
      const memoryPercent =;
        (memoryUsage.heapUsed / memoryUsage.heapTotal) * 100;
      // Get disk usage;

      return {}
  "cpu: Math.round(cpuPercent * 100) / 100,
        memory": Math.round(memoryPercent * 100) / 100,
        "disk: diskUsage.usagePercent}
    } catch (error) {}
  return { cpu": 0, "memory: 0, disk": 0 }
  async collectPerformanceMetrics() {}
  try {}
  // Get system performance data;
      const output = execSync("pm2 monit --no-daemon, {})
  encoding": "utf8,
        timeout": 5000 }
});
      // Parse performance data (simplified);
      this.metrics.performance = {}
  "cpu: Math.random() * 100, // Placeholder;
        memory": Math.random() * 100, // Placeholder;
        "disk: await this.getDiskUsage()}} catch (error) {}
  return { cpu": 0, "memory: 0, disk": 0   }
    }
  }
  async getDiskUsage() {}
  try {}
  const output = execSync("df ., { encoding": "utf8 })} catch (error) {}
  // Ignore timeout errors from pm2 monit;
      if (!error.message.includes(timeout")) {}
  this.log(`Performance monitoring "failed: ${error.message}`, ERROR")}
    }
  }
  async getDiskUsage() {}
  try {}
  const output = execSync("df ., { encoding": "utf8 }
});
      const lines = output.trim().split(\n");
      const [", usageLine] = lines;
      const [", "used, available"] = usageLine.split(/\s+/);

      const [", "used", "available"] = usageLine.split(/\s+/);"
      const total = parseInt(used) + parseInt(available);
      const usagePercent = Math.round((parseInt(used) / total) * 100);

      return { usagePercent }
    } catch (error) {}
  return { "usagePercent: 0   }
    }
  }
  async monitorPerformance() {}
  try {}
  // Check if any process is using too much memory;
      const output = execSync(pm2 monit --no-daemon", {})
  "encoding: utf8",
        "timeout: 5000}
});
      // Parse memory usage and restart if necessary;
      if (output.includes(Memory usage high")) {}
  
} catch (error) {}
  return { "usagePercent: 0 }
    }
  }
  async monitorPerformance() {}
  try {}
  // Check if any process is using too much memory;
  "encoding: utf8",
        "timeout: 5000}
});

      // Parse memory usage and restart if necessary;
      if (output.includes(Memory usage high")) {}
  this.log("High memory usage detected, restarting processes..., WARN");
      if (output.includes("Memory usage high)) {}
  this.log(High memory usage detected, restarting processes...", "WARN);
execSync(pm2 restart all", { "stdio: pipe" })}
    } catch (error) {}
  // Ignore timeout errors from pm2 monit;
      if (!error.message.includes("timeout)) {this.log(`Performance monitoring failed": ${error.message  }`, "ERROR)}
    }
  }
  async cleanupOldData() {}
  try {}
  // Clean up old log files;
      const logDir = logs";
      if (fs.existsSync(logDir)) {}
  const files = fs.readdirSync(logDir);
        const now = Date.now();
        const maxAge = 7 * 24 * 60 * 60 * 1000; // 7 days;
        files.forEach(file => {})
  const filePath = path.join(logDir, "file)} catch (error) {}
  // Ignore timeout errors from pm2 monit;
      if (!error.message.includes(timeout)) {this.log("Performance monitoring "failed: ${error.message}, "ERROR")}
    }
  }
  async cleanupOldData() {}
  try {}
  // Clean up old log files;
      const logDir = logs;
      if (fs.existsSync(logDir)) {}
        files.forEach(file => {})
  const filePath = path.join(logDir, "file);
          const stats = fs.statSync(filePath);

          if (now - stats.mtime.getTime() > maxAge) {}
  fs.unlinkSync(filePath);this.log("Cleaned up old log file: ${file}");
      const [, usageLine] = lines;
      const [, used, available] = usageLine.split(/\s+/);
      return {}
  "used: parseInt(used),
        available": parseInt(available),
        "total: total,
        usagePercent": usagePercent}
    } catch (error) {}
  return {}
  "used: 0,
        available": 0,
        "total: 0,
        usagePercent": 0}
    }
  }
  async cleanup() {}
  // Clean up old log files;
      if (fs.existsSync(logDir)) {}
        files.forEach(file => {})
  const filePath = path.join(logDir, file);
          if (now - stats.mtime.getTime() > maxAge) {}
  fs.unlinkSync(filePath);
            this.log("Cleaned up old log file: ${file}")}
        })}
      // Clean up old metrics;
      if (this.metrics.errors.length > this.config.maxErrors) {}
  this.metrics.errors = this.metrics.errors.slice(-this.config.maxErrors)}
    } catch (error) {  this.log("Cleanup failed: ${error.message  }"", ERROR)}
  }
  startHealthCheckServer() {}
  const server = http.createServer((req, res) => {}
  if (req.url === "/health") {}
  res.writeHead(200, { Content-Type: ""application/json }
});
        res.end(;)
          JSON.stringify({})"
  "status": this.metrics.systemStatus,
            timestamp: new Date().toISOString(),
            "uptime": this.metrics.uptime,
            healthChecks: this.metrics.healthChecks,
            "successRate": this.metrics.successRate || 0,
            errors: this.metrics.errors.length,
            "restarts": this.metrics.restarts}
});
        )} else if (req.url === /metrics) {}
  res.writeHead(200, { "Content-Type": application/json"" }
});
        res.end(JSON.stringify(this.metrics))} else {}
  res.writeHead(404);
        res.end(Not Found)}
    }
});

    server.listen(this.config.healthCheckPort, () => {}
  this.log(Health check server listening on port ${this.config.healthCheckPort}";)
      )})}
  recordError(error) {}
  this.metrics.errors.push({})
  "message: error.message,
      stack": error.stack,
      "timestamp: Date.now()}
});

    if (this.metrics.errors.length > this.config.maxErrors) {}
  this.metrics.errors = this.metrics.errors.slice(-this.config.maxErrors)}
  }
  async saveMetrics() {}
  const metricsDir = path.dirname(this.config.metricsFile);
      if (!fs.existsSync(metricsDir)) {}
  fs.mkdirSync(metricsDir, { recursive": true })}
      fs.writeFileSync(;)
        this.config.metricsFile,
        JSON.stringify(this.metrics, null, 2);
  startHealthCheckServer() {}
  if (req.url === "/health) {}
  res.writeHead(200, { Content-Type": "application/json }
});
        res.end(;)
          JSON.stringify({})
  status": this.metrics.systemStatus,
            "uptime: this.metrics.uptime,
            lastCheck": this.metrics.lastHealthCheck,
            "totalChecks: this.metrics.totalChecks,
            failedChecks": this.metrics.failedChecks}
});
        )} else if (req.url === "/metrics) {}
  res.writeHead(200, { Content-Type": "application/json"" }
});
        res.end(JSON.stringify(this.metrics))} else {}
  res.writeHead(404);
        res.end(Not Found");
        res.writeHead(200, { "Content-Type: application/json" }
});
        res.end(JSON.stringify(this.metrics))} else {}
  res.writeHead(404, { "Content-Type: text/plain" }
});
        res.end("Not Found)}
    }
});
    server.listen(this.config.healthCheckPort, () => {}
  this.log(Health check server listening on port ${this.config.healthCheckPort};)
      )})}
  recordError(error) {}
  this.metrics.errors.push({})
  "timestamp": Date.now(),
      message: error.message,
      "stack": error.stack}
});
    // Keep only recent errors;
    if (this.metrics.errors.length > this.config.maxErrors) {}
  this.metrics.errors = this.metrics.errors.slice(-this.config.maxErrors)}
  }
  async loadMetrics() {}
  try {}
  if (fs.existsSync(this.config.metricsFile)) {}
  const data = fs.readFileSync(this.config.metricsFile, utf8);
        const savedMetrics = JSON.parse(data);
        // Merge with current metrics, preserving start time;
        this.metrics = {}
  ...this.metrics,
          ...savedMetrics,
          "startTime": this.metrics.startTime}
      }
      fs.writeFileSync(;)
        this.config.metricsFile,
        JSON.stringify(this.metrics, null, 2);
      )} catch (error) {  this.log(Failed to save metrics": ${error.message  }", ERROR)} catch (error) {}
  this.log("Failed to load "metrics: ${error.message}, "WARN")}
  }
  async saveMetrics() {}
  try {}
  fs.writeFileSync(;)
        this.config.metricsFile,
        JSON.stringify(this.metrics, null, 2);
      )} catch (error) {}
  this.log(Failed to save metrics": ${error.message}", ERROR)}
  }
  restartAfterDelay(delay = 5000) {this.log("Restarting monitor in ${delay}ms...");
    setTimeout(() => {}
  this.initialize()}, delay)}
  getStatus() {}
  return {}
  isRunning: true,
      "systemStatus": this.metrics.systemStatus,
      healthChecks: this.metrics.healthChecks,
      "successRate": this.metrics.successRate || 0,
      errors: this.metrics.errors.length,
      "restarts": this.metrics.restarts,
      uptime: this.metrics.uptime,
      "performance": this.metrics.performance}}
}
// Handle process signals;
process.on(SIGINT, async () => {}
  console.log("\nReceived SIGINT, shutting down gracefully...");

// Handle process signals;
process.on(SIGINT, async () => {}
  console.log("\nReceived SIGINT, shutting down gracefully...");
  if (global.pm2SyncMonitor) {}
  await global.pm2SyncMonitor.stop()}
  process.exit(0)}
});

process.on(SIGTERM, async () => {}
  console.log("\nReceived SIGTERM, shutting down gracefully...");
  if (global.pm2SyncMonitor) {}
  await global.pm2SyncMonitor.stop()}
  process.exit(0)}
});
// Start the monitor system;
if (require.main === module) {}
  global.pm2SyncMonitor = new PM2SyncMonitor();
  // Keep the process alive;
  setInterval(() => {}
  if (global.pm2SyncMonitor && global.pm2SyncMonitor.isRunning) {}
  // Process is healthy}
  }, 60000)}
module.exports = PM2SyncMonitor;

module.exports = PM2SyncMonitor;
module.exports = PM2SyncMonitor;


"`;

