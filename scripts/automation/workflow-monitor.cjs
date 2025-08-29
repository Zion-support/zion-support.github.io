#!/usr/bin/env node

/**
 * Workflow Status Monitor Automation
 * Replaces GitHub Actions: status.yml, status-badge.yml
 * Runs every 30 minutes to monitor PM2 processes and generate status reports
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

class WorkflowMonitorAutomation {
  constructor() {
    this.logFile = path.join(__dirname, '../../reports/workflow-status-report.json');
    this.interval = process.env.AUTOMATION_INTERVAL || 1800000; // 30 minutes default
    this.reportsDir = path.join(__dirname, '../../reports');
    this.badgesDir = path.join(__dirname, '../../public/badges');
  }

  async start() {
    console.log('🚀 Starting Workflow Status Monitor Automation...');
    
    // Ensure directories exist
    if (!fs.existsSync(this.reportsDir)) {
      fs.mkdirSync(this.reportsDir, { recursive: true });
    }
    if (!fs.existsSync(this.badgesDir)) {
      fs.mkdirSync(this.badgesDir, { recursive: true });
    }

    // Run initial monitoring
    await this.runWorkflowMonitoring();

    // Set up interval for continuous monitoring
    setInterval(async () => {
      await this.runWorkflowMonitoring();
    }, this.interval);

    console.log(`⏰ Workflow Status Monitor running every ${this.interval / 60000} minutes`);
  }

  async runWorkflowMonitoring() {
    try {
      console.log('📊 Running workflow status monitoring...');
      
      const timestamp = new Date().toISOString();
      const report = {
        timestamp,
        status: 'running',
        pm2Processes: {},
        systemHealth: {},
        automationStatus: {},
        recommendations: []
      };

      // Monitor PM2 processes
      await this.monitorPM2Processes(report);

      // Check system health
      await this.checkSystemHealth(report);

      // Monitor automation status
      await this.monitorAutomationStatus(report);

      // Generate status badges
      await this.generateStatusBadges(report);

      // Generate recommendations
      this.generateRecommendations(report);

      // Finalize report
      report.status = 'completed';
      report.summary = {
        totalProcesses: Object.keys(report.pm2Processes).length,
        healthyProcesses: Object.values(report.pm2Processes).filter(p => p.status === 'online').length,
        systemIssues: Object.keys(report.systemHealth).filter(k => report.systemHealth[k].status === 'warning').length
      };

      // Save report
      fs.writeFileSync(this.logFile, JSON.stringify(report, null, 2));
      
      console.log(`✅ Workflow monitoring completed: ${report.summary.healthyProcesses}/${report.summary.totalProcesses} processes healthy`);
      
      // Log recommendations
      if (report.recommendations.length > 0) {
        console.log('📋 Recommendations:');
        report.recommendations.forEach(rec => console.log(`  - ${rec}`));
      }

    } catch (error) {
      console.error('❌ Error in workflow monitoring:', error.message);
      
      // Save error report
      const errorReport = {
        timestamp: new Date().toISOString(),
        status: 'error',
        error: error.message,
        stack: error.stack
      };
      
      fs.writeFileSync(this.logFile, JSON.stringify(errorReport, null, 2));
    }
  }

  async monitorPM2Processes(report) {
    try {
      console.log('🔍 Monitoring PM2 processes...');

      // Get PM2 process list and parse it manually since --json is not available
      const pm2ListOutput = execSync('pm2 list', { encoding: 'utf8' });
      
      // Parse the PM2 list output manually
      const lines = pm2ListOutput.split('\n');
      let processes = [];
      
      for (const line of lines) {
        // Skip header lines and empty lines
        if (line.includes('id') || line.includes('─') || line.trim() === '') continue;
        
        // Parse process line
        const parts = line.split(/\s+/).filter(part => part.trim() !== '');
        if (parts.length >= 6) {
          const process = {
            id: parts[0],
            name: parts[1],
            status: parts[6],
            cpu: parts[7] || '0%',
            memory: parts[8] || '0b',
            restarts: parts[4] || '0'
          };
          
          if (process.name && process.name !== 'name') {
            processes.push(process);
          }
        }
      }

      for (const process of processes) {
        report.pm2Processes[process.name] = {
          id: process.id,
          status: process.status,
          cpu: process.cpu,
          memory: process.memory,
          restarts: process.restarts,
          lastError: process.status !== 'online' ? `Status: ${process.status}` : null
        };

        // Check for issues
        if (process.status !== 'online') {
          report.recommendations.push(`Process ${process.name} is not online (status: ${process.status})`);
        }

        if (parseInt(process.restarts) > 5) {
          report.recommendations.push(`Process ${process.name} has many restarts (${process.restarts})`);
        }

        // Parse memory usage for monitoring
        const memoryStr = process.memory;
        if (memoryStr.includes('mb') || memoryStr.includes('MB')) {
          const memoryMB = parseFloat(memoryStr.replace(/[^\d.]/g, ''));
          if (memoryMB > 500) {
            report.recommendations.push(`Process ${process.name} using high memory (${memoryMB}MB)`);
          }
        }
      }

    } catch (error) {
      console.error('Error monitoring PM2 processes:', error.message);
      report.pm2Processes = { error: error.message };
    }
  }

  async checkSystemHealth(report) {
    try {
      console.log('💻 Checking system health...');

      // Check disk space
      try {
        const diskOutput = execSync('df -h / | tail -1', { encoding: 'utf8' });
        const diskUsage = diskOutput.split(/\s+/)[4].replace('%', '');
        const diskUsageNum = parseInt(diskUsage);
        
        report.systemHealth.diskSpace = {
          usage: diskUsageNum,
          status: diskUsageNum > 90 ? 'critical' : diskUsageNum > 80 ? 'warning' : 'healthy',
          message: `${diskUsage}% disk usage`
        };

        if (diskUsageNum > 90) {
          report.recommendations.push('Critical disk space usage - consider cleanup');
        } else if (diskUsageNum > 80) {
          report.recommendations.push('High disk space usage - monitor closely');
        }
      } catch (error) {
        report.systemHealth.diskSpace = { status: 'unknown', error: error.message };
      }

      // Check memory usage
      try {
        const memoryOutput = execSync('free -m | grep Mem', { encoding: 'utf8' });
        const memoryParts = memoryOutput.split(/\s+/);
        const total = parseInt(memoryParts[1]);
        const used = parseInt(memoryParts[2]);
        const usagePercent = Math.round((used / total) * 100);
        
        report.systemHealth.memory = {
          total: total,
          used: used,
          usage: usagePercent,
          status: usagePercent > 90 ? 'critical' : usagePercent > 80 ? 'warning' : 'healthy',
          message: `${usagePercent}% memory usage (${used}MB/${total}MB)`
        };

        if (usagePercent > 90) {
          report.recommendations.push('Critical memory usage - consider restarting processes');
        } else if (usagePercent > 80) {
          report.recommendations.push('High memory usage - monitor closely');
        }
      } catch (error) {
        report.systemHealth.memory = { status: 'unknown', error: error.message };
      }

      // Check CPU load
      try {
        const loadOutput = execSync('uptime', { encoding: 'utf8' });
        const loadMatch = loadOutput.match(/load average: ([\d.]+), ([\d.]+), ([\d.]+)/);
        
        if (loadMatch) {
          const load1 = parseFloat(loadMatch[1]);
          const load5 = parseFloat(loadMatch[2]);
          const load15 = parseFloat(loadMatch[3]);
          
          report.systemHealth.cpuLoad = {
            load1,
            load5,
            load15,
            status: load1 > 5 ? 'critical' : load1 > 2 ? 'warning' : 'healthy',
            message: `Load averages: 1m=${load1}, 5m=${load5}, 15m=${load15}`
          };

          if (load1 > 5) {
            report.recommendations.push('High CPU load detected - check for runaway processes');
          } else if (load1 > 2) {
            report.recommendations.push('Elevated CPU load - monitor performance');
          }
        }
      } catch (error) {
        report.systemHealth.cpuLoad = { status: 'unknown', error: error.message };
      }

    } catch (error) {
      console.error('Error checking system health:', error.message);
      report.systemHealth = { error: error.message };
    }
  }

  async monitorAutomationStatus(report) {
    try {
      console.log('🤖 Monitoring automation status...');

      // Check automation report files
      const automationReports = [
        'console-error-fixer-report.json',
        'continuous-improvement-report.json',
        'daily-build-test-report.json',
        'security-audit-report.json',
        'dependency-updates-report.json',
        'performance-monitor-report.json',
        'quality-checks-report.json',
        'link-integrity-report.json',
        'front-maximizer-report.json',
        'sitemap-runner-report.json'
      ];

      for (const reportFile of automationReports) {
        const reportPath = path.join(this.reportsDir, reportFile);
        
        if (fs.existsSync(reportPath)) {
          try {
            const reportContent = JSON.parse(fs.readFileSync(reportPath, 'utf8'));
            const automationName = reportFile.replace('-report.json', '');
            
            report.automationStatus[automationName] = {
              lastRun: reportContent.timestamp,
              status: reportContent.status || 'unknown',
              hasErrors: reportContent.error ? true : false
            };

            // Check for stale reports (older than 24 hours)
            const lastRunTime = new Date(reportContent.timestamp);
            const hoursSinceLastRun = (Date.now() - lastRunTime.getTime()) / (1000 * 60 * 60);
            
            if (hoursSinceLastRun > 24) {
              report.recommendations.push(`Automation ${automationName} hasn't run in ${Math.round(hoursSinceLastRun)} hours`);
            }

            if (reportContent.error) {
              report.recommendations.push(`Automation ${automationName} encountered an error: ${reportContent.error}`);
            }

          } catch (error) {
            report.automationStatus[reportFile] = { error: 'Failed to parse report' };
          }
        } else {
          report.automationStatus[reportFile.replace('-report.json', '')] = { status: 'no-report' };
        }
      }

    } catch (error) {
      console.error('Error monitoring automation status:', error.message);
      report.automationStatus = { error: error.message };
    }
  }

  async generateStatusBadges(report) {
    try {
      console.log('🏷️ Generating status badges...');

      // Overall system health badge
      const overallHealth = this.calculateOverallHealth(report);
      const healthBadge = this.generateBadge('System Health', overallHealth.status, overallHealth.color);
      fs.writeFileSync(path.join(this.badgesDir, 'system-health.svg'), healthBadge);

      // PM2 processes badge
      const pm2Health = this.calculatePM2Health(report);
      const pm2Badge = this.generateBadge('PM2 Processes', pm2Health.status, pm2Health.color);
      fs.writeFileSync(path.join(this.badgesDir, 'pm2-processes.svg'), pm2Badge);

      // Automation status badge
      const automationHealth = this.calculateAutomationHealth(report);
      const automationBadge = this.generateBadge('Automation', automationHealth.status, automationHealth.color);
      fs.writeFileSync(path.join(this.badgesDir, 'automation-status.svg'), automationBadge);

      console.log('✅ Status badges generated successfully');

    } catch (error) {
      console.error('Error generating status badges:', error.message);
    }
  }

  calculateOverallHealth(report) {
    const criticalCount = Object.values(report.systemHealth).filter(h => h.status === 'critical').length;
    const warningCount = Object.values(report.systemHealth).filter(h => h.status === 'warning').length;
    
    if (criticalCount > 0) return { status: 'Critical', color: 'red' };
    if (warningCount > 0) return { status: 'Warning', color: 'orange' };
    return { status: 'Healthy', color: 'green' };
  }

  calculatePM2Health(report) {
    const totalProcesses = Object.keys(report.pm2Processes).length;
    const onlineProcesses = Object.values(report.pm2Processes).filter(p => p.status === 'online').length;
    const healthPercent = Math.round((onlineProcesses / totalProcesses) * 100);
    
    if (healthPercent === 100) return { status: 'All Online', color: 'green' };
    if (healthPercent >= 80) return { status: 'Most Online', color: 'orange' };
    return { status: 'Issues', color: 'red' };
  }

  calculateAutomationHealth(report) {
    const totalAutomations = Object.keys(report.automationStatus).length;
    const healthyAutomations = Object.values(report.automationStatus).filter(a => a.status === 'completed' && !a.hasErrors).length;
    const healthPercent = Math.round((healthyAutomations / totalAutomations) * 100);
    
    if (healthPercent === 100) return { status: 'All Healthy', color: 'green' };
    if (healthPercent >= 80) return { status: 'Most Healthy', color: 'orange' };
    return { status: 'Issues', color: 'red' };
  }

  generateBadge(label, message, color) {
    const colors = {
      green: '#4c1',
      orange: '#f93',
      red: '#e05d44'
    };
    
    const width = Math.max(label.length, message.length) * 8 + 20;
    
    return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="20">
      <linearGradient id="b" x2="0" y2="100%">
        <stop offset="0" stop-color="#bbb" stop-opacity=".1"/>
        <stop offset="1" stop-opacity=".1"/>
      </linearGradient>
      <mask id="a">
        <rect width="${width}" height="20" rx="3" fill="#fff"/>
      </mask>
      <g mask="url(#a)">
        <path fill="#555" d="M0 0h${label.length * 8 + 10}v20H0z"/>
        <path fill="${colors[color]}" d="M${label.length * 8 + 10} 0h${message.length * 8 + 10}v20H${label.length * 8 + 10}z"/>
        <path fill="url(#b)" d="M0 0h${width}v20H0z"/>
      </g>
      <g fill="#fff" text-anchor="middle" font-family="DejaVu Sans,Verdana,Geneva,sans-serif" font-size="11">
        <text x="${(label.length * 8 + 10) / 2}" y="15" fill="#010101" fill-opacity=".3">${label}</text>
        <text x="${(label.length * 8 + 10) / 2}" y="14">${label}</text>
        <text x="${label.length * 8 + 10 + (message.length * 8 + 10) / 2}" y="15" fill="#010101" fill-opacity=".3">${message}</text>
        <text x="${label.length * 8 + 10 + (message.length * 8 + 10) / 2}" y="14">${message}</text>
      </g>
    </svg>`;
  }

  generateRecommendations(report) {
    // Add system-specific recommendations
    if (report.systemHealth.diskSpace && report.systemHealth.diskSpace.status === 'critical') {
      report.recommendations.push('Immediate disk space cleanup required');
    }

    if (report.systemHealth.memory && report.systemHealth.memory.status === 'critical') {
      report.recommendations.push('Memory usage critical - restart high-memory processes');
    }

    // Add PM2-specific recommendations
    const offlineProcesses = Object.entries(report.pm2Processes).filter(([name, proc]) => proc.status !== 'online');
    if (offlineProcesses.length > 0) {
      report.recommendations.push(`Restart offline processes: ${offlineProcesses.map(([name]) => name).join(', ')}`);
    }

    // Add automation-specific recommendations
    const failedAutomations = Object.entries(report.automationStatus).filter(([name, status]) => status.hasErrors);
    if (failedAutomations.length > 0) {
      report.recommendations.push(`Investigate failed automations: ${failedAutomations.map(([name]) => name).join(', ')}`);
    }
  }

  async stop() {
    console.log('🛑 Stopping Workflow Status Monitor...');
    process.exit(0);
  }
}

// Handle process signals
process.on('SIGINT', () => {
  console.log('Received SIGINT, shutting down gracefully...');
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('Received SIGTERM, shutting down gracefully...');
  process.exit(0);
});

// Start the automation
const automation = new WorkflowMonitorAutomation();
automation.start().catch(console.error);