#!/usr/bin/env node

const { execSync, spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

class PM2SmartDeployer {
  constructor() {
    this.config = {
      ecosystemFile: '../ecosystem.config.js',
      logDirectory: '../automation/logs',
      backupDirectory: '../automation/backups',
      deploymentHistory: [],
      rollbackPoints: [],
      healthThresholds: {
        memory: 0.8, // 80% memory usage
        cpu: 0.7,    // 70% CPU usage
        responseTime: 2000, // 2 seconds
        errorRate: 0.05 // 5% error rate
      }
    };
    
    this.ensureDirectories();
    this.loadDeploymentHistory();
  }

  ensureDirectories() {
    const dirs = [
      path.resolve(__dirname, this.config.logDirectory),
      path.resolve(__dirname, this.config.backupDirectory)
    ];
    
    dirs.forEach(dir => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
    });
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}\n`;
    console.log(logMessage.trim());
    
    const logFile = path.join(path.resolve(__dirname, this.config.logDirectory), 'pm2-deployer.log');
    fs.appendFileSync(logFile, logMessage);
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

  async deploy(environment = 'production', options = {}) {
    const deploymentId = this.generateDeploymentId();
    const startTime = Date.now();
    
    this.log(`🚀 Starting deployment ${deploymentId} to ${environment}...`);
    
    try {
      // Pre-deployment health check
      const preDeploymentHealth = await this.performHealthCheck();
      if (!preDeploymentHealth.healthy) {
        throw new Error(`Pre-deployment health check failed: ${preDeploymentHealth.issues.join(', ')}`);
      }

      // Create deployment backup
      const backupPath = await this.createDeploymentBackup(deploymentId);
      
      // Pre-deployment tasks
      await this.runPreDeploymentTasks(environment, options);
      
      // Deploy with PM2
      const deployResult = await this.executePM2Deploy(environment, options);
      if (!deployResult.success) {
        throw new Error(`PM2 deployment failed: ${deployResult.error}`);
      }

      // Wait for services to stabilize
      await this.waitForStabilization();
      
      // Post-deployment health check
      const postDeploymentHealth = await this.performHealthCheck();
      if (!postDeploymentHealth.healthy) {
        this.log(`⚠️ Post-deployment health check failed, initiating rollback...`, 'WARN');
        await this.rollback(deploymentId);
        throw new Error(`Post-deployment health check failed: ${postDeploymentHealth.issues.join(', ')}`);
      }

      // Post-deployment tasks
      await this.runPostDeploymentTasks(environment, options);
      
      // Record successful deployment
      const deployment = {
        id: deploymentId,
        timestamp: new Date().toISOString(),
        environment,
        status: 'success',
        duration: Date.now() - startTime,
        backupPath,
        options,
        preDeploymentHealth,
        postDeploymentHealth
      };
      
      this.deploymentHistory.push(deployment);
      this.saveDeploymentHistory();
      
      // Create rollback point
      await this.createRollbackPoint(deploymentId);
      
      this.log(`✅ Deployment ${deploymentId} completed successfully in ${deployment.duration}ms`);
      return deployment;
      
    } catch (error) {
      this.log(`❌ Deployment ${deploymentId} failed: ${error.message}`, 'ERROR');
      
      // Record failed deployment
      const deployment = {
        id: deploymentId,
        timestamp: new Date().toISOString(),
        environment,
        status: 'failed',
        duration: Date.now() - startTime,
        error: error.message,
        options
      };
      
      this.deploymentHistory.push(deployment);
      this.saveDeploymentHistory();
      
      throw error;
    }
  }

  generateDeploymentId() {
    const timestamp = Date.now();
    const random = Math.random().toString(36).substring(2, 8);
    return `deploy-${timestamp}-${random}`;
  }

  async createDeploymentBackup(deploymentId) {
    this.log(`💾 Creating deployment backup for ${deploymentId}...`);
    
    const backupDir = path.join(path.resolve(__dirname, this.config.backupDirectory), `deployment-${deploymentId}`);
    fs.mkdirSync(backupDir, { recursive: true });
    
    try {
      // Backup PM2 configuration
      const ecosystemPath = path.resolve(__dirname, this.config.ecosystemFile);
      const configBackup = path.join(backupDir, 'ecosystem.config.js');
      fs.copyFileSync(ecosystemPath, configBackup);
      
      // Backup current process list
      const processList = await this.executeCommand('pm2 save');
      if (processList.success) {
        const processBackup = path.join(backupDir, 'process-list.json');
        fs.writeFileSync(processBackup, processList.output);
      }
      
      // Backup logs
      const logsBackup = path.join(backupDir, 'logs');
      const logsPath = path.resolve(__dirname, this.config.logDirectory);
      if (fs.existsSync(logsPath)) {
        await this.executeCommand(`cp -r "${logsPath}" "${logsBackup}"`);
      }
      
      // Backup package files
      const packageBackup = path.join(backupDir, 'package');
      const packagePath = path.resolve(__dirname, '../package.json');
      if (fs.existsSync(packagePath)) {
        fs.mkdirSync(packageBackup, { recursive: true });
        fs.copyFileSync(packagePath, path.join(packageBackup, 'package.json'));
        fs.copyFileSync(path.resolve(__dirname, '../package-lock.json'), path.join(packageBackup, 'package-lock.json'));
      }
      
      this.log(`✅ Deployment backup created: ${backupDir}`);
      return backupDir;
      
    } catch (error) {
      this.log(`❌ Failed to create deployment backup: ${error.message}`, 'ERROR');
      throw error;
    }
  }

  async runPreDeploymentTasks(environment, options) {
    this.log('🔧 Running pre-deployment tasks...');
    
    try {
      // Run tests if specified
      if (options.runTests !== false) {
        this.log('🧪 Running test suite...');
        const testResult = await this.executeCommand('npm test');
        if (!testResult.success) {
          throw new Error(`Tests failed: ${testResult.error}`);
        }
      }
      
      // Run linting if specified
      if (options.runLint !== false) {
        this.log('🔍 Running linting...');
        const lintResult = await this.executeCommand('npm run lint');
        if (!lintResult.success) {
          throw new Error(`Linting failed: ${lintResult.error}`);
        }
      }
      
      // Build application if specified
      if (options.build !== false) {
        this.log('🏗️ Building application...');
        const buildResult = await this.executeCommand('npm run build');
        if (!buildResult.success) {
          throw new Error(`Build failed: ${buildResult.error}`);
        }
      }
      
      // Install dependencies if specified
      if (options.installDeps !== false) {
        this.log('📦 Installing dependencies...');
        const installResult = await this.executeCommand('npm install');
        if (!installResult.success) {
          throw new Error(`Dependency installation failed: ${installResult.error}`);
        }
      }
      
      this.log('✅ Pre-deployment tasks completed successfully');
      
    } catch (error) {
      this.log(`❌ Pre-deployment tasks failed: ${error.message}`, 'ERROR');
      throw error;
    }
  }

  async executePM2Deploy(environment, options) {
    this.log(`🚀 Executing PM2 deployment to ${environment}...`);
    
    try {
      const ecosystemPath = path.resolve(__dirname, this.config.ecosystemFile);
      
      if (options.strategy === 'rolling') {
        return await this.rollingDeploy(ecosystemPath, environment);
      } else if (options.strategy === 'blue-green') {
        return await this.blueGreenDeploy(ecosystemPath, environment);
      } else {
        return await this.standardDeploy(ecosystemPath, environment);
      }
      
    } catch (error) {
      this.log(`❌ PM2 deployment failed: ${error.message}`, 'ERROR');
      throw error;
    }
  }

  async standardDeploy(ecosystemPath, environment) {
    this.log('🔄 Performing standard deployment...');
    
    // Stop current processes
    await this.executeCommand('pm2 stop all');
    
    // Start new ecosystem
    const result = await this.executeCommand(`pm2 start ${ecosystemPath} --env ${environment}`);
    
    if (!result.success) {
      throw new Error(`Failed to start ecosystem: ${result.error}`);
    }
    
    return { success: true, output: result.output };
  }

  async rollingDeploy(ecosystemPath, environment) {
    this.log('🔄 Performing rolling deployment...');
    
    const status = await this.executeCommand('pm2 status --json');
    if (!status.success) {
      throw new Error('Failed to get PM2 status');
    }
    
    try {
      const processes = JSON.parse(status.output);
      const appProcesses = processes.filter(p => p.pm2_env.name !== 'PM2');
      
      for (const process of appProcesses) {
        this.log(`🔄 Rolling update for ${process.name}...`);
        
        // Restart individual process
        const restartResult = await this.executeCommand(`pm2 restart ${process.name}`);
        if (!restartResult.success) {
          throw new Error(`Failed to restart ${process.name}: ${restartResult.error}`);
        }
        
        // Wait for process to stabilize
        await this.waitForProcessStabilization(process.name);
      }
      
      return { success: true, output: 'Rolling deployment completed' };
      
    } catch (error) {
      throw new Error(`Rolling deployment failed: ${error.message}`);
    }
  }

  async blueGreenDeploy(ecosystemPath, environment) {
    this.log('🔄 Performing blue-green deployment...');
    
    try {
      // Create blue environment
      const blueResult = await this.executeCommand(`pm2 start ${ecosystemPath} --env ${environment} --name blue`);
      if (!blueResult.success) {
        throw new Error(`Failed to start blue environment: ${blueResult.error}`);
      }
      
      // Wait for blue environment to stabilize
      await this.waitForStabilization();
      
      // Health check blue environment
      const blueHealth = await this.performHealthCheck();
      if (!blueHealth.healthy) {
        await this.executeCommand('pm2 stop blue');
        throw new Error(`Blue environment health check failed: ${blueHealth.issues.join(', ')}`);
      }
      
      // Switch traffic to blue environment
      await this.executeCommand('pm2 stop all --name green');
      await this.executeCommand('pm2 restart blue --name production');
      
      return { success: true, output: 'Blue-green deployment completed' };
      
    } catch (error) {
      throw new Error(`Blue-green deployment failed: ${error.message}`);
    }
  }

  async waitForStabilization(timeout = 60000) {
    this.log('⏳ Waiting for services to stabilize...');
    
    const startTime = Date.now();
    const checkInterval = 5000; // Check every 5 seconds
    
    while (Date.now() - startTime < timeout) {
      const health = await this.performHealthCheck();
      
      if (health.healthy) {
        this.log('✅ Services stabilized successfully');
        return true;
      }
      
      this.log(`⏳ Services still stabilizing... (${health.issues.length} issues remaining)`);
      await this.sleep(checkInterval);
    }
    
    throw new Error('Services failed to stabilize within timeout period');
  }

  async waitForProcessStabilization(processName, timeout = 30000) {
    const startTime = Date.now();
    const checkInterval = 2000;
    
    while (Date.now() - startTime < timeout) {
      const status = await this.executeCommand(`pm2 show ${processName} --json`);
      if (status.success) {
        try {
          const process = JSON.parse(status.output);
          if (process.pm2_env.status === 'online' && process.monit.memory < 100 * 1024 * 1024) {
            return true;
          }
        } catch (error) {
          // Continue waiting
        }
      }
      
      await this.sleep(checkInterval);
    }
    
    throw new Error(`Process ${processName} failed to stabilize within timeout period`);
  }

  async performHealthCheck() {
    this.log('🏥 Performing health check...');
    
    try {
      const status = await this.executeCommand('pm2 status --json');
      if (!status.success) {
        return { healthy: false, issues: ['Failed to get PM2 status'] };
      }
      
      const processes = JSON.parse(status.output);
      const appProcesses = processes.filter(p => p.pm2_env.name !== 'PM2');
      
      const issues = [];
      
      for (const process of appProcesses) {
        // Check if process is running
        if (process.pm2_env.status !== 'online') {
          issues.push(`${process.name}: Process not running (${process.pm2_env.status})`);
          continue;
        }
        
        // Check memory usage
        const memoryMB = process.monit.memory / (1024 * 1024);
        if (memoryMB > 512) {
          issues.push(`${process.name}: High memory usage (${memoryMB.toFixed(2)}MB)`);
        }
        
        // Check CPU usage
        if (process.monit.cpu > 80) {
          issues.push(`${process.name}: High CPU usage (${process.monit.cpu}%)`);
        }
        
        // Check restart count
        if (process.pm2_env.restart_time > 3) {
          issues.push(`${process.name}: Excessive restarts (${process.pm2_env.restart_time})`);
        }
      }
      
      const healthy = issues.length === 0;
      
      if (healthy) {
        this.log('✅ Health check passed');
      } else {
        this.log(`⚠️ Health check failed: ${issues.length} issues found`);
      }
      
      return { healthy, issues, processCount: appProcesses.length };
      
    } catch (error) {
      this.log(`❌ Health check failed: ${error.message}`, 'ERROR');
      return { healthy: false, issues: [`Health check error: ${error.message}`] };
    }
  }

  async rollback(deploymentId) {
    this.log(`🔄 Initiating rollback for deployment ${deploymentId}...`);
    
    try {
      // Find the deployment backup
      const backupDir = path.join(path.resolve(__dirname, this.config.backupDirectory), `deployment-${deploymentId}`);
      if (!fs.existsSync(backupDir)) {
        throw new Error(`Backup directory not found: ${backupDir}`);
      }
      
      // Stop current processes
      await this.executeCommand('pm2 stop all');
      
      // Restore ecosystem configuration
      const configBackup = path.join(backupDir, 'ecosystem.config.js');
      const ecosystemPath = path.resolve(__dirname, this.config.ecosystemFile);
      fs.copyFileSync(configBackup, ecosystemPath);
      
      // Restore process list
      const processBackup = path.join(backupDir, 'process-list.json');
      if (fs.existsSync(processBackup)) {
        const processList = JSON.parse(fs.readFileSync(processBackup, 'utf8'));
        await this.executeCommand('pm2 resurrect');
      }
      
      // Start ecosystem
      const result = await this.executeCommand(`pm2 start ${ecosystemPath}`);
      if (!result.success) {
        throw new Error(`Failed to start ecosystem after rollback: ${result.error}`);
      }
      
      // Wait for stabilization
      await this.waitForStabilization();
      
      this.log(`✅ Rollback completed successfully for deployment ${deploymentId}`);
      
      // Record rollback
      this.rollbackPoints.push({
        deploymentId,
        timestamp: new Date().toISOString(),
        backupPath: backupDir
      });
      
      return { success: true, deploymentId };
      
    } catch (error) {
      this.log(`❌ Rollback failed: ${error.message}`, 'ERROR');
      throw error;
    }
  }

  async runPostDeploymentTasks(environment, options) {
    this.log('🔧 Running post-deployment tasks...');
    
    try {
      // Run smoke tests if specified
      if (options.smokeTests !== false) {
        this.log('🚬 Running smoke tests...');
        const smokeResult = await this.executeCommand('npm run test:smoke');
        if (!smokeResult.success) {
          throw new Error(`Smoke tests failed: ${smokeResult.error}`);
        }
      }
      
      // Warm up caches if specified
      if (options.warmCache !== false) {
        this.log('🔥 Warming up caches...');
        await this.warmUpCaches();
      }
      
      // Update monitoring if specified
      if (options.updateMonitoring !== false) {
        this.log('📊 Updating monitoring...');
        await this.updateMonitoring();
      }
      
      this.log('✅ Post-deployment tasks completed successfully');
      
    } catch (error) {
      this.log(`❌ Post-deployment tasks failed: ${error.message}`, 'ERROR');
      throw error;
    }
  }

  async warmUpCaches() {
    // Implement cache warming logic
    this.log('🔥 Cache warming completed');
  }

  async updateMonitoring() {
    // Implement monitoring update logic
    this.log('📊 Monitoring updated');
  }

  async createRollbackPoint(deploymentId) {
    this.log(`💾 Creating rollback point for ${deploymentId}...`);
    
    const rollbackPoint = {
      deploymentId,
      timestamp: new Date().toISOString(),
      ecosystemConfig: fs.readFileSync(path.resolve(__dirname, this.config.ecosystemFile), 'utf8'),
      processList: await this.executeCommand('pm2 save')
    };
    
    this.rollbackPoints.push(rollbackPoint);
    this.saveRollbackPoints();
    
    this.log(`✅ Rollback point created for ${deploymentId}`);
  }

  async listDeployments() {
    return this.deploymentHistory;
  }

  async getDeploymentStatus(deploymentId) {
    return this.deploymentHistory.find(d => d.id === deploymentId);
  }

  async listRollbackPoints() {
    return this.rollbackPoints;
  }

  loadDeploymentHistory() {
    const historyFile = path.join(path.resolve(__dirname, this.config.logDirectory), 'deployment-history.json');
    if (fs.existsSync(historyFile)) {
      try {
        this.deploymentHistory = JSON.parse(fs.readFileSync(historyFile, 'utf8'));
      } catch (error) {
        this.log(`⚠️ Failed to load deployment history: ${error.message}`, 'WARN');
        this.deploymentHistory = [];
      }
    }
  }

  saveDeploymentHistory() {
    const historyFile = path.join(path.resolve(__dirname, this.config.logDirectory), 'deployment-history.json');
    fs.writeFileSync(historyFile, JSON.stringify(this.deploymentHistory, null, 2));
  }

  saveRollbackPoints() {
    const rollbackFile = path.join(path.resolve(__dirname, this.config.logDirectory), 'rollback-points.json');
    fs.writeFileSync(rollbackFile, JSON.stringify(this.rollbackPoints, null, 2));
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async showHelp() {
    console.log(`
🚀 PM2 Smart Deployer - Intelligent Deployment Management

Usage: node pm2-smart-deployer.js [command] [options]

Commands:
  deploy <env>     - Deploy to specified environment
  rollback <id>    - Rollback to specific deployment
  status           - Show deployment status
  history          - Show deployment history
  rollbacks        - Show available rollback points
  health           - Perform health check
  help             - Show this help message

Deployment Options:
  --strategy       - Deployment strategy (standard|rolling|blue-green)
  --runTests       - Run tests before deployment (default: true)
  --runLint        - Run linting before deployment (default: true)
  --build          - Build application before deployment (default: true)
  --installDeps    - Install dependencies before deployment (default: true)
  --smokeTests     - Run smoke tests after deployment (default: true)
  --warmCache      - Warm up caches after deployment (default: true)
  --updateMonitoring - Update monitoring after deployment (default: true)

Examples:
  node pm2-smart-deployer.js deploy production
  node pm2-smart-deployer.js deploy staging --strategy rolling
  node pm2-smart-deployer.js rollback deploy-1234567890-abc123
  node pm2-smart-deployer.js status
  node pm2-smart-deployer.js health
`);
  }
}

// CLI handling
const deployer = new PM2SmartDeployer();
const command = process.argv[2];

(async () => {
  try {
    switch (command) {
      case 'deploy':
        const environment = process.argv[3] || 'production';
        const options = parseOptions(process.argv.slice(4));
        await deployer.deploy(environment, options);
        break;
      case 'rollback':
        const deploymentId = process.argv[3];
        if (!deploymentId) {
          console.error('❌ Deployment ID required for rollback');
          process.exit(1);
        }
        await deployer.rollback(deploymentId);
        break;
      case 'status':
        const deployments = await deployer.listDeployments();
        console.log(JSON.stringify(deployments, null, 2));
        break;
      case 'history':
        const history = await deployer.listDeployments();
        console.log(JSON.stringify(history, null, 2));
        break;
      case 'rollbacks':
        const rollbacks = await deployer.listRollbackPoints();
        console.log(JSON.stringify(rollbacks, null, 2));
        break;
      case 'health':
        const health = await deployer.performHealthCheck();
        console.log(JSON.stringify(health, null, 2));
        break;
      case 'help':
      default:
        deployer.showHelp();
        break;
    }
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
})();

function parseOptions(args) {
  const options = {};
  
  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (arg.startsWith('--')) {
      const key = arg.substring(2);
      const value = args[i + 1];
      
      if (value && !value.startsWith('--')) {
        options[key] = value === 'true' ? true : value === 'false' ? false : value;
        i++; // Skip next argument
      } else {
        options[key] = true;
      }
    }
  }
  
  return options;
}

// Graceful shutdown
process.on('SIGINT', async () => {
  console.log('\n🛑 Shutting down PM2 smart deployer...');
  process.exit(0);
});

process.on('SIGTERM', async () => {
  console.log('\n🛑 Shutting down PM2 smart deployer...');
  process.exit(0);
});