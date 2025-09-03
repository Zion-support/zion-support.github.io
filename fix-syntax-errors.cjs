#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to fix common syntax errors
function fixSyntaxErrors(content, filePath) {
  let fixed = content;
  let changes = 0;

  // Fix extra semicolons after imports
  fixed = fixed.replace(/import\s+[^;]+;;+/g, (match) => {
    changes++;
    return match.replace(/;+$/, '');
  });

  // Fix malformed import statements with extra quotes
  fixed = fixed.replace(/import\s+[^;]+''';+/g, (match) => {
    changes++;
    return match.replace(/''';+$/, '');
  });

  // Fix broken function declarations
  fixed = fixed.replace(/const\s+\w+\s*=\s*\(\)\s*=>\s*\{\}\s*return\(\);?/g, (match) => {
    changes++;
    return match.replace(/return\(\);?/, 'return (');
  });

  // Fix malformed JSX returns
  fixed = fixed.replace(/return\(\);?\s*<div/g, (match) => {
    changes++;
    return match.replace(/return\(\);?\s*/, 'return (\n    ');
  });

  // Fix extra semicolons in object properties
  fixed = fixed.replace(/:\s*[^,}]+;;+/g, (match) => {
    changes++;
    return match.replace(/;+$/, '');
  });

  // Fix malformed string literals
  fixed = fixed.replace(/"";+/g, (match) => {
    changes++;
    return match.replace(/;+$/, '');
  });

  // Fix broken export statements
  fixed = fixed.replace(/export\s+default\s+[^;]+;;+/g, (match) => {
    changes++;
    return match.replace(/;+$/, '');
  });

  // Fix TypeScript interface syntax errors
  if (filePath.endsWith('.ts') || filePath.endsWith('.tsx')) {
    // Fix malformed interface declarations
    fixed = fixed.replace(/interface\s+\w+\s*\{[^}]*;;+/g, (match) => {
      changes++;
      return match.replace(/;+$/, '');
    });
  }

  return { content: fixed, changes };
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const { content: fixed, changes } = fixSyntaxErrors(content, filePath);
    
    if (changes > 0) {
      fs.writeFileSync(filePath, fixed, 'utf8');
      console.log(`Fixed ${changes} issues in ${filePath}`);
      return changes;
    }
    return 0;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return 0;
  }
}

// Function to recursively find and process files
function processDirectory(dirPath, extensions = ['.js', '.jsx', '.ts', '.tsx']) {
  let totalChanges = 0;
  
  try {
    const items = fs.readdirSync(dirPath);
    
    for (const item of items) {
      const fullPath = path.join(dirPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip node_modules and other build directories
        if (!['node_modules', '.next', 'dist', 'build', 'out', '.git'].includes(item)) {
          totalChanges += processDirectory(fullPath, extensions);
        }
      } else if (stat.isFile()) {
        const ext = path.extname(item);
        if (extensions.includes(ext)) {
          totalChanges += processFile(fullPath);
        }
      }
    }
  } catch (error) {
    console.error(`Error processing directory ${dirPath}:`, error.message);
  }
  
  return totalChanges;
}

// Main execution
console.log('Starting syntax error fixes...');
const totalChanges = processDirectory('./src');
console.log(`Total changes made: ${totalChanges}`);
console.log('Syntax error fixes completed!');