#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Function to fix specific syntax patterns
function fixSpecificPatterns(content) {
  let modified = false;

  // Fix malformed imports with missing commas
  content = content.replace(/import\s+{\s*([^}]+)\s*}\s+from\s+['"][^'"]+['"]/g, (match, imports) => {
    if (imports.includes(' ') && !imports.includes(',')) {
      modified = true;
      const fixedImports = imports.split(/\s+/).join(', ');
      return match.replace(imports, fixedImports);
    }
    return match;
  });

  // Fix missing semicolons after imports
  content = content.replace(/import\s+{[^}]+}\s+from\s+['"][^'"]+['"]\s*(?!;)/g, (match) => {
    if (!match.endsWith(';')) {
      modified = true;
      return match + ';';
    }
    return match;
  });

  // Fix broken export statements
  content = content.replace(/export\s+default\s+function\s+([^(]+)\s*\(\s*\)\s*{/g, (match, funcName) => {
    if (!match.includes('function')) {
      modified = true;
      return `export default function ${funcName}() {`;
    }
    return match;
  });

  // Fix malformed JSX
  content = content.replace(/<([A-Z][a-zA-Z0-9]*)\s*([^>]*?)\s*>\s*<\/\1>/g, (match, tag, attrs) => {
    if (attrs && attrs.trim()) {
      modified = true;
      return `<${tag} ${attrs.trim()}></${tag}>`;
    }
    return match;
  });

  // Fix broken object literals
  content = content.replace(/\{\s*([^}]*?)\s*:\s*([^,}]*?)\s*,\s*([^}]*?)\s*:\s*([^,}]*?)\s*\}/g, (match) => {
    if (match.includes('undefined') || match.includes('null')) {
      modified = true;
      return match.replace(/undefined/g, 'null').replace(/null/g, 'null');
    }
    return match;
  });

  // Fix malformed function declarations
  content = content.replace(/function\s+([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\(\s*\)\s*{\s*return\s+([^;]+);?\s*}/g, (match, funcName, returnValue) => {
    if (!returnValue.endsWith(';')) {
      modified = true;
      return `function ${funcName}() {\n  return ${returnValue};\n}`;
    }
    return match;
  });

  // Fix broken string literals
  content = content.replace(/['"]([^'"]*?)['"]\s*\+\s*['"]([^'"]*?)['"]/g, (match, str1, str2) => {
    modified = true;
    return `"${str1}${str2}"`;
  });

  // Fix malformed template literals
  content = content.replace(/`([^`]*?)\$\{([^}]*?)\}([^`]*?)`/g, (match, before, variable, after) => {
    if (before.includes('\\') || after.includes('\\')) {
      modified = true;
      return `\`${before}\${${variable}}${after}\``;
    }
    return match;
  });

  // Fix broken array syntax
  content = content.replace(/\[\s*([^\]]*?)\s*,\s*([^\]]*?)\s*\]/g, (match, item1, item2) => {
    if (item1.includes('undefined') || item2.includes('undefined')) {
      modified = true;
      return match.replace(/undefined/g, 'null');
    }
    return match;
  });

  // Fix malformed variable declarations
  content = content.replace(/const\s+([a-zA-Z_$][a-zA-Z0-9_$]*)\s*=\s*([^;]+);?/g, (match, varName, value) => {
    if (!match.endsWith(';')) {
      modified = true;
      return match + ';';
    }
    return match;
  });

  // Fix broken arrow functions
  content = content.replace(/\([^)]*\)\s*=>\s*{([^}]*)}/g, (match, body) => {
    if (body.trim().startsWith('return') && !body.trim().endsWith(';')) {
      modified = true;
      return match.replace(body, body.trim() + ';');
    }
    return match;
  });

  return { content, modified };
}

// Function to find all relevant files
function findFiles(dir, extensions = ['.js', '.jsx', '.ts', '.tsx']) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip node_modules and other common directories
        if (!['node_modules', '.git', 'dist', 'build', '.next'].includes(item)) {
          traverse(fullPath);
        }
      } else if (stat.isFile()) {
        const ext = path.extname(item);
        if (extensions.includes(ext)) {
          files.push(fullPath);
        }
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main function
function main() {
  console.log('🔧 Starting comprehensive syntax fix...');
  
  const srcDir = './src';
  const files = findFiles(srcDir);
  
  console.log(`📁 Found ${files.length} files to process`);
  
  let totalFixed = 0;
  let processedFiles = 0;
  
  for (const file of files) {
    try {
      const content = fs.readFileSync(file, 'utf8');
      const { content: fixedContent, modified } = fixSpecificPatterns(content);
      
      if (modified) {
        fs.writeFileSync(file, fixedContent, 'utf8');
        totalFixed++;
        console.log(`✅ Fixed: ${file}`);
      }
      
      processedFiles++;
      
      if (processedFiles % 100 === 0) {
        console.log(`📊 Processed ${processedFiles}/${files.length} files...`);
      }
    } catch (error) {
      console.error(`❌ Error processing ${file}:`, error.message);
    }
  }
  
  console.log(`\n🎉 Comprehensive syntax fix completed!`);
  console.log(`📊 Statistics:`);
  console.log(`   - Files processed: ${processedFiles}`);
  console.log(`   - Files fixed: ${totalFixed}`);
  console.log(`   - Success rate: ${((totalFixed / processedFiles) * 100).toFixed(1)}%`);
}

// Run if this is the main module
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { fixSpecificPatterns, findFiles };