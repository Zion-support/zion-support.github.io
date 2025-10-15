#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

console.log('🚀 Starting comprehensive conflict resolution...');

// Function to execute git commands safely
function execGit(command, options = {}) {
  try {
    return execSync(command, { 
      encoding: 'utf8', 
      stdio: 'pipe',
      ...options 
    });
  } catch (error) {
    console.log(`⚠️  Command failed: ${command}`);
    console.log(`Error: ${error.message}`);
    return null;
  }
}

// Function to resolve conflicts in a file
function resolveFileConflicts(filePath) {
  if (!fs.existsSync(filePath)) {
    console.log(`❌ File not found: ${filePath}`);
    return false;
  }

  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflicts
    if (!content.includes('<<<<<<< HEAD') && !content.includes('=======') && !content.includes('>>>>>>>')) {
      return true; // No conflicts
    }

    console.log(`🔧 Resolving conflicts in: ${filePath}`);

    // Strategy 1: Keep main branch version (HEAD) for most files
    if (filePath.includes('app/') && filePath.endsWith('.tsx')) {
      // For app files, prefer main branch version
      content = content.replace(/<<<<<<< HEAD\n([\s\S]*?)\n=======\n([\s\S]*?)\n>>>>>>> [^\n]+/g, '$1');
    } else if (filePath.includes('__tests__/') || filePath.endsWith('.test.tsx')) {
      // For test files, prefer main branch version
      content = content.replace(/<<<<<<< HEAD\n([\s\S]*?)\n=======\n([\s\S]*?)\n>>>>>>> [^\n]+/g, '$1');
    } else if (filePath.includes('api/') && filePath.endsWith('.js')) {
      // For API files, prefer main branch version
      content = content.replace(/<<<<<<< HEAD\n([\s\S]*?)\n=======\n([\s\S]*?)\n>>>>>>> [^\n]+/g, '$1');
    } else {
      // Default: keep main branch version
      content = content.replace(/<<<<<<< HEAD\n([\s\S]*?)\n=======\n([\s\S]*?)\n>>>>>>> [^\n]+/g, '$1');
    }

    // Clean up any remaining conflict markers
    content = content.replace(/<<<<<<< HEAD\n/g, '');
    content = content.replace(/=======\n/g, '');
    content = content.replace(/>>>>>>> [^\n]+\n/g, '');

    // Write the resolved content
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✅ Resolved conflicts in: ${filePath}`);
    return true;
  } catch (error) {
    console.log(`❌ Error resolving ${filePath}: ${error.message}`);
    return false;
  }
}

// Function to handle deleted files conflicts
function handleDeletedFiles() {
  console.log('🗑️  Handling deleted files conflicts...');
  
  // List of files that should be deleted (from main branch)
  const filesToDelete = [
    '__tests__/advanced-components.test.tsx',
    '__tests__/app.test.tsx', 
    '__tests__/components.test.tsx',
    '__tests__/error-boundary.test.tsx',
    '__tests__/image-optimizer.test.tsx',
    '__tests__/loading-spinner.test.tsx',
    'add-missing-routes-v2.js',
    'add-missing-routes.js',
    'api/shipping-rates.tsx',
    'app-disabled/careers/page.tsx',
    'app-broken/__tests__/advanced-components.test.tsx'
  ];

  filesToDelete.forEach(file => {
    if (fs.existsSync(file)) {
      try {
        fs.unlinkSync(file);
        console.log(`🗑️  Deleted: ${file}`);
      } catch (error) {
        console.log(`❌ Error deleting ${file}: ${error.message}`);
      }
    }
  });
}

// Main conflict resolution function
async function resolveAllConflicts() {
  console.log('📋 Starting comprehensive conflict resolution...');

  // Step 1: Get list of conflicted files
  const statusOutput = execGit('git status --porcelain');
  if (!statusOutput) {
    console.log('❌ Failed to get git status');
    return false;
  }

  const conflictedFiles = statusOutput
    .split('\n')
    .filter(line => line.includes('UU') || line.includes('AA') || line.includes('DD'))
    .map(line => line.substring(3).trim())
    .filter(file => file);

  console.log(`📊 Found ${conflictedFiles.length} conflicted files`);

  // Step 2: Handle deleted files
  handleDeletedFiles();

  // Step 3: Resolve conflicts in each file
  let resolvedCount = 0;
  for (const file of conflictedFiles) {
    if (resolveFileConflicts(file)) {
      resolvedCount++;
    }
  }

  console.log(`✅ Resolved conflicts in ${resolvedCount}/${conflictedFiles.length} files`);

  // Step 4: Add resolved files
  execGit('git add .');

  // Step 5: Check if merge can be completed
  const statusAfter = execGit('git status --porcelain');
  const remainingConflicts = statusAfter ? statusAfter.split('\n').filter(line => line.includes('UU') || line.includes('AA')).length : 0;

  if (remainingConflicts === 0) {
    console.log('🎉 All conflicts resolved! Ready to commit.');
    return true;
  } else {
    console.log(`⚠️  ${remainingConflicts} conflicts still remain`);
    return false;
  }
}

// Execute the conflict resolution
resolveAllConflicts()
  .then(success => {
    if (success) {
      console.log('✅ Conflict resolution completed successfully!');
      process.exit(0);
    } else {
      console.log('❌ Conflict resolution failed');
      process.exit(1);
    }
  })
  .catch(error => {
    console.log(`❌ Error during conflict resolution: ${error.message}`);
    process.exit(1);
  });