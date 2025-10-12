#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Function to resolve merge conflicts in a file
function resolveMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Check if file has merge conflict markers
    if (content.includes('<<<<<<< HEAD') || content.includes('=======') || content.includes('>>>>>>>')) {
      console.log(`Fixing merge conflicts in: ${filePath}`);
      
      // Split content by merge conflict markers
      const lines = content.split('\n');
      const resolvedLines = [];
      let inConflict = false;
      let conflictType = null;
      let headContent = [];
      let branchContent = [];
      
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        
        if (line.trim() === '<<<<<<< HEAD') {
          inConflict = true;
          conflictType = 'head';
          continue;
        } else if (line.trim() === '=======') {
          conflictType = 'branch';
          continue;
        } else if (line.trim().startsWith('>>>>>>>')) {
          // Resolve conflict by choosing the branch content (usually more recent)
          if (branchContent.length > 0) {
            resolvedLines.push(...branchContent);
          } else if (headContent.length > 0) {
            resolvedLines.push(...headContent);
          }
          
          inConflict = false;
          conflictType = null;
          headContent = [];
          branchContent = [];
          modified = true;
          continue;
        }
        
        if (inConflict) {
          if (conflictType === 'head') {
            headContent.push(line);
          } else if (conflictType === 'branch') {
            branchContent.push(line);
          }
        } else {
          resolvedLines.push(line);
        }
      }
      
      if (modified) {
        const resolvedContent = resolvedLines.join('\n');
        fs.writeFileSync(filePath, resolvedContent, 'utf8');
        console.log(`✓ Fixed merge conflicts in: ${filePath}`);
        return true;
      }
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all TypeScript/JavaScript files
function findSourceFiles(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip node_modules and other irrelevant directories
        if (!['node_modules', '.git', 'dist', 'build', '.next'].includes(item)) {
          traverse(fullPath);
        }
      } else if (stat.isFile()) {
        const ext = path.extname(item);
        if (['.ts', '.tsx', '.js', '.jsx'].includes(ext)) {
          files.push(fullPath);
        }
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main function
function main() {
  console.log('🔧 Starting merge conflict resolution...');
  
  const sourceFiles = findSourceFiles(process.cwd());
  let fixedCount = 0;
  
  console.log(`Found ${sourceFiles.length} source files to check`);
  
  for (const file of sourceFiles) {
    if (resolveMergeConflicts(file)) {
      fixedCount++;
    }
  }
  
  console.log(`\n✅ Fixed merge conflicts in ${fixedCount} files`);
  
  // Try to run linting to check for remaining issues
  try {
    console.log('\n🔍 Running linting to check for remaining issues...');
    execSync('npm run lint', { stdio: 'inherit' });
    console.log('✅ Linting passed!');
  } catch (error) {
    console.log('⚠️  Linting found issues, but merge conflicts should be resolved');
  }
  
  // Try to run type checking
  try {
    console.log('\n🔍 Running type checking...');
    execSync('npm run type-check', { stdio: 'inherit' });
    console.log('✅ Type checking passed!');
  } catch (error) {
    console.log('⚠️  Type checking found issues, but merge conflicts should be resolved');
  }
  
  console.log('\n🎉 Merge conflict resolution complete!');
}

// Run the main function
main();

export { resolveMergeConflicts, findSourceFiles };