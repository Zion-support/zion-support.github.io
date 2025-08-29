#!/usr/bin/env node

/**
 * Master Automation Controller
 * Orchestrates all intelligent PM2 automations with unified management
 * 
 * Features:
 * - Centralized automation management
 * - Health monitoring and recovery
 * - Performance analytics dashboard
 * - Unified configuration management
 * - Automation orchestration
 * - Real-time status monitoring
 * - Intelligent resource allocation
 */

const fs = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');
const http = require('http');

class MasterAutomationController {
  constructor() {
    this.config = {
      projectRoot: process.cwd(),
      automations: {
        'ai-code-quality': {
          script: './scripts/automation/ai-code-quality-automation.cjs',
          status: 'stopped',
          health: 'unknown',
          lastRun: null,
          uptime: 0,
          memory: 0,
          cpu: 0,
          restarts: 0,
          errors: 0
        },
        'intelligent-performance': {
          script: './scripts/automation/intelligent-performance-automation.cjs',
          status: 'stopped',
          health: 'unknown',
          lastRun: null,
          uptime: 0,
          memory: 0,
          cpu: 0,
          restarts: 0,
          errors: 0
        },
        'smart-dependency': {
          script: './scripts/automation/smart-dependency-automation.cjs',
          status: 'stopped',
          health: 'unknown',
          lastRun: null,
          uptime: 0,
          memory: 0,
          cpu: 0,
          restarts: 0,
          errors: 0
        }
      },
      monitoring: {
        healthCheckInterval: 30000,    // 30 seconds
        performanceCheckInterval: 60000, // 1 minute
        autoRecoveryEnabled: true,
        maxRestarts: 5,
        memoryThreshold: 0.8,          // 80% memory usage
        cpuThreshold: 0.9              // 90% CPU usage
      },
      logFile: 'logs/master-automation-controller.log',
      reportDir: 'master-automation-reports',
      dashboardPort: 3001
    };
    
    this.isRunning = false;
    this.healthCheckInterval = null;
    this.performanceCheckInterval = null;
    this.dashboardServer = null;
    
    this.setupLogging();
    this.ensureDirectories();
    this.initialize();
  }

  setupLogging() {
    const logDir = path.dirname(this.config.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
    
    this.log = (message, level = 'INFO') => {
      const timestamp = new Date().toISOString();
      const logMessage = `[${timestamp}] [${level}] ${message}`;
      console.log(logMessage);
      
      try {
        fs.appendFileSync(this.config.logFile, logMessage + '\n');
      } catch (error) {
        console.error('Failed to write to log file:', error.message);
      }
    };
  }

  ensureDirectories() {
    if (!fs.existsSync(this.config.reportDir)) {
      fs.mkdirSync(this.config.reportDir, { recursive: true });
    }
  }

  async initialize() {
    this.log('🚀 Initializing Master Automation Controller...');
    
    try {
      // Check PM2 status
      await this.checkPM2Status();
      
      // Start dashboard server
      await this.startDashboardServer();
      
      // Start monitoring
      await this.startMonitoring();
      
      this.log('✅ Master Automation Controller initialized successfully');
      
    } catch (error) {
      this.log(`❌ Initialization failed: ${error.message}`, 'ERROR');
      throw error;
    }
  }

  async checkPM2Status() {
    this.log('🔍 Checking PM2 status...');
    
    try {
      const output = execSync('pm2 list --json', { 
        cwd: this.config.projectRoot,
        encoding: 'utf8',
        stdio: 'pipe'
      });
      
      const pm2List = JSON.parse(output);
      
      // Update automation statuses
      for (const process of pm2List) {
        if (this.config.automations[process.name]) {
          this.config.automations[process.name].status = process.pm2_env.status;
          this.config.automations[process.name].uptime = process.pm2_env.pm_uptime;
          this.config.automations[process.name].restarts = process.pm2_env.restart_time;
          this.config.automations[process.name].memory = process.monit.memory;
          this.config.automations[process.name].cpu = process.monit.cpu;
          this.config.automations[process.name].lastRun = new Date(process.pm2_env.pm_uptime);
        }
      }
      
      this.log('✅ PM2 status checked successfully');
      
    } catch (error) {
      this.log(`❌ PM2 status check failed: ${error.message}`, 'ERROR');
    }
  }

  async startDashboardServer() {
    this.log('🌐 Starting automation dashboard server...');
    
    try {
      this.dashboardServer = http.createServer((req, res) => {
        this.handleDashboardRequest(req, res);
      });
      
      this.dashboardServer.listen(this.config.dashboard.port, () => {
        this.log(`✅ Dashboard server started on port ${this.config.dashboard.port}`);
      });
      
    } catch (error) {
      this.log(`❌ Dashboard server failed to start: ${error.message}`, 'ERROR');
    }
  }

  handleDashboardRequest(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
    
    if (req.url === '/api/status') {
      res.end(JSON.stringify({
        timestamp: new Date().toISOString(),
        automations: this.config.automations,
        system: {
          uptime: process.uptime(),
          memory: process.memoryUsage(),
          platform: process.platform,
          nodeVersion: process.version
        }
      }));
    } else if (req.url === '/api/health') {
      res.end(JSON.stringify(this.getSystemHealth()));
    } else if (req.url === '/api/automations') {
      res.end(JSON.stringify(this.config.automations));
    } else if (req.url === '/api/start' && req.method === 'POST') {
      this.handleStartRequest(req, res);
    } else if (req.url === '/api/stop' && req.method === 'POST') {
      this.handleStopRequest(req, res);
    } else if (req.url === '/api/restart' && req.method === 'POST') {
      this.handleRestartRequest(req, res);
    } else {
      res.statusCode = 404;
      res.end(JSON.stringify({ error: 'Endpoint not found' }));
    }
  }

  async handleStartRequest(req, res) {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    
    req.on('end', async () => {
      try {
        const { automation } = JSON.parse(body);
        
        if (automation === 'all') {
          await this.startAllAutomations();
          res.end(JSON.stringify({ message: 'All automations started' }));
        } else if (this.config.automations[automation]) {
          await this.startAutomation(automation);
          res.end(JSON.stringify({ message: `${automation} started` }));
        } else {
          res.statusCode = 400;
          res.end(JSON.stringify({ error: 'Invalid automation name' }));
        }
      } catch (error) {
        res.statusCode = 500;
        res.end(JSON.stringify({ error: error.message }));
      }
    });
  }

  async handleStopRequest(req, res) {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    
    req.on('end', async () => {
      try {
        const { automation } = JSON.parse(body);
        
        if (automation === 'all') {
          await this.stopAllAutomations();
          res.end(JSON.stringify({ message: 'All automations stopped' }));
        } else if (this.config.automations[automation]) {
          await this.stopAutomation(automation);
          res.end(JSON.stringify({ message: `${automation} stopped` }));
        } else {
          res.statusCode = 400;
          res.end(JSON.stringify({ error: 'Invalid automation name' }));
        }
      } catch (error) {
        res.statusCode = 500;
        res.end(JSON.stringify({ error: error.message }));
      }
    });
  }

  async handleRestartRequest(req, res) {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    
    req.on('end', async () => {
      try {
        const { automation } = JSON.parse(body);
        
        if (automation === 'all') {
          await this.restartAllAutomations();
          res.end(JSON.stringify({ message: 'All automations restarted' }));
        } else if (this.config.automations[automation]) {
          await this.restartAutomation(automation);
          res.end(JSON.stringify({ message: `${automation} restarted` }));
        } else {
          res.statusCode = 400;
          res.end(JSON.stringify({ error: 'Invalid automation name' }));
        }
      } catch (error) {
        res.statusCode = 500;
        res.end(JSON.stringify({ error: error.message }));
      }
    });
  }

  async startMonitoring() {
    this.log('📊 Starting monitoring systems...');
    
    // Health check monitoring
    this.healthCheckInterval = setInterval(async () => {
      await this.performHealthCheck();
    }, this.config.monitoring.healthCheckInterval);
    
    // Performance monitoring
    this.performanceCheckInterval = setInterval(async () => {
      await this.performPerformanceCheck();
    }, this.config.monitoring.performanceCheckInterval);
    
    this.log('✅ Monitoring systems started');
  }

  async performHealthCheck() {
    try {
      // Check each automation's health
      for (const [name, automation] of Object.entries(this.config.automations)) {
        const health = await this.checkAutomationHealth(name);
        this.config.automations[name].health = health;
        
        // Auto-recovery if enabled
        if (this.config.monitoring.autoRecoveryEnabled && health === 'unhealthy') {
          await this.attemptRecovery(name);
        }
      }
      
      // Generate health report
      this.generateHealthReport();
      
    } catch (error) {
      this.log(`❌ Health check failed: ${error.message}`, 'ERROR');
    }
  }

  async checkAutomationHealth(name) {
    const automation = this.config.automations[name];
    
    if (automation.status !== 'online') {
      return 'stopped';
    }
    
    // Check memory usage
    if (automation.memory > this.config.monitoring.memoryThreshold * 100) {
      return 'unhealthy';
    }
    
    // Check CPU usage
    if (automation.cpu > this.config.monitoring.cpuThreshold * 100) {
      return 'unhealthy';
    }
    
    // Check restart count
    if (automation.restarts > this.config.monitoring.maxRestarts) {
      return 'unhealthy';
    }
    
    return 'healthy';
  }

  async attemptRecovery(name) {
    this.log(`🔄 Attempting recovery for ${name}...`);
    
    try {
      await this.restartAutomation(name);
      this.log(`✅ Recovery successful for ${name}`);
    } catch (error) {
      this.log(`❌ Recovery failed for ${name}: ${error.message}`, 'ERROR');
    }
  }

  async performPerformanceCheck() {
    try {
      // Collect performance metrics
      const metrics = {
        timestamp: new Date().toISOString(),
        automations: {},
        system: {
          memory: process.memoryUsage(),
          cpu: process.cpuUsage(),
          uptime: process.uptime()
        }
      };
      
      for (const [name, automation] of Object.entries(this.config.automations)) {
        metrics.automations[name] = {
          memory: automation.memory,
          cpu: automation.cpu,
          uptime: automation.uptime,
          restarts: automation.restarts
        };
      }
      
      // Save performance metrics
      const metricsPath = path.join(this.config.reportDir, 'performance-metrics.json');
      fs.writeFileSync(metricsPath, JSON.stringify(metrics, null, 2));
      
      // Check for performance issues
      this.checkPerformanceIssues(metrics);
      
    } catch (error) {
      this.log(`❌ Performance check failed: ${error.message}`, 'ERROR');
    }
  }

  checkPerformanceIssues(metrics) {
    const issues = [];
    
    for (const [name, automation] of Object.entries(metrics.automations)) {
      if (automation.memory > 80) {
        issues.push({
          automation: name,
          type: 'high_memory',
          value: automation.memory,
          threshold: 80
        });
      }
      
      if (automation.cpu > 90) {
        issues.push({
          automation: name,
          type: 'high_cpu',
          value: automation.cpu,
          threshold: 90
        });
      }
      
      if (automation.restarts > 5) {
        issues.push({
          automation: name,
          type: 'high_restarts',
          value: automation.restarts,
          threshold: 5
        });
      }
    }
    
    if (issues.length > 0) {
      this.log(`⚠️  Performance issues detected: ${issues.length} issues found`);
      this.generatePerformanceAlert(issues);
    }
  }

  generatePerformanceAlert(issues) {
    const alert = {
      timestamp: new Date().toISOString(),
      type: 'performance_alert',
      issues: issues,
      recommendations: this.generatePerformanceRecommendations(issues)
    };
    
    const alertPath = path.join(this.config.reportDir, `performance-alert-${Date.now()}.json`);
    fs.writeFileSync(alertPath, JSON.stringify(alert, null, 2));
    
    this.log(`⚠️  Performance alert generated: ${alertPath}`);
  }

  generatePerformanceRecommendations(issues) {
    const recommendations = [];
    
    for (const issue of issues) {
      switch (issue.type) {
        case 'high_memory':
          recommendations.push({
            automation: issue.automation,
            issue: 'High memory usage',
            action: 'Consider increasing memory limit or optimizing memory usage',
            priority: 'medium'
          });
          break;
          
        case 'high_cpu':
          recommendations.push({
            automation: issue.automation,
            issue: 'High CPU usage',
            action: 'Check for infinite loops or heavy computations',
            priority: 'high'
          });
          break;
          
        case 'high_restarts':
          recommendations.push({
            automation: issue.automation,
            issue: 'High restart count',
            action: 'Investigate root cause of crashes',
            priority: 'high'
          });
          break;
      }
    }
    
    return recommendations;
  }

  generateHealthReport() {
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        total: Object.keys(this.config.automations).length,
        healthy: Object.values(this.config.automations).filter(a => a.health === 'healthy').length,
        unhealthy: Object.values(this.config.automations).filter(a => a.health === 'unhealthy').length,
        stopped: Object.values(this.config.automations).filter(a => a.health === 'stopped').length
      },
      automations: this.config.automations,
      recommendations: this.generateHealthRecommendations()
    };
    
    const reportPath = path.join(this.config.reportDir, `health-report-${Date.now()}.json`);
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    // Save latest report
    const latestReportPath = path.join(this.config.reportDir, 'latest-health-report.json');
    fs.writeFileSync(latestReportPath, JSON.stringify(report, null, 2));
  }

  generateHealthRecommendations() {
    const recommendations = [];
    
    const unhealthyCount = Object.values(this.config.automations).filter(a => a.health === 'unhealthy').length;
    const stoppedCount = Object.values(this.config.automations).filter(a => a.health === 'stopped').length;
    
    if (unhealthyCount > 0) {
      recommendations.push({
        priority: 'high',
        action: 'Investigate unhealthy automations',
        description: `${unhealthyCount} automation(s) are unhealthy and may need attention`,
        estimatedTime: '1-2 hours'
      });
    }
    
    if (stoppedCount > 0) {
      recommendations.push({
        priority: 'medium',
        action: 'Start stopped automations',
        description: `${stoppedCount} automation(s) are stopped and should be started`,
        estimatedTime: '30 minutes'
      });
    }
    
    return recommendations;
  }

  getSystemHealth() {
    const health = {
      timestamp: new Date().toISOString(),
      status: 'healthy',
      issues: [],
      automations: {}
    };
    
    let hasIssues = false;
    
    for (const [name, automation] of Object.entries(this.config.automations)) {
      health.automations[name] = {
        status: automation.status,
        health: automation.health,
        uptime: automation.uptime,
        memory: automation.memory,
        cpu: automation.cpu
      };
      
      if (automation.health !== 'healthy') {
        hasIssues = true;
        health.issues.push({
          automation: name,
          issue: automation.health,
          details: `Status: ${automation.status}, Memory: ${automation.memory}%, CPU: ${automation.cpu}%`
        });
      }
    }
    
    if (hasIssues) {
      health.status = 'degraded';
    }
    
    return health;
  }

  async startAllAutomations() {
    this.log('🚀 Starting all automations...');
    
    for (const name of Object.keys(this.config.automations)) {
      await this.startAutomation(name);
    }
    
    this.log('✅ All automations started');
  }

  async startAutomation(name) {
    if (!this.config.automations[name]) {
      throw new Error(`Unknown automation: ${name}`);
    }
    
    this.log(`🚀 Starting ${name}...`);
    
    try {
      execSync(`pm2 start ${this.config.automations[name].script} --name ${name}`, {
        cwd: this.config.projectRoot,
        stdio: 'pipe'
      });
      
      this.config.automations[name].status = 'online';
      this.config.automations[name].lastRun = new Date();
      
      this.log(`✅ ${name} started successfully`);
      
    } catch (error) {
      this.log(`❌ Failed to start ${name}: ${error.message}`, 'ERROR');
      throw error;
    }
  }

  async stopAllAutomations() {
    this.log('🛑 Stopping all automations...');
    
    for (const name of Object.keys(this.config.automations)) {
      await this.stopAutomation(name);
    }
    
    this.log('✅ All automations stopped');
  }

  async stopAutomation(name) {
    if (!this.config.automations[name]) {
      throw new Error(`Unknown automation: ${name}`);
    }
    
    this.log(`🛑 Stopping ${name}...`);
    
    try {
      execSync(`pm2 stop ${name}`, {
        cwd: this.config.projectRoot,
        stdio: 'pipe'
      });
      
      this.config.automations[name].status = 'stopped';
      
      this.log(`✅ ${name} stopped successfully`);
      
    } catch (error) {
      this.log(`❌ Failed to stop ${name}: ${error.message}`, 'ERROR');
      throw error;
    }
  }

  async restartAllAutomations() {
    this.log('🔄 Restarting all automations...');
    
    for (const name of Object.keys(this.config.automations)) {
      await this.restartAutomation(name);
    }
    
    this.log('✅ All automations restarted');
  }

  async restartAutomation(name) {
    if (!this.config.automations[name]) {
      throw new Error(`Unknown automation: ${name}`);
    }
    
    this.log(`🔄 Restarting ${name}...`);
    
    try {
      execSync(`pm2 restart ${name}`, {
        cwd: this.config.projectRoot,
        stdio: 'pipe'
      });
      
      this.config.automations[name].status = 'online';
      this.config.automations[name].lastRun = new Date();
      
      this.log(`✅ ${name} restarted successfully`);
      
    } catch (error) {
      this.log(`❌ Failed to restart ${name}: ${error.message}`, 'ERROR');
      throw error;
    }
  }

  async start() {
    this.log('🚀 Starting Master Automation Controller...');
    
    this.isRunning = true;
    
    // Start all automations
    await this.startAllAutomations();
    
    this.log('✅ Master Automation Controller is running');
    this.log(`🌐 Dashboard available at http://localhost:${this.config.dashboard.port}`);
    
    // Keep the process alive
    process.on('SIGINT', async () => {
      await this.shutdown();
    });
    
    process.on('SIGTERM', async () => {
      await this.shutdown();
    });
  }

  async shutdown() {
    this.log('🛑 Shutting down Master Automation Controller...');
    
    this.isRunning = false;
    
    // Clear intervals
    if (this.healthCheckInterval) {
      clearInterval(this.healthCheckInterval);
    }
    
    if (this.performanceCheckInterval) {
      clearInterval(this.performanceCheckInterval);
    }
    
    // Close dashboard server
    if (this.dashboardServer) {
      this.dashboardServer.close();
    }
    
    // Stop all automations
    await this.stopAllAutomations();
    
    this.log('✅ Master Automation Controller shut down successfully');
    process.exit(0);
  }
}

// Start the controller if run directly
if (require.main === module) {
  const controller = new MasterAutomationController();
  controller.start().catch(console.error);
}

module.exports = MasterAutomationController;