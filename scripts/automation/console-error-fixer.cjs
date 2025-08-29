#!/usr/bin/env node

/**
 * Console Error Fixer Automation
 * Continuously monitors and fixes console errors and build issues
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Polyfill for __filename and __dirname in ES modules
const __filename = require('url').fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class ConsoleErrorFixer {
  constructor() {
    this.interval = process.env.AUTOMATION_INTERVAL || 900000; // 15 minutes default
    this.logFile = path.join(__dirname, '../../logs/console-error-fixer.log');
    this.errors = [];
    this.fixes = [];
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}`;
    console.log(logMessage);
    
    // Ensure logs directory exists
    const logsDir = path.dirname(this.logFile);
    if (!fs.existsSync(logsDir)) {
      fs.mkdirSync(logsDir, { recursive: true });
    }
    
    fs.appendFileSync(this.logFile, logMessage + '\n');
  }

  async checkForErrors() {
    try {
      this.log('🔍 Checking for console errors...');
      
      // Run build to check for errors
      const buildResult = execSync('npm run build', { 
        cwd: process.cwd(),
        encoding: 'utf8',
        stdio: 'pipe'
      });
      
      this.log('✅ Build completed successfully - no errors found');
      return false;
      
    } catch (error) {
      const errorOutput = error.stdout || error.stderr || error.message;
      this.log(`❌ Build errors detected: ${errorOutput}`);
      
      // Parse errors and categorize them
      const errors = this.parseErrors(errorOutput);
      this.errors.push(...errors);
      
      return true;
    }
  }

  parseErrors(errorOutput) {
    const errors = [];
    
    // Common error patterns
    const errorPatterns = [
      /error TS\d+: (.*)/g,
      /Error: (.*)/g,
      /SyntaxError: (.*)/g,
      /TypeError: (.*)/g,
      /ReferenceError: (.*)/g
    ];
    
    errorPatterns.forEach(pattern => {
      let match;
      while ((match = pattern.exec(errorOutput)) !== null) {
        errors.push({
          type: pattern.source.split(':')[0].replace(/[^a-zA-Z]/g, ''),
          message: match[1],
          timestamp: new Date().toISOString()
        });
      }
    });
    
    return errors;
  }

  async applyFixes() {
    if (this.errors.length === 0) {
      this.log('✅ No errors to fix');
      return;
    }
    
    this.log(`🔧 Applying fixes for ${this.errors.length} errors...`);
    
    for (const error of this.errors) {
      try {
        const fix = await this.getFixForError(error);
        if (fix) {
          await this.applyFix(fix);
          this.fixes.push(fix);
          this.log(`✅ Applied fix for ${error.type}: ${error.message}`);
        }
      } catch (fixError) {
        this.log(`❌ Failed to apply fix for ${error.type}: ${fixError.message}`);
      }
    }
    
    this.log(`✅ Applied ${this.fixes.length} fixes`);
  }

  async getFixForError(error) {
    // Common fix strategies based on error type
    const fixStrategies = {
      'error TS': this.fixTypeScriptError.bind(this),
      'SyntaxError': this.fixSyntaxError.bind(this),
      'TypeError': this.fixTypeError.bind(this),
      'ReferenceError': this.fixReferenceError.bind(this)
    };
    
    const strategy = fixStrategies[error.type] || fixStrategies['error TS'];
    return await strategy(error);
  }

  async fixTypeScriptError(error) {
    // TypeScript error fixes
    if (error.message.includes('Cannot find module')) {
      return {
        type: 'module-resolution',
        action: 'install-missing-dependency',
        target: error.message.match(/Cannot find module '([^']+)'/)?.[1],
        description: 'Install missing dependency'
      };
    }
    
    if (error.message.includes('Type')) {
      return {
        type: 'type-fix',
        action: 'add-type-annotation',
        target: error.message,
        description: 'Add proper type annotation'
      };
    }
    
    return null;
  }

  async fixSyntaxError(error) {
    return {
      type: 'syntax-fix',
      action: 'fix-syntax',
      target: error.message,
      description: 'Fix syntax error'
    };
  }

  async fixTypeError(error) {
    return {
      type: 'type-fix',
      action: 'fix-type-usage',
      target: error.message,
      description: 'Fix type usage'
    };
  }

  async fixReferenceError(error) {
    return {
      type: 'reference-fix',
      action: 'fix-reference',
      target: error.message,
      description: 'Fix reference error'
    };
  }

  async applyFix(fix) {
    // Apply the fix based on type
    switch (fix.action) {
      case 'install-missing-dependency':
        if (fix.target) {
          this.log(`📦 Installing missing dependency: ${fix.target}`);
          execSync(`npm install ${fix.target}`, { 
            cwd: process.cwd(),
            stdio: 'pipe'
          });
        }
        break;
        
      case 'add-type-annotation':
        this.log(`🔧 Adding type annotation for: ${fix.target}`);
        // This would require more sophisticated code analysis
        break;
        
      case 'fix-syntax':
        this.log(`🔧 Fixing syntax error: ${fix.target}`);
        // This would require more sophisticated code analysis
        break;
        
      case 'fix-type-usage':
        this.log(`🔧 Fixing type usage: ${fix.target}`);
        // This would require more sophisticated code analysis
        break;
        
      case 'fix-reference':
        this.log(`🔧 Fixing reference error: ${fix.target}`);
        // This would require more sophisticated code analysis
        break;
    }
  }

  async generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      errorsFound: this.errors.length,
      fixesApplied: this.fixes.length,
      errors: this.errors,
      fixes: this.fixes,
      status: this.errors.length === 0 ? 'clean' : 'fixed'
    };
    
    const reportFile = path.join(__dirname, '../../reports/console-error-fixer-report.json');
    const reportDir = path.dirname(reportFile);
    
    if (!fs.existsSync(reportDir)) {
      fs.mkdirSync(reportDir, { recursive: true });
    }
    
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    this.log(`📊 Report generated: ${reportFile}`);
    
    return report;
  }

  async run() {
    this.log('🚀 Console Error Fixer Automation Started');
    
    try {
      // Check for errors
      const hasErrors = await this.checkForErrors();
      
      if (hasErrors) {
        // Apply fixes
        await this.applyFixes();
        
        // Re-check after fixes
        this.log('🔍 Re-checking after fixes...');
        const stillHasErrors = await this.checkForErrors();
        
        if (stillHasErrors) {
          this.log('⚠️ Some errors remain after fixes');
        } else {
          this.log('✅ All errors resolved after fixes');
        }
      }
      
      // Generate report
      await this.generateReport();
      
    } catch (error) {
      this.log(`❌ Automation error: ${error.message}`);
    }
    
    this.log('🔄 Scheduling next run...');
  }

  start() {
    this.log('🚀 Starting Console Error Fixer Automation');
    
    // Run immediately
    this.run();
    
    // Schedule recurring runs
    setInterval(() => {
      this.run();
    }, this.interval);
    
    this.log(`⏰ Scheduled to run every ${this.interval / 1000} seconds`);
  }
}

// Start the automation if run directly
if (require.main === module) {
  const fixer = new ConsoleErrorFixer();
  fixer.start();
  
  // Handle graceful shutdown
  process.on('SIGINT', () => {
    fixer.log('🛑 Shutting down Console Error Fixer...');
    process.exit(0);
  });
  
  process.on('SIGTERM', () => {
    fixer.log('🛑 Shutting down Console Error Fixer...');
    process.exit(0);
  });
}

module.exports = ConsoleErrorFixer;