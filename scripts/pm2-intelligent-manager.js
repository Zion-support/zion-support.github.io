#!/usr/bin/env node

const { execSync, spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

class PM2IntelligentManager {
  constructor() {
    this.ecosystemPath = path.join(process.cwd(), 'ecosystem.config.js');
    this.logsDir = path.join(process.cwd(), 'logs');
    this.healthCheckInterval = 30000; // 30 seconds
    this.autoRestartThreshold = 3; // Restart after 3 consecutive failures
    this.processHealth = new Map();
    this.failureCounts = new Map();
    this.ensureLogsDirectory();
  }

  ensureLogsDirectory() {
    if (!fs.existsSync(this.logsDir)) {
      fs.mkdirSync(this.logsDir, { recursive: true });
    }
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}`;
    console.log(logMessage);
    
    const logFile = path.join(this.logsDir, 'pm2-manager.log');
    fs.appendFileSync(logFile, logMessage + '\n');
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
        this.log(`Failed to parse PM2 status: ${error.message}`, 'ERROR');
        return [];
      }
    }
    return [];
  }

  async startEcosystem(env = 'development') {
    this.log(`🚀 Starting PM2 ecosystem in ${env} mode...`);
    
    const command = `pm2 start ${this.ecosystemPath} --env ${env}`;
    const result = await this.executeCommand(command);
    
    if (result.success) {
      this.log(`✅ Ecosystem started successfully in ${env} mode`);
      this.startHealthMonitoring();
      return true;
    } else {
      this.log(`❌ Failed to start ecosystem: ${result.error}`, 'ERROR');
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
      this.log(`❌ Failed to stop ecosystem: ${result.error}`, 'ERROR');
      return false;
    }
  }

  async restartEcosystem() {
    this.log('🔄 Restarting PM2 ecosystem...');
    
    const result = await this.executeCommand('pm2 restart all');
    if (result.success) {
      this.log('✅ Ecosystem restarted successfully');
      return true;
    } else {
      this.log(`❌ Failed to restart ecosystem: ${result.error}`, 'ERROR');
      return false;
    }
  }

  async reloadEcosystem() {
    this.log('🔄 Reloading PM2 ecosystem...');
    
    const result = await this.executeCommand('pm2 reload all');
    if (result.success) {
      this.log('✅ Ecosystem reloaded successfully');
      return true;
    } else {
      this.log(`❌ Failed to reload ecosystem: ${result.error}`, 'ERROR');
      return false;
    }
  }

  async deleteEcosystem() {
    this.log('🗑️ Deleting PM2 ecosystem...');
    
    const result = await this.executeCommand('pm2 delete all');
    if (result.success) {
      this.log('✅ Ecosystem deleted successfully');
      return true;
    } else {
      this.log(`❌ Failed to delete ecosystem: ${result.error}`, 'ERROR');
      return false;
    }
  }

  async showStatus() {
    this.log('📊 PM2 Status:');
    const result = await this.executeCommand('pm2 status');
    if (result.success) {
      console.log(result.output);
    } else {
      this.log(`❌ Failed to get status: ${result.error}`, 'ERROR');
    }
  }

  async showLogs(appName, lines = 100) {
    this.log(`📋 Showing logs for ${appName} (last ${lines} lines):`);
    const result = await this.executeCommand(`pm2 logs ${appName} --lines ${lines}`);
    if (result.success) {
      console.log(result.output);
    } else {
      this.log(`❌ Failed to get logs: ${result.error}`, 'ERROR');
    }
  }

  async monitorProcess(appName) {
    this.log(`👀 Starting monitoring for ${appName}...`);
    
    const result = await this.executeCommand(`pm2 monit ${appName}`);
    if (result.success) {
      console.log(result.output);
    } else {
      this.log(`❌ Failed to start monitoring: ${result.error}`, 'ERROR');
    }
  }

  async scaleApp(appName, instances) {
    this.log(`📈 Scaling ${appName} to ${instances} instances...`);
    
    const result = await this.executeCommand(`pm2 scale ${appName} ${instances}`);
    if (result.success) {
      this.log(`✅ ${appName} scaled to ${instances} instances`);
      return true;
    } else {
      this.log(`❌ Failed to scale ${appName}: ${result.error}`, 'ERROR');
      return false;
    }
  }

  async savePM2Configuration() {
    this.log('💾 Saving PM2 configuration...');
    
    const result = await this.executeCommand('pm2 save');
    if (result.success) {
      this.log('✅ PM2 configuration saved');
      return true;
    } else {
      this.log(`❌ Failed to save configuration: ${result.error}`, 'ERROR');
      return false;
    }
  }

  async setupPM2Startup() {
    this.log('🚀 Setting up PM2 startup script...');
    
    const result = await this.executeCommand('pm2 startup');
    if (result.success) {
      this.log('✅ PM2 startup script configured');
      this.log('📝 Please run the generated command as root');
      return true;
    } else {
      this.log(`❌ Failed to setup startup: ${result.error}`, 'ERROR');
      return false;
    }
  }

  async generateHealthReport() {
    this.log('📊 Generating health report...');
    
    const status = await this.getPM2Status();
    const report = {
      timestamp: new Date().toISOString(),
      totalProcesses: status.length,
      runningProcesses: status.filter(p => p.pm2_env.status === 'online').length,
      stoppedProcesses: status.filter(p => p.pm2_env.status === 'stopped').length,
      erroredProcesses: status.filter(p => p.pm2_env.status === 'errored').length,
      processes: status.map(p => ({
        name: p.name,
        status: p.pm2_env.status,
        uptime: p.pm2_env.pm_uptime,
        memory: p.monit.memory,
        cpu: p.monit.cpu,
        restartCount: p.pm2_env.restart_time
      }))
    };

    const reportPath = path.join(this.logsDir, 'health-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    this.log(`📊 Health report generated: ${reportPath}`);
    return report;
  }

  startHealthMonitoring() {
    this.log('🔍 Starting health monitoring...');
    
    setInterval(async () => {
      await this.performHealthCheck();
    }, this.healthCheckInterval);
  }

  async performHealthCheck() {
    const status = await this.getPM2Status();
    
    for (const process of status) {
      const processName = process.name;
      const isHealthy = this.assessProcessHealth(process);
      
      if (!isHealthy) {
        this.log(`⚠️ Process ${processName} appears unhealthy`, 'WARN');
        await this.handleUnhealthyProcess(processName);
      }
    }
  }

  assessProcessHealth(process) {
    const { pm2_env, monit } = process;
    
    // Check if process is running
    if (pm2_env.status !== 'online') {
      return false;
    }
    
    // Check memory usage (restart if > 80% of limit)
    if (monit.memory && pm2_env.max_memory_restart) {
      const memoryLimit = parseInt(pm2_env.max_memory_restart) * 1024 * 1024; // Convert to bytes
      if (monit.memory > memoryLimit * 0.8) {
        this.log(`⚠️ Process ${process.name} using high memory: ${monit.memory} bytes`, 'WARN');
        return false;
      }
    }
    
    // Check restart count
    if (pm2_env.restart_time > 10) {
      this.log(`⚠️ Process ${process.name} has restarted ${pm2_env.restart_time} times`, 'WARN');
      return false;
    }
    
    return true;
  }

  async handleUnhealthyProcess(processName) {
    const failureCount = (this.failureCounts.get(processName) || 0) + 1;
    this.failureCounts.set(processName, failureCount);
    
    if (failureCount >= this.autoRestartThreshold) {
      this.log(`🔄 Auto-restarting ${processName} (failure count: ${failureCount})`, 'WARN');
      
      const result = await this.executeCommand(`pm2 restart ${processName}`);
      if (result.success) {
        this.log(`✅ ${processName} restarted successfully`);
        this.failureCounts.set(processName, 0);
      } else {
        this.log(`❌ Failed to restart ${processName}: ${result.error}`, 'ERROR');
      }
    }
  }

  async cleanupLogs(daysToKeep = 7) {
    this.log(`🧹 Cleaning up logs older than ${daysToKeep} days...`);
    
    const cutoffDate = new Date();
    cutoffDate.setDate(cutoffDate.getDate() - daysToKeep);
    
    if (fs.existsSync(this.logsDir)) {
      const files = fs.readdirSync(this.logsDir);
      let deletedCount = 0;
      
      for (const file of files) {
        const filePath = path.join(this.logsDir, file);
        const stats = fs.statSync(filePath);
        
        if (stats.mtime < cutoffDate) {
          fs.unlinkSync(filePath);
          deletedCount++;
        }
      }
      
      this.log(`✅ Cleaned up ${deletedCount} old log files`);
    }
  }

  async showHelp() {
    console.log(`
🚀 PM2 Intelligent Manager - Advanced Process Management

Usage: node scripts/pm2-intelligent-manager.js [command] [options]

Commands:
  start [env]           - Start ecosystem (default: development)
  stop                  - Stop all processes
  restart               - Restart all processes
  reload                - Reload all processes (zero-downtime)
  delete                - Delete all processes
  status                - Show process status
  logs [app] [lines]    - Show logs for app (default: 100 lines)
  monit [app]           - Monitor specific app
  scale [app] [instances] - Scale app to N instances
  save                  - Save PM2 configuration
  startup               - Setup PM2 startup script
  health                - Generate health report
  cleanup [days]        - Clean up old logs (default: 7 days)
  help                  - Show this help

Environments:
  development           - Development mode
  production            - Production mode
  staging               - Staging mode

Examples:
  node scripts/pm2-intelligent-manager.js start production
  node scripts/pm2-intelligent-manager.js logs zion-frontend-dev
  node scripts/pm2-intelligent-manager.js scale zion-backend-dev 3
  node scripts/pm2-intelligent-manager.js health
    `);
  }
}

// CLI handling
const manager = new PM2IntelligentManager();
const command = process.argv[2];
const arg1 = process.argv[3];
const arg2 = process.argv[4];

(async () => {
  try {
    switch (command) {
      case 'start':
        await manager.startEcosystem(arg1 || 'development');
        break;
      case 'stop':
        await manager.stopEcosystem();
        break;
      case 'restart':
        await manager.restartEcosystem();
        break;
      case 'reload':
        await manager.reloadEcosystem();
        break;
      case 'delete':
        await manager.deleteEcosystem();
        break;
      case 'status':
        await manager.showStatus();
        break;
      case 'logs':
        await manager.showLogs(arg1, parseInt(arg2) || 100);
        break;
      case 'monit':
        await manager.monitorProcess(arg1);
        break;
      case 'scale':
        await manager.scaleApp(arg1, parseInt(arg2));
        break;
      case 'save':
        await manager.savePM2Configuration();
        break;
      case 'startup':
        await manager.setupPM2Startup();
        break;
      case 'health':
        await manager.generateHealthReport();
        break;
      case 'cleanup':
        await manager.cleanupLogs(parseInt(arg1) || 7);
        break;
      case 'help':
      default:
        manager.showHelp();
        break;
    }
  } catch (error) {
    manager.log(`❌ Command failed: ${error.message}`, 'ERROR');
    process.exit(1);
  }
})();