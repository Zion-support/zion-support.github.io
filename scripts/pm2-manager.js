#!/usr/bin/env node

import { exec } from 'child_process';
import { promisify } from 'util';
import fs from 'fs';
import path from 'path';

const execAsync = promisify(exec);

class ZionPM2Manager {
  constructor() {
    this.config = {
      logDir: './logs',
      scalingRules: {
        'zion-frontend-prod': {
          minInstances: 2,
          maxInstances: 8,
          cpuThreshold: 70,
          memoryThreshold: 80,
          responseTimeThreshold: 1000
        },
        'zion-backend-prod': {
          minInstances: 2,
          maxInstances: 6,
          cpuThreshold: 75,
          memoryThreshold: 85,
          responseTimeThreshold: 800
        }
      },
      optimizationRules: {
        memoryOptimization: {
          enabled: true,
          threshold: 75,
          action: 'restart'
        },
        cpuOptimization: {
          enabled: true,
          threshold: 80,
          action: 'scale'
        }
      }
    };
    
    this.init();
  }

  async init() {
    console.log('🎯 Zion PM2 Manager Starting...');
    this.ensureLogDirectory();
    this.startAutoScaling();
    this.startOptimization();
    this.startPerformanceMonitoring();
  }

  ensureLogDirectory() {
    if (!fs.existsSync(this.config.logDir)) {
      fs.mkdirSync(this.config.logDir, { recursive: true });
    }
  }

  startAutoScaling() {
    setInterval(async () => {
      await this.performAutoScaling();
    }, 30000); // Every 30 seconds
  }

  startOptimization() {
    setInterval(async () => {
      await this.performOptimization();
    }, 60000); // Every minute
  }

  startPerformanceMonitoring() {
    setInterval(async () => {
      await this.monitorPerformance();
    }, 15000); // Every 15 seconds
  }

  async performAutoScaling() {
    try {
      const processes = await this.getPM2Processes();
      
      for (const process of processes) {
        if (this.config.scalingRules[process.name]) {
          await this.scaleProcess(process);
        }
      }
    } catch (error) {
      console.error('❌ Auto-scaling failed:', error.message);
    }
  }

  async performOptimization() {
    try {
      const processes = await this.getPM2Processes();
      
      for (const process of processes) {
        await this.optimizeProcess(process);
      }
    } catch (error) {
      console.error('❌ Optimization failed:', error.message);
    }
  }

  async monitorPerformance() {
    try {
      const processes = await this.getPM2Processes();
      const performanceData = this.analyzePerformance(processes);
      
      if (performanceData.alerts.length > 0) {
        await this.handlePerformanceAlerts(performanceData.alerts);
      }
      
      this.logPerformanceData(performanceData);
    } catch (error) {
      console.error('❌ Performance monitoring failed:', error.message);
    }
  }

  async getPM2Processes() {
    try {
      const { stdout } = await execAsync('pm2 jlist');
      return JSON.parse(stdout);
    } catch (error) {
      console.error('❌ Error getting PM2 processes:', error.message);
      return [];
    }
  }

  async scaleProcess(process) {
    const rules = this.config.scalingRules[process.name];
    if (!rules) return;
    
    const currentInstances = process.pm2_env.instances;
    let shouldScale = false;
    let scaleAction = null;
    
    // Check CPU usage
    if (process.monit.cpu > rules.cpuThreshold) {
      shouldScale = true;
      scaleAction = 'scale_up';
    }
    
    // Check memory usage
    if (process.monit.memory > rules.memoryThreshold) {
      shouldScale = true;
      scaleAction = 'scale_up';
    }
    
    // Check if we can scale down
    if (process.monit.cpu < rules.cpuThreshold * 0.5 && 
        process.monit.cpu < rules.memoryThreshold * 0.5 &&
        currentInstances > rules.minInstances) {
      shouldScale = true;
      scaleAction = 'scale_down';
    }
    
    if (shouldScale) {
      await this.executeScaling(process, scaleAction, rules);
    }
  }

  async executeScaling(process, action, rules) {
    const currentInstances = process.pm2_env.instances;
    let newInstances = currentInstances;
    
    if (action === 'scale_up' && currentInstances < rules.maxInstances) {
      newInstances = Math.min(currentInstances + 1, rules.maxInstances);
    } else if (action === 'scale_down' && currentInstances > rules.minInstances) {
      newInstances = Math.max(currentInstances - 1, rules.minInstances);
    }
    
    if (newInstances !== currentInstances) {
      try {
        await execAsync(`pm2 scale ${process.name} ${newInstances}`);
        console.log(`📈 Scaled ${process.name} from ${currentInstances} to ${newInstances} instances`);
        
        this.logScalingAction(process, action, currentInstances, newInstances);
      } catch (error) {
        console.error(`❌ Failed to scale ${process.name}:`, error.message);
      }
    }
  }

  async optimizeProcess(process) {
    // Memory optimization
    if (this.config.optimizationRules.memoryOptimization.enabled &&
        process.monit.memory > this.config.optimizationRules.memoryOptimization.threshold) {
      await this.optimizeMemory(process);
    }
    
    // CPU optimization
    if (this.config.optimizationRules.cpuOptimization.enabled &&
        process.monit.cpu > this.config.optimizationRules.cpuOptimization.threshold) {
      await this.optimizeCPU(process);
    }
  }

  async optimizeMemory(process) {
    const action = this.config.optimizationRules.memoryOptimization.action;
    
    if (action === 'restart') {
      try {
        await execAsync(`pm2 restart ${process.name}`);
        console.log(`🔄 Restarted ${process.name} due to high memory usage (${process.monit.memory}%)`);
        
        this.logOptimizationAction(process, 'memory_restart', process.monit.memory);
      } catch (error) {
        console.error(`❌ Failed to restart ${process.name}:`, error.message);
      }
    }
  }

  async optimizeCPU(process) {
    const action = this.config.optimizationRules.cpuOptimization.action;
    
    if (action === 'scale') {
      try {
        const currentInstances = process.pm2_env.instances;
        const newInstances = Math.min(currentInstances + 1, 8); // Max 8 instances
        
        if (newInstances > currentInstances) {
          await execAsync(`pm2 scale ${process.name} ${newInstances}`);
          console.log(`📈 Scaled ${process.name} to ${newInstances} instances due to high CPU usage (${process.monit.cpu}%)`);
          
          this.logOptimizationAction(process, 'cpu_scale', process.monit.cpu);
        }
      } catch (error) {
        console.error(`❌ Failed to scale ${process.name}:`, error.message);
      }
    }
  }

  analyzePerformance(processes) {
    const alerts = [];
    const recommendations = [];
    
    processes.forEach(process => {
      // High memory usage
      if (process.monit.memory > 90) {
        alerts.push({
          type: 'CRITICAL_MEMORY',
          process: process.name,
          value: process.monit.memory,
          threshold: 90,
          message: `${process.name} using ${process.monit.memory}% memory`
        });
      }
      
      // High CPU usage
      if (process.monit.cpu > 95) {
        alerts.push({
          type: 'CRITICAL_CPU',
          process: process.name,
          value: process.monit.cpu,
          threshold: 95,
          message: `${process.name} using ${process.monit.cpu}% CPU`
        });
      }
      
      // Frequent restarts
      if (process.pm2_env.restart_time > 10) {
        alerts.push({
          type: 'FREQUENT_RESTARTS',
          process: process.name,
          value: process.pm2_env.restart_time,
          threshold: 10,
          message: `${process.name} restarted ${process.pm2_env.restart_time} times`
        });
      }
      
      // Generate recommendations
      if (process.monit.memory > 80) {
        recommendations.push(`Consider scaling ${process.name} or investigating memory leaks`);
      }
      
      if (process.monit.cpu > 85) {
        recommendations.push(`Consider scaling ${process.name} or optimizing CPU-intensive operations`);
      }
    });
    
    return { alerts, recommendations, processes };
  }

  async handlePerformanceAlerts(alerts) {
    for (const alert of alerts) {
      console.warn(`⚠️  PERFORMANCE ALERT: ${alert.message}`);
      
      // Auto-recovery for critical alerts
      if (alert.type === 'CRITICAL_MEMORY' || alert.type === 'CRITICAL_CPU') {
        await this.autoRecover(alert);
      }
    }
  }

  async autoRecover(alert) {
    try {
      if (alert.type === 'CRITICAL_MEMORY') {
        await execAsync(`pm2 restart ${alert.process}`);
        console.log(`🔄 Auto-recovered ${alert.process} due to critical memory usage`);
      } else if (alert.type === 'CRITICAL_CPU') {
        const currentInstances = await this.getProcessInstances(alert.process);
        const newInstances = Math.min(currentInstances + 1, 8);
        await execAsync(`pm2 scale ${alert.process} ${newInstances}`);
        console.log(`📈 Auto-scaled ${alert.process} to ${newInstances} instances due to critical CPU usage`);
      }
      
      this.logAutoRecovery(alert);
    } catch (error) {
      console.error(`❌ Auto-recovery failed for ${alert.process}:`, error.message);
    }
  }

  async getProcessInstances(processName) {
    try {
      const { stdout } = await execAsync(`pm2 show ${processName}`);
      const match = stdout.match(/instances\s*:\s*(\d+)/);
      return match ? parseInt(match[1]) : 1;
    } catch (error) {
      return 1;
    }
  }

  logScalingAction(process, action, oldInstances, newInstances) {
    const logEntry = {
      timestamp: new Date().toISOString(),
      process: process.name,
      action,
      oldInstances,
      newInstances,
      reason: 'auto_scaling'
    };
    
    const logPath = path.join(this.config.logDir, `scaling-${Date.now()}.json`);
    fs.writeFileSync(logPath, JSON.stringify(logEntry, null, 2));
  }

  logOptimizationAction(process, action, value) {
    const logEntry = {
      timestamp: new Date().toISOString(),
      process: process.name,
      action,
      value,
      reason: 'optimization'
    };
    
    const logPath = path.join(this.config.logDir, `optimization-${Date.now()}.json`);
    fs.writeFileSync(logPath, JSON.stringify(logEntry, null, 2));
  }

  logAutoRecovery(alert) {
    const logEntry = {
      timestamp: new Date().toISOString(),
      alert,
      recoveryAction: 'auto_recovery',
      status: 'completed'
    };
    
    const logPath = path.join(this.config.logDir, `auto-recovery-${Date.now()}.json`);
    fs.writeFileSync(logPath, JSON.stringify(logEntry, null, 2));
  }

  logPerformanceData(performanceData) {
    const logEntry = {
      timestamp: new Date().toISOString(),
      alerts: performanceData.alerts.length,
      recommendations: performanceData.recommendations.length,
      processes: performanceData.processes.length
    };
    
    const logPath = path.join(this.config.logDir, `performance-${Date.now()}.json`);
    fs.writeFileSync(logPath, JSON.stringify(logEntry, null, 2));
  }

  async getStatus() {
    try {
      const processes = await this.getPM2Processes();
      const status = {
        timestamp: new Date().toISOString(),
        totalProcesses: processes.length,
        runningProcesses: processes.filter(p => p.pm2_env.status === 'online').length,
        erroredProcesses: processes.filter(p => p.pm2_env.status === 'errored').length,
        stoppedProcesses: processes.filter(p => p.pm2_env.status === 'stopped').length,
        scalingRules: Object.keys(this.config.scalingRules),
        optimizationEnabled: {
          memory: this.config.optimizationRules.memoryOptimization.enabled,
          cpu: this.config.optimizationRules.cpuOptimization.enabled
        }
      };
      
      return status;
    } catch (error) {
      return { error: error.message };
    }
  }

  async executeCommand(command, args = []) {
    try {
      const { stdout } = await execAsync(`pm2 ${command} ${args.join(' ')}`);
      return { success: true, output: stdout };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }
}

// Start the PM2 manager
const pm2Manager = new ZionPM2Manager();

// Handle graceful shutdown
process.on('SIGINT', () => {
  console.log('\n🛑 Shutting down Zion PM2 Manager...');
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('\n🛑 Shutting down Zion PM2 Manager...');
  process.exit(0);
});

// Export for potential external use
export default pm2Manager;