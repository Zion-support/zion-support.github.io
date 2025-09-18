#!/usr/bin/env node

/**
 * PM2 Automation Dashboard
 * Real-time monitoring dashboard for all PM2 automation processes
 */

const pm2 = require('pm2');
const readline = require('readline');
const os = require('os');
const { exec } = require('child_process');
const util = require('util');

const execAsync = util.promisify(exec);

class PM2Dashboard {
  constructor() {
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    
    this.isRunning = false;
    this.updateInterval = null;
  }

  async start() {
    console.log('🚀 Starting PM2 Automation Dashboard...');
    
    try {
      await this.connectToPM2();
      this.isRunning = true;
      
      // Start real-time updates
      this.startRealTimeUpdates();
      
      // Show initial dashboard
      await this.displayDashboard();
      
      // Handle user input
      this.handleUserInput();
      
      console.log('✅ Dashboard started successfully');
      console.log('Press "q" to quit, "r" to refresh, "h" for help');
      
    } catch (error) {
      console.error('❌ Failed to start dashboard:', error);
      process.exit(1);
    }
  }

  async connectToPM2() {
    return new Promise((resolve, reject) => {
      pm2.connect((err) => {
        if (err) reject(err);
        else resolve();
      });
    });
  }

  startRealTimeUpdates() {
    this.updateInterval = setInterval(async () => {
      if (this.isRunning) {
        await this.updateDashboard();
      }
    }, 5000); // Update every 5 seconds
  }

  async displayDashboard() {
    console.clear();
    console.log('╔══════════════════════════════════════════════════════════════════════════════╗');
    console.log('║                           PM2 AUTOMATION DASHBOARD                           ║');
    console.log('╚══════════════════════════════════════════════════════════════════════════════╝');
    
    await this.updateDashboard();
  }

  async updateDashboard() {
    try {
      const status = await this.getPM2Status();
      const systemInfo = this.getSystemInfo();
      
      // Move cursor to top and clear screen
      process.stdout.write('\x1B[2J\x1B[0f');
      
      // Display header
      this.displayHeader();
      
      // Display system info
      this.displaySystemInfo(systemInfo);
      
      // Display process status
      this.displayProcessStatus(status);
      
      // Display footer
      this.displayFooter();
      
    } catch (error) {
      console.error('Failed to update dashboard:', error);
    }
  }

  displayHeader() {
    const now = new Date().toLocaleString();
    console.log('╔══════════════════════════════════════════════════════════════════════════════╗');
    console.log(`║                           PM2 AUTOMATION DASHBOARD                           ║`);
    console.log(`║                                ${now.padEnd(50)} ║`);
    console.log('╚══════════════════════════════════════════════════════════════════════════════╝');
  }

  displaySystemInfo(systemInfo) {
    console.log('╔══════════════════════════════════════════════════════════════════════════════╗');
    console.log('║                                SYSTEM INFO                                   ║');
    console.log('╠══════════════════════════════════════════════════════════════════════════════╣');
    console.log(`║ CPU Usage: ${systemInfo.cpuUsage.padEnd(10)} │ Memory: ${systemInfo.memoryUsage.padEnd(10)} │ Uptime: ${systemInfo.uptime.padEnd(15)} ║`);
    console.log(`║ Platform:  ${systemInfo.platform.padEnd(10)} │ Arch:   ${systemInfo.arch.padEnd(10)} │ Load:   ${systemInfo.loadAvg.padEnd(15)} ║`);
    console.log('╚══════════════════════════════════════════════════════════════════════════════╝');
  }

  displayProcessStatus(status) {
    console.log('╔══════════════════════════════════════════════════════════════════════════════╗');
    console.log('║                              PROCESS STATUS                                 ║');
    console.log('╠══════════════════════════════════════════════════════════════════════════════╣');
    console.log('║ Name                    │ Status  │ CPU    │ Memory  │ Uptime  │ Restarts ║');
    console.log('╠══════════════════════════════════════════════════════════════════════════════╣');
    
    // Group processes by status
    const online = status.filter(p => p.pm2_env.status === 'online');
    const errored = status.filter(p => p.pm2_env.status === 'errored');
    const stopped = status.filter(p => p.pm2_env.status === 'stopped');
    
    // Display online processes first
    online.forEach(process => {
      this.displayProcessRow(process);
    });
    
    // Display errored processes
    errored.forEach(process => {
      this.displayProcessRow(process);
    });
    
    // Display stopped processes
    stopped.forEach(process => {
      this.displayProcessRow(process);
    });
    
    console.log('╠══════════════════════════════════════════════════════════════════════════════╣');
    console.log(`║ Total: ${status.length.toString().padEnd(3)} │ Online: ${online.length.toString().padEnd(3)} │ Error: ${errored.length.toString().padEnd(3)} │ Stopped: ${stopped.length.toString().padEnd(3)} │         ║`);
    console.log('╚══════════════════════════════════════════════════════════════════════════════╝');
  }

  displayProcessRow(process) {
    const name = (process.name || 'unknown').padEnd(24);
    const status = this.getStatusIcon(process.pm2_env.status) + ' ' + process.pm2_env.status.padEnd(6);
    const cpu = (process.monit?.cpu?.toFixed(1) || '0.0').padEnd(7);
    const memory = this.formatBytes(process.monit?.memory || 0).padEnd(8);
    const uptime = this.formatUptime(process.pm2_env.pm_uptime).padEnd(9);
    const restarts = (process.pm2_env.restart_time || 0).toString().padEnd(9);
    
    console.log(`║ ${name} │ ${status} │ ${cpu} │ ${memory} │ ${uptime} │ ${restarts} ║`);
  }

  getStatusIcon(status) {
    switch (status) {
      case 'online': return '🟢';
      case 'errored': return '🔴';
      case 'stopped': return '⚫';
      default: return '❓';
    }
  }

  formatBytes(bytes) {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
  }

  formatUptime(uptime) {
    if (!uptime) return '0s';
    const now = Date.now();
    const diff = now - uptime;
    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    
    if (days > 0) return `${days}d`;
    if (hours > 0) return `${hours}h`;
    if (minutes > 0) return `${minutes}m`;
    return `${seconds}s`;
  }

  displayFooter() {
    console.log('╔══════════════════════════════════════════════════════════════════════════════╗');
    console.log('║ Commands: q=quit │ r=refresh │ h=help │ s=start │ x=stop │ R=restart        ║');
    console.log('╚══════════════════════════════════════════════════════════════════════════════╝');
  }

  getSystemInfo() {
    const totalMem = os.totalmem();
    const freeMem = os.freemem();
    const usedMem = totalMem - freeMem;
    const memoryUsage = ((usedMem / totalMem) * 100).toFixed(1) + '%';
    
    return {
      cpuUsage: 'N/A', // Would need additional tools to get real-time CPU
      memoryUsage,
      uptime: this.formatSystemUptime(os.uptime()),
      platform: os.platform(),
      arch: os.arch(),
      loadAvg: os.loadavg().map(l => l.toFixed(2)).join(' ')
    };
  }

  formatSystemUptime(seconds) {
    const days = Math.floor(seconds / 86400);
    const hours = Math.floor((seconds % 86400) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    
    if (days > 0) return `${days}d ${hours}h`;
    if (hours > 0) return `${hours}h ${minutes}m`;
    return `${minutes}m`;
  }

  async getPM2Status() {
    return new Promise((resolve, reject) => {
      pm2.list((err, list) => {
        if (err) reject(err);
        else resolve(list || []);
      });
    });
  }

  handleUserInput() {
    this.rl.on('line', async (input) => {
      const command = input.trim().toLowerCase();
      
      switch (command) {
        case 'q':
        case 'quit':
        case 'exit':
          await this.shutdown();
          break;
          
        case 'r':
        case 'refresh':
          await this.updateDashboard();
          break;
          
        case 'h':
        case 'help':
          this.showHelp();
          break;
          
        case 's':
        case 'start':
          await this.startAllProcesses();
          break;
          
        case 'x':
        case 'stop':
          await this.stopAllProcesses();
          break;
          
        case 'R':
        case 'restart':
          await this.restartAllProcesses();
          break;
          
        default:
          console.log(`Unknown command: ${command}. Type 'h' for help.`);
      }
    });
  }

  showHelp() {
    console.log('\n📖 Dashboard Commands:');
    console.log('  q, quit, exit  - Quit the dashboard');
    console.log('  r, refresh     - Refresh the display');
    console.log('  h, help        - Show this help');
    console.log('  s, start       - Start all stopped processes');
    console.log('  x, stop        - Stop all running processes');
    console.log('  R, restart     - Restart all processes');
    console.log('\nPress Enter to continue...');
  }

  async startAllProcesses() {
    try {
      console.log('🚀 Starting all processes...');
      await execAsync('pm2 start ecosystem.config.cjs');
      console.log('✅ All processes started');
      await this.sleep(1000);
      await this.updateDashboard();
    } catch (error) {
      console.error('❌ Failed to start processes:', error.message);
    }
  }

  async stopAllProcesses() {
    try {
      console.log('⏹️  Stopping all processes...');
      await execAsync('pm2 stop all');
      console.log('✅ All processes stopped');
      await this.sleep(1000);
      await this.updateDashboard();
    } catch (error) {
      console.error('❌ Failed to stop processes:', error.message);
    }
  }

  async restartAllProcesses() {
    try {
      console.log('🔄 Restarting all processes...');
      await execAsync('pm2 restart all');
      console.log('✅ All processes restarted');
      await this.sleep(1000);
      await this.updateDashboard();
    } catch (error) {
      console.error('❌ Failed to restart processes:', error.message);
    }
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async shutdown() {
    console.log('🛑 Shutting down dashboard...');
    
    this.isRunning = false;
    
    if (this.updateInterval) {
      clearInterval(this.updateInterval);
    }
    
    this.rl.close();
    pm2.disconnect();
    
    console.log('✅ Dashboard shutdown complete');
    process.exit(0);
  }
}

// Handle graceful shutdown
process.on('SIGINT', async () => {
  const dashboard = global.currentDashboard;
  if (dashboard) {
    await dashboard.shutdown();
  }
  process.exit(0);
});

// Run the dashboard
if (require.main === module) {
  const dashboard = new PM2Dashboard();
  global.currentDashboard = dashboard;
  
  dashboard.start().catch(async (error) => {
    console.error('Fatal error:', error);
    await dashboard.shutdown();
    process.exit(1);
  });
}

module.exports = PM2Dashboard;