#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🔧 PM2 Automation Manager');

class AutomationManager {
  constructor() {
    this.automationProcesses = [
      'console-error-fixer',
      'link-checker',
      'continuous-improvement',
      'daily-build-test',
      'security-audit',
      'dependency-updates',
      'performance-monitor',
      'quality-checks',
      'link-integrity',
      'front-maximizer',
      'sitemap-runner'
    ];
  }

  async showHelp() {
    console.log(`
🔧 PM2 Automation Manager - Available Commands:

📊 Status & Monitoring:
  status                    - Show all automation processes status
  logs <process>           - Show logs for specific process
  monit                    - Open PM2 monitoring interface
  dashboard                - Start real-time dashboard

⚙️  Process Management:
  start                    - Start all automation processes
  stop                     - Stop all automation processes
  restart                  - Restart all automation processes
  restart <process>        - Restart specific process
  delete                   - Delete all automation processes

🔍 Health & Reports:
  health                   - Generate health report
  performance              - Generate performance report
  check                    - Check for failed processes
  fix                      - Auto-fix failed processes

📋 Examples:
  node scripts/automation-manager.js status
  node scripts/automation-manager.js logs console-error-fixer
  node scripts/automation-manager.js restart security-audit
  node scripts/automation-manager.js health
    `);
  }

  async getStatus() {
    try {
      const output = execSync('pm2 jlist', { encoding: 'utf8' });
      const processes = JSON.parse(output);
      
      const automationProcesses = processes.filter(proc => 
        this.automationProcesses.includes(proc.name)
      );
      
      console.log('📊 Automation Processes Status:');
      console.log('─'.repeat(80));
      console.log('Name'.padEnd(25) + 'Status'.padEnd(10) + 'Memory'.padEnd(10) + 'CPU'.padEnd(8) + 'Uptime'.padEnd(15) + 'Restarts');
      console.log('─'.repeat(80));
      
      automationProcesses.forEach(proc => {
        const statusIcon = proc.pm2_env.status === 'online' ? '🟢' : proc.pm2_env.status === 'errored' ? '🔴' : '🟡';
        const memory = `${Math.round(proc.monit.memory / 1024 / 1024)}MB`;
        const uptime = this.formatUptime(proc.pm2_env.pm_uptime);
        
        console.log(
          proc.name.padEnd(25) +
          `${statusIcon} ${proc.pm2_env.status}`.padEnd(10) +
          memory.padEnd(10) +
          `${proc.monit.cpu}%`.padEnd(8) +
          uptime.padEnd(15) +
          proc.pm2_env.restart_time
        );
      });
      
      const onlineCount = automationProcesses.filter(p => p.pm2_env.status === 'online').length;
      const totalCount = automationProcesses.length;
      
      console.log('');
      console.log(`📈 Summary: ${onlineCount}/${totalCount} processes online`);
      
      if (onlineCount < totalCount) {
        console.log('⚠️  Some processes are not running. Use "check" to see details.');
      }
      
    } catch (error) {
      console.error('❌ Failed to get status:', error.message);
    }
  }

  async startAll() {
    console.log('🚀 Starting all automation processes...');
    try {
      execSync('pm2 start ecosystem.config.cjs --only automation', { stdio: 'inherit' });
      console.log('✅ All automation processes started');
    } catch (error) {
      console.error('❌ Failed to start processes:', error.message);
    }
  }

  async stopAll() {
    console.log('🛑 Stopping all automation processes...');
    try {
      this.automationProcesses.forEach(processName => {
        try {
          execSync(`pm2 stop ${processName}`, { stdio: 'pipe' });
        } catch (error) {
          // Process might not be running
        }
      });
      console.log('✅ All automation processes stopped');
    } catch (error) {
      console.error('❌ Failed to stop processes:', error.message);
    }
  }

  async restartAll() {
    console.log('🔄 Restarting all automation processes...');
    try {
      execSync('pm2 restart ecosystem.config.cjs --only automation', { stdio: 'inherit' });
      console.log('✅ All automation processes restarted');
    } catch (error) {
      console.error('❌ Failed to restart processes:', error.message);
    }
  }

  async restartProcess(processName) {
    if (!this.automationProcesses.includes(processName)) {
      console.error(`❌ Invalid process name: ${processName}`);
      console.log('Valid processes:', this.automationProcesses.join(', '));
      return;
    }
    
    console.log(`🔄 Restarting ${processName}...`);
    try {
      execSync(`pm2 restart ${processName}`, { stdio: 'inherit' });
      console.log(`✅ ${processName} restarted`);
    } catch (error) {
      console.error(`❌ Failed to restart ${processName}:`, error.message);
    }
  }

  async deleteAll() {
    console.log('🗑️  Deleting all automation processes...');
    try {
      this.automationProcesses.forEach(processName => {
        try {
          execSync(`pm2 delete ${processName}`, { stdio: 'pipe' });
        } catch (error) {
          // Process might not exist
        }
      });
      console.log('✅ All automation processes deleted');
    } catch (error) {
      console.error('❌ Failed to delete processes:', error.message);
    }
  }

  async showLogs(processName) {
    if (!this.automationProcesses.includes(processName)) {
      console.error(`❌ Invalid process name: ${processName}`);
      console.log('Valid processes:', this.automationProcesses.join(', '));
      return;
    }
    
    console.log(`📝 Showing logs for ${processName}...`);
    try {
      execSync(`pm2 logs ${processName} --lines 50`, { stdio: 'inherit' });
    } catch (error) {
      console.error(`❌ Failed to show logs for ${processName}:`, error.message);
    }
  }

  async openMonit() {
    console.log('📊 Opening PM2 monitoring interface...');
    try {
      execSync('pm2 monit', { stdio: 'inherit' });
    } catch (error) {
      console.error('❌ Failed to open monitoring interface:', error.message);
    }
  }

  async checkHealth() {
    console.log('🔍 Checking automation health...');
    
    try {
      const output = execSync('pm2 jlist', { encoding: 'utf8' });
      const processes = JSON.parse(output);
      
      const automationProcesses = processes.filter(proc => 
        this.automationProcesses.includes(proc.name)
      );
      
      const failedProcesses = automationProcesses.filter(proc => 
        proc.pm2_env.status === 'errored' || proc.pm2_env.status === 'stopped'
      );
      
      if (failedProcesses.length === 0) {
        console.log('✅ All automation processes are healthy');
        return;
      }
      
      console.log(`⚠️  Found ${failedProcesses.length} failed processes:`);
      failedProcesses.forEach(proc => {
        console.log(`  🔴 ${proc.name}: ${proc.pm2_env.status} (restarts: ${proc.pm2_env.restart_time})`);
      });
      
      console.log('\n💡 Use "fix" command to automatically restart failed processes');
      
    } catch (error) {
      console.error('❌ Failed to check health:', error.message);
    }
  }

  async autoFix() {
    console.log('🔧 Auto-fixing failed processes...');
    
    try {
      const output = execSync('pm2 jlist', { encoding: 'utf8' });
      const processes = JSON.parse(output);
      
      const failedProcesses = processes.filter(proc => 
        this.automationProcesses.includes(proc.name) && 
        (proc.pm2_env.status === 'errored' || proc.pm2_env.status === 'stopped')
      );
      
      if (failedProcesses.length === 0) {
        console.log('✅ No failed processes to fix');
        return;
      }
      
      console.log(`🔄 Restarting ${failedProcesses.length} failed processes...`);
      
      failedProcesses.forEach(proc => {
        try {
          execSync(`pm2 restart ${proc.name}`, { stdio: 'pipe' });
          console.log(`✅ Restarted ${proc.name}`);
        } catch (error) {
          console.error(`❌ Failed to restart ${proc.name}:`, error.message);
        }
      });
      
      console.log('✅ Auto-fix completed');
      
    } catch (error) {
      console.error('❌ Failed to auto-fix:', error.message);
    }
  }

  formatUptime(uptime) {
    if (!uptime) return 'N/A';
    const seconds = Math.floor((Date.now() - uptime) / 1000);
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    return `${hours}h ${minutes}m`;
  }
}

// Main execution
async function main() {
  const manager = new AutomationManager();
  const command = process.argv[2];
  const processName = process.argv[3];
  
  if (!command || command === 'help') {
    await manager.showHelp();
    return;
  }
  
  switch (command) {
    case 'status':
      await manager.getStatus();
      break;
      
    case 'start':
      await manager.startAll();
      break;
      
    case 'stop':
      await manager.stopAll();
      break;
      
    case 'restart':
      if (processName) {
        await manager.restartProcess(processName);
      } else {
        await manager.restartAll();
      }
      break;
      
    case 'delete':
      await manager.deleteAll();
      break;
      
    case 'logs':
      if (!processName) {
        console.error('❌ Please specify a process name');
        console.log('Example: node scripts/automation-manager.js logs console-error-fixer');
        return;
      }
      await manager.showLogs(processName);
      break;
      
    case 'monit':
      await manager.openMonit();
      break;
      
    case 'check':
      await manager.checkHealth();
      break;
      
    case 'fix':
      await manager.autoFix();
      break;
      
    default:
      console.error(`❌ Unknown command: ${command}`);
      await manager.showHelp();
      break;
  }
}

// Start the manager
main().catch(console.error);
