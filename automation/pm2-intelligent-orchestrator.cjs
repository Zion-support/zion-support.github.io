#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');
const chokidar = require('chokidar');

class PM2IntelligentOrchestrator {
  constructor() {
    this.automationSystems = new Map();
    this.learningData = new Map();
    this.performanceMetrics = new Map();
    this.pm2Processes = new Map();
    this.logFile = path.join(__dirname, 'logs', 'pm2-orchestrator.log');
    this.ensureLogDirectory();
    this.loadAutomationSystems();
    this.initializePM2Integration();
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
    console.log(message);
    fs.appendFileSync(this.logFile, logMessage);
  }

  async initializePM2Integration() {
    try {
      // Check if PM2 is installed
      const pm2Check = execSync('pm2 --version', { encoding: 'utf8' });
      this.log(`✅ PM2 detected: ${pm2Check.trim()}`);
      
      // Load ecosystem configuration
      const ecosystemPath = path.join(process.cwd(), 'ecosystem.config.js');
      if (fs.existsSync(ecosystemPath)) {
        this.ecosystemConfig = require(ecosystemPath);
        this.log(`✅ Ecosystem config loaded: ${this.ecosystemConfig.apps.length} apps configured`);
      }
    } catch (error) {
      this.log(`⚠️ PM2 not available: ${error.message}`, 'warn');
    }
  }

  loadAutomationSystems() {
    const systems = [
      { 
        name: 'lint-monitor', 
        path: 'lint-monitor.cjs', 
        priority: 'high',
        pm2Name: 'lint-monitor',
        autoRestart: true,
        healthCheck: true
      },
      { 
        name: 'lint-fixer', 
        path: 'lint-error-fixer.cjs', 
        priority: 'high',
        pm2Name: 'lint-fixer',
        autoRestart: true,
        healthCheck: true
      },
      { 
        name: 'code-quality', 
        path: 'code-quality-monitor.cjs', 
        priority: 'medium',
        pm2Name: 'code-quality-monitor',
        autoRestart: true,
        healthCheck: true
      },
      { 
        name: 'performance', 
        path: 'performance-optimizer.cjs', 
        priority: 'medium',
        pm2Name: 'performance-optimizer',
        autoRestart: true,
        healthCheck: true
      },
      { 
        name: 'security-scanner', 
        path: 'security-scanner.cjs', 
        priority: 'high',
        pm2Name: 'security-scanner',
        autoRestart: true,
        healthCheck: true
      },
      { 
        name: 'seo-optimizer', 
        path: 'seo-optimizer.cjs', 
        priority: 'medium',
        pm2Name: 'seo-optimizer',
        autoRestart: true,
        healthCheck: true
      },
      { 
        name: 'test-generator', 
        path: 'test-generator.cjs', 
        priority: 'medium',
        pm2Name: 'test-generator',
        autoRestart: true,
        healthCheck: true
      },
      { 
        name: 'content-generator', 
        path: 'content-generator.cjs', 
        priority: 'low',
        pm2Name: 'content-generator',
        autoRestart: true,
        healthCheck: true
      },
      { 
        name: 'edge-cache-warmer', 
        path: 'edge-cache-warmer.cjs', 
        priority: 'low',
        pm2Name: 'edge-cache-warmer',
        autoRestart: true,
        healthCheck: true
      }
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
          pm2Status: 'unknown',
          restartCount: 0,
          lastHealthCheck: null
        });
      }
    }
  }

  async startSystem(systemName, options = {}) {
    const system = this.automationSystems.get(systemName);
    if (!system) {
      this.log(`❌ System not found: ${systemName}`, 'error');
      return false;
    }

    try {
      this.log(`🚀 Starting system: ${systemName}`);
      
      if (this.ecosystemConfig) {
        // Use PM2 to start the system
        const pm2App = this.ecosystemConfig.apps.find(app => app.name === system.pm2Name);
        if (pm2App) {
          const result = execSync(`pm2 start ecosystem.config.js --only ${system.pm2Name}`, {
            encoding: 'utf8',
            stdio: 'pipe'
          });
          
          system.pm2Status = 'starting';
          system.lastRun = new Date();
          this.log(`✅ System started via PM2: ${systemName}`);
          
          // Monitor PM2 status
          setTimeout(() => this.checkPM2Status(systemName), 5000);
          
          return { success: true, output: result, method: 'pm2' };
        }
      }
      
      // Fallback to direct execution
      const startTime = Date.now();
      const result = execSync(`node "${system.path}"`, { 
        encoding: 'utf8',
        stdio: 'pipe',
        ...options
      });
      
      const executionTime = Date.now() - startTime;
      this.updateSystemMetrics(systemName, true, executionTime);
      
      this.log(`✅ System started directly: ${systemName} (${executionTime}ms)`);
      return { success: true, output: result, executionTime, method: 'direct' };
      
    } catch (error) {
      const executionTime = Date.now() - (startTime || Date.now());
      this.updateSystemMetrics(systemName, false, executionTime);
      
      this.log(`❌ Failed to start system: ${systemName} - ${error.message}`, 'error');
      return { success: false, error: error.message, executionTime };
    }
  }

  async checkPM2Status(systemName) {
    const system = this.automationSystems.get(systemName);
    if (!system || !system.pm2Name) return;

    try {
      const result = execSync(`pm2 show ${system.pm2Name}`, { encoding: 'utf8', stdio: 'pipe' });
      
      if (result.includes('online')) {
        system.pm2Status = 'online';
        system.lastHealthCheck = new Date();
        this.log(`✅ ${systemName} is online via PM2`);
      } else if (result.includes('stopped')) {
        system.pm2Status = 'stopped';
        this.log(`⚠️ ${systemName} is stopped via PM2`);
        
        if (system.autoRestart) {
          this.log(`🔄 Auto-restarting ${systemName}...`);
          await this.restartSystem(systemName);
        }
      } else if (result.includes('errored')) {
        system.pm2Status = 'errored';
        system.restartCount++;
        this.log(`❌ ${systemName} has errors via PM2 (restart count: ${system.restartCount})`);
        
        if (system.autoRestart && system.restartCount < 5) {
          this.log(`🔄 Auto-restarting ${systemName}...`);
          await this.restartSystem(systemName);
        }
      }
    } catch (error) {
      this.log(`⚠️ Failed to check PM2 status for ${systemName}: ${error.message}`, 'warn');
    }
  }

  async restartSystem(systemName) {
    const system = this.automationSystems.get(systemName);
    if (!system) return false;

    try {
      this.log(`🔄 Restarting system: ${systemName}`);
      
      if (system.pm2Name && this.ecosystemConfig) {
        // Use PM2 restart
        execSync(`pm2 restart ${system.pm2Name}`, { stdio: 'pipe' });
        system.pm2Status = 'restarting';
        this.log(`✅ System restarted via PM2: ${systemName}`);
        
        // Check status after restart
        setTimeout(() => this.checkPM2Status(systemName), 3000);
        return true;
      } else {
        // Fallback to direct restart
        return await this.startSystem(systemName);
      }
    } catch (error) {
      this.log(`❌ Failed to restart system: ${systemName} - ${error.message}`, 'error');
      return false;
    }
  }

  async stopSystem(systemName) {
    const system = this.automationSystems.get(systemName);
    if (!system) return false;

    try {
      this.log(`🛑 Stopping system: ${systemName}`);
      
      if (system.pm2Name && this.ecosystemConfig) {
        execSync(`pm2 stop ${system.pm2Name}`, { stdio: 'pipe' });
        system.pm2Status = 'stopped';
        this.log(`✅ System stopped via PM2: ${systemName}`);
        return true;
      } else {
        // For direct processes, we'd need to track PIDs
        this.log(`⚠️ Cannot stop direct process: ${systemName}`, 'warn');
        return false;
      }
    } catch (error) {
      this.log(`❌ Failed to stop system: ${systemName} - ${error.message}`, 'error');
      return false;
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
    system.averageExecutionTime = (currentAvgTime + executionTime) / 2;

    // Update last run
    system.lastRun = new Date();
  }

  async healthCheck() {
    this.log('🏥 Performing system health check...');
    
    const healthReport = {
      timestamp: new Date().toISOString(),
      totalSystems: this.automationSystems.size,
      healthySystems: 0,
      warningSystems: 0,
      errorSystems: 0,
      systems: []
    };

    for (const [name, system] of this.automationSystems) {
      const health = await this.checkSystemHealth(name);
      healthReport.systems.push(health);
      
      if (health.status === 'healthy') healthReport.healthySystems++;
      else if (health.status === 'warning') healthReport.warningSystems++;
      else healthReport.errorSystems++;
    }

    // Save health report
    const reportPath = path.join(__dirname, 'logs', 'health-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(healthReport, null, 2));
    
    this.log(`📊 Health check completed: ${healthReport.healthySystems}/${healthReport.totalSystems} systems healthy`);
    
    // Auto-fix critical issues
    if (healthReport.errorSystems > 0) {
      await this.autoFixCriticalIssues(healthReport);
    }

    return healthReport;
  }

  async checkSystemHealth(systemName) {
    const system = this.automationSystems.get(systemName);
    if (!system) return { name: systemName, status: 'unknown', issues: ['System not found'] };

    const health = {
      name: systemName,
      status: 'unknown',
      issues: [],
      pm2Status: system.pm2Status,
      lastRun: system.lastRun,
      successRate: system.successRate,
      restartCount: system.restartCount
    };

    // Check PM2 status
    if (system.pm2Name && this.ecosystemConfig) {
      try {
        const result = execSync(`pm2 show ${system.pm2Name}`, { encoding: 'utf8', stdio: 'pipe' });
        
        if (result.includes('online')) {
          health.status = 'healthy';
          health.pm2Status = 'online';
        } else if (result.includes('stopped')) {
          health.status = 'warning';
          health.issues.push('System is stopped');
        } else if (result.includes('errored')) {
          health.status = 'error';
          health.issues.push('System has errors');
        }
      } catch (error) {
        health.status = 'error';
        health.issues.push(`PM2 status check failed: ${error.message}`);
      }
    }

    // Check success rate
    if (system.successRate < 0.8) {
      health.status = health.status === 'error' ? 'error' : 'warning';
      health.issues.push(`Low success rate: ${(system.successRate * 100).toFixed(1)}%`);
    }

    // Check restart count
    if (system.restartCount > 5) {
      health.status = 'error';
      health.issues.push(`High restart count: ${system.restartCount}`);
    }

    // Check if system is too old
    if (system.lastRun && (Date.now() - system.lastRun.getTime()) > 24 * 60 * 60 * 1000) {
      health.status = health.status === 'error' ? 'error' : 'warning';
      health.issues.push('System not run recently');
    }

    return health;
  }

  async autoFixCriticalIssues(healthReport) {
    this.log('🔧 Auto-fixing critical issues...');
    
    for (const system of healthReport.systems) {
      if (system.status === 'error') {
        this.log(`🔧 Attempting to fix ${system.name}...`);
        
        // Restart the system
        await this.restartSystem(system.name);
        
        // Wait a bit and check again
        await this.sleep(5000);
        await this.checkPM2Status(system.name);
      }
    }
    
    this.log('✅ Auto-fix completed');
  }

  async startContinuousMonitoring() {
    this.log('👀 Starting continuous monitoring...');
    
    // Health check every 5 minutes
    setInterval(async () => {
      await this.healthCheck();
    }, 5 * 60 * 1000);
    
    // PM2 status check every 30 seconds
    setInterval(async () => {
      for (const [name, system] of this.automationSystems) {
        if (system.pm2Name) {
          await this.checkPM2Status(name);
        }
      }
    }, 30 * 1000);
    
    // File watching for critical files
    this.watchCriticalFiles();
    
    this.log('✅ Continuous monitoring started');
  }

  watchCriticalFiles() {
    const criticalFiles = [
      'package.json',
      'ecosystem.config.js',
      'vite.config.ts',
      'tsconfig.json'
    ];
    
    const watcher = chokidar.watch(criticalFiles, {
      ignored: /(^|[\/\\])\../,
      persistent: true
    });
    
    watcher.on('change', async (filePath) => {
      this.log(`📝 Critical file changed: ${filePath}`);
      
      // Reload ecosystem config if it changed
      if (filePath.includes('ecosystem.config.js')) {
        this.log('🔄 Reloading ecosystem configuration...');
        try {
          delete require.cache[require.resolve(filePath)];
          this.ecosystemConfig = require(filePath);
          this.log('✅ Ecosystem configuration reloaded');
        } catch (error) {
          this.log(`❌ Failed to reload ecosystem config: ${error.message}`, 'error');
        }
      }
      
      // Restart relevant systems if package.json changed
      if (filePath.includes('package.json')) {
        this.log('📦 Package.json changed, restarting systems...');
        await this.restartAllSystems();
      }
    });
    
    this.log('👀 File watching started for critical files');
  }

  async restartAllSystems() {
    this.log('🔄 Restarting all systems...');
    
    for (const [name, system] of this.automationSystems) {
      if (system.pm2Name && this.ecosystemConfig) {
        try {
          execSync(`pm2 restart ${system.pm2Name}`, { stdio: 'pipe' });
          this.log(`✅ Restarted: ${name}`);
        } catch (error) {
          this.log(`❌ Failed to restart ${name}: ${error.message}`, 'error');
        }
        
        // Add delay between restarts
        await this.sleep(2000);
      }
    }
    
    this.log('✅ All systems restarted');
  }

  async generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      systems: Array.from(this.automationSystems.entries()).map(([name, system]) => ({
        name,
        status: system.status,
        pm2Status: system.pm2Status,
        lastRun: system.lastRun,
        successRate: system.successRate,
        averageExecutionTime: system.averageExecutionTime,
        restartCount: system.restartCount
      })),
      performance: {
        totalSystems: this.automationSystems.size,
        averageSuccessRate: this.calculateAverageSuccessRate(),
        systemsWithIssues: this.countSystemsWithIssues()
      }
    };

    const reportPath = path.join(__dirname, 'logs', 'orchestrator-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    this.log(`📊 Report generated: ${reportPath}`);
    return report;
  }

  calculateAverageSuccessRate() {
    const rates = Array.from(this.automationSystems.values())
      .map(system => system.successRate)
      .filter(rate => rate > 0);
    
    return rates.length > 0 ? rates.reduce((a, b) => a + b, 0) / rates.length : 0;
  }

  countSystemsWithIssues() {
    return Array.from(this.automationSystems.values())
      .filter(system => system.restartCount > 0 || system.successRate < 0.8)
      .length;
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async showStatus() {
    console.log('\n📊 PM2 Intelligent Orchestrator Status:');
    console.log('    
    for (const [name, system] of this.automationSystems) {
      const status = system.pm2Status || 'unknown';
      const lastRun = system.lastRun ? system.lastRun.toLocaleString() : 'Never';
      const successRate = (system.successRate * 100).toFixed(1);
      
      console.log(`${name.padEnd(20)} | ${status.padEnd(10)} | ${lastRun.padEnd(20)} | ${successRate}% | ${system.restartCount}`);
    }
    
    console.log('\nCommands:');
    console.log('  start <system>  - Start a specific system');
    console.log('  restart <system> - Restart a specific system');
    console.log('  stop <system>   - Stop a specific system');
    console.log('  health          - Perform health check');
    console.log('  report          - Generate report');
    console.log('  monitor         - Start continuous monitoring');
  }
}

// CLI handling
const orchestrator = new PM2IntelligentOrchestrator();
const command = process.argv[2];
const systemName = process.argv[3];

(async () => {
  try {
    switch (command) {
      case 'start':
        if (systemName) {
          await orchestrator.startSystem(systemName);
        } else {
          console.log('Usage: node pm2-intelligent-orchestrator.cjs start <system-name>');
        }
        break;
      case 'restart':
        if (systemName) {
          await orchestrator.restartSystem(systemName);
        } else {
          await orchestrator.restartAllSystems();
        }
        break;
      case 'stop':
        if (systemName) {
          await orchestrator.stopSystem(systemName);
        } else {
          console.log('Usage: node pm2-intelligent-orchestrator.cjs stop <system-name>');
        }
        break;
      case 'health':
        await orchestrator.healthCheck();
        break;
      case 'report':
        await orchestrator.generateReport();
        break;
      case 'monitor':
        await orchestrator.startContinuousMonitoring();
        break;
      case 'status':
        await orchestrator.showStatus();
        break;
      default:
        await orchestrator.showStatus();
        break;
    }
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
})();

// Graceful shutdown
process.on('SIGINT', async () => {
  console.log('\n🛑 Shutting down PM2 orchestrator...');
  process.exit(0);
});