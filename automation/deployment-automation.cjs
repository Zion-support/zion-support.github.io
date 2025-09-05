#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Deployment Automation Starting...');

class DeploymentAutomation {
  constructor() {
    this.logFile = '/workspace/automation/logs/deployment.log';
    this.ensureLogDir();
  }

  ensureLogDir() {
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

  async runCommand(command, description) {
    try {
      this.log(`Running: ${description}`);
      const result = execSync(command, {
        cwd: '/workspace',
        encoding: 'utf8',
        stdio: 'pipe',
      });
      this.log(`✅ ${description} completed successfully`);
      return { success: true, output: result };
    } catch (error) {
      this.log(`❌ ${description} failed: ${error.message}`);
      return { success: false, error: error.message };
    }
  }

  async preDeploymentChecks() {
    this.log('🔍 Running pre-deployment checks...');

    const checks = [
      { cmd: 'npm run test:smoke', desc: 'Smoke Tests' },
      { cmd: 'npm run lint:check', desc: 'Lint Check' },
      { cmd: 'npm run type-check', desc: 'Type Check' },
      { cmd: 'npm run build', desc: 'Build Test' },
    ];

    const results = [];
    for (const check of checks) {
      const result = await this.runCommand(check.cmd, check.desc);
      results.push({ ...check, ...result });
    }

    const failedChecks = results.filter(r => !r.success);
    if (failedChecks.length > 0) {
      throw new Error(
        `Pre-deployment checks failed: ${failedChecks.map(c => c.desc).join(', ')}`
      );
    }

    return results;
  }

  async buildApplication() {
    this.log('🏗️ Building application...');

    const buildSteps = [
      { cmd: 'npm run clean', desc: 'Clean Build Directory' },
      { cmd: 'npm run build', desc: 'Build Application' },
      { cmd: 'npm run build:analyze', desc: 'Bundle Analysis' },
    ];

    const results = [];
    for (const step of buildSteps) {
      const result = await this.runCommand(step.cmd, step.desc);
      results.push({ ...step, ...result });
    }

    return results;
  }

  async runSecurityAudit() {
    this.log('🔒 Running security audit...');

    const securitySteps = [
      { cmd: 'npm audit --audit-level moderate', desc: 'Security Audit' },
      { cmd: 'npm run security:scan', desc: 'Security Scan' },
    ];

    const results = [];
    for (const step of securitySteps) {
      const result = await this.runCommand(step.cmd, step.desc);
      results.push({ ...step, ...result });
    }

    return results;
  }

  async generateDeploymentArtifacts() {
    this.log('📦 Generating deployment artifacts...');

    const artifacts = [
      { cmd: 'npm run sitemap:generate', desc: 'Generate Sitemap' },
      { cmd: 'npm run search:index', desc: 'Generate Search Index' },
    ];

    const results = [];
    for (const artifact of artifacts) {
      const result = await this.runCommand(artifact.cmd, artifact.desc);
      results.push({ ...artifact, ...result });
    }

    return results;
  }

  async commitAndPush() {
    this.log('📝 Committing and pushing changes...');

    const gitSteps = [
      { cmd: 'git add .', desc: 'Stage Changes' },
      {
        cmd: 'git commit -m "Automated deployment: $(date)"',
        desc: 'Commit Changes',
      },
      { cmd: 'git push origin main', desc: 'Push to Main Branch' },
    ];

    const results = [];
    for (const step of gitSteps) {
      const result = await this.runCommand(step.cmd, step.desc);
      results.push({ ...step, ...result });
    }

    return results;
  }

  async run() {
    try {
      this.log('🚀 Starting Deployment Automation');

      // Pre-deployment checks
      await this.preDeploymentChecks();

      // Build application
      await this.buildApplication();

      // Security audit
      await this.runSecurityAudit();

      // Generate deployment artifacts
      await this.generateDeploymentArtifacts();

      // Commit and push
      await this.commitAndPush();

      this.log('✅ Deployment Automation completed successfully');
    } catch (error) {
      this.log(`❌ Deployment Automation failed: ${error.message}`);
      throw error;
    }
  }
}

// Run the deployment automation
if (require.main === module) {
  const deployment = new DeploymentAutomation();
  deployment
    .run()
    .then(() => {
      console.log('✅ Deployment completed successfully');
      process.exit(0);
    })
    .catch(error => {
      console.error('❌ Deployment failed:', error.message);
      process.exit(1);
    });
}

module.exports = DeploymentAutomation;
