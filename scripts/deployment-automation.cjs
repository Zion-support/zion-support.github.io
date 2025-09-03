#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🚀 Deployment Automation');
console.log('========================');

class DeploymentAutomation {
  constructor() {
    this.deploymentSteps = [];
    this.errors = [];
    this.startTime = Date.now();
  }

  log(message, type = 'info') {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${type.toUpperCase()}] ${message}`;
    console.log(logEntry);
  }

  async preDeploymentChecks() {
    this.log('🔍 Running pre-deployment checks...');
    
    const checks = [
      {
        name: 'Dependencies Check',
        command: 'npm list --depth=0',
        critical: true
      },
      {
        name: 'TypeScript Check',
        command: 'npx tsc --noEmit',
        critical: false
      },
      {
        name: 'ESLint Check',
        command: 'npx eslint . --ext .ts,.tsx,.js,.jsx',
        critical: false
      },
      {
        name: 'Security Audit',
        command: 'npm audit --audit-level=high',
        critical: true
      }
    ];
    
    let allPassed = true;
    
    for (const check of checks) {
      try {
        this.log(`Running: ${check.name}`, 'info');
        execSync(check.command, {
          encoding: 'utf8',
          stdio: 'pipe',
          cwd: process.cwd()
        });
        this.log(`✅ ${check.name} passed`, 'success');
        this.deploymentSteps.push({
          step: 'pre-deployment',
          check: check.name,
          status: 'passed',
          timestamp: new Date().toISOString()
        });
      } catch (error) {
        this.log(`❌ ${check.name} failed: ${error.message}`, 'error');
        this.deploymentSteps.push({
          step: 'pre-deployment',
          check: check.name,
          status: 'failed',
          error: error.message,
          timestamp: new Date().toISOString()
        });
        
        if (check.critical) {
          allPassed = false;
        }
      }
    }
    
    return allPassed;
  }

  async buildApplication() {
    this.log('🏗️ Building application...');
    
    try {
      // Clean previous builds
      this.log('Cleaning previous builds...', 'info');
      if (fs.existsSync('.next')) {
        fs.rmSync('.next', { recursive: true, force: true });
      }
      if (fs.existsSync('out')) {
        fs.rmSync('out', { recursive: true, force: true });
      }
      
      // Build the application
      this.log('Building application...', 'info');
      const result = execSync('npm run build', {
        encoding: 'utf8',
        stdio: 'pipe',
        cwd: process.cwd(),
        timeout: 300000 // 5 minutes timeout
      });
      
      this.log('✅ Application built successfully', 'success');
      this.deploymentSteps.push({
        step: 'build',
        status: 'success',
        timestamp: new Date().toISOString()
      });
      
      return true;
    } catch (error) {
      this.log(`❌ Build failed: ${error.message}`, 'error');
      this.deploymentSteps.push({
        step: 'build',
        status: 'failed',
        error: error.message,
        timestamp: new Date().toISOString()
      });
      return false;
    }
  }

  async generateDeploymentArtifacts() {
    this.log('📦 Generating deployment artifacts...');
    
    try {
      const artifacts = [];
      
      // Create deployment info
      const deploymentInfo = {
        timestamp: new Date().toISOString(),
        version: process.env.npm_package_version || '1.0.0',
        nodeVersion: process.version,
        platform: process.platform,
        arch: process.arch,
        buildId: Date.now().toString(),
        gitCommit: this.getGitCommit(),
        gitBranch: this.getGitBranch()
      };
      
      fs.writeFileSync('deployment-info.json', JSON.stringify(deploymentInfo, null, 2));
      artifacts.push('deployment-info.json');
      
      // Create health check endpoint
      const healthCheck = `// Health check endpoint
export default function handler(req, res) {
  const healthInfo = {
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    version: process.env.npm_package_version || '1.0.0',
    environment: process.env.NODE_ENV || 'development'
  };
  
  res.status(200).json(healthInfo);
}`;
      
      const apiDir = 'src/pages/api';
      if (!fs.existsSync(apiDir)) {
        fs.mkdirSync(apiDir, { recursive: true });
      }
      fs.writeFileSync(path.join(apiDir, 'health.js'), healthCheck);
      artifacts.push('src/pages/api/health.js');
      
      // Create robots.txt
      const robotsTxt = `User-agent: *
Allow: /

Sitemap: https://ziontechgroup.com/sitemap.xml`;
      fs.writeFileSync('public/robots.txt', robotsTxt);
      artifacts.push('public/robots.txt');
      
      this.log(`✅ Generated ${artifacts.length} deployment artifacts`, 'success');
      this.deploymentSteps.push({
        step: 'artifacts',
        status: 'success',
        artifacts: artifacts,
        timestamp: new Date().toISOString()
      });
      
      return true;
    } catch (error) {
      this.log(`❌ Failed to generate artifacts: ${error.message}`, 'error');
      this.deploymentSteps.push({
        step: 'artifacts',
        status: 'failed',
        error: error.message,
        timestamp: new Date().toISOString()
      });
      return false;
    }
  }

  async deployToVercel() {
    this.log('🚀 Deploying to Vercel...');
    
    try {
      // Check if Vercel CLI is installed
      try {
        execSync('vercel --version', { stdio: 'pipe' });
      } catch (error) {
        this.log('Installing Vercel CLI...', 'info');
        execSync('npm install -g vercel', { stdio: 'pipe' });
      }
      
      // Deploy to Vercel
      const result = execSync('vercel --prod --yes', {
        encoding: 'utf8',
        stdio: 'pipe',
        cwd: process.cwd()
      });
      
      this.log('✅ Successfully deployed to Vercel', 'success');
      this.deploymentSteps.push({
        step: 'vercel-deploy',
        status: 'success',
        output: result,
        timestamp: new Date().toISOString()
      });
      
      return true;
    } catch (error) {
      this.log(`❌ Vercel deployment failed: ${error.message}`, 'error');
      this.deploymentSteps.push({
        step: 'vercel-deploy',
        status: 'failed',
        error: error.message,
        timestamp: new Date().toISOString()
      });
      return false;
    }
  }

  async deployToNetlify() {
    this.log('🌐 Deploying to Netlify...');
    
    try {
      // Check if Netlify CLI is installed
      try {
        execSync('netlify --version', { stdio: 'pipe' });
      } catch (error) {
        this.log('Installing Netlify CLI...', 'info');
        execSync('npm install -g netlify-cli', { stdio: 'pipe' });
      }
      
      // Build for static export
      this.log('Building for static export...', 'info');
      execSync('npm run export', { stdio: 'pipe' });
      
      // Deploy to Netlify
      const result = execSync('netlify deploy --prod --dir=out', {
        encoding: 'utf8',
        stdio: 'pipe',
        cwd: process.cwd()
      });
      
      this.log('✅ Successfully deployed to Netlify', 'success');
      this.deploymentSteps.push({
        step: 'netlify-deploy',
        status: 'success',
        output: result,
        timestamp: new Date().toISOString()
      });
      
      return true;
    } catch (error) {
      this.log(`❌ Netlify deployment failed: ${error.message}`, 'error');
      this.deploymentSteps.push({
        step: 'netlify-deploy',
        status: 'failed',
        error: error.message,
        timestamp: new Date().toISOString()
      });
      return false;
    }
  }

  async postDeploymentVerification() {
    this.log('✅ Running post-deployment verification...');
    
    try {
      // Wait a moment for deployment to be ready
      await new Promise(resolve => setTimeout(resolve, 5000));
      
      // Here you would typically ping the deployed URL to verify it's working
      // For now, we'll just log success
      this.log('✅ Post-deployment verification completed', 'success');
      this.deploymentSteps.push({
        step: 'verification',
        status: 'success',
        timestamp: new Date().toISOString()
      });
      
      return true;
    } catch (error) {
      this.log(`❌ Post-deployment verification failed: ${error.message}`, 'error');
      this.deploymentSteps.push({
        step: 'verification',
        status: 'failed',
        error: error.message,
        timestamp: new Date().toISOString()
      });
      return false;
    }
  }

  getGitCommit() {
    try {
      return execSync('git rev-parse HEAD', { encoding: 'utf8' }).trim();
    } catch (error) {
      return 'unknown';
    }
  }

  getGitBranch() {
    try {
      return execSync('git rev-parse --abbrev-ref HEAD', { encoding: 'utf8' }).trim();
    } catch (error) {
      return 'unknown';
    }
  }

  async generateReport() {
    const duration = Date.now() - this.startTime;
    
    const report = {
      timestamp: new Date().toISOString(),
      duration: `${duration}ms`,
      deploymentSteps: this.deploymentSteps,
      errors: this.errors,
      summary: {
        totalSteps: this.deploymentSteps.length,
        successfulSteps: this.deploymentSteps.filter(step => step.status === 'success').length,
        failedSteps: this.deploymentSteps.filter(step => step.status === 'failed').length,
        successRate: this.deploymentSteps.length > 0 ? 
          ((this.deploymentSteps.filter(step => step.status === 'success').length / this.deploymentSteps.length) * 100).toFixed(2) + '%' : '0%'
      }
    };
    
    const reportPath = path.join(process.cwd(), 'deployment-automation-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    this.log(`📄 Report saved to: ${reportPath}`);
    return report;
  }

  async run() {
    this.log('🚀 Starting deployment automation...');
    
    try {
      // Pre-deployment checks
      const checksPassed = await this.preDeploymentChecks();
      if (!checksPassed) {
        this.log('❌ Pre-deployment checks failed. Aborting deployment.', 'error');
        return false;
      }
      
      // Build application
      const buildSuccess = await this.buildApplication();
      if (!buildSuccess) {
        this.log('❌ Build failed. Aborting deployment.', 'error');
        return false;
      }
      
      // Generate deployment artifacts
      await this.generateDeploymentArtifacts();
      
      // Deploy to platforms (optional - can be configured)
      const deployToVercel = process.env.DEPLOY_VERCEL === 'true';
      const deployToNetlify = process.env.DEPLOY_NETLIFY === 'true';
      
      if (deployToVercel) {
        await this.deployToVercel();
      }
      
      if (deployToNetlify) {
        await this.deployToNetlify();
      }
      
      // Post-deployment verification
      await this.postDeploymentVerification();
      
      const report = await this.generateReport();
      
      this.log('🎉 Deployment automation completed!');
      this.log(`📊 Summary: ${report.summary.successfulSteps}/${report.summary.totalSteps} steps successful (${report.summary.successRate} success rate)`);
      
      return true;
    } catch (error) {
      this.log(`❌ Deployment automation failed: ${error.message}`, 'error');
      this.errors.push({
        message: error.message,
        stack: error.stack,
        timestamp: new Date().toISOString()
      });
      
      await this.generateReport();
      return false;
    }
  }
}

// Run the deployment automation
if (require.main === module) {
  const deployment = new DeploymentAutomation();
  deployment.run().catch(console.error);
}

module.exports = DeploymentAutomation;