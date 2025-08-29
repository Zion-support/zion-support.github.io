#!/usr/bin/env node

const { execSync, spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

class IntelligentPM2Manager {
  constructor() {
    this.config = {
      ecosystemFile: 'ecosystem.config.js',
      logDirectory: './automation/logs',
      healthCheckInterval: 30000, // 30 seconds
      autoRestartThreshold: 3, // Restart after 3 failures
      memoryThreshold: 0.8, // 80% memory usage threshold
      cpuThreshold: 0.7, // 70% CPU usage threshold
      scalingThreshold: 0.9, // 90% resource usage triggers scaling
      backupInterval: 3600000 // 1 hour
    };
    
    this.processStats = new Map();
    this.healthMetrics = new Map();
    this.ensureDirectories();
  }

  ensureDirectories() {
    const dirs = [this.config.logDirectory, './automation/backups'];
    dirs.forEach(dir => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
    });
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}\n`;
    console.log(logMessage.trim());
    
    const logFile = path.join(this.config.logDirectory, 'pm2-manager.log');
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

  async startEcosystem() {
    this.log('🚀 Starting PM2 ecosystem...');
    
    const result = await this.executeCommand(`pm2 start ${this.config.ecosystemFile}`);
    
    if (result.success) {
      this.log('✅ Ecosystem started successfully');
      this.startHealthMonitoring();
      this.startAutoScaling();
      this.startBackupScheduler();
    } else {
      this.log(`❌ Failed to start ecosystem: ${result.error}`, 'ERROR');
    }
    
    return result;
  }

  async stopEcosystem() {
    this.log('🛑 Stopping PM2 ecosystem...');
    
    const result = await this.executeCommand('pm2 stop all');
    
    if (result.success) {
      this.log('✅ Ecosystem stopped successfully');
    } else {
      this.log(`❌ Failed to stop ecosystem: ${result.error}`, 'ERROR');
    }
    
    return result;
  }

  async restartEcosystem() {
    this.log('🔄 Restarting PM2 ecosystem...');
    
    const result = await this.executeCommand('pm2 restart all');
    
    if (result.success) {
      this.log('✅ Ecosystem restarted successfully');
    } else {
      this.log(`❌ Failed to restart ecosystem: ${result.error}`, 'ERROR');
    }
    
    return result;
  }

  async getStatus() {
    const result = await this.executeCommand('pm2 status --json');
    
    if (result.success) {
      try {
        const status = JSON.parse(result.output);
        this.updateProcessStats(status);
        return status;
      } catch (error) {
        this.log(`❌ Failed to parse status: ${error.message}`, 'ERROR');
        return null;
      }
    }
    
    return null;
  }

  updateProcessStats(status) {
    if (!status || !Array.isArray(status)) return;
    
    status.forEach(process => {
      this.processStats.set(process.name, {
        name: process.name,
        status: process.pm2_env.status,
        memory: process.monit.memory,
        cpu: process.monit.cpu,
        uptime: process.pm2_env.pm_uptime,
        restarts: process.pm2_env.restart_time,
        lastUpdate: Date.now()
      });
    });
  }

  async startHealthMonitoring() {
    this.log('🏥 Starting health monitoring...');
    
    setInterval(async () => {
      await this.performHealthCheck();
    }, this.config.healthCheckInterval);
  }

  async performHealthCheck() {
    const status = await this.getStatus();
    if (!status) return;

    for (const process of status) {
      const health = this.assessProcessHealth(process);
      this.healthMetrics.set(process.name, health);
      
      if (health.needsAttention) {
        await this.handleProcessIssue(process, health);
      }
    }
  }

  assessProcessHealth(process) {
    const memoryUsage = process.monit.memory / (1024 * 1024); // MB
    const cpuUsage = process.monit.cpu;
    const uptime = Date.now() - process.pm2_env.pm_uptime;
    
    const health = {
      name: process.name,
      status: process.pm2_env.status,
      memoryUsage,
      cpuUsage,
      uptime,
      restarts: process.pm2_env.restart_time,
      needsAttention: false,
      issues: [],
      recommendations: []
    };

    // Memory threshold check
    if (memoryUsage > 512) { // 512MB threshold
      health.needsAttention = true;
      health.issues.push('High memory usage');
      health.recommendations.push('Consider memory optimization or restart');
    }

    // CPU threshold check
    if (cpuUsage > 80) {
      health.needsAttention = true;
      health.issues.push('High CPU usage');
      health.recommendations.push('Check for performance bottlenecks');
    }

    // Restart threshold check
    if (process.pm2_env.restart_time > this.config.autoRestartThreshold) {
      health.needsAttention = true;
      health.issues.push('Excessive restarts');
      health.recommendations.push('Investigate root cause of crashes');
    }

    // Uptime check
    if (uptime < 60000) { // Less than 1 minute
      health.needsAttention = true;
      health.issues.push('Recent restart');
      health.recommendations.push('Monitor for stability');
    }

    return health;
  }

  async handleProcessIssue(process, health) {
    this.log(`⚠️ Process ${process.name} needs attention: ${health.issues.join(', ')}`, 'WARN');
    
    // Auto-restart if excessive restarts
    if (health.restarts > this.config.autoRestartThreshold) {
      this.log(`🔄 Auto-restarting ${process.name} due to excessive restarts`);
      await this.executeCommand(`pm2 restart ${process.name}`);
    }
    
    // Memory optimization
    if (health.memoryUsage > 512) {
      this.log(`🧠 High memory usage detected for ${process.name}: ${health.memoryUsage.toFixed(2)}MB`);
      await this.optimizeProcessMemory(process.name);
    }
    
    // Generate alert
    await this.generateHealthAlert(process, health);
  }

  async optimizeProcessMemory(processName) {
    this.log(`🔧 Optimizing memory for ${processName}...`);
    
    // Try graceful restart first
    await this.executeCommand(`pm2 restart ${processName}`);
    
    // If still high, try reload
    setTimeout(async () => {
      const status = await this.getStatus();
      const process = status?.find(p => p.name === processName);
      
      if (process && process.monit.memory > 512 * 1024 * 1024) {
        this.log(`🔄 Reloading ${processName} for memory optimization`);
        await this.executeCommand(`pm2 reload ${processName}`);
      }
    }, 5000);
  }

  async generateHealthAlert(process, health) {
    const alert = {
      timestamp: new Date().toISOString(),
      process: process.name,
      issues: health.issues,
      recommendations: health.recommendations,
      metrics: {
        memory: health.memoryUsage,
        cpu: health.cpuUsage,
        uptime: health.uptime,
        restarts: health.restarts
      }
    };

    const alertFile = path.join(this.config.logDirectory, `health-alert-${process.name}-${Date.now()}.json`);
    fs.writeFileSync(alertFile, JSON.stringify(alert, null, 2));
    
    this.log(`📊 Health alert generated: ${alertFile}`);
  }

  async startAutoScaling() {
    this.log('📈 Starting auto-scaling monitor...');
    
    setInterval(async () => {
      await this.checkScalingNeeds();
    }, 60000); // Check every minute
  }

  async checkScalingNeeds() {
    const status = await this.getStatus();
    if (!status) return;

    const totalMemory = status.reduce((sum, p) => sum + p.monit.memory, 0);
    const totalCPU = status.reduce((sum, p) => sum + p.monit.cpu, 0);
    
    // Check if scaling is needed
    if (totalMemory > 1024 * 1024 * 1024 || totalCPU > 80) { // 1GB or 80% CPU
      this.log('📈 High resource usage detected, considering scaling...');
      await this.performIntelligentScaling(status);
    }
  }

  async performIntelligentScaling(status) {
    // Identify processes that can be scaled
    const scalableProcesses = status.filter(p => 
      p.name.includes('lint') || 
      p.name.includes('monitor') || 
      p.name.includes('scanner')
    );

    for (const process of scalableProcesses) {
      if (process.monit.cpu > 60 || process.monit.memory > 256 * 1024 * 1024) {
        this.log(`🔄 Scaling ${process.name} for better performance`);
        await this.executeCommand(`pm2 scale ${process.name} 2`);
      }
    }
  }

  async startBackupScheduler() {
    this.log('💾 Starting backup scheduler...');
    
    setInterval(async () => {
      await this.createBackup();
    }, this.config.backupInterval);
  }

  async createBackup() {
    this.log('💾 Creating system backup...');
    
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const backupDir = path.join('./automation/backups', `pm2-backup-${timestamp}`);
    
    try {
      // Create backup directory
      fs.mkdirSync(backupDir, { recursive: true });
      
      // Backup PM2 configuration
      const configBackup = path.join(backupDir, 'ecosystem.config.js');
      fs.copyFileSync(this.config.ecosystemFile, configBackup);
      
      // Backup logs
      const logsBackup = path.join(backupDir, 'logs');
      if (fs.existsSync(this.config.logDirectory)) {
        await this.executeCommand(`cp -r ${this.config.logDirectory} ${logsBackup}`);
      }
      
      // Backup process list
      const processList = await this.executeCommand('pm2 save');
      if (processList.success) {
        const processBackup = path.join(backupDir, 'process-list.json');
        fs.writeFileSync(processBackup, processList.output);
      }
      
      this.log(`✅ Backup created: ${backupDir}`);
      
      // Clean old backups (keep last 5)
      await this.cleanOldBackups();
      
    } catch (error) {
      this.log(`❌ Backup failed: ${error.message}`, 'ERROR');
    }
  }

  async cleanOldBackups() {
    const backupDir = './automation/backups';
    if (!fs.existsSync(backupDir)) return;
    
    const backups = fs.readdirSync(backupDir)
      .filter(dir => dir.startsWith('pm2-backup-'))
      .map(dir => ({
        name: dir,
        path: path.join(backupDir, dir),
        time: fs.statSync(path.join(backupDir, dir)).mtime.getTime()
      }))
      .sort((a, b) => b.time - a.time);
    
    // Keep only last 5 backups
    if (backups.length > 5) {
      for (let i = 5; i < backups.length; i++) {
        const backup = backups[i];
        fs.rmSync(backup.path, { recursive: true, force: true });
        this.log(`🗑️ Removed old backup: ${backup.name}`);
      }
    }
  }

  async generateReport() {
    this.log('📊 Generating system report...');
    
    const status = await this.getStatus();
    const report = {
      timestamp: new Date().toISOString(),
      totalProcesses: status?.length || 0,
      runningProcesses: status?.filter(p => p.pm2_env.status === 'online').length || 0,
      stoppedProcesses: status?.filter(p => p.pm2_env.status === 'stopped').length || 0,
      healthMetrics: Array.from(this.healthMetrics.values()),
      processStats: Array.from(this.processStats.values()),
      recommendations: this.generateRecommendations()
    };

    const reportFile = path.join(this.config.logDirectory, `system-report-${Date.now()}.json`);
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    
    this.log(`📊 Report generated: ${reportFile}`);
    return report;
  }

  generateRecommendations() {
    const recommendations = [];
    
    // Memory optimization
    const highMemoryProcesses = Array.from(this.healthMetrics.values())
      .filter(h => h.memoryUsage > 256);
    
    if (highMemoryProcesses.length > 0) {
      recommendations.push({
        type: 'memory',
        priority: 'high',
        message: `Consider memory optimization for: ${highMemoryProcesses.map(p => p.name).join(', ')}`,
        action: 'Review memory usage patterns and implement optimizations'
      });
    }
    
    // CPU optimization
    const highCPUProcesses = Array.from(this.healthMetrics.values())
      .filter(h => h.cpuUsage > 60);
    
    if (highCPUProcesses.length > 0) {
      recommendations.push({
        type: 'performance',
        priority: 'medium',
        message: `High CPU usage detected for: ${highCPUProcesses.map(p => p.name).join(', ')}`,
        action: 'Investigate performance bottlenecks and optimize algorithms'
      });
    }
    
    // Stability improvements
    const unstableProcesses = Array.from(this.healthMetrics.values())
      .filter(h => h.restarts > 2);
    
    if (unstableProcesses.length > 0) {
      recommendations.push({
        type: 'stability',
        priority: 'critical',
        message: `Unstable processes detected: ${unstableProcesses.map(p => p.name).join(', ')}`,
        action: 'Investigate root causes and implement error handling'
      });
    }
    
    return recommendations;
  }

  async showHelp() {
    console.log(`
🤖 Intelligent PM2 Manager - Advanced Automation Control

Usage: node pm2-intelligent-manager.js [command]

Commands:
  start       - Start the entire PM2 ecosystem
  stop        - Stop all PM2 processes
  restart     - Restart all PM2 processes
  status      - Show detailed status and health metrics
  health      - Perform health check and show issues
  scale       - Scale specific processes based on load
  backup      - Create manual backup
  report      - Generate comprehensive system report
  monitor     - Start continuous monitoring mode
  help        - Show this help message

Features:
  🏥 Automatic health monitoring
  📈 Intelligent auto-scaling
  💾 Automated backups
  🔧 Process optimization
  📊 Performance analytics
  ⚠️ Smart alerts and notifications

Examples:
  node pm2-intelligent-manager.js start
  node pm2-intelligent-manager.js status
  node pm2-intelligent-manager.js health
  node pm2-intelligent-manager.js monitor
`);
  }
}

// CLI handling
const manager = new IntelligentPM2Manager();
const command = process.argv[2];

(async () => {
  try {
    switch (command) {
      case 'start':
        await manager.startEcosystem();
        break;
      case 'stop':
        await manager.stopEcosystem();
        break;
      case 'restart':
        await manager.restartEcosystem();
        break;
      case 'status':
        const status = await manager.getStatus();
        console.log(JSON.stringify(status, null, 2));
        break;
      case 'health':
        await manager.performHealthCheck();
        const health = Array.from(manager.healthMetrics.values());
        console.log(JSON.stringify(health, null, 2));
        break;
      case 'scale':
        await manager.checkScalingNeeds();
        break;
      case 'backup':
        await manager.createBackup();
        break;
      case 'report':
        await manager.generateReport();
        break;
      case 'monitor':
        console.log('👀 Starting continuous monitoring...');
        await manager.startHealthMonitoring();
        await manager.startAutoScaling();
        await manager.startBackupScheduler();
        
        // Keep the process running
        process.stdin.resume();
        console.log('Press Ctrl+C to stop monitoring');
        break;
      case 'help':
      default:
        manager.showHelp();
        break;
    }
  } catch (error) {
    console.error('❌ Error:', error.message);
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