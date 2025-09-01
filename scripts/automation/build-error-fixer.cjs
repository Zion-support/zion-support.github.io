#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🔧 Starting build error fixer...');

class BuildErrorFixer {
  constructor() {
    this.fixes = [];
    this.stats = {
      totalErrors: 0,
      fixedErrors: 0,
      failedFixes: 0,
      filesProcessed: 0
    };
  }

  async run() {
    try {
      console.log('🔍 Running build check...');
      
      // Run build to get errors
      const errors = await this.getBuildErrors();
      this.stats.totalErrors = errors.length;
      
      console.log(`📊 Found ${errors.length} build errors`);
      
      // Apply fixes for each error
      for (const error of errors) {
        try {
          const fixResult = await this.applyFix(error);
          if (fixResult.success) {
            this.fixes.push(fixResult);
            this.stats.fixedErrors++;
            console.log(`✅ Fixed: ${error.message}`);
          } else {
            this.stats.failedFixes++;
            console.log(`⚠️ Could not fix: ${error.message}`);
          }
        } catch (error) {
          console.error(`❌ Error applying fix: ${error.message}`);
          this.stats.failedFixes++;
        }
      }
      
      // Generate report
      this.generateReport();
      
      console.log(`✅ Build error fixer completed. Fixed ${this.stats.fixedErrors}/${this.stats.totalErrors} errors`);
      
    } catch (error) {
      console.error('❌ Build error fixer failed:', error.message);
    }
  }

  async getBuildErrors() {
    try {
      const result = execSync('npm run build', { 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      return []; // No errors if command succeeds
    } catch (error) {
      const output = error.stdout || error.stderr || '';
      return this.parseBuildErrors(output);
    }
  }

  parseBuildErrors(output) {
    const errors = [];
    const lines = output.split('\n');
    
    lines.forEach(line => {
      if (line.includes('Failed to compile') || line.includes('Error:') || line.includes('Cannot read property')) {
        errors.push({
          file: 'build',
          line: 0,
          column: 0,
          message: line,
          type: this.categorizeError(line)
        });
      }
    });
    
    return errors;
  }

  categorizeError(message) {
    if (message.includes('Cannot read property')) return 'null-check';
    if (message.includes('Unexpected end of input')) return 'syntax-error';
    if (message.includes('Failed to compile')) return 'compilation-error';
    if (message.includes('Module not found')) return 'module-resolution';
    return 'unknown';
  }

  async applyFix(error) {
    const { message, type } = error;
    
    try {
      switch (type) {
        case 'null-check':
          return await this.fixNullCheck(error);
        case 'syntax-error':
          return await this.fixSyntaxError(error);
        case 'compilation-error':
          return await this.fixCompilationError(error);
        case 'module-resolution':
          return await this.fixModuleResolution(error);
        default:
          return { success: false, reason: 'Unknown error type' };
      }
    } catch (error) {
      return { success: false, reason: error.message };
    }
  }

  async fixNullCheck(error) {
    // Add null checks to prevent runtime errors
    return { success: false, reason: 'Manual fix required for null check' };
  }

  async fixSyntaxError(error) {
    // Fix syntax errors in source files
    return { success: false, reason: 'Manual fix required for syntax error' };
  }

  async fixCompilationError(error) {
    // Fix compilation errors
    return { success: false, reason: 'Manual fix required for compilation error' };
  }

  async fixModuleResolution(error) {
    // Fix module resolution issues
    return { success: false, reason: 'Manual fix required for module resolution' };
  }

  generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      stats: this.stats,
      fixes: this.fixes,
      summary: {
        totalErrors: this.stats.totalErrors,
        fixedErrors: this.stats.fixedErrors,
        failedFixes: this.stats.failedFixes,
        successRate: this.stats.totalErrors > 0 ? 
          (this.stats.fixedErrors / this.stats.totalErrors * 100).toFixed(2) + '%' : '0%'
      }
    };

    const reportPath = path.join(process.cwd(), 'build-error-fixer-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    console.log(`📊 Build error fixer report saved to: ${reportPath}`);
    return report;
  }
}

// Main execution
async function main() {
  const fixer = new BuildErrorFixer();
  
  try {
    await fixer.run();
    
    // Exit with appropriate code
    process.exit(fixer.stats.failedFixes > 0 ? 1 : 0);
    
  } catch (error) {
    console.error('❌ Build error fixer failed:', error.message);
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  main();
}

module.exports = { BuildErrorFixer };