#!/usr/bin/env node

import fs from 'fs');
import path from 'path');
const { execSync, spawn } = require('child_process');
import cron from 'node-cron');

class DependencyMonitor {
  constructor() {
    this.projectRoot = process.cwd();
    this.vulnerabilitiesFound = 0;
    this.dependenciesUpdated = 0;
    this.monitoring = false;
    this.logFile = path.join(this.projectRoot, 'logs', 'dependency.log');

    // Ensure logs directory exists
    this.ensureLogsDirectory();

    // Initialize monitoring
    this.startMonitoring();
  }

  ensureLogsDirectory() {
    const logsDir = path.dirname(this.logFile);
    if (!fs.existsSync(logsDir)) {
      fs.mkdirSync(logsDir, { recursive: true });
    }
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${level}] ${message}\n`;

    try {
      fs.appendFileSync(this.logFile, logEntry);
    } catch (error) {
      console.error('Failed to write to log file:', error.message);
    }
  }

  async startMonitoring() {
    this.log('Starting dependency monitoring...');

    // Schedule regular dependency checks
    cron.schedule('0 */2 * * *', () => {
      this.performDependencyCheck();
    });

    // Schedule daily security audit
    cron.schedule('0 1 * * *', () => {
      this.performSecurityAudit();
    });

    // Schedule weekly dependency updates
    cron.schedule('0 7 * * 0', () => {
      this.performWeeklyUpdates();
    });

    // Initial dependency check
    setTimeout(() => {
      this.performDependencyCheck();
    }, 15000);

    this.log('Dependency monitoring started successfully');
  }

  async performDependencyCheck() {
    if (this.monitoring) return;

    this.monitoring = true;
    this.log('Performing dependency check...');

    try {
      const issues = await this.detectDependencyIssues();

      if (issues.length > 0) {
        this.log(`Found ${issues.length} dependency issues, attempting fixes...`);
        await this.autoFixDependencyIssues(issues);
      } else {
        this.log('No dependency issues detected, all packages are up to date');
      }
    } catch (error) {
      this.log(`Dependency check failed: ${error.message}`, 'ERROR');
    } finally {
      this.monitoring = false;
    }
  }

  async detectDependencyIssues() {
    const issues = [];
    
    try {
      // Check for outdated packages
      const outdatedResult = execSync('npm outdated --json', { encoding: 'utf8' });
      const outdated = JSON.parse(outdatedResult);
      
      if (Object.keys(outdated).length > 0) {
        issues.push({
          type: 'outdated',
          packages: Object.keys(outdated),
          severity: 'medium'
        });
      }
    } catch (error) {
      // No outdated packages found
    }

    try {
      // Check for security vulnerabilities
      const auditResult = execSync('npm audit --json', { encoding: 'utf8' });
      const audit = JSON.parse(auditResult);
      
      if (audit.vulnerabilities && Object.keys(audit.vulnerabilities).length > 0) {
        issues.push({
          type: 'vulnerability',
          packages: Object.keys(audit.vulnerabilities),
          severity: 'high'
        });
      }
    } catch (error) {
      // No vulnerabilities found
    }

    return issues;
  }

  async autoFixDependencyIssues(issues) {
    for (const issue of issues) {
      try {
        if (issue.type === 'vulnerability') {
          this.log(`Attempting to fix vulnerability in ${issue.packages.join(', ')}`);
          execSync('npm audit fix', { stdio: 'inherit' });
          this.vulnerabilitiesFound++;
        } else if (issue.type === 'outdated') {
          this.log(`Updating outdated packages: ${issue.packages.join(', ')}`);
          execSync('npm update', { stdio: 'inherit' });
          this.dependenciesUpdated++;
        }
      } catch (error) {
        this.log(`Failed to fix issue ${issue.type}: ${error.message}`, 'ERROR');
      }
    }
  }

  async performSecurityAudit() {
    this.log('Performing security audit...');
    
    try {
      execSync('npm audit', { stdio: 'inherit' });
      this.log('Security audit completed');
    } catch (error) {
      this.log(`Security audit failed: ${error.message}`, 'ERROR');
    }
  }

  async performWeeklyUpdates() {
    this.log('Performing weekly dependency updates...');
    
    try {
      execSync('npm update', { stdio: 'inherit' });
      this.log('Weekly updates completed');
    } catch (error) {
      this.log(`Weekly updates failed: ${error.message}`, 'ERROR');
    }
  }

  getStats() {
    return {
      vulnerabilitiesFound: this.vulnerabilitiesFound,
      dependenciesUpdated: this.dependenciesUpdated,
      isMonitoring: this.monitoring,
      lastCheck: new Date().toISOString()
    };
  }

  stop() {
    this.monitoring = false;
    this.log('Dependency monitoring stopped');
  }
}

// Export the class
export default DependencyMonitor;

// If running directly, start the monitor
if (require.main === module) {
  const monitor = new DependencyMonitor();
  
  // Handle graceful shutdown
  process.on('SIGINT', () => {
    monitor.log('Shutting down Dependency Monitor...');
    monitor.stop();
    process.exit(0);
  });
  
  process.on('SIGTERM', () => {
    monitor.log('Shutting down Dependency Monitor...');
    monitor.stop();
    process.exit(0);
  });
}