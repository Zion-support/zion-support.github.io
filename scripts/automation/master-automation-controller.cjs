#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');

class MasterAutomationController {
  constructor() {
    this.controllerLog = path.join(__dirname, '../logs', 'master-controller.log');
    this.ensureLogDirectory();
    this.pm2Processes = new Map();
    this.processHealth = new Map();
    this.automationStats = new Map();
    this.alertThresholds = {
      memoryUsage: 80, // 80% memory usage
      cpuUsage: 70,    // 70% CPU usage
      failureRate: 20,  // 20% failure rate
      responseTime: 5000 // 5 seconds
    };
  }

  ensureLogDirectory() {
    const logDir = path.dirname(this.controllerLog);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] Master Controller: ${message}\n`;
    console.log(message);
    fs.appendFileSync(this.controllerLog, logMessage);
  }

  async startMasterController() {
    try {
      this.log('🎯 Starting Master Automation Controller...');
      
      // Initialize PM2 process monitoring
      await this.initializePM2Monitoring();
      
      // Start continuous monitoring
      this.startContinuousMonitoring();
      
      // Start health checks
      this.startHealthChecks();
      
      // Start performance monitoring
      this.startPerformanceMonitoring();
      
      this.log('✅ Master Controller started successfully');
      
    } catch (error) {
      this.log(`❌ Master Controller failed to start: ${error.message}`);
    }
  }

  async initializePM2Monitoring() {
    try {
      // Get all PM2 processes
      const pm2List = execSync('pm2 list --json', { encoding: 'utf8' });
      const processes = JSON.parse(pm2List);
      
      processes.forEach(process => {
        this.pm2Processes.set(process.name, {
          id: process.pm_id,
          name: process.name,
          status: process.pm2_env.status,
          memory: process.monit.memory,
          cpu: process.monit.cpu,
          uptime: process.pm2_env.pm_uptime,
          restarts: process.pm2_env.restart_time,
          script: process.pm2_env.script
        });
        
        // Initialize health tracking
        this.processHealth.set(process.name, {
          lastCheck: Date.now(),
          failures: 0,
          successes: 0,
          averageResponseTime: 0,
          lastFailure: null,
          consecutiveFailures: 0
        });
      });
      
      this.log(`📊 Monitoring ${this.pm2Processes.size} PM2 processes`);
      
    } catch (error) {
      this.log(`Error initializing PM2 monitoring: ${error.message}`);
    }
  }

  startContinuousMonitoring() {
    // Monitor PM2 processes every 30 seconds
    setInterval(async () => {
      await this.monitorPM2Processes();
    }, 30000);
    
    // Update process list every 5 minutes
    setInterval(async () => {
      await this.updateProcessList();
    }, 300000);
  }

  startHealthChecks() {
    // Run health checks every minute
    setInterval(async () => {
      await this.runHealthChecks();
    }, 60000);
  }

  startPerformanceMonitoring() {
    // Monitor performance every 2 minutes
    setInterval(async () => {
      await this.monitorPerformance();
    }, 120000);
  }

  async monitorPM2Processes() {
    try {
      for (const [name, process] of this.pm2Processes) {
        const currentStatus = await this.getProcessStatus(process.id);
        
        if (currentStatus.status !== process.status) {
          this.log(`🔄 Process ${name} status changed: ${process.status} → ${currentStatus.status}`);
          process.status = currentStatus.status;
          
          // Update health tracking
          const health = this.processHealth.get(name);
          if (currentStatus.status === 'online') {
            health.successes++;
            health.consecutiveFailures = 0;
          } else if (currentStatus.status === 'stopped' || currentStatus.status === 'errored') {
            health.failures++;
            health.consecutiveFailures++;
            health.lastFailure = Date.now();
            
            // Auto-restart if too many consecutive failures
            if (health.consecutiveFailures >= 3) {
              await this.autoRestartProcess(name);
            }
          }
        }
        
        // Update memory and CPU usage
        process.memory = currentStatus.memory;
        process.cpu = currentStatus.cpu;
      }
      
    } catch (error) {
      this.log(`Error monitoring PM2 processes: ${error.message}`);
    }
  }

  async getProcessStatus(processId) {
    try {
      const status = execSync(`pm2 show ${processId} --json`, { encoding: 'utf8' });
      const processInfo = JSON.parse(status);
      
      return {
        status: processInfo.pm2_env.status,
        memory: processInfo.monit.memory,
        cpu: processInfo.monit.cpu
      };
    } catch (error) {
      return { status: 'unknown', memory: 0, cpu: 0 };
    }
  }

  async updateProcessList() {
    try {
      await this.initializePM2Monitoring();
    } catch (error) {
      this.log(`Error updating process list: ${error.message}`);
    }
  }

  async runHealthChecks() {
    try {
      for (const [name, process] of this.pm2Processes) {
        const health = this.processHealth.get(name);
        
        // Check if process is responding
        const isHealthy = await this.checkProcessHealth(name);
        
        if (isHealthy) {
          health.successes++;
          health.consecutiveFailures = 0;
        } else {
          health.failures++;
          health.consecutiveFailures++;
          health.lastFailure = Date.now();
          
          // Generate alert for unhealthy processes
          this.generateAlert(name, 'health', `Process ${name} is unhealthy`);
        }
        
        // Calculate failure rate
        const totalChecks = health.successes + health.failures;
        const failureRate = totalChecks > 0 ? (health.failures / totalChecks) * 100 : 0;
        
        if (failureRate > this.alertThresholds.failureRate) {
          this.generateAlert(name, 'failure-rate', `Process ${name} has ${failureRate.toFixed(1)}% failure rate`);
        }
        
        health.lastCheck = Date.now();
      }
      
    } catch (error) {
      this.log(`Error running health checks: ${error.message}`);
    }
  }

  async checkProcessHealth(processName) {
    try {
      // Check if process is responding by looking at logs
      const logPath = path.join(process.cwd(), '.pm2', 'logs', `${processName}-out.log`);
      
      if (fs.existsSync(logPath)) {
        const stats = fs.statSync(logPath);
        const timeSinceLastLog = Date.now() - stats.mtime.getTime();
        
        // Consider process healthy if logs were updated in the last 5 minutes
        return timeSinceLastLog < 300000;
      }
      
      return false;
    } catch (error) {
      return false;
    }
  }

  async monitorPerformance() {
    try {
      for (const [name, process] of this.pm2Processes) {
        // Check memory usage
        const memoryUsagePercent = (process.memory / (1024 * 1024)) * 100;
        if (memoryUsagePercent > this.alertThresholds.memoryUsage) {
          this.generateAlert(name, 'memory', `Process ${name} using ${memoryUsagePercent.toFixed(1)}% memory`);
        }
        
        // Check CPU usage
        if (process.cpu > this.alertThresholds.cpuUsage) {
          this.generateAlert(name, 'cpu', `Process ${name} using ${process.cpu.toFixed(1)}% CPU`);
        }
        
        // Update automation statistics
        this.updateAutomationStats(name, process);
      }
      
    } catch (error) {
      this.log(`Error monitoring performance: ${error.message}`);
    }
  }

  updateAutomationStats(processName, process) {
    if (!this.automationStats.has(processName)) {
      this.automationStats.set(processName, {
        totalUptime: 0,
        totalRestarts: 0,
        averageMemoryUsage: 0,
        averageCpuUsage: 0,
        lastUpdated: Date.now()
      });
    }
    
    const stats = this.automationStats.get(processName);
    stats.totalUptime = process.uptime;
    stats.totalRestarts = process.restarts;
    stats.averageMemoryUsage = (stats.averageMemoryUsage + process.memory) / 2;
    stats.averageCpuUsage = (stats.averageCpuUsage + process.cpu) / 2;
    stats.lastUpdated = Date.now();
  }

  async autoRestartProcess(processName) {
    try {
      this.log(`🔄 Auto-restarting process: ${processName}`);
      
      execSync(`pm2 restart ${processName}`, { stdio: 'pipe' });
      
      // Reset consecutive failure count
      const health = this.processHealth.get(processName);
      if (health) {
        health.consecutiveFailures = 0;
      }
      
      this.log(`✅ Successfully restarted process: ${processName}`);
      
    } catch (error) {
      this.log(`❌ Failed to auto-restart process ${processName}: ${error.message}`);
    }
  }

  generateAlert(processName, type, message) {
    const alert = {
      timestamp: new Date().toISOString(),
      process: processName,
      type: type,
      message: message,
      severity: this.getAlertSeverity(type)
    };
    
    this.log(`🚨 ALERT [${alert.severity.toUpperCase()}]: ${message}`);
    
    // Store alert for reporting
    this.storeAlert(alert);
    
    // Send notification if critical
    if (alert.severity === 'critical') {
      this.sendCriticalNotification(alert);
    }
  }

  getAlertSeverity(type) {
    const severityMap = {
      'health': 'high',
      'failure-rate': 'high',
      'memory': 'medium',
      'cpu': 'medium',
      'unknown': 'low'
    };
    
    return severityMap[type] || 'medium';
  }

  storeAlert(alert) {
    const alertsPath = path.join(__dirname, '../reports', 'automation-alerts.json');
    const alertsDir = path.dirname(alertsPath);
    
    if (!fs.existsSync(alertsDir)) {
      fs.mkdirSync(alertsDir, { recursive: true });
    }
    
    let alerts = [];
    if (fs.existsSync(alertsPath)) {
      try {
        alerts = JSON.parse(fs.readFileSync(alertsPath, 'utf8'));
      } catch (error) {
        alerts = [];
      }
    }
    
    alerts.push(alert);
    
    // Keep only last 100 alerts
    if (alerts.length > 100) {
      alerts = alerts.slice(-100);
    }
    
    fs.writeFileSync(alertsPath, JSON.stringify(alerts, null, 2));
  }

  sendCriticalNotification(alert) {
    // Implement critical notification logic here
    // This could be email, Slack, Discord, etc.
    this.log(`📧 Sending critical notification for: ${alert.message}`);
  }

  async generateMasterReport() {
    try {
      const report = {
        timestamp: new Date().toISOString(),
        summary: {
          totalProcesses: this.pm2Processes.size,
          onlineProcesses: Array.from(this.pm2Processes.values()).filter(p => p.status === 'online').length,
          offlineProcesses: Array.from(this.pm2Processes.values()).filter(p => p.status !== 'online').length,
          totalAlerts: 0
        },
        processHealth: Object.fromEntries(this.processHealth),
        automationStats: Object.fromEntries(this.automationStats),
        recommendations: this.generateRecommendations()
      };
      
      // Count total alerts
      const alertsPath = path.join(__dirname, '../reports', 'automation-alerts.json');
      if (fs.existsSync(alertsPath)) {
        try {
          const alerts = JSON.parse(fs.readFileSync(alertsPath, 'utf8'));
          report.summary.totalAlerts = alerts.length;
        } catch (error) {
          report.summary.totalAlerts = 0;
        }
      }
      
      const reportPath = path.join(__dirname, '../reports', 'master-automation-report.json');
      const reportDir = path.dirname(reportPath);
      
      if (!fs.existsSync(reportDir)) {
        fs.mkdirSync(reportDir, { recursive: true });
      }
      
      fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
      this.log(`📊 Generated master automation report: ${reportPath}`);
      
    } catch (error) {
      this.log(`Error generating master report: ${error.message}`);
    }
  }

  generateRecommendations() {
    const recommendations = [];
    
    // Analyze process health and generate recommendations
    for (const [name, health] of this.processHealth) {
      const failureRate = (health.failures / (health.successes + health.failures)) * 100;
      
      if (failureRate > 10) {
        recommendations.push({
          process: name,
          priority: 'high',
          action: 'Investigate high failure rate',
          details: `${failureRate.toFixed(1)}% failure rate detected`
        });
      }
      
      if (health.consecutiveFailures >= 2) {
        recommendations.push({
          process: name,
          priority: 'medium',
          action: 'Monitor consecutive failures',
          details: `${health.consecutiveFailures} consecutive failures`
        });
      }
    }
    
    return recommendations;
  }

  // Graceful shutdown
  async shutdown() {
    this.log('🛑 Shutting down Master Controller...');
    
    // Generate final report
    await this.generateMasterReport();
    
    this.log('✅ Master Controller shutdown complete');
    process.exit(0);
  }
}

// Handle graceful shutdown
process.on('SIGINT', async () => {
  const controller = new MasterAutomationController();
  await controller.shutdown();
});

process.on('SIGTERM', async () => {
  const controller = new MasterAutomationController();
  await controller.shutdown();
});

// Main execution
const controller = new MasterAutomationController();
controller.startMasterController().catch(console.error);