#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');

class PM2AutomationLauncher {
  constructor() {
    this.config = {
      automationPath: path.join(process.cwd(), 'automation'),
      logsPath: path.join(process.cwd(), 'automation', 'logs'),
      pm2ConfigPath: path.join(process.cwd(), 'ecosystem.config.js'),
      maxConcurrentWorkflows: 3,
      autoRecoveryEnabled: true,
      performanceThresholds: {
        cpu: 80,
        memory: 80,
        responseTime: 2000
      }
    };
    
    this.activeWorkflows = new Map();
    this.workflowQueue = [];
    this.systemHealth = new Map();
    this.performanceHistory = [];
    this.ensureDirectories();
    this.initializeAutomationSystems();
  }

  ensureDirectories() {
    if (!fs.existsSync(this.config.logsPath)) {
      fs.mkdirSync(this.config.logsPath, { recursive: true });
    }
  }

  log(message, level = 'info') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level.toUpperCase()}] ${message}\n`;
    console.log(logMessage.trim());
    
    const logFile = path.join(this.config.logsPath, 'pm2-launcher.log');
    fs.appendFileSync(logFile, logMessage);
  }

  initializeAutomationSystems() {
    this.automationSystems = [
      {
        name: 'pm2-intelligent-manager',
        script: 'pm2-intelligent-manager.cjs',
        category: 'management',
        priority: 'critical',
        autoStart: true,
        healthCheck: true
      },
      {
        name: 'pm2-enhanced-orchestrator',
        script: 'pm2-enhanced-orchestrator.cjs',
        category: 'orchestration',
        priority: 'high',
        autoStart: true,
        healthCheck: true
      },
      {
        name: 'intelligent-orchestrator',
        script: 'intelligent-orchestrator.cjs',
        category: 'orchestration',
        priority: 'high',
        autoStart: true,
        healthCheck: true
      },
      {
        name: 'automation-dashboard',
        script: 'automation-dashboard.cjs',
        category: 'monitoring',
        priority: 'medium',
        autoStart: true,
        healthCheck: true
      },
      {
        name: 'code-quality-monitor',
        script: 'code-quality-monitor.cjs',
        category: 'quality',
        priority: 'high',
        autoStart: true,
        healthCheck: true
      },
      {
        name: 'lint-monitor',
        script: 'lint-monitor.cjs',
        category: 'quality',
        priority: 'high',
        autoStart: true,
        healthCheck: true
      },
      {
        name: 'performance-optimizer',
        script: 'performance-optimizer.cjs',
        category: 'optimization',
        priority: 'medium',
        autoStart: true,
        healthCheck: true
      },
      {
        name: 'security-scanner',
        script: 'security-scanner.cjs',
        category: 'security',
        priority: 'high',
        autoStart: true,
        healthCheck: true
      },
      {
        name: 'seo-optimizer',
        script: 'seo-optimizer.cjs',
        category: 'seo',
        priority: 'low',
        autoStart: false,
        healthCheck: true
      },
      {
        name: 'test-generator',
        script: 'test-generator.cjs',
        category: 'testing',
        priority: 'medium',
        autoStart: false,
        healthCheck: true
      },
      {
        name: 'content-generator',
        script: 'content-generator.cjs',
        category: 'generation',
        priority: 'low',
        autoStart: false,
        healthCheck: true
      },
      {
        name: 'edge-cache-warmer',
        script: 'edge-cache-warmer.cjs',
        category: 'performance',
        priority: 'low',
        autoStart: false,
        healthCheck: true
      }
    ];
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
      return { success: false, error: error.message, output: error.stdout || '' };
    }
  }

  async startPM2Ecosystem(env = 'development') {
    this.log(`🚀 Starting PM2 ecosystem in ${env} mode...`);
    
    if (!fs.existsSync(this.config.pm2ConfigPath)) {
      this.log('❌ PM2 ecosystem configuration not found');
      return false;
    }
    
    const command = `pm2 start ecosystem.config.js --env ${env}`;
    const result = await this.executeCommand(command);
    
    if (result.success) {
      this.log('✅ PM2 ecosystem started successfully');
      this.startAutomationSystems();
      this.startHealthMonitoring();
      return true;
    } else {
      this.log(`❌ Failed to start PM2 ecosystem: ${result.error}`);
      return false;
    }
  }

  async startAutomationSystems() {
    this.log('🚀 Starting automation systems...');
    
    const autoStartSystems = this.automationSystems.filter(system => system.autoStart);
    
    for (const system of autoStartSystems) {
      await this.startAutomationSystem(system);
      // Add delay between starts to avoid overwhelming the system
      await this.sleep(1000);
    }
    
    this.log(`✅ Started ${autoStartSystems.length} automation systems`);
  }

  async startAutomationSystem(system) {
    try {
      this.log(`🚀 Starting ${system.name}...`);
      
      const scriptPath = path.join(this.config.automationPath, system.script);
      if (!fs.existsSync(scriptPath)) {
        this.log(`⚠️ Script not found: ${system.script}`);
        return false;
      }
      
      // Start the system using PM2
      const command = `pm2 start ${scriptPath} --name ${system.name} --no-daemon`;
      const result = await this.executeCommand(command);
      
      if (result.success) {
        this.log(`✅ ${system.name} started successfully`);
        this.systemHealth.set(system.name, {
          status: 'running',
          lastCheck: Date.now(),
          startTime: Date.now(),
          restarts: 0
        });
        return true;
      } else {
        this.log(`❌ Failed to start ${system.name}: ${result.error}`);
        return false;
      }
    } catch (error) {
      this.log(`❌ Error starting ${system.name}: ${error.message}`);
      return false;
    }
  }

  async startHealthMonitoring() {
    this.log('👀 Starting health monitoring...');
    
    setInterval(async () => {
      await this.performHealthCheck();
    }, 30000); // Check every 30 seconds
    
    setInterval(async () => {
      await this.performPerformanceAnalysis();
    }, 60000); // Analyze performance every minute
    
    setInterval(async () => {
      await this.performAutoRecovery();
    }, 120000); // Auto-recovery every 2 minutes
  }

  async performHealthCheck() {
    this.log('🏥 Performing health check...');
    
    try {
      const status = await this.executeCommand('pm2 status --json');
      if (status.success) {
        const processes = JSON.parse(status.output);
        this.analyzeSystemHealth(processes);
      }
    } catch (error) {
      this.log(`❌ Health check failed: ${error.message}`);
    }
  }

  analyzeSystemHealth(processes) {
    if (!Array.isArray(processes)) return;
    
    for (const process of processes) {
      const processName = process.name;
      const metrics = {
        cpu: process.monit?.cpu || 0,
        memory: process.monit?.memory || 0,
        status: process.pm2_env?.status || 'unknown',
        restarts: process.pm2_env?.restart_time || 0,
        uptime: process.pm2_env?.pm_uptime || 0
      };
      
      this.systemHealth.set(processName, {
        ...this.systemHealth.get(processName),
        ...metrics,
        lastCheck: Date.now()
      });
      
      // Check for critical issues
      if (metrics.cpu > 90 || metrics.memory > 90 || metrics.restarts > 5) {
        this.triggerCriticalAlert(processName, metrics);
      }
    }
  }

  triggerCriticalAlert(processName, metrics) {
    this.log(`🚨 Critical alert for ${processName}:`, 'error');
    this.log(`   CPU: ${metrics.cpu}%, Memory: ${metrics.memory}%, Restarts: ${metrics.restarts}`, 'error');
    
    // Add to recovery queue
    this.workflowQueue.push({
      type: 'recovery',
      processName,
      priority: 'critical',
      timestamp: Date.now(),
      metrics
    });
  }

  async performPerformanceAnalysis() {
    this.log('📊 Performing performance analysis...');
    
    const currentMetrics = Array.from(this.systemHealth.entries())
      .map(([name, health]) => ({
        name,
        cpu: health.cpu || 0,
        memory: health.memory || 0,
        restarts: health.restarts || 0
      }));
    
    this.performanceHistory.push({
      timestamp: Date.now(),
      metrics: currentMetrics
    });
    
    // Keep only last 100 entries
    if (this.performanceHistory.length > 100) {
      this.performanceHistory = this.performanceHistory.slice(-100);
    }
    
    // Analyze trends
    this.analyzePerformanceTrends();
  }

  analyzePerformanceTrends() {
    if (this.performanceHistory.length < 3) return;
    
    const recentMetrics = this.performanceHistory.slice(-3);
    const averageCPU = recentMetrics.reduce((sum, entry) => 
      sum + entry.metrics.reduce((s, m) => s + m.cpu, 0) / entry.metrics.length, 0) / recentMetrics.length;
    
    const averageMemory = recentMetrics.reduce((sum, entry) => 
      sum + entry.metrics.reduce((s, m) => s + m.memory, 0) / entry.metrics.length, 0) / recentMetrics.length;
    
    if (averageCPU > this.config.performanceThresholds.cpu) {
      this.log(`⚠️ High average CPU usage detected: ${averageCPU.toFixed(1)}%`, 'warn');
      this.triggerPerformanceOptimization('cpu');
    }
    
    if (averageMemory > this.config.performanceThresholds.memory) {
      this.log(`⚠️ High average memory usage detected: ${averageMemory.toFixed(1)}%`, 'warn`);
      this.triggerPerformanceOptimization('memory');
    }
  }

  triggerPerformanceOptimization(resource) {
    this.log(`⚡ Triggering ${resource} optimization...`);
    
    this.workflowQueue.push({
      type: 'optimization',
      resource,
      priority: 'high',
      timestamp: Date.now()
    });
  }

  async performAutoRecovery() {
    if (!this.config.autoRecoveryEnabled) return;
    
    this.log('🔄 Performing auto-recovery...');
    
    // Process recovery queue
    const criticalItems = this.workflowQueue
      .filter(item => item.priority === 'critical')
      .sort((a, b) => a.timestamp - b.timestamp);
    
    for (const item of criticalItems.slice(0, this.config.maxConcurrentWorkflows)) {
      await this.processRecoveryItem(item);
      this.workflowQueue = this.workflowQueue.filter(i => i !== item);
    }
  }

  async processRecoveryItem(item) {
    try {
      switch (item.type) {
        case 'recovery':
          await this.recoverProcess(item.processName);
          break;
        case 'optimization':
          await this.optimizeSystem(item.resource);
          break;
        default:
          this.log(`⚠️ Unknown recovery item type: ${item.type}`);
      }
    } catch (error) {
      this.log(`❌ Failed to process recovery item: ${error.message}`);
    }
  }

  async recoverProcess(processName) {
    this.log(`🔄 Recovering process: ${processName}`);
    
    const command = `pm2 restart ${processName}`;
    const result = await this.executeCommand(command);
    
    if (result.success) {
      this.log(`✅ Process ${processName} recovered successfully`);
      this.systemHealth.set(processName, {
        ...this.systemHealth.get(processName),
        status: 'running',
        restarts: (this.systemHealth.get(processName)?.restarts || 0) + 1
      });
    } else {
      this.log(`❌ Failed to recover ${processName}: ${result.error}`);
    }
  }

  async optimizeSystem(resource) {
    this.log(`⚡ Optimizing system for ${resource} usage...`);
    
    if (resource === 'cpu') {
      // Reduce CPU usage by scaling down non-critical processes
      const nonCriticalProcesses = this.automationSystems
        .filter(system => system.priority !== 'critical')
        .map(system => system.name);
      
      for (const processName of nonCriticalProcesses) {
        await this.executeCommand(`pm2 restart ${processName} --max-memory-restart 128M`);
      }
    } else if (resource === 'memory') {
      // Reduce memory usage
      const command = 'pm2 flush';
      await this.executeCommand(command);
    }
  }

  async startWorkflow(workflowType, options = {}) {
    this.log(`🚀 Starting ${workflowType} workflow...`);
    
    const workflow = {
      type: workflowType,
      options,
      priority: options.priority || 'medium',
      timestamp: Date.now(),
      status: 'queued'
    };
    
    this.workflowQueue.push(workflow);
    this.log(`📋 Workflow ${workflowType} added to queue`);
    
    // Process workflow if possible
    await this.processWorkflowQueue();
  }

  async processWorkflowQueue() {
    const availableSlots = this.config.maxConcurrentWorkflows - this.activeWorkflows.size;
    
    if (availableSlots <= 0) {
      this.log('⏳ No available slots for new workflows');
      return;
    }
    
    const pendingWorkflows = this.workflowQueue
      .filter(w => w.status === 'queued')
      .sort((a, b) => this.getPriorityScore(b.priority) - this.getPriorityScore(a.priority));
    
    for (const workflow of pendingWorkflows.slice(0, availableSlots)) {
      await this.executeWorkflow(workflow);
    }
  }

  getPriorityScore(priority) {
    const scores = { critical: 4, high: 3, medium: 2, low: 1 };
    return scores[priority] || 1;
  }

  async executeWorkflow(workflow) {
    this.log(`⚡ Executing workflow: ${workflow.type}`);
    
    workflow.status = 'running';
    this.activeWorkflows.set(workflow.type, workflow);
    
    try {
      switch (workflow.type) {
        case 'development':
          await this.executeDevelopmentWorkflow(workflow.options);
          break;
        case 'production':
          await this.executeProductionWorkflow(workflow.options);
          break;
        case 'maintenance':
          await this.executeMaintenanceWorkflow(workflow.options);
          break;
        case 'testing':
          await this.executeTestingWorkflow(workflow.options);
          break;
        default:
          this.log(`⚠️ Unknown workflow type: ${workflow.type}`);
      }
      
      workflow.status = 'completed';
      this.log(`✅ Workflow ${workflow.type} completed successfully`);
      
    } catch (error) {
      workflow.status = 'failed';
      workflow.error = error.message;
      this.log(`❌ Workflow ${workflow.type} failed: ${error.message}`);
    } finally {
      this.activeWorkflows.delete(workflow.type);
      this.workflowQueue = this.workflowQueue.filter(w => w !== workflow);
      
      // Process next workflows
      await this.processWorkflowQueue();
    }
  }

  async executeDevelopmentWorkflow(options) {
    this.log('🔧 Executing development workflow...');
    
    const steps = [
      { name: 'code-quality-scan', command: 'node automation/code-quality-monitor.cjs' },
      { name: 'lint-fix', command: 'node automation/lint-error-fixer.cjs' },
      { name: 'type-check', command: 'npm run type-check:all' },
      { name: 'test-generation', command: 'node automation/test-generator.cjs' }
    ];
    
    for (const step of steps) {
      await this.executeWorkflowStep(step);
    }
  }

  async executeProductionWorkflow(options) {
    this.log('🚀 Executing production workflow...');
    
    const steps = [
      { name: 'pre-deployment-check', command: 'npm run build' },
      { name: 'security-audit', command: 'npm audit --audit-level=moderate' },
      { name: 'deployment', command: 'pm2 reload ecosystem.config.js --env production' }
    ];
    
    for (const step of steps) {
      await this.executeWorkflowStep(step);
    }
  }

  async executeMaintenanceWorkflow(options) {
    this.log('🧹 Executing maintenance workflow...');
    
    const steps = [
      { name: 'health-check', command: 'pm2 status --json' },
      { name: 'cleanup', command: 'pm2 flush' },
      { name: 'optimization', command: 'node automation/performance-optimizer.cjs' }
    ];
    
    for (const step of steps) {
      await this.executeWorkflowStep(step);
    }
  }

  async executeTestingWorkflow(options) {
    this.log('🧪 Executing testing workflow...');
    
    const steps = [
      { name: 'test-generation', command: 'node automation/test-generator.cjs' },
      { name: 'test-execution', command: 'npm test' },
      { name: 'coverage-report', command: 'npm run test:coverage' }
    ];
    
    for (const step of steps) {
      await this.executeWorkflowStep(step);
    }
  }

  async executeWorkflowStep(step) {
    this.log(`⚡ Executing step: ${step.name}`);
    
    const result = await this.executeCommand(step.command);
    
    if (result.success) {
      this.log(`✅ Step ${step.name} completed successfully`);
    } else {
      this.log(`❌ Step ${step.name} failed: ${result.error}`);
      throw new Error(`Step ${step.name} failed: ${result.error}`);
    }
  }

  async generateSystemReport() {
    this.log('📊 Generating system report...');
    
    const report = {
      timestamp: new Date().toISOString(),
      systemHealth: Object.fromEntries(this.systemHealth),
      activeWorkflows: Array.from(this.activeWorkflows.values()),
      workflowQueue: this.workflowQueue,
      performanceHistory: this.performanceHistory.slice(-20),
      summary: {
        totalSystems: this.automationSystems.length,
        runningSystems: Array.from(this.systemHealth.values()).filter(h => h.status === 'running').length,
        activeWorkflows: this.activeWorkflows.size,
        queuedWorkflows: this.workflowQueue.length,
        averageCPU: this.calculateAverageCPU(),
        averageMemory: this.calculateAverageMemory()
      }
    };
    
    const reportPath = path.join(this.config.logsPath, 'system-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    this.log(`📊 System report generated: ${reportPath}`);
    return report;
  }

  calculateAverageCPU() {
    const entries = Array.from(this.systemHealth.values()).filter(h => h.cpu !== undefined);
    if (entries.length === 0) return 0;
    
    return entries.reduce((sum, h) => sum + h.cpu, 0) / entries.length;
  }

  calculateAverageMemory() {
    const entries = Array.from(this.systemHealth.values()).filter(h => h.memory !== undefined);
    if (entries.length === 0) return 0;
    
    return entries.reduce((sum, h) => sum + h.memory, 0) / entries.length;
  }

  async stopAllSystems() {
    this.log('🛑 Stopping all systems...');
    
    const command = 'pm2 stop all';
    const result = await this.executeCommand(command);
    
    if (result.success) {
      this.log('✅ All systems stopped');
      this.systemHealth.clear();
      this.activeWorkflows.clear();
      this.workflowQueue = [];
    } else {
      this.log(`❌ Failed to stop systems: ${result.error}`);
    }
  }

  async restartAllSystems() {
    this.log('🔄 Restarting all systems...');
    
    const command = 'pm2 restart all';
    const result = await this.executeCommand(command);
    
    if (result.success) {
      this.log('✅ All systems restarted');
    } else {
      this.log(`❌ Failed to restart systems: ${result.error}`);
    }
  }

  getStatus() {
    const status = {
      timestamp: new Date().toISOString(),
      systems: {
        total: this.automationSystems.length,
        running: Array.from(this.systemHealth.values()).filter(h => h.status === 'running').length,
        stopped: Array.from(this.systemHealth.values()).filter(h => h.status !== 'running').length
      },
      workflows: {
        active: this.activeWorkflows.size,
        queued: this.workflowQueue.length
      },
      performance: {
        averageCPU: this.calculateAverageCPU(),
        averageMemory: this.calculateAverageMemory()
      }
    };
    
    this.log('📊 System Status:');
    this.log(`   Systems: ${status.systems.running}/${status.systems.total} running`);
    this.log(`   Workflows: ${status.workflows.active} active, ${status.workflows.queued} queued`);
    this.log(`   Performance: CPU ${status.performance.averageCPU.toFixed(1)}%, Memory ${status.performance.averageMemory.toFixed(1)}%`);
    
    return status;
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async showHelp() {
    console.log(`
🚀 PM2 Automation Launcher - Comprehensive Development Workflow Management

Usage: node pm2-automation-launcher.cjs [command] [options]

Commands:
  start [env]        - Start PM2 ecosystem and automation systems
  workflow <type>    - Start specific workflow (dev|prod|maintenance|testing)
  status             - Show system status
  report             - Generate system report
  stop               - Stop all systems
  restart            - Restart all systems
  help               - Show this help

Workflow Types:
  development        - Code quality, linting, testing
  production        - Pre-deployment, security, deployment
  maintenance       - Health checks, cleanup, optimization
  testing           - Test generation, execution, coverage

Examples:
  node pm2-automation-launcher.cjs start dev
  node pm2-automation-launcher.cjs workflow development
  node pm2-automation-launcher.cjs workflow production
  node pm2-automation-launcher.cjs status
  node pm2-automation-launcher.cjs report

Features:
  ✅ Intelligent PM2 ecosystem management
  ✅ Automated workflow orchestration
  ✅ Health monitoring and auto-recovery
  ✅ Performance optimization
  ✅ Priority-based task scheduling
  ✅ Comprehensive reporting
  ✅ Auto-scaling and resource management
    `);
  }
}

// CLI handling
const launcher = new PM2AutomationLauncher();
const command = process.argv[2];
const options = process.argv.slice(3);

(async () => {
  try {
    switch (command) {
      case 'start':
        const env = options[0] || 'development';
        await launcher.startPM2Ecosystem(env);
        break;
      case 'workflow':
        const workflowType = options[0];
        if (!workflowType) {
          console.log('Usage: workflow <type>');
          break;
        }
        await launcher.startWorkflow(workflowType, { priority: options[1] || 'medium' });
        break;
      case 'status':
        launcher.getStatus();
        break;
      case 'report':
        await launcher.generateSystemReport();
        break;
      case 'stop':
        await launcher.stopAllSystems();
        break;
      case 'restart':
        await launcher.restartAllSystems();
        break;
      case 'help':
      default:
        launcher.showHelp();
        break;
    }
  } catch (error) {
    launcher.log(`❌ Command execution failed: ${error.message}`, 'error');
    process.exit(1);
  }
})();

// Graceful shutdown
process.on('SIGINT', async () => {
  console.log('\n🛑 Shutting down PM2 automation launcher...');
  await launcher.stopAllSystems();
  process.exit(0);
});

process.on('SIGTERM', async () => {
  console.log('\n🛑 Shutting down PM2 automation launcher...');
  await launcher.stopAllSystems();
  process.exit(0);
});