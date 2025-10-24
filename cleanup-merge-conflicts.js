const fs = require('fs');
const path = require('path');

function cleanMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove merge conflict markers
    content = content.replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+/g, '');
    content = content.replace(/<<<<<<< [^\n]+[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+/g, '');
    
    // Fix common syntax issues
    content = content.replace(/,\s*}/g, '}');
    content = content.replace(/,\s*]/g, ']');
    content = content.replace(/,\s*\)/g, ')');
    
    // Fix JSX syntax issues
    content = content.replace(/<(\w+)([^>]*?)\s*>\s*<\/\1>/g, '<$1$2 />');
    
    // Remove empty lines with just whitespace
    content = content.replace(/^\s*$/gm, '');
    
    // Fix common TypeScript issues
    content = content.replace(/:\s*any\[\]/g, ': any[]');
    content = content.replace(/:\s*string\[\]/g, ': string[]');
    content = content.replace(/:\s*number\[\]/g, ': number[]');
    
    fs.writeFileSync(filePath, content);
    console.log(`Cleaned: ${filePath}`);
  } catch (error) {
    console.error(`Error cleaning ${filePath}:`, error.message);
  }
}

function findTsxFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files.push(...findTsxFiles(fullPath));
    } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Clean all TypeScript/TSX files in the app directory
const appDir = './app';
const files = findTsxFiles(appDir);

console.log(`Found ${files.length} files to clean...`);

files.forEach(cleanMergeConflicts);

console.log('Cleanup complete!');