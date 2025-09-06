#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class ComprehensiveCodeCleanup {
  constructor() {
    this.projectRoot = process.cwd();
    this.fixedFiles = [];
    this.errors = [];
  }

  log(message, type = 'INFO') {
    const timestamp = new Date().toISOString();
    
  }

  async findFilesToClean() {
    this.log('🔍 Finding files that need cleanup...');
    
    const extensions = ['.ts', '.tsx', '.js', '.jsx', '.cjs', '.mjs'];
    const files = [];
    
    const scanDirectory = (dir) => {
      try {
        const items = fs.readdirSync(dir);
        for (const item of items) {
          const fullPath = path.join(dir, item);
          try {
            const stat = fs.statSync(fullPath);
            
            if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
              scanDirectory(fullPath);
            } else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) {
              files.push(fullPath);
            }
          } catch (err) {
            // Skip files that can't be accessed
            this.log(`  - Skipping inaccessible file: ${fullPath}`, 'WARN');
          }
        }
      } catch (err) {
        // Skip directories that can't be accessed
        this.log(`  - Skipping inaccessible directory: ${dir}`, 'WARN');
      }
    };
    
    scanDirectory(this.projectRoot);
    this.log(`Found ${files.length} files to process`);
    return files;
  }

  async cleanFile(filePath) {
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      let modified = false;
      
      // Remove console statements (except console.error for debugging)
      const consoleRegex = /console\.(log|warn|info|debug)\s*\([^)]*\)\s*;?/g;
      const consoleMatches = content.match(consoleRegex);
      if (consoleMatches) {
        content = content.replace(consoleRegex, '');
        modified = true;
        this.log(`  - Removed ${consoleMatches.length} console statements`);
      }
      
      // Fix unescaped entities in JSX
      const entityRegex = /([^\\])(['"])/g;
      const entityMatches = content.match(entityRegex);
      if (entityMatches && filePath.endsWith('.tsx') || filePath.endsWith('.jsx')) {
        content = content.replace(entityRegex, '$1\\$2');
        modified = true;
        this.log(`  - Fixed ${entityMatches.length} unescaped entities`);
      }
      
      // Remove unused imports (basic detection)
      const importLines = content.split('\n').filter(line => line.trim().startsWith('import '));
      const usedImports = new Set();
      
      // Find used imports
      for (const importLine of importLines) {
        const match = importLine.match(/import\s+.*?\s+from\s+['"]([^'"]+)['"]/);
        if (match) {
          const modulePath = match[1];
          if (content.includes(modulePath.split('/').pop())) {
            usedImports.add(importLine);
          }
        }
      }
      
      // Remove unused imports
      let newContent = content;
      for (const importLine of importLines) {
        if (!usedImports.has(importLine) && importLine.includes('from')) {
          newContent = newContent.replace(importLine + '\n', '');
          modified = true;
        }
      }
      
      if (modified) {
        fs.writeFileSync(filePath, newContent, 'utf8');
        this.fixedFiles.push(filePath);
        this.log(`✅ Cleaned: ${path.relative(this.projectRoot, filePath)}`);
      }
      
    } catch (error) {
      this.errors.push({ file: filePath, error: error.message });
      this.log(`❌ Error cleaning ${filePath}: ${error.message}`, 'ERROR');
    }
  }

  async run() {
    this.log('🚀 Starting comprehensive code cleanup...');
    
    try {
      const files = await this.findFilesToClean();
      
      for (const file of files) {
        await this.cleanFile(file);
      }
      
      this.log(`\n📊 Cleanup Summary:`);
      this.log(`  - Files processed: ${files.length}`);
      this.log(`  - Files fixed: ${this.fixedFiles.length}`);
      this.log(`  - Errors: ${this.errors.length}`);
      
      if (this.errors.length > 0) {
        this.log(`\n❌ Errors encountered:`);
        this.errors.forEach(err => {
          this.log(`  - ${err.file}: ${err.error}`, 'ERROR');
        });
      }
      
      this.log('\n🎉 Comprehensive code cleanup completed!');
      
    } catch (error) {
      this.log(`❌ Fatal error: ${error.message}`, 'ERROR');
      process.exit(1);
    }
  }
}

// Run the cleanup
const cleanup = new ComprehensiveCodeCleanup();
cleanup.run().catch(console.error);