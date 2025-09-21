#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🛠️ Starting Error Recovery System...');

class ErrorRecoverySystem {
  constructor() {
    this.logFile = path.join(process.cwd(), 'logs', 'error-recovery.log');
    this.config = {
      recoveryStrategy: process.env.RECOVERY_STRATEGY || 'intelligent',
      autoFixEnabled: process.env.AUTO_FIX_ENABLED === 'true',
      checkInterval: 15 * 60 * 1000, // 15 minutes
    };
    this.ensureLogDirectory();
  }

  ensureLogDirectory() {
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

  async executeCommand(command, options = {}) {
    try {
      const result = execSync(command, { 
        encoding: 'utf8', 
        stdio: options.silent ? 'pipe' : 'inherit',
        ...options 
      });
      return { success: true, output: result };
    } catch (error) {
      this.log(`❌ Command failed: ${command} - ${error.message}`);
      return { success: false, error: error.message };
    }
  }

  async checkForErrors() {
    this.log('🔍 Checking for errors...');
    
    // Check PM2 process status
    const pm2Result = await this.executeCommand('pm2 jlist', { silent: true });
    if (pm2Result.success) {
      try {
        const processes = JSON.parse(pm2Result.output);
        const erroredProcesses = processes.filter(p => p.pm2_env && p.pm2_env.status === 'errored');
        
        if (erroredProcesses.length > 0) {
          this.log(`⚠️ Found ${erroredProcesses.length} errored processes`);
          return { hasErrors: true, processes: erroredProcesses };
        }
      } catch (error) {
        this.log(`❌ Failed to parse PM2 status: ${error.message}`);
      }
    }
    
    // Check for build errors
    const buildResult = await this.executeCommand('npm run build', { silent: true });
    if (!buildResult.success) {
      this.log('⚠️ Build errors detected');
      return { hasErrors: true, type: 'build' };
    }
    
    // Check for linting errors
    const lintResult = await this.executeCommand('npm run lint', { silent: true });
    if (!lintResult.success) {
      this.log('⚠️ Linting errors detected');
      return { hasErrors: true, type: 'lint' };
    }
    
    this.log('✅ No errors detected');
    return { hasErrors: false };
  }

  async recoverProcesses(processes) {
    this.log('🔄 Recovering errored processes...');
    
    for (const process of processes) {
      const { name } = process;
      this.log(`🔧 Recovering process: ${name}`);
      
      // Try restart first
      const restartResult = await this.executeCommand(`pm2 restart ${name}`);
      if (restartResult.success) {
        this.log(`✅ Successfully restarted ${name}`);
      } else {
        // Try delete and start
        this.log(`🔄 Restart failed, trying delete and start for ${name}`);
        await this.executeCommand(`pm2 delete ${name}`);
        await this.executeCommand(`pm2 start ecosystem.config.cjs --only ${name}`);
      }
    }
  }

  async fixBuildErrors() {
    this.log('🔧 Fixing build errors...');
    
    // Clean and reinstall dependencies
    this.log('🧹 Cleaning node_modules...');
    await this.executeCommand('rm -rf node_modules package-lock.json');
    
    this.log('📦 Reinstalling dependencies...');
    const installResult = await this.executeCommand('npm install');
    if (!installResult.success) {
      this.log('❌ Failed to reinstall dependencies');
      return false;
    }
    
    // Try building again
    this.log('🔨 Attempting build...');
    const buildResult = await this.executeCommand('npm run build');
    return buildResult.success;
  }

  async fixLintingErrors() {
    this.log('🔧 Fixing linting errors...');
    
    const lintFixResult = await this.executeCommand('npm run lint:fix');
    return lintFixResult.success;
  }

  async performRecovery() {
    this.log('🛠️ Starting error recovery...');
    
    const errorCheck = await this.checkForErrors();
    if (!errorCheck.hasErrors) {
      this.log('✅ No errors to recover from');
      return;
    }
    
    if (errorCheck.processes) {
      await this.recoverProcesses(errorCheck.processes);
    }
    
    if (errorCheck.type === 'build') {
      const buildFixed = await this.fixBuildErrors();
      if (buildFixed) {
        this.log('✅ Build errors fixed');
      } else {
        this.log('❌ Failed to fix build errors');
      }
    }
    
    if (errorCheck.type === 'lint') {
      const lintFixed = await this.fixLintingErrors();
      if (lintFixed) {
        this.log('✅ Linting errors fixed');
      } else {
        this.log('❌ Failed to fix linting errors');
      }
    }
  }

  async run() {
    this.log('🚀 Error Recovery System started');
    this.log(`📋 Recovery strategy: ${this.config.recoveryStrategy}`);
    this.log(`📋 Auto-fix enabled: ${this.config.autoFixEnabled}`);
    
    // Initial error check
    if (this.config.autoFixEnabled) {
      await this.performRecovery();
    } else {
      await this.checkForErrors();
    }
    
    // Set up periodic error checks
    setInterval(async () => {
      if (this.config.autoFixEnabled) {
        await this.performRecovery();
      } else {
        await this.checkForErrors();
      }
    }, this.config.checkInterval);
    
    this.log('✅ Error recovery monitoring active');
  }
}

// Start the error recovery system
const errorRecovery = new ErrorRecoverySystem();
errorRecovery.run().catch(error => {
  console.error('❌ Error Recovery System failed:', error);
  process.exit(1);
});