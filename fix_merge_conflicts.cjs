#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Function to find all files with merge conflicts
function findFilesWithConflicts(dir) {
  const files = [];
  
  function searchDirectory(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        searchDirectory(fullPath);
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.js') || item.endsWith('.jsx'))) {
        try {
          const content = fs.readFileSync(fullPath, 'utf8');
          if (content.includes('') || content.includes('') || content.includes('>>>>>>>')) {
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

// Function to resolve merge conflicts by keeping the newer version (after )
function resolveMergeConflict(content) {
  const lines = content.split('\n');
  const resolvedLines = [];
  let inConflict = false;
  let keepLines = false;
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    if (line.includes('')) {
      inConflict = true;
      keepLines = false;
      continue;
    }
    
    if (line.includes('')) {
      keepLines = true;
      continue;
    }
    
    if (line.includes('>>>>>>>')) {
      inConflict = false;
      keepLines = false;
      continue;
    }
    
    if (inConflict) {
      if (keepLines) {
        resolvedLines.push(line);
      }
    } else {
      resolvedLines.push(line);
    }
  }
  
  return resolvedLines.join('\n');
}

// Function to clean up unused imports
function cleanImports(content) {
  // Remove duplicate imports and clean up unused ones
  const lines = content.split('\n');
  const importLines = [];
  const otherLines = [];
  const usedImports = new Set();
  
  // First pass: collect all import lines
  for (const line of lines) {
    if (line.trim().startsWith('import ')) {
      importLines.push(line);
    } else {
      otherLines.push(line);
    }
  }
  
  // Second pass: find used imports by scanning the rest of the content
  const contentWithoutImports = otherLines.join('\n');
  
  for (const importLine of importLines) {
    // Extract imported names from the import line
    const match = importLine.match(/import\s+.*?from\s+['"](.*?)['"]/);
    if (match) {
      const moduleName = match[1];
      
      // Check if this is a relative import (starts with . or /)
      if (moduleName.startsWith('.') || moduleName.startsWith('/')) {
        // For relative imports, check if the module is used
        if (contentWithoutImports.includes(moduleName)) {
          usedImports.add(importLine);
        }
      } else {
        // For external imports, extract the imported names
        const importMatch = importLine.match(/import\s+\{([^}]+)\}/);
        if (importMatch) {
          const importedNames = importMatch[1].split(',').map(name => name.trim());
          const hasUsedImport = importedNames.some(name => {
            const cleanName = name.replace(/\s+as\s+\w+/, '').trim();
            return contentWithoutImports.includes(cleanName);
          });
          
          if (hasUsedImport) {
            usedImports.add(importLine);
          }
        } else {
          // Default import
          const defaultMatch = importLine.match(/import\s+(\w+)/);
          if (defaultMatch && contentWithoutImports.includes(defaultMatch[1])) {
            usedImports.add(importLine);
          }
        }
      }
    }
  }
  
  // Combine cleaned imports with other lines
  const cleanedImports = Array.from(usedImports);
  return [...cleanedImports, ...otherLines].join('\n');
}

// Main function
function main() {
  console.log('🔍 Searching for files with merge conflicts...');
  
  const conflictedFiles = findFilesWithConflicts(process.cwd());
  
  if (conflictedFiles.length === 0) {
    console.log('✅ No merge conflicts found!');
    return;
  }
  
  console.log(`📁 Found ${conflictedFiles.length} files with merge conflicts:`);
  conflictedFiles.forEach(file => console.log(`  - ${file}`));
  
  console.log('\n🔧 Resolving merge conflicts...');
  
  let resolvedCount = 0;
  let errorCount = 0;
  
  for (const filePath of conflictedFiles) {
    try {
      console.log(`Processing: ${filePath}`);
      
      const content = fs.readFileSync(filePath, 'utf8');
      const resolvedContent = resolveMergeConflict(content);
      const cleanedContent = cleanImports(resolvedContent);
      
      fs.writeFileSync(filePath, cleanedContent, 'utf8');
      resolvedCount++;
      
      console.log(`  ✅ Resolved: ${filePath}`);
    } catch (error) {
      console.error(`  ❌ Error processing ${filePath}:`, error.message);
      errorCount++;
    }
  }
  
  console.log(`\n📊 Summary:`);
  console.log(`  ✅ Successfully resolved: ${resolvedCount} files`);
  console.log(`  ❌ Errors: ${errorCount} files`);
  
  if (resolvedCount > 0) {
    console.log('\n🎉 Merge conflicts resolved! You can now run your build and lint commands.');
  }
}

if (require.main === module) {
  main();
}

module.exports = { findFilesWithConflicts, resolveMergeConflict, cleanImports };