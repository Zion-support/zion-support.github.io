#!/usr/bin/env node

const { execSync, spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

class PM2SmartDeployer {
  constructor() {
    this.deploymentConfig = {
      environments: {
        development: {
          branch: 'develop',
          port: 3000,
          backendPort: 5000,
          autoRestart: true,
          healthCheck: true
        },
        staging: {
          branch: 'staging',
          port: 3001,
          backendPort: 5001,
          autoRestart: true,
          healthCheck: true
        },
        production: {
          branch: 'main',
          port: 3000,
          backendPort: 5000,
          autoRestart: true,
          healthCheck: true,
          loadBalancing: true
        }
      },
      healthCheckEndpoints: {
        frontend: '/health',
        backend: '/api/health'
      }
    };
    
    this.logFile = path.join(process.cwd(), 'automation', 'logs', 'pm2-smart-deployer.log');
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
        stdio: 'pipe',
        ...options
      });
      return { success: true, output: result };
    } catch (error) {
      return { success: false, error: error.message };
    }
    }

  async checkGitStatus() {
    this.log('🔍 Checking Git repository status...');
    
    try {
      // Check if we're in a git repository
      const gitCheck = await this.executeCommand('git status');
      if (!gitCheck.success) {
        throw new Error('Not in a git repository');
      }

      // Check for uncommitted changes
      const status = await this.executeCommand('git status --porcelain');
      if (status.success && status.output.trim()) {
        this.log('⚠️ Uncommitted changes detected. Consider committing before deployment.');
        return false;
      }

      // Check if we're on the correct branch
      const currentBranch = await this.executeCommand('git branch --show-current');
      this.log(`✅ Current branch: ${currentBranch.output.trim()}`);
      
      return true;
    } catch (error) {
      this.log(`❌ Git status check failed: ${error.message}`);
      return false;
    }
  }

  async performPreDeploymentChecks(environment) {
    this.log(`🔍 Performing pre-deployment checks for ${environment}...`);
    
    const checks = [
      { name: 'Git Status', check: () => this.checkGitStatus() },
      { name: 'Dependencies', check: () => this.checkDependencies() },
      { name: 'Build Test', check: () => this.testBuild() },
      { name: 'PM2 Status', check: () => this.checkPM2Status() }
    ];

    let allChecksPassed = true;
    
    for (const check of checks) {
      this.log(`  Checking: ${check.name}...`);
      const result = await check.check();
      
      if (!result) {
        this.log(`  ❌ ${check.name} failed`);
        allChecksPassed = false;
      } else {
        this.log(`  ✅ ${check.name} passed`);
      }
    }

    return allChecksPassed;
  }

  async checkDependencies() {
    try {
      // Check if package.json exists and dependencies are installed
      const packageJsonPath = path.join(process.cwd(), 'package.json');
      if (!fs.existsSync(packageJsonPath)) {
        throw new Error('package.json not found');
      }

      const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
      if (!packageJson.dependencies) {
        throw new Error('No dependencies found in package.json');
      }

      // Check if node_modules exists
      const nodeModulesPath = path.join(process.cwd(), 'node_modules');
      if (!fs.existsSync(nodeModulesPath)) {
        this.log('⚠️ node_modules not found, installing dependencies...');
        await this.executeCommand('npm install');
      }

      return true;
    } catch (error) {
      this.log(`❌ Dependency check failed: ${error.message}`);
      return false;
    }
  }

  async testBuild() {
    try {
      this.log('🔨 Testing build process...');
      
      // Try to build the project
      const buildResult = await this.executeCommand('npm run build');
      
      if (buildResult.success) {
        this.log('✅ Build test successful');
        return true;
      } else {
        this.log(`❌ Build test failed: ${buildResult.error}`);
        return false;
      }
    } catch (error) {
      this.log(`❌ Build test error: ${error.message}`);
      return false;
    }
  }

  async checkPM2Status() {
    try {
      const result = await this.executeCommand('pm2 --version');
      if (result.success) {
        this.log('✅ PM2 is available');
        return true;
      } else {
        this.log('❌ PM2 is not available');
        return false;
      }
    } catch (error) {
      this.log(`❌ PM2 check failed: ${error.message}`);
      return false;
    }
  }

  async deploy(environment = 'development') {
    const envConfig = this.deploymentConfig.environments[environment];
    if (!envConfig) {
      this.log(`❌ Unknown environment: ${environment}`);
      return false;
    }

    this.log(`🚀 Starting deployment to ${environment}...`);
    
    // Pre-deployment checks
    if (!(await this.performPreDeploymentChecks(environment))) {
      this.log('❌ Pre-deployment checks failed. Aborting deployment.');
      return false;
    }

    try {
      // Step 1: Update code
      await this.updateCode(envConfig.branch);
      
      // Step 2: Install dependencies
      await this.installDependencies();
      
      // Step 3: Build project
      await this.buildProject();
      
      // Step 4: Deploy with PM2
      await this.deployWithPM2(environment);
      
      // Step 5: Health checks
      if (envConfig.healthCheck) {
        await this.performHealthChecks(environment);
      }
      
      // Step 6: Post-deployment tasks
      await this.performPostDeploymentTasks(environment);
      
      this.log(`✅ Deployment to ${environment} completed successfully!`);
      return true;
      
    } catch (error) {
      this.log(`❌ Deployment failed: ${error.message}`);
      await this.rollbackDeployment(environment);
      return false;
    }
  }

  async updateCode(branch) {
    this.log(`📥 Updating code from ${branch} branch...`);
    
    try {
      // Fetch latest changes
      await this.executeCommand('git fetch origin');
      
      // Checkout the target branch
      await this.executeCommand(`git checkout ${branch}`);
      
      // Pull latest changes
      await this.executeCommand('git pull origin ${branch}');
      
      this.log('✅ Code updated successfully');
    } catch (error) {
      throw new Error(`Code update failed: ${error.message}`);
    }
  }

  async installDependencies() {
    this.log('📦 Installing dependencies...');
    
    try {
      // Install root dependencies
      await this.executeCommand('npm install');
      
      // Install server dependencies if they exist
      const serverPath = path.join(process.cwd(), 'server');
      if (fs.existsSync(serverPath)) {
        await this.executeCommand('cd server && npm install');
      }
      
      this.log('✅ Dependencies installed successfully');
    } catch (error) {
      throw new Error(`Dependency installation failed: ${error.message}`);
    }
  }

  async buildProject() {
    this.log('🔨 Building project...');
    
    try {
      // Build frontend
      await this.executeCommand('npm run build');
      
      // Build backend if it exists
      const serverPath = path.join(process.cwd(), 'server');
      if (fs.existsSync(serverPath)) {
        await this.executeCommand('cd server && npm run build');
      }
      
      this.log('✅ Project built successfully');
    } catch (error) {
      throw new Error(`Build failed: ${error.message}`);
    }
  }

  async deployWithPM2(environment) {
    this.log(`🚀 Deploying with PM2 to ${environment}...`);
    
    try {
      // Stop existing processes
      await this.executeCommand('pm2 stop all');
      
      // Start with ecosystem config
      const result = await this.executeCommand('pm2 start ecosystem.config.js');
      
      if (!result.success) {
        throw new Error(`PM2 start failed: ${result.error}`);
      }
      
      // Save PM2 configuration
      await this.executeCommand('pm2 save');
      
      // Setup PM2 startup script
      await this.executeCommand('pm2 startup');
      
      this.log('✅ PM2 deployment completed');
    } catch (error) {
      throw new Error(`PM2 deployment failed: ${error.message}`);
    }
  }

  async performHealthChecks(environment) {
    this.log(`🏥 Performing health checks for ${environment}...`);
    
    const envConfig = this.deploymentConfig.environments[environment];
    const checks = [];
    
    // Frontend health check
    if (envConfig.port) {
      checks.push({
        name: 'Frontend',
        url: `http://localhost:${envConfig.port}${this.deploymentConfig.healthCheckEndpoints.frontend}`,
        timeout: 10000
      });
    }
    
    // Backend health check
    if (envConfig.backendPort) {
      checks.push({
        name: 'Backend',
        url: `http://localhost:${envConfig.backendPort}${this.deploymentConfig.healthCheckEndpoints.backend}`,
        timeout: 10000
      });
    }
    
    let allChecksPassed = true;
    
    for (const check of checks) {
      this.log(`  Checking ${check.name} health...`);
      const isHealthy = await this.checkEndpointHealth(check.url, check.timeout);
      
      if (isHealthy) {
        this.log(`  ✅ ${check.name} is healthy`);
      } else {
        this.log(`  ❌ ${check.name} health check failed`);
        allChecksPassed = false;
      }
    }
    
    if (!allChecksPassed) {
      throw new Error('Health checks failed');
    }
    
    this.log('✅ All health checks passed');
  }

  async checkEndpointHealth(url, timeout = 10000) {
    try {
      const { execSync } = require('child_process');
      const result = execSync(`curl -f -s --max-time ${timeout / 1000} ${url}`, { 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      return result.includes('healthy') || result.includes('ok') || result.includes('success');
    } catch (error) {
      return false;
    }
  }

  async performPostDeploymentTasks(environment) {
    this.log(`🔧 Performing post-deployment tasks for ${environment}...`);
    
    try {
      // Clear caches
      await this.executeCommand('npm run clean || true');
      
      // Update deployment timestamp
      const timestamp = new Date().toISOString();
      const deploymentInfo = {
        environment,
        timestamp,
        version: await this.getGitCommitHash(),
        status: 'success'
      };
      
      const deploymentPath = path.join(process.cwd(), 'automation', 'logs', `deployment-${environment}-${Date.now()}.json`);
      fs.writeFileSync(deploymentPath, JSON.stringify(deploymentInfo, null, 2));
      
      // Send notifications if configured
      await this.sendDeploymentNotification(environment, 'success');
      
      this.log('✅ Post-deployment tasks completed');
    } catch (error) {
      this.log(`⚠️ Post-deployment tasks failed: ${error.message}`);
    }
  }

  async getGitCommitHash() {
    try {
      const result = await this.executeCommand('git rev-parse --short HEAD');
      return result.success ? result.output.trim() : 'unknown';
    } catch (error) {
      return 'unknown';
    }
  }

  async sendDeploymentNotification(environment, status) {
    // This can be extended to send notifications via Slack, email, etc.
    this.log(`📢 Deployment notification: ${environment} - ${status}`);
  }

  async rollbackDeployment(environment) {
    this.log(`🔄 Rolling back deployment to ${environment}...`);
    
    try {
      // Stop all PM2 processes
      await this.executeCommand('pm2 stop all');
      
      // Delete PM2 processes
      await this.executeCommand('pm2 delete all');
      
      // Reset to previous commit
      await this.executeCommand('git reset --hard HEAD~1');
      
      // Restart with previous version
      await this.executeCommand('pm2 start ecosystem.config.js');
      
      this.log('✅ Rollback completed');
    } catch (error) {
      this.log(`❌ Rollback failed: ${error.message}`);
    }
  }

  async showDeploymentStatus() {
    this.log('📊 Deployment Status:');
    
    try {
      const pm2Status = await this.executeCommand('pm2 status');
      if (pm2Status.success) {
        console.log(pm2Status.output);
      }
      
      // Show recent deployments
      const logsDir = path.join(process.cwd(), 'automation', 'logs');
      if (fs.existsSync(logsDir)) {
        const deploymentFiles = fs.readdirSync(logsDir)
          .filter(file => file.startsWith('deployment-'))
          .sort()
          .reverse()
          .slice(0, 5);
        
        if (deploymentFiles.length > 0) {
          console.log('\n📋 Recent Deployments:');
          for (const file of deploymentFiles) {
            const content = JSON.parse(fs.readFileSync(path.join(logsDir, file), 'utf8'));
            console.log(`  ${content.timestamp} - ${content.environment} (${content.status})`);
          }
        }
      }
    } catch (error) {
      this.log(`❌ Failed to get deployment status: ${error.message}`);
    }
  }

  showHelp() {
    console.log(`
🚀 PM2 Smart Deployer - Available Commands:

🚀 Deployment:
  deploy [env]     - Deploy to environment (dev/staging/prod)
  rollback [env]   - Rollback deployment for environment
  status           - Show deployment status

🔍 Checks:
  health [env]     - Perform health checks for environment
  precheck [env]   - Run pre-deployment checks

📊 Information:
  help             - Show this help message

Environments:
  development      - Deploy to development
  staging          - Deploy to staging  
  production       - Deploy to production

Examples:
  node pm2-smart-deployer.js deploy development
  node pm2-smart-deployer.js deploy production
  node pm2-smart-deployer.js status
  node pm2-smart-deployer.js health production
`);
  }
}

// CLI handling
const deployer = new PM2SmartDeployer();
const command = process.argv[2];
const args = process.argv.slice(3);

(async () => {
  try {
    switch (command) {
      case 'deploy':
        const environment = args[0] || 'development';
        await deployer.deploy(environment);
        break;
      case 'rollback':
        const rollbackEnv = args[0] || 'development';
        await deployer.rollbackDeployment(rollbackEnv);
        break;
      case 'status':
        await deployer.showDeploymentStatus();
        break;
      case 'health':
        const healthEnv = args[0] || 'development';
        await deployer.performHealthChecks(healthEnv);
        break;
      case 'precheck':
        const precheckEnv = args[0] || 'development';
        await deployer.performPreDeploymentChecks(precheckEnv);
        break;
      case 'help':
      default:
        deployer.showHelp();
        break;
    }
  } catch (error) {
    console.error(`❌ Error: ${error.message}`);
    process.exit(1);
  }
})();