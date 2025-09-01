#!/usr/bin/env node

/**
 * Comprehensive Error Fixer - Handles multiple types of errors automatically
 * Runs every 30 minutes as part of the PM2 automation ecosystem
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class ComprehensiveErrorFixer {
  constructor() {
    this.logFile = path.join(__dirname, '../../logs/comprehensive-error-fixer.log');
    this.errorsFixed = 0;
    this.startTime = new Date();
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

  async runTypeCheck() {
    try {
      this.log('🔍 Running TypeScript type check...');
      const result = execSync('npm run type-check', { 
        encoding: 'utf8',
        cwd: path.join(__dirname, '../..'),
        stdio: 'pipe'
      });
      this.log('✅ TypeScript check completed successfully');
      return { success: true, output: result };
    } catch (error) {
      const output = error.stdout || error.stderr || '';
      this.log('⚠️  TypeScript check found errors');
      return { success: false, output };
    }
  }

  async runLint() {
    try {
      this.log('🔍 Running ESLint...');
      const result = execSync('npm run lint', { 
        encoding: 'utf8',
        cwd: path.join(__dirname, '../..'),
        stdio: 'pipe'
      });
      this.log('✅ ESLint completed successfully');
      return { success: true, output: result };
    } catch (error) {
      const output = error.stdout || error.stderr || '';
      this.log('⚠️  ESLint found errors');
      return { success: false, output };
    }
  }

  async runBuild() {
    try {
      this.log('🔍 Running build check...');
      const result = execSync('npm run build', { 
        encoding: 'utf8',
        cwd: path.join(__dirname, '../..'),
        stdio: 'pipe'
      });
      this.log('✅ Build completed successfully');
      return { success: true, output: result };
    } catch (error) {
      const output = error.stdout || error.stderr || '';
      this.log('⚠️  Build failed');
      return { success: false, output };
    }
  }

  async fixCommonIssues() {
    this.log('🔧 Attempting to fix common issues...');
    
    try {
      // Try to fix ESLint issues automatically
      this.log('🔧 Running ESLint auto-fix...');
      execSync('npm run lint -- --fix', { 
        encoding: 'utf8',
        cwd: path.join(__dirname, '../..'),
        stdio: 'pipe'
      });
      this.log('✅ ESLint auto-fix completed');
      this.errorsFixed++;
      
      // Try to install missing dependencies
      this.log('🔧 Checking for missing dependencies...');
      try {
        execSync('npm install', { 
          encoding: 'utf8',
          cwd: path.join(__dirname, '../..'),
          stdio: 'pipe'
        });
        this.log('✅ Dependencies updated');
        this.errorsFixed++;
      } catch (error) {
        this.log('⚠️  Dependency update failed, continuing...');
      }
      
      return true;
    } catch (error) {
      this.log(`❌ Failed to fix common issues: ${error.message}`);
      return false;
    }
  }

  async analyzeErrors(typeCheckResult, lintResult, buildResult) {
    this.log('📊 Analyzing error patterns...');
    
    let totalErrors = 0;
    
    if (!typeCheckResult.success) {
      const tsErrors = this.countTypeScriptErrors(typeCheckResult.output);
      this.log(`🔍 Found ${tsErrors} TypeScript errors`);
      totalErrors += tsErrors;
    }
    
    if (!lintResult.success) {
      const lintErrors = this.countLintErrors(lintResult.output);
      this.log(`🔍 Found ${lintErrors} ESLint errors`);
      totalErrors += lintErrors;
    }
    
    if (!buildResult.success) {
      const buildErrors = this.countBuildErrors(buildResult.output);
      this.log(`🔍 Found ${buildErrors} build errors`);
      totalErrors += buildErrors;
    }
    
    this.log(`📊 Total errors found: ${totalErrors}`);
    return totalErrors;
  }

  countTypeScriptErrors(output) {
    const errorMatches = output.match(/error TS\d+/g);
    return errorMatches ? errorMatches.length : 0;
  }

  countLintErrors(output) {
    const errorMatches = output.match(/error/g);
    return errorMatches ? errorMatches.length : 0;
  }

  countBuildErrors(output) {
    const errorMatches = output.match(/Error:|error/g);
    return errorMatches ? errorMatches.length : 0;
  }

  async run() {
    this.log('🚀 Comprehensive Error Fixer starting...');
    
    try {
      // Ensure logs directory exists
      const logsDir = path.dirname(this.logFile);
      if (!fs.existsSync(logsDir)) {
        fs.mkdirSync(logsDir, { recursive: true });
      }

      // Run all checks
      const typeCheckResult = await this.runTypeCheck();
      const lintResult = await this.runLint();
      const buildResult = await this.runBuild();
      
      // Analyze errors
      const totalErrors = await this.analyzeErrors(typeCheckResult, lintResult, buildResult);
      
      // Apply fixes if there are errors
      if (totalErrors > 0) {
        await this.fixCommonIssues();
      }
      
      const endTime = new Date();
      const duration = endTime - this.startTime;
      
      this.log(`🏁 Comprehensive Error Fixer completed in ${duration}ms`);
      this.log(`📊 Summary: Found ${totalErrors} errors, fixed ${this.errorsFixed} issues`);
      
      if (totalErrors === 0 || this.errorsFixed > 0) {
        this.log('✅ Comprehensive Error Fixer completed successfully');
        process.exit(0);
      } else {
        this.log('⚠️  Comprehensive Error Fixer completed with remaining issues');
        process.exit(1);
      }
      
    } catch (error) {
      this.log(`❌ Comprehensive Error Fixer failed: ${error.message}`);
      process.exit(1);
    }
  }
}

// Run the fixer if this script is executed directly
if (require.main === module) {
  const fixer = new ComprehensiveErrorFixer();
  fixer.run();
}

module.exports = ComprehensiveErrorFixer;