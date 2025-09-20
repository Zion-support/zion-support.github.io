#!/usr/bin/env node

/**
 * Dependency Manager - PM2 Automation
 * Automatically manages and fixes dependency issues
 */

const fs = require("fs");
const path = require("path");
const { execSync, spawn } = require("child_process");

class DependencyManager {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, "logs", "dependency-manager.log");
    this.reportsDir = path.join(this.projectRoot, "logs", "dependency-reports");
    this.ensureLogsDirectory();
  }

  ensureLogsDirectory() {
    const logsDir = path.dirname(this.logFile);
    if (!fs.existsSync(logsDir)) {
      fs.mkdirSync(logsDir, { recursive: true });
    }
    if (!fs.existsSync(this.reportsDir)) {
      fs.mkdirSync(this.reportsDir, { recursive: true });
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

  async checkDependencies() {
    this.log("🔍 Checking dependencies...");
    
    try {
      // Check for outdated packages
      const outdated = execSync("npm outdated --json", { 
        cwd: this.projectRoot, 
        encoding: "utf8" 
      });
      
      const outdatedPackages = JSON.parse(outdated);
      const packageCount = Object.keys(outdatedPackages).length;
      
      if (packageCount > 0) {
        this.log(`⚠️  Found ${packageCount} outdated packages`);
        return { outdated: true, packages: outdatedPackages };
      } else {
        this.log("✅ All dependencies are up to date");
        return { outdated: false, packages: {} };
      }
    } catch (error) {
      this.log(`❌ Failed to check dependencies: ${error.message}`);
      return { outdated: false, packages: {}, error: error.message };
    }
  }

  async auditDependencies() {
    this.log("🔍 Running security audit...");
    
    try {
      const audit = execSync("npm audit --json", { 
        cwd: this.projectRoot, 
        encoding: "utf8" 
      });
      
      const auditResult = JSON.parse(audit);
      const vulnerabilities = auditResult.vulnerabilities || {};
      const vulnCount = Object.keys(vulnerabilities).length;
      
      if (vulnCount > 0) {
        this.log(`⚠️  Found ${vulnCount} vulnerabilities`);
        return { vulnerabilities: true, count: vulnCount, details: vulnerabilities };
      } else {
        this.log("✅ No vulnerabilities found");
        return { vulnerabilities: false, count: 0, details: {} };
      }
    } catch (error) {
      this.log(`❌ Failed to run audit: ${error.message}`);
      return { vulnerabilities: false, count: 0, details: {}, error: error.message };
    }
  }

  async fixDependencies() {
    this.log("🔧 Attempting to fix dependencies...");
    
    try {
      // Try to fix vulnerabilities
      this.log("🔧 Running npm audit fix...");
      execSync("npm audit fix", { 
        cwd: this.projectRoot, 
        stdio: "inherit" 
      });
      
      this.log("✅ Dependencies fixed successfully");
      return true;
    } catch (error) {
      this.log(`⚠️  Could not automatically fix dependencies: ${error.message}`);
      
      // Try force fix
      try {
        this.log("🔧 Trying npm audit fix --force...");
        execSync("npm audit fix --force", { 
          cwd: this.projectRoot, 
          stdio: "inherit" 
        });
        
        this.log("✅ Dependencies force-fixed successfully");
        return true;
      } catch (forceError) {
        this.log(`❌ Force fix also failed: ${forceError.message}`);
        return false;
      }
    }
  }

  async updateDependencies() {
    this.log("🔄 Updating dependencies...");
    
    try {
      // Update to latest versions
      execSync("npm update", { 
        cwd: this.projectRoot, 
        stdio: "inherit" 
      });
      
      this.log("✅ Dependencies updated successfully");
      return true;
    } catch (error) {
      this.log(`❌ Failed to update dependencies: ${error.message}`);
      return false;
    }
  }

  async generateReport() {
    this.log("📊 Generating dependency report...");
    
    const report = {
      timestamp: new Date().toISOString(),
      projectRoot: this.projectRoot,
      dependencies: await this.checkDependencies(),
      security: await this.auditDependencies()
    };
    
    const reportFile = path.join(this.reportsDir, `dependency-report-${Date.now()}.json`);
    
    try {
      fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
      this.log(`📄 Report saved to: ${reportFile}`);
      return reportFile;
    } catch (error) {
      this.log(`❌ Failed to save report: ${error.message}`);
      return null;
    }
  }

  async run() {
    this.log("🚀 Starting Dependency Manager...");
    
    try {
      // Check current status
      const depStatus = await this.checkDependencies();
      const securityStatus = await this.auditDependencies();
      
      // Generate report
      await this.generateReport();
      
      // Fix issues if found
      if (securityStatus.vulnerabilities) {
        this.log("🔧 Attempting to fix security vulnerabilities...");
        const fixed = await this.fixDependencies();
        
        if (!fixed) {
          this.log("⚠️  Some issues could not be automatically fixed");
        }
      }
      
      if (depStatus.outdated) {
        this.log("🔄 Updating outdated dependencies...");
        const updated = await this.updateDependencies();
        
        if (!updated) {
          this.log("⚠️  Some dependencies could not be updated");
        }
      }
      
      this.log("🎉 Dependency Manager completed!");
      
    } catch (error) {
      this.log(`❌ Dependency Manager failed: ${error.message}`);
    }
  }
}

// Run the dependency manager
if (require.main === module) {
  const manager = new DependencyManager();
  manager.run().catch(console.error);
}

module.exports = DependencyManager;