#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove merge conflict markers and keep the second version (after =======)
    const lines = content.split('\n');
    const fixedLines = [];
    let inConflict = false;
    let keepLines = false;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.includes('<<<<<<< HEAD')) {
        inConflict = true;
        keepLines = false;
        continue;
      }
      
      if (line.includes('=======')) {
        keepLines = true;
        continue;
      }
      
      if (line.includes('>>>>>>>')) {
        inConflict = false;
        keepLines = false;
        continue;
      }
      
      if (!inConflict || keepLines) {
        fixedLines.push(line);
      }
    }
    
    const fixedContent = fixedLines.join('\n');
    
    // Clean up common syntax issues
    const cleanedContent = fixedContent
      .replace(/;\s*$/gm, ';') // Fix trailing semicolons
      .replace(/,\s*$/gm, ',') // Fix trailing commas
      .replace(/\s+$/gm, '') // Remove trailing whitespace
      .replace(/\n{3,}/g, '\n\n'); // Remove excessive newlines
    
    if (cleanedContent !== content) {
      fs.writeFileSync(filePath, cleanedContent, 'utf8');
      console.log(`Fixed merge conflicts in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

function findAndFixFiles(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      fixedCount += findAndFixFiles(filePath);
    } else if (file.match(/\.(ts|tsx|js|jsx)$/)) {
      if (fixMergeConflicts(filePath)) {
        fixedCount++;
      }
    }
  }
  
  return fixedCount;
}

console.log('Starting merge conflict fix...');
const fixedCount = findAndFixFiles('.');
console.log(`Fixed ${fixedCount} files with merge conflicts.`);
class MergeConflictFixer {
  constructor() {
    this.projectRoot = process.cwd();
    this.fixedFiles = [];
    this.errors = [];
  }

  log(message) {
    console.log(`[${new Date().toISOString()}] ${message}`);
  }

  async findFilesWithConflicts() {
    try {
      const result = execSync(
        'find . -name "*.js" -o -name "*.jsx" -o -name "*.ts" -o -name "*.tsx" | xargs grep -l "<<<<<<< HEAD" 2>/dev/null || true',
        { cwd: this.projectRoot, encoding: 'utf8' }
      );
      return result.trim().split('\n').filter(file => file && !file.includes('node_modules'));
    } catch (error) {
      this.log(`Error finding conflict files: ${error.message}`);
      return [];
    }
  }

  fixMergeConflicts(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      
      // Skip if no merge conflicts
      if (!content.includes('<<<<<<< HEAD')) {
        return { success: true, message: 'No conflicts found' };
      }

      this.log(`Fixing merge conflicts in: ${filePath}`);

      // Strategy: Keep the last version (after the last =======)
      let fixedContent = content;
      
      // Remove all merge conflict markers and keep the last version
      const lines = content.split('\n');
      const fixedLines = [];
      let inConflict = false;
      let conflictBuffer = [];
      let lastValidContent = [];

      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        
        if (line.includes('<<<<<<< HEAD')) {
          inConflict = true;
          conflictBuffer = [];
          continue;
        }
        
        if (line.includes('=======')) {
          // Store the content before ======= as potential valid content
          lastValidContent = [...conflictBuffer];
          conflictBuffer = [];
          continue;
        }
        
        if (line.includes('>>>>>>>')) {
          inConflict = false;
          // Use the last valid content (after =======)
          fixedLines.push(...lastValidContent);
          conflictBuffer = [];
          lastValidContent = [];
          continue;
        }
        
        if (inConflict) {
          conflictBuffer.push(line);
        } else {
          fixedLines.push(line);
        }
      }

      // If we ended in a conflict state, use the last valid content
      if (inConflict && lastValidContent.length > 0) {
        fixedLines.push(...lastValidContent);
      }

      fixedContent = fixedLines.join('\n');

      // Additional cleanup: remove any remaining conflict markers
      fixedContent = fixedContent
        .replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?        .replace(/<<<<<<< HEAD[\s\S]*?        .replace(/=======[\s\S]*?
      // Clean up extra semicolons and syntax issues
      fixedContent = fixedContent
        .replace(/;\s*;/g, ';')
        .replace(/,\s*,/g, ',')
        .replace(/\{\s*;/g, '{')
        .replace(/;\s*\}/g, '}')
        .replace(/\(\s*;/g, '(')
        .replace(/;\s*\)/g, ')')
        .replace(/=\s*>/g, '=>')
        .replace(/!=\s*=/g, '!==')
        .replace(/=\s*=/g, '==');

      // Write the fixed content
      fs.writeFileSync(filePath, fixedContent);
      
      this.fixedFiles.push(filePath);
      return { success: true, message: 'Conflicts fixed' };
      
    } catch (error) {
      this.errors.push({ file: filePath, error: error.message });
      return { success: false, error: error.message };
    }
  }

  async fixAllConflicts() {
    this.log('🔍 Searching for files with merge conflicts...');
    
    const conflictFiles = await this.findFilesWithConflicts();
    
    if (conflictFiles.length === 0) {
      this.log('✅ No files with merge conflicts found');
      return { success: true, fixedFiles: 0 };
    }

    this.log(`Found ${conflictFiles.length} files with conflicts`);

    for (const file of conflictFiles) {
      const result = this.fixMergeConflicts(file);
      if (result.success) {
        this.log(`✅ Fixed: ${file}`);
      } else {
        this.log(`❌ Failed to fix: ${file} - ${result.error}`);
      }
    }

    this.log(`\n📊 Summary:`);
    this.log(`✅ Successfully fixed: ${this.fixedFiles.length} files`);
    this.log(`❌ Failed to fix: ${this.errors.length} files`);

    if (this.errors.length > 0) {
      this.log('\n❌ Errors:');
      this.errors.forEach(({ file, error }) => {
        this.log(`  - ${file}: ${error}`);
      });
    }

    return {
      success: this.errors.length === 0,
      fixedFiles: this.fixedFiles.length,
      errors: this.errors.length,
      fixedFileList: this.fixedFiles,
      errorList: this.errors
    };
  }
}

// Run the fixer
if (require.main === module) {
  const fixer = new MergeConflictFixer();
  fixer.fixAllConflicts()
    .then(result => {
      if (result.success) {
        console.log('\n🎉 All merge conflicts fixed successfully!');
        process.exit(0);
      } else {
        console.log('\n⚠️ Some files could not be fixed automatically');
        process.exit(1);
      }
    })
    .catch(error => {
      console.error('Fatal error:', error);
      process.exit(1);
    });
}

module.exports = MergeConflictFixer;
