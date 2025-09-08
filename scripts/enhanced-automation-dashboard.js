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
    
    this.processCategories = {
      'Core': ['console-error-fixer', 'link-checker', 'continuous-improvement', 'daily-build-test'],
      'Security': ['security-audit', 'dependency-updates'],
      'Performance': ['performance-monitor', 'front-maximizer'],
      'Quality': ['quality-checks', 'link-integrity', 'sitemap-runner'],
      'AI-Powered': ['intelligent-predictive-monitor', 'ai-code-optimizer', 'ai-code-analyzer'],
      'Smart': ['smart-dependency-manager', 'smart-deployment-optimizer', 'smart-documentation-generator'],
      'Intelligent': ['intelligent-code-refactorer', 'predictive-maintenance-monitor'],
      'Adaptive': ['adaptive-test-generator']
    };
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
        Object.values(this.processCategories).flat().includes(proc.name)
      );
      
      return automationProcesses.map(proc => ({
        name: proc.name,
        status: proc.pm2_env.status,
        memory: Math.round(proc.monit.memory / 1024 / 1024),
        cpu: proc.monit.cpu,
        uptime: this.formatUptime(proc.pm2_env.pm_uptime),
        restarts: proc.pm2_env.restart_time,
        category: this.getProcessCategory(proc.name)
      }));
      
    } catch (error) {
      console.log('⚠️  Could not get PM2 process data');
      return [];
    }
  }

  getProcessCategory(processName) {
    for (const [category, processes] of Object.entries(this.processCategories)) {
      if (processes.includes(processName)) {
        return category;
      }
    }
    return 'Other';
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
      totalProcesses: 0,
      onlineProcesses: 0,
      intelligentProcesses: 0,
      intelligentOnline: 0,
      predictions: 0,
      recommendations: 0,
      autoFixes: 0
    };

    try {
      // Count processes by category
      const processes = this.dashboardData.processes;
      metrics.totalProcesses = processes.length;
      metrics.onlineProcesses = processes.filter(p => p.status === 'online').length;
      
      // Count intelligent processes
      const intelligentCategories = ['AI-Powered', 'Smart', 'Intelligent', 'Adaptive'];
      const intelligentProcesses = processes.filter(p => intelligentCategories.includes(p.category));
      metrics.intelligentProcesses = intelligentProcesses.length;
      metrics.intelligentOnline = intelligentProcesses.filter(p => p.status === 'online').length;

      // Count reports and metrics from intelligent processes
      const reportFiles = [
        'intelligent-predictive-monitor-report.json',
        'ai-code-analyzer-report.json',
        'smart-dependency-manager-report.json',
        'predictive-maintenance-report.json'
      ];

      reportFiles.forEach(file => {
        if (fs.existsSync(file)) {
          try {
            const data = JSON.parse(fs.readFileSync(file, 'utf8'));
            if (data.summary) {
              metrics.predictions += data.summary.totalPredictions || 0;
              metrics.recommendations += data.summary.totalRecommendations || 0;
              metrics.autoFixes += data.summary.autoFixes || 0;
            }
          } catch (error) {
            // File exists but can't be parsed
          }
        }
      });

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

    // Intelligence coverage recommendations
    const intelligenceCoverage = this.dashboardData.intelligence.intelligentOnline / this.dashboardData.intelligence.intelligentProcesses;
    if (intelligenceCoverage < 0.8) {
      recommendations.push({
        priority: 'medium',
        message: 'Intelligent automation coverage is below 80% - review failed processes',
        value: `${Math.round(intelligenceCoverage * 100)}%`
      });
    }

    return recommendations;
  }

  displayDashboard() {
    // Clear console
    console.clear();
    
    // Header
    console.log('📊 Enhanced PM2 Automation Dashboard');
