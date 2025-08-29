#!/usr/bin/env node

const { execSync, spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

class IntelligentPM2Manager {
  constructor() {
    this.logsDir = './logs';
    this.healthCheckInterval = 30000; // 30 seconds
    this.maxRestarts = 5;
    this.restartCooldown = 60000; // 1 minute
    this.processStats = new Map();
    this.healthChecks = new Map();
  }

  // Initialize the PM2 manager
  async init() {
    console.log('🚀 Initializing Intelligent PM2 Manager...');
    
    // Create logs directory if it doesn't exist
    if (!fs.existsSync(this.logsDir)) {
      fs.mkdirSync(this.logsDir, { recursive: true });
      console.log('📁 Created logs directory');
    }

    // Check if PM2 is installed
    try {
      execSync('pm2 --version', { stdio: 'pipe' });
      console.log('✅ PM2 is installed');
    } catch (error) {
      console.error('❌ PM2 is not installed. Installing...');
      execSync('npm install -g pm2', { stdio: 'inherit' });
    }

    // Start monitoring
    this.startHealthMonitoring();
    this.startPerformanceMonitoring();
    
    console.log('🎯 PM2 Manager initialized successfully');
  }

  // Start all applications
  async startAll() {
    console.log('🚀 Starting all Zion applications...');
    
    try {
      // Start frontend
      execSync('pm2 start ecosystem.config.js --only zion-frontend', { stdio: 'inherit' });
      console.log('✅ Frontend started');
      
      // Start backend
      execSync('pm2 start ecosystem.config.js --only zion-backend', { stdio: 'inherit' });
      console.log('✅ Backend started');
      
      // Start hybrid development mode
      execSync('pm2 start ecosystem.config.js --only zion-hybrid-dev', { stdio: 'inherit' });
      console.log('✅ Hybrid development mode started');
      
      this.showStatus();
    } catch (error) {
      console.error('❌ Error starting applications:', error.message);
    }
  }

  // Stop all applications
  async stopAll() {
    console.log('🛑 Stopping all Zion applications...');
    
    try {
      execSync('pm2 stop all', { stdio: 'inherit' });
      console.log('✅ All applications stopped');
    } catch (error) {
      console.error('❌ Error stopping applications:', error.message);
    }
  }

  // Restart all applications
  async restartAll() {
    console.log('🔄 Restarting all Zion applications...');
    
    try {
      execSync('pm2 restart all', { stdio: 'inherit' });
      console.log('✅ All applications restarted');
      this.showStatus();
    } catch (error) {
      console.error('❌ Error restarting applications:', error.message);
    }
  }

  // Reload all applications (zero-downtime restart)
  async reloadAll() {
    console.log('🔄 Reloading all Zion applications (zero-downtime)...');
    
    try {
      execSync('pm2 reload all', { stdio: 'inherit' });
      console.log('✅ All applications reloaded');
      this.showStatus();
    } catch (error) {
      console.error('❌ Error reloading applications:', error.message);
    }
  }

  // Show current status
  showStatus() {
    try {
      console.log('\n📊 Current PM2 Status:');
      execSync('pm2 status', { stdio: 'inherit' });
    } catch (error) {
      console.error('❌ Error showing status:', error.message);
    }
  }

  // Show logs for a specific application
  showLogs(appName = 'all', lines = 100) {
    try {
      if (appName === 'all') {
        console.log(`📋 Showing last ${lines} lines for all applications:`);
        execSync(`pm2 logs --lines ${lines}`, { stdio: 'inherit' });
      } else {
        console.log(`📋 Showing last ${lines} lines for ${appName}:`);
        execSync(`pm2 logs ${appName} --lines ${lines}`, { stdio: 'inherit' });
      }
    } catch (error) {
      console.error('❌ Error showing logs:', error.message);
    }
  }

  // Monitor logs in real-time
  monitorLogs(appName = 'all') {
    try {
      if (appName === 'all') {
        console.log('📺 Monitoring all application logs (Ctrl+C to stop):');
        execSync('pm2 logs', { stdio: 'inherit' });
      } else {
        console.log(`📺 Monitoring ${appName} logs (Ctrl+C to stop):`);
        execSync(`pm2 logs ${appName}`, { stdio: 'inherit' });
      }
    } catch (error) {
      console.error('❌ Error monitoring logs:', error.message);
    }
  }

  // Start health monitoring
  startHealthMonitoring() {
    setInterval(() => {
      this.performHealthChecks();
    }, this.healthCheckInterval);
  }

  // Perform health checks on all applications
  async performHealthChecks() {
    try {
      const status = execSync('pm2 jlist', { encoding: 'utf8' });
      const processes = JSON.parse(status);
      
      processes.forEach(process => {
        const appName = process.name;
        const isOnline = process.pm2_env.status === 'online';
        const restarts = process.pm2_env.restart_time;
        const uptime = process.pm2_env.pm_uptime;
        
        // Store process stats
        this.processStats.set(appName, {
          isOnline,
          restarts,
          uptime,
          lastCheck: Date.now()
        });
        
        // Check if process needs attention
        if (!isOnline || restarts > this.maxRestarts) {
          this.handleUnhealthyProcess(appName, process);
        }
      });
    } catch (error) {
      console.error('❌ Error performing health checks:', error.message);
    }
  }

  // Handle unhealthy processes
  handleUnhealthyProcess(appName, process) {
    const stats = this.processStats.get(appName);
    
    if (stats && Date.now() - stats.lastCheck > this.restartCooldown) {
      console.log(`⚠️  Unhealthy process detected: ${appName}`);
      console.log(`   Status: ${process.pm2_env.status}`);
      console.log(`   Restarts: ${process.pm2_env.restart_time}`);
      
      // Attempt to restart the process
      try {
        execSync(`pm2 restart ${appName}`, { stdio: 'pipe' });
        console.log(`🔄 Restarted ${appName}`);
        
        // Update stats
        stats.lastCheck = Date.now();
        this.processStats.set(appName, stats);
      } catch (error) {
        console.error(`❌ Failed to restart ${appName}:`, error.message);
      }
    }
  }

  // Start performance monitoring
  startPerformanceMonitoring() {
    setInterval(() => {
      this.monitorPerformance();
    }, 60000); // Every minute
  }

  // Monitor application performance
  async monitorPerformance() {
    try {
      const status = execSync('pm2 jlist', { encoding: 'utf8' });
      const processes = JSON.parse(status);
      
      processes.forEach(process => {
        const appName = process.name;
        const memory = process.monit.memory;
        const cpu = process.monit.cpu;
        
        // Log performance metrics
        if (memory > 500 * 1024 * 1024) { // 500MB
          console.log(`⚠️  High memory usage for ${appName}: ${Math.round(memory / 1024 / 1024)}MB`);
        }
        
        if (cpu > 80) { // 80% CPU
          console.log(`⚠️  High CPU usage for ${appName}: ${cpu}%`);
        }
      });
    } catch (error) {
      // Silently handle errors in performance monitoring
    }
  }

  // Clean up old logs
  async cleanupLogs(daysToKeep = 7) {
    console.log(`🧹 Cleaning up logs older than ${daysToKeep} days...`);
    
    try {
      const logFiles = fs.readdirSync(this.logsDir);
      const cutoffTime = Date.now() - (daysToKeep * 24 * 60 * 60 * 1000);
      
      logFiles.forEach(file => {
        const filePath = path.join(this.logsDir, file);
        const stats = fs.statSync(filePath);
        
        if (stats.mtime.getTime() < cutoffTime) {
          fs.unlinkSync(filePath);
          console.log(`🗑️  Deleted old log: ${file}`);
        }
      });
      
      console.log('✅ Log cleanup completed');
    } catch (error) {
      console.error('❌ Error cleaning up logs:', error.message);
    }
  }

  // Generate health report
  async generateHealthReport() {
    try {
      const status = execSync('pm2 jlist', { encoding: 'utf8' });
      const processes = JSON.parse(status);
      
      const report = {
        timestamp: new Date().toISOString(),
        totalProcesses: processes.length,
        onlineProcesses: processes.filter(p => p.pm2_env.status === 'online').length,
        offlineProcesses: processes.filter(p => p.pm2_env.status === 'offline').length,
        processes: processes.map(p => ({
          name: p.name,
          status: p.pm2_env.status,
          restarts: p.pm2_env.restart_time,
          uptime: p.pm2_env.pm_uptime,
          memory: p.monit.memory,
          cpu: p.monit.cpu
        }))
      };
      
      const reportPath = path.join(this.logsDir, `health-report-${Date.now()}.json`);
      fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
      
      console.log(`📊 Health report generated: ${reportPath}`);
      return report;
    } catch (error) {
      console.error('❌ Error generating health report:', error.message);
      return null;
    }
  }

  // Show help information
  showHelp() {
    console.log(`
🎯 Intelligent PM2 Manager - Available Commands:

🚀 Management:
  start-all     - Start all applications
  stop-all      - Stop all applications
  restart-all   - Restart all applications
  reload-all    - Reload all applications (zero-downtime)

📊 Monitoring:
  status        - Show current status
  logs [app]    - Show logs (default: all apps)
  monitor [app] - Monitor logs in real-time
  health        - Generate health report

🧹 Maintenance:
  cleanup-logs  - Clean up old log files
  help          - Show this help message

Examples:
  node scripts/pm2-manager.js start-all
  node scripts/pm2-manager.js logs zion-frontend
  node scripts/pm2-manager.js monitor zion-backend
    `);
  }
}

// Main execution
async function main() {
  const manager = new IntelligentPM2Manager();
  const command = process.argv[2];
  
  try {
    await manager.init();
    
    switch (command) {
      case 'start-all':
        await manager.startAll();
        break;
      case 'stop-all':
        await manager.stopAll();
        break;
      case 'restart-all':
        await manager.restartAll();
        break;
      case 'reload-all':
        await manager.reloadAll();
        break;
      case 'status':
        manager.showStatus();
        break;
      case 'logs':
        const appName = process.argv[3] || 'all';
        const lines = parseInt(process.argv[4]) || 100;
        manager.showLogs(appName, lines);
        break;
      case 'monitor':
        const monitorApp = process.argv[3] || 'all';
        manager.monitorLogs(monitorApp);
        break;
      case 'health':
        await manager.generateHealthReport();
        break;
      case 'cleanup-logs':
        const days = parseInt(process.argv[3]) || 7;
        await manager.cleanupLogs(days);
        break;
      case 'help':
      default:
        manager.showHelp();
        break;
    }
  } catch (error) {
    console.error('❌ Fatal error:', error.message);
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  main();
}

module.exports = IntelligentPM2Manager;