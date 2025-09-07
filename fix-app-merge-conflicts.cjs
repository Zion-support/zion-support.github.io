#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

class MergeConflictResolver {
  constructor() {
    this.appDir = path.join(process.cwd(), 'app');
    this.fixedFiles = [];
    this.errors = [];
  }

  log(message, type = 'INFO') {
    const timestamp = new Date().toISOString();
    const prefix = {
      'INFO': 'ℹ️',
      'SUCCESS': '✅',
      'ERROR': '❌',
      'WARNING': '⚠️'
    }[type] || 'ℹ️';
    console.log(`${prefix} [${timestamp}] ${message}`);
  }

  resolveMergeConflicts(filePath) {
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      
      // Check if file has merge conflicts
      if (!content.includes('<<<<<<< HEAD') && !content.includes('=======') && !content.includes('>>>>>>>')) {
        return { success: true, message: 'No merge conflicts found' };
      }

      this.log(`Resolving merge conflicts in: ${filePath}`, 'INFO');

      // Remove all merge conflict markers and keep the HEAD version
      let lines = content.split('\n');
      let resolvedLines = [];
      let inConflict = false;
      let keepLines = false;

      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        
        if (line.includes('<<<<<<< HEAD')) {
          inConflict = true;
          keepLines = true;
          continue;
        }
        
        if (line.includes('=======')) {
          keepLines = false;
          continue;
        }
        
        if (line.includes('>>>>>>>')) {
          inConflict = false;
          keepLines = false;
          continue;
        }
        
        if (!inConflict || keepLines) {
          resolvedLines.push(line);
        }
      }

      // Clean up any remaining syntax issues
      let resolvedContent = resolvedLines.join('\n');
      
      // Fix common syntax issues
      resolvedContent = resolvedContent
        .replace(/;\s*$/, '') // Remove trailing semicolons
        .replace(/,\s*$/, '') // Remove trailing commas
        .replace(/\s+$/, '') // Remove trailing whitespace
        .replace(/\n\s*\n\s*\n/g, '\n\n'); // Remove multiple empty lines

      // Write the resolved content
      fs.writeFileSync(filePath, resolvedContent, 'utf8');
      
      this.fixedFiles.push(filePath);
      return { success: true, message: 'Merge conflicts resolved' };
      
    } catch (error) {
      this.errors.push({ file: filePath, error: error.message });
      return { success: false, error: error.message };
    }
  }

  async processDirectory(dirPath) {
    try {
      const items = fs.readdirSync(dirPath);
      
      for (const item of items) {
        const fullPath = path.join(dirPath, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          await this.processDirectory(fullPath);
        } else if (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.jsx') || item.endsWith('.js')) {
          const result = this.resolveMergeConflicts(fullPath);
          if (result.success) {
            this.log(`Fixed: ${fullPath}`, 'SUCCESS');
          } else {
            this.log(`Failed to fix: ${fullPath} - ${result.error}`, 'ERROR');
          }
        }
      }
    } catch (error) {
      this.log(`Error processing directory ${dirPath}: ${error.message}`, 'ERROR');
    }
  }

  async run() {
    this.log('Starting merge conflict resolution in app directory...', 'INFO');
    
    if (!fs.existsSync(this.appDir)) {
      this.log('App directory not found', 'ERROR');
      return;
    }

    await this.processDirectory(this.appDir);
    
    this.log(`\n📊 Resolution Summary:`, 'INFO');
    this.log(`✅ Files fixed: ${this.fixedFiles.length}`, 'SUCCESS');
    this.log(`❌ Errors: ${this.errors.length}`, this.errors.length > 0 ? 'ERROR' : 'SUCCESS');
    
    if (this.errors.length > 0) {
      this.log('\nErrors encountered:', 'ERROR');
      this.errors.forEach(err => {
        this.log(`  - ${err.file}: ${err.error}`, 'ERROR');
      });
    }
    
    if (this.fixedFiles.length > 0) {
      this.log('\nFixed files:', 'SUCCESS');
      this.fixedFiles.forEach(file => {
        this.log(`  - ${file}`, 'SUCCESS');
      });
    }
  }
}

// Run the resolver
if (require.main === module) {
  const resolver = new MergeConflictResolver();
  resolver.run().catch(console.error);
}

module.exports = MergeConflictResolver;