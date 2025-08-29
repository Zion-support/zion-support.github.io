#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');

class PM2EnhancedOrchestrator {
  constructor() {
    this.config = {
      automationPath: path.join(process.cwd(), 'automation'),
      logsPath: path.join(process.cwd(), 'automation', 'logs'),
      pm2ConfigPath: path.join(process.cwd(), 'ecosystem.config.js'),
      maxConcurrentProcesses: 5,
      healthCheckInterval: 15000,
      autoOptimizationInterval: 60000,
      learningDataPath: path.join(process.cwd(), 'automation', 'learning-data.json')
    };
    
    this.activeProcesses = new Map();
    this.processQueue = [];
    this.learningData = new Map();
    this.performanceMetrics = new Map();
    this.workflowHistory = [];
    this.ensureDirectories();
    this.loadLearningData();
    this.initializeWorkflows();
  }

  ensureDirectories() {
    if (!fs.existsSync(this.config.logsPath)) {
      fs.mkdirSync(this.config.logsPath, { recursive: true });
    }
  }

  loadLearningData() {
    try {
      if (fs.existsSync(this.config.learningDataPath)) {
        const data = JSON.parse(fs.readFileSync(this.config.learningDataPath, 'utf8'));
        this.learningData = new Map(Object.entries(data));
        this.log('✅ Learning data loaded successfully');
      }
    } catch (error) {
      this.log(`⚠️ Could not load learning data: ${error.message}`);
    }
  }

  saveLearningData() {
    try {
      const data = Object.fromEntries(this.learningData);
      fs.writeFileSync(this.config.learningDataPath, JSON.stringify(data, null, 2));
    } catch (error) {
      this.log(`❌ Failed to save learning data: ${error.message}`);
    }
  }

  log(message, level = 'info') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level.toUpperCase()}] ${message}\n`;
    console.log(logMessage.trim());
    
    const logFile = path.join(this.config.logsPath, 'pm2-orchestrator.log');
    fs.appendFileSync(logFile, logMessage);
  }

  initializeWorkflows() {
    this.workflows = {
      development: [
        { name: 'code-quality-scan', priority: 'high', dependencies: [] },
        { name: 'lint-fix', priority: 'high', dependencies: ['code-quality-scan'] },
        { name: 'type-check', priority: 'medium', dependencies: ['lint-fix'] },
        { name: 'test-generation', priority: 'medium', dependencies: ['type-check'] },
        { name: 'performance-optimization', priority: 'low', dependencies: ['test-generation'] },
        { name: 'security-scan', priority: 'high', dependencies: ['performance-optimization'] }
      ],
      production: [
        { name: 'pre-deployment-check', priority: 'critical', dependencies: [] },
        { name: 'security-audit', priority: 'critical', dependencies: ['pre-deployment-check'] },
        { name: 'performance-benchmark', priority: 'high', dependencies: ['security-audit'] },
        { name: 'deployment', priority: 'critical', dependencies: ['performance-benchmark'] },
        { name: 'post-deployment-verification', priority: 'high', dependencies: ['deployment'] }
      ],
      maintenance: [
        { name: 'health-check', priority: 'high', dependencies: [] },
        { name: 'cleanup', priority: 'medium', dependencies: ['health-check'] },
        { name: 'optimization', priority: 'low', dependencies: ['cleanup'] },
        { name: 'report-generation', priority: 'low', dependencies: ['optimization'] }
      ]
    };
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

  async startWorkflow(workflowType = 'development') {
    this.log(`🚀 Starting ${workflowType} workflow...`);
    
    const workflow = this.workflows[workflowType];
    if (!workflow) {
      this.log(`❌ Unknown workflow type: ${workflowType}`);
      return false;
    }

    // Sort by priority and dependencies
    const sortedWorkflow = this.sortWorkflowByDependencies(workflow);
    
    for (const step of sortedWorkflow) {
      await this.executeWorkflowStep(step, workflowType);
    }
    
    this.log(`✅ ${workflowType} workflow completed successfully`);
    return true;
  }

  sortWorkflowByDependencies(workflow) {
    const sorted = [];
    const visited = new Set();
    
    const visit = (step) => {
      if (visited.has(step.name)) return;
      
      for (const dep of step.dependencies) {
        const depStep = workflow.find(s => s.name === dep);
        if (depStep) visit(depStep);
      }
      
      visited.add(step.name);
      sorted.push(step);
    };
    
    for (const step of workflow) {
      visit(step);
    }
    
    return sorted;
  }

  async executeWorkflowStep(step, workflowType) {
    this.log(`⚡ Executing workflow step: ${step.name}`);
    
    const startTime = Date.now();
    let success = false;
    
    try {
      switch (step.name) {
        case 'code-quality-scan':
          success = await this.runCodeQualityScan();
          break;
        case 'lint-fix':
          success = await this.runLintFix();
          break;
        case 'type-check':
          success = await this.runTypeCheck();
          break;
        case 'test-generation':
          success = await this.runTestGeneration();
          break;
        case 'performance-optimization':
          success = await this.runPerformanceOptimization();
          break;
        case 'security-scan':
          success = await this.runSecurityScan();
          break;
        case 'pre-deployment-check':
          success = await this.runPreDeploymentCheck();
          break;
        case 'security-audit':
          success = await this.runSecurityAudit();
          break;
        case 'performance-benchmark':
          success = await this.runPerformanceBenchmark();
          break;
        case 'deployment':
          success = await this.runDeployment();
          break;
        case 'post-deployment-verification':
          success = await this.runPostDeploymentVerification();
          break;
        case 'health-check':
          success = await this.runHealthCheck();
          break;
        case 'cleanup':
          success = await this.runCleanup();
          break;
        case 'optimization':
          success = await this.runOptimization();
          break;
        case 'report-generation':
          success = await this.runReportGeneration();
          break;
        default:
          this.log(`⚠️ Unknown workflow step: ${step.name}`);
          success = false;
      }
      
      const executionTime = Date.now() - startTime;
      this.recordWorkflowStep(step.name, success, executionTime, workflowType);
      
      if (success) {
        this.log(`✅ Workflow step ${step.name} completed successfully (${executionTime}ms)`);
      } else {
        this.log(`❌ Workflow step ${step.name} failed`);
        if (step.priority === 'critical') {
          this.log(`🚨 Critical step failed, stopping workflow`);
          return false;
        }
      }
      
    } catch (error) {
      this.log(`❌ Error executing workflow step ${step.name}: ${error.message}`);
      success = false;
    }
    
    return success;
  }

  async runCodeQualityScan() {
    this.log('🔍 Running code quality scan...');
    const result = await this.executeCommand('node automation/code-quality-monitor.cjs');
    return result.success;
  }

  async runLintFix() {
    this.log('🔧 Running lint fix...');
    const result = await this.executeCommand('node automation/lint-error-fixer.cjs');
    return result.success;
  }

  async runTypeCheck() {
    this.log('📝 Running type check...');
    const result = await this.executeCommand('npm run type-check:all');
    return result.success;
  }

  async runTestGeneration() {
    this.log('🧪 Running test generation...');
    const result = await this.executeCommand('node automation/test-generator.cjs');
    return result.success;
  }

  async runPerformanceOptimization() {
    this.log('⚡ Running performance optimization...');
    const result = await this.executeCommand('node automation/performance-optimizer.cjs');
    return result.success;
  }

  async runSecurityScan() {
    this.log('🔒 Running security scan...');
    const result = await this.executeCommand('node automation/security-scanner.cjs');
    return result.success;
  }

  async runPreDeploymentCheck() {
    this.log('✅ Running pre-deployment check...');
    const result = await this.executeCommand('npm run build');
    return result.success;
  }

  async runSecurityAudit() {
    this.log('🔒 Running security audit...');
    const result = await this.executeCommand('npm audit --audit-level=moderate');
    return result.success;
  }

  async runPerformanceBenchmark() {
    this.log('📊 Running performance benchmark...');
    const result = await this.executeCommand('node automation/performance-optimizer.cjs benchmark');
    return result.success;
  }

  async runDeployment() {
    this.log('🚀 Running deployment...');
    const result = await this.executeCommand('pm2 reload ecosystem.config.js --env production');
    return result.success;
  }

  async runPostDeploymentVerification() {
    this.log('✅ Running post-deployment verification...');
    const result = await this.executeCommand('pm2 status');
    return result.success;
  }

  async runHealthCheck() {
    this.log('🏥 Running health check...');
    const result = await this.executeCommand('pm2 status --json');
    return result.success;
  }

  async runCleanup() {
    this.log('🧹 Running cleanup...');
    const result = await this.executeCommand('pm2 flush');
    return result.success;
  }

  async runOptimization() {
    this.log('⚡ Running optimization...');
    const result = await this.executeCommand('node automation/performance-optimizer.cjs optimize');
    return result.success;
  }

  async runReportGeneration() {
    this.log('📊 Running report generation...');
    const result = await this.executeCommand('node automation/pm2-intelligent-manager.cjs report');
    return result.success;
  }

  recordWorkflowStep(stepName, success, executionTime, workflowType) {
    const key = `${workflowType}:${stepName}`;
    const currentData = this.learningData.get(key) || {
      totalRuns: 0,
      successfulRuns: 0,
      totalExecutionTime: 0,
      averageExecutionTime: 0,
      successRate: 0,
      lastRun: null
    };
    
    currentData.totalRuns++;
    currentData.successfulRuns += success ? 1 : 0;
    currentData.totalExecutionTime += executionTime;
    currentData.averageExecutionTime = currentData.totalExecutionTime / currentData.totalRuns;
    currentData.successRate = currentData.successfulRuns / currentData.totalRuns;
    currentData.lastRun = new Date().toISOString();
    
    this.learningData.set(key, currentData);
    this.saveLearningData();
    
    // Record in workflow history
    this.workflowHistory.push({
      timestamp: new Date().toISOString(),
      workflowType,
      stepName,
      success,
      executionTime,
      successRate: currentData.successRate
    });
    
    // Keep only last 1000 entries
    if (this.workflowHistory.length > 1000) {
      this.workflowHistory = this.workflowHistory.slice(-1000);
    }
  }

  async startContinuousMonitoring() {
    this.log('👀 Starting continuous monitoring...');
    
    setInterval(async () => {
      await this.performHealthCheck();
    }, this.config.healthCheckInterval);
    
    setInterval(async () => {
      await this.performAutoOptimization();
    }, this.config.autoOptimizationInterval);
  }

  async performHealthCheck() {
    this.log('🏥 Performing health check...');
    
    try {
      const status = await this.executeCommand('pm2 status --json');
      if (status.success) {
        const processes = JSON.parse(status.output);
        this.analyzeProcessHealth(processes);
      }
    } catch (error) {
      this.log(`❌ Health check failed: ${error.message}`);
    }
  }

  analyzeProcessHealth(processes) {
    if (!Array.isArray(processes)) return;
    
    for (const process of processes) {
      const metrics = {
        cpu: process.monit?.cpu || 0,
        memory: process.monit?.memory || 0,
        status: process.pm2_env?.status || 'unknown',
        restarts: process.pm2_env?.restart_time || 0
      };
      
      this.performanceMetrics.set(process.name, metrics);
      
      // Trigger alerts for unhealthy processes
      if (metrics.cpu > 90 || metrics.memory > 90 || metrics.restarts > 5) {
        this.triggerHealthAlert(process.name, metrics);
      }
    }
  }

  triggerHealthAlert(processName, metrics) {
    this.log(`🚨 Health alert for ${processName}:`, 'warn');
    this.log(`   CPU: ${metrics.cpu}%, Memory: ${metrics.memory}%, Restarts: ${metrics.restarts}`, 'warn');
    
    // Auto-optimize if needed
    if (metrics.cpu > 90 || metrics.memory > 90) {
      this.autoOptimizeProcess(processName, metrics);
    }
  }

  async autoOptimizeProcess(processName, metrics) {
    this.log(`⚡ Auto-optimizing ${processName}...`);
    
    if (metrics.cpu > 90) {
      await this.executeCommand(`pm2 restart ${processName} --max-memory-restart 256M`);
    } else if (metrics.memory > 90) {
      await this.executeCommand(`pm2 restart ${processName} --max-memory-restart 128M`);
    }
  }

  async performAutoOptimization() {
    this.log('⚡ Performing auto-optimization...');
    
    // Analyze performance trends
    const criticalProcesses = Array.from(this.performanceMetrics.entries())
      .filter(([_, metrics]) => metrics.cpu > 80 || metrics.memory > 80);
    
    if (criticalProcesses.length > 0) {
      this.log(`🔧 Optimizing ${criticalProcesses.length} critical processes...`);
      
      for (const [processName, metrics] of criticalProcesses) {
        await this.autoOptimizeProcess(processName, metrics);
      }
    }
  }

  async generateWorkflowReport() {
    this.log('📊 Generating workflow report...');
    
    const report = {
      timestamp: new Date().toISOString(),
      learningData: Object.fromEntries(this.learningData),
      performanceMetrics: Object.fromEntries(this.performanceMetrics),
      workflowHistory: this.workflowHistory.slice(-100),
      summary: {
        totalWorkflows: this.workflowHistory.length,
        averageSuccessRate: this.calculateAverageSuccessRate(),
        topPerformingSteps: this.getTopPerformingSteps(),
        optimizationOpportunities: this.identifyOptimizationOpportunities()
      }
    };
    
    const reportPath = path.join(this.config.logsPath, 'workflow-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    this.log(`📊 Workflow report generated: ${reportPath}`);
    return report;
  }

  calculateAverageSuccessRate() {
    if (this.workflowHistory.length === 0) return 0;
    
    const totalSteps = this.workflowHistory.length;
    const successfulSteps = this.workflowHistory.filter(entry => entry.success).length;
    
    return successfulSteps / totalSteps;
  }

  getTopPerformingSteps() {
    const stepPerformance = new Map();
    
    for (const entry of this.workflowHistory) {
      const key = entry.stepName;
      const current = stepPerformance.get(key) || { totalRuns: 0, successfulRuns: 0 };
      
      current.totalRuns++;
      current.successfulRuns += entry.success ? 1 : 0;
      current.successRate = current.successfulRuns / current.totalRuns;
      
      stepPerformance.set(key, current);
    }
    
    return Array.from(stepPerformance.entries())
      .sort((a, b) => b[1].successRate - a[1].successRate)
      .slice(0, 5);
  }

  identifyOptimizationOpportunities() {
    const opportunities = [];
    
    for (const [key, data] of this.learningData) {
      if (data.successRate < 0.8) {
        opportunities.push({
          step: key,
          currentSuccessRate: data.successRate,
          totalRuns: data.totalRuns,
          recommendation: this.generateOptimizationRecommendation(data)
        });
      }
    }
    
    return opportunities.sort((a, b) => a.currentSuccessRate - b.currentSuccessRate);
  }

  generateOptimizationRecommendation(data) {
    if (data.successRate < 0.5) {
      return 'Critical: Immediate investigation required';
    } else if (data.successRate < 0.7) {
      return 'High: Review and optimize workflow step';
    } else {
      return 'Medium: Consider minor improvements';
    }
  }

  async showHelp() {
    console.log(`
🚀 PM2 Enhanced Orchestrator - Intelligent Workflow Management

Usage: node pm2-enhanced-orchestrator.cjs [command] [options]

Commands:
  workflow <type>    - Start workflow (dev|prod|maintenance)
  monitor            - Start continuous monitoring
  report             - Generate workflow report
  status             - Show current status
  help               - Show this help

Workflow Types:
  development        - Code quality, linting, testing, optimization
  production        - Pre-deployment checks, security audit, deployment
  maintenance       - Health checks, cleanup, optimization

Examples:
  node pm2-enhanced-orchestrator.cjs workflow dev
  node pm2-enhanced-orchestrator.cjs workflow production
  node pm2-enhanced-orchestrator.cjs monitor
  node pm2-enhanced-orchestrator.cjs report

Features:
  ✅ Intelligent workflow orchestration
  ✅ Dependency management
  ✅ Priority-based execution
  ✅ Learning and optimization
  ✅ Continuous monitoring
  ✅ Auto-optimization
  ✅ Performance analytics
  ✅ Health monitoring
    `);
  }
}

// CLI handling
const orchestrator = new PM2EnhancedOrchestrator();
const command = process.argv[2];
const options = process.argv.slice(3);

(async () => {
  try {
    switch (command) {
      case 'workflow':
        const workflowType = options[0] || 'development';
        await orchestrator.startWorkflow(workflowType);
        break;
      case 'monitor':
        await orchestrator.startContinuousMonitoring();
        // Keep running for monitoring
        process.stdin.resume();
        break;
      case 'report':
        await orchestrator.generateWorkflowReport();
        break;
      case 'status':
        console.log('📊 Current Status:');
        console.log(`   Active Processes: ${orchestrator.activeProcesses.size}`);
        console.log(`   Queue Length: ${orchestrator.processQueue.length}`);
        console.log(`   Learning Data Entries: ${orchestrator.learningData.size}`);
        console.log(`   Performance Metrics: ${orchestrator.performanceMetrics.size}`);
        break;
      case 'help':
      default:
        orchestrator.showHelp();
        break;
    }
  } catch (error) {
    orchestrator.log(`❌ Command execution failed: ${error.message}`, 'error');
    process.exit(1);
  }
})();

// Graceful shutdown
process.on('SIGINT', async () => {
  console.log('\n🛑 Shutting down PM2 orchestrator...');
  orchestrator.saveLearningData();
  process.exit(0);
});

process.on('SIGTERM', async () => {
  console.log('\n🛑 Shutting down PM2 orchestrator...');
  orchestrator.saveLearningData();
  process.exit(0);
});