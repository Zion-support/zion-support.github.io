#!/usr/bin/env node

import { exec } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class IntelligentAutoDeployMonitor {
  constructor() {
    this.deploymentMetrics = {
      deployments: 0,
      successRate: 100,
      averageDeployTime: 0,
      lastDeployment: null,
      environment: 'development'
    };
    
    this.deploymentHistory = [];
    this.deploymentQueue = [];
    this.currentDeployment = null;
    this.deploymentConfig = {
      autoDeploy: true,
      stagingRequired: true,
      testsRequired: true,
      rollbackThreshold: 3, // Failed deployments before auto-rollback
      maxConcurrentDeployments: 1
    };
    
    this.startMonitoring();
  }

  async startMonitoring() {
    console.log('🚀 Intelligent Auto-Deployment Monitor Started');
    
    // Monitor deployment status every 2 minutes
    setInterval(() => this.monitorDeploymentStatus(), 2 * 60 * 1000);
    
    // Check for deployment triggers every 5 minutes
    setInterval(() => this.checkDeploymentTriggers(), 5 * 60 * 1000);
    
    // Monitor git changes
    this.watchGitChanges();
    
    // Run initial deployment analysis
    await this.runDeploymentAnalysis();
  }

  async runDeploymentAnalysis() {
    try {
      console.log('📊 Running deployment analysis...');
      
      // Analyze current deployment state
      await this.analyzeCurrentState();
      
      // Check deployment readiness
      await this.checkDeploymentReadiness();
      
      // Generate deployment report
      this.generateDeploymentReport();
      
    } catch (error) {
      console.error('❌ Deployment analysis failed:', error.message);
    }
  }

  async analyzeCurrentState() {
    try {
      // Check current git status
      const gitStatus = await this.getGitStatus();
      
      // Check if there are uncommitted changes
      if (gitStatus.hasUncommittedChanges) {
        console.log('⚠️  Uncommitted changes detected');
        this.deploymentConfig.autoDeploy = false;
      }
      
      // Check current branch
      if (gitStatus.currentBranch !== 'main' && gitStatus.currentBranch !== 'develop') {
        console.log(`⚠️  Not on main/develop branch: ${gitStatus.currentBranch}`);
        this.deploymentConfig.autoDeploy = false;
      }
      
      // Check for merge conflicts
      if (gitStatus.hasMergeConflicts) {
        console.log('❌ Merge conflicts detected - deployment blocked');
        this.deploymentConfig.autoDeploy = false;
      }
      
      // Check deployment environment
      this.deploymentMetrics.environment = process.env.NODE_ENV || 'development';
      
    } catch (error) {
      console.error('❌ Current state analysis failed:', error.message);
    }
  }

  async checkDeploymentReadiness() {
    try {
      // Check if tests pass
      if (this.deploymentConfig.testsRequired) {
        const testStatus = await this.runTests();
        if (!testStatus.success) {
          console.log('❌ Tests failed - deployment blocked');
          this.deploymentConfig.autoDeploy = false;
          return;
        }
      }
      
      // Check build status
      const buildStatus = await this.checkBuildStatus();
      if (!buildStatus.success) {
        console.log('❌ Build failed - deployment blocked');
        this.deploymentConfig.autoDeploy = false;
        return;
      }
      
      // Check code quality
      const qualityStatus = await this.checkCodeQuality();
      if (qualityStatus.score < 70) {
        console.log(`⚠️  Code quality score low: ${qualityStatus.score}/100`);
        this.deploymentConfig.autoDeploy = false;
      }
      
      // Check security status
      const securityStatus = await this.checkSecurityStatus();
      if (securityStatus.score < 80) {
        console.log(`❌ Security score too low: ${securityStatus.score}/100 - deployment blocked`);
        this.deploymentConfig.autoDeploy = false;
        return;
      }
      
      console.log('✅ Deployment readiness check passed');
      
    } catch (error) {
      console.error('❌ Deployment readiness check failed:', error.message);
    }
  }

  async getGitStatus() {
    return new Promise((resolve) => {
      exec('git status --porcelain', (error, stdout) => {
        const hasUncommittedChanges = stdout.trim().length > 0;
        
        exec('git branch --show-current', (error, stdout) => {
          const currentBranch = stdout.trim();
          
          exec('git status', (error, stdout) => {
            const hasMergeConflicts = stdout.includes('You have unmerged paths') || 
                                    stdout.includes('All conflicts fixed');
            
            resolve({
              hasUncommittedChanges,
              currentBranch,
              hasMergeConflicts: hasMergeConflicts && !stdout.includes('All conflicts fixed')
            });
          });
        });
      });
    });
  }

  async runTests() {
    return new Promise((resolve) => {
      exec('npm test -- --watchAll=false', { timeout: 120000 }, (error, stdout, stderr) => {
        resolve({
          success: !error,
          output: stdout,
          errors: stderr
        });
      });
    });
  }

  async checkBuildStatus() {
    return new Promise((resolve) => {
      exec('npm run build', { timeout: 300000 }, (error, stdout, stderr) => {
        resolve({
          success: !error,
          output: stdout,
          errors: stderr
        });
      });
    });
  }

  async checkCodeQuality() {
    try {
      const qualityPath = path.join(__dirname, '../logs/code-quality-report.json');
      
      if (fs.existsSync(qualityPath)) {
        const qualityData = JSON.parse(fs.readFileSync(qualityPath, 'utf8'));
        return {
          success: true,
          score: qualityData.overallScore || 0
        };
      }
      
      return { success: false, score: 0 };
    } catch (error) {
      return { success: false, score: 0 };
    }
  }

  async checkSecurityStatus() {
    try {
      const securityPath = path.join(__dirname, '../logs/security-report.json');
      
      if (fs.existsSync(securityPath)) {
        const securityData = JSON.parse(fs.readFileSync(securityPath, 'utf8'));
        return {
          success: true,
          score: securityData.securityScore || 0
        };
      }
      
      return { success: false, score: 0 };
    } catch (error) {
      return { success: false, score: 0 };
    }
  }

  async checkDeploymentTriggers() {
    try {
      // Check for new commits on main branch
      const newCommits = await this.checkNewCommits();
      
      if (newCommits.length > 0 && this.deploymentConfig.autoDeploy) {
        console.log(`🔄 ${newCommits.length} new commits detected, triggering deployment`);
        
        for (const commit of newCommits) {
          await this.queueDeployment(commit);
        }
      }
      
      // Process deployment queue
      await this.processDeploymentQueue();
      
    } catch (error) {
      console.error('❌ Deployment trigger check failed:', error.message);
    }
  }

  async checkNewCommits() {
    return new Promise((resolve) => {
      exec('git log --oneline -10', (error, stdout) => {
        if (error) {
          resolve([]);
          return;
        }
        
        const commits = stdout.split('\n').filter(line => line.trim()).map(line => {
          const [hash, ...messageParts] = line.split(' ');
          return {
            hash,
            message: messageParts.join(' '),
            timestamp: new Date()
          };
        });
        
        // Check if we've seen these commits before
        const newCommits = commits.filter(commit => 
          !this.deploymentHistory.some(deployment => 
            deployment.commitHash === commit.hash
          )
        );
        
        resolve(newCommits);
      });
    });
  }

  async queueDeployment(commit) {
    const deployment = {
      id: `deploy-${Date.now()}`,
      commitHash: commit.hash,
      commitMessage: commit.message,
      timestamp: new Date(),
      status: 'queued',
      priority: this.getDeploymentPriority(commit.message),
      environment: this.deploymentMetrics.environment
    };
    
    this.deploymentQueue.push(deployment);
    console.log(`📋 Deployment queued: ${deployment.id} for commit ${commit.hash.substring(0, 8)}`);
  }

  getDeploymentPriority(commitMessage) {
    const priorityKeywords = {
      'hotfix': 1,
      'urgent': 1,
      'critical': 1,
      'fix': 2,
      'bug': 2,
      'feature': 3,
      'enhancement': 3,
      'docs': 4,
      'chore': 4
    };
    
    const lowerMessage = commitMessage.toLowerCase();
    
    for (const [keyword, priority] of Object.entries(priorityKeywords)) {
      if (lowerMessage.includes(keyword)) {
        return priority;
      }
    }
    
    return 3; // Default priority
  }

  async processDeploymentQueue() {
    if (this.currentDeployment || this.deploymentQueue.length === 0) {
      return;
    }
    
    // Sort queue by priority and timestamp
    this.deploymentQueue.sort((a, b) => {
      if (a.priority !== b.priority) {
        return a.priority - b.priority;
      }
      return a.timestamp - b.timestamp;
    });
    
    const nextDeployment = this.deploymentQueue.shift();
    await this.executeDeployment(nextDeployment);
  }

  async executeDeployment(deployment) {
    try {
      console.log(`🚀 Starting deployment: ${deployment.id}`);
      
      this.currentDeployment = deployment;
      deployment.status = 'in_progress';
      deployment.startTime = Date.now();
      
      // Stage 1: Pre-deployment checks
      await this.runPreDeploymentChecks(deployment);
      
      // Stage 2: Build and test
      await this.runBuildAndTest(deployment);
      
      // Stage 3: Deploy to staging (if required)
      if (this.deploymentConfig.stagingRequired) {
        await this.deployToStaging(deployment);
      }
      
      // Stage 4: Deploy to production
      await this.deployToProduction(deployment);
      
      // Stage 5: Post-deployment verification
      await this.runPostDeploymentVerification(deployment);
      
      // Mark deployment as successful
      deployment.status = 'completed';
      deployment.endTime = Date.now();
      deployment.duration = deployment.endTime - deployment.startTime;
      
      console.log(`✅ Deployment completed: ${deployment.id} in ${Math.round(deployment.duration / 1000)}s`);
      
      // Update metrics
      this.updateDeploymentMetrics(deployment);
      
    } catch (error) {
      console.error(`❌ Deployment failed: ${deployment.id}`, error.message);
      
      deployment.status = 'failed';
      deployment.error = error.message;
      deployment.endTime = Date.now();
      deployment.duration = deployment.endTime - deployment.startTime;
      
      // Handle deployment failure
      await this.handleDeploymentFailure(deployment);
      
    } finally {
      this.currentDeployment = null;
      
      // Process next deployment in queue
      setTimeout(() => this.processDeploymentQueue(), 5000);
    }
  }

  async runPreDeploymentChecks(deployment) {
    console.log(`🔍 Running pre-deployment checks for ${deployment.id}`);
    
    // Check git status
    const gitStatus = await this.getGitStatus();
    if (gitStatus.hasUncommittedChanges) {
      throw new Error('Uncommitted changes detected');
    }
    
    // Check if target commit exists
    const commitExists = await this.checkCommitExists(deployment.commitHash);
    if (!commitExists) {
      throw new Error(`Target commit ${deployment.commitHash} not found`);
    }
    
    // Check system resources
    const resources = await this.checkSystemResources();
    if (resources.cpu > 90 || resources.memory > 90) {
      throw new Error('System resources too high for deployment');
    }
    
    console.log(`✅ Pre-deployment checks passed for ${deployment.id}`);
  }

  async runBuildAndTest(deployment) {
    console.log(`🔨 Building and testing for ${deployment.id}`);
    
    // Checkout target commit
    await this.checkoutCommit(deployment.commitHash);
    
    // Install dependencies
    await this.installDependencies();
    
    // Run tests
    const testResult = await this.runTests();
    if (!testResult.success) {
      throw new Error('Tests failed during deployment');
    }
    
    // Build application
    const buildResult = await this.checkBuildStatus();
    if (!buildResult.success) {
      throw new Error('Build failed during deployment');
    }
    
    console.log(`✅ Build and test completed for ${deployment.id}`);
  }

  async deployToStaging(deployment) {
    console.log(`🚀 Deploying to staging for ${deployment.id}`);
    
    // This would integrate with your staging deployment system
    // For now, we'll simulate the process
    
    await new Promise(resolve => setTimeout(resolve, 5000));
    
    // Verify staging deployment
    const stagingHealth = await this.checkStagingHealth();
    if (!stagingHealth.healthy) {
      throw new Error('Staging deployment health check failed');
    }
    
    console.log(`✅ Staging deployment completed for ${deployment.id}`);
  }

  async deployToProduction(deployment) {
    console.log(`🚀 Deploying to production for ${deployment.id}`);
    
    // This would integrate with your production deployment system
    // For now, we'll simulate the process
    
    await new Promise(resolve => setTimeout(resolve, 10000));
    
    // Verify production deployment
    const productionHealth = await this.checkProductionHealth();
    if (!productionHealth.healthy) {
      throw new Error('Production deployment health check failed');
    }
    
    console.log(`✅ Production deployment completed for ${deployment.id}`);
  }

  async runPostDeploymentVerification(deployment) {
    console.log(`🔍 Running post-deployment verification for ${deployment.id}`);
    
    // Check application health
    const appHealth = await this.checkApplicationHealth();
    if (!appHealth.healthy) {
      throw new Error('Application health check failed after deployment');
    }
    
    // Check performance metrics
    const performance = await this.checkPerformanceMetrics();
    if (performance.score < 80) {
      console.log(`⚠️  Performance score below threshold: ${performance.score}/100`);
    }
    
    console.log(`✅ Post-deployment verification completed for ${deployment.id}`);
  }

  async handleDeploymentFailure(deployment) {
    console.log(`🔄 Handling deployment failure for ${deployment.id}`);
    
    // Check if we should auto-rollback
    const recentFailures = this.deploymentHistory
      .filter(d => d.status === 'failed')
      .slice(-this.deploymentConfig.rollbackThreshold);
    
    if (recentFailures.length >= this.deploymentConfig.rollbackThreshold) {
      console.log('🔄 Auto-rollback threshold reached, initiating rollback');
      await this.rollbackDeployment(deployment);
    }
    
    // Update metrics
    this.updateDeploymentMetrics(deployment);
    
    // Send notifications
    await this.sendDeploymentNotification(deployment, 'failed');
  }

  async rollbackDeployment(deployment) {
    try {
      console.log(`🔄 Rolling back deployment ${deployment.id}`);
      
      // Find the last successful deployment
      const lastSuccessful = this.deploymentHistory
        .filter(d => d.status === 'completed')
        .pop();
      
      if (lastSuccessful) {
        // Rollback to last successful commit
        await this.checkoutCommit(lastSuccessful.commitHash);
        await this.deployToProduction({
          ...deployment,
          commitHash: lastSuccessful.commitHash,
          isRollback: true
        });
        
        console.log(`✅ Rollback completed to commit ${lastSuccessful.commitHash.substring(0, 8)}`);
      } else {
        console.log('⚠️  No successful deployment found for rollback');
      }
      
    } catch (error) {
      console.error('❌ Rollback failed:', error.message);
    }
  }

  async checkoutCommit(commitHash) {
    return new Promise((resolve, reject) => {
      exec(`git checkout ${commitHash}`, (error, stdout, stderr) => {
        if (error) {
          reject(new Error(`Failed to checkout commit: ${stderr}`));
        } else {
          resolve();
        }
      });
    });
  }

  async installDependencies() {
    return new Promise((resolve, reject) => {
      exec('npm install', (error, stdout, stderr) => {
        if (error) {
          reject(new Error(`Failed to install dependencies: ${stderr}`));
        } else {
          resolve();
        }
      });
    });
  }

  async checkCommitExists(commitHash) {
    return new Promise((resolve) => {
      exec(`git show ${commitHash}`, (error) => {
        resolve(!error);
      });
    });
  }

  async checkSystemResources() {
    // This would integrate with system monitoring
    // For now, return mock data
    return {
      cpu: Math.random() * 100,
      memory: Math.random() * 100,
      disk: Math.random() * 100
    };
  }

  async checkStagingHealth() {
    // This would check your staging environment
    // For now, return mock data
    return { healthy: true };
  }

  async checkProductionHealth() {
    // This would check your production environment
    // For now, return mock data
    return { healthy: true };
  }

  async checkApplicationHealth() {
    // This would check your application health endpoints
    // For now, return mock data
    return { healthy: true };
  }

  async checkPerformanceMetrics() {
    // This would check performance metrics
    // For now, return mock data
    return { score: 85 };
  }

  async sendDeploymentNotification(deployment, status) {
    // This would integrate with your notification system
    console.log(`📢 Deployment ${status}: ${deployment.id}`);
  }

  updateDeploymentMetrics(deployment) {
    // Add to history
    this.deploymentHistory.push(deployment);
    
    // Keep only last 100 deployments
    if (this.deploymentHistory.length > 100) {
      this.deploymentHistory = this.deploymentHistory.slice(-100);
    }
    
    // Update metrics
    this.deploymentMetrics.deployments++;
    
    if (deployment.status === 'completed') {
      this.deploymentMetrics.successRate = 
        (this.deploymentHistory.filter(d => d.status === 'completed').length / 
         this.deploymentHistory.length) * 100;
      
      this.deploymentMetrics.averageDeployTime = 
        this.deploymentHistory
          .filter(d => d.status === 'completed')
          .reduce((sum, d) => sum + d.duration, 0) / 
        this.deploymentHistory.filter(d => d.status === 'completed').length;
    }
    
    this.deploymentMetrics.lastDeployment = new Date();
  }

  generateDeploymentReport() {
    const report = {
      timestamp: new Date(),
      deploymentMetrics: this.deploymentMetrics,
      deploymentHistory: this.deploymentHistory.slice(-20),
      deploymentQueue: this.deploymentQueue,
      currentDeployment: this.currentDeployment,
      deploymentConfig: this.deploymentConfig
    };
    
    // Save report to file
    fs.writeFileSync(
      path.join(__dirname, '../logs/deployment-report.json'),
      JSON.stringify(report, null, 2)
    );
    
    // Log summary
    console.log('\n📈 Deployment Report:');
    console.log(`   Total Deployments: ${this.deploymentMetrics.deployments}`);
    console.log(`   Success Rate: ${this.deploymentMetrics.successRate.toFixed(1)}%`);
    console.log(`   Average Deploy Time: ${Math.round(this.deploymentMetrics.averageDeployTime / 1000)}s`);
    console.log(`   Environment: ${this.deploymentMetrics.environment}`);
    console.log(`   Queue Length: ${this.deploymentQueue.length}`);
    console.log(`   Current Deployment: ${this.currentDeployment ? this.currentDeployment.id : 'None'}`);
  }

  async monitorDeploymentStatus() {
    // Check if current deployment is stuck
    if (this.currentDeployment && 
        this.currentDeployment.status === 'in_progress' &&
        Date.now() - this.currentDeployment.startTime > 30 * 60 * 1000) { // 30 minutes
      
      console.log(`⚠️  Deployment ${this.currentDeployment.id} appears to be stuck`);
      this.currentDeployment.status = 'failed';
      this.currentDeployment.error = 'Deployment timeout';
      
      await this.handleDeploymentFailure(this.currentDeployment);
      this.currentDeployment = null;
    }
    
    // Generate report
    this.generateDeploymentReport();
  }

  watchGitChanges() {
    // Watch for git changes
    const gitDir = path.join(__dirname, '../.git');
    
    if (fs.existsSync(gitDir)) {
      fs.watch(gitDir, { recursive: true }, (eventType, filename) => {
        if (filename && filename.includes('HEAD')) {
          console.log('📝 Git HEAD changed, checking for deployment triggers');
          this.scheduleDeploymentCheck();
        }
      });
    }
  }

  scheduleDeploymentCheck() {
    // Debounce deployment check
    if (this.deploymentCheckTimeout) {
      clearTimeout(this.deploymentCheckTimeout);
    }
    
    this.deploymentCheckTimeout = setTimeout(() => {
      this.checkDeploymentTriggers();
    }, 10000); // Wait 10 seconds after git change
  }
}

// Start the monitor
const monitor = new IntelligentAutoDeployMonitor();

// Handle graceful shutdown
process.on('SIGINT', () => {
  console.log('\n🛑 Shutting down Auto-Deployment Monitor...');
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('\n🛑 Shutting down Auto-Deployment Monitor...');
  process.exit(0);
});