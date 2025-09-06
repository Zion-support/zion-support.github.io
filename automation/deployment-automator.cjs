#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Starting Deployment Automator...');

class DeploymentAutomator {
  constructor() {
    this.deploymentResults = [];
    this.reportPath = path.join(__dirname, '..', 'automation-reports', 'deployment-report.json');
    this.ensureReportDir();
  }

  ensureReportDir() {
    const reportDir = path.dirname(this.reportPath);
    if (!fs.existsSync(reportDir)) {
      fs.mkdirSync(reportDir, { recursive: true });
    }
  }

  log(message) {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${message}`);
  }

  async runCommand(command, description) {
    try {
      this.log(`🚀 ${description}`);
      const result = execSync(command, {
        encoding: 'utf8',
        stdio: 'pipe',
        cwd: path.join(__dirname, '..'),
      });
      this.log(`✅ ${description} - Success`);
      return { success: true, result };
    } catch (error) {
      this.log(`❌ ${description} - Failed: ${error.message}`);
      return { success: false, error: error.message };
    }
  }

  async preDeploymentChecks() {
    this.log('🔍 Running pre-deployment checks...');
    
    const checks = [
      { cmd: 'npm run lint:check', desc: 'Lint check' },
      { cmd: 'npm run type-check', desc: 'Type check' },
      { cmd: 'npm run test:smoke', desc: 'Smoke tests' },
      { cmd: 'npm run build', desc: 'Build verification' }
    ];

    for (const check of checks) {
      const result = await this.runCommand(check.cmd, check.desc);
      this.deploymentResults.push(result);
      if (!result.success) {
        this.log(`⚠️ Pre-deployment check failed: ${check.desc}`);
        return false;
      }
    }

    return true;
  }

  async buildApplication() {
    this.log('🏗️ Building application...');
    return await this.runCommand('npm run build', 'Application build');
  }

  async optimizeAssets() {
    this.log('⚡ Optimizing assets...');
    return await this.runCommand('npm run optimize:images', 'Asset optimization');
  }

  async generateSitemap() {
    this.log('🗺️ Generating sitemap...');
    return await this.runCommand('npm run sitemap:generate', 'Sitemap generation');
  }

  async runSecurityAudit() {
    this.log('🔒 Running security audit...');
    return await this.runCommand('npm audit', 'Security audit');
  }

  async deployToStaging() {
    this.log('🚀 Deploying to staging...');
    return await this.runCommand('npm run deploy:staging', 'Staging deployment');
  }

  async deployToProduction() {
    this.log('🌟 Deploying to production...');
    return await this.runCommand('npm run deploy:production', 'Production deployment');
  }

  async postDeploymentVerification() {
    this.log('✅ Running post-deployment verification...');
    
    const verifications = [
      { cmd: 'curl -f http://localhost:3000', desc: 'Health check' },
      { cmd: 'npm run test:smoke', desc: 'Post-deployment tests' }
    ];

    for (const verification of verifications) {
      const result = await this.runCommand(verification.cmd, verification.desc);
      this.deploymentResults.push(result);
    }
  }

  async generateReport() {
    this.log('📊 Generating deployment report...');

    const report = {
      timestamp: new Date().toISOString(),
      deploymentResults: this.deploymentResults,
      summary: {
        totalSteps: this.deploymentResults.length,
        successfulSteps: this.deploymentResults.filter(s => s.success).length,
        failedSteps: this.deploymentResults.filter(s => !s.success).length,
        successRate: this.deploymentResults.filter(s => s.success).length / this.deploymentResults.length * 100
      }
    };

    fs.writeFileSync(this.reportPath, JSON.stringify(report, null, 2));
    this.log(`📊 Deployment report saved to: ${this.reportPath}`);
  }

  async run() {
    try {
      this.log('🎯 Starting deployment automation...');

      // Pre-deployment checks
      const preChecksPassed = await this.preDeploymentChecks();
      if (!preChecksPassed) {

      // Build and optimize
      this.deploymentResults.push(await this.buildApplication());
      this.deploymentResults.push(await this.optimizeAssets());
      this.deploymentResults.push(await this.generateSitemap());
      this.deploymentResults.push(await this.runSecurityAudit());

      // Deploy
      this.deploymentResults.push(await this.deployToStaging());
      this.deploymentResults.push(await this.deployToProduction());

      // Post-deployment verification
      await this.postDeploymentVerification();

      await this.generateReport();

      const successfulSteps = this.deploymentResults.filter(s => s.success).length;
      const totalSteps = this.deploymentResults.length;
      
      this.log(`🎉 Deployment automation completed!`);
      this.log(`📊 Successful steps: ${successfulSteps}/${totalSteps}`);
      this.log(`📈 Success rate: ${(successfulSteps/totalSteps*100).toFixed(1)}%`);
    } catch (error) {
      this.log(`❌ Deployment automation failed: ${error.message}`);
      process.exit(1);
    }
  }
}

// Run the deployment automator
const automator = new DeploymentAutomator();
automator.run().catch(console.error);
