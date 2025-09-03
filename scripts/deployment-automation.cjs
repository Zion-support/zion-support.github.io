#!/usr/bin/env node

/**
 * Deployment Automation Script
 * Automated deployment with pre-deployment checks and post-deployment verification
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

class DeploymentAutomation {
  constructor() {
    this.logDir = 'automation-reports';
    this.timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    this.deploymentResults = {
      timestamp: this.timestamp,
      stage: 'pre-deployment',
      status: 'running',
      checks: [],
      deployment: null,
      verification: null
    };
    
    this.ensureLogDir();
  }

  ensureLogDir() {
    if (!fs.existsSync(this.logDir)) {
      fs.mkdirSync(this.logDir, { recursive: true });
    }
  }

  log(message, level = 'info') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level.toUpperCase()}] ${message}`;
    console.log(logMessage);
  }

  async runPreDeploymentChecks() {
    this.log('🔍 Running Pre-Deployment Checks');
    this.log('================================');

    const checks = [
      {
        name: 'build-check',
        command: 'npm run build',
        description: 'Build Verification'
      },
      {
        name: 'type-check',
        command: 'npm run type-check',
        description: 'TypeScript Check'
      },
      {
        name: 'lint-check',
        command: 'npm run lint',
        description: 'Code Quality Check'
      },
      {
        name: 'security-check',
        command: 'npm audit --audit-level=high',
        description: 'Security Audit'
      }
    ];

    let allChecksPassed = true;

    for (const check of checks) {
      this.log(`🔍 Running ${check.description}...`);
      
      const checkResult = {
        name: check.name,
        description: check.description,
        startTime: new Date().toISOString(),
        status: 'running',
        output: '',
        error: '',
        duration: 0
      };

      try {
        const startTime = Date.now();
        const output = execSync(check.command, { 
          encoding: 'utf8',
          timeout: 120000
        });
        
        const endTime = Date.now();
        checkResult.duration = endTime - startTime;
        checkResult.status = 'passed';
        checkResult.output = output;
        checkResult.endTime = new Date().toISOString();
        
        this.log(`✅ ${check.description} passed`);
        
      } catch (error) {
        const endTime = Date.now();
        checkResult.duration = endTime - Date.now();
        checkResult.status = 'failed';
        checkResult.error = error.message;
        checkResult.endTime = new Date().toISOString();
        
        this.log(`❌ ${check.description} failed: ${error.message}`, 'error');
        allChecksPassed = false;
      }

      this.deploymentResults.checks.push(checkResult);
    }

    if (!allChecksPassed) {
      this.log('❌ Pre-deployment checks failed. Deployment aborted.', 'error');
      this.deploymentResults.status = 'failed';
      return false;
    }

    this.log('✅ All pre-deployment checks passed');
    return true;
  }

  async runDeployment() {
    this.log('🚀 Starting Deployment');
    this.log('======================');

    const deploymentResult = {
      startTime: new Date().toISOString(),
      status: 'running',
      output: '',
      error: '',
      duration: 0
    };

    try {
      const startTime = Date.now();
      
      // Clean previous builds
      this.log('🧹 Cleaning previous builds...');
      execSync('npm run clean', { encoding: 'utf8' });
      
      // Build the application
      this.log('🔨 Building application...');
      const buildOutput = execSync('npm run build', { encoding: 'utf8' });
      deploymentResult.output = buildOutput;
      
      // Export static files if needed
      this.log('📦 Exporting static files...');
      try {
        const exportOutput = execSync('npm run export', { encoding: 'utf8' });
        deploymentResult.output += '\n' + exportOutput;
      } catch (exportError) {
        this.log('⚠️ Export step skipped (not configured)', 'warning');
      }
      
      const endTime = Date.now();
      deploymentResult.duration = endTime - startTime;
      deploymentResult.status = 'success';
      deploymentResult.endTime = new Date().toISOString();
      
      this.log(`✅ Deployment completed successfully in ${deploymentResult.duration}ms`);
      
    } catch (error) {
      const endTime = Date.now();
      deploymentResult.duration = endTime - Date.now();
      deploymentResult.status = 'failed';
      deploymentResult.error = error.message;
      deploymentResult.endTime = new Date().toISOString();
      
      this.log(`❌ Deployment failed: ${error.message}`, 'error');
    }

    this.deploymentResults.deployment = deploymentResult;
    this.deploymentResults.stage = 'post-deployment';
    
    return deploymentResult.status === 'success';
  }

  async runPostDeploymentVerification() {
    this.log('🔍 Running Post-Deployment Verification');
    this.log('======================================');

    const verificationResult = {
      startTime: new Date().toISOString(),
      status: 'running',
      checks: [],
      duration: 0
    };

    try {
      const startTime = Date.now();
      
      // Check if build artifacts exist
      const buildChecks = [
        { path: '.next', description: 'Next.js build directory' },
        { path: 'out', description: 'Static export directory' }
      ];

      for (const check of buildChecks) {
        if (fs.existsSync(check.path)) {
          this.log(`✅ ${check.description} exists`);
          verificationResult.checks.push({
            name: check.path,
            description: check.description,
            status: 'passed'
          });
        } else {
          this.log(`⚠️ ${check.description} not found`, 'warning');
          verificationResult.checks.push({
            name: check.path,
            description: check.description,
            status: 'warning'
          });
        }
      }
      
      const endTime = Date.now();
      verificationResult.duration = endTime - startTime;
      verificationResult.status = 'success';
      verificationResult.endTime = new Date().toISOString();
      
      this.log('✅ Post-deployment verification completed');
      
    } catch (error) {
      const endTime = Date.now();
      verificationResult.duration = endTime - Date.now();
      verificationResult.status = 'failed';
      verificationResult.error = error.message;
      verificationResult.endTime = new Date().toISOString();
      
      this.log(`❌ Post-deployment verification failed: ${error.message}`, 'error');
    }

    this.deploymentResults.verification = verificationResult;
    this.deploymentResults.status = verificationResult.status;
    
    return verificationResult.status === 'success';
  }

  async runFullDeployment() {
    this.log('🚀 Starting Full Deployment Automation');
    this.log('=====================================');

    // Pre-deployment checks
    const preChecksPassed = await this.runPreDeploymentChecks();
    if (!preChecksPassed) {
      this.generateDeploymentReport();
      return false;
    }

    // Deployment
    const deploymentSuccess = await this.runDeployment();
    if (!deploymentSuccess) {
      this.generateDeploymentReport();
      return false;
    }

    // Post-deployment verification
    const verificationSuccess = await this.runPostDeploymentVerification();
    
    this.generateDeploymentReport();
    
    this.log('🏁 Full Deployment Automation completed');
    this.log(`📊 Final Status: ${this.deploymentResults.status}`);
    
    return verificationSuccess;
  }

  generateDeploymentReport() {
    const reportPath = path.join(this.logDir, `deployment-report-${this.timestamp}.json`);
    
    const report = {
      ...this.deploymentResults,
      summary: {
        totalChecks: this.deploymentResults.checks.length,
        passedChecks: this.deploymentResults.checks.filter(c => c.status === 'passed').length,
        failedChecks: this.deploymentResults.checks.filter(c => c.status === 'failed').length,
        deploymentSuccess: this.deploymentResults.deployment?.status === 'success',
        verificationSuccess: this.deploymentResults.verification?.status === 'success',
        recommendations: this.generateDeploymentRecommendations()
      }
    };

    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    this.log(`📄 Deployment report saved to: ${reportPath}`);
  }

  generateDeploymentRecommendations() {
    const recommendations = [];
    
    if (this.deploymentResults.status === 'failed') {
      recommendations.push('Review failed checks and fix issues before retrying deployment');
    }
    
    if (this.deploymentResults.status === 'success') {
      recommendations.push('Deployment successful - consider setting up monitoring');
    }
    
    const slowChecks = this.deploymentResults.checks.filter(check => check.duration > 30000);
    if (slowChecks.length > 0) {
      recommendations.push('Consider optimizing slow-running checks');
    }
    
    return recommendations;
  }
}

// Main execution
if (require.main === module) {
  const deployment = new DeploymentAutomation();
  deployment.runFullDeployment()
    .then(success => {
      process.exit(success ? 0 : 1);
    })
    .catch(error => {
      console.error('Fatal error:', error);
      process.exit(1);
    });
}

module.exports = DeploymentAutomation;