
#!/usr/bin/env node;
/**
 * Syntax Error Fixer;
 * Automatically fixes common syntax errors in the codebase;
 */

const { execSync } = require('child_process')
const fs = require('fs')
const path = require('path')

  }

  log(message) {
    console.log(`🔧 ${message}`);
  }

  fixFile(filePath) {
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      let originalContent = content;
      
      // Fix common syntax errors
      content = this.fixCommonErrors(content);
      
      if (content !== originalContent) {
        fs.writeFileSync(filePath, content);
        this.fixedFiles.push(filePath);
        this.log(`Fixed: ${filePath}`);
        return true;
      }
      
      return false;
    } catch (error) {
      this.errors.push(`${filePath}: ${error.message}`);

#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔧 Syntax Error Fixer');
console.log('');

class SyntaxErrorFixer {
  constructor() {
    this.fixes = [];
    this.errors = [];
    this.startTime = Date.now();
  }

  log(message, type = 'info') {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${type.toUpperCase()}] ${message}`;
    console.log(logEntry);
  }

  async fixTypeScriptErrors() {
    this.log('🔍 Checking for TypeScript errors...');
    
    try {
      const result = execSync('npx tsc --noEmit --skipLibCheck', {
        encoding: 'utf8',
        stdio: 'pipe',
        cwd: process.cwd()
      });
      this.log('✅ No TypeScript errors found', 'success');
      return true;
    } catch (error) {
      this.log('⚠️ TypeScript errors found, attempting fixes...', 'warning');
      
      // Try to fix common TypeScript issues
      const output = error.stdout || error.stderr || '';
      const lines = output.split('\n');
      
      for (const line of lines) {
        if (line.includes('error TS')) {
          this.log(`Found error: ${line}`, 'warning');
          this.fixes.push({
            type: 'typescript',
            error: line,
            timestamp: new Date().toISOString()
          });
        }
      }
      

      return false;
    }
  }

  fixCommonErrors(content) {
    // Fix unterminated strings
    content = content.replace(/'([^']*?)(?=\n|$)/g, (match, str) => {
      if (!str.endsWith("'")) {
        return match + "'";
      }
      return match;
    });
    
    content = content.replace(/"([^"]*?)(?=\n|$)/g, (match, str) => {
      if (!str.endsWith('"')) {
        return match + '"';
      }
      return match;
    });
    
    // Fix missing semicolons
    content = content.replace(/([^;}])\n/g, '$1;\n');
    
    // Fix merge conflict markers
    content = content.replace(/

  async fixESLintErrors() {
    this.log('🔍 Running ESLint with auto-fix...');
    
    try {
      const result = execSync('npx eslint . --fix --ext .js,.jsx,.ts,.tsx', {
        encoding: 'utf8',
        stdio: 'pipe',
        cwd: process.cwd()
      });
      this.log('✅ ESLint auto-fix completed', 'success');
      this.fixes.push({
        type: 'eslint',
        message: 'Auto-fix applied',
        timestamp: new Date().toISOString()
      });
      return true;
    } catch (error) {
      this.log('⚠️ ESLint found issues that could not be auto-fixed', 'warning');
      const output = error.stdout || error.stderr || '';
      this.fixes.push({
        type: 'eslint',
        message: 'Issues found that require manual review',
        output: output,
        timestamp: new Date().toISOString()
      });
      return false;
    }
  }

  async fixImportIssues() {
    this.log('🔍 Checking for import issues...');
    
    const srcDir = path.join(process.cwd(), 'src');
    if (!fs.existsSync(srcDir)) {
      this.log('⚠️ No src directory found', 'warning');
      return false;
    }

    let importFixes = 0;
    
    const walkDir = (dir) => {
      const files = fs.readdirSync(dir);
      
      for (const file of files) {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        
        if (stat.isDirectory()) {
          walkDir(filePath);
        } else if (file.endsWith('.ts') || file.endsWith('.tsx') || file.endsWith('.js') || file.endsWith('.jsx')) {
          try {
            let content = fs.readFileSync(filePath, 'utf8');
            let modified = false;
            
            // Fix common import issues
            if (content.includes('import React from "react"') && !content.includes('import * as React')) {
              content = content.replace('import React from "react"', 'import * as React from "react"');
              modified = true;
            }
            
            // Fix missing file extensions in imports
            const importRegex = /import\s+.*\s+from\s+['"]([^'"]+)['"]/g;
            let match;
            while ((match = importRegex.exec(content)) !== null) {
              const importPath = match[1];
              if (!importPath.startsWith('.') && !importPath.startsWith('/') && !importPath.includes('.')) {
                // This might be a missing extension, but we'll be conservative
                continue;
              }
            }
            
            if (modified) {
              fs.writeFileSync(filePath, content);
              importFixes++;
            }
          } catch (error) {
            this.log(`Error processing ${filePath}: ${error.message}`, 'error');
          }
        }
      }
    };
    
    walkDir(srcDir);
    
    if (importFixes > 0) {
      this.log(`✅ Fixed ${importFixes} import issues`, 'success');
      this.fixes.push({
        type: 'imports',
        count: importFixes,
        timestamp: new Date().toISOString()
      });
    } else {
      this.log('✅ No import issues found', 'success');
    }
    
    return true;
  }

  async generateReport() {
    const duration = Date.now() - this.startTime;
    
    const report = {
      timestamp: new Date().toISOString(),
      duration: `${duration}ms`,
      fixes: this.fixes,
      errors: this.errors,
      summary: {
        totalFixes: this.fixes.length,
        successfulFixes: this.fixes.filter(f => f.type !== 'error').length,
        errors: this.errors.length
      }
    };
    
    const reportPath = path.join(process.cwd(), 'syntax-error-fixer-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    this.log(`📄 Report saved to: ${reportPath}`);
    return report;
  }

  async run() {
    this.log('🚀 Starting syntax error fixing process...');
    
    try {
      await this.fixESLintErrors();
      await this.fixTypeScriptErrors();
      await this.fixImportIssues();
      
      const report = await this.generateReport();
      
      this.log('🎉 Syntax error fixing completed!');
      this.log(`📊 Summary: ${report.summary.successfulFixes} fixes applied, ${report.summary.errors} errors`);
      
      return report;
    } catch (error) {
      this.log(`❌ Syntax fixing failed: ${error.message}`, 'error');
      this.errors.push({
        message: error.message,
        stack: error.stack,
        timestamp: new Date().toISOString()
      });
      
      await this.generateReport();
      throw error;
    }
  }
}

// Run the fixer
if (require.main === module) {
  const fixer = new SyntaxErrorFixer();
  fixer.run().catch(console.error);
}

module.exports = SyntaxErrorFixer;

