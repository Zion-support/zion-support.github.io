#!/usr/bin/env node

/**
 * Zion Tech Group - Intelligent Automation Orchestrator
 * Advanced coordination and management of all PM2 automation processes
 */

const pm2 = require('pm2');
const fs = require('fs').promises;
const path = require('path');

class IntelligentAutomationOrchestrator {
  constructor() {
    this.processes = new Map();
    this.dependencies = new Map();
    this.healthChecks = new Map();
    this.performanceMetrics = new Map();
    this.automationQueue = [];
    this.config = {
      maxConcurrentProcesses: 8,
      healthCheckInterval: 30000, // 30 seconds
      retryAttempts: 3,
      retryDelay: 5000, // 5 seconds
      logLevel: 'info',
      enablePredictiveScaling: true,
      enableCrossProcessCommunication: true
    };
    this.reportDir = path.join(process.cwd(), 'orchestrator-reports');
  }

  async initialize() {
    await this.ensureReportDirectory();
    return new Promise((resolve, reject) => {
      pm2.connect((err) => {
        if (err) {
          console.error('❌ Failed to connect to PM2');
          reject(err);
          return;
        }
        console.log('✅ Connected to PM2 for intelligent orchestration');
        this.setupProcessDependencies();
        this.setupProcessMonitoring();
        this.startHealthMonitoring();
        this.startPerformanceTracking();
        this.startIntelligentScheduling();
        resolve();
      });
    });
  }

  async ensureReportDirectory() {
    try {
      await fs.mkdir(this.reportDir, { recursive: true });
    } catch (error) {
      console.log('Report directory already exists');
    }
  }

  setupProcessDependencies() {
    // Define process dependencies and priorities
    this.dependencies.set('intelligent-predictive-monitor', {
      priority: 'critical',
      dependsOn: [],
      triggers: ['console-error-fixer', 'ai-code-optimizer'],
      maxConcurrent: 1
    });

    this.dependencies.set('ai-code-optimizer', {
      priority: 'high',
      dependsOn: ['intelligent-predictive-monitor'],
      triggers: ['smart-dependency-manager'],
      maxConcurrent: 1
    });

    this.dependencies.set('smart-dependency-manager', {
      priority: 'high',
      dependsOn: ['ai-code-optimizer'],
      triggers: ['security-audit'],
      maxConcurrent: 1
    });

    this.dependencies.set('console-error-fixer', {
      priority: 'critical',
      dependsOn: ['intelligent-predictive-monitor'],
      triggers: ['quality-checks'],
      maxConcurrent: 1
    });

    this.dependencies.set('security-audit', {
      priority: 'high',
      dependsOn: ['smart-dependency-manager'],
      triggers: ['performance-monitor'],
      maxConcurrent: 1
    });

    this.dependencies.set('performance-monitor', {
      priority: 'medium',
      dependsOn: ['security-audit'],
      triggers: ['continuous-improvement'],
      maxConcurrent: 1
    });

    this.dependencies.set('quality-checks', {
      priority: 'medium',
      dependsOn: ['console-error-fixer'],
      triggers: ['daily-build-test'],
      maxConcurrent: 1
    });

    this.dependencies.set('daily-build-test', {
      priority: 'medium',
      dependsOn: ['quality-checks'],
      triggers: ['link-checker'],
      maxConcurrent: 1
    });

    console.log('🔗 Process dependencies configured');
  }

  setupProcessMonitoring() {
    pm2.launchBus((err, bus) => {
      if (err) {
        console.error('❌ Failed to launch PM2 bus');
        return;
      }

      bus.on('process:event', (data) => {
        this.handleProcessEvent(data);
      });

      bus.on('log:err', (data) => {
        this.handleProcessError(data);
      });

      bus.on('log:out', (data) => {
        this.handleProcessLog(data);
      });

      bus.on('process:exit', (data) => {
        this.handleProcessExit(data);
      });
    });
  }

  handleProcessEvent(data) {
    const { event, process } = data;
    
    switch (event) {
      case 'start':
        console.log(`🚀 Process ${process.name} started`);
        this.processes.set(process.name, { ...process, status: 'online', startTime: Date.now() });
        this.checkDependencies(process.name);
        break;
      case 'stop':
        console.log(`⏸️  Process ${process.name} stopped`);
        this.processes.set(process.name, { ...process, status: 'stopped' });
        break;
      case 'restart':
        console.log(`🔄 Process ${process.name} restarted`);
        this.processes.set(process.name, { ...process, status: 'online', restartTime: Date.now() });
        this.handleProcessRestart(process.name);
        break;
      case 'exit':
        console.log(`❌ Process ${process.name} exited`);
        this.processes.set(process.name, { ...process, status: 'errored' });
        this.handleProcessFailure(process.name);
        break;
    }
  }

  handleProcessError(data) {
    const { process, log } = data;
    console.error(`❌ Error in ${process.name}:`, log);
    
    if (this.processes.has(process.name)) {
      this.processes.get(process.name).status = 'errored';
      this.processes.get(process.name).lastError = log;
    }

    // Trigger intelligent error handling
    this.handleIntelligentError(process.name, log);
  }

  handleProcessLog(data) {
    const { process, log } = data;
    
    // Store logs for analysis
    if (!this.processes.has(process.name)) {
      this.processes.set(process.name, { name: process.name, logs: [] });
    }
    
    this.processes.get(process.name).logs = this.processes.get(process.name).logs || [];
    this.processes.get(process.name).logs.push({
      timestamp: Date.now(),
      message: log
    });

    // Keep only last 100 logs
    if (this.processes.get(process.name).logs.length > 100) {
      this.processes.get(process.name).logs.shift();
    }
  }

  handleProcessExit(data) {
    const { process } = data;
    console.log(`🚪 Process ${process.name} exited with code ${process.exit_code}`);
    
    if (this.processes.has(process.name)) {
      this.processes.get(process.name).status = 'exited';
      this.processes.get(process.name).exitCode = process.exit_code;
    }
  }

  handleProcessRestart(processName) {
    const process = this.processes.get(processName);
    if (process) {
      process.restartCount = (process.restartCount || 0) + 1;
      
      // If process has restarted too many times, escalate
      if (process.restartCount > 5) {
        console.log(`🚨 Process ${processName} has restarted ${process.restartCount} times - escalating`);
        this.escalateProcessIssue(processName);
      }
    }
  }

  handleProcessFailure(processName) {
    console.log(`🚨 Handling failure for process ${processName}`);
    
    const dependency = this.dependencies.get(processName);
    if (dependency && dependency.priority === 'critical') {
      console.log(`🚨 Critical process ${processName} failed - immediate restart`);
      this.restartProcess(processName);
    } else {
      // Add to retry queue
      this.addToRetryQueue(processName);
    }
  }

  handleIntelligentError(processName, error) {
    console.log(`🧠 Intelligent error handling for ${processName}`);
    
    // Analyze error patterns
    const errorPattern = this.analyzeErrorPattern(error);
    
    switch (errorPattern.type) {
      case 'memory':
        this.handleMemoryError(processName);
        break;
      case 'dependency':
        this.handleDependencyError(processName);
        break;
      case 'permission':
        this.handlePermissionError(processName);
        break;
      case 'network':
        this.handleNetworkError(processName);
        break;
      default:
        this.handleGenericError(processName);
    }
  }

  analyzeErrorPattern(error) {
    if (error.includes('ENOMEM') || error.includes('out of memory')) {
      return { type: 'memory', severity: 'high' };
    }
    if (error.includes('MODULE_NOT_FOUND') || error.includes('Cannot find module')) {
      return { type: 'dependency', severity: 'medium' };
    }
    if (error.includes('EACCES') || error.includes('permission denied')) {
      return { type: 'permission', severity: 'high' };
    }
    if (error.includes('ECONNREFUSED') || error.includes('network')) {
      return { type: 'network', severity: 'medium' };
    }
    return { type: 'generic', severity: 'low' };
  }

  handleMemoryError(processName) {
    console.log(`💾 Handling memory error for ${processName}`);
    
    // Increase memory limit for the process
    pm2.restart(processName, {
      max_memory_restart: '1G'
    });
  }

  handleDependencyError(processName) {
    console.log(`📦 Handling dependency error for ${processName}`);
    
    // Trigger dependency resolution
    this.triggerDependencyResolution(processName);
  }

  handlePermissionError(processName) {
    console.log(`🔐 Handling permission error for ${processName}`);
    
    // Log permission issue and escalate
    this.logIssue(processName, 'permission_error', 'Permission denied - manual intervention required');
  }

  handleNetworkError(processName) {
    console.log(`🌐 Handling network error for ${processName}`);
    
    // Wait and retry
    setTimeout(() => {
      this.restartProcess(processName);
    }, 30000); // Wait 30 seconds
  }

  handleGenericError(processName) {
    console.log(`⚠️  Handling generic error for ${processName}`);
    
    // Standard retry mechanism
    this.addToRetryQueue(processName);
  }

  startHealthMonitoring() {
    setInterval(async () => {
      await this.performHealthChecks();
    }, this.config.healthCheckInterval);
  }

  async performHealthChecks() {
    console.log('🏥 Performing health checks...');
    
    pm2.list((err, processes) => {
      if (err) {
        console.error('❌ Failed to get process list');
        return;
      }

      processes.forEach(process => {
        const health = this.calculateProcessHealth(process);
        this.healthChecks.set(process.name, health);
        
        if (health.score < 0.5) {
          console.log(`⚠️  Process ${process.name} has low health score: ${health.score}`);
          this.handleLowHealthProcess(process.name, health);
        }
      });
    });
  }

  calculateProcessHealth(process) {
    const health = {
      score: 1.0,
      metrics: {},
      issues: []
    };

    // Memory health
    const memoryUsage = process.monit.memory / (1024 * 1024 * 1024); // Convert to GB
    if (memoryUsage > 1.0) {
      health.score -= 0.3;
      health.issues.push('High memory usage');
    }
    health.metrics.memory = memoryUsage;

    // CPU health
    const cpuUsage = process.monit.cpu;
    if (cpuUsage > 80) {
      health.score -= 0.2;
      health.issues.push('High CPU usage');
    }
    health.metrics.cpu = cpuUsage;

    // Uptime health
    const uptime = process.pm2_env.pm_uptime;
    if (uptime < 300000) { // Less than 5 minutes
      health.score -= 0.2;
      health.issues.push('Low uptime');
    }
    health.metrics.uptime = uptime;

    // Restart health
    const restartCount = process.pm2_env.restart_time;
    if (restartCount > 3) {
      health.score -= 0.3;
      health.issues.push('High restart count');
    }
    health.metrics.restarts = restartCount;

    return health;
  }

  handleLowHealthProcess(processName, health) {
    console.log(`🏥 Process ${processName} has health issues:`, health.issues);
    
    const dependency = this.dependencies.get(processName);
    if (dependency && dependency.priority === 'critical') {
      console.log(`🚨 Critical process ${processName} has health issues - immediate action`);
      this.restartProcess(processName);
    } else {
      // Schedule health improvement
      this.scheduleHealthImprovement(processName, health);
    }
  }

  startPerformanceTracking() {
    setInterval(async () => {
      await this.trackPerformanceMetrics();
    }, 60000); // Every minute
  }

  async trackPerformanceMetrics() {
    pm2.list((err, processes) => {
      if (err) return;

      processes.forEach(process => {
        const metrics = {
          timestamp: Date.now(),
          memory: process.monit.memory,
          cpu: process.monit.cpu,
          uptime: process.pm2_env.pm_uptime,
          restarts: process.pm2_env.restart_time
        };

        if (!this.performanceMetrics.has(process.name)) {
          this.performanceMetrics.set(process.name, []);
        }

        this.performanceMetrics.get(process.name).push(metrics);

        // Keep only last 100 metrics
        if (this.performanceMetrics.get(process.name).length > 100) {
          this.performanceMetrics.get(process.name).shift();
        }
      });
    });
  }

  startIntelligentScheduling() {
    setInterval(async () => {
      await this.optimizeProcessScheduling();
    }, 300000); // Every 5 minutes
  }

  async optimizeProcessScheduling() {
    console.log('📅 Optimizing process scheduling...');
    
    // Analyze current load
    const currentLoad = this.calculateCurrentLoad();
    
    // Adjust process priorities based on load
    if (currentLoad > 0.8) {
      console.log('⚡ High load detected - prioritizing critical processes');
      this.prioritizeCriticalProcesses();
    } else if (currentLoad < 0.3) {
      console.log('🐌 Low load detected - running background optimizations');
      this.runBackgroundOptimizations();
    }
  }

  calculateCurrentLoad() {
    let totalLoad = 0;
    let processCount = 0;

    this.performanceMetrics.forEach((metrics, processName) => {
      if (metrics.length > 0) {
        const latest = metrics[metrics.length - 1];
        totalLoad += (latest.cpu / 100) + (latest.memory / (1024 * 1024 * 1024));
        processCount++;
      }
    });

    return processCount > 0 ? totalLoad / processCount : 0;
  }

  prioritizeCriticalProcesses() {
    const criticalProcesses = ['intelligent-predictive-monitor', 'console-error-fixer', 'security-audit'];
    
    criticalProcesses.forEach(processName => {
      if (this.processes.has(processName)) {
        const process = this.processes.get(processName);
        if (process.status !== 'online') {
          console.log(`🚨 Restarting critical process ${processName}`);
          this.restartProcess(processName);
        }
      }
    });
  }

  runBackgroundOptimizations() {
    const backgroundProcesses = ['ai-code-optimizer', 'smart-dependency-manager', 'continuous-improvement'];
    
    backgroundProcesses.forEach(processName => {
      if (this.processes.has(processName)) {
        const process = this.processes.get(processName);
        if (process.status === 'stopped') {
          console.log(`🔄 Starting background process ${processName}`);
          this.startProcess(processName);
        }
      }
    });
  }

  checkDependencies(processName) {
    const dependency = this.dependencies.get(processName);
    if (dependency && dependency.triggers) {
      dependency.triggers.forEach(triggerProcess => {
        console.log(`🔗 Process ${processName} completed - triggering ${triggerProcess}`);
        this.startProcess(triggerProcess);
      });
    }
  }

  addToRetryQueue(processName) {
    const retryEntry = {
      processName,
      attempts: 0,
      nextRetry: Date.now() + this.config.retryDelay
    };

    this.automationQueue.push(retryEntry);
    console.log(`📋 Added ${processName} to retry queue`);
  }

  restartProcess(processName) {
    pm2.restart(processName, (err) => {
      if (err) {
        console.error(`❌ Failed to restart ${processName}:`, err.message);
      } else {
        console.log(`✅ Restarted ${processName}`);
      }
    });
  }

  startProcess(processName) {
    pm2.start(processName, (err) => {
      if (err) {
        console.error(`❌ Failed to start ${processName}:`, err.message);
      } else {
        console.log(`✅ Started ${processName}`);
      }
    });
  }

  triggerDependencyResolution(processName) {
    console.log(`🔧 Triggering dependency resolution for ${processName}`);
    
    // Trigger smart dependency manager
    this.startProcess('smart-dependency-manager');
  }

  escalateProcessIssue(processName) {
    console.log(`🚨 Escalating issue with process ${processName}`);
    
    // Log escalation
    this.logIssue(processName, 'escalation', 'Process restarted too many times');
    
    // Stop the process to prevent further issues
    pm2.stop(processName, (err) => {
      if (err) {
        console.error(`❌ Failed to stop ${processName}:`, err.message);
      } else {
        console.log(`⏸️  Stopped problematic process ${processName}`);
      }
    });
  }

  scheduleHealthImprovement(processName, health) {
    console.log(`🏥 Scheduling health improvement for ${processName}`);
    
    // Schedule health check in 5 minutes
    setTimeout(() => {
      this.performTargetedHealthCheck(processName);
    }, 300000);
  }

  performTargetedHealthCheck(processName) {
    const process = this.processes.get(processName);
    if (process) {
      const health = this.calculateProcessHealth(process);
      if (health.score < 0.5) {
        console.log(`🚨 Process ${processName} still has health issues - restarting`);
        this.restartProcess(processName);
      }
    }
  }

  logIssue(processName, type, message) {
    const issue = {
      timestamp: new Date().toISOString(),
      processName,
      type,
      message
    };

    const issuePath = path.join(this.reportDir, `issue-${Date.now()}.json`);
    fs.writeFile(issuePath, JSON.stringify(issue, null, 2));
  }

  async generateOrchestratorReport() {
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        totalProcesses: this.processes.size,
        onlineProcesses: Array.from(this.processes.values()).filter(p => p.status === 'online').length,
        erroredProcesses: Array.from(this.processes.values()).filter(p => p.status === 'errored').length,
        stoppedProcesses: Array.from(this.processes.values()).filter(p => p.status === 'stopped').length
      },
      healthChecks: Object.fromEntries(this.healthChecks),
      performanceMetrics: Object.fromEntries(this.performanceMetrics),
      automationQueue: this.automationQueue,
      recommendations: this.generateRecommendations()
    };

    const reportPath = path.join(this.reportDir, `orchestrator-report-${Date.now()}.json`);
    await fs.writeFile(reportPath, JSON.stringify(report, null, 2));
    
    console.log(`📊 Orchestrator report saved to ${reportPath}`);
  }

  generateRecommendations() {
    const recommendations = [];
    
    // Health-based recommendations
    this.healthChecks.forEach((health, processName) => {
      if (health.score < 0.5) {
        recommendations.push({
          type: 'health',
          process: processName,
          issue: 'Low health score',
          action: 'Monitor and potentially restart'
        });
      }
    });
    
    // Performance-based recommendations
    this.performanceMetrics.forEach((metrics, processName) => {
      if (metrics.length > 0) {
        const latest = metrics[metrics.length - 1];
        if (latest.cpu > 80) {
          recommendations.push({
            type: 'performance',
            process: processName,
            issue: 'High CPU usage',
            action: 'Consider optimization or scaling'
          });
        }
      }
    });
    
    return recommendations;
  }
}

// Main execution
async function runIntelligentOrchestrator() {
  console.log('🎼 Starting Intelligent Automation Orchestrator...');
  
  const orchestrator = new IntelligentAutomationOrchestrator();
  
  try {
    await orchestrator.initialize();
    console.log('✅ Intelligent Automation Orchestrator initialized successfully');
    
    // Generate reports every hour
    setInterval(async () => {
      await orchestrator.generateOrchestratorReport();
    }, 3600000); // 1 hour
    
  } catch (error) {
    console.error('❌ Intelligent Automation Orchestrator failed:', error.message);
  }
}

runIntelligentOrchestrator();