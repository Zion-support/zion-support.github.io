#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🧠 Starting Intelligent PM2 Orchestrator...');

class IntelligentOrchestrator {
  constructor() {
    this.logFile = path.join(process.cwd(), 'logs', 'orchestrator.log');
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

  async checkPM2Status() {
    try {
      const status = execSync('pm2 jlist', { encoding: 'utf8' });
      return JSON.parse(status);
    } catch (error) {
      this.log(`❌ Error checking PM2 status: ${error.message}`);
      return [];
    }
  }

  async restartProcess(processName) {
    try {
      execSync(`pm2 restart ${processName}`, { stdio: 'inherit' });
      this.log(`✅ Restarted process: ${processName}`);
      return true;
    } catch (error) {
      this.log(`❌ Failed to restart ${processName}: ${error.message}`);
      return false;
    }
  }

  async scaleProcess(processName, instances) {
    try {
      execSync(`pm2 scale ${processName} ${instances}`, { stdio: 'inherit' });
      this.log(`📈 Scaled ${processName} to ${instances} instances`);
      return true;
    } catch (error) {
      this.log(`❌ Failed to scale ${processName}: ${error.message}`);
      return false;
    }
  }

  async monitorAndOptimize() {
    this.log('🔍 Starting intelligent monitoring...');
    
    const processes = await this.checkPM2Status();
    
    for (const process of processes) {
      if (!process.pm2_env) continue;
      
      const { name, status, monit } = process;
      const { cpu, memory } = monit || {};
      
      this.log(`📊 Process: ${name} | Status: ${status} | CPU: ${cpu}% | Memory: ${memory}MB`);
      
      // Auto-restart if process is errored
      if (status === 'errored') {
        this.log(`⚠️ Process ${name} is errored, attempting restart...`);
        await this.restartProcess(name);
      }
      
      // Scale up if high CPU usage
      if (cpu > 80 && name === 'ziontechgroup-web') {
        this.log(`🔥 High CPU usage detected for ${name}, scaling up...`);
        await this.scaleProcess(name, 'max');
      }
      
      // Scale down if low CPU usage
      if (cpu < 20 && name === 'ziontechgroup-web') {
        this.log(`❄️ Low CPU usage detected for ${name}, scaling down...`);
        await this.scaleProcess(name, 1);
      }
    }
  }

  async run() {
    this.log('🚀 Intelligent PM2 Orchestrator started');
    
    // Initial monitoring
    await this.monitorAndOptimize();
    
    // Set up periodic monitoring
    setInterval(async () => {
      await this.monitorAndOptimize();
    }, 60000); // Check every minute
    
    this.log('✅ Orchestrator monitoring active');
  }
}

// Start the orchestrator
const orchestrator = new IntelligentOrchestrator();
orchestrator.run().catch(error => {
  console.error('❌ Orchestrator failed:', error);
  process.exit(1);
});