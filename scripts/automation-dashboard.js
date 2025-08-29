#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// console.log('🚀 Starting PM2 Automation Dashboard...');

class AutomationDashboard {
  constructor() {
    this.processes = [];
    this.reports = { /* empty */ };
    this.healthStatus = { /* empty */ };
  }

  async getPM2Status() {
    try {
      const output = execSync('pm2 jlist', { encoding: 'utf8' });
      const processes = JSON.parse(output);

      this.processes = processes.filter(proc =>
        proc.name !== 'pm2-logrotate' &&
        proc.name !== 'zion-app' &&
        proc.name !== 'zion-backend'
      );

      return this.processes;
    } catch (error) {
      // console.error('❌ Failed to get PM2 status:', error.message);
      return [];
    }
  }

  async generateHealthReport() {
    // console.log('📊 Generating automation health report...');

    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        totalProcesses: this.processes.length,
        onlineProcesses: this.processes.filter(p => p.pm2_env.status === 'online').length,
        erroredProcesses: this.processes.filter(p => p.pm2_env.status === 'errored').length,
        stoppedProcesses: this.processes.filter(p => p.pm2_env.status === 'stopped').length
      },
      processes: this.processes.map(proc => ({
        name: proc.name,
        status: proc.pm2_env.status,
        memory: `${Math.round(proc.monit.memory / 1024 / 1024)}MB`,
        cpu: `${proc.monit.cpu}%`,
        uptime: this.formatUptime(proc.pm2_env.pm_uptime),
        restarts: proc.pm2_env.restart_time,
        pm_id: proc.pm_id
      })),
      recommendations: []
    };

    // Generate recommendations
    if (report.summary.erroredProcesses > 0) {
      report.recommendations.push('⚠️  Some automation processes have errors. Check logs for details.');
    }

    if (report.summary.onlineProcesses === 0) {
      report.recommendations.push('🚨 No automation processes are running. Start the automation system.');
    }

    if (report.summary.onlineProcesses > 0 && report.summary.onlineProcesses < report.summary.totalProcesses) {
      report.recommendations.push('⚠️  Some automation processes are not running. Consider restarting failed processes.');
    }

    // Save report
    const reportPath = path.join(process.cwd(), 'automation-health-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));

    this.reports.health = report;
    return report;
  }

  formatUptime(uptime) {
    if (!uptime) return 'N/A';
    const seconds = Math.floor((Date.now() - uptime) / 1000);
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    return `${hours}h ${minutes}m`;
  }

  async displayDashboard() {
    console.clear();
    // console.log('🚀 PM2 Automation Dashboard');
    // console.log('=' .repeat(50));

    const status = await this.getPM2Status();
    const health = await this.generateHealthReport();

    // console.log(`📊 Status: ${health.summary.onlineProcesses}/${health.summary.totalProcesses} processes online`);
    // console.log(`⏰ Last Updated: ${new Date().toLocaleTimeString()}`);
    // console.log('');

    // Display process table
    // console.log('🔄 Automation Processes:');
    // console.log('─'.repeat(80));
    // console.log('Name'.padEnd(25) + 'Status'.padEnd(10) + 'Memory'.padEnd(10) + 'CPU'.padEnd(8) + 'Uptime'.padEnd(15) + 'Restarts');
    // console.log('─'.repeat(80));

    health.processes.forEach(proc => {
      const statusIcon = proc.status === 'online' ? '🟢' : proc.status === 'errored' ? '🔴' : '🟡';
      // console.log(
        proc.name.padEnd(25) +
        `${statusIcon} ${proc.status}`.padEnd(10) +
        proc.memory.padEnd(10) +
        proc.cpu.padEnd(8) +
        proc.uptime.padEnd(15) +
        proc.restarts
      );
    });

    // console.log('');

    // Display recommendations
    if (health.recommendations.length > 0) {
      // console.log('💡 Recommendations:');
      health.recommendations.forEach(rec => // console.log(`  ${rec}`));
      // console.log('');
    }

    // Display recent logs
    // console.log('📝 Recent Activity:');
    // console.log('─'.repeat(50));

    try {
      const logs = execSync('pm2 logs --lines 5 --nostream', { encoding: 'utf8' });
      const recentLogs = logs.split('\n').slice(-5).filter(line => line.trim());
      recentLogs.forEach(log => {
        if (log.includes('ERROR') || log.includes('error')) {
          // console.log(`🔴 ${log}`);
        } else if (log.includes('WARN') || log.includes('warn')) {
          // console.log(`🟡 ${log}`);
        } else {
          // console.log(`ℹ️  ${log}`);
        }
      });
    } catch (error) {
      // console.log('  No recent logs available');
    }

    // console.log('');
    // console.log('Commands:');
    // console.log('  pm2 logs <process-name> - View specific process logs');
    // console.log('  pm2 restart <process-name> - Restart specific process');
    // console.log('  pm2 restart all - Restart all processes');
    // console.log('  pm2 monit - Open PM2 monitoring interface');
    // console.log('  Ctrl+C - Exit dashboard');
  }

  async startMonitoring() {
    // console.log('🔄 Starting continuous monitoring...');

    // Initial display
    await this.displayDashboard();

    // Update every 30 seconds
    setInterval(async () => {
      await this.displayDashboard();
    }, 30000);
  }

  async restartFailedProcesses() {
    // console.log('🔄 Restarting failed processes...');

    const failedProcesses = this.processes.filter(p => p.pm2_env.status === 'errored');

    if (failedProcesses.length === 0) {
      // console.log('✅ No failed processes to restart');
      return;
    }

    failedProcesses.forEach(proc => {
      try {
        execSync(`pm2 restart ${proc.pm_id}`, { stdio: 'inherit' });
        // console.log(`✅ Restarted ${proc.name}`);
      } catch (error) {
        // console.error(`❌ Failed to restart ${proc.name}:`, error.message);
      }
    });
  }

  async generatePerformanceReport() {
    // console.log('📊 Generating performance report...');

    const report = {
      timestamp: new Date().toISOString(),
      system: {
        memory: process.memoryUsage(),
        uptime: process.uptime(),
        platform: process.platform,
        nodeVersion: process.version
      },
      processes: this.processes.map(proc => ({
        name: proc.name,
        memory: proc.monit.memory,
        cpu: proc.monit.cpu,
        status: proc.pm2_env.status,
        restarts: proc.pm2_env.restart_time
      })),
      summary: {
        totalMemory: this.processes.reduce((sum, p) => sum + p.monit.memory, 0),
        averageCPU: this.processes.reduce((sum, p) => sum + p.monit.cpu, 0) / this.processes.length,
        totalRestarts: this.processes.reduce((sum, p) => sum + p.pm2_env.restart_time, 0)
      }
    };

    const reportPath = path.join(process.cwd(), 'automation-performance-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));

    this.reports.performance = report;
    return report;
  }
}

// Main execution
async function main() {
  const dashboard = new AutomationDashboard();

  // Handle graceful shutdown
  process.on('SIGINT', async () => {
    // console.log('\n🛑 Shutting down automation dashboard...');
    await dashboard.generatePerformanceReport();
    // console.log('✅ Performance report saved');
    process.exit(0);
  });

  try {
    await dashboard.startMonitoring();
  } catch (error) {
    // console.error('❌ Dashboard failed:', error);
    process.exit(1);
  }
}

// Start the dashboard
main().catch(console.error);
