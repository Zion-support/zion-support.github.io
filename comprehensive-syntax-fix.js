#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Function to fix specific syntax patterns
function fixSpecificPatterns(content) {
  let modified = false;

  // Fix malformed imports with missing commas
  content = content.replace(/import\s+{\s*([^}]+)\s*}\s+from\s+['"][^'"]+['"]/g, (match, imports) => {
    if (imports.includes(' ') && !imports.includes(,)) {
      modified = true;
      const fixedImports = imports.split(/\s+/).join(,);
      return match.replace(imports, fixedImports);
    }
    return match;
  });

  // Fix missing semicolons after imports
  content = content.replace(/import\s+{[^}]+}\s+from\s+['"][^'"]+['"]\s*(?!;)/g, (match) => {
    if (!match.endsWith()) {
      modified = true;
      return match + ;
    }
    return match;
  });

  // Fix broken export statements
  content = content.replace(/export\s+{\s*function\s*}\s*export\s+default\s+function/g, 'export default function');
  
  // Fix malformed function declarations
  content = content.replace(/export\s+default\s+function\s+(\w+)\(\.\.\.args:\s*unknown\[\]\):\s*unknown/g, 'export default function $1()');
  
  // Fix broken JSX syntax - missing closing tags
  content = content.replace(/<(\w+)([^>]*)>(?!.*<\/\1>)(?!.*\/>)/g, (match, tagName, attributes) => {
    // Only fix if it's not a self-closing tag and doesn't have a closing tag
    if (!match.endsWith('/>') && !content.includes(`</${tagName}>`)) {
      modified = true;
      return match + `</${tagName}>`;
    }
    return match;
  });

  // Fix broken object literals and arrays
  content = content.replace(/\[\s*([^\]]*)\s*\]/g, (match, arrayContent) => {
    if (arrayContent && arrayContent.includes("'") && !arrayContent.includes(,)) {
      const items = arrayContent.split("'").filter(item => item.trim()).map(item => `'${item.trim()}'`);
      if (items.length > 1) {
        modified = true;
        return `[${items.join(,)}]`;
      }
    }
    return match;
  });

  // Fix malformed string literals
  content = content.replace(/['"]([^'"]*)\s*['"]\s*['"]/g, (match, str) => {
    modified = true;
    return `"${str}"`;
  });

  // Fix broken variable declarations
  content = content.replace(/(const|let|var)\s+(\w+)\s*=\s*([^;]+)(?!;)\s*(?=\n|$)/g, (match, keyword, varName, value) => {
    if (!match.endsWith()) {
      modified = true;
      return `${keyword} ${varName} = ${value};`;
    }
    return match;
  });

  // Fix broken arrow functions
  content = content.replace(/=>\s*\(\s*\)\s*=>/g, '=> () =>');
  
  // Fix malformed JSX attributes
  content = content.replace(/className\s*=\s*['"]([^'"]*)\s*['"]\s*['"]/g, (match, className) => {
    modified = true;
    return `className="${className}"`;
  });

  // Fix broken template literals
  content = content.replace(/`([^`]*)\s*`\s*`/g, (match, content) => {
    modified = true;
    return `\`${content}\``;
  });

  // Fix missing commas in function parameters
  content = content.replace(/\(([^)]*)\s+([^)]*)\)/g, (match, param1, param2) => {
    if (param1.trim() && param2.trim() && !param1.includes(,) && !param2.includes(,)) {
      modified = true;
      return `(${param1.trim()}, ${param2.trim()})`;
    }
    return match;
  });

  // Fix broken return statements
  content = content.replace(/return\s*\(\s*\(\s*\)\s*=>/g, 'return () =>');
  
  // Fix malformed JSX expressions
  content = content.replace(/\{\s*([^}]*)\s*\}\s*\}/g, (match, content) => {
    if (content.includes('{') && !content.includes('}')) {
      modified = true;
      return match.replace('}},}');
    }
    return match;
  });

  return { content, modified };
}

// Function to fix syntax errors in a file
function fixSyntaxErrors(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const { content: fixedContent, modified } = fixSpecificPatterns(content);
    
    if (modified) {
      fs.writeFileSync(filePath, fixedContent, 'utf8');
      console.log(`Fixed syntax errors in: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all TypeScript and JavaScript files
function findFiles(dir, extensions = ['.ts,.tsx,.js,.jsx']) {
  let files = [];
  
  try {
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        files = files.concat(findFiles(fullPath, extensions));
      } else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) {
        files.push(fullPath);
      }
    }
  } catch (error) {
    console.error(`Error reading directory ${dir}:`, error.message);
  }
  
  return files;
}

// Main execution
function main() {
  console.log('Starting comprehensive syntax error fixes...');
  
  const srcDir = path.join(process.cwd(), 'src');
  const files = findFiles(srcDir);
  
  let fixedCount = 0;
  const totalCount = files.length;
  
  console.log(`Found ${totalCount} files to check...`);
  
  for (const file of files) {
    if (fixSyntaxErrors(file)) {
      fixedCount++;
    }
  }
  
  console.log(`\nFixed syntax errors in ${fixedCount} out of ${totalCount} files.`);
  
  // Run linting to check remaining errors
  console.log('\nRunning linting to check remaining errors...');
  try {
    execSync('npm run lint 2>&1 | head -100', { stdio: 'inherit' });
  } catch (error) {
    console.log('Linting completed with some remaining errors.');
  }
}

// Run if this is the main module
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { fixSyntaxErrors, findFiles };