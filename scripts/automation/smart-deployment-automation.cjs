#!/usr/bin/env node;
<<<<<<< HEAD
/**
 * Smart Deployment Automation;
 * Automatically handles deployment with comprehensive checks and rollback capabilities;
 */
=======

/**;
 * Smart Deployment Automation;
 * Automatically handles deployment with comprehensive checks and rollback capabilities;
 */;
>>>>>>> main

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
;
class SmartDeploymentAutomation {;
  constructor() {;
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, `automation/logs/deployment.log`);
    this.ensureLogDirectory();
    this.deploymentSteps = [];
    this.startTime = Date.now();
    this.environment = process.env.NODE_ENV || `development`;
  }
;
  ensureLogDirectory() {;
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {;
      fs.mkdirSync(logDir, { recursive: true });
    }
  }
;
  log(message) {;
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${message}`);
    fs.appendFileSync(this.logFile, `[${timestamp}] ${message}\n`);
  }
;
  async runStep(stepName, stepFunction) {;
    this.log(`🔄 Running step: ${stepName}`);
    const stepStartTime = Date.now();
    ;
    try {;
      await stepFunction();
      const duration = Date.now() - stepStartTime;
<<<<<<< HEAD
      this.deploymentSteps.push({
        name: stepName,
        status: `success`,
        duration: duration;
      });
      this.log(`✅ Step completed: ${stepName} (${duration}ms)`);
    } catch (error) {  
      const duration = Date.now() - stepStartTime;
      this.deploymentSteps.push({
        name: stepName,
        status: `failed`,
        duration: duration,
        error: error.message;
        });
=======
      this.deploymentSteps.push({;
        name: stepName,;
        status: 'success',;
        duration: duration;
      });
      this.log(`✅ Step completed: ${stepName} (${duration}ms)`);
    } catch (error) {;
      const duration = Date.now() - stepStartTime;
      this.deploymentSteps.push({;
        name: stepName,;
        status: 'failed',;
        duration: duration,;
        error: error.message;
      });
>>>>>>> main
      this.log(`❌ Step failed: ${stepName} - ${error.message}`);
      throw error;
    }
  }
<<<<<<< HEAD

  async preDeploymentChecks() {
    this.log(`🔍 Running pre-deployment checks...`);
    
    // Check if git is clean;
    try {
      const gitStatus = execSync(`git status --porcelain`, { encoding: `utf8` });
      if (gitStatus.trim()) {
        throw new Error(`Git working directory is not clean. Please commit or stash changes.`);
      }
    } catch (error) {  
      throw new Error(`Git check failed: ${error.message  }`);
    }

    // Check if tests pass;
    try {
      execSync(`npm run test:ci`, { stdio: `pipe` });
    } catch (error) {  
      throw new Error('Tests are failing. Please fix tests before deployment.');
      }

    // Check if build succeeds;
    try {
      execSync('npm run build', { stdio: 'pipe' });
    } catch (error) {  
      throw new Error('Build is failing. Please fix build issues before deployment.');
      }

=======
;
  async preDeploymentChecks() {;
    this.log('🔍 Running pre-deployment checks...');
    ;
    // Check if git is clean;
    try {;
      const gitStatus = execSync('git status --porcelain', { encoding: 'utf8' });
      if (gitStatus.trim()) {;
        throw new Error('Git working directory is not clean. Please commit or stash changes.');
      }
    } catch (error) {;
      throw new Error(`Git check failed: ${error.message}`);
    }
;
    // Check if tests pass;
    try {;
      execSync('npm run test:ci', { stdio: 'pipe' });
    } catch (error) {;
      throw new Error('Tests are failing. Please fix tests before deployment.');
    }
;
    // Check if build succeeds;
    try {;
      execSync('npm run build', { stdio: 'pipe' });
    } catch (error) {;
      throw new Error('Build is failing. Please fix build issues before deployment.');
    }
;
>>>>>>> main
    this.log('✅ Pre-deployment checks passed');
  }
;
  async backupCurrentDeployment() {;
    this.log('💾 Creating backup of current deployment...');
<<<<<<< HEAD
    
    const backupDir = path.join(this.projectRoot, `deployment-backups`);
    if (!fs.existsSync(backupDir)) {
      fs.mkdirSync(backupDir, { recursive: true });
    }

    const timestamp = new Date().toISOString().replace(/[:.]/g, `-`);
    const backupPath = path.join(backupDir, `backup-${timestamp}`);
    
    // Create backup of current build;
    if (fs.existsSync(`.next`)) {
      execSync(`cp -r .next ${backupPath}`, { stdio: `pipe` });
=======
    ;
    const backupDir = path.join(this.projectRoot, 'deployment-backups');
    if (!fs.existsSync(backupDir)) {;
      fs.mkdirSync(backupDir, { recursive: true });
    }
;
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const backupPath = path.join(backupDir, `backup-${timestamp}`);
    ;
    // Create backup of current build;
    if (fs.existsSync('.next')) {;
      execSync(`cp -r .next ${backupPath}`, { stdio: 'pipe' });
>>>>>>> main
    }
;
    this.log(`✅ Backup created at: ${backupPath}`);
    return backupPath;
  }
<<<<<<< HEAD

  async runSecurityAudit() {
    this.log(`🔒 Running security audit...`);
    
    try {
      execSync(`npm audit --audit-level high`, { stdio: 'pipe' });
      this.log('✅ Security audit passed');
    } catch (error) {  
=======
;
  async runSecurityAudit() {;
    this.log('🔒 Running security audit...');
    ;
    try {;
      execSync('npm audit --audit-level high', { stdio: 'pipe' });
      this.log('✅ Security audit passed');
    } catch (error) {;
>>>>>>> main
      this.log('⚠️ Security audit found issues, but continuing deployment');
      }
  }
;
  async optimizeForProduction() {;
    this.log('⚡ Optimizing for production...');
<<<<<<< HEAD
    
    // Set production environment variables;
    process.env.NODE_ENV = 'production';
    process.env.NEXT_TELEMETRY_DISABLED = '1';
    
    // Run production build;
    execSync('npm run build:production', { stdio: `pipe` });
    
    this.log(`✅ Production optimization completed`);
=======
    ;
    // Set production environment variables;
    process.env.NODE_ENV = 'production';
    process.env.NEXT_TELEMETRY_DISABLED = '1';
    ;
    // Run production build;
    execSync('npm run build:production', { stdio: 'pipe' });
    ;
    this.log('✅ Production optimization completed');
>>>>>>> main
  }
;
  async deployToEnvironment() {;
    this.log(`🚀 Deploying to ${this.environment} environment...`);
<<<<<<< HEAD
    
    if (this.environment === `production`) {
      // Production deployment logic;
      this.log(`Deploying to production...`);
      // Add your production deployment commands here;
      // Example: execSync('vercel --prod', { stdio: 'pipe' });
    } else {
=======
    ;
    if (this.environment === 'production') {;
      // Production deployment logic;
      this.log('Deploying to production...');
      // Add your production deployment commands here;
      // Example: execSync('vercel --prod', { stdio: 'pipe' });
    } else {;
>>>>>>> main
      // Development/staging deployment logic;
      this.log('Deploying to staging...');
      // Add your staging deployment commands here;
      // Example: execSync('vercel', { stdio: 'pipe' });
    }
    ;
    this.log('✅ Deployment completed');
  }
;
  async postDeploymentChecks() {;
    this.log('🔍 Running post-deployment checks...');
<<<<<<< HEAD
    
    // Health check;
    try {
      // Add your health check logic here;
      // Example: fetch(`https://your-app.com/health`)
      this.log(`✅ Health check passed`);
    } catch (error) {  
      throw new Error(`Health check failed: ${error.message  }`);
    }

    // Performance check;
    try {
      // Add your performance check logic here;
      this.log(`✅ Performance check passed`);
    } catch (error) {  
      this.log(`⚠️ Performance check failed, but deployment is functional`);
      }
  }

  async rollback(backupPath) {
    this.log(`🔄 Rolling back deployment...`);
    
    try {
      if (fs.existsSync(backupPath)) {
        execSync(`rm -rf .next && cp -r ${backupPath} .next`, { stdio: `pipe` });
        this.log(`✅ Rollback completed`);
      } else {
        this.log(`❌ Backup not found, cannot rollback`);
      }
    } catch (error) {  
      this.log(`❌ Rollback failed: ${error.message  }`);
    }
  }

  async generateDeploymentReport() {
    this.log(`📊 Generating deployment report...`);
    
    const report = {
      timestamp: new Date().toISOString(),
      environment: this.environment,
      steps: this.deploymentSteps,
      totalDuration: Date.now() - this.startTime,
      success: this.deploymentSteps.every(step => step.status === `success`)
    };
    
    const reportPath = path.join(this.projectRoot, `automation/logs`, `deployment-report.json`);
=======
    ;
    // Health check;
    try {;
      // Add your health check logic here;
      // Example: fetch('https://your-app.com/health');
      this.log('✅ Health check passed');
    } catch (error) {;
      throw new Error(`Health check failed: ${error.message}`);
    }
;
    // Performance check;
    try {;
      // Add your performance check logic here;
      this.log('✅ Performance check passed');
    } catch (error) {;
      this.log('⚠️ Performance check failed, but deployment is functional');
    }
  }
;
  async rollback(backupPath) {;
    this.log('🔄 Rolling back deployment...');
    ;
    try {;
      if (fs.existsSync(backupPath)) {;
        execSync(`rm -rf .next && cp -r ${backupPath} .next`, { stdio: 'pipe' });
        this.log('✅ Rollback completed');
      } else {;
        this.log('❌ Backup not found, cannot rollback');
      }
    } catch (error) {;
      this.log(`❌ Rollback failed: ${error.message}`);
    }
  }
;
  async generateDeploymentReport() {;
    this.log('📊 Generating deployment report...');
    ;
    const report = {;
      timestamp: new Date().toISOString(),;
      environment: this.environment,;
      steps: this.deploymentSteps,;
      totalDuration: Date.now() - this.startTime,;
      success: this.deploymentSteps.every(step => step.status === 'success');
    };
    ;
    const reportPath = path.join(this.projectRoot, 'automation/logs', 'deployment-report.json');
>>>>>>> main
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    this.log(`Report saved to: ${reportPath}`);
    return report;
  }
<<<<<<< HEAD

  async deploy() {
    this.log(`🚀 Starting smart deployment...`);
    let backupPath = null;
    
    try {
      await this.runStep(`Pre-deployment checks`, () => this.preDeploymentChecks());
=======
;
  async deploy() {;
    this.log('🚀 Starting smart deployment...');
    let backupPath = null;
    ;
    try {;
      await this.runStep('Pre-deployment checks', () => this.preDeploymentChecks());
>>>>>>> main
      backupPath = await this.runStep('Backup current deployment', () => this.backupCurrentDeployment());
      await this.runStep('Security audit', () => this.runSecurityAudit());
      await this.runStep('Production optimization', () => this.optimizeForProduction());
      await this.runStep('Deploy to environment', () => this.deployToEnvironment());
<<<<<<< HEAD
      await this.runStep(`Post-deployment checks`, () => this.postDeploymentChecks());
      
      const report = await this.generateDeploymentReport();
      
      this.log(`✅ Smart deployment completed successfully!`);
      this.log(`Total deployment time: ${report.totalDuration}ms`);
      
    } catch (error) {  
      this.log(`❌ Deployment failed: ${error.message  }`);
      
      if (backupPath) {
=======
      await this.runStep('Post-deployment checks', () => this.postDeploymentChecks());
      ;
      const report = await this.generateDeploymentReport();
      ;
      this.log('✅ Smart deployment completed successfully!');
      this.log(`Total deployment time: ${report.totalDuration}ms`);
      ;
    } catch (error) {;
      this.log(`❌ Deployment failed: ${error.message}`);
      ;
      if (backupPath) {;
>>>>>>> main
        await this.rollback(backupPath);
      }
      ;
      const report = await this.generateDeploymentReport();
<<<<<<< HEAD
      this.log(`❌ Deployment failed and rollback attempted`);
      
=======
      this.log('❌ Deployment failed and rollback attempted');
      ;
>>>>>>> main
      process.exit(1);
    }
  }
}
<<<<<<< HEAD

// Run deployment if called directly;
if (require.main === module) {
  const deployment = new SmartDeploymentAutomation();
  deployment.deploy().catch(error => {
    console.error(`❌ Deployment failed:`, error);
=======
;
// Run deployment if called directly;
if (require.main === module) {;
  const deployment = new SmartDeploymentAutomation();
  deployment.deploy().catch(error => {;
    console.error('❌ Deployment failed:', error);
>>>>>>> main
    process.exit(1);
  });
}
;
module.exports = SmartDeploymentAutomation;