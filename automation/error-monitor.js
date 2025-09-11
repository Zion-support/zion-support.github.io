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

>


origin/cursor/integrate-build-improve-and-re-verify-c7b5
=======>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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

        timestamp: new Date().toISOString()

     is missing`,
     is missing`,
origin/cursor/integrate-build-improve-and-re-verify-c7b5
=======


     is missing`,
          timestamp: new Date().toISOString(),
        });
        this.monitoringReport.metrics.totalErrors += 1;
      }
    }
  }
  parseTypeScriptErrors(output) {
    const errors = [];
    const lines = output.split('\n');
            timestamp: new Date().toISOString(),
          });

    );
origin/cursor/integrate-build-improve-and-re-verify-c7b5
        }
      }
    }



            timestamp: new Date().toISOString()
=======

            timestamp: new Date().toISOString(),
          });
    );
        }
      }
    }
origin/cursor/integrate-build-improve-and-re-verify-c7b5
=======


=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
ursor/fix-syntax-push-and-merge-to-main-40de
          timestamp: new Date().toISOString()
        });
      }
    }
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

>

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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

>


<<<<<<< HEAD
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de

origin/cursor/integrate-build-improve-and-re-verify-c7b5
=======>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    return errors;
          timestamp: new Date().toISOString()
        });
      }
    }    return errors;
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

    console.log(`🏗️  Build Success: ${this.monitoringReport.metrics.buildSuccess ? '✅' : '❌'}`);
    console.log(`🔍 Type Check Success: ${this.monitoringReport.metrics.typeCheckSuccess ? '✅' : '❌'}`);
    console.log(`🧹 Lint Success: ${this.monitoringReport.metrics.lintSuccess ? '✅' : '❌'}`);

<<<<<<< HEAD
      console.log('✅ Error fixer completed');
      console.log('✅ Error fixer completed');
      console.log('✅ Error fixer completed');
      console.log('✅ Error fixer completed');

origin/cursor/integrate-build-improve-and-re-verify-c7b5

      console.log('✅ Error fixer completed');
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
=======>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      console.log('✅ Error fixer completed');
    } catch (error) {
      console.error('❌ Error fixer failed:', error);
      this.monitoringReport.errorsDetected.push({
        type: 'error_fixer_failure',
        message: error.message,

        timestamp: new Date().toISOString()
>


<<<<<<< HEAD
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de

origin/cursor/integrate-build-improve-and-re-verify-c7b5
=======>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    // Add duration to report
        timestamp: new Date().toISOString()    // Add duration to report
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


}


module.exports = ErrorMonitor;
module.exports = ErrorMonitor;
origin/cursor/integrate-build-improve-and-re-verify-c7b5
=======


module.exports = ErrorMonitor;
