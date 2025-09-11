#!/usr/bin/env node
/**
 * Error Monitor - PM2 Automation Script
 * Monitors the application for errors and automatically fixes common issues
 */
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
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
  async start() {
    console.log('🔍 Starting Error Monitor...');
    this.isRunning = true;
    // Create logs directory
    const logsDir = path.join(this.projectRoot, 'automation', 'logs');
    if (!fs.existsSync(logsDir)) {
      fs.mkdirSync(logsDir, { recursive: true });
    }

<<<<<<< HEAD


=======
<<<<<<< HEAD
=======
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
    // Initial health check
    await this.performHealthCheck();
    // Start continuous monitoring
    this.startContinuousMonitoring();
    // Handle graceful shutdown
    process.on('SIGINT', () => this.shutdown());
    process.on('SIGTERM', () => this.shutdown());
  }
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
      // Trigger error fixer if needed
      if (this.monitoringReport.metrics.totalErrors > this.alertThreshold) {
        await this.triggerErrorFixer();
      }
    } catch (error) {
      console.error('❌ Health check failed:', error);
      this.monitoringReport.errorsDetected.push({
        type: 'health_check_failure',
        message: error.message,
<<<<<<< HEAD

        timestamp: new Date().toISOString()
=======
<<<<<<< HEAD
<<<<<<< HEAD
        timestamp: new Date().toISOString()
=======
<<<<<<< HEAD
=======
        timestamp: new Date().toISOString()
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
=======
        timestamp: new Date().toISOString()
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
        timestamp: new Date().toISOString(),
      });
    }
  }
  async checkTypeScriptErrors() {
    try {
      execSync('npx tsc --noEmit --pretty false', {
        encoding: 'utf8',
        cwd: this.projectRoot,
        stdio: ['pipe', 'pipe', 'pipe'],
      });
      this.monitoringReport.metrics.typeCheckSuccess = true;
      console.log('✅ TypeScript check passed');
    } catch (error) {
      if (error.stdout) {
        const errors = this.parseTypeScriptErrors(error.stdout);
        this.monitoringReport.errorsDetected.push(...errors);
        this.monitoringReport.metrics.totalErrors += errors.length;
        this.monitoringReport.metrics.typeCheckSuccess = false;
        console.log(`❌ TypeScript check failed with ${errors.length} errors`);
      }
    }
  }
  async checkESLintErrors() {
    try {
      execSync('npx eslint . --format=compact --no-eslintrc', {
        encoding: 'utf8',
        cwd: this.projectRoot,
        stdio: ['pipe', 'pipe', 'pipe'],
      });
      this.monitoringReport.metrics.lintSuccess = true;
      console.log('✅ ESLint check passed');
    } catch (error) {
      if (error.stdout) {
        const errors = this.parseESLintErrors(error.stdout);
        this.monitoringReport.errorsDetected.push(...errors);
        this.monitoringReport.metrics.totalErrors += errors.length;
        this.monitoringReport.metrics.lintSuccess = false;
        console.log(`❌ ESLint check failed with ${errors.length} errors`);
      }
    }
  }
  async checkBuildStatus() {
    try {
      // Quick build check (without full build)
      execSync('npx next build --dry-run', {
        encoding: 'utf8',
        cwd: this.projectRoot,
        stdio: ['pipe', 'pipe', 'pipe'],
        timeout: 30000, // 30 second timeout
      });
      this.monitoringReport.metrics.buildSuccess = true;
      console.log('✅ Build check passed');
    } catch (error) {
      this.monitoringReport.metrics.buildSuccess = false;
      this.monitoringReport.errorsDetected.push({
        type: 'build_failure',
        message: error.message,
        timestamp: new Date().toISOString(),
      });
      this.monitoringReport.metrics.totalErrors += 1;
      console.log('❌ Build check failed');
    }
  }
  async checkCriticalFiles() {
    const criticalFiles = [
      'package.json',
      'tsconfig.json',
      'next.config.js',
      'src/App.tsx',
      'src/pages/index.tsx',
    ];
<<<<<<< HEAD


     is missing`,

=======
<<<<<<< HEAD
    for (const file of criticalFiles) {
      const filePath = path.join(this.projectRoot, file);
      if (!fs.existsSync(filePath)) {
        this.monitoringReport.errorsDetected.push({
          type: 'missing_critical_file',
          file: file,
          message: `Critical file ${file} is missing`,
=======

     is missing`,
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20
          timestamp: new Date().toISOString(),
        });
        this.monitoringReport.metrics.totalErrors += 1;
      }
    }
  }
  parseTypeScriptErrors(output) {
    const errors = [];
    const lines = output.split('\n');
<<<<<<< HEAD


=======
<<<<<<< HEAD
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
<<<<<<< HEAD
            timestamp: new Date().toISOString()
=======
<<<<<<< HEAD
=======
            timestamp: new Date().toISOString()
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20
            timestamp: new Date().toISOString(),
          });

    );
origin/cursor/integrate-build-improve-and-re-verify-c7b5
        }
      }
    }

<<<<<<< HEAD


=======
<<<<<<< HEAD
=======
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
    return errors;
  }
  parseESLintErrors(output) {
    const errors = [];
    const lines = output.split('\n');
<<<<<<< HEAD

    for (const line of lines) {
      const match = line.match(/(.+):(\d+):(\d+):\s*(.+)/);
      if (match) {
        errors.push({
          type: 'eslint_error',
          file: match[1].trim(),
          line: parseInt(match[2]),
          column: parseInt(match[3]),
          message: match[4].trim(),
ursor/fix-syntax-push-and-merge-to-main-40de
          timestamp: new Date().toISOString()
        });
      }
    }

=======
=======
<<<<<<< HEAD
    for (const line of lines) {
      const match = line.match(/(.+):(\d+):(\d+):\s*(.+)/);
      if (match) {
        errors.push({
          type: 'eslint_error',
          file: match[1].trim(),
          line: parseInt(match[2]),
          column: parseInt(match[3]),
          message: match[4].trim(),
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
          timestamp: new Date().toISOString()
        });
      }
    }
<<<<<<< HEAD
=======
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20

    );
      }
    }
    );
      }
    }
origin/cursor/integrate-build-improve-and-re-verify-c7b5
          timestamp: new Date().toISOString(),
        });
      }
    }

<<<<<<< HEAD

=======

=======
<<<<<<< HEAD
=======
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
    return errors;
  }
  updateHealthStatus() {
    const totalErrors = this.monitoringReport.metrics.totalErrors;
    const totalWarnings = this.monitoringReport.metrics.totalWarnings;
    if (totalErrors === 0 && totalWarnings === 0) {
      this.monitoringReport.healthStatus = 'healthy';
    } else if (totalErrors <= this.alertThreshold) {
      this.monitoringReport.healthStatus = 'warning';
    } else {
      this.monitoringReport.healthStatus = 'critical';
    }
  }
  logHealthStatus() {
    const status = this.monitoringReport.healthStatus;
    const totalErrors = this.monitoringReport.metrics.totalErrors;
    const totalWarnings = this.monitoringReport.metrics.totalWarnings;
    console.log(`📊 Health Status: ${status.toUpperCase()}`);
    console.log(`📈 Total Errors: ${totalErrors}`);
    console.log(`⚠️  Total Warnings: ${totalWarnings}`);
<<<<<<< HEAD


=======
<<<<<<< HEAD
<<<<<<< HEAD
    console.log(`🏗️  Build Success: ${this.monitoringReport.metrics.buildSuccess ? '✅' : '❌'}`);
    console.log(`🔍 Type Check Success: ${this.monitoringReport.metrics.typeCheckSuccess ? '✅' : '❌'}`);
    console.log(`🧹 Lint Success: ${this.monitoringReport.metrics.lintSuccess ? '✅' : '❌'}`);
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20
=======
    console.log(`🏗️  Build Success: ${this.monitoringReport.metrics.buildSuccess ? '✅' : '❌'}`);
    console.log(`🔍 Type Check Success: ${this.monitoringReport.metrics.typeCheckSuccess ? '✅' : '❌'}`);
    console.log(`🧹 Lint Success: ${this.monitoringReport.metrics.lintSuccess ? '✅' : '❌'}`);
<<<<<<< HEAD
=======
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
=======
    console.log(`🏗️  Build Success: ${this.monitoringReport.metrics.buildSuccess ? '✅' : '❌'}`);
    console.log(`🔍 Type Check Success: ${this.monitoringReport.metrics.typeCheckSuccess ? '✅' : '❌'}`);
    console.log(`🧹 Lint Success: ${this.monitoringReport.metrics.lintSuccess ? '✅' : '❌'}`);
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
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
    try {
      const ErrorFixerAutomation = require('./error-fixer-automation.js');
      const automation = new ErrorFixerAutomation();
      await automation.run();
<<<<<<< HEAD

=======
<<<<<<< HEAD
<<<<<<< HEAD
      console.log('✅ Error fixer completed');
=======
<<<<<<< HEAD
=======
      console.log('✅ Error fixer completed');

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20

>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
      console.log('✅ Error fixer completed');
    } catch (error) {
      console.error('❌ Error fixer failed:', error);
      this.monitoringReport.errorsDetected.push({
        type: 'error_fixer_failure',
        message: error.message,
<<<<<<< HEAD

origin/cursor/integrate-build-improve-and-re-verify-c7b5

=======
        timestamp: new Date().toISOString()
=======
<<<<<<< HEAD
<<<<<<< HEAD
        timestamp: new Date().toISOString()
=======
<<<<<<< HEAD
=======
        timestamp: new Date().toISOString()
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
=======
        timestamp: new Date().toISOString()
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
        timestamp: new Date().toISOString(),
      });
    }
  }
  startContinuousMonitoring() {
    console.log(
      `🔄 Starting continuous monitoring (checking every ${this.checkInterval / 1000} seconds)...`
    );
    setInterval(async () => {
      if (this.isRunning) {
        await this.performHealthCheck();
        await this.saveReport();
      }
    }, this.checkInterval);
  }
  async saveReport() {
    const reportPath = path.join(
      this.projectRoot,
      'error-reports',
      `error-monitor-report-${Date.now()}.json`
    );
    const reportDir = path.dirname(reportPath);
    if (!fs.existsSync(reportDir)) {
      fs.mkdirSync(reportDir, { recursive: true });
    }

<<<<<<< HEAD

=======

=======
<<<<<<< HEAD
=======
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
    // Add duration to report
    this.monitoringReport.duration = Date.now() - this.startTime;
    fs.writeFileSync(
      reportPath,
      JSON.stringify(this.monitoringReport, null, 2)
    );
    // Keep only the latest 10 reports
    this.cleanupOldReports(reportDir);
  }
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
  async shutdown() {
    console.log('🛑 Shutting down Error Monitor...');
    this.isRunning = false;
    // Save final report
    await this.saveReport();
    console.log('✅ Error Monitor shutdown complete');
    process.exit(0);
  }
<<<<<<< HEAD



=======
<<<<<<< HEAD
}
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20
// Run the monitor
if (require.main === module) {
  const monitor = new ErrorMonitor();
  monitor.start().catch(console.error);
<<<<<<< HEAD


module.exports = ErrorMonitor;

=======
<<<<<<< HEAD
}
module.exports = ErrorMonitor;
=======

module.exports = ErrorMonitor;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20
