#!/usr/bin/env node

/**
 * Status Monitor - PM2 Automation
 * Replaces GitHub Actions status workflows
 * Monitors application health and generates status reports
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

class StatusMonitor {
  constructor() {
    this.logFile = path.join(__dirname, '../../reports/status-monitor-report.json');
    this.interval = process.env.AUTOMATION_INTERVAL || 1800000; // 30 minutes default
    this.isRunning = false;
    this.statusHistory = [];
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}`;
    console.log(logMessage);
    
    // Also log to file
    try {
      const logDir = path.dirname(this.logFile);
      if (!fs.existsSync(logDir)) {
        fs.mkdirSync(logDir, { recursive: true });
      }
      
      const logEntry = {
        timestamp,
        level,
        message,
        automation: 'status-monitor'
      };
      
      let logs = [];
      if (fs.existsSync(this.logFile)) {
        try {
          logs = JSON.parse(fs.readFileSync(this.logFile, 'utf8'));
        } catch (e) {
          logs = [];
        }
      }
      
      logs.push(logEntry);
      fs.writeFileSync(this.logFile, JSON.stringify(logs, null, 2));
    } catch (e) {
      console.error('Failed to write to log file:', e.message);
    }
  }

  async checkPM2Status() {
    try {
      this.log('Checking PM2 status...', 'INFO');
      
      const pm2Status = execSync('pm2 status --json', { encoding: 'utf8' });
      const status = JSON.parse(pm2Status);
      
      const appStatus = {
        timestamp: new Date().toISOString(),
        totalApps: status.length,
        online: 0,
        errored: 0,
        stopped: 0,
        apps: []
      };
      
      status.forEach(app => {
        appStatus.apps.push({
          name: app.name,
          status: app.pm2_env?.status || 'unknown',
          cpu: app.monit?.cpu || 0,
          memory: app.monit?.memory || 0,
          uptime: app.pm2_env?.pm_uptime || 0,
          restarts: app.pm2_env?.restart_time || 0
        });
        
        switch (app.pm2_env?.status) {
          case 'online':
            appStatus.online++;
            break;
          case 'errored':
            appStatus.errored++;
            break;
          case 'stopped':
            appStatus.stopped++;
            break;
        }
      });
      
      return appStatus;
    } catch (e) {
      this.log(`Failed to check PM2 status: ${e.message}`, 'ERROR');
      return null;
    }
  }

  async checkSystemResources() {
    try {
      this.log('Checking system resources...', 'INFO');
      
      const resources = {
        timestamp: new Date().toISOString(),
        cpu: 0,
        memory: 0,
        disk: 0,
        uptime: 0
      };
      
      // Check CPU usage
      try {
        const cpuInfo = execSync("top -bn1 | grep 'Cpu(s)' | awk '{print $2}' | cut -d'%' -f1", { encoding: 'utf8' });
        resources.cpu = parseFloat(cpuInfo.trim());
      } catch (e) {
        this.log('Failed to get CPU usage', 'WARN');
      }
      
      // Check memory usage
      try {
        const memInfo = execSync("free | grep Mem | awk '{printf \"%.1f\", $3/$2 * 100.0}'", { encoding: 'utf8' });
        resources.memory = parseFloat(memInfo.trim());
      } catch (e) {
        this.log('Failed to get memory usage', 'WARN');
      }
      
      // Check disk usage
      try {
        const diskInfo = execSync("df / | tail -1 | awk '{print $5}' | cut -d'%' -f1", { encoding: 'utf8' });
        resources.disk = parseFloat(diskInfo.trim());
      } catch (e) {
        this.log('Failed to get disk usage', 'WARN');
      }
      
      // Check system uptime
      try {
        const uptimeInfo = execSync("uptime -p", { encoding: 'utf8' });
        resources.uptime = uptimeInfo.trim();
      } catch (e) {
        this.log('Failed to get uptime', 'WARN');
      }
      
      return resources;
    } catch (e) {
      this.log(`Failed to check system resources: ${e.message}`, 'ERROR');
      return null;
    }
  }

  async checkApplicationHealth() {
    try {
      this.log('Checking application health...', 'INFO');
      
      const health = {
        timestamp: new Date().toISOString(),
        buildStatus: 'unknown',
        testStatus: 'unknown',
        lintStatus: 'unknown',
        typeCheckStatus: 'unknown'
      };
      
      // Check if build works
      try {
        execSync('npm run build', { stdio: 'pipe', timeout: 60000 });
        health.buildStatus = 'success';
      } catch (e) {
        health.buildStatus = 'failed';
        this.log(`Build check failed: ${e.message}`, 'WARN');
      }
      
      // Check if tests pass
      try {
        execSync('npm run test', { stdio: 'pipe', timeout: 60000 });
        health.testStatus = 'success';
      } catch (e) {
        health.testStatus = 'failed';
        this.log(`Test check failed: ${e.message}`, 'WARN');
      }
      
      // Check if linting passes
      try {
        execSync('npm run lint', { stdio: 'pipe', timeout: 30000 });
        health.lintStatus = 'success';
      } catch (e) {
        health.lintStatus = 'failed';
        this.log(`Lint check failed: ${e.message}`, 'WARN');
      }
      
      // Check if type checking passes
      try {
        execSync('npm run type-check', { stdio: 'pipe', timeout: 30000 });
        health.typeCheckStatus = 'success';
      } catch (e) {
        health.typeCheckStatus = 'failed';
        this.log(`Type check failed: ${e.message}`, 'WARN');
      }
      
      return health;
    } catch (e) {
      this.log(`Failed to check application health: ${e.message}`, 'ERROR');
      return null;
    }
  }

  async checkNetworkConnectivity() {
    try {
      this.log('Checking network connectivity...', 'INFO');
      
      const connectivity = {
        timestamp: new Date().toISOString(),
        github: false,
        npm: false,
        internet: false
      };
      
      // Check GitHub connectivity
      try {
        execSync('curl -s --connect-timeout 10 https://api.github.com', { stdio: 'pipe' });
        connectivity.github = true;
      } catch (e) {
        this.log('GitHub connectivity check failed', 'WARN');
      }
      
      // Check NPM connectivity
      try {
        execSync('curl -s --connect-timeout 10 https://registry.npmjs.org', { stdio: 'pipe' });
        connectivity.npm = true;
      } catch (e) {
        this.log('NPM connectivity check failed', 'WARN');
      }
      
      // Check general internet connectivity
      try {
        execSync('curl -s --connect-timeout 10 https://www.google.com', { stdio: 'pipe' });
        connectivity.internet = true;
      } catch (e) {
        this.log('Internet connectivity check failed', 'WARN');
      }
      
      return connectivity;
    } catch (e) {
      this.log(`Failed to check network connectivity: ${e.message}`, 'ERROR');
      return null;
    }
  }

  generateStatusBadge(statusData) {
    try {
      let overallStatus = 'passing';
      let color = 'green';
      
      // Determine overall status based on various checks
      if (statusData.pm2?.errored > 0 || statusData.health?.buildStatus === 'failed') {
        overallStatus = 'failing';
        color = 'red';
      } else if (statusData.pm2?.stopped > 0 || statusData.health?.testStatus === 'failed') {
        overallStatus = 'warning';
        color = 'orange';
      }
      
      const badgeUrl = `https://img.shields.io/badge/Status-${overallStatus}-${color}`;
      
      return {
        status: overallStatus,
        color: color,
        url: badgeUrl,
        markdown: `![Status](https://img.shields.io/badge/Status-${overallStatus}-${color})`
      };
    } catch (e) {
      this.log(`Failed to generate status badge: ${e.message}`, 'ERROR');
      return null;
    }
  }

  async generateReport(statusData) {
    try {
      const report = {
        timestamp: new Date().toISOString(),
        automation: 'status-monitor',
        summary: {
          overall: this.determineOverallStatus(statusData),
          pm2: statusData.pm2,
          system: statusData.system,
          health: statusData.health,
          network: statusData.network
        },
        details: statusData,
        badge: this.generateStatusBadge(statusData),
        recommendations: this.generateRecommendations(statusData)
      };
      
      // Save detailed report
      const reportFile = path.join(__dirname, '../../reports/status-monitor-report.json');
      fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
      
      // Generate markdown report
      const markdownReport = this.generateMarkdownReport(report);
      const markdownFile = path.join(__dirname, '../../reports/status-monitor-report.md');
      fs.writeFileSync(markdownFile, markdownReport);
      
      // Save status history
      this.statusHistory.push({
        timestamp: report.timestamp,
        overall: report.summary.overall,
        pm2Online: statusData.pm2?.online || 0,
        pm2Errored: statusData.pm2?.errored || 0
      });
      
      // Keep only last 100 entries
      if (this.statusHistory.length > 100) {
        this.statusHistory = this.statusHistory.slice(-100);
      }
      
      this.log(`Status report generated: ${reportFile}`, 'INFO');
      this.log(`Markdown report: ${markdownFile}`, 'INFO');
      
      return report;
    } catch (e) {
      this.log(`Failed to generate report: ${e.message}`, 'ERROR');
      return null;
    }
  }

  determineOverallStatus(statusData) {
    if (statusData.pm2?.errored > 0 || statusData.health?.buildStatus === 'failed') {
      return 'critical';
    } else if (statusData.pm2?.stopped > 0 || statusData.health?.testStatus === 'failed') {
      return 'warning';
    } else if (statusData.pm2?.online > 0 && statusData.health?.buildStatus === 'success') {
      return 'healthy';
    } else {
      return 'unknown';
    }
  }

  generateRecommendations(statusData) {
    const recommendations = [];
    
    if (statusData.pm2?.errored > 0) {
      recommendations.push('🔴 PM2 processes are in error state. Check logs and restart failed processes.');
    }
    
    if (statusData.pm2?.stopped > 0) {
      recommendations.push('⚠️ Some PM2 processes are stopped. Consider restarting them.');
    }
    
    if (statusData.health?.buildStatus === 'failed') {
      recommendations.push('🔴 Build is failing. Check for compilation errors or dependency issues.');
    }
    
    if (statusData.health?.testStatus === 'failed') {
      recommendations.push('⚠️ Tests are failing. Review test results and fix failing tests.');
    }
    
    if (statusData.health?.lintStatus === 'failed') {
      recommendations.push('⚠️ Linting is failing. Fix code style issues.');
    }
    
    if (statusData.health?.typeCheckStatus === 'failed') {
      recommendations.push('⚠️ Type checking is failing. Fix TypeScript errors.');
    }
    
    if (statusData.system?.cpu > 80) {
      recommendations.push('⚠️ High CPU usage detected. Monitor system performance.');
    }
    
    if (statusData.system?.memory > 80) {
      recommendations.push('⚠️ High memory usage detected. Consider optimizing memory usage.');
    }
    
    if (statusData.system?.disk > 90) {
      recommendations.push('🔴 High disk usage detected. Clean up unnecessary files.');
    }
    
    if (!statusData.network?.internet) {
      recommendations.push('🔴 Internet connectivity issues detected. Check network configuration.');
    }
    
    if (recommendations.length === 0) {
      recommendations.push('✅ All systems are healthy. Continue monitoring.');
    }
    
    recommendations.push('🔄 Run this monitor regularly to maintain system health.');
    
    return recommendations;
  }

  generateMarkdownReport(report) {
    let markdown = `# Status Monitor Report\n\n`;
    markdown += `**Generated:** ${report.timestamp}\n`;
    markdown += `**Automation:** ${report.automation}\n`;
    markdown += `**Overall Status:** ${report.summary.overall.toUpperCase()}\n\n`;
    
    if (report.badge) {
      markdown += `${report.badge.markdown}\n\n`;
    }
    
    markdown += `## PM2 Status\n\n`;
    markdown += `- **Total Apps:** ${report.summary.pm2.totalApps}\n`;
    markdown += `- **Online:** ${report.summary.pm2.online}\n`;
    markdown += `- **Errored:** ${report.summary.pm2.errored}\n`;
    markdown += `- **Stopped:** ${report.summary.pm2.stopped}\n\n`;
    
    markdown += `## System Resources\n\n`;
    markdown += `- **CPU Usage:** ${report.summary.system.cpu}%\n`;
    markdown += `- **Memory Usage:** ${report.summary.system.memory}%\n`;
    markdown += `- **Disk Usage:** ${report.summary.system.disk}%\n`;
    markdown += `- **Uptime:** ${report.summary.system.uptime}\n\n`;
    
    markdown += `## Application Health\n\n`;
    markdown += `- **Build:** ${report.summary.health.buildStatus}\n`;
    markdown += `- **Tests:** ${report.summary.health.testStatus}\n`;
    markdown += `- **Linting:** ${report.summary.health.lintStatus}\n`;
    markdown += `- **Type Check:** ${report.summary.health.typeCheckStatus}\n\n`;
    
    markdown += `## Network Connectivity\n\n`;
    markdown += `- **GitHub:** ${report.summary.network.github ? '✅' : '❌'}\n`;
    markdown += `- **NPM:** ${report.summary.network.npm ? '✅' : '❌'}\n`;
    markdown += `- **Internet:** ${report.summary.network.internet ? '✅' : '❌'}\n\n`;
    
    markdown += `## Recommendations\n\n`;
    report.recommendations.forEach(rec => {
      markdown += `- ${rec}\n`;
    });
    
    return markdown;
  }

  async run() {
    if (this.isRunning) {
      this.log('Status monitor already running, skipping...', 'WARN');
      return;
    }
    
    this.isRunning = true;
    this.log('Starting status monitoring...', 'INFO');
    
    try {
      // Collect all status information
      const pm2Status = await this.checkPM2Status();
      const systemResources = await this.checkSystemResources();
      const appHealth = await this.checkApplicationHealth();
      const networkConnectivity = await this.checkNetworkConnectivity();
      
      const statusData = {
        pm2: pm2Status,
        system: systemResources,
        health: appHealth,
        network: networkConnectivity
      };
      
      // Generate comprehensive report
      const report = await this.generateReport(statusData);
      
      if (report) {
        const overallStatus = report.summary.overall;
        this.log(`Status monitoring completed. Overall status: ${overallStatus}`, 'INFO');
        
        if (overallStatus === 'critical') {
          this.log('🚨 CRITICAL: System has critical issues requiring immediate attention!', 'ERROR');
        } else if (overallStatus === 'warning') {
          this.log('⚠️ WARNING: System has issues that should be addressed soon.', 'WARN');
        } else if (overallStatus === 'healthy') {
          this.log('✅ System is healthy and running normally.', 'INFO');
        }
      }
      
    } catch (error) {
      this.log(`Status monitoring failed: ${error.message}`, 'ERROR');
    } finally {
      this.isRunning = false;
    }
  }

  start() {
    this.log('Status Monitor started', 'INFO');
    
    // Run immediately
    this.run();
    
    // Schedule recurring runs
    setInterval(() => {
      this.run();
    }, this.interval);
  }
}

// Start the automation if run directly
if (require.main === module) {
  const monitor = new StatusMonitor();
  monitor.start();
}

module.exports = StatusMonitor;