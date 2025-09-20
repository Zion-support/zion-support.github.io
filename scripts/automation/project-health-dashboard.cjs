#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

class ProjectHealthDashboard {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, "logs", "project-health-dashboard.log");
    this.ensureLogsDirectory();
  }

  ensureLogsDirectory() {
    const logsDir = path.dirname(this.logFile);
    if (!fs.existsSync(logsDir)) {
      fs.mkdirSync(logsDir, { recursive: true });
    }
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}`;
    console.log(logMessage);
    
    try {
      fs.appendFileSync(this.logFile, logMessage + '\n');
    } catch (error) {
      console.error('Failed to write to log file:', error.message);
    }
  }

  async checkProjectHealth() {
    this.log("🔍 Checking project health...");
    
    try {
      if (!fs.existsSync(path.join(this.projectRoot, 'package.json'))) {
        this.log("❌ package.json not found");
        return false;
      }
      
      if (!fs.existsSync(path.join(this.projectRoot, 'node_modules'))) {
        this.log("⚠️  node_modules not found, installing dependencies...");
        execSync('npm install', { 
          cwd: this.projectRoot, 
          stdio: 'inherit' 
        });
      }
      
      execSync('npm run build', { 
        cwd: this.projectRoot, 
        stdio: 'pipe' 
      });
      
      this.log("✅ Project health check passed");
      return true;
    } catch (error) {
      this.log(`❌ Project health check failed: ${error.message}`);
      return false;
    }
  }

  async run() {
    this.log("🚀 Starting Project Health Dashboard...");
    
    try {
      await this.checkProjectHealth();
      this.log("🎉 Project Health Dashboard completed!");
    } catch (error) {
      this.log(`❌ Project Health Dashboard failed: ${error.message}`);
    }
  }
}

if (require.main === module) {
  const dashboard = new ProjectHealthDashboard();
  dashboard.run().catch(console.error);
}

module.exports = ProjectHealthDashboard;