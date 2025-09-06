#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Starting Deployment Automator...');

class DeploymentAutomator {
  constructor() {
    this.projectRoot = process.cwd();
    this.reportsDir = path.join(this.projectRoot, 'automation-reports');
    this.ensureReportsDir();
  }

  ensureReportsDir() {
    if (!fs.existsSync(this.reportsDir)) {
      fs.mkdirSync(this.reportsDir, { recursive: true });
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
        cwd: this.projectRoot,
        timeout: 300000
      });
      this.log(`✅ ${description} completed`);
      return { success: true, result };
    } catch (error) {
      this.log(`❌ ${description} failed: ${error.message}`);
      return { success: false, error: error.message };
    }
  }

  async deploy() {
    this.log('🚀 Starting deployment process...');
    
    const steps = [
      { cmd: 'npm ci', desc: 'Install dependencies' },
      { cmd: 'npm run lint:check', desc: 'Check linting' },
      { cmd: 'npm run type-check', desc: 'Check types' },
      { cmd: 'npm run test:smoke', desc: 'Run smoke tests' },
      { cmd: 'npm run build', desc: 'Build application' },
      { cmd: 'npm run deploy:production', desc: 'Deploy to production' }
    ];

    const results = [];
    let successfulSteps = 0;

    for (const step of steps) {
      const result = await this.runCommand(step.cmd, step.desc);
      results.push({
        ...step,
        ...result
      });
      
      if (result.success) {
        successfulSteps++;
      } else {
        this.log(`❌ Deployment failed at step: ${step.desc}`);
        break;
      }
    }

    const report = {
      timestamp: new Date().toISOString(),
      totalSteps: steps.length,
      successfulSteps,
      failedSteps: steps.length - successfulSteps,
      results,
      deploymentStatus: successfulSteps === steps.length ? 'success' : 'failed'
    };

    const reportPath = path.join(this.reportsDir, 'deployment-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    this.log(`📊 Deployment completed! Report saved to: ${reportPath}`);
    this.log(`📈 Deployment Status: ${report.deploymentStatus} (${successfulSteps}/${steps.length} steps successful)`);
    
    return report;
  }
}

// Run the deployment automator
const automator = new DeploymentAutomator();
automator.deploy().catch(console.error);