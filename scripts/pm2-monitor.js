#!/usr/bin/env node

import http from 'http';
import https from 'https';
import fs from 'fs';
import path from 'path';
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

class ZionMonitor {
  constructor() {
    this.config = {
      monitorInterval: parseInt(process.env.MONITOR_INTERVAL) || 30000,
      healthCheckEndpoints: (process.env.HEALTH_CHECK_ENDPOINTS || '').split(',').filter(Boolean),
      logDir: './logs',
      maxRetries: 3,
      alertThreshold: 0.8, // 80% error rate triggers alert
      performanceThreshold: 2000, // 2s response time threshold
    };
    
    this.stats = {
      checks: 0,
      failures: 0,
      lastCheck: null,
      performance: [],
      alerts: []
    };
    
    this.init();
  }

  async init() {
    console.log('🚀 Zion Monitor Starting...');
    this.ensureLogDirectory();
    this.startMonitoring();
    this.startPerformanceMonitoring();
    this.startHealthReporting();
  }

  ensureLogDirectory() {
    if (!fs.existsSync(this.config.logDir)) {
      fs.mkdirSync(this.config.logDir, { recursive: true });
    }
  }

  startMonitoring() {
    setInterval(async () => {
      await this.performHealthChecks();
    }, this.config.monitorInterval);
  }

  startPerformanceMonitoring() {
    setInterval(async () => {
      await this.monitorSystemPerformance();
    }, 60000); // Every minute
  }

  startHealthReporting() {
    setInterval(() => {
      this.generateHealthReport();
    }, 300000); // Every 5 minutes
  }

  async performHealthChecks() {
    this.stats.lastCheck = new Date();
    this.stats.checks++;
    
    console.log(`🔍 Performing health checks at ${this.stats.lastCheck.toISOString()}`);
    
    const results = await Promise.allSettled(
      this.config.healthCheckEndpoints.map(endpoint => this.checkEndpoint(endpoint))
    );
    
    let failureCount = 0;
    results.forEach((result, index) => {
      if (result.status === 'rejected' || !result.value?.healthy) {
        failureCount++;
        this.handleFailure(this.config.healthCheckEndpoints[index], result);
      }
    });
    
    if (failureCount > 0) {
      this.stats.failures++;
      await this.attemptRecovery();
    }
    
    this.logHealthStatus(results);
  }

  async checkEndpoint(endpoint) {
    return new Promise((resolve, reject) => {
      const startTime = Date.now();
      const url = new URL(endpoint);
      const client = url.protocol === 'https:' ? https : http;
      
      const req = client.request(url, { timeout: 5000 }, (res) => {
        const responseTime = Date.now() - startTime;
        const healthy = res.statusCode >= 200 && res.statusCode < 400;
        
        this.recordPerformance(endpoint, responseTime, healthy);
        
        resolve({
          healthy,
          statusCode: res.statusCode,
          responseTime,
          timestamp: new Date()
        });
      });
      
      req.on('error', (error) => {
        const responseTime = Date.now() - startTime;
        this.recordPerformance(endpoint, responseTime, false);
        reject(error);
      });
      
      req.on('timeout', () => {
        req.destroy();
        reject(new Error('Request timeout'));
      });
      
      req.end();
    });
  }

  recordPerformance(endpoint, responseTime, healthy) {
    this.stats.performance.push({
      endpoint,
      responseTime,
      healthy,
      timestamp: new Date()
    });
    
    // Keep only last 100 performance records
    if (this.stats.performance.length > 100) {
      this.stats.performance = this.stats.performance.slice(-100);
    }
  }

  async monitorSystemPerformance() {
    try {
      const { stdout } = await execAsync('pm2 jlist');
      const processes = JSON.parse(stdout);
      
      const performanceData = processes.map(process => ({
        name: process.name,
        memory: process.monit.memory,
        cpu: process.monit.cpu,
        uptime: process.pm2_env.pm_uptime,
        restarts: process.pm2_env.restart_time,
        status: process.pm2_env.status
      }));
      
      this.analyzePerformance(performanceData);
    } catch (error) {
      console.error('❌ Error monitoring system performance:', error.message);
    }
  }

  analyzePerformance(performanceData) {
    performanceData.forEach(process => {
      // Memory usage alert
      if (process.memory > 80) {
        this.createAlert('MEMORY_HIGH', `${process.name} using ${process.memory}% memory`);
      }
      
      // CPU usage alert
      if (process.cpu > 90) {
        this.createAlert('CPU_HIGH', `${process.name} using ${process.cpu}% CPU`);
      }
      
      // Restart frequency alert
      if (process.restarts > 5) {
        this.createAlert('RESTART_FREQUENT', `${process.name} restarted ${process.restarts} times`);
      }
    });
  }

  createAlert(type, message) {
    const alert = {
      type,
      message,
      timestamp: new Date(),
      severity: this.getAlertSeverity(type)
    };
    
    this.stats.alerts.push(alert);
    console.warn(`⚠️  ALERT [${alert.severity}]: ${alert.message}`);
    
    // Keep only last 50 alerts
    if (this.stats.alerts.length > 50) {
      this.stats.alerts = this.stats.alerts.slice(-50);
    }
  }

  getAlertSeverity(type) {
    const severityMap = {
      'MEMORY_HIGH': 'WARNING',
      'CPU_HIGH': 'WARNING',
      'RESTART_FREQUENT': 'CRITICAL',
      'ENDPOINT_DOWN': 'CRITICAL',
      'PERFORMANCE_DEGRADED': 'WARNING'
    };
    
    return severityMap[type] || 'INFO';
  }

  async attemptRecovery() {
    console.log('🔄 Attempting automatic recovery...');
    
    try {
      // Check PM2 status
      const { stdout } = await execAsync('pm2 status');
      
      if (stdout.includes('errored') || stdout.includes('stopped')) {
        console.log('🔄 Restarting failed processes...');
        await execAsync('pm2 restart all');
      }
      
      // Check for memory issues
      const { stdout: memoryInfo } = await execAsync('pm2 jlist');
      const processes = JSON.parse(memoryInfo);
      
      const highMemoryProcesses = processes.filter(p => p.monit.memory > 80);
      if (highMemoryProcesses.length > 0) {
        console.log('🔄 Restarting high-memory processes...');
        highMemoryProcesses.forEach(async (process) => {
          await execAsync(`pm2 restart ${process.name}`);
        });
      }
      
    } catch (error) {
      console.error('❌ Recovery attempt failed:', error.message);
    }
  }

  handleFailure(endpoint, result) {
    const errorMessage = result.status === 'rejected' ? result.reason.message : 'Health check failed';
    this.createAlert('ENDPOINT_DOWN', `${endpoint}: ${errorMessage}`);
  }

  logHealthStatus(results) {
    const healthyCount = results.filter(r => r.status === 'fulfilled' && r.value?.healthy).length;
    const totalCount = results.length;
    
    console.log(`✅ Health Status: ${healthyCount}/${totalCount} endpoints healthy`);
    
    if (healthyCount < totalCount) {
      console.log('❌ Some endpoints are unhealthy, check logs for details');
    }
  }

  generateHealthReport() {
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        totalChecks: this.stats.checks,
        totalFailures: this.stats.failures,
        successRate: ((this.stats.checks - this.stats.failures) / this.stats.checks * 100).toFixed(2),
        uptime: process.uptime()
      },
      performance: {
        averageResponseTime: this.calculateAverageResponseTime(),
        slowestEndpoint: this.findSlowestEndpoint(),
        errorRate: this.calculateErrorRate()
      },
      alerts: this.stats.alerts.slice(-10), // Last 10 alerts
      recommendations: this.generateRecommendations()
    };
    
    const reportPath = path.join(this.config.logDir, `health-report-${Date.now()}.json`);
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    console.log(`📊 Health report generated: ${reportPath}`);
    console.log(`📈 Success Rate: ${report.summary.successRate}%`);
    
    if (report.alerts.length > 0) {
      console.log(`⚠️  Active Alerts: ${report.alerts.length}`);
    }
  }

  calculateAverageResponseTime() {
    if (this.stats.performance.length === 0) return 0;
    
    const totalTime = this.stats.performance.reduce((sum, p) => sum + p.responseTime, 0);
    return Math.round(totalTime / this.stats.performance.length);
  }

  findSlowestEndpoint() {
    if (this.stats.performance.length === 0) return null;
    
    const slowest = this.stats.performance.reduce((slowest, current) => 
      current.responseTime > slowest.responseTime ? current : slowest
    );
    
    return {
      endpoint: slowest.endpoint,
      responseTime: slowest.responseTime,
      timestamp: slowest.timestamp
    };
  }

  calculateErrorRate() {
    if (this.stats.performance.length === 0) return 0;
    
    const errors = this.stats.performance.filter(p => !p.healthy).length;
    return (errors / this.stats.performance.length * 100).toFixed(2);
  }

  generateRecommendations() {
    const recommendations = [];
    
    if (this.stats.failures > this.stats.checks * 0.1) {
      recommendations.push('High failure rate detected. Consider increasing health check intervals or investigating infrastructure issues.');
    }
    
    const avgResponseTime = this.calculateAverageResponseTime();
    if (avgResponseTime > this.config.performanceThreshold) {
      recommendations.push('Response times are above threshold. Consider optimizing application performance or scaling resources.');
    }
    
    const highMemoryAlerts = this.stats.alerts.filter(a => a.type === 'MEMORY_HIGH').length;
    if (highMemoryAlerts > 3) {
      recommendations.push('Frequent memory alerts. Consider increasing memory limits or investigating memory leaks.');
    }
    
    return recommendations;
  }
}

// Start the monitor
const monitor = new ZionMonitor();

// Handle graceful shutdown
process.on('SIGINT', () => {
  console.log('\n🛑 Shutting down Zion Monitor...');
  monitor.generateHealthReport();
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('\n🛑 Shutting down Zion Monitor...');
  monitor.generateHealthReport();
  process.exit(0);
});

// Handle uncaught exceptions
process.on('uncaughtException', (error) => {
  console.error('💥 Uncaught Exception:', error);
  monitor.createAlert('SYSTEM_ERROR', `Uncaught exception: ${error.message}`);
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('💥 Unhandled Rejection at:', promise, 'reason:', reason);
  monitor.createAlert('SYSTEM_ERROR', `Unhandled rejection: ${reason}`);
});