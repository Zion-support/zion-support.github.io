#!/usr/bin/env node,
/**,
 * Intelligent Process Recovery System for PM2 Automation,
 * Implements self-healing strategies and automatic recovery mechanisms,
 */,
const pm2 = require('pm2');
class ProcessRecoverySystem {,
  constructor(config = {}) {,
    this.config = {,
      maxRetries: config.maxRetries || 3;
      retryDelay: config.retryDelay || 5000, // 5 seconds,
      exponentialBackoff: config.exponentialBackoff || true;
      maxBackoffDelay: config.maxBackoffDelay || 60000, // 1 minute,
      healthCheckInterval: config.healthCheckInterval || 10000, // 10 seconds,
      autoRecovery: config.autoRecovery || true;
      recoveryStrategies: config.recoveryStrategies || ['restartreload', 'scale'];
      processDependencies: config.processDependencies || {};
      criticalProcesses: config.criticalProcesses || [];
      logRecovery: config.logRecovery || true,};
    this.recoveryHistory = new Map();
    this.processHealth = new Map();
    this.dependencyGraph = new Map();
    this.recoveryQueue = [];
    this.isRecovering = false;
    this.initializeDependencyGraph();
    this.startHealthMonitoring();
  }
,
  /**,
   * Initialize process dependency graph,
   */,
  initializeDependencyGraph() {,
    Object.entries(this.config.processDependencies).forEach(([process, dependencies]) => {,
      this.dependencyGraph.set(process, dependencies);
    });
  }
,
  /**,
   * Start health monitoring,
   */,
  startHealthMonitoring() {,
    setInterval(() => {,
      this.checkProcessHealth();
    }, this.config.healthCheckInterval);
  }
,
  /**,
   * Check health of all processes,
   */,
  async checkProcessHealth() {,
    try {,
      const processes = await this.getPM2Processes();
      processes.forEach(process => {,
        const health = this.assessProcessHealth(process);
        this.processHealth.set(process.name, health);
        if (health.needsRecovery && this.config.autoRecovery) {,
          this.queueRecovery(process.name, health.issues);
        }
      });
      // Process recovery queue,
      this.processRecoveryQueue();
    } catch (error) {,
      console.error('Error checking process health:', error);
    }
  }
,
  /**,
   * Assess health of a single process,
   */,
  assessProcessHealth(process) {,
    const issues = [];
    let severity = 'healthy';
    // Check if process is stopped,
    if (process.pm2_env.status === 'stopped') {,
      issues.push({,
        type: 'stopped';
        severity: 'critical';
        message: 'Process is stopped',});
      severity = 'critical';
    }
,
    // Check restart count,
    if (process.pm2_env.restart_time > this.config.maxRetries) {,
      issues.push({,
        type: 'high_restarts';
        severity: 'warning';
        message: `High restart count: ${process.pm2_env.restart_time,}`;
        value: process.pm2_env.restart_time,});
      if (severity === 'healthy') severity = 'warning';
    }
,
    // Check memory usage,
    if (process.monit && process.monit.memory > 200 * 1024 * 1024) { // 200MB,
      issues.push({,
        type: 'high_memory';
        severity: 'warning';
        message: `High memory usage: ${Math.round(process.monit.memory / 1024 / 1024),}MB`;
        value: process.monit.memory,});
      if (severity === 'healthy') severity = 'warning';
    }
,
    // Check CPU usage,
    if (process.monit && process.monit.cpu > 90) { // 90%,
      issues.push({,
        type: 'high_cpu';
        severity: 'warning';
        message: `High CPU usage: ${process.monit.cpu,}%`;
        value: process.monit.cpu,});
      if (severity === 'healthy') severity = 'warning';
    }
,
    // Check uptime for unstable processes,
    if (process.pm2_env.pm_uptime < 30000 && process.pm2_env.status === 'online') { // Less than 30 seconds,
      issues.push({,
        type: 'unstable';
        severity: 'warning';
        message: 'Process appears unstable (low uptime)';
        value: process.pm2_env.pm_uptime,});
      if (severity === 'healthy') severity = 'warning';
    }
,
    return {,
      status: process.pm2_env.status;
      uptime: process.pm2_env.pm_uptime;
      restartCount: process.pm2_env.restart_time;
      memory: process.monit?.memory || 0;
      cpu: process.monit?.cpu || 0;
      issues;
      severity;
      needsRecovery: issues.some(issue => issue.severity === 'critical') ||,
                    (issues.length > 2 && severity === 'warning');
      lastCheck: Date.now(),};
  }
,
  /**,
   * Queue a process for recovery,
   */,
  queueRecovery(processName, issues) {,
    // Check if already in queue,
    if (this.recoveryQueue.some(item => item.processName === processName)) {,
      return;
    }
,
    // Check recovery history,
    const history = this.recoveryHistory.get(processName) || [];
    const recentRecoveries = history.filter(h =>,
      Date.now() - h.timestamp < 5 * 60 * 1000 // Last 5 minutes,
    );
    if (recentRecoveries.length >= this.config.maxRetries) {,
      console.warn(`⚠️ Process ${processName} has exceeded max recovery attempts`);
      return;
    }
,
    const priority = this.calculateRecoveryPriority(processName, issues);
    this.recoveryQueue.push({,
      processName;
      issues;
      priority;
      timestamp: Date.now();
      attempts: 0,});
    // Sort queue by priority,
    this.recoveryQueue.sort((a, b) => b.priority - a.priority);
    if (this.logRecovery) {,
      // // // // // // console.log(`🔄 Queued ${processName} for recovery (priority: ${priority,})`);
    }
  }
,
  /**,
   * Calculate recovery priority,
   */,
  calculateRecoveryPriority(processName, issues) {,
    let priority = 0;
    // Critical processes get highest priority,
    if (this.config.criticalProcesses.includes(processName)) {,
      priority += 1000;
    }
,
    // Critical issues get high priority,
    const criticalIssues = issues.filter(issue => issue.severity === 'critical');
    priority += criticalIssues.length * 100;
    // Warning issues get medium priority,
    const warningIssues = issues.filter(issue => issue.severity === 'warning');
    priority += warningIssues.length * 10;
    // Dependencies affect priority,
    const dependentProcesses = this.getDependentProcesses(processName);
    priority += dependentProcesses.length * 5;
    return priority;
  }
,
  /**,
   * Get processes that depend on this one,
   */,
  getDependentProcesses(processName) {,
    const dependents = [];
    this.dependencyGraph.forEach((dependencies, process) => {,
      if (dependencies.includes(processName)) {,
        dependents.push(process);
      }
    });
    return dependents;
  }
,
  /**,
   * Process recovery queue,
   */,
  async processRecoveryQueue() {,
    if (this.isRecovering || this.recoveryQueue.length === 0) {,
      return;
    }
,
    this.isRecovering = true;
    try {,
      while (this.recoveryQueue.length > 0) {,
        const recoveryItem = this.recoveryQueue.shift();
        if (recoveryItem.attempts >= this.config.maxRetries) {,
          console.error(`❌ Process ${recoveryItem.processName} failed recovery after ${recoveryItem.attempts} attempts`);
          this.recordRecoveryFailure(recoveryItem);
          continue;
        }
,
        recoveryItem.attempts++;
        try {,
          await this.attemptRecovery(recoveryItem);
          if (this.logRecovery) {,
            // // // // // // console.log(`✅ Successfully recovered process ${recoveryItem.processName}`);
          }
,
          this.recordRecoverySuccess(recoveryItem);
        } catch (error) {,
          console.error(`❌ Recovery attempt ${recoveryItem.attempts} failed for ${recoveryItem.processName}:`, error);
          // Re-queue with delay if not at max attempts,
          if (recoveryItem.attempts < this.config.maxRetries) {,
            const delay = this.calculateRetryDelay(recoveryItem.attempts);
            setTimeout(() => {,
              this.recoveryQueue.push(recoveryItem);
            }, delay);
          } else {,
            this.recordRecoveryFailure(recoveryItem);
          }
        }
      }
    } finally {,
      this.isRecovering = false;
    }
  }
,
  /**,
   * Attempt to recover a process,
   */,
  async attemptRecovery(recoveryItem) {,
    const { processName, issues } = recoveryItem;
    // Determine recovery strategy,
    const strategy = this.selectRecoveryStrategy(processName, issues);
    switch (strategy) {,
      case 'restart':,
        await this.restartProcess(processName);
        break;
      case 'reload':,
        await this.reloadProcess(processName);
        break;
      case 'scale':,
        await this.scaleProcess(processName);
        break;
      case 'dependency_check':,
        await this.checkAndStartDependencies(processName);
        break;
      default: await this.restartProcess(processName),}
,
    // Wait for process to stabilize,
    await this.waitForProcessStability(processName);
  }
,
  /**,
   * Select recovery strategy based on issues,
   */,
  selectRecoveryStrategy(processName, issues) {,
    // Check if it's a dependency issue,
    if (this.hasDependencyIssues(processName)) {,
      return 'dependency_check';
    }
,
    // Check if it's a resource issue,
    const resourceIssues = issues.filter(issue =>,
      issue.type === 'high_memory' || issue.type === 'high_cpu',
    );
    if (resourceIssues.length > 0) {,
      return 'scale';
    }
,
    // Check if it's a stability issue,
    const stabilityIssues = issues.filter(issue =>,
      issue.type === 'unstable' || issue.type === 'high_restarts',
    );
    if (stabilityIssues.length > 0) {,
      return 'reload';
    }
,
    // Default to restart,
    return 'restart';
  }
,
  /**,
   * Check if process has dependency issues,
   */,
  hasDependencyIssues(processName) {,
    const dependencies = this.dependencyGraph.get(processName) || [];
    return dependencies.some(dep => {,
      const depHealth = this.processHealth.get(dep);
      return depHealth && depHealth.status === 'stopped';
    });
  }
,
  /**,
   * Restart a process,
   */,
  async restartProcess(processName) {,
    return new Promise((resolve, reject) => {,
      pm2.restart(processName, (err) => {,
        if (err) {,
          reject(err);
        } else {,
          resolve();
        }
      });
    });
  }
,
  /**,
   * Reload a process,
   */,
  async reloadProcess(processName) {,
    return new Promise((resolve, reject) => {,
      pm2.reload(processName, (err) => {,
        if (err) {,
          reject(err);
        } else {,
          resolve();
        }
      });
    });
  }
,
  /**,
   * Scale a process,
   */,
  async scaleProcess(processName) {,
    return new Promise((resolve, reject) => {,
      pm2.scale(processName, '+1', (err) => {,
        if (err) {,
          reject(err);
        } else {,
          resolve();
        }
      });
    });
  }
,
  /**,
   * Check and start dependencies,
   */,
  async checkAndStartDependencies(processName) {,
    const dependencies = this.dependencyGraph.get(processName) || [];
    for (const dep of dependencies) {,
      const depHealth = this.processHealth.get(dep);
      if (!depHealth || depHealth.status === 'stopped') {,
        try {,
          await this.startProcess(dep);
          await this.waitForProcessStability(dep);
        } catch (error) {,
          console.error(`Failed to start dependency ${dep}:`, error);
        }
      }
    }
  }
,
  /**,
   * Start a process,
   */,
  async startProcess(processName) {,
    return new Promise((resolve, reject) => {,
      pm2.start(processName, (err) => {,
        if (err) {,
          reject(err);
        } else {,
          resolve();
        }
      });
    });
  }
,
  /**,
   * Wait for process to stabilize,
   */,
  async waitForProcessStability(processName, timeout = 30000) {,
    const startTime = Date.now();
    while (Date.now() - startTime < timeout) {,
      const processes = await this.getPM2Processes();
      const process = processes.find(p => p.name === processName);
      if (process && process.pm2_env.status === 'online' && process.pm2_env.pm_uptime > 10000) {,
        return true;
      }
,
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
,
    throw new Error(`Process ${processName} failed to stabilize within ${timeout}ms`);
  }
,
  /**,
   * Calculate retry delay with exponential backoff,
   */,
  calculateRetryDelay(attempt) {,
    if (!this.config.exponentialBackoff) {,
      return this.config.retryDelay;
    }
,
    const delay = this.config.retryDelay * Math.pow(2, attempt - 1);
    return Math.min(delay, this.config.maxBackoffDelay);
  }
,
  /**,
   * Record successful recovery,
   */,
  recordRecoverySuccess(recoveryItem) {,
    const history = this.recoveryHistory.get(recoveryItem.processName) || [];
    history.push({,
      timestamp: Date.now();
      success: true;
      strategy: this.selectRecoveryStrategy(recoveryItem.processName, recoveryItem.issues);
      attempts: recoveryItem.attempts;
      issues: recoveryItem.issues,});
    // Keep only last 50 recovery attempts,
    if (history.length > 50) {,
      history.splice(0, history.length - 50);
    }
,
    this.recoveryHistory.set(recoveryItem.processName, history);
  }
,
  /**,
   * Record failed recovery,
   */,
  recordRecoveryFailure(recoveryItem) {,
    const history = this.recoveryHistory.get(recoveryItem.processName) || [];
    history.push({,
      timestamp: Date.now();
      success: false;
      attempts: recoveryItem.attempts;
      issues: recoveryItem.issues;
      error: 'Max recovery attempts exceeded',});
    // Keep only last 50 recovery attempts,
    if (history.length > 50) {,
      history.splice(0, history.length - 50);
    }
,
    this.recoveryHistory.set(recoveryItem.processName, history);
  }
,
  /**,
   * Get PM2 processes,
   */,
  getPM2Processes() {,
    return new Promise((resolve, reject) => {,
      pm2.list((err, processes) => {,
        if (err) {,
          reject(err);
        } else {,
          resolve(processes);
        }
      });
    });
  }
,
  /**,
   * Get recovery statistics,
   */,
  getRecoveryStats() {,
    const stats = {,
      totalRecoveries: 0;
      successfulRecoveries: 0;
      failedRecoveries: 0;
      processesInQueue: this.recoveryQueue.length;
      isRecovering: this.isRecovering;
      processHealth: Object.fromEntries(this.processHealth);
      recoveryHistory: Object.fromEntries(this.recoveryHistory),};
    this.recoveryHistory.forEach(history => {,
      stats.totalRecoveries += history.length;
      stats.successfulRecoveries += history.filter(h => h.success).length;
      stats.failedRecoveries += history.filter(h => !h.success).length;
    });
    return stats;
  }
,
  /**,
   * Manually trigger recovery for a process,
   */,
  async manualRecovery(processName) {,
    const health = this.processHealth.get(processName);
    if (!health) {,
      throw new Error(`Process ${processName} not found in health monitoring`);
    }
,
    if (!health.needsRecovery) {,
      throw new Error(`Process ${processName} does not need recovery`);
    }
,
    this.queueRecovery(processName, health.issues);
    return true;
  }
,
  /**,
   * Update configuration,
   */,
  updateConfig(newConfig) {,
    this.config = { ...this.config, ...newConfig };
    if (newConfig.processDependencies) {,
      this.initializeDependencyGraph();
    }
  }
,
  /**,
   * Stop the recovery system,
   */,
  stop() {,
    this.isRecovering = false;
    this.recoveryQueue.length = 0;
  }
}
,
module.exports = ProcessRecoverySystem;