#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class ComprehensiveConflictFixer {
  constructor() {
    this.projectRoot = process.cwd();
    this.fixedFiles = [];
    this.errors = [];
  }

  log(message) {
    console.log(`[${new Date().toISOString()}] ${message}`);
  }

  findFilesWithConflicts() {
    try {
      const result = execSync('find . -name "*.tsx" -o -name "*.ts" -o -name "*.js" -o -name "*.jsx" | grep -v node_modules | grep -v .next | xargs grep -l "<<<<<<< HEAD" 2>/dev/null || true', {
        cwd: this.projectRoot,
        encoding: 'utf8'
      });
      return result.trim().split('\n').filter(file => file.trim());
    } catch (error) {
      this.log(`Error finding conflict files: ${error.message}`);
      return [];
    }
  }

  fixFile(filePath) {
    try {
      this.log(`🔧 Fixing: ${filePath}`);
      
      if (!fs.existsSync(filePath)) {
        this.log(`⚠️ File not found: ${filePath}`);
        return false;
      }

      let content = fs.readFileSync(filePath, 'utf8');
      let originalContent = content;

      // Fix merge conflicts by keeping HEAD version
      content = this.fixMergeConflicts(content);
      content = this.fixSyntaxErrors(content);

      if (content !== originalContent) {
        fs.writeFileSync(filePath, content, 'utf8');
        this.fixedFiles.push(filePath);
        this.log(`✅ Fixed: ${filePath}`);
        return true;
      } else {
        this.log(`ℹ️ No changes needed: ${filePath}`);
        return false;
      }
    } catch (error) {
      this.log(`❌ Error fixing ${filePath}: ${error.message}`);
      this.errors.push({ file: filePath, error: error.message });
      return false;
    }
  }

  fixMergeConflicts(content) {
    // Remove all merge conflict markers and keep HEAD version
    content = content.replace(/<<<<<<< HEAD\n([\s\S]*?)\n=======\n([\s\S]*?)\n>>>>>>> [^\n]+/g, '$1');
    content = content.replace(/<<<<<<< HEAD\n([\s\S]*?)\n=======\n([\s\S]*?)\n>>>>>>> main/g, '$1');
    content = content.replace(/<<<<<<< HEAD\n([\s\S]*?)\n=======/g, '$1');
    content = content.replace(/=======\n([\s\S]*?)\n>>>>>>> [^\n]+/g, '');
    content = content.replace(/>>>>>>> [^\n]+/g, '');
    
    return content;
  }

  fixSyntaxErrors(content) {
    // Fix malformed import statements
    content = content.replace(/import:\s*/g, 'import ');
    content = content.replace(/from\s*'([^']*)';\s*'/g, "from '$1';");
    content = content.replace(/;\s*'/g, "';");
    
    // Fix malformed object properties
    content = content.replace(/,\s*$/gm, '');
    content = content.replace(/:\s*,/g, ': ');
    content = content.replace(/,\s*}/g, '}');
    content = content.replace(/,\s*]/g, ']');
    
    // Fix malformed strings
    content = content.replace(/'([^']*),\s*$/gm, "'$1'");
    content = content.replace(/,\s*'([^']*)'/g, ", '$1'");
    
    // Fix malformed function declarations
    content = content.replace(/const:\s*/g, 'const ');
    content = content.replace(/:\s*React\.FC:\s*=\s*\(\)/g, ': React.FC = ()');
    
    // Fix malformed array and object syntax
    content = content.replace(/\[\s*,\s*/g, '[');
    content = content.replace(/{\s*,\s*/g, '{');
    
    // Fix missing commas in arrays
    content = content.replace(/'([^']*)'\s*\n\s*'([^']*)'/g, "'$1',\n      '$2'");
    content = content.replace(/"([^"]*)"\s*\n\s*"([^"]*)"/g, '"$1",\n      "$2"');
    
    // Fix missing commas after object properties
    content = content.replace(/(\w+):\s*'([^']*)'\s*\n/g, "$1: '$2',\n");
    content = content.replace(/(\w+):\s*"([^"]*)"\s*\n/g, '$1: "$2",\n');
    content = content.replace(/(\w+):\s*(\d+)\s*\n/g, '$1: $2,\n');
    content = content.replace(/(\w+):\s*(\w+)\s*\n/g, '$1: $2,\n');
    
    // Remove duplicate commas
    content = content.replace(/,,+/g, ',');
    
    // Fix trailing commas before closing braces/brackets
    content = content.replace(/,(\s*[}\]])/g, '$1');
    
    return content;
  }

  async fixAllConflicts() {
    this.log('🚀 Starting comprehensive merge conflict resolution...');

    const conflictFiles = this.findFilesWithConflicts();
    this.log(`📋 Found ${conflictFiles.length} files with merge conflicts`);

    for (const file of conflictFiles) {
      const fullPath = path.join(this.projectRoot, file);
      this.fixFile(fullPath);
    }

    this.log(`🎉 Comprehensive merge conflict resolution completed!`);
    this.log(`📊 Fixed ${this.fixedFiles.length} files`);
    
    if (this.errors.length > 0) {
      this.log(`⚠️ ${this.errors.length} errors encountered:`);
      this.errors.forEach(error => {
        this.log(`  - ${error.file}: ${error.error}`);
      });
    }

    return {
      fixedFiles: this.fixedFiles,
      errors: this.errors
    };
  }
}

// Run the fixer if this file is executed directly
if (require.main === module) {
  const fixer = new ComprehensiveConflictFixer();
  fixer.fixAllConflicts()
    .then((result) => {
      console.log('\n🎉 Comprehensive merge conflict fixing completed!');
      console.log(`📊 Fixed ${result.fixedFiles.length} files`);
      if (result.errors.length > 0) {
        console.log(`⚠️ ${result.errors.length} errors encountered`);
        process.exit(1);
      } else {
        process.exit(0);
      }
    })
    .catch((error) => {
      console.error('\n💥 Comprehensive merge conflict fixing failed:', error.message);
      process.exit(1);
    });
}

module.exports = ComprehensiveConflictFixer;