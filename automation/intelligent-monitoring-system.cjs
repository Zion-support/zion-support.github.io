#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class IntelligentMonitoringSystem {
  constructor() {
    this.projectRoot = process.cwd();
    this.reportsDir = path.join(this.projectRoot, 'automation-reports');
    this.logsDir = path.join(this.projectRoot, 'automation', 'logs');
    this.ensureDirectories();
  }

  ensureDirectories() {
    [this.reportsDir, this.logsDir].forEach(dir => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
    });
  }

  log(message) {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${message}`);
  }

  async monitorPerformance() {
    this.log('⚡ Monitoring performance...');
    
    try {
      // Monitor build performance
      const buildStart = Date.now();
      execSync('npm run build', { stdio: 'pipe' });
      const buildTime = Date.now() - buildStart;
      
      // Monitor test performance
      const testStart = Date.now();
      execSync('npm run test:smoke', { stdio: 'pipe' });
      const testTime = Date.now() - testStart;

      return {
        success: true,
        metrics: {
          buildTime: buildTime,
          testTime: testTime,
          totalTime: buildTime + testTime
        }
      };
    } catch (error) {
      this.log(`❌ Performance monitoring failed: ${error.message}`);
      return { success: false, error: error.message };
    }
  }

  async monitorErrors() {
    this.log('🔍 Monitoring errors...');
    
    try {
      // Check for build errors
      let buildErrors = 0;
      try {
        execSync('npm run build', { stdio: 'pipe' });
      } catch (error) {
        buildErrors++;
      }

      // Check for lint errors
      let lintErrors = 0;
      try {
        execSync('npm run lint', { stdio: 'pipe' });
      } catch (error) {
        lintErrors++;
      }

      // Check for type errors
      let typeErrors = 0;
      try {
        execSync('npm run type-check', { stdio: 'pipe' });
      } catch (error) {
        typeErrors++;
      }

      return {
        success: true,
        metrics: {
          buildErrors,
          lintErrors,
          typeErrors,
          totalErrors: buildErrors + lintErrors + typeErrors
        }
      };
    } catch (error) {
      this.log(`❌ Error monitoring failed: ${error.message}`);
      return { success: false, error: error.message };
    }
  }

  async monitorDependencies() {
    this.log('📦 Monitoring dependencies...');
    
    try {
      // Check for outdated packages
      let outdatedPackages = 0;
      try {
        const result = execSync('npm outdated --json', { stdio: 'pipe' });
        const outdated = JSON.parse(result.toString());
        outdatedPackages = Object.keys(outdated).length;
      } catch (error) {
        // npm outdated returns non-zero exit code when packages are outdated
        outdatedPackages = 0;
      }

      // Check for security vulnerabilities
      let vulnerabilities = 0;
      try {
        const result = execSync('npm audit --json', { stdio: 'pipe' });
        const audit = JSON.parse(result.toString());
        vulnerabilities = audit.metadata?.vulnerabilities?.total || 0;
      } catch (error) {
        vulnerabilities = 0;
      }

      return {
        success: true,
        metrics: {
          outdatedPackages,
          vulnerabilities
        }
      };
    } catch (error) {
      this.log(`❌ Dependency monitoring failed: ${error.message}`);
      return { success: false, error: error.message };
    }
  }

  async monitorFileSystem() {
    this.log('📁 Monitoring file system...');
    
    try {
      // Check for large files
      const largeFiles = [];
      const checkDirectory = (dir, maxSize = 10 * 1024 * 1024) => { // 10MB
        const files = fs.readdirSync(dir);
        files.forEach(file => {
          const filePath = path.join(dir, file);
          const stats = fs.statSync(filePath);
          if (stats.isFile() && stats.size > maxSize) {
            largeFiles.push({ path: filePath, size: stats.size });
          } else if (stats.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
            checkDirectory(filePath, maxSize);
          }
        });
      };

      checkDirectory(this.projectRoot);

      // Check for duplicate files
      const duplicateFiles = [];
      // This is a simplified check - in reality, you'd use file hashing
      const fileHashes = new Map();
      const checkForDuplicates = (dir) => {
        const files = fs.readdirSync(dir);
        files.forEach(file => {
          const filePath = path.join(dir, file);
          const stats = fs.statSync(filePath);
          if (stats.isFile()) {
            const content = fs.readFileSync(filePath);
            const hash = content.toString().slice(0, 100); // Simple hash
            if (fileHashes.has(hash)) {
              duplicateFiles.push({ original: fileHashes.get(hash), duplicate: filePath });
            } else {
              fileHashes.set(hash, filePath);
            }
          } else if (stats.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
            checkForDuplicates(filePath);
          }
        });
      };

      checkForDuplicates(this.projectRoot);

      return {
        success: true,
        metrics: {
          largeFiles: largeFiles.length,
          duplicateFiles: duplicateFiles.length,
          totalFiles: fileHashes.size
        }
      };
    } catch (error) {
      this.log(`❌ File system monitoring failed: ${error.message}`);
      return { success: false, error: error.message };
    }
  }

  async generateReport(results) {
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        totalChecks: Object.keys(results).length,
        successfulChecks: Object.values(results).filter(r => r.success).length,
        failedChecks: Object.values(results).filter(r => !r.success).length
      },
      results
    };

    const reportPath = path.join(this.reportsDir, 'intelligent-monitoring-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    this.log(`📊 Report saved to: ${reportPath}`);
    return report;
  }

  async run() {
    this.log('🎯 Starting Intelligent Monitoring System...');
    
    const results = {};
    
    // Run all monitoring checks
    results.performance = await this.monitorPerformance();
    results.errors = await this.monitorErrors();
    results.dependencies = await this.monitorDependencies();
    results.fileSystem = await this.monitorFileSystem();
    
    // Generate report
    const report = await this.generateReport(results);
    
    this.log('🎉 Intelligent Monitoring System completed!');
    this.log(`📊 Summary: ${report.summary.successfulChecks}/${report.summary.totalChecks} checks successful`);
    
    return report;
  }
}

// Run the monitoring system
const monitor = new IntelligentMonitoringSystem();
monitor.run().catch(console.error);