#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Function to resolve merge conflicts in a file
function resolveMergeConflicts(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Skip if no merge conflicts
    if (!content.includes('') && !content.includes('') && !content.includes('      return false;
    }
    
    console.log(`Fixing merge conflicts in: ${filePath}`);
    
    let resolved = content;
    
    // Strategy: Keep the HEAD version (before ) and remove conflict markers
    // This is generally safer as HEAD is usually the main branch
    resolved = resolved.replace(/\n?/g, '');
    resolved = resolved.replace(/\n?/g, '');
    resolved = resolved.replace(/    
    // Clean up any remaining conflict artifacts
    resolved = resolved.replace(/    resolved = resolved.replace(/\n?/g, '');
    resolved = resolved.replace(/    
    // Remove any duplicate empty lines that might have been created
    resolved = resolved.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    // Write the resolved content back
    fs.writeFileSync(filePath, resolved, 'utf8');
    
    return true;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all files with merge conflicts
function findFilesWithConflicts(dir) {
  const files = [];
  
  function scanDirectory(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip node_modules and other common directories
        if (!['node_modules', '.git', 'dist', 'build', '.next', 'out'].includes(item)) {
          scanDirectory(fullPath);
        }
      } else if (stat.isFile()) {
        // Check for common source file extensions
        if (/\.(ts|tsx|js|jsx|json|css|md)$/.test(item)) {
          try {
            const content = fs.readFileSync(fullPath, 'utf8');
            if (content.includes('') || content.includes('') || content.includes('              files.push(fullPath);
            }
          } catch (error) {
            // Skip files that can't be read
          }
        }
      }
    }
  }
  
  scanDirectory(dir);
  return files;
}

// Main execution
function main() {
  console.log('🔍 Scanning for files with merge conflicts...');
  
  const workspaceDir = process.cwd();
  const conflictedFiles = findFilesWithConflicts(workspaceDir);
  
  console.log(`Found ${conflictedFiles.length} files with merge conflicts`);
  
  if (conflictedFiles.length === 0) {
    console.log('✅ No merge conflicts found!');
    return;
  }
  
  let fixedCount = 0;
  let errorCount = 0;
  
  for (const filePath of conflictedFiles) {
    if (resolveMergeConflicts(filePath)) {
      fixedCount++;
    } else {
      errorCount++;
    }
  }
  
  console.log(`\n📊 Results:`);
  console.log(`✅ Fixed: ${fixedCount} files`);
  console.log(`❌ Errors: ${errorCount} files`);
  
  if (fixedCount > 0) {
    console.log('\n🎉 Merge conflicts resolved! Running validation...');
    
    try {
      // Run a quick syntax check
      console.log('Running TypeScript check...');
      execSync('pnpm run type-check', { stdio: 'pipe' });
      console.log('✅ TypeScript check passed');
    } catch (error) {
      console.log('⚠️  TypeScript check had issues, but continuing...');
    }
    
    try {
      // Run linting
      console.log('Running ESLint...');
      execSync('pnpm run lint', { stdio: 'pipe' });
      console.log('✅ ESLint check passed');
    } catch (error) {
      console.log('⚠️  ESLint check had issues, but continuing...');
    }
  }
}

// Run the script
main();