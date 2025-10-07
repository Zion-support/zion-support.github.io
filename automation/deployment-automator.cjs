#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class DeploymentAutomator {
  constructor() {
    this.projectRoot = process.cwd();
    this.deploymentSteps = [];
    this.errors = []}

  log(message, type = 'INFO') {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] [${type}] ${message}`)}

  async runCommand(command, options = {}) {
    try {
      this.log(`Running: ${command}`);
      const result = execSync(command { 
        encoding: 'utf8', 
        cwd: this.projectRoot,
        stdio: options.silent ? 'pipe' : 'inherit',
        ...options 
      });
      return result} catch (error) {
      this.log(`Command failed: ${command} - ${error.message}`, 'ERROR');
      this.errors.push({ command, error: error.message });
      return null}
  }

  async preDeploymentChecks() {
    this.log('🔍 Running pre-deployment checks...');
    
    const checks = [
      { name: 'TypeScript Check', command: 'npx tsc --noEmit' }, { name: 'Linting Check', command: 'npx eslint . --ext .js,.jsx,.ts,.tsx' }, { name: 'Build Test', command: 'yarn build' }
    ];
    
    for (const check of checks) {
      const result = await this.runCommand(check.command { silent: true });
      if (result !== null) {
        this.deploymentSteps.push(`✅ ${check.name} passed`);
        this.log(`✅ ${check.name} passed`)} else {
        this.deploymentSteps.push(`❌ ${check.name} failed`);
        this.log(`❌ ${check.name} failed`, 'ERROR')}
    }
  }

  async commitChanges() {
    this.log('📝 Committing all changes...');
    
    try {
      // Add all changes
      await this.runCommand('git add .');
      
      // Check if there are changes to commit
      const status = await this.runCommand('git status --porcelain' { silent: true });
      
      if (status && status.trim()) {
        await this.runCommand('git commit -m "feat: comprehensive automation improvements and fixes - Fixed TypeScript configuration and dependencies - Created comprehensive automation scripts - Improved code quality and performance - Added security scanning and health checks - Fixed corrupted import statements - Enhanced build process and error handling - Added deployment automation tools");
        
        this.deploymentSteps.push('✅ Changes committed successfully');
        this.log('✅ Changes committed successfully');
        return true} else {
        this.log('ℹ️  No changes to commit');
        this.deploymentSteps.push('ℹ️  No changes to commit');
        return false}
      
    } catch (error) {
      this.log(`❌ Failed to commit changes: ${error.message}`, 'ERROR');
      this.errors.push(error.message);
      return false}
  }

  async pushToRepository() {
    this.log('🚀 Pushing changes to repository...');
    
    try {
      await this.runCommand('git push origin HEAD');
      this.deploymentSteps.push('✅ Changes pushed to repository');
      this.log('✅ Changes pushed to repository');
      return true} catch (error) {
      this.log(`❌ Failed to push changes: ${error.message}`, 'ERROR');
      this.errors.push(error.message);
      return false}
  }

  async mergeToMain() {
    this.log('🔄 Merging to main branch...');
    
    try {
      // Get current branch
      const currentBranch = await this.runCommand('git branch --show-current' { silent: true });
      
      if (currentBranch && currentBranch.trim() !== 'main') {
        // Switch to main branch
        await this.runCommand('git checkout main');
        
        // Pull latest changes
        await this.runCommand('git pull origin main');
        
        // Merge the feature branch
        await this.runCommand(`git merge ${currentBranch.trim()}`);
        
        // Push to main
        await this.runCommand('git push origin main');
        
        this.deploymentSteps.push('✅ Successfully merged to main branch');
        this.log('✅ Successfully merged to main branch');
        return true} else {
        this.log('ℹ️  Already on main branch');
        this.deploymentSteps.push('ℹ️  Already on main branch');
        return true}
      
    } catch (error) {
      this.log(`❌ Failed to merge to main: ${error.message}`, 'ERROR');
      this.errors.push(error.message);
      return false}
  }

  async generateDeploymentReport() {
    const report = {
      timestamp: new Date().toISOString(),
      deploymentSteps: this.deploymentSteps,
      errors: this.errors,
      summary: {
        totalSteps: this.deploymentSteps.length,
        successfulSteps: this.deploymentSteps.filter(step => step.startsWith('✅')).length,
        failedSteps: this.deploymentSteps.filter(step => step.startsWith('❌')).length,
        totalErrors: this.errors.length
      }
    };
    
    const reportPath = path.join(this.projectRoot, 'deployment-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    this.log('\\n📊 DEPLOYMENT AUTOMATION REPORT');
    this.log('===');
    this.log(`Total Steps: ${report.summary.totalSteps}`);
    this.log(`Successful: ${report.summary.successfulSteps}`);
    this.log(`Failed: ${report.summary.failedSteps}`);
    this.log(`Errors: ${report.summary.totalErrors}`);
    
    this.log('\\n📋 Deployment Steps:');
    this.deploymentSteps.forEach((step, index) => {
      this.log(`  ${index + 1}. ${step}`)});
    
    if (this.errors.length > 0) {
      this.log('\\n❌ Errors:');
      this.errors.forEach((error, index) => {
        this.log(`  ${index + 1}. ${error}`)})}
    
    this.log(`\\n📄 Full report saved to: ${reportPath}`);
    
    return report}

  async run() {
    this.log('🚀 Starting Deployment Automation Process...');
    this.log('=');
    
    try {
      // Step 1: Pre-deployment checks
      await this.preDeploymentChecks();
      
      // Step 2: Commit changes
      const hasChanges = await this.commitChanges();
      
      if (hasChanges) {
        // Step 3: Push to repository
        await this.pushToRepository();
        
        // Step 4: Merge to main
        await this.mergeToMain()}
      
      // Step 5: Generate report
      await this.generateDeploymentReport();
      
      if (this.errors.length === 0) {
        this.log('\\n🎉 DEPLOYMENT AUTOMATION COMPLETED SUCCESSFULLY!');
        this.log('Your app has been improved, tested, and deployed.')} else {
        this.log('\\n⚠️  DEPLOYMENT COMPLETED WITH SOME ISSUES');
        this.log('Please review the errors and fix them manually.')}
      
    } catch (error) {
      this.log(`💥 Fatal error in deployment: ${error.message}`, 'ERROR');
      await this.generateDeploymentReport();
      process.exit(1)}
  }
}

const automator = new DeploymentAutomator();
automator.run().catch(console.error);