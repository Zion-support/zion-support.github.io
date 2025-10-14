#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
console.log('🔧 Fixing unterminated string literals and syntax errors...');
// Function to recursively find all TypeScript/JavaScript files
function findFiles(dir, extensions = ['.ts', '.tsx', '.js', '.jsx']) {
  let files = [];
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules' && item !== 'dist') {
      files = files.concat(findFiles(fullPath, extensions));
    } else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) { files.push(fullPath); }
  }
  
  return files;
}

// Function to fix unterminated string literals
function fixStringLiterals(content) {
  let fixed = content;
  // Fix unterminated single quotes at end of lines
  fixed = fixed.replace(/';\s*$/gm, "';");
  fixed = fixed.replace(/';\s*$/gm, "';");
  // Fix unterminated double quotes at end of lines
  fixed = fixed.replace(/";\s*$/gm, '";');
  fixed = fixed.replace(/";\s*$/gm, '";');
  // Fix malformed import statements
  fixed = fixed.replace(/import\s+React\s+from\s+['"]react['"];\s*['"]use client['"];?/g, 
    "import React from 'react';\n'use client';");
  // Fix duplicate React imports
  fixed = fixed.replace(/import\s+React\s+from\s+['"]react['"];\s*import\s+React\s+from\s+['"]react['"];/g, 
    "import React from 'react';");
  // Fix malformed JSX attributes with unterminated strings
  fixed = fixed.replace(/(\w+):\s*['"]([^'"]*?)['"]\s*,/g, '$1: "$2",');
  // Fix unterminated object properties
  fixed = fixed.replace(/(\w+):\s*['"]([^'"]*?)['"]\s*}/g, '$1: "$2" }');
  // Fix semicolon issues in JSX
  fixed = fixed.replace(/;\s*$/gm, ';');
  // Fix malformed function declarations
  fixed = fixed.replace(/const\s+(\w+):\s*React\.FC\s*=\s*\(\s*\)\s*=>\s*{/g, 'const $1: React.FC = () => {');
  // Fix broken JSX closing tags
  fixed = fixed.replace(/<\s*\/\s*div\s*>\s*;\s*$/gm, '</div>');
  // Fix malformed export statements
  fixed = fixed.replace(/export\s+default\s+function\s+(\w+)\s*\(\s*\)\s*{\s*return\s*\(/g, 
    'export default function $1() {\n  return (');
  // Fix specific patterns that cause parsing errors
  fixed = fixed.replace(/import\s+{\s*([^}]+)\s*}\s+from\s+['"]lucide-react['"];\s*$/gm, 
    (match, imports) => {
      const cleanImports = imports.replace(/[^a-zA-Z0-9,\s]/g, '').trim();
      return `import { ${cleanImports} } from 'lucide-react';`;
    });
  // Fix unterminated string literals in JSX
  fixed = fixed.replace(/title:\s*['"]([^'"]*?)['"]\s*,/g, 'title: "$1",');
  fixed = fixed.replace(/description:\s*['"]([^'"]*?)['"]\s*,/g, 'description: "$1",');
  // Fix malformed object literals
  fixed = fixed.replace(/(\w+):\s*['"]([^'"]*?)['"]\s*}/g, '$1: "$2" }');
  // Fix broken JSX expressions
  fixed = fixed.replace(/{\s*([^}]*?)\s*}\s*$/gm, (match, content) => {
    if (content.trim() && !content.includes('{') && !content.includes('}')) {
      return `{ ${content.trim()} }`;
    }
    return match;
  });
  return fixed;
}

// Function to fix specific file patterns
function fixSpecificPatterns(filePath, content) {
  let fixed = content;
  // Fix App.tsx specific issues
  if (filePath.includes('App.tsx')) {
    // Fix malformed JSX
    fixed = fixed.replace(/<Route\s+path="[^"]*"\s+element={<[^>]*>}\s*\/>/g, 
      (match) => {
        const pathMatch = match.match(/path="([^"]*)"/);
        const elementMatch = match.match(/element={<([^>]*)>}/);
        if (pathMatch && elementMatch) {
          return `<Route path="${pathMatch[1]}" element={<${elementMatch[1]} />} />`;
        }
        return match;
      });
  }
  
  // Fix page.tsx files
  if (filePath.includes('/page.tsx')) {
    // Fix common page structure issues
    fixed = fixed.replace(/export\s+default\s+function\s+Page\s*\(\s*\)\s*{\s*return\s*\(/g, 
      'export default function Page() {\n  return (');
    // Fix Helmet usage
    fixed = fixed.replace(/<Helmet>\s*<title>([^<]*)<\/title>\s*<meta[^>]*\/>\s*<\/Helmet>/g, 
      '<Helmet>\n        <title>$1</title>\n        <meta name="description" content="Professional services by Zion Tech Group." />\n      </Helmet>');
  }
  
  // Fix component files
  if (filePath.includes('/components/')) {
    // Fix malformed component exports
    fixed = fixed.replace(/export\s+default\s+function\s+(\w+)\s*\(\s*\)\s*{\s*return\s*\(/g, 
      'export default function $1() {\n  return (');
    // Fix malformed JSX
    fixed = fixed.replace(/<\s*\/\s*div\s*>\s*;\s*$/gm, '</div>');
  }
  
  return fixed;
}

// Main function to process all files
function processFiles() {
  const files = findFiles('/workspace');
  let processedCount = 0;
  let errorCount = 0;
  console.log(`Found ${files.length} files to process...`);
  for (const filePath of files) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      let fixed = content;
      // Apply fixes
      fixed = fixStringLiterals(fixed);
      fixed = fixSpecificPatterns(filePath, fixed);
      // Only write if content changed
      if (fixed !== content) {
        fs.writeFileSync(filePath, fixed, 'utf8');
        processedCount++;
        console.log(`✅ Fixed: ${filePath}`);
      }
    } catch (error) {
      console.error(`❌ Error processing ${filePath}:`, error.message);
      errorCount++;
    }
  }
  
  console.log(`\n📊 Summary:`);
  console.log(`   Files processed: ${processedCount}`);
  console.log(`   Errors encountered: ${errorCount}`);
  console.log(`   Total files checked: ${files.length}`);
}

// Run the fix
processFiles();
console.log('\n🎉 String literal fixing completed!');