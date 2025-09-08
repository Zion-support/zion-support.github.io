#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class ErrorPreventionMonitor {
  constructor() {
    this.logFile = './logs/error-prevention-monitor.log';
    this.reportsDir = './reports';
    this.ensureDirectories();
    this.monitoringData = {
      timestamp: new Date().toISOString(),
      services: {},
      alerts: [],
      metrics: {
        totalErrors: 0,
        totalWarnings: 0,
        servicesOnline: 0,
        servicesOffline: 0
      }
    };
  }

  ensureDirectories() {
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
    
    if (!fs.existsSync(this.reportsDir)) {
      fs.mkdirSync(this.reportsDir, { recursive: true });
    }
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}\n`;
    console.log(logMessage.trim());
    fs.appendFileSync(this.logFile, logMessage);
  }

  async monitorServices() {
    this.log('🔍 Monitoring error prevention services...');
    
    try {
      const status = execSync('pm2 status', { encoding: 'utf8' });
      const processes = this.parsePM2Status(status);
      
      for (const process of processes) {
        const serviceName = process.name;
        this.monitoringData.services[serviceName] = {
          status: process.status,
          uptime: process.uptime,
          memory: process.memory,
          cpu: process.cpu,
          restarts: process.restarts,
          lastCheck: new Date().toISOString()
        };

        if (process.status === 'online') {
          this.monitoringData.metrics.servicesOnline++;
        } else {
          this.monitoringData.metrics.servicesOffline++;
          this.monitoringData.alerts.push({
            type: 'service_offline',
            service: serviceName,
            status: process.status,
            timestamp: new Date().toISOString()
          });
        }

        if (process.restarts > 5) {
          this.monitoringData.alerts.push({
            type: 'frequent_restarts',
            service: serviceName,
            restarts: process.restarts,
            timestamp: new Date().toISOString()
          });
        }
      }
      
      this.log(`✅ Service monitoring completed. Online: ${this.monitoringData.metrics.servicesOnline}, Offline: ${this.monitoringData.metrics.servicesOffline}`);
    } catch (error) {
      this.log(`❌ Service monitoring failed: ${error.message}`);
      this.monitoringData.alerts.push({
        type: 'monitoring_failure',
        error: error.message,
        timestamp: new Date().toISOString()
      });
    }
  }

  parsePM2Status(statusOutput) {
    const processes = [];
    const lines = statusOutput.split('\n');
    
    // Skip header lines
    let startIndex = 0;
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].includes('id') && lines[i].includes('name')) {
        startIndex = i + 1;
        break;
      }
    }
    
    for (let i = startIndex; i < lines.length; i++) {
      const line = lines[i].trim();
      if (line && !line.includes('─') && !line.includes('Use')) {
        const parts = line.split(/\s+/);
        if (parts.length >= 6) {
          processes.push({
            name: parts[1],
            status: parts[2],
            uptime: parts[3],
            memory: parts[4],
            cpu: parts[5],
            restarts: parts[6] || 0
          });
        }
      }
    }
    
    return processes;
  }

  async monitorErrorLogs() {
    this.log('🔍 Monitoring error logs...');
    
    const logFiles = [
      './logs/enhanced-error-prevention-orchestrator-error.log',
      './logs/syntax-error-fixer-error.log',
      './logs/typescript-error-fixer-error.log',
      './logs/linting-error-fixer-error.log',
      './logs/build-error-fixer-error.log',
      './logs/dependency-error-fixer-error.log'
    ];

    for (const logFile of logFiles) {
      if (fs.existsSync(logFile)) {
        try {
          const content = fs.readFileSync(logFile, 'utf8');
          const lines = content.split('\n');
          const errorLines = lines.filter(line => 
            line.includes('ERROR') || 
            line.includes('Error') || 
            line.includes('error') ||
            line.includes('Failed') ||
            line.includes('failed')
          );

          if (errorLines.length > 0) {
            this.monitoringData.metrics.totalErrors += errorLines.length;
            
            if (errorLines.length > 10) {
              this.monitoringData.alerts.push({
                type: 'excessive_errors',
                logFile: path.basename(logFile),
                errorCount: errorLines.length,
                timestamp: new Date().toISOString()
              });
            }
          }
        } catch (error) {
          this.log(`⚠️ Could not read log file ${logFile}: ${error.message}`);
        }
      }
    }
  }

  async monitorProjectHealth() {
    this.log('🔍 Monitoring project health...');
    
    try {
      // Check for syntax errors
      const lintResult = execSync('npm run lint 2>&1', { encoding: 'utf8' });
      const errorCount = (lintResult.match(/error/g) || []).length;
      
      if (errorCount > 0) {
        this.monitoringData.metrics.totalErrors += errorCount;
        
        if (errorCount > 100) {
          this.monitoringData.alerts.push({
            type: 'excessive_linting_errors',
            errorCount: errorCount,
            timestamp: new Date().toISOString()
          });
        }
      }

      // Check TypeScript errors
      try {
        const tsResult = execSync('npx tsc --noEmit 2>&1', { encoding: 'utf8' });
        const tsErrorCount = (tsResult.match(/error TS/g) || []).length;
        
        if (tsErrorCount > 0) {
          this.monitoringData.metrics.totalErrors += tsErrorCount;
          
          if (tsErrorCount > 50) {
            this.monitoringData.alerts.push({
              type: 'excessive_typescript_errors',
              errorCount: tsErrorCount,
              timestamp: new Date().toISOString()
            });
          }
        }
      } catch (tsError) {
        const tsErrorCount = (tsError.stdout?.match(/error TS/g) || []).length;
        if (tsErrorCount > 0) {
          this.monitoringData.metrics.totalErrors += tsErrorCount;
        }
      }

    } catch (error) {
      this.log(`❌ Project health monitoring failed: ${error.message}`);
      this.monitoringData.alerts.push({
        type: 'health_monitoring_failure',
        error: error.message,
        timestamp: new Date().toISOString()
      });
    }
  }

  async checkAlertThresholds() {
    this.log('🔍 Checking alert thresholds...');
    
    const config = {
      maxErrors: parseInt(process.env.ALERT_THRESHOLD) || 50,
      maxOfflineServices: 2,
      maxRestarts: 5
    };

    if (this.monitoringData.metrics.totalErrors > config.maxErrors) {
      this.monitoringData.alerts.push({
        type: 'error_threshold_exceeded',
        current: this.monitoringData.metrics.totalErrors,
        threshold: config.maxErrors,
        timestamp: new Date().toISOString()
      });
    }

    if (this.monitoringData.metrics.servicesOffline > config.maxOfflineServices) {
      this.monitoringData.alerts.push({
        type: 'too_many_offline_services',
        current: this.monitoringData.metrics.servicesOffline,
        threshold: config.maxOfflineServices,
        timestamp: new Date().toISOString()
      });
    }
  }

  async generateMonitoringReport() {
    this.log('📊 Generating monitoring report...');
    
    const report = {
      ...this.monitoringData,
      generatedAt: new Date().toISOString(),
      summary: {
        totalServices: Object.keys(this.monitoringData.services).length,
        onlineServices: this.monitoringData.metrics.servicesOnline,
        offlineServices: this.monitoringData.metrics.servicesOffline,
        totalErrors: this.monitoringData.metrics.totalErrors,
        totalWarnings: this.monitoringData.metrics.totalWarnings,
        alerts: this.monitoringData.alerts.length
      }
    };

    const reportFile = path.join(this.reportsDir, 'error-prevention-monitoring-report.json');
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    
    this.log(`📊 Monitoring report generated: ${reportFile}`);
    
    // Also generate a human-readable summary
    const summaryFile = path.join(this.reportsDir, 'error-prevention-monitoring-summary.txt');
    const summary = this.generateHumanReadableSummary(report);
    fs.writeFileSync(summaryFile, summary);
    
    this.log(`📊 Monitoring summary generated: ${summaryFile}`);
  }

  generateHumanReadableSummary(report) {
    let summary = `Error Prevention Monitoring Report - ${new Date().toLocaleString()}\n`;
    summary += '='.repeat(50) + '\n\n';
    
    summary += `Total Services: ${report.summary.totalServices}\n`;
    summary += `Online Services: ${report.summary.onlineServices}\n`;
    summary += `Offline Services: ${report.summary.offlineServices}\n`;
    summary += `Total Errors: ${report.summary.totalErrors}\n`;
    summary += `Total Warnings: ${report.summary.totalWarnings}\n`;
    summary += `Active Alerts: ${report.summary.alerts}\n\n`;
    
    if (report.alerts.length > 0) {
      summary += 'ACTIVE ALERTS:\n';
      summary += '-'.repeat(20) + '\n';
      report.alerts.forEach(alert => {
        summary += `• ${alert.type}: ${JSON.stringify(alert)}\n`;
      });
      summary += '\n';
    }
    
    summary += 'Service Status:\n';
    summary += '-'.repeat(20) + '\n';
    for (const [serviceName, service] of Object.entries(report.services)) {
      summary += `${serviceName}: ${service.status} (${service.memory} | ${service.cpu}%)\n`;
    }
    
    return summary;
  }

  async run() {
    this.log('🚀 Starting Error Prevention Monitor...');
    
    try {
      await this.monitorServices();
      await this.monitorErrorLogs();
      await this.monitorProjectHealth();
      await this.checkAlertThresholds();
      await this.generateMonitoringReport();
      
      this.log(`🎉 Error Prevention Monitor completed!`);
      this.log(`Services Online: ${this.monitoringData.metrics.servicesOnline}`);
      this.log(`Services Offline: ${this.monitoringData.metrics.servicesOffline}`);
      this.log(`Total Errors: ${this.monitoringData.metrics.totalErrors}`);
      this.log(`Active Alerts: ${this.monitoringData.alerts.length}`);
      
    } catch (error) {
      this.log(`❌ Error Prevention Monitor failed: ${error.message}`);
      throw error;
    }
  }

  async runContinuousMode(interval = 180000) { // Default: 3 minutes
    this.log(`🚀 Starting Continuous Error Prevention Monitor (interval: ${interval}ms)...`);
    
    const runCycle = async () => {
      try {
        this.log('Running monitoring cycle...');
        await this.run();
        this.log(`Cycle completed. Next run in ${interval / 1000} seconds.`);
      } catch (error) {
        this.log(`Cycle failed: ${error.message}`);
      }
    };
    
    // Run immediately
    await runCycle();
    
    // Set up continuous execution
    setInterval(runCycle, interval);
    
    this.log('Continuous mode started. Press Ctrl+C to stop.');
  }
}

// CLI interface
if (require.main === module) {
  const monitor = new ErrorPreventionMonitor();
  
  const command = process.argv[2] || 'run';
  
  switch (command) {
    case 'run':
      monitor.run().catch(console.error);
      break;
    case 'monitor':
      const interval = parseInt(process.argv[3]) || 180000;
      monitor.runContinuousMode(interval).catch(console.error);
      break;
    case 'status':
      monitor.monitorServices().then(() => {
        console.log(JSON.stringify(monitor.monitoringData.services, null, 2));
      }).catch(console.error);
      break;
    default:
      console.log('Usage: node error-prevention-monitor.cjs [run|monitor|status]');
      process.exit(1);
  }
}

module.exports = ErrorPreventionMonitor;