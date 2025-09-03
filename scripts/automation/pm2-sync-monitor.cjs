#!/usr/bin/env node

/**
 * PM2 Sync Monitor System
 * Health check and status monitoring for the PM2 sync automation system
 * Uses remote-first strategy for conflict resolution
 *
 * Features:
 * - Real-time health monitoring
 * - Performance metrics
 * - Error tracking and reporting
 * - Automated issue resolution with remote-first strategy
 * - Status dashboard
 * - Alert system
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const http = require('http');

class PM2SyncMonitor {
  constructor() {
    this.config = {
      projectRoot: process.cwd(),
      healthCheckInterval: 60000, // 1 minute
      metricsInterval: 30000, // 30 seconds
      healthCheckPort: 3001,
      maxErrors: 10,
      maxRestarts: 5,
      logFile: 'logs/pm2-sync-monitor.log',
      metricsFile: 'logs/pm2-sync-metrics.json',
    };

    this.metrics = {
      startTime: Date.now(),
      lastHealthCheck: Date.now(),
      totalChecks: 0,
      failedChecks: 0,
      systemStatus: 'healthy',
      errors: [],
      restarts: 0,
      uptime: 0,
      performance: {
        cpu: 0,
        memory: 0,
        disk: 0,
      },
    };

    this.isRunning = false;
    this.setupLogging();
    this.initialize();
  }

  setupLogging() {
    const logDir = path.dirname(this.config.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }

    this.log = (message, level = 'INFO') => {
      const timestamp = new Date().toISOString();
      const logMessage = `[${timestamp}] [${level}] ${message}`;
      console.log(logMessage);

      try {
        fs.appendFileSync(this.config.logFile, logMessage + '\n');
      } catch (error) {
        console.error('Failed to write to log file:', error.message);
      }
    };
  }

  async initialize() {
    try {
      this.log('Initializing PM2 Sync Monitor System...');

      // Load existing metrics
      await this.loadMetrics();

      // Start monitoring loops
      this.startMonitoringLoops();

      // Start health check server
      this.startHealthCheckServer();

      // Initial health check
      await this.performHealthCheck();
      
      this.log('PM2 Sync Monitor System initialized successfully');
      this.isRunning = true;
    } catch (error) {
      this.log(`Initialization failed: ${error.message}`, 'ERROR');
      this.recordError(error);
      this.restartAfterDelay();
    }
  }

  startMonitoringLoops() {
    // Health check loop
    setInterval(async () => {
      if (this.isRunning) {
        await this.performHealthCheck();
      }
    }, this.config.healthCheckInterval);

    // Metrics collection loop
    setInterval(async () => {
      if (this.isRunning) {
        await this.collectMetrics();
      }
    }, this.config.metricsInterval);

    // Cleanup loop
    setInterval(async () => {
      if (this.isRunning) {
        await this.cleanup();
      }
    }, 300000); // 5 minutes
  }

  async performHealthCheck() {
    try {
      this.log('Performing health check...');
      this.metrics.totalChecks++;

      const healthStatus = await this.checkSystemHealth();

      if (healthStatus.isHealthy) {
        this.metrics.systemStatus = 'healthy';
        this.log('System health check passed');
      } else {
        this.metrics.failedChecks++;
        this.metrics.systemStatus = 'unhealthy';
        this.log(`Health check failed: ${healthStatus.issues.join(', ')}`, 'WARN');

        // Attempt to fix issues
        await this.fixIssues(healthStatus.issues);
      }

      this.metrics.lastHealthCheck = Date.now();
      await this.saveMetrics();
    } catch (error) {
      this.log(`Health check failed: ${error.message}`, 'ERROR');
      this.recordError(error);
      this.metrics.failedChecks++;
    }
  }

  async checkSystemHealth() {
    const issues = [];
    let isHealthy = true;

    try {
      // Check PM2 processes
      const pm2Status = await this.checkPM2Status();
      if (!pm2Status.isHealthy) {
        issues.push(...pm2Status.issues);
        isHealthy = false;
      }

      // Check file system
      const fsStatus = await this.checkFileSystem();
      if (!fsStatus.isHealthy) {
        issues.push(...fsStatus.issues);
        isHealthy = false;
      }

      // Check git repository
      const gitStatus = await this.checkGitRepository();
      if (!gitStatus.isHealthy) {
        issues.push(...gitStatus.issues);
        isHealthy = false;
      }

      // Check build status
      const buildStatus = await this.checkBuildStatus();
      if (!buildStatus.isHealthy) {
        issues.push(...buildStatus.issues);
        isHealthy = false;
      }

      // Check dependencies
      const depsStatus = await this.checkDependencies();
      if (!depsStatus.isHealthy) {
        issues.push(...depsStatus.issues);
        isHealthy = false;
      }

      return {
        isHealthy: isHealthy,
        issues: issues,
      };
    } catch (error) {
      issues.push(`Health check error: ${error.message}`);
      return {
        isHealthy: false,
        issues: issues,
      };
    }
  }

  async checkPM2Status() {
    try {
      const output = execSync('pm2 jlist', { encoding: 'utf8' });
      const processes = JSON.parse(output);

      // Check if all required processes are running
      const requiredProcesses = ['pm2-sync-automation', 'pm2-sync-monitor', 'zion-app'];

      const issues = [];
      let isHealthy = true;

      requiredProcesses.forEach(processName => {
        const process = processes.find(p => p.name === processName);
        if (!process || process.pm2_env.status !== 'online') {
          issues.push(`Process ${processName} is not running`);
          isHealthy = false;
        }
      });

      return {
        isHealthy: isHealthy,
        issues: issues,
      };
    } catch (error) {
      return {
        isHealthy: false,
        issues: [`PM2 status check failed: ${error.message}`],
      };
    }
  }

  async checkFileSystem() {
    try {
      const issues = [];
      let isHealthy = true;

      // Check critical directories
      const criticalDirs = ['src', 'pages', 'components', 'utils', 'public'];
      criticalDirs.forEach(dir => {
        if (!fs.existsSync(dir)) {
          issues.push(`Critical directory missing: ${dir}`);
          isHealthy = false;
        }
      });

      // Check disk space
      const diskUsage = await this.getDiskUsage();
      if (diskUsage.usagePercent > 90) {
        issues.push(`Disk usage high: ${diskUsage.usagePercent}%`);
        isHealthy = false;
      }

      return {
        isHealthy: isHealthy,
        issues: issues,
      };
    } catch (error) {
      return {
        isHealthy: false,
        issues: [`File system check failed: ${error.message}`],
      };
    }
  }

  async checkGitRepository() {
    try {
      const issues = [];
      let isHealthy = true;

      // Check if git repository exists
      if (!fs.existsSync('.git')) {
        issues.push('Git repository not found');
        isHealthy = false;
      } else {
        // Check for uncommitted changes
        const status = execSync('git status --porcelain', {
          cwd: this.config.projectRoot,
          encoding: 'utf8',
        });

        if (status.trim()) {
          issues.push('Uncommitted changes detected');
          isHealthy = false;
        }

        // Check if repository is up to date
        try {
          execSync('git fetch origin', {
            cwd: this.config.projectRoot,
            stdio: 'pipe',
          });

          const behind = execSync('git rev-list --count HEAD..origin/main', {
            cwd: this.config.projectRoot,
            encoding: 'utf8',
          }).trim();

          if (parseInt(behind) > 0) {
            issues.push(`Repository is ${behind} commits behind origin/main`);
            isHealthy = false;
          }
        } catch (error) {
          issues.push('Failed to check repository status');
          isHealthy = false;
        }
      }

      return {
        isHealthy: isHealthy,
        issues: issues,
      };
    } catch (error) {
      return {
        isHealthy: false,
        issues: [`Git repository check failed: ${error.message}`],
      };
    }
  }

  async checkBuildStatus() {
    try {
      const issues = [];
      let isHealthy = true;

      // Check if build artifacts exist
      const buildDirs = ['.next', 'dist', 'build'];
      const hasBuild = buildDirs.some(dir => fs.existsSync(dir));

      if (!hasBuild) {
        issues.push('No build artifacts found');
        isHealthy = false;
      }

      // Check if build is recent (within last hour)
      if (hasBuild) {
        const buildDir = buildDirs.find(dir => fs.existsSync(dir));
        if (buildDir) {
          const stats = fs.statSync(buildDir);
          const age = Date.now() - stats.mtime.getTime();
          if (age > 3600000) { // 1 hour
            issues.push('Build artifacts are outdated');
            isHealthy = false;
          }
        }
      }

      return {
        isHealthy: isHealthy,
        issues: issues,
      };
    } catch (error) {
      return {
        isHealthy: false,
        issues: [`Build status check failed: ${error.message}`],
      };
    }
  }

  async checkDependencies() {
    try {
      const issues = [];
      let isHealthy = true;

      // Check if node_modules exists
      if (!fs.existsSync('node_modules')) {
        issues.push('Dependencies not installed');
        isHealthy = false;
      } else {
        // Check for outdated dependencies
        try {
          const outdated = execSync('npm outdated --json', {
            cwd: this.config.projectRoot,
            encoding: 'utf8',
          });
          const outdatedDeps = JSON.parse(outdated);
          if (Object.keys(outdatedDeps).length > 0) {
            issues.push(`${Object.keys(outdatedDeps).length} dependencies are outdated`);
            isHealthy = false;
          }
        } catch (error) {
          // npm outdated returns non-zero exit code when there are outdated packages
          if (error.status !== 0) {
            issues.push('Some dependencies are outdated');
            isHealthy = false;
          }
        }
      }

      return {
        isHealthy: isHealthy,
        issues: issues,
      };
    } catch (error) {
      return {
        isHealthy: false,
        issues: [`Dependencies check failed: ${error.message}`],
      };
    }
  }

  async fixIssues(issues) {
    this.log(`Attempting to fix ${issues.length} issues...`);

    for (const issue of issues) {
      try {
        if (issue.includes('Process') && issue.includes('not running')) {
          await this.restartProcess(issue);
        } else if (issue.includes('Uncommitted changes')) {
          await this.commitChanges();
        } else if (issue.includes('commits behind')) {
          await this.syncWithRemote();
        } else if (issue.includes('Dependencies not installed')) {
          await this.installDependencies();
        } else if (issue.includes('outdated')) {
          await this.updateDependencies();
        } else if (issue.includes('No build artifacts')) {
          await this.triggerBuild();
        }
      } catch (error) {
        this.log(`Failed to resolve issue '${issue}': ${error.message}`, 'ERROR');
      }
    }
  }

  async restartProcess(issue) {
    const processName = issue.match(/Process (.+) is not running/)?.[1];
    if (processName) {
      this.log(`Restarting process: ${processName}`);
      execSync(`pm2 restart ${processName}`, { stdio: 'pipe' });
      this.metrics.restarts++;
    }
  }

  async commitChanges() {
    this.log('Committing uncommitted changes with remote-first strategy...');
    
    // First, try to sync with remote using remote-first strategy
    try {
      execSync('git fetch origin', { cwd: this.config.projectRoot, stdio: 'pipe' });
      execSync('git merge -X theirs --no-edit origin/main', {
        cwd: this.config.projectRoot,
        stdio: 'pipe',
      });
      this.log('Successfully synced with remote using remote-first strategy');
    } catch (error) {
      this.log('Failed to sync with remote, resolving conflicts...', 'WARN');
      // Resolve conflicts by accepting remote changes
      try {
        execSync('git checkout --theirs .', { cwd: this.config.projectRoot, stdio: 'pipe' });
        execSync('git add .', { cwd: this.config.projectRoot, stdio: 'pipe' });
        execSync('git commit -m "Auto-commit: Resolved conflicts with remote-first strategy"', {
          cwd: this.config.projectRoot,
          stdio: 'pipe',
        });
      } catch (commitError) {
        this.log('Failed to commit after conflict resolution', 'ERROR');
      }
    }
  }

  async syncWithRemote() {
    this.log('Syncing with remote repository using remote-first strategy...');
    try {
      execSync('git fetch origin', { cwd: this.config.projectRoot, stdio: 'pipe' });
      execSync('git merge -X theirs --no-edit origin/main', {
        cwd: this.config.projectRoot,
        stdio: 'pipe',
      });
      this.log('Successfully synced with remote using remote-first strategy');
    } catch (error) {
      this.log('Failed to sync with remote, resolving conflicts...', 'WARN');
      // Resolve conflicts by accepting remote changes
      try {
        execSync('git checkout --theirs .', { cwd: this.config.projectRoot, stdio: 'pipe' });
        execSync('git add .', { cwd: this.config.projectRoot, stdio: 'pipe' });
        execSync('git commit -m "Auto-commit: Resolved conflicts with remote-first strategy"', {
          cwd: this.config.projectRoot,
          stdio: 'pipe',
        });
      } catch (commitError) {
        this.log('Failed to commit after conflict resolution', 'ERROR');
      }
    }
  }

  async installDependencies() {
    this.log('Installing dependencies...');
    execSync('npm install', { cwd: this.config.projectRoot, stdio: 'pipe' });
  }

  async updateDependencies() {
    this.log('Updating dependencies...');
    execSync('npm update', { cwd: this.config.projectRoot, stdio: 'pipe' });
  }

  async triggerBuild() {
    this.log('Triggering build...');
    execSync('npm run build', { cwd: this.config.projectRoot, stdio: 'pipe' });
  }

  async collectMetrics() {
    try {
      // Update uptime
      this.metrics.uptime = Date.now() - this.metrics.startTime;

      // Collect performance metrics
      await this.collectPerformanceMetrics();

      // Save metrics
      await this.saveMetrics();
    } catch (error) {
      this.log(`Failed to collect metrics: ${error.message}`, 'ERROR');
    }
  }

  async collectPerformanceMetrics() {
    try {
      // Get system performance data
      const output = execSync('pm2 monit --no-daemon', { 
        encoding: 'utf8',
        timeout: 5000 
      });

      // Parse performance data (simplified)
      this.metrics.performance = {
        cpu: Math.random() * 100, // Placeholder
        memory: Math.random() * 100, // Placeholder
        disk: await this.getDiskUsage(),
      };
    } catch (error) {
      // Ignore timeout errors from pm2 monit
      if (!error.message.includes('timeout')) {
        this.log(`Performance monitoring failed: ${error.message}`, 'ERROR');
      }
    }
  }

  async getDiskUsage() {
    try {
      const output = execSync('df .', { encoding: 'utf8' });
      const lines = output.trim().split('\n');
      const [, usageLine] = lines;
      const [, used, available] = usageLine.split(/\s+/);

      const total = parseInt(used) + parseInt(available);
      const usagePercent = Math.round((parseInt(used) / total) * 100);

      return {
        used: parseInt(used),
        available: parseInt(available),
        total: total,
        usagePercent: usagePercent,
      };
    } catch (error) {
      return {
        used: 0,
        available: 0,
        total: 0,
        usagePercent: 0,
      };
    }
  }

  async cleanup() {
    try {
      // Clean up old log files
      const logDir = path.dirname(this.config.logFile);
      if (fs.existsSync(logDir)) {
        const files = fs.readdirSync(logDir);
        const maxAge = 7 * 24 * 60 * 60 * 1000; // 7 days
        const now = Date.now();

        files.forEach(file => {
          const filePath = path.join(logDir, file);
          const stats = fs.statSync(filePath);

          if (now - stats.mtime.getTime() > maxAge) {
            fs.unlinkSync(filePath);
            this.log(`Cleaned up old log file: ${file}`);
          }
        });
      }

      // Clean up old metrics
      if (this.metrics.errors.length > this.config.maxErrors) {
        this.metrics.errors = this.metrics.errors.slice(-this.config.maxErrors);
      }
    } catch (error) {
      this.log(`Cleanup failed: ${error.message}`, 'ERROR');
    }
  }

  startHealthCheckServer() {
    const server = http.createServer((req, res) => {
      if (req.url === '/health') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(
          JSON.stringify({
            status: this.metrics.systemStatus,
            uptime: this.metrics.uptime,
            lastCheck: this.metrics.lastHealthCheck,
            totalChecks: this.metrics.totalChecks,
            failedChecks: this.metrics.failedChecks,
          })
        );
      } else if (req.url === '/metrics') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(this.metrics));
      } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
      }
    });

    server.listen(this.config.healthCheckPort, () => {
      this.log(`Health check server listening on port ${this.config.healthCheckPort}`);
    });
  }

  recordError(error) {
    this.metrics.errors.push({
      timestamp: Date.now(),
      message: error.message,
      stack: error.stack,
    });

    // Keep only recent errors
    if (this.metrics.errors.length > this.config.maxErrors) {
      this.metrics.errors = this.metrics.errors.slice(-this.config.maxErrors);
    }
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
          startTime: this.metrics.startTime,
        };
      }
    } catch (error) {
      this.log(`Failed to load metrics: ${error.message}`, 'WARN');
    }
  }

  async saveMetrics() {
    try {
      fs.writeFileSync(
        this.config.metricsFile,
        JSON.stringify(this.metrics, null, 2)
      );
    } catch (error) {
      this.log(`Failed to save metrics: ${error.message}`, 'ERROR');
    }
  }

  async stop() {
    this.log('Stopping PM2 Sync Monitor System...');
    this.isRunning = false;
    await this.saveMetrics();
    this.log('PM2 Sync Monitor System stopped');
  }

  restartAfterDelay(delay = 5000) {
    this.log(`Restarting monitor in ${delay}ms...`);
    setTimeout(() => {
      this.initialize();
    }, delay);
  }

  getStatus() {
    return {
      isRunning: this.isRunning,
      metrics: this.metrics,
      uptime: this.metrics.uptime,
      systemStatus: this.metrics.systemStatus,
      totalChecks: this.metrics.totalChecks,
      failedChecks: this.metrics.failedChecks,
      restarts: this.metrics.restarts,
    };
  }
}

// Handle process signals
process.on('SIGINT', async () => {
  console.log('\nReceived SIGINT, shutting down gracefully...');
  if (global.pm2SyncMonitor) {
    await global.pm2SyncMonitor.stop();
  }
  process.exit(0);
});

process.on('SIGTERM', async () => {
  console.log('\nReceived SIGTERM, shutting down gracefully...');
  if (global.pm2SyncMonitor) {
    await global.pm2SyncMonitor.stop();
  }
  process.exit(0);
});

// Start the monitor system
if (require.main === module) {
  global.pm2SyncMonitor = new PM2SyncMonitor();

  // Keep the process alive
  setInterval(() => {
    if (global.pm2SyncMonitor && global.pm2SyncMonitor.isRunning) {
      // Process is healthy
    }
  }, 60000);
}

module.exports = PM2SyncMonitor;