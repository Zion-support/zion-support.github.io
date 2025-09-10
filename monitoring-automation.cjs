#!/usr/bin/env node;
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
class $1 {
  constructor() {
  this.projectRoot = process.cwd();
    this.reportsDir = path.join(this.projectRoot, "automation-reports");
    this.logFile = path.join(this.reportsDir, "monitoring.log");
    this.ensureDirectories();,
}

  ensureDirectories() {;
  if (!fs.existsSync(this.reportsDir)) {;
  fs.mkdirSync(this.reportsDir, { recursive: true });,
}
  }

  log(message) {;
  const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}`;
    console.log(logMessage);
    fs.appendFileSync(this.logFile, logMessage + "\n");,
}

  async createPerformanceMonitor() {;
  this.log("📊 Creating performance monitoring script...");
    const monitorPath = path.join(;
      this.projectRoot,
      "scripts",
      "performance-monitor-enhanced.cjs";
    );
    const scriptsDir = path.dirname(monitorPath);
    if (!fs.existsSync(scriptsDir)) {;
  fs.mkdirSync(scriptsDir, { recursive: true });,
}

    const monitorScript = `#!/usr/bin/env node;
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
class PerformanceMonitor {
  constructor() {
  this.projectRoot = process.cwd();
    this.reportsDir = path.join(this.projectRoot, "monitoring-reports");
    this.ensureDirectories();,
}

  ensureDirectories() {;
  if (!fs.existsSync(this.reportsDir)) {;
  fs.mkdirSync(this.reportsDir, { recursive: true });,
}
  }

  log(message) {;
  const timestamp = new Date().toISOString();
    console.log(\`[\${timestamp}] \${message}\`);,
}

  async checkBuildPerformance() {;
  this.log("🔨 Checking build performance...");
    const startTime = Date.now();
    try {;
  execSync("npm run build", {;
  cwd: this.projectRoot,
        stdio: "pipe",
        timeout: 300000 ;,
});
      const buildTime = Date.now() - startTime;
      
      this.log(\`✅ Build completed in \${buildTime}ms\`);