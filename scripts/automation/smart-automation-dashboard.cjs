#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('📊 Starting Smart Automation Dashboard...');

// Get automation interval from environment variable (default: 5 minutes)
const DASHBOARD_INTERVAL = parseInt(process.env.DASHBOARD_INTERVAL) || 300000; // 5 minutes

class SmartAutomationDashboard {
  constructor() {
    this.dashboardData = {
      automationStatus: {},
      systemHealth: {},
      performanceMetrics: {},
      recommendations: [],
      lastUpdated: new Date().toISOString()
    };
    this.reportDir = path.join(process.cwd(), 'automation-dashboard-reports');
    this.ensureReportDirectory();
  }

  ensureReportDirectory() {
    if (!fs.existsSync(this.reportDir)) {
      fs.mkdirSync(this.reportDir, { recursive: true });
    }
  }

  async updateDashboard() {
    try {
      console.log(`📊 Updating automation dashboard at ${new Date().toISOString()}`);
      
      // Check PM2 status
      await this.checkPM2Status();
      
      // Check automation health
      await this.checkAutomationHealth();
      
      // Analyze system performance
      await this.analyzeSystemPerformance();
      
      // Generate smart recommendations
      await this.generateSmartRecommendations();
      
      // Save dashboard data
      await this.saveDashboardData();
      
      // Display dashboard
      this.displayDashboard();
      
      console.log('✅ Automation dashboard updated successfully');
      
    } catch (error) {
      console.error('❌ Dashboard update failed:', error.message);
    }
  }

  async checkPM2Status() {
    console.log('🔍 Checking PM2 status...');
    
    try {
      // Get PM2 list
      const pm2ListOutput = execSync('pm2 list --format json', { 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      
      const pm2Processes = JSON.parse(pm2ListOutput);
      
      // Filter automation processes
      const automationProcesses = pm2Processes.filter(process => 
        process.name.includes('automation') || 
        process.name.includes('monitor') || 
        process.name.includes('checker') ||
        process.name.includes('analyzer') ||
        process.name.includes('optimizer')
      );
      
      this.dashboardData.automationStatus = {
        totalProcesses: pm2Processes.length,
        automationProcesses: automationProcesses.length,
        processes: automationProcesses.map(process => ({
          name: process.name,
          status: process.pm2_env.status,
          memory: process.monit.memory,
          cpu: process.monit.cpu,
          uptime: process.pm2_env.pm_uptime,
          restarts: process.pm2_env.restart_time
        }))
      };
      
      console.log(`✅ PM2 status checked: ${automationProcesses.length} automation processes found`);
      
    } catch (error) {
      console.log('⚠️  Failed to check PM2 status:', error.message);
      this.dashboardData.automationStatus = { error: error.message };
    }
  }

  async checkAutomationHealth() {
    console.log('🏥 Checking automation health...');
    
    const healthChecks = {};
    
    // Check recent reports from each automation
    const automationTypes = [
      'ai-code-analyzer',
      'smart-dependency-monitor', 
      'intelligent-build-optimizer',
      'console-error-fixer',
      'link-checker',
      'continuous-improvement',
      'daily-build-test',
      'security-audit',
      'dependency-updates',
      'performance-monitor',
      'quality-checks',
      'link-integrity',
      'front-maximizer',
      'sitemap-runner'
    ];
    
    for (const automationType of automationTypes) {
      healthChecks[automationType] = await this.checkAutomationTypeHealth(automationType);
    }
    
    this.dashboardData.systemHealth = healthChecks;
  }

  async checkAutomationTypeHealth(automationType) {
    const health = {
      status: 'unknown',
      lastRun: null,
      successRate: 0,
      issues: [],
      recommendations: []
    };
    
    try {
      // Check for reports directory
      const reportDir = path.join(process.cwd(), `${automationType.replace(/-/g, '-')}-reports`);
      
      if (fs.existsSync(reportDir)) {
        // Find latest report
        const files = fs.readdirSync(reportDir)
          .filter(file => file.endsWith('.json'))
          .sort()
          .reverse();
        
        if (files.length > 0) {
          const latestReport = files[0];
          const reportPath = path.join(reportDir, latestReport);
          
          try {
            const reportData = JSON.parse(fs.readFileSync(reportPath, 'utf8'));
            
            health.lastRun = reportData.timestamp;
            health.status = 'active';
            
            // Analyze report for issues
            if (reportData.error) {
              health.issues.push({
                type: 'error',
                message: reportData.error,
                severity: 'high'
              });
            }
            
            // Check for specific issues based on automation type
            if (automationType === 'ai-code-analyzer') {
              if (reportData.maintainabilityScore < 70) {
                health.issues.push({
                  type: 'quality',
                  message: `Low maintainability score: ${reportData.maintainabilityScore}/100`,
                  severity: 'medium'
                });
              }
            }
            
            if (automationType === 'smart-dependency-monitor') {
              if (reportData.vulnerabilities && reportData.vulnerabilities.length > 0) {
                health.issues.push({
                  type: 'security',
                  message: `${reportData.vulnerabilities.length} vulnerabilities detected`,
                  severity: 'high'
                });
              }
            }
            
            if (automationType === 'intelligent-build-optimizer') {
              if (reportData.buildMetrics && reportData.buildMetrics.buildTime > 60000) {
                health.issues.push({
                  type: 'performance',
                  message: `Slow build time: ${reportData.buildMetrics.buildTimeFormatted}`,
                  severity: 'medium'
                });
              }
            }
            
          } catch (parseError) {
            health.issues.push({
              type: 'parse-error',
              message: 'Failed to parse report data',
              severity: 'low'
            });
          }
        } else {
          health.status = 'no-reports';
          health.issues.push({
            type: 'no-data',
            message: 'No reports found',
            severity: 'medium'
          });
        }
      } else {
        health.status = 'no-reports-directory';
        health.issues.push({
          type: 'no-directory',
          message: 'Reports directory not found',
          severity: 'medium'
        });
      }
      
    } catch (error) {
      health.status = 'error';
      health.issues.push({
        type: 'system-error',
        message: error.message,
        severity: 'high'
      });
    }
    
    return health;
  }

  async analyzeSystemPerformance() {
    console.log('⚡ Analyzing system performance...');
    
    try {
      // Check disk usage
      const diskUsage = execSync('df -h .', { encoding: 'utf8' });
      
      // Check memory usage
      const memoryInfo = execSync('free -h', { encoding: 'utf8' });
      
      // Check CPU load
      const cpuLoad = execSync('uptime', { encoding: 'utf8' });
      
      this.dashboardData.systemPerformance = {
        diskUsage: this.parseDiskUsage(diskUsage),
        memoryInfo: this.parseMemoryInfo(memoryInfo),
        cpuLoad: this.parseCPULoad(cpuLoad),
        timestamp: new Date().toISOString()
      };
      
      console.log('✅ System performance analyzed');
      
    } catch (error) {
      console.log('⚠️  Failed to analyze system performance:', error.message);
      this.dashboardData.systemPerformance = { error: error.message };
    }
  }

  parseDiskUsage(diskOutput) {
    const lines = diskOutput.split('\n');
    const dataLine = lines[1];
    
    if (dataLine) {
      const parts = dataLine.split(/\s+/);
      return {
        filesystem: parts[0],
        total: parts[1],
        used: parts[2],
        available: parts[3],
        usagePercent: parts[4]
      };
    }
    
    return null;
  }

  parseMemoryInfo(memoryOutput) {
    const lines = memoryOutput.split('\n');
    const memLine = lines[1];
    
    if (memLine) {
      const parts = memLine.split(/\s+/);
      return {
        total: parts[1],
        used: parts[2],
        free: parts[3],
        shared: parts[4],
        cache: parts[5],
        available: parts[6]
      };
    }
    
    return null;
  }

  parseCPULoad(uptimeOutput) {
    const loadMatch = uptimeOutput.match(/load average: ([\d.]+), ([\d.]+), ([\d.]+)/);
    
    if (loadMatch) {
      return {
        load1: parseFloat(loadMatch[1]),
        load5: parseFloat(loadMatch[2]),
        load15: parseFloat(loadMatch[3])
      };
    }
    
    return null;
  }

  async generateSmartRecommendations() {
    console.log('💡 Generating smart recommendations...');
    
    const recommendations = [];
    
    // Analyze automation health
    const criticalIssues = [];
    const warningIssues = [];
    
    Object.entries(this.dashboardData.systemHealth).forEach(([automation, health]) => {
      health.issues.forEach(issue => {
        if (issue.severity === 'high') {
          criticalIssues.push({ automation, issue });
        } else if (issue.severity === 'medium') {
          warningIssues.push({ automation, issue });
        }
      });
    });
    
    // Critical issues
    if (criticalIssues.length > 0) {
      recommendations.push({
        priority: 'critical',
        category: 'automation-health',
        title: 'Critical automation issues detected',
        description: `Found ${criticalIssues.length} critical issues across automations`,
        action: 'Review and fix critical issues immediately',
        urgency: 'immediate',
        affectedAutomations: criticalIssues.map(item => item.automation)
      });
    }
    
    // Warning issues
    if (warningIssues.length > 0) {
      recommendations.push({
        priority: 'medium',
        category: 'automation-health',
        title: 'Automation warnings detected',
        description: `Found ${warningIssues.length} warning issues across automations`,
        action: 'Review warnings and plan improvements',
        urgency: 'planned',
        affectedAutomations: warningIssues.map(item => item.automation)
      });
    }
    
    // System performance recommendations
    if (this.dashboardData.systemPerformance) {
      const diskUsage = this.dashboardData.systemPerformance.diskUsage;
      if (diskUsage && parseInt(diskUsage.usagePercent) > 80) {
        recommendations.push({
          priority: 'high',
          category: 'system-performance',
          title: 'High disk usage detected',
          description: `Disk usage: ${diskUsage.usagePercent}`,
          action: 'Clean up old reports and temporary files',
          urgency: 'soon',
          affectedAutomations: 'all'
        });
      }
      
      const cpuLoad = this.dashboardData.systemPerformance.cpuLoad;
      if (cpuLoad && cpuLoad.load1 > 2.0) {
        recommendations.push({
          priority: 'medium',
          category: 'system-performance',
          title: 'High CPU load detected',
          description: `CPU load: ${cpuLoad.load1}`,
          action: 'Consider reducing automation frequency or optimizing processes',
          urgency: 'planned',
          affectedAutomations: 'all'
        });
      }
    }
    
    // Automation efficiency recommendations
    const inactiveAutomations = Object.entries(this.dashboardData.systemHealth)
      .filter(([name, health]) => health.status === 'no-reports' || health.status === 'no-reports-directory')
      .map(([name]) => name);
    
    if (inactiveAutomations.length > 0) {
      recommendations.push({
        priority: 'medium',
        category: 'automation-efficiency',
        title: 'Inactive automations detected',
        description: `${inactiveAutomations.length} automations are not producing reports`,
        action: 'Review and restart inactive automations',
        urgency: 'planned',
        affectedAutomations: inactiveAutomations
      });
    }
    
    this.dashboardData.recommendations = recommendations;
  }

  async saveDashboardData() {
    console.log('💾 Saving dashboard data...');
    
    const dashboardPath = path.join(this.reportDir, `automation-dashboard-${Date.now()}.json`);
    fs.writeFileSync(dashboardPath, JSON.stringify(this.dashboardData, null, 2));
    
    // Also save latest dashboard
    const latestDashboardPath = path.join(this.reportDir, 'latest-automation-dashboard.json');
    fs.writeFileSync(latestDashboardPath, JSON.stringify(this.dashboardData, null, 2));
    
    console.log(`✅ Dashboard data saved to ${dashboardPath}`);
  }

  displayDashboard() {
    console.log('\n' + '='.repeat(80));
    console.log('🚀 SMART AUTOMATION DASHBOARD');
    console.log('='.repeat(80));
    console.log(`Last Updated: ${new Date().toLocaleString()}`);
    console.log('');
    
    // Automation Status
    console.log('📊 AUTOMATION STATUS');
    console.log('-'.repeat(40));
    if (this.dashboardData.automationStatus.processes) {
      this.dashboardData.automationStatus.processes.forEach(process => {
        const statusIcon = process.status === 'online' ? '🟢' : '🔴';
        console.log(`${statusIcon} ${process.name.padEnd(25)} | ${process.status.padEnd(10)} | Memory: ${(process.memory / 1024 / 1024).toFixed(1)}MB`);
      });
    }
    console.log('');
    
    // System Health Summary
    console.log('🏥 SYSTEM HEALTH SUMMARY');
    console.log('-'.repeat(40));
    const healthStatuses = Object.values(this.dashboardData.systemHealth);
    const healthy = healthStatuses.filter(h => h.status === 'active' && h.issues.length === 0).length;
    const warnings = healthStatuses.filter(h => h.issues.some(i => i.severity === 'medium')).length;
    const critical = healthStatuses.filter(h => h.issues.some(i => i.severity === 'high')).length;
    
    console.log(`🟢 Healthy: ${healthy} automations`);
    console.log(`🟡 Warnings: ${warnings} automations`);
    console.log(`🔴 Critical: ${critical} automations`);
    console.log('');
    
    // Key Recommendations
    if (this.dashboardData.recommendations.length > 0) {
      console.log('💡 KEY RECOMMENDATIONS');
      console.log('-'.repeat(40));
      this.dashboardData.recommendations
        .filter(r => r.priority === 'critical' || r.priority === 'high')
        .forEach(rec => {
          const priorityIcon = rec.priority === 'critical' ? '🔴' : '🟡';
          console.log(`${priorityIcon} ${rec.priority.toUpperCase()}: ${rec.title}`);
          console.log(`   ${rec.description}`);
          console.log(`   Action: ${rec.action}`);
          console.log('');
        });
    }
    
    // System Performance
    if (this.dashboardData.systemPerformance) {
      console.log('⚡ SYSTEM PERFORMANCE');
      console.log('-'.repeat(40));
      
      if (this.dashboardData.systemPerformance.diskUsage) {
        const disk = this.dashboardData.systemPerformance.diskUsage;
        console.log(`💾 Disk: ${disk.used}/${disk.total} (${disk.usagePercent} used)`);
      }
      
      if (this.dashboardData.systemPerformance.memoryInfo) {
        const mem = this.dashboardData.systemPerformance.memoryInfo;
        console.log(`🧠 Memory: ${mem.used}/${mem.total} (${mem.available} available)`);
      }
      
      if (this.dashboardData.systemPerformance.cpuLoad) {
        const cpu = this.dashboardData.systemPerformance.cpuLoad;
        console.log(`🖥️  CPU Load: 1m: ${cpu.load1}, 5m: ${cpu.load5}, 15m: ${cpu.load15}`);
      }
    }
    
    console.log('='.repeat(80));
    console.log('');
  }
}

async function updateSmartAutomationDashboard() {
  const dashboard = new SmartAutomationDashboard();
  await dashboard.updateDashboard();
}

// Run the dashboard
updateSmartAutomationDashboard();

// Set up continuous updates
setInterval(updateSmartAutomationDashboard, DASHBOARD_INTERVAL);

console.log(`📊 Smart Automation Dashboard will update every ${DASHBOARD_INTERVAL / 1000 / 60} minutes`);