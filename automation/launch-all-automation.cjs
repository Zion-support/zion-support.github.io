#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

class AutomationLauncher {
  constructor() {
    this.processes = new Map();
    this.logFile = path.join(__dirname, 'logs', 'automation-launcher.log');
    this.ensureLogDirectory();
  }

  ensureLogDirectory() {
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${level}] ${message}\n`;
    
    console.log(logEntry.trim());
    fs.appendFileSync(this.logFile, logEntry);
  }

  async startSystem(name, command, args = [], options = {}) {
    try {
      this.log(`🚀 Starting ${name}...`);
      
      const process = spawn(command, args, {
        stdio: 'pipe',
        cwd: process.cwd(),
        ...options
      });

      process.stdout.on('data', (data) => {
        this.log(`[${name}] ${data.toString().trim()}`);
      });

      process.stderr.on('data', (data) => {
        this.log(`[${name}] ERROR: ${data.toString().trim()}`, 'ERROR');
      });

      process.on('close', (code) => {
        this.log(`[${name}] Process exited with code ${code}`);
        this.processes.delete(name);
      });

      this.processes.set(name, process);
      this.log(`✅ ${name} started successfully`);
      return process;
    } catch (error) {
      this.log(`❌ Failed to start ${name}: ${error.message}`);
      return null;
    }
  }

  async stopSystem(name) {
    const process = this.processes.get(name);
    if (!process) {
      this.log(`⚠️  Process ${name} not found`);
      return false;
    }

    try {
      this.log(`🛑 Stopping ${name}...`);
      process.kill('SIGTERM');
      
      // Wait for graceful shutdown
      await new Promise((resolve) => {
        const timeout = setTimeout(() => {
          this.log(`⚠️  Force killing ${name}...`);
          process.kill('SIGKILL');
          resolve();
        }, 5000);

        process.on('close', () => {
          clearTimeout(timeout);
          resolve();
        });
      });

      this.processes.delete(name);
      this.log(`✅ ${name} stopped successfully`);
      return true;
    } catch (error) {
      this.log(`❌ Error stopping ${name}: ${error.message}`, 'ERROR');
      return false;
    }
  }

  async startAllSystems() {
    this.log('🎯 Starting all automation systems...');

    const systems = [
      {
        name: 'syntax-fix-launcher',
        command: 'node',
        args: ['automation/syntax-fix-launcher.js', 'start', 'continuous']
      },
      {
        name: 'lint-automation-manager',
        command: 'node',
        args: ['automation/lint-automation-manager.cjs', 'continuous']
      },
      {
        name: 'self-healing-orchestrator',
        command: 'node',
        args: ['automation/self-healing-orchestrator.cjs']
      },
      {
        name: 'design-orchestrator',
        command: 'node',
        args: ['automation/design-orchestrator.cjs']
      },
      {
        name: 'frontend-sync-orchestrator',
        command: 'node',
        args: ['automation/frontend-sync-orchestrator.cjs']
      },
      {
        name: 'homepage-promo-orchestrator',
        command: 'node',
        args: ['automation/homepage-promo-orchestrator.cjs']
      },
      {
        name: 'feature-marketing-orchestrator',
        command: 'node',
        args: ['automation/feature-marketing-orchestrator.cjs']
      },
      {
        name: 'linkedin-marketing-orchestrator',
        command: 'node',
        args: ['automation/linkedin-marketing-orchestrator.cjs']
      },
      {
        name: 'cursor-chat-orchestrator',
        command: 'node',
        args: ['automation/cursor-chat-orchestrator.cjs']
      },
      {
        name: 'site-link-orchestrator',
        command: 'node',
        args: ['automation/site-link-orchestrator.cjs']
      },
      {
        name: 'site-promo-orchestrator',
        command: 'node',
        args: ['automation/site-promo-orchestrator.cjs']
      },
      {
        name: 'spec-dev-orchestrator',
        command: 'node',
        args: ['automation/spec-dev-orchestrator.cjs']
      },
      {
        name: 'linkedin-pro-orchestrator',
        command: 'node',
        args: ['automation/linkedin-pro-orchestrator.cjs']
      },
      {
        name: 'instagram-marketing-orchestrator',
        command: 'node',
        args: ['automation/instagram-marketing-orchestrator.cjs']
      },
      {
        name: 'alignment-orchestrator',
        command: 'node',
        args: ['automation/alignment-orchestrator.cjs']
      },
      {
        name: 'site-maintenance-orchestrator',
        command: 'node',
        args: ['automation/site-maintenance-orchestrator.cjs']
      }
    ];

    for (const system of systems) {
      await this.startSystem(system.name, system.command, system.args, system.options);
      // Small delay between starts
      await new Promise(resolve => setTimeout(resolve, 1000));
    }

    this.log('🎉 All automation systems started!');
  }

  async stopAllSystems() {
    this.log('🛑 Stopping all automation systems...');
    
    const systemNames = Array.from(this.processes.keys());
    for (const name of systemNames) {
      await this.stopSystem(name);
    }

    this.log('✅ All automation systems stopped');
  }

  async restartSystem(name) {
    this.log(`🔄 Restarting ${name}...`);
    await this.stopSystem(name);
    await new Promise(resolve => setTimeout(resolve, 2000));
    // Note: You'd need to find the original command for this system
    this.log(`⚠️  Manual restart required for ${name}`);
  }

  getStatus() {
    const status = {
      running: Array.from(this.processes.keys()),
      total: this.processes.size,
      timestamp: new Date().toISOString()
    };

    this.log(`📊 Status: ${status.total} systems running`);
    this.log(`📋 Running systems: ${status.running.join(', ')}`);
    
    return status;
  }

  async generateReport() {
    const status = this.getStatus();
    const report = {
      timestamp: new Date().toISOString(),
      status,
      logFile: this.logFile,
      uptime: process.uptime()
    };

    const reportFile = path.join(__dirname, 'logs', 'automation-report.json');
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    
    this.log(`📄 Report generated: ${reportFile}`);
    return report;
  }
}

// CLI handling
async function main() {
  const launcher = new AutomationLauncher();
  const command = process.argv[2];

  try {
    switch (command) {
      case 'start':
        await launcher.startAllSystems();
        // Keep the process running
        process.on('SIGINT', async () => {
          console.log('\n🛑 Shutting down...');
          await launcher.stopAllSystems();
          process.exit(0);
        });
        break;
      
      case 'stop':
        await launcher.stopAllSystems();
        break;
      
      case 'status':
        launcher.getStatus();
        break;
      
      case 'report':
        await launcher.generateReport();
        break;
      
      case 'restart':
        const systemName = process.argv[3];
        if (systemName) {
          await launcher.restartSystem(systemName);
        } else {
          console.log('❌ Please specify a system name to restart');
        }
        break;
      
      default:
        console.log(`
🤖 Automation Launcher

Usage: node launch-all-automation.cjs <command>

Commands:
  start     - Start all automation systems
  stop      - Stop all automation systems
  status    - Show status of running systems
  report    - Generate status report
  restart   - Restart a specific system

Examples:
  node launch-all-automation.cjs start
  node launch-all-automation.cjs status
  node launch-all-automation.cjs restart syntax-fix-launcher
        `);
    }
  } catch (error) {
    launcher.log(`❌ Error: ${error.message}`, 'ERROR');
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = AutomationLauncher;