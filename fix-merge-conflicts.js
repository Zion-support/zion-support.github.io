#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

console.log('🔧 Starting merge conflict resolution...');

// Function to resolve merge conflicts in a file
function resolveMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Check if file has merge conflicts
    if (!content.includes('
    
    // Also handle cases where there might be multiple conflicts in one file
    content = content.replace(/
    
    // Clean up any remaining conflict markers
    content = content.replace(/
    content = content.replace(/^
    
    // Clean up extra whitespace
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Resolved conflicts in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
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
        try {
          const stat = fs.statSync(fullPath);
          
          if (stat.isDirectory()) {
            // Skip node_modules, .git, and other common directories
            if (!['node_modules', '.git', 'dist', 'build', '.next', 'out'].includes(item)) {
              scanDirectory(fullPath);
            }
          } else if (stat.isFile()) {
            // Check for TypeScript, JavaScript, and JSX files
            if (/\.(ts|tsx|js|jsx)$/.test(item)) {
              try {
                const content = fs.readFileSync(fullPath, 'utf8');
                if (content.includes('<<<<<<< HEAD') || content.includes('=======') || content.includes('>>>>>>>')) {
                  files.push(fullPath);
                }
              } catch (error) {
                // Skip files that can't be read
              }
            }
          }
        } catch (error) {
          // Skip files/directories that can't be accessed
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
  console.log(`🔍 Scanning for merge conflicts in: ${workspaceDir}`);
  
  const conflictedFiles = findFilesWithConflicts(workspaceDir);
  
  if (conflictedFiles.length === 0) {
    console.log('✅ No merge conflicts found!');
    process.exit(0);
  }
  
  console.log(`📋 Found ${conflictedFiles.length} files with merge conflicts:`);
  conflictedFiles.forEach(file => console.log(`   - ${file}`));
  
  let resolvedCount = 0;
  
  for (const file of conflictedFiles) {
    if (resolveMergeConflicts(file)) {
      resolvedCount++;
    }
  }
  
  console.log(`\n🎉 Successfully resolved conflicts in ${resolvedCount} out of ${conflictedFiles.length} files`);
  
  if (resolvedCount > 0) {
    console.log('\n📝 Running linting to check for any issues...');
    try {
      execSync('pnpm run lint:fix', { stdio: 'inherit', cwd: workspaceDir });
      console.log('✅ Linting completed successfully');
    } catch (error) {
      console.log('⚠️  Linting found some issues, but continuing...');
    }
  }
  
} catch (error) {
  console.error('❌ Error during merge conflict resolution:', error.message);
  process.exit(1);
}