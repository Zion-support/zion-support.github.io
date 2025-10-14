#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Find all .tsx files
function findTsxFiles() {
  try {
    const result = execSync('find app -name "*.tsx"', { encoding: 'utf8' });
    return result.trim().split('\n').filter(file => file.length > 0);
  } catch (error) {
    console.error('Error finding files:', error.message);
    return [];
  }
}

// Fix import statements in a file
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix import statements without quotes and semicolons
    const lines = content.split('\n');
    const fixedLines = lines.map(line => {
      // Fix import statements that are missing quotes and semicolons
      if (line.trim().startsWith('import') && !line.includes(';') && !line.includes("'") && !line.includes('"')) {
        // This is a malformed import, skip it for now
        return line;
      }
      
      // Fix import statements missing closing quotes and semicolons
      if (line.trim().startsWith('import') && line.includes('from') && !line.endsWith(';')) {
        if (line.includes("'") && !line.includes("';")) {
          return line + "';";
        } else if (line.includes('"') && !line.includes('";')) {
          return line + '";';
        }
      }
      
      return line;
    });
    
    const newContent = fixedLines.join('\n');
    if (newContent !== content) {
      fs.writeFileSync(filePath, newContent, 'utf8');
      console.log(`Fixed: ${filePath}`);
      modified = true;
    }
    
    return modified;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Main function
function main() {
  console.log('Finding .tsx files...');
  const files = findTsxFiles();
  
  if (files.length === 0) {
    console.log('No .tsx files found.');
    return;
  }
  
  console.log(`Found ${files.length} .tsx files.`);
  
  let fixedCount = 0;
  for (const file of files) {
    if (fixFile(file)) {
      fixedCount++;
    }
  }
  
  console.log(`Fixed ${fixedCount} out of ${files.length} files.`);
}

main();