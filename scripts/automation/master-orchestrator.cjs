#!/usr/bin/env node

/**
 * Master Orchestrator
 * Coordinates all PM2 automations and provides unified management interface
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class MasterOrchestrator {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'logs', 'master-orchestrator.log');
    this.automations = this.loadAutomationConfig();
    this.ensureLogsDirectory();
  }

  ensureLogsDirectory() {
    const logsDir = path.join(this.projectRoot, 'logs');
    if (!fs.existsSync(logsDir)) {
      fs.mkdirSync(logsDir, { recursive: true });
    }
  }

  loadAutomationConfig() {
    return {
      'ai-code-analyzer': {
        script: 'scripts/automation/ai-powered-code-analyzer.cjs',
        priority: 'high',
        dependencies: [],
        enabled: true
      },
      'intelligent-performance-optimizer': {
        script: 'scripts/automation/intelligent-performance-optimizer.cjs',
        priority: 'high',
        dependencies: ['ai-code-analyzer'],
        enabled: true
      },
      'enhanced-repository-manager': {
        script: 'scripts/automation/enhanced-repository-manager.cjs',
        priority: 'medium',
        dependencies: [],
        enabled: true
      },
      'smart-deployment-automation': {
        script: 'scripts/automation/smart-deployment-automation.cjs',
        priority: 'high',
        dependencies: ['intelligent-performance-optimizer'],
        enabled: true
      },
      'intelligent-monitoring-system': {
        script: 'scripts/automation/intelligent-monitoring-system.cjs',
        priority: 'critical',
        dependencies: [],
        enabled: true
      }
    };
  }

  log(message, level = 'info') {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${level.toUpperCase()}] ${message}\n`;
    console.log(logEntry.trim());
    try {
      fs.appendFileSync(this.logFile, logEntry);
    } catch (error) {
      console.error('Failed to write to log file:', error.message);
    }
  }

  async executeCommand(command, options = {}) {
    return new Promise((resolve, reject) => {
      try {
        const result = execSync(command, {
          cwd: this.projectRoot,
          stdio: options.silent ? 'pipe' : 'inherit',
          encoding: 'utf8'
        });
        resolve(result);
      } catch (error) {
        reject(error);
      }
    });
  }

  async getPM2Status() {
    try {
      const result = await this.executeCommand('pm2 list --json', { silent: true });
      return JSON.parse(result);
    } catch (error) {
      this.log(`Failed to get PM2 status: ${error.message}`, 'error');
      return [];
    }
  }

  async startAutomation(automationName) {
    try {
      const automation = this.automations[automationName];
      if (!automation) {
        throw new Error(`Automation ${automationName} not found`);
      }

      if (!automation.enabled) {
        this.log(`Automation ${automationName} is disabled`, 'warning');
        return { success: false, reason: 'disabled' };
      }

      // Check dependencies
      for (const dep of automation.dependencies) {
        const depStatus = await this.getAutomationStatus(dep);
        if (depStatus !== 'online') {
          this.log(`Dependency ${dep} is not online for ${automationName}`, 'warning');
        }
      }

      this.log(`Starting automation: ${automationName}`);
      await this.executeCommand(`pm2 start ${automation.script} --name ${automationName}`);
      
      this.log(`Successfully started automation: ${automationName}`, 'success');
      return { success: true };
    } catch (error) {
      this.log(`Failed to start automation ${automationName}: ${error.message}`, 'error');
      return { success: false, error: error.message };
    }
  }

  async stopAutomation(automationName) {
    try {
      this.log(`Stopping automation: ${automationName}`);
      await this.executeCommand(`pm2 stop ${automationName}`);
      
      this.log(`Successfully stopped automation: ${automationName}`, 'success');
      return { success: true };
    } catch (error) {
      this.log(`Failed to stop automation ${automationName}: ${error.message}`, 'error');
      return { success: false, error: error.message };
    }
  }

  async restartAutomation(automationName) {
    try {
      this.log(`Restarting automation: ${automationName}`);
      await this.executeCommand(`pm2 restart ${automationName}`);
      
      this.log(`Successfully restarted automation: ${automationName}`, 'success');
      return { success: true };
    } catch (error) {
      this.log(`Failed to restart automation ${automationName}: ${error.message}`, 'error');
      return { success: false, error: error.message };
    }
  }

  async getAutomationStatus(automationName) {
    try {
      const status = await this.getPM2Status();
      const automation = status.find(app => app.name === automationName);
      return automation ? automation.pm2_env.status : 'not_found';
    } catch (error) {
      this.log(`Failed to get status for automation ${automationName}: ${error.message}`, 'error');
      return 'error';
    }
  }

  async startAllAutomations() {
    this.log('Starting all automations...');
    
    const results = {};
    const sortedAutomations = this.getSortedAutomations();
    
    for (const automationName of sortedAutomations) {
      const result = await this.startAutomation(automationName);
      results[automationName] = result;
      
      // Wait a bit between starts to avoid overwhelming the system
      await this.sleep(2000);
    }
    
    const successCount = Object.values(results).filter(r => r.success).length;
    const totalCount = Object.keys(results).length;
    
    this.log(`Started ${successCount}/${totalCount} automations successfully`);
    return results;
  }

  async stopAllAutomations() {
    this.log('Stopping all automations...');
    
    const results = {};
    
    for (const automationName of Object.keys(this.automations)) {
      const result = await this.stopAutomation(automationName);
      results[automationName] = result;
    }
    
    const successCount = Object.values(results).filter(r => r.success).length;
    const totalCount = Object.keys(results).length;
    
    this.log(`Stopped ${successCount}/${totalCount} automations successfully`);
    return results;
  }

  getSortedAutomations() {
    // Sort automations by priority and dependencies
    const sorted = [];
    const visited = new Set();
    
    const visit = (name) => {
      if (visited.has(name)) return;
      visited.add(name);
      
      const automation = this.automations[name];
      if (automation) {
        // Visit dependencies first
        for (const dep of automation.dependencies) {
          visit(dep);
        }
        sorted.push(name);
      }
    };
    
    // Sort by priority first
    const priorityOrder = ['critical', 'high', 'medium', 'low'];
    const byPriority = Object.keys(this.automations).sort((a, b) => {
      const aPriority = priorityOrder.indexOf(this.automations[a].priority);
      const bPriority = priorityOrder.indexOf(this.automations[b].priority);
      return aPriority - bPriority;
    });
    
    for (const name of byPriority) {
      visit(name);
    }
    
    return sorted;
  }

  async generateStatusReport() {
    this.log('Generating status report...');
    
    const pm2Status = await this.getPM2Status();
    const report = {
      timestamp: new Date().toISOString(),
      project: this.projectRoot,
      automations: {},
      summary: {
        total: 0,
        online: 0,
        offline: 0,
        error: 0
      }
    };
    
    for (const automationName of Object.keys(this.automations)) {
      const automation = this.automations[automationName];
      const pm2App = pm2Status.find(app => app.name === automationName);
      
      const status = {
        name: automationName,
        enabled: automation.enabled,
        priority: automation.priority,
        dependencies: automation.dependencies,
        pm2Status: pm2App ? pm2App.pm2_env.status : 'not_found',
        uptime: pm2App ? pm2App.pm2_env.uptime : 0,
        memory: pm2App ? pm2App.monit.memory : 0,
        cpu: pm2App ? pm2App.monit.cpu : 0
      };
      
      report.automations[automationName] = status;
      report.summary.total++;
      
      if (status.pm2Status === 'online') {
        report.summary.online++;
      } else if (status.pm2Status === 'stopped') {
        report.summary.offline++;
      } else {
        report.summary.error++;
      }
    }
    
    const reportPath = path.join(this.projectRoot, 'logs', 'master-orchestrator-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    this.log(`Status report generated: ${reportPath}`);
    return report;
  }

  async healthCheck() {
    this.log('Performing health check...');
    
    const health = {
      timestamp: new Date().toISOString(),
      overall: 'healthy',
      issues: [],
      recommendations: []
    };
    
    const pm2Status = await this.getPM2Status();
    
    for (const automationName of Object.keys(this.automations)) {
      const automation = this.automations[automationName];
      const pm2App = pm2Status.find(app => app.name === automationName);
      
      if (automation.enabled && (!pm2App || pm2App.pm2_env.status !== 'online')) {
        health.issues.push({
          type: 'automation_offline',
          automation: automationName,
          severity: 'high',
          message: `Automation ${automationName} is not running`
        });
        health.overall = 'unhealthy';
      }
      
      if (pm2App && pm2App.pm2_env.status === 'online') {
        // Check memory usage
        if (pm2App.monit.memory > 1000 * 1024 * 1024) { // 1GB
          health.issues.push({
            type: 'high_memory_usage',
            automation: automationName,
            severity: 'medium',
            message: `Automation ${automationName} is using high memory: ${Math.round(pm2App.monit.memory / 1024 / 1024)}MB`
          });
        }
        
        // Check CPU usage
        if (pm2App.monit.cpu > 80) {
          health.issues.push({
            type: 'high_cpu_usage',
            automation: automationName,
            severity: 'medium',
            message: `Automation ${automationName} is using high CPU: ${pm2App.monit.cpu}%`
          });
        }
      }
    }
    
    // Generate recommendations
    if (health.overall === 'unhealthy') {
      health.recommendations.push('Restart failed automations');
      health.recommendations.push('Check logs for error details');
    }
    
    if (health.issues.some(issue => issue.type === 'high_memory_usage')) {
      health.recommendations.push('Consider optimizing memory usage or increasing memory limits');
    }
    
    if (health.issues.some(issue => issue.type === 'high_cpu_usage')) {
      health.recommendations.push('Consider optimizing CPU usage or scaling resources');
    }
    
    this.log(`Health check completed. Overall status: ${health.overall}`);
    return health;
  }

  async sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async run() {
    try {
      this.log('Master Orchestrator started');
      
      // Generate status report
      const statusReport = await this.generateStatusReport();
      
      // Perform health check
      const healthCheck = await this.healthCheck();
      
      // Log summary
      this.log(`Status: ${statusReport.summary.online}/${statusReport.summary.total} automations online`);
      this.log(`Health: ${healthCheck.overall}`);
      
      if (healthCheck.issues.length > 0) {
        this.log(`Issues found: ${healthCheck.issues.length}`);
        for (const issue of healthCheck.issues) {
          this.log(`- ${issue.message}`, 'warning');
        }
      }
      
      this.log('Master Orchestrator completed successfully');
      return { statusReport, healthCheck };
      
    } catch (error) {
      this.log(`Master Orchestrator failed: ${error.message}`, 'error');
      throw error;
    }
  }
}

// Command line interface
if (require.main === module) {
  const orchestrator = new MasterOrchestrator();
  const command = process.argv[2];
  
  switch (command) {
    case 'start':
      const automationName = process.argv[3];
      if (automationName) {
        orchestrator.startAutomation(automationName).then(console.log);
      } else {
        orchestrator.startAllAutomations().then(console.log);
      }
      break;
    case 'stop':
      const stopName = process.argv[3];
      if (stopName) {
        orchestrator.stopAutomation(stopName).then(console.log);
      } else {
        orchestrator.stopAllAutomations().then(console.log);
      }
      break;
    case 'restart':
      const restartName = process.argv[3];
      if (restartName) {
        orchestrator.restartAutomation(restartName).then(console.log);
      } else {
        orchestrator.stopAllAutomations().then(() => {
          return orchestrator.startAllAutomations();
        }).then(console.log);
      }
      break;
    case 'status':
      orchestrator.generateStatusReport().then(console.log);
      break;
    case 'health':
      orchestrator.healthCheck().then(console.log);
      break;
    default:
      orchestrator.run().catch(console.error);
  }
}

module.exports = MasterOrchestrator;