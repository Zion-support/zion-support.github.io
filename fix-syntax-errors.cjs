#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function fixSyntaxErrors(filePath) {
  console.log(`Fixing syntax errors in: ${filePath}`);
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Fix common syntax errors
  content = content
    // Remove extra semicolons after class declarations
    .replace(/class\s+\w+\s*\{;/g, (match) => match.replace('{;', '{'))
    // Remove extra semicolons after method declarations
    .replace(/(\w+)\s*\([^)]*\)\s*\{;/g, '$1() {')
    // Remove extra semicolons after if/for/while statements
    .replace(/(if|for|while|switch)\s*\([^)]*\)\s*\{;/g, '$1() {')
    // Remove trailing commas before closing braces
    .replace(/,(\s*[}\]])/g, '$1')
    // Remove extra semicolons after closing braces
    .replace(/\}(\s*;)/g, '}$1')
    // Fix method declarations with extra semicolons
    .replace(/(\w+)\s*\([^)]*\)\s*\{;/g, '$1() {')
    // Remove standalone semicolons
    .replace(/^\s*;\s*$/gm, '')
    // Fix object property declarations
    .replace(/(\w+):\s*([^,}]+),;/g, '$1: $2,')
    // Fix array declarations
    .replace(/\[\s*\]\s*;/g, '[]')
    // Remove extra semicolons in function calls
    .replace(/\(\s*\)\s*;/g, '()')
    // Fix constructor calls
    .replace(/new\s+(\w+)\s*\(\s*\)\s*;/g, 'new $1()')
    // Clean up multiple semicolons
    .replace(/;+/g, ';')
    // Remove semicolons at end of lines that shouldn't have them
    .replace(/;\s*$/gm, (match, offset, string) => {
      const lines = string.split('\n');
      const lineIndex = string.substring(0, offset).split('\n').length - 1;
      const line = lines[lineIndex];
      
      // Don't remove semicolons from statements that should have them
      if (line.match(/(const|let|var|return|throw|break|continue)\s/)) {
        return match;
      }
      
      // Don't remove semicolons from object/array literals
      if (line.match(/[\[\{]\s*$/)) {
        return match;
      }
      
      return match.replace(';', '');
    });

  fs.writeFileSync(filePath, content);
  console.log(`Fixed syntax errors in: ${filePath}`);
}

// Fix the main automation files
const filesToFix = [
  'simple-automation-orchestrator.cjs',
  'run-automation-suite.cjs'
];

filesToFix.forEach(file => {
  if (fs.existsSync(file)) {
    fixSyntaxErrors(file);
  } else {
    console.log(`File not found: ${file}`);
  }
});

console.log('Syntax error fixing completed!');