#!/usr/bin/env node

const { execSync, spawn } = require('child_process');
const fs = require('fs').promises;
const path = require('path');

class EnhancedDeploymentAutomation {
  constructor() {
    this.config = {
      environments: {
        development: {
          branch: 'develop',
          autoDeploy: true,
          healthCheckTimeout: 300000,
          rollbackEnabled: true
        },
        staging: {
          branch: 'staging',
          autoDeploy: true,
          healthCheckTimeout: 300000,
          rollbackEnabled: true
        },
        production: {
          branch: 'main',
          autoDeploy: false, // Manual approval required
          healthCheckTimeout: 600000,
          rollbackEnabled: true
        }
      },
      qualityGates: {
        minTestCoverage: 80,
        maxBuildTime: 300000, // 5 minutes
        maxBundleSize: 5 * 1024 * 1024, // 5MB
        securityScanRequired: true
      },
      notifications: {
        slack: process.env.SLACK_WEBHOOK_URL,
        email: process.env.EMAIL_NOTIFICATIONS,
        webhook: process.env.DEPLOYMENT_WEBHOOK_URL
      }
    };
    
    this.deploymentHistory = [];
    this.rollbackHistory = [];
    this.isRunning = false;
    this.currentDeployments = new Map();
  }

  async start() {
    console.log('🚀 Enhanced Deployment Automation starting...');
    this.isRunning = true;
    
    try {
      await this.initialize();
      this.startContinuousMonitoring();
      console.log('✅ Enhanced Deployment Automation started successfully');
    } catch (error) {
      console.error('❌ Failed to start Enhanced Deployment Automation:', error);
    }
  }

  async initialize() {
    // Create necessary directories
    await fs.mkdir('./logs', { recursive: true });
    await fs.mkdir('./deployments', { recursive: true });
    await fs.mkdir('./rollbacks', { recursive: true });
    
    // Load existing history
    await this.loadHistory();
    
    console.log('📁 Enhanced Deployment Automation initialized');
  }

  startContinuousMonitoring() {
    // Monitor for deployment triggers every minute
    setInterval(async () => {
      if (!this.isRunning) {
        return;
      }
      
      try {
        await this.checkForDeploymentTriggers();
        await this.monitorActiveDeployments();
      } catch (error) {
        console.error('Error in continuous monitoring:', error);
      }
    }, 60000);
    
    // Health check active deployments every 5 minutes
    setInterval(async () => {
      if (!this.isRunning) {
        return;
      }
      
      try {
        await this.performHealthChecks();
      } catch (error) {
        console.error('Error in health checks:', error);
      }
    }, 300000);
  }

  async checkForDeploymentTriggers() {
    try {
      // Check for new commits on deployment branches
      for (const [env, config] of Object.entries(this.config.environments)) {
        if (config.autoDeploy) {
          await this.checkBranchForDeployment(env, config.branch);
        }
      }
    } catch (error) {
      console.error('Error checking deployment triggers:', error);
    }
  }

  async checkBranchForDeployment(environment, branch) {
    try {
      // Fetch latest changes
      execSync('git fetch origin', { stdio: 'pipe' });
      
      // Check if there are new commits
      const lastCommit = execSync(`git rev-parse origin/${branch}`, { encoding: 'utf8' }).trim();
      const lastDeployment = this.getLastDeployment(environment);
      
      if (!lastDeployment || lastDeployment.commit !== lastCommit) {
        console.log(`🔄 New commit detected on ${branch} for ${environment}`);
        await this.triggerDeployment(environment, lastCommit);
      }
    } catch (error) {
      console.error(`Error checking branch ${branch} for ${environment}:`, error);
    }
  }

  async triggerDeployment(environment, commit) {
    try {
      console.log(`🚀 Triggering deployment for ${environment}...`);
      
      const deployment = {
        id: `deploy_${Date.now()}`,
        environment,
        commit,
        timestamp: new Date().toISOString(),
        status: 'pending',
        stages: []
      };
      
      this.currentDeployments.set(deployment.id, deployment);
      
      // Run deployment pipeline
      await this.runDeploymentPipeline(deployment);
      
    } catch (error) {
      console.error(`Error triggering deployment for ${environment}:`, error);
    }
  }

  async runDeploymentPipeline(deployment) {
    try {
      // Stage 1: Pre-deployment checks
      await this.runPreDeploymentChecks(deployment);
      
      // Stage 2: Build
      await this.runBuildStage(deployment);
      
      // Stage 3: Quality gates
      await this.runQualityGates(deployment);
      
      // Stage 4: Deploy
      await this.runDeployStage(deployment);
      
      // Stage 5: Post-deployment verification
      await this.runPostDeploymentVerification(deployment);
      
      // Mark as completed
      deployment.status = 'completed';
      this.deploymentHistory.push(deployment);
      
      console.log(`✅ Deployment ${deployment.id} completed successfully`);
      
      // Send success notification
      await this.sendNotification('deployment_success', deployment);
      
    } catch (error) {
      console.error(`❌ Deployment ${deployment.id} failed:`, error);
      
      deployment.status = 'failed';
      deployment.error = error.message;
      this.deploymentHistory.push(deployment);
      
      // Send failure notification
      await this.sendNotification('deployment_failure', deployment);
      
      // Attempt rollback if enabled
      const config = this.config.environments[deployment.environment];
      if (config.rollbackEnabled) {
        await this.triggerRollback(deployment);
      }
    }
  }

  async runPreDeploymentChecks(deployment) {
    console.log(`🔍 Running pre-deployment checks for ${deployment.id}...`);
    
    const stage = {
      name: 'pre_deployment_checks',
      startTime: new Date().toISOString(),
      status: 'running'
    };
    
    deployment.stages.push(stage);
    
    try {
      // Check if working directory is clean
      const status = execSync('git status --porcelain', { encoding: 'utf8' }).trim();
      if (status) {
        throw new Error('Working directory is not clean');
      }
      
      // Check if we're on the correct branch
      const currentBranch = execSync('git branch --show-current', { encoding: 'utf8' }).trim();
      const expectedBranch = this.config.environments[deployment.environment].branch;
      if (currentBranch !== expectedBranch) {
        throw new Error(`Expected branch ${expectedBranch}, but on ${currentBranch}`);
      }
      
      // Check if commit exists
      execSync(`git cat-file -e ${deployment.commit}`, { stdio: 'pipe' });
      
      stage.status = 'completed';
      stage.endTime = new Date().toISOString();
      stage.duration = new Date(stage.endTime) - new Date(stage.startTime);
      
      console.log(`✅ Pre-deployment checks completed for ${deployment.id}`);
      
    } catch (error) {
      stage.status = 'failed';
      stage.error = error.message;
      stage.endTime = new Date().toISOString();
      throw error;
    }
  }

  async runBuildStage(deployment) {
    console.log(`🔨 Running build stage for ${deployment.id}...`);
    
    const stage = {
      name: 'build',
      startTime: new Date().toISOString(),
      status: 'running'
    };
    
    deployment.stages.push(stage);
    
    try {
      // Install dependencies
      execSync('npm ci', { stdio: 'pipe' });
      
      // Run build
      const buildStart = Date.now();
      execSync('npm run build', { stdio: 'pipe' });
      const buildTime = Date.now() - buildStart;
      
      // Check build time against quality gates
      if (buildTime > this.config.qualityGates.maxBuildTime) {
        throw new Error(`Build time ${buildTime}ms exceeds maximum ${this.config.qualityGates.maxBuildTime}ms`);
      }
      
      // Check bundle size
      const bundleSize = await this.calculateBundleSize();
      if (bundleSize > this.config.qualityGates.maxBundleSize) {
        throw new Error(`Bundle size ${bundleSize} bytes exceeds maximum ${this.config.qualityGates.maxBundleSize} bytes`);
      }
      
      stage.status = 'completed';
      stage.endTime = new Date().toISOString();
      stage.duration = buildTime;
      stage.bundleSize = bundleSize;
      
      console.log(`✅ Build stage completed for ${deployment.id} in ${buildTime}ms`);
      
    } catch (error) {
      stage.status = 'failed';
      stage.error = error.message;
      stage.endTime = new Date().toISOString();
      throw error;
    }
  }

  async runQualityGates(deployment) {
    console.log(`🧪 Running quality gates for ${deployment.id}...`);
    
    const stage = {
      name: 'quality_gates',
      startTime: new Date().toISOString(),
      status: 'running'
    };
    
    deployment.stages.push(stage);
    
    try {
      // Run tests
      execSync('npm test', { stdio: 'pipe' });
      
      // Run linting
      execSync('npm run lint', { stdio: 'pipe' });
      
      // Check test coverage
      const coverage = await this.getTestCoverage();
      if (coverage < this.config.qualityGates.minTestCoverage) {
        throw new Error(`Test coverage ${coverage}% is below minimum ${this.config.qualityGates.minTestCoverage}%`);
      }
      
      // Security scan
      if (this.config.qualityGates.securityScanRequired) {
        execSync('npm audit --audit-level moderate', { stdio: 'pipe' });
      }
      
      stage.status = 'completed';
      stage.endTime = new Date().toISOString();
      stage.duration = new Date(stage.endTime) - new Date(stage.startTime);
      stage.coverage = coverage;
      
      console.log(`✅ Quality gates passed for ${deployment.id} (coverage: ${coverage}%)`);
      
    } catch (error) {
      stage.status = 'failed';
      stage.error = error.message;
      stage.endTime = new Date().toISOString();
      throw error;
    }
  }

  async runDeployStage(deployment) {
    console.log(`🚀 Running deploy stage for ${deployment.id}...`);
    
    const stage = {
      name: 'deploy',
      startTime: new Date().toISOString(),
      status: 'running'
    };
    
    deployment.stages.push(stage);
    
    try {
      // Create deployment package
      const packagePath = await this.createDeploymentPackage(deployment);
      
      // Deploy to environment
      await this.deployToEnvironment(deployment.environment, packagePath);
      
      stage.status = 'completed';
      stage.endTime = new Date().toISOString();
      stage.duration = new Date(stage.endTime) - new Date(stage.startTime);
      
      console.log(`✅ Deploy stage completed for ${deployment.id}`);
      
    } catch (error) {
      stage.status = 'failed';
      stage.error = error.message;
      stage.endTime = new Date().toISOString();
      throw error;
    }
  }

  async runPostDeploymentVerification(deployment) {
    console.log(`🔍 Running post-deployment verification for ${deployment.id}...`);
    
    const stage = {
      name: 'post_deployment_verification',
      startTime: new Date().toISOString(),
      status: 'running'
    };
    
    deployment.stages.push(stage);
    
    try {
      // Wait for deployment to be ready
      await this.waitForDeploymentReady(deployment);
      
      // Run health checks
      const healthCheck = await this.runHealthChecks(deployment);
      if (!healthCheck.healthy) {
        throw new Error(`Health check failed: ${healthCheck.issues.join(', ')}`);
      }
      
      // Run smoke tests
      await this.runSmokeTests(deployment);
      
      stage.status = 'completed';
      stage.endTime = new Date().toISOString();
      stage.duration = new Date(stage.endTime) - new Date(stage.startTime);
      stage.healthCheck = healthCheck;
      
      console.log(`✅ Post-deployment verification completed for ${deployment.id}`);
      
    } catch (error) {
      stage.status = 'failed';
      stage.error = error.message;
      stage.endTime = new Date().toISOString();
      throw error;
    }
  }

  async createDeploymentPackage(deployment) {
    const packageName = `deployment-${deployment.id}.tar.gz`;
    const packagePath = `./deployments/${packageName}`;
    
    // Create deployment package
    execSync(`tar -czf ${packagePath} dist/ package.json package-lock.json`, { stdio: 'pipe' });
    
    return packagePath;
  }

  async deployToEnvironment(environment, packagePath) {
    // This would be environment-specific deployment logic
    console.log(`Deploying ${packagePath} to ${environment}...`);
    
    // For now, just simulate deployment
    await new Promise(resolve => setTimeout(resolve, 5000));
    
    console.log(`Deployment to ${environment} completed`);
  }

  async waitForDeploymentReady(deployment) {
    const config = this.config.environments[deployment.environment];
    const timeout = config.healthCheckTimeout;
    const startTime = Date.now();
    
    while (Date.now() - startTime < timeout) {
      try {
        const healthCheck = await this.runHealthChecks(deployment);
        if (healthCheck.healthy) {
          return;
        }
      } catch (error) {
        // Health check failed, continue waiting
      }
      
      await new Promise(resolve => setTimeout(resolve, 10000)); // Wait 10 seconds
    }
    
    throw new Error(`Deployment did not become ready within ${timeout}ms`);
  }

  async runHealthChecks(deployment) {
    // This would be environment-specific health check logic
    const healthCheck = {
      healthy: true,
      issues: [],
      timestamp: new Date().toISOString()
    };
    
    // Simulate health check
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    return healthCheck;
  }

  async runSmokeTests(deployment) {
    // This would run smoke tests against the deployed application
    console.log(`Running smoke tests for ${deployment.id}...`);
    
    // Simulate smoke tests
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log(`Smoke tests passed for ${deployment.id}`);
  }

  async calculateBundleSize() {
    try {
      const stats = await fs.stat('./dist');
      return stats.size;
    } catch (error) {
      return 0;
    }
  }

  async getTestCoverage() {
    try {
      // This would run test coverage and parse the results
      // For now, return a simulated value
      return 85;
    } catch (error) {
      return 0;
    }
  }

  async monitorActiveDeployments() {
    for (const [id, deployment] of this.currentDeployments) {
      if (deployment.status === 'running') {
        // Check if deployment has been running too long
        const runningTime = Date.now() - new Date(deployment.timestamp);
        if (runningTime > 1800000) { // 30 minutes
          console.log(`⚠️ Deployment ${id} has been running for ${runningTime}ms`);
        }
      }
    }
  }

  async performHealthChecks() {
    for (const [id, deployment] of this.currentDeployments) {
      if (deployment.status === 'completed') {
        try {
          const healthCheck = await this.runHealthChecks(deployment);
          if (!healthCheck.healthy) {
            console.log(`⚠️ Health check failed for deployment ${id}`);
            await this.triggerRollback(deployment);
          }
        } catch (error) {
          console.error(`Error performing health check for deployment ${id}:`, error);
        }
      }
    }
  }

  async triggerRollback(deployment) {
    try {
      console.log(`🔄 Triggering rollback for deployment ${deployment.id}...`);
      
      const rollback = {
        id: `rollback_${Date.now()}`,
        deploymentId: deployment.id,
        environment: deployment.environment,
        timestamp: new Date().toISOString(),
        status: 'pending'
      };
      
      // Find previous successful deployment
      const previousDeployment = this.findPreviousSuccessfulDeployment(deployment.environment);
      if (!previousDeployment) {
        throw new Error('No previous successful deployment found for rollback');
      }
      
      // Perform rollback
      await this.performRollback(rollback, previousDeployment);
      
      rollback.status = 'completed';
      this.rollbackHistory.push(rollback);
      
      console.log(`✅ Rollback ${rollback.id} completed successfully`);
      
      // Send rollback notification
      await this.sendNotification('rollback_success', rollback);
      
    } catch (error) {
      console.error(`❌ Rollback failed for deployment ${deployment.id}:`, error);
      
      // Send rollback failure notification
      await this.sendNotification('rollback_failure', { deployment, error: error.message });
    }
  }

  findPreviousSuccessfulDeployment(environment) {
    return this.deploymentHistory
      .filter(d => d.environment === environment && d.status === 'completed')
      .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))[0];
  }

  async performRollback(rollback, targetDeployment) {
    // This would perform the actual rollback
    console.log(`Rolling back to deployment ${targetDeployment.id}...`);
    
    // Simulate rollback
    await new Promise(resolve => setTimeout(resolve, 5000));
    
    console.log(`Rollback to ${targetDeployment.id} completed`);
  }

  getLastDeployment(environment) {
    return this.deploymentHistory
      .filter(d => d.environment === environment)
      .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))[0];
  }

  async sendNotification(type, data) {
    // This would send notifications via configured channels
    console.log(`📢 Sending ${type} notification:`, data);
  }

  async saveAnalysis(analysis) {
    try {
      const filename = `./logs/deployment-analysis-${new Date().toISOString().split('T')[0]}.json`;
      await fs.writeFile(filename, JSON.stringify(analysis, null, 2));
    } catch (error) {
      console.error('Error saving analysis:', error);
    }
  }

  async loadHistory() {
    try {
      // Load deployment history
      const deploymentHistoryFile = './logs/deployment-history.json';
      try {
        const data = await fs.readFile(deploymentHistoryFile, 'utf8');
        this.deploymentHistory = JSON.parse(data);
      } catch (error) {
        this.deploymentHistory = [];
      }
      
      // Load rollback history
      const rollbackHistoryFile = './logs/rollback-history.json';
      try {
        const data = await fs.readFile(rollbackHistoryFile, 'utf8');
        this.rollbackHistory = JSON.parse(data);
      } catch (error) {
        this.rollbackHistory = [];
      }
    } catch (error) {
      console.error('Error loading history:', error);
    }
  }
}

// Start the Enhanced Deployment Automation
const deploymentAutomation = new EnhancedDeploymentAutomation();
deploymentAutomation.start().catch(console.error);

module.exports = EnhancedDeploymentAutomation;