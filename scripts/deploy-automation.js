const { spawn, exec } = require('child_process');
const fs = require('fs').promises;
const path = require('path');
const https = require('https');
const http = require('http');

class DeployAutomation {
  constructor() {
    this.config = {
      environments: {
        staging: {
          name: 'staging',
          port: 3001,
          healthCheckUrl: 'http://localhost:3001/health',
          maxInstances: 2,
          memoryLimit: '1.5G',
          nodeEnv: 'staging'
        },
        production: {
          name: 'production',
          port: 3000,
          healthCheckUrl: 'http://localhost:3000/health',
          maxInstances: 'max',
          memoryLimit: '2G',
          nodeEnv: 'production'
        }
      },
      deployment: {
        buildTimeout: 300000, // 5 minutes
        healthCheckTimeout: 60000, // 1 minute
        rollbackThreshold: 3, // Failed health checks before rollback
        maxRollbacks: 3
      }
    };
    
    this.currentDeployment = null;
    this.deploymentHistory = [];
  }

  // Main deployment method
  async deploy(environment = 'staging') {
    if (!this.config.environments[environment]) {
      throw new Error(`Invalid environment: ${environment}`);
    }

    const envConfig = this.config.environments[environment];
    console.log(`🚀 Starting deployment to ${environment} environment...`);
    console.log(`📍 Target: ${envConfig.healthCheckUrl}`);
    console.log(`⚙️  Configuration: ${envConfig.maxInstances} instances, ${envConfig.memoryLimit} memory`);

    try {
      // Pre-deployment checks
      await this.preDeploymentChecks(environment);
      
      // Create deployment record
      this.currentDeployment = {
        id: this.generateDeploymentId(),
        environment,
        startTime: Date.now(),
        status: 'in_progress',
        steps: []
      };

      // Step 1: Build application
      await this.executeStep('Building application', () => this.buildApplication(environment));
      
      // Step 2: Backup current deployment
      await this.executeStep('Creating backup', () => this.createBackup(environment));
      
      // Step 3: Deploy new version
      await this.executeStep('Deploying new version', () => this.deployNewVersion(environment));
      
      // Step 4: Health checks
      await this.executeStep('Running health checks', () => this.runHealthChecks(environment));
      
      // Step 5: Post-deployment tasks
      await this.executeStep('Post-deployment tasks', () => this.postDeploymentTasks(environment));
      
      // Mark deployment as successful
      this.currentDeployment.status = 'successful';
      this.currentDeployment.endTime = Date.now();
      this.currentDeployment.duration = this.currentDeployment.endTime - this.currentDeployment.startTime;
      
      console.log(`✅ Deployment to ${environment} completed successfully!`);
      console.log(`⏱️  Duration: ${this.formatDuration(this.currentDeployment.duration)}`);
      
      // Add to history
      this.deploymentHistory.push(this.currentDeployment);
      
      return this.currentDeployment;
      
    } catch (error) {
      console.error(`❌ Deployment to ${environment} failed:`, error.message);
      
      // Mark deployment as failed
      this.currentDeployment.status = 'failed';
      this.currentDeployment.error = error.message;
      this.currentDeployment.endTime = Date.now();
      
      // Attempt rollback
      await this.rollback(environment);
      
      // Add to history
      this.deploymentHistory.push(this.currentDeployment);
      
      throw error;
    }
  }

  // Execute a deployment step
  async executeStep(stepName, stepFunction) {
    console.log(`📋 ${stepName}...`);
    
    const step = {
      name: stepName,
      startTime: Date.now(),
      status: 'running'
    };
    
    this.currentDeployment.steps.push(step);
    
    try {
      await stepFunction();
      
      step.status = 'completed';
      step.endTime = Date.now();
      step.duration = step.endTime - step.startTime;
      
      console.log(`✅ ${stepName} completed in ${this.formatDuration(step.duration)}`);
      
    } catch (error) {
      step.status = 'failed';
      step.error = error.message;
      step.endTime = Date.now();
      
      console.error(`❌ ${stepName} failed:`, error.message);
      throw error;
    }
  }

  // Pre-deployment checks
  async preDeploymentChecks(environment) {
    console.log('🔍 Running pre-deployment checks...');
    
    // Check if PM2 is running
    const pm2Status = await this.checkPM2Status();
    if (!pm2Status.running) {
      throw new Error('PM2 is not running');
    }
    
    // Check current environment health
    const currentHealth = await this.checkEnvironmentHealth(environment);
    if (!currentHealth.healthy) {
      throw new Error(`Current ${environment} environment is unhealthy: ${currentHealth.issues.join(', ')}`);
    }
    
    // Check disk space
    const diskSpace = await this.checkDiskSpace();
    if (diskSpace.usage > 90) {
      throw new Error(`Low disk space: ${diskSpace.usage}% used`);
    }
    
    // Check memory availability
    const memoryInfo = await this.checkMemoryAvailability();
    if (memoryInfo.available < 1024 * 1024 * 1024) { // Less than 1GB
      throw new Error(`Low memory available: ${this.formatBytes(memoryInfo.available)}`);
    }
    
    console.log('✅ Pre-deployment checks passed');
  }

  // Build application
  async buildApplication(environment) {
    const envConfig = this.config.environments[environment];
    
    console.log(`🔨 Building application for ${environment}...`);
    
    // Set environment variables
    process.env.NODE_ENV = envConfig.nodeEnv;
    
    // Install dependencies
    await this.runCommand('npm install', './');
    await this.runCommand('npm install', './server');
    
    // Build frontend
    console.log('🌐 Building frontend...');
    await this.runCommand('npm run build', './', this.config.deployment.buildTimeout);
    
    // Build backend
    console.log('🔧 Building backend...');
    await this.runCommand('npm run build', './server', this.config.deployment.buildTimeout);
    
    console.log('✅ Application build completed');
  }

  // Create backup of current deployment
  async createBackup(environment) {
    const backupDir = `./backups/${environment}_${Date.now()}`;
    
    console.log(`💾 Creating backup in ${backupDir}...`);
    
    await fs.mkdir(backupDir, { recursive: true });
    
    // Backup current PM2 processes
    await this.runCommand(`pm2 save ${backupDir}/pm2-backup.json`, './');
    
    // Backup current build files
    if (await this.pathExists('./dist')) {
      await this.runCommand(`cp -r ./dist ${backupDir}/frontend-backup`, './');
    }
    
    if (await this.pathExists('./server/dist')) {
      await this.runCommand(`cp -r ./server/dist ${backupDir}/backend-backup`, './');
    }
    
    console.log('✅ Backup created successfully');
  }

  // Deploy new version
  async deployNewVersion(environment) {
    const envConfig = this.config.environments[environment];
    
    console.log(`🚀 Deploying new version to ${environment}...`);
    
    // Stop current processes gracefully
    await this.runCommand('pm2 stop all', './');
    
    // Start new processes with new configuration
    await this.runCommand(`pm2 start ecosystem.config.js --env ${environment}`, './');
    
    // Wait for processes to start
    await this.waitForProcesses(environment);
    
    console.log('✅ New version deployed');
  }

  // Run health checks
  async runHealthChecks(environment) {
    const envConfig = this.config.environments[environment];
    
    console.log(`🏥 Running health checks for ${environment}...`);
    
    let failedChecks = 0;
    const maxChecks = 10;
    
    for (let i = 0; i < maxChecks; i++) {
      try {
        const health = await this.checkHealth(envConfig.healthCheckUrl);
        
        if (health.healthy) {
          console.log(`✅ Health check ${i + 1}/${maxChecks} passed`);
          failedChecks = 0;
        } else {
          failedChecks++;
          console.log(`⚠️  Health check ${i + 1}/${maxChecks} failed (${failedChecks}/${this.config.deployment.rollbackThreshold})`);
          
          if (failedChecks >= this.config.deployment.rollbackThreshold) {
            throw new Error(`Health checks failed: ${failedChecks} consecutive failures`);
          }
        }
        
        // Wait between checks
        await this.wait(2000);
        
      } catch (error) {
        failedChecks++;
        console.log(`❌ Health check ${i + 1}/${maxChecks} error: ${error.message}`);
        
        if (failedChecks >= this.config.deployment.rollbackThreshold) {
          throw new Error(`Health checks failed: ${failedChecks} consecutive failures`);
        }
      }
    }
    
    console.log('✅ All health checks passed');
  }

  // Post-deployment tasks
  async postDeploymentTasks(environment) {
    console.log('🔧 Running post-deployment tasks...');
    
    // Clean up old backups (keep last 5)
    await this.cleanupOldBackups(environment);
    
    // Update deployment metadata
    await this.updateDeploymentMetadata(environment);
    
    // Send deployment notifications
    await this.sendDeploymentNotification(environment, 'success');
    
    console.log('✅ Post-deployment tasks completed');
  }

  // Rollback deployment
  async rollback(environment) {
    console.log(`🔄 Rolling back ${environment} deployment...`);
    
    try {
      // Find latest backup
      const backup = await this.findLatestBackup(environment);
      
      if (!backup) {
        throw new Error('No backup found for rollback');
      }
      
      console.log(`📦 Rolling back to backup: ${backup}`);
      
      // Stop current processes
      await this.runCommand('pm2 stop all', './');
      
      // Restore from backup
      await this.restoreFromBackup(backup);
      
      // Restart processes
      await this.runCommand('pm2 start ecosystem.config.js --env production', './');
      
      // Verify rollback
      await this.runHealthChecks(environment);
      
      console.log('✅ Rollback completed successfully');
      
      // Send rollback notification
      await this.sendDeploymentNotification(environment, 'rollback');
      
    } catch (error) {
      console.error('❌ Rollback failed:', error.message);
      throw error;
    }
  }

  // Check PM2 status
  async checkPM2Status() {
    try {
      const result = await this.runCommand('pm2 ping', './');
      return { running: true, info: result };
    } catch (error) {
      return { running: false, error: error.message };
    }
  }

  // Check environment health
  async checkEnvironmentHealth(environment) {
    const envConfig = this.config.environments[environment];
    
    try {
      const health = await this.checkHealth(envConfig.healthCheckUrl);
      return health;
    } catch (error) {
      return { healthy: false, issues: [error.message] };
    }
  }

  // Check health endpoint
  async checkHealth(url) {
    return new Promise((resolve, reject) => {
      const client = url.startsWith('https') ? https : http;
      const timeout = setTimeout(() => {
        reject(new Error('Health check timeout'));
      }, 10000);
      
      const req = client.get(url, (res) => {
        clearTimeout(timeout);
        
        if (res.statusCode === 200) {
          let data = '';
          res.on('data', (chunk) => data += chunk);
          res.on('end', () => {
            try {
              const healthData = JSON.parse(data);
              resolve({
                healthy: healthData.status === 'healthy',
                data: healthData,
                issues: []
              });
            } catch (error) {
              resolve({
                healthy: res.statusCode === 200,
                data: { status: 'unknown' },
                issues: ['Invalid health check response']
              });
            }
          });
        } else {
          resolve({
            healthy: false,
            data: { status: 'unhealthy' },
            issues: [`HTTP ${res.statusCode}`]
          });
        }
      });
      
      req.on('error', (error) => {
        clearTimeout(timeout);
        reject(error);
      });
      
      req.setTimeout(10000, () => {
        clearTimeout(timeout);
        reject(new Error('Request timeout'));
      });
    });
  }

  // Check disk space
  async checkDiskSpace() {
    try {
      const result = await this.runCommand('df -h . | tail -1', './');
      const parts = result.trim().split(/\s+/);
      const usage = parseInt(parts[4].replace('%', ''));
      
      return { usage, available: 100 - usage };
    } catch (error) {
      return { usage: 0, available: 100 };
    }
  }

  // Check memory availability
  async checkMemoryAvailability() {
    try {
      const result = await this.runCommand('free -b | grep Mem', './');
      const parts = result.trim().split(/\s+/);
      const total = parseInt(parts[1]);
      const used = parseInt(parts[2]);
      const available = total - used;
      
      return { total, used, available };
    } catch (error) {
      return { total: 0, used: 0, available: 0 };
    }
  }

  // Wait for processes to start
  async waitForProcesses(environment) {
    const envConfig = this.config.environments[environment];
    const maxWait = 30000; // 30 seconds
    const startTime = Date.now();
    
    while (Date.now() - startTime < maxWait) {
      try {
        const health = await this.checkHealth(envConfig.healthCheckUrl);
        if (health.healthy) {
          return;
        }
      } catch (error) {
        // Process not ready yet
      }
      
      await this.wait(1000);
    }
    
    throw new Error('Processes failed to start within timeout');
  }

  // Clean up old backups
  async cleanupOldBackups(environment) {
    try {
      const backupDir = './backups';
      const backups = await fs.readdir(backupDir);
      
      // Filter backups for this environment
      const envBackups = backups
        .filter(backup => backup.startsWith(environment + '_'))
        .sort()
        .reverse();
      
      // Keep only last 5 backups
      if (envBackups.length > 5) {
        const toDelete = envBackups.slice(5);
        
        for (const backup of toDelete) {
          const backupPath = path.join(backupDir, backup);
          await fs.rm(backupPath, { recursive: true, force: true });
          console.log(`🗑️  Deleted old backup: ${backup}`);
        }
      }
    } catch (error) {
      console.warn('⚠️  Warning: Could not cleanup old backups:', error.message);
    }
  }

  // Find latest backup
  async findLatestBackup(environment) {
    try {
      const backupDir = './backups';
      const backups = await fs.readdir(backupDir);
      
      const envBackups = backups
        .filter(backup => backup.startsWith(environment + '_'))
        .sort()
        .reverse();
      
      return envBackups.length > 0 ? envBackups[0] : null;
    } catch (error) {
      return null;
    }
  }

  // Restore from backup
  async restoreFromBackup(backupName) {
    const backupPath = `./backups/${backupName}`;
    
    // Restore PM2 processes
    if (await this.pathExists(`${backupPath}/pm2-backup.json`)) {
      await this.runCommand(`pm2 resurrect ${backupPath}/pm2-backup.json`, './');
    }
    
    // Restore build files if needed
    if (await this.pathExists(`${backupPath}/frontend-backup`)) {
      await this.runCommand(`rm -rf ./dist && cp -r ${backupPath}/frontend-backup ./dist`, './');
    }
    
    if (await this.pathExists(`${backupPath}/backend-backup`)) {
      await this.runCommand(`rm -rf ./server/dist && cp -r ${backupPath}/backend-backup ./server/dist`, './');
    }
  }

  // Update deployment metadata
  async updateDeploymentMetadata(environment) {
    const metadata = {
      lastDeployment: {
        environment,
        timestamp: new Date().toISOString(),
        version: await this.getCurrentVersion(),
        commit: await this.getCurrentCommit()
      }
    };
    
    try {
      await fs.writeFile('./deployment-metadata.json', JSON.stringify(metadata, null, 2));
    } catch (error) {
      console.warn('⚠️  Warning: Could not update deployment metadata:', error.message);
    }
  }

  // Send deployment notification
  async sendDeploymentNotification(environment, status) {
    // This would integrate with your notification system
    // (Slack, email, etc.)
    console.log(`📢 Deployment notification: ${environment} - ${status}`);
  }

  // Get current version
  async getCurrentVersion() {
    try {
      const packageJson = await fs.readFile('./package.json', 'utf8');
      const pkg = JSON.parse(packageJson);
      return pkg.version;
    } catch (error) {
      return 'unknown';
    }
  }

  // Get current commit
  async getCurrentCommit() {
    try {
      const result = await this.runCommand('git rev-parse --short HEAD', './');
      return result.trim();
    } catch (error) {
      return 'unknown';
    }
  }

  // Utility methods
  async runCommand(command, cwd, timeout = 60000) {
    return new Promise((resolve, reject) => {
      const timer = setTimeout(() => {
        reject(new Error(`Command timeout: ${command}`));
      }, timeout);
      
      exec(command, { cwd }, (error, stdout, stderr) => {
        clearTimeout(timer);
        
        if (error) {
          reject(error);
          return;
        }
        
        resolve(stdout);
      });
    });
  }

  async pathExists(path) {
    try {
      await fs.access(path);
      return true;
    } catch {
      return false;
    }
  }

  wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  generateDeploymentId() {
    return `deploy_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  formatDuration(ms) {
    const seconds = Math.floor(ms / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    
    if (hours > 0) {
      return `${hours}h ${minutes % 60}m ${seconds % 60}s`;
    } else if (minutes > 0) {
      return `${minutes}m ${seconds % 60}s`;
    } else {
      return `${seconds}s`;
    }
  }

  formatBytes(bytes) {
    const sizes = ['B', 'KB', 'MB', 'GB'];
    if (bytes === 0) return '0 B';
    const i = Math.floor(Math.log(bytes) / Math.log(1024));
    return Math.round(bytes / Math.pow(1024, i) * 100) / 100 + ' ' + sizes[i];
  }

  // Get deployment history
  getDeploymentHistory() {
    return this.deploymentHistory;
  }

  // Get current deployment status
  getCurrentDeploymentStatus() {
    return this.currentDeployment;
  }
}

// CLI interface
if (require.main === module) {
  const automation = new DeployAutomation();
  const environment = process.argv[2] || 'staging';
  
  console.log(`🚀 Bolt Zion Deployment Automation`);
  console.log(`📍 Environment: ${environment}`);
  console.log(`⏰ Started at: ${new Date().toISOString()}`);
  console.log('');
  
  automation.deploy(environment)
    .then((result) => {
      console.log('');
      console.log('🎉 Deployment completed successfully!');
      process.exit(0);
    })
    .catch((error) => {
      console.log('');
      console.error('💥 Deployment failed!');
      process.exit(1);
    });
}

module.exports = DeployAutomation;