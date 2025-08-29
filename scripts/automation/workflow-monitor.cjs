#!/usr/bin/env node

/**
 * Workflow Status Monitor Automation
 * Replaces GitHub Actions status and status-badge workflows
 * Runs every 2 hours to monitor PM2 processes and generate status reports
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class WorkflowMonitorAutomation {
  constructor() {
    this.interval = process.env.AUTOMATION_INTERVAL || 7200000; // 2 hours default
    this.reportsDir = path.join(process.cwd(), 'ci-cd-reports');
    this.ensureReportsDirectory();
  }

  ensureReportsDirectory() {
    if (!fs.existsSync(this.reportsDir)) {
      fs.mkdirSync(this.reportsDir, { recursive: true });
    }
  }

  async runWorkflowMonitoring() {
    try {
      console.log('📊 Starting workflow status monitoring...');
      
      const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
      const reportFile = path.join(this.reportsDir, `workflow-status-${timestamp}.json`);
      
      const report = {
        timestamp: new Date().toISOString(),
        type: 'workflow-status-monitoring',
        pm2Status: {},
        systemHealth: {},
        automationStatus: {},
        summary: {
          totalProcesses: 0,
          onlineProcesses: 0,
          offlineProcesses: 0,
          errorProcesses: 0,
          overallHealth: 'unknown'
        }
      };

      // Monitor PM2 processes
      await this.monitorPM2Processes(report);
      
      // Check system health
      await this.checkSystemHealth(report);
      
      // Monitor automation scripts
      await this.monitorAutomationScripts(report);
      
      // Generate status badges
      await this.generateStatusBadges(report);
      
      // Save report
      fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
      console.log(`📄 Workflow status report saved: ${reportFile}`);
      
      // Log summary
      this.logSummary(report);
      
      console.log('✅ Workflow status monitoring completed');
    } catch (error) {
      console.error('❌ Workflow status monitoring failed:', error.message);
    }
  }

  async monitorPM2Processes(report) {
    try {
      console.log('🔍 Monitoring PM2 processes...');
      
      try {
        const pm2StatusOutput = execSync('pm2 jlist', { encoding: 'utf8' });
        const pm2Processes = JSON.parse(pm2StatusOutput);
        
        report.pm2Status = {
          timestamp: new Date().toISOString(),
          processes: pm2Processes,
          summary: {
            total: pm2Processes.length,
            online: 0,
            offline: 0,
            error: 0,
            stopped: 0
          }
        };
        
        // Analyze process status
        pm2Processes.forEach(process => {
          switch (process.pm2_env.status) {
            case 'online':
              report.pm2Status.summary.online++;
              break;
            case 'stopped':
              report.pm2Status.summary.stopped++;
              break;
            case 'error':
              report.pm2Status.summary.error++;
              break;
            default:
              report.pm2Status.summary.offline++;
              break;
          }
        });
        
        report.summary.totalProcesses = pm2Processes.length;
        report.summary.onlineProcesses = report.pm2Status.summary.online;
        report.summary.offlineProcesses = report.pm2Status.summary.offline;
        report.summary.errorProcesses = report.pm2Status.summary.error;
        
        // Determine overall health
        if (report.pm2Status.summary.error > 0) {
          report.summary.overallHealth = 'error';
        } else if (report.pm2Status.summary.offline > 0) {
          report.summary.overallHealth = 'warning';
        } else if (report.pm2Status.summary.online === report.pm2Status.summary.total) {
          report.summary.overallHealth = 'healthy';
        } else {
          report.summary.overallHealth = 'degraded';
        }
        
        console.log(`📊 PM2 Status Summary:`);
        console.log(`   Total: ${report.pm2Status.summary.total}`);
        console.log(`   Online: ${report.pm2Status.summary.online}`);
        console.log(`   Offline: ${report.pm2Status.summary.offline}`);
        console.log(`   Error: ${report.pm2Status.summary.error}`);
        console.log(`   Stopped: ${report.pm2Status.summary.stopped}`);
        console.log(`   Overall Health: ${report.summary.overallHealth}`);
        
      } catch (error) {
        console.error('❌ Failed to get PM2 status:', error.message);
        report.pm2Status = {
          error: error.message,
          timestamp: new Date().toISOString()
        };
      }
      
    } catch (error) {
      console.error('❌ PM2 monitoring failed:', error.message);
    }
  }

  async checkSystemHealth(report) {
    try {
      console.log('💻 Checking system health...');
      
      const systemHealth = {
        timestamp: new Date().toISOString(),
        memory: {},
        cpu: {},
        disk: {},
        uptime: 0
      };
      
      // Check memory usage
      try {
        const memoryInfo = execSync('free -m', { encoding: 'utf8' });
        const memoryLines = memoryInfo.split('\n');
        if (memoryLines.length > 1) {
          const memLine = memoryLines[1].split(/\s+/);
          systemHealth.memory = {
            total: parseInt(memLine[1]),
            used: parseInt(memLine[2]),
            free: parseInt(memLine[3]),
            available: parseInt(memLine[6]),
            usagePercent: Math.round((parseInt(memLine[2]) / parseInt(memLine[1])) * 100)
          };
        }
      } catch (error) {
        systemHealth.memory.error = error.message;
      }
      
      // Check CPU usage
      try {
        const cpuInfo = execSync('top -bn1 | grep "Cpu(s)"', { encoding: 'utf8' });
        const cpuMatch = cpuInfo.match(/(\d+\.\d+)%us/);
        if (cpuMatch) {
          systemHealth.cpu.usagePercent = parseFloat(cpuMatch[1]);
        }
      } catch (error) {
        systemHealth.cpu.error = error.message;
      }
      
      // Check disk usage
      try {
        const diskInfo = execSync('df -h /', { encoding: 'utf8' });
        const diskLines = diskInfo.split('\n');
        if (diskLines.length > 1) {
          const diskLine = diskLines[1].split(/\s+/);
          systemHealth.disk = {
            filesystem: diskLine[0],
            size: diskLine[1],
            used: diskLine[2],
            available: diskLine[3],
            usagePercent: parseInt(diskLine[4].replace('%', ''))
          };
        }
      } catch (error) {
        systemHealth.disk.error = error.message;
      }
      
      // Check system uptime
      try {
        const uptime = execSync('uptime -p', { encoding: 'utf8' });
        systemHealth.uptime = uptime.trim();
      } catch (error) {
        systemHealth.uptime = 'unknown';
      }
      
      report.systemHealth = systemHealth;
      
      console.log('💻 System Health Summary:');
      if (systemHealth.memory.usagePercent) {
        console.log(`   Memory Usage: ${systemHealth.memory.usagePercent}%`);
      }
      if (systemHealth.cpu.usagePercent) {
        console.log(`   CPU Usage: ${systemHealth.cpu.usagePercent}%`);
      }
      if (systemHealth.disk.usagePercent) {
        console.log(`   Disk Usage: ${systemHealth.disk.usagePercent}%`);
      }
      console.log(`   Uptime: ${systemHealth.uptime}`);
      
    } catch (error) {
      console.error('❌ System health check failed:', error.message);
    }
  }

  async monitorAutomationScripts(report) {
    try {
      console.log('🤖 Monitoring automation scripts...');
      
      const automationDir = path.join(process.cwd(), 'scripts', 'automation');
      const automationStatus = {
        timestamp: new Date().toISOString(),
        scripts: [],
        summary: {
          total: 0,
          accessible: 0,
          executable: 0,
          lastModified: null
        }
      };
      
      if (fs.existsSync(automationDir)) {
        const files = fs.readdirSync(automationDir);
        const scriptFiles = files.filter(f => f.endsWith('.cjs') || f.endsWith('.js'));
        
        automationStatus.summary.total = scriptFiles.length;
        
        for (const file of scriptFiles) {
          const filePath = path.join(automationDir, file);
          const stats = fs.statSync(filePath);
          
          const scriptInfo = {
            name: file,
            path: filePath,
            size: stats.size,
            lastModified: stats.mtime.toISOString(),
            accessible: true,
            executable: (stats.mode & 0o111) !== 0
          };
          
          if (scriptInfo.executable) {
            automationStatus.summary.executable++;
          }
          
          automationStatus.scripts.push(scriptInfo);
          
          if (!automationStatus.summary.lastModified || 
              stats.mtime > new Date(automationStatus.summary.lastModified)) {
            automationStatus.summary.lastModified = stats.mtime.toISOString();
          }
        }
        
        automationStatus.summary.accessible = scriptFiles.length;
      }
      
      report.automationStatus = automationStatus;
      
      console.log(`🤖 Automation Scripts Summary:`);
      console.log(`   Total: ${automationStatus.summary.total}`);
      console.log(`   Accessible: ${automationStatus.summary.accessible}`);
      console.log(`   Executable: ${automationStatus.summary.executable}`);
      console.log(`   Last Modified: ${automationStatus.summary.lastModified}`);
      
    } catch (error) {
      console.error('❌ Automation script monitoring failed:', error.message);
    }
  }

  async generateStatusBadges(report) {
    try {
      console.log('🏷️ Generating status badges...');
      
      const badgesDir = path.join(process.cwd(), 'public', 'badges');
      if (!fs.existsSync(badgesDir)) {
        fs.mkdirSync(badgesDir, { recursive: true });
      }
      
      // Generate PM2 status badge
      const pm2Status = report.summary.overallHealth;
      const pm2Badge = this.generateBadge('PM2 Status', pm2Status, this.getBadgeColor(pm2Status));
      fs.writeFileSync(path.join(badgesDir, 'pm2-status.svg'), pm2Badge);
      
      // Generate system health badge
      const systemHealth = this.calculateSystemHealthScore(report.systemHealth);
      const systemBadge = this.generateBadge('System Health', systemHealth, this.getBadgeColor(systemHealth));
      fs.writeFileSync(path.join(badgesDir, 'system-health.svg'), systemBadge);
      
      // Generate automation status badge
      const automationHealth = this.calculateAutomationHealthScore(report.automationStatus);
      const automationBadge = this.generateBadge('Automation', automationHealth, this.getBadgeColor(automationHealth));
      fs.writeFileSync(path.join(badgesDir, 'automation-status.svg'), automationBadge);
      
      // Generate overall status badge
      const overallHealth = this.calculateOverallHealth(report);
      const overallBadge = this.generateBadge('Overall Status', overallHealth, this.getBadgeColor(overallHealth));
      fs.writeFileSync(path.join(badgesDir, 'overall-status.svg'), overallBadge);
      
      console.log('🏷️ Status badges generated successfully');
      
    } catch (error) {
      console.error('❌ Status badge generation failed:', error.message);
    }
  }

  generateBadge(label, status, color) {
    const width = Math.max(label.length * 6 + 20, status.length * 6 + 20);
    const labelWidth = label.length * 6 + 10;
    const statusWidth = status.length * 6 + 10;
    
    return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="20">
  <linearGradient id="b" x2="0" y2="100%">
    <stop offset="0" stop-color="#bbb" stop-opacity=".1"/>
    <stop offset="1" stop-opacity=".1"/>
  </linearGradient>
  <mask id="a">
    <rect width="${width}" height="20" rx="3" fill="#fff"/>
  </mask>
  <g mask="url(#a)">
    <path fill="#555" d="M0 0h${labelWidth}v20H0z"/>
    <path fill="${color}" d="M${labelWidth} 0h${statusWidth}v20H${labelWidth}z"/>
    <path fill="url(#b)" d="M0 0h${width}v20H0z"/>
  </g>
  <g fill="#fff" text-anchor="middle" font-family="DejaVu Sans,Verdana,Geneva,sans-serif" font-size="11">
    <text x="${labelWidth/2}" y="15" fill="#010101" fill-opacity=".3">${label}</text>
    <text x="${labelWidth/2}" y="14">${label}</text>
    <text x="${labelWidth + statusWidth/2}" y="15" fill="#010101" fill-opacity=".3">${status}</text>
    <text x="${labelWidth + statusWidth/2}" y="14">${status}</text>
  </g>
</svg>`;
  }

  getBadgeColor(status) {
    switch (status.toLowerCase()) {
      case 'healthy':
      case 'pass':
        return '#4c1';
      case 'warning':
      case 'degraded':
        return '#dfb317';
      case 'error':
      case 'offline':
        return '#e05d44';
      default:
        return '#9f9f9f';
    }
  }

  calculateSystemHealthScore(systemHealth) {
    let score = 100;
    
    if (systemHealth.memory.usagePercent > 90) score -= 30;
    else if (systemHealth.memory.usagePercent > 80) score -= 20;
    else if (systemHealth.memory.usagePercent > 70) score -= 10;
    
    if (systemHealth.cpu.usagePercent > 90) score -= 30;
    else if (systemHealth.cpu.usagePercent > 80) score -= 20;
    else if (systemHealth.cpu.usagePercent > 70) score -= 10;
    
    if (systemHealth.disk.usagePercent > 90) score -= 30;
    else if (systemHealth.disk.usagePercent > 80) score -= 20;
    else if (systemHealth.disk.usagePercent > 70) score -= 10;
    
    if (score >= 80) return 'Healthy';
    if (score >= 60) return 'Good';
    if (score >= 40) return 'Warning';
    return 'Critical';
  }

  calculateAutomationHealthScore(automationStatus) {
    if (automationStatus.summary.total === 0) return 'No Scripts';
    
    const healthPercent = (automationStatus.summary.executable / automationStatus.summary.total) * 100;
    
    if (healthPercent >= 90) return 'Excellent';
    if (healthPercent >= 80) return 'Good';
    if (healthPercent >= 60) return 'Fair';
    return 'Poor';
  }

  calculateOverallHealth(report) {
    const pm2Score = report.summary.overallHealth === 'healthy' ? 100 : 
                    report.summary.overallHealth === 'warning' ? 70 :
                    report.summary.overallHealth === 'degraded' ? 40 : 20;
    
    const systemScore = report.systemHealth.memory?.usagePercent ? 
                       (100 - Math.min(report.systemHealth.memory.usagePercent, 100)) : 50;
    
    const automationScore = report.automationStatus.summary.total > 0 ?
                           (report.automationStatus.summary.executable / report.automationStatus.summary.total) * 100 : 50;
    
    const overallScore = (pm2Score + systemScore + automationScore) / 3;
    
    if (overallScore >= 80) return 'Excellent';
    if (overallScore >= 60) return 'Good';
    if (overallScore >= 40) return 'Fair';
    return 'Poor';
  }

  logSummary(report) {
    console.log('\n📊 Workflow Status Summary:');
    console.log(`   Overall Health: ${report.summary.overallHealth}`);
    console.log(`   PM2 Processes: ${report.summary.onlineProcesses}/${report.summary.totalProcesses} online`);
    console.log(`   System Health: ${this.calculateSystemHealthScore(report.systemHealth)}`);
    console.log(`   Automation: ${this.calculateAutomationHealthScore(report.automationStatus)}`);
    
    if (report.pm2Status.summary?.error > 0) {
      console.log(`   ⚠️  ${report.pm2Status.summary.error} PM2 processes in error state`);
    }
    
    if (report.systemHealth.memory?.usagePercent > 80) {
      console.log(`   ⚠️  High memory usage: ${report.systemHealth.memory.usagePercent}%`);
    }
    
    if (report.systemHealth.disk?.usagePercent > 80) {
      console.log(`   ⚠️  High disk usage: ${report.systemHealth.disk.usagePercent}%`);
    }
  }

  async start() {
    console.log('🚀 Starting Workflow Status Monitor Automation...');
    console.log(`⏰ Running every ${this.interval / 1000 / 60} minutes`);
    
    // Run immediately
    await this.runWorkflowMonitoring();
    
    // Schedule recurring runs
    setInterval(async () => {
      await this.runWorkflowMonitoring();
    }, this.interval);
  }
}

// Start the automation if run directly
if (require.main === module) {
  const automation = new WorkflowMonitorAutomation();
  automation.start().catch(console.error);
}

module.exports = WorkflowMonitorAutomation;