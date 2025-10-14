#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Function to fix common syntax errors in a file
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix malformed object properties with trailing commas and quotes
    content = content.replace(/(\w+):\s*([^,}]+),'/g, '$1: $2,');
    content = content.replace(/(\w+):\s*'([^']+)',/g, '$1: \'$2\',');
    content = content.replace(/(\w+):\s*"([^"]+)",/g, '$1: "$2",');
    
    // Fix unterminated string literals
    content = content.replace(/(\w+):\s*'([^']*)$/gm, '$1: \'$2\'');
    content = content.replace(/(\w+):\s*"([^"]*)$/gm, '$1: "$2"');
    
    // Fix malformed JSX attributes
    content = content.replace(/className="([^"]*)$/gm, 'className="$1"');
    content = content.replace(/title="([^"]*)$/gm, 'title="$1"');
    content = content.replace(/description="([^"]*)$/gm, 'description="$1"');
    
    // Fix missing closing tags
    content = content.replace(/<(\w+)([^>]*)>\s*$/gm, '<$1$2></$1>');
    
    // Fix malformed imports
    content = content.replace(/import\s+{\s*([^}]+)\s*}\s*from\s*'([^']+)';/g, (match, imports, module) => {
      const cleanImports = imports.replace(/,\s*$/, '').trim();
      return `import { ${cleanImports} } from '${module}';`;
    });
    
    // Fix standalone semicolons
    content = content.replace(/^;\s*$/gm, '');
    
    // Fix malformed return statements
    content = content.replace(/return\s*\(\s*"$/gm, 'return (');
    content = content.replace(/return\s*\(\s*'$/gm, 'return (');
    
    // Fix missing closing parentheses in JSX
    content = content.replace(/<(\w+)([^>]*)>\s*$/gm, '<$1$2></$1>');
    
    // Fix malformed object arrays
    content = content.replace(/\[\s*{\s*$/gm, '[');
    content = content.replace(/}\s*,\s*{\s*$/gm, '}, {');
    content = content.replace(/}\s*,\s*$/gm, '}');
    
    // Fix missing closing brackets
    content = content.replace(/\[\s*$/gm, '[]');
    content = content.replace(/{\s*$/gm, '{}');
    
    // Fix malformed JSX fragments
    content = content.replace(/<>\s*$/gm, '<></>');
    content = content.replace(/<>\s*{\s*$/gm, '<>{');
    
    // Fix missing export statements
    if (content.includes('const ') && !content.includes('export default') && !content.includes('export const')) {
      const componentMatch = content.match(/const\s+(\w+)\s*=/);
      if (componentMatch) {
        content = content.replace(/const\s+(\w+)\s*=/, 'const $1 =');
        content += `\n\nexport default ${componentMatch[1]};`;
        modified = true;
      }
    }
    
    // Fix malformed function declarations
    content = content.replace(/const\s+(\w+)\s*=\s*\(\s*\)\s*=>\s*{\s*$/gm, 'const $1 = () => {');
    
    // Fix missing closing braces
    const openBraces = (content.match(/{/g) || []).length;
    const closeBraces = (content.match(/}/g) || []).length;
    if (openBraces > closeBraces) {
      content += '}'.repeat(openBraces - closeBraces);
      modified = true;
    }
    
    // Fix missing closing parentheses
    const openParens = (content.match(/\(/g) || []).length;
    const closeParens = (content.match(/\)/g) || []).length;
    if (openParens > closeParens) {
      content += ')'.repeat(openParens - closeParens);
      modified = true;
    }
    
    if (content !== fs.readFileSync(filePath, 'utf8')) {
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

// Function to recursively find and fix all TypeScript/JavaScript files
function fixAllFiles(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      fixedCount += fixAllFiles(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js')) {
      if (fixFile(filePath)) {
        fixedCount++;
      }
    }
  }
  
  return fixedCount;
}

// Main execution
console.log('Starting syntax error fixes...');
const fixedCount = fixAllFiles('./app');
console.log(`Fixed ${fixedCount} files.`);

// Also fix root level files
const rootFiles = ['App.tsx', 'App_minimal.tsx', 'App_test.tsx', 'EnhancedFooter.tsx', 'EnhancedHeader.tsx', 'SidebarNavigation.tsx'];
let rootFixedCount = 0;

for (const file of rootFiles) {
  if (fs.existsSync(file)) {
    if (fixFile(file)) {
      rootFixedCount++;
    }
  }
}

console.log(`Fixed ${rootFixedCount} root files.`);
console.log(`Total files fixed: ${fixedCount + rootFixedCount}`);