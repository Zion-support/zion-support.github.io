#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class MergeConflictFixer {
  constructor() {
    this.projectRoot = process.cwd();
    this.fixedFiles = [];
  }

  log(message) {
    console.log(`[${new Date().toISOString()}] ${message}`);
  }

  getAllFiles(dir, extensions = ['.tsx', '.ts', '.jsx', '.js']) {
    const files = [];
    
    const scanDirectory = (currentDir) => {
      if (!fs.existsSync(currentDir)) return;
      
      const items = fs.readdirSync(currentDir);
      items.forEach(item => {
        const itemPath = path.join(currentDir, item);
        const stat = fs.statSync(itemPath);
        
        if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
          scanDirectory(itemPath);
        } else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) {
          files.push(itemPath);
        }
      });
    };
    
    scanDirectory(dir);
    return files;
  }

  fixMergeConflicts() {
    this.log('Starting comprehensive merge conflict fix...');
    
    const allFiles = this.getAllFiles(this.projectRoot);
    let totalFixed = 0;
    
    for (const file of allFiles) {
      try {
        let content = fs.readFileSync(file, 'utf8');
        const originalContent = content;
        
        // Check if file has merge conflicts
        if (content.includes('') || 
            content.includes('') || 
            content.includes('>>>>>>> cursor') ||
            content.includes('cursor/automate-test-fix-improve-and-merge-code-99d1')) {
          
          // Remove all merge conflict markers and their content
          content = content.replace(/[\s\S]*?[\s\S]*?>>>>>>> [^\n]+\n?/g, '');
          content = content.replace(/[\s\S]*?>>>>>>> [^\n]+\n?/g, '');
          content = content.replace(/[\s\S]*?>>>>>>> [^\n]+\n?/g, '');
          
          // Remove cursor merge conflict remnants
          content = content.replace(/cursor\/automate-test-fix-improve-and-merge-code-99d1[\s\S]*?\n/g, '');
          content = content.replace(/ursor\/automate-test-fix-improve-and-merge-code-99d1[\s\S]*?\n/g, '');
          
          // Clean up any remaining orphaned lines
          content = content.replace(/^\s*ursor.*$/gm, '');
          content = content.replace(/^\s*cursor.*$/gm, '');
          
          // Fix common syntax issues that might remain
          content = this.fixCommonSyntaxIssues(content, file);
          
          if (content !== originalContent) {
            fs.writeFileSync(file, content);
            this.log(`Fixed merge conflicts in: ${file}`);
            this.fixedFiles.push(file);
            totalFixed++;
          }
        }
      } catch (error) {
        this.log(`Error processing ${file}: ${error.message}`);
      }
    }
    
    this.log(`Fixed merge conflicts in ${totalFixed} files`);
    return totalFixed;
  }

  fixCommonSyntaxIssues(content, filePath) {
    const fileName = path.basename(filePath);
    
    // If it's a React component and starts with merge conflict remnant, fix it
    if (content.startsWith('ursor') || content.startsWith('cursor')) {
      const lines = content.split('\n');
      let cleanLines = [];
      let foundValidCode = false;
      
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        
        // Skip lines that are clearly merge conflict remnants
        if (line.includes('ursor') || line.includes('cursor/automate')) {
          continue;
        }
        
        // If we haven't found valid code yet and this looks like valid code
        if (!foundValidCode && (
          line.includes('import') || 
          line.includes('interface') || 
          line.includes('const') || 
          line.includes('function') ||
          line.includes('export')
        )) {
          foundValidCode = true;
        }
        
        if (foundValidCode || line.trim() === '') {
          cleanLines.push(line);
        }
      }
      
      content = cleanLines.join('\n');
    }
    
    // Add proper imports for React components if missing
    if ((fileName.endsWith('.tsx') || fileName.endsWith('.jsx')) && 
        !content.includes('import React') && 
        (content.includes('React.FC') || content.includes('useState') || content.includes('useEffect'))) {
      content = "import React from 'react';\n" + content;
    }
    
    return content;
  }

  run() {
    try {
      const fixedCount = this.fixMergeConflicts();
      
      this.log('=== Merge Conflict Fix Summary ===');
      this.log(`Files processed: ${this.fixedFiles.length}`);
      this.log(`Total fixes applied: ${fixedCount}`);
      
      if (this.fixedFiles.length > 0) {
        this.log('Fixed files:');
        this.fixedFiles.forEach(file => {
          this.log(`  - ${file}`);
        });
      }
      
      return fixedCount;
    } catch (error) {
      this.log(`Error during merge conflict fix: ${error.message}`);
      throw error;
    }
  }
}

// Run if this script is executed directly
if (require.main === module) {
  const fixer = new MergeConflictFixer();
  fixer.run()
    .then(count => {
      console.log(`\n✅ Successfully fixed merge conflicts in ${count} files`);
      process.exit(0);
    })
    .catch(error => {
      console.error('❌ Merge conflict fix failed: ', error);
      process.exit(1);
    });
}

module.exports = MergeConflictFixer;
