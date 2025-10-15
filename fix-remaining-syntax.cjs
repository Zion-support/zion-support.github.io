#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Fix common patterns
    content = content.replace(/""/g, '"');
    content = content.replace(/""/g, '"');
    content = content.replace(/""/g, '"');
    content = content.replace(/""/g, '"');
    content = content.replace(/""/g, '"');
    content = content.replace(/""/g, '"');
    content = content.replace(/""/g, '"');
    content = content.replace(/""/g, '"');
    content = content.replace(/""/g, '"');
    content = content.replace(/""/g, '"');
    
    // Fix JSX closing tags
    content = content.replace(/<\/div>""/g, '</div>');
    content = content.replace(/<\/h1>""/g, '</h1>');
    content = content.replace(/<\/p>""/g, '</p>');
    content = content.replace(/<\/div>""/g, '</div>');
    content = content.replace(/<\/>""/g, '</>');
    
    // Fix function definitions
    content = content.replace(/const (\w+): React\.FC = \(\) => \{\}/g, 'const $1: React.FC = () => {');
    
    // Fix JSX attributes
    content = content.replace(/title="([^"]+)""/g, 'title="$1"');
    content = content.replace(/description="([^"]+)""/g, 'description="$1"');
    
    // Fix closing braces
    content = content.replace(/\}\}/g, '}');
    content = content.replace(/\}\}/g, '}');
    
    // Fix export statements
    content = content.replace(/export default (\w+);/g, 'export default $1;');
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

function findTsxFiles(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        traverse(fullPath);
      } else if (item.endsWith('.tsx') && item.includes('page.tsx')) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

function main() {
  const appDir = path.join(__dirname, 'app');
  
  console.log('Fixing remaining syntax errors...');
  
  let totalFixed = 0;
  
  if (fs.existsSync(appDir)) {
    const files = findTsxFiles(appDir);
    console.log(`Found ${files.length} page files to check`);
    
    for (const file of files) {
      if (fixFile(file)) {
        totalFixed++;
      }
    }
  }
  
  console.log(`\nFixed ${totalFixed} files`);
  console.log('Remaining syntax fixes completed!');
}

if (require.main === module) {
  main();
}

module.exports = { fixFile, findTsxFiles };
