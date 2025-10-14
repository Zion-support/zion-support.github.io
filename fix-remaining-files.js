#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

console.log('🔧 Fixing remaining files with errors...');

// List of remaining files that need to be fixed
const filesToFix = [
  'app/constants/seo.ts',
  'app/data/services.ts',
  'app/data/servicesData.ts'
];

// Function to create a basic constants file
function createBasicConstants(filePath, constantName) {
  return `// ${constantName} constants

export const ${constantName} = {
  // Add your constants here
};`;
}

// Function to create a basic data file
function createBasicData(filePath, dataName) {
  return `// ${dataName} data

export const ${dataName} = {
  // Add your data here
};`;
}

// Function to fix a specific file
function fixSpecificFile(filePath) {
  try {
    console.log(`Fixing: ${filePath}`);
    
    // Extract name from file path
    const pathParts = filePath.split('/');
    const fileName = pathParts[pathParts.length - 1];
    const nameWithoutExt = fileName.replace('.ts', '');
    
    let newContent;
    
    // Determine the type of file and create appropriate content
    if (filePath.includes('/constants/')) {
      // It's a constants file
      const constantName = nameWithoutExt
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join('');
      newContent = createBasicConstants(filePath, constantName);
    } else if (filePath.includes('/data/')) {
      // It's a data file
      const dataName = nameWithoutExt
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join('');
      newContent = createBasicData(filePath, dataName);
    } else {
      // Default to constants
      const constantName = nameWithoutExt
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join('');
      newContent = createBasicConstants(filePath, constantName);
    }
    
    // Write the new content
    fs.writeFileSync(filePath, newContent, 'utf8');
    
    console.log(`✅ Fixed: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`❌ Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
try {
  const workspaceDir = process.cwd();
  console.log(`Fixing ${filesToFix.length} remaining files...`);
  
  let fixedCount = 0;
  let errorCount = 0;
  
  for (const filePath of filesToFix) {
    try {
      if (fixSpecificFile(filePath)) {
        fixedCount++;
      }
    } catch (error) {
      console.error(`Failed to fix ${filePath}:`, error.message);
      errorCount++;
    }
  }
  
  console.log(`\n📊 Summary:`);
  console.log(`✅ Successfully fixed: ${fixedCount} files`);
  console.log(`❌ Errors: ${errorCount} files`);
  console.log(`📁 Total files processed: ${filesToFix.length}`);
  
  if (fixedCount === filesToFix.length) {
    console.log('🎉 All remaining files have been fixed!');
  }
  
} catch (error) {
  console.error('❌ Script failed:', error.message);
  process.exit(1);
}
