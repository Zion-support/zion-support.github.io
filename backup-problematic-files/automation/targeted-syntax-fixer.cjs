#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

class TargetedSyntaxFixer {
  constructor() {
    this.logFile = path.join(__dirname, 'logs', 'targeted-syntax-fixer.log');
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

      // Fix trailing commas and semicolons
      const originalContent = content;
      content = content.replace(/,;/g, ',');
      content = content.replace(/,\s*}/g, '}');
      content = content.replace(/,\s*]/g, ']');
      content = content.replace(/,\s*\)/g, ')');
      
      // Fix object property syntax
      content = content.replace(/"([^"]+)":/g, '$1:');
      
      // Fix array syntax
      content = content.replace(/\[([^\]]+),\]/g, '[$1]');
      
      // Fix function syntax
      content = content.replace(/\(([^)]+),\)/g, '($1)');

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
    this.log('Starting targeted syntax fixing...');
    this.fixAllFiles();
    this.log(`Fixed ${this.fixedFiles.length} files`);
  }
}

// Main execution
if (require.main === module) {
  const fixer = new TargetedSyntaxFixer();
  fixer.run().catch(console.error);
}

module.exports = TargetedSyntaxFixer;