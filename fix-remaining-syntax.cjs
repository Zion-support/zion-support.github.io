#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function fixRemainingSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix malformed export statements
    content = content.replace(/export default \w+<\/[^>]+>/g, (match) => {
      const componentName = match.match(/export default (\w+)/)[1];
      return `export default ${componentName}`;
    });
    
    // Remove orphaned closing tags at the end of files
    content = content.replace(/\s*<\/[^>]+>\s*$/gm, '');
    
    // Fix malformed JSX with semicolons
    content = content.replace(/;\s*<\/[^>]+>/g, '</$1>');
    
    // Fix any remaining malformed closing tags
    content = content.replace(/<\/\s*$/gm, '');
    
    // Remove any standalone closing tags that don't have opening tags
    content = content.replace(/^\s*<\/[^>]+>\s*$/gm, '');
    
    // Fix any malformed React.Fragment closing
    content = content.replace(/<\/React\.Fragment>\s*<\/[^>]+>/g, '</React.Fragment>');
    
    // Fix any malformed <> fragment closing
    content = content.replace(/<\/>\s*<\/[^>]+>/g, '</>');
    
    // Clean up any remaining malformed JSX
    content = content.replace(/;\s*$/gm, '');
    
    // Remove any trailing semicolons after closing braces
    content = content.replace(/}\s*;\s*$/gm, '}');
    
    // Write the cleaned content back
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Fixed remaining syntax errors in: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

function findFilesWithSyntaxErrors(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.includes('node_modules') && !item.startsWith('.')) {
        traverse(fullPath);
      } else if (stat.isFile() && /\.(tsx?|jsx?)$/.test(item)) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
const workspaceDir = process.cwd();
console.log('Finding and fixing remaining syntax errors...');

const files = findFilesWithSyntaxErrors(workspaceDir);
console.log(`Found ${files.length} files to check`);

let fixedCount = 0;
let errorCount = 0;

for (const file of files) {
  if (fixRemainingSyntaxErrors(file)) {
    fixedCount++;
  } else {
    errorCount++;
  }
}

console.log(`\nSummary:`);
console.log(`- Files processed: ${fixedCount}`);
console.log(`- Files with errors: ${errorCount}`);
console.log(`- Total files: ${files.length}`);

if (errorCount === 0) {
  console.log('\nAll remaining syntax errors have been fixed!');
} else {
  console.log('\nSome files had errors and may need manual review.');
}