#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class AutomationDashboard {
  constructor() {
    this.projectRoot = process.cwd();
    this.reportsDir = path.join(this.projectRoot, 'reports');
    this.startTime = Date.now();
    
    // Ensure reports directory exists
    if (!fs.existsSync(this.reportsDir)) {
      fs.mkdirSync(this.reportsDir, { recursive: true });
    }
  }

  log(message) {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] [DASHBOARD] ${message}`);
  }

  async getPM2Status() {
    try {
      const output = execSync('pm2 status --no-daemon', { 
        stdio: 'pipe',
        cwd: this.projectRoot,
        timeout: 10000
      }).toString();
      
      return this.parsePM2Status(output);
    } catch (error) {
      this.log(`Failed to get PM2 status: ${error.message}`);
      return [];
    }
  }

  parsePM2Status(output) {
    const lines = output.split('\n');
    const processes = [];
    
    for (const line of lines) {
      if (line.includes('│') && !line.includes('──') && !line.includes('name')) {
        const parts = line.split('│').map(part => part.trim()).filter(part => part);
        if (parts.length >= 6) {
          processes.push({
            id: parts[0],
            name: parts[1],
            mode: parts[2],
            restarts: parts[3],
            status: parts[4],
            cpu: parts[5],
            memory: parts[6] || 'N/A'
          });
        }
      }
    }
    
    return processes;
  }

  async getAutomationReports() {
    const reports = [];
    const reportFiles = [
      'enhanced-error-fixer-report.json',
      'comprehensive-error-fixer-report.json',
      'typescript-error-fixer-report.json',
      'general-error-fixer-report.json',
      'console-error-fixer-report.json',
      'automation-orchestrator-report.json'
    ];

    for (const reportFile of reportFiles) {
      const reportPath = path.join(this.reportsDir, reportFile);
      if (fs.existsSync(reportPath)) {
        try {
          const content = fs.readFileSync(reportPath, 'utf8');
          const report = JSON.parse(content);
          reports.push({
            name: reportFile.replace('-report.json', ''),
            ...report
          });
        } catch (error) {
          this.log(`Error reading report ${reportFile}: ${error.message}`);
        }
      }
    }

    return reports;
  }

  async getProjectHealth() {
    try {
      // Check linting
      let lintStatus = 'unknown';
      try {
        execSync('npm run lint', { stdio: 'pipe', timeout: 30000 });
        lintStatus = 'passing';
      } catch (error) {
        lintStatus = 'failing';
      }

      // Check TypeScript
      let tsStatus = 'unknown';
      try {
        execSync('npm run type-check', { stdio: 'pipe', timeout: 30000 });
        tsStatus = 'passing';
      } catch (error) {
        tsStatus = 'failing';
      }

      // Check build
      let buildStatus = 'unknown';
      try {
        execSync('npm run build', { stdio: 'pipe', timeout: 60000 });
        buildStatus = 'passing';
      } catch (error) {
        buildStatus = 'failing';
      }

      return {
        lint: lintStatus,
        typescript: tsStatus,
        build: buildStatus,
        overall: [lintStatus, tsStatus, buildStatus].every(status => status === 'passing') ? 'healthy' : 'needs-attention'
      };
    } catch (error) {
      this.log(`Error checking project health: ${error.message}`);
      return {
        lint: 'unknown',
        typescript: 'unknown',
        build: 'unknown',
        overall: 'unknown'
      };
    }
  }

  async generateDashboard() {
    this.log('Generating comprehensive automation dashboard...');
    
    try {
      const pm2Status = await this.getPM2Status();
      const reports = await this.getAutomationReports();
      const projectHealth = await this.getProjectHealth();
      
      const dashboard = {
        timestamp: new Date().toISOString(),
        summary: 'Zion Tech Group Automation Dashboard',
        uptime: Date.now() - this.startTime,
        pm2: {
          totalProcesses: pm2Status.length,
          online: pm2Status.filter(p => p.status === 'online').length,
          stopped: pm2Status.filter(p => p.status === 'stopped').length,
          errored: pm2Status.filter(p => p.status === 'errored').length,
          processes: pm2Status
        },
        automations: {
          total: reports.length,
          reports: reports
        },
        projectHealth: projectHealth,
        recommendations: this.generateRecommendations(pm2Status, projectHealth, reports)
      };
      
      const dashboardPath = path.join(this.reportsDir, 'automation-dashboard.json');
      fs.writeFileSync(dashboardPath, JSON.stringify(dashboard, null, 2));
      
      this.log(`Dashboard saved to ${dashboardPath}`);
      return dashboard;
      
    } catch (error) {
      this.log(`Failed to generate dashboard: ${error.message}`);
      throw error;
    }
  }

  generateRecommendations(pm2Status, projectHealth, reports) {
    const recommendations = [];
    
    // PM2 process recommendations
    const erroredProcesses = pm2Status.filter(p => p.status === 'errored');
    if (erroredProcesses.length > 0) {
      recommendations.push(`Restart ${erroredProcesses.length} errored PM2 processes`);
    }
    
    const stoppedProcesses = pm2Status.filter(p => p.status === 'stopped');
    if (stoppedProcesses.length > 0) {
      recommendations.push(`Start ${stoppedProcesses.length} stopped PM2 processes`);
    }
    
    // Project health recommendations
    if (projectHealth.lint === 'failing') {
      recommendations.push('Fix ESLint errors to improve code quality');
    }
    
    if (projectHealth.typescript === 'failing') {
      recommendations.push('Fix TypeScript errors to ensure type safety');
    }
    
    if (projectHealth.build === 'failing') {
      recommendations.push('Fix build errors to ensure deployability');
    }
    
    // Automation recommendations
    if (reports.length === 0) {
      recommendations.push('Run automations to generate initial reports');
    }
    
    const recentReports = reports.filter(report => {
      if (!report.timestamp) return false;
      const reportTime = new Date(report.timestamp).getTime();
      return Date.now() - reportTime < 3600000; // 1 hour
    });
    
    if (recentReports.length < reports.length) {
      recommendations.push('Some automations have not run recently - check PM2 status');
    }
    
    return recommendations;
  }

  async displayDashboard() {
    try {
      const dashboard = await this.generateDashboard();
      
      console.log('\n' + '='.repeat(80));
      console.log('🚀 ZION TECH GROUP AUTOMATION DASHBOARD');
      console.log('='.repeat(80));
      
      // PM2 Status
      console.log('\n📊 PM2 PROCESS STATUS:');
      console.log('-'.repeat(40));
      console.log(`Total Processes: ${dashboard.pm2.totalProcesses}`);
      console.log(`Online: ${dashboard.pm2.online} | Stopped: ${dashboard.pm2.stopped} | Errored: ${dashboard.pm2.errored}`);
      
      if (dashboard.pm2.processes.length > 0) {
        console.log('\nProcess Details:');
        dashboard.pm2.processes.forEach(process => {
          const statusIcon = process.status === 'online' ? '🟢' : process.status === 'stopped' ? '🔴' : '🟡';
          console.log(`${statusIcon} ${process.name.padEnd(25)} | ${process.status.padEnd(8)} | CPU: ${process.cpu.padEnd(6)} | Memory: ${process.memory}`);
        });
      }
      
      // Project Health
      console.log('\n🏥 PROJECT HEALTH:');
      console.log('-'.repeat(40));
      const healthIcon = dashboard.projectHealth.overall === 'healthy' ? '🟢' : '🟡';
      console.log(`${healthIcon} Overall: ${dashboard.projectHealth.overall}`);
      console.log(`   Lint: ${dashboard.projectHealth.lint}`);
      console.log(`   TypeScript: ${dashboard.projectHealth.typescript}`);
      console.log(`   Build: ${dashboard.projectHealth.build}`);
      
      // Automation Reports
      console.log('\n🤖 AUTOMATION REPORTS:');
      console.log('-'.repeat(40));
      console.log(`Total Reports: ${dashboard.automations.total}`);
      
      if (dashboard.automations.reports.length > 0) {
        dashboard.automations.reports.forEach(report => {
          const timeAgo = report.timestamp ? this.getTimeAgo(new Date(report.timestamp)) : 'unknown';
          console.log(`   ${report.name}: ${timeAgo}`);
        });
      }
      
      // Recommendations
      if (dashboard.recommendations.length > 0) {
        console.log('\n💡 RECOMMENDATIONS:');
        console.log('-'.repeat(40));
        dashboard.recommendations.forEach((rec, index) => {
          console.log(`   ${index + 1}. ${rec}`);
        });
      }
      
      console.log('\n' + '='.repeat(80));
      console.log(`Dashboard generated at: ${dashboard.timestamp}`);
      console.log(`Uptime: ${this.formatUptime(dashboard.uptime)}`);
      console.log('='.repeat(80) + '\n');
      
    } catch (error) {
      this.log(`Failed to display dashboard: ${error.message}`);
    }
  }

  getTimeAgo(date) {
    const now = new Date();
    const diff = now - date;
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    const days = Math.floor(diff / 86400000);
    
    if (days > 0) return `${days}d ago`;
    if (hours > 0) return `${hours}h ago`;
    if (minutes > 0) return `${minutes}m ago`;
    return 'just now';
  }

  formatUptime(ms) {
    const seconds = Math.floor(ms / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    
    if (days > 0) return `${days}d ${hours % 24}h ${minutes % 60}m`;
    if (hours > 0) return `${hours}h ${minutes % 60}m`;
    if (minutes > 0) return `${minutes}m ${seconds % 60}s`;
    return `${seconds}s`;
  }

  async runContinuousMode(interval = 30000) { // Default: 30 seconds
    this.log(`Starting continuous dashboard mode (interval: ${interval}ms)...`);
    
    const runCycle = async () => {
      try {
        await this.displayDashboard();
      } catch (error) {
        this.log(`Dashboard cycle failed: ${error.message}`);
      }
    };
    
    // Run immediately
    await runCycle();
    
    // Set up continuous execution
    setInterval(runCycle, interval);
    
    this.log('Continuous dashboard mode started. Press Ctrl+C to stop.');
  }
}

// Run the dashboard if called directly
if (require.main === module) {
  const dashboard = new AutomationDashboard();
  
  // Check for command line arguments
  const args = process.argv.slice(2);
  
  if (args.includes('--continuous') || args.includes('-c')) {
    const interval = parseInt(args.find(arg => arg.startsWith('--interval='))?.split('=')[1]) || 30000;
    dashboard.runContinuousMode(interval).catch(console.error);
  } else if (args.includes('--json')) {
    dashboard.generateDashboard().then(result => {
      console.log(JSON.stringify(result, null, 2));
    }).catch(console.error);
  } else {
    dashboard.displayDashboard().catch(console.error);
  }
}

module.exports = AutomationDashboard;