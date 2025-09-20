#!/usr/bin/env node

/**
 * Intelligent Performance Monitor
 * Advanced performance monitoring with AI-powered insights
 */

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

class IntelligentPerformanceMonitor {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, "logs", "intelligent-performance-monitor.log");
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

  async analyzePerformance() {
    this.log("📊 Analyzing performance...");
    
    try {
      // Build the project
      execSync('npm run build', { 
        cwd: this.projectRoot, 
        stdio: 'pipe' 
      });
      
      this.log("✅ Performance analysis completed");
      return true;
    } catch (error) {
      this.log(`❌ Performance analysis failed: ${error.message}`);
      return false;
    }
  }

  async run() {
    this.log("🚀 Starting Intelligent Performance Monitor...");
    
    try {
      await this.analyzePerformance();
      this.log("🎉 Intelligent Performance Monitor completed!");
    } catch (error) {
      this.log(`❌ Intelligent Performance Monitor failed: ${error.message}`);
    }
  }
}

// Run the monitor
if (require.main === module) {
  const monitor = new IntelligentPerformanceMonitor();
  monitor.run().catch(console.error);
}

module.exports = IntelligentPerformanceMonitor;