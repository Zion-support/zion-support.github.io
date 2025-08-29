#!/usr/bin/env node

import { execSync, spawn } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class PM2ProcessManager {
  constructor() {
    this.workspace = process.cwd();
    this.logFile = path.join(this.workspace, 'pm2-process-manager.log');
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}\n`;
    console.log(logMessage.trim());
    fs.appendFileSync(this.logFile, logMessage);
  }

  async runCommand(command, description) {
    try {
      this.log(`Running: ${description}`);
      const result = execSync(command, { 
        cwd: this.workspace, 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      this.log(`✓ ${description} completed successfully`);
      return result;
    } catch (error) {
      this.log(`✗ ${description} failed: ${error.message}`);
      throw error;
    }
  }

  async startPM2Processes() {
    this.log('🚀 Starting PM2 processes...');
    
    try {
      // Start the main application
      await this.runCommand('pm2 start ecosystem.config.cjs', 'Starting main application');
      
      // Start automation processes
      await this.runCommand('pm2 start scripts/pm2-automation.js --name "automation" --interpreter node', 'Starting automation process');
      
      // Start scheduled task runner
      await this.runCommand('pm2 start scripts/pm2-automation.js --name "scheduled-tasks" --interpreter node -- scheduled', 'Starting scheduled task runner');
      
      this.log('✅ PM2 processes started successfully');
      return true;
    } catch (error) {
      this.log(`❌ Failed to start PM2 processes: ${error.message}`);
      return false;
    }
  }

  async stopPM2Processes() {
    this.log('🛑 Stopping PM2 processes...');
    
    try {
      await this.runCommand('pm2 stop all', 'Stopping all PM2 processes');
      this.log('✅ PM2 processes stopped successfully');
      return true;
    } catch (error) {
      this.log(`❌ Failed to stop PM2 processes: ${error.message}`);
      return false;
    }
  }

  async restartPM2Processes() {
    this.log('🔄 Restarting PM2 processes...');
    
    try {
      await this.runCommand('pm2 restart all', 'Restarting all PM2 processes');
      this.log('✅ PM2 processes restarted successfully');
      return true;
    } catch (error) {
      this.log(`❌ Failed to restart PM2 processes: ${error.message}`);
      return false;
    }
  }

  async showPM2Status() {
    this.log('📊 PM2 Status:');
    try {
      const status = execSync('pm2 list', { 
        cwd: this.workspace, 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      console.log(status);
      return status;
    } catch (error) {
      this.log(`❌ Failed to get PM2 status: ${error.message}`);
      return null;
    }
  }

  async setupPM2Startup() {
    this.log('🔧 Setting up PM2 startup script...');
    
    try {
      await this.runCommand('pm2 startup', 'Setting up PM2 startup');
      await this.runCommand('pm2 save', 'Saving PM2 configuration');
      this.log('✅ PM2 startup configured successfully');
      return true;
    } catch (error) {
      this.log(`❌ Failed to setup PM2 startup: ${error.message}`);
      return false;
    }
  }

  async runAutomationTask(task) {
    this.log(`🚀 Running automation task: ${task}`);
    
    try {
      const result = execSync(`node scripts/pm2-automation.js ${task}`, { 
        cwd: this.workspace, 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      this.log(`✅ Task ${task} completed successfully`);
      return result;
    } catch (error) {
      this.log(`❌ Task ${task} failed: ${error.message}`);
      throw error;
    }
  }

  async setupCronJobs() {
    this.log('⏰ Setting up cron jobs for automation...');
    
    try {
      // Create a cron job script
      const cronScript = `#!/bin/bash
cd ${this.workspace}
node scripts/pm2-automation.js scheduled >> pm2-cron.log 2>&1
`;
      
      fs.writeFileSync(path.join(this.workspace, 'scripts/run-scheduled-tasks.sh'), cronScript);
      fs.chmodSync(path.join(this.workspace, 'scripts/run-scheduled-tasks.sh'), '755');
      
      this.log('✅ Cron job script created successfully');
      this.log('📝 To enable cron jobs, add the following to your crontab:');
      this.log('   0 2 * * * /workspace/scripts/run-scheduled-tasks.sh  # Daily at 2 AM');
      this.log('   0 2 * * 1 /workspace/scripts/run-scheduled-tasks.sh  # Weekly on Monday at 2 AM');
      
      return true;
    } catch (error) {
      this.log(`❌ Failed to setup cron jobs: ${error.message}`);
      return false;
    }
  }

  async healthCheck() {
    this.log('🏥 Running health check...');
    
    try {
      // Check if PM2 is running
      const pm2Status = execSync('pm2 ping', { 
        cwd: this.workspace, 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      
      // Check if processes are running
      const processList = execSync('pm2 list', { 
        cwd: this.workspace, 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      
      this.log('✅ Health check passed');
      this.log('📊 PM2 Status:');
      console.log(processList);
      
      return true;
    } catch (error) {
      this.log(`❌ Health check failed: ${error.message}`);
      return false;
    }
  }
}

// CLI interface
if (import.meta.url === `file://${process.argv[1]}`) {
  const manager = new PM2ProcessManager();
  const command = process.argv[2];
  
  switch (command) {
    case 'start':
      manager.startPM2Processes();
      break;
    case 'stop':
      manager.stopPM2Processes();
      break;
    case 'restart':
      manager.restartPM2Processes();
      break;
    case 'status':
      manager.showPM2Status();
      break;
    case 'startup':
      manager.setupPM2Startup();
      break;
    case 'cron':
      manager.setupCronJobs();
      break;
    case 'health':
      manager.healthCheck();
      break;
    case 'ci':
      manager.runAutomationTask('ci');
      break;
    case 'deploy':
      manager.runAutomationTask('deploy');
      break;
    case 'security':
      manager.runAutomationTask('security');
      break;
    case 'improvement':
      manager.runAutomationTask('improvement');
      break;
    default:
      console.log(`
PM2 Process Manager

Usage: node scripts/pm2-process-manager.js <command>

Commands:
  start       - Start all PM2 processes
  stop        - Stop all PM2 processes
  restart     - Restart all PM2 processes
  status      - Show PM2 status
  startup     - Setup PM2 startup script
  cron        - Setup cron jobs for automation
  health      - Run health check
  ci          - Run CI pipeline
  deploy      - Run deployment
  security    - Run security scan
  improvement - Run continuous improvement
      `);
  }
}

export default PM2ProcessManager;