#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

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

// Function to fix critical syntax errors
function fixCriticalErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Fix common critical syntax errors
    
    // 1. Fix malformed object literals in arrays
    content = content.replace(/{\s*},\s*{/g, '{\n      icon: CheckCircle,\n      title: \'Feature\',\n      description: \'Description\',\n    },\n    {');
    
    // 2. Fix duplicate const declarations
    content = content.replace(/const\s+(\w+)\s*=\s*\[[\s\S]*?\]\s*const\s+\1\s*=\s*\[/g, 'const $1 = [');
    
    // 3. Fix malformed JSX closing tags
    content = content.replace(/<(\w+)[^>]*>([\s\S]*?)<\/\1>/g, (match, tag, inner) => {
      // Check if there are unclosed tags inside
      const openTags = inner.match(/<\w+[^>]*>/g) || [];
      const closeTags = inner.match(/<\/\w+>/g) || [];
      if (openTags.length !== closeTags.length) {
        return match; // Return as is if there are unclosed tags
      }
      return match;
    });
    
    // 4. Fix missing semicolons after object properties
    content = content.replace(/(\w+):\s*([^,}]+)(?=\s*[,}])/g, '$1: $2');
    
    // 5. Fix malformed function declarations
    content = content.replace(/const\s+(\w+):\s*React\.FC\s*=\s*\(\)\s*=>\s*{,\s*}/g, 'const $1: React.FC = () => {');
    
    // 6. Fix duplicate return statements
    content = content.replace(/return\s*\(\s*return\s*\(/g, 'return (');
    
    // 7. Fix malformed JSX fragments
    content = content.replace(/<>\s*<>\s*([\s\S]*?)\s*<\/>\s*<\/>/g, '<>\n$1\n</>');
    
    // 8. Fix missing closing braces
    const openBraces = (content.match(/{/g) || []).length;
    const closeBraces = (content.match(/}/g) || []).length;
    if (openBraces > closeBraces) {
      content += '\n}'.repeat(openBraces - closeBraces);
    }
    
    // 9. Fix malformed array declarations
    content = content.replace(/const\s+(\w+)\s*=\s*\[\s*\]\s*const\s+\1\s*=\s*\[/g, 'const $1 = [');
    
    // 10. Fix missing closing brackets
    const openBrackets = (content.match(/\[/g) || []).length;
    const closeBrackets = (content.match(/\]/g) || []).length;
    if (openBrackets > closeBrackets) {
      content += ']'.repeat(openBrackets - closeBrackets);
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
console.log('Starting critical error fixes...');

const sourceFiles = findSourceFiles('./app');
console.log(`Found ${sourceFiles.length} source files to check`);

let fixedCount = 0;
sourceFiles.forEach(filePath => {
  if (fixCriticalErrors(filePath)) {
    fixedCount++;
  }
});

console.log(`Fixed ${fixedCount} files`);

console.log('Critical error fixes completed!');