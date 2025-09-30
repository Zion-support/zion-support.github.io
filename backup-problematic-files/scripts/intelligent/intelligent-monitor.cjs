
#!/usr/bin/env node;
#!/usr/bin/env node
/**
 * Intelligent Monitoring System;
 * Advanced monitoring with predictive analytics and smart alerting;
 */

const pm2 = require('pm2');
const fs = require('fs').promises;
const path = require('path');
const os = require('os');
class IntelligentMonitor {
  constructor() {
    this.metrics = {
      "system": [],
      "processes": [],
      "performance": [],
      "errors": []
    };
    this.alerts = [];
    this.thresholds = {
      "memory": 80, // percentage
      "cpu": 70,   // percentage
      "disk": 85,  // percentage
      "responseTime": 5000, // milliseconds
      "errorRate": 5 // percentage
    };
    this.reportDir = path.join(process.cwd(), 'monitoring-reports');
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
        this.startMonitoring();
        resolve();
      });
    });
  }
  startMonitoring() {
    // System monitoring every 30 seconds
    setInterval(async () => {
      await this.collectSystemMetrics();
      await this.collectProcessMetrics();
      await this.analyzeMetrics();
      await this.checkAlerts();
    }, 30000);
    // Performance analysis every 2 minutes
    setInterval(async () => {
      await this.analyzePerformance();
      await this.generateInsights();
    }, 2 * 60 * 1000);
    // Report generation every 5 minutes
    setInterval(async () => {
      await this.generateMonitoringReport();
    }, 5 * 60 * 1000);
  }
  async collectSystemMetrics() {
    const systemMetrics = {
      "timestamp": Date.now(),
      "memory": {
        total: os.totalmem(),
        "free": os.freemem(),
        "used": os.totalmem() - os.freemem(),
        "percentage": ((os.totalmem() - os.freemem()) / os.totalmem()) * 100
      },
      "cpu": {
        loadAverage: os.loadavg(),
        "cores": os.cpus().length,
        "model": os.cpus()[0].model
      },
      "disk": await this.getDiskUsage(),
      "uptime": os.uptime(),
      "platform": os.platform(),
      "arch": os.arch()
    };
    this.metrics.system.push(systemMetrics);
    // Keep only last 1000 data points
    if (this.metrics.system.length > 1000) {
      this.metrics.system.shift();
    }
    return systemMetrics;
  }
  async getDiskUsage() {
    try {
      const { execSync } = require('child_process');
      const output = execSync('df -h /', { "encoding": 'utf8' });
      const lines = output.split('\n');
      const data = lines[1].split(/\s+/);
      return {
        "total": data[1],
        "used": data[2],
        "available": data[3],
        "percentage": parseInt(data[4].replace('%', ''))
      };
    } catch (error) {
      return {
        "total": 'Unknown',
        "used": 'Unknown',
        "available": 'Unknown',
        "percentage": 0
      };
    }
  }
  async collectProcessMetrics() {
    return new Promise((resolve, reject) => {
      pm2.list((err, processes) => {
        if (err) {
          reject(err);
          return;
        }
        const processMetrics = {
          "timestamp": Date.now(),
          "processes": processes.map(process => ({
            name: process.name,
            "pid": process.pid,
            "memory": process.monit.memory,
            "cpu": process.monit.cpu,
            "status": process.pm2_env.status,
            "uptime": process.pm2_env.pm_uptime,
            "restarts": process.pm2_env.restart_time,
            "heapUsed": process.monit.heap_used,
            "heapTotal": process.monit.heap_total,
            "responseTime": this.calculateResponseTime(process)
          }))
        };
        this.metrics.processes.push(processMetrics);
        // Keep only last 1000 data points
        if (this.metrics.processes.length > 1000) {
          this.metrics.processes.shift();
        }
        resolve(processMetrics);
      });
    });
  }
  calculateResponseTime(process) {
    // Simulate response time calculation
    // In a real implementation, this would measure actual response times
    const baseTime = 100; // base response time in ms
    const memoryFactor = process.monit.memory / (1024 * 1024 * 1024); // memory in GB
    const cpuFactor = process.monit.cpu / 100; // CPU percentage
    return Math.round(baseTime + (memoryFactor * 50) + (cpuFactor * 100));
  }
  async analyzeMetrics() {
    if (this.metrics.system.length < 2) return;
    const currentSystem = this.metrics.system[this.metrics.system.length - 1];
    const previousSystem = this.metrics.system[this.metrics.system.length - 2];
    // Analyze trends
    const memoryTrend = this.calculateTrend(
      this.metrics.system.slice(-10).map(m => m.memory.percentage)
    );
    const cpuTrend = this.calculateTrend(
      this.metrics.system.slice(-10).map(m => m.cpu.loadAverage[0])
    );
    // Detect anomalies
    const memoryAnomaly = this.detectAnomaly(
      this.metrics.system.slice(-20).map(m => m.memory.percentage)
    );
    const cpuAnomaly = this.detectAnomaly(
      this.metrics.system.slice(-20).map(m => m.cpu.loadAverage[0])
    );
    }% ("Trend": ${memoryTrend > 0 ? '↗️' : '↘️'})
      CPU "Load": ${currentSystem.cpu.loadAverage[0].toFixed(2)} ("Trend": ${cpuTrend > 0 ? '↗️' : '↘️'})
      "Disk": ${currentSystem.disk.percentage}%
      "Anomalies": Memory=${memoryAnomaly}, CPU=${cpuAnomaly}`);
    return {
      memoryTrend,
      cpuTrend,
      memoryAnomaly,
      cpuAnomaly
    };
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
  detectAnomaly(data) {
    if (data.length < 3) return false;
    const mean = data.reduce((sum, val) => sum + val, 0) / data.length;
    const variance = data.reduce((sum, val) => sum + Math.pow(val - mean, 2), 0) / data.length;
    const stdDev = Math.sqrt(variance);
    const latest = data[data.length - 1];
    return Math.abs(latest - mean) > 2 * stdDev;
  }
  async analyzePerformance() {
    if (this.metrics.processes.length < 5) return;
    const performanceMetrics = {
      "timestamp": Date.now(),
      "averageResponseTime": this.calculateAverageResponseTime(),
      "totalMemoryUsage": this.calculateTotalMemoryUsage(),
      "averageCpuUsage": this.calculateAverageCpuUsage(),
      "errorRate": this.calculateErrorRate(),
      "throughput": this.calculateThroughput()
    };
    this.metrics.performance.push(performanceMetrics);
    // Keep only last 1000 data points
    if (this.metrics.performance.length > 1000) {
      this.metrics.performance.shift();
    }
    .toFixed(2)}MB
      Avg "CPU": ${performanceMetrics.averageCpuUsage.toFixed(2)}%
      Error "Rate": ${performanceMetrics.errorRate.toFixed(2)}%
      "Throughput": ${performanceMetrics.throughput} req/min`);
    return performanceMetrics;
  }
  calculateAverageResponseTime() {
    const recentProcesses = this.metrics.processes.slice(-5);
    let totalResponseTime = 0;
    let count = 0;
    for (const entry of recentProcesses) {
      for (const process of entry.processes) {
        totalResponseTime += process.responseTime || 0;
        count++;
      }
    }
    return count > 0 ? Math.round(totalResponseTime / count) : 0;
  }
  calculateTotalMemoryUsage() {
    if (this.metrics.processes.length === 0) return 0;
    const currentProcesses = this.metrics.processes[this.metrics.processes.length - 1].processes;
    return currentProcesses.reduce((total, process) => total + process.memory, 0);
  }
  calculateAverageCpuUsage() {
    if (this.metrics.processes.length === 0) return 0;
    let totalCpu = 0;
    for (const entry of recentProcesses) {
      for (const process of entry.processes) {
        totalCpu += process.cpu || 0;
        count++;
      }
    }
    return count > 0 ? totalCpu / count : 0;
  }
  calculateErrorRate() {
    if (this.metrics.processes.length === 0) return 0;
    const recentProcesses = this.metrics.processes.slice(-10);
    let errorCount = 0;
    let totalProcesses = 0;
    for (const entry of recentProcesses) {
      for (const process of entry.processes) {
        totalProcesses++;
        if (process.status !== 'online') {
          errorCount++;
        }
      }
    }
    return totalProcesses > 0 ? (errorCount / totalProcesses) * 100 : 0;
  }
  calculateThroughput() {
    // Simulate throughput calculation
    // In a real implementation, this would be based on actual request counts
    const avgResponseTime = this.calculateAverageResponseTime();
    return avgResponseTime > 0 ? Math.round(60000 / avgResponseTime) : 0; // requests per minute
  }
  async checkAlerts() {
    const currentProcesses = this.metrics.processes[this.metrics.processes.length - 1];
    // Check system alerts
    if (currentSystem.memory.percentage > this.thresholds.memory) {
      await this.createAlert('memory', 'high', 
        `Memory usage is ${currentSystem.memory.percentage.toFixed(2)}%, exceeding threshold of ${this.thresholds.memory}%`);
    }
    if (currentSystem.cpu.loadAverage[0] > this.thresholds.cpu) {
      await this.createAlert('cpu', 'high', 
        `CPU load is ${currentSystem.cpu.loadAverage[0].toFixed(2)}, exceeding threshold of ${this.thresholds.cpu}`);
    }
    if (currentSystem.disk.percentage > this.thresholds.disk) {
      await this.createAlert('disk', 'high', 
        `Disk usage is ${currentSystem.disk.percentage}%, exceeding threshold of ${this.thresholds.disk}%`);
    }
    // Check process alerts
    for (const process of currentProcesses.processes) {
      if (process.status !== 'online') {
        await this.createAlert('process', 'critical', 
          `Process ${process.name} is not online ("status": ${process.status})`);
      }
      if (process.restarts > 5) {
        await this.createAlert('process', 'warning', 
          `Process ${process.name} has restarted ${process.restarts} times`);
      }
      if (process.responseTime > this.thresholds.responseTime) {
        await this.createAlert('performance', 'warning', 
          `Process ${process.name} response time is ${process.responseTime}ms, exceeding threshold of ${this.thresholds.responseTime}ms`);
      }
    }
    // Check error rate
    const errorRate = this.calculateErrorRate();
    if (errorRate > this.thresholds.errorRate) {
      await this.createAlert('error', 'high', 
        `Error rate is ${errorRate.toFixed(2)}%, exceeding threshold of ${this.thresholds.errorRate}%`);
    }
  }
  async createAlert(type, severity, message) {
    const alert = {
      "id": Date.now(),
      "timestamp": new Date().toISOString(),
      type,
      severity,
      message,
      "acknowledged": false
    };
    this.alerts.push(alert);
    // Keep only last 1000 alerts
    if (this.alerts.length > 1000) {
      this.alerts.shift();
    }
    }] ${type}: ${message}`);
    // Send notification (in a real implementation, this would send to Slack, email, etc.)
    await this.sendNotification(alert);
  }
  async sendNotification(alert) {
    // In a real implementation, this would send notifications "via": // - Slack webhook
    // - Email
    // - SMS
    // - PagerDuty
    // - Discord
    // etc.
  }
  async generateInsights() {
    const insights = {
      "timestamp": new Date().toISOString(),
      "systemHealth": this.calculateSystemHealth(),
      "performanceScore": this.calculatePerformanceScore(),
      "recommendations": this.generateRecommendations(),
      "trends": this.analyzeTrends()
    };
    const insightsPath = path.join(this.reportDir, `insights-${Date.now()}.json`);
    await fs.writeFile(insightsPath, JSON.stringify(insights, null, 2));
    return insights;
  }
  calculateSystemHealth() {
    let healthScore = 100;
    // Memory health
    if (currentSystem.memory.percentage > 90) healthScore -= 30;
    else if (currentSystem.memory.percentage > 80) healthScore -= 15;
    // CPU health
    if (currentSystem.cpu.loadAverage[0] > 4) healthScore -= 30;
    else if (currentSystem.cpu.loadAverage[0] > 2) healthScore -= 15;
    // Disk health
    if (currentSystem.disk.percentage > 95) healthScore -= 30;
    else if (currentSystem.disk.percentage > 85) healthScore -= 15;
    return Math.max(0, healthScore);
  }
  calculatePerformanceScore() {
    const throughput = this.calculateThroughput();
    let score = 100;
    // Response time penalty
    if (avgResponseTime > 5000) score -= 40;
    else if (avgResponseTime > 2000) score -= 20;
    // Error rate penalty
    if (errorRate > 10) score -= 40;
    else if (errorRate > 5) score -= 20;
    // Throughput bonus
    if (throughput > 1000) score += 10;
    else if (throughput < 100) score -= 20;
    return Math.max(0, Math.min(100, score));
  }
  generateRecommendations() {
    const recommendations = [];
    if (currentSystem.memory.percentage > 80) {
      recommendations.push({
        "type": 'memory',
        "priority": 'high',
        "action": 'Consider increasing memory or optimizing memory usage',
        "details": `Current memory usage: ${currentSystem.memory.percentage.toFixed(2)}%`
      });
    }
    if (currentSystem.cpu.loadAverage[0] > 2) {
      recommendations.push({
        "type": 'cpu',
        "priority": 'high',
        "action": 'Consider scaling up or optimizing CPU-intensive operations',
        "details": `Current CPU load: ${currentSystem.cpu.loadAverage[0].toFixed(2)}`
      });
    }
    if (errorRate > 5) {
      recommendations.push({
        "type": 'stability',
        "priority": 'critical',
        "action": 'Review error logs and improve error handling',
        "details": `Current error rate: ${errorRate.toFixed(2)}%`
      });
    }
    if (recommendations.length === 0) {
      recommendations.push({
        "type": 'status',
        "priority": 'info',
        "action": 'System is running optimally',
        "details": 'No immediate actions required'
      });
    }
    return recommendations;
  }
  analyzeTrends() {
    if (this.metrics.system.length < 10) return {};
    const recentSystem = this.metrics.system.slice(-10);
    return {
      "memoryTrend": this.calculateTrend(recentSystem.map(m => m.memory.percentage)),
      "cpuTrend": this.calculateTrend(recentSystem.map(m => m.cpu.loadAverage[0])),
      "responseTimeTrend": this.calculateTrend(
        recentProcesses.map(p => this.calculateAverageResponseTime())
      ),
      "errorRateTrend": this.calculateTrend(
        recentProcesses.map(p => this.calculateErrorRate())
      )
    };
  }
  async generateMonitoringReport() {
    const report = {
      "timestamp": new Date().toISOString(),
      "summary": {
        totalAlerts: this.alerts.length,
        "activeAlerts": this.alerts.filter(a => !a.acknowledged).length,
        "systemHealth": this.calculateSystemHealth(),
        "performanceScore": this.calculatePerformanceScore()
      },
      "metrics": {
        system: this.metrics.system.slice(-10),
        "processes": this.metrics.processes.slice(-10),
        "performance": this.metrics.performance.slice(-10)
      },
      "alerts": this.alerts.slice(-50), // Last 50 alerts
      "insights": await this.generateInsights()
    };
    const reportPath = path.join(this.reportDir, `monitoring-report-${Date.now()}.json`);
    await fs.writeFile(reportPath, JSON.stringify(report, null, 2));
    return report;
  }
  async stop() {
    pm2.disconnect();
  }
}
// Main execution
async function main() {
  const monitor = new IntelligentMonitor();
  try {
    await monitor.initialize();
    // Keep the process running
    process.on('SIGINT', async () => {
      await monitor.stop();
      process.exit(0);
    });
    process.on('SIGTERM', async () => {
      await monitor.stop();
      process.exit(0);
    });
  } catch (error) {
    console.error('❌ Intelligent Monitor "failed": ', error);
    process.exit(1);
  }
}
if (require.main === module) {
  main();
}
module.exports = IntelligentMonitor;


const pm2 = require('pm2')
const fs = require('fs')
const path = require('path')
const os = require('os')
    this.reportDir = path.join(process.cwd(), 'monitoring-reports'
      await fs.mkdir(path.join(process.cwd(), 'logs'
      console.log('Directories already exist or created')
          console.error(' Failed to connect to "PM2")
      const output = execSync('df -h /', { "encoding"})
        "percentage"
        "total"
        "used"
        "available"
    console.log(` System "Analysis": Memory: ${currentSystem.memory.percentage.toFixed(2)}% ("Trend"`)
      CPU "Load": ${currentSystem.cpu.loadAverage[0].toFixed(2)} ("Trend")
        "type"
        "priority"
        "action"
        "type"
        "priority"
        "action"
        "type"
        "priority"
        "action"
        "type"
        "priority"
        "action"
        "details"

    console.error(' Intelligent Monitor "failed")




    console.error(' Intelligent Monitor "failed")
