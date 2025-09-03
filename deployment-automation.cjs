#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class DeploymentAutomation {
  constructor() {
    this.projectRoot = process.cwd();
    this.deploymentSteps = [];
    this.errors = [];
  }

  log(message) {
    console.log(`[${new Date().toISOString()}] ${message}`);
  }

  async runCommand(command, description) {
    this.log(`🚀 ${description}`);
    try {
      const result = execSync(command, { 
        cwd: this.projectRoot, 
        encoding: 'utf8',
        timeout: 300000 
      });
      this.deploymentSteps.push({ step: description, status: 'success' });
      this.log(`✅ ${description} completed`);
      return { success: true, output: result };
    } catch (error) {
      this.deploymentSteps.push({ step: description, status: 'failed', error: error.message });
      this.errors.push({ step: description, error: error.message });
      this.log(`❌ ${description} failed: ${error.message}`);
      return { success: false, error: error.message };
    }
  }

  async preDeploymentChecks() {
    this.log('🔍 Running pre-deployment checks...');
    
    const checks = [
      { command: 'npm run lint', description: 'Linting check' },
      { command: 'npm run type-check', description: 'TypeScript check' },
      { command: 'npm run build', description: 'Build test' }
    ];

    for (const check of checks) {
      await this.runCommand(check.command, check.description);
    }
  }

  async buildApplication() {
    this.log('🏗️ Building application...');
    await this.runCommand('npm run build', 'Production build');
  }

  async runTests() {
    this.log('🧪 Running tests...');
    // Add test commands here when tests are available
    this.log('No tests configured yet');
  }

  async deployToNetlify() {
    this.log('🌐 Deploying to Netlify...');
    
    // Check if netlify CLI is available
    try {
      execSync('netlify --version', { cwd: this.projectRoot });
      await this.runCommand('netlify deploy --prod', 'Deploy to production');
    } catch (error) {
      this.log('Netlify CLI not found, skipping deployment');
    }
  }

  generateDeploymentReport() {
    const report = {
      timestamp: new Date().toISOString(),
      steps: this.deploymentSteps,
      errors: this.errors,
      summary: {
        totalSteps: this.deploymentSteps.length,
        successfulSteps: this.deploymentSteps.filter(s => s.status === 'success').length,
        failedSteps: this.deploymentSteps.filter(s => s.status === 'failed').length
      }
    };

    const reportPath = path.join(this.projectRoot, 'deployment-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    this.log(`Deployment report saved to ${reportPath}`);
  }

  async run() {
    this.log('🚀 Starting deployment automation...');
    await this.preDeploymentChecks();
    await this.buildApplication();
    await this.runTests();
    await this.deployToNetlify();
    this.generateDeploymentReport();
    this.log('🎉 Deployment automation completed');
  }
}

if (require.main === module) {
  const deployment = new DeploymentAutomation();
  deployment.run().catch(console.error);
}

module.exports = DeploymentAutomation;