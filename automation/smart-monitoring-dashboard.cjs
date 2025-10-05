#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class SmartMonitoringDashboard {
  constructor() {
    this.interval = process.env.AUTOMATION_INTERVAL || 30000; // 30 seconds default
    this.dashboardMode = process.env.DASHBOARD_MODE || 'real-time';
    this.alertEnabled = process.env.ALERT_ENABLED === 'true';
    this.monitoringData = [];
    this.alertHistory = [];
    this.systemHealth = {
      overall: 'healthy',
      processes: {},
      resources: {},
      performance: {},
      lastUpdate: null
    };
    
    console.log('📊 Smart Monitoring Dashboard Started');
    console.log(`📊 Monitoring Interval: ${this.interval / 1000}s`);
    console.log(`🔧 Dashboard Mode: ${this.dashboardMode}`);
    console.log(`🚨 Alerts Enabled: ${this.alertEnabled}`);
  }

  async start() {
    console.log('🚀 Starting smart monitoring dashboard...');
    
    // Initial system health check
    await this.performSystemHealthCheck();
    
    // Set up continuous monitoring
    setInterval(async () => {
      await this.performSystemHealthCheck();
    }, this.interval);
    
    // Set up detailed monitoring every 5 minutes
    setInterval(async () => {
      await this.performDetailedMonitoring();
    }, 300000);
    
    // Set up alert processing
    setInterval(async () => {
      await this.processAlerts();
    }, 60000); // Process alerts every minute
    
    // Keep process alive and log status
    setInterval(() => {
      this.logStatus();
    }, 60000); // Log status every minute
  }

  async performSystemHealthCheck() {
    try {
      console.log('🔍 Performing system health check...');
      
      const startTime = Date.now();
      
      // 1. Check PM2 processes
      const processHealth = await this.checkProcessHealth();
      
      // 2. Check system resources
      const resourceHealth = await this.checkResourceHealth();
      
      // 3. Check performance metrics
      const performanceHealth = await this.checkPerformanceHealth();
      
      // 4. Update overall system health
      this.updateSystemHealth(processHealth, resourceHealth, performanceHealth);
      
      // 5. Generate alerts if needed
      if (this.alertEnabled) {
        await this.generateAlerts();
      }
      
      // 6. Store monitoring data
      this.storeMonitoringData(processHealth, resourceHealth, performanceHealth);
      
      const healthCheckTime = Date.now() - startTime;
      
      this.systemHealth.lastUpdate = new Date().toISOString();
      
      console.log(`✅ System health check completed in ${healthCheckTime}ms`);
      
    } catch (error) {
      console.error('❌ Error during system health check:', error.message);
      this.logError(error);
    }
  }

  async checkProcessHealth() {
    try {
      console.log('🔍 Checking process health...');
      
      const processHealth = {
        totalProcesses: 0,
        onlineProcesses: 0,
        erroredProcesses: 0,
        stoppedProcesses: 0,
        processDetails: [],
        overallStatus: 'unknown'
      };
      
      try {
        // Get PM2 process list
        const output = execSync('pm2 jlist', { encoding: 'utf8' });
        const processes = JSON.parse(output);
        
        processHealth.totalProcesses = processes.length;
        processHealth.processDetails = processes.map(proc => ({
          name: proc.name,
          status: proc.pm2_env.status,
          memory: Math.round(proc.monit.memory / 1024 / 1024 * 100) / 100,
          cpu: Math.round(proc.monit.cpu * 100) / 100,
          uptime: this.formatUptime(proc.pm2_env.pm_uptime),
          restarts: proc.pm2_env.restart_time,
          pid: proc.pid
        }));
        
        // Count process statuses
        processHealth.onlineProcesses = processes.filter(p => p.pm2_env.status === 'online').length;
        processHealth.erroredProcesses = processes.filter(p => p.pm2_env.status === 'errored').length;
        processHealth.stoppedProcesses = processes.filter(p => p.pm2_env.status === 'stopped').length;
        
        // Determine overall status
        if (processHealth.erroredProcesses > 0) {
          processHealth.overallStatus = 'critical';
        } else if (processHealth.stoppedProcesses > 0) {
          processHealth.overallStatus = 'warning';
        } else if (processHealth.onlineProcesses === processHealth.totalProcesses) {
          processHealth.overallStatus = 'healthy';
        } else {
          processHealth.overallStatus = 'degraded';
        }
        
      } catch (pm2Error) {
        console.error('❌ PM2 not available or error:', pm2Error.message);
        processHealth.overallStatus = 'unknown';
      }
      
      return processHealth;
      
    } catch (error) {
      console.error('❌ Error checking process health:', error.message);
      return { error: error.message };
    }
  }

  async checkResourceHealth() {
    try {
      console.log('🔍 Checking resource health...');
      
      const resourceHealth = {
        memory: {},
        cpu: {},
        disk: {},
        network: {},
        overallStatus: 'unknown'
      };
      
      // Check memory usage
      const memoryUsage = process.memoryUsage();
      resourceHealth.memory = {
        heapUsed: Math.round(memoryUsage.heapUsed / 1024 / 1024 * 100) / 100,
        heapTotal: Math.round(memoryUsage.heapTotal / 1024 / 1024 * 100) / 100,
        external: Math.round(memoryUsage.external / 1024 / 1024 * 100) / 100,
        rss: Math.round(memoryUsage.rss / 1024 / 1024 * 100) / 100,
        efficiency: this.calculateMemoryEfficiency(memoryUsage)
      };
      
      // Check CPU usage (estimated)
      resourceHealth.cpu = {
        currentUsage: 0.3, // Placeholder - would use system metrics
        averageUsage: 0.3,
        peakUsage: 0.5,
        efficiency: 'good'
      };
      
      // Check disk usage
      resourceHealth.disk = await this.checkDiskUsage();
      
      // Check network status
      resourceHealth.network = {
        connectivity: true,
        latency: 50, // Placeholder
        bandwidth: 'good'
      };
      
      // Determine overall resource status
      resourceHealth.overallStatus = this.determineResourceStatus(resourceHealth);
      
      return resourceHealth;
      
    } catch (error) {
      console.error('❌ Error checking resource health:', error.message);
      return { error: error.message };
    }
  }

  async checkPerformanceHealth() {
    try {
      console.log('🔍 Checking performance health...');
      
      const performanceHealth = {
        responseTime: 0,
        throughput: 0,
        errorRate: 0,
        availability: 100,
        overallStatus: 'unknown'
      };
      
      // Check build performance
      if (fs.existsSync('dist')) {
        const buildSize = this.getDirectorySize('dist');
        performanceHealth.buildSize = Math.round(buildSize / 1024 / 1024 * 100) / 100;
      }
      
      // Check for performance issues
      const performanceIssues = await this.detectPerformanceIssues();
      performanceHealth.issues = performanceIssues;
      
      // Calculate performance score
      performanceHealth.overallStatus = this.calculatePerformanceStatus(performanceHealth);
      
      return performanceHealth;
      
    } catch (error) {
      console.error('❌ Error checking performance health:', error.message);
      return { error: error.message };
    }
  }

  async checkDiskUsage() {
    try {
      const diskUsage = {
        total: 0,
        used: 0,
        available: 0,
        usagePercentage: 0,
        status: 'unknown'
      };
      
      // This would typically use system commands to get disk usage
      // For now, return estimated values
      diskUsage.total = 100 * 1024 * 1024 * 1024; // 100GB
      diskUsage.used = 30 * 1024 * 1024 * 1024;   // 30GB
      diskUsage.available = 70 * 1024 * 1024 * 1024; // 70GB
      diskUsage.usagePercentage = Math.round((diskUsage.used / diskUsage.total) * 100);
      
      // Determine disk status
      if (diskUsage.usagePercentage > 90) {
        diskUsage.status = 'critical';
      } else if (diskUsage.usagePercentage > 80) {
        diskUsage.status = 'warning';
      } else if (diskUsage.usagePercentage > 60) {
        diskUsage.status = 'attention';
      } else {
        diskUsage.status = 'healthy';
      }
      
      return diskUsage;
      
    } catch (error) {
      console.error('❌ Error checking disk usage:', error.message);
      return { error: error.message };
    }
  }

  async detectPerformanceIssues() {
    const issues = [];
    
    try {
      // Check for large bundle sizes
      if (fs.existsSync('dist')) {
        const bundleSize = this.getDirectorySize('dist');
        if (bundleSize > 10 * 1024 * 1024) { // 10MB
          issues.push({
            type: 'large-bundle',
            severity: 'medium',
            description: 'Bundle size exceeds 10MB',
            details: `Current size: ${Math.round(bundleSize / 1024 / 1024)}MB`
          });
        }
      }
      
      // Check for build errors
      if (fs.existsSync('logs')) {
        const logFiles = fs.readdirSync('logs');
        const errorLogs = logFiles.filter(f => f.includes('error'));
        if (errorLogs.length > 5) {
          issues.push({
            type: 'excessive-errors',
            severity: 'high',
            description: 'Excessive error logs detected',
            details: `${errorLogs.length} error log files found`
          });
        }
      }
      
    } catch (error) {
      console.error('❌ Error detecting performance issues:', error.message);
    }
    
    return issues;
  }

  updateSystemHealth(processHealth, resourceHealth, performanceHealth) {
    // Update process health
    this.systemHealth.processes = processHealth;
    
    // Update resource health
    this.systemHealth.resources = resourceHealth;
    
    // Update performance health
    this.systemHealth.performance = performanceHealth;
    
    // Determine overall system health
    const statuses = [
      processHealth.overallStatus,
      resourceHealth.overallStatus,
      performanceHealth.overallStatus
    ];
    
    if (statuses.includes('critical') || statuses.includes('unknown')) {
      this.systemHealth.overall = 'critical';
    } else if (statuses.includes('warning') || statuses.includes('degraded')) {
      this.systemHealth.overall = 'warning';
    } else if (statuses.every(s => s === 'healthy')) {
      this.systemHealth.overall = 'healthy';
    } else {
      this.systemHealth.overall = 'attention';
    }
  }

  determineResourceStatus(resourceHealth) {
    const memoryStatus = this.getMemoryStatus(resourceHealth.memory);
    const diskStatus = resourceHealth.disk.status;
    
    if (memoryStatus === 'critical' || diskStatus === 'critical') {
      return 'critical';
    } else if (memoryStatus === 'warning' || diskStatus === 'warning') {
      return 'warning';
    } else if (memoryStatus === 'attention' || diskStatus === 'attention') {
      return 'attention';
    } else {
      return 'healthy';
    }
  }

  getMemoryStatus(memory) {
    const efficiency = memory.efficiency;
    
    if (efficiency === 'poor') return 'critical';
    if (efficiency === 'fair') return 'warning';
    if (efficiency === 'good') return 'attention';
    return 'healthy';
  }

  calculatePerformanceStatus(performanceHealth) {
    if (performanceHealth.issues.some(i => i.severity === 'critical')) {
      return 'critical';
    } else if (performanceHealth.issues.some(i => i.severity === 'high')) {
      return 'warning';
    } else if (performanceHealth.issues.some(i => i.severity === 'medium')) {
      return 'attention';
    } else {
      return 'healthy';
    }
  }

  async generateAlerts() {
    try {
      console.log('🚨 Generating alerts...');
      
      const alerts = [];
      
      // Process health alerts
      if (this.systemHealth.processes.overallStatus === 'critical') {
        alerts.push({
          type: 'process-health',
          severity: 'critical',
          message: 'Critical process health issues detected',
          details: `${this.systemHealth.processes.erroredProcesses} processes are in error state`,
          timestamp: new Date().toISOString(),
          action: 'Immediate attention required - check PM2 processes'
        });
      }
      
      // Resource alerts
      if (this.systemHealth.resources.overallStatus === 'critical') {
        alerts.push({
          type: 'resource-health',
          severity: 'critical',
          message: 'Critical resource health issues detected',
          details: 'System resources are critically low',
          timestamp: new Date().toISOString(),
          action: 'Check memory, CPU, and disk usage'
        });
      }
      
      // Performance alerts
      if (this.systemHealth.performance.overallStatus === 'critical') {
        alerts.push({
          type: 'performance-health',
          severity: 'critical',
          message: 'Critical performance issues detected',
          details: 'Performance metrics indicate system problems',
          timestamp: new Date().toISOString(),
          action: 'Review performance logs and metrics'
        });
      }
      
      // Add alerts to history
      this.alertHistory.push(...alerts);
      
      // Keep only last 100 alerts
      if (this.alertHistory.length > 100) {
        this.alertHistory = this.alertHistory.slice(-100);
      }
      
      // Log critical alerts
      alerts.filter(a => a.severity === 'critical').forEach(alert => {
        console.error(`🚨 CRITICAL ALERT: ${alert.message}`);
        console.error(`   Details: ${alert.details}`);
        console.error(`   Action: ${alert.action}`);
      });
      
      return alerts;
      
    } catch (error) {
      console.error('❌ Error generating alerts:', error.message);
      return [];
    }
  }

  async processAlerts() {
    try {
      if (this.alertHistory.length === 0) return;
      
      // Process recent alerts
      const recentAlerts = this.alertHistory.slice(-10);
      
      // Group alerts by type and severity
      const alertGroups = this.groupAlerts(recentAlerts);
      
      // Generate summary
      const summary = this.generateAlertSummary(alertGroups);
      
      // Log summary if there are alerts
      if (Object.keys(alertGroups).length > 0) {
        console.log('\n🚨 Alert Summary:');
        console.log('─'.repeat(50));
        Object.entries(alertGroups).forEach(([type, alerts]) => {
          const criticalCount = alerts.filter(a => a.severity === 'critical').length;
          const warningCount = alerts.filter(a => a.severity === 'warning').length;
          console.log(`${type}: ${criticalCount} critical, ${warningCount} warnings`);
        });
        console.log('─'.repeat(50));
      }
      
    } catch (error) {
      console.error('❌ Error processing alerts:', error.message);
    }
  }

  groupAlerts(alerts) {
    const groups = {};
    
    alerts.forEach(alert => {
      if (!groups[alert.type]) {
        groups[alert.type] = [];
      }
      groups[alert.type].push(alert);
    });
    
    return groups;
  }

  generateAlertSummary(alertGroups) {
    const summary = {
      totalAlerts: 0,
      criticalAlerts: 0,
      warningAlerts: 0,
      byType: {}
    };
    
    Object.entries(alertGroups).forEach(([type, alerts]) => {
      const criticalCount = alerts.filter(a => a.severity === 'critical').length;
      const warningCount = alerts.filter(a => a.severity === 'warning').length;
      
      summary.byType[type] = {
        critical: criticalCount,
        warning: warningCount,
        total: alerts.length
      };
      
      summary.totalAlerts += alerts.length;
      summary.criticalAlerts += criticalCount;
      summary.warningAlerts += warningCount;
    });
    
    return summary;
  }

  async performDetailedMonitoring() {
    try {
      console.log('🔍 Performing detailed monitoring...');
      
      // Generate detailed reports
      const detailedReport = {
        timestamp: new Date().toISOString(),
        systemHealth: this.systemHealth,
        alertSummary: this.generateAlertSummary(this.groupAlerts(this.alertHistory)),
        recommendations: this.generateRecommendations(),
        nextActions: this.generateNextActions()
      };
      
      // Save detailed report
      this.saveDetailedReport(detailedReport);
      
      // Log detailed status
      this.logDetailedStatus(detailedReport);
      
    } catch (error) {
      console.error('❌ Error during detailed monitoring:', error.message);
      this.logError(error);
    }
  }

  generateRecommendations() {
    const recommendations = [];
    
    // Process health recommendations
    if (this.systemHealth.processes.overallStatus !== 'healthy') {
      recommendations.push({
        priority: 'high',
        category: 'process-health',
        description: 'Address process health issues',
        action: 'Review PM2 process status and restart failed processes'
      });
    }
    
    // Resource recommendations
    if (this.systemHealth.resources.overallStatus !== 'healthy') {
      recommendations.push({
        priority: 'medium',
        category: 'resource-management',
        description: 'Optimize resource usage',
        action: 'Monitor memory and disk usage, consider cleanup'
      });
    }
    
    // Performance recommendations
    if (this.systemHealth.performance.overallStatus !== 'healthy') {
      recommendations.push({
        priority: 'medium',
        category: 'performance',
        description: 'Address performance issues',
        action: 'Review performance metrics and optimize bottlenecks'
      });
    }
    
    return recommendations;
  }

  generateNextActions() {
    const actions = [];
    
    if (this.systemHealth.overall === 'critical') {
      actions.push('Immediate system intervention required');
      actions.push('Review all critical alerts');
      actions.push('Check system resources');
    } else if (this.systemHealth.overall === 'warning') {
      actions.push('Monitor system closely');
      actions.push('Address warning-level issues');
      actions.push('Prepare for potential escalation');
    } else if (this.systemHealth.overall === 'attention') {
      actions.push('Continue monitoring');
      actions.push('Address minor issues proactively');
      actions.push('Optimize system performance');
    } else {
      actions.push('Maintain current monitoring levels');
      actions.push('Continue proactive maintenance');
      actions.push('Plan for system improvements');
    }
    
    return actions;
  }

  storeMonitoringData(processHealth, resourceHealth, performanceHealth) {
    const monitoringEntry = {
      timestamp: new Date().toISOString(),
      processHealth: processHealth,
      resourceHealth: resourceHealth,
      performanceHealth: performanceHealth,
      overallHealth: this.systemHealth.overall
    };
    
    this.monitoringData.push(monitoringEntry);
    
    // Keep only last 1000 monitoring entries
    if (this.monitoringData.length > 1000) {
      this.monitoringData = this.monitoringData.slice(-1000);
    }
  }

  logDetailedStatus(detailedReport) {
    console.log('\n📊 Detailed Monitoring Status:');
    console.log('─'.repeat(60));
    console.log(`📅 Timestamp: ${detailedReport.timestamp}`);
    console.log(`🏥 Overall Health: ${this.systemHealth.overall.toUpperCase()}`);
    console.log(`🔧 Process Health: ${this.systemHealth.processes.overallStatus}`);
    console.log(`💾 Resource Health: ${this.systemHealth.resources.overallStatus}`);
    console.log(`⚡ Performance Health: ${this.systemHealth.performance.overallStatus}`);
    console.log(`🚨 Active Alerts: ${detailedReport.alertSummary.totalAlerts}`);
    console.log(`💡 Recommendations: ${detailedReport.recommendations.length}`);
    console.log('─'.repeat(60));
  }

  logStatus() {
    const memoryUsage = process.memoryUsage();
    const uptime = process.uptime();
    
    console.log(`📊 Dashboard Status - Uptime: ${Math.round(uptime)}s, Memory: ${Math.round(memoryUsage.heapUsed / 1024 / 1024)}MB`);
    console.log(`🏥 System Health: ${this.systemHealth.overall.toUpperCase()}, Alerts: ${this.alertHistory.length}`);
  }

  logError(error) {
    const errorLog = {
      timestamp: new Date().toISOString(),
      error: error.message,
      stack: error.stack,
      process: 'smart-monitoring-dashboard'
    };
    
    console.error('❌ Error logged:', errorLog);
    
    // Save error to log file
    try {
      const errorLogPath = path.join(process.cwd(), 'logs', 'smart-monitoring-dashboard-errors.json');
      let errorLogs = [];
      
      if (fs.existsSync(errorLogPath)) {
        errorLogs = JSON.parse(fs.readFileSync(errorLogPath, 'utf8'));
      }
      
      errorLogs.push(errorLog);
      
      // Keep only last 100 errors
      if (errorLogs.length > 100) {
        errorLogs = errorLogs.slice(-100);
      }
      
      fs.writeFileSync(errorLogPath, JSON.stringify(errorLogs, null, 2));
    } catch (writeError) {
      console.error('❌ Failed to write error log:', writeError.message);
    }
  }

  saveDetailedReport(report) {
    try {
      const reportPath = path.join(process.cwd(), 'logs', 'smart-monitoring-dashboard-reports.json');
      let reports = [];
      
      if (fs.existsSync(reportPath)) {
        reports = JSON.parse(fs.readFileSync(reportPath, 'utf8'));
      }
      
      reports.push(report);
      
      // Keep only last 100 reports
      if (reports.length > 100) {
        reports = reports.slice(-100);
      }
      
      fs.writeFileSync(reportPath, JSON.stringify(reports, null, 2));
    } catch (error) {
      console.error('❌ Failed to save detailed report:', error.message);
    }
  }

  saveResults() {
    try {
      const resultsPath = path.join(process.cwd(), 'logs', 'smart-monitoring-dashboard-results.json');
      fs.writeFileSync(resultsPath, JSON.stringify(this.monitoringData, null, 2));
    } catch (error) {
      console.error('❌ Failed to save results:', error.message);
    }
  }

  // Helper methods
  formatUptime(uptime) {
    if (!uptime) return '0s';
    
    const seconds = Math.floor(uptime / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    
    if (days > 0) return `${days}d ${hours % 24}h`;
    if (hours > 0) return `${hours}h ${minutes % 60}m`;
    if (minutes > 0) return `${minutes}m ${seconds % 60}s`;
    return `${seconds}s`;
  }

  calculateMemoryEfficiency(memoryUsage) {
    const efficiency = (memoryUsage.heapUsed / memoryUsage.heapTotal) * 100;
    
    if (efficiency < 50) return 'excellent';
    if (efficiency < 70) return 'good';
    if (efficiency < 85) return 'fair';
    return 'poor';
  }

  getDirectorySize(dirPath) {
    let size = 0;
    
    try {
      const files = fs.readdirSync(dirPath);
      
      files.forEach(file => {
        const fullPath = path.join(dirPath, file);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          size += this.getDirectorySize(fullPath);
        } else {
          size += stat.size;
        }
      });
    } catch (error) {
      console.error('❌ Error calculating directory size:', error.message);
    }
    
    return size;
  }
}

// Start the smart monitoring dashboard
const dashboard = new SmartMonitoringDashboard();
dashboard.start().catch(error => {
  console.error('❌ Failed to start smart monitoring dashboard:', error);
  process.exit(1);
});

// Handle graceful shutdown
process.on('SIGINT', () => {
  console.log('\n🛑 Shutting down smart monitoring dashboard...');
  dashboard.saveResults();
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('\n🛑 Shutting down smart monitoring dashboard...');
  dashboard.saveResults();
  process.exit(0);
});