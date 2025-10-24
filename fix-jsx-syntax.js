const fs = require('fs');
const path = require('path');

// Function to fix common JSX syntax errors
function fixJSXSyntax(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix missing quotes in className attributes
    content = content.replace(/className=\s*([^"'][^>\s]*)/g, (match, className) => {
      if (!className.startsWith('"') && !className.startsWith("'")) {
        modified = true;
        return `className="${className}"`;
      }
      return match;
    });
    
    // Fix missing quotes in other attributes
    content = content.replace(/(\w+)=\s*([^"'][^>\s]*)/g, (match, attr, value) => {
      if (!value.startsWith('"') && !value.startsWith("'") && !value.startsWith('{')) {
        modified = true;
        return `${attr}="${value}"`;
      }
      return match;
    });
    
    // Fix unclosed JSX tags - simplified approach
    // This is a complex fix that we'll handle more carefully
    
    // Fix missing closing tags for common elements
    const openTags = content.match(/<(\w+)(?![^>]*\/>)[^>]*>/g) || [];
    const closeTags = content.match(/<\/(\w+)>/g) || [];
    
    // Fix malformed JSX fragments
    content = content.replace(/<>\s*$/gm, '<>');
    content = content.replace(/^\s*<\/>/gm, '</>');
    
    // Fix missing semicolons in imports
    content = content.replace(/import\s+([^;]+)\s*$/gm, 'import $1;');
    
    // Fix missing commas in object literals
    content = content.replace(/(\w+):\s*"([^"]+)"\s*(\w+):/g, '$1: "$2",\n    $3:');
    
    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all component files
function findComponentFiles() {
  const files = [];
  
  function traverse(dir) {
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        traverse(fullPath);
      } else if (item.endsWith('.tsx') || item.endsWith('.jsx')) {
        files.push(fullPath);
      }
    }
  }
  
  traverse('/workspace/app');
  return files;
}

// Main execution
const componentFiles = findComponentFiles();
console.log(`Found ${componentFiles.length} component files`);

let fixedCount = 0;
for (const filePath of componentFiles) {
  if (fixJSXSyntax(filePath)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files`);