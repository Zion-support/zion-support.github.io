#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');
const { promisify } = require('util');

const execAsync = promisify(exec);

class DeploymentAutomation {
  constructor() {
    this.projectRoot = process.cwd();
    this.reportsDir = path.join(this.projectRoot, 'automation-reports');
    this.ensureDirectories();
  }

  ensureDirectories() {
    if (!fs.existsSync(this.reportsDir)) {
      fs.mkdirSync(this.reportsDir, { recursive: true });
    }
  }

  log(message, type = 'INFO') {
    const timestamp = new Date().toISOString();
    const prefix = type === 'ERROR' ? '❌' : type === 'SUCCESS' ? '✅' : type === 'WARNING' ? '⚠️' : 'ℹ️';
    console.log(`${prefix} ${message}`);
  }

  async runCommand(command, description = '') {
    try {
      this.log(`Running: ${description || command}`);
      const { stdout, stderr } = await execAsync(command, {
        cwd: this.projectRoot,
        timeout: 300000, // 5 minutes for deployment
      });

      this.log(`✅ ${description || command} completed successfully`, 'SUCCESS');
      return { success: true, stdout, stderr };
    } catch (error) {
      this.log(`❌ ${description || command} failed: ${error.message}`, 'ERROR');
      return { 
        success: false, 
        stdout: error.stdout || '', 
        stderr: error.stderr || error.message 
      };
    }
  }

  async preDeploymentChecks() {
    this.log('🔍 Running pre-deployment checks...');
    
    const checks = [
      { command: 'npm run build', description: 'Build check' },
      { command: 'npm run test:smoke', description: 'Smoke test check' }
    ];

    const results = [];
    for (const check of checks) {
      const result = await this.runCommand(check.command, check.description);
      results.push({ ...check, result });
    }

    const allPassed = results.every(r => r.result.success);
    return {
      name: 'Pre-deployment Checks',
      status: allPassed ? 'passed' : 'failed',
      details: allPassed ? 'All pre-deployment checks passed' : 'Some pre-deployment checks failed',
      results
    };
  }

  async buildApplication() {
    this.log('🏗️ Building application...');
    const result = await this.runCommand('npm run build', 'Application build');
    return {
      name: 'Application Build',
      status: result.success ? 'completed' : 'failed',
      details: result.success ? 'Application built successfully' : result.stderr,
      result
    };
  }

  async generateSitemap() {
    this.log('🗺️ Generating sitemap...');
    const result = await this.runCommand('node scripts/generate-sitemap-fixed.js', 'Sitemap generation');
    return {
      name: 'Sitemap Generation',
      status: result.success ? 'completed' : 'failed',
      details: result.success ? 'Sitemap generated successfully' : result.stderr,
      result
    };
  }

  async optimizeAssets() {
    this.log('⚡ Optimizing assets...');
    const result = await this.runCommand('npm run build:analyze', 'Asset optimization');
    return {
      name: 'Asset Optimization',
      status: result.success ? 'completed' : 'failed',
      details: result.success ? 'Assets optimized successfully' : result.stderr,
      result
    };
  }

  async deployToProduction() {
    this.log('🚀 Deploying to production...');
    
    // Check if PM2 is available for deployment
    const pm2Result = await this.runCommand('pm2 --version', 'PM2 version check');
    
    if (pm2Result.success) {
      const deployResult = await this.runCommand('pm2 start ecosystem.config.cjs', 'PM2 deployment');
      return {
        name: 'Production Deployment',
        status: deployResult.success ? 'completed' : 'failed',
        details: deployResult.success ? 'Deployed to production via PM2' : deployResult.stderr,
        result: deployResult
      };
    } else {
      return {
        name: 'Production Deployment',
        status: 'skipped',
        details: 'PM2 not available, manual deployment required',
        result: pm2Result
      };
    }
  }

  async postDeploymentVerification() {
    this.log('✅ Running post-deployment verification...');
    
    const checks = [
      { command: 'pm2 status', description: 'PM2 status check' },
      { command: 'curl -I http://localhost:3000', description: 'Application health check' }
    ];

    const results = [];
    for (const check of checks) {
      const result = await this.runCommand(check.command, check.description);
      results.push({ ...check, result });
    }

    const allPassed = results.every(r => r.result.success);
    return {
      name: 'Post-deployment Verification',
      status: allPassed ? 'passed' : 'warning',
      details: allPassed ? 'All post-deployment checks passed' : 'Some post-deployment checks failed',
      results
    };
  }

  async runDeployment() {
    this.log('🚀 Starting deployment automation...');

    const steps = [
      await this.preDeploymentChecks(),
      await this.buildApplication(),
      await this.generateSitemap(),
      await this.optimizeAssets(),
      await this.deployToProduction(),
      await this.postDeploymentVerification()
    ];

    const completedCount = steps.filter(step => step.status === 'completed' || step.status === 'passed').length;
    const failedCount = steps.filter(step => step.status === 'failed').length;
    const skippedCount = steps.filter(step => step.status === 'skipped').length;

    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        total: steps.length,
        completed: completedCount,
        failed: failedCount,
        skipped: skippedCount
      },
      steps
    };

    const reportFile = path.join(this.reportsDir, `deployment-automation-report-${Date.now()}.json`);
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));

    this.log(`📊 Deployment automation completed. ${completedCount} completed, ${failedCount} failed, ${skippedCount} skipped`, 'SUCCESS');
    this.log(`📄 Report saved to: ${reportFile}`, 'SUCCESS');
    
    return report;
  }
}

// CLI interface
if (require.main === module) {
  const deployment = new DeploymentAutomation();
  deployment.runDeployment().catch(error => {
    console.error('Deployment automation failed:', error);
    process.exit(1);
  });
}

module.exports = DeploymentAutomation;