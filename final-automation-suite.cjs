#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class FinalAutomationSuite {
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
        timeout: 300000, // 5 minutes timeout
        stdio: "pipe"
      });
      this.log(`✅ Completed: ${description}`);
      return result;
    } catch (error) {
      this.log(`❌ Failed: ${description} - ${error.message}`);
      this.errors.push(`${description}: ${error.message}`);
      return null;
    }
  }

  async checkGitStatus() {
    this.log("📊 Checking git status...");
    try {
      const status = execSync("git status --porcelain", { 
        cwd: this.projectRoot, 
        encoding: "utf8" 
      });
      
      if (status.trim()) {
        this.log("⚠️  Uncommitted changes detected");
        return false;
      }
      
      this.log("✅ Working directory is clean");
      return true;
    } catch (error) {
      this.log(`❌ Git status check failed: ${error.message}`);
      return false;
    }
  }

  async buildProject() {
    this.log("🏗️ Building project...");
    try {
      await this.runCommand("npm run build", "Project build");
      this.log("✅ Build completed successfully");
      return true;
    } catch (error) {
      this.log(`❌ Build failed: ${error.message}`);
      return false;
    }
  }

  async runTests() {
    this.log("🧪 Running tests...");
    try {
      await this.runCommand("npm test", "Test suite");
      this.log("✅ Tests completed successfully");
      return true;
    } catch (error) {
      this.log(`⚠️  Tests failed: ${error.message}`);
      return false;
    }
  }

  async lintCode() {
    this.log("🔍 Running linter...");
    try {
      await this.runCommand("npm run lint", "Code linting");
      this.log("✅ Linting completed successfully");
      return true;
    } catch (error) {
      this.log(`⚠️  Linting issues found: ${error.message}`);
      return false;
    }
  }

  async deploy() {
    this.log("🌐 Deploying to production...");
    try {
      // Check if we're on main branch
      const currentBranch = execSync("git branch --show-current", { 
        cwd: this.projectRoot, 
        encoding: "utf8" 
      }).trim();
      
      if (currentBranch !== 'main') {
        this.log(`⚠️  Not on main branch (currently on: ${currentBranch})`);
        return false;
      }

      // Push to origin
      await this.runCommand("git push origin main", "Push to origin");
      this.log("✅ Deployment completed successfully!");
      return true;
    } catch (error) {
      this.log(`❌ Deployment failed: ${error.message}`);
      return false;
    }
  }

  async run() {
    this.log("🚀 Starting Final Automation Suite...");
    
    try {
      // Check git status
      const isClean = await this.checkGitStatus();
      if (!isClean) {
        this.log("❌ Cannot proceed with uncommitted changes");
        return false;
      }

      // Build project
      const buildSuccess = await this.buildProject();
      if (!buildSuccess) {
        this.log("❌ Build failed, stopping automation");
        return false;
      }

      // Run tests (optional)
      await this.runTests();

      // Run linter (optional)
      await this.lintCode();

      // Deploy
      const deploySuccess = await this.deploy();
      if (!deploySuccess) {
        this.log("❌ Deployment failed");
        return false;
      }

      this.log("🎉 Final Automation Suite completed successfully!");
      return true;
    } catch (error) {
      this.log(`❌ Automation suite failed: ${error.message}`);
      return false;
    }
  }
}

// Run the final automation suite
if (require.main === module) {
  const suite = new FinalAutomationSuite();
  suite.run().catch(console.error);
}

module.exports = FinalAutomationSuite;