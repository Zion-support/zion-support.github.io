#!/usr/bin/env node

/**
 * PM2 Sync Monitor System
 * Health check and status monitoring for the PM2 sync automation system
 */

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

class PM2SyncMonitor {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, "logs", "pm2-sync-monitor.log");
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

  async checkPM2Status() {
    this.log("🔍 Checking PM2 status...");
    
    try {
      const status = execSync("pm2 status", { 
        cwd: this.projectRoot, 
        encoding: "utf8" 
      });
      
      this.log("📊 PM2 Status checked successfully");
      return { success: true, status };
    } catch (error) {
      this.log(`❌ Failed to check PM2 status: ${error.message}`);
      return { success: false, error: error.message };
    }
  }

  async run() {
    this.log("🚀 Starting PM2 Sync Monitor...");
    
    try {
      await this.checkPM2Status();
      this.log("🎉 PM2 Sync Monitor completed!");
    } catch (error) {
      this.log(`❌ PM2 Sync Monitor failed: ${error.message}`);
    }
  }
}

// Run the monitor
if (require.main === module) {
  const monitor = new PM2SyncMonitor();
  monitor.run().catch(console.error);
}

module.exports = PM2SyncMonitor;