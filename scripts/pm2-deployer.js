#!/usr/bin/env node

import { exec } from 'child_process';
import { promisify } from 'util';
import fs from 'fs';
import path from 'path';
import http from 'http';
import https from 'https';

const execAsync = promisify(exec);

class ZionDeployer {
  constructor() {
    this.config = {
      environments: {
        staging: {
          name: 'staging',
          branch: 'develop',
          port: 3001,
          healthEndpoint: 'http://localhost:3001/health',
          maxDeployTime: 300000, // 5 minutes
          rollbackThreshold: 3, // Failed health checks before rollback
          autoRollback: true
        },
        production: {
          name: 'production',
          branch: 'main',
          port: 3000,
          healthEndpoint: 'http://localhost:3000/health',
          maxDeployTime: 600000, // 10 minutes
          rollbackThreshold: 2, // More strict for production
          autoRollback: true
        }
      },
      logDir: './logs',
      backupDir: './backups',
      deploymentHistory: []
    };
    
    this.init();
  }

  async init() {
    console.log('🚀 Zion Deployer Starting...');
    this.ensureDirectories();
    this.loadDeploymentHistory();
  }

  ensureDirectories() {
    [this.config.logDir, this.config.backupDir].forEach(dir => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
    });
  }

  loadDeploymentHistory() {
    const historyFile = path.join(this.config.logDir, 'deployment-history.json');
    if (fs.existsSync(historyFile)) {
      try {
        this.config.deploymentHistory = JSON.parse(fs.readFileSync(historyFile, 'utf8'));
      } catch (error) {
        console.warn('⚠️  Could not load deployment history:', error.message);
        this.config.deploymentHistory = [];
      }
    }
  }

  saveDeploymentHistory() {
    const historyFile = path.join(this.config.logDir, 'deployment-history.json');
    fs.writeFileSync(historyFile, JSON.stringify(this.config.deploymentHistory, null, 2));
  }

  async deploy(environment, options = {}) {
    const env = this.config.environments[environment];
    if (!env) {
      throw new Error(`Unknown environment: ${environment}`);
    }

    const deployment = {
      id: Date.now(),
      environment: environment,
      branch: env.branch,
      startTime: new Date(),
      status: 'in_progress',
      steps: [],
      options
    };

    console.log(`🚀 Starting deployment to ${environment} (${env.branch})`);
    
    try {
      // Pre-deployment checks
      await this.preDeploymentChecks(env, deployment);
      
      // Backup current deployment
      await this.backupCurrentDeployment(env, deployment);
      
      // Pull latest code
      await this.pullLatestCode(env, deployment);
      
      // Install dependencies
      await this.installDependencies(deployment);
      
      // Build application
      await this.buildApplication(deployment);
      
      // Deploy to PM2
      await this.deployToPM2(env, deployment);
      
      // Health checks
      await this.performHealthChecks(env, deployment);
      
      // Post-deployment tasks
      await this.postDeploymentTasks(env, deployment);
      
      deployment.status = 'completed';
      deployment.endTime = new Date();
      deployment.duration = deployment.endTime - deployment.startTime;
      
      console.log(`✅ Deployment to ${environment} completed successfully in ${deployment.duration}ms`);
      
    } catch (error) {
      deployment.status = 'failed';
      deployment.error = error.message;
      deployment.endTime = new Date();
      deployment.duration = deployment.endTime - deployment.startTime;
      
      console.error(`❌ Deployment to ${environment} failed:`, error.message);
      
      // Auto-rollback if enabled
      if (env.autoRollback) {
        await this.rollback(environment, deployment);
      }
    } finally {
      this.config.deploymentHistory.push(deployment);
      this.saveDeploymentHistory();
      this.logDeployment(deployment);
    }
    
    return deployment;
  }

  async preDeploymentChecks(env, deployment) {
    console.log('🔍 Performing pre-deployment checks...');
    
    // Check if target port is available
    await this.checkPortAvailability(env.port);
    
    // Check git status
    await this.checkGitStatus();
    
    // Check for uncommitted changes
    await this.checkUncommittedChanges();
    
    this.addDeploymentStep(deployment, 'pre_deployment_checks', 'completed');
  }

  async checkPortAvailability(port) {
    return new Promise((resolve, reject) => {
      const server = http.createServer();
      server.listen(port, () => {
        server.close();
        resolve();
      });
      server.on('error', (error) => {
        reject(new Error(`Port ${port} is not available: ${error.message}`));
      });
    });
  }

  async checkGitStatus() {
    try {
      const { stdout } = await execAsync('git status --porcelain');
      if (stdout.trim()) {
        throw new Error('Working directory has uncommitted changes');
      }
    } catch (error) {
      throw new Error(`Git status check failed: ${error.message}`);
    }
  }

  async checkUncommittedChanges() {
    try {
      const { stdout } = await execAsync('git diff --name-only');
      if (stdout.trim()) {
        throw new Error('Working directory has uncommitted changes');
      }
    } catch (error) {
      throw new Error(`Git diff check failed: ${error.message}`);
    }
  }

  async backupCurrentDeployment(env, deployment) {
    console.log('💾 Creating backup of current deployment...');
    
    const backupPath = path.join(this.config.backupDir, `backup-${environment}-${Date.now()}`);
    
    try {
      // Create backup directory
      fs.mkdirSync(backupPath, { recursive: true });
      
      // Backup PM2 processes
      const { stdout } = await execAsync('pm2 jlist');
      fs.writeFileSync(path.join(backupPath, 'pm2-processes.json'), stdout);
      
      // Backup build artifacts
      if (fs.existsSync('dist')) {
        await execAsync(`cp -r dist ${backupPath}/`);
      }
      
      if (fs.existsSync('server/dist')) {
        await execAsync(`cp -r server/dist ${backupPath}/`);
      }
      
      deployment.backupPath = backupPath;
      this.addDeploymentStep(deployment, 'backup', 'completed');
      
    } catch (error) {
      throw new Error(`Backup failed: ${error.message}`);
    }
  }

  async pullLatestCode(env, deployment) {
    console.log(`📥 Pulling latest code from ${env.branch}...`);
    
    try {
      // Fetch latest changes
      await execAsync('git fetch origin');
      
      // Checkout target branch
      await execAsync(`git checkout ${env.branch}`);
      
      // Pull latest changes
      await execAsync(`git pull origin ${env.branch}`);
      
      // Get commit info
      const { stdout: commitHash } = await execAsync('git rev-parse HEAD');
      const { stdout: commitMessage } = await execAsync('git log -1 --pretty=format:"%s"');
      
      deployment.commit = {
        hash: commitHash.trim(),
        message: commitMessage.trim()
      };
      
      this.addDeploymentStep(deployment, 'pull_code', 'completed');
      
    } catch (error) {
      throw new Error(`Code pull failed: ${error.message}`);
    }
  }

  async installDependencies(deployment) {
    console.log('📦 Installing dependencies...');
    
    try {
      // Install root dependencies
      await execAsync('npm install');
      
      // Install server dependencies
      await execAsync('cd server && npm install');
      
      this.addDeploymentStep(deployment, 'install_dependencies', 'completed');
      
    } catch (error) {
      throw new Error(`Dependency installation failed: ${error.message}`);
    }
  }

  async buildApplication(deployment) {
    console.log('🔨 Building application...');
    
    try {
      // Build frontend
      await execAsync('npm run build');
      
      // Build backend
      await execAsync('cd server && npm run build');
      
      this.addDeploymentStep(deployment, 'build', 'completed');
      
    } catch (error) {
      throw new Error(`Build failed: ${error.message}`);
    }
  }

  async deployToPM2(env, deployment) {
    console.log(`🚀 Deploying to PM2 (${env.name})...`);
    
    try {
      // Stop existing processes if running
      await execAsync('pm2 stop all');
      
      // Delete existing processes
      await execAsync('pm2 delete all');
      
      // Start new processes
      await execAsync(`pm2 start ecosystem.config.cjs --env ${env.name}`);
      
      // Save PM2 configuration
      await execAsync('pm2 save');
      
      this.addDeploymentStep(deployment, 'pm2_deploy', 'completed');
      
    } catch (error) {
      throw new Error(`PM2 deployment failed: ${error.message}`);
    }
  }

  async performHealthChecks(env, deployment) {
    console.log('🏥 Performing health checks...');
    
    const maxAttempts = 30; // 30 attempts with 10s intervals = 5 minutes max
    let attempts = 0;
    let healthy = false;
    
    while (attempts < maxAttempts && !healthy) {
      attempts++;
      console.log(`🔍 Health check attempt ${attempts}/${maxAttempts}...`);
      
      try {
        healthy = await this.checkHealth(env.healthEndpoint);
        if (healthy) {
          console.log('✅ Health check passed');
          break;
        }
      } catch (error) {
        console.log(`❌ Health check failed: ${error.message}`);
      }
      
      if (attempts < maxAttempts) {
        await this.sleep(10000); // Wait 10 seconds between attempts
      }
    }
    
    if (!healthy) {
      throw new Error(`Health checks failed after ${maxAttempts} attempts`);
    }
    
    this.addDeploymentStep(deployment, 'health_checks', 'completed');
  }

  async checkHealth(endpoint) {
    return new Promise((resolve, reject) => {
      const url = new URL(endpoint);
      const client = url.protocol === 'https:' ? https : http;
      
      const req = client.request(url, { timeout: 5000 }, (res) => {
        if (res.statusCode >= 200 && res.statusCode < 400) {
          resolve(true);
        } else {
          resolve(false);
        }
      });
      
      req.on('error', () => resolve(false));
      req.on('timeout', () => resolve(false));
      req.end();
    });
  }

  async postDeploymentTasks(env, deployment) {
    console.log('🔧 Performing post-deployment tasks...');
    
    try {
      // Run any post-deployment scripts
      if (fs.existsSync('scripts/post-deploy.js')) {
        await execAsync('node scripts/post-deploy.js');
      }
      
      // Update deployment status
      await this.updateDeploymentStatus(env, 'deployed');
      
      this.addDeploymentStep(deployment, 'post_deployment', 'completed');
      
    } catch (error) {
      console.warn('⚠️  Post-deployment tasks failed:', error.message);
      // Don't fail the deployment for post-deployment task failures
    }
  }

  async rollback(environment, deployment) {
    console.log(`🔄 Rolling back deployment to ${environment}...`);
    
    try {
      const env = this.config.environments[environment];
      
      // Stop current processes
      await execAsync('pm2 stop all');
      await execAsync('pm2 delete all');
      
      // Restore from backup
      if (deployment.backupPath && fs.existsSync(deployment.backupPath)) {
        await this.restoreFromBackup(deployment.backupPath);
      }
      
      // Restart previous processes
      await execAsync('pm2 start ecosystem.config.cjs --env production');
      await execAsync('pm2 save');
      
      // Verify rollback
      await this.performHealthChecks(env, deployment);
      
      console.log(`✅ Rollback to ${environment} completed successfully`);
      
      this.addDeploymentStep(deployment, 'rollback', 'completed');
      
    } catch (error) {
      console.error(`❌ Rollback failed: ${error.message}`);
      throw error;
    }
  }

  async restoreFromBackup(backupPath) {
    try {
      // Restore build artifacts
      if (fs.existsSync(path.join(backupPath, 'dist'))) {
        await execAsync(`rm -rf dist && cp -r ${backupPath}/dist .`);
      }
      
      if (fs.existsSync(path.join(backupPath, 'server/dist'))) {
        await execAsync(`rm -rf server/dist && cp -r ${backupPath}/server/dist server/`);
      }
      
      // Restore PM2 processes
      if (fs.existsSync(path.join(backupPath, 'pm2-processes.json'))) {
        const processes = JSON.parse(fs.readFileSync(path.join(backupPath, 'pm2-processes.json'), 'utf8'));
        // Note: Full PM2 process restoration would require more complex logic
      }
      
    } catch (error) {
      throw new Error(`Backup restoration failed: ${error.message}`);
    }
  }

  async updateDeploymentStatus(env, status) {
    try {
      // This could update external systems, databases, etc.
      console.log(`📊 Updated deployment status: ${env.name} -> ${status}`);
    } catch (error) {
      console.warn('⚠️  Failed to update deployment status:', error.message);
    }
  }

  addDeploymentStep(deployment, step, status) {
    deployment.steps.push({
      step,
      status,
      timestamp: new Date()
    });
  }

  logDeployment(deployment) {
    const logPath = path.join(this.config.logDir, `deployment-${deployment.id}.json`);
    fs.writeFileSync(logPath, JSON.stringify(deployment, null, 2));
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async getDeploymentHistory(environment = null) {
    if (environment) {
      return this.config.deploymentHistory.filter(d => d.environment === environment);
    }
    return this.config.deploymentHistory;
  }

  async getDeploymentStatus(environment) {
    const env = this.config.environments[environment];
    if (!env) {
      throw new Error(`Unknown environment: ${environment}`);
    }
    
    try {
      const { stdout } = await execAsync('pm2 jlist');
      const processes = JSON.parse(stdout);
      
      const envProcesses = processes.filter(p => 
        p.name.includes(environment) || p.pm2_env.NODE_ENV === environment
      );
      
      return {
        environment,
        timestamp: new Date().toISOString(),
        processes: envProcesses.length,
        status: envProcesses.every(p => p.pm2_env.status === 'online') ? 'healthy' : 'unhealthy',
        details: envProcesses.map(p => ({
          name: p.name,
          status: p.pm2_env.status,
          memory: p.monit.memory,
          cpu: p.monit.cpu,
          uptime: p.pm2_env.pm_uptime
        }))
      };
    } catch (error) {
      return {
        environment,
        timestamp: new Date().toISOString(),
        error: error.message
      };
    }
  }
}

// Export the deployer class
export default ZionDeployer;

// If run directly, provide CLI interface
if (import.meta.url === `file://${process.argv[1]}`) {
  const deployer = new ZionDeployer();
  
  const command = process.argv[2];
  const environment = process.argv[3];
  
  if (command === 'deploy' && environment) {
    deployer.deploy(environment)
      .then(result => {
        console.log('Deployment result:', result);
        process.exit(result.status === 'completed' ? 0 : 1);
      })
      .catch(error => {
        console.error('Deployment failed:', error.message);
        process.exit(1);
      });
  } else if (command === 'status' && environment) {
    deployer.getDeploymentStatus(environment)
      .then(status => {
        console.log('Deployment status:', JSON.stringify(status, null, 2));
      })
      .catch(error => {
        console.error('Status check failed:', error.message);
        process.exit(1);
      });
  } else if (command === 'history') {
    deployer.getDeploymentHistory(environment)
      .then(history => {
        console.log('Deployment history:', JSON.stringify(history, null, 2));
      })
      .catch(error => {
        console.error('History retrieval failed:', error.message);
        process.exit(1);
      });
  } else {
    console.log('Usage:');
    console.log('  node pm2-deployer.js deploy <environment>');
    console.log('  node pm2-deployer.js status <environment>');
    console.log('  node pm2-deployer.js history [environment]');
    console.log('');
    console.log('Environments:', Object.keys(deployer.config.environments).join(', '));
  }
}