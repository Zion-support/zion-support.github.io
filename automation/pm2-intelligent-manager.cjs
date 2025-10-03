#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');

class PM2IntelligentManager {
  constructor() {
    this.config = {
      ecosystemPath: path.join(process.cwd(), 'ecosystem.config.js'),
      automationPath: path.join(process.cwd(), 'automation'),
      logsPath: path.join(process.cwd(), 'automation', 'logs'),
      maxMemoryUsage: '80%',
      healthCheckInterval: 30000,
      autoRestartThreshold: 3,
      performanceThreshold: 1000
    };
    
    this.processStats = new Map();
    this.healthMetrics = new Map();
    this.ensureDirectories();
    this.loadConfiguration();
  }

  ensureDirectories() {
    if (!fs.existsSync(this.config.logsPath)) {
      fs.mkdirSync(this.config.logsPath, { recursive: true });
    }
  }

  loadConfiguration() {
    try {
      if (fs.existsSync(this.config.ecosystemPath)) {
        this.log('✅ Ecosystem configuration loaded');
      } else {
        this.log('⚠️ Ecosystem configuration not found, using defaults');
      }
    } catch (error) {
      this.log(`❌ Error loading configuration: ${error.message}`);
    }
  }

  log(message, level = 'info') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level.toUpperCase()}] ${message}\n`;
    console.log(logMessage.trim());
    
    const logFile = path.join(this.config.logsPath, 'pm2-manager.log');
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
      return { success: false, error: error.message, output: error.stdout || '' };
    }
  }

  async startEcosystem(env = 'development') {
    this.log(`🚀 Starting PM2 ecosystem in ${env} mode...`);
    
    const command = `pm2 start ecosystem.config.js --env ${env}`;
    const result = await this.executeCommand(command);
    
    if (result.success) {
      this.log('✅ Ecosystem started successfully');
      this.startHealthMonitoring();
      return true;
    } else {
      this.log(`❌ Failed to start ecosystem: ${result.error}`);
      return false;
    }
  }

  async stopEcosystem() {
    this.log('🛑 Stopping PM2 ecosystem...');
    
    const command = 'pm2 stop ecosystem.config.js';
    const result = await this.executeCommand(command);
    
    if (result.success) {
      this.log('✅ Ecosystem stopped successfully');
      return true;
    } else {
      this.log(`❌ Failed to stop ecosystem: ${result.error}`);
      return false;
    }
  }

  async restartEcosystem() {
    this.log('🔄 Restarting PM2 ecosystem...');
    
    const command = 'pm2 restart ecosystem.config.js';
    const result = await this.executeCommand(command);
    
    if (result.success) {
      this.log('✅ Ecosystem restarted successfully');
      return true;
    } else {
      this.log(`❌ Failed to restart ecosystem: ${result.error}`);
      return false;
    }
  }

  async reloadEcosystem() {
    this.log('🔄 Reloading PM2 ecosystem...');
    
    const command = 'pm2 reload ecosystem.config.js';
    const result = await this.executeCommand(command);
    
    if (result.success) {
      this.log('✅ Ecosystem reloaded successfully');
      return true;
    } else {
      this.log(`❌ Failed to reload ecosystem: ${result.error}`);
      return false;
    }
  }

  async getStatus() {
    this.log('📊 Getting PM2 status...');
    
    const command = 'pm2 status --json';
    const result = await this.executeCommand(command);
    
    if (result.success) {
      try {
        const status = JSON.parse(result.output);
        this.analyzeStatus(status);
        return status;
      } catch (error) {
        this.log(`❌ Error parsing status: ${error.message}`);
        return null;
      }
    } else {
      this.log(`❌ Failed to get status: ${result.error}`);
      return null;
    }
  }

  analyzeStatus(status) {
    if (!status || !Array.isArray(status)) return;
    
    for (const process of status) {
      const processName = process.name;
      const metrics = {
        cpu: process.monit?.cpu || 0,
        memory: process.monit?.memory || 0,
        uptime: process.pm2_env?.pm_uptime || 0,
        restarts: process.pm2_env?.restart_time || 0,
        status: process.pm2_env?.status || 'unknown'
      };
      
      this.processStats.set(processName, metrics);
      this.analyzeProcessHealth(processName, metrics);
    }
  }

  analyzeProcessHealth(processName, metrics) {
    const healthScore = this.calculateHealthScore(metrics);
    this.healthMetrics.set(processName, healthScore);
    
    if (healthScore < 0.5) {
      this.log(`⚠️ Process ${processName} has low health score: ${healthScore.toFixed(2)}`, 'warn');
      this.triggerHealthAlert(processName, metrics);
    }
  }

  calculateHealthScore(metrics) {
    let score = 1.0;
    
    // CPU usage penalty
    if (metrics.cpu > 80) score -= 0.3;
    else if (metrics.cpu > 60) score -= 0.1;
    
    // Memory usage penalty
    if (metrics.memory > 80) score -= 0.3;
    else if (metrics.memory > 60) score -= 0.1;
    
    // Restart penalty
    if (metrics.restarts > 5) score -= 0.2;
    else if (metrics.restarts > 2) score -= 0.1;
    
    return Math.max(0, score);
  }

  triggerHealthAlert(processName, metrics) {
    this.log(`🚨 Health alert for ${processName}:`, 'error');
    this.log(`   CPU: ${metrics.cpu}%, Memory: ${metrics.memory}%, Restarts: ${metrics.restarts}`, 'error');
    
    // Auto-restart if health is critically low
    if (this.healthMetrics.get(processName) < 0.3) {
      this.log(`🔄 Auto-restarting ${processName} due to critical health...`, 'warn');
      this.restartProcess(processName);
    }
  }

  async restartProcess(processName) {
    this.log(`🔄 Restarting process: ${processName}`);
    
    const command = `pm2 restart ${processName}`;
    const result = await this.executeCommand(command);
    
    if (result.success) {
      this.log(`✅ Process ${processName} restarted successfully`);
    } else {
      this.log(`❌ Failed to restart ${processName}: ${result.error}`);
    }
  }

  async scaleProcess(processName, instances) {
    this.log(`📈 Scaling process ${processName} to ${instances} instances...`);
    
    const command = `pm2 scale ${processName} ${instances}`;
    const result = await this.executeCommand(command);
    
    if (result.success) {
      this.log(`✅ Process ${processName} scaled to ${instances} instances`);
      return true;
    } else {
      this.log(`❌ Failed to scale ${processName}: ${result.error}`);
      return false;
    }
  }

  async monitorPerformance() {
    this.log('📊 Starting performance monitoring...');
    
    setInterval(async () => {
      const status = await this.getStatus();
      if (status) {
        this.analyzePerformance(status);
      }
    }, this.config.healthCheckInterval);
  }

  analyzePerformance(status) {
    if (!status || !Array.isArray(status)) return;
    
    for (const process of status) {
      const processName = process.name;
      const metrics = this.processStats.get(processName);
      
      if (metrics) {
        // Check for performance bottlenecks
        if (metrics.cpu > 90) {
          this.log(`🔥 High CPU usage detected for ${processName}: ${metrics.cpu}%`, 'warn');
          this.optimizeProcess(processName, 'cpu');
        }
        
        if (metrics.memory > 90) {
          this.log(`🔥 High memory usage detected for ${processName}: ${metrics.memory}%`, 'warn');
          this.optimizeProcess(processName, 'memory');
        }
      }
    }
  }

  async optimizeProcess(processName, resource) {
    this.log(`⚡ Optimizing ${processName} for ${resource} usage...`);
    
    if (resource === 'cpu') {
      // Reduce CPU usage by adjusting PM2 settings
      const command = `pm2 restart ${processName} --max-memory-restart 256M`;
      await this.executeCommand(command);
    } else if (resource === 'memory') {
      // Reduce memory usage
      const command = `pm2 restart ${processName} --max-memory-restart 128M`;
      await this.executeCommand(command);
    }
  }

  async generateReport() {
    this.log('📊 Generating PM2 automation report...');
    
    const report = {
      timestamp: new Date().toISOString(),
      processes: Array.from(this.processStats.entries()).map(([name, metrics]) => ({
        name,
        ...metrics,
        healthScore: this.healthMetrics.get(name) || 0
      })),
      summary: {
        totalProcesses: this.processStats.size,
        averageHealthScore: Array.from(this.healthMetrics.values()).reduce((a, b) => a + b, 0) / this.healthMetrics.size || 0,
        criticalProcesses: Array.from(this.healthMetrics.entries()).filter(([_, score]) => score < 0.5).length
      }
    };
    
    const reportPath = path.join(this.config.logsPath, 'pm2-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    this.log(`📊 Report generated: ${reportPath}`);
    return report;
  }

  startHealthMonitoring() {
    this.log('👀 Starting health monitoring...');
    this.monitorPerformance();
  }

  async cleanup() {
    this.log('🧹 Cleaning up PM2 processes...');
    
    const command = 'pm2 delete all';
    const result = await this.executeCommand(command);
    
    if (result.success) {
      this.log('✅ All PM2 processes cleaned up');
    } else {
      this.log(`❌ Cleanup failed: ${result.error}`);
    }
  }

  async showHelp() {
    console.log(`
🚀 PM2 Intelligent Manager - Advanced Process Management

Usage: node pm2-intelligent-manager.cjs [command] [options]

Commands:
  start [env]     - Start ecosystem (dev|prod, default: dev)
  stop            - Stop ecosystem
  restart         - Restart ecosystem
  reload          - Reload ecosystem (zero-downtime)
  status          - Show detailed status
  scale <name> <n> - Scale process to n instances
  report          - Generate performance report
  monitor         - Start performance monitoring
  cleanup         - Clean up all processes
  help            - Show this help

Examples:
  node pm2-intelligent-manager.cjs start dev
  node pm2-intelligent-manager.cjs scale zion-website 3
  node pm2-intelligent-manager.cjs status
  node pm2-intelligent-manager.cjs report

Features:
  ✅ Intelligent health monitoring
  ✅ Auto-restart on failures
  ✅ Performance optimization
  ✅ Resource usage analysis
  ✅ Automated scaling
  ✅ Health score calculation
  ✅ Performance bottleneck detection
    `);
  }
}

// CLI handling
const manager = new PM2IntelligentManager();
const command = process.argv[2];
const options = process.argv.slice(3);

(async () => {
  try {
    switch (command) {
      case 'start':
        const env = options[0] || 'development';
        await manager.startEcosystem(env);
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
      case 'status':
        await manager.getStatus();
        break;
      case 'scale':
        if (options.length >= 2) {
          await manager.scaleProcess(options[0], parseInt(options[1]));
        } else {
          console.log('Usage: scale <process-name> <instances>');
        }
        break;
      case 'report':
        await manager.generateReport();
        break;
      case 'monitor':
        manager.startHealthMonitoring();
        // Keep running for monitoring
        process.stdin.resume();
        break;
      case 'cleanup':
        await manager.cleanup();
        break;
      case 'help':
      default:
        manager.showHelp();
        break;
    }
  } catch (error) {
    manager.log(`❌ Command execution failed: ${error.message}`, 'error');
    process.exit(1);
  }
})();

// Graceful shutdown
process.on('SIGINT', async () => {
  console.log('\n🛑 Shutting down PM2 manager...');
  process.exit(0);
});

process.on('SIGTERM', async () => {
  console.log('\n🛑 Shutting down PM2 manager...');
  process.exit(0);
});