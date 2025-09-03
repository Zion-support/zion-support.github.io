#!/usr/bin/env node
const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");
class $1 {
  constructor() {
  this.projectRoot = process.cwd();
    this.changes = [];
    this.errors = [];
}
  log(message) {
  const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${message}`);
}
  async runCommand(command, description) {
  this.log(`🚀 Starting: ${description}`);
    try {
  const result = execSync(command, {
  cwd: this.projectRoot,
        encoding: "utf8",
        timeout: 300000,
        stdio: "pipe"
});
      this.log(`✅ Completed: ${description}`);
      return result
} catch (error) {
  this.log(`❌ Failed: ${description} - ${error.message}`);
      this.errors.push(`${description}: ${error.message}`);
      return null
}
  }
  async checkGitStatus() {
  this.log("📊 Checking git status...");
    try {
  // Build the project
      console.log("🏗️ Building project...");
      execSync("npm run build", { stdio: "inherit" });
      // Run tests
      console.log("🧪 Running tests...");
      execSync("npm run test", { stdio: "inherit" });
      // Deploy to production
      console.log("🌐 Deploying to production...");
      execSync("npm run deploy", { stdio: "inherit" });
      console.log("✅ Deployment completed successfully!");
} catch (error) {
  console.error("❌ Deployment failed: ", error.message);
      process.exit(1);
}
  }
}
const deployment = new AutoDeployment();
deployment.deploy();