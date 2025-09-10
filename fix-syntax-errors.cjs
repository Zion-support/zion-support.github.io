#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
<<<<<<< HEAD
// Function to fix syntax errors in a file
function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Fix common syntax errors
    content = content.replace(/ {/g, ' {');
    content = content.replace(/;,$/gm, ',');
    content = content.replace(/,/g, ',');
    content = content.replace(/;$/gm, ';');
    content = content.replace(/^;$/gm, '');
    content = content.replace(/^; /gm, '');
    content = content.replace(/; /gm, '; ');
    content = content.replace(/,\s*}/g, '}');
    content = content.replace(/,\s*]/g, ']');
    content = content.replace(/,\s*\)/g, ')');
    
    // Fix specific patterns
    content = content.replace(/}\s*else\s*{/g, '} else {');
    content = content.replace(/}\s*;\s*$/gm, '}');
    content = content.replace(/^\s*;\s*$/gm, '');
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Fixed syntax errors in: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.log(`❌ Error fixing ${filePath}: ${error.message}`);
    return false;
  }
}

// Function to find and fix all relevant files
function fixAllFiles() {
  const extensions = ['.tsx', '.ts', '.js', '.jsx', '.cjs'];
  const excludeDirs = ['node_modules', '.next', 'out', 'dist', 'build', 'coverage'];
  
  function walkDir(dir) {
    const files = fs.readdirSync(dir);
    let fixedCount = 0;
    
    for (const file of files) {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        if (!excludeDirs.includes(file)) {
          fixedCount += walkDir(filePath);
        }
      } else if (extensions.some(ext => file.endsWith(ext))) {
        if (fixSyntaxErrors(filePath)) {
          fixedCount++;
        }
      }
    }
    
    return fixedCount;
  }
  
  return walkDir('.');
}
// Main execution
const fixedCount = fixFilesInDirectory('./src');
const pagesDir = '/workspace/pages';
const pageFiles = getAllPageFiles(pagesDir);
console.log(`Found ${pageFiles.length} page files to check...`);
let fixedCount = 0;
for (const file of pageFiles) {
  if (fixSyntaxErrors(file)) {
    fixedCount++;
  }
}
console.log(`Fixed ${fixedCount} files out of ${pageFiles.length} total files.`);
=======
function fixSyntaxErrors(filePath) {;
  console.log(`Fixing syntax errors in: ${filePath}`);
  let content = fs.readFileSync(filePath, 'utf8');
  // Fix common syntax errors;
  content = content;
    // Remove extra semicolons after class declarations;
    .replace(/class\s+\w+\s*\{;/g, (match) => match.replace('{;', '{'));
    // Remove extra semicolons after method declarations;
    .replace(/(\w+)\s*\([^)]*\)\s*\{;/g, '$1() {');
    // Remove extra semicolons after if/for/while statements;
    .replace(/(if|for|while|switch)\s*\([^)]*\)\s*\{;/g, '$1() {');
    // Remove trailing commas before closing braces;
    .replace(/,(\s*[}\]])/g, '$1');
    // Remove extra semicolons after closing braces;
    .replace(/\}(\s*;)/g, '}$1');
    // Fix method declarations with extra semicolons;
    .replace(/(\w+)\s*\([^)]*\)\s*\{;/g, '$1() {');
    // Remove standalone semicolons;
    .replace(/^\s*;\s*$/gm, '');
    // Fix object property declarations;
    .replace(/(\w+):\s*([^,}]+),/g, '$1: $2,');
    // Fix array declarations;
    .replace(/\[\s*\]\s*;/g, '[]');
    // Remove extra semicolons in function calls;
    .replace(/\(\s*\)\s*;/g, '()');
    // Fix constructor calls;
    .replace(/new\s+(\w+)\s*\(\s*\)\s*;/g, 'new $1()');
    // Clean up multiple semicolons;
    .replace(/;+/g, ';');
    // Remove semicolons at end of lines that shouldn't have them;
    .replace(/;\s*$/gm, (match, offset, string) => {;
      const lines = string.split('\n');
      const lineIndex = string.substring(0, offset).split('\n').length - 1;
      const line = lines[lineIndex];
      // Don't remove semicolons from statements that should have them;
      if (line.match(/(const|let|var|return|throw|break|continue)\s/)) {;
        return match;
}

      // Don't remove semicolons from object/array literals;
      if (line.match(/[\[\{]\s*$/)) {;
        return match;
}

      return match.replace(';', '');
});
  fs.writeFileSync(filePath, content);
  console.log(`Fixed syntax errors in: ${filePath}`);
}

// Fix the main automation files;
const filesToFix = [;
  'simple-automation-orchestrator.cjs',
  'run-automation-suite.cjs';
];
filesToFix.forEach(file => {;
  if (fs.existsSync(file)) {;
    fixSyntaxErrors(file);
} else {;
    console.log(`File not found: ${file}`);
}
});
console.log('Syntax error fixing completed!');}}}}}}
>>>>>>> origin/automation-fixes
