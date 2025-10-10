#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to fix remaining syntax errors
function fixRemainingSyntax(content) {
  let fixed = content;
  
  // Remove orphaned closing tags at the end of files
  fixed = fixed.replace(/\s*<\/[^>]+>\s*$/gm, '');
  
  // Fix missing semicolons after function declarations
  fixed = fixed.replace(/(\w+)\s*\(\s*\)\s*=>\s*\{[^}]*\}\s*$/gm, '$1 = () => {};');
  
  // Fix missing semicolons after export statements
  fixed = fixed.replace(/export default (\w+);?\s*$/gm, 'export default $1;');
  
  // Fix missing semicolons after return statements
  fixed = fixed.replace(/return\s+[^;]+(?!;)\s*$/gm, (match) => {
    if (!match.endsWith(';')) {
      return match + ';';
    }
    return match;
  });
  
  // Fix incomplete JSX expressions
  fixed = fixed.replace(/\{([^}]*)\s*$/gm, '{$1}');
  
  // Remove extra closing tags that appear after export statements
  const lines = fixed.split('\n');
  const exportIndex = lines.findIndex(line => line.includes('export default'));
  if (exportIndex !== -1) {
    const beforeExport = lines.slice(0, exportIndex + 1);
    const afterExport = lines.slice(exportIndex + 1).filter(line => 
      !line.trim().startsWith('</') && line.trim() !== ''
    );
    fixed = [...beforeExport, ...afterExport].join('\n');
  }
  
  // Fix missing closing braces for functions
  fixed = fixed.replace(/(\w+)\s*\(\s*\)\s*=>\s*\{[^}]*\s*$/gm, (match) => {
    if (!match.includes('}')) {
      return match + '}';
    }
    return match;
  });
  
  return fixed;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixedContent = fixRemainingSyntax(content);
    
    if (content !== fixedContent) {
      console.log(`Fixing: ${filePath}`);
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
    console.log('Usage: node fix-remaining-syntax.cjs <file1> <file2> ...');
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
  
  console.log(`\nProcessed ${processedCount} files with remaining syntax errors`);
  console.log(`Errors: ${errorCount}`);
}

if (require.main === module) {
  main();
}

module.exports = { fixRemainingSyntax, processFile };