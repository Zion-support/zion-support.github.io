#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('⏰ Starting Adaptive Scheduler Automation...');

class AdaptiveScheduler {
  constructor() {
    this.schedulingData = {
      processActivity: new Map(),
      systemLoad: [],
      optimalIntervals: new Map(),
      performanceMetrics: new Map(),
      adaptiveRules: new Map()
    };
    this.reportDir = path.join(process.cwd(), 'adaptive-scheduler-reports');
    this.ensureReportDirectory();
    this.loadSchedulingData();
    this.initializeAdaptiveRules();
    this.baseIntervals = {
      'console-error-fixer': 900000,      // 15 minutes
      'link-checker': 1800000,            // 30 minutes
      'continuous-improvement': 7200000,   // 2 hours
      'daily-build-test': 3600000,        // 1 hour
      'security-audit': 14400000,         // 4 hours
      'dependency-updates': 21600000,     // 6 hours
      'performance-monitor': 7200000,      // 2 hours
      'quality-checks': 10800000,         // 3 hours
      'link-integrity': 7200000,          // 2 hours
      'front-maximizer': 14400000,        // 4 hours
      'sitemap-runner': 21600000          // 6 hours
    };
  }

  ensureReportDirectory() {
    if (!fs.existsSync(this.reportDir)) {
      fs.mkdirSync(this.reportDir, { recursive: true });
    }
  }

  loadSchedulingData() {
    const dataFile = path.join(this.reportDir, 'scheduling-data.json');
    if (fs.existsSync(dataFile)) {
      try {
        const data = JSON.parse(fs.readFileSync(dataFile, 'utf8'));
        this.schedulingData = { ...this.schedulingData, ...data };
        console.log('📚 Loaded existing scheduling data');
      } catch (error) {
        console.log('⚠️ Could not load scheduling data, starting fresh');
      }
    }
  }

  saveSchedulingData() {
    const dataFile = path.join(this.reportDir, 'scheduling-data.json');
    fs.writeFileSync(dataFile, JSON.stringify(this.schedulingData, null, 2));
  }

  initializeAdaptiveRules() {
    // Rule: Increase frequency during high activity
    this.adaptiveRules.set('high-activity', {
      condition: (metrics) => metrics.errorRate > 0.1 || metrics.buildFailures > 2,
      action: (processName) => this.decreaseInterval(processName, 0.5), // 50% faster
      priority: 'high'
    });

    // Rule: Decrease frequency during low activity
    this.adaptiveRules.set('low-activity', {
      condition: (metrics) => metrics.errorRate < 0.01 && metrics.buildFailures === 0,
      action: (processName) => this.increaseInterval(processName, 2), // 2x slower
      priority: 'medium'
    });

    // Rule: Optimize based on system load
    this.adaptiveRules.set('system-load', {
      condition: (metrics) => metrics.cpuUsage > 80 || metrics.memoryUsage > 85,
      action: (processName) => this.optimizeForLoad(processName),
      priority: 'high'
    });

    // Rule: Performance-based adjustment
    this.adaptiveRules.set('performance', {
      condition: (metrics) => metrics.responseTime > 5000 || metrics.buildTime > 120000,
      action: (processName) => this.optimizeForPerformance(processName),
      priority: 'medium'
    });
  }

  async collectSystemMetrics() {
    console.log('📊 Collecting system metrics...');
    
    try {
      // Get PM2 status
      const pm2Status = execSync('pm2 jlist', { encoding: 'utf8' });
      const processes = JSON.parse(pm2Status);
      
      // Get system load
      const systemLoad = this.getSystemLoad();
      
      // Collect process-specific metrics
      for (const process of processes) {
        if (process.name && this.baseIntervals[process.name]) {
          await this.collectProcessMetrics(process);
        }
      }
      
      // Update system load history
      this.schedulingData.systemLoad.push({
        timestamp: Date.now(),
        load: systemLoad,
        processCount: processes.length
      });
      
      // Keep only last 100 entries
      if (this.schedulingData.systemLoad.length > 100) {
        this.schedulingData.systemLoad.splice(0, this.schedulingData.systemLoad.length - 100);
      }
      
    } catch (error) {
      console.log('❌ Failed to collect system metrics:', error.message);
    }
  }

  getSystemLoad() {
    try {
      // Get CPU usage
      const cpuUsage = execSync("top -bn1 | grep 'Cpu(s)' | awk '{print $2}' | cut -d'%' -f1", { 
        encoding: 'utf8' 
      }).trim();
      
      // Get memory usage
      const memoryInfo = execSync("free | grep Mem | awk '{print $3/$2 * 100.0}'", { 
        encoding: 'utf8' 
      }).trim();
      
      return {
        cpu: parseFloat(cpuUsage) || 0,
        memory: parseFloat(memoryInfo) || 0,
        timestamp: Date.now()
      };
    } catch (error) {
      return { cpu: 0, memory: 0, timestamp: Date.now() };
    }
  }

  async collectProcessMetrics(process) {
    const processName = process.name;
    
    if (!this.schedulingData.processActivity.has(processName)) {
      this.schedulingData.processActivity.set(processName, {
        restarts: 0,
        errors: 0,
        lastRun: null,
        performance: [],
        buildFailures: 0,
        errorRate: 0
      });
    }
    
    const metrics = this.schedulingData.processActivity.get(processName);
    
    // Update restart count
    metrics.restarts = process.pm2_env.restart_time || 0;
    
    // Get recent logs for error analysis
    try {
      const logs = execSync(`pm2 logs ${processName} --lines 50 --nostream`, { 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      
      const errorCount = (logs.match(/ERROR|Error|Failed|failed/g) || []).length;
      metrics.errors = errorCount;
      
      // Calculate error rate based on recent activity
      const recentActivity = this.getRecentActivity(processName);
      metrics.errorRate = recentActivity > 0 ? errorCount / recentActivity : 0;
      
    } catch (error) {
      console.log(`⚠️ Could not collect logs for ${processName}:`, error.message);
    }
    
    // Update last run time
    if (process.pm2_env.pm_uptime) {
      metrics.lastRun = Date.now() - (process.pm2_env.pm_uptime * 1000);
    }
    
    // Collect performance metrics
    const performance = {
      timestamp: Date.now(),
      cpu: process.monit?.cpu || 0,
      memory: process.monit?.memory || 0,
      uptime: process.pm2_env.pm_uptime || 0
    };
    
    metrics.performance.push(performance);
    
    // Keep only last 50 performance entries
    if (metrics.performance.length > 50) {
      metrics.performance.splice(0, metrics.performance.length - 50);
    }
    
    // Check for build failures
    if (processName.includes('build') || processName.includes('test')) {
      try {
        const buildLogs = execSync(`pm2 logs ${processName} --lines 100 --nostream`, { 
          encoding: 'utf8',
          stdio: 'pipe'
        });
        
        if (buildLogs.includes('Build failed') || buildLogs.includes('build failed')) {
          metrics.buildFailures++;
        }
      } catch (error) {
        // Ignore log collection errors
      }
    }
  }

  getRecentActivity(processName) {
    const metrics = this.schedulingData.processActivity.get(processName);
    if (!metrics || !metrics.performance.length) return 0;
    
    // Count activity in last hour
    const oneHourAgo = Date.now() - (60 * 60 * 1000);
    return metrics.performance.filter(p => p.timestamp > oneHourAgo).length;
  }

  async analyzeAndAdjust() {
    console.log('🧠 Analyzing metrics and adjusting schedules...');
    
    for (const [processName, metrics] of this.schedulingData.processActivity) {
      const currentInterval = this.getCurrentInterval(processName);
      const optimalInterval = this.calculateOptimalInterval(processName, metrics);
      
      if (Math.abs(currentInterval - optimalInterval) > currentInterval * 0.1) {
        console.log(`🔄 Adjusting ${processName}: ${currentInterval}ms → ${optimalInterval}ms`);
        await this.adjustProcessInterval(processName, optimalInterval);
      }
    }
  }

  calculateOptimalInterval(processName, metrics) {
    let baseInterval = this.baseIntervals[processName] || 3600000; // Default 1 hour
    
    // Apply adaptive rules
    for (const [ruleName, rule] of this.adaptiveRules) {
      if (rule.condition(metrics)) {
        const adjustedInterval = rule.action(processName, baseInterval);
        if (adjustedInterval) {
          baseInterval = adjustedInterval;
        }
      }
    }
    
    // Ensure minimum and maximum bounds
    const minInterval = baseInterval * 0.25; // 25% of base
    const maxInterval = baseInterval * 4;    // 4x base
    
    return Math.max(minInterval, Math.min(maxInterval, baseInterval));
  }

  decreaseInterval(processName, factor) {
    const currentInterval = this.getCurrentInterval(processName);
    return Math.floor(currentInterval * factor);
  }

  increaseInterval(processName, factor) {
    const currentInterval = this.getCurrentInterval(processName);
    return Math.floor(currentInterval * factor);
  }

  optimizeForLoad(processName) {
    const currentInterval = this.getCurrentInterval(processName);
    // Increase interval to reduce system load
    return Math.floor(currentInterval * 1.5);
  }

  optimizeForPerformance(processName) {
    const currentInterval = this.getCurrentInterval(processName);
    // Decrease interval for better performance monitoring
    return Math.floor(currentInterval * 0.7);
  }

  getCurrentInterval(processName) {
    try {
      // Try to get current interval from PM2
      const pm2Status = execSync('pm2 jlist', { encoding: 'utf8' });
      const processes = JSON.parse(pm2Status);
      const process = processes.find(p => p.name === processName);
      
      if (process && process.pm2_env.env && process.pm2_env.env.AUTOMATION_INTERVAL) {
        return parseInt(process.pm2_env.env.AUTOMATION_INTERVAL);
      }
    } catch (error) {
      console.log(`⚠️ Could not get current interval for ${processName}:`, error.message);
    }
    
    return this.baseIntervals[processName] || 3600000;
  }

  async adjustProcessInterval(processName, newInterval) {
    try {
      console.log(`⚙️ Updating ${processName} interval to ${newInterval}ms`);
      
      // Update ecosystem config
      const ecosystemPath = path.join(process.cwd(), 'ecosystem.config.cjs');
      if (fs.existsSync(ecosystemPath)) {
        let config = fs.readFileSync(ecosystemPath, 'utf8');
        
        // Find and update the AUTOMATION_INTERVAL for this process
        const processRegex = new RegExp(`(name:\\s*'${processName}'[\\s\\S]*?AUTOMATION_INTERVAL:\\s*')([^']+)(')`, 'g');
        config = config.replace(processRegex, `$1${newInterval}$3`);
        
        fs.writeFileSync(ecosystemPath, config);
        
        // Reload PM2 configuration
        execSync('pm2 reload ecosystem.config.cjs', { stdio: 'inherit' });
        
        // Update optimal intervals tracking
        this.schedulingData.optimalIntervals.set(processName, {
          interval: newInterval,
          timestamp: Date.now(),
          reason: 'adaptive-scheduling'
        });
        
        console.log(`✅ Successfully updated ${processName} interval`);
      }
    } catch (error) {
      console.log(`❌ Failed to update ${processName} interval:`, error.message);
    }
  }

  async generateSchedulingReport() {
    const report = {
      timestamp: Date.now(),
      summary: {
        totalProcesses: this.schedulingData.processActivity.size,
        adjustedProcesses: this.schedulingData.optimalIntervals.size,
        systemLoad: this.getAverageSystemLoad(),
        recommendations: this.generateRecommendations()
      },
      processIntervals: this.getProcessIntervalSummary(),
      systemMetrics: this.schedulingData.systemLoad.slice(-10),
      adaptiveActions: Array.from(this.schedulingData.optimalIntervals.entries())
    };
    
    const reportFile = path.join(this.reportDir, `scheduling-report-${Date.now()}.json`);
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    
    console.log(`📊 Scheduling report generated: ${reportFile}`);
  }

  getAverageSystemLoad() {
    if (this.schedulingData.systemLoad.length === 0) return { cpu: 0, memory: 0 };
    
    const recent = this.schedulingData.systemLoad.slice(-10);
    const avgCpu = recent.reduce((sum, load) => sum + load.load.cpu, 0) / recent.length;
    const avgMemory = recent.reduce((sum, load) => sum + load.load.memory, 0) / recent.length;
    
    return {
      cpu: Math.round(avgCpu * 100) / 100,
      memory: Math.round(avgMemory * 100) / 100
    };
  }

  getProcessIntervalSummary() {
    const summary = {};
    
    for (const [processName, baseInterval] of Object.entries(this.baseIntervals)) {
      const currentInterval = this.getCurrentInterval(processName);
      const optimalInterval = this.schedulingData.optimalIntervals.get(processName)?.interval || currentInterval;
      
      summary[processName] = {
        base: baseInterval,
        current: currentInterval,
        optimal: optimalInterval,
        adjusted: currentInterval !== baseInterval,
        adjustmentFactor: Math.round((currentInterval / baseInterval) * 100) / 100
      };
    }
    
    return summary;
  }

  generateRecommendations() {
    const recommendations = [];
    
    // Check for processes that might need more frequent runs
    for (const [processName, metrics] of this.schedulingData.processActivity) {
      if (metrics.errorRate > 0.2) {
        recommendations.push({
          type: 'error-reduction',
          process: processName,
          suggestion: `Consider decreasing interval for ${processName} due to high error rate (${(metrics.errorRate * 100).toFixed(1)}%)`,
          priority: 'high'
        });
      }
      
      if (metrics.buildFailures > 3) {
        recommendations.push({
          type: 'build-improvement',
          process: processName,
          suggestion: `Increase monitoring frequency for ${processName} due to build failures`,
          priority: 'medium'
        });
      }
    }
    
    // Check system load recommendations
    const avgLoad = this.getAverageSystemLoad();
    if (avgLoad.cpu > 70) {
      recommendations.push({
        type: 'system-optimization',
        suggestion: 'Consider increasing intervals for non-critical processes due to high CPU usage',
        priority: 'medium'
      });
    }
    
    if (avgLoad.memory > 80) {
      recommendations.push({
        type: 'memory-optimization',
        suggestion: 'Consider memory optimization or process interval adjustments',
        priority: 'high'
      });
    }
    
    return recommendations;
  }

  async run() {
    console.log('🚀 Starting adaptive scheduling cycle...');
    
    try {
      await this.collectSystemMetrics();
      await this.analyzeAndAdjust();
      this.generateSchedulingReport();
      this.saveSchedulingData();
      
      console.log('✅ Adaptive scheduling cycle completed');
    } catch (error) {
      console.log('❌ Adaptive scheduling cycle failed:', error.message);
    }
  }
}

// Run the automation
const automation = new AdaptiveScheduler();
automation.run().catch(console.error);