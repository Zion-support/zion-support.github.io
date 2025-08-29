#!/usr/bin/env node

const { execSync, spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

class PM2IntelligentManager {
  constructor() {
    this.config = {
      ecosystemFile: 'ecosystem.config.js',
      logDir: './automation/logs',
      healthCheckInterval: 30000, // 30 seconds
      autoRestartThreshold: 3,
      performanceThreshold: 0.8,
      memoryThreshold: 0.9
    };
    
    this.healthMetrics = new Map();
    this.performanceHistory = new Map();
    this.ensureLogDirectory();
  }

  ensureLogDirectory() {
    if (!fs.existsSync(this.config.logDir)) {
      fs.mkdirSync(this.config.logDir, { recursive: true });
    }
  }

  log(message, level = 'info') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level.toUpperCase()}] ${message}\n`;
    console.log(logMessage.trim());
    
    const logFile = path.join(this.config.logDir, 'pm2-manager.log');
    fs.appendFileSync(logFile, logMessage);
  }

  async executeCommand(command, options = {}) {
    try {
      const result = execSync(command, { 
        encoding: 'utf8',
        stdio: 'pipe',
        ...options
      });
      return { success: true, output: result };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  async getPM2Status() {
    const result = await this.executeCommand('pm2 jlist');
    if (result.success) {
      try {
        return JSON.parse(result.output);
      } catch (error) {
        this.log(`Failed to parse PM2 status: ${error.message}`, 'error');
        return [];
      }
    }
    return [];
  }

  async startEcosystem() {
    this.log('🚀 Starting PM2 ecosystem...');
    
    const result = await this.executeCommand(`pm2 start ${this.config.ecosystemFile}`);
    if (result.success) {
      this.log('✅ Ecosystem started successfully');
      await this.waitForStability();
      return true;
    } else {
      this.log(`❌ Failed to start ecosystem: ${result.error}`, 'error');
      return false;
    }
  }

  async stopEcosystem() {
    this.log('🛑 Stopping PM2 ecosystem...');
    
    const result = await this.executeCommand('pm2 stop all');
    if (result.success) {
      this.log('✅ Ecosystem stopped successfully');
      return true;
    } else {
      this.log(`❌ Failed to stop ecosystem: ${result.error}`, 'error');
      return false;
    }
  }

  async restartEcosystem() {
    this.log('🔄 Restarting PM2 ecosystem...');
    
    const result = await this.executeCommand(`pm2 reload ${this.config.ecosystemFile}`);
    if (result.success) {
      this.log('✅ Ecosystem restarted successfully');
      await this.waitForStability();
      return true;
    } else {
      this.log(`❌ Failed to restart ecosystem: ${result.error}`, 'error');
      return false;
    }
  }

  async waitForStability(timeout = 30000) {
    this.log('⏳ Waiting for ecosystem stability...');
    
    const startTime = Date.now();
    let stableCount = 0;
    const requiredStableChecks = 3;
    
    while (Date.now() - startTime < timeout) {
      const status = await this.getPM2Status();
      const runningApps = status.filter(app => app.pm2_env.status === 'online');
      
      if (runningApps.length > 0) {
        stableCount++;
        if (stableCount >= requiredStableChecks) {
          this.log('✅ Ecosystem is stable');
          return true;
        }
      }
      
      await this.sleep(2000);
    }
    
    this.log('⚠️ Ecosystem stability timeout', 'warn');
    return false;
  }

  async monitorHealth() {
    this.log('👀 Starting health monitoring...');
    
    setInterval(async () => {
      await this.performHealthCheck();
    }, this.config.healthCheckInterval);
  }

  async performHealthCheck() {
    const status = await this.getPM2Status();
    const healthReport = {
      timestamp: new Date().toISOString(),
      totalApps: status.length,
      onlineApps: 0,
      erroredApps: 0,
      memoryUsage: 0,
      cpuUsage: 0,
      issues: []
    };

    for (const app of status) {
      if (app.pm2_env.status === 'online') {
        healthReport.onlineApps++;
        
        // Check memory usage
        const memoryUsage = app.monit.memory / (1024 * 1024); // MB
        healthReport.memoryUsage += memoryUsage;
        
        // Check CPU usage
        healthReport.cpuUsage += app.monit.cpu || 0;
        
        // Store metrics for performance analysis
        this.updatePerformanceMetrics(app.name, {
          memory: memoryUsage,
          cpu: app.monit.cpu || 0,
          uptime: app.pm2_env.pm_uptime
        });
        
        // Check for performance issues
        if (memoryUsage > 512) { // 512MB threshold
          healthReport.issues.push({
            app: app.name,
            type: 'high_memory',
            value: `${memoryUsage.toFixed(2)}MB`
          });
        }
        
        if ((app.monit.cpu || 0) > 80) { // 80% CPU threshold
          healthReport.issues.push({
            app: app.name,
            type: 'high_cpu',
            value: `${app.monit.cpu}%`
          });
        }
      } else if (app.pm2_env.status === 'errored') {
        healthReport.erroredApps++;
        healthReport.issues.push({
          app: app.name,
          type: 'errored',
          value: app.pm2_env.pm_out_log_path || 'unknown'
        });
      }
    }

    // Store health report
    this.healthMetrics.set(Date.now(), healthReport);
    
    // Generate alerts for critical issues
    await this.generateHealthAlerts(healthReport);
    
    // Auto-restart failed apps
    if (healthReport.erroredApps > 0) {
      await this.autoRestartFailedApps(status);
    }
    
    // Performance optimization
    if (healthReport.memoryUsage > 2048 || healthReport.cpuUsage > 200) { // 2GB total memory or 200% total CPU
      await this.optimizePerformance();
    }
    
    this.log(`📊 Health Check: ${healthReport.onlineApps}/${healthReport.totalApps} apps online, ${healthReport.erroredApps} errors`);
  }

  async generateHealthAlerts(healthReport) {
    const criticalIssues = healthReport.issues.filter(issue => 
      issue.type === 'errored' || 
      (issue.type === 'high_memory' && parseFloat(issue.value) > 1024) ||
      (issue.type === 'high_cpu' && parseFloat(issue.value) > 90)
    );

    if (criticalIssues.length > 0) {
      this.log(`🚨 Critical issues detected: ${criticalIssues.length}`, 'error');
      
      for (const issue of criticalIssues) {
        this.log(`   - ${issue.app}: ${issue.type} (${issue.value})`, 'error');
      }
      
      // Send notification (could be Slack, email, etc.)
      await this.sendNotification(criticalIssues);
    }
  }

  async autoRestartFailedApps(status) {
    for (const app of status) {
      if (app.pm2_env.status === 'errored') {
        this.log(`🔄 Auto-restarting failed app: ${app.name}`);
        
        const restartCount = this.getRestartCount(app.name);
        if (restartCount < this.config.autoRestartThreshold) {
          await this.executeCommand(`pm2 restart ${app.name}`);
          this.incrementRestartCount(app.name);
        } else {
          this.log(`⚠️ App ${app.name} exceeded restart threshold, manual intervention required`, 'warn');
        }
      }
    }
  }

  async optimizePerformance() {
    this.log('⚡ Performing performance optimization...');
    
    // Analyze performance patterns
    const optimizationSuggestions = this.analyzePerformancePatterns();
    
    for (const suggestion of optimizationSuggestions) {
      this.log(`💡 Optimization: ${suggestion.description}`);
      
      if (suggestion.action === 'restart') {
        await this.executeCommand(`pm2 restart ${suggestion.app}`);
      } else if (suggestion.action === 'scale') {
        await this.executeCommand(`pm2 scale ${suggestion.app} ${suggestion.instances}`);
      }
    }
  }

  analyzePerformancePatterns() {
    const suggestions = [];
    
    for (const [appName, metrics] of this.performanceHistory) {
      if (metrics.length < 5) continue; // Need enough data
      
      const recentMetrics = metrics.slice(-5);
      const avgMemory = recentMetrics.reduce((sum, m) => sum + m.memory, 0) / recentMetrics.length;
      const avgCPU = recentMetrics.reduce((sum, m) => sum + m.cpu, 0) / recentMetrics.length;
      
      if (avgMemory > 400) { // 400MB average
        suggestions.push({
          app: appName,
          action: 'restart',
          description: `High memory usage (${avgMemory.toFixed(2)}MB avg) - restarting to free memory`
        });
      }
      
      if (avgCPU > 70) { // 70% average CPU
        suggestions.push({
          app: appName,
          action: 'scale',
          description: `High CPU usage (${avgCPU.toFixed(2)}% avg) - scaling instances`
        });
      }
    }
    
    return suggestions;
  }

  updatePerformanceMetrics(appName, metrics) {
    if (!this.performanceHistory.has(appName)) {
      this.performanceHistory.set(appName, []);
    }
    
    const history = this.performanceHistory.get(appName);
    history.push(metrics);
    
    // Keep only last 20 metrics
    if (history.length > 20) {
      history.shift();
    }
  }

  getRestartCount(appName) {
    const key = `restart_${appName}`;
    return this.healthMetrics.get(key) || 0;
  }

  incrementRestartCount(appName) {
    const key = `restart_${appName}`;
    const current = this.getRestartCount(appName);
    this.healthMetrics.set(key, current + 1);
  }

  async sendNotification(issues) {
    // Placeholder for notification system
    // Could integrate with Slack, email, or other notification services
    this.log('📧 Sending notification about critical issues...');
  }

  async generateReport() {
    this.log('📊 Generating comprehensive report...');
    
    const status = await this.getPM2Status();
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        totalApps: status.length,
        onlineApps: status.filter(app => app.pm2_env.status === 'online').length,
        erroredApps: status.filter(app => app.pm2_env.status === 'errored').length,
        stoppedApps: status.filter(app => app.pm2_env.status === 'stopped').length
      },
      apps: status.map(app => ({
        name: app.name,
        status: app.pm2_env.status,
        memory: app.monit.memory / (1024 * 1024),
        cpu: app.monit.cpu || 0,
        uptime: app.pm2_env.pm_uptime,
        restarts: app.pm2_env.restart_time || 0
      })),
      healthMetrics: Array.from(this.healthMetrics.entries()).slice(-10), // Last 10 health checks
      performanceAnalysis: this.analyzePerformancePatterns()
    };
    
    const reportPath = path.join(this.config.logDir, 'pm2-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    this.log(`📊 Report generated: ${reportPath}`);
    return report;
  }

  async sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async start() {
    this.log('🚀 Starting PM2 Intelligent Manager...');
    
    // Start ecosystem
    await this.startEcosystem();
    
    // Start health monitoring
    await this.monitorHealth();
    
    this.log('✅ PM2 Intelligent Manager is running');
    this.log('📊 Health monitoring active');
    this.log('🔄 Auto-restart and optimization enabled');
  }
}

// CLI handling
const manager = new PM2IntelligentManager();
const command = process.argv[2];

switch (command) {
  case 'start':
    manager.start();
    break;
  case 'stop':
    manager.stopEcosystem();
    process.exit(0);
    break;
  case 'restart':
    manager.restartEcosystem();
    break;
  case 'status':
    manager.getPM2Status().then(status => {
      console.log(JSON.stringify(status, null, 2));
      process.exit(0);
    });
    break;
  case 'report':
    manager.generateReport().then(report => {
      console.log(JSON.stringify(report, null, 2));
      process.exit(0);
    });
    break;
  case 'health':
    manager.performHealthCheck();
    break;
  default:
    console.log('Usage: node pm2-intelligent-manager.js [start|stop|restart|status|report|health]');
    console.log('\nCommands:');
    console.log('  start     - Start ecosystem and monitoring');
    console.log('  stop      - Stop all PM2 processes');
    console.log('  restart   - Restart ecosystem');
    console.log('  status    - Show PM2 status');
    console.log('  report    - Generate comprehensive report');
    console.log('  health    - Perform health check');
    process.exit(1);
}

// Graceful shutdown
process.on('SIGINT', async () => {
  console.log('\n🛑 Shutting down PM2 Intelligent Manager...');
  await manager.stopEcosystem();
  process.exit(0);
});

process.on('SIGTERM', async () => {
  console.log('\n🛑 Shutting down PM2 Intelligent Manager...');
  await manager.stopEcosystem();
  process.exit(0);
});