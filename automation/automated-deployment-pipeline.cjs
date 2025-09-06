#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class AutomatedDeploymentPipeline {
  constructor() {
    this.logFile = path.join(__dirname, 'logs', 'deployment-pipeline.log');
    this.reportsDir = path.join(__dirname, 'reports');
    this.deploymentFile = path.join(this.reportsDir, 'deployment-status.json');
    this.ensureDirectories();
  }

  ensureDirectories() {
    const dirs = [path.dirname(this.logFile), this.reportsDir];
    dirs.forEach(dir => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
    });
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}`;
    console.log(logMessage);
    fs.appendFileSync(this.logFile, logMessage + '\n');
  }

  async runCommand(command, description) {
    try {
      this.log(`Running: ${description}`);
      const result = execSync(command, { 
        stdio: 'pipe', 
        cwd: process.cwd(),
        timeout: 600000 // 10 minutes for deployment
      });
      this.log(`✓ ${description} completed successfully`);
      return { success: true, output: result.toString() };
    } catch (error) {
      this.log(`✗ ${description} failed: ${error.message}`);
      return { success: false, error: error.message };
    }
  }

  async preDeploymentChecks() {
    this.log('🔍 Running pre-deployment checks...');
    
    const checks = [
      { cmd: 'npm run lint:check', desc: 'Lint check' },
      { cmd: 'npm run type-check', desc: 'TypeScript check' },
      { cmd: 'npm run test:smoke', desc: 'Smoke tests' },
      { cmd: 'npm run build', desc: 'Build verification' }
    ];

    const results = {};
    for (const check of checks) {
      results[check.desc] = await this.runCommand(check.cmd, check.desc);
    }
    
    return results;
  }

  async buildApplication() {
    this.log('🏗️ Building application...');
    
    const buildSteps = [
      { cmd: 'npm run clean', desc: 'Clean build artifacts' },
      { cmd: 'npm run build', desc: 'Build application' },
      { cmd: 'npm run build:analyze', desc: 'Bundle analysis' }
    ];

    const results = {};
    for (const step of buildSteps) {
      results[step.desc] = await this.runCommand(step.cmd, step.desc);
    }
    
    return results;
  }

  async runTests() {
    this.log('🧪 Running test suite...');
    
    const testSteps = [
      { cmd: 'npm run test:smoke', desc: 'Smoke tests' },
      { cmd: 'npm run test:accessibility', desc: 'Accessibility tests' },
      { cmd: 'npm run test:performance', desc: 'Performance tests' }
    ];

    const results = {};
    for (const test of testSteps) {
      results[test.desc] = await this.runCommand(test.cmd, test.desc);
    }
    
    return results;
  }

  async securityAudit() {
    this.log('🔒 Running security audit...');
    
    const securitySteps = [
      { cmd: 'npm audit', desc: 'Security audit' },
      { cmd: 'npm run security:audit', desc: 'Enhanced security audit' }
    ];

    const results = {};
    for (const step of securitySteps) {
      results[step.desc] = await this.runCommand(step.cmd, step.desc);
    }
    
    return results;
  }

  async deployToStaging() {
    this.log('🚀 Deploying to staging...');
    
    const deploySteps = [
      { cmd: 'npm run deploy:staging', desc: 'Deploy to staging' },
      { cmd: 'npm run health:check', desc: 'Health check' }
    ];

    const results = {};
    for (const step of deploySteps) {
      results[step.desc] = await this.runCommand(step.cmd, step.desc);
    }
    
    return results;
  }

  async deployToProduction() {
    this.log('🌟 Deploying to production...');
    
    const deploySteps = [
      { cmd: 'npm run deploy:production', desc: 'Deploy to production' },
      { cmd: 'npm run health:check', desc: 'Production health check' }
    ];

    const results = {};
    for (const step of deploySteps) {
      results[step.desc] = await this.runCommand(step.cmd, step.desc);
    }
    
    return results;
  }

  async postDeploymentTasks() {
    this.log('📋 Running post-deployment tasks...');
    
    const tasks = [
      { cmd: 'npm run sitemap:generate', desc: 'Generate sitemap' },
      { cmd: 'npm run search:index', desc: 'Generate search index' },
      { cmd: 'npm run pm2:save', desc: 'Save PM2 configuration' }
    ];

    const results = {};
    for (const task of tasks) {
      results[task.desc] = await this.runCommand(task.cmd, task.desc);
    }
    
    return results;
  }

  async generateDeploymentReport(preChecks, buildResults, testResults, securityResults, stagingResults, productionResults, postTasks) {
    this.log('📊 Generating deployment report...');
    
    const report = {
      timestamp: new Date().toISOString(),
      deployment: {
        preChecks,
        build: buildResults,
        tests: testResults,
        security: securityResults,
        staging: stagingResults,
        production: productionResults,
        postDeployment: postTasks
      },
      status: this.calculateDeploymentStatus(preChecks, buildResults, testResults, securityResults),
      summary: this.generateDeploymentSummary(preChecks, buildResults, testResults, securityResults, stagingResults, productionResults)
    };

    fs.writeFileSync(this.deploymentFile, JSON.stringify(report, null, 2));
    this.log(`📊 Deployment report saved to: ${this.deploymentFile}`);
  }

  calculateDeploymentStatus(preChecks, build, tests, security) {
    const allResults = [
      ...Object.values(preChecks),
      ...Object.values(build),
      ...Object.values(tests),
      ...Object.values(security)
    ];
    
    const successCount = allResults.filter(r => r.success).length;
    const totalCount = allResults.length;
    const successRate = (successCount / totalCount) * 100;
    
    if (successRate >= 95) return 'success';
    if (successRate >= 80) return 'partial';
    return 'failed';
  }

  generateDeploymentSummary(preChecks, build, tests, security, staging, production) {
    const summary = {
      totalSteps: 0,
      successfulSteps: 0,
      failedSteps: 0,
      warnings: []
    };

    const allResults = [preChecks, build, tests, security, staging, production];
    
    allResults.forEach(resultSet => {
      Object.values(resultSet).forEach(result => {
        summary.totalSteps++;
        if (result.success) {
          summary.successfulSteps++;
        } else {
          summary.failedSteps++;
          summary.warnings.push(result.error || 'Unknown error');
        }
      });
    });

    return summary;
  }

  async run() {
    try {
      this.log('🚀 Starting Automated Deployment Pipeline...');
      
      const preChecks = await this.preDeploymentChecks();
      const buildResults = await this.buildApplication();
      const testResults = await this.runTests();
      const securityResults = await this.securityAudit();
      
      // Only proceed if all checks pass
      const allChecksPassed = Object.values(preChecks).every(r => r.success) &&
                            Object.values(buildResults).every(r => r.success) &&
                            Object.values(testResults).every(r => r.success) &&
                            Object.values(securityResults).every(r => r.success);
      
      if (!allChecksPassed) {
        this.log('❌ Pre-deployment checks failed. Aborting deployment.');
        return;
      }
      
      const stagingResults = await this.deployToStaging();
      const productionResults = await this.deployToProduction();
      const postTasks = await this.postDeploymentTasks();
      
      await this.generateDeploymentReport(preChecks, buildResults, testResults, securityResults, stagingResults, productionResults, postTasks);
      
      this.log('🎉 Automated Deployment Pipeline completed successfully!');
    } catch (error) {
      this.log(`❌ Automated Deployment Pipeline failed: ${error.message}`);
      process.exit(1);
    }
  }
}

// Run the deployment pipeline
const deploymentPipeline = new AutomatedDeploymentPipeline();
deploymentPipeline.run().catch(console.error);