#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class PM2AutomationDashboard {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'logs/pm2/dashboard.log');
    this.reportFile = path.join(this.projectRoot, 'logs/pm2/dashboard-report.json');
    this.startTime = Date.now();
    
    this.processes = [
      'lint-fixer',
      'code-quality-monitor',
      'auto-commit-fixes',
      'dependency-monitor',
      'performance-monitor',
      'test-automation',
      'security-scanner',
      'build-optimizer',
      'git-workflow',
      'health-monitor',
      'docs-generator',
      'seo-accessibility'
    ];
    
    this.dashboardData = {
      processes: {},
      system: {},
      alerts: [],
      recommendations: []
    };
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}\n`;

    try {
      fs.appendFileSync(this.logFile, logMessage);
    } catch (error) {
      console.error('Failed to write to log file:', error.message);
    }
  }

  async getPM2Status() {
    try {
      const statusOutput = execSync('pm2 list --format json', {
        cwd: this.projectRoot,
        encoding: 'utf8',
        stdio: 'pipe'
      });

      return JSON.parse(statusOutput);
    } catch (error) {
      this.log(`Error getting PM2 status: ${error.message}`, 'ERROR');
      return [];
    }
  }

  async getProcessLogs(processName, lines = 50) {
    try {
      const logOutput = execSync(`pm2 logs ${processName} --lines ${lines} --nostream`, {
        cwd: this.projectRoot,
        encoding: 'utf8',
        stdio: 'pipe'
      });

      return logOutput.split('\n').filter(line => line.trim());
    } catch (error) {
      this.log(`Error getting logs for ${processName}: ${error.message}`, 'ERROR');
      return [];
    }
  }

  async getSystemMetrics() {
    try {
      const metrics = {
        memory: {},
        cpu: {},
        disk: {},
        processes: {}
      };

      // Get memory usage
      const memoryInfo = execSync('free -m', { encoding: 'utf8' }).split('\n')[1];
      const memoryParts = memoryInfo.split(/\s+/);
      metrics.memory = {
        total: parseInt(memoryParts[1]),
        used: parseInt(memoryParts[2]),
        free: parseInt(memoryParts[3]),
        available: parseInt(memoryParts[6])
      };

      // Get CPU usage
      const cpuInfo = execSync('top -bn1 | grep "Cpu(s)"', { encoding: 'utf8' });
      const cpuMatch = cpuInfo.match(/(\d+\.\d+)%us/);
      metrics.cpu = {
        usage: cpuMatch ? parseFloat(cpuMatch[1]) : 0
      };

      // Get disk usage
      const diskInfo = execSync('df -h .', { encoding: 'utf8' }).split('\n')[1];
      const diskParts = diskInfo.split(/\s+/);
      metrics.disk = {
        total: diskParts[1],
        used: diskParts[2],
        available: diskParts[3],
        usage: diskParts[4]
      };

      // Get process count
      const processCount = execSync('ps aux | wc -l', { encoding: 'utf8' }).trim();
      metrics.processes = {
        total: parseInt(processCount)
      };

      return metrics;
    } catch (error) {
      this.log(`Error getting system metrics: ${error.message}`, 'ERROR');
      return {};
    }
  }

  async analyzeProcessHealth(processName) {
    try {
      const logs = await this.getProcessLogs(processName, 100);
      const health = {
        name: processName,
        status: 'unknown',
        lastActivity: null,
        errors: [],
        warnings: [],
        performance: {
          avgResponseTime: 0,
          successRate: 100,
          errorRate: 0
        }
      };

      // Analyze log patterns
      const errorPatterns = ['ERROR', 'error', 'Error', 'FAIL', 'fail', 'Failed'];
      const warningPatterns = ['WARN', 'warn', 'Warning', 'warning', '⚠️'];
      const successPatterns = ['SUCCESS', 'success', 'Success', '✅', 'OK'];

      logs.forEach(log => {
        // Check for errors
        if (errorPatterns.some(pattern => log.includes(pattern))) {
          health.errors.push(log);
        }
        
        // Check for warnings
        if (warningPatterns.some(pattern => log.includes(pattern))) {
          health.warnings.push(log);
        }
        
        // Check for success
        if (successPatterns.some(pattern => log.includes(pattern))) {
          health.lastActivity = new Date().toISOString();
        }
      });

      // Calculate metrics
      health.performance.errorRate = (health.errors.length / logs.length) * 100;
      health.performance.successRate = 100 - health.performance.errorRate;

      // Determine status
      if (health.errors.length > 10) {
        health.status = 'critical';
      } else if (health.errors.length > 5) {
        health.status = 'warning';
      } else if (health.errors.length > 0) {
        health.status = 'attention';
      } else {
        health.status = 'healthy';
      }

      return health;
    } catch (error) {
      this.log(`Error analyzing process health for ${processName}: ${error.message}`, 'ERROR');
      return { name: processName, status: 'error', error: error.message };
    }
  }

  async generateAlerts() {
    const alerts = [];
    
    // Check system resources
    const systemMetrics = await this.getSystemMetrics();
    
    if (systemMetrics.memory && systemMetrics.memory.usage > 80) {
      alerts.push({
        type: 'system',
        severity: 'warning',
        message: `High memory usage: ${systemMetrics.memory.usage}%`,
        recommendation: 'Consider restarting heavy processes or increasing memory'
      });
    }

    if (systemMetrics.cpu && systemMetrics.cpu.usage > 90) {
      alerts.push({
        type: 'system',
        severity: 'warning',
        message: `High CPU usage: ${systemMetrics.cpu.usage}%`,
        recommendation: 'Monitor for runaway processes or consider load balancing'
      });
    }

    if (systemMetrics.disk && parseInt(systemMetrics.disk.usage) > 85) {
      alerts.push({
        type: 'system',
        severity: 'critical',
        message: `High disk usage: ${systemMetrics.disk.usage}`,
        recommendation: 'Clean up logs and temporary files immediately'
      });
    }

    return alerts;
  }

  async generateRecommendations() {
    const recommendations = [];
    
    // Process-specific recommendations
    Object.values(this.dashboardData.processes).forEach(process => {
      if (process.status === 'critical') {
        recommendations.push({
          type: 'process',
          priority: 'high',
          message: `Process ${process.name} is in critical state`,
          action: `Restart ${process.name} and investigate errors`,
          impact: 'high'
        });
      }
      
      if (process.performance.errorRate > 20) {
        recommendations.push({
          type: 'process',
          priority: 'medium',
          message: `Process ${process.name} has high error rate (${process.performance.errorRate.toFixed(1)}%)`,
          action: `Review logs and fix recurring issues`,
          impact: 'medium'
        });
      }
    });

    // System recommendations
    if (this.dashboardData.system.memory && this.dashboardData.system.memory.usage > 70) {
      recommendations.push({
        type: 'system',
        priority: 'medium',
        message: 'Memory usage is getting high',
        action: 'Monitor memory usage and consider optimization',
        impact: 'medium'
      });
    }

    return recommendations;
  }

  async generateDashboardReport() {
    this.log('📊 Generating dashboard report...');
    
    const report = {
      timestamp: new Date().toISOString(),
      duration: Date.now() - this.startTime,
      summary: {
        totalProcesses: this.processes.length,
        healthyProcesses: 0,
        warningProcesses: 0,
        criticalProcesses: 0,
        systemHealth: 'unknown'
      },
      processes: this.dashboardData.processes,
      system: this.dashboardData.system,
      alerts: this.dashboardData.alerts,
      recommendations: this.dashboardData.recommendations,
      performance: {
        avgResponseTime: 0,
        overallSuccessRate: 0,
        systemUtilization: 0
      }
    };

    // Calculate summary metrics
    Object.values(this.dashboardData.processes).forEach(process => {
      switch (process.status) {
        case 'healthy':
          report.summary.healthyProcesses++;
          break;
        case 'warning':
        case 'attention':
          report.summary.warningProcesses++;
          break;
        case 'critical':
          report.summary.criticalProcesses++;
          break;
      }
    });

    // Determine overall system health
    if (report.summary.criticalProcesses > 0) {
      report.summary.systemHealth = 'critical';
    } else if (report.summary.warningProcesses > 0) {
      report.summary.systemHealth = 'warning';
    } else {
      report.summary.systemHealth = 'healthy';
    }

    try {
      fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2));
      this.log(`📊 Dashboard report generated: ${this.reportFile}`);
    } catch (error) {
      this.log(`Failed to write report: ${error.message}`, 'ERROR');
    }

    return report;
  }

  async displayDashboard() {
    console.clear();
    console.log('🚀 PM2 Automation Dashboard');
    console.log('='.repeat(50));
    console.log(`Last Updated: ${new Date().toLocaleString()}`);
    console.log(`Uptime: ${((Date.now() - this.startTime) / 1000 / 60).toFixed(1)} minutes`);
    console.log('');

    // System Overview
    console.log('📊 System Overview:');
    console.log(`Memory: ${this.dashboardData.system.memory?.usage || 'N/A'}%`);
    console.log(`CPU: ${this.dashboardData.system.cpu?.usage || 'N/A'}%`);
    console.log(`Disk: ${this.dashboardData.system.disk?.usage || 'N/A'}`);
    console.log('');

    // Process Status
    console.log('🔧 Process Status:');
    this.processes.forEach(processName => {
      const process = this.dashboardData.processes[processName];
      if (process) {
        const statusIcon = {
          'healthy': '✅',
          'warning': '⚠️',
          'attention': '🔶',
          'critical': '🚨',
          'error': '❌',
          'unknown': '❓'
        }[process.status] || '❓';

        console.log(`${statusIcon} ${processName.padEnd(20)} ${process.status.padEnd(10)} ${process.performance?.errorRate?.toFixed(1) || '0'}% errors`);
      }
    });
    console.log('');

    // Alerts
    if (this.dashboardData.alerts.length > 0) {
      console.log('🚨 Active Alerts:');
      this.dashboardData.alerts.forEach(alert => {
        const severityIcon = {
          'info': 'ℹ️',
          'warning': '⚠️',
          'critical': '🚨'
        }[alert.severity] || 'ℹ️';
        
        console.log(`${severityIcon} ${alert.message}`);
      });
      console.log('');
    }

    // Recommendations
    if (this.dashboardData.recommendations.length > 0) {
      console.log('💡 Recommendations:');
      this.dashboardData.recommendations.slice(0, 3).forEach(rec => {
        const priorityIcon = {
          'low': '🔵',
          'medium': '🟡',
          'high': '🔴'
        }[rec.priority] || '🔵';
        
        console.log(`${priorityIcon} ${rec.message}`);
      });
      console.log('');
    }

    console.log('Press Ctrl+C to exit | Auto-refresh every 30 seconds');
  }

  async run() {
    this.log('🚀 Starting PM2 Automation Dashboard...');
    
    try {
      // Initial data collection
      await this.collectData();
      
      // Display initial dashboard
      await this.displayDashboard();
      
      // Set up auto-refresh
      const refreshInterval = setInterval(async () => {
        await this.collectData();
        await this.displayDashboard();
      }, 30000); // Refresh every 30 seconds

      // Handle graceful shutdown
      process.on('SIGINT', () => {
        clearInterval(refreshInterval);
        this.log('Dashboard stopped by user');
        process.exit(0);
      });

    } catch (error) {
      this.log(`❌ Dashboard failed: ${error.message}`, 'ERROR');
      throw error;
    }
  }

  async collectData() {
    this.log('📡 Collecting dashboard data...');
    
    try {
      // Get PM2 status
      const pm2Status = await this.getPM2Status();
      
      // Get system metrics
      this.dashboardData.system = await this.getSystemMetrics();
      
      // Analyze each process
      for (const processName of this.processes) {
        this.dashboardData.processes[processName] = await this.analyzeProcessHealth(processName);
      }
      
      // Generate alerts and recommendations
      this.dashboardData.alerts = await this.generateAlerts();
      this.dashboardData.recommendations = await this.generateRecommendations();
      
      // Generate report
      await this.generateDashboardReport();
      
    } catch (error) {
      this.log(`Error collecting data: ${error.message}`, 'ERROR');
    }
  }
}

// Run the dashboard
if (require.main === module) {
  const dashboard = new PM2AutomationDashboard();
  dashboard.run().catch(error => {
    console.error('Dashboard failed:', error);
    process.exit(1);
  });
}

module.exports = PM2AutomationDashboard;