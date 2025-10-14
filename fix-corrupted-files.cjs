#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to clean up corrupted files
function cleanCorruptedFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let cleaned = false;
    
    // Remove duplicate 'use client' declarations
    const useClientRegex = /'use client'[\s\n]*'use client'[\s\n]*/g;
    if (useClientRegex.test(content)) {
      content = content.replace(useClientRegex, "'use client'\n");
      cleaned = true;
    }
    
    // Remove duplicate imports
    const importLines = content.split('\n').filter(line => line.trim().startsWith('import '));
    const uniqueImports = [...new Set(importLines)];
    if (importLines.length !== uniqueImports.length) {
      // Remove all import lines and add unique ones back
      const lines = content.split('\n');
      const nonImportLines = lines.filter(line => !line.trim().startsWith('import '));
      const newContent = [...uniqueImports, ...nonImportLines].join('\n');
      content = newContent;
      cleaned = true;
    }
    
    // Fix malformed JSX with extra quotes
    const quoteFixRegex = /className="([^"]*)"\s*"/g;
    if (quoteFixRegex.test(content)) {
      content = content.replace(quoteFixRegex, 'className="$1"');
      cleaned = true;
    }
    
    // Fix malformed JSX with extra quotes at end of lines
    const endQuoteFixRegex = /"\s*$/gm;
    if (endQuoteFixRegex.test(content)) {
      content = content.replace(endQuoteFixRegex, '');
      cleaned = true;
    }
    
    // Remove empty lines with just quotes
    const emptyQuoteLines = /^\s*"\s*$/gm;
    if (emptyQuoteLines.test(content)) {
      content = content.replace(emptyQuoteLines, '');
      cleaned = true;
    }
    
    // Fix malformed function declarations
    const malformedFunctionRegex = /export default function\s+\w+\s*\(\s*\)\s*\{\s*return\s*\(\s*$/gm;
    if (malformedFunctionRegex.test(content)) {
      content = content.replace(malformedFunctionRegex, 'export default function Page() {\n  return (');
      cleaned = true;
    }
    
    // Fix duplicate export statements
    const exportDefaultRegex = /export default function\s+\w+/g;
    const exportMatches = content.match(exportDefaultRegex);
    if (exportMatches && exportMatches.length > 1) {
      // Keep only the first export default
      const firstExport = exportMatches[0];
      const lines = content.split('\n');
      let foundFirst = false;
      const cleanedLines = lines.filter(line => {
        if (line.trim().startsWith('export default function') && !foundFirst) {
          foundFirst = true;
          return true;
        }
        return !line.trim().startsWith('export default function') || foundFirst;
      });
      content = cleanedLines.join('\n');
      cleaned = true;
    }
    
    if (cleaned) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Cleaned: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error cleaning ${filePath}:`, error.message);
    return false;
  }
}

// Function to find and clean all corrupted files
function cleanAllCorruptedFiles(dir) {
  const files = [];
  
  function scanDirectory(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        if (!['node_modules', '.git', 'dist', 'build', '.next', 'out'].includes(item)) {
          scanDirectory(fullPath);
        }
      } else if (stat.isFile()) {
        if (item.match(/\.(ts|tsx|js|jsx)$/)) {
          files.push(fullPath);
        }
      }
    }
  }
  
  scanDirectory(dir);
  
  let cleanedCount = 0;
  for (const file of files) {
    if (cleanCorruptedFile(file)) {
      cleanedCount++;
    }
  }
  
  console.log(`Cleaned ${cleanedCount} files`);
}

// Main execution
function main() {
  console.log('Starting file cleanup...');
  const workspaceDir = process.cwd();
  cleanAllCorruptedFiles(workspaceDir);
  console.log('File cleanup complete');
}

if (require.main === module) {
  main();
}

module.exports = { cleanCorruptedFile, cleanAllCorruptedFiles };