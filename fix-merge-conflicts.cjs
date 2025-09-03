#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

class MergeConflictFixer {
  constructor() {
    this.projectRoot = process.cwd();
    this.fixedFiles = [];
    this.errors = [];
  }

  log(message) {
    console.log(`[${new Date().toISOString()}] ${message}`);
  }

  fixFile(filePath) {
    try {
      this.log(`🔧 Fixing merge conflicts in: ${filePath}`);
      
      if (!fs.existsSync(filePath)) {
        this.log(`⚠️ File not found: ${filePath}`);
        return false;
      }

      let content = fs.readFileSync(filePath, 'utf8');
      let originalContent = content;

      // Fix common merge conflict patterns
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
    // Remove merge conflict markers and keep the HEAD version
    content = content.replace(/<<<<<<< HEAD\n([\s\S]*?)\n=======\n([\s\S]*?)\n>>>>>>> main/g, '$1');
    content = content.replace(/<<<<<<< HEAD\n([\s\S]*?)\n=======\n([\s\S]*?)\n>>>>>>> [^\n]+/g, '$1');
    content = content.replace(/<<<<<<< HEAD\n([\s\S]*?)\n=======/g, '$1');
    content = content.replace(/=======\n([\s\S]*?)\n>>>>>>> [^\n]+/g, '');
    
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
    
    return content;
  }

  async fixAllConflicts() {
    this.log('🚀 Starting merge conflict resolution...');

    const filesToFix = [
      'components/Layout.tsx',
      'components/Navigation.tsx',
      'components/SEO.tsx',
      'components/ui/Button.tsx',
      'data/services.ts'
    ];

    for (const file of filesToFix) {
      const fullPath = path.join(this.projectRoot, file);
      this.fixFile(fullPath);
    }

    this.log(`🎉 Merge conflict resolution completed!`);
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
  const fixer = new MergeConflictFixer();
  fixer.fixAllConflicts()
    .then((result) => {
      console.log('\n🎉 Merge conflict fixing completed!');
      console.log(`📊 Fixed ${result.fixedFiles.length} files`);
      if (result.errors.length > 0) {
        console.log(`⚠️ ${result.errors.length} errors encountered`);
        process.exit(1);
      } else {
        process.exit(0);
      }
    })
    .catch((error) => {
      console.error('\n💥 Merge conflict fixing failed:', error.message);
      process.exit(1);
    });
}

module.exports = MergeConflictFixer;