#!/usr/bin/env node

const { execSync, spawn } = require('child_process');
const fs = require('fs');
const path = require('path');
const os = require('os');

class PM2IntelligentManager {
  constructor() {
    this.config = {
      ecosystemFile: 'ecosystem.config.js',
      logDir: './logs',
      healthCheckInterval: 30000, // 30 seconds
      maxRestarts: 5,
      memoryThreshold: 0.8, // 80% memory usage
      cpuThreshold: 0.7, // 70% CPU usage
      autoScaleThreshold: 0.6, // 60% resource usage triggers scaling
      backupInterval: 3600000, // 1 hour
      cleanupInterval: 86400000 // 24 hours
    };
    
    this.ensureLogDirectory();
    this.stats = {
      totalRestarts: 0,
      lastHealthCheck: Date.now(),
      processHealth: new Map(),
      resourceUsage: new Map(),
      alerts: []
    };
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
    
    const logFile = path.join(this.config.logDir, `pm2-manager-${level}.log`);
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

  async getSystemResources() {
    const totalMem = os.totalmem();
    const freeMem = os.freemem();
    const usedMem = totalMem - freeMem;
    const memoryUsage = usedMem / totalMem;
    
    // Get CPU usage (simplified)
    const cpus = os.cpus();
    const cpuUsage = cpus.reduce((acc, cpu) => {
      const total = Object.values(cpu.times).reduce((a, b) => a + b);
      const idle = cpu.times.idle;
      return acc + ((total - idle) / total);
    }, 0) / cpus.length;

    return {
      memory: {
        total: totalMem,
        used: usedMem,
        free: freeMem,
        usage: memoryUsage
      },
      cpu: {
        cores: cpus.length,
        usage: cpuUsage
      },
      loadAverage: os.loadavg(),
      uptime: os.uptime()
    };
  }

  async healthCheck() {
    this.log('🔍 Starting health check...');
    
    const processes = await this.getPM2Status();
    const resources = await this.getSystemResources();
    
    // Check each process health
    for (const process of processes) {
      const processName = process.name;
      const health = this.analyzeProcessHealth(process, resources);
      
      this.stats.processHealth.set(processName, health);
      
      if (health.status === 'critical') {
        await this.handleCriticalProcess(processName, health);
      } else if (health.status === 'warning') {
        await this.handleWarningProcess(processName, health);
      }
    }
    
    // Check system resources
    if (resources.memory.usage > this.config.memoryThreshold) {
      await this.handleHighMemoryUsage(resources.memory);
    }
    
    if (resources.cpu.usage > this.config.cpuThreshold) {
      await this.handleHighCPUUsage(resources.cpu);
    }
    
    // Auto-scale if needed
    if (resources.memory.usage > this.config.autoScaleThreshold || 
        resources.cpu.usage > this.config.autoScaleThreshold) {
      await this.autoScale();
    }
    
    this.stats.lastHealthCheck = Date.now();
    this.log('✅ Health check completed');
  }

  analyzeProcessHealth(process, resources) {
    const health = {
      status: 'healthy',
      score: 100,
      issues: [],
      metrics: {}
    };
    
    // Check restart count
    if (process.pm2_env.restart_time > this.config.maxRestarts) {
      health.status = 'critical';
      health.score -= 30;
      health.issues.push(`High restart count: ${process.pm2_env.restart_time}`);
    }
    
    // Check memory usage
    if (process.monit && process.monit.memory) {
      const memUsage = process.monit.memory / 1024 / 1024; // Convert to MB
      health.metrics.memory = memUsage;
      
      if (memUsage > 1000) { // 1GB threshold
        health.status = health.status === 'healthy' ? 'warning' : health.status;
        health.score -= 20;
        health.issues.push(`High memory usage: ${memUsage.toFixed(2)}MB`);
      }
    }
    
    // Check CPU usage
    if (process.monit && process.monit.cpu) {
      health.metrics.cpu = process.monit.cpu;
      
      if (process.monit.cpu > 80) { // 80% CPU threshold
        health.status = health.status === 'healthy' ? 'warning' : health.status;
        health.score -= 15;
        health.issues.push(`High CPU usage: ${process.monit.cpu}%`);
      }
    }
    
    // Check uptime
    if (process.pm2_env.pm_uptime < 60000) { // Less than 1 minute
      health.status = health.status === 'healthy' ? 'warning' : health.status;
      health.score -= 10;
      health.issues.push('Recent restart');
    }
    
    // Determine final status
    if (health.score < 50) {
      health.status = 'critical';
    } else if (health.score < 80) {
      health.status = 'warning';
    }
    
    return health;
  }

  async handleCriticalProcess(processName, health) {
    this.log(`🚨 Critical process detected: ${processName}`, 'error');
    this.log(`Issues: ${health.issues.join(', ')}`, 'error');
    
    // Attempt to restart the process
    await this.executeCommand(`pm2 restart ${processName}`);
    
    // Log the alert
    this.stats.alerts.push({
      timestamp: Date.now(),
      type: 'critical',
      process: processName,
      issues: health.issues,
      action: 'restarted'
    });
    
    // Send notification (could be extended to Slack, email, etc.)
    this.sendAlert(`Critical process ${processName} restarted automatically`);
  }

  async handleWarningProcess(processName, health) {
    this.log(`⚠️ Warning process detected: ${processName}`, 'warn');
    this.log(`Issues: ${health.issues.join(', ')}`, 'warn');
    
    // Log the warning
    this.stats.alerts.push({
      timestamp: Date.now(),
      type: 'warning',
      process: processName,
      issues: health.issues,
      action: 'monitored'
    });
  }

  async handleHighMemoryUsage(memory) {
    this.log(`⚠️ High memory usage detected: ${(memory.usage * 100).toFixed(1)}%`, 'warn');
    
    // Attempt to free memory by restarting non-critical processes
    const processes = await this.getPM2Status();
    const nonCritical = processes.filter(p => 
      !p.name.includes('prod') && 
      !p.name.includes('critical') &&
      p.pm2_env.restart_time < 3
    );
    
    if (nonCritical.length > 0) {
      const processToRestart = nonCritical[0];
      this.log(`Restarting non-critical process ${processToRestart.name} to free memory`);
      await this.executeCommand(`pm2 restart ${processToRestart.name}`);
    }
  }

  async handleHighCPUUsage(cpu) {
    this.log(`⚠️ High CPU usage detected: ${(cpu.usage * 100).toFixed(1)}%`, 'warn');
    
    // Could implement CPU throttling or process prioritization here
    this.log('Monitoring CPU usage - consider scaling if persistent');
  }

  async autoScale() {
    this.log('🚀 Auto-scaling triggered');
    
    const processes = await this.getPM2Status();
    const productionProcesses = processes.filter(p => p.name.includes('prod'));
    
    for (const process of productionProcesses) {
      if (process.pm2_env.instances < 4) { // Max 4 instances
        this.log(`Scaling up ${process.name} from ${process.pm2_env.instances} to ${process.pm2_env.instances + 1} instances`);
        await this.executeCommand(`pm2 scale ${process.name} +1`);
      }
    }
  }

  async startDevelopmentEnvironment() {
    this.log('🚀 Starting development environment...');
    
    // Start frontend and backend in development mode
    await this.executeCommand('pm2 start ecosystem.config.js --only zion-frontend-dev,zion-backend-dev');
    
    // Start automation services
    await this.executeCommand('pm2 start ecosystem.config.js --only zion-automation-orchestrator,zion-code-quality-monitor');
    
    this.log('✅ Development environment started');
  }

  async startProductionEnvironment() {
    this.log('🚀 Starting production environment...');
    
    // Build the application first
    this.log('📦 Building application...');
    await this.executeCommand('npm run build:hybrid');
    
    // Start production processes
    await this.executeCommand('pm2 start ecosystem.config.js --only zion-frontend-prod,zion-backend-prod');
    
    // Start monitoring services
    await this.executeCommand('pm2 start ecosystem.config.js --only zion-performance-monitor,zion-security-scanner');
    
    this.log('✅ Production environment started');
  }

  async startHybridEnvironment() {
    this.log('🚀 Starting hybrid environment...');
    
    await this.executeCommand('pm2 start ecosystem.config.js --only zion-hybrid-dev');
    
    // Start all monitoring services
    await this.executeCommand('pm2 start ecosystem.config.js --only zion-automation-orchestrator,zion-code-quality-monitor,zion-performance-monitor,zion-security-scanner,zion-lint-monitor');
    
    this.log('✅ Hybrid environment started');
  }

  async stopAll() {
    this.log('🛑 Stopping all processes...');
    await this.executeCommand('pm2 stop all');
    this.log('✅ All processes stopped');
  }

  async restartAll() {
    this.log('🔄 Restarting all processes...');
    await this.executeCommand('pm2 restart all');
    this.log('✅ All processes restarted');
  }

  async reloadAll() {
    this.log('🔄 Reloading all processes...');
    await this.executeCommand('pm2 reload all');
    this.log('✅ All processes reloaded');
  }

  async showStatus() {
    this.log('📊 PM2 Status:');
    await this.executeCommand('pm2 status');
    
    this.log('📊 System Resources:');
    const resources = await this.getSystemResources();
    this.log(`Memory: ${(resources.memory.usage * 100).toFixed(1)}% (${(resources.memory.used / 1024 / 1024 / 1024).toFixed(2)}GB / ${(resources.memory.total / 1024 / 1024 / 1024).toFixed(2)}GB)`);
    this.log(`CPU: ${(resources.cpu.usage * 100).toFixed(1)}% (${resources.cpu.cores} cores)`);
    this.log(`Load Average: ${resources.loadAverage.map(l => l.toFixed(2)).join(', ')}`);
  }

  async showLogs(processName = null, lines = 100) {
    if (processName) {
      this.log(`📋 Logs for ${processName}:`);
      await this.executeCommand(`pm2 logs ${processName} --lines ${lines}`);
    } else {
      this.log('📋 All logs:');
      await this.executeCommand(`pm2 logs --lines ${lines}`);
    }
  }

  async cleanupLogs() {
    this.log('🧹 Cleaning up old logs...');
    
    const logFiles = fs.readdirSync(this.config.logDir);
    const now = Date.now();
    const maxAge = 7 * 24 * 60 * 60 * 1000; // 7 days
    
    for (const file of logFiles) {
      const filePath = path.join(this.config.logDir, file);
      const stats = fs.statSync(filePath);
      
      if (now - stats.mtime.getTime() > maxAge) {
        fs.unlinkSync(filePath);
        this.log(`Deleted old log file: ${file}`);
      }
    }
    
    this.log('✅ Log cleanup completed');
  }

  async backupConfiguration() {
    this.log('💾 Backing up configuration...');
    
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const backupDir = path.join(this.config.logDir, 'backups');
    
    if (!fs.existsSync(backupDir)) {
      fs.mkdirSync(backupDir, { recursive: true });
    }
    
    const backupPath = path.join(backupDir, `ecosystem-backup-${timestamp}.js`);
    fs.copyFileSync(this.config.ecosystemFile, backupPath);
    
    this.log(`✅ Configuration backed up to: ${backupPath}`);
  }

  sendAlert(message) {
    // This could be extended to send notifications via:
    // - Slack webhook
    // - Email
    // - SMS
    // - Discord webhook
    // - etc.
    this.log(`🚨 ALERT: ${message}`, 'error');
  }

  async startMonitoring() {
    this.log('🔍 Starting continuous monitoring...');
    
    // Initial health check
    await this.healthCheck();
    
    // Set up periodic health checks
    setInterval(async () => {
      await this.healthCheck();
    }, this.config.healthCheckInterval);
    
    // Set up periodic cleanup
    setInterval(async () => {
      await this.cleanupLogs();
    }, this.config.cleanupInterval);
    
    // Set up periodic backups
    setInterval(async () => {
      await this.backupConfiguration();
    }, this.config.backupInterval);
    
    this.log('✅ Continuous monitoring started');
  }

  async generateReport() {
    this.log('📊 Generating system report...');
    
    const processes = await this.getPM2Status();
    const resources = await this.getSystemResources();
    
    const report = {
      timestamp: new Date().toISOString(),
      system: {
        uptime: resources.uptime,
        memory: resources.memory,
        cpu: resources.cpu,
        loadAverage: resources.loadAverage
      },
      processes: processes.map(p => ({
        name: p.name,
        status: p.pm2_env.status,
        instances: p.pm2_env.instances,
        restarts: p.pm2_env.restart_time,
        memory: p.monit?.memory || 0,
        cpu: p.monit?.cpu || 0,
        uptime: p.pm2_env.pm_uptime
      })),
      health: {
        totalProcesses: processes.length,
        healthyProcesses: processes.filter(p => this.stats.processHealth.get(p.name)?.status === 'healthy').length,
        warningProcesses: processes.filter(p => this.stats.processHealth.get(p.name)?.status === 'warning').length,
        criticalProcesses: processes.filter(p => this.stats.processHealth.get(p.name)?.status === 'critical').length
      },
      alerts: this.stats.alerts.slice(-10), // Last 10 alerts
      recommendations: this.generateRecommendations(processes, resources)
    };
    
    const reportPath = path.join(this.config.logDir, `system-report-${Date.now()}.json`);
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    this.log(`✅ System report generated: ${reportPath}`);
    return report;
  }

  generateRecommendations(processes, resources) {
    const recommendations = [];
    
    if (resources.memory.usage > 0.8) {
      recommendations.push('Consider increasing server memory or optimizing memory usage');
    }
    
    if (resources.cpu.usage > 0.7) {
      recommendations.push('Consider scaling horizontally or optimizing CPU-intensive operations');
    }
    
    const highRestartProcesses = processes.filter(p => p.pm2_env.restart_time > 3);
    if (highRestartProcesses.length > 0) {
      recommendations.push(`Investigate processes with high restart counts: ${highRestartProcesses.map(p => p.name).join(', ')}`);
    }
    
    return recommendations;
  }
}

// CLI interface
async function main() {
  const manager = new PM2IntelligentManager();
  const command = process.argv[2];
  const args = process.argv.slice(3);
  
  try {
    switch (command) {
      case 'start:dev':
        await manager.startDevelopmentEnvironment();
        break;
      case 'start:prod':
        await manager.startProductionEnvironment();
        break;
      case 'start:hybrid':
        await manager.startHybridEnvironment();
        break;
      case 'stop':
        await manager.stopAll();
        break;
      case 'restart':
        await manager.restartAll();
        break;
      case 'reload':
        await manager.reloadAll();
        break;
      case 'status':
        await manager.showStatus();
        break;
      case 'logs':
        await manager.showLogs(args[0], args[1] || 100);
        break;
      case 'health':
        await manager.healthCheck();
        break;
      case 'monitor':
        await manager.startMonitoring();
        break;
      case 'report':
        await manager.generateReport();
        break;
      case 'cleanup':
        await manager.cleanupLogs();
        break;
      case 'backup':
        await manager.backupConfiguration();
        break;
      default:
        console.log(`
🚀 PM2 Intelligent Manager

Usage: node pm2-intelligent-manager.js <command> [options]

Commands:
  start:dev     Start development environment
  start:prod    Start production environment
  start:hybrid  Start hybrid environment
  stop          Stop all processes
  restart       Restart all processes
  reload        Reload all processes
  status        Show PM2 status and system resources
  logs [name]   Show logs (optional: process name, lines)
  health        Run health check
  monitor       Start continuous monitoring
  report        Generate system report
  cleanup       Clean up old logs
  backup        Backup configuration

Examples:
  node pm2-intelligent-manager.js start:dev
  node pm2-intelligent-manager.js status
  node pm2-intelligent-manager.js logs zion-frontend-dev 50
  node pm2-intelligent-manager.js monitor
        `);
    }
  } catch (error) {
    manager.log(`Command failed: ${error.message}`, 'error');
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = PM2IntelligentManager;