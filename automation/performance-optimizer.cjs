#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('⚡ Starting Performance Optimizer...');

class PerformanceOptimizer {
  constructor() {
    this.logFile = path.join(process.cwd(), 'logs', 'performance-optimizer.log');
    this.config = {
      optimizationThreshold: parseInt(process.env.OPTIMIZATION_THRESHOLD) || 80,
      autoOptimize: process.env.AUTO_OPTIMIZE === 'true',
      checkInterval: 2 * 60 * 60 * 1000, // 2 hours
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

  async executeCommand(command, options = {}) {
    try {
      const result = execSync(command, { 
        encoding: 'utf8', 
        stdio: options.silent ? 'pipe' : 'inherit',
        ...options 
      });
      return { success: true, output: result };
    } catch (error) {
      this.log(`❌ Command failed: ${command} - ${error.message}`);
      return { success: false, error: error.message };
    }
  }

  async getPerformanceMetrics() {
    try {
      const cpuUsage = await this.getCPUUsage();
      const memoryUsage = await this.getMemoryUsage();
      const responseTime = await this.getResponseTime();
      
      return {
        cpu: cpuUsage,
        memory: memoryUsage,
        responseTime: responseTime,
        timestamp: new Date().toISOString()
      };
    } catch (error) {
      this.log(`❌ Error getting performance metrics: ${error.message}`);
      return null;
    }
  }

  async getCPUUsage() {
    try {
      const result = execSync("top -bn1 | grep 'Cpu(s)' | awk '{print $2}' | awk -F'%' '{print $1}'", { encoding: 'utf8' });
      return parseFloat(result.trim()) || 0;
    } catch (error) {
      return 0;
    }
  }

  async getMemoryUsage() {
    try {
      const result = execSync("free | grep Mem | awk '{printf \"%.2f\", $3/$2 * 100.0}'", { encoding: 'utf8' });
      return parseFloat(result.trim()) || 0;
    } catch (error) {
      return 0;
    }
  }

  async getResponseTime() {
    try {
      const start = Date.now();
      execSync('curl -s -o /dev/null -w "%{http_code}" http://localhost:3000', { encoding: 'utf8' });
      return Date.now() - start;
    } catch (error) {
      return 9999;
    }
  }

  async optimizePerformance() {
    this.log('🔧 Optimizing performance...');
    
    // Clear PM2 logs
    this.log('🧹 Clearing PM2 logs...');
    await this.executeCommand('pm2 flush');
    
    // Restart PM2 processes
    this.log('🔄 Restarting PM2 processes...');
    await this.executeCommand('pm2 restart all');
    
    // Clear system cache if possible
    this.log('💾 Clearing system cache...');
    await this.executeCommand('sync && echo 3 > /proc/sys/vm/drop_caches', { silent: true });
    
    this.log('✅ Performance optimization completed');
  }

  async checkAndOptimize() {
    this.log('🔍 Checking performance metrics...');
    
    const metrics = await this.getPerformanceMetrics();
    if (!metrics) return;
    
    this.log(`📊 Performance - CPU: ${metrics.cpu.toFixed(2)}%, Memory: ${metrics.memory.toFixed(2)}%, Response: ${metrics.responseTime}ms`);
    
    const needsOptimization = 
      metrics.cpu > this.config.optimizationThreshold || 
      metrics.memory > this.config.optimizationThreshold || 
      metrics.responseTime > 3000;
    
    if (needsOptimization) {
      this.log('⚠️ Performance optimization needed');
      if (this.config.autoOptimize) {
        await this.optimizePerformance();
      } else {
        this.log('ℹ️ Auto-optimization disabled, manual intervention required');
      }
    } else {
      this.log('✅ Performance is optimal');
    }
  }

  async run() {
    this.log('🚀 Performance Optimizer started');
    this.log(`📋 Optimization threshold: ${this.config.optimizationThreshold}%`);
    this.log(`📋 Auto-optimize: ${this.config.autoOptimize}`);
    
    // Initial performance check
    await this.checkAndOptimize();
    
    // Set up periodic performance checks
    setInterval(async () => {
      await this.checkAndOptimize();
    }, this.config.checkInterval);
    
    this.log('✅ Performance monitoring active');
  }
}

// Start the performance optimizer
const performanceOptimizer = new PerformanceOptimizer();
performanceOptimizer.run().catch(error => {
  console.error('❌ Performance Optimizer failed:', error);
  process.exit(1);
});