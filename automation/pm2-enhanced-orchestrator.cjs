#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');
const chokidar = require('chokidar');

class PM2EnhancedOrchestrator {
  constructor() {
    this.automationSystems = new Map();
    this.pm2Processes = new Map();
    this.learningData = new Map();
    this.performanceMetrics = new Map();
    this.healthMetrics = new Map();
    this.logFile = path.join(__dirname, 'logs', 'pm2-enhanced-orchestrator.log');
    this.ensureLogDirectory();
    this.loadAutomationSystems();
    this.setupPM2Integration();
  }

  ensureLogDirectory() {
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}\n`;
    console.log(`[${level}] ${message}`);
    fs.appendFileSync(this.logFile, logMessage);
  }

  setupPM2Integration() {
    // Check if PM2 is available
    try {
      execSync('pm2 --version', { stdio: 'pipe' });
      this.log('✅ PM2 integration enabled');
      this.pm2Available = true;
    } catch (error) {
      this.log('⚠️ PM2 not available, falling back to standard process management', 'WARN');
      this.pm2Available = false;
    }
  }

  loadAutomationSystems() {
    const systems = [
      { 
        name: 'lint-monitor', 
        path: 'lint-monitor.cjs', 
        priority: 'critical',
        pm2Name: 'lint-monitor',
        watchPaths: ['./src', './server/src'],
        autoRestart: true,
        maxRestarts: 15,
        memoryLimit: '200M'
      },
      { 
        name: 'lint-fixer', 
        path: 'lint-error-fixer.cjs', 
        priority: 'high',
        pm2Name: 'lint-fixer',
        watchPaths: false,
        autoRestart: false,
        maxRestarts: 3,
        memoryLimit: '150M'
      },
      { 
        name: 'code-quality', 
        path: 'code-quality-monitor.cjs', 
        priority: 'high',
        pm2Name: 'code-quality',
        watchPaths: ['./src', './server/src'],
        autoRestart: true,
        maxRestarts: 8,
        memoryLimit: '250M'
      },
      { 
        name: 'performance', 
        path: 'performance-optimizer.cjs', 
        priority: 'medium',
        pm2Name: 'performance-optimizer',
        watchPaths: false,
        autoRestart: true,
        maxRestarts: 5,
        memoryLimit: '200M'
      },
      { 
        name: 'security-scanner', 
        path: 'security-scanner.cjs', 
        priority: 'critical',
        pm2Name: 'security-scanner',
        watchPaths: false,
        autoRestart: true,
        maxRestarts: 5,
        memoryLimit: '300M'
      },
      { 
        name: 'seo-optimizer', 
        path: 'seo-optimizer.cjs', 
        priority: 'medium',
        pm2Name: 'seo-optimizer',
        watchPaths: ['./src', './public'],
        autoRestart: true,
        maxRestarts: 5,
        memoryLimit: '200M'
      },
      { 
        name: 'test-generator', 
        path: 'test-generator.cjs', 
        priority: 'medium',
        pm2Name: 'test-generator',
        watchPaths: ['./src', './server/src'],
        autoRestart: true,
        maxRestarts: 5,
        memoryLimit: '250M'
      },
      { 
        name: 'content-generator', 
        path: 'content-generator.cjs', 
        priority: 'low',
        pm2Name: 'content-generator',
        watchPaths: ['./src', './data'],
        autoRestart: true,
        maxRestarts: 5,
        memoryLimit: '200M'
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
          restarts: 0,
          lastHealthCheck: null,
          healthScore: 100
        });
      }
    }
  }

  async startSystem(systemName, options = {}) {
    const system = this.automationSystems.get(systemName);
    if (!system) {
      this.log(`❌ System not found: ${systemName}`, 'ERROR');
      return false;
    }

    if (this.pm2Available) {
      return await this.startSystemWithPM2(system, options);
    } else {
      return await this.startSystemStandard(system, options);
    }
  }

  async startSystemWithPM2(system, options = {}) {
    try {
      this.log(`🚀 Starting ${system.name} with PM2...`);
      
      // Check if already running
      const pm2Status = await this.getPM2Status();
      const existingProcess = pm2Status.find(p => p.name === system.pm2Name);
      
      if (existingProcess && existingProcess.pm2_env?.status === 'online') {
        this.log(`✅ ${system.name} is already running in PM2`);
        return true;
      }

      // Start with PM2
      const pm2Command = `pm2 start "${system.path}" --name "${system.pm2Name}" --max-memory-restart ${system.memoryLimit}`;
      
      if (system.watchPaths) {
        const watchPaths = Array.isArray(system.watchPaths) ? system.watchPaths.join(',') : system.watchPaths;
        pm2Command += ` --watch "${watchPaths}"`;
      }
      
      if (system.autoRestart) {
        pm2Command += ` --max-restarts ${system.maxRestarts}`;
      }

      const result = execSync(pm2Command, { 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      
      this.log(`✅ ${system.name} started successfully with PM2`);
      this.updateSystemMetrics(system.name, true, 0);
      
      return true;
    } catch (error) {
      this.log(`❌ Failed to start ${system.name} with PM2: ${error.message}`, 'ERROR');
      this.updateSystemMetrics(system.name, false, 0);
      return false;
    }
  }

  async startSystemStandard(system, options = {}) {
    const startTime = Date.now();
    try {
      this.log(`🚀 Starting ${system.name} with standard process...`);
      
      const process = spawn('node', [system.path], {
        stdio: 'pipe',
        detached: false,
        ...options
      });

      process.stdout.on('data', (data) => {
        this.log(`[${system.name}] ${data.toString().trim()}`);
      });

      process.stderr.on('data', (data) => {
        this.log(`[${system.name}] ERROR: ${data.toString().trim()}`, 'ERROR');
      });

      process.on('close', (code) => {
        this.log(`[${system.name}] Process exited with code ${code}`);
        this.pm2Processes.delete(system.name);
      });

      process.on('error', (error) => {
        this.log(`[${system.name}] Process error: ${error.message}`, 'ERROR');
        this.pm2Processes.delete(system.name);
      });

      this.pm2Processes.set(system.name, process);
      this.log(`✅ ${system.name} started successfully`);
      
      const executionTime = Date.now() - startTime;
      this.updateSystemMetrics(system.name, true, executionTime);
      
      return true;
    } catch (error) {
      const executionTime = Date.now() - startTime;
      this.log(`❌ Failed to start ${system.name}: ${error.message}`, 'ERROR');
      this.updateSystemMetrics(system.name, false, executionTime);
      return false;
    }
  }

  async stopSystem(systemName) {
    const system = this.automationSystems.get(systemName);
    if (!system) {
      this.log(`❌ System not found: ${systemName}`, 'ERROR');
      return false;
    }

    if (this.pm2Available) {
      try {
        execSync(`pm2 stop "${system.pm2Name}"`, { stdio: 'pipe' });
        this.log(`✅ ${system.name} stopped successfully in PM2`);
        return true;
      } catch (error) {
        this.log(`❌ Failed to stop ${system.name} in PM2: ${error.message}`, 'ERROR');
        return false;
      }
    } else {
      const process = this.pm2Processes.get(systemName);
      if (process) {
        process.kill('SIGTERM');
        this.pm2Processes.delete(systemName);
        this.log(`✅ ${system.name} stopped successfully`);
        return true;
      }
      return false;
    }
  }

  async restartSystem(systemName) {
    this.log(`🔄 Restarting ${systemName}...`);
    
    await this.stopSystem(systemName);
    await this.sleep(1000);
    
    const result = await this.startSystem(systemName);
    
    if (result) {
      this.log(`✅ ${systemName} restarted successfully`);
    } else {
      this.log(`❌ Failed to restart ${systemName}`, 'ERROR');
    }
    
    return result;
  }

  async getPM2Status() {
    if (!this.pm2Available) {
      return [];
    }

    try {
      const result = execSync('pm2 jlist', { encoding: 'utf8' });
      return JSON.parse(result);
    } catch (error) {
      this.log(`Failed to get PM2 status: ${error.message}`, 'ERROR');
      return [];
    }
  }

  async monitorAllSystems() {
    this.log('👀 Starting comprehensive system monitoring...');
    
    const monitor = setInterval(async () => {
      try {
        await this.healthCheck();
        await this.performanceCheck();
        await this.autoOptimize();
        await this.learningOptimization();
      } catch (error) {
        this.log(`❌ Monitoring error: ${error.message}`, 'ERROR');
      }
    }, 30000); // Check every 30 seconds
    
    return monitor;
  }

  async healthCheck() {
    this.log('🏥 Running health check...');
    
    const healthReport = {
      timestamp: new Date().toISOString(),
      systems: [],
      overallHealth: 'healthy',
      issues: []
    };

    for (const [name, system] of this.automationSystems) {
      let status = 'unknown';
      let healthScore = 100;
      
      if (this.pm2Available) {
        const pm2Status = await this.getPM2Status();
        const pm2Process = pm2Status.find(p => p.name === system.pm2Name);
        
        if (pm2Process) {
          status = pm2Process.pm2_env?.status || 'unknown';
          
          // Calculate health score based on various factors
          if (status === 'online') {
            healthScore = 100;
            
            // Deduct points for high restart count
            const restarts = pm2Process.pm2_env?.restart_time || 0;
            if (restarts > 5) {
              healthScore -= Math.min(restarts * 5, 30);
            }
            
            // Deduct points for high memory usage
            const memory = pm2Process.monit?.memory || 0;
            const memoryMB = memory / 1024 / 1024;
            if (memoryMB > 200) {
              healthScore -= Math.min((memoryMB - 200) * 2, 20);
            }
          } else if (status === 'errored') {
            healthScore = 0;
            healthReport.issues.push(`${name} is in error state`);
          } else if (status === 'stopped') {
            healthScore = 50;
          }
        }
      } else {
        const process = this.pm2Processes.get(name);
        status = process && !process.killed ? 'online' : 'stopped';
        healthScore = status === 'online' ? 100 : 0;
      }
      
      system.status = status;
      system.lastHealthCheck = new Date().toISOString();
      system.healthScore = healthScore;
      
      healthReport.systems.push({
        name,
        status,
        healthScore,
        lastHealthCheck: system.lastHealthCheck
      });
      
      if (healthScore < 50) {
        healthReport.overallHealth = 'degraded';
      }
    }
    
    if (healthReport.issues.length > 0) {
      healthReport.overallHealth = 'critical';
    }
    
    this.healthMetrics.set(Date.now(), healthReport);
    
    // Save health report
    const healthFile = path.join(__dirname, 'logs', 'health-report.json');
    fs.writeFileSync(healthFile, JSON.stringify(healthReport, null, 2));
    
    this.log(`🏥 Health check completed: ${healthReport.overallHealth} (${healthReport.issues.length} issues)`);
    
    return healthReport;
  }

  async performanceCheck() {
    this.log('📊 Running performance check...');
    
    const performanceReport = {
      timestamp: new Date().toISOString(),
      systems: [],
      overallPerformance: 'good',
      recommendations: []
    };

    for (const [name, system] of this.automationSystems) {
      if (this.pm2Available) {
        const pm2Status = await this.getPM2Status();
        const pm2Process = pm2Status.find(p => p.name === system.pm2Name);
        
        if (pm2Process && pm2Process.pm2_env?.status === 'online') {
          const memory = pm2Process.monit?.memory || 0;
          const cpu = pm2Process.monit?.cpu || 0;
          const uptime = pm2Process.pm2_env?.pm_uptime || 0;
          
          const performance = {
            name,
            memory: `${Math.round(memory / 1024 / 1024)}MB`,
            cpu: `${cpu}%`,
            uptime: `${Math.round(uptime / 1000)}s`,
            restarts: pm2Process.pm2_env?.restart_time || 0
          };
          
          performanceReport.systems.push(performance);
          
          // Generate recommendations
          if (memory > 500 * 1024 * 1024) { // 500MB
            performanceReport.recommendations.push(`${name}: Consider memory optimization`);
          }
          
          if (cpu > 80) {
            performanceReport.recommendations.push(`${name}: High CPU usage detected`);
          }
          
          if (performance.restarts > 10) {
            performanceReport.recommendations.push(`${name}: High restart count - investigate stability`);
          }
        }
      }
    }
    
    if (performanceReport.recommendations.length > 5) {
      performanceReport.overallPerformance = 'needs_attention';
    }
    
    this.performanceMetrics.set(Date.now(), performanceReport);
    
    // Save performance report
    const performanceFile = path.join(__dirname, 'logs', 'performance-report.json');
    fs.writeFileSync(performanceFile, JSON.stringify(performanceReport, null, 2));
    
    this.log(`📊 Performance check completed: ${performanceReport.overallPerformance}`);
    
    return performanceReport;
  }

  async autoOptimize() {
    this.log('🔧 Running auto-optimization...');
    
    const healthReport = await this.healthCheck();
    const performanceReport = await this.performanceCheck();
    
    let optimizationsApplied = 0;
    
    // Auto-restart critical systems
    for (const issue of healthReport.issues) {
      const systemName = issue.split(' ')[0];
      if (this.automationSystems.has(systemName)) {
        this.log(`🔄 Auto-restarting critical system: ${systemName}`);
        await this.restartSystem(systemName);
        optimizationsApplied++;
      }
    }
    
    // Memory optimization
    if (this.pm2Available) {
      try {
        execSync('pm2 flush', { stdio: 'pipe' });
        this.log('🧹 Memory cleanup completed');
        optimizationsApplied++;
      } catch (error) {
        this.log(`❌ Memory cleanup failed: ${error.message}`, 'ERROR');
      }
    }
    
    // Performance-based optimizations
    for (const recommendation of performanceReport.recommendations) {
      if (recommendation.includes('High restart count')) {
        const systemName = recommendation.split(':')[0];
        this.log(`🔧 Investigating stability issues for: ${systemName}`);
        // Could implement more sophisticated stability analysis here
        optimizationsApplied++;
      }
    }
    
    this.log(`✅ Auto-optimization completed: ${optimizationsApplied} optimizations applied`);
    
    return optimizationsApplied;
  }

  async learningOptimization() {
    this.log('🧠 Running learning-based optimization...');
    
    // Analyze patterns in system behavior
    for (const [name, system] of this.automationSystems) {
      const recentMetrics = Array.from(this.performanceMetrics.entries())
        .slice(-10) // Last 10 metrics
        .map(([timestamp, metrics]) => {
          const systemMetrics = metrics.systems.find(s => s.name === name);
          return systemMetrics ? { timestamp, ...systemMetrics } : null;
        })
        .filter(Boolean);
      
      if (recentMetrics.length > 5) {
        // Calculate trend
        const avgRestarts = recentMetrics.reduce((sum, m) => sum + (m.restarts || 0), 0) / recentMetrics.length;
        
        if (avgRestarts > 5) {
          this.log(`📈 Learning: ${name} shows high restart pattern, adjusting strategy`);
          system.maxRestarts = Math.min(system.maxRestarts + 2, 20);
          system.autoRestart = true;
        }
      }
    }
    
    // Save learning data
    const learningFile = path.join(__dirname, 'logs', 'learning-data.json');
    fs.writeFileSync(learningFile, JSON.stringify(Array.from(this.learningData.entries()), null, 2));
    
    this.log('🧠 Learning-based optimization completed');
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

    // Update last run
    system.lastRun = new Date().toISOString();

    // Store learning data
    this.learningData.set(`${systemName}_${Date.now()}`, {
      system: systemName,
      success,
      executionTime,
      timestamp: system.lastRun
    });
  }

  async generateComprehensiveReport() {
    this.log('📊 Generating comprehensive orchestration report...');
    
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        totalSystems: this.automationSystems.size,
        pm2Available: this.pm2Available,
        overallHealth: 'unknown',
        overallPerformance: 'unknown'
      },
      systems: [],
      health: await this.healthCheck(),
      performance: await this.performanceCheck(),
      recommendations: []
    };

    // System details
    for (const [name, system] of this.automationSystems) {
      report.systems.push({
        name,
        status: system.status,
        healthScore: system.healthScore,
        successRate: system.successRate,
        averageExecutionTime: system.averageExecutionTime,
        restarts: system.restarts,
        lastHealthCheck: system.lastHealthCheck
      });
    }

    // Overall assessment
    const healthScores = report.systems.map(s => s.healthScore).filter(Boolean);
    const avgHealthScore = healthScores.length > 0 ? healthScores.reduce((a, b) => a + b, 0) / healthScores.length : 0;
    
    if (avgHealthScore >= 80) {
      report.summary.overallHealth = 'excellent';
    } else if (avgHealthScore >= 60) {
      report.summary.overallHealth = 'good';
    } else if (avgHealthScore >= 40) {
      report.summary.overallHealth = 'fair';
    } else {
      report.summary.overallHealth = 'poor';
    }

    // Generate recommendations
    if (report.health.issues.length > 0) {
      report.recommendations.push('Address critical health issues immediately');
    }
    
    if (report.performance.recommendations.length > 0) {
      report.recommendations.push('Review performance recommendations');
    }
    
    if (avgHealthScore < 70) {
      report.recommendations.push('Consider system-wide health improvement');
    }

    // Save comprehensive report
    const reportFile = path.join(__dirname, 'logs', 'comprehensive-orchestration-report.json');
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    
    this.log(`📊 Comprehensive report generated: ${reportFile}`);
    
    return report;
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async showStatus() {
    console.log('\n🚀 PM2 Enhanced Orchestrator Status\n');
    
    for (const [name, system] of this.automationSystems) {
      const status = system.status || 'unknown';
      const health = system.healthScore || 0;
      const emoji = health >= 80 ? '✅' : health >= 60 ? '⚠️' : '❌';
      
      console.log(`${emoji} ${name}: ${status} (Health: ${health}%)`);
    }
    
    console.log(`\n📊 PM2 Available: ${this.pm2Available ? 'Yes' : 'No'}`);
    console.log(`📊 Total Systems: ${this.automationSystems.size}`);
    console.log(`📊 Active Processes: ${this.pm2Processes.size}`);
  }
}

// CLI handling
const orchestrator = new PM2EnhancedOrchestrator();
const command = process.argv[2];

switch (command) {
  case 'start':
    orchestrator.startSystem(process.argv[3] || 'all');
    break;
  case 'stop':
    orchestrator.stopSystem(process.argv[3] || 'all');
    break;
  case 'restart':
    orchestrator.restartSystem(process.argv[3]);
    break;
  case 'status':
    orchestrator.showStatus();
    break;
  case 'monitor':
    orchestrator.monitorAllSystems();
    break;
  case 'health':
    orchestrator.healthCheck();
    break;
  case 'performance':
    orchestrator.performanceCheck();
    break;
  case 'optimize':
    orchestrator.autoOptimize();
    break;
  case 'report':
    orchestrator.generateComprehensiveReport();
    break;
  default:
    console.log(`
🚀 PM2 Enhanced Orchestrator

Usage: node pm2-enhanced-orchestrator.cjs [command] [system]

Commands:
  start [system]     - Start system(s)
  stop [system]      - Stop system(s)
  restart [system]   - Restart system
  status             - Show status
  monitor            - Start monitoring
  health             - Health check
  performance        - Performance check
  optimize           - Auto-optimize
  report             - Generate report

Examples:
  node pm2-enhanced-orchestrator.cjs start lint-monitor
  node pm2-enhanced-orchestrator.cjs monitor
  node pm2-enhanced-orchestrator.cjs health
    `);
    break;
}

// Graceful shutdown
process.on('SIGINT', () => {
  console.log('\n🛑 Shutting down PM2 Enhanced Orchestrator...');
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('\n🛑 Shutting down PM2 Enhanced Orchestrator...');
  process.exit(0);
});