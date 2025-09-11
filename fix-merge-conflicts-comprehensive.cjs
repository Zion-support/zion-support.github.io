#!/usr/bin/env node
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
    const conflictRegex = /    // Remove any remaining conflict markers
    content = content.replace(/\n?/g, '');
    content = content.replace(/    content = content.replace(/
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
