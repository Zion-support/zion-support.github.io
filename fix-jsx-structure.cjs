#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to fix JSX structure issues
function fixJSXStructure(content) {
  let fixed = content;
  
  // Fix missing closing tags in JSX
  fixed = fixed.replace(/(<div[^>]*>)\s*([^<]+)\s*$/gm, '$1$2</div>');
  fixed = fixed.replace(/(<h[1-6][^>]*>)\s*([^<]+)\s*$/gm, '$1$2</h$1>');
  fixed = fixed.replace(/(<p[^>]*>)\s*([^<]+)\s*$/gm, '$1$2</p>');
  fixed = fixed.replace(/(<span[^>]*>)\s*([^<]+)\s*$/gm, '$1$2</span>');
  
  // Fix missing closing tags in map functions
  fixed = fixed.replace(/(\s+)([^}]+)\s*\)\)\}/g, '$1$2</div>\n                        </Link>\n                      ))}');
  
  // Fix missing closing tags for service descriptions
  fixed = fixed.replace(/(<div className="text-xs text-gray-400">[^<]+)\s*$/gm, '$1</div>');
  fixed = fixed.replace(/(<div className="text-white font-medium">[^<]+)\s*$/gm, '$1</div>');
  
  // Fix missing closing tags for service names
  fixed = fixed.replace(/(<div className="text-white font-medium">[^<]+)\s*$/gm, '$1</div>');
  
  // Fix missing closing tags for service descriptions
  fixed = fixed.replace(/(<div className="text-xs text-gray-400">[^<]+)\s*$/gm, '$1</div>');
  
  // Fix missing closing tags for service containers
  fixed = fixed.replace(/(<div[^>]*>)\s*([^<]+)\s*$/gm, '$1$2</div>');
  
  return fixed;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixedContent = fixJSXStructure(content);
    
    if (content !== fixedContent) {
      console.log(`Fixing JSX structure: ${filePath}`);
      fs.writeFileSync(filePath, fixedContent, 'utf8');
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Main function
function main() {
  const files = process.argv.slice(2);
  
  if (files.length === 0) {
    console.log('Usage: node fix-jsx-structure.cjs <file1> <file2> ...');
    process.exit(1);
  }
  
  let processedCount = 0;
  let errorCount = 0;
  
  files.forEach(file => {
    if (processFile(file)) {
      processedCount++;
    } else {
      errorCount++;
    }
  });
  
  console.log(`\nProcessed ${processedCount} files with JSX structure issues`);
  console.log(`Errors: ${errorCount}`);
}

if (require.main === module) {
  main();
}

module.exports = { fixJSXStructure, processFile };