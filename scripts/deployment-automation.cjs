#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🚀 Deployment Automation');
console.log('========================');

class DeploymentAutomation {
  constructor() {
    this.results = {
      preDeploymentChecks: false,
      buildSuccess: false,
      testsPassed: false,
      deploymentSuccess: false,
      postDeploymentChecks: false,
      errors: []
    };
    this.startTime = Date.now();
  }

  log(message, type = 'info') {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${type.toUpperCase()}] ${message}`;
    console.log(logEntry);
  }

  async preDeploymentChecks() {
    this.log('🔍 Running pre-deployment checks...');
    try {
      // Check if we're on the right branch
      const currentBranch = execSync('git branch --show-current', { encoding: 'utf8' }).trim();
      if (currentBranch !== 'main' && currentBranch !== 'master') {
        throw new Error(`Not on main branch. Current branch: ${currentBranch}`);
      }

      // Check if working directory is clean
      const gitStatus = execSync('git status --porcelain', { encoding: 'utf8' });
      if (gitStatus.trim()) {
        throw new Error('Working directory is not clean. Please commit or stash changes.');
      }

      // Check if all tests pass
      execSync('npm test -- --watchAll=false', { stdio: 'inherit' });
      
      // Check if build succeeds
      execSync('npm run build', { stdio: 'inherit' });
      
      this.results.preDeploymentChecks = true;
      this.log('✅ Pre-deployment checks passed', 'success');
    } catch (error) {
      this.log(`❌ Pre-deployment checks failed: ${error.message}`, 'error');
      throw error;
    }
  }

  async buildApplication() {
    this.log('🏗️ Building application...');
    try {
      execSync('npm run build', { stdio: 'inherit' });
      this.results.buildSuccess = true;
      this.log('✅ Application built successfully', 'success');
    } catch (error) {
      this.log(`❌ Build failed: ${error.message}`, 'error');
      throw error;
    }
  }

  async runTests() {
    this.log('🧪 Running tests...');
    try {
      execSync('npm test -- --watchAll=false', { stdio: 'inherit' });
      this.results.testsPassed = true;
      this.log('✅ Tests passed', 'success');
    } catch (error) {
      this.log(`❌ Tests failed: ${error.message}`, 'error');
      throw error;
    }
  }

  async deployToStaging() {
    this.log('🚀 Deploying to staging...');
    try {
      // Create staging build
      execSync('npm run build:staging', { stdio: 'inherit' });
      
      // Deploy to staging (example with Vercel)
      execSync('npx vercel --prod --token=$VERCEL_TOKEN', { stdio: 'inherit' });
      
      this.log('✅ Deployed to staging successfully', 'success');
    } catch (error) {
      this.log(`❌ Staging deployment failed: ${error.message}`, 'error');
      throw error;
    }
  }

  async deployToProduction() {
    this.log('🚀 Deploying to production...');
    try {
      // Deploy to production
      execSync('npx vercel --prod --token=$VERCEL_TOKEN', { stdio: 'inherit' });
      
      this.results.deploymentSuccess = true;
      this.log('✅ Deployed to production successfully', 'success');
    } catch (error) {
      this.log(`❌ Production deployment failed: ${error.message}`, 'error');
      throw error;
    }
  }

  async postDeploymentChecks() {
    this.log('🔍 Running post-deployment checks...');
    try {
      // Wait for deployment to be ready
      await new Promise(resolve => setTimeout(resolve, 30000));
      
      // Check if the application is responding
      const response = execSync('curl -f https://your-app.vercel.app/api/health', { stdio: 'pipe' });
      
      if (response.toString().includes('OK')) {
        this.results.postDeploymentChecks = true;
        this.log('✅ Post-deployment checks passed', 'success');
      } else {
        throw new Error('Application is not responding correctly');
      }
    } catch (error) {
      this.log(`❌ Post-deployment checks failed: ${error.message}`, 'error');
      throw error;
    }
  }

  async rollback() {
    this.log('🔄 Rolling back deployment...');
    try {
      // Get the previous commit
      const previousCommit = execSync('git log --oneline -2 | tail -1 | cut -d" " -f1', { encoding: 'utf8' }).trim();
      
      // Reset to previous commit
      execSync(`git reset --hard ${previousCommit}`, { stdio: 'inherit' });
      
      // Force push to trigger new deployment
      execSync('git push --force-with-lease origin main', { stdio: 'inherit' });
      
      this.log('✅ Rollback completed', 'success');
    } catch (error) {
      this.log(`❌ Rollback failed: ${error.message}`, 'error');
    }
  }

  async generateReport() {
    const endTime = Date.now();
    const duration = endTime - this.startTime;
    
    const report = {
      timestamp: new Date().toISOString(),
      duration: `${duration}ms`,
      results: this.results,
      summary: {
        preDeploymentChecks: this.results.preDeploymentChecks,
        buildSuccess: this.results.buildSuccess,
        testsPassed: this.results.testsPassed,
        deploymentSuccess: this.results.deploymentSuccess,
        postDeploymentChecks: this.results.postDeploymentChecks,
        totalErrors: this.results.errors.length
      },
      status: this.results.deploymentSuccess && this.results.postDeploymentChecks ? 'SUCCESS' : 'FAILED'
    };

    fs.writeFileSync('deployment-report.json', JSON.stringify(report, null, 2));
    this.log('📄 Deployment report saved to: deployment-report.json');
    
    return report;
  }

  async run() {
    this.log('🚀 Starting Deployment Automation...');
    
    try {
      await this.preDeploymentChecks();
      await this.buildApplication();
      await this.runTests();
      await this.deployToStaging();
      await this.deployToProduction();
      await this.postDeploymentChecks();
      
      const report = await this.generateReport();
      
      if (report.status === 'SUCCESS') {
        this.log('🎉 Deployment completed successfully!', 'success');
      } else {
        this.log('❌ Deployment failed', 'error');
        await this.rollback();
      }
    } catch (error) {
      this.log(`💥 Deployment failed: ${error.message}`, 'error');
      await this.rollback();
    }
  }
}

// Run the deployment automation
const deployment = new DeploymentAutomation();
deployment.run().catch(console.error);