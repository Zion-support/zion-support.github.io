const fs = require('fs');
const path = require('path');

// Function to fix final issues
function fixFinalIssues(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix 1: Remove duplicate React imports
    const reactImportRegex = /import React from ['"]react['"];?\s*\n?/g;
    const matches = content.match(reactImportRegex);
    if (matches && matches.length > 1) {
      content = content.replace(reactImportRegex, '');
      content = 'import React from "react";\n' + content;
      modified = true;
    }

    // Fix 2: Remove unused React imports if no JSX
    if (content.includes("import React from 'react';") && !content.includes('<')) {
      content = content.replace("import React from 'react';\n", '');
      modified = true;
    }

    // Fix 3: Remove unused Helmet imports
    if (content.includes("import { Helmet } from 'react-helmet-async';") && !content.includes('<Helmet')) {
      content = content.replace("import { Helmet } from 'react-helmet-async';\n", '');
      modified = true;
    }

    // Fix 4: Fix duplicate React declarations
    if (content.includes('Identifier \'React\' has already been declared')) {
      const lines = content.split('\n');
      const filteredLines = [];
      let reactImported = false;
      
      for (const line of lines) {
        if (line.includes("import React from 'react'") || line.includes('import React from "react"')) {
          if (!reactImported) {
            filteredLines.push(line);
            reactImported = true;
          }
        } else {
          filteredLines.push(line);
        }
      }
      
      content = filteredLines.join('\n');
      modified = true;
    }

    // Fix 5: Clean up empty lines
    content = content.replace(/\n\n\n+/g, '\n\n');

    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all .tsx and .ts files
function findFiles(dir, extensions = ['.tsx', '.ts']) {
  let results = [];
  const list = fs.readdirSync(dir);
  
  list.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat && stat.isDirectory()) {
      if (file !== 'node_modules' && file !== '.next' && !file.startsWith('.')) {
        results = results.concat(findFiles(filePath, extensions));
      }
    } else {
      const ext = path.extname(file);
      if (extensions.includes(ext)) {
        results.push(filePath);
      }
    }
  });
  
  return results;
}

// Main execution
console.log('Starting final error fix...');

const appDir = path.join(__dirname, 'app');
const files = findFiles(appDir);

let fixedCount = 0;
let errorCount = 0;

files.forEach(file => {
  try {
    if (fixFinalIssues(file)) {
      fixedCount++;
    }
  } catch (error) {
    console.error(`Failed to process ${file}:`, error.message);
    errorCount++;
  }
});

console.log(`\nFinal fix complete!`);
console.log(`Files fixed: ${fixedCount}`);
console.log(`Errors encountered: ${errorCount}`);
console.log(`Total files processed: ${files.length}`);
