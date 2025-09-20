<<<<<<< HEAD
#!/""usr/bin/env"" node;
/**;
 * PM2 Sync Monitor System;
 * Health check and status monitoring for the PM2 sync automation system;
 *;
 * Features:;
 * - Real-time health monitoring;
 * - Performance metrics;
 * - Error tracking and reporting;
 * - Automated issue resolution;
 * - Status dashboard;
 * - Alert system;
#!/"usr/bin/env" node;
/**;
 * PM2 Sync Monitor System;
 * Health check and status monitoring for the PM2 sync automation system;
 *;
 * Features:;
 * - Real-time health monitoring;
 * - Performance metrics;
 * - Error tracking and reporting;
 * - Automated issue resolution;
 * - Status dashboard;
 * - Alert system;
 */;
#!/usr/bin/env node;

/**;
 * PM2 Sync Monitor System;
 * Health check and status monitoring for the PM2 sync automation system;
 * Uses remote-first strategy for conflict resolution;
 *;
 * Features:;
 * - Real-time health monitoring;
 * - Performance metrics;
 * - Error tracking and reporting;
 * - Automated issue resolution with remote-first strategy;
 * - Status dashboard;
 * - Alert system;
 */;

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const http = require("http");

class $1 {
  constructor() {
  this.config = {
  projectRoot: process.cwd();
      monitorInterval: parseInt(process.env.MONITOR_INTERVAL) || 60000, // 1 minute;
      healthCheckPort: 3001;
      maxErrors: 10;
      maxRestarts: 5;
      logFile: ""logs/pm2-sync-monitor.log"";
      metricsFile: ""logs/pm2-sync-metrics.json"",
}
;
    this.metrics = {
  startTime: Date.now();
      healthChecks: 0;
      successfulChecks: 0;
      failedChecks: 0;
      errors: [];
      restarts: 0;
      lastHealthCheck: null;
      systemStatus: "unknown";
      performance: {
  cpu: 0;
        memory: 0;
        disk: 0,
},
}
;
      healthCheckPort: 3001;
      maxErrors: 10;
      maxRestarts: 5;
      logFile: "logs/pm2-sync-monitor.log";
      metricsFile: "logs/pm2-sync-metrics.json"}
    this.metrics = {
  startTime: Date.now();
      lastHealthCheck: Date.now();
      totalChecks: 0;
      failedChecks: 0;
      systemStatus: "healthy";
      errors: [];
      restarts: 0;
      lastHealthCheck: null;
      systemStatus: `unknown`;
      uptime: 0;
      performance: {
  cpu: 0;
        memory: 0;
        disk: 0}}
    this.isRunning = false;
    this.setupLogging();
    this.initialize(),
}
;
  setupLogging() {
  const logDir = path.dirname(this.config.logFile);
    if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir, { recursive: true }),
}
;
    this.log = (message, level = `INFO`) => {
  const timestamp = new Date().toISOString();
      const logMessage = `[${timestamp}] [${level}] ${message}`;
      console.log(`logMessage);

      try {
  console.log(logMessage);
      try {
  fs.appendFileSync(this.config.logFile, logMessage + `\n`),
} catch (error) {
  console.error(`Failed to write to log file: `, error.message),
}
    }
  }
;
  async initialize() {
  try {
  this.log(`Initializing PM2 Sync Monitor System...`);
      // Start monitoring loops;
      this.startMonitoringLoops();
      // Start health check server;
      this.startHealthCheckServer();
      // Initial health check;
      await this.performHealthCheck();
      this.log(`PM2 Sync Monitor System initialized successfully`),
} catch (error) {  this.log(Initialization failed: ${error.message  }, `ERROR``);
        fs.appendFileSync(this.config.logFile, logMessage + "\n"),
} catch (error) {
  console.error("Failed to write to log file: ", error.message),
}
    }
  }
;
  async initialize() {
  try {
  this.log("Initializing PM2 Sync Monitor System...");

      // Start monitoring loops;
      this.startMonitoringLoops();

      // Start health check server;
      this.startHealthCheckServer();

      // Initial health check;
      await this.performHealthCheck();

      this.log("PM2 Sync Monitor System initialized successfully");
      this.isRunning = true,
} catch (error) {
  this.log(`Initialization failed: ${error.message}`, "ERROR");
      this.recordError(error);
      this.restartAfterDelay(),
}
  }
;
  startMonitoringLoops() {
  // Health check loop;
    setInterval(async () => {
  await this.performHealthCheck(),
}, this.config.monitorInterval);

    // Metrics collection loop;
    setInterval(async () => {
  await this.collectMetrics(),
}, this.config.monitorInterval * 2);

    // Performance monitoring loop;
    setInterval(async () => {
  await this.monitorPerformance(),
}, this.config.monitorInterval * 3);

    // Cleanup loop;
    setInterval(async () => {
  await this.cleanupOldData(),
}, this.config.monitorInterval * 10);
    // Cleanup loop;
    setInterval(async () => {
  if (this.isRunning) {
  await this.cleanup(),
}
    }, 300000); // 5 minutes,
}
;
  async performHealthCheck() {
  try {
  this.log(`Performing health check...`);

  async performHealthCheck() {
  try {
  this.log("Performing health check...");
      this.metrics.healthChecks++;

      const healthStatus = await this.checkSystemHealth();

      if (healthStatus.isHealthy) {
  this.metrics.successfulChecks++;
        this.metrics.systemStatus = "healthy";
        this.log("Health check passed"),
} else {
  this.metrics.failedChecks++;
        this.metrics.systemStatus = "unhealthy";
        this.log(Health check failed: ${healthStatus.issues.join(", ")}",WARN";
        );

        // Attempt to fix issues;
        await this.attemptIssueResolution(healthStatus.issues);
      this.metrics.totalChecks++;
      const healthStatus = await this.checkSystemHealth();
      if (healthStatus.isHealthy) {
  this.metrics.systemStatus = "healthy";
        this.log(`Health check passed`),
} else {
  this.metrics.failedChecks++;
        this.metrics.systemStatus = `unhealthy`;
        this.log(Health check failed: ${healthStatus.issues.join(", ")}`,WARN`;
        );
        // Attempt to fix issues;
        await this.attemptIssueResolution(healthStatus.issues),
}
;
      this.metrics.lastHealthCheck = Date.now();
      await this.saveMetrics(),
} catch (error) {  this.log(`Health check failed: ${error.message  }`, `ERROR`);
      this.recordError(error);
      this.metrics.failedChecks++;
      this.metrics.systemStatus = `error`,
} catch (error) {
  this.log(`Health check failed: ${error.message}`, "ERROR");
      this.recordError(error);
      this.metrics.failedChecks++,
}
  }
;
  async checkSystemHealth() {
  const issues = [];

    try {
  // Check PM2 processes;
      const pm2Status = await this.checkPM2Status();
      if (!pm2Status.isHealthy) {
  issues.push(...pm2Status.issues);
        isHealthy = false,
}
;

      // Check file system;
      const fsStatus = await this.checkFileSystem();
      if (!fsStatus.isHealthy) {
  issues.push(...fsStatus.issues);
        isHealthy = false,
}
;
      // Check git repository;
      const gitStatus = await this.checkGitRepository();
      if (!gitStatus.isHealthy) {
  issues.push(...gitStatus.issues);
        isHealthy = false,
}
;

      // Check build status;
      const buildStatus = await this.checkBuildStatus();
      if (!buildStatus.isHealthy) {
  issues.push(...buildStatus.issues);
        isHealthy = false,
}
;
      // Check dependencies;
      const depsStatus = await this.checkDependencies();
      if (!depsStatus.isHealthy) {
  issues.push(...depsStatus.issues);
        isHealthy = false,
}
;
      return {
  isHealthy: issues.length === 0;
        issues: issues,
}
    } catch (error) {  issues.push(`Health check error: ${error.message  }`);
      return {
  isHealthy: false;
        issues: issues,
}}
  }
;
  async checkPM2Status() {
  try {
  const output = execSync(`pm2 jlist`, { encoding: `utf8` });

  async checkPM2Status() {
  try {
  const output = execSync("pm2 jlist", { encoding: "utf8" });
      const processes = JSON.parse(output);

      const issues = [];
      let isHealthy = true;

      // Check if all required processes are running;
      const requiredProcesses = ["pm2-sync-automation", "pm2-sync-monitor", "zion-app", "];

      requiredProcesses.forEach(processName => {
  requiredProcesses.forEach(processName => {
  const process = processes.find(p => p.name === processName);
        if (!process || process.pm2_env.status !== `online`) {issues.push(`Process ${processName} is not running`);          isHealthy = false,
}
      });

      return { isHealthy, issues }
    } catch (error) {
  return {
  isHealthy: false,issues: [`PM2 status check failed: ${error.message  }`],
}}
  }
;
  async checkFileSystem() {
  try {
  const issues = [];
      let isHealthy = true;
      // Check critical directories;
      const criticalDirs = [`src`, `pages`, "components", `utils`, `public`];
      criticalDirs.forEach(dir => {
  // Check critical directories;
      const criticalDirs = ["src", "pages", "components", "utils", "public"];
      criticalDirs.forEach(dir => {
  if (!fs.existsSync(dir)) {issues.push(`Critical directory missing: ${dir}`);
          isHealthy = false,
}
      });
      // Check log files;
      const logDir = `logs`;
      if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir, { recursive: true }),
}
;
      // Check disk space;
      criticalDirs.forEach(dir => {
  if (!fs.existsSync(dir)) {
  issues.push(`Critical directory missing: ${dir}`);
          isHealthy = false,
}
      });
      // Check disk space;
      // Check disk space;
      const diskUsage = await this.getDiskUsage();
      if (diskUsage.usagePercent > 90) {
  issues.push(`Disk usage high: ${diskUsage.usagePercent}%`);
        isHealthy = false,
}
;
      return { isHealthy, issues }
    } catch (error) {
  return {
  isHealthy: false,issues: [`File system check failed: ${error.message  }`],
}}
  }
;
  async checkGitRepository() {
  try {
  const issues = [];
      let isHealthy = true;
      // Check if git repository exists;
      if (!fs.existsSync(`.git`)) {
  issues.push(`Git repository not found`);

      // Check if git repository exists;
      if (!fs.existsSync(".git")) {
  issues.push("Git repository not found");
        isHealthy = false;
        return { isHealthy, issues }
      }
;
      // Check git status;
      const status = execSync("git status --porcelain", {
  cwd: this.config.projectRoot;
        encoding: "utf8",
});

      if (status.trim()) {
  issues.push("Uncommitted changes detected");
        isHealthy = false,
}
;
      // Check remote connection;
      try {
  execSync("git remote -v", {
  cwd: this.config.projectRoot;
          stdio: `pipe`}),
} catch (error) {
  issues.push(`Git remote connection failed`);
        isHealthy = false,
}
;
      return { isHealthy, issues }
    } catch (error) {
  return {
  isHealthy: false,issues: [`Git repository check failed: ${error.message  }`],
}}
  }
;
  async checkBuildStatus() {
  try {
  const issues = [];
      let isHealthy = true;
      // Check if build artifacts exist;
      const buildDirs = [`.next`, `dist`, "build"];

      // Check if build artifacts exist;
      const buildDirs = [".next", "dist", "build"];
      const hasBuildArtifacts = buildDirs.some(dir => fs.existsSync(dir));

      if (!hasBuildArtifacts) {
  issues.push("No build artifacts found");
        isHealthy = false,
}
;
      // Check package.json scripts;
      const packageJson = JSON.parse(fs.readFileSync("package.json", "utf8"));
      if (!packageJson.scripts.build) {
  issues.push("Build script not found in package.json");
        isHealthy = false,
}
;
      return { isHealthy, issues }
    } catch (error) {
  return {
  isHealthy: false,issues: [`Build status check failed: ${error.message}`];
      const hasBuild = buildDirs.some(dir => fs.existsSync(dir));
      if (!hasBuild) {
  issues.push("No build artifacts found");
        isHealthy = false,
}
;
      // Check package.json scripts;
      const packageJson = JSON.parse(fs.readFileSync("package.json", `utf8`));
      if (!packageJson.scripts.build) {
  issues.push(`Build script not found in package.json`);
        isHealthy = false,
}
;
      return { isHealthy, issues }
    } catch (error) {
  return {
  isHealthy: false,issues: [`Build status check failed: ${error.message  }`],
}}
  }
;
  async checkDependencies() {
  try {
  const issues = [];
      let isHealthy = true;
      // Check if node_modules exists;
      if (!fs.existsSync(`node_modules`)) {
  issues.push(`Dependencies not installed`);

      // Check if node_modules exists;
      if (!fs.existsSync("node_modules")) {
  issues.push("Dependencies not installed");
        isHealthy = false,
} else {
  // Check for outdated dependencies;
        try {
  const outdated = execSync("npm outdated --json", {
  cwd: this.config.projectRoot;
            encoding: "utf8"});
          const outdatedDeps = JSON.parse(outdated);
          if (Object.keys(outdatedDeps).length > 0) {
  issues.push(`${Object.keys(outdatedDeps).length} dependencies are outdated`);
            isHealthy = false,
}
        } catch (error) {
  // npm outdated returns non-zero exit code when there are outdated packages;
          if (error.status !== 0) {
  issues.push("Some dependencies are outdated");
            isHealthy = false,
}
        }
      }
;
      // Check package-lock.json;
      if (!fs.existsSync("package-lock.json")) {
  issues.push("Package lock file missing");
        isHealthy = false,
}
;
      // Check for security vulnerabilities;
      try {
  execSync("npm audit --audit-level=moderate", {
  cwd: this.config.projectRoot;
          stdio: `pipe`}),
} catch (error) {
  issues.push(`Security vulnerabilities detected`);
        isHealthy = false,
}
;
      return { isHealthy, issues }
    } catch (error) {
  return {
  isHealthy: false,issues: [`Dependencies check failed: ${error.message  }`],
}}
  }
;
  async attemptIssueResolution(issues) {
  this.log(`Attempting to resolve issues...`);
  async fixIssues(issues) {
  this.log(`Attempting to fix ${issues.length} issues...`);
    for (const issue of issues) {
  try {
  if (issue.includes(`Process`) && issue.includes("not running")) {
  await this.restartProcess(issue),
} else if (issue.includes("Dependencies not installed")) {
  await this.installDependencies(),
} else if (issue.includes("Security vulnerabilities")) {
  await this.fixSecurityVulnerabilities(),
} else if (issue.includes("Uncommitted changes`)) {
  await this.commitChanges(),
} else if (issue.includes(`No build artifacts`)) {
  await this.triggerBuild(),
}
      } catch (error) {
  this.log(Failed to resolve issue `${issue  }": ${error.message}`,ERROR`;
        ),
}
    }
  }
;
  async restartProcess(issue) {
  const processName = issue.match(/Process (.+) is not running/)?.[1];
    if (processName) {
  this.log(`Restarting process: ${processName}`);
      execSync(`pm2 restart ${processName}`, { stdio: "pipe" });
      this.metrics.restarts++,
}
  }
;
  async installDependencies() {
  this.log("Installing dependencies...");
    execSync("npm install", { cwd: this.config.projectRoot, stdio: "pipe" }),
}
;
  async fixSecurityVulnerabilities() {
  this.log("Fixing security vulnerabilities...");
    execSync("npm audit fix", { cwd: this.config.projectRoot, stdio: "pipe" }),
}
;
  async commitChanges() {
  this.log("Committing uncommitted changes...");
    execSync("git add .", { cwd: this.config.projectRoot, stdio: "pipe" });
    execSync("git commit -m Auto-commit: Uncommitted changes, {
  cwd: this.config.projectRoot;
      stdio: "pipe",
});
  async commitChanges() {
  this.log("Committing uncommitted changes with remote-first strategy...");
    // First, try to sync with remote using remote-first strategy;
    try {
  execSync("git fetch origin", { cwd: this.config.projectRoot, stdio: "pipe" });
      execSync("git merge -X theirs --no-edit origin/main", {
  cwd: this.config.projectRoot;
        stdio: "pipe"});
      this.log("Successfully synced with remote using remote-first strategy"),
} catch (error) {
  this.log("Failed to sync with remote, resolving conflicts...", "WARN");
      // Resolve conflicts by accepting remote changes;
      try {
  execSync("git checkout --theirs .", { cwd: this.config.projectRoot, stdio: "pipe" });
        execSync("git add .", { cwd: this.config.projectRoot, stdio: "pipe" });
        execSync("git commit -m "Auto-commit: Resolved conflicts with remote-first strategy", {
  cwd: this.config.projectRoot;
          stdio: "pipe"}),
} catch (commitError) {
  this.log("Failed to commit after conflict resolution", "ERROR"),
}
    }
  }
;
  async restartProcess(issue) {
  const processName = issue.match(/Process (.+) is not running/)?.[1];
    if (processName) {this.log(`Restarting process: ${processName}`);execSync(`pm2 restart ${processName}`, { stdio: `pipe` });
      this.metrics.restarts++;
  async syncWithRemote() {
  this.log("Syncing with remote repository using remote-first strategy...");
    try {
  execSync("git fetch origin", { cwd: this.config.projectRoot, stdio: "pipe" });
      execSync("git merge -X theirs --no-edit origin/main", {
  cwd: this.config.projectRoot;
        stdio: "pipe"});
      this.log("Successfully synced with remote using remote-first strategy"),
} catch (error) {
  this.log("Failed to sync with remote, resolving conflicts...", "WARN");
      // Resolve conflicts by accepting remote changes;
      try {
  execSync("git checkout --theirs .", { cwd: this.config.projectRoot, stdio: "pipe" });
        execSync("git add .", { cwd: this.config.projectRoot, stdio: "pipe" });
        execSync("git commit -m "Auto-commit: Resolved conflicts with remote-first strategy", {
  cwd: this.config.projectRoot;
          stdio: "pipe"}),
} catch (commitError) {
  this.log("Failed to commit after conflict resolution", "ERROR"),
}
    }
    }
}
;
  async installDependencies() {
  this.log(`Installing dependencies...`);
    execSync("npm install", { cwd: this.config.projectRoot, stdio: "pipe" }),
}
;
  async updateDependencies() {
  this.log("Updating dependencies...");
    execSync("npm update", { cwd: this.config.projectRoot, stdio: "pipe" }),
}
;
  async triggerBuild() {
  this.log("Triggering build...");
    execSync(`npm run build`, { cwd: this.config.projectRoot, stdio: `pipe` }),
}
;
  async collectMetrics() {
  try {
  // Collect system metrics;
      this.metrics.performance = await this.getSystemPerformance();

      // Calculate success rate;
      if (this.metrics.healthChecks > 0) {
  this.metrics.successRate =;
          (this.metrics.successfulChecks / this.metrics.healthChecks) * 100,
}
;
      // Calculate uptime;
      this.metrics.uptime = Date.now() - this.metrics.startTime;

  async collectMetrics() {
  try {
  // Collect system metrics;
      this.metrics.performance = await this.getSystemPerformance();
      // Calculate success rate;
      if (this.metrics.healthChecks > 0) {
  this.metrics.successRate =;
          (this.metrics.successfulChecks / this.metrics.healthChecks) * 100,
}
;
      // Calculate uptime;
      // Update uptime;
      this.metrics.uptime = Date.now() - this.metrics.startTime;
      // Collect performance metrics;
      await this.collectPerformanceMetrics();
      // Save metrics;
      await this.saveMetrics(),
} catch (error) {  this.log(`Failed to collect metrics: ${error.message  }`, `ERROR`),
}
  }
;
  async getSystemPerformance() {
  try {
  // Get CPU usage (simplified);
      const cpuUsage = process.cpuUsage();
      const cpuPercent = (cpuUsage.user + cpuUsage.system) / 1000000;

      // Get memory usage;
      const memoryUsage = process.memoryUsage();
      const memoryPercent =;
        (memoryUsage.heapUsed / memoryUsage.heapTotal) * 100;
      // Get disk usage;
      const diskUsage = await this.getDiskUsage();

      return {
  cpu: Math.round(cpuPercent * 100) / 100;
        memory: Math.round(memoryPercent * 100) / 100;
        disk: diskUsage.usagePercent,
}
    } catch (error) {
  return { cpu: 0, memory: 0, disk: 0 }
  async collectPerformanceMetrics() {
  try {
  // Get system performance data;
      const output = execSync("pm2 monit --no-daemon", {
  encoding: "utf8";
        timeout: 5000 ,
});
      // Parse performance data (simplified);
      this.metrics.performance = {
  cpu: Math.random() * 100, // Placeholder;
        memory: Math.random() * 100, // Placeholder;
        disk: await this.getDiskUsage(),
}} catch (error) {
  return { cpu: 0, memory: 0, disk: 0   }
    }
  }
;
  async getDiskUsage() {
  try {
  const output = execSync(`df .`, { encoding: "utf8" }),
} catch (error) {
  // Ignore timeout errors from pm2 monit;
      if (!error.message.includes("timeout")) {
  this.log(`Performance monitoring failed: ${error.message}`, "ERROR"),
}
    }
  }
;
  async getDiskUsage() {
  try {
  const output = execSync("df .", { encoding: "utf8" });
      const lines = output.trim().split("\n");
      const [", "usageLine"] = lines;
      const [", "used", "available"] = usageLine.split(/\s+/);

      const total = parseInt(used) + parseInt(available);
      const usagePercent = Math.round((parseInt(used) / total) * 100);

      return { usagePercent }
    } catch (error) {
  return { usagePercent: 0   }
    }
  }
;
  async monitorPerformance() {
  try {
  // Check if any process is using too much memory;
      const output = execSync("pm2 monit --no-daemon", {
  encoding: "utf8";
        timeout: 5000});
      // Parse memory usage and restart if necessary;
      if (output.includes("Memory usage high")) {} catch (error) {
  return { usagePercent: 0 }
    }
  }
;
  async monitorPerformance() {
  try {
  // Check if any process is using too much memory;
      const output = execSync("pm2 monit --no-daemon", {
  encoding: "utf8";
        timeout: 5000,
});

      // Parse memory usage and restart if necessary;
      if (output.includes("Memory usage high")) {
  this.log("High memory usage detected, restarting processes...", "WARN");
      if (output.includes("Memory usage high")) {
  this.log("High memory usage detected, restarting processes...", "WARN");
        execSync("pm2 restart all", { stdio: `pipe` }),
}
    } catch (error) {
  // Ignore timeout errors from pm2 monit;
      if (!error.message.includes(`timeout`)) {this.log(`Performance monitoring failed: ${error.message  }`, `ERROR`),
}
    }
  }
;
  async cleanupOldData() {
  try {
  // Clean up old log files;
      const logDir = `logs`;
      if (fs.existsSync(logDir)) {
  const files = fs.readdirSync(logDir);
        const now = Date.now();
        const maxAge = 7 * 24 * 60 * 60 * 1000; // 7 days;
        files.forEach(file => {
  const filePath = path.join(logDir, `file),
} catch (error) {
  // Ignore timeout errors from pm2 monit;
      if (!error.message.includes("timeout")) {this.log(`Performance monitoring failed: ${error.message}`, "ERROR"),
}
    }
  }
;
  async cleanupOldData() {
  try {
  // Clean up old log files;
      const logDir = "logs";
      if (fs.existsSync(logDir)) {
  const files = fs.readdirSync(logDir);
        const now = Date.now();
        const maxAge = 7 * 24 * 60 * 60 * 1000; // 7 days;
        files.forEach(file => {
  const filePath = path.join(logDir, "file);
          const stats = fs.statSync(filePath);

          if (now - stats.mtime.getTime() > maxAge) {
  fs.unlinkSync(filePath);this.log(`Cleaned up old log file: ${file}`);
      const [, usageLine] = lines;
      const [, used, available] = usageLine.split(/\s+/);
      const total = parseInt(used) + parseInt(available);
      const usagePercent = Math.round((parseInt(used) / total) * 100);
      return {
  used: parseInt(used);
        available: parseInt(available);
        total: total;
        usagePercent: usagePercent}
    } catch (error) {
  return {
  used: 0;
        available: 0;
        total: 0;
        usagePercent: 0}
    }
  }
;
  async cleanup() {
  try {
  // Clean up old log files;
      const logDir = path.dirname(this.config.logFile);
      if (fs.existsSync(logDir)) {
  const files = fs.readdirSync(logDir);
        const maxAge = 7 * 24 * 60 * 60 * 1000; // 7 days;
        const now = Date.now();
        files.forEach(file => {
  const filePath = path.join(logDir, file);
          const stats = fs.statSync(filePath);
          if (now - stats.mtime.getTime() > maxAge) {
  fs.unlinkSync(filePath);
            this.log(`Cleaned up old log file: ${file}`),
}
        }),
}
;
      // Clean up old metrics;
      if (this.metrics.errors.length > this.config.maxErrors) {
  this.metrics.errors = this.metrics.errors.slice(-this.config.maxErrors),
}
    } catch (error) {  this.log(`Cleanup failed: ${error.message  }``, `ERROR`),
}
  }
;
  startHealthCheckServer() {
  const server = http.createServer((req, res) => {
  if (req.url === "/health") {
  res.writeHead(200, { "Content-Type": ""application/json"" });
        res.end(;
          JSON.stringify({
  status: this.metrics.systemStatus;
            timestamp: new Date().toISOString();
            uptime: this.metrics.uptime;
            healthChecks: this.metrics.healthChecks;
            successRate: this.metrics.successRate || 0;
            errors: this.metrics.errors.length;
            restarts: this.metrics.restarts,
});
        ),
} else if (req.url === "/metrics") {
  res.writeHead(200, { "Content-Type": ""application/json"" });
        res.end(JSON.stringify(this.metrics)),
} else {
  res.writeHead(404);
        res.end("Not Found"),
}
    });

    server.listen(this.config.healthCheckPort, () => {
  this.log(Health check server listening on port ${this.config.healthCheckPort}";
      ),
}),
}
;
  recordError(error) {
  this.metrics.errors.push({
  message: error.message;
      stack: error.stack;
      timestamp: Date.now(),
});

    if (this.metrics.errors.length > this.config.maxErrors) {
  this.metrics.errors = this.metrics.errors.slice(-this.config.maxErrors),
}
  }
;
  async saveMetrics() {
  try {
  const metricsDir = path.dirname(this.config.metricsFile);
      if (!fs.existsSync(metricsDir)) {
  fs.mkdirSync(metricsDir, { recursive: true }),
}
;
      fs.writeFileSync(;
        this.config.metricsFile;
        JSON.stringify(this.metrics, null, 2);
  startHealthCheckServer() {
  const server = http.createServer((req, res) => {
  if (req.url === "/health") {
  res.writeHead(200, { "Content-Type": "application/json" });
        res.end(;
          JSON.stringify({
  status: this.metrics.systemStatus;
            uptime: this.metrics.uptime;
            lastCheck: this.metrics.lastHealthCheck;
            totalChecks: this.metrics.totalChecks;
            failedChecks: this.metrics.failedChecks});
        ),
} else if (req.url === "/metrics") {
  res.writeHead(200, { "Content-Type": """application/json"`` });
        res.end(JSON.stringify(this.metrics)),
} else {
  res.writeHead(404);
        res.end(`Not Found`);
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(this.metrics)),
} else {
  res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("Not Found"),
}
    });
    server.listen(this.config.healthCheckPort, () => {
  this.log(Health check server listening on port ${this.config.healthCheckPort}`;
      ),
}),
}
;
  recordError(error) {
  this.metrics.errors.push({
  timestamp: Date.now();
      message: error.message;
      stack: error.stack});
    // Keep only recent errors;
    if (this.metrics.errors.length > this.config.maxErrors) {
  this.metrics.errors = this.metrics.errors.slice(-this.config.maxErrors),
}
  }
;
  async loadMetrics() {
  try {
  if (fs.existsSync(this.config.metricsFile)) {
  const data = fs.readFileSync(this.config.metricsFile, "utf8");
        const savedMetrics = JSON.parse(data);
        // Merge with current metrics, preserving start time;
        this.metrics = {
  ...this.metrics;
          ...savedMetrics;
          startTime: this.metrics.startTime}
      }
;
      fs.writeFileSync(;
        this.config.metricsFile;
        JSON.stringify(this.metrics, null, 2);
      ),
} catch (error) {  this.log(`Failed to save metrics: ${error.message  }`, `ERROR`),
} catch (error) {
  this.log(`Failed to load metrics: ${error.message}`, "WARN"),
}
  }
;
  async saveMetrics() {
  try {
  fs.writeFileSync(;
        this.config.metricsFile;
        JSON.stringify(this.metrics, null, 2);
      ),
} catch (error) {
  this.log(`Failed to save metrics: ${error.message}`, "ERROR"),
}
  }
;
  restartAfterDelay(delay = 5000) {this.log(`Restarting monitor in ${delay}ms...`);
    setTimeout(() => {
  this.initialize(),
}, delay),
}
;
  getStatus() {
  return {
  isRunning: true;
      systemStatus: this.metrics.systemStatus;
      healthChecks: this.metrics.healthChecks;
      successRate: this.metrics.successRate || 0;
      errors: this.metrics.errors.length;
      restarts: this.metrics.restarts;
      uptime: this.metrics.uptime;
      performance: this.metrics.performance,
}}
}
;
// Handle process signals;
process.on(`SIGINT`, async () => {
  console.log(`\nReceived SIGINT, shutting down gracefully...");

// Handle process signals;
process.on("SIGINT", async () => {
  console.log("\nReceived SIGINT, shutting down gracefully...");
  if (global.pm2SyncMonitor) {
  await global.pm2SyncMonitor.stop(),
}
  process.exit(0),
});

process.on("SIGTERM", async () => {
  console.log("\nReceived SIGTERM, shutting down gracefully...");
  if (global.pm2SyncMonitor) {
  await global.pm2SyncMonitor.stop(),
}
  process.exit(0),
});
// Start the monitor system;
if (require.main === module) {
  global.pm2SyncMonitor = new PM2SyncMonitor();
  // Keep the process alive;
  setInterval(() => {
  if (global.pm2SyncMonitor && global.pm2SyncMonitor.isRunning) {
  // Process is healthy,
}
  }, 60000),
}
;
module.exports = PM2SyncMonitor;
module.exports = PM2SyncMonitor
=======
#!/usr/bin/env node

/**
 * PM2 Sync Monitor System
 * 
 * This system provides:
 * - Health monitoring for PM2 processes
 * - System resource monitoring
 * - Automated issue resolution
 * - Performance metrics collection
 * - Health check endpoints
 */

const http = require('http');
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Configuration
const CONFIG = {
  PORT: process.env.MONITOR_PORT || 3001,
  MONITOR_INTERVAL: parseInt(process.env.MONITOR_INTERVAL) || 60000, // 1 minute
  HEALTH_CHECK_INTERVAL: 30000, // 30 seconds
  METRICS_RETENTION: 24 * 60 * 60 * 1000, // 24 hours
  PERFORMANCE_THRESHOLDS: {
    CPU_HIGH: 80, // 80%
    MEMORY_HIGH: 85, // 85%
    DISK_HIGH: 90, // 90%
    PROCESS_ERRORS: 5 // Max consecutive errors
  }
};

// Global state
let healthChecks = 0;
let successfulChecks = 0;
let failedChecks = 0;
let errors = [];
let restarts = 0;
let startTime = Date.now();
let lastHealthCheck = Date.now();
let performanceMetrics = [];
let systemStatus = 'unknown';

// Utility functions
const log = (level, message, data = {}) => {
  const timestamp = new Date().toISOString();
  const logEntry = {
    timestamp,
    level,
    message,
    data,
    process: 'pm2-sync-monitor'
  };
  
  console.log(JSON.stringify(logEntry));
  
  if (level === 'ERROR') {
    console.error(JSON.stringify(logEntry));
  }
};

const executeCommand = (command, options = {}) => {
  try {
    const result = execSync(command, {
      stdio: 'pipe',
      encoding: 'utf8',
      cwd: process.cwd(),
      ...options
    });
    return { success: true, output: result };
  } catch (error) {
    return { 
      success: false, 
      error: error.message, 
      code: error.status,
      command 
    };
  }
};

const getPM2Status = () => {
  try {
    const result = executeCommand('pm2 jlist');
    if (result.success) {
      const processes = JSON.parse(result.output);
      return processes.map(proc => ({
        id: proc.pm_id,
        name: proc.name,
        status: proc.pm2_env.status,
        restarts: proc.pm2_env.restart_time,
        memory: proc.monit.memory,
        cpu: proc.monit.cpu,
        uptime: proc.pm2_env.pm_uptime
      }));
    }
    return [];
  } catch (error) {
    log('ERROR', 'Failed to get PM2 status', { error: error.message });
    return [];
  }
};

const getSystemMetrics = () => {
  try {
    // Disk usage
    const diskResult = executeCommand('df .');
    let diskUsage = 0;
    if (diskResult.success) {
      const lines = diskResult.output.split('\n');
      if (lines.length > 1) {
        const parts = lines[1].split(/\s+/);
        if (parts.length > 4) {
          diskUsage = parseInt(parts[4].replace('%', ''));
        }
      }
    }
    
    // Memory usage (simplified)
    const memResult = executeCommand('ps -o %mem -p $$ | tail -1');
    let memoryUsage = 0;
    if (memResult.success) {
      memoryUsage = parseFloat(memResult.output.trim()) || 0;
    }
    
    return {
      disk: diskUsage,
      memory: memoryUsage,
      timestamp: Date.now()
    };
  } catch (error) {
    log('ERROR', 'Failed to get system metrics', { error: error.message });
    return { disk: 0, memory: 0, timestamp: Date.now() };
  }
};

const checkSystemHealth = () => {
  try {
    const pm2Processes = getPM2Status();
    const systemMetrics = getSystemMetrics();
    
    // Check PM2 processes
    const erroredProcesses = pm2Processes.filter(p => p.status === 'errored');
    const stoppedProcesses = pm2Processes.filter(p => p.status === 'stopped');
    
    // Check system resources
    const diskHigh = systemMetrics.disk > CONFIG.PERFORMANCE_THRESHOLDS.DISK_HIGH;
    const memoryHigh = systemMetrics.memory > CONFIG.PERFORMANCE_THRESHOLDS.MEMORY_HIGH;
    
    // Determine overall health
    let healthStatus = 'healthy';
    let issues = [];
    
    if (erroredProcesses.length > 0) {
      healthStatus = 'unhealthy';
      issues.push(`PM2 processes errored: ${erroredProcesses.map(p => p.name).join(', ')}`);
    }
    
    if (stoppedProcesses.length > 0) {
      healthStatus = 'degraded';
      issues.push(`PM2 processes stopped: ${stoppedProcesses.map(p => p.name).join(', ')}`);
    }
    
    if (diskHigh) {
      healthStatus = 'degraded';
      issues.push(`Disk usage high: ${systemMetrics.disk}%`);
    }
    
    if (memoryHigh) {
      healthStatus = 'degraded';
      issues.push(`Memory usage high: ${systemMetrics.memory}%`);
    }
    
    // Update global status
    systemStatus = healthStatus;
    
    // Store metrics
    performanceMetrics.push({
      timestamp: Date.now(),
      pm2Processes: pm2Processes.length,
      erroredProcesses: erroredProcesses.length,
      stoppedProcesses: stoppedProcesses.length,
      diskUsage: systemMetrics.disk,
      memoryUsage: systemMetrics.memory,
      healthStatus
    });
    
    // Clean old metrics
    const cutoff = Date.now() - CONFIG.METRICS_RETENTION;
    performanceMetrics = performanceMetrics.filter(m => m.timestamp > cutoff);
    
    return {
      status: healthStatus,
      timestamp: new Date().toISOString(),
      healthChecks,
      successfulChecks,
      failedChecks,
      errors: errors.slice(-10), // Last 10 errors
      restarts,
      issues,
      metrics: {
        pm2Processes: pm2Processes.length,
        erroredProcesses: erroredProcesses.length,
        stoppedProcesses: stoppedProcesses.length,
        diskUsage: systemMetrics.disk,
        memoryUsage: systemMetrics.memory
      }
    };
    
  } catch (error) {
    log('ERROR', 'Health check failed', { error: error.message });
    failedChecks++;
    errors.push({
      timestamp: new Date().toISOString(),
      error: error.message
    });
    
    return {
      status: 'unhealthy',
      timestamp: new Date().toISOString(),
      healthChecks,
      successfulChecks,
      failedChecks,
      errors: errors.slice(-10),
      restarts,
      issues: [`Health check error: ${error.message}`]
    };
  }
};

const attemptIssueResolution = async () => {
  try {
    const pm2Processes = getPM2Status();
    const erroredProcesses = pm2Processes.filter(p => p.status === 'errored');
    
    if (erroredProcesses.length > 0) {
      log('INFO', 'Attempting to resolve PM2 process errors...');
      
      for (const proc of erroredProcesses) {
        try {
          // Restart errored process
          const restartResult = executeCommand(`pm2 restart ${proc.id}`);
          if (restartResult.success) {
            log('INFO', `Restarted errored process: ${proc.name}`);
            restarts++;
          } else {
            log('ERROR', `Failed to restart process: ${proc.name}`, { error: restartResult.error });
          }
        } catch (error) {
          log('ERROR', `Error restarting process: ${proc.name}`, { error: error.message });
        }
      }
    }
    
    // Check for dependency issues
    const systemMetrics = getSystemMetrics();
    if (systemMetrics.disk > CONFIG.PERFORMANCE_THRESHOLDS.DISK_HIGH) {
      log('WARN', 'Disk usage high, attempting cleanup...');
      await cleanupSystem();
    }
    
  } catch (error) {
    log('ERROR', 'Error during issue resolution', { error: error.message });
  }
};

const cleanupSystem = async () => {
  try {
    // Clear PM2 logs
    const clearLogsResult = executeCommand('pm2 flush');
    if (clearLogsResult.success) {
      log('INFO', 'PM2 logs cleared');
    }
    
    // Clear npm cache
    const clearCacheResult = executeCommand('npm cache clean --force');
    if (clearCacheResult.success) {
      log('INFO', 'NPM cache cleared');
    }
    
    // Remove old build artifacts
    const buildDirs = ['dist', 'build', '.next', 'out'];
    for (const dir of buildDirs) {
      if (fs.existsSync(dir)) {
        const removeResult = executeCommand(`rm -rf ${dir}`);
        if (removeResult.success) {
          log('INFO', `Removed build directory: ${dir}`);
        }
      }
    }
    
  } catch (error) {
    log('ERROR', 'Error during system cleanup', { error: error.message });
  }
};

const getMetrics = () => {
  const now = Date.now();
  const uptime = now - startTime;
  
  // Calculate success rate
  const successRate = healthChecks > 0 ? (successfulChecks / healthChecks) * 100 : 0;
  
  // Calculate average metrics
  const avgMetrics = performanceMetrics.length > 0 ? {
    diskUsage: performanceMetrics.reduce((sum, m) => sum + m.diskUsage, 0) / performanceMetrics.length,
    memoryUsage: performanceMetrics.reduce((sum, m) => sum + m.memoryUsage, 0) / performanceMetrics.length,
    erroredProcesses: performanceMetrics.reduce((sum, m) => sum + m.erroredProcesses, 0) / performanceMetrics.length
  } : { diskUsage: 0, memoryUsage: 0, erroredProcesses: 0 };
  
  return {
    startTime,
    healthChecks,
    successfulChecks,
    failedChecks,
    errors: errors.slice(-50), // Last 50 errors
    restarts,
    lastHealthCheck,
    systemStatus,
    performance: {
      cpu: 0, // Simplified for now
      memory: avgMetrics.memoryUsage,
      disk: avgMetrics.diskUsage
    },
    uptime,
    successRate: Math.round(successRate * 100) / 100
  };
};

// HTTP server for health checks and metrics
const createServer = () => {
  const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    
    if (req.method === 'OPTIONS') {
      res.writeHead(200);
      res.end();
      return;
    }
    
    try {
      if (req.url === '/health') {
        const health = checkSystemHealth();
        res.writeHead(200);
        res.end(JSON.stringify(health, null, 2));
        
        // Update counters
        healthChecks++;
        if (health.status === 'healthy') {
          successfulChecks++;
        } else {
          failedChecks++;
        }
        
      } else if (req.url === '/metrics') {
        const metrics = getMetrics();
        res.writeHead(200);
        res.end(JSON.stringify(metrics, null, 2));
        
      } else if (req.url === '/status') {
        const status = {
          status: systemStatus,
          timestamp: new Date().toISOString(),
          uptime: Date.now() - startTime,
          processes: getPM2Status()
        };
        res.writeHead(200);
        res.end(JSON.stringify(status, null, 2));
        
      } else if (req.url === '/restart' && req.method === 'POST') {
        let body = '';
        req.on('data', chunk => {
          body += chunk.toString();
        });
        
        req.on('end', () => {
          try {
            const { processName } = JSON.parse(body);
            if (processName) {
              const restartResult = executeCommand(`pm2 restart ${processName}`);
              if (restartResult.success) {
                res.writeHead(200);
                res.end(JSON.stringify({ success: true, message: `Process ${processName} restarted` }));
                restarts++;
              } else {
                res.writeHead(500);
                res.end(JSON.stringify({ success: false, error: restartResult.error }));
              }
            } else {
              res.writeHead(400);
              res.end(JSON.stringify({ success: false, error: 'Process name required' }));
            }
          } catch (error) {
            res.writeHead(400);
            res.end(JSON.stringify({ success: false, error: 'Invalid JSON' }));
          }
        });
        
      } else {
        res.writeHead(404);
        res.end(JSON.stringify({ error: 'Not Found' }));
      }
      
    } catch (error) {
      log('ERROR', 'HTTP server error', { error: error.message, url: req.url });
      res.writeHead(500);
      res.end(JSON.stringify({ error: 'Internal Server Error' }));
    }
  });
  
  return server;
};

// Monitoring loops
const startMonitoringLoops = () => {
  // Health check loop
  setInterval(() => {
    try {
      const health = checkSystemHealth();
      lastHealthCheck = Date.now();
      
      if (health.status !== 'healthy') {
        log('WARN', 'System health degraded', { status: health.status, issues: health.issues });
        
        // Attempt resolution
        attemptIssueResolution();
      }
      
    } catch (error) {
      log('ERROR', 'Error in health check loop', { error: error.message });
    }
  }, CONFIG.HEALTH_CHECK_INTERVAL);
  
  // Performance monitoring loop
  setInterval(() => {
    try {
      const metrics = getSystemMetrics();
      const pm2Processes = getPM2Status();
      
      // Check for performance issues
      if (metrics.disk > CONFIG.PERFORMANCE_THRESHOLDS.DISK_HIGH) {
        log('WARN', 'Disk usage high', { usage: metrics.disk });
      }
      
      if (metrics.memory > CONFIG.PERFORMANCE_THRESHOLDS.MEMORY_HIGH) {
        log('WARN', 'Memory usage high', { usage: metrics.memory });
      }
      
      // Check for process issues
      const erroredCount = pm2Processes.filter(p => p.status === 'errored').length;
      if (erroredCount > CONFIG.PERFORMANCE_THRESHOLDS.PROCESS_ERRORS) {
        log('ERROR', 'Too many errored processes', { count: erroredCount });
        attemptIssueResolution();
      }
      
    } catch (error) {
      log('ERROR', 'Error in performance monitoring loop', { error: error.message });
    }
  }, CONFIG.MONITOR_INTERVAL);
  
  // Data cleanup loop
  setInterval(() => {
    try {
      const cutoff = Date.now() - CONFIG.METRICS_RETENTION;
      performanceMetrics = performanceMetrics.filter(m => m.timestamp > cutoff);
      errors = errors.filter(e => new Date(e.timestamp).getTime() > cutoff);
      
      log('INFO', 'Cleaned up old data', { 
        metricsRetained: performanceMetrics.length,
        errorsRetained: errors.length 
      });
      
    } catch (error) {
      log('ERROR', 'Error in data cleanup loop', { error: error.message });
    }
  }, CONFIG.METRICS_RETENTION / 2); // Run cleanup twice per retention period
};

// Main execution
const main = async () => {
  try {
    log('INFO', 'Initializing PM2 Sync Monitor System...');
    
    // Create HTTP server
    const server = createServer();
    
    // Start server
    server.listen(CONFIG.PORT, () => {
      log('INFO', `Monitor server listening on port ${CONFIG.PORT}`);
    });
    
    // Start monitoring loops
    startMonitoringLoops();
    
    // Perform initial health check
    const initialHealth = checkSystemHealth();
    log('INFO', 'Initial health check completed', { status: initialHealth.status });
    
    log('INFO', 'PM2 Sync Monitor System initialized successfully');
    
    // Graceful shutdown
    process.on('SIGTERM', () => {
      log('INFO', 'Received SIGTERM, shutting down gracefully...');
      server.close(() => {
        log('INFO', 'Server closed');
        process.exit(0);
      });
    });
    
    process.on('SIGINT', () => {
      log('INFO', 'Received SIGINT, shutting down gracefully...');
      server.close(() => {
        log('INFO', 'Server closed');
        process.exit(0);
      });
    });
    
  } catch (error) {
    log('ERROR', 'Failed to initialize monitor system', { error: error.message });
    process.exit(1);
  }
};

// Start the system
if (require.main === module) {
  main().catch(error => {
    log('ERROR', 'Monitor system startup failed', { error: error.message });
    process.exit(1);
  });
}

module.exports = {
  main,
  checkSystemHealth,
  getMetrics,
  getPM2Status,
  attemptIssueResolution
};
>>>>>>> origin/enhance-app-with-new-services-and-advertising
