#!/usr/bin/env node

/**
 * PM2 Health Monitor Script
 * Monitors system and process health
 */

import { execSync } from 'child_process';
import fs from 'fs';

class HealthMonitor {
  constructor() {
    this.processName = process.env.PM2_PROCESS_NAME || 'health-monitor';
    this.monitorSystem = process.env.MONITOR_SYSTEM === 'true';
    this.monitorProcesses = process.env.MONITOR_PROCESSES === 'true';
    this.monitorResources = process.env.MONITOR_RESOURCES === 'true';
    this.alertThreshold = parseInt(process.env.ALERT_THRESHOLD) || 80;
    this.logFile = `logs/pm2/health-monitor.log`;
    this.errorFile = `logs/pm2/health-monitor-error.log`;
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] [${this.processName}] ${message}`;
    console.log(logMessage);
    fs.appendFileSync(this.logFile, logMessage + '\n');
  }

  error(message) {
    this.log(message, 'ERROR');
    fs.appendFileSync(this.errorFile, `[${new Date().toISOString()}] ERROR: ${message}\n`);
  }

  async checkSystemHealth() {
    this.log('Checking system health...');
    
    try {
      const health = {
        timestamp: new Date().toISOString(),
        system: {},
        processes: {},
        resources: {}
      };
      
      // System info
      if (this.monitorSystem) {
        health.system.uptime = process.uptime();
        health.system.platform = process.platform;
        health.system.nodeVersion = process.version;
      }
      
      // Process info
      if (this.monitorProcesses) {
        const pm2List = execSync('pm2 list --json', { encoding: 'utf8' });
        const pm2Processes = JSON.parse(pm2List);
        health.processes.pm2Processes = pm2Processes.length;
        health.processes.onlineProcesses = pm2Processes.filter(p => p.pm2_env?.status === 'online').length;
      }
      
      // Resource usage
      if (this.monitorResources) {
        const memUsage = process.memoryUsage();
        health.resources.memoryUsage = {
          rss: Math.round(memUsage.rss / 1024 / 1024), // MB
          heapTotal: Math.round(memUsage.heapTotal / 1024 / 1024), // MB
          heapUsed: Math.round(memUsage.heapUsed / 1024 / 1024), // MB
          external: Math.round(memUsage.external / 1024 / 1024) // MB
        };
        
        // Check if memory usage is high
        const memoryPercent = (memUsage.heapUsed / memUsage.heapTotal) * 100;
        if (memoryPercent > this.alertThreshold) {
          this.log(`High memory usage: ${memoryPercent.toFixed(2)}%`, 'WARNING');
        }
      }
      
      return { success: true, health };
      
    } catch (error) {
      this.error(`Health check failed: ${error.message}`);
      return { success: false, error: error.message };
    }
  }

  async generateHealthReport() {
    this.log('Generating health report...');
    
    const report = {
      timestamp: new Date().toISOString(),
      processName: this.processName,
      health: {},
      summary: {}
    };
    
    try {
      report.health = await this.checkSystemHealth();
      
      // Generate summary
      const isHealthy = report.health.success;
      const memoryUsage = report.health.health?.resources?.memoryUsage?.heapUsed || 0;
      
      report.summary = {
        isHealthy,
        memoryUsageMB: memoryUsage,
        overallStatus: isHealthy ? 'HEALTHY' : 'UNHEALTHY'
      };
      
      // Save report
      const reportFile = `reports/health-monitor-report-${Date.now()}.json`;
      fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
      this.log(`Health report saved to ${reportFile}`);
      
      return report;
      
    } catch (error) {
      this.error(`Failed to generate health report: ${error.message}`);
      return { success: false, error: error.message };
    }
  }

  async start() {
    this.log('Health monitor service started');
    
    // Ensure directories exist
    fs.mkdirSync('logs/pm2', { recursive: true });
    fs.mkdirSync('reports', { recursive: true });
    
    // Run initial health check
    await this.generateHealthReport();
    
    // Set up periodic monitoring
    setInterval(async () => {
      this.log('Running scheduled health check...');
      await this.generateHealthReport();
    }, 60 * 60 * 1000); // Every hour
    
    this.log('Health monitor service is running');
  }
}

// Start the service
if (require.main === module) {
  const healthMonitor = new HealthMonitor();
  healthMonitor.start().catch(error => {
    console.error('Health monitor failed to start:', error);
    process.exit(1);
  });
}

export default HealthMonitor;