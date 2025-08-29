#!/usr/bin/env node

import { exec } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class PM2Manager {
  constructor() {
    this.processes = [
      'zion-frontend',
      'zion-backend',
      'zion-hybrid',
      'zion-build-monitor',
      'zion-code-quality',
      'zion-performance',
      'zion-security',
      'zion-auto-deploy'
    ];
    
    this.commands = {
      start: 'start',
      stop: 'stop',
      restart: 'restart',
      reload: 'reload',
      delete: 'delete',
      logs: 'logs',
      status: 'status',
      monitor: 'monitor'
    };
  }

  async executeCommand(command, processName = null) {
    try {
      switch (command) {
        case 'start':
          await this.startAll();
          break;
        case 'stop':
          await this.stopAll();
          break;
        case 'restart':
          await this.restartAll();
          break;
        case 'reload':
          await this.reloadAll();
          break;
        case 'delete':
          await this.deleteAll();
          break;
        case 'logs':
          await this.showLogs(processName);
          break;
        case 'status':
          await this.showStatus();
          break;
        case 'monitor':
          await this.showMonitor();
          break;
        case 'setup':
          await this.setupPM2();
          break;
        case 'cleanup':
          await this.cleanupPM2();
          break;
        case 'health':
          await this.showHealth();
          break;
        default:
          console.log('❌ Unknown command. Available commands:');
          this.showHelp();
      }
    } catch (error) {
      console.error('❌ Command execution failed:', error.message);
    }
  }

  async setupPM2() {
    console.log('🚀 Setting up PM2 ecosystem...');
    
    try {
      // Create logs directory if it doesn't exist
      if (!fs.existsSync('logs')) {
        fs.mkdirSync('logs', { recursive: true });
        console.log('✅ Created logs directory');
      }
      
      // Start all processes
      await this.startAll();
      
      // Save PM2 configuration
      exec('pm2 save', (error) => {
        if (error) {
          console.log('⚠️  Could not save PM2 configuration');
        } else {
          console.log('✅ PM2 configuration saved');
        }
      });
      
      // Setup PM2 startup script
      exec('pm2 startup', (error, stdout) => {
        if (error) {
          console.log('⚠️  Could not setup PM2 startup script');
        } else {
          console.log('✅ PM2 startup script configured');
          console.log('📝 Run the following command as root:');
          console.log(stdout);
        }
      });
      
      console.log('🎉 PM2 ecosystem setup completed!');
      
    } catch (error) {
      console.error('❌ PM2 setup failed:', error.message);
    }
  }

  async startAll() {
    console.log('🚀 Starting all PM2 processes...');
    
    for (const process of this.processes) {
      try {
        await this.startProcess(process);
      } catch (error) {
        console.error(`❌ Failed to start ${process}:`, error.message);
      }
    }
    
    console.log('✅ All processes started');
    await this.showStatus();
  }

  async startProcess(processName) {
    return new Promise((resolve, reject) => {
      console.log(`🚀 Starting ${processName}...`);
      
      exec(`pm2 start ecosystem.config.js --only ${processName}`, (error, stdout, stderr) => {
        if (error) {
          console.error(`❌ Failed to start ${processName}:`, stderr);
          reject(error);
        } else {
          console.log(`✅ ${processName} started successfully`);
          resolve();
        }
      });
    });
  }

  async stopAll() {
    console.log('🛑 Stopping all PM2 processes...');
    
    for (const process of this.processes) {
      try {
        await this.stopProcess(process);
      } catch (error) {
        console.error(`❌ Failed to stop ${process}:`, error.message);
      }
    }
    
    console.log('✅ All processes stopped');
    await this.showStatus();
  }

  async stopProcess(processName) {
    return new Promise((resolve, reject) => {
      console.log(`🛑 Stopping ${processName}...`);
      
      exec(`pm2 stop ${processName}`, (error, stdout, stderr) => {
        if (error) {
          console.error(`❌ Failed to stop ${processName}:`, stderr);
          reject(error);
        } else {
          console.log(`✅ ${processName} stopped successfully`);
          resolve();
        }
      });
    });
  }

  async restartAll() {
    console.log('🔄 Restarting all PM2 processes...');
    
    for (const process of this.processes) {
      try {
        await this.restartProcess(process);
      } catch (error) {
        console.error(`❌ Failed to restart ${process}:`, error.message);
      }
    }
    
    console.log('✅ All processes restarted');
    await this.showStatus();
  }

  async restartProcess(processName) {
    return new Promise((resolve, reject) => {
      console.log(`🔄 Restarting ${processName}...`);
      
      exec(`pm2 restart ${processName}`, (error, stdout, stderr) => {
        if (error) {
          console.error(`❌ Failed to restart ${processName}:`, stderr);
          reject(error);
        } else {
          console.log(`✅ ${processName} restarted successfully`);
          resolve();
        }
      });
    });
  }

  async reloadAll() {
    console.log('🔄 Reloading all PM2 processes...');
    
    for (const process of this.processes) {
      try {
        await this.reloadProcess(process);
      } catch (error) {
        console.error(`❌ Failed to reload ${processName}:`, error.message);
      }
    }
    
    console.log('✅ All processes reloaded');
    await this.showStatus();
  }

  async reloadProcess(processName) {
    return new Promise((resolve, reject) => {
      console.log(`🔄 Reloading ${processName}...`);
      
      exec(`pm2 reload ${processName}`, (error, stdout, stderr) => {
        if (error) {
          console.error(`❌ Failed to reload ${processName}:`, stderr);
          reject(error);
        } else {
          console.log(`✅ ${processName} reloaded successfully`);
          resolve();
        }
      });
    });
  }

  async deleteAll() {
    console.log('🗑️  Deleting all PM2 processes...');
    
    for (const process of this.processes) {
      try {
        await this.deleteProcess(process);
      } catch (error) {
        console.error(`❌ Failed to delete ${process}:`, error.message);
      }
    }
    
    console.log('✅ All processes deleted');
    await this.showStatus();
  }

  async deleteProcess(processName) {
    return new Promise((resolve, reject) => {
      console.log(`🗑️  Deleting ${processName}...`);
      
      exec(`pm2 delete ${processName}`, (error, stdout, stderr) => {
        if (error) {
          console.error(`❌ Failed to delete ${processName}:`, stderr);
          reject(error);
        } else {
          console.log(`✅ ${processName} deleted successfully`);
          resolve();
        }
      });
    });
  }

  async showLogs(processName = null) {
    if (processName) {
      console.log(`📋 Showing logs for ${processName}...`);
      exec(`pm2 logs ${processName} --lines 50`, (error, stdout, stderr) => {
        if (error) {
          console.error(`❌ Failed to show logs for ${processName}:`, stderr);
        } else {
          console.log(stdout);
        }
      });
    } else {
      console.log('📋 Showing logs for all processes...');
      exec('pm2 logs --lines 50', (error, stdout, stderr) => {
        if (error) {
          console.error('❌ Failed to show logs:', stderr);
        } else {
          console.log(stdout);
        }
      });
    }
  }

  async showStatus() {
    console.log('📊 PM2 Process Status:');
    exec('pm2 list', (error, stdout, stderr) => {
      if (error) {
        console.error('❌ Failed to show status:', stderr);
      } else {
        console.log(stdout);
      }
    });
  }

  async showMonitor() {
    console.log('📊 Starting PM2 monitor...');
    exec('pm2 monit', (error, stdout, stderr) => {
      if (error) {
        console.error('❌ Failed to start monitor:', stderr);
      } else {
        console.log(stdout);
      }
    });
  }

  async showHealth() {
    console.log('🏥 PM2 Ecosystem Health Check:');
    
    try {
      // Check PM2 daemon status
      exec('pm2 ping', (error) => {
        if (error) {
          console.log('❌ PM2 daemon is not running');
        } else {
          console.log('✅ PM2 daemon is running');
        }
      });
      
      // Check process status
      exec('pm2 list --format json', (error, stdout) => {
        if (error) {
          console.log('❌ Could not get process status');
        } else {
          try {
            const processes = JSON.parse(stdout);
            console.log(`📊 Total processes: ${processes.length}`);
            
            const running = processes.filter(p => p.pm2_env.status === 'online').length;
            const stopped = processes.filter(p => p.pm2_env.status === 'stopped').length;
            const errored = processes.filter(p => p.pm2_env.status === 'errored').length;
            
            console.log(`✅ Running: ${running}`);
            console.log(`🛑 Stopped: ${stopped}`);
            console.log(`❌ Errored: ${errored}`);
            
            if (errored > 0) {
              console.log('\n⚠️  Errored processes:');
              processes.filter(p => p.pm2_env.status === 'errored').forEach(p => {
                console.log(`   - ${p.name}: ${p.pm2_env.pm_uptime}`);
              });
            }
            
          } catch (parseError) {
            console.log('❌ Could not parse process status');
          }
        }
      });
      
      // Check logs directory
      if (fs.existsSync('logs')) {
        const logFiles = fs.readdirSync('logs');
        console.log(`📁 Log files: ${logFiles.length}`);
        
        if (logFiles.length > 0) {
          console.log('   Recent log files:');
          logFiles.slice(-5).forEach(file => {
            const stats = fs.statSync(path.join('logs', file));
            const size = (stats.size / 1024).toFixed(2);
            console.log(`   - ${file} (${size} KB)`);
          });
        }
      } else {
        console.log('❌ Logs directory not found');
      }
      
    } catch (error) {
      console.error('❌ Health check failed:', error.message);
    }
  }

  async cleanupPM2() {
    console.log('🧹 Cleaning up PM2...');
    
    try {
      // Stop all processes
      await this.stopAll();
      
      // Delete all processes
      await this.deleteAll();
      
      // Kill PM2 daemon
      exec('pm2 kill', (error) => {
        if (error) {
          console.log('⚠️  Could not kill PM2 daemon');
        } else {
          console.log('✅ PM2 daemon killed');
        }
      });
      
      // Remove PM2 startup script
      exec('pm2 unstartup', (error) => {
        if (error) {
          console.log('⚠️  Could not remove PM2 startup script');
        } else {
          console.log('✅ PM2 startup script removed');
        }
      });
      
      console.log('🎉 PM2 cleanup completed!');
      
    } catch (error) {
      console.error('❌ PM2 cleanup failed:', error.message);
    }
  }

  showHelp() {
    console.log('\n📖 PM2 Manager - Available Commands:');
    console.log('   start     - Start all PM2 processes');
    console.log('   stop      - Stop all PM2 processes');
    console.log('   restart   - Restart all PM2 processes');
    console.log('   reload    - Reload all PM2 processes');
    console.log('   delete    - Delete all PM2 processes');
    console.log('   logs      - Show logs for all processes');
    console.log('   logs <name> - Show logs for specific process');
    console.log('   status    - Show PM2 process status');
    console.log('   monitor   - Start PM2 monitor');
    console.log('   setup     - Setup PM2 ecosystem');
    console.log('   cleanup   - Cleanup PM2 completely');
    console.log('   health    - Show ecosystem health');
    console.log('\n💡 Usage: node scripts/pm2-manager.js <command> [process-name]');
    console.log('💡 Example: node scripts/pm2-manager.js start');
    console.log('💡 Example: node scripts/pm2-manager.js logs zion-frontend');
  }
}

// Main execution
const manager = new PM2Manager();
const command = process.argv[2];
const processName = process.argv[3];

if (!command || command === 'help') {
  manager.showHelp();
} else {
  manager.executeCommand(command, processName);
}