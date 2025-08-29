#!/usr/bin/env node

const { execSync, spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

class IntelligentPM2Manager {
  constructor() {
    this.ecosystemPath = path.join(process.cwd(), 'ecosystem.config.js');
    this.logsDir = path.join(process.cwd(), 'logs');
    this.automationLogsDir = path.join(process.cwd(), 'automation', 'logs');
    this.ensureDirectories();
    this.loadConfiguration();
  }

  ensureDirectories() {
    [this.logsDir, this.automationLogsDir].forEach(dir => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
    });
  }

  loadConfiguration() {
    try {
      this.config = require(this.ecosystemPath);
      console.log('✅ PM2 ecosystem configuration loaded');
    } catch (error) {
      console.error('❌ Failed to load PM2 configuration:', error.message);
      process.exit(1);
    }
  }

  async executeCommand(command, options = {}) {
    try {
      const result = execSync(command, {
        encoding: 'utf8',
        stdio: options.silent ? 'pipe' : 'inherit',
        ...options
      });
      return { success: true, output: result };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  async startAll() {
    console.log('🚀 Starting all PM2 processes...');
    
    // Start with the main app and backend first
    const priorityOrder = [
      'zion-backend',
      'zion-app',
      'automation-orchestrator',
      'automation-dashboard',
      'lint-monitor',
      'code-quality-monitor',
      'performance-optimizer',
      'security-scanner',
      'seo-optimizer',
      'test-generator',
      'content-generator',
      'edge-cache-warmer'
    ];

    for (const appName of priorityOrder) {
      const app = this.config.apps.find(app => app.name === appName);
      if (app) {
        console.log(`📱 Starting ${appName}...`);
        const result = await this.executeCommand(`pm2 start ecosystem.config.js --only ${appName}`);
        if (result.success) {
          console.log(`✅ ${appName} started successfully`);
        } else {
          console.log(`❌ Failed to start ${appName}: ${result.error}`);
        }
        
        // Add delay between starts to avoid resource conflicts
        await this.sleep(2000);
      }
    }

    console.log('🎉 All PM2 processes started!');
    await this.showStatus();
  }

  async stopAll() {
    console.log('🛑 Stopping all PM2 processes...');
    const result = await this.executeCommand('pm2 stop all');
    if (result.success) {
      console.log('✅ All processes stopped');
    } else {
      console.log('❌ Failed to stop processes:', result.error);
    }
  }

  async restartAll() {
    console.log('🔄 Restarting all PM2 processes...');
    const result = await this.executeCommand('pm2 restart all');
    if (result.success) {
      console.log('✅ All processes restarted');
    } else {
      console.log('❌ Failed to restart processes:', result.error);
    }
  }

  async reloadAll() {
    console.log('🔄 Reloading all PM2 processes...');
    const result = await this.executeCommand('pm2 reload all');
    if (result.success) {
      console.log('✅ All processes reloaded');
    } else {
      console.log('❌ Failed to reload processes:', result.error);
    }
  }

  async deleteAll() {
    console.log('🗑️ Deleting all PM2 processes...');
    const result = await this.executeCommand('pm2 delete all');
    if (result.success) {
      console.log('✅ All processes deleted');
    } else {
      console.log('❌ Failed to delete processes:', result.error);
    }
  }

  async showStatus() {
    console.log('📊 PM2 Process Status:');
    const result = await this.executeCommand('pm2 status', { silent: true });
    if (result.success) {
      console.log(result.output);
    } else {
      console.log('❌ Failed to get status:', result.error);
    }
  }

  async showLogs(appName = 'all', lines = 100) {
    console.log(`📋 Showing logs for ${appName} (last ${lines} lines):`);
    const result = await this.executeCommand(`pm2 logs ${appName} --lines ${lines}`, { silent: true });
    if (result.success) {
      console.log(result.output);
    } else {
      console.log('❌ Failed to get logs:', result.error);
    }
  }

  async monitor() {
    console.log('👀 Starting PM2 monitoring...');
    const result = await this.executeCommand('pm2 monit');
    if (!result.success) {
      console.log('❌ Failed to start monitoring:', result.error);
    }
  }

  async generateReport() {
    console.log('📊 Generating PM2 report...');
    
    const report = {
      timestamp: new Date().toISOString(),
      status: await this.getDetailedStatus(),
      logs: await this.getLogSummary(),
      performance: await this.getPerformanceMetrics()
    };

    const reportPath = path.join(this.logsDir, 'pm2-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    console.log(`📄 Report generated: ${reportPath}`);
    return report;
  }

  async getDetailedStatus() {
    try {
      const result = await this.executeCommand('pm2 jlist', { silent: true });
      if (result.success) {
        return JSON.parse(result.output);
      }
    } catch (error) {
      console.log('Failed to get detailed status:', error.message);
    }
    return [];
  }

  async getLogSummary() {
    const logs = {};
    for (const app of this.config.apps) {
      try {
        const logPath = app.log_file;
        if (fs.existsSync(logPath)) {
          const stats = fs.statSync(logPath);
          logs[app.name] = {
            size: stats.size,
            lastModified: stats.mtime,
            exists: true
          };
        } else {
          logs[app.name] = { exists: false };
        }
      } catch (error) {
        logs[app.name] = { error: error.message };
      }
    }
    return logs;
  }

  async getPerformanceMetrics() {
    try {
      const result = await this.executeCommand('pm2 show', { silent: true });
      return result.success ? 'Available' : 'Unavailable';
    } catch (error) {
      return 'Error';
    }
  }

  async healthCheck() {
    console.log('🏥 Performing PM2 health check...');
    
    const health = {
      timestamp: new Date().toISOString(),
      pm2Running: false,
      processesRunning: 0,
      totalProcesses: this.config.apps.length,
      issues: []
    };

    // Check if PM2 is running
    const pm2Status = await this.executeCommand('pm2 ping', { silent: true });
    health.pm2Running = pm2Status.success;

    if (health.pm2Running) {
      // Get running processes
      const statusResult = await this.executeCommand('pm2 jlist', { silent: true });
      if (statusResult.success) {
        try {
          const processes = JSON.parse(statusResult.output);
          health.processesRunning = processes.filter(p => p.pm2_env.status === 'online').length;
          
          // Check for issues
          processes.forEach(process => {
            if (process.pm2_env.status !== 'online') {
              health.issues.push(`${process.name}: ${process.pm2_env.status}`);
            }
            if (process.pm2_env.restart_time > 10) {
              health.issues.push(`${process.name}: High restart count (${process.pm2_env.restart_time})`);
            }
          });
        } catch (error) {
          health.issues.push(`Failed to parse process status: ${error.message}`);
        }
      }
    } else {
      health.issues.push('PM2 daemon not running');
    }

    console.log('📊 Health Check Results:');
    console.log(`PM2 Running: ${health.pm2Running ? '✅' : '❌'}`);
    console.log(`Processes Running: ${health.processesRunning}/${health.totalProcesses}`);
    
    if (health.issues.length > 0) {
      console.log('⚠️ Issues Found:');
      health.issues.forEach(issue => console.log(`  - ${issue}`));
    } else {
      console.log('✅ No issues found');
    }

    return health;
  }

  async autoFix() {
    console.log('🔧 Attempting to auto-fix PM2 issues...');
    
    const health = await this.healthCheck();
    
    if (health.issues.length > 0) {
      console.log('🔧 Applying fixes...');
      
      // Restart problematic processes
      if (health.processesRunning < health.totalProcesses) {
        console.log('🔄 Restarting stopped processes...');
        await this.restartAll();
      }
      
      // Clear logs if they're too large
      await this.cleanupLogs();
      
      console.log('✅ Auto-fix completed');
      await this.healthCheck();
    } else {
      console.log('✅ No fixes needed');
    }
  }

  async cleanupLogs() {
    console.log('🧹 Cleaning up old logs...');
    
    const maxLogSize = 100 * 1024 * 1024; // 100MB
    const maxLogAge = 7 * 24 * 60 * 60 * 1000; // 7 days
    
    for (const app of this.config.apps) {
      if (app.log_file && fs.existsSync(app.log_file)) {
        try {
          const stats = fs.statSync(app.log_file);
          const shouldCleanup = stats.size > maxLogSize || 
                              (Date.now() - stats.mtime.getTime()) > maxLogAge;
          
          if (shouldCleanup) {
            console.log(`🧹 Cleaning up logs for ${app.name}`);
            fs.writeFileSync(app.log_file, '');
          }
        } catch (error) {
          console.log(`⚠️ Failed to cleanup logs for ${app.name}: ${error.message}`);
        }
      }
    }
  }

  async sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async showHelp() {
    console.log(`
🤖 Intelligent PM2 Manager - Available Commands:

📱 Process Management:
  start       - Start all PM2 processes
  stop        - Stop all PM2 processes
  restart     - Restart all PM2 processes
  reload      - Reload all PM2 processes (zero-downtime)
  delete      - Delete all PM2 processes

📊 Monitoring & Information:
  status      - Show PM2 process status
  logs        - Show logs for all processes
  logs <app>  - Show logs for specific app
  monitor     - Start PM2 monitoring interface
  health      - Perform health check
  report      - Generate detailed report

🔧 Maintenance:
  autofix     - Automatically fix common issues
  cleanup     - Clean up old logs

💡 Examples:
  node scripts/pm2-intelligent-manager.js start
  node scripts/pm2-intelligent-manager.js logs zion-app
  node scripts/pm2-intelligent-manager.js health
  node scripts/pm2-intelligent-manager.js autofix
`);
  }
}

// CLI handling
const manager = new IntelligentPM2Manager();
const command = process.argv[2];

(async () => {
  try {
    switch (command) {
      case 'start':
        await manager.startAll();
        break;
      case 'stop':
        await manager.stopAll();
        break;
      case 'restart':
        await manager.restartAll();
        break;
      case 'reload':
        await manager.reloadAll();
        break;
      case 'delete':
        await manager.deleteAll();
        break;
      case 'status':
        await manager.showStatus();
        break;
      case 'logs':
        const appName = process.argv[3] || 'all';
        const lines = parseInt(process.argv[4]) || 100;
        await manager.showLogs(appName, lines);
        break;
      case 'monitor':
        await manager.monitor();
        break;
      case 'health':
        await manager.healthCheck();
        break;
      case 'report':
        await manager.generateReport();
        break;
      case 'autofix':
        await manager.autoFix();
        break;
      case 'cleanup':
        await manager.cleanupLogs();
        break;
      case 'help':
      default:
        await manager.showHelp();
        break;
    }
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
})();

// Graceful shutdown
process.on('SIGINT', async () => {
  console.log('\n🛑 Shutting down PM2 manager...');
  process.exit(0);
});