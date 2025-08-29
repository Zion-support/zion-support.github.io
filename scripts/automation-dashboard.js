#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('📊 Starting Enhanced PM2 Automation Dashboard...');

class EnhancedAutomationDashboard {
  constructor() {
    this.dashboardData = {
      timestamp: new Date().toISOString(),
      processes: [],
      system: {},
      intelligence: {},
      alerts: [],
      recommendations: []
    };
    
    this.updateInterval = 5000; // 5 seconds
    this.isRunning = false;
  }

  async start() {
    console.log('🚀 Starting enhanced automation dashboard...');
    console.log('Press Ctrl+C to stop the dashboard\n');
    
    this.isRunning = true;
    
    // Initial data collection
    await this.collectData();
    
    // Set up continuous updates
    this.updateTimer = setInterval(async () => {
      if (this.isRunning) {
        await this.collectData();
        this.displayDashboard();
      }
    }, this.updateInterval);
    
    // Handle graceful shutdown
    process.on('SIGINT', () => {
      console.log('\n🛑 Shutting down dashboard...');
      this.isRunning = false;
      if (this.updateTimer) {
        clearInterval(this.updateTimer);
      }
      process.exit(0);
    });
  }

  async collectData() {
    try {
      // Collect PM2 process data
      this.dashboardData.processes = await this.getProcessData();
      
      // Collect system metrics
      this.dashboardData.system = await this.getSystemMetrics();
      
      // Collect intelligence metrics
      this.dashboardData.intelligence = await this.getIntelligenceMetrics();
      
      // Generate alerts and recommendations
      this.dashboardData.alerts = this.generateAlerts();
      this.dashboardData.recommendations = this.generateRecommendations();
      
      this.dashboardData.timestamp = new Date().toISOString();
      
    } catch (error) {
      console.error('❌ Error collecting dashboard data:', error.message);
    }
  }

  async getProcessData() {
    try {
      const output = execSync('pm2 jlist', { encoding: 'utf8' });
      const processes = JSON.parse(output);
      
      // Filter for automation processes
      const automationProcesses = processes.filter(proc => 
        proc.name.includes('automation') || 
        proc.name.includes('intelligent') ||
        proc.name.includes('console-error-fixer') ||
        proc.name.includes('link-checker') ||
        proc.name.includes('continuous-improvement') ||
        proc.name.includes('daily-build-test') ||
        proc.name.includes('security-audit') ||
        proc.name.includes('dependency-updates') ||
        proc.name.includes('performance-monitor') ||
        proc.name.includes('quality-checks') ||
        proc.name.includes('link-integrity') ||
        proc.name.includes('front-maximizer') ||
        proc.name.includes('sitemap-runner')
      );
      
      return automationProcesses.map(proc => ({
        name: proc.name,
        status: proc.pm2_env.status,
        memory: Math.round(proc.monit.memory / 1024 / 1024),
        cpu: proc.monit.cpu,
        uptime: this.formatUptime(proc.pm2_env.pm_uptime),
        restarts: proc.pm2_env.restart_time,
        type: this.categorizeProcess(proc.name)
      }));
      
    } catch (error) {
      console.log('⚠️  Could not get PM2 process data');
      return [];
    }
  }

  categorizeProcess(name) {
    if (name.includes('intelligent')) {
      return 'AI-Powered';
    } else if (name.includes('security') || name.includes('audit')) {
      return 'Security';
    } else if (name.includes('performance') || name.includes('monitor')) {
      return 'Performance';
    } else if (name.includes('quality') || name.includes('test')) {
      return 'Quality';
    } else if (name.includes('link') || name.includes('sitemap')) {
      return 'SEO';
    } else {
      return 'Core';
    }
  }

  async getSystemMetrics() {
    const metrics = {
      memory: {},
      cpu: {},
      disk: {},
      load: {}
    };

    try {
      // Memory info
      const memInfo = execSync('free -m', { encoding: 'utf8' }).split('\n')[1].split(/\s+/);
      metrics.memory = {
        total: parseInt(memInfo[1]),
        used: parseInt(memInfo[2]),
        free: parseInt(memInfo[3]),
        available: parseInt(memInfo[6]),
        usagePercent: Math.round((parseInt(memInfo[2]) / parseInt(memInfo[1])) * 100)
      };

      // CPU info
      const cpuInfo = execSync('top -bn1 | grep "Cpu(s)"', { encoding: 'utf8' });
      const cpuMatch = cpuInfo.match(/(\d+\.\d+)%us/);
      metrics.cpu = {
        usage: cpuMatch ? parseFloat(cpuMatch[1]) : 0
      };

      // Disk usage
      const diskInfo = execSync('df -h .', { encoding: 'utf8' }).split('\n')[1].split(/\s+/);
      metrics.disk = {
        total: diskInfo[1],
        used: diskInfo[2],
        available: diskInfo[3],
        usagePercent: parseInt(diskInfo[4].replace('%', ''))
      };

      // System load
      const loadInfo = execSync('uptime', { encoding: 'utf8' });
      const loadMatch = loadInfo.match(/load average: ([\d.]+), ([\d.]+), ([\d.]+)/);
      if (loadMatch) {
        metrics.load = {
          '1min': parseFloat(loadMatch[1]),
          '5min': parseFloat(loadMatch[2]),
          '15min': parseFloat(loadMatch[3])
        };
      }

    } catch (error) {
      console.log(`⚠️  Could not get system metrics: ${error.message}`);
    }

    return metrics;
  }

  async getIntelligenceMetrics() {
    const metrics = {
      predictions: 0,
      recommendations: 0,
      autoFixes: 0,
      coverage: 0
    };

    try {
      // Count prediction reports
      const predictionFiles = [
        'intelligent-performance-prediction-report.json',
        'intelligent-code-analysis-report.json',
        'intelligent-dependency-resolution-report.json',
        'intelligent-testing-orchestration-report.json'
      ];

      predictionFiles.forEach(file => {
        if (fs.existsSync(file)) {
          try {
            const data = JSON.parse(fs.readFileSync(file, 'utf8'));
            if (data.summary) {
              metrics.predictions += data.summary.totalPredictions || 0;
              metrics.recommendations += data.summary.totalRecommendations || 0;
            }
          } catch (error) {
            // File exists but can't be parsed
          }
        }
      });

      // Count auto-fixes
      const fixerReport = 'console-error-fixer-report.json';
      if (fs.existsSync(fixerReport)) {
        try {
          const data = JSON.parse(fs.readFileSync(fixerReport, 'utf8'));
          metrics.autoFixes = data.fixesApplied || 0;
        } catch (error) {
          // File exists but can't be parsed
        }
      }

      // Get test coverage
      const testReport = 'intelligent-testing-orchestration-report.json';
      if (fs.existsSync(testReport)) {
        try {
          const data = JSON.parse(fs.readFileSync(testReport, 'utf8'));
          if (data.summary?.insights?.coverage?.overall) {
            metrics.coverage = data.summary.insights.coverage.overall;
          }
        } catch (error) {
          // File exists but can't be parsed
        }
      }

    } catch (error) {
      console.log(`⚠️  Could not get intelligence metrics: ${error.message}`);
    }

    return metrics;
  }

  generateAlerts() {
    const alerts = [];

    // Process status alerts
    const offlineProcesses = this.dashboardData.processes.filter(p => p.status !== 'online');
    if (offlineProcesses.length > 0) {
      alerts.push({
        level: 'critical',
        message: `${offlineProcesses.length} automation processes are offline`,
        processes: offlineProcesses.map(p => p.name)
      });
    }

    // Memory usage alerts
    if (this.dashboardData.system.memory?.usagePercent > 90) {
      alerts.push({
        level: 'warning',
        message: 'System memory usage is above 90%',
        value: `${this.dashboardData.system.memory.usagePercent}%`
      });
    }

    // CPU usage alerts
    if (this.dashboardData.system.cpu?.usage > 80) {
      alerts.push({
        level: 'warning',
        message: 'System CPU usage is above 80%',
        value: `${this.dashboardData.system.cpu.usage}%`
      });
    }

    // Disk usage alerts
    if (this.dashboardData.system.disk?.usagePercent > 85) {
      alerts.push({
        level: 'warning',
        message: 'Disk usage is above 85%',
        value: `${this.dashboardData.system.disk.usagePercent}%`
      });
    }

    return alerts;
  }

  generateRecommendations() {
    const recommendations = [];

    // Process restart recommendations
    const highRestartProcesses = this.dashboardData.processes.filter(p => p.restarts > 5);
    if (highRestartProcesses.length > 0) {
      recommendations.push({
        priority: 'high',
        message: 'Some processes have high restart counts - investigate stability issues',
        processes: highRestartProcesses.map(p => `${p.name} (${p.restarts} restarts)`)
      });
    }

    // Memory optimization recommendations
    const highMemoryProcesses = this.dashboardData.processes.filter(p => p.memory > 200);
    if (highMemoryProcesses.length > 0) {
      recommendations.push({
        priority: 'medium',
        message: 'Some processes are using high memory - consider optimization',
        processes: highMemoryProcesses.map(p => `${p.name} (${p.memory}MB)`)
      });
    }

    // Coverage recommendations
    if (this.dashboardData.intelligence.coverage < 80) {
      recommendations.push({
        priority: 'medium',
        message: 'Test coverage is below 80% - consider adding more tests',
        value: `${this.dashboardData.intelligence.coverage.toFixed(1)}%`
      });
    }

    return recommendations;
  }

  displayDashboard() {
    // Clear console
    console.clear();
    
    // Header
    console.log('📊 Enhanced PM2 Automation Dashboard');
    console.log('=====================================');
    console.log(`Last Updated: ${new Date().toLocaleTimeString()}`);
    console.log('');
    
    // System Overview
    this.displaySystemOverview();
    
    // Process Status
    this.displayProcessStatus();
    
    // Intelligence Metrics
    this.displayIntelligenceMetrics();
    
    // Alerts
    this.displayAlerts();
    
    // Recommendations
    this.displayRecommendations();
    
    // Footer
    console.log('');
    console.log('💡 Tips: Use "pm2 monit" for detailed process monitoring');
    console.log('📋 Reports: Check generated JSON and TXT files for detailed insights');
    console.log('🔄 Dashboard updates every 5 seconds');
  }

  displaySystemOverview() {
    console.log('💻 System Overview');
    console.log('─────────────────');
    
    const { memory, cpu, disk, load } = this.dashboardData.system;
    
    if (memory.total) {
      console.log(`Memory: ${memory.used}MB / ${memory.total}MB (${memory.usagePercent}%)`);
    }
    
    if (cpu.usage) {
      console.log(`CPU: ${cpu.usage.toFixed(1)}%`);
    }
    
    if (disk.total) {
      console.log(`Disk: ${disk.used} / ${disk.total} (${disk.usagePercent}%)`);
    }
    
    if (load['1min']) {
      console.log(`Load: ${load['1min'].toFixed(2)} (1min), ${load['5min'].toFixed(2)} (5min), ${load['15min'].toFixed(2)} (15min)`);
    }
    
    console.log('');
  }

  displayProcessStatus() {
    console.log('🚀 Automation Processes');
    console.log('───────────────────────');
    
    const processes = this.dashboardData.processes;
    
    if (processes.length === 0) {
      console.log('No automation processes found');
      console.log('');
      return;
    }
    
    // Group by type
    const grouped = {};
    processes.forEach(proc => {
      if (!grouped[proc.type]) {
        grouped[proc.type] = [];
      }
      grouped[proc.type].push(proc);
    });
    
    Object.keys(grouped).forEach(type => {
      console.log(`\n${type} Processes:`);
      grouped[type].forEach(proc => {
        const statusIcon = proc.status === 'online' ? '🟢' : proc.status === 'errored' ? '🔴' : '🟡';
        const memory = `${proc.memory}MB`;
        const cpu = `${proc.cpu}%`;
        
        console.log(`  ${statusIcon} ${proc.name.padEnd(35)} ${statusIcon} ${proc.status.padEnd(10)} ${memory.padEnd(8)} ${cpu.padEnd(6)} ${proc.uptime.padEnd(12)} ${proc.restarts}`);
      });
    });
    
    // Summary
    const onlineCount = processes.filter(p => p.status === 'online').length;
    const totalCount = processes.length;
    console.log(`\n📈 Summary: ${onlineCount}/${totalCount} processes online`);
    console.log('');
  }

  displayIntelligenceMetrics() {
    console.log('🧠 Intelligence Metrics');
    console.log('───────────────────────');
    
    const { predictions, recommendations, autoFixes, coverage } = this.dashboardData.intelligence;
    
    console.log(`Predictions Generated: ${predictions}`);
    console.log(`Recommendations: ${recommendations}`);
    console.log(`Auto-Fixes Applied: ${autoFixes}`);
    console.log(`Test Coverage: ${coverage > 0 ? `${coverage.toFixed(1)}%` : 'N/A'}`);
    console.log('');
  }

  displayAlerts() {
    const alerts = this.dashboardData.alerts;
    
    if (alerts.length === 0) {
      return;
    }
    
    console.log('🚨 Active Alerts');
    console.log('────────────────');
    
    alerts.forEach(alert => {
      const icon = alert.level === 'critical' ? '🔴' : '🟡';
      console.log(`${icon} ${alert.message}`);
      if (alert.processes) {
        alert.processes.forEach(proc => console.log(`   - ${proc}`));
      }
      if (alert.value) {
        console.log(`   - Current: ${alert.value}`);
      }
    });
    
    console.log('');
  }

  displayRecommendations() {
    const recommendations = this.dashboardData.recommendations;
    
    if (recommendations.length === 0) {
      return;
    }
    
    console.log('💡 Recommendations');
    console.log('──────────────────');
    
    recommendations.forEach(rec => {
      const icon = rec.priority === 'high' ? '🔴' : '🟡';
      console.log(`${icon} ${rec.message}`);
      if (rec.processes) {
        rec.processes.forEach(proc => console.log(`   - ${proc}`);
      }
      if (rec.value) {
        console.log(`   - Current: ${rec.value}`);
      }
    });
  }

  formatUptime(uptime) {
    if (!uptime) return 'N/A';
    
    const seconds = Math.floor(uptime / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    
    if (days > 0) {
      return `${days}d ${hours % 24}h`;
    } else if (hours > 0) {
      return `${hours}h ${minutes % 60}m`;
    } else if (minutes > 0) {
      return `${minutes}m ${seconds % 60}s`;
    } else {
      return `${seconds}s`;
    }
  }
}

// Start the dashboard
const dashboard = new EnhancedAutomationDashboard();
dashboard.start().catch(error => {
  console.error('❌ Failed to start dashboard:', error.message);
  process.exit(1);
});
