#!/usr/bin/env node
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
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
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔧 Starting comprehensive merge conflict resolution...');

// Function to fix merge conflicts in a file
function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Remove merge conflict markers and keep the HEAD version (first part)
    const conflictRegex = /<<<<<<< HEAD\n([\s\S]*?)\n=======\n([\s\S]*?)\n>>>>>>> [^\n]+/g;
    
    content = content.replace(conflictRegex, (match, headContent, originContent) => {
      modified = true;
      // Clean up the head content
      let cleaned = headContent
        .replace(/&apos;/g, "'")
        .replace(/&quot;/g, '"')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&amp;/g, '&');
      
      return cleaned;
    });

    // Remove any remaining conflict markers
    content = content.replace(/<<<<<<< HEAD\n?/g, '');
    content = content.replace(/=======\n?/g, '');
    content = content.replace(/>>>>>>> [^\n]+\n?/g, '');

    // Clean up HTML entities
    content = content.replace(/&apos;/g, "'");
    content = content.replace(/&quot;/g, '"');
    content = content.replace(/&lt;/g, '<');
    content = content.replace(/&gt;/g, '>');
    content = content.replace(/&amp;/g, '&');

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Fixed merge conflicts in: ${filePath}`);
      return true;
    }
  } catch (error) {
    console.error(`❌ Error fixing ${filePath}:`, error.message);
  }
  return false;
}

// Function to recursively find files with merge conflicts
function findFilesWithConflicts(dir, extensions = ['.js', '.ts', '.tsx', '.jsx', '.json', '.md']) {
  const files = [];
  
  function traverse(currentDir) {
    try {
      const items = fs.readdirSync(currentDir);
      
      for (const item of items) {
        const fullPath = path.join(currentDir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          // Skip certain directories
          if (!['node_modules', '.git', 'dist', 'build', '.next', 'coverage'].includes(item)) {
            traverse(fullPath);
          }
        } else if (stat.isFile()) {
          const ext = path.extname(item);
          if (extensions.includes(ext)) {
            files.push(fullPath);
          }
        }
      }
    } catch (error) {
      // Skip directories we can't read
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
const workspaceDir = '/workspace';
console.log(`📁 Scanning directory: ${workspaceDir}`);

// Find all files that might have conflicts
const allFiles = findFilesWithConflicts(workspaceDir);
console.log(`📄 Found ${allFiles.length} files to check`);

let fixedCount = 0;
let errorCount = 0;

// Process files in batches to avoid memory issues
const batchSize = 100;
for (let i = 0; i < allFiles.length; i += batchSize) {
  const batch = allFiles.slice(i, i + batchSize);
  
  for (const filePath of batch) {
    try {
      if (fixMergeConflicts(filePath)) {
        fixedCount++;
      }
    } catch (error) {
      errorCount++;
      console.error(`❌ Error processing ${filePath}:`, error.message);
    }
  }
  
  // Progress update
  if (i % 500 === 0) {
    console.log(`📊 Processed ${Math.min(i + batchSize, allFiles.length)}/${allFiles.length} files...`);
  }
}

console.log(`\n🎉 Merge conflict resolution complete!`);
console.log(`✅ Fixed: ${fixedCount} files`);
console.log(`❌ Errors: ${errorCount} files`);

// Try to run a build to check if issues are resolved
console.log('\n🔨 Testing build...');
try {
  execSync('npm run build', { cwd: workspaceDir, stdio: 'pipe' });
  console.log('✅ Build successful!');
} catch (error) {
  console.log('⚠️  Build still has issues, but merge conflicts should be resolved');
  console.log('Build error:', error.message);
}

<<<<<<< HEAD
<<<<<<< HEAD
console.log('\n✨ Merge conflict resolution script completed!');
=======
console.log('\n✨ Merge conflict resolution script completed!');
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
console.log('\n✨ Merge conflict resolution script completed!');
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
