#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Function to fix common syntax errors in a file
function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix malformed imports
    content = content.replace(/import\s*{\s*([^}]+)\s*}\s*from\s*['"]([^'"]+)['"]\s*;?\s*import\s*{\s*([^}]+)\s*}\s*from\s*['"]([^'"]+)['"]\s*;?/g, 
      (match, imports1, from1, imports2, from2) =>
                {
        if (from1 === from2) {
          return `import { ${imports1}, ${imports2} } from '${from1}';`;
        }
        return `import { ${imports1} } from '${from1}';\nimport { ${imports2} } from '${from2}';`;
      });
    
    // Fix malformed JSX with missing spaces
    content = content.replace(/>\s*<Route/g, '>\n                <Route');
    content = content.replace(/>\s*<\/Route/g, '>\n                </Route');
    content = content.replace(/>\s*{/g, '>\n                {');
    content = content.replace(/}\s*</g, '}\n                <');
    
    // Fix malformed JSX attributes
    content = content.replace(/element=\{<([^>]+)>}/g, 'element={<$1 / / />}');
    content = content.replace(/element=\{<([^>]+)>\s*}/g, 'element={<$1 / / />}');
    
    // Fix malformed closing tags
    content = content.replace(/<\/([^>]+)>\s*<\/([^>]+)>/g, '</$1>\n                </$2>');
    
    // Fix missing semicolons in imports
    content = content.replace(/import\s+[^;]+$/gm, (match) =>
                {
      if (!match.endsWith(';')) {
        return match + ';';
      }
      return match;
    });
    
    // Fix malformed function declarations
    content = content.replace(/const\s+([^=]+)=\s*\(\s*\)\s*=>\s*{/g, 'const $1  = () => {');
    
    // Fix malformed JSX expressions
    content = content.replace(/\{\s*([^}]+)\s*}\s*</g, '{$1}\n                <');
    
    // Fix missing closing tags
    content = content.replace(/<([^>]+)>\s*$/gm, (match, tagName) =>
                {
      if (!match.includes('/>') && !match.includes('</')) {
        return match + `</${tagName.split(' ')[0]}>`;
      }
      return match;
    });
    
    // Write back if modified
    if (content !== fs.readFileSync(filePath, 'utf8')) {
      fs.writeFileSync(filePath, content);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively fix syntax errors
function fixAllSyntaxErrors(dir) {
  const items = fs.readdirSync(dir);
  let fixedCount = 0;
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      // Skip node_modules and other common directories
      if (['node_modules', '.git', 'dist', 'build', '.next'].includes(item)) {
        continue;
      }
      fixedCount += fixAllSyntaxErrors(fullPath);
    } else if (stat.isFile()) {
      // Only process certain file types
      if (['.ts', '.tsx', '.js', '.jsx'].some(ext => item.endsWith(ext))) {
        if (fixSyntaxErrors(fullPath)) {
          fixedCount++;
        }
      }
    }
  }
  
  return fixedCount;
}

// Main execution
console.log('Starting syntax error fixes...');
const fixedCount = fixAllSyntaxErrors(process.cwd());
console.log(`Fixed syntax errors in ${fixedCount} files.`);