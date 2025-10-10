#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to fix all quote issues
function fixAllQuotes(content) {
  // Fix 'use client; -> 'use client';
  content = content.replace(/'use client;/g, "'use client';");
  
  // Fix import statements missing quotes
  content = content.replace(/import\s+.*\s+from\s+['"]([^'"]*);$/gm, (match, p1) => {
    return match.replace(/;$/, "';");
  });
  
  // Fix import statements with missing closing quotes
  content = content.replace(/import\s+['"]([^'"]*);$/gm, (match, p1) => {
    return match.replace(/;$/, "';");
  });
  
  // Fix other common missing quotes
  content = content.replace(/from\s+['"]([^'"]*);$/gm, (match, p1) => {
    return match.replace(/;$/, "';");
  });
  
  // Fix unterminated string literals
  content = content.replace(/['"]([^'"]*);$/gm, (match, p1) => {
    if (match.includes('import') || match.includes('from')) {
      return match.replace(/;$/, "';");
    }
    return match;
  });
  
  return content;
}

// Function to fix specific file
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    content = fixAllQuotes(content);
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed quotes in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all files with quote issues
function findFilesWithQuoteIssues() {
  const problematicFiles = [];
  
  function scanDirectory(dir) {
    const files = fs.readdirSync(dir);
    
    for (const file of files) {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory() && !file.includes('node_modules') && !file.startsWith('.')) {
        scanDirectory(filePath);
      } else if (stat.isFile() && /\.(tsx?|jsx?)$/.test(file)) {
        try {
          const content = fs.readFileSync(filePath, 'utf8');
          // Check for common quote issues
          if (content.includes("'use client;") || content.includes('import') && content.includes(';') && !content.includes("';")) {
            problematicFiles.push(filePath);
          }
        } catch (error) {
          // Skip files that can't be read
        }
      }
    }
  }
  
  scanDirectory('.');
  return problematicFiles;
}

// Main function
function main() {
  console.log('Fixing all quote issues...');
  
  const filesToFix = findFilesWithQuoteIssues();
  console.log(`Found ${filesToFix.length} files with quote issues`);
  
  let fixedCount = 0;
  let errorCount = 0;
  
  filesToFix.forEach(filePath => {
    if (fixFile(filePath)) {
      fixedCount++;
    } else {
      errorCount++;
    }
  });
  
  console.log(`\nQuote fixing complete:`);
  console.log(`- Files fixed: ${fixedCount}`);
  console.log(`- Files with errors: ${errorCount}`);
  console.log(`- Total files processed: ${filesToFix.length}`);
}

main();