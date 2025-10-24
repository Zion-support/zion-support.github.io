#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🔧 Starting comprehensive error fix...');

// Function to find all TypeScript/JavaScript files
function findFiles(dir, extensions = ['.tsx', '.ts', '.js', '.jsx']) {
  let files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && !item.includes('node_modules')) {
      files = files.concat(findFiles(fullPath, extensions));
    } else if (extensions.some(ext => item.endsWith(ext))) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Function to fix merge conflict markers
function fixMergeConflicts(content) {
  // Remove merge conflict markers
// Merge conflict resolved - keeping HEAD version
  content = content.replace(/^=======[\s\S]*?>>>>>>> [^\n]+$/gm, '');
  content = content.replace(/^<<<<<<< [^\n]+[\s\S]*?=======$/gm, '');
  
  return content;
}

// Function to fix common JSX syntax errors
function fixJSXSyntax(content) {
  // Fix missing closing tags
  content = content.replace(/<div([^>]*)>\s*$/gm, '<div$1></div>');
  content = content.replace(/<section([^>]*)>\s*$/gm, '<section$1></section>');
  content = content.replace(/<Link([^>]*)>\s*$/gm, '<Link$1></Link>');
  
  // Fix missing commas in object literals
  content = content.replace(/(\w+):\s*([^,\n}]+)\n(\s*[a-zA-Z_$][a-zA-Z0-9_$]*\s*:)/g, '$1: $2,\n$3');
  
  // Fix missing semicolons
  content = content.replace(/([^;}])\n(\s*[a-zA-Z_$][a-zA-Z0-9_$]*\s*[=:])/g, '$1;\n$2');
  
  // Fix destructuring syntax
  content = content.replace(/const\s*{\s*([^}]+)\s*}\s*=\s*([^;]+);/g, 'const { $1 } = $2;');
  
  // Fix empty interfaces
  content = content.replace(/interface\s+(\w+)\s*{\s*}\s*/g, 'interface $1 {\n  [key: string]: any;\n}');
  
  return content;
}

// Function to fix import/export issues
function fixImports(content) {
  // Fix missing semicolons in imports
  content = content.replace(/import\s+([^;]+)\s*$/gm, 'import $1;');
  content = content.replace(/export\s+([^;]+)\s*$/gm, 'export $1;');
  
  // Fix relative imports
  content = content.replace(/from\s+['"]@\/components\/([^'"]+)['"]/g, "from '@/components/$1'");
  
  return content;
}

// Function to fix TypeScript syntax errors
function fixTypeScriptSyntax(content) {
  // Fix property assignment syntax
  content = content.replace(/(\w+)\s*:\s*([^,;}\n]+)\s*$/gm, '$1: $2,');
  
  // Fix function parameter syntax
  content = content.replace(/function\s+(\w+)\s*\(([^)]*)\)\s*{/g, 'function $1($2) {');
  
  // Fix arrow function syntax
  content = content.replace(/\(([^)]*)\)\s*=>\s*{/g, '($1) => {');
  
  return content;
}

// Main function to process files
function processFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Apply fixes
    content = fixMergeConflicts(content);
    content = fixJSXSyntax(content);
    content = fixImports(content);
    content = fixTypeScriptSyntax(content);
    
    // Only write if content changed
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Find all files to process
const appDir = path.join(__dirname, 'app');
const files = findFiles(appDir);

console.log(`📁 Found ${files.length} files to process...`);

let fixedCount = 0;
for (const file of files) {
  if (processFile(file)) {
    fixedCount++;
  }
}

console.log(`🎉 Fixed ${fixedCount} files`);

// Try to build after fixes
console.log('🔨 Attempting build...');
try {
  execSync('npm run build', { stdio: 'inherit' });
  console.log('✅ Build successful!');
} catch (error) {
  console.log('⚠️ Build still has issues, continuing with fixes...');
}