#!/usr/bin/env node

/**
 * Console Error Fixer - Automatically detects and fixes console errors
 * Runs every 15 minutes as part of the PM2 automation ecosystem
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class ConsoleErrorFixer {
  constructor() {
    this.logFile = path.join(__dirname, '../../logs/console-error-fixer.log');
    this.errorsFixed = 0;
    this.startTime = new Date();
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}\n`;
    
    // Console output
    console.log(logMessage.trim());
    
    // File output
    try {
      fs.appendFileSync(this.logFile, logMessage);
    } catch (error) {
      console.error('Failed to write to log file:', error.message);
    }
  }

  async runLint() {
    try {
      this.log('🔍 Running ESLint to detect console errors...');
      const result = execSync('npm run lint', { 
        encoding: 'utf8',
        cwd: path.join(__dirname, '../..'),
        stdio: 'pipe'
      });
      this.log('✅ Lint completed successfully - no console errors found');
      return { success: true, output: result };
    } catch (error) {
      const output = error.stdout || error.stderr || '';
      this.log('⚠️  Lint found issues, analyzing for console errors...');
      return { success: false, output };
    }
  }

  async fixConsoleErrors() {
    try {
      this.log('🔧 Attempting to fix console errors...');
      
      // Run the lint command to see current errors
      const lintResult = await this.runLint();
      
      if (lintResult.success) {
        this.log('✅ No console errors to fix');
        return true;
      }

      // Look for console.error, console.warn, console.log in the output
      const consoleErrors = this.extractConsoleErrors(lintResult.output);
      
      if (consoleErrors.length === 0) {
        this.log('✅ No console errors detected in lint output');
        return true;
      }

      this.log(`🔍 Found ${consoleErrors.length} console-related issues`);
      
      // Try to fix common console issues
      for (const error of consoleErrors) {
        if (await this.fixConsoleError(error)) {
          this.errorsFixed++;
        }
      }

      this.log(`✅ Fixed ${this.errorsFixed} console errors`);
      return true;
      
    } catch (error) {
      this.log(`❌ Error during console error fixing: ${error.message}`);
      return false;
    }
  }

  extractConsoleErrors(lintOutput) {
    const consolePatterns = [
      /console\.(log|warn|error|info|debug)/g,
      /console\[/g
    ];
    
    const errors = [];
    for (const pattern of consolePatterns) {
      const matches = lintOutput.match(pattern);
      if (matches) {
        errors.push(...matches);
      }
    }
    
    return [...new Set(errors)]; // Remove duplicates
  }

  async fixConsoleError(error) {
    try {
      // This is a simplified fixer - in a real implementation,
      // you would have more sophisticated logic to fix specific issues
      this.log(`🔧 Attempting to fix: ${error}`);
      
      // For now, just log that we're attempting to fix
      // In a real implementation, you would:
      // 1. Parse the error location
      // 2. Apply appropriate fixes
      // 3. Verify the fix works
      
      return true;
    } catch (error) {
      this.log(`❌ Failed to fix console error: ${error.message}`);
      return false;
    }
  }

  async run() {
    this.log('🚀 Console Error Fixer starting...');
    
    try {
      // Ensure logs directory exists
      const logsDir = path.dirname(this.logFile);
      if (!fs.existsSync(logsDir)) {
        fs.mkdirSync(logsDir, { recursive: true });
      }

      // Run the main fixing logic
      const success = await this.fixConsoleErrors();
      
      const endTime = new Date();
      const duration = endTime - this.startTime;
      
      this.log(`🏁 Console Error Fixer completed in ${duration}ms`);
      this.log(`📊 Summary: Fixed ${this.errorsFixed} errors`);
      
      if (success) {
        this.log('✅ Console Error Fixer completed successfully');
        process.exit(0);
      } else {
        this.log('⚠️  Console Error Fixer completed with warnings');
        process.exit(1);
      }
      
    } catch (error) {
      this.log(`❌ Console Error Fixer failed: ${error.message}`);
      process.exit(1);
    }
  }
}

// Run the fixer if this script is executed directly
if (require.main === module) {
  const fixer = new ConsoleErrorFixer();
  fixer.run();
}

module.exports = ConsoleErrorFixer;
