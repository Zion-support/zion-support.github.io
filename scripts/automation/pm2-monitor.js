#!/usr/bin/env node

/**
 * PM2 Automation Monitor
 * Enhanced monitoring and health checking for all PM2 automation processes
 */

const pm2 = require('pm2');
const fs = require('fs');
const path = require('path');

class PM2Monitor {
  constructor() {
    this.healthReport = {
      timestamp: new Date().toISOString(),
      overallHealth: 'healthy',
      processes: {},
      systemMetrics: {},
      recommendations: []
    };
  }

  async start() {
    try {
      console.log('🚀 Starting PM2 Automation Monitor...');
      
      // Connect to PM2
      await this.connectToPM2();
      
      // Collect comprehensive health data
      await this.collectHealthData();
      
      // Generate health report
      await this.generateHealthReport();
      
      // Send notifications if needed
      await this.sendNotifications();
      
      console.log('✅ PM2 Monitor completed successfully');
      
    } catch (error) {
      console.error('❌ PM2 Monitor failed:', error);
      this.healthReport.overallHealth = 'critical';
      this.healthReport.error = error.message;
    } finally {
      pm2.disconnect();
    }
  }

  async connectToPM2() {
    return new Promise((resolve, reject) => {
      pm2.connect((err) => {
        if (err) reject(err);
        else resolve();
      });
    });
  }

  async collectHealthData() {
    console.log('📊 Collecting health data...');
    
    // Get PM2 status
    const status = await this.getPM2Status();
    
    // Analyze each process
    for (const process of status) {
      this.healthReport.processes[process.name] = {
        status: process.pm2_env.status,
        memory: process.monit.memory,
        cpu: process.monit.cpu,
        uptime: process.pm2_env.pm_uptime,
        restarts: process.pm2_env.restart_time,
        health: this.assessProcessHealth(process)
      };
    }
    
    // Collect system metrics
    this.healthReport.systemMetrics = await this.collectSystemMetrics();
    
    // Assess overall health
    this.assessOverallHealth();
  }

  async getPM2Status() {
    return new Promise((resolve, reject) => {
      pm2.list((err, list) => {
        if (err) reject(err);
        else resolve(list);
      });
    });
  }

  assessProcessHealth(process) {
    const health = {
      score: 100,
      issues: [],
      recommendations: []
    };

    // Check memory usage
    if (process.monit.memory > 100 * 1024 * 1024) { // 100MB
      health.score -= 20;
      health.issues.push('High memory usage');
      health.recommendations.push('Consider optimizing memory usage or increasing memory limit');
    }

    // Check CPU usage
    if (process.monit.cpu > 80) {
      health.score -= 15;
      health.issues.push('High CPU usage');
      health.recommendations.push('Investigate CPU-intensive operations');
    }

    // Check restart count
    if (process.pm2_env.restart_time > 5) {
      health.score -= 25;
      health.issues.push('Frequent restarts');
      health.recommendations.push('Investigate root cause of crashes');
    }

    // Check uptime
    const uptime = Date.now() - process.pm2_env.pm_uptime;
    if (uptime < 5 * 60 * 1000) { // Less than 5 minutes
      health.score -= 10;
      health.issues.push('Recent restart');
    }

    if (health.score < 50) {
      health.status = 'critical';
    } else if (health.score < 80) {
      health.status = 'warning';
    } else {
      health.status = 'healthy';
    }

    return health;
  }

  async collectSystemMetrics() {
    const os = require('os');
    
    return {
      memory: {
        total: os.totalmem(),
        free: os.freemem(),
        used: os.totalmem() - os.freemem(),
        usagePercent: ((os.totalmem() - os.freemem()) / os.totalmem() * 100).toFixed(2)
      },
      cpu: {
        loadAverage: os.loadavg(),
        cores: os.cpus().length
      },
      uptime: os.uptime(),
      platform: os.platform(),
      arch: os.arch()
    };
  }

  assessOverallHealth() {
    const processes = Object.values(this.healthReport.processes);
    const criticalCount = processes.filter(p => p.health.status === 'critical').length;
    const warningCount = processes.filter(p => p.health.status === 'warning').length;
    
    if (criticalCount > 0) {
      this.healthReport.overallHealth = 'critical';
      this.healthReport.recommendations.push(`Immediate attention required: ${criticalCount} critical processes`);
    } else if (warningCount > 0) {
      this.healthReport.overallHealth = 'warning';
      this.healthReport.recommendations.push(`Monitor closely: ${warningCount} processes showing warnings`);
    } else {
      this.healthReport.overallHealth = 'healthy';
      this.healthReport.recommendations.push('All systems operating normally');
    }
  }

  async generateHealthReport() {
    console.log('📋 Generating health report...');
    
    // Create reports directory if it doesn't exist
    const reportsDir = path.join(__dirname, '../../reports');
    if (!fs.existsSync(reportsDir)) {
      fs.mkdirSync(reportsDir, { recursive: true });
    }
    
    // Save detailed report
    const reportPath = path.join(reportsDir, `pm2-health-${Date.now()}.json`);
    fs.writeFileSync(reportPath, JSON.stringify(this.healthReport, null, 2));
    
    // Save latest report
    const latestReportPath = path.join(reportsDir, 'pm2-health-latest.json');
    fs.writeFileSync(latestReportPath, JSON.stringify(this.healthReport, null, 2));
    
    // Generate summary
    this.generateSummary();
    
    console.log(`📄 Health report saved to: ${reportPath}`);
  }

  generateSummary() {
    const summary = {
      timestamp: this.healthReport.timestamp,
      overallHealth: this.healthReport.overallHealth,
      processCount: Object.keys(this.healthReport.processes).length,
      healthyProcesses: Object.values(this.healthReport.processes).filter(p => p.health.status === 'healthy').length,
      warningProcesses: Object.values(this.healthReport.processes).filter(p => p.health.status === 'warning').length,
      criticalProcesses: Object.values(this.healthReport.processes).filter(p => p.health.status === 'critical').length,
      memoryUsage: this.healthReport.systemMetrics.memory?.usagePercent + '%',
      topRecommendations: this.healthReport.recommendations.slice(0, 3)
    };
    
    console.log('\n📊 PM2 Health Summary:');
    console.log('========================');
    console.log(`Overall Health: ${summary.overallHealth.toUpperCase()}`);
    console.log(`Total Processes: ${summary.processCount}`);
    console.log(`Healthy: ${summary.healthyProcesses} | Warning: ${summary.warningProcesses} | Critical: ${summary.criticalProcesses}`);
    console.log(`Memory Usage: ${summary.memoryUsage}`);
    console.log('\nTop Recommendations:');
    summary.topRecommendations.forEach((rec, i) => {
      console.log(`${i + 1}. ${rec}`);
    });
  }

  async sendNotifications() {
    // Check if notifications are needed
    if (this.healthReport.overallHealth === 'critical') {
      console.log('🚨 CRITICAL: Sending emergency notifications...');
      // Here you could integrate with Slack, email, or other notification systems
    } else if (this.healthReport.overallHealth === 'warning') {
      console.log('⚠️  WARNING: Sending alert notifications...');
    }
  }
  {/* Removed stray closing brace */}

// Run the monitor
if (require.main === module) {
  const monitor = new PM2Monitor();
  monitor.start().catch(console.error);
  {/* Removed stray closing brace */}

module.exports = PM2Monitor;