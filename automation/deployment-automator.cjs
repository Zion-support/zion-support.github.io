#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Starting Deployment Automator...');

class DeploymentAutomator {
  constructor() {
    this.logFile = path.join(process.cwd(), 'logs', 'deployment.log');
    this.config = {
      deploymentStrategy: process.env.DEPLOYMENT_STRATEGY || 'blue-green',
      rollbackEnabled: process.env.ROLLBACK_ENABLED === 'true',
      checkInterval: 4 * 60 * 60 * 1000, // 4 hours
    };
    this.ensureLogDirectory();
  }

  ensureLogDirectory() {
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}\n`;
    console.log(message);
    fs.appendFileSync(this.logFile, logMessage);
  }

  async executeCommand(command, options = {}) {
    try {
      const result = execSync(command, { 
        encoding: 'utf8', 
        stdio: options.silent ? 'pipe' : 'inherit',
        ...options 
      });
      return { success: true, output: result };
    } catch (error) {
      this.log(`❌ Command failed: ${command} - ${error.message}`);
      return { success: false, error: error.message };
    }
  }

  async checkDeploymentStatus() {
    this.log('🔍 Checking deployment status...');
    
    // Check if build is successful
    const buildResult = await this.executeCommand('npm run build', { silent: true });
    if (!buildResult.success) {
      this.log('❌ Build failed, deployment not possible');
      return false;
    }
    
    // Check if PM2 processes are running
    const pm2Result = await this.executeCommand('pm2 jlist', { silent: true });
    if (!pm2Result.success) {
      this.log('❌ PM2 not running, deployment not possible');
      return false;
    }
    
    this.log('✅ Deployment status check passed');
    return true;
  }

  async performDeployment() {
    this.log('🚀 Starting deployment...');
    
    if (!(await this.checkDeploymentStatus())) {
      return false;
    }
    
    // Restart PM2 processes for deployment
    this.log('🔄 Restarting PM2 processes...');
    const restartResult = await this.executeCommand('pm2 restart all');
    if (!restartResult.success) {
      this.log('❌ Failed to restart PM2 processes');
      return false;
    }
    
    this.log('✅ Deployment completed successfully');
    return true;
  }

  async run() {
    this.log('🚀 Deployment Automator started');
    this.log(`📋 Deployment strategy: ${this.config.deploymentStrategy}`);
    this.log(`📋 Rollback enabled: ${this.config.rollbackEnabled}`);
    
    // Initial deployment check
    await this.performDeployment();
    
    // Set up periodic deployment checks
    setInterval(async () => {
      await this.performDeployment();
    }, this.config.checkInterval);
    
    this.log('✅ Deployment monitoring active');
  }
}

// Start the deployment automator
const deploymentAutomator = new DeploymentAutomator();
deploymentAutomator.run().catch(error => {
  console.error('❌ Deployment Automator failed:', error);
  process.exit(1);
});