#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Function to find all files with merge conflicts
function findMergeConflictFiles(dir) {
  const files = [];
  
  function searchDirectory(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        searchDirectory(fullPath);
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.jsx') || item.endsWith('.js'))) {
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

// Function to fix merge conflicts by keeping HEAD version
function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove merge conflict markers and keep HEAD version
    content = content.replace(/\n([\s\S]*?)\n\n([\s\S]*?)\n    
    // Clean up any remaining conflict markers
    content = content.replace(/\n?/g, '');
    content = content.replace(/\n?/g, '');
    content = content.replace(/    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed merge conflicts in: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to fix common syntax errors
function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let fixed = false;
    
    // Fix common import issues
    if (content.includes('import {') && content.includes('} from') && !content.includes(';')) {
      content = content.replace(/import {([^}]+)} from ['"]([^'"]+)['"]/g, 'import { $1 } from "$2";');
      fixed = true;
    }
    
    // Fix missing semicolons after imports
    content = content.replace(/import ([^;]+)(?<!;)\n/g, '$1;\n');
    
    // Fix malformed JSX
    content = content.replace(/<([A-Z][a-zA-Z0-9]*)\s*\/>/g, '<$1 />');
    
    if (fixed) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed syntax errors in: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing syntax in ${filePath}:`, error.message);
    return false;
  }
}

// Main function
function main() {
  console.log('🔍 Finding files with merge conflicts...');
  const conflictFiles = findMergeConflictFiles('.');
  
  console.log(`Found ${conflictFiles.length} files with merge conflicts`);
  
  let fixedCount = 0;
  let errorCount = 0;
  
  for (const file of conflictFiles) {
    console.log(`\n📝 Processing: ${file}`);
    
    if (fixMergeConflicts(file)) {
      fixedCount++;
      
      // Also try to fix syntax errors
      fixSyntaxErrors(file);
    } else {
      errorCount++;
    }
  }
  
  console.log(`\n✅ Summary:`);
  console.log(`- Files processed: ${conflictFiles.length}`);
  console.log(`- Successfully fixed: ${fixedCount}`);
  console.log(`- Errors: ${errorCount}`);
  
  if (fixedCount > 0) {
    console.log('\n🎉 Merge conflicts fixed! You can now commit the changes.');
  }
}

// Run the script
main();