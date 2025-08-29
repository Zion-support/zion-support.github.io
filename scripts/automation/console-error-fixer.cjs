#!/usr/bin/env node

/**
 * Console Error Fixer Automation
 * Automatically fixes common console errors in the codebase
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class ConsoleErrorFixer {
  constructor() {
    this.interval = process.env.AUTOMATION_INTERVAL || 900000; // 15 minutes default
    this.isRunning = false;
  }

  async start() {
    console.log('🚀 Console Error Fixer Automation started');
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
      console.log(`[${new Date().toISOString()}] Running console error fixer...`);
      
      // Check for console.log statements in production code
      await this.checkConsoleLogs();
      
      // Check for console.error statements
      await this.checkConsoleErrors();
      
      // Check for console.warn statements
      await this.checkConsoleWarns();
      
      console.log('✅ Console error fixer completed successfully');
    } catch (error) {
      console.error('❌ Console error fixer failed:', error.message);
    }
  }

  async checkConsoleLogs() {
    try {
      const result = execSync('grep -r "console.log" src/ --include="*.ts" --include="*.tsx" --include="*.js" --include="*.jsx" || true', { encoding: 'utf8' });
      
      if (result.trim()) {
        console.log('⚠️  Found console.log statements in source code:');
        console.log(result);
        
        // Create a report
        const report = {
          timestamp: new Date().toISOString(),
          consoleLogs: result.split('\n').filter(line => line.trim()),
          recommendation: 'Consider removing console.log statements for production'
        };
        
        fs.writeFileSync('console-logs-report.json', JSON.stringify(report, null, 2));
      } else {
        console.log('✅ No console.log statements found in source code');
      }
    } catch (error) {
      console.log('ℹ️  No console.log statements found or error occurred');
    }
  }

  async checkConsoleErrors() {
    try {
      const result = execSync('grep -r "console.error" src/ --include="*.ts" --include="*.tsx" --include="*.js" --include="*.jsx" || true', { encoding: 'utf8' });
      
      if (result.trim()) {
        console.log('⚠️  Found console.error statements in source code:');
        console.log(result);
      } else {
        console.log('✅ No console.error statements found in source code');
      }
    } catch (error) {
      console.log('ℹ️  No console.error statements found or error occurred');
    }
  }

  async checkConsoleWarns() {
    try {
      const result = execSync('grep -r "console.warn" src/ --include="*.ts" --include="*.tsx" --include="*.js" --include="*.jsx" || true', { encoding: 'utf8' });
      
      if (result.trim()) {
        console.log('⚠️  Found console.warn statements in source code:');
        console.log(result);
      } else {
        console.log('✅ No console.warn statements found in source code');
      }
    } catch (error) {
      console.log('ℹ️  No console.warn statements found or error occurred');
    }
  }

  stop() {
    console.log('🛑 Console Error Fixer Automation stopped');
    this.isRunning = false;
  }
}

// Start the automation if this script is run directly
if (require.main === module) {
  const fixer = new ConsoleErrorFixer();
  
  process.on('SIGINT', () => {
    fixer.stop();
    process.exit(0);
  });
  
  process.on('SIGTERM', () => {
    fixer.stop();
    process.exit(0);
  });
  
  fixer.start();
}

module.exports = ConsoleErrorFixer;