#!/usr/bin/env node;

/**;
 * Master Intelligent Automation Controller;
 * Orchestrates all intelligent automation systems and provides unified control;
 */;

const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');
;
// Import automation systems;
const IntelligentRepositoryManager = require('./intelligent-repository-manager.cjs');
const AdvancedDevelopmentIntelligence = require('./advanced-development-intelligence.cjs');
const IntelligentDeploymentOrchestrator = require('./intelligent-deployment-orchestrator.cjs');
;
class MasterIntelligentAutomationController {;
  constructor() {;
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'logs', 'master-automation-controller.log');
    this.config = this.loadConfig();
    this.systems = new Map();
    this.systemStatus = new Map();
    this.automationQueue = [];
    this.isRunning = false;,
}
;
  loadConfig() {;
    const configPath = path.join(this.projectRoot, 'scripts', 'automation', 'config', 'master-controller.config.json');
    try {;
      if (fs.existsSync(configPath)) {;
        return JSON.parse(fs.readFileSync(configPath, 'utf8'));,
}
    } catch (error) {;
      this.log('Error loading config, using defaults', 'error');,
}
;
    return {;
      autoStartEnabled: true,;
      systemMonitoringEnabled: true,;
      crossSystemOptimizationEnabled: true,;
      reportingEnabled: true,;
      healthCheckInterval: 60000, // 1 minute;
      reportInterval: 3600000, // 1 hour;
      maxConcurrentAutomations: 5,;
      systems: {;
        repositoryManager: {;
          enabled: true,;
          priority: 'high',;
          autoStart: true;,
},;
        developmentIntelligence: {;
          enabled: true,;
          priority: 'medium',;
          autoStart: true;,
},;
        deploymentOrchestrator: {;
          enabled: true,;
          priority: 'high',;
          autoStart: true;,
}
      }
    };,
}
;
  log(message, level = 'info') {;
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${level.toUpperCase()}] ${message}`;
    ;
    console.log(logEntry);
    ;
    const logsDir = path.dirname(this.logFile);
    if (!fs.existsSync(logsDir)) {;
      fs.mkdirSync(logsDir, { recursive: true });,
}
    ;
    fs.appendFileSync(this.logFile, logEntry + '\n');,
}
;
  async initializeSystems() {;
    this.log('Initializing intelligent automation systems...');
    ;
    try {;
      // Initialize Repository Manager;
      if (this.config.systems.repositoryManager.enabled) {;
        const repoManager = new IntelligentRepositoryManager();
        this.systems.set('repositoryManager', repoManager);
        this.systemStatus.set('repositoryManager', { status: 'initializing', lastUpdate: new Date() });
        ;
        if (this.config.systems.repositoryManager.autoStart) {;
          await repoManager.start();
          this.systemStatus.set('repositoryManager', { status: 'running', lastUpdate: new Date() });
          this.log('Repository Manager initialized and started');,
}
      }
;
      // Initialize Development Intelligence;
      if (this.config.systems.developmentIntelligence.enabled) {;
        const devIntelligence = new AdvancedDevelopmentIntelligence();
        this.systems.set('developmentIntelligence', devIntelligence);
        this.systemStatus.set('developmentIntelligence', { status: 'initializing', lastUpdate: new Date() });
        ;
        if (this.config.systems.developmentIntelligence.autoStart) {;
          await devIntelligence.start();
          this.systemStatus.set('developmentIntelligence', { status: 'running', lastUpdate: new Date() });
          this.log('Development Intelligence initialized and started');,
}
      }
;
      // Initialize Deployment Orchestrator;
      if (this.config.systems.deploymentOrchestrator.enabled) {;
        const deploymentOrchestrator = new IntelligentDeploymentOrchestrator();
        this.systems.set('deploymentOrchestrator', deploymentOrchestrator);
        this.systemStatus.set('deploymentOrchestrator', { status: 'initializing', lastUpdate: new Date() });
        ;
        if (this.config.systems.deploymentOrchestrator.autoStart) {;
          await deploymentOrchestrator.start();
          this.systemStatus.set('deploymentOrchestrator', { status: 'running', lastUpdate: new Date() });
          this.log('Deployment Orchestrator initialized and started');,
}
      }
;
      this.log(`All systems initialized. Active systems: ${this.systems.size}`);,
} catch (error) {;
      this.log(`Error initializing systems: ${error.message}`, 'error');
      throw error;,
}
  }
;
  async startSystem(systemName) {;
    try {;
      const system = this.systems.get(systemName);
      if (!system) {;
        throw new Error(`System ${systemName} not found`);,
}
;
      this.log(`Starting system: ${systemName}`);
      await system.start();
      ;
      this.systemStatus.set(systemName, { ;
        status: 'running', ;
        lastUpdate: new Date(),;
        startTime: new Date();,
});
      ;
      this.log(`System ${systemName} started successfully`);
      return true;,
} catch (error) {;
      this.log(`Failed to start system ${systemName}: ${error.message}`, 'error');
      this.systemStatus.set(systemName, { ;
        status: 'failed', ;
        lastUpdate: new Date(),;
        error: error.message;,
});
      return false;,
}
  }
;
  async stopSystem(systemName) {;
    try {;
      const system = this.systems.get(systemName);
      if (!system) {;
        throw new Error(`System ${systemName} not found`);,
}
;
      this.log(`Stopping system: ${systemName}`);
      ;
      // Stop the system (implement stop method in each system);
      if (system.stop) {;
        await system.stop();,
}
      ;
      this.systemStatus.set(systemName, { ;
        status: 'stopped', ;
        lastUpdate: new Date(),;
        stopTime: new Date();,
});
      ;
      this.log(`System ${systemName} stopped successfully`);
      return true;,
} catch (error) {;
      this.log(`Failed to stop system ${systemName}: ${error.message}`, 'error');
      return false;,
}
  }
;
  async restartSystem(systemName) {;
    try {;
      this.log(`Restarting system: ${systemName}`);
      ;
      await this.stopSystem(systemName);
      await this.sleep(5000); // Wait 5 seconds;
      await this.startSystem(systemName);
      ;
      this.log(`System ${systemName} restarted successfully`);
      return true;,
} catch (error) {;
      this.log(`Failed to restart system ${systemName}: ${error.message}`, 'error');
      return false;,
}
  }
;
  async getSystemStatus(systemName = null) {;
    if (systemName) {;
      return this.systemStatus.get(systemName);,
}
    ;
    return Object.fromEntries(this.systemStatus);,
}
;
  async monitorSystems() {;
    if (!this.config.systemMonitoringEnabled) return;
    ;
    this.log('Monitoring system health...');
    ;
    for (const [systemName, system] of this.systems) {;
      try {;
        const status = await this.checkSystemHealth(systemName, system);
        this.systemStatus.set(systemName, {;
          ...this.systemStatus.get(systemName),;
          health: status.health,;
          lastUpdate: new Date(),;
          metrics: status.metrics;,
});
        ;
        // Auto-restart if system is unhealthy;
        if (status.health < 0.5 && this.config.systems[systemName]?.autoRestart) {;
          this.log(`System ${systemName} is unhealthy (${status.health * 100}%), attempting restart`);
          await this.restartSystem(systemName);,
}
      } catch (error) {;
        this.log(`Error monitoring system ${systemName}: ${error.message}`, 'error');,
}
    }
  }
;
  async checkSystemHealth(systemName, system) {;
    try {;
      // Basic health check - check if system is responding;
      let health = 1.0;
      const metrics = {};
      ;
      // Check system-specific health;
      if (system.getHealth) {;
        const systemHealth = await system.getHealth();
        health = systemHealth.overall || health;
        metrics.systemSpecific = systemHealth;,
}
      ;
      // Check memory usage;
      if (process.memoryUsage) {;
        const memUsage = process.memoryUsage();
        metrics.memory = {;
          used: memUsage.heapUsed,;
          total: memUsage.heapTotal,;
          external: memUsage.external;,
};
        ;
        // Reduce health if memory usage is high;
        if (memUsage.heapUsed / memUsage.heapTotal > 0.8) {;
          health *= 0.8;,
}
      }
      ;
      return { health, metrics };,
} catch (error) {;
      this.log(`Health check failed for ${systemName}: ${error.message}`, 'error');
      return { health: 0, metrics: { error: error.message } };,
}
  }
;
  async executeAutomation(automationType, options = {}) {;
    try {;
      this.log(`Executing automation: ${automationType}`);
      ;
      const automation = {;
        id: `auto-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,;
        type: automationType,;
        options,;
        status: 'queued',;
        startTime: new Date(),;
        priority: options.priority || 'normal';,
};
      ;
      // Add to queue;
      this.automationQueue.push(automation);
      ;
      // Process queue if not at capacity;
      if (this.automationQueue.length <= this.config.maxConcurrentAutomations) {;
        await this.processAutomation(automation);,
}
      ;
      return automation.id;,
} catch (error) {;
      this.log(`Failed to execute automation ${automationType}: ${error.message}`, 'error');
      throw error;,
}
  }
;
  async processAutomation(automation) {;
    try {;
      automation.status = 'running';
      this.log(`Processing automation: ${automation.id} (${automation.type})`);
      ;
      switch (automation.type) {;
        case 'repository_merge':;
          await this.executeRepositoryMerge(automation);
          break;
        case 'code_analysis':;
          await this.executeCodeAnalysis(automation);
          break;
        case 'deployment':;
          await this.executeDeployment(automation);
          break;
        case 'health_check':;
          await this.executeHealthCheck(automation);
          break;
        case 'optimization':;
          await this.executeOptimization(automation);
          break;
        default:;
          throw new Error(`Unknown automation type: ${automation.type}`);,
}
      ;
      automation.status = 'completed';
      automation.endTime = new Date();
      this.log(`Automation completed: ${automation.id}`);
      ;,
} catch (error) {;
      automation.status = 'failed';
      automation.error = error.message;
      automation.endTime = new Date();
      this.log(`Automation failed: ${automation.id} - ${error.message}`, 'error');,
}
  }
;
  async executeRepositoryMerge(automation) {;
    const repoManager = this.systems.get('repositoryManager');
    if (!repoManager) {;
      throw new Error('Repository Manager not available');,
}
    ;
    await repoManager.intelligentMerge();,
}
;
  async executeCodeAnalysis(automation) {;
    const devIntelligence = this.systems.get('developmentIntelligence');
    if (!devIntelligence) {;
      throw new Error('Development Intelligence not available');,
}
    ;
    await devIntelligence.analyzeCodebase();,
}
;
  async executeDeployment(automation) {;
    const deploymentOrchestrator = this.systems.get('deploymentOrchestrator');
    if (!deploymentOrchestrator) {;
      throw new Error('Deployment Orchestrator not available');,
}
    ;
    const { environment, strategy } = automation.options;
    await deploymentOrchestrator.startDeployment(environment, strategy);,
}
;
  async executeHealthCheck(automation) {;
    await this.monitorSystems();,
}
;
  async executeOptimization(automation) {;
    // Cross-system optimization;
    if (this.config.crossSystemOptimizationEnabled) {;
      await this.performCrossSystemOptimization();,
}
  }
;
  async performCrossSystemOptimization() {;
    this.log('Performing cross-system optimization...');
    ;
    try {;
      // Get insights from all systems;
      const insights = await this.gatherSystemInsights();
      ;
      // Analyze for optimization opportunities;
      const optimizations = this.analyzeOptimizationOpportunities(insights);
      ;
      // Execute optimizations;
      for (const optimization of optimizations) {;
        await this.executeOptimization(optimization);,
}
      ;
      this.log(`Cross-system optimization completed. Executed ${optimizations.length} optimizations.`);,
} catch (error) {;
      this.log(`Cross-system optimization failed: ${error.message}`, 'error');,
}
  }
;
  async gatherSystemInsights() {;
    const insights = {};
    ;
    // Gather insights from each system;
    for (const [systemName, system] of this.systems) {;
      try {;
        if (system.getInsights) {;
          insights[systemName] = await system.getInsights();,
}
      } catch (error) {;
        this.log(`Failed to gather insights from ${systemName}: ${error.message}`, 'warning');,
}
    }
    ;
    return insights;,
}
;
  analyzeOptimizationOpportunities(insights) {;
    const optimizations = [];
    ;
    // Analyze repository insights;
    if (insights.repositoryManager) {;
      if (insights.repositoryManager.conflictRate > 0.3) {;
        optimizations.push({;
          type: 'conflict_resolution',;
          priority: 'high',;
          description: 'High conflict rate detected, optimizing conflict resolution';,
});,
}
    }
    ;
    // Analyze development insights;
    if (insights.developmentIntelligence) {;
      if (insights.developmentIntelligence.complexityScore > 7) {;
        optimizations.push({;
          type: 'complexity_reduction',;
          priority: 'medium',;
          description: 'High complexity detected, suggesting refactoring';,
});,
}
    }
    ;
    // Analyze deployment insights;
    if (insights.deploymentOrchestrator) {;
      if (insights.deploymentOrchestrator.failureRate > 0.2) {;
        optimizations.push({;
          type: 'deployment_improvement',;
          priority: 'high',;
          description: 'High deployment failure rate, improving process';,
});,
}
    }
    ;
    return optimizations;,
}
;
  async generateMasterReport() {;
    try {;
      this.log('Generating master automation report...');
      ;
      const report = {;
        timestamp: new Date().toISOString(),;
        systemStatus: await this.getSystemStatus(),;
        automationQueue: this.automationQueue.slice(-20), // Last 20 automations;
        systemMetrics: {},;
        recommendations: this.generateMasterRecommendations(),;
        summary: {;
          totalSystems: this.systems.size,;
          activeSystems: Array.from(this.systemStatus.values()).filter(s => s.status === 'running').length,;
          totalAutomations: this.automationQueue.length,;
          successfulAutomations: this.automationQueue.filter(a => a.status === 'completed').length;,
}
      };
      ;
      // Gather metrics from each system;
      for (const [systemName, system] of this.systems) {;
        try {;
          if (system.generateReport) {;
            const systemReport = await system.generateReport();
            report.systemMetrics[systemName] = systemReport;,
}
        } catch (error) {;
          this.log(`Failed to generate report for ${systemName}: ${error.message}`, 'warning');,
}
      }
      ;
      const reportPath = path.join(this.projectRoot, 'logs', 'master-automation-report.json');
      fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
      ;
      this.log(`Master report generated: ${reportPath}`);
      return report;,
} catch (error) {;
      this.log(`Failed to generate master report: ${error.message}`, 'error');
      throw error;,
}
  }
;
  generateMasterRecommendations() {;
    const recommendations = [];
    ;
    // System health recommendations;
    for (const [systemName, status] of this.systemStatus) {;
      if (status.health && status.health < 0.7) {;
        recommendations.push({;
          priority: 'high',;
          system: systemName,;
          action: 'System health check',;
          description: `System ${systemName} has low health (${(status.health * 100).toFixed(1)}%)`,;
          suggestion: 'Investigate and potentially restart the system';,
});,
}
    }
    ;
    // Automation queue recommendations;
    if (this.automationQueue.length > this.config.maxConcurrentAutomations * 2) {;
      recommendations.push({;
        priority: 'medium',;
        system: 'master',;
        action: 'Queue optimization',;
        description: 'Automation queue is getting long',;
        suggestion: 'Consider increasing concurrent automation capacity or optimizing automation processes';,
});,
}
    ;
    return recommendations;,
}
;
  async sleep(ms) {;
    return new Promise(resolve => setTimeout(resolve, ms));,
}
;
  async start() {;
    try {;
      this.log('Starting Master Intelligent Automation Controller...');
      ;
      // Initialize all systems;
      await this.initializeSystems();
      ;
      // Start system monitoring;
      if (this.config.systemMonitoringEnabled) {;
        setInterval(async () => {;
          try {;
            await this.monitorSystems();,
} catch (error) {;
            this.log(`Error in system monitoring: ${error.message}`, 'error');,
}
        }, this.config.healthCheckInterval);,
}
      ;
      // Start reporting;
      if (this.config.reportingEnabled) {;
        setInterval(async () => {;
          try {;
            await this.generateMasterReport();,
} catch (error) {;
            this.log(`Error generating report: ${error.message}`, 'error');,
}
        }, this.config.reportInterval);,
}
      ;
      this.isRunning = true;
      this.log('Master Intelligent Automation Controller started successfully');
      ;
      // Process automation queue;
      setInterval(async () => {;
        try {;
          await this.processAutomationQueue();,
} catch (error) {;
          this.log(`Error processing automation queue: ${error.message}`, 'error');,
}
      }, 10000); // Process queue every 10 seconds;
      ;,
} catch (error) {;
      this.log(`Failed to start Master Controller: ${error.message}`, 'error');
      throw error;,
}
  }
;
  async processAutomationQueue() {;
    if (this.automationQueue.length === 0) return;
    ;
    // Get next automation to process;
    const nextAutomation = this.automationQueue.find(a => a.status === 'queued');
    if (!nextAutomation) return;
    ;
    // Check if we can process more automations;
    const runningAutomations = this.automationQueue.filter(a => a.status === 'running').length;
    if (runningAutomations >= this.config.maxConcurrentAutomations) return;
    ;
    // Process the automation;
    await this.processAutomation(nextAutomation);,
}
;
  async stop() {;
    this.log('Stopping Master Intelligent Automation Controller...');
    ;
    this.isRunning = false;
    ;
    // Stop all systems;
    for (const [systemName, system] of this.systems) {;
      try {;
        await this.stopSystem(systemName);,
} catch (error) {;
        this.log(`Error stopping system ${systemName}: ${error.message}`, 'warning');,
}
    }
    ;
    this.log('Master Intelligent Automation Controller stopped');,
}
}
;
// Start the controller if run directly;
if (require.main === module) {;
  const controller = new MasterIntelligentAutomationController();
  ;
  // Handle graceful shutdown;
  process.on('SIGINT', async () => {;
    console.log('\nReceived SIGINT, shutting down gracefully...');
    await controller.stop();
    process.exit(0);,
});
  ;
  process.on('SIGTERM', async () => {;
    console.log('\nReceived SIGTERM, shutting down gracefully...');
    await controller.stop();
    process.exit(0);,
});
  ;
  controller.start().catch(error => {;
    console.error('Failed to start Master Intelligent Automation Controller:', error);
    process.exit(1);,
});,
}
;
module.exports = MasterIntelligentAutomationController;