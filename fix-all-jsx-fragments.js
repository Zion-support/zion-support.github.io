#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Find all TSX files
function findAllTsxFiles() {
  try {
    const result = execSync('find ./app -name "*.tsx" | head -50', { 
      encoding: 'utf8',
      cwd: '/workspace'
    });
    return result.trim().split('\n').filter(file => file.length > 0);
  } catch (error) {
    console.log('Error finding files:', error.message);
    return [];
  }
}

// Fix JSX fragments in a file
function fixJSXInFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix JSX fragments by replacing with div
    if (content.includes('<>') && content.includes('</>')) {
      content = content.replace(/<>/g, '<div>');
      content = content.replace(/<\/>/g, '</div>');
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed JSX fragments in: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing file ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
function main() {
  console.log('Finding TSX files...');
  const files = findAllTsxFiles();
  
  if (files.length === 0) {
    console.log('No files found.');
    return;
  }

  console.log(`Found ${files.length} files to check.`);
  
  let fixedCount = 0;
  files.forEach(file => {
    if (fixJSXInFile(file)) {
      fixedCount++;
    }
  });

  console.log(`Fixed JSX fragments in ${fixedCount} files.`);
}

main();