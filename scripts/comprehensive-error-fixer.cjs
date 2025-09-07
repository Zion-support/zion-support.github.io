#!/usr/bin/env node
/**
 * Comprehensive Error Fixer
 * Automatically fixes common syntax and import errors
 */
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class ComprehensiveErrorFixer {
  constructor() {
    this.projectRoot = process.cwd();
    this.fixedFiles = [];
    this.errors = [];
    this.warnings = [];
  }

  log(message, type = 'info') {
    const prefix = type === 'error' ? '❌' : type === 'success' ? '✅' : 'ℹ️';
    console.log(`${prefix} ${message}`);
  }

  async fixSyntaxErrors() {
    this.log('🔧 Fixing syntax errors...');
    
    const files = this.getAllJSFiles();
    let fixedCount = 0;
    
    for (const file of files) {
      try {
        const content = fs.readFileSync(file, 'utf8');
        let fixedContent = content;
        
        // Fix common syntax issues
        fixedContent = this.fixCommonSyntaxIssues(fixedContent);
        
        if (fixedContent !== content) {
          fs.writeFileSync(file, fixedContent);
          this.fixedFiles.push(file);
          fixedCount++;
          this.log(`Fixed: ${file}`, 'success');
        }
      } catch (error) {
        this.errors.push(`Failed to fix ${file}: ${error.message}`);
        this.log(`Failed to fix ${file}: ${error.message}`, 'error');
      }
    }
    
    this.log(`Fixed ${fixedCount} files`, 'success');
  }

  fixCommonSyntaxIssues(content) {
    let fixed = content;
    
    // Fix shebang issues
    fixed = fixed.replace(/^#!/gm, '#!/usr/bin/env node');
    
    // Fix import/require issues
    fixed = fixed.replace(/import\s+{\s*([^}]+)\s*}\s+from\s+['"]([^'"]+)['"];?/g, "const { $1 } = require('$2');");
    fixed = fixed.replace(/import\s+([^{][^;]+)\s+from\s+['"]([^'"]+)['"];?/g, "const $1 = require('$2');");
    fixed = fixed.replace(/export\s+default/g, 'module.exports =');
    fixed = fixed.replace(/export\s+{\s*([^}]+)\s*};?/g, 'module.exports = { $1 };');
    
    // Fix class constructor syntax
    fixed = fixed.replace(/constructor\(\)\s*\{\s*\}/g, 'constructor() {\n    // Constructor\n  }');
    
    // Fix template literal issues
    fixed = fixed.replace(/`([^`]*)\$\{([^}]+)\}([^`]*)`/g, '"$1" + $2 + "$3"');
    
    // Fix arrow function issues
    fixed = fixed.replace(/\(\s*\)\s*=>\s*\{/g, 'function() {');
    fixed = fixed.replace(/\(\s*([^)]+)\s*\)\s*=>\s*\{/g, 'function($1) {');
    
    return fixed;
  }

  getAllJSFiles() {
    const files = [];
    const extensions = ['.js', '.cjs', '.mjs', '.ts', '.tsx', '.jsx'];
    
    const scanDirectory = (dir) => {
      const items = fs.readdirSync(dir);
      
      for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          // Skip node_modules and other common directories
          if (!['node_modules', '.git', '.next', 'dist', 'build'].includes(item)) {
            scanDirectory(fullPath);
          }
        } else if (extensions.some(ext => item.endsWith(ext))) {
          files.push(fullPath);
        }
      }
    };
    
    scanDirectory(this.projectRoot);
    return files;
  }

  async runLintFix() {
    this.log('🔍 Running ESLint fix...');
    
    try {
      execSync('npm run lint:fix', { 
        cwd: this.projectRoot,
        stdio: 'pipe'
      });
      this.log('ESLint fix completed', 'success');
    } catch (error) {
      this.warnings.push('ESLint fix had issues: ' + error.message);
      this.log('ESLint fix had issues: ' + error.message, 'error');
    }
  }

  async runTypeCheck() {
    this.log('🔍 Running TypeScript check...');
    
    try {
      execSync('npm run type-check', { 
        cwd: this.projectRoot,
        stdio: 'pipe'
      });
      this.log('TypeScript check completed', 'success');
    } catch (error) {
      this.warnings.push('TypeScript check had issues: ' + error.message);
      this.log('TypeScript check had issues: ' + error.message, 'error');
    }
  }

  generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        fixedFiles: this.fixedFiles.length,
        errors: this.errors.length,
        warnings: this.warnings.length
      },
      fixedFiles: this.fixedFiles,
      errors: this.errors,
      warnings: this.warnings
    };
    
    const reportPath = path.join(this.projectRoot, 'error-fix-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    this.log(`📊 Error fix report saved to ${reportPath}`, 'success');
    
    return report;
  }

  async run() {
    this.log('🚀 Starting Comprehensive Error Fixer...');
    
    try {
      await this.fixSyntaxErrors();
      await this.runLintFix();
      await this.runTypeCheck();
      
      const report = this.generateReport();
      
      this.log('🎉 Error fixing completed!', 'success');
      this.log(`Fixed ${report.summary.fixedFiles} files`, 'success');
      
      return report;
    } catch (error) {
      this.log(`❌ Error fixing failed: ${error.message}`, 'error');
      throw error;
    }
  }
}

// Main execution
if (require.main === module) {
  const fixer = new ComprehensiveErrorFixer();
  fixer.run().catch(error => {
    console.error('Error fixing failed:', error);
    process.exit(1);
  });
}

module.exports = ComprehensiveErrorFixer;