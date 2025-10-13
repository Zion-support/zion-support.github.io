#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
console.log('🔧 Starting comprehensive merge conflict resolution...');

// Function to fix merge conflicts in a file
function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Skip if no merge conflicts
    if (!content.includes(')
    content = content.replace(/<<<<<<< HEAD[\s\S]*?=======([\s\S]*?)
    
    // Remove any remaining conflict markers
    content = content.replace(/[\s\S]*?
    
    // Clean up extra newlines
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    fs.writeFileSync(filePath, content);
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find all files with merge conflicts
function findFilesWithConflicts(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        traverse(fullPath);
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.js') || item.endsWith('.jsx'))) {
        try {
          const content = fs.readFileSync(fullPath, 'utf8');
          if (content.includes('<<<<<<< HEAD')) {
            files.push(fullPath);
          }
        } catch (error) {
          // Skip files that can't be read
        }
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Find all files with conflicts
const conflictedFiles = findFilesWithConflicts('./');
console.log(`Found ${conflictedFiles.length} files with merge conflicts`);

// Fix each file
let fixedCount = 0;
for (const file of conflictedFiles) {
  if (fixMergeConflicts(file)) {
    fixedCount++;
  }
}

console.log(`✅ Fixed merge conflicts in ${fixedCount} files`);

// Additional cleanup for common issues
console.log('🧹 Performing additional cleanup...');

// Fix common import issues
const commonFixes = [
  {
    pattern: /import\s+{\s*}\s+from\s+['"][^'"]+['"];?\s*\n/g,
    replacement: ''
  },
  {
    pattern: /import\s+[^;]+;\s*\n\s*import\s+[^;]+;\s*\n\s*import\s+[^;]+;\s*\n/g,
    replacement: (match) => {
      const imports = match.split('\n').filter(line => line.trim());
      const uniqueImports = [...new Set(imports)];
      return uniqueImports.join('\n') + '\n';
    }
  },
  {
    pattern: /\n\s*\n\s*\n+/g,
    replacement: '\n\n'
  }
];

// Apply common fixes to all TypeScript/JavaScript files
function applyCommonFixes(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    for (const fix of commonFixes) {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content);
      return true;
    }
  } catch (error) {
    // Skip files that can't be processed
  }
  return false;
}

// Apply fixes to all relevant files
const allFiles = findFilesWithConflicts('./');
let cleanedCount = 0;

for (const file of allFiles) {
  if (applyCommonFixes(file)) {
    cleanedCount++;
  }
}

console.log(`🧹 Applied additional cleanup to ${cleanedCount} files`);

// Verify no more conflicts
const remainingConflicts = findFilesWithConflicts('./');
if (remainingConflicts.length === 0) {
  console.log('✅ All merge conflicts resolved successfully!');
} else {
  console.log(`⚠️  ${remainingConflicts.length} files still have conflicts:`);
  remainingConflicts.forEach(file => console.log(`  - ${file}`));
}

console.log('🎉 Merge conflict resolution complete!');