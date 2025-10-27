import fs from 'fs';
import path from 'path';

// Function to fix malformed return statements
function fixReturnSyntax(content) {
  // Fix return () without opening parenthesis
  let fixedContent = content.replace(/return\s*\(\s*\)\s*\n\s*</g, 'return (\n    <');
  
  // Fix return without parentheses
  fixedContent = fixedContent.replace(/return\s*\n\s*</g, 'return (\n    <');
  
  return fixedContent;
}

// Function to process a single file
function processFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Apply fixes
    content = fixReturnSyntax(content);
    
    // Only write if content changed
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and process all .tsx files
function processDirectory(dirPath) {
  const files = fs.readdirSync(dirPath);
  let fixedCount = 0;
  
  files.forEach(file => {
    const filePath = path.join(dirPath, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      fixedCount += processDirectory(filePath);
    } else if (file.endsWith('.tsx')) {
      if (processFile(filePath)) {
        fixedCount++;
      }
    }
  });
  
  return fixedCount;
}

// Main execution
console.log('Starting to fix return syntax errors...');
const fixedCount = processDirectory('./app');
console.log(`Fixed ${fixedCount} files`);