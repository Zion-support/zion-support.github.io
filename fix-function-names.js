import fs from 'fs';
import path from 'path';

// Get all TypeScript/TSX files in the app directory
function getAllTsxFiles(dir) {
  let files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files = files.concat(getAllTsxFiles(fullPath));
    } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Fix function names that start with numbers
function fixFunctionName(content, fileName) {
  // Extract the title from the file path
  const title = path.dirname(fileName).split('/').pop().replace(/-/g, ' ');
  
  // Create a valid function name
  let functionName = title.replace(/[^a-zA-Z0-9]/g, '');
  if (/^[0-9]/.test(functionName)) {
    functionName = 'Page' + functionName;
  }
  if (functionName === '') {
    functionName = 'Page';
  }
  
  // Replace the function declaration
  const functionRegex = /export default function [^(]+\(/;
  const newFunctionDeclaration = `export default function ${functionName}() {`;
  
  return content.replace(functionRegex, newFunctionDeclaration);
}

// Get all files
const allFiles = getAllTsxFiles('/workspace/app');

let fixedCount = 0;

allFiles.forEach(filePath => {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Check if the file has a function that starts with a number
    if (content.includes('export default function') && /export default function [0-9]/.test(content)) {
      const fixedContent = fixFunctionName(content, filePath);
      fs.writeFileSync(filePath, fixedContent);
      fixedCount++;
      console.log(`Fixed: ${filePath}`);
    }
    
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
});

console.log(`Fixed ${fixedCount} files with invalid function names`);
console.log('Done!');