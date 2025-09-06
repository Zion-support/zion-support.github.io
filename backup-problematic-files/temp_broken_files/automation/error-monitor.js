<<<<<<< HEAD
#!/usr/bin/env node
=======
// Error-monitor utility
export const Error-monitor = () => {
  // Implementation here
  return null
};

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
/**
 * Error Monitor - PM2 Automation Script
 * Monitors the application for errors and automatically fixes common issues
 */
<<<<<<< HEAD
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
=======

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
class ErrorMonitor {
  constructor() {
    this.projectRoot = process.cwd();
    this.monitoringReport = {
      timestamp: new Date().toISOString(),
      duration: 0,
      errorsDetected: [],
      warnings: [],
      healthStatus: 'healthy',
      metrics: {
        totalErrors: 0,
        totalWarnings: 0,
        buildSuccess: false,
        typeCheckSuccess: false,
        lintSuccess: false,
      },
    };
    this.startTime = Date.now();
    this.isRunning = false;
    this.checkInterval = 60000; // 1 minute
    this.alertThreshold = 10;
  }
<<<<<<< HEAD
  async start() {
    console.log('🔍 Starting Error Monitor...');
    this.isRunning = true;
=======

  async start() {
    console.log(' Starting Error Monitor...');
    this.isRunning = true;

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    // Create logs directory
    const logsDir = path.join(this.projectRoot, 'automation', 'logs');
    if (!fs.existsSync(logsDir)) {
      fs.mkdirSync(logsDir, { recursive: true });
    }
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/temp_broken_files/automation/error-monitor.js
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> main
=======
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705:automation/error-monitor.js

>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
=======

>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
    // Initial health check
    await this.performHealthCheck();
    // Start continuous monitoring
    this.startContinuousMonitoring();
=======
    // Initial health check
    await this.performHealthCheck();

    // Start continuous monitoring
    this.startContinuousMonitoring();

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    // Handle graceful shutdown
    process.on('SIGINT', () => this.shutdown());
    process.on('SIGTERM', () => this.shutdown());
  }
<<<<<<< HEAD
  async performHealthCheck() {
    console.log('🏥 Performing health check...');
    try {
      // Check TypeScript errors
      await this.checkTypeScriptErrors();
      // Check ESLint errors
      await this.checkESLintErrors();
      // Check build status
      await this.checkBuildStatus();
      // Check for critical files
      await this.checkCriticalFiles();
      // Update health status
      this.updateHealthStatus();
      // Log results
      this.logHealthStatus();
=======

  async performHealthCheck() {
    console.log(' Performing health check...');

    try {
      // Check TypeScript errors
      await this.checkTypeScriptErrors();

      // Check ESLint errors
      await this.checkESLintErrors();

      // Check build status
      await this.checkBuildStatus();

      // Check for critical files
      await this.checkCriticalFiles();

      // Update health status
      this.updateHealthStatus();

      // Log results
      this.logHealthStatus();

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      // Trigger error fixer if needed
      if (this.monitoringReport.metrics.totalErrors > this.alertThreshold) {
        await this.triggerErrorFixer();
      }
    } catch (error) {
<<<<<<< HEAD
      console.error('❌ Health check failed:', error);
      this.monitoringReport.errorsDetected.push({
        type: 'health_check_failure',
        message: error.message,
<<<<<<< HEAD:backup-problematic-files/temp_broken_files/automation/error-monitor.js
        timestamp: new Date().toISOString()
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
        timestamp: new Date().toISOString()
>>>>>>> main
=======
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
=======
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705:automation/error-monitor.js
=======
      console.error(' Health check failed:', error);
      this.monitoringReport.errorsDetected.push({
        type: 'health_check_failure',
        message: error.message,
        timestamp: new Date().toISOString()
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
        timestamp: new Date().toISOString(),
      });
    }
  }
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  async checkTypeScriptErrors() {
    try {
      execSync('npx tsc --noEmit --pretty false', {
        encoding: 'utf8',
        cwd: this.projectRoot,
        stdio: ['pipe', 'pipe', 'pipe'],
      });
<<<<<<< HEAD
      this.monitoringReport.metrics.typeCheckSuccess = true;
      console.log('✅ TypeScript check passed');
=======

      this.monitoringReport.metrics.typeCheckSuccess = true;
      console.log(' TypeScript check passed');
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    } catch (error) {
      if (error.stdout) {
        const errors = this.parseTypeScriptErrors(error.stdout);
        this.monitoringReport.errorsDetected.push(...errors);
        this.monitoringReport.metrics.totalErrors += errors.length;
        this.monitoringReport.metrics.typeCheckSuccess = false;
<<<<<<< HEAD
        console.log(`❌ TypeScript check failed with ${errors.length} errors`);
      }
    }
  }
=======
        console.log(` TypeScript check failed with ${errors.length} errors`);
      }
    }
  }

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  async checkESLintErrors() {
    try {
      execSync('npx eslint . --format=compact --no-eslintrc', {
        encoding: 'utf8',
        cwd: this.projectRoot,
        stdio: ['pipe', 'pipe', 'pipe'],
      });
<<<<<<< HEAD
      this.monitoringReport.metrics.lintSuccess = true;
      console.log('✅ ESLint check passed');
=======

      this.monitoringReport.metrics.lintSuccess = true;
      console.log(' ESLint check passed');
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    } catch (error) {
      if (error.stdout) {
        const errors = this.parseESLintErrors(error.stdout);
        this.monitoringReport.errorsDetected.push(...errors);
        this.monitoringReport.metrics.totalErrors += errors.length;
        this.monitoringReport.metrics.lintSuccess = false;
<<<<<<< HEAD
        console.log(`❌ ESLint check failed with ${errors.length} errors`);
      }
    }
  }
=======
        console.log(` ESLint check failed with ${errors.length} errors`);
      }
    }
  }

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  async checkBuildStatus() {
    try {
      // Quick build check (without full build)
      execSync('npx next build --dry-run', {
        encoding: 'utf8',
        cwd: this.projectRoot,
        stdio: ['pipe', 'pipe', 'pipe'],
        timeout: 30000, // 30 second timeout
      });
<<<<<<< HEAD
      this.monitoringReport.metrics.buildSuccess = true;
      console.log('✅ Build check passed');
=======

      this.monitoringReport.metrics.buildSuccess = true;
      console.log(' Build check passed');
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    } catch (error) {
      this.monitoringReport.metrics.buildSuccess = false;
      this.monitoringReport.errorsDetected.push({
        type: 'build_failure',
        message: error.message,
        timestamp: new Date().toISOString(),
      });
      this.monitoringReport.metrics.totalErrors += 1;
<<<<<<< HEAD
      console.log('❌ Build check failed');
    }
  }
=======
      console.log(' Build check failed');
    }
  }

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  async checkCriticalFiles() {
    const criticalFiles = [
      'package.json',
      'tsconfig.json',
      'next.config.js',
      'src/App.tsx',
      'src/pages/index.tsx',
    ];
<<<<<<< HEAD
    for (const file of criticalFiles) {
      const filePath = path.join(this.projectRoot, file);
      if (!fs.existsSync(filePath)) {
        this.monitoringReport.errorsDetected.push({
          type: 'missing_critical_file',
          file: file,
          message: `Critical file ${file} is missing`,
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
          timestamp: new Date().toISOString(),
        });
        this.monitoringReport.metrics.totalErrors += 1;
      }
    }
  }
<<<<<<< HEAD
  parseTypeScriptErrors(output) {
    const errors = [];
    const lines = output.split('\n');
    for (const line of lines) {
      if (line.includes('error TS')) {
        const match = line.match(
          /(.+):(\d+):(\d+)\s*-\s*error\s+TS\d+:\s*(.+)/
        );
        if (match) {
          errors.push({
            type: 'typescript_error',
            file: match[1].trim(),
            line: parseInt(match[2]),
            column: parseInt(match[3]),
            message: match[4].trim(),
<<<<<<< HEAD:backup-problematic-files/temp_broken_files/automation/error-monitor.js
            timestamp: new Date().toISOString()
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
            timestamp: new Date().toISOString()
>>>>>>> main
=======
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
=======
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705:automation/error-monitor.js
            timestamp: new Date().toISOString(),
          });
    );
        }
      }
    }
<<<<<<< HEAD:backup-problematic-files/temp_broken_files/automation/error-monitor.js
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> main
=======
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705:automation/error-monitor.js

>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
=======

>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
    return errors;
  }
  parseESLintErrors(output) {
    const errors = [];
    const lines = output.split('\n');
    for (const line of lines) {
      const match = line.match(/(.+):(\d+):(\d+):\s*(.+)/);
      if (match) {
        errors.push({
          type: 'eslint_error',
          file: match[1].trim(),
          line: parseInt(match[2]),
          column: parseInt(match[3]),
          message: match[4].trim(),
<<<<<<< HEAD:backup-problematic-files/temp_broken_files/automation/error-monitor.js
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705:automation/error-monitor.js
=======

  parseTypeScriptErrors(output) {
    const errors = [];
    const lines = output.split('\n');
    return errors;
  }

  parseESLintErrors(output) {
    const errors = [];
    const lines = output.split('\n');
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
          timestamp: new Date().toISOString()
        });
      }
    }
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/temp_broken_files/automation/error-monitor.js
=======
>>>>>>> main
=======
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
=======
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705:automation/error-monitor.js
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
          timestamp: new Date().toISOString(),
        });
      }
    }
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/temp_broken_files/automation/error-monitor.js
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> main
=======
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705:automation/error-monitor.js

>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
=======

>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
    return errors;
  }
  updateHealthStatus() {
    const totalErrors = this.monitoringReport.metrics.totalErrors;
    const totalWarnings = this.monitoringReport.metrics.totalWarnings;
=======
    return errors;
  }

  updateHealthStatus() {
    const totalErrors = this.monitoringReport.metrics.totalErrors;
    const totalWarnings = this.monitoringReport.metrics.totalWarnings;

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    if (totalErrors === 0 && totalWarnings === 0) {
      this.monitoringReport.healthStatus = 'healthy';
    } else if (totalErrors <= this.alertThreshold) {
      this.monitoringReport.healthStatus = 'warning';
    } else {
      this.monitoringReport.healthStatus = 'critical';
    }
  }
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  logHealthStatus() {
    const status = this.monitoringReport.healthStatus;
    const totalErrors = this.monitoringReport.metrics.totalErrors;
    const totalWarnings = this.monitoringReport.metrics.totalWarnings;
<<<<<<< HEAD
    console.log(`📊 Health Status: ${status.toUpperCase()}`);
    console.log(`📈 Total Errors: ${totalErrors}`);
    console.log(`⚠️  Total Warnings: ${totalWarnings}`);
<<<<<<< HEAD:backup-problematic-files/temp_broken_files/automation/error-monitor.js
    console.log(`🏗️  Build Success: ${this.monitoringReport.metrics.buildSuccess ? '✅' : '❌'}`);
    console.log(`🔍 Type Check Success: ${this.monitoringReport.metrics.typeCheckSuccess ? '✅' : '❌'}`);
    console.log(`🧹 Lint Success: ${this.monitoringReport.metrics.lintSuccess ? '✅' : '❌'}`);
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
    console.log(`🏗️  Build Success: ${this.monitoringReport.metrics.buildSuccess ? '✅' : '❌'}`);
    console.log(`🔍 Type Check Success: ${this.monitoringReport.metrics.typeCheckSuccess ? '✅' : '❌'}`);
    console.log(`🧹 Lint Success: ${this.monitoringReport.metrics.lintSuccess ? '✅' : '❌'}`);
>>>>>>> main
=======
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
=======
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705:automation/error-monitor.js
    console.log(
      `🏗️  Build Success: ${this.monitoringReport.metrics.buildSuccess ? '✅' : '❌'}`
    );
    console.log(
      `🔍 Type Check Success: ${this.monitoringReport.metrics.typeCheckSuccess ? '✅' : '❌'}`
    );
    console.log(
      `🧹 Lint Success: ${this.monitoringReport.metrics.lintSuccess ? '✅' : '❌'}`
    );
  }
  async triggerErrorFixer() {
    console.log('🚀 Triggering error fixer...');
=======

    console.log(
      `  Build Success: ${this.monitoringReport.metrics.buildSuccess ? '' : ''}`
    );
    console.log(
      ` Type Check Success: ${this.monitoringReport.metrics.typeCheckSuccess ? '' : ''}`
    );
    console.log(
      ` Lint Success: ${this.monitoringReport.metrics.lintSuccess ? '' : ''}`
    );
  }

  async triggerErrorFixer() {
    console.log(' Triggering error fixer...');

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    try {
      const ErrorFixerAutomation = require('./error-fixer-automation.js');
      const automation = new ErrorFixerAutomation();
      await automation.run();
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/temp_broken_files/automation/error-monitor.js
      console.log('✅ Error fixer completed');

=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
      console.log('✅ Error fixer completed');
>>>>>>> main
=======
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229

>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
=======

>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705:automation/error-monitor.js
      console.log('✅ Error fixer completed');
    } catch (error) {
      console.error('❌ Error fixer failed:', error);
      this.monitoringReport.errorsDetected.push({
        type: 'error_fixer_failure',
        message: error.message,
<<<<<<< HEAD:backup-problematic-files/temp_broken_files/automation/error-monitor.js
        timestamp: new Date().toISOString()
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
        timestamp: new Date().toISOString()
>>>>>>> main
=======
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
=======
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705:automation/error-monitor.js
=======
      console.log('✅ Error fixer completed');
    } catch (error) {
      console.error(' Error fixer failed:', error);
      this.monitoringReport.errorsDetected.push({
        type: 'error_fixer_failure',
        message: error.message,
        timestamp: new Date().toISOString()
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
        timestamp: new Date().toISOString(),
      });
    }
  }
<<<<<<< HEAD
  startContinuousMonitoring() {
    console.log(
      `🔄 Starting continuous monitoring (checking every ${this.checkInterval / 1000} seconds)...`
    );
=======

  startContinuousMonitoring() {
    console.log(
      ` Starting continuous monitoring (checking every ${this.checkInterval / 1000} seconds)...`
    );

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    setInterval(async () => {
      if (this.isRunning) {
        await this.performHealthCheck();
        await this.saveReport();
      }
    }, this.checkInterval);
  }
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  async saveReport() {
    const reportPath = path.join(
      this.projectRoot,
      'error-reports',
      `error-monitor-report-${Date.now()}.json`
    );
    const reportDir = path.dirname(reportPath);
<<<<<<< HEAD
    if (!fs.existsSync(reportDir)) {
      fs.mkdirSync(reportDir, { recursive: true });
    }
<<<<<<< HEAD:backup-problematic-files/temp_broken_files/automation/error-monitor.js
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> main
=======
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705:automation/error-monitor.js

>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
=======

>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
    // Add duration to report
    this.monitoringReport.duration = Date.now() - this.startTime;
=======

    if (!fs.existsSync(reportDir)) {
      fs.mkdirSync(reportDir, { recursive: true });
    }
    // Add duration to report
    this.monitoringReport.duration = Date.now() - this.startTime;

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    fs.writeFileSync(
      reportPath,
      JSON.stringify(this.monitoringReport, null, 2)
    );
<<<<<<< HEAD
    // Keep only the latest 10 reports
    this.cleanupOldReports(reportDir);
  }
=======

    // Keep only the latest 10 reports
    this.cleanupOldReports(reportDir);
  }

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  cleanupOldReports(reportDir) {
    try {
      const files = fs
        .readdirSync(reportDir)
        .filter(file => file.startsWith('error-monitor-report-'))
        .map(file => ({
          name: file,
          path: path.join(reportDir, file),
          time: fs.statSync(path.join(reportDir, file)).mtime.getTime(),
        }))
        .sort((a, b) => b.time - a.time);
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      // Remove old reports (keep only the latest 10)
      if (files.length > 10) {
        for (let i = 10; i < files.length; i++) {
          fs.unlinkSync(files[i].path);
        }
      }
    } catch (error) {
      console.error('Error cleaning up old reports:', error);
    }
  }
<<<<<<< HEAD
  async shutdown() {
    console.log('🛑 Shutting down Error Monitor...');
    this.isRunning = false;
    // Save final report
    await this.saveReport();
    console.log('✅ Error Monitor shutdown complete');
    process.exit(0);
  }
}
=======

  async shutdown() {
    console.log(' Shutting down Error Monitor...');
    this.isRunning = false;

    // Save final report
    await this.saveReport();

    console.log(' Error Monitor shutdown complete');
    process.exit(0);
  }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
// Run the monitor
if (require.main === module) {
  const monitor = new ErrorMonitor();
  monitor.start().catch(console.error);
<<<<<<< HEAD
}
module.exports = ErrorMonitor;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
