#!/usr/bin/env node
/**
 * Ultimate Automation Orchestrator
 * Master controller for all PM2 automations and intelligent systems
 */

const pm2 = require('pm2');
const fs = require('fs').promises;
const path = require('path');
const { execSync } = require('child_process');

class UltimateAutomationOrchestrator {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'logs', 'ultimate-automation-orchestrator.log');
    this.orchestrationFile = path.join(this.projectRoot, 'logs', 'orchestration-data.json');
    
    this.automationSystems = {
      aiDecisionEngine: {
        name: 'ultimate-ai-decision-engine',
        script: 'scripts/ultimate/ai-decision-engine.cjs',
        status: 'stopped',
        priority: 'critical',
        dependencies: []
      },
      collaborativeManager: {
        name: 'collaborative-process-manager',
        script: 'scripts/ultimate/collaborative-process-manager.cjs',
        status: 'stopped',
        priority: 'high',
        dependencies: ['aiDecisionEngine']
      },
      securityDetector: {
        name: 'advanced-security-threat-detector',
        script: 'scripts/ultimate/security-threat-detector.cjs',
        status: 'stopped',
        priority: 'critical',
        dependencies: []
      },
      deploymentManager: {
        name: 'intelligent-deployment-manager',
        script: 'scripts/ultimate/intelligent-deployment-manager.cjs',
        status: 'stopped',
        priority: 'high',
        dependencies: ['aiDecisionEngine', 'collaborativeManager']
      },
      resourceOptimizer: {
        name: 'dynamic-resource-optimizer',
        script: 'scripts/ultimate/dynamic-resource-optimizer.cjs',
        status: 'stopped',
        priority: 'medium',
        dependencies: ['aiDecisionEngine']
      },
      testingQA: {
        name: 'automated-testing-qa',
        script: 'scripts/ultimate/automated-testing-qa.cjs',
        status: 'stopped',
        priority: 'medium',
        dependencies: ['aiDecisionEngine']
      },
      selfHealing: {
        name: 'self-healing-recovery-system',
        script: 'scripts/ultimate/self-healing-recovery-system.cjs',
        status: 'stopped',
        priority: 'critical',
        dependencies: ['aiDecisionEngine', 'securityDetector']
      },
      performanceAnalytics: {
        name: 'advanced-performance-analytics',
        script: 'scripts/ultimate/performance-analytics-engine.cjs',
        status: 'stopped',
        priority: 'medium',
        dependencies: ['aiDecisionEngine']
      },
      costOptimizer: {
        name: 'smart-cost-optimizer',
        script: 'scripts/ultimate/smart-cost-optimizer.cjs',
        status: 'stopped',
        priority: 'low',
        dependencies: ['resourceOptimizer']
      },
      predictiveMaintenance: {
        name: 'predictive-maintenance-system',
        script: 'scripts/ultimate/predictive-maintenance-system.cjs',
        status: 'stopped',
        priority: 'medium',
        dependencies: ['aiDecisionEngine', 'performanceAnalytics']
      },
      monitoringDashboard: {
        name: 'ultimate-monitoring-dashboard',
        script: 'scripts/ultimate/ultimate-monitoring-dashboard.cjs',
        status: 'stopped',
        priority: 'high',
        dependencies: ['performanceAnalytics']
      },
      backupRecovery: {
        name: 'intelligent-backup-disaster-recovery',
        script: 'scripts/ultimate/intelligent-backup-disaster-recovery.cjs',
        status: 'stopped',
        priority: 'high',
        dependencies: []
      },
      codeQuality: {
        name: 'ai-code-quality-manager',
        script: 'scripts/ultimate/ai-code-quality-manager.cjs',
        status: 'stopped',
        priority: 'medium',
        dependencies: ['aiDecisionEngine']
      },
      gitWorkflow: {
        name: 'ultimate-git-workflow-automation',
        script: 'scripts/ultimate/ultimate-git-workflow-automation.cjs',
        status: 'stopped',
        priority: 'medium',
        dependencies: ['aiDecisionEngine']
      }
    };
    
    this.orchestrationData = {
      startTime: Date.now(),
      systemsStarted: 0,
      systemsFailed: 0,
      totalSystems: Object.keys(this.automationSystems).length,
      systemStatus: {},
      performanceMetrics: {},
      lastHealthCheck: null
    };
    
    this.ensureLogsDirectory();
  }

  async ensureLogsDirectory() {
    try {
      await fs.mkdir(path.join(this.projectRoot, 'logs'), { recursive: true });
      await fs.mkdir(path.join(this.projectRoot, 'scripts', 'ultimate'), { recursive: true });
      await this.loadOrchestrationData();
    } catch (error) {
      console.log('Directories already exist or created');
    }
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}`;
    console.log(logMessage);
    
    fs.appendFile(this.logFile, logMessage + '\n').catch(console.error);
  }

  async loadOrchestrationData() {
    try {
      const data = await fs.readFile(this.orchestrationFile, 'utf8');
      const parsed = JSON.parse(data);
      
      this.orchestrationData = { ...this.orchestrationData, ...parsed };
      this.log(`🎭 Loaded orchestration data: ${this.orchestrationData.systemsStarted} systems started`);
    } catch (error) {
      this.log('🎭 No existing orchestration data found, starting fresh');
    }
  }

  async saveOrchestrationData() {
    try {
      await fs.writeFile(this.orchestrationFile, JSON.stringify(this.orchestrationData, null, 2));
    } catch (error) {
      this.log(`❌ Failed to save orchestration data: ${error.message}`, 'ERROR');
    }
  }

  async initialize() {
    this.log('🎭 Initializing Ultimate Automation Orchestrator...');
    
    return new Promise((resolve, reject) => {
      pm2.connect((err) => {
        if (err) {
          this.log(`❌ Failed to connect to PM2: ${err.message}`, 'ERROR');
          reject(err);
        } else {
          this.log('✅ Connected to PM2 for ultimate orchestration');
          this.startOrchestration();
          resolve();
        }
      });
    });
  }

  startOrchestration() {
    this.log('🎭 Starting ultimate automation orchestration...');
    
    // Start systems in dependency order
    this.startSystemsInOrder();
    
    // Monitor systems every 30 seconds
    setInterval(async () => {
      await this.monitorSystems();
    }, 30000);

    // Health check every 2 minutes
    setInterval(async () => {
      await this.performHealthCheck();
    }, 120000);

    // Performance analysis every 5 minutes
    setInterval(async () => {
      await this.analyzePerformance();
    }, 300000);

    // Save orchestration data every 10 minutes
    setInterval(async () => {
      await this.saveOrchestrationData();
    }, 600000);
  }

  async startSystemsInOrder() {
    this.log('🚀 Starting automation systems in dependency order...');
    
    const startOrder = this.calculateStartOrder();
    
    for (const systemKey of startOrder) {
      await this.startSystem(systemKey);
      // Wait between starts to avoid resource conflicts
      await this.sleep(5000);
    }
    
    this.log(`🎉 Started ${this.orchestrationData.systemsStarted} automation systems`);
  }

  calculateStartOrder() {
    const visited = new Set();
    const visiting = new Set();
    const order = [];
    
    const visit = (systemKey) => {
      if (visiting.has(systemKey)) {
        throw new Error(`Circular dependency detected: ${systemKey}`);
      }
      
      if (visited.has(systemKey)) {
        return;
      }
      
      visiting.add(systemKey);
      
      const system = this.automationSystems[systemKey];
      if (system) {
        for (const dep of system.dependencies) {
          const depKey = Object.keys(this.automationSystems).find(key => 
            this.automationSystems[key].name === dep
          );
          if (depKey) {
            visit(depKey);
          }
        }
      }
      
      visiting.delete(systemKey);
      visited.add(systemKey);
      order.push(systemKey);
    };
    
    for (const systemKey of Object.keys(this.automationSystems)) {
      visit(systemKey);
    }
    
    return order;
  }

  async startSystem(systemKey) {
    const system = this.automationSystems[systemKey];
    if (!system) return;
    
    this.log(`🚀 Starting ${system.name} (${system.priority} priority)...`);
    
    try {
      // Check if system is already running
      const processes = await this.getProcessList();
      const existingProcess = processes.find(p => p.name === system.name);
      
      if (existingProcess && existingProcess.pm2_env.status === 'online') {
        this.log(`✅ ${system.name} is already running`);
        system.status = 'running';
        this.orchestrationData.systemsStarted++;
        return;
      }
      
      // Start the system
      await this.startProcess(system.name, system.script);
      
      // Wait for system to initialize
      await this.sleep(10000);
      
      // Verify system is running
      const updatedProcesses = await this.getProcessList();
      const process = updatedProcesses.find(p => p.name === system.name);
      
      if (process && process.pm2_env.status === 'online') {
        system.status = 'running';
        this.orchestrationData.systemsStarted++;
        this.log(`✅ Successfully started ${system.name}`);
      } else {
        system.status = 'failed';
        this.orchestrationData.systemsFailed++;
        this.log(`❌ Failed to start ${system.name}`, 'ERROR');
      }
      
    } catch (error) {
      system.status = 'failed';
      this.orchestrationData.systemsFailed++;
      this.log(`❌ Error starting ${system.name}: ${error.message}`, 'ERROR');
    }
  }

  async getProcessList() {
    return new Promise((resolve, reject) => {
      pm2.list((err, processes) => {
        if (err) {
          reject(err);
        } else {
          resolve(processes);
        }
      });
    });
  }

  async startProcess(processName, scriptPath) {
    return new Promise((resolve, reject) => {
      pm2.start({
        name: processName,
        script: scriptPath,
        cwd: this.projectRoot,
        instances: 1,
        autorestart: true,
        watch: false,
        max_memory_restart: '1G',
        env: {
          NODE_ENV: 'production',
          ORCHESTRATION_MODE: 'true'
        }
      }, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });
  }

  async monitorSystems() {
    this.log('👁️ Monitoring automation systems...');
    
    try {
      const processes = await this.getProcessList();
      
      for (const [systemKey, system] of Object.entries(this.automationSystems)) {
        const process = processes.find(p => p.name === system.name);
        
        if (process) {
          const wasRunning = system.status === 'running';
          const isRunning = process.pm2_env.status === 'online';
          
          if (wasRunning && !isRunning) {
            this.log(`⚠️ System ${system.name} stopped unexpectedly`, 'WARN');
            system.status = 'stopped';
            await this.handleSystemFailure(systemKey, system);
          } else if (!wasRunning && isRunning) {
            this.log(`✅ System ${system.name} recovered`);
            system.status = 'running';
          }
          
          // Update system status
          this.orchestrationData.systemStatus[systemKey] = {
            status: system.status,
            memory: process.monit.memory || 0,
            cpu: process.monit.cpu || 0,
            uptime: process.pm2_env.pm_uptime,
            lastChecked: Date.now()
          };
        }
      }
      
    } catch (error) {
      this.log(`❌ System monitoring failed: ${error.message}`, 'ERROR');
    }
  }

  async handleSystemFailure(systemKey, system) {
    this.log(`🔧 Handling failure for ${system.name}...`);
    
    try {
      // Restart the system
      await this.restartProcess(system.name);
      
      // Wait for restart
      await this.sleep(5000);
      
      // Check if restart was successful
      const processes = await this.getProcessList();
      const process = processes.find(p => p.name === system.name);
      
      if (process && process.pm2_env.status === 'online') {
        system.status = 'running';
        this.log(`✅ Successfully recovered ${system.name}`);
      } else {
        this.log(`❌ Failed to recover ${system.name}`, 'ERROR');
      }
      
    } catch (error) {
      this.log(`❌ Error handling failure for ${system.name}: ${error.message}`, 'ERROR');
    }
  }

  async restartProcess(processName) {
    return new Promise((resolve, reject) => {
      pm2.restart(processName, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });
  }

  async performHealthCheck() {
    this.log('🏥 Performing comprehensive health check...');
    
    try {
      const processes = await this.getProcessList();
      const automationProcesses = processes.filter(p => 
        Object.values(this.automationSystems).some(system => system.name === p.name)
      );
      
      const healthMetrics = {
        totalSystems: automationProcesses.length,
        onlineSystems: automationProcesses.filter(p => p.pm2_env.status === 'online').length,
        totalMemory: automationProcesses.reduce((sum, p) => sum + (p.monit.memory || 0), 0),
        totalCpu: automationProcesses.reduce((sum, p) => sum + (p.monit.cpu || 0), 0),
        totalRestarts: automationProcesses.reduce((sum, p) => sum + (p.pm2_env.restart_time || 0), 0)
      };
      
      const healthScore = this.calculateHealthScore(healthMetrics);
      
      this.orchestrationData.lastHealthCheck = {
        timestamp: Date.now(),
        healthScore,
        metrics: healthMetrics
      };
      
      this.log(`🏥 Health Score: ${healthScore}/100`);
      
      if (healthScore < 70) {
        await this.handlePoorHealth(healthScore, healthMetrics);
      }
      
    } catch (error) {
      this.log(`❌ Health check failed: ${error.message}`, 'ERROR');
    }
  }

  calculateHealthScore(metrics) {
    let score = 100;
    
    // Online systems ratio
    const onlineRatio = metrics.onlineSystems / metrics.totalSystems;
    score *= onlineRatio;
    
    // Memory usage penalty
    const memoryGB = metrics.totalMemory / (1024 * 1024 * 1024);
    if (memoryGB > 4) {
      score -= (memoryGB - 4) * 10;
    }
    
    // CPU usage penalty
    if (metrics.totalCpu > 200) {
      score -= (metrics.totalCpu - 200) * 0.5;
    }
    
    // Restart penalty
    if (metrics.totalRestarts > 10) {
      score -= (metrics.totalRestarts - 10) * 2;
    }
    
    return Math.max(0, Math.round(score));
  }

  async handlePoorHealth(healthScore, metrics) {
    this.log(`🚨 Poor health detected: ${healthScore}/100`);
    
    // Restart failed systems
    const processes = await this.getProcessList();
    const failedProcesses = processes.filter(p => 
      Object.values(this.automationSystems).some(system => system.name === p.name) &&
      p.pm2_env.status !== 'online'
    );
    
    for (const process of failedProcesses) {
      this.log(`🔄 Restarting failed process: ${process.name}`);
      await this.restartProcess(process.name);
    }
    
    // Optimize resource usage
    if (metrics.totalMemory > 2 * 1024 * 1024 * 1024) { // 2GB
      this.log('🧹 Optimizing memory usage...');
      await this.optimizeMemoryUsage();
    }
  }

  async optimizeMemoryUsage() {
    try {
      // Force garbage collection
      if (global.gc) {
        global.gc();
        this.log('🗑️ Forced garbage collection');
      }
      
      // Restart high memory processes
      const processes = await this.getProcessList();
      const highMemoryProcesses = processes.filter(p => 
        Object.values(this.automationSystems).some(system => system.name === p.name) &&
        (p.monit.memory || 0) > 200 * 1024 * 1024 // 200MB
      );
      
      for (const process of highMemoryProcesses) {
        this.log(`🔄 Restarting high memory process: ${process.name}`);
        await this.restartProcess(process.name);
      }
      
    } catch (error) {
      this.log(`❌ Memory optimization failed: ${error.message}`, 'ERROR');
    }
  }

  async analyzePerformance() {
    this.log('📊 Analyzing system performance...');
    
    try {
      const processes = await this.getProcessList();
      const automationProcesses = processes.filter(p => 
        Object.values(this.automationSystems).some(system => system.name === p.name)
      );
      
      const performanceData = {
        timestamp: Date.now(),
        totalProcesses: automationProcesses.length,
        averageMemory: 0,
        averageCpu: 0,
        totalUptime: 0,
        efficiency: 0
      };
      
      if (automationProcesses.length > 0) {
        performanceData.averageMemory = automationProcesses.reduce((sum, p) => sum + (p.monit.memory || 0), 0) / automationProcesses.length;
        performanceData.averageCpu = automationProcesses.reduce((sum, p) => sum + (p.monit.cpu || 0), 0) / automationProcesses.length;
        performanceData.totalUptime = automationProcesses.reduce((sum, p) => sum + (Date.now() - p.pm2_env.pm_uptime), 0);
        performanceData.efficiency = this.calculateEfficiency(automationProcesses);
      }
      
      this.orchestrationData.performanceMetrics = performanceData;
      
      this.log(`📊 Performance Analysis: Memory: ${Math.round(performanceData.averageMemory / 1024 / 1024)}MB, CPU: ${performanceData.averageCpu.toFixed(1)}%, Efficiency: ${performanceData.efficiency.toFixed(1)}%`);
      
    } catch (error) {
      this.log(`❌ Performance analysis failed: ${error.message}`, 'ERROR');
    }
  }

  calculateEfficiency(processes) {
    const onlineProcesses = processes.filter(p => p.pm2_env.status === 'online');
    const uptimeRatio = onlineProcesses.length / processes.length;
    
    const avgMemory = processes.reduce((sum, p) => sum + (p.monit.memory || 0), 0) / processes.length;
    const memoryEfficiency = Math.max(0, 1 - (avgMemory / (1024 * 1024 * 1024))); // Normalize to 1GB
    
    const avgCpu = processes.reduce((sum, p) => sum + (p.monit.cpu || 0), 0) / processes.length;
    const cpuEfficiency = Math.max(0, 1 - (avgCpu / 100));
    
    return (uptimeRatio + memoryEfficiency + cpuEfficiency) / 3 * 100;
  }

  async sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async run() {
    try {
      await this.initialize();
      this.log('🎯 Ultimate Automation Orchestrator is now running');
      
      // Keep the process alive
      process.on('SIGINT', async () => {
        this.log('🛑 Shutting down Ultimate Automation Orchestrator...');
        await this.saveOrchestrationData();
        pm2.disconnect();
        process.exit(0);
      });
      
    } catch (error) {
      this.log(`❌ Fatal error: ${error.message}`, 'ERROR');
      process.exit(1);
    }
  }
}

// Run the orchestrator
if (require.main === module) {
  const orchestrator = new UltimateAutomationOrchestrator();
  orchestrator.run();
}

module.exports = UltimateAutomationOrchestrator;