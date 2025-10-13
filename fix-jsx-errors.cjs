#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { glob } = require('glob');

// Function to clean up duplicate imports and malformed JSX
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let fixed = false;
    
    // Remove duplicate imports
    const importLines = content.match(/^import\s+.*$/gm) || [];
    const uniqueImports = [...new Set(importLines)];
    
    if (importLines.length !== uniqueImports.length) {
      // Remove all import lines
      content = content.replace(/^import\s+.*$/gm, '');
      
      // Add unique imports at the top
      const cleanImports = uniqueImports
        .filter(imp => imp.trim())
        .join('\n');
      
      if (cleanImports) {
        content = cleanImports + '\n\n' + content;
      }
      fixed = true;
    }
    
    // Fix common JSX issues
    // Remove duplicate export default function declarations
    const exportMatches = content.match(/export\s+default\s+function\s+\w+/g) || [];
    if (exportMatches.length > 1) {
      // Keep only the first export default function
      const firstExport = exportMatches[0];
      const functionName = firstExport.match(/export\s+default\s+function\s+(\w+)/)[1];
      
      // Remove all export default function declarations except the first one
      let exportCount = 0;
      content = content.replace(/export\s+default\s+function\s+\w+/g, (match) => {
        exportCount++;
        return exportCount === 1 ? match : '';
      });
      
      // Ensure there's only one function declaration
      const functionMatches = content.match(new RegExp(`function\\s+${functionName}`, 'g')) || [];
      if (functionMatches.length > 1) {
        let functionCount = 0;
        content = content.replace(new RegExp(`function\\s+${functionName}`, 'g'), (match) => {
          functionCount++;
          return functionCount === 1 ? match : '';
        });
      }
      
      fixed = true;
    }
    
    // Remove "use client" directives that are not at the top
    content = content.replace(/(?<!^)"use client";/gm, '');
    
    // Fix malformed JSX - remove incomplete tags
    content = content.replace(/<[^>]*$/gm, '');
    
    // Remove empty lines with just whitespace
    content = content.replace(/^\s*$/gm, '');
    
    // Ensure proper spacing
    content = content.replace(/\n{3,}/g, '\n\n');
    
    if (fixed) {
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

async function main() {
  // Get all TypeScript/TSX files in the app directory
  const files = await glob('app/**/*.{ts,tsx}');

  console.log(`Found ${files.length} files to check...`);

  let fixedCount = 0;
  files.forEach(file => {
    if (fixFile(file)) {
      fixedCount++;
    }
  });

  console.log(`Fixed ${fixedCount} files`);
}

main().catch(console.error);