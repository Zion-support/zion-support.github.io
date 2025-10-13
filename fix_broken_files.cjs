const fs = require('fs');
const path = require('path');

// Function to restore broken files
function restoreFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Restore HTML entities back to normal characters
    content = content
      .replace(/&amp;apos;/g, "'")
      .replace(/&amp;quot;/g, '"')
      .replace(/&amp;lt;/g, '<')
      .replace(/&amp;gt;/g, '>')
      .replace(/&amp;amp;/g, '&')
      .replace(/&apos;/g, "'")
      .replace(/&quot;/g, '"')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&amp;/g, '&');
    
    // Fix broken import statements
    content = content.replace(/import from &apos;([^&]+)&apos;/g, "import $1 from '$1'");
    content = content.replace(/import from '([^']+)'/g, "import $1 from '$1'");
    
    // Fix broken type annotations
    content = content.replace(/\.FC =/g, ': React.FC =');
    content = content.replace(/\.FC/g, ': React.FC');
    
    // Fix broken JSX
    content = content.replace(/&lt;([^&]+)&gt;/g, '<$1>');
    content = content.replace(/&lt;\/([^&]+)&gt;/g, '</$1>');
    
    // Fix broken quotes in JSX attributes
    content = content.replace(/=&amp;quot;([^&]+)&amp;quot;/g, '="$1"');
    content = content.replace(/=&quot;([^"]+)&quot;/g, '="$1"');
    
    // Fix broken React imports
    if (content.includes('import from') && !content.includes('import React')) {
      content = "import React from 'react';\n" + content;
    }
    
    fs.writeFileSync(filePath, content);
    console.log(`Restored: ${filePath}`);
  } catch (error) {
    console.error(`Error restoring ${filePath}:`, error.message);
  }
}

// Get all files to restore
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
console.log(`Restoring ${files.length} files...`);

files.forEach(restoreFile);

console.log('File restoration completed!');