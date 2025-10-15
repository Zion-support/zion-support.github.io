#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to fix syntax errors in a file
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Fix common syntax errors
    // Remove extra semicolons and quotes from import statements
    content = content.replace(/import\s+([^;]+);';/g, 'import $1;');
    content = content.replace(/from\s+'([^']+)';';/g, "from '$1';");
    
    // Fix JSX syntax errors
    content = content.replace(/<([^>]+)>';/g, '<$1>');
    content = content.replace(/className="([^"]+)";/g, 'className="$1"');
    content = content.replace(/href="([^"]+)";/g, 'href="$1"');
    content = content.replace(/content="([^"]+)";/g, 'content="$1"');
    
    // Fix object syntax errors
    content = content.replace(/(\w+),;/g, '$1,');
    content = content.replace(/(\w+):\s*([^,}]+),;/g, '$1: $2,');
    
    // Fix string literal errors
    content = content.replace(/(\w+):\s*"([^"]+)";/g, '$1: "$2"');
    content = content.replace(/(\w+):\s*'([^']+)';/g, "$1: '$2'");
    
    // Fix console.log syntax
    content = content.replace(/console\.log\('([^']+)",\s*([^)]+)\);"/g, "console.log('$1', $2);");
    content = content.replace(/console\.error\('([^']+)",\s*([^)]+)\);"/g, "console.error('$1', $2);");
    
    // Fix JSON.stringify syntax
    content = content.replace(/JSON\.stringify\(([^,]+),\s*null,\s*2\);"/g, 'JSON.stringify($1, null, 2);');
    
    // Fix function syntax
    content = content.replace(/export\s+default\s+function\s+([^(]+)\([^)]*\)\s*{';/g, 'export default function $1() {');
    content = content.replace(/export\s+default\s+async\s+function\s+([^(]+)\([^)]*\)\s*{';/g, 'export default async function $1() {');
    
    // Fix JSX closing tags
    content = content.replace(/<\/div>;"/g, '</div>');
    content = content.replace(/<\/h1>;"/g, '</h1>');
    content = content.replace(/<\/h2>;"/g, '</h2>');
    content = content.replace(/<\/h3>;"/g, '</h3>');
    content = content.replace(/<\/p>;"/g, '</p>');
    content = content.replace(/<\/button>;"/g, '</button>');
    content = content.replace(/<\/Link>;"/g, '</Link>');
    content = content.replace(/<\/Helmet>;"/g, '</Helmet>');
    content = content.replace(/<\/>;"/g, '</>');
    
    // Fix array syntax
    content = content.replace(/\[\s*;"/g, '[');
    content = content.replace(/\]\s*;"/g, ']');
    
    // Fix object syntax
    content = content.replace(/{\s*;"/g, '{');
    content = content.replace(/}\s*;"/g, '}');
    
    // Fix return statements
    content = content.replace(/return\s*\(\s*<>\s*;"/g, 'return (\n    <>');
    content = content.replace(/\)\s*;\s*};"/g, ');\n};');
    
    // Fix export statements
    content = content.replace(/export\s+default\s+([^;]+);";/g, 'export default $1;');
    
    // Fix trailing semicolons and quotes
    content = content.replace(/;";/g, ';');
    content = content.replace(/;'";/g, ';');
    content = content.replace(/;'";/g, ';');
    
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

// Function to recursively find and fix files
function fixDirectory(dirPath) {
  const items = fs.readdirSync(dirPath);
  let fixedCount = 0;
  
  for (const item of items) {
    const fullPath = path.join(dirPath, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      // Skip node_modules and other directories we don't want to process
      if (!['node_modules', '.git', 'dist', '.next'].includes(item)) {
        fixedCount += fixDirectory(fullPath);
      }
    } else if (stat.isFile() && /\.(tsx?|js)$/.test(item)) {
      if (fixFile(fullPath)) {
        fixedCount++;
      }
    }
  }
  
  return fixedCount;
}

// Main execution
console.log('Starting syntax error fixes...');
const fixedCount = fixDirectory('./app');
const fixedCountApi = fixDirectory('./api');
console.log(`Fixed ${fixedCount + fixedCountApi} files`);
console.log('Syntax error fixes completed!');