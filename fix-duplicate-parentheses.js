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

// Get all files
const allFiles = getAllTsxFiles('/workspace/app');

let fixedCount = 0;

allFiles.forEach(filePath => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Fix duplicate parentheses in function declarations
    content = content.replace(/export default function [^(]+\(\) \{\) \{/g, (match) => {
      return match.replace(/\) \{\) \{/, '() {');
    });
    
    // Fix other common syntax issues
    content = content.replace(/\) \{\)/g, '() {');
    content = content.replace(/\) \{\)/g, '() {');
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content);
      fixedCount++;
      console.log(`Fixed: ${filePath}`);
    }
    
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
});

console.log(`Fixed ${fixedCount} files with duplicate parentheses`);
console.log('Done!');