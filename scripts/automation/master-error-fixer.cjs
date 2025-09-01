#!/usr/bin/env node

/**
 * Master Error Fixer - Coordinates all error fixers in the PM2 automation ecosystem
 * Runs every hour to orchestrate the error fixing process
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class MasterErrorFixer {
  constructor() {
    this.logFile = path.join(__dirname, '../../logs/master-error-fixer.log');
    this.errorsFixed = 0;
    this.startTime = new Date();
    this.fixers = [
      'console-error-fixer',
      'typescript-error-fixer',
      'jsx-error-fixer',
      'comprehensive-error-fixer'
    ];
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}\n`;
    
    console.log(logMessage.trim());
    
    try {
      fs.appendFileSync(this.logFile, logMessage);
    } catch (error) {
      console.error('Failed to write to log file:', error.message);
    }
  }

  async checkPM2Status() {
    try {
      this.log('🔍 Checking PM2 status...');
      const result = execSync('pm2 status', { 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      
      // Check if our fixers are running
      const runningFixers = this.fixers.filter(fixer => 
        result.includes(fixer) && result.includes('online')
      );
      
      this.log(`📊 Found ${runningFixers.length}/${this.fixers.length} fixers running`);
      return runningFixers;
    } catch (error) {
      this.log(`❌ Failed to check PM2 status: ${error.message}`);
      return [];
    }
  }

  async restartFixer(fixerName) {
    try {
      this.log(`🔄 Restarting ${fixerName}...`);
      execSync(`pm2 restart ${fixerName}`, { 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      this.log(`✅ Successfully restarted ${fixerName}`);
      return true;
    } catch (error) {
      this.log(`❌ Failed to restart ${fixerName}: ${error.message}`);
      return false;
    }
  }

  async startFixer(fixerName) {
    try {
      this.log(`🚀 Starting ${fixerName}...`);
      execSync(`pm2 start ecosystem.config.cjs --only ${fixerName}`, { 
        encoding: 'utf8',
        cwd: path.join(__dirname, '../..'),
        stdio: 'pipe'
      });
      this.log(`✅ Successfully started ${fixerName}`);
      return true;
    } catch (error) {
      this.log(`❌ Failed to start ${fixerName}: ${error.message}`);
      return false;
    }
  }

  async ensureFixersRunning() {
    this.log('🔧 Ensuring all error fixers are running...');
    
    const runningFixers = await this.checkPM2Status();
    let startedCount = 0;
    
    for (const fixer of this.fixers) {
      if (!runningFixers.includes(fixer)) {
        this.log(`⚠️  ${fixer} is not running, attempting to start...`);
        if (await this.startFixer(fixer)) {
          startedCount++;
        }
      }
    }
    
    if (startedCount > 0) {
      this.log(`✅ Started ${startedCount} fixers`);
    } else {
      this.log('✅ All fixers are already running');
    }
    
    return startedCount;
  }

  async runHealthCheck() {
    try {
      this.log('🏥 Running health check...');
      
      // Check if PM2 is running
      try {
        execSync('pm2 ping', { stdio: 'pipe' });
        this.log('✅ PM2 is running');
      } catch (error) {
        this.log('❌ PM2 is not responding, attempting to restart...');
        execSync('pm2 kill && pm2 start ecosystem.config.cjs', { 
          cwd: path.join(__dirname, '../..'),
          stdio: 'pipe'
        });
        this.log('✅ PM2 restarted');
      }
      
      // Ensure all fixers are running
      await this.ensureFixersRunning();
      
      // Check logs for recent errors
      await this.checkRecentErrors();
      
      this.log('✅ Health check completed');
      return true;
      
    } catch (error) {
      this.log(`❌ Health check failed: ${error.message}`);
      return false;
    }
  }

  async checkRecentErrors() {
    try {
      this.log('📋 Checking recent error logs...');
      
      const logsDir = path.join(__dirname, '../../logs');
      if (!fs.existsSync(logsDir)) {
        this.log('⚠️  Logs directory not found');
        return;
      }
      
      const logFiles = fs.readdirSync(logsDir).filter(file => file.endsWith('.log'));
      
      for (const logFile of logFiles) {
        const logPath = path.join(logsDir, logFile);
        try {
          const content = fs.readFileSync(logPath, 'utf8');
          const lines = content.split('\n');
          const recentLines = lines.slice(-10); // Last 10 lines
          
          const errorCount = recentLines.filter(line => 
            line.includes('❌') || line.includes('ERROR') || line.includes('Failed')
          ).length;
          
          if (errorCount > 0) {
            this.log(`⚠️  ${logFile}: ${errorCount} recent errors`);
          }
        } catch (error) {
          // Skip files that can't be read
        }
      }
      
    } catch (error) {
      this.log(`❌ Failed to check recent errors: ${error.message}`);
    }
  }

  async run() {
    this.log('🚀 Master Error Fixer starting...');
    
    try {
      // Ensure logs directory exists
      const logsDir = path.dirname(this.logFile);
      if (!fs.existsSync(logsDir)) {
        fs.mkdirSync(logsDir, { recursive: true });
      }

      // Run health check
      const healthCheckSuccess = await this.runHealthCheck();
      
      const endTime = new Date();
      const duration = endTime - this.startTime;
      
      this.log(`🏁 Master Error Fixer completed in ${duration}ms`);
      
      if (healthCheckSuccess) {
        this.log('✅ Master Error Fixer completed successfully');
        process.exit(0);
      } else {
        this.log('⚠️  Master Error Fixer completed with warnings');
        process.exit(1);
      }
      
    } catch (error) {
      this.log(`❌ Master Error Fixer failed: ${error.message}`);
      process.exit(1);
    }
  }
}

// Run the master fixer if this script is executed directly
if (require.main === module) {
  const masterFixer = new MasterErrorFixer();
  masterFixer.run();
}

module.exports = MasterErrorFixer;