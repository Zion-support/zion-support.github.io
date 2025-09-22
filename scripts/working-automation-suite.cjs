#!/usr/bin/env node
/**
 * Working Automation Suite
 * A comprehensive automation system that actually works
 */
const fs = require("fs");
const path = require("path");
const { execSync, spawn } = require("child_process");

class WorkingAutomationSuite {
  constructor() {
    this.projectRoot = process.cwd();
    this.reportsDir = path.join(this.projectRoot, "automation-reports");
    this.results = {
      success: [],
      errors: [],
      warnings: [],
      metrics: {}
    };
    this.startTime = Date.now();

    // Ensure reports directory exists
    if (!fs.existsSync(this.reportsDir)) {
      fs.mkdirSync(this.reportsDir, { recursive: true });
    }
  }

  log(message, type = "info") {
    const timestamp = new Date().toISOString();
    const prefix = type === "error" ? "❌" : type === "success" ? "✅" : "ℹ️";
    console.log(`[${timestamp}] ${prefix} ${message}`);
  }

  async runCommand(cmd, name, options = {}) {
    try {
      this.log(`Running ${name}...`);
      const result = execSync(cmd, { 
        stdio: "pipe",
        cwd: this.projectRoot,
        encoding: "utf8",
        timeout: 300000,
        ...options
      });
      this.log(`${name} completed successfully`, "success");
      this.results.success.push(`${name} completed`);
      return result;
    } catch (error) {
      this.results.warnings.push(`${name} had issues: ${error.message}`);
      this.log(`${name} had issues: ${error.message}`, "warning");
      return null;
    }
  }

  async installDependencies() {
    this.log("📦 Installing dependencies...");
    await this.runCommand("npm install", "Dependency Installation");
  }

#!/usr/bin/env node;

const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')
// console.log(' Zion Tech Group - Working Automation Suite')
