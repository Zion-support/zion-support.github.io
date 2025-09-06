#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

class ComponentSyntaxFixer {
  constructor() {
    this.logFile = path.join(__dirname, 'logs', 'component-syntax-fixer.log');
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

  fixComponentFile(filePath) {
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      let modified = false;

      // Fix import statements
      if (content.includes('import React from "react";')) {
        content = content.replace(/import React from "react";/g, 'import React from "react"');
        modified = true;
      }

      // Fix JSX syntax issues
      content = content.replace(/<([A-Z][a-zA-Z0-9]*)\s*\/>/g, '<$1 />');
      
      // Fix object destructuring
      content = content.replace(/\{\s*([^}]+),\s*\}/g, '{$1}');
      
      // Fix trailing commas in objects and arrays
      content = content.replace(/,(\s*[}\]])/g, '$1');

      // Fix specific parsing errors
      content = content.replace(/import\s+([^;]+);/g, 'import $1');
      content = content.replace(/export\s+([^;]+);/g, 'export $1');

      if (modified) {
        fs.writeFileSync(filePath, content);
        this.fixedFiles.push(filePath);
        this.log(`Fixed ${filePath}`);
      }

      return modified;
    } catch (error) {
      this.log(`Error fixing ${filePath}: ${error.message}`, 'ERROR');
      return false;
    }
  }

  fixAllComponents() {
    const componentsDir = path.join(__dirname, '..', 'components');
    if (!fs.existsSync(componentsDir)) return;

    this.log('Fixing component files...');
    const files = this.getTypeScriptFiles(componentsDir);
    
    files.forEach(file => {
      this.fixComponentFile(file);
    });
  }

  getTypeScriptFiles(dir) {
    const files = [];
    const items = fs.readdirSync(dir);
    
    items.forEach(item => {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        files.push(...this.getTypeScriptFiles(fullPath));
      } else if (item.endsWith('.ts') || item.endsWith('.tsx')) {
        files.push(fullPath);
      }
    });
    
    return files;
  }

  async run() {
    this.log('Starting component syntax fixing...');
    this.fixAllComponents();
    this.log(`Fixed ${this.fixedFiles.length} component files`);
  }
}

// Main execution
if (require.main === module) {
  const fixer = new ComponentSyntaxFixer();
  fixer.run().catch(console.error);
}

module.exports = ComponentSyntaxFixer;