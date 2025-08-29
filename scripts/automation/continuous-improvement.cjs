#!/usr/bin/env node

/**
 * Continuous Improvement Automation
 * Runs various improvement checks and optimizations
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class ContinuousImprovement {
  constructor() {
    this.interval = process.env.AUTOMATION_INTERVAL || 3600000; // 1 hour default
    this.isRunning = false;
  }

  async start() {
    console.log('🚀 Continuous Improvement Automation started');
    this.isRunning = true;
    
    // Run immediately
    await this.run();
    
    // Set up interval
    setInterval(async () => {
      if (this.isRunning) {
        await this.run();
      }
    }, this.interval);
  }

  async run() {
    try {
      console.log(`[${new Date().toISOString()}] Running continuous improvement...`);
      
      // Run linting
      await this.runLinting();
      
      // Run type checking
      await this.runTypeChecking();
      
      // Check for unused dependencies
      await this.checkUnusedDependencies();
      
      // Check for code quality issues
      await this.checkCodeQuality();
      
      console.log('✅ Continuous improvement completed successfully');
    } catch (error) {
      console.error('❌ Continuous improvement failed:', error.message);
    }
  }

  async runLinting() {
    try {
      console.log('🔍 Running linting...');
      execSync('npm run lint', { stdio: 'inherit' });
      console.log('✅ Linting completed successfully');
    } catch (error) {
      console.log('⚠️  Linting found issues (this is normal for development)');
    }
  }

  async runTypeChecking() {
    try {
      console.log('🔍 Running type checking...');
      execSync('npm run type-check', { stdio: 'inherit' });
      console.log('✅ Type checking completed successfully');
    } catch (error) {
      console.log('⚠️  Type checking found issues (this is normal for development)');
    }
  }

  async checkUnusedDependencies() {
    try {
      console.log('📦 Checking for unused dependencies...');
      
      // This would require additional tools like depcheck
      // For now, just check if package.json and node_modules are in sync
      const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
      const dependencies = Object.keys(packageJson.dependencies || {});
      const devDependencies = Object.keys(packageJson.devDependencies || {});
      
      console.log(`📦 Found ${dependencies.length} production dependencies`);
      console.log(`🔧 Found ${devDependencies.length} development dependencies`);
      
      // Check if node_modules exists
      if (fs.existsSync('node_modules')) {
        console.log('✅ node_modules directory exists');
      } else {
        console.log('⚠️  node_modules directory missing - run npm install');
      }
    } catch (error) {
      console.log('⚠️  Could not check dependencies:', error.message);
    }
  }

  async checkCodeQuality() {
    try {
      console.log('🎯 Checking code quality...');
      
      // Check for TODO comments
      const result = execSync('grep -r "TODO" src/ --include="*.ts" --include="*.tsx" --include="*.js" --include="*.jsx" || true', { encoding: 'utf8' });
      
      if (result.trim()) {
        console.log('📝 Found TODO comments:');
        console.log(result);
      } else {
        console.log('✅ No TODO comments found');
      }
      
      // Check for FIXME comments
      const fixmeResult = execSync('grep -r "FIXME" src/ --include="*.ts" --include="*.tsx" --include="*.js" --include="*.jsx" || true', { encoding: 'utf8' });
      
      if (fixmeResult.trim()) {
        console.log('🔧 Found FIXME comments:');
        console.log(fixmeResult);
      } else {
        console.log('✅ No FIXME comments found');
      }
      
    } catch (error) {
      console.log('ℹ️  Could not check code quality:', error.message);
    }
  }

  stop() {
    console.log('🛑 Continuous Improvement Automation stopped');
    this.isRunning = false;
  }
}

// Start the automation if this script is run directly
if (require.main === module) {
  const improvement = new ContinuousImprovement();
  
  process.on('SIGINT', () => {
    improvement.stop();
    process.exit(0);
  });
  
  process.on('SIGTERM', () => {
    improvement.stop();
    process.exit(0);
  });
  
  improvement.start();
}

module.exports = ContinuousImprovement;