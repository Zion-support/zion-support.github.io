#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('📈 Starting Auto-Scaler...');

class AutoScaler {
  constructor() {
    this.logFile = path.join(process.cwd(), 'logs', 'auto-scaler.log');
    this.config = {
      cpuThreshold: parseInt(process.env.SCALE_THRESHOLD_CPU) || 70,
      memoryThreshold: parseInt(process.env.SCALE_THRESHOLD_MEMORY) || 80,
      minInstances: parseInt(process.env.MIN_INSTANCES) || 1,
      maxInstances: parseInt(process.env.MAX_INSTANCES) || 8,
      scaleUpCooldown: 300000, // 5 minutes
      scaleDownCooldown: 600000, // 10 minutes
    };
    this.lastScaleUp = 0;
    this.lastScaleDown = 0;
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

  async getSystemMetrics() {
    try {
      const cpuUsage = await this.getCPUUsage();
      const memoryUsage = await this.getMemoryUsage();
      return { cpuUsage, memoryUsage };
    } catch (error) {
      this.log(`❌ Error getting system metrics: ${error.message}`);
      return { cpuUsage: 0, memoryUsage: 0 };
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

  async getCurrentInstances(processName) {
    try {
      const result = execSync(`pm2 show ${processName} | grep 'instances' | awk '{print $4}'`, { encoding: 'utf8' });
      return parseInt(result.trim()) || 1;
    } catch (error) {
      this.log(`⚠️ Could not get current instances for ${processName}: ${error.message}`);
      return 1;
    }
  }

  async scaleProcess(processName, instances) {
    try {
      execSync(`pm2 scale ${processName} ${instances}`, { stdio: 'inherit' });
      this.log(`📊 Scaled ${processName} to ${instances} instances`);
      return true;
    } catch (error) {
      this.log(`❌ Failed to scale ${processName}: ${error.message}`);
      return false;
    }
  }

  async shouldScaleUp() {
    const now = Date.now();
    if (now - this.lastScaleUp < this.config.scaleUpCooldown) {
      return false;
    }

    const { cpuUsage, memoryUsage } = await this.getSystemMetrics();
    return cpuUsage > this.config.cpuThreshold || memoryUsage > this.config.memoryThreshold;
  }

  async shouldScaleDown() {
    const now = Date.now();
    if (now - this.lastScaleDown < this.config.scaleDownCooldown) {
      return false;
    }

    const { cpuUsage, memoryUsage } = await this.getSystemMetrics();
    return cpuUsage < 30 && memoryUsage < 50;
  }

  async scaleUp(processName) {
    const currentInstances = await this.getCurrentInstances(processName);
    if (currentInstances < this.config.maxInstances) {
      const newInstances = Math.min(currentInstances + 1, this.config.maxInstances);
      await this.scaleProcess(processName, newInstances);
      this.lastScaleUp = Date.now();
      this.log(`⬆️ Scaled up ${processName} from ${currentInstances} to ${newInstances} instances`);
    }
  }

  async scaleDown(processName) {
    const currentInstances = await this.getCurrentInstances(processName);
    if (currentInstances > this.config.minInstances) {
      const newInstances = Math.max(currentInstances - 1, this.config.minInstances);
      await this.scaleProcess(processName, newInstances);
      this.lastScaleDown = Date.now();
      this.log(`⬇️ Scaled down ${processName} from ${currentInstances} to ${newInstances} instances`);
    }
  }

  async monitorAndScale() {
    this.log('🔍 Checking scaling conditions...');
    
    const { cpuUsage, memoryUsage } = await this.getSystemMetrics();
    this.log(`📊 System metrics - CPU: ${cpuUsage.toFixed(2)}%, Memory: ${memoryUsage.toFixed(2)}%`);
    
    const processName = 'ziontechgroup-web';
    
    if (await this.shouldScaleUp()) {
      this.log('🔥 High resource usage detected, scaling up...');
      await this.scaleUp(processName);
    } else if (await this.shouldScaleDown()) {
      this.log('❄️ Low resource usage detected, scaling down...');
      await this.scaleDown(processName);
    } else {
      this.log('✅ Resource usage is optimal, no scaling needed');
    }
  }

  async run() {
    this.log('🚀 Auto-Scaler started');
    this.log(`📋 Configuration: CPU threshold: ${this.config.cpuThreshold}%, Memory threshold: ${this.config.memoryThreshold}%`);
    this.log(`📋 Min instances: ${this.config.minInstances}, Max instances: ${this.config.maxInstances}`);
    
    // Initial scaling check
    await this.monitorAndScale();
    
    // Set up periodic scaling checks
    setInterval(async () => {
      await this.monitorAndScale();
    }, 120000); // Check every 2 minutes
    
    this.log('✅ Auto-Scaler monitoring active');
  }
}

// Start the auto-scaler
const autoScaler = new AutoScaler();
autoScaler.run().catch(error => {
  console.error('❌ Auto-Scaler failed:', error);
  process.exit(1);
});