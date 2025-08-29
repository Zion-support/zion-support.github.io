#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');
const os = require('os');

class PM2EnhancedOrchestrator {
  constructor() {
    this.config = {
      logDir: './logs/pm2-orchestrator',
      healthCheckInterval: 15000, // 15 seconds
      performanceThreshold: 0.75,
      memoryThreshold: 0.85,
      cpuThreshold: 0.80,
      autoScaleThreshold: 0.65,
      maxInstances: 6,
      minInstances: 1,
      priorityLevels: {
        critical: ['lint-monitor', 'security-scanner', 'intelligent-orchestrator'],
        high: ['lint-fixer', 'code-quality-monitor', 'automation-dashboard'],
        medium: ['seo-optimizer', 'test-generator', 'performance-optimizer'],
        low: ['content-generator', 'edge-cache-warmer']
      }
    };
    
    this.ensureLogDirectory();
    this.loadAutomationSystems();
    this.startIntelligentMonitoring();
    this.initializePM2Integration();
  }

  ensureLogDirectory() {
    if (!fs.existsSync(this.config.logDir)) {
      fs.mkdirSync(this.config.logDir, { recursive: true });
    }
  }

  log(message, level = 'info') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level.toUpperCase()}] ${message}\n`;
    console.log(`[${level.toUpperCase()}] ${message}`);
    fs.appendFileSync(path.join(this.config.logDir, 'orchestrator.log'), logMessage);
  }

  loadAutomationSystems() {
    this.automationSystems = new Map();
    
    const systems = [
      { name: 'lint-monitor', priority: 'critical', autoRestart: true, maxRestarts: 20 },
      { name: 'lint-fixer', priority: 'high', autoRestart: true, maxRestarts: 15 },
      { name: 'code-quality-monitor', priority: 'high', autoRestart: true, maxRestarts: 10 },
      { name: 'performance-optimizer', priority: 'medium', autoRestart: true, maxRestarts: 8 },
      { name: 'security-scanner', priority: 'critical', autoRestart: true, maxRestarts: 15 },
      { name: 'seo-optimizer', priority: 'medium', autoRestart: true, maxRestarts: 5 },
      { name: 'test-generator', priority: 'medium', autoRestart: true, maxRestarts: 8 },
      { name: 'content-generator', priority: 'low', autoRestart: false, maxRestarts: 3 },
      { name: 'edge-cache-warmer', priority: 'low', autoRestart: false, maxRestarts: 2 },
      { name: 'intelligent-orchestrator', priority: 'critical', autoRestart: true, maxRestarts: 25 },
      { name: 'automation-dashboard', priority: 'high', autoRestart: true, maxRestarts: 10 }
    ];

    for (const system of systems) {
      this.automationSystems.set(system.name, {
        ...system,
        status: 'unknown',
        lastRun: null,
        successRate: 0,
        averageExecutionTime: 0,
        restartCount: 0,
        lastRestart: null,
        healthScore: 100,
        isRunning: false
      });
    }
  }

  async initializePM2Integration() {
    try {
      // Check if PM2 is installed
      const pm2Check = await this.executeCommand('pm2 --version');
      if (!pm2Check.success) {
        this.log('PM2 not found. Installing PM2...', 'warn');
        await this.installPM2();
      }

      // Check if ecosystem is running
      const status = await this.executeCommand('pm2 jlist');
      if (status.success) {
        this.log('PM2 integration initialized successfully', 'info');
        this.updateSystemStatuses();
      }
    } catch (error) {
      this.log(`Failed to initialize PM2 integration: ${error.message}`, 'error');
    }
  }

  async installPM2() {
    try {
      this.log('Installing PM2 globally...', 'info');
      await this.executeCommand('npm install -g pm2');
      this.log('PM2 installed successfully', 'info');
    } catch (error) {
      this.log(`Failed to install PM2: ${error.message}`, 'error');
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
        cores: os.cpus().length,
        usage: os.loadavg()[0] / os.cpus().length * 100
      },
      uptime: os.uptime(),
      platform: os.platform(),
      arch: os.arch()
    };

    return metrics;
  }

  async updateSystemStatuses() {
    try {
      const pm2Status = await this.executeCommand('pm2 jlist');
      if (pm2Status.success) {
        const processes = JSON.parse(pm2Status.output);
        
        for (const [name, system] of this.automationSystems) {
          const process = processes.find(p => p.name === name);
          if (process) {
            system.status = process.pm2_env.status;
            system.isRunning = process.pm2_env.status === 'online';
            system.lastRun = process.pm2_env.pm_uptime;
            system.memory = process.monit?.memory || 0;
            system.cpu = process.monit?.cpu || 0;
            
            // Update health score based on various factors
            system.healthScore = this.calculateHealthScore(system, process);
          } else {
            system.status = 'not_running';
            system.isRunning = false;
          }
        }
      }
    } catch (error) {
      this.log(`Failed to update system statuses: ${error.message}`, 'error');
    }
  }

  calculateHealthScore(system, process) {
    let score = 100;
    
    // Deduct points for failed status
    if (process.pm2_env.status === 'errored') {
      score -= 50;
    } else if (process.pm2_env.status === 'stopped') {
      score -= 30;
    }
    
    // Deduct points for high memory usage
    if (process.monit?.memory > 200 * 1024 * 1024) { // 200MB
      score -= 20;
    }
    
    // Deduct points for high CPU usage
    if (process.monit?.cpu > 80) {
      score -= 15;
    }
    
    // Deduct points for frequent restarts
    if (system.restartCount > 5) {
      score -= Math.min(25, system.restartCount * 5);
    }
    
    return Math.max(0, score);
  }

  async intelligentLoadBalancing() {
    const metrics = await this.getSystemMetrics();
    const analysis = await this.analyzeSystemHealth();
    
    if (metrics.memory.usage > this.config.memoryThreshold * 100) {
      this.log('High memory usage detected, initiating load balancing...', 'warn');
      await this.scaleDownNonCriticalSystems();
    }
    
    if (metrics.cpu.usage > this.config.cpuThreshold * 100) {
      this.log('High CPU usage detected, optimizing process distribution...', 'warn');
      await this.optimizeProcessDistribution();
    }
    
    if (analysis.criticalSystemsDown > 0) {
      this.log(`${analysis.criticalSystemsDown} critical systems down, prioritizing recovery...`, 'error');
      await this.prioritizeCriticalSystems();
    }
  }

  async scaleDownNonCriticalSystems() {
    const nonCriticalSystems = this.config.priorityLevels.low.concat(this.config.priorityLevels.medium);
    
    for (const systemName of nonCriticalSystems) {
      const system = this.automationSystems.get(systemName);
      if (system && system.isRunning) {
        try {
          await this.executeCommand(`pm2 stop ${systemName}`);
          system.isRunning = false;
          system.status = 'stopped';
          this.log(`Scaled down non-critical system: ${systemName}`, 'info');
        } catch (error) {
          this.log(`Failed to scale down ${systemName}: ${error.message}`, 'warn');
        }
      }
    }
  }

  async optimizeProcessDistribution() {
    // Implement intelligent process distribution based on system resources
    const metrics = await this.getSystemMetrics();
    const availableMemory = metrics.memory.free;
    const availableCPU = metrics.cpu.cores - metrics.cpu.loadAverage[0];
    
    // Calculate optimal process distribution
    const optimalProcesses = Math.floor(Math.min(
      availableMemory / (100 * 1024 * 1024), // 100MB per process
      availableCPU * 2 // 2 processes per CPU core
    ));
    
    this.log(`Optimal process count: ${optimalProcesses}`, 'info');
    
    // Adjust running processes accordingly
    if (optimalProcesses < this.getRunningProcessCount()) {
      await this.scaleDownNonCriticalSystems();
    }
  }

  async prioritizeCriticalSystems() {
    const criticalSystems = this.config.priorityLevels.critical;
    
    for (const systemName of criticalSystems) {
      const system = this.automationSystems.get(systemName);
      if (system && !system.isRunning) {
        try {
          await this.executeCommand(`pm2 start ${systemName}`);
          system.isRunning = true;
          system.status = 'starting';
          this.log(`Prioritized critical system: ${systemName}`, 'info');
        } catch (error) {
          this.log(`Failed to start critical system ${systemName}: ${error.message}`, 'error');
        }
      }
    }
  }

  async analyzeSystemHealth() {
    await this.updateSystemStatuses();
    
    const analysis = {
      timestamp: new Date().toISOString(),
      totalSystems: this.automationSystems.size,
      runningSystems: 0,
      stoppedSystems: 0,
      failedSystems: 0,
      criticalSystemsDown: 0,
      averageHealthScore: 0,
      recommendations: []
    };
    
    let totalHealthScore = 0;
    
    for (const [name, system] of this.automationSystems) {
      if (system.isRunning) {
        analysis.runningSystems++;
      } else if (system.status === 'errored') {
        analysis.failedSystems++;
        if (system.priority === 'critical') {
          analysis.criticalSystemsDown++;
        }
      } else if (system.status === 'stopped') {
        analysis.stoppedSystems++;
      }
      
      totalHealthScore += system.healthScore;
    }
    
    analysis.averageHealthScore = totalHealthScore / this.automationSystems.size;
    
    // Generate recommendations
    if (analysis.criticalSystemsDown > 0) {
      analysis.recommendations.push({
        priority: 'critical',
        action: 'restart_critical_systems',
        message: `${analysis.criticalSystemsDown} critical systems are down and need immediate attention.`
      });
    }
    
    if (analysis.averageHealthScore < 70) {
      analysis.recommendations.push({
        priority: 'high',
        action: 'system_health_check',
        message: `System health score is low (${analysis.averageHealthScore.toFixed(1)}). Investigate performance issues.`
      });
    }
    
    if (analysis.failedSystems > 2) {
      analysis.recommendations.push({
        priority: 'medium',
        action: 'investigate_failures',
        message: `${analysis.failedSystems} systems have failed. Check logs for common issues.`
      });
    }
    
    return analysis;
  }

  getRunningProcessCount() {
    let count = 0;
    for (const [name, system] of this.automationSystems) {
      if (system.isRunning) count++;
    }
    return count;
  }

  async autoRecovery() {
    const analysis = await this.analyzeSystemHealth();
    
    for (const recommendation of analysis.recommendations) {
      switch (recommendation.action) {
        case 'restart_critical_systems':
          await this.prioritizeCriticalSystems();
          break;
        case 'system_health_check':
          await this.performSystemHealthCheck();
          break;
        case 'investigate_failures':
          await this.investigateSystemFailures();
          break;
      }
    }
  }

  async performSystemHealthCheck() {
    this.log('Performing comprehensive system health check...', 'info');
    
    // Check file system health
    const diskUsage = await this.executeCommand('df -h .');
    if (diskUsage.success) {
      this.log(`Disk usage: ${diskUsage.output}`, 'info');
    }
    
    // Check network connectivity
    const networkCheck = await this.executeCommand('ping -c 1 8.8.8.8');
    if (networkCheck.success) {
      this.log('Network connectivity: OK', 'info');
    } else {
      this.log('Network connectivity: FAILED', 'warn');
    }
    
    // Check PM2 daemon status
    const pm2Status = await this.executeCommand('pm2 ping');
    if (pm2Status.success) {
      this.log('PM2 daemon: OK', 'info');
    } else {
      this.log('PM2 daemon: FAILED', 'error');
    }
  }

  async investigateSystemFailures() {
    this.log('Investigating system failures...', 'info');
    
    for (const [name, system] of this.automationSystems) {
      if (system.status === 'errored') {
        try {
          const logs = await this.executeCommand(`pm2 logs ${name} --lines 50`);
          if (logs.success) {
            this.log(`Recent logs for ${name}:`, 'info');
            this.log(logs.output.substring(0, 500) + '...', 'info');
          }
        } catch (error) {
          this.log(`Failed to get logs for ${name}: ${error.message}`, 'warn');
        }
      }
    }
  }

  async generateIntelligenceReport() {
    const analysis = await this.analyzeSystemHealth();
    const metrics = await this.getSystemMetrics();
    
    const report = {
      timestamp: new Date().toISOString(),
      system: {
        metrics: metrics,
        health: analysis
      },
      automation: {
        systems: Array.from(this.automationSystems.entries()).map(([name, system]) => ({
          name,
          priority: system.priority,
          status: system.status,
          healthScore: system.healthScore,
          isRunning: system.isRunning,
          restartCount: system.restartCount,
          lastRestart: system.lastRestart
        }))
      },
      recommendations: analysis.recommendations,
      performance: {
        memoryEfficiency: (1 - metrics.memory.usage / 100) * 100,
        cpuEfficiency: (1 - metrics.cpu.usage / 100) * 100,
        overallEfficiency: ((1 - metrics.memory.usage / 100) + (1 - metrics.cpu.usage / 100)) / 2 * 100
      }
    };
    
    // Save report
    const reportPath = path.join(this.config.logDir, 'intelligence-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    this.log(`Intelligence report generated: ${reportPath}`, 'info');
    return report;
  }

  startIntelligentMonitoring() {
    this.log('Starting intelligent monitoring system...', 'info');
    
    // Health check every 15 seconds
    setInterval(async () => {
      try {
        await this.updateSystemStatuses();
        await this.intelligentLoadBalancing();
        await this.autoRecovery();
      } catch (error) {
        this.log(`Monitoring error: ${error.message}`, 'error');
      }
    }, this.config.healthCheckInterval);
    
    // Generate intelligence report every 2 minutes
    setInterval(async () => {
      try {
        await this.generateIntelligenceReport();
      } catch (error) {
        this.log(`Report generation error: ${error.message}`, 'error');
      }
    }, 120000);
    
    this.log('Intelligent monitoring system started', 'info');
  }

  async startAllSystems() {
    this.log('Starting all automation systems with intelligent orchestration...', 'info');
    
    try {
      const result = await this.executeCommand('pm2 start ecosystem.config.js');
      if (result.success) {
        this.log('All systems started successfully', 'info');
        await this.executeCommand('pm2 save');
        this.log('PM2 configuration saved', 'info');
        return true;
      } else {
        this.log(`Failed to start systems: ${result.error}`, 'error');
        return false;
      }
    } catch (error) {
      this.log(`Error starting systems: ${error.message}`, 'error');
      return false;
    }
  }

  async stopAllSystems() {
    this.log('Stopping all automation systems...', 'info');
    
    try {
      const result = await this.executeCommand('pm2 stop all');
      if (result.success) {
        this.log('All systems stopped successfully', 'info');
        return true;
      } else {
        this.log(`Failed to stop systems: ${result.error}`, 'error');
        return false;
      }
    } catch (error) {
      this.log(`Error stopping systems: ${error.message}`, 'error');
      return false;
    }
  }
}

// CLI handling
const orchestrator = new PM2EnhancedOrchestrator();
const command = process.argv[2];

switch (command) {
  case 'start':
    orchestrator.startAllSystems();
    break;
  case 'stop':
    orchestrator.stopAllSystems();
    break;
  case 'status':
    orchestrator.updateSystemStatuses().then(() => {
      console.log('\nSystem Status:');
      for (const [name, system] of orchestrator.automationSystems) {
        console.log(`${name}: ${system.status} (Health: ${system.healthScore})`);
      }
    });
    break;
  case 'health':
    orchestrator.generateIntelligenceReport();
    break;
  case 'monitor':
    console.log('👀 Intelligent monitoring is already running...');
    break;
  default:
    console.log('PM2 Enhanced Orchestrator - Available Commands:');
    console.log('  start     - Start all automation systems');
    console.log('  stop      - Stop all automation systems');
    console.log('  status    - Show system status');
    console.log('  health    - Generate intelligence report');
    console.log('  monitor   - Start intelligent monitoring');
    break;
}

// Graceful shutdown
process.on('SIGINT', async () => {
  console.log('\n🛑 Shutting down enhanced orchestrator...');
  process.exit(0);
});

process.on('SIGTERM', async () => {
  console.log('\n🛑 Shutting down enhanced orchestrator...');
  process.exit(0);
});