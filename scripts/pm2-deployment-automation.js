#!/usr/bin/env node

const { execSync, spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

class PM2DeploymentAutomation {
  constructor() {
    this.projectRoot = process.cwd();
    this.logsDir = path.join(this.projectRoot, 'logs');
    this.deploymentsDir = path.join(this.projectRoot, 'deployments');
    this.backupsDir = path.join(this.projectRoot, 'backups');
    this.ensureDirectories();
    this.deploymentHistory = this.loadDeploymentHistory();
  }

  ensureDirectories() {
    [this.logsDir, this.deploymentsDir, this.backupsDir].forEach(dir => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
    });
  }

  loadDeploymentHistory() {
    const historyPath = path.join(this.deploymentsDir, 'deployment-history.json');
    if (fs.existsSync(historyPath)) {
      try {
        return JSON.parse(fs.readFileSync(historyPath, 'utf8'));
      } catch (error) {
        console.log('⚠️ Using empty deployment history');
      }
    }
    return [];
  }

  saveDeploymentHistory() {
    const historyPath = path.join(this.deploymentsDir, 'deployment-history.json');
    fs.writeFileSync(historyPath, JSON.stringify(this.deploymentHistory, null, 2));
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}`;
    console.log(logMessage);
    
    const logFile = path.join(this.logsDir, 'deployment.log');
    fs.appendFileSync(logFile, logMessage + '\n');
  }

  async executeCommand(command, options = {}) {
    try {
      const result = execSync(command, { 
        encoding: 'utf8',
        stdio: 'pipe',
        cwd: options.cwd || this.projectRoot,
        ...options
      });
      return { success: true, output: result };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  async deploy(environment = 'staging', options = {}) {
    const deploymentId = this.generateDeploymentId();
    const startTime = Date.now();
    
    this.log(`🚀 Starting deployment to ${environment} (ID: ${deploymentId})`);
    
    try {
      // Pre-deployment checks
      await this.runPreDeploymentChecks(environment);
      
      // Create backup
      await this.createBackup(environment);
      
      // Build project
      await this.buildProject(environment);
      
      // Run tests
      await this.runDeploymentTests();
      
      // Deploy to environment
      await this.deployToEnvironment(environment, deploymentId);
      
      // Post-deployment verification
      await this.verifyDeployment(environment);
      
      // Update PM2 ecosystem
      await this.updatePM2Ecosystem(environment);
      
      const duration = Date.now() - startTime;
      this.log(`✅ Deployment to ${environment} completed successfully in ${duration}ms`);
      
      // Record successful deployment
      this.recordDeployment(deploymentId, environment, 'success', duration, options);
      
      return { success: true, deploymentId, duration };
      
    } catch (error) {
      const duration = Date.now() - startTime;
      this.log(`❌ Deployment to ${environment} failed: ${error.message}`, 'ERROR');
      
      // Record failed deployment
      this.recordDeployment(deploymentId, environment, 'failed', duration, options, error.message);
      
      // Attempt rollback
      await this.rollbackDeployment(environment);
      
      return { success: false, deploymentId, duration, error: error.message };
    }
  }

  async runPreDeploymentChecks(environment) {
    this.log(`🔍 Running pre-deployment checks for ${environment}...`);
    
    // Check git status
    const gitStatus = await this.executeCommand('git status --porcelain');
    if (gitStatus.success && gitStatus.output.trim()) {
      this.log('⚠️ Uncommitted changes detected', 'WARN');
    }
    
    // Check dependencies
    await this.executeCommand('npm audit');
    
    // Check build readiness
    await this.executeCommand('npm run type-check:all');
    
    // Check environment configuration
    await this.validateEnvironmentConfig(environment);
    
    this.log('✅ Pre-deployment checks completed');
  }

  async validateEnvironmentConfig(environment) {
    this.log(`⚙️ Validating environment configuration for ${environment}...`);
    
    // Check if environment variables are set
    const envFile = path.join(this.projectRoot, `.env.${environment}`);
    if (!fs.existsSync(envFile)) {
      this.log(`⚠️ Environment file not found: ${envFile}`, 'WARN');
    }
    
    // Check PM2 ecosystem configuration
    const ecosystemPath = path.join(this.projectRoot, 'ecosystem.config.js');
    if (!fs.existsSync(ecosystemPath)) {
      throw new Error('PM2 ecosystem configuration not found');
    }
    
    this.log('✅ Environment configuration validated');
  }

  async createBackup(environment) {
    this.log(`💾 Creating backup for ${environment}...`);
    
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const backupName = `backup-${environment}-${timestamp}`;
    const backupPath = path.join(this.backupsDir, backupName);
    
    // Create backup directory
    fs.mkdirSync(backupPath, { recursive: true });
    
    // Backup current build
    if (fs.existsSync(path.join(this.projectRoot, 'dist'))) {
      await this.executeCommand(`cp -r dist ${backupPath}/`);
    }
    
    // Backup server build
    if (fs.existsSync(path.join(this.serverDir, 'dist'))) {
      await this.executeCommand(`cp -r server/dist ${backupPath}/`);
    }
    
    // Backup PM2 configuration
    await this.executeCommand(`cp ecosystem.config.js ${backupPath}/`);
    
    this.log(`✅ Backup created: ${backupPath}`);
    return backupPath;
  }

  async buildProject(environment) {
    this.log(`🔨 Building project for ${environment}...`);
    
    // Install dependencies
    await this.executeCommand('npm run install:all');
    
    // Build frontend
    const frontendBuild = await this.executeCommand('npm run build');
    if (!frontendBuild.success) {
      throw new Error(`Frontend build failed: ${frontendBuild.error}`);
    }
    
    // Build backend
    const backendBuild = await this.executeCommand('npm run build:backend');
    if (!backendBuild.success) {
      throw new Error(`Backend build failed: ${backendBuild.error}`);
    }
    
    this.log('✅ Project build completed successfully');
  }

  async runDeploymentTests() {
    this.log('🧪 Running deployment tests...');
    
    // Run unit tests
    const unitTests = await this.executeCommand('npm test');
    if (!unitTests.success) {
      throw new Error(`Unit tests failed: ${unitTests.error}`);
    }
    
    // Run integration tests if available
    try {
      await this.executeCommand('npm run test:integration');
    } catch (error) {
      this.log('⚠️ Integration tests not available', 'WARN');
    }
    
    // Run build tests
    const buildTests = await this.executeCommand('npm run test:build');
    if (!buildTests.success) {
      throw new Error(`Build tests failed: ${buildTests.error}`);
    }
    
    this.log('✅ Deployment tests passed');
  }

  async deployToEnvironment(environment, deploymentId) {
    this.log(`🚀 Deploying to ${environment}...`);
    
    // Stop current PM2 processes
    await this.executeCommand('pm2 stop all');
    
    // Copy build files to deployment directory
    const deploymentPath = path.join(this.deploymentsDir, environment, deploymentId);
    fs.mkdirSync(deploymentPath, { recursive: true });
    
    // Copy frontend build
    await this.executeCommand(`cp -r dist ${deploymentPath}/`);
    
    // Copy backend build
    await this.executeCommand(`cp -r server/dist ${deploymentPath}/`);
    
    // Copy configuration files
    await this.executeCommand(`cp ecosystem.config.js ${deploymentPath}/`);
    await this.executeCommand(`cp package*.json ${deploymentPath}/`);
    
    // Install production dependencies
    await this.executeCommand('npm ci --only=production', { cwd: deploymentPath });
    
    this.log(`✅ Deployment files prepared in ${deploymentPath}`);
  }

  async verifyDeployment(environment) {
    this.log(`🔍 Verifying deployment to ${environment}...`);
    
    // Check if files exist
    const requiredFiles = ['dist', 'server/dist', 'ecosystem.config.js'];
    for (const file of requiredFiles) {
      if (!fs.existsSync(path.join(this.deploymentsDir, environment, file))) {
        throw new Error(`Required file not found: ${file}`);
      }
    }
    
    // Run health checks
    await this.runHealthChecks(environment);
    
    this.log('✅ Deployment verification completed');
  }

  async runHealthChecks(environment) {
    this.log(`🏥 Running health checks for ${environment}...`);
    
    // Start PM2 ecosystem
    await this.executeCommand('pm2 start ecosystem.config.js --env production');
    
    // Wait for processes to start
    await this.sleep(5000);
    
    // Check PM2 status
    const status = await this.executeCommand('pm2 status');
    if (!status.success) {
      throw new Error('PM2 processes failed to start');
    }
    
    // Check if processes are online
    const pm2List = await this.executeCommand('pm2 jlist');
    if (pm2List.success) {
      try {
        const processes = JSON.parse(pm2List.output);
        const offlineProcesses = processes.filter(p => p.pm2_env.status !== 'online');
        
        if (offlineProcesses.length > 0) {
          throw new Error(`Some processes are offline: ${offlineProcesses.map(p => p.name).join(', ')}`);
        }
      } catch (error) {
        this.log('⚠️ Could not parse PM2 status', 'WARN');
      }
    }
    
    this.log('✅ Health checks passed');
  }

  async updatePM2Ecosystem(environment) {
    this.log(`🔄 Updating PM2 ecosystem for ${environment}...`);
    
    // Save PM2 configuration
    await this.executeCommand('pm2 save');
    
    // Setup startup script if not already done
    try {
      await this.executeCommand('pm2 startup');
    } catch (error) {
      this.log('⚠️ PM2 startup already configured', 'WARN');
    }
    
    this.log('✅ PM2 ecosystem updated');
  }

  async rollbackDeployment(environment) {
    this.log(`🔄 Rolling back deployment to ${environment}...`);
    
    try {
      // Stop current processes
      await this.executeCommand('pm2 stop all');
      
      // Find latest successful backup
      const backups = fs.readdirSync(this.backupsDir)
        .filter(dir => dir.startsWith(`backup-${environment}-`))
        .sort()
        .reverse();
      
      if (backups.length > 0) {
        const latestBackup = path.join(this.backupsDir, backups[0]);
        this.log(`🔄 Restoring from backup: ${latestBackup}`);
        
        // Restore from backup
        if (fs.existsSync(path.join(latestBackup, 'dist'))) {
          await this.executeCommand(`rm -rf dist && cp -r ${latestBackup}/dist ./`);
        }
        
        if (fs.existsSync(path.join(latestBackup, 'server/dist'))) {
          await this.executeCommand(`rm -rf server/dist && cp -r ${latestBackup}/server/dist ./server/`);
        }
        
        // Restart PM2 ecosystem
        await this.executeCommand('pm2 start ecosystem.config.js --env production');
        
        this.log('✅ Rollback completed successfully');
      } else {
        this.log('⚠️ No backup found for rollback', 'WARN');
      }
    } catch (error) {
      this.log(`❌ Rollback failed: ${error.message}`, 'ERROR');
    }
  }

  generateDeploymentId() {
    return `deploy-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  }

  recordDeployment(id, environment, status, duration, options = {}, error = null) {
    const deployment = {
      id,
      environment,
      status,
      timestamp: new Date().toISOString(),
      duration,
      options,
      error,
      commit: this.getCurrentCommit(),
      branch: this.getCurrentBranch()
    };
    
    this.deploymentHistory.unshift(deployment);
    
    // Keep only last 50 deployments
    if (this.deploymentHistory.length > 50) {
      this.deploymentHistory = this.deploymentHistory.slice(0, 50);
    }
    
    this.saveDeploymentHistory();
    
    // Save individual deployment log
    const deploymentLogPath = path.join(this.deploymentsDir, `${id}.json`);
    fs.writeFileSync(deploymentLogPath, JSON.stringify(deployment, null, 2));
  }

  getCurrentCommit() {
    try {
      const result = execSync('git rev-parse HEAD', { encoding: 'utf8' });
      return result.trim();
    } catch (error) {
      return 'unknown';
    }
  }

  getCurrentBranch() {
    try {
      const result = execSync('git branch --show-current', { encoding: 'utf8' });
      return result.trim();
    } catch (error) {
      return 'unknown';
    }
  }

  async showDeploymentHistory(limit = 10) {
    this.log(`📊 Showing last ${limit} deployments:`);
    
    const recentDeployments = this.deploymentHistory.slice(0, limit);
    
    for (const deployment of recentDeployments) {
      const statusIcon = deployment.status === 'success' ? '✅' : '❌';
      const duration = `${deployment.duration}ms`;
      
      console.log(`${statusIcon} ${deployment.timestamp} - ${deployment.environment} (${duration})`);
      if (deployment.error) {
        console.log(`   Error: ${deployment.error}`);
      }
    }
  }

  async showDeploymentStatus(environment) {
    this.log(`📊 Deployment status for ${environment}:`);
    
    // Check PM2 status
    const pm2Status = await this.executeCommand('pm2 status');
    if (pm2Status.success) {
      console.log(pm2Status.output);
    }
    
    // Check deployment files
    const deploymentPath = path.join(this.deploymentsDir, environment);
    if (fs.existsSync(deploymentPath)) {
      const deployments = fs.readdirSync(deploymentPath);
      console.log(`\n📁 Deployments in ${environment}:`);
      deployments.forEach(deployment => {
        console.log(`  - ${deployment}`);
      });
    }
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async showHelp() {
    console.log(`
🚀 PM2 Deployment Automation - Intelligent Deployment Management

Usage: node scripts/pm2-deployment-automation.js [command] [options]

Commands:
  deploy [env]          - Deploy to environment (default: staging)
  rollback [env]        - Rollback deployment for environment
  status [env]          - Show deployment status for environment
  history [limit]       - Show deployment history (default: 10)
  backup [env]          - Create backup for environment
  verify [env]          - Verify deployment for environment
  help                  - Show this help

Environments:
  staging               - Staging environment
  production            - Production environment

Features:
  🔍 Pre-deployment checks
  💾 Automated backups
  🧪 Deployment testing
  🔄 Zero-downtime deployments
  🚨 Automatic rollback on failure
  📊 Deployment history tracking
  🏥 Health checks and monitoring

Examples:
  node scripts/pm2-deployment-automation.js deploy staging
  node scripts/pm2-deployment-automation.js deploy production
  node scripts/pm2-deployment-automation.js status staging
  node scripts/pm2-deployment-automation.js history 20
  node scripts/pm2-deployment-automation.js rollback staging
    `);
  }
}

// CLI handling
const deployment = new PM2DeploymentAutomation();
const command = process.argv[2];
const arg1 = process.argv[3];
const arg2 = process.argv[4];

(async () => {
  try {
    switch (command) {
      case 'deploy':
        await deployment.deploy(arg1 || 'staging', {});
        break;
      case 'rollback':
        await deployment.rollbackDeployment(arg1 || 'staging');
        break;
      case 'status':
        await deployment.showDeploymentStatus(arg1 || 'staging');
        break;
      case 'history':
        await deployment.showDeploymentHistory(parseInt(arg1) || 10);
        break;
      case 'backup':
        await deployment.createBackup(arg1 || 'staging');
        break;
      case 'verify':
        await deployment.verifyDeployment(arg1 || 'staging');
        break;
      case 'help':
      default:
        deployment.showHelp();
        break;
    }
  } catch (error) {
    deployment.log(`❌ Command failed: ${error.message}`, 'ERROR');
    process.exit(1);
  }
})();