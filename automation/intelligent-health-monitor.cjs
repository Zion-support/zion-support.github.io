#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🏥 Starting Intelligent Health Monitor...');

class HealthMonitor {
  constructor() {
    this.logFile = path.join(process.cwd(), 'logs', 'health-monitor.log');
    this.healthFile = path.join(process.cwd(), 'logs', 'health-status.json');
    this.config = {
      checkInterval: parseInt(process.env.HEALTH_CHECK_INTERVAL) || 30000,
      recoveryAttempts: parseInt(process.env.RECOVERY_ATTEMPTS) || 3,
      alertThresholds: {
        cpu: 90,
        memory: 95,
        disk: 90,
        responseTime: 5000
      }
    };
    this.ensureLogDirectory();
  }

  ensureLogDirectory() {
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}\n`;
    console.log(message);
    fs.appendFileSync(this.logFile, logMessage);
  }

  async getSystemHealth() {
    try {
      const cpuUsage = await this.getCPUUsage();
      const memoryUsage = await this.getMemoryUsage();
      const diskUsage = await this.getDiskUsage();
      const responseTime = await this.getResponseTime();
      
      return {
        timestamp: new Date().toISOString(),
        cpu: cpuUsage,
        memory: memoryUsage,
        disk: diskUsage,
        responseTime: responseTime,
        status: this.determineOverallStatus(cpuUsage, memoryUsage, diskUsage, responseTime)
      };
    } catch (error) {
      this.log(`❌ Error getting system health: ${error.message}`);
      return null;
    }
  }

  async getCPUUsage() {
    try {
      const result = execSync("top -bn1 | grep 'Cpu(s)' | awk '{print $2}' | awk -F'%' '{print $1}'", { encoding: 'utf8' });
      return parseFloat(result.trim()) || 0;
    } catch (error) {
      this.log(`⚠️ Could not get CPU usage: ${error.message}`);
      return 0;
    }
  }

  async getMemoryUsage() {
    try {
      const result = execSync("free | grep Mem | awk '{printf \"%.2f\", $3/$2 * 100.0}'", { encoding: 'utf8' });
      return parseFloat(result.trim()) || 0;
    } catch (error) {
      this.log(`⚠️ Could not get memory usage: ${error.message}`);
      return 0;
    }
  }

  async getDiskUsage() {
    try {
      const result = execSync("df -h / | awk 'NR==2{print $5}' | sed 's/%//'", { encoding: 'utf8' });
      return parseFloat(result.trim()) || 0;
    } catch (error) {
      this.log(`⚠️ Could not get disk usage: ${error.message}`);
      return 0;
    }
  }

  async getResponseTime() {
    try {
      const start = Date.now();
      execSync('curl -s -o /dev/null -w "%{http_code}" http://localhost:3000', { encoding: 'utf8' });
      return Date.now() - start;
    } catch (error) {
      this.log(`⚠️ Could not get response time: ${error.message}`);
      return 9999;
    }
  }

  determineOverallStatus(cpu, memory, disk, responseTime) {
    if (cpu > this.config.alertThresholds.cpu || 
        memory > this.config.alertThresholds.memory || 
        disk > this.config.alertThresholds.disk || 
        responseTime > this.config.alertThresholds.responseTime) {
      return 'critical';
    } else if (cpu > 70 || memory > 80 || disk > 80 || responseTime > 2000) {
      return 'warning';
    } else {
      return 'healthy';
    }
  }

  async saveHealthStatus(health) {
    try {
      fs.writeFileSync(this.healthFile, JSON.stringify(health, null, 2));
    } catch (error) {
      this.log(`❌ Failed to save health status: ${error.message}`);
    }
  }

  async checkPM2Processes() {
    try {
      const result = execSync('pm2 jlist', { encoding: 'utf8' });
      const processes = JSON.parse(result);
      
      for (const process of processes) {
        if (!process.pm2_env) continue;
        
        const { name, status, monit } = process;
        const { cpu, memory } = monit || {};
        
        this.log(`📊 Process: ${name} | Status: ${status} | CPU: ${cpu}% | Memory: ${memory}MB`);
        
        if (status === 'errored' || status === 'stopped') {
          this.log(`⚠️ Process ${name} is ${status}, attempting recovery...`);
          await this.recoverProcess(name);
        }
      }
    } catch (error) {
      this.log(`❌ Error checking PM2 processes: ${error.message}`);
    }
  }

  async recoverProcess(processName) {
    try {
      execSync(`pm2 restart ${processName}`, { stdio: 'inherit' });
      this.log(`✅ Successfully recovered process: ${processName}`);
    } catch (error) {
      this.log(`❌ Failed to recover process ${processName}: ${error.message}`);
    }
  }

  async performHealthCheck() {
    this.log('🔍 Performing health check...');
    
    const health = await this.getSystemHealth();
    if (!health) return;
    
    this.log(`📊 Health Status: ${health.status.toUpperCase()}`);
    this.log(`📊 CPU: ${health.cpu.toFixed(2)}% | Memory: ${health.memory.toFixed(2)}% | Disk: ${health.disk.toFixed(2)}% | Response: ${health.responseTime}ms`);
    
    await this.saveHealthStatus(health);
    await this.checkPM2Processes();
    
    if (health.status === 'critical') {
      this.log('🚨 CRITICAL HEALTH ALERT - System requires immediate attention!');
    } else if (health.status === 'warning') {
      this.log('⚠️ Health warning - Monitor system closely');
    } else {
      this.log('✅ System is healthy');
    }
  }

  async run() {
    this.log('🚀 Intelligent Health Monitor started');
    this.log(`📋 Check interval: ${this.config.checkInterval}ms`);
    this.log(`📋 Recovery attempts: ${this.config.recoveryAttempts}`);
    
    // Initial health check
    await this.performHealthCheck();
    
    // Set up periodic health checks
    setInterval(async () => {
      await this.performHealthCheck();
    }, this.config.checkInterval);
    
    this.log('✅ Health monitoring active');
  }
}

// Start the health monitor
const healthMonitor = new HealthMonitor();
healthMonitor.run().catch(error => {
  console.error('❌ Health Monitor failed:', error);
  process.exit(1);
});