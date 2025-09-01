#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs').promises;
const path = require('path');

class DependencyErrorFixer {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'automation/logs/dependency-error-fixer.log');
    this.fixesApplied = [];
    this.startTime = new Date();
  }

  async log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}`;
    console.log(logMessage);
    await fs.appendFile(this.logFile, logMessage + '\n');
  }

  async runCommand(command, options = {}) {
    try {
      const result = execSync(command, {
        cwd: this.projectRoot,
        encoding: 'utf8',
        stdio: options.silent ? 'pipe' : 'inherit',
        ...options
      });
      return { success: true, output: result };
    } catch (error) {
      return { success: false, output: error.stdout || error.stderr || error.message };
    }
  }

  async checkDependencies() {
    await this.log('🔍 Checking dependencies...');
    
    const checkResult = await this.runCommand('npm ls --depth=0', { silent: true });
    if (!checkResult.success) {
      await this.log('⚠️  Dependency conflicts detected');
      return false;
    } else {
      await this.log('✅ Dependencies are healthy');
      return true;
    }
  }

  async fixDependencyConflicts() {
    await this.log('🔧 Fixing dependency conflicts...');
    
    // Remove node_modules and package-lock.json
    await this.log('🧹 Cleaning existing dependencies...');
    await this.runCommand('rm -rf node_modules package-lock.json', { silent: true });
    
    // Clear npm cache
    await this.log('🗑️  Clearing npm cache...');
    await this.runCommand('npm cache clean --force', { silent: true });
    
    // Reinstall with legacy peer deps
    await this.log('📦 Reinstalling dependencies...');
    const installResult = await this.runCommand('npm install --legacy-peer-deps');
    
    if (installResult.success) {
      await this.log('✅ Dependencies reinstalled successfully');
      this.fixesApplied.push({
        type: 'dependency-reinstall',
        action: 'npm install --legacy-peer-deps',
        timestamp: new Date().toISOString()
      });
      return true;
    } else {
      await this.log('❌ Dependency reinstall failed');
      return false;
    }
  }

  async updateOutdatedDependencies() {
    await this.log('🔄 Checking for outdated dependencies...');
    
    const outdatedResult = await this.runCommand('npm outdated', { silent: true });
    if (outdatedResult.success && outdatedResult.output.trim()) {
      await this.log('📦 Updating outdated dependencies...');
      
      // Update minor and patch versions
      const updateResult = await this.runCommand('npm update', { silent: true });
      if (updateResult.success) {
        await this.log('✅ Dependencies updated successfully');
        this.fixesApplied.push({
          type: 'dependency-update',
          action: 'npm update',
          timestamp: new Date().toISOString()
        });
      }
    } else {
      await this.log('✅ All dependencies are up to date');
    }
  }

  async fixSecurityVulnerabilities() {
    await this.log('🔒 Checking for security vulnerabilities...');
    
    const auditResult = await this.runCommand('npm audit', { silent: true });
    if (!auditResult.success) {
      await this.log('⚠️  Security vulnerabilities detected');
      
      // Try to fix automatically
      const fixResult = await this.runCommand('npm audit fix', { silent: true });
      if (fixResult.success) {
        await this.log('✅ Security vulnerabilities fixed');
        this.fixesApplied.push({
          type: 'security-fix',
          action: 'npm audit fix',
          timestamp: new Date().toISOString()
        });
      } else {
        await this.log('⚠️  Some vulnerabilities could not be fixed automatically');
        
        // Try with force flag
        const forceFixResult = await this.runCommand('npm audit fix --force', { silent: true });
        if (forceFixResult.success) {
          await this.log('✅ Security vulnerabilities fixed with force flag');
          this.fixesApplied.push({
            type: 'security-fix-force',
            action: 'npm audit fix --force',
            timestamp: new Date().toISOString()
          });
        }
      }
    } else {
      await this.log('✅ No security vulnerabilities found');
    }
  }

  async fixPeerDependencyIssues() {
    await this.log('🔧 Fixing peer dependency issues...');
    
    // Check for peer dependency warnings
    const installCheck = await this.runCommand('npm install --dry-run', { silent: true });
    if (installCheck.output.includes('peer dependency')) {
      await this.log('⚠️  Peer dependency issues detected');
      
      // Try to resolve with legacy peer deps
      const legacyResult = await this.runCommand('npm install --legacy-peer-deps', { silent: true });
      if (legacyResult.success) {
        await this.log('✅ Peer dependency issues resolved');
        this.fixesApplied.push({
          type: 'peer-dependency-fix',
          action: 'npm install --legacy-peer-deps',
          timestamp: new Date().toISOString()
        });
      }
    } else {
      await this.log('✅ No peer dependency issues found');
    }
  }

  async optimizeDependencies() {
    await this.log('⚡ Optimizing dependencies...');
    
    // Remove unused dependencies
    const pruneResult = await this.runCommand('npm prune', { silent: true });
    if (pruneResult.success) {
      await this.log('✅ Unused dependencies removed');
      this.fixesApplied.push({
        type: 'dependency-prune',
        action: 'npm prune',
        timestamp: new Date().toISOString()
      });
    }
    
    // Deduplicate dependencies
    const dedupeResult = await this.runCommand('npm dedupe', { silent: true });
    if (dedupeResult.success) {
      await this.log('✅ Dependencies deduplicated');
      this.fixesApplied.push({
        type: 'dependency-dedupe',
        action: 'npm dedupe',
        timestamp: new Date().toISOString()
      });
    }
  }

  async run() {
    try {
      await this.log('🚀 Starting Dependency Error Fixer');
      
      // Check current dependency status
      const isHealthy = await this.checkDependencies();
      
      if (!isHealthy) {
        await this.fixDependencyConflicts();
      }
      
      await this.fixPeerDependencyIssues();
      await this.fixSecurityVulnerabilities();
      await this.updateOutdatedDependencies();
      await this.optimizeDependencies();
      
      // Final health check
      await this.checkDependencies();
      
      const endTime = new Date();
      const duration = endTime - this.startTime;
      
      await this.log(`✅ Dependency Error Fixer completed in ${duration.getTime()}ms`);
      await this.log(`📈 Fixes applied: ${this.fixesApplied.length}`);
      
      return {
        success: true,
        fixesApplied: this.fixesApplied.length,
        duration: duration.getTime()
      };
      
    } catch (error) {
      await this.log(`❌ Dependency Error Fixer failed: ${error.message}`);
      throw error;
    }
  }
}

// Run the fixer if called directly
if (require.main === module) {
  const fixer = new DependencyErrorFixer();
  fixer.run()
    .then(result => {
      console.log('Dependency error fixer completed successfully');
      process.exit(0);
    })
    .catch(error => {
      console.error('Dependency error fixer failed:', error);
      process.exit(1);
    });
}

module.exports = DependencyErrorFixer;