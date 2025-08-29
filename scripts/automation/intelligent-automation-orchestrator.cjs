#!/usr/bin/env node

const { execSync, spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🎯 Starting Intelligent Automation Orchestrator...');

class IntelligentAutomationOrchestrator {
  constructor() {
    this.automationSystems = new Map();
    this.learningData = new Map();
    this.performanceMetrics = new Map();
    this.executionHistory = [];
    this.priorityQueue = [];
    this.logFile = path.join(process.cwd(), 'logs', 'intelligent-orchestrator.log');
    this.ensureLogDirectory();
    this.loadAutomationSystems();
    this.loadExecutionHistory();
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

  loadAutomationSystems() {
    // Define all automation systems with their priorities and dependencies
    const systems = [
      {
        name: 'console-error-fixer',
        path: './scripts/automation/console-error-fixer.cjs',
        priority: 'critical',
        dependencies: [],
        frequency: '15min',
        healthCheck: true,
        autoRestart: true
      },
      {
        name: 'ai-code-analyzer',
        path: './scripts/automation/ai-code-analyzer.cjs',
        priority: 'high',
        dependencies: [],
        frequency: '4hours',
        healthCheck: true,
        autoRestart: true
      },
      {
        name: 'intelligent-dependency-monitor',
        path: './scripts/automation/intelligent-dependency-monitor.cjs',
        priority: 'high',
        dependencies: [],
        frequency: '8hours',
        healthCheck: true,
        autoRestart: true
      },
      {
        name: 'smart-performance-profiler',
        path: './scripts/automation/smart-performance-profiler.cjs',
        priority: 'medium',
        dependencies: [],
        frequency: '6hours',
        healthCheck: true,
        autoRestart: true
      },
      {
        name: 'link-checker',
        path: './scripts/automation/link-checker.cjs',
        priority: 'medium',
        dependencies: [],
        frequency: '30min',
        healthCheck: true,
        autoRestart: true
      },
      {
        name: 'continuous-improvement',
        path: './scripts/automation/continuous-improvement.cjs',
        priority: 'medium',
        dependencies: [],
        frequency: '2hours',
        healthCheck: true,
        autoRestart: true
      },
      {
        name: 'daily-build-test',
        path: './scripts/automation/daily-build-test.cjs',
        priority: 'medium',
        dependencies: [],
        frequency: '1hour',
        healthCheck: true,
        autoRestart: true
      },
      {
        name: 'security-audit',
        path: './scripts/automation/security-audit.cjs',
        priority: 'high',
        dependencies: [],
        frequency: '4hours',
        healthCheck: true,
        autoRestart: true
      },
      {
        name: 'dependency-updates',
        path: './scripts/automation/dependency-updates.cjs',
        priority: 'low',
        dependencies: ['intelligent-dependency-monitor'],
        frequency: '6hours',
        healthCheck: true,
        autoRestart: true
      },
      {
        name: 'performance-monitor',
        path: './scripts/automation/performance-monitor.cjs',
        priority: 'medium',
        dependencies: [],
        frequency: '2hours',
        healthCheck: true,
        autoRestart: true
      },
      {
        name: 'quality-checks',
        path: './scripts/automation/quality-checks.cjs',
        priority: 'medium',
        dependencies: [],
        frequency: '3hours',
        healthCheck: true,
        autoRestart: true
      },
      {
        name: 'link-integrity',
        path: './scripts/automation/link-integrity.cjs',
        priority: 'medium',
        dependencies: [],
        frequency: '2hours',
        healthCheck: true,
        autoRestart: true
      },
      {
        name: 'front-maximizer',
        path: './scripts/automation/front-maximizer.cjs',
        priority: 'low',
        dependencies: [],
        frequency: '4hours',
        healthCheck: true,
        autoRestart: true
      },
      {
        name: 'sitemap-runner',
        path: './scripts/automation/sitemap-runner.cjs',
        priority: 'low',
        dependencies: [],
        frequency: '6hours',
        healthCheck: true,
        autoRestart: true
      }
    ];

    for (const system of systems) {
      this.automationSystems.set(system.name, {
        ...system,
        status: 'available',
        lastRun: null,
        nextRun: this.calculateNextRun(system.frequency),
        successRate: 0,
        averageExecutionTime: 0,
        totalRuns: 0,
        lastError: null,
        healthScore: 100
      });
    }
  }

  calculateNextRun(frequency) {
    const now = new Date();
    const intervals = {
      '15min': 15 * 60 * 1000,
      '30min': 30 * 60 * 1000,
      '1hour': 60 * 60 * 1000,
      '2hours': 2 * 60 * 60 * 1000,
      '3hours': 3 * 60 * 60 * 1000,
      '4hours': 4 * 60 * 60 * 1000,
      '6hours': 6 * 60 * 60 * 1000,
      '8hours': 8 * 60 * 60 * 1000
    };
    
    return new Date(now.getTime() + intervals[frequency]);
  }

  loadExecutionHistory() {
    const historyFile = path.join(process.cwd(), 'automation-execution-history.json');
    if (fs.existsSync(historyFile)) {
      try {
        this.executionHistory = JSON.parse(fs.readFileSync(historyFile, 'utf8'));
        this.analyzeExecutionHistory();
      } catch (error) {
        this.log(`⚠️  Could not load execution history: ${error.message}`);
      }
    }
  }

  analyzeExecutionHistory() {
    // Analyze historical data to improve scheduling
    for (const [systemName, system] of this.automationSystems) {
      const systemHistory = this.executionHistory.filter(h => h.system === systemName);
      
      if (systemHistory.length > 0) {
        // Calculate success rate
        const successfulRuns = systemHistory.filter(h => h.success).length;
        system.successRate = successfulRuns / systemHistory.length;
        
        // Calculate average execution time
        const executionTimes = systemHistory.map(h => h.executionTime).filter(t => t > 0);
        if (executionTimes.length > 0) {
          system.averageExecutionTime = executionTimes.reduce((a, b) => a + b, 0) / executionTimes.length;
        }
        
        // Update total runs
        system.totalRuns = systemHistory.length;
        
        // Calculate health score
        system.healthScore = this.calculateHealthScore(system);
      }
    }
  }

  calculateHealthScore(system) {
    let score = 100;
    
    // Success rate impact (40%)
    score -= (1 - system.successRate) * 40;
    
    // Recent errors impact (30%)
    if (system.lastError) {
      const timeSinceError = Date.now() - new Date(system.lastError.timestamp).getTime();
      if (timeSinceError < 24 * 60 * 60 * 1000) { // Within 24 hours
        score -= 30;
      }
    }
    
    // Execution time impact (20%)
    if (system.averageExecutionTime > 60000) { // More than 1 minute
      score -= 20;
    } else if (system.averageExecutionTime > 30000) { // More than 30 seconds
      score -= 10;
    }
    
    // Frequency compliance impact (10%)
    const now = new Date();
    if (system.nextRun && now > system.nextRun) {
      score -= 10;
    }
    
    return Math.max(0, Math.round(score));
  }

  async orchestrateAutomations() {
    try {
      this.log('🎯 Starting automation orchestration...');
      
      // Check system health
      await this.checkSystemHealth();
      
      // Prioritize automations
      this.prioritizeAutomations();
      
      // Execute high-priority automations
      await this.executeHighPriorityAutomations();
      
      // Schedule next runs
      this.scheduleNextRuns();
      
      // Generate orchestration report
      await this.generateOrchestrationReport();
      
      this.log('✅ Automation orchestration completed successfully');
      
    } catch (error) {
      this.log(`❌ Automation orchestration failed: ${error.message}`);
      throw error;
    }
  }

  async checkSystemHealth() {
    this.log('🏥 Checking system health...');
    
    for (const [systemName, system] of this.automationSystems) {
      if (system.healthCheck) {
        const healthStatus = await this.checkSystemHealthStatus(system);
        system.healthScore = healthStatus.score;
        system.status = healthStatus.status;
        
        this.log(`📊 ${systemName}: Health Score ${healthStatus.score}/100 (${healthStatus.status})`);
      }
    }
  }

  async checkSystemHealthStatus(system) {
    try {
      // Check if the script file exists
      if (!fs.existsSync(system.path)) {
        return { score: 0, status: 'missing' };
      }
      
      // Check if PM2 process is running
      try {
        const pm2Status = execSync(`pm2 jlist`, { encoding: 'utf8' });
        const pm2Processes = JSON.parse(pm2Status);
        const process = pm2Processes.find(p => p.name === system.name);
        
        if (process) {
          if (process.pm2_env.status === 'online') {
            return { score: 100, status: 'healthy' };
          } else if (process.pm2_env.status === 'stopped') {
            return { score: 50, status: 'stopped' };
          } else {
            return { score: 25, status: 'error' };
          }
        } else {
          return { score: 0, status: 'not-running' };
        }
      } catch (error) {
        return { score: 75, status: 'unknown' };
      }
      
    } catch (error) {
      return { score: 0, status: 'error' };
    }
  }

  prioritizeAutomations() {
    this.log('⚡ Prioritizing automations...');
    
    this.priorityQueue = Array.from(this.automationSystems.values())
      .filter(system => {
        // Only include systems that are due to run
        const now = new Date();
        return system.nextRun && now >= system.nextRun;
      })
      .sort((a, b) => {
        // Sort by priority first, then by health score, then by how overdue they are
        const priorityOrder = { 'critical': 4, 'high': 3, 'medium': 2, 'low': 1 };
        const priorityDiff = priorityOrder[b.priority] - priorityOrder[a.priority];
        
        if (priorityDiff !== 0) return priorityDiff;
        
        const healthDiff = b.healthScore - a.healthScore;
        if (healthDiff !== 0) return healthDiff;
        
        // Most overdue first
        return a.nextRun - b.nextRun;
      });
    
    this.log(`📋 Prioritized ${this.priorityQueue.length} automations for execution`);
  }

  async executeHighPriorityAutomations() {
    this.log('🚀 Executing high-priority automations...');
    
    const maxConcurrent = 3; // Limit concurrent executions
    const executing = new Set();
    
    for (const system of this.priorityQueue) {
      if (executing.size >= maxConcurrent) {
        // Wait for a slot to open
        await this.waitForExecutionSlot(executing);
      }
      
      // Check dependencies
      if (this.checkDependencies(system)) {
        executing.add(system.name);
        this.executeAutomation(system).finally(() => {
          executing.delete(system.name);
        });
      } else {
        this.log(`⏳ ${system.name}: Waiting for dependencies`);
      }
    }
    
    // Wait for all executions to complete
    while (executing.size > 0) {
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  }

  checkDependencies(system) {
    if (system.dependencies.length === 0) return true;
    
    for (const depName of system.dependencies) {
      const dep = this.automationSystems.get(depName);
      if (!dep || dep.status !== 'healthy') {
        return false;
      }
    }
    
    return true;
  }

  async waitForExecutionSlot(executing) {
    return new Promise(resolve => {
      const checkInterval = setInterval(() => {
        if (executing.size < 3) {
          clearInterval(checkInterval);
          resolve();
        }
      }, 1000);
    });
  }

  async executeAutomation(system) {
    const startTime = Date.now();
    this.log(`🚀 Executing ${system.name} (Priority: ${system.priority})`);
    
    try {
      const result = await this.runSystem(system);
      
      const executionTime = Date.now() - startTime;
      this.recordExecution(system.name, true, executionTime, result);
      
      this.log(`✅ ${system.name} completed successfully in ${executionTime}ms`);
      
      // Update system metrics
      this.updateSystemMetrics(system.name, true, executionTime);
      
    } catch (error) {
      const executionTime = Date.now() - startTime;
      this.recordExecution(system.name, false, executionTime, null, error.message);
      
      this.log(`❌ ${system.name} failed after ${executionTime}ms: ${error.message}`);
      
      // Update system metrics
      this.updateSystemMetrics(system.name, false, executionTime);
      
      // Handle critical failures
      if (system.priority === 'critical') {
        await this.handleCriticalFailure(system, error);
      }
    }
  }

  async runSystem(system) {
    return new Promise((resolve, reject) => {
      const child = spawn('node', [system.path], {
        stdio: 'pipe',
        cwd: process.cwd()
      });
      
      let output = '';
      let errorOutput = '';
      
      child.stdout.on('data', (data) => {
        output += data.toString();
      });
      
      child.stderr.on('data', (data) => {
        errorOutput += data.toString();
      });
      
      child.on('close', (code) => {
        if (code === 0) {
          resolve({ output, errorOutput, code });
        } else {
          reject(new Error(`Process exited with code ${code}: ${errorOutput}`));
        }
      });
      
      child.on('error', (error) => {
        reject(error);
      });
      
      // Set timeout for execution
      setTimeout(() => {
        child.kill();
        reject(new Error('Execution timeout'));
      }, 300000); // 5 minutes timeout
    });
  }

  recordExecution(systemName, success, executionTime, result, error = null) {
    const execution = {
      system: systemName,
      timestamp: new Date().toISOString(),
      success,
      executionTime,
      result: result ? result.output : null,
      error,
      priority: this.automationSystems.get(systemName)?.priority || 'unknown'
    };
    
    this.executionHistory.push(execution);
    
    // Keep only last 1000 executions
    if (this.executionHistory.length > 1000) {
      this.executionHistory = this.executionHistory.slice(-1000);
    }
    
    // Save to file
    const historyFile = path.join(process.cwd(), 'automation-execution-history.json');
    fs.writeFileSync(historyFile, JSON.stringify(this.executionHistory, null, 2));
  }

  updateSystemMetrics(systemName, success, executionTime) {
    const system = this.automationSystems.get(systemName);
    if (!system) return;
    
    // Update success rate
    const currentSuccessRate = system.successRate;
    const totalRuns = system.totalRuns + 1;
    system.successRate = success ? (currentSuccessRate * system.totalRuns + 1) / totalRuns : (currentSuccessRate * system.totalRuns) / totalRuns;
    
    // Update average execution time
    const currentAvgTime = system.averageExecutionTime;
    system.averageExecutionTime = (currentAvgTime * system.totalRuns + executionTime) / totalRuns;
    
    // Update total runs
    system.totalRuns = totalRuns;
    
    // Update last run time
    system.lastRun = new Date();
    
    // Update last error if failed
    if (!success) {
      system.lastError = {
        timestamp: new Date().toISOString(),
        message: 'Execution failed',
        executionTime
      };
    }
  }

  async handleCriticalFailure(system, error) {
    this.log(`🚨 Critical failure in ${system.name}: ${error.message}`);
    
    // Attempt auto-restart
    if (system.autoRestart) {
      this.log(`🔄 Attempting auto-restart of ${system.name}...`);
      
      try {
        // Restart PM2 process
        execSync(`pm2 restart ${system.name}`, { stdio: 'pipe' });
        this.log(`✅ Auto-restart successful for ${system.name}`);
      } catch (restartError) {
        this.log(`❌ Auto-restart failed for ${system.name}: ${restartError.message}`);
        
        // Send alert (could be email, Slack, etc.)
        await this.sendAlert(system, error);
      }
    }
  }

  async sendAlert(system, error) {
    // This is a placeholder for alert functionality
    // In a real implementation, you might send emails, Slack messages, etc.
    this.log(`🚨 ALERT: Critical failure in ${system.name}: ${error.message}`);
    
    // Create alert file
    const alertFile = path.join(process.cwd(), `alert-${system.name}-${Date.now()}.json`);
    const alert = {
      system: system.name,
      priority: system.priority,
      timestamp: new Date().toISOString(),
      error: error.message,
      status: 'critical'
    };
    
    fs.writeFileSync(alertFile, JSON.stringify(alert, null, 2));
  }

  scheduleNextRuns() {
    this.log('⏰ Scheduling next runs...');
    
    for (const [systemName, system] of this.automationSystems) {
      if (system.lastRun || system.nextRun) {
        system.nextRun = this.calculateNextRun(system.frequency);
        this.log(`📅 ${systemName}: Next run scheduled for ${system.nextRun.toISOString()}`);
      }
    }
  }

  async generateOrchestrationReport() {
    this.log('📋 Generating orchestration report...');
    
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        totalSystems: this.automationSystems.size,
        healthySystems: Array.from(this.automationSystems.values()).filter(s => s.healthScore >= 80).length,
        criticalSystems: Array.from(this.automationSystems.values()).filter(s => s.priority === 'critical').length,
        totalExecutions: this.executionHistory.length,
        recentExecutions: this.executionHistory.filter(h => {
          const executionTime = new Date(h.timestamp);
          const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000);
          return executionTime > oneHourAgo;
        }).length
      },
      systemStatus: Array.from(this.automationSystems.entries()).map(([name, system]) => ({
        name,
        priority: system.priority,
        status: system.status,
        healthScore: system.healthScore,
        lastRun: system.lastRun,
        nextRun: system.nextRun,
        successRate: system.successRate,
        averageExecutionTime: system.averageExecutionTime,
        totalRuns: system.totalRuns
      })),
      recentExecutions: this.executionHistory.slice(-20), // Last 20 executions
      recommendations: this.generateOrchestrationRecommendations()
    };
    
    const reportPath = path.join(process.cwd(), 'intelligent-orchestration-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    this.log(`✅ Orchestration report saved to ${reportPath}`);
  }

  generateOrchestrationRecommendations() {
    const recommendations = [];
    
    // Check for systems with low health scores
    const unhealthySystems = Array.from(this.automationSystems.values())
      .filter(s => s.healthScore < 70);
    
    if (unhealthySystems.length > 0) {
      recommendations.push({
        priority: 'high',
        action: 'Investigate Unhealthy Systems',
        description: `${unhealthySystems.length} systems have health scores below 70`,
        systems: unhealthySystems.map(s => ({ name: s.name, healthScore: s.healthScore }))
      });
    }
    
    // Check for systems with low success rates
    const lowSuccessSystems = Array.from(this.automationSystems.values())
      .filter(s => s.successRate < 0.8);
    
    if (lowSuccessSystems.length > 0) {
      recommendations.push({
        priority: 'medium',
        action: 'Improve System Reliability',
        description: `${lowSuccessSystems.length} systems have success rates below 80%`,
        systems: lowSuccessSystems.map(s => ({ name: s.name, successRate: s.successRate }))
      });
    }
    
    // Check for overdue systems
    const now = new Date();
    const overdueSystems = Array.from(this.automationSystems.values())
      .filter(s => s.nextRun && now > s.nextRun);
    
    if (overdueSystems.length > 0) {
      recommendations.push({
        priority: 'medium',
        action: 'Resolve Overdue Executions',
        description: `${overdueSystems.length} systems are overdue for execution`,
        systems: overdueSystems.map(s => ({ name: s.name, overdue: now - s.nextRun }))
      });
    }
    
    return recommendations;
  }

  // Public method to get system status
  getSystemStatus() {
    return Array.from(this.automationSystems.entries()).map(([name, system]) => ({
      name,
      priority: system.priority,
      status: system.status,
      healthScore: system.healthScore,
      lastRun: system.lastRun,
      nextRun: system.nextRun,
      successRate: system.successRate
    }));
  }

  // Public method to manually trigger a system
  async triggerSystem(systemName) {
    const system = this.automationSystems.get(systemName);
    if (!system) {
      throw new Error(`System ${systemName} not found`);
    }
    
    this.log(`🎯 Manually triggering ${systemName}...`);
    await this.executeAutomation(system);
  }
}

// Main execution
async function main() {
  const orchestrator = new IntelligentAutomationOrchestrator();
  
  // Run orchestration
  await orchestrator.orchestrateAutomations();
  
  // Schedule next orchestration run
  const nextRun = new Date(Date.now() + 5 * 60 * 1000); // 5 minutes
  console.log(`⏰ Next orchestration run scheduled for ${nextRun.toISOString()}`);
}

if (require.main === module) {
  main().catch(console.error);
}

module.exports = IntelligentAutomationOrchestrator;