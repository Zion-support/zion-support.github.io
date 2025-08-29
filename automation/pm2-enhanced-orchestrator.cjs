#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');

class PM2EnhancedOrchestrator {
  constructor() {
    this.pm2Apps = new Map();
    this.automationSystems = new Map();
    this.performanceMetrics = new Map();
    this.healthChecks = new Map();
    this.logFile = path.join(__dirname, 'logs', 'pm2-enhanced-orchestrator.log');
    this.ensureLogDirectory();
    this.loadPM2Apps();
    this.loadAutomationSystems();
    this.startHealthMonitoring();
  }

  ensureLogDirectory() {
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}\n`;
    console.log(message);
    fs.appendFileSync(this.logFile, logMessage);
  }

  loadPM2Apps() {
    try {
      const ecosystemPath = path.join(process.cwd(), 'ecosystem.config.js');
      if (fs.existsSync(ecosystemPath)) {
        const config = require(ecosystemPath);
        config.apps.forEach(app => {
          this.pm2Apps.set(app.name, {
            ...app,
            status: 'unknown',
            instances: app.instances || 1,
            memory: 0,
            cpu: 0,
            uptime: 0,
            restarts: 0,
            lastHealthCheck: null
          });
        });
        this.log(`✅ Loaded ${this.pm2Apps.size} PM2 applications`);
      }
    } catch (error) {
      this.log(`❌ Failed to load PM2 apps: ${error.message}`);
    }
  }

  loadAutomationSystems() {
    const systems = [
      { name: 'lint-monitor', path: 'lint-monitor.cjs', priority: 'high', pm2Managed: true },
      { name: 'lint-fixer', path: 'lint-error-fixer.cjs', priority: 'high', pm2Managed: true },
      { name: 'code-quality', path: 'code-quality-monitor.cjs', priority: 'medium', pm2Managed: true },
      { name: 'performance', path: 'performance-optimizer.cjs', priority: 'low', pm2Managed: true },
      { name: 'security-scanner', path: 'security-scanner.cjs', priority: 'high', pm2Managed: true },
      { name: 'seo-optimizer', path: 'seo-optimizer.cjs', priority: 'medium', pm2Managed: true },
      { name: 'content-generator', path: 'content-generator.cjs', priority: 'low', pm2Managed: true },
      { name: 'test-generator', path: 'test-generator.cjs', priority: 'medium', pm2Managed: true },
      { name: 'edge-cache-warmer', path: 'edge-cache-warmer.cjs', priority: 'low', pm2Managed: true }
    ];

    for (const system of systems) {
      const systemPath = path.join(__dirname, system.path);
      if (fs.existsSync(systemPath)) {
        this.automationSystems.set(system.name, {
          ...system,
          path: systemPath,
          status: 'available',
          lastRun: null,
          successRate: 0,
          averageExecutionTime: 0,
          pm2Status: 'unknown'
        });
      }
    }
    this.log(`✅ Loaded ${this.automationSystems.size} automation systems`);
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
    try {
      const result = await this.executeCommand('pm2 jlist');
      if (result.success) {
        const apps = JSON.parse(result.output);
        for (const app of apps) {
          if (this.pm2Apps.has(app.name)) {
            const pm2App = this.pm2Apps.get(app.name);
            pm2App.status = app.pm2_env?.status || 'unknown';
            pm2App.memory = app.monit?.memory || 0;
            pm2App.cpu = app.monit?.cpu || 0;
            pm2App.uptime = app.pm2_env?.pm_uptime || 0;
            pm2App.restarts = app.pm2_env?.restart_time || 0;
            pm2App.lastHealthCheck = new Date().toISOString();
          }
        }
        this.log(`✅ Updated PM2 status for ${apps.length} applications`);
      }
    } catch (error) {
      this.log(`❌ Failed to get PM2 status: ${error.message}`);
    }
  }

  async startHealthMonitoring() {
    this.log('🏥 Starting health monitoring...');
    
    // Monitor PM2 apps every 30 seconds
    setInterval(async () => {
      await this.getPM2Status();
      await this.performHealthChecks();
    }, 30000);

    // Monitor automation systems every minute
    setInterval(async () => {
      await this.monitorAutomationSystems();
    }, 60000);

    // Performance optimization every 5 minutes
    setInterval(async () => {
      await this.optimizePerformance();
    }, 300000);

    this.log('✅ Health monitoring started');
  }

  async performHealthChecks() {
    for (const [name, app] of this.pm2Apps) {
      const health = await this.checkAppHealth(name, app);
      this.healthChecks.set(name, health);
      
      if (health.status === 'critical') {
        this.log(`🚨 Critical health issue with ${name}: ${health.issue}`);
        await this.autoRecoverApp(name);
      } else if (health.status === 'warning') {
        this.log(`⚠️ Health warning for ${name}: ${health.issue}`);
      }
    }
  }

  async checkAppHealth(appName, app) {
    const health = {
      status: 'healthy',
      issue: null,
      timestamp: new Date().toISOString()
    };

    // Check if app is running
    if (app.status !== 'online') {
      health.status = 'critical';
      health.issue = `App status: ${app.status}`;
      return health;
    }

    // Check memory usage
    if (app.memory > 1024 * 1024 * 1024) { // 1GB
      health.status = 'warning';
      health.issue = `High memory usage: ${(app.memory / 1024 / 1024).toFixed(2)}MB`;
    }

    // Check CPU usage
    if (app.cpu > 80) {
      health.status = 'warning';
      health.issue = `High CPU usage: ${app.cpu.toFixed(1)}%`;
    }

    // Check restart frequency
    if (app.restarts > 5) {
      health.status = 'warning';
      health.issue = `High restart count: ${app.restarts}`;
    }

    return health;
  }

  async autoRecoverApp(appName) {
    this.log(`🔄 Attempting auto-recovery for ${appName}...`);
    
    try {
      // Try to restart the app
      const result = await this.executeCommand(`pm2 restart ${appName}`);
      
      if (result.success) {
        this.log(`✅ Auto-recovery successful for ${appName}`);
      } else {
        this.log(`❌ Auto-recovery failed for ${appName}: ${result.error}`);
        
        // If restart fails, try to delete and restart
        await this.executeCommand(`pm2 delete ${appName}`);
        await this.executeCommand(`pm2 start ecosystem.config.js --only ${appName}`);
      }
    } catch (error) {
      this.log(`❌ Auto-recovery error for ${appName}: ${error.message}`);
    }
  }

  async monitorAutomationSystems() {
    for (const [name, system] of this.automationSystems) {
      if (system.pm2Managed) {
        const pm2App = this.pm2Apps.get(name);
        if (pm2App) {
          system.pm2Status = pm2App.status;
          
          // Check if automation system needs attention
          if (pm2App.status !== 'online') {
            this.log(`⚠️ Automation system ${name} is not running (${pm2App.status})`);
            await this.ensureAutomationSystemRunning(name);
          }
        }
      }
    }
  }

  async ensureAutomationSystemRunning(systemName) {
    this.log(`🔧 Ensuring ${systemName} is running...`);
    
    try {
      const result = await this.executeCommand(`pm2 start ecosystem.config.js --only ${systemName}`);
      
      if (result.success) {
        this.log(`✅ ${systemName} started successfully`);
      } else {
        this.log(`❌ Failed to start ${systemName}: ${result.error}`);
      }
    } catch (error) {
      this.log(`❌ Error starting ${systemName}: ${error.message}`);
    }
  }

  async optimizePerformance() {
    this.log('⚡ Performing performance optimization...');
    
    // Scale apps based on performance metrics
    for (const [name, app] of this.pm2Apps) {
      if (app.cpu > 70 && app.instances < 3) {
        this.log(`📈 Scaling ${name} due to high CPU usage`);
        await this.executeCommand(`pm2 scale ${name} ${Math.min(app.instances + 1, 3)}`);
      }
      
      if (app.memory > 1024 * 1024 * 1024) { // 1GB
        this.log(`🔄 Restarting ${name} due to high memory usage`);
        await this.executeCommand(`pm2 restart ${name}`);
      }
    }

    // Clean up old logs
    await this.executeCommand('pm2 flush');
    
    this.log('✅ Performance optimization completed');
  }

  async runAutomationSystem(systemName, options = {}) {
    const system = this.automationSystems.get(systemName);
    if (!system) {
      this.log(`❌ System not found: ${systemName}`);
      return false;
    }

    const startTime = Date.now();
    try {
      this.log(`🚀 Running automation system: ${systemName}`);
      
      if (system.pm2Managed) {
        // Run through PM2
        const result = await this.executeCommand(`pm2 restart ${systemName}`);
        if (result.success) {
          const executionTime = Date.now() - startTime;
          this.updateSystemMetrics(systemName, true, executionTime);
          this.log(`✅ PM2-managed system completed: ${systemName} (${executionTime}ms)`);
          return { success: true, output: result.output, executionTime };
        } else {
          throw new Error(result.error);
        }
      } else {
        // Run directly
        const result = execSync(`node "${system.path}"`, { 
          encoding: 'utf8',
          stdio: 'pipe',
          ...options
        });
        
        const executionTime = Date.now() - startTime;
        this.updateSystemMetrics(systemName, true, executionTime);
        
        this.log(`✅ Direct system completed: ${systemName} (${executionTime}ms)`);
        return { success: true, output: result, executionTime };
      }
    } catch (error) {
      const executionTime = Date.now() - startTime;
      this.updateSystemMetrics(systemName, false, executionTime);
      
      this.log(`❌ System failed: ${systemName} - ${error.message}`);
      return { success: false, error: error.message, executionTime };
    }
  }

  updateSystemMetrics(systemName, success, executionTime) {
    const system = this.automationSystems.get(systemName);
    if (!system) return;

    // Update success rate
    const currentSuccessRate = system.successRate;
    const totalRuns = (system.lastRun ? 1 : 0) + 1;
    system.successRate = success ? (currentSuccessRate + 1) / totalRuns : currentSuccessRate / totalRuns;

    // Update average execution time
    const currentAvgTime = system.averageExecutionTime;
    system.averageExecutionTime = (currentAvgTime + executionTime) / totalRuns;

    system.lastRun = new Date().toISOString();
  }

  async generateComprehensiveReport() {
    this.log('📊 Generating comprehensive PM2 orchestration report...');
    
    const report = {
      timestamp: new Date().toISOString(),
      pm2Apps: Object.fromEntries(this.pm2Apps),
      automationSystems: Object.fromEntries(this.automationSystems),
      healthChecks: Object.fromEntries(this.healthChecks),
      performanceMetrics: Object.fromEntries(this.performanceMetrics),
      summary: {
        totalPM2Apps: this.pm2Apps.size,
        totalAutomationSystems: this.automationSystems.size,
        healthyApps: Array.from(this.healthChecks.values()).filter(h => h.status === 'healthy').length,
        warningApps: Array.from(this.healthChecks.values()).filter(h => h.status === 'warning').length,
        criticalApps: Array.from(this.healthChecks.values()).filter(h => h.status === 'critical').length
      }
    };

    const reportPath = path.join(__dirname, 'logs', `pm2-orchestration-report-${Date.now()}.json`);
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    this.log(`✅ Comprehensive report generated: ${reportPath}`);
    return report;
  }

  async startContinuousMode() {
    this.log('🔄 Starting continuous orchestration mode...');
    
    // Start all PM2 apps
    await this.executeCommand('pm2 start ecosystem.config.js');
    
    // Wait for apps to start
    await this.sleep(5000);
    
    // Start health monitoring
    this.startHealthMonitoring();
    
    this.log('✅ Continuous orchestration mode started');
    
    // Keep the process running
    process.on('SIGINT', async () => {
      this.log('🛑 Shutting down PM2 enhanced orchestrator...');
      process.exit(0);
    });
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  showStatus() {
    console.log('\n📊 PM2 Enhanced Orchestrator Status:');
    console.log('=====================================');
    
    console.log('\n🚀 PM2 Applications:');
    for (const [name, app] of this.pm2Apps) {
      const health = this.healthChecks.get(name);
      const status = health ? health.status : 'unknown';
      const emoji = status === 'healthy' ? '✅' : status === 'warning' ? '⚠️' : '❌';
      console.log(`  ${emoji} ${name}: ${app.status} (${status})`);
    }
    
    console.log('\n🤖 Automation Systems:');
    for (const [name, system] of this.automationSystems) {
      const emoji = system.pm2Status === 'online' ? '✅' : '❌';
      console.log(`  ${emoji} ${name}: ${system.pm2Status} (Success: ${(system.successRate * 100).toFixed(1)}%)`);
    }
    
    console.log('\n🏥 System Health:');
    const summary = {
      healthy: Array.from(this.healthChecks.values()).filter(h => h.status === 'healthy').length,
      warning: Array.from(this.healthChecks.values()).filter(h => h.status === 'warning').length,
      critical: Array.from(this.healthChecks.values()).filter(h => h.status === 'critical').length
    };
    console.log(`  ✅ Healthy: ${summary.healthy}`);
    console.log(`  ⚠️ Warning: ${summary.warning}`);
    console.log(`  ❌ Critical: ${summary.critical}`);
  }
}

// CLI handling
const orchestrator = new PM2EnhancedOrchestrator();
const command = process.argv[2];

switch (command) {
  case 'start':
    orchestrator.startContinuousMode();
    break;
  case 'status':
    orchestrator.showStatus();
    process.exit(0);
    break;
  case 'report':
    orchestrator.generateComprehensiveReport();
    process.exit(0);
    break;
  case 'health':
    orchestrator.performHealthChecks();
    process.exit(0);
    break;
  case 'optimize':
    orchestrator.optimizePerformance();
    process.exit(0);
    break;
  default:
    console.log('Usage: node pm2-enhanced-orchestrator.cjs [start|status|report|health|optimize]');
    console.log('\nCommands:');
    console.log('  start     - Start continuous orchestration mode');
    console.log('  status    - Show current status');
    console.log('  report    - Generate comprehensive report');
    console.log('  health    - Perform health checks');
    console.log('  optimize  - Optimize performance');
    process.exit(1);
}