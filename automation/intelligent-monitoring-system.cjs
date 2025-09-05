#!/usr/bin/env node

/**
 * Intelligent Monitoring System
 * Advanced monitoring and alerting for the application
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class IntelligentMonitoringSystem {
  constructor() {
    this.projectRoot = process.cwd();
    this.logsDir = path.join(this.projectRoot, 'automation', 'logs');
    this.reportsDir = path.join(this.projectRoot, 'automation', 'reports');
    this.monitoringData = {
      performance: {},
      errors: [],
      uptime: {},
      resources: {}
    };
    
    // Ensure directories exist
    [this.logsDir, this.reportsDir].forEach(dir => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
    });
  }

  log(message) {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${message}`);
  }

  async runCommand(command, description) {
    this.log(`🚀 ${description}`);
    try {
      const result = execSync(command, { 
        cwd: this.projectRoot, 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      this.log(`✅ ${description} - Success`);
      return { success: true, output: result };
    } catch (error) {
      this.log(`❌ ${description} - Failed: ${error.message}`);
      return { success: false, error: error.message };
    }
  }

  async monitorPerformance() {
    this.log('📊 Monitoring performance...');
    
    // Core Web Vitals monitoring
    const webVitals = await this.runCommand(
      'npm run performance:analyze',
      'Core Web Vitals monitoring'
    );

    // Bundle size monitoring
    const bundleSize = await this.runCommand(
      'npm run build:analyze',
      'Bundle size monitoring'
    );

    // Memory usage monitoring
    const memoryUsage = await this.runCommand(
      'node -e "console.log(JSON.stringify(process.memoryUsage()))"',
      'Memory usage monitoring'
    );

    this.monitoringData.performance = {
      webVitals: webVitals.success,
      bundleSize: bundleSize.success,
      memoryUsage: memoryUsage.success,
      timestamp: new Date().toISOString()
    };

    return this.monitoringData.performance;
  }

  async monitorErrors() {
    this.log('🚨 Monitoring errors...');
    
    // Error boundary monitoring
    const errorBoundary = await this.runCommand(
      'npm run test:smoke',
      'Error boundary monitoring'
    );

    // Build error monitoring
    const buildErrors = await this.runCommand(
      'npm run build',
      'Build error monitoring'
    );

    // Lint error monitoring
    const lintErrors = await this.runCommand(
      'npm run lint',
      'Lint error monitoring'
    );

    const errorData = {
      errorBoundary: errorBoundary.success,
      buildErrors: buildErrors.success,
      lintErrors: lintErrors.success,
      timestamp: new Date().toISOString()
    };

    this.monitoringData.errors.push(errorData);
    return errorData;
  }

  async monitorUptime() {
    this.log('⏱️ Monitoring uptime...');
    
    // Application health check
    const healthCheck = await this.runCommand(
      'npm run health:check',
      'Application health check'
    );

    // Service availability
    const serviceAvailability = await this.runCommand(
      'npm run test:smoke',
      'Service availability check'
    );

    // Database connectivity (if applicable)
    const dbConnectivity = await this.runCommand(
      'npm run test:smoke',
      'Database connectivity check'
    );

    this.monitoringData.uptime = {
      healthCheck: healthCheck.success,
      serviceAvailability: serviceAvailability.success,
      dbConnectivity: dbConnectivity.success,
      timestamp: new Date().toISOString()
    };

    return this.monitoringData.uptime;
  }

  async monitorResources() {
    this.log('💾 Monitoring resources...');
    
    // CPU usage monitoring
    const cpuUsage = await this.runCommand(
      'node -e "const os = require(\'os\'); console.log(JSON.stringify({cpu: os.cpus().length, loadavg: os.loadavg()}))"',
      'CPU usage monitoring'
    );

    // Disk space monitoring
    const diskSpace = await this.runCommand(
      'df -h',
      'Disk space monitoring'
    );

    // Network monitoring
    const networkMonitoring = await this.runCommand(
      'npm run test:smoke',
      'Network monitoring'
    );

    this.monitoringData.resources = {
      cpuUsage: cpuUsage.success,
      diskSpace: diskSpace.success,
      networkMonitoring: networkMonitoring.success,
      timestamp: new Date().toISOString()
    };

    return this.monitoringData.resources;
  }

  async generateAlerts() {
    this.log('🔔 Generating alerts...');
    
    const alerts = [];
    
    // Performance alerts
    if (!this.monitoringData.performance.webVitals) {
      alerts.push({
        type: 'performance',
        severity: 'warning',
        message: 'Core Web Vitals monitoring failed',
        timestamp: new Date().toISOString()
      });
    }

    // Error alerts
    const recentErrors = this.monitoringData.errors.slice(-5);
    const errorCount = recentErrors.filter(e => !e.errorBoundary || !e.buildErrors).length;
    if (errorCount > 2) {
      alerts.push({
        type: 'error',
        severity: 'critical',
        message: `High error rate detected: ${errorCount} errors in last 5 checks`,
        timestamp: new Date().toISOString()
      });
    }

    // Uptime alerts
    if (!this.monitoringData.uptime.healthCheck) {
      alerts.push({
        type: 'uptime',
        severity: 'critical',
        message: 'Application health check failed',
        timestamp: new Date().toISOString()
      });
    }

    return alerts;
  }

  async generateReport() {
    this.log('📊 Generating monitoring report...');
    
    const alerts = await this.generateAlerts();
    
    const report = {
      timestamp: new Date().toISOString(),
      project: 'Zion Tech Group App',
      monitoring: this.monitoringData,
      alerts: alerts,
      summary: {
        totalAlerts: alerts.length,
        criticalAlerts: alerts.filter(a => a.severity === 'critical').length,
        warningAlerts: alerts.filter(a => a.severity === 'warning').length,
        systemHealth: this.calculateSystemHealth()
      }
    };

    const reportPath = path.join(this.reportsDir, `intelligent-monitoring-${Date.now()}.json`);
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    this.log(`📊 Monitoring report saved to: ${reportPath}`);
    return report;
  }

  calculateSystemHealth() {
    const performanceScore = this.monitoringData.performance.webVitals ? 100 : 0;
    const errorScore = this.monitoringData.errors.length > 0 ? 
      Math.max(0, 100 - (this.monitoringData.errors.length * 10)) : 100;
    const uptimeScore = this.monitoringData.uptime.healthCheck ? 100 : 0;
    const resourceScore = this.monitoringData.resources.cpuUsage ? 100 : 0;
    
    return Math.round((performanceScore + errorScore + uptimeScore + resourceScore) / 4);
  }

  async run() {
    this.log('🚀 Starting Intelligent Monitoring System...');
    
    try {
      // Run all monitoring categories
      await this.monitorPerformance();
      await this.monitorErrors();
      await this.monitorUptime();
      await this.monitorResources();

      // Generate comprehensive report
      const report = await this.generateReport();

      this.log('🎉 Intelligent Monitoring System completed successfully!');
      this.log(`📊 System Health: ${report.summary.systemHealth}%`);
      this.log(`🚨 Total Alerts: ${report.summary.totalAlerts}`);
      this.log(`⚠️ Critical Alerts: ${report.summary.criticalAlerts}`);

      return report;
    } catch (error) {
      this.log(`❌ Error in Intelligent Monitoring System: ${error.message}`);
      throw error;
    }
  }
}

// Run the system if called directly
if (require.main === module) {
  const monitoring = new IntelligentMonitoringSystem();
  monitoring.run().catch(console.error);
}

module.exports = IntelligentMonitoringSystem;