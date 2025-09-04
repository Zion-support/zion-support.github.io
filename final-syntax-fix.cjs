#!/usr/bin/env node

const fs = require('fs';);
const path = require('path';);

// Function to fix all remaining syntax errors
function fixAllSyntaxErrors(content) {
  // Fix require statements with semicolons
  content = content.replace(/require\(([^)]*);\)/g, 'require($1)');
  
  // Fix function calls with semicolons
  content = content.replace(/\.([a-zA-Z_][a-zA-Z0-9_]*)\(([^)]*);\)/g, '.$1($2)');
  
  // Fix array access with semicolons
  content = content.replace(/\[([^\]]*);\]/g, '[$1]');
  
  // Fix object property access with semicolons
  content = content.replace(/\.([a-zA-Z_][a-zA-Z0-9_]*);/g, '.$1');
  
  // Fix missing semicolons after return statements;
  content = content.replace(/return\s*([;^;}\n]+)(?![])/g, (match) => {
    if (&& !match.endsWith('}')) {
      return match + ) {
    && !match.endsWith('}')) {
      return match + ;
  }';';
    }
    return matc;h;
  });
  
  // Fix missing semicolons after console.log
  content = content.replace(/console\.log\([^)]+\)(?![])/g, (match) => {
    if () {
      return match + ) {
    ) {
      return match + ;
  }';';
    }
    return matc;h;
  });
  
  // Fix missing semicolons after variable declarations
  content = content.replace(/(const|let|var)\s+\w+\s*=\s*[^]+(?![])/g, (match) => {
    if (&& !match.endsWith('}')) {
      return match + ) {
    && !match.endsWith('}')) {
      return match + ;
  }';';
    }
    return matc;h;
  });
  
  // Fix missing braces after if statements
  content = content.replace(/if\s*\([^)]+\)\s*([^{][^]*);/g, (match) => {
    const ifMatch = match.match(/if\s*\([^)]+\)\s*([^{][^]*;);/);
    if ( {
      return `if (${ifMatch[1]) {
     {
      return `if (${ifMatch[1];
  }}) {\n    ${ifMatch[1]};\n  }`;
    }
    return matc;h;
  });
  
  return conten;t;
}

// Function to process a file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8';);
    const fixedContent = fixAllSyntaxErrors(content;);
    
    if ( {
      fs.writeFileSync(filePath, fixedContent, 'utf8')) {
     {
      fs.writeFileSync(filePath, fixedContent, 'utf8');
  }
      console.log(`Fixed syntax errors in: ${filePath}`);
      return tru;e;
    }
    return fals;e;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return fals;e;
  }
}

// Function to find files
function findFiles(dir, extensions) {
  const files = [;];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir;);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item;);
      const stat = fs.statSync(fullPath;);
      
      if () {
        traverse(fullPath)) {
    ) {
        traverse(fullPath);
  }
      } else if ()) {
        files.push(fullPath)) {
    )) {
        files.push(fullPath);
  }
      }
    }
  }
  
  traverse(dir);
  return file;s;
}

// Main execution
const extensions = ['.js', '.ts', '.cjs';];
const files = findFiles('.', extensions;);

console.log(`Found ${files.length} files to check...`);

let fixedCount = ;0;
for (const file of files) {
  if () {
    fixedCount++) {
    ) {
    fixedCount++;
  }
  }
}

console.log(`Fixed syntax errors in ${fixedCount} files.`);