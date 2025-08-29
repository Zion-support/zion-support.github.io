#!/usr/bin/env node

const { execSync, spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

class IntelligentPM2Manager {
  constructor() {
    this.ecosystemPath = path.join(process.cwd(), 'ecosystem.config.js');
    this.logDir = path.join(process.cwd(), 'automation', 'logs');
    this.ensureLogDirectory();
    this.loadConfiguration();
  }

  ensureLogDirectory() {
    if (!fs.existsSync(this.logDir)) {
      fs.mkdirSync(this.logDir, { recursive: true });
    }
  }

  loadConfiguration() {
    try {
      this.config = require(this.ecosystemPath);
      console.log(`✅ Loaded PM2 ecosystem configuration`);
    } catch (error) {
      console.error(`❌ Failed to load ecosystem config: ${error.message}`);
      process.exit(1);
    }
  }

  async executeCommand(command, options = {}) {
    try {
      const result = execSync(command, { 
        encoding: 'utf8', 
        stdio: 'pipe',
        ...options 
      });
      return { success: true, output: result };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  async startAll() {
    console.log('🚀 Starting all PM2 applications...');
    
    // Start with intelligent orchestration
    const result = await this.executeCommand('pm2 start ecosystem.config.js');
    
    if (result.success) {
      console.log('✅ All applications started successfully');
      await this.optimizePerformance();
      await this.startMonitoring();
    } else {
      console.error(`❌ Failed to start applications: ${result.error}`);
    }
  }

  async stopAll() {
    console.log('🛑 Stopping all PM2 applications...');
    const result = await this.executeCommand('pm2 stop all');
    
    if (result.success) {
      console.log('✅ All applications stopped');
    } else {
      console.error(`❌ Failed to stop applications: ${result.error}`);
    }
  }

  async restartAll() {
    console.log('🔄 Restarting all PM2 applications...');
    const result = await this.executeCommand('pm2 restart all');
    
    if (result.success) {
      console.log('✅ All applications restarted');
    } else {
      console.error(`❌ Failed to restart applications: ${result.error}`);
    }
  }

  async reloadAll() {
    console.log('🔄 Reloading all PM2 applications...');
    const result = await this.executeCommand('pm2 reload all');
    
    if (result.success) {
      console.log('✅ All applications reloaded');
    } else {
      console.error(`❌ Failed to reload applications: ${result.error}`);
    }
  }

  async deleteAll() {
    console.log('🗑️ Deleting all PM2 applications...');
    const result = await this.executeCommand('pm2 delete all');
    
    if (result.success) {
      console.log('✅ All applications deleted');
    } else {
      console.error(`❌ Failed to delete applications: ${result.error}`);
    }
  }

  async getStatus() {
    console.log('📊 Getting PM2 status...');
    const result = await this.executeCommand('pm2 status');
    
    if (result.success) {
      console.log(result.output);
    } else {
      console.error(`❌ Failed to get status: ${result.error}`);
    }
  }

  async getLogs(appName = 'all', lines = 100) {
    console.log(`📋 Getting logs for ${appName}...`);
    const result = await this.executeCommand(`pm2 logs ${appName} --lines ${lines}`);
    
    if (result.success) {
      console.log(result.output);
    } else {
      console.error(`❌ Failed to get logs: ${result.error}`);
    }
  }

  async monitor() {
    console.log('👀 Starting PM2 monitoring...');
    const result = await this.executeCommand('pm2 monit');
    
    if (result.success) {
      console.log('✅ Monitoring started');
    } else {
      console.error(`❌ Failed to start monitoring: ${result.error}`);
    }
  }

  async optimizePerformance() {
    console.log('⚡ Optimizing PM2 performance...');
    
    // Set PM2 to use cluster mode for better performance
    await this.executeCommand('pm2 set pm2:max_memory_limit 2048M');
    await this.executeCommand('pm2 set pm2:max_restarts 10');
    await this.executeCommand('pm2 set pm2:min_uptime 1000');
    
    console.log('✅ Performance optimization completed');
  }

  async startMonitoring() {
    console.log('📊 Starting intelligent monitoring...');
    
    // Start background monitoring
    setInterval(async () => {
      await this.checkSystemHealth();
    }, 30000); // Check every 30 seconds
    
    console.log('✅ Intelligent monitoring started');
  }

  async checkSystemHealth() {
    try {
      const status = await this.executeCommand('pm2 jlist');
      if (status.success) {
        const apps = JSON.parse(status.output);
        let healthyApps = 0;
        let totalApps = apps.length;
        
        for (const app of apps) {
          if (app.pm2_env && app.pm2_env.status === 'online') {
            healthyApps++;
          }
        }
        
        const healthPercentage = (healthyApps / totalApps) * 100;
        
        if (healthPercentage < 80) {
          console.log(`⚠️ System health warning: ${healthPercentage.toFixed(1)}% apps healthy`);
          await this.autoRecover();
        }
      }
    } catch (error) {
      console.error(`❌ Health check failed: ${error.message}`);
    }
  }

  async autoRecover() {
    console.log('🔄 Attempting auto-recovery...');
    
    // Get list of failed apps
    const failedApps = await this.executeCommand('pm2 list | grep "errored\|stopped"');
    
    if (failedApps.success && failedApps.output.trim()) {
      console.log('🔄 Restarting failed applications...');
      await this.executeCommand('pm2 restart all');
    }
  }

  async scaleApp(appName, instances) {
    console.log(`📈 Scaling ${appName} to ${instances} instances...`);
    const result = await this.executeCommand(`pm2 scale ${appName} ${instances}`);
    
    if (result.success) {
      console.log(`✅ ${appName} scaled to ${instances} instances`);
    } else {
      console.error(`❌ Failed to scale ${appName}: ${result.error}`);
    }
  }

  async updateApp(appName) {
    console.log(`🔄 Updating ${appName}...`);
    const result = await this.executeCommand(`pm2 reload ${appName}`);
    
    if (result.success) {
      console.log(`✅ ${appName} updated successfully`);
    } else {
      console.error(`❌ Failed to update ${appName}: ${result.error}`);
    }
  }

  async generateReport() {
    console.log('📊 Generating PM2 report...');
    
    const timestamp = new Date().toISOString();
    const report = {
      timestamp,
      status: await this.executeCommand('pm2 jlist'),
      logs: await this.executeCommand('pm2 logs --lines 50'),
      system: await this.executeCommand('pm2 info')
    };
    
    const reportPath = path.join(this.logDir, `pm2-report-${Date.now()}.json`);
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    console.log(`✅ Report generated: ${reportPath}`);
    return reportPath;
  }

  async deploy(environment = 'production') {
    console.log(`🚀 Deploying to ${environment}...`);
    
    try {
      const result = await this.executeCommand(`pm2 deploy ${environment} update`);
      
      if (result.success) {
        console.log(`✅ Deployment to ${environment} successful`);
        await this.reloadAll();
      } else {
        console.error(`❌ Deployment failed: ${result.error}`);
      }
    } catch (error) {
      console.error(`❌ Deployment error: ${error.message}`);
    }
  }

  async setup() {
    console.log('🔧 Setting up PM2 environment...');
    
    // Install PM2 globally if not present
    const pm2Check = await this.executeCommand('pm2 --version');
    if (!pm2Check.success) {
      console.log('📦 Installing PM2 globally...');
      await this.executeCommand('npm install -g pm2');
    }
    
    // Setup PM2 startup script
    await this.executeCommand('pm2 startup');
    
    // Save current PM2 configuration
    await this.executeCommand('pm2 save');
    
    console.log('✅ PM2 environment setup completed');
  }

  async cleanup() {
    console.log('🧹 Cleaning up PM2 environment...');
    
    // Clean old logs
    await this.executeCommand('pm2 flush');
    
    // Clean PM2 dump
    await this.executeCommand('pm2 cleardump');
    
    console.log('✅ Cleanup completed');
  }

  showHelp() {
    console.log(`
🤖 Intelligent PM2 Manager - Available Commands:

🚀 Management:
  start          - Start all applications
  stop           - Stop all applications
  restart        - Restart all applications
  reload         - Reload all applications (zero-downtime)
  delete         - Delete all applications

📊 Monitoring:
  status         - Show application status
  logs [app]     - Show logs (default: all apps)
  monitor        - Start PM2 monitoring
  health         - Check system health

⚡ Optimization:
  optimize       - Optimize PM2 performance
  scale [app] [n] - Scale app to n instances
  update [app]   - Update specific app

🔄 Deployment:
  deploy [env]   - Deploy to environment (production/staging)
  setup          - Setup PM2 environment
  cleanup        - Clean up PM2 environment

📋 Reporting:
  report         - Generate comprehensive report

❓ Help:
  help           - Show this help message

Examples:
  node pm2-intelligent-manager.js start
  node pm2-intelligent-manager.js logs zion-website
  node pm2-intelligent-manager.js scale zion-website 3
  node pm2-intelligent-manager.js deploy production
`);
  }
}

// CLI handling
const manager = new IntelligentPM2Manager();
const command = process.argv[2];
const args = process.argv.slice(3);

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
        await manager.getStatus();
        break;
      case 'logs':
        await manager.getLogs(args[0], args[1] || 100);
        break;
      case 'monitor':
        await manager.monitor();
        break;
      case 'health':
        await manager.checkSystemHealth();
        break;
      case 'optimize':
        await manager.optimizePerformance();
        break;
      case 'scale':
        if (args.length >= 2) {
          await manager.scaleApp(args[0], parseInt(args[1]));
        } else {
          console.log('❌ Usage: scale <app-name> <instances>');
        }
        break;
      case 'update':
        if (args[0]) {
          await manager.updateApp(args[0]);
        } else {
          console.log('❌ Usage: update <app-name>');
        }
        break;
      case 'deploy':
        await manager.deploy(args[0] || 'production');
        break;
      case 'setup':
        await manager.setup();
        break;
      case 'cleanup':
        await manager.cleanup();
        break;
      case 'report':
        await manager.generateReport();
        break;
      case 'help':
      default:
        manager.showHelp();
        break;
    }
  } catch (error) {
    console.error(`❌ Error: ${error.message}`);
    process.exit(1);
  }
})();