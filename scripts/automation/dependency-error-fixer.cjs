#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🔧 Starting dependency error fixer...');

class DependencyErrorFixer {
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
      console.log('🔍 Checking dependencies...');
      
      // Check for dependency issues
      const errors = await this.getDependencyErrors();
      this.stats.totalErrors = errors.length;
      
      console.log(`📊 Found ${errors.length} dependency errors`);
      
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
      
      console.log(`✅ Dependency error fixer completed. Fixed ${this.stats.fixedErrors}/${this.stats.totalErrors} errors`);
      
    } catch (error) {
      console.error('❌ Dependency error fixer failed:', error.message);
    }
  }

  async getDependencyErrors() {
    try {
      const result = execSync('npm install --dry-run', { 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      return []; // No errors if command succeeds
    } catch (error) {
      const output = error.stdout || error.stderr || '';
      return this.parseDependencyErrors(output);
    }
  }

  parseDependencyErrors(output) {
    const errors = [];
    const lines = output.split('\n');
    
    lines.forEach(line => {
      if (line.includes('ERESOLVE') || line.includes('peer dependency')) {
        errors.push({
          file: 'package.json',
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
    if (message.includes('ERESOLVE')) return 'dependency-conflict';
    if (message.includes('peer dependency')) return 'peer-dependency';
    return 'unknown';
  }

  async applyFix(error) {
    const { message, type } = error;
    
    try {
      switch (type) {
        case 'dependency-conflict':
          return await this.fixDependencyConflict(error);
        case 'peer-dependency':
          return await this.fixPeerDependency(error);
        default:
          return { success: false, reason: 'Unknown error type' };
      }
    } catch (error) {
      return { success: false, reason: error.message };
    }
  }

  async fixDependencyConflict(error) {
    try {
      execSync('npm install --legacy-peer-deps', { stdio: 'pipe' });
      return { 
        success: true, 
        type: 'dependency-conflict', 
        action: 'Installed with legacy peer deps'
      };
    } catch (error) {
      return { success: false, reason: 'Failed to fix dependency conflict' };
    }
  }

  async fixPeerDependency(error) {
    try {
      execSync('npm install --force', { stdio: 'pipe' });
      return { 
        success: true, 
        type: 'peer-dependency', 
        action: 'Forced installation'
      };
    } catch (error) {
      return { success: false, reason: 'Failed to fix peer dependency' };
    }
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

    const reportPath = path.join(process.cwd(), 'dependency-error-fixer-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    console.log(`📊 Dependency error fixer report saved to: ${reportPath}`);
    return report;
  }
}

// Main execution
async function main() {
  const fixer = new DependencyErrorFixer();
  
  try {
    await fixer.run();
    
    // Exit with appropriate code
    process.exit(fixer.stats.failedFixes > 0 ? 1 : 0);
    
  } catch (error) {
    console.error('❌ Dependency error fixer failed:', error.message);
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  main();
}

module.exports = { DependencyErrorFixer };