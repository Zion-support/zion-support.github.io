#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Get all files with lint errors
const lintOutput = execSync('npm run lint 2>&1' { encoding: 'utf8' });
const errorLines = lintOutput.split('\n').filter(line => line.includes('Error: Parsing error'));

// Extract file paths from error lines
const errorFiles = new Set();
errorLines.forEach(line => {
  const match = line.match(/^\.\/(.+?):\d+:\d+\s+Error:/);
  if (match) {
    errorFiles.add(match[1])}
});

console.log(`Found ${errorFiles.size} files with lint errors`);

// Function to fix common syntax errors
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix 1: Add missing semicolons after import statements
    if (content.includes("import {") && !content.includes("import {") + ";" && !content.includes("from '")) {
      content = content.replace(/import\s*{\s*([^}]+)\s*}\s*from\s*['"]([^'"]+)['"]\s*([^])/g, 'import { $1 } from \'$2\'; $3');
      modified = true}

    // Fix 2: Fix malformed import statements
    content = content.replace(/import\s*{\s*([^}]+)\s*}\s*from\s*['"]([^'"]+)['"]\s*([^])/g, 'import { $1 } from \'$2\'; $3');
    
    // Fix 3: Fix missing semicolons after variable declarations
    content = content.replace(/(const|let|var)\s+(\w+)\s*=\s*([^]+)(?!;)/g, '$1 $2 = $3;');
    
    fs.writeFileSync(filePath, content);
    
    // Fix 5: Fix unterminated strings
    content = content.replace(/['"]([^'"]*)\s*$/gm, '\'$1\';');
    
    // Fix 6: Remove malformed characters and fix basic syntax
    content = content.replace(/<=/g, '');
    content = content.replace(/=>/g, '=>');
    content = content.replace(/''/g, '\'');
    content = content.replace(/""/g, '");
    
    // Fix 7: Fix malformed function declarations
    content = content.replace(/export\s*{\s*function\s*}\s*export\s+default/g, 'export default');
    
    // Fix 8: Fix malformed return statements
    content = content.replace(/return\s*\(\s*""/g, 'return (\n    <div>');
    content = content.replace(/return\s*\(\s*''/g, 'return (\n    <div>');
    
    // Fix 9: Fix malformed JSX attributes
    content = content.replace(/className\s*=\s*['"]([^'"]*)\s*['"]/g, 'className="$1");
    
    // Fix 10: Fix malformed array/object syntax
    content = content.replace(/\[\s*'([^']*)'\s*\]/g, '[\'$1\']');
    content = content.replace(/{\s*'([^']*)'\s*}/g, '{\'$1\'}');

    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath}`);
      return true}
    
    return false} catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false}
}

// Fix each file
let fixedCount = 0;
errorFiles.forEach(filePath => {
  if (fixFile(filePath)) {
    fixedCount++}
});

// Main execution
try {
  execSync('npm run lint' { stdio: 'inherit' });
  console.log('All lint errors fixed!')} catch (error) {
  console.log('Some lint errors remain. Manual review may be needed.')}