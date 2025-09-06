#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

class ImportSyntaxFixer {
  constructor() {
    this.logFile = path.join(__dirname, 'logs', 'import-syntax-fixer.log');
    this.fixedFiles = [];
    this.ensureLogDirectory();
  }

  ensureLogDirectory() {
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}\n`;
    console.log(`[${level}] ${message}`);
    fs.appendFileSync(this.logFile, logMessage);
  }

  fixFile(filePath) {
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      let modified = false;

      // Fix import statements with trailing commas
      const originalContent = content;
      
      // Fix import statements
      content = content.replace(/import\s+([^,]+),\s*$/gm, 'import $1;');
      content = content.replace(/import\s+([^,]+),\s*$/gm, 'import $1;');
      content = content.replace(/import\s+([^,]+),\s*$/gm, 'import $1;');
      
      // Fix multiple imports on same line
      content = content.replace(/import\s+([^,]+),\s*import\s+([^,]+),\s*$/gm, 'import $1;\nimport $2;');
      
      // Fix empty import statements
      content = content.replace(/import\s*{\s*,\s*}\s*from\s*['"][^'"]+['"];?/g, '');
      
      // Fix malformed import statements
      content = content.replace(/import\s*{\s*,\s*([^}]+)\s*}\s*from\s*['"]([^'"]+)['"];?/g, 'import { $1 } from "$2";');
      
      // Fix trailing commas in general
      content = content.replace(/,(\s*[}\]])/g, '$1');
      
      // Fix empty lines with just commas
      content = content.replace(/^\s*,\s*$/gm, '');

      if (content !== originalContent) {
        fs.writeFileSync(filePath, content);
        this.fixedFiles.push(filePath);
        this.log(`Fixed ${filePath}`);
        modified = true;
      }

      return modified;
    } catch (error) {
      this.log(`Error fixing ${filePath}: ${error.message}`, 'ERROR');
      return false;
    }
  }

  fixAllFiles() {
    const projectRoot = path.join(__dirname, '..');
    const files = this.getAllTypeScriptFiles(projectRoot);
    
    this.log(`Found ${files.length} TypeScript files to check`);
    
    files.forEach(file => {
      this.fixFile(file);
    });
  }

  getAllTypeScriptFiles(dir) {
    const files = [];
    const items = fs.readdirSync(dir);
    
    items.forEach(item => {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules' && item !== 'automation') {
        files.push(...this.getAllTypeScriptFiles(fullPath));
      } else if (item.endsWith('.ts') || item.endsWith('.tsx')) {
        files.push(fullPath);
      }
    });
    
    return files;
  }

  async run() {
    this.log('Starting import syntax fixing...');
    this.fixAllFiles();
    this.log(`Fixed ${this.fixedFiles.length} files`);
  }
}

// Main execution
if (require.main === module) {
  const fixer = new ImportSyntaxFixer();
  fixer.run().catch(console.error);
}

module.exports = ImportSyntaxFixer;