#!/usr/bin/env node

const { execSync, spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

class PM2AutomationLauncher {
  constructor() {
    this.ecosystemFile = './ecosystem.config.cjs';
    this.processes = [
      'automation-orchestrator',
      'lint-automation-manager',
      'lint-monitor',
      'lint-error-fixer',
      'code-quality-monitor',
      'performance-optimizer',
      'security-scanner',
      'automation-factory',
      'automation-dashboard',
      'launch-all-automation',
    ];
  }

  async start() {
    console.log('🚀 Starting PM2 automation ecosystem...');

    try {
      // Check if ecosystem file exists
      if (!fs.existsSync(this.ecosystemFile)) {
        throw new Error(`Ecosystem file ${this.ecosystemFile} not found`);
      }

      // Start all processes
      execSync(`pm2 start ${this.ecosystemFile}`, { stdio: 'inherit' });

      // Save PM2 configuration
      execSync('pm2 save', { stdio: 'inherit' });

      console.log('✅ PM2 automation ecosystem started successfully!');
      this.showStatus();
    } catch (error) {
      console.error('❌ Error starting PM2 ecosystem:', error.message);
      process.exit(1);
    }
  }

  async stop() {
    console.log('⏹️  Stopping PM2 automation ecosystem...');

    try {
      execSync('pm2 stop all', { stdio: 'inherit' });
      console.log('✅ PM2 automation ecosystem stopped successfully!');
    } catch (error) {
      console.error('❌ Error stopping PM2 ecosystem:', error.message);
    }
  }

  async restart() {
    console.log('🔄 Restarting PM2 automation ecosystem...');

    try {
      execSync('pm2 restart all', { stdio: 'inherit' });
      console.log('✅ PM2 automation ecosystem restarted successfully!');
      this.showStatus();
    } catch (error) {
      console.error('❌ Error restarting PM2 ecosystem:', error.message);
    }
  }

  async reload() {
    console.log('🔄 Reloading PM2 automation ecosystem...');

    try {
      execSync(`pm2 reload ${this.ecosystemFile}`, { stdio: 'inherit' });
      console.log('✅ PM2 automation ecosystem reloaded successfully!');
      this.showStatus();
    } catch (error) {
      console.error('❌ Error reloading PM2 ecosystem:', error.message);
    }
  }

  async delete() {
    console.log('🗑️  Deleting PM2 automation ecosystem...');

    try {
      execSync('pm2 delete all', { stdio: 'inherit' });
      console.log('✅ PM2 automation ecosystem deleted successfully!');
    } catch (error) {
      console.error('❌ Error deleting PM2 ecosystem:', error.message);
    }
  }

  showStatus() {
    console.log('\n📊 Current PM2 Status:');
    try {
      execSync('pm2 status', { stdio: 'inherit' });
    } catch (error) {
      console.error('❌ Error showing status:', error.message);
    }
  }

  showLogs() {
    console.log('📋 PM2 Logs:');
    try {
      execSync('pm2 logs --lines 20', { stdio: 'inherit' });
    } catch (error) {
      console.error('❌ Error showing logs:', error.message);
    }
  }

  async monitor() {
    console.log('📈 Opening PM2 Monitor...');
    try {
      execSync('pm2 monit', { stdio: 'inherit' });
    } catch (error) {
      console.error('❌ Error opening monitor:', error.message);
    }
  }

  async setupStartup() {
    console.log('🔧 Setting up PM2 startup script...');
    try {
      const output = execSync('pm2 startup', { encoding: 'utf8' });
      console.log('📝 Startup command output:');
      console.log(output);
      console.log(
        '\n⚠️  Please run the sudo command shown above to complete startup setup'
      );
    } catch (error) {
      console.error('❌ Error setting up startup:', error.message);
    }
  }

  async healthCheck() {
    console.log('🏥 Performing PM2 health check...');

    try {
      const status = execSync('pm2 status --no-daemon', { encoding: 'utf8' });
      const lines = status.split('\n');

      let onlineCount = 0;
      let erroredCount = 0;
      let stoppedCount = 0;

      lines.forEach(line => {
        if (line.includes('online')) onlineCount++;
        if (line.includes('errored')) erroredCount++;
        if (line.includes('stopped')) stoppedCount++;
      });

      console.log(`📊 Health Summary:`);
      console.log(`   ✅ Online: ${onlineCount}`);
      console.log(`   ❌ Errored: ${erroredCount}`);
      console.log(`   ⏸️  Stopped: ${stoppedCount}`);

      if (erroredCount > 0) {
        console.log(
          '\n⚠️  Some processes are in error state. Check logs with: pm2 logs'
        );
      }
    } catch (error) {
      console.error('❌ Error during health check:', error.message);
    }
  }
}

// CLI interface
async function main() {
  const launcher = new PM2AutomationLauncher();
  const command = process.argv[2] || 'start';

  switch (command) {
    case 'start':
      await launcher.start();
      break;
    case 'stop':
      await launcher.stop();
      break;
    case 'restart':
      await launcher.restart();
      break;
    case 'reload':
      await launcher.reload();
      break;
    case 'delete':
      await launcher.delete();
      break;
    case 'status':
      launcher.showStatus();
      break;
    case 'logs':
      launcher.showLogs();
      break;
    case 'monitor':
      await launcher.monitor();
      break;
    case 'startup':
      await launcher.setupStartup();
      break;
    case 'health':
      await launcher.healthCheck();
      break;
    default:
      console.log('Usage: node pm2-automation-launcher.js [command]');
      console.log('\nCommands:');
      console.log('  start    - Start all automation processes');
      console.log('  stop     - Stop all processes');
      console.log('  restart  - Restart all processes');
      console.log('  reload   - Reload ecosystem configuration');
      console.log('  delete   - Delete all processes');
      console.log('  status   - Show process status');
      console.log('  logs     - Show process logs');
      console.log('  monitor  - Open PM2 monitor');
      console.log('  startup  - Setup PM2 startup script');
      console.log('  health   - Perform health check');
      break;
  }
}

if (require.main === module) {
  main().catch(console.error);
}

module.exports = PM2AutomationLauncher;
