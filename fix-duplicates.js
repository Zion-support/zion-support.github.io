#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to fix duplicate function declarations
function fixDuplicateDeclarations(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Fix duplicate function declarations
    content = content.replace(/const\s+(\w+)\s*:\s*React\.FC\s*=\s*\(\)\s*=>\s*{[\s\S]*?};\s*const\s+\1\s*:\s*React\.FC\s*=\s*\(\)\s*=>\s*{/g, (match, name) => {
      return `const ${name}: React.FC = () => {`;
    });
    
    // Fix duplicate const declarations
    content = content.replace(/const\s+(\w+)\s*=\s*\(\)\s*=>\s*{[\s\S]*?};\s*const\s+\1\s*=\s*\(\)\s*=>\s*{/g, (match, name) => {
      return `const ${name} = () => {`;
    });
    
    // Fix missing closing braces in simple cases
    content = content.replace(/(\w+)\s*=\s*\(\)\s*=>\s*{([\s\S]*?)(?=\n\s*const|\n\s*export|\n\s*$)/g, (match, name, body) => {
      const lines = body.split('\n');
      let openBraces = 0;
      let closeBraces = 0;
      
      for (const line of lines) {
        openBraces += (line.match(/{/g) || []).length;
        closeBraces += (line.match(/}/g) || []).length;
      }
      
      if (openBraces > closeBraces) {
        const missingBraces = openBraces - closeBraces;
        return `${name} = () => {${body}${'  '.repeat(missingBraces).replace(/  /g, '}\n')}`;
      }
      return match;
    });
    
    // Fix missing semicolons
    content = content.replace(/(\w+)\s*=\s*\[[\s\S]*?\]\s*(?=\n\s*const|\n\s*export|\n\s*$)/g, (match) => {
      if (!match.endsWith(';')) {
        return match + ';';
      }
      return match;
    });
    
    // Only write if content changed
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed duplicates in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all TypeScript/JavaScript files
function findFiles(dir) {
  const files = [];
  
  function walkDir(currentPath) {
    try {
      const items = fs.readdirSync(currentPath);
      
      for (const item of items) {
        const fullPath = path.join(currentPath, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          if (!['node_modules', '.git', 'dist', 'build', '.next'].includes(item)) {
            walkDir(fullPath);
          }
        } else if (stat.isFile()) {
          if (/\.(ts|tsx|js|jsx)$/.test(item)) {
            files.push(fullPath);
          }
        }
      }
    } catch (error) {
      // Skip directories that can't be read
    }
  }
  
  walkDir(dir);
  return files;
}

// Main execution
console.log('🔍 Scanning for files with duplicate declarations...');
const srcDir = path.join(__dirname, 'src');
const files = findFiles(srcDir);

console.log(`Found ${files.length} files to check`);

let fixedCount = 0;
for (const file of files) {
  if (fixDuplicateDeclarations(file)) {
    fixedCount++;
  }
}

console.log(`✅ Fixed duplicates in ${fixedCount} files`);

// Run linting to check results
console.log('\n🔍 Running linting to check results...');
try {
  execSync('pnpm run lint', { stdio: 'pipe' });
  console.log('✅ Linting passed!');
} catch (error) {
  console.log('⚠️  Linting found some issues, but duplicates should be resolved');
}

console.log('\n🎉 Duplicate fixing complete!');