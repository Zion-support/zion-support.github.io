const fs = require('fs');
const path = require('path');

// Function to fix common syntax errors
function fixSyntaxErrors(content) {
  // Fix missing commas in object properties
  content = content.replace(/(\w+):\s*['"`][^'"`]*['"`]\s*\n\s*(\w+):/g, '$1: $1,\n  $2:');
  content = content.replace(/(\w+):\s*['"`][^'"`]*['"`]\s*\n\s*(\w+):/g, '$1: $1,\n  $2:');
  
  // Fix missing commas in arrays
  content = content.replace(/(\w+):\s*\[[^\]]*\]\s*\n\s*(\w+):/g, '$1: $1,\n  $2:');
  
  // Fix missing commas in object literals
  content = content.replace(/(\w+)\s*\n\s*(\w+):/g, '$1,\n  $2:');
  
  // Fix JSX syntax issues
  content = content.replace(/<>\s*<title>/g, '<>\n      <title>');
  content = content.replace(/<title>([^<]*)<\/title>\s*<meta/g, '<title>$1</title>\n        <meta');
  
  // Fix trailing semicolons in wrong places
  content = content.replace(/,\s*;/g, ',');
  content = content.replace(/;\s*}/g, '}');
  
  // Fix missing commas in metadata objects
  content = content.replace(/(description:\s*['"`][^'"`]*['"`])\s*\n\s*(keywords:)/g, '$1,\n  $2');
  content = content.replace(/(keywords:\s*['"`][^'"`]*['"`])\s*\n\s*(openGraph:)/g, '$1,\n  $2');
  content = content.replace(/(type:\s*['"`][^'"`]*['"`])\s*\n\s*(url:)/g, '$1,\n    $2');
  content = content.replace(/(url:\s*['"`][^'"`]*['"`])\s*,\s*;/g, '$1');
  
  return content;
}

// Function to fix specific file types
function fixFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixedContent = fixSyntaxErrors(content);
    
    if (content !== fixedContent) {
      fs.writeFileSync(filePath, fixedContent);
      console.log(`Fixed ${filePath}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Get all TypeScript and TSX files in app directory
function getAllFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      getAllFiles(filePath, fileList);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      fileList.push(filePath);
    }
  });
  
  return fileList;
}

// Process all files
console.log('Starting syntax fix for main branch...');
const allFiles = getAllFiles('./app');
allFiles.forEach(fixFile);

console.log('Syntax fix completed!');