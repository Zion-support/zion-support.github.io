#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function fixJsxFragments(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix missing closing JSX fragments
    const fragmentPattern = /<>\s*([^<]*?)\s*$/gm;
    const matches = content.match(fragmentPattern);
    if (matches) {
      content = content.replace(fragmentPattern, '<>\n    $1\n  </>');
      modified = true;
    }
    
    // Fix JSX expressions that need parent elements
    const jsxExpressionPattern = /return\s*\(\s*([^)]*?)\s*\)\s*;?\s*$/gm;
    content = content.replace(jsxExpressionPattern, (match, jsxContent) => {
      if (jsxContent.includes('<') && !jsxContent.includes('<>')) {
        return `return (\n    <>\n      ${jsxContent.trim()}\n    </>\n  );`;
      }
      return match;
    });
    
    // Fix missing closing tags in JSX
    const unclosedTagPattern = /<(\w+)[^>]*>[^<]*$/gm;
    content = content.replace(unclosedTagPattern, (match, tagName) => {
      if (!match.includes('</')) {
        return match + `</${tagName}>`;
      }
      return match;
    });
    
    // Fix missing semicolons after return statements
    content = content.replace(/return\s*\([^)]*\)\s*$/gm, (match) => {
      if (!match.endsWith(';')) {
        return match + ';';
      }
      return match;
    });
    
    // Fix missing export statements
    if (content.includes('const ') && content.includes('React.FC') && !content.includes('export default')) {
      const componentName = content.match(/const\s+(\w+)\s*:\s*React\.FC/)?.[1];
      if (componentName) {
        content = content + `\n\nexport default ${componentName};`;
        modified = true;
      }
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed JSX fragments in: ${filePath}`);
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
      } else if (item.endsWith('.tsx')) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
const workspaceDir = process.cwd();
const tsxFiles = findTsxFiles(workspaceDir);

console.log(`Checking ${tsxFiles.length} TSX files for JSX fragment issues...`);

let fixedCount = 0;
for (const file of tsxFiles) {
  if (fixJsxFragments(file)) {
    fixedCount++;
  }
}

console.log(`Fixed JSX fragments in ${fixedCount} files.`);