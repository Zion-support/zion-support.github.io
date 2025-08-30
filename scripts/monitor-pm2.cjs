#!/usr/bin/env node

/**
 * PM2 Monitoring Dashboard for Zion Application
 * Provides real-time monitoring of all PM2 processes
 */

const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

class PM2Monitor {
  constructor() {
    this.logsDir = './logs';
    this.interval = 5000; // 5 seconds
    this.isRunning = false;
  }

  // Get PM2 status
  async getStatus() {
    return new Promise((resolve, reject) => {
      exec('pm2 status --no-daemon', (error, stdout, stderr) => {
        if (error) {
          reject(error);
          return;
        }
        resolve(stdout);
      });
    });
  }

  // Get PM2 logs for a specific process
  async getLogs(processName, lines = 10) {
    return new Promise((resolve, reject) => {
      exec(`pm2 logs ${processName} --lines ${lines} --nostream`, (error, stdout, stderr) => {
        if (error) {
          reject(error);
          return;
        }
        resolve(stdout);
      });
    });
  }

  // Get system information
  async getSystemInfo() {
    return new Promise((resolve, reject) => {
      exec('pm2 monit --no-daemon', (error, stdout, stderr) => {
        if (error) {
          reject(error);
          return;
        }
        resolve(stdout);
      });
    });
  }

  // Create logs directory if it doesn't exist
  ensureLogsDir() {
    if (!fs.existsSync(this.logsDir)) {
      fs.mkdirSync(this.logsDir, { recursive: true });
    }
  }

  // Generate status report
  async generateReport() {
    try {
      const status = await this.getStatus();
      const timestamp = new Date().toISOString();
      
      const report = {
        timestamp,
        status: 'success',
        processes: this.parseStatus(status),
        summary: this.generateSummary(status)
      };

      // Save report to file
      const reportPath = path.join(this.logsDir, 'pm2-status-report.json');
      fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
      
      return report;
    } catch (error) {
      console.error('Error generating report:', error);
      return {
        timestamp: new Date().toISOString(),
        status: 'error',
        error: error.message
      };
    }
  }

  // Parse PM2 status output
  parseStatus(statusOutput) {
    const lines = statusOutput.split('\n');
    const processes = [];
    
    for (const line of lines) {
      if (line.includes('│') && !line.includes('──') && !line.includes('id')) {
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

  // Generate summary statistics
  generateSummary(statusOutput) {
    const processes = this.parseStatus(statusOutput);
    
    const summary = {
      total: processes.length,
      online: processes.filter(p => p.status === 'online').length,
      errored: processes.filter(p => p.status === 'errored').length,
      stopped: processes.filter(p => p.status === 'stopped').length,
      launching: processes.filter(p => p.status === 'launching').length,
      totalRestarts: processes.reduce((sum, p) => sum + parseInt(p.restarts || 0), 0),
      averageMemory: 0,
      totalMemory: 0
    };

    // Calculate memory statistics
    const memoryValues = processes
      .filter(p => p.memory && p.memory !== 'N/A')
      .map(p => this.parseMemory(p.memory));
    
    if (memoryValues.length > 0) {
      summary.totalMemory = memoryValues.reduce((sum, mem) => sum + mem, 0);
      summary.averageMemory = summary.totalMemory / memoryValues.length;
    }

    return summary;
  }

  // Parse memory string to bytes
  parseMemory(memoryStr) {
    const match = memoryStr.match(/(\d+(?:\.\d+)?)\s*(mb|kb|b)/i);
    if (!match) return 0;
    
    const value = parseFloat(match[1]);
    const unit = match[2].toLowerCase();
    
    switch (unit) {
      case 'mb': return value * 1024 * 1024;
      case 'kb': return value * 1024;
      case 'b': return value;
      default: return 0;
    }
  }

  // Start monitoring
  start() {
    if (this.isRunning) {
      console.log('Monitoring is already running');
      return;
    }

    this.isRunning = true;
    console.log('🚀 Starting PM2 Monitoring Dashboard...');
    console.log('Press Ctrl+C to stop\n');

    this.monitor();
  }

  // Stop monitoring
  stop() {
    this.isRunning = false;
    console.log('\n🛑 Monitoring stopped');
    process.exit(0);
  }

  // Main monitoring loop
  async monitor() {
    while (this.isRunning) {
      try {
        console.clear();
        console.log('📊 PM2 Monitoring Dashboard - Zion Application');
        console.log('=' .repeat(60));
        console.log(`⏰ Last Updated: ${new Date().toLocaleString()}\n`);

        // Get and display status
        const status = await this.getStatus();
        console.log(status);

        // Generate and display summary
        const summary = this.generateSummary(status);
        console.log('\n📈 Summary Statistics:');
        console.log(`   Total Processes: ${summary.total}`);
        console.log(`   Online: ${summary.online} ✅`);
        console.log(`   Errored: ${summary.errored} ❌`);
        console.log(`   Stopped: ${summary.stopped} ⏸️`);
        console.log(`   Launching: ${summary.launching} 🔄`);
        console.log(`   Total Restarts: ${summary.totalRestarts}`);
        console.log(`   Average Memory: ${(summary.averageMemory / (1024 * 1024)).toFixed(2)} MB`);
        console.log(`   Total Memory: ${(summary.totalMemory / (1024 * 1024)).toFixed(2)} MB`);

        // Check for issues
        if (summary.errored > 0) {
          console.log('\n⚠️  WARNING: Some processes are in error state!');
        }

        if (summary.totalRestarts > 50) {
          console.log('\n⚠️  WARNING: High number of restarts detected!');
        }

        // Generate report
        await this.generateReport();

        // Wait for next update
        await this.sleep(this.interval);
      } catch (error) {
        console.error('Error in monitoring loop:', error);
        await this.sleep(this.interval);
      }
    }
  }

  // Utility function to sleep
  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  // Display help information
  showHelp() {
    console.log(`
PM2 Monitoring Dashboard - Usage

Commands:
  start     - Start monitoring dashboard
  status    - Show current PM2 status
  logs <name> - Show logs for specific process
  report    - Generate status report
  help      - Show this help message

Examples:
  node scripts/monitor-pm2.js start
  node scripts/monitor-pm2.js status
  node scripts/monitor-pm2.js logs console-error-fixer
  node scripts/monitor-pm2.js report
    `);
  }
}

// Main execution
async function main() {
  const monitor = new PM2Monitor();
  const command = process.argv[2] || 'start';

  // Ensure logs directory exists
  monitor.ensureLogsDir();

  // Handle commands
  switch (command) {
    case 'start':
      monitor.start();
      break;
    case 'status':
      const status = await monitor.getStatus();
      console.log(status);
      break;
    case 'logs':
      const processName = process.argv[3];
      if (!processName) {
        console.error('Please specify a process name');
        process.exit(1);
      }
      const logs = await monitor.getLogs(processName);
      console.log(logs);
      break;
    case 'report':
      const report = await monitor.generateReport();
      console.log(JSON.stringify(report, null, 2));
      break;
    case 'help':
      monitor.showHelp();
      break;
    default:
      console.error(`Unknown command: ${command}`);
      monitor.showHelp();
      process.exit(1);
  }

  // Handle graceful shutdown
  process.on('SIGINT', () => {
    monitor.stop();
  });

  process.on('SIGTERM', () => {
    monitor.stop();
  });
}

// Run if called directly
if (require.main === module) {
  main().catch(console.error);
}

module.exports = PM2Monitor;