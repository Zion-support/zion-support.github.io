#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');
const os = require('os');

class IntelligentMonitor {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'logs/pm2/intelligent-monitor.log');
    this.metricsFile = path.join(this.projectRoot, 'logs/pm2/metrics.json');
    this.predictionsFile = path.join(this.projectRoot, 'logs/pm2/predictions.json');
    this.startTime = Date.now();
    this.metrics = {
      system: {},
      application: {},
      performance: {},
      errors: [],
      predictions: {}
    };
    this.ensureDirectories();
  }

  ensureDirectories() {
    const dirs = ['logs/pm2', 'logs/automation', 'logs/reports'];
    dirs.forEach(dir => {
      const dirPath = path.join(this.projectRoot, dir);
      if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
      }
    });
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}`;
    console.log(logMessage);
    try {
      fs.appendFileSync(this.logFile, logMessage + '\n');
    } catch (error) {
      console.error('Failed to write to log file:', error.message);
    }
  }

  async collectSystemMetrics() {
    try {
      const cpus = os.cpus();
      const totalMem = os.totalmem();
      const freeMem = os.freemem();
      const usedMem = totalMem - freeMem;

      this.metrics.system = {
        timestamp: new Date().toISOString(),
        cpu: {
          cores: cpus.length,
          usage: this.getCpuUsage(),
          loadAverage: os.loadavg()
        },
        memory: {
          total: totalMem,
          used: usedMem,
          free: freeMem,
          usagePercent: (usedMem / totalMem) * 100
        },
        uptime: os.uptime(),
        platform: os.platform(),
        arch: os.arch()
      };

      this.log(`📊 System metrics collected - CPU: ${this.metrics.system.cpu.usage}%, Memory: ${this.metrics.system.memory.usagePercent.toFixed(2)}%`);
    } catch (error) {
      this.log(`❌ Error collecting system metrics: ${error.message}`, 'ERROR');
    }
  }

  getCpuUsage() {
    const cpus = os.cpus();
    let totalIdle = 0;
    let totalTick = 0;

    cpus.forEach(cpu => {
      for (const type in cpu.times) {
        totalTick += cpu.times[type];
      }
      totalIdle += cpu.times.idle;
    });

    return 100 - ~~(100 * totalIdle / totalTick);
  }

  async collectApplicationMetrics() {
    try {
      // Check PM2 processes
      const pm2List = execSync('pm2 jlist', { encoding: 'utf8' });
      const processes = JSON.parse(pm2List);

      this.metrics.application = {
        timestamp: new Date().toISOString(),
        pm2Processes: processes.length,
        processes: processes.map(proc => ({
          name: proc.name,
          status: proc.pm2_env.status,
          cpu: proc.monit.cpu,
          memory: proc.monit.memory,
          uptime: proc.pm2_env.uptime,
          restarts: proc.pm2_env.restart_time
        })),
        totalMemory: processes.reduce((sum, proc) => sum + proc.monit.memory, 0),
        totalCpu: processes.reduce((sum, proc) => sum + proc.monit.cpu, 0)
      };

      this.log(`📱 Application metrics collected - ${processes.length} PM2 processes running`);
    } catch (error) {
      this.log(`❌ Error collecting application metrics: ${error.message}`, 'ERROR');
    }
  }

  async collectPerformanceMetrics() {
    try {
      // Check build performance
      const buildStart = Date.now();
      let buildSuccess = false;
      let buildTime = 0;

      try {
        execSync('npm run build', { 
          cwd: this.projectRoot, 
          stdio: 'pipe',
          timeout: 300000 // 5 minutes
        });
        buildSuccess = true;
        buildTime = Date.now() - buildStart;
      } catch (error) {
        this.log(`⚠️ Build failed during performance check: ${error.message}`, 'WARN');
      }

      // Check bundle size
      let bundleSize = 0;
      if (fs.existsSync('dist')) {
        bundleSize = this.calculateDirectorySize('dist');
      }

      this.metrics.performance = {
        timestamp: new Date().toISOString(),
        build: {
          success: buildSuccess,
          time: buildTime,
          size: bundleSize
        },
        bundle: {
          size: bundleSize,
          sizeMB: Math.round(bundleSize / (1024 * 1024) * 100) / 100
        }
      };

      this.log(`⚡ Performance metrics collected - Build: ${buildSuccess ? 'Success' : 'Failed'}, Time: ${buildTime}ms, Size: ${this.metrics.performance.bundle.sizeMB}MB`);
    } catch (error) {
      this.log(`❌ Error collecting performance metrics: ${error.message}`, 'ERROR');
    }
  }

  calculateDirectorySize(dir) {
    let size = 0;
    try {
      const items = fs.readdirSync(dir);
      items.forEach(item => {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
          size += this.calculateDirectorySize(fullPath);
        } else {
          size += stat.size;
        }
      });
    } catch (error) {
      // Silent fail for inaccessible directories
    }
    return size;
  }

  async analyzeErrors() {
    try {
      const errorLogs = [];
      const logDir = path.join(this.projectRoot, 'logs/pm2');
      
      if (fs.existsSync(logDir)) {
        const files = fs.readdirSync(logDir);
        const errorFiles = files.filter(file => file.includes('error'));
        
        for (const file of errorFiles) {
          try {
            const content = fs.readFileSync(path.join(logDir, file), 'utf8');
            const lines = content.split('\n').filter(line => 
              line.includes('ERROR') || line.includes('error') || line.includes('Error')
            );
            errorLogs.push(...lines.slice(-10)); // Last 10 errors
          } catch (error) {
            // Skip files that can't be read
          }
        }
      }

      this.metrics.errors = errorLogs.slice(-50); // Keep last 50 errors
      this.log(`🔍 Error analysis completed - ${errorLogs.length} errors found`);
    } catch (error) {
      this.log(`❌ Error analyzing errors: ${error.message}`, 'ERROR');
    }
  }

  async generatePredictions() {
    try {
      const predictions = {
        timestamp: new Date().toISOString(),
        systemHealth: this.predictSystemHealth(),
        performanceTrend: this.predictPerformanceTrend(),
        resourceUsage: this.predictResourceUsage(),
        recommendations: this.generateRecommendations()
      };

      this.metrics.predictions = predictions;
      this.log(`🔮 Predictions generated - System Health: ${predictions.systemHealth.status}`);
    } catch (error) {
      this.log(`❌ Error generating predictions: ${error.message}`, 'ERROR');
    }
  }

  predictSystemHealth() {
    const cpuUsage = this.metrics.system.cpu?.usage || 0;
    const memoryUsage = this.metrics.system.memory?.usagePercent || 0;
    const errorCount = this.metrics.errors?.length || 0;

    let status = 'healthy';
    let confidence = 0.9;

    if (cpuUsage > 80 || memoryUsage > 85) {
      status = 'warning';
      confidence = 0.7;
    }
    if (cpuUsage > 95 || memoryUsage > 95 || errorCount > 20) {
      status = 'critical';
      confidence = 0.5;
    }

    return { status, confidence, cpuUsage, memoryUsage, errorCount };
  }

  predictPerformanceTrend() {
    // Simple trend analysis based on current metrics
    const buildTime = this.metrics.performance?.build?.time || 0;
    const bundleSize = this.metrics.performance?.bundle?.sizeMB || 0;

    let trend = 'stable';
    if (buildTime > 60000) trend = 'degrading';
    if (bundleSize > 10) trend = 'degrading';
    if (buildTime < 30000 && bundleSize < 5) trend = 'improving';

    return { trend, buildTime, bundleSize };
  }

  predictResourceUsage() {
    const currentCpu = this.metrics.system.cpu?.usage || 0;
    const currentMemory = this.metrics.system.memory?.usagePercent || 0;

    // Simple linear prediction (in reality, this would use more sophisticated algorithms)
    const predictedCpu = Math.min(100, currentCpu * 1.1);
    const predictedMemory = Math.min(100, currentMemory * 1.05);

    return {
      current: { cpu: currentCpu, memory: currentMemory },
      predicted: { cpu: predictedCpu, memory: predictedMemory },
      timeframe: '1 hour'
    };
  }

  generateRecommendations() {
    const recommendations = [];
    const systemHealth = this.metrics.predictions?.systemHealth;

    if (systemHealth?.cpuUsage > 80) {
      recommendations.push({
        priority: 'high',
        category: 'performance',
        message: 'High CPU usage detected',
        action: 'Consider optimizing code or scaling resources'
      });
    }

    if (systemHealth?.memoryUsage > 85) {
      recommendations.push({
        priority: 'high',
        category: 'memory',
        message: 'High memory usage detected',
        action: 'Review memory leaks and optimize data structures'
      });
    }

    if (systemHealth?.errorCount > 10) {
      recommendations.push({
        priority: 'medium',
        category: 'stability',
        message: 'High error rate detected',
        action: 'Review error logs and fix critical issues'
      });
    }

    const performance = this.metrics.performance;
    if (performance?.build?.time > 60000) {
      recommendations.push({
        priority: 'medium',
        category: 'build',
        message: 'Slow build times detected',
        action: 'Optimize build configuration and dependencies'
      });
    }

    if (performance?.bundle?.sizeMB > 5) {
      recommendations.push({
        priority: 'medium',
        category: 'bundle',
        message: 'Large bundle size detected',
        action: 'Implement code splitting and tree shaking'
      });
    }

    if (recommendations.length === 0) {
      recommendations.push({
        priority: 'low',
        category: 'general',
        message: 'System operating optimally',
        action: 'Continue monitoring'
      });
    }

    return recommendations;
  }

  async saveMetrics() {
    try {
      fs.writeFileSync(this.metricsFile, JSON.stringify(this.metrics, null, 2));
      this.log(`💾 Metrics saved to: ${this.metricsFile}`);
    } catch (error) {
      this.log(`❌ Error saving metrics: ${error.message}`, 'ERROR');
    }
  }

  async savePredictions() {
    try {
      fs.writeFileSync(this.predictionsFile, JSON.stringify(this.metrics.predictions, null, 2));
      this.log(`🔮 Predictions saved to: ${this.predictionsFile}`);
    } catch (error) {
      this.log(`❌ Error saving predictions: ${error.message}`, 'ERROR');
    }
  }

  async run() {
    this.log('🚀 Starting Intelligent Monitor...');
    
    try {
      // Collect all metrics
      await this.collectSystemMetrics();
      await this.collectApplicationMetrics();
      await this.collectPerformanceMetrics();
      await this.analyzeErrors();
      await this.generatePredictions();

      // Save data
      await this.saveMetrics();
      await this.savePredictions();

      // Display summary
      this.displaySummary();

      this.log('✅ Intelligent Monitor completed successfully');
    } catch (error) {
      this.log(`❌ Intelligent Monitor failed: ${error.message}`, 'ERROR');
      process.exit(1);
    }
  }

  displaySummary() {
    console.log('\n🎯 INTELLIGENT MONITOR SUMMARY');
    console.log('================================');
    
    const system = this.metrics.system;
    const app = this.metrics.application;
    const perf = this.metrics.performance;
    const predictions = this.metrics.predictions;

    console.log(`📊 System Health: ${predictions?.systemHealth?.status?.toUpperCase() || 'UNKNOWN'}`);
    console.log(`💻 CPU Usage: ${system?.cpu?.usage?.toFixed(2) || 'N/A'}%`);
    console.log(`🧠 Memory Usage: ${system?.memory?.usagePercent?.toFixed(2) || 'N/A'}%`);
    console.log(`📱 PM2 Processes: ${app?.pm2Processes || 0}`);
    console.log(`⚡ Build Time: ${perf?.build?.time || 0}ms`);
    console.log(`📦 Bundle Size: ${perf?.bundle?.sizeMB || 0}MB`);
    console.log(`❌ Errors: ${this.metrics.errors?.length || 0}`);

    if (predictions?.recommendations?.length > 0) {
      console.log('\n💡 Recommendations:');
      predictions.recommendations.forEach(rec => {
        console.log(`  [${rec.priority.toUpperCase()}] ${rec.message}`);
        console.log(`    → ${rec.action}`);
      });
    }

    console.log(`\n📄 Metrics saved to: ${this.metricsFile}`);
    console.log(`🔮 Predictions saved to: ${this.predictionsFile}`);
  }
}

// Run if called directly
if (require.main === module) {
  const monitor = new IntelligentMonitor();
  monitor.run();
}

module.exports = IntelligentMonitor;