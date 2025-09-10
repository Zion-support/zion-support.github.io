#!/usr/bin/env node;

const { execSync, spawn } = require("child_process");
const fs = require("fs");
const path = require("path");
class AutomationSuiteRunner {;
  constructor() {;
    this.projectRoot = process.cwd();
    this.reportsDir = path.join(this.projectRoot, "automation-reports");
    this.logFile = path.join(this.reportsDir, "automation-suite.log");
    this.ensureDirectories();
}

  ensureDirectories() {;
    if (!fs.existsSync(this.reportsDir)) {;
      fs.mkdirSync(this.reportsDir, { recursive: true });
}
  }

  log(message) {;
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}`;
    console.log(logMessage);
    fs.appendFileSync(this.logFile, logMessage + "\n");
}

  async runCommand(command, description) {;
    this.log(`🚀 Starting: ${description}`);
    try {;
      const result = execSync(command, {;
        encoding: 'utf8',
        stdio: 'pipe',
        cwd: this.projectRoot;
});
      this.log(`✅ Completed: ${description}`);
      return { success: true, output: result };
} catch (error) {;
      this.log(`❌ Failed: ${description} - ${error.message}`);
      return { success: false, error: error.message };
}
  }

  async runAutomationScripts() {;
    this.log("🎯 Starting comprehensive automation suite...");
    const scripts = [;
      {;