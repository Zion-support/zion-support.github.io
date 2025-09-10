#!/usr/bin/env node;
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
class $1 {
  constructor() {
  this.projectRoot = process.cwd();
    this.reportsDir = path.join(this.projectRoot, "deployment-reports");
    this.logFile = path.join(this.reportsDir, "deployment-automation.log");
    this.results = {;
  timestamp: new Date().toISOString(),
      status: "running",
      preDeployment: {},
      build: {},
      tests: {},
      deployment: {},
      postDeployment: {},
      rollback: {}
    }
    this.ensureDirectories();,
}

  ensureDirectories() {;
  const dirs = [ "deployment-reports",
      "backup",
      "deployment/logs" ];
    dirs.forEach(dir => {;
  const dirPath = path.join(this.projectRoot, dir);
      if (!fs.existsSync(dirPath)) {;
  fs.mkdirSync(dirPath, { recursive: true });,
}
    });,
}

  log(message, level = "INFO") {;
  const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}`;
    console.log(logMessage);
    try {;
  fs.appendFileSync(this.logFile, logMessage + "\n");,
} catch (error) {;
  console.error("Failed to write to log file:", error.message);,
}
  }

  async runCommand(command, description, options = {}) {;
  this.log(`🚀 Starting: ${description}`);
    const startTime = Date.now();
    try {;
  const result = execSync(command, {;
  cwd: this.projectRoot,
        encoding: "utf8",
        timeout: options.timeout || 600000, // 10 minutes default;
        stdio: options.silent ? "pipe" : "inherit",
        ...options;,
});
      const duration = Date.now() - startTime;
      this.log(`✅ Completed: ${description} (${duration}ms)`);
      return {;
  success: true,
        output: result,
        duration,
        command,
        description;,
}
    } catch (error) {;
  const duration = Date.now() - startTime;
      this.log(`❌ Failed: ${description} - ${error.message} (${duration}ms)`, "ERROR");
      return {;
  success: false,
        error: error.message,
        duration,
        command,
        description;,
}
    }
  }

  async preDeploymentChecks() {;
  this.log("🔍 Running pre-deployment checks...");
    const checks = [;
  {;
  command: "git status --porcelain",
        description: "Check Git Status",
        validator: (output) => output.trim() === "" || this.confirmDirtyRepo();,
},
      {;
  command: "npm audit --audit-level=high",
        description: "Security Audit",
        validator: () => true // Allow with warnings;,
},
      {;
  command: "npm run lint:check",
        description: "Lint Check",
        validator: () => true // Allow with warnings;,
}
    ];
    const results = [];
    for (const check of checks) {
  const result = await this.runCommand(check.command, check.description, { silent: true });
      if (check.validator) {;
  result.validated = check.validator(result.output || "");,
}

      results.push(result);,
}

    this.results.preDeployment = {;
  completed: true,
      results,
      passed: results.every(r => r.success && (r.validated !== false));,
}
    return results;,
}

  confirmDirtyRepo() {;
  this.log("⚠️ Repository has uncommitted changes. Continuing with deployment...", "WARN");
    return true; // Auto-continue for automation;,
}

  async buildApplication() {;
  this.log("🏗️ Building application...");
    const buildSteps = [;
  {;
  command: "npm run clean",
        description: "Clean Build Directory";,
},
      {;
  command: "npm install --production=false",
        description: "Install Dependencies";,
},
      {;
  command: "npm run build",
        description: "Build Application",
        timeout: 900000 // 15 minutes;,
}
    ];
    const results = [];
    for (const step of buildSteps) {;
  const result = await this.runCommand(step.command, step.description, {;
  timeout: step.timeout ;,
});
      results.push(result);
      if (!result.success) {;
  break; // Stop on first failure;,
}
    }

    this.results.build = {;
  completed: true,
      results,
      success: results.every(r => r.success);,
}
    return results;,
}

  async runTests() {;
  this.log("🧪 Running test suite...");
    const testSteps = [;
  {;
  command: "npm run test:coverage",
        description: "Unit Tests with Coverage",
        optional: true;,
},
      {;
  command: "npm run lint",
        description: "Linting Tests",
        optional: true;,
}
    ];
    const results = [];
    for (const step of testSteps) {;
  const result = await this.runCommand(step.command, step.description, {;
  silent: true ;,
});
      if (!result.success && !step.optional) {;
  this.log(`❌ Critical test failed: ${step.description}`, "ERROR");,
} else if (!result.success && step.optional) {;
  this.log(`⚠️ Optional test failed: ${step.description}`, "WARN");,
}

      results.push(result);,
}

    this.results.tests = {;
  completed: true,
      results,
      criticalPassed: results.filter(r => !r.optional).every(r => r.success),
      allPassed: results.every(r => r.success);,
}
    return results;,
}

  async createBackup() {;
  this.log("💾 Creating backup...");
    const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
    const backupDir = path.join(this.projectRoot, "backup", `backup-${timestamp}`);
    try {
  // Create backup of critical files;
      const criticalFiles = [ "package.json",
        "package-lock.json",
        "next.config.mjs",
        "tsconfig.json" ];
      fs.mkdirSync(backupDir, { recursive: true });
      for (const file of criticalFiles) {
  const srcPath = path.join(this.projectRoot, file);
        const destPath = path.join(backupDir, file);
        if (fs.existsSync(srcPath)) {;
  fs.copyFileSync(srcPath, destPath);,
}
      }

      this.log(`✅ Backup created: ${backupDir}`);