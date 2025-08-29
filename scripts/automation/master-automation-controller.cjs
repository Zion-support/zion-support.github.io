#!/usr/bin/env node

/**
 * Master Automation Controller
 * Intelligently orchestrates all PM2 automations
 */

const fs = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');

class MasterAutomationController {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'logs', 'master-automation-controller.log');
    this.configFile = path.join(this.projectRoot, 'logs', 'automation-config.json');
    this.ensureLogsDirectory();
    this.config = this.loadConfig();
    this.automationStatus = new Map();
    this.performanceMetrics = new Map();
    this.learningData = new Map();
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

  loadConfig() {
    try {
      if (fs.existsSync(this.configFile)) {
        return JSON.parse(fs.readFileSync(this.configFile, 'utf8'));
      }
    } catch (error) {
      this.log(`Failed to load config: ${error.message}`, 'WARN');
    }

    // Default configuration
    return {
      automations: {
        'ai-code-review': {
          enabled: true,
          priority: 'high',
          schedule: '*/30 * * * *',
          memoryLimit: '1G',
          autoRestart: true,
          dependencies: ['project-health-monitor']
        },
        'intelligent-performance-optimizer': {
          enabled: true,
          priority: 'medium',
          schedule: '0 */4 * * *',
          memoryLimit: '1.5G',
          autoRestart: true,
          dependencies: ['project-health-monitor']
        },
        'smart-dependency-intelligence': {
          enabled: true,
          priority: 'medium',
          schedule: '0 */6 * * *',
          memoryLimit: '1G',
          autoRestart: true,
          dependencies: ['dependency-monitor']
        },
        'project-health-monitor': {
          enabled: true,
          priority: 'critical',
          schedule: '*/15 * * * *',
          memoryLimit: '1G',
          autoRestart: true,
          dependencies: []
        },
        'enhanced-security-automation': {
          enabled: true,
          priority: 'high',
          schedule: '0 */8 * * *',
          memoryLimit: '1G',
          autoRestart: true,
          dependencies: ['project-health-monitor']
        },
        'enhanced-testing-automation': {
          enabled: true,
          priority: 'medium',
          schedule: '0 */3 * * *',
          memoryLimit: '1G',
          autoRestart: true,
          dependencies: ['project-health-monitor']
        },
        'enhanced-ci-cd-automation': {
          enabled: true,
          priority: 'high',
          schedule: '*/20 * * * *',
          memoryLimit: '1G',
          autoRestart: true,
          dependencies: ['project-health-monitor']
        }
      },
      globalSettings: {
        maxConcurrentAutomations: 3,
        memoryThreshold: 0.8,
        cpuThreshold: 0.7,
        autoScaling: true,
        intelligentScheduling: true,
        performanceMonitoring: true
      }
    };
  }

  saveConfig() {
    try {
      fs.writeFileSync(this.configFile, JSON.stringify(this.config, null, 2));
    } catch (error) {
      this.log(`Failed to save config: ${error.message}`, 'ERROR');
    }
  }

  async getPM2Status() {
    try {
      const statusOutput = execSync('pm2 status --json', { encoding: 'utf8' });
      return JSON.parse(statusOutput);
    } catch (error) {
      this.log(`Failed to get PM2 status: ${error.message}`, 'ERROR');
      return null;
    }
  }

  async getSystemMetrics() {
    try {
      const metrics = {
        timestamp: new Date().toISOString(),
        memory: {},
        cpu: {},
        disk: {},
        processes: {}
      };

      // Get memory usage
      const memoryInfo = execSync('free -m', { encoding: 'utf8' });
      const memoryLines = memoryInfo.split('\n');
      if (memoryLines.length > 1) {
        const memValues = memoryLines[1].split(/\s+/);
        metrics.memory = {
          total: parseInt(memValues[1]),
          used: parseInt(memValues[2]),
          free: parseInt(memValues[3]),
          available: parseInt(memValues[6])
        };
      }

      // Get CPU usage
      const cpuInfo = execSync('top -bn1 | grep "Cpu(s)"', { encoding: 'utf8' });
      const cpuMatch = cpuInfo.match(/(\d+\.\d+)%/);
      if (cpuMatch) {
        metrics.cpu.usage = parseFloat(cpuMatch[1]);
      }

      // Get disk usage
      const diskInfo = execSync('df -h /', { encoding: 'utf8' });
      const diskLines = diskInfo.split('\n');
      if (diskLines.length > 1) {
        const diskValues = diskLines[1].split(/\s+/);
        metrics.disk = {
          total: diskValues[1],
          used: diskValues[2],
          available: diskValues[3],
          usagePercent: parseInt(diskValues[4].replace('%', ''))
        };
      }

      // Get process count
      const processCount = execSync('ps aux | wc -l', { encoding: 'utf8' });
      metrics.processes.count = parseInt(processCount.trim()) - 1;

      return metrics;

    } catch (error) {
      this.log(`Failed to get system metrics: ${error.message}`, 'WARN');
      return null;
    }
  }

  async analyzeAutomationPerformance() {
    try {
      const pm2Status = await this.getPM2Status();
      if (!pm2Status) return;

      const performance = {
        timestamp: new Date().toISOString(),
        automations: {},
        overall: {
          totalAutomations: 0,
          runningAutomations: 0,
          failedAutomations: 0,
          averageMemoryUsage: 0,
          averageCpuUsage: 0
        }
      };

      let totalMemory = 0;
      let totalCpu = 0;
      let runningCount = 0;

      pm2Status.forEach(process => {
        if (process.name && this.config.automations[process.name]) {
          const automation = {
            name: process.name,
            status: process.pm2_env?.status || 'unknown',
            memory: process.monit?.memory || 0,
            cpu: process.monit?.cpu || 0,
            uptime: process.pm2_env?.pm_uptime || 0,
            restarts: process.pm2_env?.restart_time || 0,
            performance: this.calculateAutomationPerformance(process)
          };

          performance.automations[process.name] = automation;
          performance.overall.totalAutomations++;

          if (automation.status === 'online') {
            performance.overall.runningAutomations++;
            totalMemory += automation.memory;
            totalCpu += automation.cpu;
            runningCount++;
          } else if (automation.status === 'errored' || automation.status === 'stopped') {
            performance.overall.failedAutomations++;
          }
        }
      });

      if (runningCount > 0) {
        performance.overall.averageMemoryUsage = Math.round(totalMemory / runningCount);
        performance.overall.averageCpuUsage = Math.round(totalCpu / runningCount);
      }

      // Update performance metrics
      this.performanceMetrics.set(new Date().toISOString(), performance);

      return performance;

    } catch (error) {
      this.log(`Failed to analyze automation performance: ${error.message}`, 'ERROR');
      return null;
    }
  }

  calculateAutomationPerformance(process) {
    const performance = {
      score: 0,
      issues: [],
      recommendations: []
    };

    // Calculate performance score based on various factors
    let score = 100;

    // Memory usage penalty
    if (process.monit?.memory > 500) {
      score -= 20;
      performance.issues.push('High memory usage');
      performance.recommendations.push('Consider optimizing memory usage or increasing memory limit');
    }

    // CPU usage penalty
    if (process.monit?.cpu > 50) {
      score -= 15;
      performance.issues.push('High CPU usage');
      performance.recommendations.push('Consider optimizing CPU-intensive operations');
    }

    // Restart penalty
    if (process.pm2_env?.restart_time > 5) {
      score -= 25;
      performance.issues.push('Frequent restarts');
      performance.recommendations.push('Investigate root cause of crashes');
    }

    // Uptime bonus
    if (process.pm2_env?.pm_uptime > 3600000) { // 1 hour
      score += 10;
    }

    performance.score = Math.max(0, Math.min(100, score));
    return performance;
  }

  async intelligentScheduling() {
    try {
      const systemMetrics = await this.getSystemMetrics();
      const automationPerformance = await this.analyzeAutomationPerformance();
      
      if (!systemMetrics || !automationPerformance) return;

      const decisions = {
        timestamp: new Date().toISOString(),
        actions: [],
        reasoning: []
      };

      // Check memory threshold
      if (systemMetrics.memory.used / systemMetrics.memory.total > this.config.globalSettings.memoryThreshold) {
        decisions.actions.push('SCALE_DOWN_AUTOMATIONS');
        decisions.reasoning.push('Memory usage above threshold, scaling down non-critical automations');
        
        // Scale down non-critical automations
        await this.scaleDownNonCriticalAutomations();
      }

      // Check CPU threshold
      if (systemMetrics.cpu.usage > this.config.globalSettings.cpuThreshold * 100) {
        decisions.actions.push('OPTIMIZE_CPU_INTENSIVE');
        decisions.reasoning.push('CPU usage above threshold, optimizing intensive automations');
        
        // Optimize CPU-intensive automations
        await this.optimizeCPUIntensiveAutomations();
      }

      // Check for failed automations
      if (automationPerformance.overall.failedAutomations > 0) {
        decisions.actions.push('RESTART_FAILED_AUTOMATIONS');
        decisions.reasoning.push('Restarting failed automations');
        
        // Restart failed automations
        await this.restartFailedAutomations();
      }

      // Performance-based scheduling adjustments
      if (this.config.globalSettings.intelligentScheduling) {
        await this.adjustSchedulingBasedOnPerformance(automationPerformance);
      }

      this.log(`Intelligent scheduling decisions: ${decisions.actions.join(', ')}`);
      return decisions;

    } catch (error) {
      this.log(`Intelligent scheduling failed: ${error.message}`, 'ERROR');
      return null;
    }
  }

  async scaleDownNonCriticalAutomations() {
    try {
      const nonCriticalAutomations = Object.entries(this.config.automations)
        .filter(([name, config]) => config.priority !== 'critical')
        .sort(([,a], [,b]) => {
          const priorityOrder = { high: 3, medium: 2, low: 1 };
          return priorityOrder[a.priority] - priorityOrder[b.priority];
        });

      for (const [name, config] of nonCriticalAutomations.slice(0, 2)) {
        try {
          execSync(`pm2 stop ${name}`, { stdio: 'pipe' });
          this.log(`Scaled down non-critical automation: ${name}`);
        } catch (error) {
          this.log(`Failed to scale down ${name}: ${error.message}`, 'WARN');
        }
      }
    } catch (error) {
      this.log(`Failed to scale down automations: ${error.message}`, 'ERROR');
    }
  }

  async optimizeCPUIntensiveAutomations() {
    try {
      const cpuIntensiveAutomations = ['intelligent-performance-optimizer', 'smart-dependency-intelligence'];
      
      for (const name of cpuIntensiveAutomations) {
        try {
          // Reduce frequency of CPU-intensive automations
          const currentConfig = this.config.automations[name];
          if (currentConfig && currentConfig.schedule.includes('*/')) {
            const newSchedule = currentConfig.schedule.replace('*/', '*/2');
            currentConfig.schedule = newSchedule;
            this.log(`Optimized CPU-intensive automation ${name} schedule to ${newSchedule}`);
          }
        } catch (error) {
          this.log(`Failed to optimize ${name}: ${error.message}`, 'WARN');
        }
      }
      
      this.saveConfig();
    } catch (error) {
      this.log(`Failed to optimize CPU-intensive automations: ${error.message}`, 'ERROR');
    }
  }

  async restartFailedAutomations() {
    try {
      const pm2Status = await this.getPM2Status();
      if (!pm2Status) return;

      pm2Status.forEach(process => {
        if (process.name && this.config.automations[process.name]) {
          if (process.pm2_env?.status === 'errored' || process.pm2_env?.status === 'stopped') {
            try {
              execSync(`pm2 restart ${process.name}`, { stdio: 'pipe' });
              this.log(`Restarted failed automation: ${process.name}`);
            } catch (error) {
              this.log(`Failed to restart ${process.name}: ${error.message}`, 'WARN');
            }
          }
        }
      });
    } catch (error) {
      this.log(`Failed to restart failed automations: ${error.message}`, 'ERROR');
    }
  }

  async adjustSchedulingBasedOnPerformance(performance) {
    try {
      Object.entries(performance.automations).forEach(([name, automation]) => {
        const config = this.config.automations[name];
        if (!config) return;

        // Adjust scheduling based on performance score
        if (automation.performance.score < 50) {
          // Poor performance - reduce frequency
          if (config.schedule.includes('*/')) {
            const currentInterval = parseInt(config.schedule.match(/\*\/(\d+)/)[1]);
            const newInterval = Math.min(currentInterval * 2, 60);
            config.schedule = config.schedule.replace(`*/${currentInterval}`, `*/${newInterval}`);
            this.log(`Reduced frequency of ${name} due to poor performance: ${config.schedule}`);
          }
        } else if (automation.performance.score > 80) {
          // Good performance - can increase frequency
          if (config.schedule.includes('*/')) {
            const currentInterval = parseInt(config.schedule.match(/\*\/(\d+)/)[1]);
            const newInterval = Math.max(currentInterval / 2, 5);
            config.schedule = config.schedule.replace(`*/${currentInterval}`, `*/${newInterval}`);
            this.log(`Increased frequency of ${name} due to good performance: ${config.schedule}`);
          }
        }
      });

      this.saveConfig();
    } catch (error) {
      this.log(`Failed to adjust scheduling: ${error.message}`, 'ERROR');
    }
  }

  async generateIntelligenceReport() {
    try {
      const report = {
        timestamp: new Date().toISOString(),
        systemHealth: {},
        automationPerformance: {},
        recommendations: [],
        trends: {}
      };

      // System health summary
      const systemMetrics = await this.getSystemMetrics();
      if (systemMetrics) {
        report.systemHealth = {
          memoryUsage: systemMetrics.memory.used / systemMetrics.memory.total,
          cpuUsage: systemMetrics.cpu.usage,
          diskUsage: systemMetrics.disk.usagePercent,
          processCount: systemMetrics.processes.count
        };
      }

      // Automation performance summary
      const performance = await this.analyzeAutomationPerformance();
      if (performance) {
        report.automationPerformance = {
          totalAutomations: performance.overall.totalAutomations,
          runningAutomations: performance.overall.runningAutomations,
          failedAutomations: performance.overall.failedAutomations,
          averageMemoryUsage: performance.overall.averageMemoryUsage,
          averageCpuUsage: performance.overall.averageCpuUsage
        };

        // Generate recommendations
        if (performance.overall.failedAutomations > 0) {
          report.recommendations.push({
            type: 'FAILURE_RECOVERY',
            priority: 'HIGH',
            message: `${performance.overall.failedAutomations} automations have failed`,
            action: 'Investigate and restart failed automations'
          });
        }

        if (report.systemHealth.memoryUsage > 0.8) {
          report.recommendations.push({
            type: 'MEMORY_OPTIMIZATION',
            priority: 'MEDIUM',
            message: 'Memory usage is high',
            action: 'Consider scaling down non-critical automations or increasing system memory'
          });
        }

        if (report.systemHealth.cpuUsage > 70) {
          report.recommendations.push({
            type: 'CPU_OPTIMIZATION',
            priority: 'MEDIUM',
            message: 'CPU usage is high',
            action: 'Optimize CPU-intensive automations or reduce automation frequency'
          });
        }
      }

      // Save report
      const reportPath = path.join(this.projectRoot, 'logs', 'master-automation-report.json');
      fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));

      this.log(`Master automation report generated: ${reportPath}`);
      return report;

    } catch (error) {
      this.log(`Failed to generate intelligence report: ${error.message}`, 'ERROR');
      return null;
    }
  }

  async run() {
    this.log('🚀 Starting Master Automation Controller...');
    
    try {
      // Initial system analysis
      const systemMetrics = await this.getSystemMetrics();
      if (systemMetrics) {
        this.log(`System Status - Memory: ${systemMetrics.memory.used}MB/${systemMetrics.memory.total}MB, CPU: ${systemMetrics.cpu.usage}%`);
      }

      // Run intelligent scheduling
      const schedulingDecisions = await this.intelligentScheduling();
      if (schedulingDecisions) {
        this.log(`Scheduling decisions made: ${schedulingDecisions.actions.length} actions`);
      }

      // Generate comprehensive report
      const report = await this.generateIntelligenceReport();
      
      this.log(`✅ Master Automation Controller completed successfully.`);
      
      if (report) {
        this.log(`📊 Report generated with ${report.recommendations.length} recommendations.`);
        this.log(`🔧 System Health: Memory ${(report.systemHealth.memoryUsage * 100).toFixed(1)}%, CPU ${report.systemHealth.cpuUsage}%`);
      }

      return { success: true, report, schedulingDecisions };

    } catch (error) {
      this.log(`❌ Master Automation Controller failed: ${error.message}`, 'ERROR');
      return { success: false, error: error.message };
    }
  }
}

// Run the controller if called directly
if (require.main === module) {
  const controller = new MasterAutomationController();
  controller.run().then(result => {
    if (result.success) {
      process.exit(0);
    } else {
      process.exit(1);
    }
  }).catch(error => {
    console.error('Fatal error:', error);
    process.exit(1);
  });
}

module.exports = MasterAutomationController;