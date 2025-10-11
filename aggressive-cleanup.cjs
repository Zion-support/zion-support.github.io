#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to fix common syntax issues in a file
function fixSyntaxIssues(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix import statements with missing spaces
    const importFix1 = content.replace(/import\s*{\s*([^}]+)\s*}\s*from\s*['"]([^'"]+)['"]/g, 'import { $1 } from \'$2\'');
    if (importFix1 !== content) {
      content = importFix1;
      modified = true;
    }
    
    // Fix JSX syntax issues
    const jsxFix1 = content.replace(/<([A-Z][a-zA-Z0-9]*)\s*\/>/g, '<$1 />');
    if (jsxFix1 !== content) {
      content = jsxFix1;
      modified = true;
    }
    
    // Fix missing closing tags
    const closingTagFix = content.replace(/<([A-Z][a-zA-Z0-9]*)\s*([^>]*)>\s*$/gm, '<$1 $2></$1>');
    if (closingTagFix !== content) {
      content = closingTagFix;
      modified = true;
    }
    
    // Fix malformed JSX expressions
    const jsxExprFix = content.replace(/\{\s*([^}]+)\s*\}\s*>/g, '>{$1}');
    if (jsxExprFix !== content) {
      content = jsxExprFix;
      modified = true;
    }
    
    // Fix missing semicolons in object properties
    const semicolonFix = content.replace(/([a-zA-Z0-9_]+):\s*([^,}]+)(?=[,}])/g, '$1: $2');
    if (semicolonFix !== content) {
      content = semicolonFix;
      modified = true;
    }
    
    // Fix malformed function declarations
    const funcFix = content.replace(/const\s+([A-Z][a-zA-Z0-9]*)\s*:\s*React\.FC\s*=\s*\(\s*\)\s*=>\s*{/g, 'const $1: React.FC = () => {');
    if (funcFix !== content) {
      content = funcFix;
      modified = true;
    }
    
    // Fix missing return statements
    const returnFix = content.replace(/const\s+([A-Z][a-zA-Z0-9]*)\s*:\s*React\.FC\s*=\s*\(\s*\)\s*=>\s*{([^}]+)}/g, (match, name, body) => {
      if (!body.trim().startsWith('return')) {
        return `const ${name}: React.FC = () => {\n  return (\n${body}\n  );\n}`;
      }
      return match;
    });
    if (returnFix !== content) {
      content = returnFix;
      modified = true;
    }
    
    // Fix malformed JSX fragments
    const fragmentFix = content.replace(/<>\s*$/gm, '<>');
    if (fragmentFix !== content) {
      content = fragmentFix;
      modified = true;
    }
    
    // Fix missing closing fragments
    const closingFragmentFix = content.replace(/<>\s*([^<]+)\s*$/gm, '<>\n  $1\n</>');
    if (closingFragmentFix !== content) {
      content = closingFragmentFix;
      modified = true;
    }
    
    // Fix malformed object literals
    const objectFix = content.replace(/\{\s*([^}]+)\s*\}\s*>/g, '>{$1}');
    if (objectFix !== content) {
      content = objectFix;
      modified = true;
    }
    
    // Fix missing commas in arrays
    const arrayFix = content.replace(/\[\s*([^\]]+)\s*\]/g, (match, content) => {
      const items = content.split(',').map(item => item.trim()).filter(item => item);
      return '[' + items.join(', ') + ']';
    });
    if (arrayFix !== content) {
      content = arrayFix;
      modified = true;
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all TypeScript/JavaScript files
function findSourceFiles(dir) {
  const files = [];
  
  function scanDirectory(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip node_modules and other common directories
        if (!['node_modules', '.git', 'dist', 'build', '.next'].includes(item)) {
          scanDirectory(fullPath);
        }
      } else if (stat.isFile()) {
        // Check if it's a source file
        const ext = path.extname(item);
        if (['.ts', '.tsx', '.js', '.jsx'].includes(ext)) {
          files.push(fullPath);
        }
      }
    }
  }
  
  scanDirectory(dir);
  return files;
}

// Main execution
console.log('Starting aggressive syntax cleanup...');

const workspaceDir = process.cwd();
const sourceFiles = findSourceFiles(workspaceDir);

console.log(`Found ${sourceFiles.length} source files`);

let fixedCount = 0;
for (const filePath of sourceFiles) {
  if (fixSyntaxIssues(filePath)) {
    fixedCount++;
    console.log(`Fixed: ${filePath}`);
  }
}

console.log(`Fixed syntax issues in ${fixedCount} files`);
console.log('Aggressive cleanup completed!');