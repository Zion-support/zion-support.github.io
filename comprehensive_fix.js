const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Function to fix corrupted files
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Fix double quotes in import statements
    content = content.replace(/from '([^']+)''/g, "from '$1'");
    content = content.replace(/import '([^']+)''/g, "import '$1'");
    
    // Fix double quotes in string literals
    content = content.replace(/'([^']+)''/g, "'$1'");
    content = content.replace(/"([^"]+)""/g, '"$1"');
    
    // Fix malformed object properties
    content = content.replace(/"([^"]+)": '([^']+)''/g, '"$1": "$2"');
    content = content.replace(/'([^']+)': "([^"]+)""/g, "'$1': '$2'");
    
    // Fix array syntax issues
    content = content.replace(/\[([^\]]+)\]''/g, '[$1]');
    
    // Fix function parameter syntax
    content = content.replace(/= '([^']+)''/g, "= '$1'");
    
    // Fix semicolon issues
    content = content.replace(/;''/g, ';');
    content = content.replace(/'';/g, ';');
    
    // Fix malformed React component declarations
    content = content.replace(/const "([^"]+)": React\.FC/g, 'const $1: React.FC');
    
    // Fix malformed JSX attributes
    content = content.replace(/className = '([^']+)''/g, "className='$1'");
    
    // Fix specific patterns that are causing issues
    content = content.replace(/'use client''/g, "'use client'");
    content = content.replace(/import React from 'react''/g, "import React from 'react'");
    content = content.replace(/import { ([^}]+) } from '([^']+)''/g, "import { $1 } from '$2'");
    
    // Only write if content changed
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Get all .tsx files with parsing errors
function getAllCorruptedFiles() {
  try {
    const result = execSync('find ./app ./components ./src -name "*.tsx" -exec grep -l "\\'\\'" {} \\;', { encoding: 'utf8' });
    return result.trim().split('\n').filter(file => file.trim());
  } catch (error) {
    console.error('Error finding corrupted files:', error.message);
    return [];
  }
}

console.log('Starting comprehensive fix of corrupted files...');
const corruptedFiles = getAllCorruptedFiles();
console.log(`Found ${corruptedFiles.length} corrupted files`);

let fixedCount = 0;
let processedCount = 0;

for (const file of corruptedFiles) {
  if (fs.existsSync(file)) {
    processedCount++;
    if (fixFile(file)) {
      fixedCount++;
    }
    
    // Progress indicator
    if (processedCount % 50 === 0) {
      console.log(`Processed ${processedCount}/${corruptedFiles.length} files...`);
    }
  }
}

console.log(`\nFixed ${fixedCount} out of ${processedCount} processed files.`);