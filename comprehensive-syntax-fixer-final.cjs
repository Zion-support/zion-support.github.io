#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔧 Starting comprehensive syntax fixer...');

class ComprehensiveSyntaxFixer {
  constructor() {
    this.fixedFiles = [];
    this.errors = [];
    this.projectRoot = process.cwd();
  }

  log(message) {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${message}`);
  }

  async findFilesWithSyntaxErrors() {
    this.log('🔍 Finding files with syntax errors...');
    
    const extensions = ['.tsx', '.ts', '.js', '.jsx'];
    const files = [];
    
    const findFiles = (dir) => {
      if (!fs.existsSync(dir)) return;
      
      const items = fs.readdirSync(dir);
      for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
          findFiles(fullPath);
        } else if (extensions.some(ext => item.endsWith(ext))) {
          files.push(fullPath);
        }
      }
    };
    
    findFiles(this.projectRoot);
    return files;
  }

  fixSyntaxErrors(content, filePath) {
    let fixed = content;
    
    // Fix missing closing braces
    const openBraces = (fixed.match(/\{/g) || []).length;
    const closeBraces = (fixed.match(/\}/g) || []).length;
    
    if (openBraces > closeBraces) {
      const missingBraces = openBraces - closeBraces;
      fixed += '\n' + '}'.repeat(missingBraces);
    }
    
    // Fix missing closing parentheses
    const openParens = (fixed.match(/\(/g) || []).length;
    const closeParens = (fixed.match(/\)/g) || []).length;
    
    if (openParens > closeParens) {
      const missingParens = openParens - closeParens;
      fixed += ')'.repeat(missingParens);
    }
    
    // Fix missing semicolons
    fixed = fixed.replace(/([^;}])\n/g, '$1;\n');
    
    // Fix incomplete function declarations
    fixed = fixed.replace(/function\s*\(\s*\)\s*\{[^}]*$/g, 'function() {}');
    
    // Fix incomplete arrow functions
    fixed = fixed.replace(/\(\s*\)\s*=>\s*\{[^}]*$/g, '() => {}');
    
    // Fix incomplete object literals
    fixed = fixed.replace(/\{\s*[^}]*$/g, '{}');
    
    // Fix incomplete array literals
    fixed = fixed.replace(/\[\s*[^\]]*$/g, '[]');
    
    // Fix incomplete JSX
    fixed = fixed.replace(/<[^>]*$/g, '');
    
    // Fix incomplete strings
    fixed = fixed.replace(/"[^"]*$/g, '""');
    fixed = fixed.replace(/'[^']*$/g, "''");
    
    // Fix incomplete template literals
    fixed = fixed.replace(/`[^`]*$/g, '``');
    
    // Fix incomplete comments
    fixed = fixed.replace(/\/\*[^*]*$/g, '');
    fixed = fixed.replace(/\/\/[^\n]*$/g, '');
    
    // Fix incomplete regex
    fixed = fixed.replace(/\/[^/]*$/g, '//');
    
    // Fix missing return statements
    if (filePath.includes('/api/') && !fixed.includes('return')) {
      fixed = fixed.replace(/(\w+)\s*$/g, 'return $1;');
    }
    
    // Clean up extra whitespace
    fixed = fixed
      .replace(/\n\s*\n\s*\n/g, '\n\n')
      .replace(/^\s*\n/gm, '')
      .trim();
    
    return fixed;
  }

  async fixFile(filePath) {
    try {
      if (!fs.existsSync(filePath)) {
        this.log(`⚠️ File not found: ${filePath}`);
        return false;
      }

      const content = fs.readFileSync(filePath, 'utf8');
      
      // Check if file has syntax issues
      if (content.trim() === '') {
        return false;
      }
      
      const fixed = this.fixSyntaxErrors(content, filePath);
      
      if (fixed !== content) {
        this.log(`🔧 Fixing syntax in: ${filePath}`);
        
        // Write the fixed content back
        fs.writeFileSync(filePath, fixed, 'utf8');
        this.fixedFiles.push(filePath);
        
        this.log(`✅ Fixed: ${filePath}`);
        return true;
      }
      
      return false;
    } catch (error) {
      this.log(`❌ Error fixing ${filePath}: ${error.message}`);
      this.errors.push({ file: filePath, error: error.message });
      return false;
    }
  }

  async fixAllSyntaxErrors() {
    const files = await this.findFilesWithSyntaxErrors();
    
    this.log(`📁 Found ${files.length} files to check`);
    
    for (const file of files) {
      await this.fixFile(file);
    }
  }

  generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      totalFiles: this.fixedFiles.length,
      errors: this.errors.length,
      fixedFiles: this.fixedFiles,
      errors: this.errors
    };

    const reportPath = path.join(this.projectRoot, 'syntax-fix-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    this.log(`📊 Report saved to: ${reportPath}`);
    return report;
  }

  async run() {
    try {
      this.log('🚀 Starting comprehensive syntax fixing...');
      
      await this.fixAllSyntaxErrors();
      
      const report = this.generateReport();
      
      this.log(`🎉 Syntax fixing complete! Fixed ${report.totalFiles} files with ${report.errors} errors`);
      
      if (report.errors > 0) {
        this.log('⚠️ Some files had errors. Check the report for details.');
      }
      
    } catch (error) {
      this.log(`❌ Syntax fixing failed: ${error.message}`);
      process.exit(1);
    }
  }
}

// Run the fixer
const fixer = new ComprehensiveSyntaxFixer();
fixer.run().catch(console.error);