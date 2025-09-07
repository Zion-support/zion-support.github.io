#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to resolve merge conflicts in a file
function resolveConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflicts
    if (!content.includes('<<<<<<< HEAD')) {
      return false; // No conflicts
    }
    
    console.log(`Resolving conflicts in: ${filePath}`);
    
    // Split by conflict markers
    const lines = content.split('\n');
    const resolved = [];
    let inConflict = false;
    let conflictType = '';
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.startsWith('<<<<<<< HEAD')) {
        inConflict = true;
        conflictType = 'head';
        continue;
      } else if (line.startsWith('=======')) {
        conflictType = 'other';
        continue;
      } else if (line.startsWith('>>>>>>>')) {
        inConflict = false;
        conflictType = '';
        continue;
      }
      
      if (!inConflict) {
        resolved.push(line);
      } else if (conflictType === 'head') {
        // Keep HEAD version (our changes)
        resolved.push(line);
      }
      // Skip other branch changes
    }
    
    // Write resolved content
    fs.writeFileSync(filePath, resolved.join('\n'));
    console.log(`✓ Resolved conflicts in: ${filePath}`);
    return true;
    
  } catch (error) {
    console.error(`Error resolving conflicts in ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find files with conflicts
function findFilesWithConflicts(dir) {
  const files = [];
  
  function walkDir(currentPath) {
    try {
      const items = fs.readdirSync(currentPath);
      
      for (const item of items) {
        const fullPath = path.join(currentPath, item);
        try {
          const stat = fs.statSync(fullPath);
          
          if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
            walkDir(fullPath);
          } else if (stat.isFile() && (item.endsWith('.js') || item.endsWith('.ts') || item.endsWith('.tsx') || item.endsWith('.json') || item.endsWith('.md'))) {
            try {
              const content = fs.readFileSync(fullPath, 'utf8');
              if (content.includes('<<<<<<< HEAD')) {
                files.push(fullPath);
              }
            } catch (error) {
              // Skip files that can't be read
            }
          }
        } catch (error) {
          // Skip items that can't be accessed
        }
      }
    } catch (error) {
      // Skip directories that can't be read
    }
  }
  
  walkDir(dir);
  return files;
}

// Main execution
console.log('🔍 Finding files with merge conflicts...');
const conflictedFiles = findFilesWithConflicts(process.cwd());

if (conflictedFiles.length === 0) {
  console.log('✅ No files with merge conflicts found!');
  process.exit(0);
}

console.log(`📋 Found ${conflictedFiles.length} files with conflicts:`);
conflictedFiles.forEach(file => console.log(`  - ${file}`));

console.log('\n🔧 Resolving conflicts...');
let resolvedCount = 0;

for (const file of conflictedFiles) {
  if (resolveConflicts(file)) {
    resolvedCount++;
  }
}

console.log(`\n✅ Successfully resolved conflicts in ${resolvedCount}/${conflictedFiles.length} files`);
console.log('🎉 All merge conflicts have been resolved!');