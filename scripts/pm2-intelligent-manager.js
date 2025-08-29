#!/usr/bin/env node

const { execSync, spawn } = require('child_process');
const fs = require('fs');
const path = require('path');
const os = require('os');

class IntelligentPM2Manager {
  constructor() {
    this.ecosystemPath = path.join(process.cwd(), 'ecosystem.config.js');
    this.logFile = path.join(process.cwd(), 'automation/logs/pm2-manager.log');
    this.healthData = new Map();
    this.performanceMetrics = new Map();
    this.ensureLogDirectory();
  }

  ensureLogDirectory() {
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
  }

  log(message, level = 'info') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level.toUpperCase()}] ${message}\n`;
    console.log(`[${level.toUpperCase()}] ${message}`);
    fs.appendFileSync(this.logFile, logMessage);
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

  async checkPM2Installation() {
    this.log('🔍 Checking PM2 installation...');
    const result = await this.executeCommand('pm2 --version');
    
    if (!result.success) {
      this.log('❌ PM2 not found. Installing PM2 globally...', 'warn');
      const installResult = await this.executeCommand('npm install -g pm2');
      if (installResult.success) {
        this.log('✅ PM2 installed successfully');
      } else {
        this.log('❌ Failed to install PM2', 'error');
        return false;
      }
    } else {
      this.log('✅ PM2 is already installed');
    }
    return true;
  }

  async startEcosystem() {
    this.log('🚀 Starting PM2 ecosystem...');
    
    if (!fs.existsSync(this.ecosystemPath)) {
      this.log('❌ Ecosystem config not found', 'error');
      return false;
    }

    const result = await this.executeCommand(`pm2 start ${this.ecosystemPath}`);
    if (result.success) {
      this.log('✅ Ecosystem started successfully');
      await this.saveEcosystem();
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
    const result = await this.executeCommand('pm2 restart all');
    if (result.success) {
      this.log('✅ Ecosystem restarted successfully');
      return true;
    } else {
      this.log(`❌ Failed to restart ecosystem: ${result.error}`, 'error');
      return false;
    }
  }

  async saveEcosystem() {
    this.log('💾 Saving PM2 ecosystem...');
    const result = await this.executeCommand('pm2 save');
    if (result.success) {
      this.log('✅ Ecosystem saved successfully');
      return true;
    } else {
      this.log(`❌ Failed to save ecosystem: ${result.error}`, 'error');
      return false;
    }
  }

  async setupStartupScript() {
    this.log('🔧 Setting up PM2 startup script...');
    const result = await this.executeCommand('pm2 startup');
    if (result.success) {
      this.log('✅ Startup script configured');
      return true;
    } else {
      this.log(`❌ Failed to setup startup script: ${result.error}`, 'error');
      return false;
    }
  }

  async getStatus() {
    this.log('📊 Getting PM2 status...');
    const result = await this.executeCommand('pm2 status --json');
    if (result.success) {
      try {
        const status = JSON.parse(result.output);
        this.log(`📊 PM2 Status: ${status.length} processes`);
        return status;
      } catch (error) {
        this.log('❌ Failed to parse status JSON', 'error');
        return null;
      }
    } else {
      this.log(`❌ Failed to get status: ${result.error}`, 'error');
      return null;
    }
  }

  async monitorHealth() {
    this.log('🏥 Starting health monitoring...');
    
    setInterval(async () => {
      const status = await this.getStatus();
      if (status) {
        await this.analyzeHealth(status);
        await this.optimizePerformance();
      }
    }, 30000); // Check every 30 seconds
  }

  async analyzeHealth(status) {
    const healthReport = {
      timestamp: new Date().toISOString(),
      totalProcesses: status.length,
      healthy: 0,
      warning: 0,
      critical: 0,
      issues: []
    };

    for (const process of status) {
      const health = this.assessProcessHealth(process);
      healthReport[health.level]++;
      
      if (health.level !== 'healthy') {
        healthReport.issues.push({
          name: process.name,
          level: health.level,
          issue: health.issue,
          recommendation: health.recommendation
        });
      }
    }

    this.healthData.set(Date.now(), healthReport);
    
    if (healthReport.critical > 0) {
      this.log(`🚨 CRITICAL: ${healthReport.critical} processes have critical issues`, 'error');
      await this.handleCriticalIssues(healthReport.issues.filter(i => i.level === 'critical'));
    }
    
    if (healthReport.warning > 0) {
      this.log(`⚠️ WARNING: ${healthReport.warning} processes have warnings`, 'warn');
    }

    this.log(`📊 Health: ${healthReport.healthy} healthy, ${healthReport.warning} warnings, ${healthReport.critical} critical`);
  }

  assessProcessHealth(process) {
    const memoryUsage = process.monit?.memory || 0;
    const cpuUsage = process.monit?.cpu || 0;
    const restarts = process.pm2_env?.restart_time || 0;
    
    // Memory threshold: 80% of max_memory_restart
    const memoryThreshold = this.getMemoryThreshold(process.name);
    const memoryPercentage = (memoryUsage / memoryThreshold) * 100;
    
    if (restarts > 10 || memoryPercentage > 90) {
      return {
        level: 'critical',
        issue: `High restarts (${restarts}) or memory usage (${memoryPercentage.toFixed(1)}%)`,
        recommendation: 'Restart process and investigate root cause'
      };
    } else if (memoryPercentage > 80 || cpuUsage > 80) {
      return {
        level: 'warning',
        issue: `High resource usage: Memory ${memoryPercentage.toFixed(1)}%, CPU ${cpuUsage.toFixed(1)}%`,
        recommendation: 'Monitor closely and consider scaling'
      };
    } else {
      return {
        level: 'healthy',
        issue: null,
        recommendation: null
      };
    }
  }

  getMemoryThreshold(processName) {
    // Default memory thresholds based on process type
    const thresholds = {
      'zion-website-frontend': 2 * 1024 * 1024 * 1024, // 2GB
      'zion-website-backend': 1 * 1024 * 1024 * 1024, // 1GB
      'intelligent-orchestrator': 512 * 1024 * 1024,   // 512MB
      'default': 256 * 1024 * 1024                     // 256MB
    };
    
    return thresholds[processName] || thresholds.default;
  }

  async handleCriticalIssues(criticalIssues) {
    this.log('🚨 Handling critical issues...', 'error');
    
    for (const issue of criticalIssues) {
      this.log(`🔄 Restarting critical process: ${issue.name}`, 'warn');
      await this.executeCommand(`pm2 restart ${issue.name}`);
      
      // Wait a bit before next restart
      await this.sleep(2000);
    }
  }

  async optimizePerformance() {
    const status = await this.getStatus();
    if (!status) return;

    for (const process of status) {
      const memoryUsage = process.monit?.memory || 0;
      const cpuUsage = process.monit?.cpu || 0;
      
      // Log performance metrics
      this.performanceMetrics.set(process.name, {
        timestamp: Date.now(),
        memory: memoryUsage,
        cpu: cpuUsage
      });
      
      // Auto-scale if needed
      if (cpuUsage > 70 && process.pm2_env?.instances === 1) {
        this.log(`📈 Auto-scaling ${process.name} due to high CPU usage (${cpuUsage.toFixed(1)}%)`, 'info');
        await this.executeCommand(`pm2 scale ${process.name} 2`);
      }
    }
  }

  async generateReport() {
    this.log('📊 Generating comprehensive report...');
    
    const status = await this.getStatus();
    const report = {
      timestamp: new Date().toISOString(),
      system: {
        platform: os.platform(),
        arch: os.arch(),
        cpus: os.cpus().length,
        memory: {
          total: os.totalmem(),
          free: os.freemem(),
          used: os.totalmem() - os.freemem()
        }
      },
      pm2: {
        processes: status || [],
        health: Array.from(this.healthData.values()).slice(-10), // Last 10 health checks
        performance: Object.fromEntries(this.performanceMetrics)
      }
    };

    const reportPath = path.join(process.cwd(), 'automation/logs/pm2-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    this.log(`📊 Report generated: ${reportPath}`);
    return report;
  }

  async cleanup() {
    this.log('🧹 Cleaning up old logs and data...');
    
    // Keep only last 100 health data points
    const healthKeys = Array.from(this.healthData.keys()).sort((a, b) => b - a);
    if (healthKeys.length > 100) {
      const keysToRemove = healthKeys.slice(100);
      keysToRemove.forEach(key => this.healthData.delete(key));
    }
    
    // Keep only last 50 performance metrics per process
    for (const [processName, metrics] of this.performanceMetrics) {
      if (Array.isArray(metrics) && metrics.length > 50) {
        this.performanceMetrics.set(processName, metrics.slice(-50));
      }
    }
    
    this.log('✅ Cleanup completed');
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async startMonitoring() {
    this.log('👀 Starting intelligent monitoring...');
    
    // Start health monitoring
    await this.monitorHealth();
    
    // Cleanup every hour
    setInterval(() => {
      this.cleanup();
    }, 3600000);
    
    // Generate report every 6 hours
    setInterval(async () => {
      await this.generateReport();
    }, 21600000);
  }
}

// CLI handling
const manager = new IntelligentPM2Manager();
const command = process.argv[2];

async function main() {
  try {
    // Check PM2 installation first
    const pm2Installed = await manager.checkPM2Installation();
    if (!pm2Installed) {
      process.exit(1);
    }

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
      case 'save':
        await manager.saveEcosystem();
        break;
      case 'setup':
        await manager.setupStartupScript();
        break;
      case 'status':
        await manager.getStatus();
        break;
      case 'monitor':
        await manager.startMonitoring();
        // Keep the process running
        process.stdin.resume();
        break;
      case 'report':
        await manager.generateReport();
        break;
      case 'health':
        const status = await manager.getStatus();
        if (status) {
          await manager.analyzeHealth(status);
        }
        break;
      default:
        console.log('Usage: node pm2-intelligent-manager.js [command]');
        console.log('\nCommands:');
        console.log('  start     - Start PM2 ecosystem');
        console.log('  stop      - Stop PM2 ecosystem');
        console.log('  restart   - Restart PM2 ecosystem');
        console.log('  save      - Save current ecosystem');
        console.log('  setup     - Setup startup script');
        console.log('  status    - Show current status');
        console.log('  monitor   - Start intelligent monitoring');
        console.log('  report    - Generate comprehensive report');
        console.log('  health    - Check process health');
        process.exit(1);
    }
  } catch (error) {
    manager.log(`❌ Error: ${error.message}`, 'error');
    process.exit(1);
  }
}

// Graceful shutdown
process.on('SIGINT', async () => {
  console.log('\n🛑 Shutting down PM2 manager...');
  process.exit(0);
});

process.on('SIGTERM', async () => {
  console.log('\n🛑 Shutting down PM2 manager...');
  process.exit(0);
});

main();