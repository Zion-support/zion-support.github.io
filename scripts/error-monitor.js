#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync, spawn } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class ErrorMonitor {
  constructor() {
    this.logDir = path.join(__dirname, '..', 'logs');
    this.errorReportDir = path.join(__dirname, '..', 'error-reports');
    this.maxLogSize = 10 * 1024 * 1024; // 10MB
    this.errorThreshold = 5; // Number of errors before triggering fixes
    this.errors = [];
    this.ensureDirectories();
  }

  ensureDirectories() {
    [this.logDir, this.errorReportDir].forEach(dir => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
    });
  }

  log(level, message, error = null) {
    const timestamp = new Date().toISOString();
    const logEntry = {
      timestamp,
      level,
      message,
      error: error ? {
        message: error.message,
        stack: error.stack,
        name: error.name
      } : null
    };

    const logFile = path.join(this.logDir, `${level}.log`);
    const logLine = JSON.stringify(logEntry) + '\n';
    
    try {
      fs.appendFileSync(logFile, logLine);
    } catch (err) {
      console.error('Failed to write to log file:', err.message);
    }
  }

  async detectErrors() {
    console.log('🔍 Detecting errors...');
    
    try {
      // Check for common error patterns in logs
      const logFiles = fs.readdirSync(this.logDir);
      const errorPatterns = [
        'Error:',
        'TypeError:',
        'ReferenceError:',
        'SyntaxError:',
        'Module not found',
        'Cannot resolve',
        'Unexpected token',
        'Failed to compile',
        'Build failed'
      ];

      for (const logFile of logFiles) {
        if (logFile.endsWith('.log')) {
          const logPath = path.join(this.logDir, logFile);
          const content = fs.readFileSync(logPath, 'utf8');
          
          for (const pattern of errorPatterns) {
            if (content.includes(pattern)) {
              this.errors.push({
                file: logFile,
                pattern: pattern,
                timestamp: new Date().toISOString()
              });
            }
          }
        }
      }

      console.log(`📊 Found ${this.errors.length} error patterns`);
      return this.errors;
    } catch (error) {
      this.log('ERROR', 'Failed to detect errors', error);
      return [];
    }
  }

  async fixErrors() {
    console.log('🔧 Attempting to fix detected errors...');
    
    const fixes = [];
    
    for (const error of this.errors) {
      try {
        const fix = await this.applyFix(error);
        if (fix) {
          fixes.push(fix);
        }
      } catch (err) {
        this.log('ERROR', `Failed to fix error: ${error.pattern}`, err);
      }
    }

    console.log(`✅ Applied ${fixes.length} fixes`);
    return fixes;
  }

  async applyFix(error) {
    const { pattern, file } = error;
    
    switch (pattern) {
      case 'Module not found':
        return await this.fixModuleNotFound(error);
      case 'Cannot resolve':
        return await this.fixCannotResolve(error);
      case 'SyntaxError:':
        return await this.fixSyntaxError(error);
      case 'TypeError:':
        return await this.fixTypeError(error);
      default:
        return await this.fixGenericError(error);
    }
  }

  async fixModuleNotFound(error) {
    console.log('🔧 Fixing module not found error...');
    
    try {
      // Try to install missing dependencies
      const result = execSync('npm install', { 
        cwd: process.cwd(),
        encoding: 'utf8',
        timeout: 30000
      });
      
      return {
        type: 'module_not_found',
        action: 'npm_install',
        success: true,
        output: result
      };
    } catch (err) {
      return {
        type: 'module_not_found',
        action: 'npm_install',
        success: false,
        error: err.message
      };
    }
  }

  async fixCannotResolve(error) {
    console.log('🔧 Fixing cannot resolve error...');
    
    try {
      // Try to clear cache and reinstall
      execSync('npm cache clean --force', { 
        cwd: process.cwd(),
        encoding: 'utf8',
        timeout: 30000
      });
      
      execSync('rm -rf node_modules package-lock.json', { 
        cwd: process.cwd(),
        encoding: 'utf8',
        timeout: 30000
      });
      
      execSync('npm install', { 
        cwd: process.cwd(),
        encoding: 'utf8',
        timeout: 30000
      });
      
      return {
        type: 'cannot_resolve',
        action: 'cache_clean_reinstall',
        success: true
      };
    } catch (err) {
      return {
        type: 'cannot_resolve',
        action: 'cache_clean_reinstall',
        success: false,
        error: err.message
      };
    }
  }

  async fixSyntaxError(error) {
    console.log('🔧 Fixing syntax error...');
    
    try {
      // Run syntax fixer
      const result = execSync('node scripts/comprehensive-syntax-fixer.js', { 
        cwd: process.cwd(),
        encoding: 'utf8',
        timeout: 60000
      });
      
      return {
        type: 'syntax_error',
        action: 'syntax_fixer',
        success: true,
        output: result
      };
    } catch (err) {
      return {
        type: 'syntax_error',
        action: 'syntax_fixer',
        success: false,
        error: err.message
      };
    }
  }

  async fixTypeError(error) {
    console.log('🔧 Fixing type error...');
    
    try {
      // Run type checker
      const result = execSync('npm run type-check', { 
        cwd: process.cwd(),
        encoding: 'utf8',
        timeout: 30000
      });
      
      return {
        type: 'type_error',
        action: 'type_check',
        success: true,
        output: result
      };
    } catch (err) {
      return {
        type: 'type_error',
        action: 'type_check',
        success: false,
        error: err.message
      };
    }
  }

  async fixGenericError(error) {
    console.log('🔧 Fixing generic error...');
    
    try {
      // Run general error fixer
      const result = execSync('node scripts/comprehensive-error-fixer.cjs', { 
        cwd: process.cwd(),
        encoding: 'utf8',
        timeout: 60000
      });
      
      return {
        type: 'generic_error',
        action: 'comprehensive_fixer',
        success: true,
        output: result
      };
    } catch (err) {
      return {
        type: 'generic_error',
        action: 'comprehensive_fixer',
        success: false,
        error: err.message
      };
    }
  }

  async generateReport() {
    console.log('📊 Generating error report...');
    
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        totalErrors: this.errors.length,
        errorsByType: this.errors.reduce((acc, error) => {
          acc[error.pattern] = (acc[error.pattern] || 0) + 1;
          return acc;
        }, {}),
        errorsByFile: this.errors.reduce((acc, error) => {
          acc[error.file] = (acc[error.file] || 0) + 1;
          return acc;
        }, {})
      },
      errors: this.errors,
      recommendations: [
        'Run npm install to ensure all dependencies are installed',
        'Check for syntax errors in source files',
        'Verify import paths and module names',
        'Clear npm cache if experiencing module resolution issues',
        'Run type checking to identify TypeScript errors'
      ]
    };

    const reportPath = path.join(this.errorReportDir, `error-report-${Date.now()}.json`);
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    console.log(`📄 Error report saved to: ${reportPath}`);
    return report;
  }

  async run() {
    console.log('🚀 Starting Error Monitor...');
    
    try {
      await this.detectErrors();
      
      if (this.errors.length > 0) {
        console.log(`⚠️  Found ${this.errors.length} errors`);
        await this.fixErrors();
      } else {
        console.log('✅ No errors detected');
      }
      
      await this.generateReport();
      console.log('✅ Error monitoring completed!');
      
    } catch (error) {
      this.log('ERROR', 'Error monitor failed', error);
      console.error('❌ Error monitor failed:', error.message);
    }
  }
}

// Run the error monitor
const monitor = new ErrorMonitor();
monitor.run().catch(console.error);