#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔧 Starting comprehensive merge conflict resolution...');

// Function to find all files with merge conflicts
function findConflictFiles(dir) {
  const conflictFiles = [];
  
  function searchDirectory(currentDir) {
    const files = fs.readdirSync(currentDir);
    
    for (const file of files) {
      const filePath = path.join(currentDir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules' && file !== 'dist') {
        searchDirectory(filePath);
      } else if (stat.isFile() && (file.endsWith('.ts') || file.endsWith('.tsx') || file.endsWith('.js') || file.endsWith('.jsx'))) {
        try {
          const content = fs.readFileSync(filePath, 'utf8');
          if (content.includes('            conflictFiles.push(filePath);
          }
        } catch (error) {
          // Skip files that can't be read
        }
      }
    }
  }
  
  searchDirectory(dir);
  return conflictFiles;
}

// Function to resolve merge conflicts in a file
function resolveConflicts(filePath) {
  console.log(`🔍 Resolving conflicts in: ${filePath}`);
  
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let resolved = false;
    
    // Pattern 1: Simple syntax differences (commas, semicolons)
    if (content.includes('      // Split into sections
      const sections = content.split(/      
      if (sections.length === 4) {
        const headSection = sections[1].trim();
        const remoteSection = sections[2].trim();
        const tailSection = sections[3].trim();
        
        // Choose the cleaner version (usually the one with proper syntax)
        let chosenSection = headSection;
        
        // Prefer the version with proper commas and semicolons
        if (remoteSection.includes(',') && !headSection.includes(',')) {
          chosenSection = remoteSection;
        } else if (headSection.includes(',') && !remoteSection.includes(',')) {
          chosenSection = headSection;
        } else {
          // If both are similar, choose the longer one (more complete)
          chosenSection = headSection.length > remoteSection.length ? headSection : remoteSection;
        }
        
        // Reconstruct the file
        content = sections[0] + chosenSection + tailSection;
        resolved = true;
      }
    }
    
    if (resolved) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Resolved conflicts in: ${filePath}`);
      return true;
    } else {
      console.log(`⚠️  Could not auto-resolve: ${filePath}`);
      return false;
    }
  } catch (error) {
    console.log(`❌ Error resolving ${filePath}:`, error.message);
    return false;
  }
}

// Function to clean up backup files
function cleanupBackupFiles(dir) {
  console.log('🧹 Cleaning up backup files...');
  
  function searchDirectory(currentDir) {
    const files = fs.readdirSync(currentDir);
    
    for (const file of files) {
      const filePath = path.join(currentDir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules' && file !== 'dist') {
        searchDirectory(filePath);
      } else if (stat.isFile() && file.includes('.backup.')) {
        try {
          fs.unlinkSync(filePath);
          console.log(`🗑️  Deleted backup: ${filePath}`);
        } catch (error) {
          console.log(`⚠️  Could not delete backup: ${filePath}`);
        }
      }
    }
  }
  
  searchDirectory(dir);
}

// Main execution
async function main() {
  try {
    const workspaceDir = '/workspace';
    
    console.log('📋 Finding files with merge conflicts...');
    const conflictFiles = findConflictFiles(workspaceDir);
    
    if (conflictFiles.length === 0) {
      console.log('✅ No merge conflicts found!');
      return;
    }
    
    console.log(`🔍 Found ${conflictFiles.length} files with merge conflicts:`);
    conflictFiles.forEach(file => console.log(`  - ${file}`));
    
    console.log('\n🔧 Resolving conflicts...');
    let resolvedCount = 0;
    
    for (const file of conflictFiles) {
      if (resolveConflicts(file)) {
        resolvedCount++;
      }
    }
    
    console.log(`\n📊 Resolution Summary:`);
    console.log(`  - Total files with conflicts: ${conflictFiles.length}`);
    console.log(`  - Successfully resolved: ${resolvedCount}`);
    console.log(`  - Failed to resolve: ${conflictFiles.length - resolvedCount}`);
    
    // Clean up backup files
    cleanupBackupFiles(workspaceDir);
    
    console.log('\n✅ Merge conflict resolution completed!');
    
  } catch (error) {
    console.error('❌ Error during conflict resolution:', error.message);
    process.exit(1);
  }
}

main().catch(console.error);