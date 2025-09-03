#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class SyntaxErrorFixer {
  constructor() {
    this.projectRoot = process.cwd();
    this.fixedFiles = [];
    this.errors = [];
  }

  log(message) {
    console.log(`[${new Date().toISOString()}] ${message}`);
  }

  getAllFiles(dir, extensions) {
    let files = [];
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        files = files.concat(this.getAllFiles(fullPath, extensions));
      } else if (extensions.some(ext => item.endsWith(ext))) {
        files.push(fullPath);
      }
    }
    
    return files;
  }

  fixImportStatements(content) {
    // Fix malformed import statements
    content = content.replace(/import\s*{\s*([^}]+)\s*}\s*from\s*['"]([^'"]+)['"]\s*import\s*{\s*([^}]+)\s*}\s*from\s*['"]([^'"]+)['"]/g, 
      'import { $1 } from \'$2\'\nimport { $3 } from \'$4\'');
    
    // Fix missing semicolons after imports
    content = content.replace(/import\s*{[^}]+}\s*from\s*['"][^'"]+['"](?!\s*;)/g, '$&;');
    
    return content;
  }

  fixStringConcatenation(content) {
    // Fix malformed string concatenation with semicolons
    content = content.replace(/['"]\s*;\s*['"]/g, '');
    content = content.replace(/['"]\s*;\s*([^'"]*)\s*['"]/g, '$1');
    
    // Fix array syntax issues
    content = content.replace(/\[\s*['"]\s*;\s*([^'"]*)\s*['"]\s*\]/g, '[\'$1\']');
    content = content.replace(/\[\s*['"]\s*([^'"]*)\s*;\s*['"]\s*\]/g, '[\'$1\']');
    
    return content;
  }

  fixObjectSyntax(content) {
    // Fix object property syntax
    content = content.replace(/{\s*['"]\s*;\s*([^'"]*)\s*['"]\s*:/g, '{ \'$1\':');
    content = content.replace(/:\s*['"]\s*;\s*([^'"]*)\s*['"]\s*,/g, ': \'$1\',');
    content = content.replace(/:\s*['"]\s*;\s*([^'"]*)\s*['"]\s*}/g, ': \'$1\' }');
    
    return content;
  }

  fixJSXSyntax(content) {
    // Fix JSX attribute syntax
    content = content.replace(/className\s*=\s*['"]\s*;\s*([^'"]*)\s*['"]/g, 'className=\'$1\'');
    content = content.replace(/href\s*=\s*['"]\s*;\s*([^'"]*)\s*['"]/g, 'href=\'$1\'');
    content = content.replace(/title\s*=\s*['"]\s*;\s*([^'"]*)\s*['"]/g, 'title=\'$1\'');
    
    return content;
  }

  fixUnterminatedStrings(content) {
    // Fix unterminated string literals
    const lines = content.split('\n');
    const fixedLines = [];
    
    for (let i = 0; i < lines.length; i++) {
      let line = lines[i];
      
      // Check for unterminated strings
      const singleQuotes = (line.match(/'/g) || []).length;
      const doubleQuotes = (line.match(/"/g) || []).length;
      
      if (singleQuotes % 2 !== 0 && !line.includes('//')) {
        // Try to fix unterminated single quotes
        if (line.includes("'") && !line.endsWith("'")) {
          line = line + "'";
        }
      }
      
      if (doubleQuotes % 2 !== 0 && !line.includes('//')) {
        // Try to fix unterminated double quotes
        if (line.includes('"') && !line.endsWith('"')) {
          line = line + '"';
        }
      }
      
      fixedLines.push(line);
    }
    
    return fixedLines.join('\n');
  }

  fixFile(filePath) {
    try {
      this.log(`Fixing: ${filePath}`);
      
      let content = fs.readFileSync(filePath, 'utf8');
      const originalContent = content;
      
      // Apply all fixes
      content = this.fixImportStatements(content);
      content = this.fixStringConcatenation(content);
      content = this.fixObjectSyntax(content);
      content = this.fixJSXSyntax(content);
      content = this.fixUnterminatedStrings(content);
      
      // Additional cleanup
      content = content.replace(/\s*;\s*;\s*/g, ';');
      content = content.replace(/,\s*,\s*/g, ',');
      content = content.replace(/\s*;\s*$/gm, ';');
      
      if (content !== originalContent) {
        fs.writeFileSync(filePath, content, 'utf8');
        this.fixedFiles.push(filePath);
        this.log(`✅ Fixed: ${filePath}`);
        return true;
      }
      
      return false;
    } catch (error) {
      this.errors.push({ file: filePath, error: error.message });
      this.log(`❌ Error fixing ${filePath}: ${error.message}`);
      return false;
    }
  }

  async run() {
    this.log('🔧 Starting Comprehensive Syntax Error Fix');
    
    const srcDir = path.join(this.projectRoot, 'src');
    if (!fs.existsSync(srcDir)) {
      this.log('❌ src directory not found');
      return;
    }
    
    const files = this.getAllFiles(srcDir, ['.tsx', '.ts', '.jsx', '.js']);
    this.log(`Found ${files.length} files to check`);
    
    let fixedCount = 0;
    for (const file of files) {
      if (this.fixFile(file)) {
        fixedCount++;
      }
    }
    
    this.log(`🎉 Fixed ${fixedCount} files`);
    this.log(`❌ ${this.errors.length} errors encountered`);
    
    // Generate report
    const report = {
      timestamp: new Date().toISOString(),
      totalFiles: files.length,
      fixedFiles: fixedCount,
      errors: this.errors,
      fixedFileList: this.fixedFiles
    };
    
    fs.writeFileSync(
      path.join(this.projectRoot, 'syntax-fix-report.json'),
      JSON.stringify(report, null, 2)
    );
    
    this.log('📊 Report saved to syntax-fix-report.json');
  }
}

// Run the fixer
const fixer = new SyntaxErrorFixer();
fixer.run().catch(console.error);