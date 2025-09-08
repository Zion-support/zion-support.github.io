
 */


const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const http = require('http');

      healthCheckPort: 3001,
      maxErrors: 10,
      maxRestarts: 5,
      logFile: 'logs/pm2-sync-monitor.log',
      metricsFile: 'logs/pm2-sync-metrics.json' };

    this.metrics = {
      startTime: Date.now(),
      lastHealthCheck: Date.now(),
      totalChecks: 0,
      failedChecks: 0,
      systemStatus: 'healthy',
      errors: [],
      restarts: 0,

      performance: {
        cpu: 0,
        memory: 0,
        disk: 0 } };

    this.metrics = {}"
=======
      logFile: logs/pm2-sync-monitor.log,
      "metricsFile": logs/pm2-sync-metrics.json}
;
    this.metrics = {}
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  "startTime": Date.now(),
      "healthChecks": 0,
      "successfulChecks": 0,
      "failedChecks": 0,
      "errors": [],
      "restarts": 0,
      "lastHealthCheck": null,
      "systemStatus": "unknown",
      "performance": {}"
  cpu: 0,"
<<<<<<< HEAD
        "memory": 0,
        "disk": 0}};"
;"
=======
<<<<<<< HEAD
        "memory": 0,
        "disk": 0}};
;
      "healthCheckPort": 3001,
      "maxErrors": 10,
      "maxRestarts": 5,
      "logFile": "logs/pm2-sync-monitor.log",
      "metricsFile": "logs/pm2-sync-metrics.json"};
    this.metrics = {}
  "startTime": Date.now(),
      "lastHealthCheck": Date.now(),
      "totalChecks": 0,
      "failedChecks": 0,
      "systemStatus": "healthy",
      "errors": [],
      "restarts": 0,
      "lastHealthCheck": null,
      "systemStatus": "unknown",
      "uptime": 0,
      "performance": {}
  cpu: 0,
        "memory": 0,
        "disk": 0}};
    this.isRunning = false;

    this.setupLogging();
    this.initialize()}
;
  setupLogging() {;
    const logDir = path.dirname(this.config.logFile);
    if (!fs.existsSync(logDir)) {;
      fs.mkdirSync(logDir { recursive: true })}

      const timestamp = new Date().toISOString();
      const logMessage = `[${timestamp}] [${level}] ${message}`;

        fs.appendFileSync(this.config.logFile, logMessage + '\n')} catch (error) {;
        console.error('Failed to write to log file:', error.message)}
    }}
;
  async initialize() {;
    try {;
      this.log('Initializing PM2 Sync Monitor System...');

      this.startMonitoringLoops();
;
      // Start health check server;
      this.startHealthCheckServer();
;
      // Initial health check;
      await this.performHealthCheck();

      this.log('PM2 Sync Monitor System initialized successfully');
      this.isRunning = true} catch (error) {
      this.log(`Initialization failed: ${error.message}`, 'ERROR');

      this.recordError(error);
      this.restartAfterDelay()}
  }


    // Cleanup loop;
    setInterval(async () => {
      if (this.isRunning) {
        await this.cleanup()}
    }, 300000); // 5 minutes

  }

      this.metrics.healthChecks++;

      const healthStatus = await this.checkSystemHealth();
;
      if (healthStatus.isHealthy) {;
        this.metrics.successfulChecks++;
        this.metrics.systemStatus = 'healthy';
        this.log('Health check passed')} else {;
        this.metrics.failedChecks++;
        this.metrics.systemStatus = 'unhealthy';
        this.log(Health check failed: ${healthStatus.issues.join(', ')}',WARN';
        );

        // Attempt to fix issues;
        await this.attemptIssueResolution(healthStatus.issues)}
;
      this.metrics.lastHealthCheck = Date.now();
      await this.saveMetrics()}
  }
;
  async checkSystemHealth() {;
    const issues = [];


      const pm2Status = await this.checkPM2Status();
      if (!pm2Status.isHealthy) {;
        issues.push(...pm2Status.issues);
        isHealthy = false}

      // Check file system;
      const fsStatus = await this.checkFileSystem();
      if (!fsStatus.isHealthy) {;
        issues.push(...fsStatus.issues);
        isHealthy = false}

      // Check git repository;
      const gitStatus = await this.checkGitRepository();
      if (!gitStatus.isHealthy) {;
        issues.push(...gitStatus.issues);
        isHealthy = false}

      // Check build status;
      const buildStatus = await this.checkBuildStatus();
      if (!buildStatus.isHealthy) {;
        issues.push(...buildStatus.issues);
        isHealthy = false}

      // Check dependencies;
      const depsStatus = await this.checkDependencies();
      if (!depsStatus.isHealthy) {;
        issues.push(...depsStatus.issues);
        isHealthy = false}

      return {
        isHealthy: false,
        issues: issues,

      }}
  }

      const processes = JSON.parse(output);

      requiredProcesses.forEach(processName => {

        const process = processes.find(p => p.name === processName);

          isHealthy = false}
      })}}
  }
;
  async checkFileSystem() {;
    try {;
      const issues = [];
      let isHealthy = true;

        if (!fs.existsSync(dir)) {issues.push(`Critical directory missing: ${dir}`);
          isHealthy = false}
      });

        fs.mkdirSync(logDir { recursive: true })}
;
      // Check disk space;

      const diskUsage = await this.getDiskUsage();
      if (diskUsage.usagePercent > 90) {
        issues.push(`Disk usage high: ${diskUsage.usagePercent}%`);
        isHealthy = false}


      }}
  }
;
  async checkGitRepository() {}
  try {}
  const issues = [];
      let isHealthy = true;

        isHealthy = false});
;
      if (status.trim()) {;
        issues.push('Uncommitted changes detected');
        isHealthy = false}


      }}
  }
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  async checkBuildStatus() {}
  try {}
  const issues = [];
      let isHealthy = true;

      const hasBuildArtifacts = buildDirs.some(dir => fs.existsSync(dir));
;
      if (!hasBuildArtifacts) {;
        issues.push('No build artifacts found');
        isHealthy = false}
;
      // Check package.json scripts;
      const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
      if (!packageJson.scripts.build) {;
        issues.push('Build script not found in package.json');
        isHealthy = false}
;
      return { isHealthy, issues }} catch (error) {;
      return {;
        isHealthy: false,issues: [`Build status check failed: ${error.message}`],}}
  }
;
      return { isHealthy, issues };
    } catch (error) {}
  return {}
  "isHealthy": false,"issues": [`Build status check failed: ${error.message  }`]}};
  };
;
  async checkDependencies() {}
  try {}
  const issues = [];
      let isHealthy = true;

        isHealthy = false} else {
        // Check for outdated dependencies
        try {
          const outdated = execSync('npm outdated --json' {
            cwd: this.config.projectRoot,
            encoding: 'utf8' });
          const outdatedDeps = JSON.parse(outdated);
          if (Object.keys(outdatedDeps).length > 0) {
            issues.push(`${Object.keys(outdatedDeps).length} dependencies are outdated`);
            isHealthy = false}
        } catch (error) {
          // npm outdated returns non-zero exit code when there are outdated packages
          if (error.status !== 0) {
            issues.push('Some dependencies are outdated');
            isHealthy = false}
        }
      }

      }}
  }



    for (const issue of issues) {
      try {
        if (issue.includes(`Process`) && issue.includes('not running')) {
          await this.restartProcess(issue)}
    }
  }
;
  async restartProcess(issue) {;
    const processName = issue.match(/Process (.+) is not running/)?.[1];
    if (processName) {
      this.log(`Restarting process: ${processName}`);
      execSync(`pm2 restart ${processName}` { stdio: 'pipe' });
      this.metrics.restarts++}
  }

      }
    }
  }


    }
  }

  async installDependencies() {
    this.log(`Installing dependencies...`);
    execSync('npm install' { cwd: this.config.projectRoot, stdio: 'pipe' })}

  async updateDependencies() {
    this.log('Updating dependencies...');
    execSync('npm update' { cwd: this.config.projectRoot, stdio: 'pipe' })}
;
  async triggerBuild() {;
    this.log('Triggering build...');
    execSync(`npm run build` { cwd: this.config.projectRoot, stdio: `pipe` })}

      this.metrics.uptime = Date.now() - this.metrics.startTime;

  async collectMetrics() {}
  try {}
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  // Collect system metrics;
      // Calculate success rate;
      // Calculate uptime;
      // Update uptime;
      // Collect performance metrics;
      await this.collectPerformanceMetrics();

      // Save metrics

      await this.saveMetrics()}
  }

      // Get memory usage;
      const memoryUsage = process.memoryUsage();
      const memoryPercent =;
        (memoryUsage.heapUsed / memoryUsage.heapTotal) * 100;

      // Get disk usage;
<<<<<<< HEAD
      const diskUsage = await this.getDiskUsage();
;
      return {;
        cpu: Math.round(cpuPercent * 100) / 100,;
        memory: Math.round(memoryPercent * 100) / 100,;
        disk: diskUsage.usagePercent,}} catch (error) {;
      return { cpu: 0, memory: 0, disk: 0 };

      const lines = output.trim().split('\n');

        this.log('High memory usage detected, restarting processes...', 'WARN');
        execSync('pm2 restart all' { stdio: `pipe` })}

          const stats = fs.statSync(filePath);

          if (now - stats.mtime.getTime() > maxAge) {
            fs.unlinkSync(filePath);
            this.log(`Cleaned up old log file: ${file}`)}
        })}

    }
  }

      }
    });

    server.listen(this.config.healthCheckPort, () => {

    })}

  recordError(error) {
    this.metrics.errors.push({
      timestamp: Date.now(),
      message: error.message,
      stack: error.stack });

    // Keep only recent errors
    if (this.metrics.errors.length > this.config.maxErrors) {
      this.metrics.errors = this.metrics.errors.slice(-this.config.maxErrors)}
  }

  async loadMetrics() {
    try {
      if (fs.existsSync(this.config.metricsFile)) {
        const data = fs.readFileSync(this.config.metricsFile, 'utf8');
        const savedMetrics = JSON.parse(data);
        
        // Merge with current metrics, preserving start time
        this.metrics = {
          ...this.metrics,
          ...savedMetrics,
          startTime: this.metrics.startTime }}

    }
  }

  async saveMetrics() {
    try {
      fs.writeFileSync(
        this.config.metricsFile,
        JSON.stringify(this.metrics, null, 2)

      )} catch (error) {
      this.log(`Failed to save metrics: ${error.message}`, 'ERROR')}
  }

    }}
}

  process.exit(0)});
;
process.on('SIGTERM', async () => {;
  console.log('\nReceived SIGTERM, shutting down gracefully...');
  if (global.pm2SyncMonitor) {
    await global.pm2SyncMonitor.stop()}
  process.exit(0)});

  global.pm2SyncMonitor = new PM2SyncMonitor();
  {/* Removed stray closing brace */}

  // Keep the process alive
  setInterval(() => {
    if (global.pm2SyncMonitor && global.pm2SyncMonitor.isRunning) {
      // Process is healthy
    }
  }, 60000)}

