#!/usr/bin/env node

const { execSync, spawn } = require('child_process');
const fs = require('fs');
const path = require('path');
const os = require('os');

class IntelligentPM2Manager {
  constructor() {
    this.config = {
      logDir: './logs/pm2',
      healthCheckInterval: 30000, // 30 seconds
      performanceThreshold: 0.8, // 80% performance threshold
      memoryThreshold: 0.9, // 90% memory threshold
      cpuThreshold: 0.85, // 85% CPU threshold
      autoScaleThreshold: 0.75, // 75% threshold for auto-scaling
      maxInstances: 4,
      minInstances: 1
    };
    
    this.ensureLogDirectory();
    this.loadConfiguration();
    this.startHealthMonitoring();
  }

  ensureLogDirectory() {
    if (!fs.existsSync(this.config.logDir)) {
      fs.mkdirSync(this.config.logDir, { recursive: true });
    }
  }

  loadConfiguration() {
    try {
      const configPath = path.join(process.cwd(), 'ecosystem.config.js');
      if (fs.existsSync(configPath)) {
        this.ecosystemConfig = require(configPath);
        console.log('✅ Ecosystem configuration loaded');
      }
    } catch (error) {
      console.error('❌ Failed to load ecosystem configuration:', error.message);
    }
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

  async getSystemMetrics() {
    const metrics = {
      timestamp: new Date().toISOString(),
      memory: {
        total: os.totalmem(),
        free: os.freemem(),
        used: os.totalmem() - os.freemem(),
        usage: ((os.totalmem() - os.freemem()) / os.totalmem()) * 100
      },
      cpu: {
        loadAverage: os.loadavg(),
        cores: os.cpus().length
      },
      uptime: os.uptime()
    };

    return metrics;
  }

  async getPM2Status() {
    try {
      const result = await this.executeCommand('pm2 jlist');
      if (result.success) {
        return JSON.parse(result.output);
      }
      return [];
    } catch (error) {
      console.error('Failed to get PM2 status:', error.message);
      return [];
    }
  }

  async analyzePerformance() {
    const metrics = await this.getSystemMetrics();
    const pm2Status = await this.getPM2Status();
    
    const analysis = {
      timestamp: new Date().toISOString(),
      systemHealth: {
        memory: metrics.memory.usage < this.config.memoryThreshold,
        cpu: metrics.cpu.loadAverage[0] < this.config.cpuThreshold * metrics.cpu.cores,
        overall: true
      },
      pm2Health: {
        totalProcesses: pm2Status.length,
        runningProcesses: pm2Status.filter(p => p.pm2_env.status === 'online').length,
        failedProcesses: pm2Status.filter(p => p.pm2_env.status === 'errored').length,
        overall: true
      },
      recommendations: []
    };

    // Memory recommendations
    if (metrics.memory.usage > this.config.memoryThreshold) {
      analysis.recommendations.push({
        type: 'memory',
        severity: 'high',
        action: 'scale_down',
        message: `Memory usage is ${metrics.memory.usage.toFixed(2)}%. Consider scaling down non-critical processes.`
      });
      analysis.systemHealth.overall = false;
    }

    // CPU recommendations
    if (metrics.cpu.loadAverage[0] > this.config.cpuThreshold * metrics.cpu.cores) {
      analysis.recommendations.push({
        type: 'cpu',
        severity: 'medium',
        action: 'optimize',
        message: `CPU load is ${metrics.cpu.loadAverage[0].toFixed(2)}. Consider optimizing processes.`
      });
      analysis.systemHealth.overall = false;
    }

    // PM2 process recommendations
    if (analysis.pm2Health.failedProcesses > 0) {
      analysis.recommendations.push({
        type: 'pm2',
        severity: 'high',
        action: 'restart_failed',
        message: `${analysis.pm2Health.failedProcesses} PM2 processes have failed. Restarting...`
      });
      analysis.pm2Health.overall = false;
    }

    return analysis;
  }

  async autoScale() {
    const analysis = await this.analyzePerformance();
    
    if (!analysis.systemHealth.overall) {
      console.log('🔄 Auto-scaling triggered due to performance issues');
      
      // Scale down non-critical processes
      if (analysis.recommendations.some(r => r.action === 'scale_down')) {
        await this.scaleDownNonCritical();
      }
      
      // Restart failed processes
      if (analysis.recommendations.some(r => r.action === 'restart_failed')) {
        await this.restartFailedProcesses();
      }
    } else if (analysis.systemHealth.memory && analysis.systemHealth.cpu) {
      // System is healthy, consider scaling up for better performance
      if (analysis.pm2Health.runningProcesses < this.config.maxInstances) {
        console.log('🚀 System is healthy, considering scale up...');
        await this.scaleUpIfNeeded();
      }
    }
  }

  async scaleDownNonCritical() {
    const nonCriticalApps = ['content-generator', 'edge-cache-warmer', 'performance-optimizer'];
    
    for (const app of nonCriticalApps) {
      try {
        await this.executeCommand(`pm2 stop ${app}`);
        console.log(`⏸️ Scaled down non-critical app: ${app}`);
      } catch (error) {
        console.log(`⚠️ Failed to scale down ${app}: ${error.message}`);
      }
    }
  }

  async scaleUpIfNeeded() {
    const criticalApps = ['lint-monitor', 'security-scanner', 'intelligent-orchestrator'];
    
    for (const app of criticalApps) {
      try {
        const status = await this.executeCommand(`pm2 show ${app}`);
        if (status.success && !status.output.includes('online')) {
          await this.executeCommand(`pm2 start ${app}`);
          console.log(`🚀 Scaled up critical app: ${app}`);
        }
      } catch (error) {
        console.log(`⚠️ Failed to scale up ${app}: ${error.message}`);
      }
    }
  }

  async restartFailedProcesses() {
    const pm2Status = await this.getPM2Status();
    const failedProcesses = pm2Status.filter(p => p.pm2_env.status === 'errored');
    
    for (const process of failedProcesses) {
      try {
        await this.executeCommand(`pm2 restart ${process.name}`);
        console.log(`🔄 Restarted failed process: ${process.name}`);
      } catch (error) {
        console.log(`❌ Failed to restart ${process.name}: ${error.message}`);
      }
    }
  }

  async intelligentRestart(appName) {
    console.log(`🔄 Intelligently restarting ${appName}...`);
    
    // Check if app is running
    const status = await this.executeCommand(`pm2 show ${appName}`);
    if (!status.success) {
      console.log(`❌ App ${appName} not found in PM2`);
      return false;
    }

    // Get current memory usage
    const metrics = await this.getSystemMetrics();
    
    // If memory usage is high, wait before restart
    if (metrics.memory.usage > this.config.memoryThreshold) {
      console.log(`⏳ High memory usage (${metrics.memory.usage.toFixed(2)}%), waiting before restart...`);
      await this.sleep(5000);
    }

    // Restart the app
    const result = await this.executeCommand(`pm2 restart ${appName}`);
    if (result.success) {
      console.log(`✅ Successfully restarted ${appName}`);
      return true;
    } else {
      console.log(`❌ Failed to restart ${appName}: ${result.error}`);
      return false;
    }
  }

  async startAllAutomation() {
    console.log('🚀 Starting all automation systems with PM2...');
    
    try {
      // Start the ecosystem
      const result = await this.executeCommand('pm2 start ecosystem.config.js');
      if (result.success) {
        console.log('✅ All automation systems started successfully');
        
        // Save PM2 configuration
        await this.executeCommand('pm2 save');
        console.log('💾 PM2 configuration saved');
        
        // Start monitoring
        this.startHealthMonitoring();
        
        return true;
      } else {
        console.log('❌ Failed to start automation systems:', result.error);
        return false;
      }
    } catch (error) {
      console.error('❌ Error starting automation systems:', error.message);
      return false;
    }
  }

  async stopAllAutomation() {
    console.log('🛑 Stopping all automation systems...');
    
    try {
      const result = await this.executeCommand('pm2 stop all');
      if (result.success) {
        console.log('✅ All automation systems stopped');
        return true;
      } else {
        console.log('❌ Failed to stop automation systems:', result.error);
        return false;
      }
    } catch (error) {
      console.error('❌ Error stopping automation systems:', error.message);
      return false;
    }
  }

  async generateHealthReport() {
    const analysis = await this.analyzePerformance();
    const pm2Status = await this.getPM2Status();
    
    const report = {
      timestamp: new Date().toISOString(),
      system: analysis,
      pm2: {
        totalProcesses: pm2Status.length,
        runningProcesses: pm2Status.filter(p => p.pm2_env.status === 'online').length,
        failedProcesses: pm2Status.filter(p => p.pm2_env.status === 'errored').length,
        stoppedProcesses: pm2Status.filter(p => p.pm2_env.status === 'stopped').length,
        processes: pm2Status.map(p => ({
          name: p.name,
          status: p.pm2_env.status,
          memory: p.monit.memory,
          cpu: p.monit.cpu,
          uptime: p.pm2_env.pm_uptime
        }))
      },
      recommendations: analysis.recommendations
    };

    // Save report
    const reportPath = path.join(this.config.logDir, 'health-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    console.log('📊 Health report generated:', reportPath);
    return report;
  }

  startHealthMonitoring() {
    console.log('👀 Starting intelligent health monitoring...');
    
    setInterval(async () => {
      try {
        await this.autoScale();
        
        // Generate health report every 5 minutes
        if (Date.now() % 300000 < 30000) {
          await this.generateHealthReport();
        }
      } catch (error) {
        console.error('❌ Health monitoring error:', error.message);
      }
    }, this.config.healthCheckInterval);
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async showStatus() {
    try {
      const result = await this.executeCommand('pm2 status');
      if (result.success) {
        console.log(result.output);
      }
    } catch (error) {
      console.error('Failed to show PM2 status:', error.message);
    }
  }

  async showLogs(appName, lines = 100) {
    try {
      const result = await this.executeCommand(`pm2 logs ${appName} --lines ${lines}`);
      if (result.success) {
        console.log(result.output);
      }
    } catch (error) {
      console.error(`Failed to show logs for ${appName}:`, error.message);
    }
  }
}

// CLI handling
const manager = new IntelligentPM2Manager();
const command = process.argv[2];
const appName = process.argv[3];

switch (command) {
  case 'start':
    manager.startAllAutomation();
    break;
  case 'stop':
    manager.stopAllAutomation();
    break;
  case 'status':
    manager.showStatus();
    break;
  case 'restart':
    if (appName) {
      manager.intelligentRestart(appName);
    } else {
      console.log('Usage: node pm2-intelligent-manager.js restart <app-name>');
    }
    break;
  case 'logs':
    if (appName) {
      const lines = process.argv[4] || 100;
      manager.showLogs(appName, lines);
    } else {
      console.log('Usage: node pm2-intelligent-manager.js logs <app-name> [lines]');
    }
    break;
  case 'health':
    manager.generateHealthReport();
    break;
  case 'monitor':
    console.log('👀 Health monitoring is already running...');
    break;
  default:
    console.log('Intelligent PM2 Manager - Available Commands:');
    console.log('  start     - Start all automation systems');
    console.log('  stop      - Stop all automation systems');
    console.log('  status    - Show PM2 status');
    console.log('  restart   - Intelligently restart an app');
    console.log('  logs      - Show app logs');
    console.log('  health    - Generate health report');
    console.log('  monitor   - Start health monitoring');
    console.log('\nExamples:');
    console.log('  node pm2-intelligent-manager.js start');
    console.log('  node pm2-intelligent-manager.js restart lint-monitor');
    console.log('  node pm2-intelligent-manager.js logs zion-website 50');
    break;
}

// Graceful shutdown
process.on('SIGINT', async () => {
  console.log('\n🛑 Shutting down intelligent PM2 manager...');
  process.exit(0);
});

process.on('SIGTERM', async () => {
  console.log('\n🛑 Shutting down intelligent PM2 manager...');
  process.exit(0);
});