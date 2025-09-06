#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🚀 Starting Deployment Automation...');

class DeploymentAutomation {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'automation-reports', 'deployment-automation.log');
    this.reportFile = path.join(this.projectRoot, 'automation-reports', 'deployment-automation-report.json');
    this.ensureLogDir();
  }

  ensureLogDir() {
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}`;
    console.log(logMessage);
    fs.appendFileSync(this.logFile, logMessage + '\n');
  }

  async preDeploymentChecks() {
    this.log('🔍 Running pre-deployment checks...');

    const checks = {
      timestamp: new Date().toISOString(),
      results: [],
      passed: 0,
      failed: 0,
    };

    // Check if build exists
    try {
      if (fs.existsSync('.next')) {
        checks.results.push({ name: 'Build exists', status: 'passed' });
        checks.passed++;
      } else {
        checks.results.push({ name: 'Build exists', status: 'failed', message: 'No build found' });
        checks.failed++;
      }
    } catch (error) {
      checks.results.push({ name: 'Build exists', status: 'error', message: error.message });
      checks.failed++;
    }

    // Check if tests pass
    try {
      execSync('npm run test:smoke', { encoding: 'utf8' });
      checks.results.push({ name: 'Tests pass', status: 'passed' });
      checks.passed++;
    } catch (error) {
      checks.results.push({ name: 'Tests pass', status: 'failed', message: 'Tests are failing' });
      checks.failed++;
    }

    // Check for TypeScript errors
    try {
      execSync('npx tsc --noEmit', { encoding: 'utf8' });
      checks.results.push({ name: 'TypeScript compilation', status: 'passed' });
      checks.passed++;
    } catch (error) {
      checks.results.push({ name: 'TypeScript compilation', status: 'failed', message: 'TypeScript errors found' });
      checks.failed++;
    }

    // Check for security vulnerabilities
    try {
      const auditResult = execSync('npm audit --json 2>/dev/null || echo "{}"', { encoding: 'utf8' });
      const audit = JSON.parse(auditResult);
      const vulns = audit.metadata?.vulnerabilities || {};
      
      if (vulns.high > 0) {
        checks.results.push({ name: 'Security audit', status: 'failed', message: `${vulns.high} high severity vulnerabilities` });
        checks.failed++;
      } else {
        checks.results.push({ name: 'Security audit', status: 'passed' });
        checks.passed++;
      }
    } catch (error) {
      checks.results.push({ name: 'Security audit', status: 'warning', message: 'Unable to check vulnerabilities' });
    }

    return {
      success: checks.failed === 0,
      checks,
    };
  }

  async buildApplication() {
    this.log('🔨 Building application...');

    try {
      const buildOutput = execSync('npm run build', { encoding: 'utf8' });
      
      return {
        success: true,
        output: buildOutput,
        message: 'Build completed successfully',
      };
    } catch (error) {
      this.log(`Build failed: ${error.message}`, 'ERROR');
      return {
        success: false,
        error: error.message,
        output: error.stdout || error.stderr || '',
      };
    }
  }

  async deployToNetlify() {
    this.log('🌐 Deploying to Netlify...');

    try {
      // Check if Netlify CLI is available
      try {
        execSync('netlify --version', { encoding: 'utf8' });
      } catch (error) {
        return {
          success: false,
          error: 'Netlify CLI not found. Please install it first.',
        };
      }

      // Deploy to Netlify
      const deployOutput = execSync('netlify deploy --prod --dir=.next', { encoding: 'utf8' });
      
      return {
        success: true,
        output: deployOutput,
        message: 'Deployed to Netlify successfully',
      };
    } catch (error) {
      this.log(`Netlify deployment failed: ${error.message}`, 'ERROR');
      return {
        success: false,
        error: error.message,
        output: error.stdout || error.stderr || '',
      };
    }
  }

  async deployToVercel() {
    this.log('▲ Deploying to Vercel...');

    try {
      // Check if Vercel CLI is available
      try {
        execSync('vercel --version', { encoding: 'utf8' });
      } catch (error) {
        return {
          success: false,
          error: 'Vercel CLI not found. Please install it first.',
        };
      }

      // Deploy to Vercel
      const deployOutput = execSync('vercel --prod', { encoding: 'utf8' });
      
      return {
        success: true,
        output: deployOutput,
        message: 'Deployed to Vercel successfully',
      };
    } catch (error) {
      this.log(`Vercel deployment failed: ${error.message}`, 'ERROR');
      return {
        success: false,
        error: error.message,
        output: error.stdout || error.stderr || '',
      };
    }
  }

  async deployToDocker() {
    this.log('🐳 Deploying to Docker...');

    try {
      // Check if Docker is available
      try {
        execSync('docker --version', { encoding: 'utf8' });
      } catch (error) {
        return {
          success: false,
          error: 'Docker not found. Please install it first.',
        };
      }

      // Build Docker image
      const buildOutput = execSync('docker build -t ziontechgroup-site .', { encoding: 'utf8' });
      
      return {
        success: true,
        output: buildOutput,
        message: 'Docker image built successfully',
      };
    } catch (error) {
      this.log(`Docker deployment failed: ${error.message}`, 'ERROR');
      return {
        success: false,
        error: error.message,
        output: error.stdout || error.stderr || '',
      };
    }
  }

  async postDeploymentVerification() {
    this.log('✅ Running post-deployment verification...');

    const verification = {
      timestamp: new Date().toISOString(),
      checks: [],
      passed: 0,
      failed: 0,
    };

    // Check if build still exists
    if (fs.existsSync('.next')) {
      verification.checks.push({ name: 'Build exists after deployment', status: 'passed' });
      verification.passed++;
    } else {
      verification.checks.push({ name: 'Build exists after deployment', status: 'failed' });
      verification.failed++;
    }

    // Check if tests still pass
    try {
      execSync('npm run test:smoke', { encoding: 'utf8' });
      verification.checks.push({ name: 'Tests pass after deployment', status: 'passed' });
      verification.passed++;
    } catch (error) {
      verification.checks.push({ name: 'Tests pass after deployment', status: 'failed' });
      verification.failed++;
    }

    return {
      success: verification.failed === 0,
      verification,
    };
  }

  async generateDeploymentReport() {
    this.log('📊 Generating deployment report...');

    const report = {
      timestamp: new Date().toISOString(),
      preDeploymentChecks: await this.preDeploymentChecks(),
      build: await this.buildApplication(),
      deployments: {
        netlify: await this.deployToNetlify(),
        vercel: await this.deployToVercel(),
        docker: await this.deployToDocker(),
      },
      postDeploymentVerification: await this.postDeploymentVerification(),
      summary: {
        overallSuccess: false,
        totalDeployments: 0,
        successfulDeployments: 0,
        failedDeployments: 0,
      },
    };

    // Calculate summary
    const deployments = Object.values(report.deployments);
    report.summary.totalDeployments = deployments.length;
    report.summary.successfulDeployments = deployments.filter(d => d.success).length;
    report.summary.failedDeployments = deployments.filter(d => !d.success).length;
    
    report.summary.overallSuccess = 
      report.preDeploymentChecks.success &&
      report.build.success &&
      report.postDeploymentVerification.success &&
      report.summary.successfulDeployments > 0;

    fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2));
    this.log(`📊 Report saved to: ${this.reportFile}`);

    return report;
  }

  async run() {
    try {
      this.log('🎯 Starting deployment automation...');

      const report = await this.generateDeploymentReport();

      this.log(`🎉 Deployment automation completed!`);
      this.log(`📊 Overall Success: ${report.summary.overallSuccess ? 'Yes' : 'No'}`);
      this.log(`🚀 Successful Deployments: ${report.summary.successfulDeployments}/${report.summary.totalDeployments}`);
      
      if (report.summary.failedDeployments > 0) {
        this.log(`❌ Failed Deployments: ${report.summary.failedDeployments}`);
      }
    } catch (error) {
      this.log(`❌ Deployment automation failed: ${error.message}`);
      process.exit(1);
    }
  }
}

// Run the deployment automation
const deployment = new DeploymentAutomation();
deployment.run().catch(console.error);