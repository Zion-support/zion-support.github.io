#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to fix common syntax errors
function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Remove any remaining merge conflict markers
    if (content.includes('<<<<<<<') || content.includes('=======') || content.includes('>>>>>>>')) {
      console.log(`Removing remaining merge conflict markers from: ${filePath}`);
      content = content.replace(/<<<<<<<.*?\n/g, '');
      content = content.replace(/=======.*?\n/g, '');
      content = content.replace(/>>>>>>>.*?\n/g, '');
      modified = true;
    }
    
    // Fix common JSX syntax issues
    // Fix missing closing braces in JSX
    const openBraces = (content.match(/\{/g) || []).length;
    const closeBraces = (content.match(/\}/g) || []).length;
    
    if (openBraces > closeBraces) {
      console.log(`Fixing missing closing braces in: ${filePath}`);
      // Add missing closing braces at the end of the component
      const lines = content.split('\n');
      const lastLine = lines[lines.length - 1];
      if (!lastLine.trim().startsWith('}') && !lastLine.trim().startsWith('export')) {
        lines.push('}');
        content = lines.join('\n');
        modified = true;
      }
    }
    
    // Fix common React component issues
    // Ensure proper export default
    if (!content.includes('export default') && content.includes('const ') && content.includes('= () =>')) {
      const componentName = content.match(/const (\w+)\s*=\s*\(/)?.[1];
      if (componentName) {
        console.log(`Adding missing export default for: ${filePath}`);
        content += `\n\nexport default ${componentName};`;
        modified = true;
      }
    }
    
    // Fix missing semicolons
    content = content.replace(/(\w+)\s*=\s*\([^)]*\)\s*=>\s*\{([^}]*)\}(?!\s*;)/g, '$1 = ($2) => {$3};');
    
    // Remove unused variable assignments that start with underscore
    content = content.replace(/const\s+_\w+\s*=\s*[^;]+;/g, '');
    content = content.replace(/let\s+_\w+\s*=\s*[^;]+;/g, '');
    content = content.replace(/var\s+_\w+\s*=\s*[^;]+;/g, '');
    
    // Remove unused imports
    content = content.replace(/import\s+\{[^}]*\b_\w+\b[^}]*\}\s+from\s+['"][^'"]+['"];?\n?/g, '');
    
    // Fix common JSX issues
    content = content.replace(/\s*<>\s*$/gm, '');
    content = content.replace(/^\s*<\/>\s*$/gm, '');
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing syntax in ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all TypeScript/JavaScript files
function findSourceFiles(dir) {
  const files = [];
  
  function walkDir(currentPath) {
    const items = fs.readdirSync(currentPath);
    
    for (const item of items) {
      const fullPath = path.join(currentPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        if (!['node_modules', '.git', '.next', 'dist', 'out'].includes(item)) {
          walkDir(fullPath);
        }
      } else if (stat.isFile()) {
        if (item.match(/\.(ts|tsx|js|jsx)$/)) {
          files.push(fullPath);
        }
      }
    }
  }
  
  walkDir(dir);
  return files;
}

// Main execution
console.log('Starting syntax error fixes...');

const srcDir = path.join(__dirname, 'src');
const sourceFiles = findSourceFiles(srcDir);

console.log(`Found ${sourceFiles.length} source files`);

let fixedCount = 0;
for (const filePath of sourceFiles) {
  if (fixSyntaxErrors(filePath)) {
    fixedCount++;
  }
}

console.log(`Fixed syntax errors in ${fixedCount} files`);