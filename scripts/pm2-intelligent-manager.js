#!/usr/bin/env node

const { execSync, spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

class PM2IntelligentManager {
  constructor() {
    this.ecosystemPath = path.join(process.cwd(), 'ecosystem.config.js');
    this.logDir = path.join(process.cwd(), 'automation', 'logs');
    this.healthData = new Map();
    this.performanceMetrics = new Map();
    this.autoOptimizationEnabled = true;
    this.ensureLogDirectory();
  }

  ensureLogDirectory() {
    if (!fs.existsSync(this.logDir)) {
      fs.mkdirSync(this.logDir, { recursive: true });
    }
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}\n`;
    console.log(`[${level}] ${message}`);
    
    const logFile = path.join(this.logDir, 'pm2-intelligent-manager.log');
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
        this.log(`Failed to parse PM2 status: ${error.message}`, 'ERROR');
        return [];
      }
    }
    return [];
  }

  async startEcosystem(env = 'production') {
    this.log(`🚀 Starting PM2 ecosystem in ${env} mode...`);
    
    const command = `pm2 start ecosystem.config.js --env ${env}`;
    const result = await this.executeCommand(command);
    
    if (result.success) {
      this.log(`✅ Ecosystem started successfully in ${env} mode`);
      await this.monitorStartup();
    } else {
      this.log(`❌ Failed to start ecosystem: ${result.error}`, 'ERROR');
    }
    
    return result;
  }

  async stopEcosystem() {
    this.log('🛑 Stopping PM2 ecosystem...');
    
    const command = 'pm2 stop ecosystem.config.js';
    const result = await this.executeCommand(command);
    
    if (result.success) {
      this.log('✅ Ecosystem stopped successfully');
    } else {
      this.log(`❌ Failed to stop ecosystem: ${result.error}`, 'ERROR');
    }
    
    return result;
  }

  async restartEcosystem() {
    this.log('🔄 Restarting PM2 ecosystem...');
    
    const command = 'pm2 reload ecosystem.config.js';
    const result = await this.executeCommand(command);
    
    if (result.success) {
      this.log('✅ Ecosystem restarted successfully');
      await this.monitorStartup();
    } else {
      this.log(`❌ Failed to restart ecosystem: ${result.error}`, 'ERROR');
    }
    
    return result;
  }

  async monitorStartup() {
    this.log('👀 Monitoring ecosystem startup...');
    
    let attempts = 0;
    const maxAttempts = 30;
    
    while (attempts < maxAttempts) {
      await this.sleep(2000);
      const status = await this.getPM2Status();
      
      const runningApps = status.filter(app => app.pm2_env?.status === 'online');
      const totalApps = status.length;
      
      this.log(`📊 Startup progress: ${runningApps.length}/${totalApps} apps running`);
      
      if (runningApps.length === totalApps && totalApps > 0) {
        this.log('✅ All applications started successfully');
        break;
      }
      
      attempts++;
    }
    
    if (attempts >= maxAttempts) {
      this.log('⚠️ Startup monitoring timeout - some apps may not be running', 'WARN');
    }
  }

  async analyzePerformance() {
    this.log('📊 Analyzing application performance...');
    
    const status = await this.getPM2Status();
    const analysis = {
      timestamp: new Date().toISOString(),
      totalApps: status.length,
      runningApps: 0,
      stoppedApps: 0,
      errorApps: 0,
      memoryUsage: 0,
      cpuUsage: 0,
      uptime: 0,
      recommendations: []
    };

    for (const app of status) {
      if (app.pm2_env?.status === 'online') {
        analysis.runningApps++;
        analysis.memoryUsage += app.monit?.memory || 0;
        analysis.cpuUsage += app.monit?.cpu || 0;
        analysis.uptime += app.pm2_env?.pm_uptime || 0;
      } else if (app.pm2_env?.status === 'stopped') {
        analysis.stoppedApps++;
      } else if (app.pm2_env?.status === 'errored') {
        analysis.errorApps++;
      }
    }

    // Generate intelligent recommendations
    if (analysis.errorApps > 0) {
      analysis.recommendations.push('Restart errored applications');
    }
    
    if (analysis.memoryUsage > 1024 * 1024 * 1024) { // 1GB
      analysis.recommendations.push('High memory usage detected - consider optimization');
    }
    
    if (analysis.cpuUsage > 80) {
      analysis.recommendations.push('High CPU usage detected - monitor for bottlenecks');
    }

    this.performanceMetrics.set(Date.now(), analysis);
    
    // Save analysis to file
    const analysisFile = path.join(this.logDir, 'performance-analysis.json');
    fs.writeFileSync(analysisFile, JSON.stringify(analysis, null, 2));
    
    this.log(`📊 Performance analysis completed: ${analysis.runningApps}/${analysis.totalApps} apps running`);
    
    return analysis;
  }

  async optimizeEcosystem() {
    if (!this.autoOptimizationEnabled) {
      this.log('⚠️ Auto-optimization is disabled', 'WARN');
      return;
    }

    this.log('🔧 Running ecosystem optimization...');
    
    const analysis = await this.analyzePerformance();
    
    // Auto-restart errored apps
    if (analysis.errorApps > 0) {
      this.log('🔄 Auto-restarting errored applications...');
      await this.executeCommand('pm2 restart all');
    }
    
    // Memory optimization
    if (analysis.memoryUsage > 1024 * 1024 * 1024) {
      this.log('🧹 Running memory cleanup...');
      await this.executeCommand('pm2 flush');
    }
    
    // Log rotation
    this.log('📝 Rotating logs...');
    await this.executeCommand('pm2 flush');
    
    this.log('✅ Ecosystem optimization completed');
  }

  async intelligentScaling() {
    this.log('📈 Running intelligent scaling analysis...');
    
    const status = await this.getPM2Status();
    const scalingDecisions = [];
    
    for (const app of status) {
      if (app.pm2_env?.status === 'online') {
        const memory = app.monit?.memory || 0;
        const cpu = app.monit?.cpu || 0;
        
        // Memory-based scaling
        if (memory > 500 * 1024 * 1024) { // 500MB
          scalingDecisions.push({
            app: app.name,
            action: 'scale-up',
            reason: 'High memory usage',
            currentMemory: `${Math.round(memory / 1024 / 1024)}MB`
          });
        }
        
        // CPU-based scaling
        if (cpu > 70) {
          scalingDecisions.push({
            app: app.name,
            action: 'scale-up',
            reason: 'High CPU usage',
            currentCPU: `${cpu}%`
          });
        }
      }
    }
    
    if (scalingDecisions.length > 0) {
      this.log('📊 Scaling recommendations:');
      scalingDecisions.forEach(decision => {
        this.log(`  - ${decision.app}: ${decision.action} (${decision.reason})`);
      });
    } else {
      this.log('✅ No scaling actions required');
    }
    
    return scalingDecisions;
  }

  async healthCheck() {
    this.log('🏥 Running comprehensive health check...');
    
    const health = {
      timestamp: new Date().toISOString(),
      pm2Status: 'unknown',
      ecosystemHealth: 'unknown',
      applications: [],
      issues: [],
      recommendations: []
    };
    
    // Check PM2 daemon
    const pm2Status = await this.executeCommand('pm2 ping');
    health.pm2Status = pm2Status.success ? 'healthy' : 'unhealthy';
    
    if (!pm2Status.success) {
      health.issues.push('PM2 daemon not responding');
      health.recommendations.push('Restart PM2 daemon');
    }
    
    // Check ecosystem applications
    const status = await this.getPM2Status();
    health.ecosystemHealth = status.length > 0 ? 'operational' : 'no-apps';
    
    for (const app of status) {
      const appHealth = {
        name: app.name,
        status: app.pm2_env?.status || 'unknown',
        uptime: app.pm2_env?.pm_uptime || 0,
        memory: app.monit?.memory || 0,
        cpu: app.monit?.cpu || 0,
        restarts: app.pm2_env?.restart_time || 0
      };
      
      health.applications.push(appHealth);
      
      // Identify issues
      if (appHealth.status === 'errored') {
        health.issues.push(`${appHealth.name} is in error state`);
        health.recommendations.push(`Restart ${appHealth.name}`);
      }
      
      if (appHealth.restarts > 10) {
        health.issues.push(`${appHealth.name} has restarted ${appHealth.restarts} times`);
        health.recommendations.push(`Investigate ${appHealth.name} stability issues`);
      }
    }
    
    this.healthData.set(Date.now(), health);
    
    // Save health report
    const healthFile = path.join(this.logDir, 'health-check.json');
    fs.writeFileSync(healthFile, JSON.stringify(health, null, 2));
    
    this.log(`🏥 Health check completed: ${health.issues.length} issues found`);
    
    return health;
  }

  async continuousMonitoring(interval = 30000) {
    this.log(`👀 Starting continuous monitoring (${interval}ms intervals)...`);
    
    const monitor = setInterval(async () => {
      try {
        await this.healthCheck();
        await this.analyzePerformance();
        
        // Auto-optimize if issues detected
        const health = await this.healthCheck();
        if (health.issues.length > 0) {
          this.log('⚠️ Issues detected, running auto-optimization...');
          await this.optimizeEcosystem();
        }
        
        // Intelligent scaling check
        await this.intelligentScaling();
        
      } catch (error) {
        this.log(`❌ Monitoring error: ${error.message}`, 'ERROR');
      }
    }, interval);
    
    // Handle graceful shutdown
    process.on('SIGINT', () => {
      this.log('🛑 Stopping continuous monitoring...');
      clearInterval(monitor);
      process.exit(0);
    });
    
    return monitor;
  }

  async generateReport() {
    this.log('📊 Generating comprehensive report...');
    
    const report = {
      timestamp: new Date().toISOString(),
      health: await this.healthCheck(),
      performance: await this.analyzePerformance(),
      scaling: await this.intelligentScaling(),
      recommendations: []
    };
    
    // Consolidate recommendations
    const allRecommendations = new Set();
    if (report.health.recommendations) {
      report.health.recommendations.forEach(rec => allRecommendations.add(rec));
    }
    if (report.scaling.length > 0) {
      report.scaling.forEach(decision => {
        allRecommendations.add(`${decision.app}: ${decision.action} - ${decision.reason}`);
      });
    }
    
    report.recommendations = Array.from(allRecommendations);
    
    // Save report
    const reportFile = path.join(this.logDir, 'comprehensive-report.json');
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    
    this.log(`📊 Report generated: ${reportFile}`);
    
    return report;
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async showHelp() {
    console.log(`
🚀 PM2 Intelligent Manager - Advanced Automation Management

Usage: node pm2-intelligent-manager.js [command] [options]

Commands:
  start [env]           - Start ecosystem (production|development)
  stop                  - Stop ecosystem
  restart               - Restart ecosystem
  status                - Show current status
  health                - Run health check
  performance           - Analyze performance
  optimize              - Run optimization
  scale                 - Intelligent scaling analysis
  monitor [interval]    - Start continuous monitoring
  report                - Generate comprehensive report
  help                  - Show this help

Examples:
  node pm2-intelligent-manager.js start production
  node pm2-intelligent-manager.js monitor 60000
  node pm2-intelligent-manager.js health
  node pm2-intelligent-manager.js optimize

Features:
  ✅ Intelligent process management
  ✅ Auto-restart and recovery
  ✅ Performance monitoring
  ✅ Health checks
  ✅ Auto-optimization
  ✅ Intelligent scaling
  ✅ Comprehensive reporting
  ✅ Continuous monitoring
    `);
  }
}

// CLI handling
const manager = new PM2IntelligentManager();
const command = process.argv[2];
const option = process.argv[3];

(async () => {
  try {
    switch (command) {
      case 'start':
        await manager.startEcosystem(option || 'production');
        break;
      case 'stop':
        await manager.stopEcosystem();
        break;
      case 'restart':
        await manager.restartEcosystem();
        break;
      case 'status':
        const status = await manager.getPM2Status();
        console.log(JSON.stringify(status, null, 2));
        break;
      case 'health':
        await manager.healthCheck();
        break;
      case 'performance':
        await manager.analyzePerformance();
        break;
      case 'optimize':
        await manager.optimizeEcosystem();
        break;
      case 'scale':
        await manager.intelligentScaling();
        break;
      case 'monitor':
        const interval = parseInt(option) || 30000;
        await manager.continuousMonitoring(interval);
        break;
      case 'report':
        await manager.generateReport();
        break;
      case 'help':
      default:
        manager.showHelp();
        break;
    }
  } catch (error) {
    manager.log(`❌ Command execution failed: ${error.message}`, 'ERROR');
    process.exit(1);
  }
})();