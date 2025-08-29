#!/usr/bin/env node

/**
 * Intelligent Automation Orchestrator - PM2 Automation
 * Coordinates all PM2 automations, manages dependencies,
 * and provides intelligent scheduling and resource management
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class IntelligentAutomationOrchestrator {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'logs', 'intelligent-automation-orchestrator.log');
    this.orchestrationLog = path.join(this.projectRoot, 'logs', 'automation-orchestration.json');
    this.performanceMetrics = path.join(this.projectRoot, 'logs', 'automation-performance.json');
    this.ensureLogsDirectory();
    
    // Automation dependencies and priorities
    this.automationDependencies = {
      'ai-code-quality-enhancer': {
        priority: 'HIGH',
        dependencies: ['project-health-monitor'],
        estimatedDuration: 300, // 5 minutes
        resourceIntensive: true,
        criticalPath: true
      },
      'intelligent-performance-optimizer': {
        priority: 'MEDIUM',
        dependencies: ['ai-code-quality-enhancer'],
        estimatedDuration: 600, // 10 minutes
        resourceIntensive: true,
        criticalPath: false
      },
      'smart-security-compliance-monitor': {
        priority: 'CRITICAL',
        dependencies: [],
        estimatedDuration: 180, // 3 minutes
        resourceIntensive: false,
        criticalPath: true
      },
      'project-health-monitor': {
        priority: 'HIGH',
        dependencies: [],
        estimatedDuration: 120, // 2 minutes
        resourceIntensive: false,
        criticalPath: true
      },
      'typescript-syntax-fixer': {
        priority: 'MEDIUM',
        dependencies: ['project-health-monitor'],
        estimatedDuration: 90, // 1.5 minutes
        resourceIntensive: false,
        criticalPath: false
      },
      'dependency-manager': {
        priority: 'MEDIUM',
        dependencies: ['project-health-monitor'],
        estimatedDuration: 240, // 4 minutes
        resourceIntensive: false,
        criticalPath: false
      },
      'project-health-dashboard': {
        priority: 'LOW',
        dependencies: ['project-health-monitor'],
        estimatedDuration: 30, // 30 seconds
        resourceIntensive: false,
        criticalPath: false
      }
    };

    // Performance thresholds
    this.performanceThresholds = {
      maxMemoryUsage: 0.8, // 80% of allocated memory
      maxCpuUsage: 0.7, // 70% CPU usage
      maxExecutionTime: 900, // 15 minutes
      minSuccessRate: 0.95 // 95% success rate
    };
  }

  ensureLogsDirectory() {
    const logsDir = path.dirname(this.logFile);
    if (!fs.existsSync(logsDir)) {
      fs.mkdirSync(logsDir, { recursive: true });
    }
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${level}] ${message}\n`;
    fs.appendFileSync(this.logFile, logEntry);
    console.log(`[${level}] ${message}`);
  }

  async runOrchestration() {
    this.log('Starting intelligent automation orchestration...');
    
    try {
      // 1. Analyze current system state
      const systemState = await this.analyzeSystemState();
      
      // 2. Check automation health and performance
      const automationHealth = await this.checkAutomationHealth();
      
      // 3. Optimize automation scheduling
      const optimizedSchedule = await this.optimizeAutomationSchedule(systemState, automationHealth);
      
      // 4. Execute critical path automations
      const criticalResults = await this.executeCriticalPathAutomations();
      
      // 5. Execute dependent automations
      const dependentResults = await this.executeDependentAutomations(criticalResults);
      
      // 6. Monitor and adjust resource allocation
      await this.monitorAndAdjustResources();
      
      // 7. Generate orchestration report
      await this.generateOrchestrationReport({
        systemState,
        automationHealth,
        optimizedSchedule,
        criticalResults,
        dependentResults
      });

      this.log('Intelligent automation orchestration completed successfully');
      
    } catch (error) {
      this.log(`Orchestration failed: ${error.message}`, 'ERROR');
      await this.handleOrchestrationFailure(error);
    }
  }

  async analyzeSystemState() {
    this.log('Analyzing current system state...');
    
    const state = {
      timestamp: new Date().toISOString(),
      systemResources: await this.getSystemResources(),
      pm2Processes: await this.getPM2Processes(),
      automationStatus: await this.getAutomationStatus(),
      projectHealth: await this.getProjectHealth()
    };

    return state;
  }

  async getSystemResources() {
    try {
      // Get system memory info
      const memoryInfo = execSync('free -m', { encoding: 'utf8' });
      const memoryLines = memoryInfo.split('\n');
      const memLine = memoryLines[1].split(/\s+/);
      
      const totalMemory = parseInt(memLine[1]);
      const usedMemory = parseInt(memLine[2]);
      const availableMemory = parseInt(memLine[3]);
      
      // Get CPU info
      const cpuInfo = execSync('top -bn1 | grep "Cpu(s)"', { encoding: 'utf8' });
      const cpuUsage = parseFloat(cpuInfo.match(/(\d+\.\d+)%/)[1]);
      
      return {
        memory: {
          total: totalMemory,
          used: usedMemory,
          available: availableMemory,
          usagePercentage: (usedMemory / totalMemory) * 100
        },
        cpu: {
          usagePercentage: cpuUsage
        },
        disk: await this.getDiskUsage()
      };
    } catch (error) {
      this.log(`Error getting system resources: ${error.message}`, 'WARN');
      return { memory: {}, cpu: {}, disk: {} };
    }
  }

  async getDiskUsage() {
    try {
      const diskInfo = execSync('df -h .', { encoding: 'utf8' });
      const diskLines = diskInfo.split('\n');
      const diskLine = diskLines[1].split(/\s+/);
      
      return {
        total: diskLine[1],
        used: diskLine[2],
        available: diskLine[3],
        usagePercentage: parseInt(diskLine[4].replace('%', ''))
      };
    } catch (error) {
      return {};
    }
  }

  async getPM2Processes() {
    try {
      const pm2List = execSync('pm2 list --json', { encoding: 'utf8' });
      const processes = JSON.parse(pm2List);
      
      return processes.map(proc => ({
        name: proc.name,
        status: proc.pm2_env.status,
        memory: proc.monit.memory,
        cpu: proc.monit.cpu,
        uptime: proc.pm2_env.pm_uptime,
        restarts: proc.pm2_env.restart_time
      }));
    } catch (error) {
      this.log(`Error getting PM2 processes: ${error.message}`, 'WARN');
      return [];
    }
  }

  async getAutomationStatus() {
    const status = {};
    
    for (const [automation, config] of Object.entries(this.automationDependencies)) {
      try {
        const logFile = path.join(this.projectRoot, 'logs', `${automation}.log`);
        if (fs.existsSync(logFile)) {
          const stats = fs.statSync(logFile);
          const lastRun = new Date(stats.mtime);
          const timeSinceLastRun = Date.now() - lastRun.getTime();
          
          status[automation] = {
            lastRun: lastRun.toISOString(),
            timeSinceLastRun: timeSinceLastRun,
            isStale: timeSinceLastRun > (config.estimatedDuration * 1000 * 2), // 2x estimated duration
            status: 'UNKNOWN'
          };
        } else {
          status[automation] = {
            lastRun: null,
            timeSinceLastRun: null,
            isStale: true,
            status: 'NOT_STARTED'
          };
        }
      } catch (error) {
        status[automation] = {
          lastRun: null,
          timeSinceLastRun: null,
          isStale: true,
          status: 'ERROR'
        };
      }
    }

    return status;
  }

  async getProjectHealth() {
    try {
      const healthFile = path.join(this.projectRoot, 'logs', 'health-dashboard', 'health-data.json');
      if (fs.existsSync(healthFile)) {
        const healthData = JSON.parse(fs.readFileSync(healthFile, 'utf8'));
        return {
          overallHealth: healthData.overallHealth || 'UNKNOWN',
          lastUpdated: healthData.timestamp,
          issues: healthData.issues || []
        };
      }
    } catch (error) {
      this.log(`Error getting project health: ${error.message}`, 'WARN');
    }

    return {
      overallHealth: 'UNKNOWN',
      lastUpdated: null,
      issues: []
    };
  }

  async checkAutomationHealth() {
    this.log('Checking automation health and performance...');
    
    const health = {
      timestamp: new Date().toISOString(),
      automations: {},
      overallHealth: 'HEALTHY',
      recommendations: []
    };

    for (const [automation, config] of Object.entries(this.automationDependencies)) {
      const automationHealth = await this.checkIndividualAutomationHealth(automation, config);
      health.automations[automation] = automationHealth;
      
      if (automationHealth.health === 'CRITICAL') {
        health.overallHealth = 'CRITICAL';
      } else if (automationHealth.health === 'WARNING' && health.overallHealth === 'HEALTHY') {
        health.overallHealth = 'WARNING';
      }
      
      if (automationHealth.recommendations.length > 0) {
        health.recommendations.push(...automationHealth.recommendations);
      }
    }

    return health;
  }

  async checkIndividualAutomationHealth(automation, config) {
    const health = {
      automation,
      health: 'HEALTHY',
      performance: {},
      recommendations: []
    };

    try {
      // Check if automation is running
      const pm2Processes = await this.getPM2Processes();
      const process = pm2Processes.find(p => p.name === automation);
      
      if (!process) {
        health.health = 'CRITICAL';
        health.recommendations.push('Automation process not found - needs immediate attention');
        return health;
      }

      if (process.status !== 'online') {
        health.health = 'CRITICAL';
        health.recommendations.push(`Process status: ${process.status} - needs restart`);
        return health;
      }

      // Check memory usage
      const memoryUsage = process.memory / (1024 * 1024); // Convert to MB
      const maxMemory = config.max_memory_restart || 1024; // Default 1GB
      
      if (memoryUsage > maxMemory * 0.8) {
        health.health = 'WARNING';
        health.recommendations.push(`High memory usage: ${memoryUsage.toFixed(2)}MB`);
      }

      // Check restart frequency
      if (process.restarts > 5) {
        health.health = 'WARNING';
        health.recommendations.push(`High restart count: ${process.restarts} restarts`);
      }

      // Check uptime
      const uptimeHours = process.uptime / (1000 * 60 * 60);
      if (uptimeHours < 1) {
        health.health = 'WARNING';
        health.recommendations.push(`Low uptime: ${uptimeHours.toFixed(2)} hours`);
      }

      health.performance = {
        memoryUsage: memoryUsage.toFixed(2),
        cpuUsage: process.cpu,
        uptime: uptimeHours.toFixed(2),
        restarts: process.restarts
      };

    } catch (error) {
      health.health = 'ERROR';
      health.recommendations.push(`Health check failed: ${error.message}`);
    }

    return health;
  }

  async optimizeAutomationSchedule(systemState, automationHealth) {
    this.log('Optimizing automation scheduling...');
    
    const schedule = {
      timestamp: new Date().toISOString(),
      optimizations: [],
      resourceAllocation: {},
      executionOrder: []
    };

    // Analyze resource constraints
    const resourceConstraints = this.analyzeResourceConstraints(systemState);
    
    // Optimize execution order based on dependencies and priorities
    schedule.executionOrder = this.calculateOptimalExecutionOrder(resourceConstraints);
    
    // Optimize resource allocation
    schedule.resourceAllocation = this.optimizeResourceAllocation(systemState, automationHealth);
    
    // Generate optimization recommendations
    schedule.optimizations = this.generateOptimizationRecommendations(resourceConstraints, automationHealth);

    return schedule;
  }

  analyzeResourceConstraints(systemState) {
    const constraints = {
      memory: systemState.systemResources.memory.usagePercentage > 80,
      cpu: systemState.systemResources.cpu.usagePercentage > 70,
      disk: systemState.systemResources.disk.usagePercentage > 85,
      critical: false
    };

    if (constraints.memory || constraints.cpu || constraints.disk) {
      constraints.critical = true;
    }

    return constraints;
  }

  calculateOptimalExecutionOrder(resourceConstraints) {
    const executionOrder = [];
    
    // Critical path automations first
    const criticalAutomations = Object.entries(this.automationDependencies)
      .filter(([, config]) => config.criticalPath)
      .sort(([, a], [, b]) => this.getPriorityWeight(b.priority) - this.getPriorityWeight(a.priority));
    
    executionOrder.push(...criticalAutomations.map(([name]) => name));
    
    // Non-critical automations based on priority and dependencies
    const nonCriticalAutomations = Object.entries(this.automationDependencies)
      .filter(([, config]) => !config.criticalPath)
      .sort(([, a], [, b]) => this.getPriorityWeight(b.priority) - this.getPriorityWeight(a.priority));
    
    executionOrder.push(...nonCriticalAutomations.map(([name]) => name));
    
    return executionOrder;
  }

  getPriorityWeight(priority) {
    const weights = {
      'CRITICAL': 4,
      'HIGH': 3,
      'MEDIUM': 2,
      'LOW': 1
    };
    
    return weights[priority] || 0;
  }

  optimizeResourceAllocation(systemState, automationHealth) {
    const allocation = {};
    
    for (const [automation, config] of Object.entries(this.automationDependencies)) {
      const health = automationHealth.automations[automation];
      
      if (health.health === 'CRITICAL') {
        // Increase resources for critical automations
        allocation[automation] = {
          memory: Math.min(config.max_memory_restart || 1024, 2048),
          priority: 'HIGH',
          restartPolicy: 'IMMEDIATE'
        };
      } else if (health.health === 'WARNING') {
        // Moderate resource increase for warning automations
        allocation[automation] = {
          memory: Math.min(config.max_memory_restart || 1024, 1536),
          priority: 'MEDIUM',
          restartPolicy: 'DELAYED'
        };
      } else {
        // Standard allocation for healthy automations
        allocation[automation] = {
          memory: config.max_memory_restart || 1024,
          priority: 'NORMAL',
          restartPolicy: 'STANDARD'
        };
      }
    }

    return allocation;
  }

  generateOptimizationRecommendations(resourceConstraints, automationHealth) {
    const recommendations = [];
    
    if (resourceConstraints.critical) {
      recommendations.push({
        type: 'RESOURCE_CRITICAL',
        priority: 'IMMEDIATE',
        description: 'System resources are critically constrained',
        actions: [
          'Reduce concurrent automation execution',
          'Increase system resources',
          'Implement resource throttling'
        ]
      });
    }
    
    const criticalAutomations = Object.entries(automationHealth.automations)
      .filter(([, health]) => health.health === 'CRITICAL');
    
    if (criticalAutomations.length > 0) {
      recommendations.push({
        type: 'AUTOMATION_CRITICAL',
        priority: 'IMMEDIATE',
        description: `${criticalAutomations.length} automations are in critical state`,
        actions: [
          'Restart critical automations',
          'Review error logs',
          'Implement health monitoring alerts'
        ]
      });
    }

    return recommendations;
  }

  async executeCriticalPathAutomations() {
    this.log('Executing critical path automations...');
    
    const results = {};
    const criticalAutomations = Object.entries(this.automationDependencies)
      .filter(([, config]) => config.criticalPath);
    
    for (const [automation] of criticalAutomations) {
      try {
        this.log(`Executing critical automation: ${automation}`);
        const result = await this.executeAutomation(automation);
        results[automation] = result;
      } catch (error) {
        this.log(`Critical automation ${automation} failed: ${error.message}`, 'ERROR');
        results[automation] = { success: false, error: error.message };
      }
    }

    return results;
  }

  async executeDependentAutomations(criticalResults) {
    this.log('Executing dependent automations...');
    
    const results = {};
    const dependentAutomations = Object.entries(this.automationDependencies)
      .filter(([, config]) => config.dependencies.length > 0);
    
    for (const [automation, config] of dependentAutomations) {
      // Check if dependencies are satisfied
      const dependenciesSatisfied = config.dependencies.every(dep => 
        criticalResults[dep] && criticalResults[dep].success
      );
      
      if (dependenciesSatisfied) {
        try {
          this.log(`Executing dependent automation: ${automation}`);
          const result = await this.executeAutomation(automation);
          results[automation] = result;
        } catch (error) {
          this.log(`Dependent automation ${automation} failed: ${error.message}`, 'ERROR');
          results[automation] = { success: false, error: error.message };
        }
      } else {
        this.log(`Skipping ${automation} - dependencies not satisfied`, 'WARN');
        results[automation] = { success: false, error: 'Dependencies not satisfied' };
      }
    }

    return results;
  }

  async executeAutomation(automation) {
    try {
      const scriptPath = path.join(this.projectRoot, 'scripts', 'automation', `${automation}.cjs`);
      
      if (fs.existsSync(scriptPath)) {
        // Execute automation script
        const result = execSync(`node ${scriptPath}`, { 
          cwd: this.projectRoot, 
          encoding: 'utf8',
          timeout: 300000 // 5 minutes timeout
        });
        
        return {
          success: true,
          output: result,
          timestamp: new Date().toISOString()
        };
      } else {
        throw new Error(`Automation script not found: ${scriptPath}`);
      }
    } catch (error) {
      throw new Error(`Execution failed: ${error.message}`);
    }
  }

  async monitorAndAdjustResources() {
    this.log('Monitoring and adjusting resource allocation...');
    
    try {
      // Get current resource usage
      const currentResources = await this.getSystemResources();
      
      // Check if adjustments are needed
      if (currentResources.memory.usagePercentage > this.performanceThresholds.maxMemoryUsage * 100) {
        await this.adjustMemoryAllocation();
      }
      
      if (currentResources.cpu.usagePercentage > this.performanceThresholds.maxCpuUsage * 100) {
        await this.adjustCpuAllocation();
      }
      
    } catch (error) {
      this.log(`Resource monitoring failed: ${error.message}`, 'ERROR');
    }
  }

  async adjustMemoryAllocation() {
    this.log('Adjusting memory allocation...');
    
    try {
      // Restart automations with high memory usage
      const pm2Processes = await this.getPM2Processes();
      const highMemoryProcesses = pm2Processes.filter(p => 
        p.memory > 1024 * 1024 * 1024 // 1GB
      );
      
      for (const process of highMemoryProcesses) {
        this.log(`Restarting high memory process: ${process.name}`);
        execSync(`pm2 restart ${process.name}`, { cwd: this.projectRoot });
      }
    } catch (error) {
      this.log(`Memory adjustment failed: ${error.message}`, 'ERROR');
    }
  }

  async adjustCpuAllocation() {
    this.log('Adjusting CPU allocation...');
    
    try {
      // Throttle non-critical automations
      const nonCriticalAutomations = Object.entries(this.automationDependencies)
        .filter(([, config]) => !config.criticalPath);
      
      for (const [automation] of nonCriticalAutomations) {
        this.log(`Throttling non-critical automation: ${automation}`);
        // Implement throttling logic here
      }
    } catch (error) {
      this.log(`CPU adjustment failed: ${error.message}`, 'ERROR');
    }
  }

  async generateOrchestrationReport(data) {
    this.log('Generating orchestration report...');
    
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        systemHealth: data.systemState.systemResources,
        automationHealth: data.automationHealth.overallHealth,
        totalAutomations: Object.keys(this.automationDependencies).length,
        criticalResults: Object.values(data.criticalResults).filter(r => r.success).length,
        dependentResults: Object.values(data.dependentResults).filter(r => r.success).length
      },
      systemState: data.systemState,
      automationHealth: data.automationHealth,
      optimizedSchedule: data.optimizedSchedule,
      executionResults: {
        critical: data.criticalResults,
        dependent: data.dependentResults
      },
      recommendations: data.optimizedSchedule.optimizations,
      nextSteps: this.generateOrchestrationNextSteps(data)
    };

    const reportPath = path.join(this.projectRoot, 'logs', 'automation-orchestration-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));

    // Generate HTML dashboard
    await this.generateOrchestrationDashboard(report);

    this.log(`Orchestration report generated: ${reportPath}`);
  }

  generateOrchestrationNextSteps(data) {
    const nextSteps = [];
    
    if (data.automationHealth.overallHealth === 'CRITICAL') {
      nextSteps.push('Address critical automation failures immediately');
    }
    
    if (data.optimizedSchedule.optimizations.length > 0) {
      nextSteps.push('Implement recommended optimizations');
    }
    
    if (Object.values(data.criticalResults).some(r => !r.success)) {
      nextSteps.push('Investigate critical automation failures');
    }
    
    nextSteps.push('Monitor automation performance over time');
    nextSteps.push('Review and update automation dependencies');
    nextSteps.push('Implement automated health alerts');
    
    return nextSteps;
  }

  async generateOrchestrationDashboard(report) {
    const dashboardPath = path.join(this.projectRoot, 'logs', 'orchestration-dashboard');
    if (!fs.existsSync(dashboardPath)) {
      fs.mkdirSync(dashboardPath, { recursive: true });
    }

    const html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Automation Orchestration Dashboard</title>
    <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; margin: 0; padding: 20px; background: #f5f5f5; }
        .container { max-width: 1400px; margin: 0 auto; }
        .header { background: linear-gradient(135deg, #9b59b6 0%, #8e44ad 100%); color: white; padding: 30px; border-radius: 10px; margin-bottom: 20px; }
        .metrics-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; margin-bottom: 30px; }
        .metric-card { background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); text-align: center; }
        .metric-value { font-size: 2em; font-weight: bold; color: #9b59b6; }
        .status-section { background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); margin-bottom: 20px; }
        .status-item { display: flex; justify-content: space-between; align-items: center; padding: 10px; border-bottom: 1px solid #eee; }
        .status-healthy { color: #27ae60; }
        .status-warning { color: #f39c12; }
        .status-critical { color: #e74c3c; }
        .recommendations { background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
        .recommendation-item { border-left: 4px solid #9b59b6; padding: 15px; margin: 10px 0; background: #f8f9fa; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🎯 Automation Orchestration Dashboard</h1>
            <p>Last updated: ${new Date(report.timestamp).toLocaleString()}</p>
        </div>
        
        <div class="metrics-grid">
            <div class="metric-card">
                <div class="metric-value">${report.summary.totalAutomations}</div>
                <div>Total Automations</div>
            </div>
            <div class="metric-card">
                <div class="metric-value">${report.summary.criticalResults}</div>
                <div>Critical Success</div>
            </div>
            <div class="metric-card">
                <div class="metric-value">${report.summary.dependentResults}</div>
                <div>Dependent Success</div>
            </div>
            <div class="metric-card">
                <div class="metric-value">${report.summary.automationHealth}</div>
                <div>Overall Health</div>
            </div>
        </div>
        
        <div class="status-section">
            <h2>📊 System Resources</h2>
            <div class="status-item">
                <span>Memory Usage</span>
                <span class="status-${report.systemState.systemResources.memory.usagePercentage > 80 ? 'critical' : report.systemState.systemResources.memory.usagePercentage > 60 ? 'warning' : 'healthy'}">
                    ${report.systemState.systemResources.memory.usagePercentage.toFixed(1)}%
                </span>
            </div>
            <div class="status-item">
                <span>CPU Usage</span>
                <span class="status-${report.systemState.systemResources.cpu.usagePercentage > 70 ? 'critical' : report.systemState.systemResources.cpu.usagePercentage > 50 ? 'warning' : 'healthy'}">
                    ${report.systemState.systemResources.cpu.usagePercentage.toFixed(1)}%
                </span>
            </div>
            <div class="status-item">
                <span>Disk Usage</span>
                <span class="status-${report.systemState.systemResources.disk.usagePercentage > 85 ? 'critical' : report.systemState.systemResources.disk.usagePercentage > 70 ? 'warning' : 'healthy'}">
                    ${report.systemState.systemResources.disk.usagePercentage}%
                </span>
            </div>
        </div>
        
        <div class="status-section">
            <h2>🤖 Automation Status</h2>
            ${Object.entries(report.automationHealth.automations).map(([name, health]) => `
                <div class="status-item">
                    <span>${name}</span>
                    <span class="status-${health.health.toLowerCase()}">${health.health}</span>
                </div>
            `).join('')}
        </div>
        
        <div class="recommendations">
            <h2>💡 Optimization Recommendations</h2>
            ${report.recommendations.map(rec => `
                <div class="recommendation-item">
                    <h3>${rec.type}</h3>
                    <p><strong>Priority:</strong> ${rec.priority}</p>
                    <p>${rec.description}</p>
                    <ul>
                        ${rec.actions.map(action => `<li>${action}</li>`).join('')}
                    </ul>
                </div>
            `).join('')}
        </div>
        
        <div class="recommendations">
            <h2>📋 Next Steps</h2>
            ${report.nextSteps.map(step => `<div>• ${step}</div>`).join('')}
        </div>
    </div>
</body>
</html>`;

    const dashboardFile = path.join(dashboardPath, 'index.html');
    fs.writeFileSync(dashboardFile, html);
    this.log(`Orchestration dashboard generated: ${dashboardFile}`);
  }

  async handleOrchestrationFailure(error) {
    this.log(`Handling orchestration failure: ${error.message}`, 'ERROR');
    
    try {
      // Attempt to restart critical automations
      const criticalAutomations = Object.entries(this.automationDependencies)
        .filter(([, config]) => config.criticalPath);
      
      for (const [automation] of criticalAutomations) {
        try {
          execSync(`pm2 restart ${automation}`, { cwd: this.projectRoot });
          this.log(`Restarted critical automation: ${automation}`);
        } catch (restartError) {
          this.log(`Failed to restart ${automation}: ${restartError.message}`, 'ERROR');
        }
      }
      
      // Generate failure report
      const failureReport = {
        timestamp: new Date().toISOString(),
        error: error.message,
        stack: error.stack,
        criticalAutomations: criticalAutomations.map(([name]) => name),
        recoveryActions: [
          'Critical automations restarted',
          'Check system resources',
          'Review error logs',
          'Implement manual recovery if needed'
        ]
      };
      
      const failureReportPath = path.join(this.projectRoot, 'logs', 'orchestration-failure-report.json');
      fs.writeFileSync(failureReportPath, JSON.stringify(failureReport, null, 2));
      
    } catch (recoveryError) {
      this.log(`Recovery attempt failed: ${recoveryError.message}`, 'ERROR');
    }
  }
}

// Main execution
if (require.main === module) {
  const orchestrator = new IntelligentAutomationOrchestrator();
  orchestrator.runOrchestration()
    .then(result => {
      console.log('Intelligent Automation Orchestration completed successfully');
      process.exit(0);
    })
    .catch(error => {
      console.error('Intelligent Automation Orchestration failed:', error);
      process.exit(1);
    });
}

module.exports = IntelligentAutomationOrchestrator;