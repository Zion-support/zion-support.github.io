#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

function fixArraySyntax(content) {
  // Fix missing commas in array elements
  content = content.replace(
    /(\w+):\s*\[([^\]]*)\s*'([^']+)'\s*}\s*'([^']+)'/g,
    (match, key, before, first, second) => {
      return `${key}: [${before}'${first}',\n        '${second}'`;
    }
  );
  
  // Fix missing commas in array elements with different patterns
  content = content.replace(
    /(\w+):\s*\[([^\]]*)\s*'([^']+)'\s*}\s*'([^']+)'/g,
    (match, key, before, first, second) => {
      return `${key}: [${before}'${first}',\n        '${second}'`;
    }
  );
  
  // Fix missing commas in array elements with template literals
  content = content.replace(
    /(\w+):\s*\[([^\]]*)\s*`([^`]+)`\s*}\s*`([^`]+)`/g,
    (match, key, before, first, second) => {
      return `${key}: [${before}\`${first}\`,\n        \`${second}\``;
    }
  );
  
  // Fix missing commas in array elements with different quotes
  content = content.replace(
    /(\w+):\s*\[([^\]]*)\s*"([^"]+)"\s*}\s*"([^"]+)"/g,
    (match, key, before, first, second) => {
      return `${key}: [${before}"${first}",\n        "${second}"`;
    }
  );
  
  return content;
}

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    content = fixArraySyntax(content);
    
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

function main() {
  const appDir = path.join(__dirname, 'app');
  const files = glob.sync('**/*.{ts,tsx}', { cwd: appDir });
  
  let fixedCount = 0;
  
  files.forEach(file => {
    const filePath = path.join(appDir, file);
    if (fixFile(filePath)) {
      fixedCount++;
    }
  });
  
  console.log(`Fixed ${fixedCount} files`);
}

if (require.main === module) {
  main();
}

module.exports = { fixFile, fixArraySyntax };