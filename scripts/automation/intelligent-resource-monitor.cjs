#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🧠 Starting Intelligent Resource Monitor...');

class IntelligentResourceMonitor {
  constructor() {
    this.monitoringResults = {
      systemResources: {},
      pm2Processes: {},
      resourceTrends: [],
      alerts: [],
      recommendations: [],
      healthScore: 0,
      timestamp: new Date().toISOString()
    };
    this.reportDir = path.join(process.cwd(), 'resource-monitoring-reports');
    this.ensureReportDirectory();
    this.resourceThresholds = {
      cpu: { warning: 70, critical: 90 },
      memory: { warning: 80, critical: 95 },
      disk: { warning: 85, critical: 95 },
      processMemory: { warning: 500, critical: 1000 }, // MB
      processCPU: { warning: 80, critical: 95 }
    };
    this.monitoringInterval = 30000; // 30 seconds
    this.isMonitoring = false;
  }

  ensureReportDirectory() {
    if (!fs.existsSync(this.reportDir)) {
      fs.mkdirSync(this.reportDir, { recursive: true });
    }
  }

  async startMonitoring() {
    console.log('🚀 Starting intelligent resource monitoring...');
    
    this.isMonitoring = true;
    
    try {
      // Initial monitoring cycle
      await this.performMonitoringCycle();
      
      // Set up continuous monitoring
      this.monitoringInterval = setInterval(async () => {
        if (this.isMonitoring) {
          await this.performMonitoringCycle();
        }
      }, this.monitoringInterval);
      
      console.log('✅ Intelligent resource monitoring started');
      
      // Keep the process alive
      process.on('SIGINT', () => {
        this.stopMonitoring();
        process.exit(0);
      });
      
      process.on('SIGTERM', () => {
        this.stopMonitoring();
        process.exit(0);
      });
      
    } catch (error) {
      console.error('❌ Failed to start resource monitoring:', error.message);
      throw error;
    }
  }

  stopMonitoring() {
    console.log('🛑 Stopping intelligent resource monitoring...');
    this.isMonitoring = false;
    
    if (this.monitoringInterval) {
      clearInterval(this.monitoringInterval);
    }
    
    console.log('✅ Resource monitoring stopped');
  }

  async performMonitoringCycle() {
    try {
      console.log(`\n📊 Monitoring cycle started at ${new Date().toLocaleTimeString()}`);
      
      await this.monitorSystemResources();
      await this.monitorPM2Processes();
      await this.analyzeResourceTrends();
      await this.generateAlerts();
      await this.generateRecommendations();
      await this.calculateHealthScore();
      await this.saveMonitoringReport();
      
      console.log('✅ Monitoring cycle completed');
      
    } catch (error) {
      console.error('❌ Monitoring cycle failed:', error.message);
    }
  }

  async monitorSystemResources() {
    console.log('💻 Monitoring system resources...');
    
    try {
      const resources = {
        cpu: await this.getCPUUsage(),
        memory: await this.getMemoryUsage(),
        disk: await this.getDiskUsage(),
        network: await this.getNetworkStats(),
        timestamp: new Date().toISOString()
      };
      
      this.monitoringResults.systemResources = resources;
      
      // Store in trends for analysis
      this.monitoringResults.resourceTrends.push({
        timestamp: new Date().toISOString(),
        cpu: resources.cpu,
        memory: resources.memory,
        disk: resources.disk
      });
      
      // Keep only last 100 data points
      if (this.monitoringResults.resourceTrends.length > 100) {
        this.monitoringResults.resourceTrends = this.monitoringResults.resourceTrends.slice(-100);
      }
      
      console.log(`💻 CPU: ${resources.cpu}%, Memory: ${resources.memory}%, Disk: ${resources.disk}%`);
      
    } catch (error) {
      console.log('⚠️  System resource monitoring failed:', error.message);
    }
  }

  async getCPUUsage() {
    try {
      // Use top command to get CPU usage
      const topOutput = execSync('top -bn1 | grep "Cpu(s)" | awk \'{print $2}\' | cut -d\'%\' -f1', { 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      
      return parseFloat(topOutput.trim()) || 0;
    } catch (error) {
      // Fallback to /proc/loadavg
      try {
        const loadavg = fs.readFileSync('/proc/loadavg', 'utf8');
        const load = parseFloat(loadavg.split(' ')[0]);
        return Math.min(100, load * 25); // Rough conversion
      } catch (fallbackError) {
        return 0;
      }
    }
  }

  async getMemoryUsage() {
    try {
      const meminfo = fs.readFileSync('/proc/meminfo', 'utf8');
      const lines = meminfo.split('\n');
      
      let total = 0;
      let available = 0;
      
      lines.forEach(line => {
        if (line.startsWith('MemTotal:')) {
          total = parseInt(line.split(/\s+/)[1]);
        } else if (line.startsWith('MemAvailable:')) {
          available = parseInt(line.split(/\s+/)[1]);
        }
      });
      
      if (total > 0 && available > 0) {
        return Math.round(((total - available) / total) * 100);
      }
      
      return 0;
    } catch (error) {
      return 0;
    }
  }

  async getDiskUsage() {
    try {
      const dfOutput = execSync('df / | tail -1 | awk \'{print $5}\' | cut -d\'%\' -f1', { 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      
      return parseInt(dfOutput.trim()) || 0;
    } catch (error) {
      return 0;
    }
  }

  async getNetworkStats() {
    try {
      const netstatOutput = execSync('netstat -i | tail -n +3 | awk \'{sum += $8} END {print sum}\'', { 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      
      return {
        totalBytes: parseInt(netstatOutput.trim()) || 0,
        timestamp: new Date().toISOString()
      };
    } catch (error) {
      return { totalBytes: 0, timestamp: new Date().toISOStringString() };
    }
  }

  async monitorPM2Processes() {
    console.log('📱 Monitoring PM2 processes...');
    
    try {
      const pm2Processes = execSync('pm2 jlist', { encoding: 'utf8' });
      const processes = JSON.parse(pm2Processes);
      
      const processStats = {
        total: processes.length,
        online: 0,
        errored: 0,
        stopped: 0,
        processes: [],
        resourceUsage: {
          totalMemory: 0,
          totalCPU: 0,
          averageMemory: 0,
          averageCPU: 0
        }
      };
      
      let totalMemory = 0;
      let totalCPU = 0;
      
      processes.forEach(proc => {
        const status = proc.pm2_env.status;
        const memory = proc.monit.memory || 0;
        const cpu = proc.monit.cpu || 0;
        
        if (status === 'online') processStats.online++;
        else if (status === 'errored') processStats.errored++;
        else if (status === 'stopped') processStats.stopped++;
        
        totalMemory += memory;
        totalCPU += cpu;
        
        processStats.processes.push({
          name: proc.name,
          status: status,
          memory: Math.round(memory / 1024 / 1024), // MB
          cpu: cpu,
          uptime: proc.pm2_env.pm_uptime || 0,
          restarts: proc.pm2_env.restart_time || 0,
          pm_id: proc.pm_id
        });
      });
      
      if (processStats.total > 0) {
        processStats.resourceUsage.totalMemory = Math.round(totalMemory / 1024 / 1024); // MB
        processStats.resourceUsage.totalCPU = totalCPU;
        processStats.resourceUsage.averageMemory = Math.round(totalMemory / 1024 / 1024 / processStats.total);
        processStats.resourceUsage.averageCPU = Math.round(totalCPU / processStats.total);
      }
      
      this.monitoringResults.pm2Processes = processStats;
      console.log(`📱 PM2: ${processStats.online}/${processStats.total} online, Memory: ${processStats.resourceUsage.totalMemory}MB, CPU: ${processStats.resourceUsage.averageCPU}%`);
      
    } catch (error) {
      console.log('⚠️  PM2 process monitoring failed:', error.message);
    }
  }

  async analyzeResourceTrends() {
    console.log('📈 Analyzing resource trends...');
    
    try {
      const trends = this.monitoringResults.resourceTrends;
      
      if (trends.length < 2) {
        console.log('📈 Insufficient data for trend analysis');
        return;
      }
      
      const recentTrends = trends.slice(-10); // Last 10 data points
      
      // Calculate trends
      const cpuTrend = this.calculateTrend(recentTrends.map(t => t.cpu));
      const memoryTrend = this.calculateTrend(recentTrends.map(t => t.memory));
      const diskTrend = this.calculateTrend(recentTrends.map(t => t.disk));
      
      const trendAnalysis = {
        cpu: {
          trend: cpuTrend,
          direction: cpuTrend > 0 ? 'increasing' : cpuTrend < 0 ? 'decreasing' : 'stable',
          rate: Math.abs(cpuTrend)
        },
        memory: {
          trend: memoryTrend,
          direction: memoryTrend > 0 ? 'increasing' : memoryTrend < 0 ? 'decreasing' : 'stable',
          rate: Math.abs(memoryTrend)
        },
        disk: {
          trend: diskTrend,
          direction: diskTrend > 0 ? 'increasing' : diskTrend < 0 ? 'decreasing' : 'stable',
          rate: Math.abs(diskTrend)
        }
      };
      
      this.monitoringResults.trendAnalysis = trendAnalysis;
      console.log(`📈 Trends - CPU: ${trendAnalysis.cpu.direction}, Memory: ${trendAnalysis.memory.direction}, Disk: ${trendAnalysis.disk.direction}`);
      
    } catch (error) {
      console.log('⚠️  Resource trend analysis failed:', error.message);
    }
  }

  calculateTrend(values) {
    if (values.length < 2) return 0;
    
    const n = values.length;
    let sumX = 0, sumY = 0, sumXY = 0, sumX2 = 0;
    
    values.forEach((value, index) => {
      sumX += index;
      sumY += value;
      sumXY += index * value;
      sumX2 += index * index;
    });
    
    const slope = (n * sumXY - sumX * sumY) / (n * sumX2 - sumX * sumX);
    return slope;
  }

  async generateAlerts() {
    console.log('🚨 Generating resource alerts...');
    
    const alerts = [];
    
    // System resource alerts
    const resources = this.monitoringResults.systemResources;
    
    if (resources.cpu > this.resourceThresholds.cpu.critical) {
      alerts.push({
        level: 'critical',
        category: 'system',
        resource: 'cpu',
        message: `Critical CPU usage: ${resources.cpu}%`,
        threshold: this.resourceThresholds.cpu.critical,
        current: resources.cpu,
        timestamp: new Date().toISOString()
      });
    } else if (resources.cpu > this.resourceThresholds.cpu.warning) {
      alerts.push({
        level: 'warning',
        category: 'system',
        resource: 'cpu',
        message: `High CPU usage: ${resources.cpu}%`,
        threshold: this.resourceThresholds.cpu.warning,
        current: resources.cpu,
        timestamp: new Date().toISOString()
      });
    }
    
    if (resources.memory > this.resourceThresholds.memory.critical) {
      alerts.push({
        level: 'critical',
        category: 'system',
        resource: 'memory',
        message: `Critical memory usage: ${resources.memory}%`,
        threshold: this.resourceThresholds.memory.critical,
        current: resources.memory,
        timestamp: new Date().toISOString()
      });
    } else if (resources.memory > this.resourceThresholds.memory.warning) {
      alerts.push({
        level: 'warning',
        category: 'system',
        resource: 'memory',
        message: `High memory usage: ${resources.memory}%`,
        threshold: this.resourceThresholds.memory.warning,
        current: resources.memory,
        timestamp: new Date().toISOString()
      });
    }
    
    if (resources.disk > this.resourceThresholds.disk.critical) {
      alerts.push({
        level: 'critical',
        category: 'system',
        resource: 'disk',
        message: `Critical disk usage: ${resources.disk}%`,
        threshold: this.resourceThresholds.disk.critical,
        current: resources.disk,
        timestamp: new Date().toISOString()
      });
    } else if (resources.disk > this.resourceThresholds.disk.warning) {
      alerts.push({
        level: 'warning',
        category: 'system',
        resource: 'disk',
        message: `High disk usage: ${resources.disk}%`,
        threshold: this.resourceThresholds.disk.warning,
        current: resources.disk,
        timestamp: new Date().toISOString()
      });
    }
    
    // PM2 process alerts
    if (this.monitoringResults.pm2Processes.processes) {
      this.monitoringResults.pm2Processes.processes.forEach(proc => {
        if (proc.memory > this.resourceThresholds.processMemory.critical) {
          alerts.push({
            level: 'critical',
            category: 'process',
            resource: 'memory',
            message: `Critical memory usage in ${proc.name}: ${proc.memory}MB`,
            threshold: this.resourceThresholds.processMemory.critical,
            current: proc.memory,
            process: proc.name,
            timestamp: new Date().toISOString()
          });
        } else if (proc.memory > this.resourceThresholds.processMemory.warning) {
          alerts.push({
            level: 'warning',
            category: 'process',
            resource: 'memory',
            message: `High memory usage in ${proc.name}: ${proc.memory}MB`,
            threshold: this.resourceThresholds.processMemory.warning,
            current: proc.memory,
            process: proc.name,
            timestamp: new Date().toISOString()
          });
        }
        
        if (proc.cpu > this.resourceThresholds.processCPU.critical) {
          alerts.push({
            level: 'critical',
            category: 'process',
            resource: 'cpu',
            message: `Critical CPU usage in ${proc.name}: ${proc.cpu}%`,
            threshold: this.resourceThresholds.processCPU.critical,
            current: proc.cpu,
            process: proc.name,
            timestamp: new Date().toISOString()
          });
        } else if (proc.cpu > this.resourceThresholds.processCPU.warning) {
          alerts.push({
            level: 'warning',
            category: 'process',
            resource: 'cpu',
            message: `High CPU usage in ${proc.name}: ${proc.cpu}%`,
            threshold: this.resourceThresholds.processCPU.warning,
            current: proc.cpu,
            process: proc.name,
            timestamp: new Date().toISOString()
          });
        }
      });
    }
    
    // Process status alerts
    if (this.monitoringResults.pm2Processes.errored > 0) {
      alerts.push({
        level: 'critical',
        category: 'process',
        resource: 'status',
        message: `${this.monitoringResults.pm2Processes.errored} PM2 processes are in error state`,
        current: this.monitoringResults.pm2Processes.errored,
        timestamp: new Date().toISOString()
      });
    }
    
    this.monitoringResults.alerts = alerts;
    console.log(`🚨 Generated ${alerts.length} resource alerts`);
  }

  async generateRecommendations() {
    console.log('💡 Generating resource management recommendations...');
    
    const recommendations = [];
    
    // System resource recommendations
    const resources = this.monitoringResults.systemResources;
    
    if (resources.cpu > 80) {
      recommendations.push({
        priority: 'high',
        category: 'system',
        description: 'High CPU usage detected',
        action: 'Consider optimizing CPU-intensive operations or scaling resources',
        timeframe: 'immediate'
      });
    }
    
    if (resources.memory > 85) {
      recommendations.push({
        priority: 'high',
        category: 'system',
        description: 'High memory usage detected',
        action: 'Check for memory leaks, optimize memory usage, or increase available memory',
        timeframe: 'immediate'
      });
    }
    
    if (resources.disk > 90) {
      recommendations.push({
        priority: 'critical',
        category: 'system',
        description: 'Critical disk usage detected',
        action: 'Clean up unnecessary files, optimize storage, or expand disk space immediately',
        timeframe: 'immediate'
      });
    }
    
    // Process-specific recommendations
    if (this.monitoringResults.pm2Processes.processes) {
      const highMemoryProcesses = this.monitoringResults.pm2Processes.processes.filter(
        p => p.memory > this.resourceThresholds.processMemory.warning
      );
      
      highMemoryProcesses.forEach(proc => {
        recommendations.push({
          priority: 'medium',
          category: 'process',
          description: `High memory usage in ${proc.name}`,
          action: `Investigate memory usage patterns in ${proc.name} and optimize if possible`,
          timeframe: 'short_term'
        });
      });
      
      const highCPUProcesses = this.monitoringResults.pm2Processes.processes.filter(
        p => p.cpu > this.resourceThresholds.processCPU.warning
      );
      
      highCPUProcesses.forEach(proc => {
        recommendations.push({
          priority: 'medium',
          category: 'process',
          description: `High CPU usage in ${proc.name}`,
          action: `Investigate CPU usage patterns in ${proc.name} and optimize if possible`,
          timeframe: 'short_term'
        });
      });
    }
    
    // Trend-based recommendations
    if (this.monitoringResults.trendAnalysis) {
      const trends = this.monitoringResults.trendAnalysis;
      
      if (trends.memory.direction === 'increasing' && trends.memory.rate > 5) {
        recommendations.push({
          priority: 'medium',
          category: 'trend',
          description: 'Memory usage is steadily increasing',
          action: 'Monitor for memory leaks and consider proactive memory optimization',
          timeframe: 'short_term'
        });
      }
      
      if (trends.cpu.direction === 'increasing' && trends.cpu.rate > 3) {
        recommendations.push({
          priority: 'medium',
          category: 'trend',
          description: 'CPU usage is steadily increasing',
          action: 'Investigate what is causing the CPU usage increase',
          timeframe: 'short_term'
        });
      }
    }
    
    // Sort by priority
    recommendations.sort((a, b) => {
      const priorityOrder = { critical: 4, high: 3, medium: 2, low: 1 };
      return priorityOrder[b.priority] - priorityOrder[a.priority];
    });
    
    this.monitoringResults.recommendations = recommendations;
    console.log(`💡 Generated ${recommendations.length} resource management recommendations`);
  }

  async calculateHealthScore() {
    console.log('📊 Calculating system health score...');
    
    let score = 100;
    
    // System resource penalties
    const resources = this.monitoringResults.systemResources;
    
    if (resources.cpu > this.resourceThresholds.cpu.critical) {
      score -= 30;
    } else if (resources.cpu > this.resourceThresholds.cpu.warning) {
      score -= 15;
    }
    
    if (resources.memory > this.resourceThresholds.memory.critical) {
      score -= 25;
    } else if (resources.memory > this.resourceThresholds.memory.warning) {
      score -= 10;
    }
    
    if (resources.disk > this.resourceThresholds.disk.critical) {
      score -= 20;
    } else if (resources.disk > this.resourceThresholds.disk.warning) {
      score -= 10;
    }
    
    // PM2 process penalties
    if (this.monitoringResults.pm2Processes.errored > 0) {
      score -= this.monitoringResults.pm2Processes.errored * 10;
    }
    
    // Alert penalties
    const criticalAlerts = this.monitoringResults.alerts.filter(a => a.level === 'critical').length;
    const warningAlerts = this.monitoringResults.alerts.filter(a => a.level === 'warning').length;
    
    score -= criticalAlerts * 15;
    score -= warningAlerts * 5;
    
    this.monitoringResults.healthScore = Math.max(0, Math.min(100, score));
    console.log(`📊 System health score: ${score.toFixed(1)}/100`);
  }

  async saveMonitoringReport() {
    const reportPath = path.join(this.reportDir, `resource-monitoring-report-${Date.now()}.json`);
    fs.writeFileSync(reportPath, JSON.stringify(this.monitoringResults, null, 2));
    
    // Also save latest report
    const latestReportPath = path.join(this.reportDir, 'latest-resource-monitoring-report.json');
    fs.writeFileSync(latestReportPath, JSON.stringify(this.monitoringResults, null, 2));
    
    console.log(`📄 Resource monitoring report saved to ${reportPath}`);
  }

  async displaySummary() {
    console.log('\n🧠 Intelligent Resource Monitoring Summary');
    console.log('=' .repeat(50));
    console.log(`📊 System Health Score: ${this.monitoringResults.healthScore}/100`);
    console.log(`💻 CPU Usage: ${this.monitoringResults.systemResources.cpu || 'N/A'}%`);
    console.log(`🧠 Memory Usage: ${this.monitoringResults.systemResources.memory || 'N/A'}%`);
    console.log(`💾 Disk Usage: ${this.monitoringResults.systemResources.disk || 'N/A'}%`);
    console.log(`📱 PM2 Processes: ${this.monitoringResults.pm2Processes.online || 0}/${this.monitoringResults.pm2Processes.total || 0} online`);
    console.log(`🚨 Active Alerts: ${this.monitoringResults.alerts.length}`);
    console.log(`💡 Recommendations: ${this.monitoringResults.recommendations.length}`);
    
    if (this.monitoringResults.alerts.length > 0) {
      console.log('\n🚨 Active Alerts:');
      this.monitoringResults.alerts.slice(0, 3).forEach((alert, index) => {
        console.log(`${index + 1}. [${alert.level.toUpperCase()}] ${alert.message}`);
        if (alert.process) {
          console.log(`   Process: ${alert.process}`);
        }
      });
    }
    
    if (this.monitoringResults.recommendations.length > 0) {
      console.log('\n💡 Top Recommendations:');
      this.monitoringResults.recommendations.slice(0, 3).forEach((rec, index) => {
        console.log(`${index + 1}. [${rec.priority.toUpperCase()}] ${rec.description}`);
        console.log(`   🎯 ${rec.action}`);
        console.log(`   ⏰ ${rec.timeframe}`);
      });
    }
  }
}

// Main execution
async function main() {
  const monitor = new IntelligentResourceMonitor();
  
  try {
    // Check if running in monitoring mode
    const args = process.argv.slice(2);
    
    if (args.includes('--monitor') || args.includes('-m')) {
      console.log('🔄 Starting continuous monitoring mode...');
      await monitor.startMonitoring();
      
      // Keep the process running
      process.stdin.resume();
    } else {
      // Single monitoring cycle
      await monitor.performMonitoringCycle();
      await monitor.displaySummary();
      process.exit(0);
    }
    
  } catch (error) {
    console.error('❌ Intelligent Resource Monitor failed:', error.message);
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  main();
}

module.exports = IntelligentResourceMonitor;