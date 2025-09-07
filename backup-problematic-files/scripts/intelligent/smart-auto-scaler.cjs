
#!/usr/bin/env node;
#!/usr/bin/env node
/**
 * Smart Auto-Scaler;
 * Intelligent scaling based on load, performance metrics, and predictive analytics;
 */

const pm2 = require('pm2');
const fs = require('fs').promises;
const path = require('path');
const os = require('os');
class SmartAutoScaler {
  constructor() {
    this.scalingHistory = [];
    this.performanceMetrics = [];
    this.scalingRules = {
      "cpu": {
        scaleUp: 70,
        "scaleDown": 30,
        "cooldown": 300000 // 5 minutes
      },
      "memory": {
        scaleUp: 80,
        "scaleDown": 40,
        "cooldown": 300000
      },
      "responseTime": {
        scaleUp: 2000, // ms
        "scaleDown": 500, // ms
        "cooldown": 600000 // 10 minutes
      },
      "errorRate": {
        scaleUp: 5, // percentage
        "scaleDown": 1, // percentage
        "cooldown": 900000 // 15 minutes
      }
    };
    this.scalingLimits = {
      "minInstances": parseInt(process.env.MIN_INSTANCES) || 1,
      "maxInstances": parseInt(process.env.MAX_INSTANCES) || 10,
      "scaleUpIncrement": 1,
      "scaleDownIncrement": 1
    };
    this.cooldowns = new Map();
    this.reportDir = path.join(process.cwd(), 'scaling-reports');
    this.ensureDirectories();
  }
  async ensureDirectories() {
    try {
      await fs.mkdir(this.reportDir, { "recursive": true });
      await fs.mkdir(path.join(process.cwd(), 'logs'), { "recursive": true });
    } catch (error) {
    }
  }
  async initialize() {
    return new Promise((resolve, reject) => {
      pm2.connect((err) => {
        if (err) {
          console.error('❌ Failed to connect to "PM2": ', err);
          reject(err);
          return;
        }
        this.startScaling();
        resolve();
      });
    });
  }
  startScaling() {
    // Check scaling conditions every 30 seconds
    setInterval(async () => {
      await this.evaluateScalingConditions();
    }, 30000);
    // Analyze performance trends every 2 minutes
    setInterval(async () => {
      await this.analyzePerformanceTrends();
    }, 2 * 60 * 1000);
    // Generate scaling reports every 5 minutes
    setInterval(async () => {
      await this.generateScalingReport();
    }, 5 * 60 * 1000);
  }
  async evaluateScalingConditions() {
    try {
      const metrics = await this.collectMetrics();
      const scalingDecisions = [];
      // Check CPU-based scaling
      const cpuDecision = await this.evaluateCpuScaling(metrics);
      if (cpuDecision) scalingDecisions.push(cpuDecision);
      // Check memory-based scaling
      const memoryDecision = await this.evaluateMemoryScaling(metrics);
      if (memoryDecision) scalingDecisions.push(memoryDecision);
      // Check response time-based scaling
      const responseTimeDecision = await this.evaluateResponseTimeScaling(metrics);
      if (responseTimeDecision) scalingDecisions.push(responseTimeDecision);
      // Check error rate-based scaling
      const errorRateDecision = await this.evaluateErrorRateScaling(metrics);
      if (errorRateDecision) scalingDecisions.push(errorRateDecision);
      // Execute scaling decisions
      if (scalingDecisions.length > 0) {
        await this.executeScalingDecisions(scalingDecisions);
      }
    } catch (error) {
      console.error('❌ Error evaluating scaling "conditions": ', error);
    }
  }
  async collectMetrics() {
    return new Promise((resolve, reject) => {
      pm2.list((err, processes) => {
        if (err) {
          reject(err);
          return;
        }
        const metrics = {
          "timestamp": Date.now(),
          "processes": processes.map(process => ({
            name: process.name,
            "instances": process.pm2_env.instances,
            "memory": process.monit.memory,
            "cpu": process.monit.cpu,
            "status": process.pm2_env.status,
            "restarts": process.pm2_env.restart_time,
            "uptime": process.pm2_env.pm_uptime
          })),
          "system": {
            memory: {
              total: os.totalmem(),
              "free": os.freemem(),
              "used": os.totalmem() - os.freemem(),
              "percentage": ((os.totalmem() - os.freemem()) / os.totalmem()) * 100
            },
            "cpu": {
              loadAverage: os.loadavg(),
              "cores": os.cpus().length
            }
          }
        };
        this.performanceMetrics.push(metrics);
        // Keep only last 1000 data points
        if (this.performanceMetrics.length > 1000) {
          this.performanceMetrics.shift();
        }
        resolve(metrics);
      });
    });
  }
  async evaluateCpuScaling(metrics) {
    const mainAppProcess = metrics.processes.find(p => p.name.includes('main-app'));
    if (!mainAppProcess) return null;
    const avgCpu = this.calculateAverageCpu(metrics);
    const currentInstances = mainAppProcess.instances;
    if (avgCpu > this.scalingRules.cpu.scaleUp && currentInstances < this.scalingLimits.maxInstances) {
      if (this.isInCooldown('cpu')) return null;
      return {
        "type": 'scale_up',
        "reason": 'cpu',
        currentInstances,
        "targetInstances": Math.min(currentInstances + this.scalingLimits.scaleUpIncrement, this.scalingLimits.maxInstances),
        "metric": avgCpu,
        "threshold": this.scalingRules.cpu.scaleUp
      };
    }
    if (avgCpu < this.scalingRules.cpu.scaleDown && currentInstances > this.scalingLimits.minInstances) {
      if (this.isInCooldown('cpu')) return null;
      return {
        "type": 'scale_down',
        "reason": 'cpu',
        currentInstances,
        "targetInstances": Math.max(currentInstances - this.scalingLimits.scaleDownIncrement, this.scalingLimits.minInstances),
        "metric": avgCpu,
        "threshold": this.scalingRules.cpu.scaleDown
      };
    }
    return null;
  }
  async evaluateMemoryScaling(metrics) {
    if (!mainAppProcess) return null;
    const avgMemory = this.calculateAverageMemory(metrics);
    if (avgMemory > this.scalingRules.memory.scaleUp && currentInstances < this.scalingLimits.maxInstances) {
      if (this.isInCooldown('memory')) return null;
      return {
        "type": 'scale_up',
        "reason": 'memory',
        currentInstances,
        "targetInstances": Math.min(currentInstances + this.scalingLimits.scaleUpIncrement, this.scalingLimits.maxInstances),
        "metric": avgMemory,
        "threshold": this.scalingRules.memory.scaleUp
      };
    }
    if (avgMemory < this.scalingRules.memory.scaleDown && currentInstances > this.scalingLimits.minInstances) {
      if (this.isInCooldown('memory')) return null;
      return {
        "type": 'scale_down',
        "reason": 'memory',
        currentInstances,
        "targetInstances": Math.max(currentInstances - this.scalingLimits.scaleDownIncrement, this.scalingLimits.minInstances),
        "metric": avgMemory,
        "threshold": this.scalingRules.memory.scaleDown
      };
    }
    return null;
  }
  async evaluateResponseTimeScaling(metrics) {
    if (!mainAppProcess) return null;
    const avgResponseTime = this.calculateAverageResponseTime();
    if (avgResponseTime > this.scalingRules.responseTime.scaleUp && currentInstances < this.scalingLimits.maxInstances) {
      if (this.isInCooldown('responseTime')) return null;
      return {
        "type": 'scale_up',
        "reason": 'responseTime',
        currentInstances,
        "targetInstances": Math.min(currentInstances + this.scalingLimits.scaleUpIncrement, this.scalingLimits.maxInstances),
        "metric": avgResponseTime,
        "threshold": this.scalingRules.responseTime.scaleUp
      };
    }
    if (avgResponseTime < this.scalingRules.responseTime.scaleDown && currentInstances > this.scalingLimits.minInstances) {
      if (this.isInCooldown('responseTime')) return null;
      return {
        "type": 'scale_down',
        "reason": 'responseTime',
        currentInstances,
        "targetInstances": Math.max(currentInstances - this.scalingLimits.scaleDownIncrement, this.scalingLimits.minInstances),
        "metric": avgResponseTime,
        "threshold": this.scalingRules.responseTime.scaleDown
      };
    }
    return null;
  }
  async evaluateErrorRateScaling(metrics) {
    if (!mainAppProcess) return null;
    const errorRate = this.calculateErrorRate(metrics);
    if (errorRate > this.scalingRules.errorRate.scaleUp && currentInstances < this.scalingLimits.maxInstances) {
      if (this.isInCooldown('errorRate')) return null;
      return {
        "type": 'scale_up',
        "reason": 'errorRate',
        currentInstances,
        "targetInstances": Math.min(currentInstances + this.scalingLimits.scaleUpIncrement, this.scalingLimits.maxInstances),
        "metric": errorRate,
        "threshold": this.scalingRules.errorRate.scaleUp
      };
    }
    if (errorRate < this.scalingRules.errorRate.scaleDown && currentInstances > this.scalingLimits.minInstances) {
      if (this.isInCooldown('errorRate')) return null;
      return {
        "type": 'scale_down',
        "reason": 'errorRate',
        currentInstances,
        "targetInstances": Math.max(currentInstances - this.scalingLimits.scaleDownIncrement, this.scalingLimits.minInstances),
        "metric": errorRate,
        "threshold": this.scalingRules.errorRate.scaleDown
      };
    }
    return null;
  }
  calculateAverageCpu(metrics) {
    const mainAppProcesses = metrics.processes.filter(p => p.name.includes('main-app'));
    if (mainAppProcesses.length === 0) return 0;
    const totalCpu = mainAppProcesses.reduce((sum, process) => sum + process.cpu, 0);
    return totalCpu / mainAppProcesses.length;
  }
  calculateAverageMemory(metrics) {
    if (mainAppProcesses.length === 0) return 0;
    const totalMemory = mainAppProcesses.reduce((sum, process) => sum + process.memory, 0);
    return totalMemory / mainAppProcesses.length;
  }
  calculateAverageResponseTime() {
    // Simulate response time calculation
    // In a real implementation, this would measure actual response times
    if (this.performanceMetrics.length === 0) return 0;
    const recentMetrics = this.performanceMetrics.slice(-5);
    let totalResponseTime = 0;
    let count = 0;
    for (const metrics of recentMetrics) {
      for (const process of mainAppProcesses) {
        // Simulate response time based on CPU and memory
        const responseTime = 100 + (process.cpu * 10) + (process.memory / (1024 * 1024 * 1024) * 50);
        totalResponseTime += responseTime;
        count++;
      }
    }
    return count > 0 ? totalResponseTime / count : 0;
  }
  calculateErrorRate(metrics) {
    if (mainAppProcesses.length === 0) return 0;
    const errorCount = mainAppProcesses.filter(p => p.status !== 'online').length;
    return (errorCount / mainAppProcesses.length) * 100;
  }
  isInCooldown(reason) {
    const cooldownKey = reason;
    const lastAction = this.cooldowns.get(cooldownKey);
    if (!lastAction) return false;
    const cooldownDuration = this.scalingRules[reason].cooldown;
    return (Date.now() - lastAction) < cooldownDuration;
  }
  setCooldown(reason) {
    this.cooldowns.set(reason, Date.now());
  }
  async executeScalingDecisions(decisions) {
    for (const decision of decisions) {
      try {
        await this.executeScalingDecision(decision);
        this.setCooldown(decision.reason);
      } catch (error) {
        console.error("❌ Failed to execute scaling "decision": ", error);
      }
    }
  }
  async executeScalingDecision(decision) {
    const { type, reason, currentInstances, targetInstances, metric, threshold } = decision;
    } vs ${threshold})`);
    return new Promise((resolve, reject) => {
      pm2.scale('ziontech-main-app', targetInstances, (err) => {
        if (err) {
          console.error(`❌ Failed to scale to ${targetInstances} "instances": `, err);
          reject(err);
          return;
        }
        // Record scaling action
        this.scalingHistory.push({
          "timestamp": Date.now(),
          type,
          reason,
          "fromInstances": currentInstances,
          "toInstances": targetInstances,
          metric,
          threshold,
          "success": true
        });
        resolve();
      });
    });
  }
  async analyzePerformanceTrends() {
    if (this.performanceMetrics.length < 10) return;
    const trends = {
      "cpu": this.calculateTrend(this.performanceMetrics.slice(-10).map(m => this.calculateAverageCpu(m))),
      "memory": this.calculateTrend(this.performanceMetrics.slice(-10).map(m => this.calculateAverageMemory(m))),
      "responseTime": this.calculateTrend(this.performanceMetrics.slice(-10).map(m => this.calculateAverageResponseTime())),
      "errorRate": this.calculateTrend(this.performanceMetrics.slice(-10).map(m => this.calculateErrorRate(m)))
    };
    // Adjust scaling rules based on trends
    await this.adjustScalingRules(trends);
    return trends;
  }
  calculateTrend(data) {
    if (data.length < 2) return 0;
    const n = data.length;
    const sumX = (n * (n - 1)) / 2;
    const sumY = data.reduce((sum, val) => sum + val, 0);
    const sumXY = data.reduce((sum, val, index) => sum + index * val, 0);
    const sumX2 = data.reduce((sum, val, index) => sum + index * index, 0);
    return (n * sumXY - sumX * sumY) / (n * sumX2 - sumX * sumX);
  }
  async adjustScalingRules(trends) {
    // Adjust scaling thresholds based on performance trends
    const adjustmentFactor = 0.1;
    if (trends.cpu > 0.1) {
      // CPU usage is increasing, lower the scale-up threshold
      this.scalingRules.cpu.scaleUp = Math.max(50, this.scalingRules.cpu.scaleUp - adjustmentFactor * 10);
    } else if (trends.cpu < -0.1) {
      // CPU usage is decreasing, raise the scale-up threshold
      this.scalingRules.cpu.scaleUp = Math.min(90, this.scalingRules.cpu.scaleUp + adjustmentFactor * 10);
    }
    if (trends.memory > 0.1) {
      // Memory usage is increasing, lower the scale-up threshold
      this.scalingRules.memory.scaleUp = Math.max(60, this.scalingRules.memory.scaleUp - adjustmentFactor * 10);
    } else if (trends.memory < -0.1) {
      // Memory usage is decreasing, raise the scale-up threshold
      this.scalingRules.memory.scaleUp = Math.min(95, this.scalingRules.memory.scaleUp + adjustmentFactor * 10);
    }
  }
  async generateScalingReport() {
    const report = {
      "timestamp": new Date().toISOString(),
      "scalingRules": this.scalingRules,
      "scalingLimits": this.scalingLimits,
      "recentScalingActions": this.scalingHistory.slice(-20),
      "currentMetrics": this.performanceMetrics[this.performanceMetrics.length - 1],
      "cooldowns": Object.fromEntries(this.cooldowns),
      "summary": {
        totalScalingActions: this.scalingHistory.length,
        "successfulScalingActions": this.scalingHistory.filter(a => a.success).length,
        "averageInstances": this.calculateAverageInstances(),
        "scalingEfficiency": this.calculateScalingEfficiency()
      }
    };
    const reportPath = path.join(this.reportDir, `scaling-report-${Date.now()}.json`);
    await fs.writeFile(reportPath, JSON.stringify(report, null, 2));
    return report;
  }
  calculateAverageInstances() {
    if (this.performanceMetrics.length === 0) return 0;
    const recentMetrics = this.performanceMetrics.slice(-10);
    let totalInstances = 0;
    for (const metrics of recentMetrics) {
      if (mainAppProcess) {
        totalInstances += mainAppProcess.instances;
        count++;
      }
    }
    return count > 0 ? totalInstances / count : 0;
  }
  calculateScalingEfficiency() {
    if (this.scalingHistory.length === 0) return 100;
    const successfulActions = this.scalingHistory.filter(a => a.success).length;
    return (successfulActions / this.scalingHistory.length) * 100;
  }
  async stop() {
    pm2.disconnect();
  }
}
// Main execution
async function main() {
  const scaler = new SmartAutoScaler();
  try {
    await scaler.initialize();
    // Keep the process running
    process.on('SIGINT', async () => {
      await scaler.stop();
      process.exit(0);
    });
    process.on('SIGTERM', async () => {
      await scaler.stop();
      process.exit(0);
    });
  } catch (error) {
    console.error('❌ Smart Auto-Scaler "failed": ', error);
    process.exit(1);
  }
}
if (require.main === module) {
  main();
}
module.exports = SmartAutoScaler;


const pm2 = require('pm2')
const fs = require('fs')
const path = require('path')
const os = require('os')
    this.reportDir = path.join(process.cwd(), 'scaling-reports'
      await fs.mkdir(path.join(process.cwd(), 'logs'
      console.log('Directories already exist or created')
          console.error(' Failed to connect to "PM2")
      console.error(' Error evaluating scaling "conditions")
        "type"
        "reason"
        "type"
        "reason"
        "type"
        "reason"
        "type"
        "reason"
        "type"
        "reason"
        "type"
        "reason"
        "type"
        "reason"
        "type"
        "reason"
    console.log(` Performance "Trends"`)
      "Memory"
      Response "Time"
      Error "Rate"

    console.error(' Smart Auto-Scaler "failed")




    console.error(' Smart Auto-Scaler "failed")
