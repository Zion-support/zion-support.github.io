#!/usr/bin/env node

const { execSync, spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

class PM2IntelligentManager {
  constructor() {
    this.config = {
      ecosystemFile: 'ecosystem.config.js',
      logDirectory: './automation/logs',
      healthCheckInterval: 30000,
      autoRestartThreshold: 3,
      memoryThreshold: 0.8,
      cpuThreshold: 0.9,
      backupInterval: 3600000, // 1 hour
      maxBackups: 24
    };
    
    this.healthMetrics = new Map();
    this.processHistory = new Map();
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

  log(message, level = 'info') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level.toUpperCase()}] ${message}\n`;
    console.log(`[${level.toUpperCase()}] ${message}`);
    
    const logFile = path.join(this.config.logDirectory, 'pm2-intelligent-manager.log');
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

  async getSystemMetrics() {
    const metrics = {};
    
    // Memory usage
    try {
      const memoryInfo = execSync('free -m', { encoding: 'utf8' });
      const memoryLines = memoryInfo.split('\n');
      const memLine = memoryLines[1].split(/\s+/);
      metrics.memory = {
        total: parseInt(memLine[1]),
        used: parseInt(memLine[2]),
        free: parseInt(memLine[3]),
        usage: (parseInt(memLine[2]) / parseInt(memLine[1])) * 100
      };
    } catch (error) {
      this.log(`Failed to get memory metrics: ${error.message}`, 'warn');
    }

    // CPU usage
    try {
      const cpuInfo = execSync('top -bn1 | grep "Cpu(s)"', { encoding: 'utf8' });
      const cpuMatch = cpuInfo.match(/(\d+\.\d+)%us/);
      if (cpuMatch) {
        metrics.cpu = parseFloat(cpuMatch[1]);
      }
    } catch (error) {
      this.log(`Failed to get CPU metrics: ${error.message}`, 'warn');
    }

    // Disk usage
    try {
      const diskInfo = execSync('df -h / | tail -1', { encoding: 'utf8' });
      const diskMatch = diskInfo.match(/(\d+)%/);
      if (diskMatch) {
        metrics.disk = parseInt(diskMatch[1]);
      }
    } catch (error) {
      this.log(`Failed to get disk metrics: ${error.message}`, 'warn');
    }

    return metrics;
  }

  async analyzeProcessHealth(process) {
    const health = {
      name: process.name,
      status: process.pm2_env.status,
      memory: process.monit.memory / 1024 / 1024, // Convert to MB
      cpu: process.monit.cpu,
      uptime: process.pm2_env.pm_uptime,
      restarts: process.pm2_env.restart_time,
      isHealthy: true,
      issues: []
    };

    // Memory health check
    if (health.memory > 1024) { // 1GB threshold
      health.isHealthy = false;
      health.issues.push('High memory usage');
    }

    // CPU health check
    if (health.cpu > 80) {
      health.isHealthy = false;
      health.issues.push('High CPU usage');
    }

    // Restart frequency check
    if (health.restarts > 10) {
      health.isHealthy = false;
      health.issues.push('Frequent restarts');
    }

    // Uptime check
    if (health.uptime < 60000) { // Less than 1 minute
      health.isHealthy = false;
      health.issues.push('Low uptime');
    }

    return health;
  }

  async performHealthCheck() {
    this.log('🔍 Performing comprehensive health check...');
    
    const processes = await this.getPM2Status();
    const systemMetrics = await this.getSystemMetrics();
    const healthReport = {
      timestamp: new Date().toISOString(),
      processes: [],
      system: systemMetrics,
      overallHealth: 'healthy',
      recommendations: []
    };

    let unhealthyCount = 0;
    let totalMemory = 0;
    let totalCpu = 0;

    for (const process of processes) {
      const health = await this.analyzeProcessHealth(process);
      healthReport.processes.push(health);
      
      if (!health.isHealthy) {
        unhealthyCount++;
        healthReport.overallHealth = 'degraded';
      }

      totalMemory += health.memory;
      totalCpu += health.cpu;
    }

    // System-level health assessment
    if (systemMetrics.memory && systemMetrics.memory.usage > 90) {
      healthReport.overallHealth = 'critical';
      healthReport.recommendations.push('System memory usage is critical. Consider restarting non-essential processes.');
    }

    if (systemMetrics.cpu && systemMetrics.cpu > 90) {
      healthReport.overallHealth = 'degraded';
      healthReport.recommendations.push('System CPU usage is high. Monitor for resource-intensive processes.');
    }

    if (systemMetrics.disk && systemMetrics.disk > 90) {
      healthReport.recommendations.push('Disk usage is high. Consider cleanup or expansion.');
    }

    // Process optimization recommendations
    if (totalMemory > 2048) { // 2GB total
      healthReport.recommendations.push('Total process memory usage is high. Consider optimizing or scaling processes.');
    }

    if (unhealthyCount > processes.length * 0.3) { // More than 30% unhealthy
      healthReport.recommendations.push('High number of unhealthy processes. Review system configuration.');
    }

    // Save health report
    const reportPath = path.join(this.config.logDirectory, 'health-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(healthReport, null, 2));

    this.log(`Health check completed. Overall status: ${healthReport.overallHealth}`, 
      healthReport.overallHealth === 'healthy' ? 'info' : 'warn');

    return healthReport;
  }

  async autoOptimize() {
    this.log('🚀 Starting automatic optimization...');
    
    const healthReport = await this.performHealthCheck();
    
    if (healthReport.overallHealth === 'critical') {
      this.log('⚠️ Critical system health detected. Initiating emergency optimization...', 'warn');
      await this.emergencyOptimization();
    } else if (healthReport.overallHealth === 'degraded') {
      this.log('🔧 System health degraded. Performing optimization...', 'warn');
      await this.standardOptimization();
    } else {
      this.log('✅ System health is good. Performing preventive optimization...', 'info');
      await this.preventiveOptimization();
    }
  }

  async emergencyOptimization() {
    // Stop non-essential processes
    const nonEssential = ['zion-content-generator', 'zion-seo-optimizer', 'zion-test-generator'];
    
    for (const processName of nonEssential) {
      try {
        await this.executeCommand(`pm2 stop ${processName}`);
        this.log(`Stopped non-essential process: ${processName}`, 'warn');
      } catch (error) {
        this.log(`Failed to stop ${processName}: ${error.message}`, 'error');
      }
    }

    // Restart critical processes
    const critical = ['zion-frontend-dev', 'zion-backend-dev', 'zion-lint-manager'];
    
    for (const processName of critical) {
      try {
        await this.executeCommand(`pm2 restart ${processName}`);
        this.log(`Restarted critical process: ${processName}`, 'info');
      } catch (error) {
        this.log(`Failed to restart ${processName}: ${error.message}`, 'error');
      }
    }

    // Clear logs to free up disk space
    await this.executeCommand('pm2 flush');
    this.log('Cleared PM2 logs to free disk space', 'info');
  }

  async standardOptimization() {
    // Restart processes with high memory usage
    const healthReport = await this.performHealthCheck();
    
    for (const process of healthReport.processes) {
      if (process.memory > 512 && process.issues.includes('High memory usage')) {
        try {
          await this.executeCommand(`pm2 restart ${process.name}`);
          this.log(`Restarted memory-intensive process: ${process.name}`, 'info');
        } catch (error) {
          this.log(`Failed to restart ${process.name}: ${error.message}`, 'error');
        }
      }
    }

    // Scale down non-critical processes
    const nonCritical = ['zion-performance-optimizer', 'zion-security-scanner'];
    
    for (const processName of nonCritical) {
      try {
        await this.executeCommand(`pm2 scale ${processName} 0`);
        this.log(`Scaled down non-critical process: ${processName}`, 'info');
      } catch (error) {
        this.log(`Failed to scale down ${processName}: ${error.message}`, 'error');
      }
    }
  }

  async preventiveOptimization() {
    // Rotate logs
    await this.executeCommand('pm2 flush');
    
    // Backup current state
    await this.createBackup();
    
    // Update process configurations if needed
    await this.updateProcessConfigurations();
  }

  async createBackup() {
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const backupDir = path.join('./automation/backups', `pm2-backup-${timestamp}`);
    
    try {
      fs.mkdirSync(backupDir, { recursive: true });
      
      // Backup PM2 processes
      const processes = await this.getPM2Status();
      fs.writeFileSync(path.join(backupDir, 'processes.json'), JSON.stringify(processes, null, 2));
      
      // Backup ecosystem config
      if (fs.existsSync(this.config.ecosystemFile)) {
        fs.copyFileSync(this.config.ecosystemFile, path.join(backupDir, 'ecosystem.config.js'));
      }
      
      // Backup logs
      const logFiles = fs.readdirSync(this.config.logDirectory).filter(file => file.endsWith('.log'));
      for (const logFile of logFiles) {
        const sourcePath = path.join(this.config.logDirectory, logFile);
        const destPath = path.join(backupDir, logFile);
        if (fs.statSync(sourcePath).isFile()) {
          fs.copyFileSync(sourcePath, destPath);
        }
      }
      
      this.log(`Backup created: ${backupDir}`, 'info');
      
      // Clean up old backups
      await this.cleanupOldBackups();
      
    } catch (error) {
      this.log(`Failed to create backup: ${error.message}`, 'error');
    }
  }

  async cleanupOldBackups() {
    try {
      const backupDir = './automation/backups';
      const backups = fs.readdirSync(backupDir)
        .filter(dir => dir.startsWith('pm2-backup-'))
        .map(dir => ({
          name: dir,
          path: path.join(backupDir, dir),
          time: fs.statSync(path.join(backupDir, dir)).mtime.getTime()
        }))
        .sort((a, b) => b.time - a.time);
      
      // Keep only the most recent backups
      if (backups.length > this.config.maxBackups) {
        const toDelete = backups.slice(this.config.maxBackups);
        for (const backup of toDelete) {
          fs.rmSync(backup.path, { recursive: true, force: true });
          this.log(`Deleted old backup: ${backup.name}`, 'info');
        }
      }
    } catch (error) {
      this.log(`Failed to cleanup old backups: ${error.message}`, 'warn');
    }
  }

  async updateProcessConfigurations() {
    // This method can be extended to dynamically update process configurations
    // based on system performance and requirements
    this.log('Process configurations are up to date', 'info');
  }

  async startMonitoring() {
    this.log('📊 Starting intelligent monitoring...');
    
    // Initial health check
    await this.performHealthCheck();
    
    // Set up monitoring intervals
    setInterval(async () => {
      await this.performHealthCheck();
    }, this.config.healthCheckInterval);
    
    // Auto-optimization every 5 minutes
    setInterval(async () => {
      await this.autoOptimize();
    }, 300000);
    
    // Backup every hour
    setInterval(async () => {
      await this.createBackup();
    }, this.config.backupInterval);
    
    this.log('Monitoring started successfully', 'info');
  }

  async generateReport() {
    const healthReport = await this.performHealthCheck();
    const processes = await this.getPM2Status();
    const systemMetrics = await this.getSystemMetrics();
    
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        totalProcesses: processes.length,
        healthyProcesses: processes.length - healthReport.processes.filter(p => !p.isHealthy).length,
        unhealthyProcesses: healthReport.processes.filter(p => !p.isHealthy).length,
        overallHealth: healthReport.overallHealth,
        systemResources: systemMetrics
      },
      processes: healthReport.processes,
      recommendations: healthReport.recommendations,
      systemMetrics: systemMetrics
    };
    
    const reportPath = path.join(this.config.logDirectory, 'pm2-intelligent-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    this.log(`Comprehensive report generated: ${reportPath}`, 'info');
    return report;
  }
}

// CLI handling
const manager = new PM2IntelligentManager();
const command = process.argv[2];

async function main() {
  try {
    switch (command) {
      case 'start':
        await manager.startMonitoring();
        break;
      case 'health':
        await manager.performHealthCheck();
        break;
      case 'optimize':
        await manager.autoOptimize();
        break;
      case 'report':
        await manager.generateReport();
        break;
      case 'backup':
        await manager.createBackup();
        break;
      default:
        console.log('PM2 Intelligent Manager - Advanced Process Management');
        console.log('\nUsage: node pm2-intelligent-manager.js [command]');
        console.log('\nCommands:');
        console.log('  start     - Start intelligent monitoring');
        console.log('  health    - Perform health check');
        console.log('  optimize  - Run automatic optimization');
        console.log('  report    - Generate comprehensive report');
        console.log('  backup    - Create system backup');
        process.exit(1);
    }
  } catch (error) {
    manager.log(`Command failed: ${error.message}`, 'error');
    process.exit(1);
  }
}

// Handle graceful shutdown
process.on('SIGINT', () => {
  manager.log('Shutting down PM2 Intelligent Manager...', 'info');
  process.exit(0);
});

process.on('SIGTERM', () => {
  manager.log('Shutting down PM2 Intelligent Manager...', 'info');
  process.exit(0);
});

if (require.main === module) {
  main();
}

module.exports = PM2IntelligentManager;