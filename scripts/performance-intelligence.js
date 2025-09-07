#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const os = require('os');

class PerformanceIntelligence {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'automation/logs/performance-intelligence.log');
    this.performanceData = new Map();
    this.optimizationHistory = new Map();
    this.thresholds = this.loadThresholds();
    this.ensureLogDirectory();
  }

  ensureLogDirectory() {
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
  }

  loadThresholds() {
    return {
      memory: {
        warning: 70,    // 70% memory usage triggers warning
        critical: 85,   // 85% memory usage triggers critical action
        max: 90         // 90% memory usage triggers emergency action
      },
      cpu: {
        warning: 60,    // 60% CPU usage triggers warning
        critical: 80,   // 80% CPU usage triggers critical action
        max: 90         // 90% CPU usage triggers emergency action
      },
      response: {
        warning: 1000,  // 1 second response time triggers warning
        critical: 3000, // 3 seconds response time triggers critical action
        max: 5000       // 5 seconds response time triggers emergency action
      }
    };
  }

  log(message, level = 'info') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level.toUpperCase()}] ${message}\n`;
    console.log(`[${level.toUpperCase()}] ${message}`);
    fs.appendFileSync(this.logFile, logMessage);
  }

  async executeCommand(command, options = {}) {
    try {
      const result = execSync(command, { 
        encoding: 'utf8', 
        stdio: 'pipe',
        cwd: this.projectRoot,
        ...options 
      });
      return { success: true, output: result };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  async getSystemMetrics() {
    const metrics = {
      timestamp: Date.now(),
      system: {
        platform: os.platform(),
        arch: os.arch(),
        cpus: os.cpus().length,
        memory: {
          total: os.totalmem(),
          free: os.freemem(),
          used: os.totalmem() - os.freemem(),
          percentage: ((os.totalmem() - os.freemem()) / os.totalmem()) * 100
        },
        loadAverage: os.loadavg(),
        uptime: os.uptime()
      }
    };

    // Get PM2 metrics
    const pm2Status = await this.getPM2Status();
    if (pm2Status) {
      metrics.pm2 = pm2Status;
    }

    return metrics;
  }

  async getPM2Status() {
    try {
      const result = await this.executeCommand('pm2 status --json');
      if (result.success) {
        return JSON.parse(result.output);
      }
    } catch (error) {
      this.log(`Failed to get PM2 status: ${error.message}`, 'warn');
    }
    return null;
  }

  async analyzePerformance(metrics) {
    this.log('🔍 Analyzing performance metrics...');
    
    const analysis = {
      timestamp: new Date().toISOString(),
      systemHealth: this.assessSystemHealth(metrics.system),
      processHealth: this.assessProcessHealth(metrics.pm2),
      recommendations: [],
      actions: []
    };

    // System-level analysis
    if (analysis.systemHealth.level === 'critical') {
      analysis.recommendations.push('System resources critically low - immediate action required');
      analysis.actions.push('restart_critical_processes');
    } else if (analysis.systemHealth.level === 'warning') {
      analysis.recommendations.push('System resources showing strain - monitor closely');
    }

    // Process-level analysis
    if (analysis.processHealth.level === 'critical') {
      analysis.recommendations.push('Critical process performance issues detected');
      analysis.actions.push('optimize_processes');
      analysis.actions.push('restart_unhealthy_processes');
    }

    // Store analysis
    this.performanceData.set(Date.now(), analysis);
    
    // Take actions if needed
    if (analysis.actions.length > 0) {
      await this.executeActions(analysis.actions);
    }

    return analysis;
  }

  assessSystemHealth(systemMetrics) {
    const memoryPercentage = systemMetrics.memory.percentage;
    const loadAverage = systemMetrics.loadAverage[0]; // 1-minute load average
    const cpuCount = systemMetrics.cpus;
    
    // Calculate load average per CPU
    const loadPerCPU = loadAverage / cpuCount;
    
    if (memoryPercentage > this.thresholds.memory.critical || loadPerCPU > 2.0) {
      return { level: 'critical', issues: ['High memory usage', 'High CPU load'] };
    } else if (memoryPercentage > this.thresholds.memory.warning || loadPerCPU > 1.0) {
      return { level: 'warning', issues: ['Elevated memory usage', 'Elevated CPU load'] };
    } else {
      return { level: 'healthy', issues: [] };
    }
  }

  assessProcessHealth(pm2Processes) {
    if (!pm2Processes || pm2Processes.length === 0) {
      return { level: 'unknown', issues: ['No PM2 processes found'] };
    }

    const criticalProcesses = [];
    const warningProcesses = [];

    for (const process of pm2Processes) {
      const health = this.assessIndividualProcess(process);
      if (health.level === 'critical') {
        criticalProcesses.push(process.name);
      } else if (health.level === 'warning') {
        warningProcesses.push(process.name);
      }
    }

    if (criticalProcesses.length > 0) {
      return { 
        level: 'critical', 
        issues: [`Critical processes: ${criticalProcesses.join(', ')}`] 
      };
    } else if (warningProcesses.length > 0) {
      return { 
        level: 'warning', 
        issues: [`Warning processes: ${warningProcesses.join(', ')}`] 
      };
    } else {
      return { level: 'healthy', issues: [] };
    }
  }

  assessIndividualProcess(process) {
    const memoryUsage = process.monit?.memory || 0;
    const cpuUsage = process.monit?.cpu || 0;
    const restarts = process.pm2_env?.restart_time || 0;
    
    // Get memory threshold for this process
    const memoryThreshold = this.getProcessMemoryThreshold(process.name);
    const memoryPercentage = (memoryUsage / memoryThreshold) * 100;
    
    if (restarts > 10 || memoryPercentage > this.thresholds.memory.critical) {
      return { level: 'critical', issues: ['High restarts', 'Memory overload'] };
    } else if (memoryPercentage > this.thresholds.memory.warning || cpuUsage > this.thresholds.cpu.warning) {
      return { level: 'warning', issues: ['Resource strain'] };
    } else {
      return { level: 'healthy', issues: [] };
    }
  }

  getProcessMemoryThreshold(processName) {
    const thresholds = {
      'zion-website-frontend': 2 * 1024 * 1024 * 1024, // 2GB
      'zion-website-backend': 1 * 1024 * 1024 * 1024, // 1GB
      'intelligent-orchestrator': 512 * 1024 * 1024,   // 512MB
      'default': 256 * 1024 * 1024                     // 256MB
    };
    
    return thresholds[processName] || thresholds.default;
  }

  async executeActions(actions) {
    this.log('🚀 Executing performance optimization actions...');
    
    for (const action of actions) {
      try {
        switch (action) {
          case 'restart_critical_processes':
            await this.restartCriticalProcesses();
            break;
          case 'optimize_processes':
            await this.optimizeProcesses();
            break;
          case 'restart_unhealthy_processes':
            await this.restartUnhealthyProcesses();
            break;
          default:
            this.log(`Unknown action: ${action}`, 'warn');
        }
      } catch (error) {
        this.log(`Failed to execute action ${action}: ${error.message}`, 'error');
      }
    }
  }

  async restartCriticalProcesses() {
    this.log('🔄 Restarting critical processes...');
    
    const pm2Status = await this.getPM2Status();
    if (!pm2Status) return;

    for (const process of pm2Status) {
      const health = this.assessIndividualProcess(process);
      if (health.level === 'critical') {
        this.log(`🔄 Restarting critical process: ${process.name}`);
        await this.executeCommand(`pm2 restart ${process.name}`);
        await this.sleep(2000); // Wait between restarts
      }
    }
  }

  async optimizeProcesses() {
    this.log('⚡ Optimizing process performance...');
    
    const pm2Status = await this.getPM2Status();
    if (!pm2Status) return;

    for (const process of pm2Status) {
      const memoryUsage = process.monit?.memory || 0;
      const cpuUsage = process.monit?.cpu || 0;
      
      // Auto-scale if CPU usage is high
      if (cpuUsage > this.thresholds.cpu.warning && process.pm2_env?.instances === 1) {
        this.log(`📈 Auto-scaling ${process.name} due to high CPU usage (${cpuUsage.toFixed(1)}%)`);
        await this.executeCommand(`pm2 scale ${process.name} 2`);
      }
      
      // Optimize memory if needed
      if (memoryUsage > this.getProcessMemoryThreshold(process.name) * 0.8) {
        this.log(`🧠 Optimizing memory for ${process.name}`);
        await this.executeCommand(`pm2 restart ${process.name}`);
      }
    }
  }

  async restartUnhealthyProcesses() {
    this.log('🔄 Restarting unhealthy processes...');
    
    const pm2Status = await this.getPM2Status();
    if (!pm2Status) return;

    for (const process of pm2Status) {
      const health = this.assessIndividualProcess(process);
      if (health.level === 'warning') {
        this.log(`🔄 Restarting unhealthy process: ${process.name}`);
        await this.executeCommand(`pm2 restart ${process.name}`);
        await this.sleep(1000); // Wait between restarts
      }
    }
  }

  async generatePerformanceReport() {
    this.log('📊 Generating performance report...');
    
    const metrics = await this.getSystemMetrics();
    const analysis = await this.analyzePerformance(metrics);
    
    const report = {
      timestamp: new Date().toISOString(),
      metrics,
      analysis,
      optimizationHistory: Array.from(this.optimizationHistory.values()).slice(-20), // Last 20 optimizations
      recommendations: this.generateRecommendations()
    };

    const reportPath = path.join(this.projectRoot, 'automation/logs/performance-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    this.log(`📊 Performance report generated: ${reportPath}`);
    return report;
  }

  generateRecommendations() {
    const recommendations = [];
    
    // System-level recommendations
    const systemMetrics = Array.from(this.performanceData.values()).slice(-5);
    const criticalCount = systemMetrics.filter(m => m.systemHealth?.level === 'critical').length;
    
    if (criticalCount > 2) {
      recommendations.push({
        priority: 'high',
        category: 'system',
        action: 'Consider upgrading system resources or optimizing application architecture',
        impact: 'High system stability and performance'
      });
    }
    
    // Process-level recommendations
    const processMetrics = Array.from(this.performanceData.values()).slice(-5);
    const processIssues = processMetrics.filter(m => m.processHealth?.level !== 'healthy').length;
    
    if (processIssues > 2) {
      recommendations.push({
        priority: 'medium',
        category: 'processes',
        action: 'Review and optimize process configurations and resource allocation',
        impact: 'Improved process stability and resource utilization'
      });
    }
    
    return recommendations;
  }

  async startContinuousMonitoring() {
    this.log('👀 Starting continuous performance monitoring...');
    
    // Monitor every 30 seconds
    setInterval(async () => {
      try {
        const metrics = await this.getSystemMetrics();
        await this.analyzePerformance(metrics);
      } catch (error) {
        this.log(`Monitoring error: ${error.message}`, 'error');
      }
    }, 30000);
    
    // Generate report every hour
    setInterval(async () => {
      try {
        await this.generatePerformanceReport();
      } catch (error) {
        this.log(`Report generation error: ${error.message}`, 'error');
      }
    }, 3600000);
    
    // Cleanup old data every 6 hours
    setInterval(() => {
      this.cleanupOldData();
    }, 21600000);
  }

  cleanupOldData() {
    this.log('🧹 Cleaning up old performance data...');
    
    const now = Date.now();
    const maxAge = 24 * 60 * 60 * 1000; // 24 hours
    
    // Clean up old performance data
    for (const [timestamp] of this.performanceData) {
      if (now - timestamp > maxAge) {
        this.performanceData.delete(timestamp);
      }
    }
    
    // Clean up old optimization history
    for (const [timestamp] of this.optimizationHistory) {
      if (now - timestamp > maxAge) {
        this.optimizationHistory.delete(timestamp);
      }
    }
    
    this.log('✅ Cleanup completed');
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async runQuickAnalysis() {
    this.log('⚡ Running quick performance analysis...');
    
    const metrics = await this.getSystemMetrics();
    const analysis = await this.analyzePerformance(metrics);
    
    console.log('\n📊 Performance Analysis Results:');
    console.log(`System Health: ${analysis.systemHealth.level.toUpperCase()}`);
    console.log(`Process Health: ${analysis.processHealth.level.toUpperCase()}`);
    
    if (analysis.recommendations.length > 0) {
      console.log('\n💡 Recommendations:');
      analysis.recommendations.forEach((rec, index) => {
        console.log(`  ${index + 1}. ${rec}`);
      });
    }
    
    if (analysis.actions.length > 0) {
      console.log('\n🚀 Actions Taken:');
      analysis.actions.forEach((action, index) => {
        console.log(`  ${index + 1}. ${action}`);
      });
    }
    
    return analysis;
  }
}

// CLI handling
const performanceIntelligence = new PerformanceIntelligence();
const command = process.argv[2];

async function main() {
  try {
    switch (command) {
      case 'monitor':
        await performanceIntelligence.startContinuousMonitoring();
        // Keep the process running
        process.stdin.resume();
        break;
      case 'analyze':
        await performanceIntelligence.runQuickAnalysis();
        break;
      case 'report':
        await performanceIntelligence.generatePerformanceReport();
        break;
      case 'optimize':
        await performanceIntelligence.optimizeProcesses();
        break;
      case 'restart':
        await performanceIntelligence.restartCriticalProcesses();
        break;
      default:
        console.log('Usage: node performance-intelligence.js [command]');
        console.log('\nCommands:');
        console.log('  monitor    - Start continuous monitoring');
        console.log('  analyze    - Run quick performance analysis');
        console.log('  report     - Generate performance report');
        console.log('  optimize   - Optimize process performance');
        console.log('  restart    - Restart critical processes');
        process.exit(1);
    }
  } catch (error) {
    performanceIntelligence.log(`❌ Error: ${error.message}`, 'error');
    process.exit(1);
  }
}

// Graceful shutdown
process.on('SIGINT', async () => {
  console.log('\n🛑 Shutting down performance intelligence...');
  process.exit(0);
});

process.on('SIGTERM', async () => {
  console.log('\n🛑 Shutting down performance intelligence...');
  process.exit(0);
});

main();