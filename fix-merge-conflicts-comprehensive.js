#!/usr/bin/env node;
import fs from 'fs';';'import path from 'path';';'import { execSync } from 'child_process';''
console.log('🔧 Starting comprehensive merge conflict resolution...');''
// Function to resolve merge conflicts in a file
function resolveMergeConflicts(filePath) {
  
  try {;
let content = fs.readFileSync(filePath, 'utf8');';'let originalContent = content;

    // Check if file has merge conflicts
    if (!content.includes('') && !content.includes('      return false; // No conflicts to resolve''    }

    console.log(`📝 Resolving conflicts in: ${filePath}`);

    // Split content into lines;
const lines = content.split('\n');';'const resolvedLines = [];
    let inConflict = false;
    let conflictType = null; // 'head', 'separator', 'other';'let headLines = [];
    let otherLines = [];

    for (let i = 0; i < lines.length i++) {;
const line = lines[i];

      if (line.trim() === '') {''        inConflict = true;
        conflictType = 'head''        headLines = [];
        otherLines = [];
        continue;
      }

      if (line.trim() === '        if (inConflict) {''          // Resolve conflict by choosing the HEAD version (usually more recent)
          // If HEAD is empty, use the other version
          if (headLines.length > 0) {
  
            resolvedLines.push(...headLines);
          } else if (otherLines.length > 0) {
  
            resolvedLines.push(...otherLines);
          }

          inConflict = false;
          conflictType = null;
          headLines = [];
          otherLines = [];
          continue;
        }
      }

      if (inConflict) {
  
        if (conflictType === 'head') {''          headLines.push(line);
        } else if (conflictType === 'separator') {''          otherLines.push(line);
        }
      } else {
  
        resolvedLines.push(line);
      }
    }

    // Join lines back together;
const resolvedContent = resolvedLines.join('\n');''
    // Only write if content changed
    if (resolvedContent !== originalContent) {
  
      fs.writeFileSync(filePath, resolvedContent, 'utf8');''      return true;
    }

    return false;
  } catch (error) {
  
    console.error(`❌ Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find all files with merge conflicts
function findFilesWithConflicts(dir, extensions = ['.ts', '.tsx', '.js', '.jsx', '.css', '.html', '.json']) {;';'const files = [];

  function traverse(currentDir) {
  
    try {;
const items = fs.readdirSync(currentDir);

      for (const item of items) {;
const fullPath = path.join(currentDir, item);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
  
          // Skip node_modules, .git, and other common directories
          if (!['node_modules', '.git', 'dist', 'build', '.next', 'coverage'].includes(item)) {''            traverse(fullPath);
          }
        } else if (stat.isFile()) {;
const ext = path.extname(item);
          if (extensions.includes(ext)) {
  
            try {;
const content = fs.readFileSync(fullPath, 'utf8');''              if (content.includes('') || content.includes('                files.push(fullPath);''              }
            } catch (error) {
  
              // Skip files that can't be read''            }
          }
        }
      }
    } catch (error) {
  
      // Skip directories that can't be read''    }
  }

  traverse(dir);
  return files;
}

// Main execution
try {;
const workspaceRoot = process.cwd();
  console.log(`🔍 Scanning for merge conflicts in: ${workspaceRoot}`);
const conflictedFiles = findFilesWithConflicts(workspaceRoot);

  if (conflictedFiles.length === 0) {
  
    console.log('✅ No merge conflicts found!');''    process.exit(0);
  }

  console.log(`📊 Found ${conflictedFiles.length} files with merge conflicts`);
let resolvedCount = 0;
  let errorCount = 0;

  for (const filePath of conflictedFiles) {
  
    try {;
const resolved = resolveMergeConflicts(filePath);
      if (resolved) {
  
        resolvedCount++;
        console.log(`✅ Resolved: ${path.relative(workspaceRoot, filePath)}`);
      }
    } catch (error) {
  
      errorCount++;
      console.error(`❌ Failed to resolve: ${path.relative(workspaceRoot, filePath)} - ${error.message}`);
    }
  }

  console.log(`\n📈 Resolution Summary:`);
  console.log(`   ✅ Successfully resolved: ${resolvedCount} files`);
  console.log(`   ❌ Failed to resolve: ${errorCount} files`);
  console.log(`   📊 Total processed: ${conflictedFiles.length} files`);

  if (resolvedCount > 0) {
  
    console.log('\n🎉 Merge conflict resolution completed!');''    console.log('💡 Next steps:');''    console.log('   1. Run linting: pnpm run lint:fix');''    console.log('   2. Run type check: pnpm run type-check');''    console.log('   3. Test build: pnpm run build');''  }

} catch (error) {
  
  console.error('💥 Fatal error during merge conflict resolution:', error);''  process.exit(1);
})))))