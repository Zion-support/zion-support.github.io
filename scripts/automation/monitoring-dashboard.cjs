#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

class MonitoringDashboard {
  constructor() {
    this.interval = process.env.AUTOMATION_INTERVAL || 30000; // 30 seconds
    this.logLevel = process.env.LOG_LEVEL || 'info';
    this.workingDir = process.cwd();
    this.dashboardData = {};
    this.systemMetrics = {};
    this.processStatus = {};
    this.alertHistory = [];
    this.maxAlerts = 50;
  }

  log(message, level = 'info') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level.toUpperCase()}] ${message}`;
    
    if (level === 'error') {
      console.error(logMessage);
    } else if (level === 'warn') {
      console.warn(logMessage);
    } else {
      console.log(logMessage);
    }
  }

  async collectSystemMetrics() {
    try {
      this.log('📊 Collecting system metrics...', 'info');
      
      const metrics = {
        memory: await this.getMemoryUsage(),
        cpu: await this.getCpuUsage(),
        disk: await this.getDiskUsage(),
        network: await this.getNetworkStats(),
        processes: await this.getProcessStats(),
        timestamp: new Date().toISOString()
      };

      this.systemMetrics = metrics;
      return metrics;
    } catch (error) {
      this.log(`System metrics collection failed: ${error.message}`, 'error');
      return null;
    }
  }

  async getMemoryUsage() {
    try {
      const usage = process.memoryUsage();
      
      return {
        rss: usage.rss,
        heapUsed: usage.heapUsed,
        heapTotal: usage.heapTotal,
        external: usage.external,
        arrayBuffers: usage.arrayBuffers,
        rssMB: Math.round(usage.rss / 1024 / 1024 * 100) / 100,
        heapUsedMB: Math.round(usage.heapUsed / 1024 / 1024 * 100) / 100,
        heapTotalMB: Math.round(usage.heapTotal / 1024 / 1024 * 100) / 100,
        usagePercent: Math.round((usage.heapUsed / usage.heapTotal) * 100)
      };
    } catch (error) {
      return { error: error.message };
    }
  }

  async getCpuUsage() {
    try {
      const startUsage = process.cpuUsage();
      
      // Wait a bit to measure CPU usage
      await new Promise(resolve => setTimeout(resolve, 100));
      
      const endUsage = process.cpuUsage(startUsage);
      const cpuUsage = (endUsage.user + endUsage.system) / 1000000; // Convert to seconds
      
      return {
        cpuUsage,
        cpuUsagePercent: Math.round(cpuUsage * 100),
        userTime: endUsage.user / 1000000,
        systemTime: endUsage.system / 1000000,
        status: cpuUsage < 0.1 ? 'low' : cpuUsage < 0.5 ? 'moderate' : 'high'
      };
    } catch (error) {
      return { error: error.message };
    }
  }

  async getDiskUsage() {
    try {
      // This is a simplified disk usage check
      // In production, you might want to use a more sophisticated approach
      const diskUsage = {
        workingDir: this.workingDir,
        nodeModulesSize: 0,
        distSize: 0,
        logsSize: 0,
        totalSize: 0
      };

      // Check node_modules size
      const nodeModulesPath = path.join(this.workingDir, 'node_modules');
      if (fs.existsSync(nodeModulesPath)) {
        try {
          const stats = fs.statSync(nodeModulesPath);
          diskUsage.nodeModulesSize = stats.size;
        } catch (error) {
          // Skip if can't read
        }
      }

      // Check dist size
      const distPath = path.join(this.workingDir, 'dist');
      if (fs.existsSync(distPath)) {
        try {
          const stats = fs.statSync(distPath);
          diskUsage.distSize = stats.size;
        } catch (error) {
          // Skip if can't read
        }
      }

      // Check logs size
      const logsPath = path.join(this.workingDir, 'logs');
      if (fs.existsSync(logsPath)) {
        try {
          const stats = fs.statSync(logsPath);
          diskUsage.logsSize = stats.size;
        } catch (error) {
          // Skip if can't read
        }
      }

      diskUsage.totalSize = diskUsage.nodeModulesSize + diskUsage.distSize + diskUsage.logsSize;
      
      // Convert to MB
      diskUsage.nodeModulesSizeMB = Math.round(diskUsage.nodeModulesSize / 1024 / 1024 * 100) / 100;
      diskUsage.distSizeMB = Math.round(diskUsage.distSize / 1024 / 1024 * 100) / 100;
      diskUsage.logsSizeMB = Math.round(diskUsage.logsSize / 1024 / 1024 * 100) / 100;
      diskUsage.totalSizeMB = Math.round(diskUsage.totalSize / 1024 / 1024 * 100) / 100;

      return diskUsage;
    } catch (error) {
      return { error: error.message };
    }
  }

  async getNetworkStats() {
    try {
      // This is a simplified network check
      // In production, you might want to use a more sophisticated approach
      return {
        status: 'monitoring',
        connections: 0,
        bandwidth: 'unknown'
      };
    } catch (error) {
      return { error: error.message };
    }
  }

  async getProcessStats() {
    try {
      const stats = {
        totalProcesses: 0,
        runningProcesses: 0,
        stoppedProcesses: 0,
        errorProcesses: 0,
        memoryUsage: 0,
        cpuUsage: 0
      };

      // Try to get PM2 process list
      try {
        const output = execSync('pm2 jlist', { 
          cwd: this.workingDir, 
          encoding: 'utf8',
          stdio: 'pipe'
        });
        
        const processes = JSON.parse(output);
        stats.totalProcesses = processes.length;
        
        for (const proc of processes) {
          if (proc.pm2_env.status === 'online') {
            stats.runningProcesses++;
          } else if (proc.pm2_env.status === 'stopped') {
            stats.stoppedProcesses++;
          } else if (proc.pm2_env.status === 'errored') {
            stats.errorProcesses++;
          }
          
          stats.memoryUsage += proc.monit.memory || 0;
          stats.cpuUsage += proc.monit.cpu || 0;
        }
        
        // Convert to MB
        stats.memoryUsageMB = Math.round(stats.memoryUsage / 1024 / 1024 * 100) / 100;
        stats.cpuUsagePercent = Math.round(stats.cpuUsage * 100) / 100;
        
      } catch (pm2Error) {
        stats.error = 'PM2 not available';
      }

      return stats;
    } catch (error) {
      return { error: error.message };
    }
  }

  async checkProcessHealth() {
    try {
      this.log('🔍 Checking process health...', 'info');
      
      const health = {
        pm2: await this.checkPM2Health(),
        automation: await this.checkAutomationHealth(),
        system: await this.checkSystemHealth(),
        timestamp: new Date().toISOString()
      };

      this.processStatus = health;
      return health;
    } catch (error) {
      this.log(`Process health check failed: ${error.message}`, 'error');
      return null;
    }
  }

  async checkPM2Health() {
    try {
      const output = execSync('pm2 jlist', { 
        cwd: this.workingDir, 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      
      const processes = JSON.parse(output);
      const automationProcesses = processes.filter(proc => 
        proc.name.includes('automation') || 
        proc.name.includes('dev') || 
        proc.name.includes('testing') ||
        proc.name.includes('security') ||
        proc.name.includes('performance')
      );

      const health = {
        totalProcesses: processes.length,
        automationProcesses: automationProcesses.length,
        online: 0,
        errored: 0,
        stopped: 0,
        status: 'healthy',
        issues: []
      };

      for (const proc of automationProcesses) {
        if (proc.pm2_env.status === 'online') {
          health.online++;
        } else if (proc.pm2_env.status === 'errored') {
          health.errored++;
          health.issues.push(`${proc.name} is in error state`);
        } else if (proc.pm2_env.status === 'stopped') {
          health.stopped++;
          health.issues.push(`${proc.name} is stopped`);
        }
      }

      if (health.errored > 0) {
        health.status = 'critical';
      } else if (health.stopped > 0) {
        health.status = 'warning';
      }

      return health;
    } catch (error) {
      return {
        status: 'error',
        error: error.message,
        issues: ['PM2 not available or not running']
      };
    }
  }

  async checkAutomationHealth() {
    try {
      const logsDir = path.join(this.workingDir, 'logs');
      if (!fs.existsSync(logsDir)) {
        return { status: 'unknown', message: 'No logs directory found' };
      }

      const logFiles = fs.readdirSync(logsDir);
      const automationLogs = logFiles.filter(f => f.includes('automation') || f.includes('report'));
      
      const health = {
        logFiles: automationLogs.length,
        recentReports: 0,
        lastReport: null,
        status: 'healthy',
        issues: []
      };

      // Check for recent reports
      for (const logFile of automationLogs) {
        if (logFile.includes('report')) {
          const filePath = path.join(logsDir, logFile);
          try {
            const stats = fs.statSync(filePath);
            const ageHours = (Date.now() - stats.mtime.getTime()) / (1000 * 60 * 60);
            
            if (ageHours < 24) { // Less than 24 hours old
              health.recentReports++;
            }
            
            if (!health.lastReport || stats.mtime > health.lastReport) {
              health.lastReport = stats.mtime;
            }
          } catch (error) {
            // Skip files that can't be read
          }
        }
      }

      if (health.recentReports === 0) {
        health.status = 'warning';
        health.issues.push('No recent automation reports found');
      }

      return health;
    } catch (error) {
      return {
        status: 'error',
        error: error.message
      };
    }
  }

  async checkSystemHealth() {
    try {
      const health = {
        memory: 'healthy',
        cpu: 'healthy',
        disk: 'healthy',
        status: 'healthy',
        issues: []
      };

      // Check memory health
      if (this.systemMetrics.memory) {
        const mem = this.systemMetrics.memory;
        if (mem.usagePercent > 90) {
          health.memory = 'critical';
          health.issues.push('Memory usage is critical (>90%)');
        } else if (mem.usagePercent > 80) {
          health.memory = 'warning';
          health.issues.push('Memory usage is high (>80%)');
        }
      }

      // Check CPU health
      if (this.systemMetrics.cpu) {
        const cpu = this.systemMetrics.cpu;
        if (cpu.cpuUsagePercent > 80) {
          health.cpu = 'critical';
          health.issues.push('CPU usage is critical (>80%)');
        } else if (cpu.cpuUsagePercent > 60) {
          health.cpu = 'warning';
          health.issues.push('CPU usage is high (>60%)');
        }
      }

      // Check disk health
      if (this.systemMetrics.disk) {
        const disk = this.systemMetrics.disk;
        if (disk.totalSizeMB > 1024) { // More than 1GB
          health.disk = 'warning';
          health.issues.push('Disk usage is high (>1GB)');
        }
      }

      // Overall status
      if (health.memory === 'critical' || health.cpu === 'critical') {
        health.status = 'critical';
      } else if (health.memory === 'warning' || health.cpu === 'warning' || health.disk === 'warning') {
        health.status = 'warning';
      }

      return health;
    } catch (error) {
      return {
        status: 'error',
        error: error.message
      };
    }
  }

  async generateAlerts() {
    try {
      const alerts = [];
      const now = new Date();

      // Check for critical issues
      if (this.processStatus.pm2?.status === 'critical') {
        alerts.push({
          level: 'critical',
          message: 'PM2 processes are in critical state',
          timestamp: now.toISOString(),
          category: 'process'
        });
      }

      if (this.processStatus.system?.status === 'critical') {
        alerts.push({
          level: 'critical',
          message: 'System resources are critically low',
          timestamp: now.toISOString(),
          category: 'system'
        });
      }

      // Check for warnings
      if (this.processStatus.pm2?.status === 'warning') {
        alerts.push({
          level: 'warning',
          message: 'Some PM2 processes have issues',
          timestamp: now.toISOString(),
          category: 'process'
        });
      }

      if (this.processStatus.system?.status === 'warning') {
        alerts.push({
          level: 'warning',
          message: 'System resources are running low',
          timestamp: now.toISOString(),
          category: 'system'
        });
      }

      // Check for automation issues
      if (this.processStatus.automation?.status === 'warning') {
        alerts.push({
          level: 'warning',
          message: 'Automation system needs attention',
          timestamp: now.toISOString(),
          category: 'automation'
        });
      }

      // Add new alerts to history
      for (const alert of alerts) {
        this.alertHistory.push(alert);
      }

      // Keep only recent alerts
      if (this.alertHistory.length > this.maxAlerts) {
        this.alertHistory = this.alertHistory.slice(-this.maxAlerts);
      }

      return alerts;
    } catch (error) {
      this.log(`Alert generation failed: ${error.message}`, 'error');
      return [];
    }
  }

  async generateDashboardReport() {
    try {
      const report = {
        timestamp: new Date().toISOString(),
        summary: {
          systemHealth: this.processStatus.system?.status || 'unknown',
          processHealth: this.processStatus.pm2?.status || 'unknown',
          automationHealth: this.processStatus.automation?.status || 'unknown',
          overallStatus: this.getOverallStatus()
        },
        systemMetrics: this.systemMetrics,
        processStatus: this.processStatus,
        alerts: this.alertHistory.slice(-10), // Last 10 alerts
        recommendations: this.generateRecommendations()
      };

      // Save report
      const reportPath = path.join(this.workingDir, 'logs', 'monitoring-dashboard-report.json');
      fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
      
      return report;
    } catch (error) {
      this.log(`Dashboard report generation failed: ${error.message}`, 'error');
      return null;
    }
  }

  getOverallStatus() {
    const statuses = [
      this.processStatus.system?.status,
      this.processStatus.pm2?.status,
      this.processStatus.automation?.status
    ];

    if (statuses.includes('critical')) return 'critical';
    if (statuses.includes('warning')) return 'warning';
    if (statuses.includes('error')) return 'error';
    if (statuses.every(s => s === 'healthy')) return 'healthy';
    return 'unknown';
  }

  generateRecommendations() {
    const recommendations = [];
    
    // Process recommendations
    if (this.processStatus.pm2?.status === 'critical') {
      recommendations.push('Restart failed PM2 processes immediately');
      recommendations.push('Check PM2 logs for error details');
    }
    
    if (this.processStatus.pm2?.status === 'warning') {
      recommendations.push('Review PM2 process status and restart if needed');
    }

    // System recommendations
    if (this.processStatus.system?.status === 'critical') {
      recommendations.push('Free up system resources immediately');
      recommendations.push('Consider restarting the system');
    }
    
    if (this.processStatus.system?.status === 'warning') {
      recommendations.push('Monitor system resource usage');
      recommendations.push('Consider cleanup of temporary files');
    }

    // Automation recommendations
    if (this.processStatus.automation?.status === 'warning') {
      recommendations.push('Check automation logs for issues');
      recommendations.push('Verify automation processes are running');
    }

    return recommendations;
  }

  displayDashboard() {
    // Clear console
    console.clear();
    
    const now = new Date().toLocaleString();
    console.log('🔄 PM2 Automation Monitoring Dashboard');
    console.log(`📅 Last Updated: ${now}`);
    console.log('─'.repeat(80));
    
    // System Status
    console.log('📊 SYSTEM STATUS:');
    const overallStatus = this.getOverallStatus();
    const statusIcon = overallStatus === 'healthy' ? '🟢' : overallStatus === 'warning' ? '🟡' : overallStatus === 'critical' ? '🔴' : '⚪';
    console.log(`   Overall Status: ${statusIcon} ${overallStatus.toUpperCase()}`);
    
    if (this.processStatus.system) {
      const sys = this.processStatus.system;
      console.log(`   System Health: ${sys.status === 'healthy' ? '🟢' : sys.status === 'warning' ? '🟡' : '🔴'} ${sys.status}`);
      if (sys.issues.length > 0) {
        sys.issues.forEach(issue => console.log(`     ⚠️  ${issue}`));
      }
    }
    
    if (this.processStatus.pm2) {
      const pm2 = this.processStatus.pm2;
      console.log(`   PM2 Health: ${pm2.status === 'healthy' ? '🟢' : pm2.status === 'warning' ? '🟡' : '🔴'} ${pm2.status}`);
      if (pm2.issues.length > 0) {
        pm2.issues.forEach(issue => console.log(`     ⚠️  ${issue}`));
      }
    }
    
    if (this.processStatus.automation) {
      const auto = this.processStatus.automation;
      console.log(`   Automation Health: ${auto.status === 'healthy' ? '🟢' : auto.status === 'warning' ? '🟡' : '🔴'} ${auto.status}`);
      if (auto.issues.length > 0) {
        auto.issues.forEach(issue => console.log(`     ⚠️  ${issue}`));
      }
    }
    
    console.log('');
    
    // System Metrics
    console.log('📈 SYSTEM METRICS:');
    if (this.systemMetrics.memory) {
      const mem = this.systemMetrics.memory;
      console.log(`   Memory: ${mem.heapUsedMB}MB / ${mem.heapTotalMB}MB (${mem.usagePercent}%)`);
    }
    
    if (this.systemMetrics.cpu) {
      const cpu = this.systemMetrics.cpu;
      console.log(`   CPU: ${cpu.cpuUsagePercent}% (${cpu.status})`);
    }
    
    if (this.systemMetrics.disk) {
      const disk = this.systemMetrics.disk;
      console.log(`   Disk Usage: ${disk.totalSizeMB}MB total`);
    }
    
    if (this.systemMetrics.processes) {
      const proc = this.systemMetrics.processes;
      console.log(`   Processes: ${proc.runningProcesses}/${proc.totalProcesses} running`);
      console.log(`   Process Memory: ${proc.memoryUsageMB}MB, CPU: ${proc.cpuUsagePercent}%`);
    }
    
    console.log('');
    
    // Recent Alerts
    if (this.alertHistory.length > 0) {
      console.log('🚨 RECENT ALERTS:');
      const recentAlerts = this.alertHistory.slice(-5);
      recentAlerts.forEach(alert => {
        const icon = alert.level === 'critical' ? '🔴' : alert.level === 'warning' ? '🟡' : 'ℹ️';
        const time = new Date(alert.timestamp).toLocaleTimeString();
        console.log(`   ${icon} [${time}] ${alert.message}`);
      });
      console.log('');
    }
    
    // Recommendations
    const recommendations = this.generateRecommendations();
    if (recommendations.length > 0) {
      console.log('💡 RECOMMENDATIONS:');
      recommendations.forEach(rec => console.log(`   • ${rec}`));
      console.log('');
    }
    
    console.log('─'.repeat(80));
    console.log('Press Ctrl+C to stop monitoring');
  }

  async run() {
    try {
      await this.collectSystemMetrics();
      await this.checkProcessHealth();
      
      const alerts = await this.generateAlerts();
      if (alerts.length > 0) {
        alerts.forEach(alert => {
          this.log(`🚨 ${alert.level.toUpperCase()}: ${alert.message}`, alert.level);
        });
      }
      
      await this.generateDashboardReport();
      this.displayDashboard();
      
    } catch (error) {
      this.log(`Dashboard update failed: ${error.message}`, 'error');
    }
  }

  start() {
    this.log('🔄 Monitoring dashboard started with interval:', 'info');
    this.log(`   Interval: ${this.interval / 1000} seconds`, 'info');
    this.log(`   Working directory: ${this.workingDir}`, 'info');
    
    // Run immediately
    this.run();
    
    // Set up interval
    setInterval(() => {
      this.run();
    }, this.interval);
  }
}

// Start the automation if this file is run directly
if (require.main === module) {
  const dashboard = new MonitoringDashboard();
  dashboard.start();
  
  // Handle graceful shutdown
  process.on('SIGINT', () => {
    dashboard.log('🛑 Monitoring dashboard shutting down...', 'info');
    process.exit(0);
  });
  
  process.on('SIGTERM', () => {
    dashboard.log('🛑 Monitoring dashboard shutting down...', 'info');
    process.exit(0);
  });
}

module.exports = MonitoringDashboard;