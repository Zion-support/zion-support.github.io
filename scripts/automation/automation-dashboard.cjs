#!/usr/bin/env node

/**
 * Zion Tech Group - PM2 Automation Dashboard
 * Real-time monitoring and control of all automation processes
 */

const pm2 = require('pm2');
const chalk = require('chalk');
const ora = require('ora');
const Table = require('cli-table3');

class AutomationDashboard {
  constructor() {
    this.processes = [];
    this.stats = {
      total: 0,
      online: 0,
      errored: 0,
      stopped: 0,
      totalMemory: 0,
      totalCPU: 0
    };
  }

  async initialize() {
    return new Promise((resolve, reject) => {
      pm2.connect((err) => {
        if (err) {
          console.error(chalk.red('❌ Failed to connect to PM2'));
          reject(err);
          return;
        }
        console.log(chalk.green('✅ Connected to PM2'));
        resolve();
      });
    });
  }

  async getProcessList() {
    return new Promise((resolve, reject) => {
      pm2.list((err, processes) => {
        if (err) {
          reject(err);
          return;
        }
        this.processes = processes;
        this.calculateStats();
        resolve(processes);
      });
    });
  }

  calculateStats() {
    this.stats = {
      total: this.processes.length,
      online: this.processes.filter(p => p.pm2_env.status === 'online').length,
      errored: this.processes.filter(p => p.pm2_env.status === 'errored').length,
      stopped: this.processes.filter(p => p.pm2_env.status === 'stopped').length,
      totalMemory: this.processes.reduce((sum, p) => sum + (p.monit.memory || 0), 0),
      totalCPU: this.processes.reduce((sum, p) => sum + (p.monit.cpu || 0), 0)
    };
  }

  displayHeader() {
    console.log('\n' + '='.repeat(80));
    console.log(chalk.cyan.bold('🚀 Zion Tech Group - PM2 Automation Dashboard'));
    console.log(chalk.gray('Real-time monitoring and control of automation processes'));
    console.log('='.repeat(80));
  }

  displayStats() {
    const statsTable = new Table({
      head: [
        chalk.cyan('Metric'),
        chalk.cyan('Value'),
        chalk.cyan('Status')
      ],
      colWidths: [30, 20, 30]
    });

    statsTable.push(
      ['Total Processes', this.stats.total.toString(), this.getStatusIcon('total')],
      ['Online Processes', this.stats.online.toString(), chalk.green('✅ Running')],
      ['Errored Processes', this.stats.errored.toString(), this.stats.errored > 0 ? chalk.red('❌ Issues') : chalk.green('✅ Clean')],
      ['Stopped Processes', this.stats.stopped.toString(), this.stats.stopped > 0 ? chalk.yellow('⚠️  Stopped') : chalk.green('✅ All Running')],
      ['Total Memory Usage', this.formatBytes(this.stats.totalMemory), this.getMemoryStatus()],
      ['Total CPU Usage', this.stats.totalCPU.toFixed(1) + '%', this.getCPUStatus()]
    );

    console.log('\n' + chalk.blue.bold('📊 System Statistics:'));
    console.log(statsTable.toString());
  }

  getStatusIcon(type) {
    switch (type) {
      case 'total':
        return chalk.blue('📊 Total');
      default:
        return chalk.gray('📋 Info');
    }
  }

  getMemoryStatus() {
    const memoryGB = this.stats.totalMemory / (1024 * 1024 * 1024);
    if (memoryGB < 1) return chalk.green('✅ Low');
    if (memoryGB < 2) return chalk.yellow('⚠️  Medium');
    return chalk.red('❌ High');
  }

  getCPUStatus() {
    if (this.stats.totalCPU < 50) return chalk.green('✅ Low');
    if (this.stats.totalCPU < 80) return chalk.yellow('⚠️  Medium');
    return chalk.red('❌ High');
  }

  formatBytes(bytes) {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }

  displayProcessTable() {
    const table = new Table({
      head: [
        chalk.cyan('ID'),
        chalk.cyan('Name'),
        chalk.cyan('Status'),
        chalk.cyan('Memory'),
        chalk.cyan('CPU'),
        chalk.cyan('Uptime'),
        chalk.cyan('Restarts')
      ],
      colWidths: [5, 25, 12, 12, 8, 15, 10]
    });

    this.processes.forEach(process => {
      const status = this.getProcessStatus(process.pm2_env.status);
      const memory = this.formatBytes(process.monit.memory || 0);
      const cpu = (process.monit.cpu || 0).toFixed(1) + '%';
      const uptime = this.formatUptime(process.pm2_env.pm_uptime);
      const restarts = process.pm2_env.restart_time || 0;

      table.push([
        process.pm_id.toString(),
        chalk.white(process.name),
        status,
        memory,
        cpu,
        uptime,
        restarts.toString()
      ]);
    });

    console.log('\n' + chalk.blue.bold('🔄 Process Status:'));
    console.log(table.toString());
  }

  getProcessStatus(status) {
    switch (status) {
      case 'online':
        return chalk.green('✅ Online');
      case 'errored':
        return chalk.red('❌ Errored');
      case 'stopped':
        return chalk.yellow('⏸️  Stopped');
      case 'launching':
        return chalk.blue('🚀 Launching');
      default:
        return chalk.gray('❓ Unknown');
    }
  }

  formatUptime(uptime) {
    if (!uptime) return 'N/A';
    const seconds = Math.floor(uptime / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) return `${days}d ${hours % 24}h`;
    if (hours > 0) return `${hours}h ${minutes % 60}m`;
    if (minutes > 0) return `${minutes}m ${seconds % 60}s`;
    return `${seconds}s`;
  }

  async restartProcess(processName) {
    return new Promise((resolve, reject) => {
      pm2.restart(processName, (err) => {
        if (err) {
          reject(err);
          return;
        }
        resolve();
      });
    });
  }

  async stopProcess(processName) {
    return new Promise((resolve, reject) => {
      pm2.stop(processName, (err) => {
        if (err) {
          reject(err);
          return;
        }
        resolve();
      });
    });
  }

  async startProcess(processName) {
    return new Promise((resolve, reject) => {
      pm2.start(processName, (err) => {
        if (err) {
          reject(err);
          return;
        }
        resolve();
      });
    });
  }

  displayCommands() {
    console.log('\n' + chalk.blue.bold('🎮 Available Commands:'));
    console.log(chalk.gray('  restart <process>  - Restart a specific process'));
    console.log(chalk.gray('  stop <process>     - Stop a specific process'));
    console.log(chalk.gray('  start <process>    - Start a specific process'));
    console.log(chalk.gray('  refresh            - Refresh process list'));
    console.log(chalk.gray('  quit               - Exit dashboard'));
    console.log(chalk.gray('  help               - Show this help'));
  }

  async run() {
    try {
      await this.initialize();
      
      while (true) {
        await this.getProcessList();
        
        this.displayHeader();
        this.displayStats();
        this.displayProcessTable();
        this.displayCommands();

        // Wait for user input
        await this.waitForInput();
      }
    } catch (error) {
      console.error(chalk.red('❌ Dashboard error:'), error.message);
    } finally {
      pm2.disconnect();
    }
  }

  async waitForInput() {
    // In a real implementation, this would handle user input
    // For now, we'll just wait a bit and refresh
    await new Promise(resolve => setTimeout(resolve, 5000));
  }
}

// Run the dashboard
if (require.main === module) {
  const dashboard = new AutomationDashboard();
  dashboard.run().catch(console.error);
}

module.exports = AutomationDashboard;