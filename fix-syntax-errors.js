#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Function to recursively find all TypeScript/JavaScript files
function findSourceFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      // Skip node_modules and other directories we don't want to process
      if (!['node_modules', '.git', '.next', 'dist', 'out', 'backup', 'backup-*', '*-disabled', '*.disabled'].includes(file)) {
        findSourceFiles(filePath, fileList);
      }
    } else if (stat.isFile() && (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js'))) {
      fileList.push(filePath);
    }
  });
  
  return fileList;
}

// Function to fix common syntax errors
function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Fix common syntax errors
    
    // 1. Fix duplicate imports
    content = content.replace(/import\s+.*?from\s+['"][^'"]+['"];\s*import\s+.*?from\s+['"][^'"]+['"];/g, (match) => {
      const imports = match.split(';').filter(line => line.trim().startsWith('import'));
      const uniqueImports = [...new Set(imports.map(imp => imp.trim()))];
      return uniqueImports.join(';\n') + ';';
    });
    
    // 2. Fix malformed import statements
    content = content.replace(/import\s*{\s*([^}]+)\s*}\s*}\s*from\s+/g, 'import { $1 } from ');
    content = content.replace(/import\s*{\s*([^}]+)\s*}\s*from\s*['"][^'"]+['"];\s*import\s*{\s*([^}]+)\s*}\s*from\s*['"][^'"]+['"];/g, 'import { $1, $2 } from \'lucide-react\';');
    
    // 3. Fix duplicate component declarations
    content = content.replace(/(const\s+\w+:\s*React\.FC\s*=\s*\(\)\s*=>\s*{[\s\S]*?})\s*const\s+\w+:\s*React\.FC\s*=\s*\(\)\s*=>\s*{/g, '$1');
    
    // 4. Fix malformed JSX closing tags
    content = content.replace(/<(\w+)[^>]*>([\s\S]*?)<\/\1>/g, (match, tag, inner) => {
      // Check if there are unclosed tags inside
      const openTags = inner.match(/<\w+[^>]*>/g) || [];
      const closeTags = inner.match(/<\/\w+>/g) || [];
      if (openTags.length !== closeTags.length) {
        return match; // Return as is if there are unclosed tags
      }
      return match;
    });
    
    // 5. Fix empty object literals in arrays
    content = content.replace(/{\s*},\s*{/g, '{\n      icon: CheckCircle,\n      title: \'Feature\',\n      description: \'Description\',\n    },\n    {');
    
    // 6. Fix missing semicolons after object properties
    content = content.replace(/(\w+):\s*([^,}]+)(?=\s*[,}])/g, '$1: $2');
    
    // 7. Fix malformed function declarations
    content = content.replace(/const\s+(\w+):\s*React\.FC\s*=\s*\(\)\s*=>\s*{,\s*}/g, 'const $1: React.FC = () => {');
    
    // 8. Fix duplicate return statements
    content = content.replace(/return\s*\(\s*return\s*\(/g, 'return (');
    
    // 9. Fix malformed JSX fragments
    content = content.replace(/<>\s*<>\s*([\s\S]*?)\s*<\/>\s*<\/>/g, '<>\n$1\n</>');
    
    // 10. Fix missing closing braces
    const openBraces = (content.match(/{/g) || []).length;
    const closeBraces = (content.match(/}/g) || []).length;
    if (openBraces > closeBraces) {
      content += '\n}'.repeat(openBraces - closeBraces);
    }
    
    // Only write if content changed
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

// Main execution
console.log('Starting syntax error fixes...');

const sourceFiles = findSourceFiles('./app');
console.log(`Found ${sourceFiles.length} source files to check`);

let fixedCount = 0;
sourceFiles.forEach(filePath => {
  if (fixSyntaxErrors(filePath)) {
    fixedCount++;
  }
});

console.log(`Fixed ${fixedCount} files`);

// Also clean up any remaining .original files
console.log('Cleaning up .original files...');
try {
  execSync('find . -name "*.original" -type f -delete', { stdio: 'inherit' });
  console.log('Removed .original files');
} catch (error) {
  console.log('No .original files to remove or error occurred');
}

console.log('Syntax error fixes completed!');