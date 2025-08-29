#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🎛️ Starting PM2 Automation Dashboard...\n');

class PM2AutomationDashboard {
  constructor() {
    this.processes = new Map();
    this.reports = new Map();
    this.startTime = Date.now();
    this.updateInterval = 5000; // 5 seconds
  }

  async startDashboard() {
    console.log('🚀 PM2 Automation Dashboard Started');
    console.log('📊 Real-time monitoring of all automation processes\n');
    
    // Initial load
    await this.loadAllData();
    
    // Start continuous updates
    setInterval(async () => {
      await this.updateDashboard();
    }, this.updateInterval);
    
    // Handle user input
    this.handleUserInput();
  }

  async loadAllData() {
    try {
      await this.loadPM2Processes();
      await this.loadAutomationReports();
      this.displayDashboard();
    } catch (error) {
      console.error('❌ Failed to load dashboard data:', error.message);
    }
  }

  async loadPM2Processes() {
    try {
      const pm2Status = execSync('pm2 jlist', { encoding: 'utf8' });
      const processes = JSON.parse(pm2Status);
      
      this.processes.clear();
      processes.forEach(process => {
        this.processes.set(process.name, {
          id: process.pm_id,
          name: process.name,
          status: process.pm2_env.status,
          memory: process.monit.memory,
          cpu: process.monit.cpu,
          uptime: process.pm2_env.pm_uptime,
          restarts: process.pm2_env.restart_time,
          instances: process.pm2_env.instances,
          pm_uptime: process.pm2_env.pm_uptime,
          pm_created_at: process.pm2_env.pm_created_at
        });
      });
    } catch (error) {
      console.log('⚠️  Could not load PM2 processes:', error.message);
    }
  }

  async loadAutomationReports() {
    try {
      const reportDirs = [
        'automation-reports',
        'code-quality-reports',
        'performance-reports',
        'error-prediction-reports',
        'ci-cd-reports'
      ];
      
      this.reports.clear();
      
      reportDirs.forEach(dir => {
        const reportPath = path.join(process.cwd(), dir);
        if (fs.existsSync(reportPath)) {
          const files = fs.readdirSync(reportPath).filter(file => file.endsWith('.json'));
          const latestReports = {};
          
          files.forEach(file => {
            const filePath = path.join(reportPath, file);
            try {
              const content = JSON.parse(fs.readFileSync(filePath, 'utf8'));
              const baseName = path.basename(file, '.json');
              latestReports[baseName] = content;
            } catch (error) {
              // Skip invalid JSON files
            }
          });
          
          this.reports.set(dir, latestReports);
        }
      });
    } catch (error) {
      console.log('⚠️  Could not load automation reports:', error.message);
    }
  }

  async updateDashboard() {
    try {
      await this.loadPM2Processes();
      await this.loadAutomationReports();
      this.displayDashboard();
    } catch (error) {
      console.log('⚠️  Dashboard update failed:', error.message);
    }
  }

  displayDashboard() {
    // Clear console
    console.clear();
    
    // Header
    this.displayHeader();
    
    // Process Status
    this.displayProcessStatus();
    
    // Automation Insights
    this.displayAutomationInsights();
    
    // Recent Reports
    this.displayRecentReports();
    
    // System Health
    this.displaySystemHealth();
    
    // Commands
    this.displayCommands();
  }

  displayHeader() {
    const uptime = this.formatUptime(Date.now() - this.startTime);
    console.log('🎛️  PM2 AUTOMATION DASHBOARD');
    console.log('='.repeat(60));
    console.log(`⏰ Dashboard Uptime: ${uptime} | 📅 ${new Date().toLocaleString()}`);
    console.log('='.repeat(60) + '\n');
  }

  displayProcessStatus() {
    console.log('📊 PROCESS STATUS');
    console.log('-'.repeat(60));
    
    const automationProcesses = Array.from(this.processes.entries())
      .filter(([name]) => name.includes('automation') || name.includes('ai') || name.includes('smart') || name.includes('intelligent') || name.includes('console-error-fixer') || name.includes('link-checker') || name.includes('continuous-improvement') || name.includes('daily-build-test') || name.includes('security-audit') || name.includes('dependency-updates') || name.includes('performance-monitor') || name.includes('quality-checks') || name.includes('link-integrity') || name.includes('front-maximizer') || name.includes('sitemap-runner'))
      .sort((a, b) => a[1].name.localeCompare(b[1].name));
    
    if (automationProcesses.length === 0) {
      console.log('❌ No automation processes found');
      return;
    }
    
    // Group processes by status
    const online = automationProcesses.filter(([_, process]) => process.status === 'online');
    const offline = automationProcesses.filter(([_, process]) => process.status === 'stopped');
    const errored = automationProcesses.filter(([_, process]) => process.status === 'errored');
    
    console.log(`🟢 Online: ${online.length} | 🔴 Offline: ${offline.length} | ⚠️  Errored: ${errored.length}\n`);
    
    // Display process table
    console.log('Process Name'.padEnd(35) + 'Status'.padEnd(10) + 'Memory'.padEnd(10) + 'CPU'.padEnd(8) + 'Uptime'.padEnd(12) + 'Restarts');
    console.log('-'.repeat(85));
    
    automationProcesses.forEach(([name, process]) => {
      const statusIcon = this.getStatusIcon(process.status);
      const memoryMB = Math.round(process.memory / 1024 / 1024);
      const cpuPercent = Math.round(process.cpu);
      const uptime = this.formatUptime(process.uptime);
      
      console.log(
        name.padEnd(35) +
        `${statusIcon} ${process.status}`.padEnd(10) +
        `${memoryMB}MB`.padEnd(10) +
        `${cpuPercent}%`.padEnd(8) +
        uptime.padEnd(12) +
        process.restarts
      );
    });
    
    console.log('');
  }

  displayAutomationInsights() {
    console.log('🧠 AUTOMATION INSIGHTS');
    console.log('-'.repeat(60));
    
    try {
      // Smart Orchestrator insights
      const orchestratorReports = this.reports.get('automation-reports');
      if (orchestratorReports && orchestratorReports['smart-orchestration-report']) {
        const report = orchestratorReports['smart-orchestration-report'];
        if (report.healthSummary) {
          const health = report.healthSummary;
          console.log(`🏥 System Health Score: ${health.healthScore}/100`);
          console.log(`📈 Online Processes: ${health.online}/${health.total}`);
          
          if (health.recommendations && health.recommendations.length > 0) {
            console.log(`💡 Recommendations: ${health.recommendations.length} active`);
          }
        }
      }
      
      // Code Quality insights
      const qualityReports = this.reports.get('code-quality-reports');
      if (qualityReports && qualityReports['code-quality-report']) {
        const report = qualityReports['code-quality-report'];
        console.log(`🎯 Code Quality Score: ${report.overallScore}/100 (${report.grade})`);
        
        if (report.summary) {
          const summary = report.summary;
          console.log(`🔍 Total Issues: ${summary.totalIssues} | Critical: ${summary.criticalIssues} | Warnings: ${summary.warningIssues}`);
        }
      }
      
      // Performance insights
      const performanceReports = this.reports.get('performance-reports');
      if (performanceReports && performanceReports['performance-report']) {
        const report = performanceReports['performance-report'];
        console.log(`⚡ Performance Status: ${report.overallStatus.toUpperCase()}`);
        
        if (report.summary) {
          const summary = report.summary;
          console.log(`📊 Metrics: ${summary.excellentMetrics} Excellent | ${summary.warningMetrics} Warnings | ${summary.criticalMetrics} Critical`);
        }
      }
      
      // Error Prediction insights
      const errorReports = this.reports.get('error-prediction-reports');
      if (errorReports && errorReports['error-prediction-report']) {
        const report = errorReports['error-prediction-report'];
        console.log(`🔮 Error Risk Level: ${report.riskLevel} (${report.overallRisk}/100)`);
        
        if (report.predictions) {
          const predictions = report.predictions;
          console.log(`⚠️  High Risk: ${predictions.highRisk.length} | Medium Risk: ${predictions.mediumRisk.length} | Low Risk: ${predictions.lowRisk.length}`);
        }
      }
      
    } catch (error) {
      console.log('⚠️  Could not load automation insights');
    }
    
    console.log('');
  }

  displayRecentReports() {
    console.log('📋 RECENT REPORTS');
    console.log('-'.repeat(60));
    
    try {
      const allReports = [];
      
      this.reports.forEach((reports, dir) => {
        Object.entries(reports).forEach(([name, report]) => {
          if (report.timestamp) {
            allReports.push({
              name: `${dir}/${name}`,
              timestamp: new Date(report.timestamp),
              report: report
            });
          }
        });
      });
      
      // Sort by timestamp (newest first)
      allReports.sort((a, b) => b.timestamp - a.timestamp);
      
      // Display last 5 reports
      const recentReports = allReports.slice(0, 5);
      
      if (recentReports.length === 0) {
        console.log('📭 No recent reports found');
      } else {
        recentReports.forEach((report, index) => {
          const timeAgo = this.formatTimeAgo(report.timestamp);
          const status = report.report.status || 'unknown';
          console.log(`${index + 1}. ${report.name} - ${status} (${timeAgo})`);
        });
      }
      
    } catch (error) {
      console.log('⚠️  Could not load recent reports');
    }
    
    console.log('');
  }

  displaySystemHealth() {
    console.log('💚 SYSTEM HEALTH');
    console.log('-'.repeat(60));
    
    try {
      // Memory usage
      const memUsage = process.memoryUsage();
      const memUsageMB = Math.round(memUsage.heapUsed / 1024 / 1024);
      const memTotalMB = Math.round(memUsage.heapTotal / 1024 / 1024);
      
      console.log(`🧠 Memory Usage: ${memUsageMB}MB / ${memTotalMB}MB (${Math.round(memUsageMB / memTotalMB * 100)}%)`);
      
      // Process count
      const totalProcesses = this.processes.size;
      const onlineProcesses = Array.from(this.processes.values()).filter(p => p.status === 'online').length;
      const healthPercentage = Math.round((onlineProcesses / totalProcesses) * 100);
      
      console.log(`📊 Process Health: ${onlineProcesses}/${totalProcesses} online (${healthPercentage}%)`);
      
      // Uptime
      const systemUptime = process.uptime();
      console.log(`⏱️  System Uptime: ${this.formatUptime(systemUptime * 1000)}`);
      
      // Health status
      let healthStatus = '🟢 EXCELLENT';
      if (healthPercentage < 80) healthStatus = '🟡 GOOD';
      if (healthPercentage < 60) healthStatus = '🟠 FAIR';
      if (healthPercentage < 40) healthStatus = '🔴 POOR';
      
      console.log(`🏥 Overall Health: ${healthStatus}`);
      
    } catch (error) {
      console.log('⚠️  Could not load system health');
    }
    
    console.log('');
  }

  displayCommands() {
    console.log('🎮 COMMANDS');
    console.log('-'.repeat(60));
    console.log('r - Refresh Dashboard    | s - Start All Processes    | x - Stop All Processes');
    console.log('l - View Logs           | m - Open PM2 Monitor       | h - Process Health Check');
    console.log('q - Quit Dashboard      | 1-9 - Select Process      | Enter - Refresh\n');
    console.log('Type command and press Enter:');
  }

  getStatusIcon(status) {
    switch (status) {
      case 'online': return '🟢';
      case 'stopped': return '🔴';
      case 'errored': return '⚠️';
      case 'restarting': return '🔄';
      default: return '❓';
    }
  }

  formatUptime(milliseconds) {
    const seconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    
    if (days > 0) return `${days}d ${hours % 24}h`;
    if (hours > 0) return `${hours}h ${minutes % 60}m`;
    if (minutes > 0) return `${minutes}m ${seconds % 60}s`;
    return `${seconds}s`;
  }

  formatTimeAgo(timestamp) {
    const now = new Date();
    const diff = now - timestamp;
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    const days = Math.floor(diff / 86400000);
    
    if (days > 0) return `${days}d ago`;
    if (hours > 0) return `${hours}h ago`;
    if (minutes > 0) return `${minutes}m ago`;
    return 'Just now';
  }

  async handleUserInput() {
    const readline = require('readline');
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    
    rl.on('line', async (input) => {
      const command = input.trim().toLowerCase();
      
      switch (command) {
        case 'r':
        case '':
          await this.updateDashboard();
          break;
          
        case 's':
          await this.startAllProcesses();
          break;
          
        case 'x':
          await this.stopAllProcesses();
          break;
          
        case 'l':
          await this.viewLogs();
          break;
          
        case 'm':
          await this.openPM2Monitor();
          break;
          
        case 'h':
          await this.processHealthCheck();
          break;
          
        case 'q':
          console.log('\n👋 Shutting down dashboard...');
          rl.close();
          process.exit(0);
          break;
          
        default:
          if (/^[1-9]$/.test(command)) {
            await this.selectProcess(parseInt(command));
          } else {
            console.log('❌ Invalid command. Type "h" for help.');
          }
          break;
      }
      
      if (command !== 'q') {
        setTimeout(() => {
          this.displayCommands();
        }, 1000);
      }
    });
  }

  async startAllProcesses() {
    console.log('\n🚀 Starting all automation processes...');
    try {
      execSync('pm2 start ecosystem.config.cjs', { stdio: 'inherit' });
      console.log('✅ All processes started successfully');
    } catch (error) {
      console.log('❌ Failed to start processes:', error.message);
    }
  }

  async stopAllProcesses() {
    console.log('\n🛑 Stopping all automation processes...');
    try {
      execSync('pm2 stop ecosystem.config.cjs', { stdio: 'inherit' });
      console.log('✅ All processes stopped successfully');
    } catch (error) {
      console.log('❌ Failed to stop processes:', error.message);
    }
  }

  async viewLogs() {
    console.log('\n📋 Recent logs from all processes...');
    try {
      execSync('pm2 logs --lines 20', { stdio: 'inherit' });
    } catch (error) {
      console.log('❌ Failed to view logs:', error.message);
    }
  }

  async openPM2Monitor() {
    console.log('\n📊 Opening PM2 monitoring interface...');
    try {
      execSync('pm2 monit', { stdio: 'inherit' });
    } catch (error) {
      console.log('❌ Failed to open monitor:', error.message);
    }
  }

  async processHealthCheck() {
    console.log('\n🏥 Running comprehensive health check...');
    try {
      // Check PM2 status
      const status = execSync('pm2 status', { encoding: 'utf8' });
      console.log(status);
      
      // Check for any errored processes
      const erroredProcesses = Array.from(this.processes.values()).filter(p => p.status === 'errored');
      if (erroredProcesses.length > 0) {
        console.log(`\n⚠️  Found ${erroredProcesses.length} errored processes:`);
        erroredProcesses.forEach(process => {
          console.log(`  - ${process.name} (ID: ${process.id})`);
        });
      }
      
    } catch (error) {
      console.log('❌ Health check failed:', error.message);
    }
  }

  async selectProcess(processNumber) {
    const automationProcesses = Array.from(this.processes.entries())
      .filter(([name]) => name.includes('automation') || name.includes('ai') || name.includes('smart') || name.includes('intelligent') || name.includes('console-error-fixer') || name.includes('link-checker') || name.includes('continuous-improvement') || name.includes('daily-build-test') || name.includes('security-audit') || name.includes('dependency-updates') || name.includes('performance-monitor') || name.includes('quality-checks') || name.includes('link-integrity') || name.includes('front-maximizer') || name.includes('sitemap-runner'))
      .sort((a, b) => a[1].name.localeCompare(b[1].name));
    
    if (processNumber <= automationProcesses.length) {
      const [name, process] = automationProcesses[processNumber - 1];
      console.log(`\n📊 Process Details: ${name}`);
      console.log('-'.repeat(40));
      console.log(`ID: ${process.id}`);
      console.log(`Status: ${process.status}`);
      console.log(`Memory: ${Math.round(process.memory / 1024 / 1024)}MB`);
      console.log(`CPU: ${Math.round(process.cpu)}%`);
      console.log(`Uptime: ${this.formatUptime(process.uptime)}`);
      console.log(`Restarts: ${process.restarts}`);
      
      // Show recent logs for this process
      console.log('\n📋 Recent logs:');
      try {
        const logs = execSync(`pm2 logs ${name} --lines 10 --nostream`, { encoding: 'utf8' });
        console.log(logs);
      } catch (error) {
        console.log('No logs available');
      }
    } else {
      console.log('❌ Invalid process number');
    }
  }
}

// Main execution
if (require.main === module) {
  const dashboard = new PM2AutomationDashboard();
  
  // Handle graceful shutdown
  process.on('SIGINT', () => {
    console.log('\n🛑 Shutting down dashboard...');
    process.exit(0);
  });
  
  process.on('SIGTERM', () => {
    console.log('\n🛑 Shutting down dashboard...');
    process.exit(0);
  });
  
  // Start dashboard
  dashboard.startDashboard();
}

module.exports = PM2AutomationDashboard;
