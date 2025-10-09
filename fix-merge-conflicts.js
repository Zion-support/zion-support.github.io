#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
<<<<<<< HEAD
=======
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
>>>>>>> cursor/fix-errors-and-merge-to-main-4c2f

// Function to resolve merge conflicts by keeping HEAD version
function resolveMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
<<<<<<< HEAD
    // Check if file has merge conflict markers
    if (!content.includes('<<<<<<< HEAD') && !content.includes('=======') && !content.includes('>>>>>>>')) {
      return false; // No conflicts to fix
    }
    
    console.log(`Fixing merge conflicts in: ${filePath}`);
    
    // Split content by merge conflict markers
    const lines = content.split('\n');
    const fixedLines = [];
    let inConflict = false;
    let keepHead = true;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.trim() === '<<<<<<< HEAD') {
        inConflict = true;
        keepHead = true;
        continue;
      }
      
      if (line.trim() === '=======') {
        keepHead = false;
        continue;
      }
      
      if (line.trim().startsWith('>>>>>>>')) {
        inConflict = false;
        keepHead = true;
        continue;
      }
      
      if (inConflict) {
        if (keepHead) {
          fixedLines.push(line);
        }
        // Skip lines from the other branch
      } else {
        fixedLines.push(line);
      }
    }
    
    // Write the fixed content back
    const fixedContent = fixedLines.join('\n');
    fs.writeFileSync(filePath, fixedContent, 'utf8');
    
    return true; // Conflicts were fixed
  } catch (error) {
    console.error(`Error fixing conflicts in ${filePath}:`, error.message);
=======
    // Check if file has merge conflicts
    if (!content.includes('<<<<<<< HEAD')) {
      return false; // No conflicts in this file
    }
    
    console.log(`Resolving conflicts in: ${filePath}`);
    
    // Split by merge conflict markers and keep HEAD version
    const lines = content.split('\n');
    const resolvedLines = [];
    let inConflict = false;
    let keepLines = false;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.trim() === '<<<<<<< HEAD') {
        inConflict = true;
        keepLines = true;
        continue;
      } else if (line.trim() === '=======') {
        keepLines = false;
        continue;
      } else if (line.trim() === '>>>>>>>') {
        inConflict = false;
        keepLines = false;
        continue;
      }
      
      if (!inConflict || keepLines) {
        resolvedLines.push(line);
      }
    }
    
    const resolvedContent = resolvedLines.join('\n');
    fs.writeFileSync(filePath, resolvedContent, 'utf8');
    return true;
    
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
>>>>>>> cursor/fix-errors-and-merge-to-main-4c2f
    return false;
  }
}

<<<<<<< HEAD
// Function to find all TypeScript/JavaScript files with merge conflicts
=======
// Function to find all files with merge conflicts
>>>>>>> cursor/fix-errors-and-merge-to-main-4c2f
function findFilesWithConflicts(dir) {
  const files = [];
  
  function searchDirectory(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
<<<<<<< HEAD
        scanDirectory(fullPath);
      } else if (stat.isFile() && (item.endsWith('.ts') || item.endsWith('.tsx') || item.endsWith('.js') || item.endsWith('.jsx'))) {
        try {
          const content = fs.readFileSync(fullPath, 'utf8');
          if (content.includes('<<<<<<< HEAD') || content.includes('=======') || content.includes('>>>>>>>')) {
=======
        searchDirectory(fullPath);
      } else if (stat.isFile() && /\.(tsx?|jsx?)$/.test(item)) {
        try {
          const content = fs.readFileSync(fullPath, 'utf8');
          if (content.includes('<<<<<<< HEAD')) {
>>>>>>> cursor/fix-errors-and-merge-to-main-4c2f
            files.push(fullPath);
          }
        } catch (error) {
          // Skip files that can't be read
        }
      }
    }
  }
  
  searchDirectory(dir);
  return files;
}

// Main execution
<<<<<<< HEAD
console.log('🔍 Scanning for files with merge conflicts...');
const conflictedFiles = findFilesWithConflicts('./src');

console.log(`Found ${conflictedFiles.length} files with merge conflicts`);

let fixedCount = 0;
for (const file of conflictedFiles) {
  if (fixMergeConflicts(file)) {
    fixedCount++;
  }
}

console.log(`✅ Fixed merge conflicts in ${fixedCount} files`);

// Run linting to check if there are any remaining issues
console.log('🔍 Running linting to check for remaining issues...');
try {
  execSync('pnpm run lint', { stdio: 'inherit' });
  console.log('✅ Linting passed!');
} catch (error) {
  console.log('⚠️  Linting still has issues, but merge conflicts should be resolved');
}

// Run build to check if it works
console.log('🔨 Testing build...');
try {
  execSync('pnpm run build', { stdio: 'inherit' });
  console.log('✅ Build successful!');
} catch (error) {
  console.log('⚠️  Build still has issues, but merge conflicts should be resolved');
}
=======
console.log('Starting merge conflict resolution...');

const srcDir = path.join(__dirname, 'src');
const conflictedFiles = findFilesWithConflicts(srcDir);

console.log(`Found ${conflictedFiles.length} files with merge conflicts`);

let resolvedCount = 0;
for (const file of conflictedFiles) {
  if (resolveMergeConflicts(file)) {
    resolvedCount++;
  }
}

console.log(`Resolved conflicts in ${resolvedCount} files`);

// Verify no more conflicts
try {
  const result = execSync('grep -r "<<<<<<< HEAD" src/ --include="*.tsx" --include="*.ts" --include="*.js" --include="*.jsx" | wc -l', { encoding: 'utf8' });
  const remainingConflicts = parseInt(result.trim());
  console.log(`Remaining conflicts: ${remainingConflicts}`);
  
  if (remainingConflicts === 0) {
    console.log('✅ All merge conflicts resolved successfully!');
  } else {
    console.log('⚠️  Some conflicts may still remain');
  }
} catch (error) {
  console.log('Could not verify remaining conflicts');
}

console.log('Merge conflict resolution complete!');
>>>>>>> cursor/fix-errors-and-merge-to-main-4c2f
