#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');
const cron = require('node-cron');
const crypto = require('crypto');

console.log('🔒 File Integrity Monitor Starting...\n');

class FileIntegrityMonitor {
  constructor() {
    this.projectRoot = process.cwd();
    this.integrityChecks = 0;
    this.issuesFound = 0;
    this.issuesFixed = 0;
    this.monitoring = false;
    this.logFile = path.join(this.projectRoot, 'logs', 'file-integrity.log');
    this.checksumsFile = path.join(this.projectRoot, 'logs', 'file-checksums.json');
    this.ensureLogDirectory();
  }

  ensureLogDirectory() {
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}\n`;
    console.log(`[${level}] ${message}`);
    fs.appendFileSync(this.logFile, logMessage);
  }

  calculateFileChecksum(filePath) {
    try {
      const fileBuffer = fs.readFileSync(filePath);
      const hashSum = crypto.createHash('sha256');
      hashSum.update(fileBuffer);
      return hashSum.digest('hex');
    } catch (error) {
      this.log(`Error calculating checksum for ${filePath}: ${error.message}`, 'ERROR');
      return null;
    }
  }

  async scanProject() {
    this.log('Starting file integrity scan...');
    const checksums = {};
    const issues = [];

    try {
      const files = this.getProjectFiles();
      this.log(`Scanning ${files.length} files...`);

      for (const file of files) {
        const checksum = this.calculateFileChecksum(file);
        if (checksum) {
          checksums[file] = checksum;
        }
      }

      // Check against previous checksums
      if (fs.existsSync(this.checksumsFile)) {
        const previousChecksums = JSON.parse(fs.readFileSync(this.checksumsFile, 'utf8'));
        
        for (const [file, currentChecksum] of Object.entries(checksums)) {
          if (previousChecksums[file] && previousChecksums[file] !== currentChecksum) {
            issues.push({
              file,
              type: 'modified',
              message: 'File has been modified since last scan'
            });
          }
        }

        // Check for deleted files
        for (const file of Object.keys(previousChecksums)) {
          if (!checksums[file] && fs.existsSync(file)) {
            issues.push({
              file,
              type: 'deleted',
              message: 'File was deleted'
            });
          }
        }
      }

      // Save current checksums
      fs.writeFileSync(this.checksumsFile, JSON.stringify(checksums, null, 2));

      this.integrityChecks++;
      this.issuesFound += issues.length;

      if (issues.length > 0) {
        this.log(`Found ${issues.length} integrity issues:`, 'WARN');
        issues.forEach(issue => {
          this.log(`  - ${issue.file}: ${issue.message}`, 'WARN');
        });
      } else {
        this.log('No integrity issues found');
      }

      return {
        filesScanned: files.length,
        issuesFound: issues.length,
        issues: issues
      };

    } catch (error) {
      this.log(`Error during integrity scan: ${error.message}`, 'ERROR');
      return null;
    }
  }

  getProjectFiles() {
    const files = [];
    const extensions = ['.js', '.ts', '.tsx', '.json', '.md'];
    const ignoreDirs = ['node_modules', '.git', '.next', 'dist', 'build'];

    const walkDir = (dir) => {
      try {
        const items = fs.readdirSync(dir);
        items.forEach(item => {
          const fullPath = path.join(dir, item);
          const stat = fs.statSync(fullPath);

          if (stat.isDirectory()) {
            if (!ignoreDirs.includes(item) && !item.startsWith('.')) {
              walkDir(fullPath);
            }
          } else {
            const ext = path.extname(item);
            if (extensions.includes(ext)) {
              files.push(fullPath);
            }
          }
        });
      } catch (error) {
        // Skip directories we can't read
      }
    };

    walkDir(this.projectRoot);
    return files;
  }

  startMonitoring(intervalMinutes = 5) {
    if (this.monitoring) {
      this.log('Monitoring already active', 'WARN');
      return;
    }

    this.monitoring = true;
    this.log(`Starting continuous monitoring (every ${intervalMinutes} minutes)...`);

    // Run initial scan
    this.scanProject();

    // Schedule periodic scans
    cron.schedule(`*/${intervalMinutes} * * * *`, () => {
      this.scanProject();
    });

    this.log('File integrity monitoring active. Press Ctrl+C to stop.');
  }

  stopMonitoring() {
    this.monitoring = false;
    this.log('File integrity monitoring stopped');
  }

  generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      totalChecks: this.integrityChecks,
      totalIssues: this.issuesFound,
      issuesFixed: this.issuesFixed,
      monitoring: this.monitoring
    };

    const reportFile = path.join(this.projectRoot, 'logs', 'file-integrity-report.json');
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    this.log(`Report generated: ${reportFile}`);
    return report;
  }
}

// CLI interface
const monitor = new FileIntegrityMonitor();
const command = process.argv[2];
const interval = parseInt(process.argv[3]) || 5;

switch (command) {
  case 'scan':
    monitor.scanProject();
    break;
  case 'monitor':
    monitor.startMonitoring(interval);
    break;
  case 'report':
    monitor.generateReport();
    break;
  default:
    console.log('Usage:');
    console.log('  node file-integrity-monitor.js scan');
    console.log('  node file-integrity-monitor.js monitor [interval-minutes]');
    console.log('  node file-integrity-monitor.js report');
    break;
}

module.exports = FileIntegrityMonitor;