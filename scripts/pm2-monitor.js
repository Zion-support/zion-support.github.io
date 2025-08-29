#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

class IntelligentPM2Monitor {
  constructor() {
    this.monitoringInterval = 10000; // 10 seconds
    this.alertThresholds = {
      memory: 80, // 80% memory usage
      cpu: 85,    // 85% CPU usage
      restarts: 5, // 5 restarts
      responseTime: 2000 // 2 seconds
    };
    this.alertHistory = [];
    this.performanceMetrics = new Map();
    this.healthScore = 100;
    this.isMonitoring = false;
  }

  // Initialize the monitoring system
  async init() {
    console.log('📊 Initializing Intelligent PM2 Monitor...');
    
    // Create monitoring directories
    this.createMonitoringDirectories();
    
    // Check PM2 installation
    await this.checkPM2Installation();
    
    console.log('✅ PM2 Monitor initialized successfully');
  }

  // Create monitoring directories
  createMonitoringDirectories() {
    const dirs = ['./logs', './monitoring', './alerts', './metrics'];
    
    dirs.forEach(dir => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
        console.log(`📁 Created directory: ${dir}`);
      }
    });
  }

  // Check PM2 installation
  async checkPM2Installation() {
    try {
      execSync('pm2 --version', { stdio: 'pipe' });
      console.log('✅ PM2 is available');
    } catch (error) {
      console.error('❌ PM2 is not installed. Please install PM2 first.');
      process.exit(1);
    }
  }

  // Start monitoring
  startMonitoring() {
    if (this.isMonitoring) {
      console.log('⚠️  Monitoring is already running');
      return;
    }

    console.log('🚀 Starting intelligent monitoring...');
    this.isMonitoring = true;

    // Start different monitoring loops
    this.startProcessMonitoring();
    this.startPerformanceMonitoring();
    this.startHealthMonitoring();
    this.startResourceMonitoring();
    this.startLogMonitoring();

    console.log('✅ Monitoring started. Press Ctrl+C to stop.');
    
    // Handle graceful shutdown
    process.on('SIGINT', () => {
      console.log('\n🛑 Stopping monitoring...');
      this.stopMonitoring();
      process.exit(0);
    });
  }

  // Stop monitoring
  stopMonitoring() {
    this.isMonitoring = false;
    console.log('✅ Monitoring stopped');
  }

  // Start process monitoring
  startProcessMonitoring() {
    setInterval(() => {
      this.monitorProcesses();
    }, this.monitoringInterval);
  }

  // Monitor PM2 processes
  async monitorProcesses() {
    try {
      const status = execSync('pm2 jlist', { encoding: 'utf8' });
      const processes = JSON.parse(status);
      
      processes.forEach(process => {
        this.analyzeProcess(process);
      });
      
      // Update overall health score
      this.updateHealthScore(processes);
      
    } catch (error) {
      console.error('❌ Error monitoring processes:', error.message);
    }
  }

  // Analyze individual process
  analyzeProcess(process) {
    const appName = process.name;
    const status = process.pm2_env.status;
    const restarts = process.pm2_env.restart_time;
    const uptime = process.pm2_env.pm_uptime;
    const memory = process.monit.memory;
    const cpu = process.monit.cpu;

    // Store metrics
    this.performanceMetrics.set(appName, {
      status,
      restarts,
      uptime,
      memory,
      cpu,
      lastUpdate: Date.now()
    });

    // Check for alerts
    this.checkProcessAlerts(appName, process);
  }

  // Check for process alerts
  checkProcessAlerts(appName, process) {
    const alerts = [];

    // Status alerts
    if (process.pm2_env.status !== 'online') {
      alerts.push({
        type: 'status',
        severity: 'high',
        message: `${appName} is ${process.pm2_env.status}`,
        timestamp: new Date().toISOString()
      });
    }

    // Restart alerts
    if (process.pm2_env.restart_time > this.alertThresholds.restarts) {
      alerts.push({
        type: 'restarts',
        severity: 'medium',
        message: `${appName} has restarted ${process.pm2_env.restart_time} times`,
        timestamp: new Date().toISOString()
      });
    }

    // Memory alerts
    const memoryMB = process.monit.memory / 1024 / 1024;
    const memoryPercent = (memoryMB / 1024) * 100; // Assuming 1GB limit
    if (memoryPercent > this.alertThresholds.memory) {
      alerts.push({
        type: 'memory',
        severity: 'medium',
        message: `${appName} memory usage: ${memoryMB.toFixed(2)}MB (${memoryPercent.toFixed(1)}%)`,
        timestamp: new Date().toISOString()
      });
    }

    // CPU alerts
    if (process.monit.cpu > this.alertThresholds.cpu) {
      alerts.push({
        type: 'cpu',
        severity: 'medium',
        message: `${appName} CPU usage: ${process.monit.cpu}%`,
        timestamp: new Date().toISOString()
      });
    }

    // Process alerts
    alerts.forEach(alert => {
      this.triggerAlert(alert);
    });
  }

  // Start performance monitoring
  startPerformanceMonitoring() {
    setInterval(() => {
      this.monitorPerformance();
    }, 30000); // Every 30 seconds
  }

  // Monitor application performance
  async monitorPerformance() {
    try {
      const status = execSync('pm2 jlist', { encoding: 'utf8' });
      const processes = JSON.parse(status);
      
      const performanceReport = {
        timestamp: new Date().toISOString(),
        totalProcesses: processes.length,
        performanceMetrics: {}
      };

      processes.forEach(process => {
        const appName = process.name;
        const metrics = this.performanceMetrics.get(appName);
        
        if (metrics) {
          performanceReport.performanceMetrics[appName] = {
            memory: Math.round(metrics.memory / 1024 / 1024),
            cpu: metrics.cpu,
            uptime: metrics.uptime,
            restarts: metrics.restarts
          };
        }
      });

      // Save performance report
      const reportPath = `./monitoring/performance-${Date.now()}.json`;
      fs.writeFileSync(reportPath, JSON.stringify(performanceReport, null, 2));

      // Generate performance insights
      this.generatePerformanceInsights(performanceReport);

    } catch (error) {
      console.error('❌ Error monitoring performance:', error.message);
    }
  }

  // Generate performance insights
  generatePerformanceInsights(performanceReport) {
    const insights = [];
    
    Object.entries(performanceReport.performanceMetrics).forEach(([appName, metrics]) => {
      // Memory insights
      if (metrics.memory > 500) {
        insights.push({
          app: appName,
          type: 'memory',
          insight: `High memory usage detected: ${metrics.memory}MB`,
          recommendation: 'Consider optimizing memory usage or increasing memory limits'
        });
      }

      // CPU insights
      if (metrics.cpu > 70) {
        insights.push({
          app: appName,
          type: 'cpu',
          insight: `High CPU usage detected: ${metrics.cpu}%`,
          recommendation: 'Investigate CPU-intensive operations or consider scaling'
        });
      }

      // Restart insights
      if (metrics.restarts > 3) {
        insights.push({
          app: appName,
          type: 'stability',
          insight: `Multiple restarts detected: ${metrics.restarts} times`,
          recommendation: 'Investigate application crashes or memory issues'
        });
      }
    });

    if (insights.length > 0) {
      console.log('\n💡 Performance Insights:');
      insights.forEach(insight => {
        console.log(`   ${insight.app}: ${insight.insight}`);
        console.log(`   💡 ${insight.recommendation}\n`);
      });
    }
  }

  // Start health monitoring
  startHealthMonitoring() {
    setInterval(() => {
      this.monitorHealth();
    }, 60000); // Every minute
  }

  // Monitor application health
  async monitorHealth() {
    try {
      const status = execSync('pm2 jlist', { encoding: 'utf8' });
      const processes = JSON.parse(status);
      
      const healthReport = {
        timestamp: new Date().toISOString(),
        overallHealth: this.healthScore,
        processes: {}
      };

      processes.forEach(process => {
        const appName = process.name;
        const health = this.calculateProcessHealth(process);
        
        healthReport.processes[appName] = health;
      });

      // Save health report
      const reportPath = `./monitoring/health-${Date.now()}.json`;
      fs.writeFileSync(reportPath, JSON.stringify(healthReport, null, 2));

      // Update health score
      this.updateOverallHealth(healthReport);

    } catch (error) {
      console.error('❌ Error monitoring health:', error.message);
    }
  }

  // Calculate process health score
  calculateProcessHealth(process) {
    let score = 100;
    const issues = [];

    // Status penalty
    if (process.pm2_env.status !== 'online') {
      score -= 30;
      issues.push('Process offline');
    }

    // Restart penalty
    if (process.pm2_env.restart_time > 0) {
      score -= Math.min(20, process.pm2_env.restart_time * 5);
      issues.push(`Restarted ${process.pm2_env.restart_time} times`);
    }

    // Memory penalty
    const memoryMB = process.monit.memory / 1024 / 1024;
    if (memoryMB > 800) {
      score -= 15;
      issues.push('High memory usage');
    }

    // CPU penalty
    if (process.monit.cpu > 80) {
      score -= 10;
      issues.push('High CPU usage');
    }

    return {
      score: Math.max(0, score),
      issues,
      status: process.pm2_env.status,
      restarts: process.pm2_env.restart_time,
      memory: Math.round(memoryMB),
      cpu: process.monit.cpu
    };
  }

  // Update overall health score
  updateOverallHealth(healthReport) {
    const processScores = Object.values(healthReport.processes).map(p => p.score);
    const averageScore = processScores.reduce((a, b) => a + b, 0) / processScores.length;
    
    this.healthScore = Math.round(averageScore);
    
    // Display health status
    if (this.healthScore >= 80) {
      console.log(`🟢 System Health: ${this.healthScore}/100 (Good)`);
    } else if (this.healthScore >= 60) {
      console.log(`🟡 System Health: ${this.healthScore}/100 (Warning)`);
    } else {
      console.log(`🔴 System Health: ${this.healthScore}/100 (Critical)`);
    }
  }

  // Start resource monitoring
  startResourceMonitoring() {
    setInterval(() => {
      this.monitorSystemResources();
    }, 45000); // Every 45 seconds
  }

  // Monitor system resources
  async monitorSystemResources() {
    try {
      // Get system memory info
      const memInfo = execSync('free -m', { encoding: 'utf8' });
      const memLines = memInfo.split('\n');
      const memData = memLines[1].split(/\s+/);
      
      const totalMem = parseInt(memData[1]);
      const usedMem = parseInt(memData[2]);
      const memUsage = (usedMem / totalMem) * 100;

      // Get system load
      const loadAvg = execSync('uptime', { encoding: 'utf8' });
      const loadMatch = loadAvg.match(/load average: ([\d.]+)/);
      const load = loadMatch ? parseFloat(loadMatch[1]) : 0;

      const resourceReport = {
        timestamp: new Date().toISOString(),
        memory: {
          total: totalMem,
          used: usedMem,
          usage: Math.round(memUsage)
        },
        load: load,
        processes: this.performanceMetrics.size
      };

      // Save resource report
      const reportPath = `./monitoring/resources-${Date.now()}.json`;
      fs.writeFileSync(reportPath, JSON.stringify(resourceReport, null, 2));

      // Check for system-level alerts
      if (memUsage > 90) {
        this.triggerAlert({
          type: 'system',
          severity: 'high',
          message: `System memory usage: ${Math.round(memUsage)}%`,
          timestamp: new Date().toISOString()
        });
      }

      if (load > 5) {
        this.triggerAlert({
          type: 'system',
          severity: 'medium',
          message: `High system load: ${load}`,
          timestamp: new Date().toISOString()
        });
      }

    } catch (error) {
      console.error('❌ Error monitoring system resources:', error.message);
    }
  }

  // Start log monitoring
  startLogMonitoring() {
    setInterval(() => {
      this.monitorLogs();
    }, 15000); // Every 15 seconds
  }

  // Monitor application logs
  async monitorLogs() {
    try {
      const processes = this.performanceMetrics.keys();
      
      for (const appName of processes) {
        try {
          const logs = execSync(`pm2 logs ${appName} --lines 10 --nostream`, { encoding: 'utf8' });
          
          // Check for error patterns
          const errorPatterns = [
            /error/i,
            /exception/i,
            /fatal/i,
            /crash/i,
            /timeout/i,
            /memory leak/i
          ];

          errorPatterns.forEach(pattern => {
            if (pattern.test(logs)) {
              this.triggerAlert({
                type: 'logs',
                severity: 'medium',
                message: `Error pattern detected in ${appName} logs: ${pattern.source}`,
                timestamp: new Date().toISOString()
              });
            }
          });

        } catch (error) {
          // Log monitoring errors are not critical
        }
      }

    } catch (error) {
      console.error('❌ Error monitoring logs:', error.message);
    }
  }

  // Trigger alert
  triggerAlert(alert) {
    // Add to alert history
    this.alertHistory.push(alert);
    
    // Keep only last 100 alerts
    if (this.alertHistory.length > 100) {
      this.alertHistory = this.alertHistory.slice(-100);
    }

    // Save alert
    const alertPath = `./alerts/alert-${Date.now()}.json`;
    fs.writeFileSync(alertPath, JSON.stringify(alert, null, 2));

    // Display alert
    const emoji = alert.severity === 'high' ? '🔴' : alert.severity === 'medium' ? '🟡' : '🟢';
    console.log(`${emoji} ALERT [${alert.severity.toUpperCase()}]: ${alert.message}`);

    // Send notification (could be extended to Slack, email, etc.)
    this.sendNotification(alert);
  }

  // Send notification (placeholder for external integrations)
  sendNotification(alert) {
    // This could be extended to send notifications via:
    // - Slack webhook
    // - Email
    // - SMS
    // - PagerDuty
    // - Discord
    // - Teams
    
    console.log(`📢 Notification sent for ${alert.type} alert`);
  }

  // Generate monitoring report
  async generateReport() {
    try {
      const report = {
        timestamp: new Date().toISOString(),
        healthScore: this.healthScore,
        totalProcesses: this.performanceMetrics.size,
        alerts: this.alertHistory.length,
        performanceMetrics: Object.fromEntries(this.performanceMetrics),
        recentAlerts: this.alertHistory.slice(-10)
      };

      const reportPath = `./monitoring/comprehensive-report-${Date.now()}.json`;
      fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));

      console.log(`📊 Comprehensive report generated: ${reportPath}`);
      return report;

    } catch (error) {
      console.error('❌ Error generating report:', error.message);
      return null;
    }
  }

  // Show current monitoring status
  showStatus() {
    console.log('\n📊 PM2 Monitoring Status:');
    console.log(`   Health Score: ${this.healthScore}/100`);
    console.log(`   Active Processes: ${this.performanceMetrics.size}`);
    console.log(`   Total Alerts: ${this.alertHistory.length}`);
    console.log(`   Monitoring: ${this.isMonitoring ? 'Active' : 'Inactive'}`);
    
    if (this.performanceMetrics.size > 0) {
      console.log('\n📱 Process Status:');
      this.performanceMetrics.forEach((metrics, appName) => {
        const status = metrics.status === 'online' ? '🟢' : '🔴';
        console.log(`   ${status} ${appName}: ${metrics.status} (${Math.round(metrics.memory / 1024 / 1024)}MB, ${metrics.cpu}% CPU)`);
      });
    }
  }

  // Show help information
  showHelp() {
    console.log(`
📊 Intelligent PM2 Monitor - Available Commands:

🚀 Monitoring:
  start         - Start monitoring
  stop          - Stop monitoring
  status        - Show current status

📊 Reports:
  report        - Generate comprehensive report
  help          - Show this help message

Examples:
  node scripts/pm2-monitor.js start
  node scripts/pm2-monitor.js status
  node scripts/pm2-monitor.js report
    `);
  }
}

// Main execution
async function main() {
  const monitor = new IntelligentPM2Monitor();
  const command = process.argv[2];
  
  try {
    await monitor.init();
    
    switch (command) {
      case 'start':
        monitor.startMonitoring();
        break;
      case 'stop':
        monitor.stopMonitoring();
        break;
      case 'status':
        monitor.showStatus();
        break;
      case 'report':
        await monitor.generateReport();
        break;
      case 'help':
      default:
        monitor.showHelp();
        break;
    }
  } catch (error) {
    console.error('❌ Fatal error:', error.message);
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  main();
}

module.exports = IntelligentPM2Monitor;