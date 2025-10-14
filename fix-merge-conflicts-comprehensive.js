#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
console.log('🔧 Starting comprehensive merge conflict resolution...');
// Function to fix merge conflicts in a file
function fixMergeConflicts(filePath) {
  try {
<<<<<<< HEAD
    let content = fs.readFileSync(filePath, 'utf8')
    let originalContent = content
    // Remove merge conflict markers and keep the HEAD version (first part)
        inConflict = true
        keepLines = true
        continue
        inConflict = false
        keepLines = true
        continue
}
      if (!inConflict || keepLines) {
        resolvedLines.push(line)
}
    const resolvedContent = resolvedLines.join('\n')
    // Clean up any remaining syntax issues
    let cleanedContent = resolvedContent
      // Remove duplicate semicolons
      .replace(/;+/g, ')
      // Fix malformed imports
      .replace(/import\s+([^;]+);+/g, 'import $1;')
      // Fix malformed JSX
      .replace(/<React\.Fragment>/g, '<>')
      .replace(/<\/React\.Fragment>/g, '</>')
      // Remove stray quotes and semicolons
      .replace(/"/g, '"')
      .replace(/'/g'")
      // Fix malformed JSX attributes
      .replace(/\s+"/g, '')
      .replace(/\s+'/g, '')
      // Clean up extra whitespace
      .replace(/\n\s*\n\s*\n/g, '\n\n')
      // Remove empty lines at the end
      .replace(/\n+$/, '\n')
    // Write the cleaned content back
    fs.writeFileSync(filePath, cleanedContent, 'utf8')
    console.log(`✅ Fixed: ${filePath}`)
    return true
=======
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    // Check if file has merge conflicts
    if (!content.includes('
      return false; // No conflicts to fix
    }
    console.log(`Fixing merge conflicts in: ${filePath}`);
    // Strategy: Keep the content after ======= (usually the incoming changes)
    // But first, let's try to be smarter about it
    // Remove all merge conflict markers and keep the last version (after =======)
    const lines = content.split('\n');
    const fixedLines = [];
    let inConflict = false;
    let keepContent = false;
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      if (line.trim() === '
        inConflict = false;
        keepContent = false;
        continue;
      }
      if (!inConflict || keepContent) {
        fixedLines.push(line);
      }
    }
    const fixedContent = fixedLines.join('\n');
    // Additional cleanup for common issues
    let cleanedContent = fixedContent
      // Remove any remaining conflict markers
      .replace(/
      // Fix common syntax issues
      .replace(/\n\s*\n\s*\n/g, '\n\n') // Remove excessive newlines
      .replace(/\s+$/gm, '') // Remove trailing whitespace
      .trim();
    // Write the fixed content back
    fs.writeFileSync(filePath, cleanedContent, 'utf8');
    console.log(`✅ Fixed merge conflicts in: ${filePath}`);
    return true;
>>>>>>> cursor/fix-errors-and-merge-to-main-cbe1
  } catch (error) {
    console.error(`❌ Error fixing ${filePath}:`, error.message);
    return false;
  }
}
// Function to find all files with merge conflicts
function findFilesWithConflicts(dir) {
  const files = [];
  function scanDirectory(currentDir) {
    try {
      const items = fs.readdirSync(currentDir);
      for (const item of items) {
        const fullPath = path.join(currentDir, item);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
          // Skip node_modules and other irrelevant directories
          if (!['node_modules', '.git', 'dist', 'build', '.next', 'out'].includes(item)) {
            scanDirectory(fullPath);
          }
        } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.js') || item.endsWith('.jsx'))) {
          try {
            const content = fs.readFileSync(fullPath, 'utf8');
            if (content.includes('
              files.push(fullPath);
            }
          } catch (error) {
            // Skip files that can't be read
          }
        }
      }
    } catch (error) {
      // Skip directories that can't be read
    }
  }
  scanDirectory(dir);
  return files;
}
// Main execution
try {
  const workspaceDir = process.cwd();
  console.log(`Scanning directory: ${workspaceDir}`);
  const filesWithConflicts = findFilesWithConflicts(workspaceDir);
  console.log(`Found ${filesWithConflicts.length} files with merge conflicts`);
  let fixedCount = 0;
  let errorCount = 0;
  for (const filePath of filesWithConflicts) {
    try {
      if (fixMergeConflicts(filePath)) {
        fixedCount++;
      }
    } catch (error) {
      console.error(`Failed to fix ${filePath}:`, error.message);
      errorCount++;
    }
  }
  console.log(`\n📊 Summary:`);
  console.log(`✅ Successfully fixed: ${fixedCount} files`);
  console.log(`❌ Errors: ${errorCount} files`);
  console.log(`📁 Total files processed: ${filesWithConflicts.length}`);
  // Run a quick verification
  console.log('\n🔍 Verifying fixes...');
  const remainingConflicts = findFilesWithConflicts(workspaceDir);
  console.log(`Remaining files with conflicts: ${remainingConflicts.length}`);
  if (remainingConflicts.length === 0) {
    console.log('🎉 All merge conflicts have been resolved!');
  } else {
    console.log('⚠️  Some files still have conflicts:');
    remainingConflicts.forEach(file => console.log(`  - ${file}`));
  }
} catch (error) {
<<<<<<< HEAD
  console.error('💥 Fatal error:', error.message)
  process.exit(1)
}
}}}}
=======
  console.error('❌ Script failed:', error.message);
  process.exit(1);
}
>>>>>>> cursor/fix-errors-and-merge-to-main-cbe1
