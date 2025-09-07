#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');

class EnhancedAutomationManager {
  constructor() {
    this.automationProcesses = new Map();
    this.healthMetrics = new Map();
    this.performanceHistory = [];
    this.logFile = path.join(__dirname, 'logs', 'enhanced-automation-manager.log');
    this.ensureLogDirectory();
    
    this.loadAutomationProcesses();
    this.initializeHealthMonitoring();
  }

  ensureLogDirectory() {
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
  }

  log(message, level = 'info') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level.toUpperCase()}] ${message}\n`;
    console.log(`[${level.toUpperCase()}] ${message}`);
    fs.appendFileSync(this.logFile, logMessage);
  }

  loadAutomationProcesses() {
    // Define all automation processes
    const processes = [
      {
        name: 'dev-intelligence-core',
        description: 'Core Development Intelligence System',
        priority: 'critical',
        healthCheck: 'intelligent-orchestrator',
        restartStrategy: 'immediate'
      },
      {
        name: 'code-quality-intelligence',
        description: 'Advanced Code Quality Monitor',
        priority: 'high',
        healthCheck: 'enhanced-code-quality-monitor',
        restartStrategy: 'delayed'
      },
      {
        name: 'smart-lint-automation',
        description: 'Intelligent Lint Automation',
        priority: 'high',
        healthCheck: 'smart-lint-automation',
        restartStrategy: 'delayed'
      },
      {
        name: 'performance-intelligence',
        description: 'Performance Intelligence System',
        priority: 'high',
        healthCheck: 'performance-intelligence',
        restartStrategy: 'delayed'
      },
      {
        name: 'security-intelligence',
        description: 'Security Intelligence Monitor',
        priority: 'critical',
        healthCheck: 'security-intelligence',
        restartStrategy: 'immediate'
      },
      {
        name: 'seo-intelligence',
        description: 'SEO Intelligence Optimizer',
        priority: 'medium',
        healthCheck: 'seo-intelligence',
        restartStrategy: 'delayed'
      },
      {
        name: 'test-intelligence',
        description: 'Test Intelligence Generator',
        priority: 'medium',
        healthCheck: 'test-intelligence',
        restartStrategy: 'delayed'
      },
      {
        name: 'dependency-intelligence',
        description: 'Dependency Intelligence Manager',
        priority: 'medium',
        healthCheck: 'dependency-intelligence',
        restartStrategy: 'delayed'
      },
      {
        name: 'build-intelligence',
        description: 'Build Intelligence Monitor',
        priority: 'high',
        healthCheck: 'build-intelligence',
        restartStrategy: 'delayed'
      },
      {
        name: 'content-intelligence',
        description: 'Content Intelligence Generator',
        priority: 'low',
        healthCheck: 'content-intelligence',
        restartStrategy: 'delayed'
      },
      {
        name: 'analytics-intelligence',
        description: 'Analytics Intelligence System',
        priority: 'low',
        healthCheck: 'analytics-intelligence',
        restartStrategy: 'delayed'
      },
      {
        name: 'health-intelligence',
        description: 'Health Intelligence Monitor',
        priority: 'critical',
        healthCheck: 'health-intelligence',
        restartStrategy: 'immediate'
      }
    ];

    for (const process of processes) {
      this.automationProcesses.set(process.name, {
        ...process,
        status: 'unknown',
        lastHealthCheck: null,
        restartCount: 0,
        lastRestart: null,
        memoryUsage: 0,
        cpuUsage: 0,
        uptime: 0
      });
    }
  }

  initializeHealthMonitoring() {
    this.log('🔧 Initializing health monitoring system...');
    
    // Start health monitoring
    setInterval(() => {
      this.runHealthChecks();
    }, 30 * 1000); // Every 30 seconds
    
    // Start performance monitoring
    setInterval(() => {
      this.monitorPerformance();
    }, 60 * 1000); // Every minute
  }

  async runHealthChecks() {
    try {
      this.log('🏥 Running health checks...');
      
      for (const [processName, process] of this.automationProcesses) {
        await this.checkProcessHealth(processName, process);
      }
      
      // Generate health report
      this.generateHealthReport();
      
    } catch (error) {
      this.log(`❌ Health checks failed: ${error.message}`, 'error');
    }
  }

  async checkProcessHealth(processName, process) {
    try {
      // Check if process is running
      const isRunning = await this.isProcessRunning(processName);
      
      if (isRunning) {
        process.status = 'healthy';
        process.lastHealthCheck = new Date();
        
        // Get process metrics
        const metrics = await this.getProcessMetrics(processName);
        if (metrics) {
          process.memoryUsage = metrics.memory;
          process.cpuUsage = metrics.cpu;
          process.uptime = metrics.uptime;
        }
        
        this.log(`✅ ${processName} is healthy`);
      } else {
        process.status = 'unhealthy';
        this.log(`⚠️ ${processName} is not running`, 'warn');
        
        // Attempt to restart if needed
        if (process.restartStrategy === 'immediate') {
          await this.restartProcess(processName, process);
        }
      }
      
    } catch (error) {
      this.log(`❌ Health check failed for ${processName}: ${error.message}`, 'error');
      process.status = 'error';
    }
  }

  async isProcessRunning(processName) {
    try {
      const result = execSync(`pm2 jlist`, { encoding: 'utf8' });
      const processes = JSON.parse(result);
      
      return processes.some(proc => 
        proc.name === processName && 
        proc.pm2_env.status === 'online'
      );
    } catch (error) {
      return false;
    }
  }

  async getProcessMetrics(processName) {
    try {
      const result = execSync(`pm2 show ${processName}`, { encoding: 'utf8' });
      
      // Parse PM2 show output
      const memoryMatch = result.match(/memory\s+(\d+)/);
      const cpuMatch = result.match(/cpu\s+(\d+\.?\d*)%/);
      const uptimeMatch = result.match(/uptime\s+(\d+)/);
      
      return {
        memory: memoryMatch ? parseInt(memoryMatch[1]) : 0,
        cpu: cpuMatch ? parseFloat(cpuMatch[1]) : 0,
        uptime: uptimeMatch ? parseInt(uptimeMatch[1]) : 0
      };
    } catch (error) {
      return null;
    }
  }

  async restartProcess(processName, process) {
    try {
      this.log(`🔄 Restarting ${processName}...`);
      
      execSync(`pm2 restart ${processName}`, { stdio: 'inherit' });
      
      process.restartCount++;
      process.lastRestart = new Date();
      process.status = 'restarting';
      
      this.log(`✅ ${processName} restarted successfully`);
      
      // Wait for process to stabilize
      setTimeout(async () => {
        await this.checkProcessHealth(processName, process);
      }, 10000); // Wait 10 seconds
      
    } catch (error) {
      this.log(`❌ Failed to restart ${processName}: ${error.message}`, 'error');
      process.status = 'failed';
    }
  }

  async startAllAutomation() {
    try {
      this.log('🚀 Starting all automation processes...');
      
      // Start using ecosystem config
      execSync('pm2 start ecosystem.config.cjs --only automation', { stdio: 'inherit' });
      
      this.log('✅ All automation processes started');
      
      // Wait for processes to initialize
      setTimeout(() => {
        this.runHealthChecks();
      }, 5000);
      
    } catch (error) {
      this.log(`❌ Failed to start automation: ${error.message}`, 'error');
    }
  }

  async stopAllAutomation() {
    try {
      this.log('🛑 Stopping all automation processes...');
      
      execSync('pm2 stop ecosystem.config.cjs --only automation', { stdio: 'inherit' });
      
      this.log('✅ All automation processes stopped');
      
    } catch (error) {
      this.log(`❌ Failed to stop automation: ${error.message}`, 'error');
    }
  }

  async restartAllAutomation() {
    try {
      this.log('🔄 Restarting all automation processes...');
      
      execSync('pm2 restart ecosystem.config.cjs --only automation', { stdio: 'inherit' });
      
      this.log('✅ All automation processes restarted');
      
      // Wait for processes to stabilize
      setTimeout(() => {
        this.runHealthChecks();
      }, 10000);
      
    } catch (error) {
      this.log(`❌ Failed to restart automation: ${error.message}`, 'error');
    }
  }

  async monitorPerformance() {
    try {
      const performanceData = {
        timestamp: new Date().toISOString(),
        processes: {},
        systemMetrics: await this.getSystemMetrics()
      };
      
      // Collect performance data for each process
      for (const [processName, process] of this.automationProcesses) {
        if (process.status === 'healthy') {
          performanceData.processes[processName] = {
            memory: process.memoryUsage,
            cpu: process.cpuUsage,
            uptime: process.uptime,
            restartCount: process.restartCount
          };
        }
      }
      
      this.performanceHistory.push(performanceData);
      
      // Keep only last 1000 performance records
      if (this.performanceHistory.length > 1000) {
        this.performanceHistory = this.performanceHistory.slice(-1000);
      }
      
      // Check for performance anomalies
      this.detectPerformanceAnomalies(performanceData);
      
    } catch (error) {
      this.log(`❌ Performance monitoring failed: ${error.message}`, 'error');
    }
  }

  async getSystemMetrics() {
    try {
      // Get system memory and CPU usage
      const memoryInfo = execSync('free -m', { encoding: 'utf8' });
      const cpuInfo = execSync('top -bn1 | grep "Cpu(s)"', { encoding: 'utf8' });
      
      return {
        memory: this.parseMemoryInfo(memoryInfo),
        cpu: this.parseCpuInfo(cpuInfo),
        timestamp: new Date().toISOString()
      };
    } catch (error) {
      return { memory: 0, cpu: 0, timestamp: new Date().toISOString() };
    }
  }

  parseMemoryInfo(memoryInfo) {
    try {
      const lines = memoryInfo.split('\n');
      const memLine = lines[1];
      const parts = memLine.split(/\s+/);
      const total = parseInt(parts[1]);
      const used = parseInt(parts[2]);
      return Math.round((used / total) * 100);
    } catch (error) {
      return 0;
    }
  }

  parseCpuInfo(cpuInfo) {
    try {
      const match = cpuInfo.match(/(\d+\.?\d*)%/);
      return match ? parseFloat(match[1]) : 0;
    } catch (error) {
      return 0;
    }
  }

  detectPerformanceAnomalies(performanceData) {
    // Check for high memory usage
    for (const [processName, processData] of Object.entries(performanceData.processes)) {
      if (processData.memory > 500) { // > 500MB
        this.log(`⚠️ High memory usage detected for ${processName}: ${processData.memory}MB`, 'warn');
      }
      
      if (processData.cpu > 80) { // > 80%
        this.log(`⚠️ High CPU usage detected for ${processName}: ${processData.cpu}%`, 'warn');
      }
    }
    
    // Check system-level anomalies
    if (performanceData.systemMetrics.memory > 90) {
      this.log(`⚠️ High system memory usage: ${performanceData.systemMetrics.memory}%`, 'warn');
    }
    
    if (performanceData.systemMetrics.cpu > 90) {
      this.log(`⚠️ High system CPU usage: ${performanceData.systemMetrics.cpu}%`, 'warn');
    }
  }

  generateHealthReport() {
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        total: this.automationProcesses.size,
        healthy: Array.from(this.automationProcesses.values()).filter(p => p.status === 'healthy').length,
        unhealthy: Array.from(this.automationProcesses.values()).filter(p => p.status !== 'healthy').length,
        critical: Array.from(this.automationProcesses.values()).filter(p => p.priority === 'critical').length
      },
      processes: Object.fromEntries(this.automationProcesses),
      recommendations: this.generateRecommendations()
    };

    const reportFile = path.join(__dirname, 'logs', 'health-report.json');
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    
    // Generate human-readable report
    this.generateHumanReadableReport(report);
  }

  generateRecommendations() {
    const recommendations = [];
    
    const unhealthyProcesses = Array.from(this.automationProcesses.values())
      .filter(p => p.status !== 'healthy');
    
    if (unhealthyProcesses.length > 0) {
      recommendations.push(`Address ${unhealthyProcesses.length} unhealthy processes`);
    }
    
    const highRestartCount = Array.from(this.automationProcesses.values())
      .filter(p => p.restartCount > 5);
    
    if (highRestartCount.length > 0) {
      recommendations.push(`Investigate processes with high restart counts: ${highRestartCount.map(p => p.name).join(', ')}`);
    }
    
    return recommendations;
  }

  generateHumanReadableReport(report) {
    const humanReport = `
# Enhanced Automation Health Report - ${new Date().toLocaleDateString()}

## System Health Summary
- Total Processes: ${report.summary.total}
- Healthy: ${report.summary.healthy} ✅
- Unhealthy: ${report.summary.unhealthy} ⚠️
- Critical Processes: ${report.summary.critical} 🔴

## Process Status
${Object.entries(report.processes).map(([name, process]) => {
  const statusIcon = process.status === 'healthy' ? '✅' : '❌';
  return `- ${name}: ${statusIcon} ${process.status} (${process.priority} priority)`;
}).join('\n')}

## Recommendations
${report.recommendations.map(rec => `- ${rec}`).join('\n')}

## Performance Metrics
- Last Health Check: ${new Date().toLocaleString()}
- System Memory: ${report.systemMetrics?.memory || 'N/A'}%
- System CPU: ${report.systemMetrics?.cpu || 'N/A'}%
`;

    const humanReportFile = path.join(__dirname, 'logs', 'health-report.md');
    fs.writeFileSync(humanReportFile, humanReport);
  }

  async showStatus() {
    try {
      this.log('📊 Current automation status:');
      
      for (const [processName, process] of this.automationProcesses) {
        const statusIcon = process.status === 'healthy' ? '✅' : '❌';
        this.log(`${statusIcon} ${processName}: ${process.status} (${process.priority} priority)`);
        
        if (process.status === 'healthy') {
          this.log(`   Memory: ${process.memoryUsage}MB, CPU: ${process.cpuUsage}%, Uptime: ${process.uptime}s`);
        }
      }
      
      // Show PM2 status
      execSync('pm2 status', { stdio: 'inherit' });
      
    } catch (error) {
      this.log(`❌ Status check failed: ${error.message}`, 'error');
    }
  }

  async showLogs(processName = null) {
    try {
      if (processName) {
        this.log(`📋 Showing logs for ${processName}:`);
        execSync(`pm2 logs ${processName} --lines 50`, { stdio: 'inherit' });
      } else {
        this.log('📋 Showing all automation logs:');
        execSync('pm2 logs --lines 50', { stdio: 'inherit' });
      }
    } catch (error) {
      this.log(`❌ Log retrieval failed: ${error.message}`, 'error');
    }
  }

  async openMonitoring() {
    try {
      this.log('📊 Opening PM2 monitoring interface...');
      execSync('pm2 monit', { stdio: 'inherit' });
    } catch (error) {
      this.log(`❌ Monitoring interface failed: ${error.message}`, 'error');
    }
  }

  // Main command handler
  async handleCommand(command, args = []) {
    switch (command) {
      case 'start':
        await this.startAllAutomation();
        break;
      case 'stop':
        await this.stopAllAutomation();
        break;
      case 'restart':
        await this.restartAllAutomation();
        break;
      case 'status':
        await this.showStatus();
        break;
      case 'logs':
        await this.showLogs(args[0]);
        break;
      case 'monit':
        await this.openMonitoring();
        break;
      case 'health':
        await this.runHealthChecks();
        break;
      case 'help':
        this.showHelp();
        break;
      default:
        this.log(`❌ Unknown command: ${command}`, 'error');
        this.showHelp();
    }
  }

  showHelp() {
    console.log(`
Enhanced Automation Manager - Available Commands:

  start     - Start all automation processes
  stop      - Stop all automation processes
  restart   - Restart all automation processes
  status    - Show current automation status
  logs      - Show automation logs (optional: process name)
  monit     - Open PM2 monitoring interface
  health    - Run health checks
  help      - Show this help message

Examples:
  node enhanced-automation-manager.js start
  node enhanced-automation-manager.js status
  node enhanced-automation-manager.js logs dev-intelligence-core
`);
  }
}

// Main execution
if (require.main === module) {
  const manager = new EnhancedAutomationManager();
  
  const command = process.argv[2] || 'help';
  const args = process.argv.slice(3);
  
  manager.handleCommand(command, args);
}

module.exports = EnhancedAutomationManager;