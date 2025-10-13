const fs = require('fs');
const path = require('path');

// Function to fix syntax errors
function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix malformed React imports
    if (content.includes("import react from 'react'")) {
      content = content.replace(/import react from 'react'/g, "import React from 'react'");
      modified = true;
    }

    // Fix malformed type annotations
    content = content.replace(/:\s*:\s*React:\s*React\.FC/g, ': React.FC');
    content = content.replace(/:\s*:\s*React\.FC/g, ': React.FC');
    content = content.replace(/:\s*React\.FC/g, ': React.FC');
    
    // Fix malformed function declarations
    content = content.replace(/const\s+(\w+):\s*:\s*React\.FC\s*=\s*\(\)\s*=>/g, 'const $1: React.FC = () =>');
    content = content.replace(/const\s+(\w+):\s*React\.FC\s*=\s*\(\)\s*=>/g, 'const $1: React.FC = () =>');
    
    // Fix malformed interface declarations
    content = content.replace(/interface\s+(\w+)\s*{\s*}/g, 'interface $1 {\n  // Add properties here\n}');
    
    // Fix malformed JSX
    content = content.replace(/<div>Page<\/div>/g, '<div>Home Page<\/div>');
    
    // Fix malformed try-catch blocks in JS files
    if (filePath.endsWith('.js')) {
      // Fix missing try blocks
      content = content.replace(/\s*{\s*}\s*catch/g, ' try {\n  // Add try logic here\n } catch');
      
      // Fix malformed function declarations
      content = content.replace(/function\s+(\w+)\s*\(\s*\)\s*{\s*}/g, 'function $1() {\n  // Add function logic here\n}');
    }

    // Remove unused React imports if React is not used
    if (content.includes("import React from 'react'") && !content.includes('<') && !content.includes('React.')) {
      content = content.replace(/import React from 'react';\s*\n?/g, '');
      modified = true;
    }

    if (modified || content !== fs.readFileSync(filePath, 'utf8')) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Get all files to process
function getAllFiles(dir, extensions = ['.tsx', '.jsx', '.ts', '.js']) {
  let files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      files = files.concat(getAllFiles(fullPath, extensions));
    } else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Process all files
const files = getAllFiles('.');
console.log(`Fixing syntax errors in ${files.length} files...`);

files.forEach(fixSyntaxErrors);

console.log('Syntax error fixes completed!');