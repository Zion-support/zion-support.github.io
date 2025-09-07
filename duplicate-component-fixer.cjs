#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

class DuplicateComponentFixer {
  constructor() {
    this.fixedFiles = [];
    this.failedFiles = [];
  }

  log(message, type = 'INFO') {
    const timestamp = new Date().toISOString();
    const prefix = type === 'ERROR' ? '❌' : type === 'WARN' ? '⚠️' : '✅';
    console.log(`[${timestamp}] ${prefix} ${message}`);
  }

  async fixDuplicateComponents(filePath) {
    if (!fs.existsSync(filePath)) {
      this.failedFiles.push(filePath);
      return;
    }

    this.log(`Fixing duplicate components in: ${filePath}`);
    
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      const originalContent = content;

      // Remove duplicate component declarations
      content = this.removeDuplicateComponents(content);
      
      // Write the fixed content
      fs.writeFileSync(filePath, content, 'utf8');
      
      this.fixedFiles.push(filePath);
      this.log(`Fixed duplicate components in: ${filePath}`);
      
    } catch (error) {
      this.failedFiles.push(filePath);
      this.log(`Failed to fix ${filePath}: ${error.message}`, 'ERROR');
    }
  }

  removeDuplicateComponents(content) {
    // Track declared components
    const declaredComponents = new Set();
    const lines = content.split('\n');
    const fixedLines = [];
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      // Check for component declarations
      const componentMatch = line.match(/function\s+(\w+)\s*\(/);
      if (componentMatch) {
        const componentName = componentMatch[1];
        
        if (declaredComponents.has(componentName)) {
          // Skip this duplicate declaration
          this.log(`Removing duplicate declaration of ${componentName}`);
          continue;
        } else {
          declaredComponents.add(componentName);
        }
      }
      
      fixedLines.push(line);
    }
    
    return fixedLines.join('\n');
  }

  async processFiles() {
    this.log('Starting duplicate component fixing...');
    
    // Find all TypeScript/JavaScript files in the app directory
    const appDir = path.join(process.cwd(), 'app');
    const files = this.findFiles(appDir, ['.tsx', '.ts', '.jsx', '.js']);
    
    this.log(`Found ${files.length} files to process`);
    
    for (const file of files) {
      await this.fixDuplicateComponents(file);
    }
    
    this.log(`\n=== Duplicate Component Fixing Summary ===`);
    this.log(`Files processed: ${files.length}`);
    this.log(`Files fixed: ${this.fixedFiles.length}`);
    this.log(`Files failed: ${this.failedFiles.length}`);
    
    if (this.failedFiles.length > 0) {
      this.log('\nFailed files:', 'WARN');
      this.failedFiles.forEach(file => this.log(`  - ${file}`, 'WARN'));
    }
  }

  findFiles(dir, extensions) {
    const files = [];
    
    if (!fs.existsSync(dir)) {
      return files;
    }
    
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        files.push(...this.findFiles(fullPath, extensions));
      } else if (stat.isFile()) {
        const ext = path.extname(item);
        if (extensions.includes(ext)) {
          files.push(fullPath);
        }
      }
    }
    
    return files;
  }
}

// Run the fixer
const fixer = new DuplicateComponentFixer();
fixer.processFiles().catch(console.error);