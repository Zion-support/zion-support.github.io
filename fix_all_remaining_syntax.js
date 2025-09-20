#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to fix all remaining syntax errors
function fixAllSyntaxErrors(content) {
  let fixed = content;
  
<<<<<<< HEAD
  // Fix interface definitions
  content = content.replace(/interface (\w+) extends ([^{]+) {,/g, 'interface $1 extends $2 {');
  content = content.replace(/(\w+):\s*([^;]+);}/g, '$1: $2;\n}');
  content = content.replace(/(\w+):\s*([^;]+);}/g, '$1: $2;\n}');
  
  // Fix function definitions
  content = content.replace(/export function (\w+)\(\{ ([^}]+) \}: (\w+)\) {,/g, 'export function $1({ $2 }: $3) {');
  content = content.replace(/(\w+)\s*=\s*([^,;]+),;/g, '$1 = $2;');
  
  // Fix JSX syntax
  content = content.replace(/<div className='([^']+)'>;/g, '<div className=\'$1\'>');
  content = content.replace(/<\/div>;/g, '</div>');
  
  // Fix React fragments
  content = content.replace(/<>\s*$/gm, '<>');
  content = content.replace(/^\s*<\/>/gm, '</>');
  
  // Fix missing closing braces for interfaces
  content = content.replace(/interface\s+\w+\s*{([^}]+)$/gm, (match, body) => {
    if (!body.includes('}')) {
      return match + '\n}';
    }
    return match;
=======
  // Fix extra commas in imports
  fixed = fixed.replace(/import\s+[^;]+,\s*;/g, (match) => {
    return match.replace(/,\s*;/, ';');
>>>>>>> 1204603bb86c207deec1187a655ed9994fda37b5
  });
  
  // Fix missing semicolons in imports
  fixed = fixed.replace(/import\s+[^;]+(?<!;)$/gm, (match) => {
    if (!match.trim().endsWith(';')) {
      return match + ';';
    }
    return match;
  });
  
  // Fix JSX fragments
  fixed = fixed.replace(/<>\s*$/gm, '<>');
  fixed = fixed.replace(/^\s*<\/>/gm, '</>');
  
  // Fix missing return statements
  fixed = fixed.replace(/export default function\s+(\w+)\s*\([^)]*\)\s*{\s*$/gm, 'export default function $1() {\n  return (');
  
  // Fix missing closing braces
  fixed = fixed.replace(/(\w+)\s*{\s*$/gm, '$1 {\n  ');
  
  // Fix extra commas in object literals
  fixed = fixed.replace(/,(\s*[}\]])/g, '$1');
  
  // Fix missing quotes in JSX attributes
  fixed = fixed.replace(/className=\s*{([^}]+)}/g, 'className={$1}');
  
  // Fix missing semicolons after variable declarations
  fixed = fixed.replace(/(const|let|var)\s+\w+\s*=\s*[^;]+(?<!;)$/gm, (match) => {
    if (!match.trim().endsWith(';')) {
      return match + ';';
    }
    return match;
  });
  
  // Fix duplicate return statements
  fixed = fixed.replace(/return\s*\(\s*return\s*\(/g, 'return (');
  
  // Fix missing return statements in function components
  fixed = fixed.replace(/export default function\s+(\w+)\s*\([^)]*\)\s*{\s*$/gm, 'export default function $1() {\n  return (');
  
  // Fix JSX fragments
  fixed = fixed.replace(/<>\s*$/gm, '<>');
  fixed = fixed.replace(/^\s*<\/>/gm, '</>');
  
  // Fix missing semicolons
  fixed = fixed.replace(/(\w+)\s*{\s*$/gm, '$1 {\n  ');
  
  return fixed;
}

// Function to process a file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixAllSyntaxErrors(content);
    
    if (content !== fixed) {
      fs.writeFileSync(filePath, fixed, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and process files
function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      fixedCount += processDirectory(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js')) {
      if (processFile(filePath)) {
        fixedCount++;
      }
    }
  }
  
  return fixedCount;
}

// Main execution
console.log('Starting comprehensive syntax error fixes...');
const fixedCount = processDirectory('./src');
console.log(`Fixed ${fixedCount} files`);