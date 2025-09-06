#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
class MergeConflictFixer {
  constructor() {
    this.fixedFiles = [];
    this.errors = [];
  }
  log(message) {
    console.log(`[${new Date().toISOString()}] ${message}`);
  }
  async run() {
    this.log('🔧 Starting comprehensive merge conflict fixing...');
    try {
      // Find all files with merge conflicts
      const filesWithConflicts = this.findFilesWithConflicts();
      this.log(`Found ${filesWithConflicts.length} files with merge conflicts`);
      // Fix each file
      for (const file of filesWithConflicts) {
        try {
          await this.fixFile(file);
        } catch (error) {
          this.log(`❌ Failed to fix ${file}: ${error.message}`);
          this.errors.push(`${file}: ${error.message}`);
        }
      }
      this.generateReport();
    } catch (error) {
      this.log(`❌ Error during merge conflict fixing: ${error.message}`);
    }
  }
  findFilesWithConflicts() {
    const files = [];
    const extensions = ['.js', '.ts', '.tsx', '.jsx', '.cjs', '.json', '.css', '.html'];
    function searchDirectory(dir) {
      if (!fs.existsSync(dir)) return;
      try {
        const items = fs.readdirSync(dir);
        for (const item of items) {
          const fullPath = path.join(dir, item);
          const stat = fs.statSync(fullPath);
          if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
            searchDirectory(fullPath);
          } else if (stat.isFile()) {
            const ext = path.extname(item);
            if (extensions.includes(ext)) {
              try {
                const content = fs.readFileSync(fullPath, 'utf8');
                if (content.includes('') || content.includes('
                  files.push(fullPath);
                }
              } catch (error) {
                // Skip files that can't be read
              }
            }
          }
        }
      } catch (error) {
        // Skip directories that can't be read
      }
    }
    // Search in common source directories
    const searchDirs = ['src', 'app', 'components', 'pages', 'public', 'styles'];
    searchDirs.forEach(dir => searchDirectory(dir));
    // Also search in root for config files
    searchDirectory('.');
    return files;
  }
  async fixFile(filePath) {
    if (!fs.existsSync(filePath)) return;
    this.log(`🔧 Fixing ${filePath}`);
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    // Remove merge conflict markers and choose the newer version (after )
    content = content
      .replace(/([\s\S]*?)
      .replace(/[\s\S]*?
      .replace(//g, '')
      .replace(/
    // Clean up any remaining artifacts
    content = content
      .replace(/\n\s*\n\s*\n/g, '\n\n') // Remove excessive blank lines
      .replace(/^\s*\n/gm, '') // Remove lines with only whitespace
      .trim();
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      this.fixedFiles.push(filePath);
      this.log(`✅ Fixed ${filePath}`);
    } else {
      this.log(`ℹ️  No changes needed for ${filePath}`);
    }
  }
  generateReport() {
    this.log('\n📊 MERGE CONFLICT FIXING REPORT');
    this.log('======');
    this.log(`✅ Successfully fixed: ${this.fixedFiles.length} files`);
    this.log(`❌ Failed to fix: ${this.errors.length} files`);
    if (this.fixedFiles.length > 0) {
      this.log('\n✅ Fixed files:');
      this.fixedFiles.forEach(file => this.log(`  - ${file}`));
    }
    if (this.errors.length > 0) {
      this.log('\n❌ Failed files:');
      this.errors.forEach(error => this.log(`  - ${error}`));
    }
    this.log('\n🎯 Next steps:');
    this.log('1. Run npm run build to test the build');
    this.log('2. Run npm run test:smoke to test the tests');
    this.log('3. Commit and push changes');
  }
}
// Run the fixer
const fixer = new MergeConflictFixer();
fixer.run().catch(console.error);
module.exports = MergeConflictFixer;