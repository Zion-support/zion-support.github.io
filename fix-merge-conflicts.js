#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to fix merge conflicts in a file
function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Remove merge conflict markers and keep the HEAD version (first occurrence)
    content = content.replace(/<<<<<<< HEAD\n([\s\S]*?)\n=======\n([\s\S]*?)\n>>>>>>> [^\n]+/g, '$1');
    
    // Remove any remaining conflict markers
    content = content.replace(/<<<<<<< HEAD\n?/g, '');
    content = content.replace(/=======\n?/g, '');
    content = content.replace(/>>>>>>> [^\n]+\n?/g, '');
    
    // Clean up any duplicate lines that might have been created
    const lines = content.split('\n');
    const cleanedLines = [];
    let i = 0;
    
    while (i < lines.length) {
      const line = lines[i];
      
      // Skip empty lines that follow other empty lines
      if (line.trim() === '' && cleanedLines.length > 0 && cleanedLines[cleanedLines.length - 1].trim() === '') {
        i++;
        continue;
      }
      
      cleanedLines.push(line);
      i++;
    }
    
    content = cleanedLines.join('\n');
    
    // Only write if content changed
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed merge conflicts in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all files with merge conflicts
function findFilesWithConflicts(dir) {
  const files = [];
  
  function walkDir(currentPath) {
    try {
      const items = fs.readdirSync(currentPath);
      
      for (const item of items) {
        const fullPath = path.join(currentPath, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          // Skip node_modules and other common directories
          if (!['node_modules', '.git', 'dist', 'build', '.next'].includes(item)) {
            walkDir(fullPath);
          }
        } else if (stat.isFile()) {
          // Check for TypeScript, JavaScript, and JSX files
          if (/\.(ts|tsx|js|jsx)$/.test(item)) {
            try {
              const content = fs.readFileSync(fullPath, 'utf8');
              if (content.includes('<<<<<<< HEAD') || content.includes('=======') || content.includes('>>>>>>> ')) {
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
  
  walkDir(dir);
  return files;
}

// Main execution
console.log('🔍 Scanning for files with merge conflicts...');
const srcDir = path.join(__dirname, 'src');
const filesWithConflicts = findFilesWithConflicts(srcDir);

console.log(`Found ${filesWithConflicts.length} files with merge conflicts:`);
filesWithConflicts.forEach(file => console.log(`  - ${file}`));

if (filesWithConflicts.length === 0) {
  console.log('✅ No merge conflicts found!');
  process.exit(0);
}

console.log('\n🔧 Fixing merge conflicts...');
let fixedCount = 0;

for (const file of filesWithConflicts) {
  if (fixMergeConflicts(file)) {
    fixedCount++;
  }
}

console.log(`\n✅ Fixed merge conflicts in ${fixedCount} files`);

// Run linting to check for any remaining issues
console.log('\n🔍 Running linting to check for remaining issues...');
try {
  execSync('pnpm run lint', { stdio: 'inherit' });
  console.log('✅ Linting passed!');
} catch (error) {
  console.log('⚠️  Linting found some issues, but merge conflicts should be resolved');
}

console.log('\n🎉 Merge conflict resolution complete!');