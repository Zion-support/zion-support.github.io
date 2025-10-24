#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

console.log('🔧 Starting comprehensive merge conflict resolution...');

// Function to resolve merge conflicts in a file
function resolveConflicts(filePath) {
  try {
    if (!fs.existsSync(filePath)) {
      console.log(`⚠️  File does not exist: ${filePath}`);
      return false;
    }

    const content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflicts
    if (!content.includes('<<<<<<<') && !content.includes('') && !content.includes('>>>>>>>')) {
      return false; // No conflicts
    }

    console.log(`🔧 Resolving conflicts in: ${filePath}`);

    let resolvedContent = content;

    // Strategy 1: Keep the "ours" version (current branch) for most files
    if (filePath.includes('.tsx') || filePath.includes('.ts') || filePath.includes('.js')) {
      // For code files, prefer the current version but merge imports
      resolvedContent = resolveCodeConflicts(content);
    } else if (filePath.includes('.json')) {
      // For JSON files, merge objects
      resolvedContent = resolveJsonConflicts(content);
    } else {
      // For other files, keep current version
      resolvedContent = keepCurrentVersion(content);
    }

    fs.writeFileSync(filePath, resolvedContent);
    console.log(`✅ Resolved conflicts in: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`❌ Error resolving conflicts in ${filePath}:`, error.message);
    return false;
  }
}

// Resolve conflicts in code files
function resolveCodeConflicts(content) {
  let resolved = content;
  
  // Remove merge conflict markers and keep current version
  resolved = resolved.replace(/  
  // Clean up any remaining conflict markers
  resolved = resolved.replace(/  resolved = resolved.replace(/\n?/g, '');
  resolved = resolved.replace(/  
  return resolved;
}

// Resolve conflicts in JSON files
function resolveJsonConflicts(content) {
  let resolved = content;
  
  // For JSON files, try to merge objects
  const conflictRegex = /  let match;
  
  while ((match = conflictRegex.exec(resolved)) !== null) {
    const currentVersion = match[1].trim();
    const incomingVersion = match[2].trim();
    
    // Try to parse as JSON and merge
    try {
      const currentObj = JSON.parse(currentVersion);
      const incomingObj = JSON.parse(incomingVersion);
      const merged = { ...incomingObj, ...currentObj }; // Current takes precedence
      resolved = resolved.replace(match[0], JSON.stringify(merged, null, 2));
    } catch {
      // If not valid JSON, keep current version
      resolved = resolved.replace(match[0], currentVersion);
    }
  }
  
  // Clean up any remaining conflict markers
  resolved = resolved.replace(/  resolved = resolved.replace(/\n?/g, '');
  resolved = resolved.replace(/  
  return resolved;
}

// Keep current version (HEAD)
function keepCurrentVersion(content) {
  let resolved = content;
  
  // Remove merge conflict markers and keep current version
  resolved = resolved.replace(/  
  // Clean up any remaining conflict markers
  resolved = resolved.replace(/  resolved = resolved.replace(/\n?/g, '');
  resolved = resolved.replace(/  
  return resolved;
}

// Function to find all files with merge conflicts
function findConflictedFiles() {
  try {
    const result = execSync('git diff --name-only --diff-filter=U', { encoding: 'utf8' });
    return result.trim().split('\n').filter(file => file.length > 0);
  } catch (error) {
    console.log('No conflicted files found or git command failed');
    return [];
  }
}

// Function to find all files that might have conflicts
function findAllFiles() {
  const files = [];
  
  function walkDir(dir) {
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip certain directories
        if (!['node_modules', '.git', '.next', 'dist', 'build'].includes(item)) {
          walkDir(fullPath);
        }
      } else if (stat.isFile()) {
        // Check for common file extensions
        if (item.match(/\.(tsx?|jsx?|json|md)$/)) {
          files.push(fullPath);
        }
      }
    }
  }
  
  walkDir('.');
  return files;
}

// Main execution
async function main() {
  console.log('🔍 Finding files with merge conflicts...');
  
  // First, try to get conflicted files from git
  let conflictedFiles = findConflictedFiles();
  
  if (conflictedFiles.length === 0) {
    console.log('🔍 No git-conflicted files found, checking all files...');
    // If no git conflicts, check all files for conflict markers
    const allFiles = findAllFiles();
    conflictedFiles = allFiles.filter(file => {
      try {
        const content = fs.readFileSync(file, 'utf8');
        return content.includes('<<<<<<<') || content.includes('') || content.includes('>>>>>>>');
      } catch {
        return false;
      }
    });
  }
  
  console.log(`📁 Found ${conflictedFiles.length} files with conflicts`);
  
  if (conflictedFiles.length === 0) {
    console.log('✅ No merge conflicts found!');
    return;
  }
  
  let resolvedCount = 0;
  
  for (const file of conflictedFiles) {
    if (resolveConflicts(file)) {
      resolvedCount++;
    }
  }
  
  console.log(`\n🎉 Resolution complete!`);
  console.log(`✅ Resolved conflicts in ${resolvedCount} files`);
  console.log(`📁 Total files processed: ${conflictedFiles.length}`);
  
  // Add resolved files to git
  try {
    execSync('git add .', { stdio: 'inherit' });
    console.log('📝 Added resolved files to git staging area');
  } catch (error) {
    console.log('⚠️  Could not add files to git:', error.message);
  }
}

main().catch(console.error);