#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');

class PM2EnhancedOrchestrator {
  constructor() {
    this.config = {
      ecosystemFile: '../ecosystem.config.js',
      logDirectory: './logs',
      automationSystems: new Map(),
      pm2Processes: new Map(),
      healthMetrics: new Map(),
      performanceData: new Map(),
      learningData: new Map()
    };
    
    this.ensureLogDirectory();
    this.loadAutomationSystems();
    this.initializePM2Integration();
  }

  ensureLogDirectory() {
    if (!fs.existsSync(this.config.logDirectory)) {
      fs.mkdirSync(this.config.logDirectory, { recursive: true });
    }
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}\n`;
    console.log(logMessage.trim());
    
    const logFile = path.join(this.config.logDirectory, 'pm2-orchestrator.log');
    fs.appendFileSync(logFile, logMessage);
  }

  loadAutomationSystems() {
    const systems = [
      {
        name: 'intelligent-orchestrator',
        path: 'intelligent-orchestrator.cjs',
        priority: 'critical',
        pm2Name: 'intelligent-orchestrator',
        dependencies: [],
        healthChecks: ['memory', 'cpu', 'uptime'],
        autoRestart: true,
        scaling: { min: 1, max: 3, threshold: 0.8 }
      },
      {
        name: 'automation-dashboard',
        path: 'automation-dashboard.cjs',
        priority: 'high',
        pm2Name: 'automation-dashboard',
        dependencies: [],
        healthChecks: ['memory', 'cpu', 'uptime'],
        autoRestart: true,
        scaling: { min: 1, max: 2, threshold: 0.7 }
      },
      {
        name: 'lint-monitor',
        path: 'lint-monitor.cjs',
        priority: 'high',
        pm2Name: 'lint-monitor',
        dependencies: [],
        healthChecks: ['memory', 'cpu', 'uptime'],
        autoRestart: true,
        scaling: { min: 1, max: 4, threshold: 0.6 }
      },
      {
        name: 'code-quality-monitor',
        path: 'code-quality-monitor.cjs',
        priority: 'medium',
        pm2Name: 'code-quality-monitor',
        dependencies: [],
        healthChecks: ['memory', 'cpu', 'uptime'],
        autoRestart: true,
        scaling: { min: 1, max: 2, threshold: 0.7 }
      },
      {
        name: 'performance-optimizer',
        path: 'performance-optimizer.cjs',
        priority: 'medium',
        pm2Name: 'performance',
        dependencies: [],
        healthChecks: ['memory', 'cpu', 'uptime'],
        autoRestart: true,
        scaling: { min: 1, max: 2, threshold: 0.6 }
      },
      {
        name: 'security-scanner',
        path: 'security-scanner.cjs',
        priority: 'high',
        pm2Name: 'security-scanner',
        dependencies: [],
        healthChecks: ['memory', 'cpu', 'uptime'],
        autoRestart: true,
        scaling: { min: 1, max: 3, threshold: 0.7 }
      },
      {
        name: 'seo-optimizer',
        path: 'seo-optimizer.cjs',
        priority: 'low',
        pm2Name: 'seo-optimizer',
        dependencies: [],
        healthChecks: ['memory', 'cpu', 'uptime'],
        autoRestart: true,
        scaling: { min: 1, max: 2, threshold: 0.6 }
      },
      {
        name: 'test-generator',
        path: 'test-generator.cjs',
        priority: 'medium',
        pm2Name: 'test-generator',
        dependencies: [],
        healthChecks: ['memory', 'cpu', 'uptime'],
        autoRestart: true,
        scaling: { min: 1, max: 3, threshold: 0.6 }
      }
    ];

    for (const system of systems) {
      const systemPath = path.join(__dirname, system.path);
      if (fs.existsSync(systemPath)) {
        this.config.automationSystems.set(system.name, {
          ...system,
          path: systemPath,
          status: 'available',
          lastRun: null,
          successRate: 0,
          averageExecutionTime: 0,
          healthScore: 100,
          lastHealthCheck: null,
          pm2Status: 'unknown'
        });
      }
    }
  }

  async initializePM2Integration() {
    this.log('🔧 Initializing PM2 integration...');
    
    try {
      // Check if PM2 is running
      const pm2Status = await this.executeCommand('pm2 ping');
      if (pm2Status.success) {
        this.log('✅ PM2 is running');
        await this.syncPM2Processes();
        this.startPM2Monitoring();
      } else {
        this.log('⚠️ PM2 is not running, starting ecosystem...');
        await this.startPM2Ecosystem();
      }
    } catch (error) {
      this.log(`❌ PM2 initialization failed: ${error.message}`, 'ERROR');
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

  async startPM2Ecosystem() {
    this.log('🚀 Starting PM2 ecosystem...');
    
    const ecosystemPath = path.resolve(__dirname, this.config.ecosystemFile);
    const result = await this.executeCommand(`pm2 start ${ecosystemPath}`);
    
    if (result.success) {
      this.log('✅ PM2 ecosystem started successfully');
      await this.syncPM2Processes();
      this.startPM2Monitoring();
    } else {
      this.log(`❌ Failed to start PM2 ecosystem: ${result.error}`, 'ERROR');
    }
    
    return result;
  }

  async syncPM2Processes() {
    this.log('🔄 Syncing PM2 processes...');
    
    const result = await this.executeCommand('pm2 status --json');
    if (!result.success) return;

    try {
      const processes = JSON.parse(result.output);
      this.config.pm2Processes.clear();
      
      processes.forEach(process => {
        this.config.pm2Processes.set(process.name, {
          name: process.name,
          status: process.pm2_env.status,
          memory: process.monit.memory,
          cpu: process.monit.cpu,
          uptime: process.pm2_env.pm_uptime,
          restarts: process.pm2_env.restart_time,
          pid: process.pid,
          lastUpdate: Date.now()
        });
      });
      
      this.log(`✅ Synced ${this.config.pm2Processes.size} PM2 processes`);
    } catch (error) {
      this.log(`❌ Failed to parse PM2 status: ${error.message}`, 'ERROR');
    }
  }

  startPM2Monitoring() {
    this.log('👀 Starting PM2 monitoring...');
    
    // Monitor PM2 processes every 30 seconds
    setInterval(async () => {
      await this.monitorPM2Processes();
    }, 30000);
    
    // Health checks every minute
    setInterval(async () => {
      await this.performHealthChecks();
    }, 60000);
    
    // Performance analysis every 5 minutes
    setInterval(async () => {
      await this.analyzePerformance();
    }, 300000);
    
    // Learning and optimization every 15 minutes
    setInterval(async () => {
      await this.learnAndOptimize();
    }, 900000);
  }

  async monitorPM2Processes() {
    await this.syncPM2Processes();
    
    for (const [name, process] of this.config.pm2Processes) {
      const system = this.config.automationSystems.get(name);
      if (system) {
        system.pm2Status = process.status;
        system.lastHealthCheck = Date.now();
        
        // Update health metrics
        this.updateHealthMetrics(name, process);
        
        // Check if intervention is needed
        if (this.needsIntervention(process, system)) {
          await this.intervene(process, system);
        }
      }
    }
  }

  updateHealthMetrics(name, process) {
    const metrics = {
      name,
      timestamp: Date.now(),
      memory: process.memory,
      cpu: process.cpu,
      uptime: process.uptime,
      restarts: process.restarts,
      status: process.status
    };

    this.config.healthMetrics.set(name, metrics);
    
    // Calculate health score
    let healthScore = 100;
    
    if (process.memory > 256 * 1024 * 1024) healthScore -= 20; // High memory
    if (process.cpu > 80) healthScore -= 20; // High CPU
    if (process.restarts > 3) healthScore -= 30; // Many restarts
    if (process.status !== 'online') healthScore -= 50; // Not running
    
    const system = this.config.automationSystems.get(name);
    if (system) {
      system.healthScore = Math.max(0, healthScore);
    }
  }

  needsIntervention(process, system) {
    // Check if process is down
    if (process.status !== 'online') return true;
    
    // Check memory threshold
    if (process.memory > system.scaling.threshold * 512 * 1024 * 1024) return true;
    
    // Check CPU threshold
    if (process.cpu > system.scaling.threshold * 100) return true;
    
    // Check restart threshold
    if (process.restarts > 3) return true;
    
    return false;
  }

  async intervene(process, system) {
    this.log(`⚠️ Intervention needed for ${process.name}: ${process.status}`, 'WARN');
    
    if (process.status !== 'online') {
      this.log(`🔄 Restarting ${process.name}...`);
      await this.executeCommand(`pm2 restart ${process.name}`);
    } else if (process.memory > system.scaling.threshold * 512 * 1024 * 1024) {
      this.log(`📈 Scaling ${process.name} due to high memory usage...`);
      await this.scaleProcess(process.name, system);
    } else if (process.cpu > system.scaling.threshold * 100) {
      this.log(`📈 Scaling ${process.name} due to high CPU usage...`);
      await this.scaleProcess(process.name, system);
    }
  }

  async scaleProcess(processName, system) {
    const currentInstances = await this.getProcessInstances(processName);
    const maxInstances = system.scaling.max;
    
    if (currentInstances < maxInstances) {
      const newInstances = Math.min(currentInstances + 1, maxInstances);
      this.log(`🔄 Scaling ${processName} from ${currentInstances} to ${newInstances} instances`);
      await this.executeCommand(`pm2 scale ${processName} ${newInstances}`);
    } else {
      this.log(`⚠️ ${processName} already at maximum instances (${maxInstances})`);
    }
  }

  async getProcessInstances(processName) {
    const result = await this.executeCommand(`pm2 show ${processName} --json`);
    if (!result.success) return 1;
    
    try {
      const process = JSON.parse(result.output);
      return process.pm2_env.instances || 1;
    } catch (error) {
      return 1;
    }
  }

  async performHealthChecks() {
    this.log('🏥 Performing health checks...');
    
    for (const [name, system] of this.config.automationSystems) {
      const pm2Process = this.config.pm2Processes.get(system.pm2Name);
      if (pm2Process) {
        await this.runHealthCheck(name, system, pm2Process);
      }
    }
  }

  async runHealthCheck(name, system, pm2Process) {
    const healthCheck = {
      name,
      timestamp: Date.now(),
      status: pm2Process.status,
      memory: pm2Process.memory,
      cpu: pm2Process.cpu,
      uptime: pm2Process.uptime,
      restarts: pm2Process.restarts,
      healthScore: system.healthScore,
      issues: [],
      recommendations: []
    };

    // Memory health check
    if (pm2Process.memory > 512 * 1024 * 1024) {
      healthCheck.issues.push('High memory usage');
      healthCheck.recommendations.push('Consider memory optimization or scaling');
    }

    // CPU health check
    if (pm2Process.cpu > 80) {
      healthCheck.issues.push('High CPU usage');
      healthCheck.recommendations.push('Check for performance bottlenecks');
    }

    // Stability check
    if (pm2Process.restarts > 3) {
      healthCheck.issues.push('Excessive restarts');
      healthCheck.recommendations.push('Investigate root cause of crashes');
    }

    // Uptime check
    if (pm2Process.uptime < 60000) {
      healthCheck.issues.push('Recent restart');
      healthCheck.recommendations.push('Monitor for stability');
    }

    // Store health check results
    this.config.healthMetrics.set(name, healthCheck);
    
    // Generate alert if issues found
    if (healthCheck.issues.length > 0) {
      await this.generateHealthAlert(healthCheck);
    }
  }

  async generateHealthAlert(healthCheck) {
    const alert = {
      timestamp: new Date().toISOString(),
      process: healthCheck.name,
      severity: healthCheck.issues.length > 2 ? 'critical' : 'warning',
      issues: healthCheck.issues,
      recommendations: healthCheck.recommendations,
      metrics: {
        memory: healthCheck.memory,
        cpu: healthCheck.cpu,
        uptime: healthCheck.uptime,
        restarts: healthCheck.restarts,
        healthScore: healthCheck.healthScore
      }
    };

    const alertFile = path.join(this.config.logDirectory, `health-alert-${healthCheck.name}-${Date.now()}.json`);
    fs.writeFileSync(alertFile, JSON.stringify(alert, null, 2));
    
    this.log(`📊 Health alert generated for ${healthCheck.name}: ${alertFile}`);
  }

  async analyzePerformance() {
    this.log('📊 Analyzing performance patterns...');
    
    for (const [name, metrics] of this.config.healthMetrics) {
      if (!this.config.performanceData.has(name)) {
        this.config.performanceData.set(name, []);
      }
      
      const performanceHistory = this.config.performanceData.get(name);
      performanceHistory.push({
        timestamp: Date.now(),
        memory: metrics.memory,
        cpu: metrics.cpu,
        healthScore: metrics.healthScore || 100
      });
      
      // Keep only last 100 data points
      if (performanceHistory.length > 100) {
        performanceHistory.shift();
      }
    }
  }

  async learnAndOptimize() {
    this.log('🧠 Learning and optimizing...');
    
    for (const [name, performanceHistory] of this.config.performanceData) {
      if (performanceHistory.length < 10) continue;
      
      const system = this.config.automationSystems.get(name);
      if (!system) continue;
      
      // Analyze performance trends
      const recentMetrics = performanceHistory.slice(-10);
      const avgMemory = recentMetrics.reduce((sum, m) => sum + m.memory, 0) / recentMetrics.length;
      const avgCPU = recentMetrics.reduce((sum, m) => sum + m.cpu, 0) / recentMetrics.length;
      const avgHealth = recentMetrics.reduce((sum, m) => sum + m.healthScore, 0) / recentMetrics.length;
      
      // Store learning data
      this.config.learningData.set(name, {
        name,
        timestamp: Date.now(),
        averageMemory: avgMemory,
        averageCPU: avgCPU,
        averageHealth: avgHealth,
        trend: this.calculateTrend(performanceHistory),
        recommendations: this.generateOptimizationRecommendations(avgMemory, avgCPU, avgHealth, system)
      });
      
      // Apply optimizations
      await this.applyOptimizations(name, system, avgMemory, avgCPU, avgHealth);
    }
  }

  calculateTrend(performanceHistory) {
    if (performanceHistory.length < 2) return 'stable';
    
    const recent = performanceHistory.slice(-5);
    const older = performanceHistory.slice(-10, -5);
    
    if (recent.length === 0 || older.length === 0) return 'stable';
    
    const recentAvg = recent.reduce((sum, m) => sum + m.healthScore, 0) / recent.length;
    const olderAvg = older.reduce((sum, m) => sum + m.healthScore, 0) / older.length;
    
    if (recentAvg > olderAvg + 10) return 'improving';
    if (recentAvg < olderAvg - 10) return 'declining';
    return 'stable';
  }

  generateOptimizationRecommendations(avgMemory, avgCPU, avgHealth, system) {
    const recommendations = [];
    
    if (avgMemory > 256 * 1024 * 1024) {
      recommendations.push('Consider memory optimization or increase scaling threshold');
    }
    
    if (avgCPU > 60) {
      recommendations.push('Investigate performance bottlenecks and optimize algorithms');
    }
    
    if (avgHealth < 70) {
      recommendations.push('Review system stability and error handling');
    }
    
    if (system.scaling.max < 3 && avgMemory > 200 * 1024 * 1024) {
      recommendations.push('Consider increasing maximum instances for better performance');
    }
    
    return recommendations;
  }

  async applyOptimizations(name, system, avgMemory, avgCPU, avgHealth) {
    // Memory optimization
    if (avgMemory > 300 * 1024 * 1024 && system.scaling.max < 4) {
      this.log(`🔧 Optimizing ${name}: Increasing max instances for better memory distribution`);
      system.scaling.max = Math.min(system.scaling.max + 1, 4);
    }
    
    // CPU optimization
    if (avgCPU > 70 && system.scaling.threshold > 0.5) {
      this.log(`🔧 Optimizing ${name}: Adjusting scaling threshold for better CPU management`);
      system.scaling.threshold = Math.max(system.scaling.threshold - 0.1, 0.5);
    }
    
    // Health-based optimization
    if (avgHealth < 60) {
      this.log(`🔧 Optimizing ${name}: Enabling aggressive monitoring due to low health score`);
      system.healthChecks.push('aggressive');
    }
  }

  async generateComprehensiveReport() {
    this.log('📊 Generating comprehensive report...');
    
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        totalSystems: this.config.automationSystems.size,
        runningSystems: Array.from(this.config.pm2Processes.values()).filter(p => p.status === 'online').length,
        stoppedSystems: Array.from(this.config.pm2Processes.values()).filter(p => p.status === 'stopped').length,
        averageHealthScore: Array.from(this.config.automationSystems.values()).reduce((sum, s) => sum + s.healthScore, 0) / this.config.automationSystems.size
      },
      systems: Array.from(this.config.automationSystems.values()).map(system => ({
        name: system.name,
        priority: system.priority,
        status: system.pm2Status,
        healthScore: system.healthScore,
        scaling: system.scaling,
        lastHealthCheck: system.lastHealthCheck
      })),
      pm2Processes: Array.from(this.config.pm2Processes.values()),
      healthMetrics: Array.from(this.config.healthMetrics.values()),
      performanceData: Array.from(this.config.performanceData.entries()).map(([name, data]) => ({
        name,
        dataPoints: data.length,
        recentMetrics: data.slice(-5)
      })),
      learningData: Array.from(this.config.learningData.values()),
      recommendations: this.generateSystemRecommendations()
    };

    const reportFile = path.join(this.config.logDirectory, `comprehensive-report-${Date.now()}.json`);
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    
    this.log(`📊 Comprehensive report generated: ${reportFile}`);
    return report;
  }

  generateSystemRecommendations() {
    const recommendations = [];
    
    // Overall system health
    const lowHealthSystems = Array.from(this.config.automationSystems.values())
      .filter(s => s.healthScore < 70);
    
    if (lowHealthSystems.length > 0) {
      recommendations.push({
        type: 'system_health',
        priority: 'high',
        message: `Low health systems detected: ${lowHealthSystems.map(s => s.name).join(', ')}`,
        action: 'Investigate and optimize low-performing systems'
      });
    }
    
    // Resource optimization
    const highMemorySystems = Array.from(this.config.healthMetrics.values())
      .filter(m => m.memory > 400 * 1024 * 1024);
    
    if (highMemorySystems.length > 0) {
      recommendations.push({
        type: 'resource_optimization',
        priority: 'medium',
        message: `High memory usage detected in: ${highMemorySystems.map(m => m.name).join(', ')}`,
        action: 'Consider memory optimization or scaling adjustments'
      });
    }
    
    // Performance improvements
    const decliningSystems = Array.from(this.config.learningData.values())
      .filter(l => l.trend === 'declining');
    
    if (decliningSystems.length > 0) {
      recommendations.push({
        type: 'performance',
        priority: 'medium',
        message: `Performance declining in: ${decliningSystems.map(l => l.name).join(', ')}`,
        action: 'Review recent changes and optimize performance'
      });
    }
    
    return recommendations;
  }

  async startContinuousMode() {
    this.log('🚀 Starting continuous orchestration mode...');
    
    // Start all monitoring systems
    this.startPM2Monitoring();
    
    // Keep the process running
    process.stdin.resume();
    
    this.log('✅ Continuous mode started. Press Ctrl+C to stop.');
    
    // Generate periodic reports
    setInterval(async () => {
      await this.generateComprehensiveReport();
    }, 1800000); // Every 30 minutes
  }

  async showHelp() {
    console.log(`
🤖 PM2 Enhanced Orchestrator - Intelligent Automation Management

Usage: node pm2-enhanced-orchestrator.cjs [command]

Commands:
  start       - Start continuous orchestration mode
  status      - Show system status and health metrics
  health      - Perform health checks on all systems
  report      - Generate comprehensive system report
  optimize    - Run optimization algorithms
  scale       - Scale processes based on current load
  help        - Show this help message

Features:
  🏥 Advanced health monitoring
  📈 Intelligent auto-scaling
  🧠 Machine learning optimization
  📊 Performance analytics
  ⚠️ Smart alerts and notifications
  🔧 Automatic process optimization
  💾 Comprehensive reporting

Examples:
  node pm2-enhanced-orchestrator.cjs start
  node pm2-enhanced-orchestrator.cjs status
  node pm2-enhanced-orchestrator.cjs health
  node pm2-enhanced-orchestrator.cjs report
`);
  }
}

// CLI handling
const orchestrator = new PM2EnhancedOrchestrator();
const command = process.argv[2];

(async () => {
  try {
    switch (command) {
      case 'start':
        await orchestrator.startContinuousMode();
        break;
      case 'status':
        const status = {
          systems: Array.from(orchestrator.config.automationSystems.values()),
          pm2Processes: Array.from(orchestrator.config.pm2Processes.values()),
          healthMetrics: Array.from(orchestrator.config.healthMetrics.values())
        };
        console.log(JSON.stringify(status, null, 2));
        break;
      case 'health':
        await orchestrator.performHealthChecks();
        const health = Array.from(orchestrator.config.healthMetrics.values());
        console.log(JSON.stringify(health, null, 2));
        break;
      case 'report':
        await orchestrator.generateComprehensiveReport();
        break;
      case 'optimize':
        await orchestrator.learnAndOptimize();
        break;
      case 'scale':
        await orchestrator.monitorPM2Processes();
        break;
      case 'help':
      default:
        orchestrator.showHelp();
        break;
    }
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
})();

// Graceful shutdown
process.on('SIGINT', async () => {
  console.log('\n🛑 Shutting down PM2 enhanced orchestrator...');
  process.exit(0);
});

process.on('SIGTERM', async () => {
  console.log('\n🛑 Shutting down PM2 enhanced orchestrator...');
  process.exit(0);
});
