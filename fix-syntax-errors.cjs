#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to fix common syntax errors in TypeScript/JSX files
function fixSyntaxErrors(content) {
  let fixed = content;
  
  // Fix semicolons after property names in object literals
  // Pattern: property: value,; -> property: value,
  fixed = fixed.replace(/(\w+):\s*([^,}]+),;/g, '$1: $2,');
  
  // Fix semicolons after property names in object literals (with quotes)
  // Pattern: "property": value,; -> "property": value,
  fixed = fixed.replace(/(["']\w+["']):\s*([^,}]+),;/g, '$1: $2,');
  
  // Fix malformed JSX closing tags
  // Pattern: <tag></tag> -> <tag />
  fixed = fixed.replace(/<(\w+)><\/\1>/g, '<$1 />');
  
  // Fix malformed JSX with semicolons
  // Pattern: <tag>; -> <tag>
  fixed = fixed.replace(/<(\w+)>;/g, '<$1>');
  
  // Fix malformed JSX closing with semicolons
  // Pattern: </tag>; -> </tag>
  fixed = fixed.replace(/<\/(\w+)>;/g, '</$1>');
  
  // Fix array method syntax errors
  // Pattern: .map((item, index) => (; -> .map((item, index) => (
  fixed = fixed.replace(/\.map\(\([^)]+\)\s*=>\s*\(;/g, (match) => match.replace('(;', '('));
  
  // Fix array method syntax errors with closing
  // Pattern: }); -> })
  fixed = fixed.replace(/}\);/g, '})');
  
  // Fix malformed return statements
  // Pattern: return (; -> return (
  fixed = fixed.replace(/return\s*\(;/g, 'return (');
  
  // Fix malformed function declarations
  // Pattern: function() {; -> function() {
  fixed = fixed.replace(/function\s*\([^)]*\)\s*\{;/g, (match) => match.replace('{;', '{'));
  
  // Fix malformed arrow functions
  // Pattern: () => {; -> () => {
  fixed = fixed.replace(/\([^)]*\)\s*=>\s*\{;/g, (match) => match.replace('{;', '{'));
  
  // Fix malformed JSX fragments
  // Pattern: <></> -> <>
  fixed = fixed.replace(/<><\/>/g, '<>');
  
  // Fix malformed JSX with extra semicolons
  // Pattern: <Component>; -> <Component>
  fixed = fixed.replace(/<(\w+)>;/g, '<$1>');
  
  // Fix malformed JSX closing with extra semicolons
  // Pattern: </Component>; -> </Component>
  fixed = fixed.replace(/<\/(\w+)>;/g, '</$1>');
  
  // Fix malformed object property assignments
  // Pattern: property: value,; -> property: value,
  fixed = fixed.replace(/(\w+):\s*([^,}]+),;/g, '$1: $2,');
  
  // Fix malformed array syntax
  // Pattern: [item,; -> [item,
  fixed = fixed.replace(/\[([^,\]]+),;/g, '[$1,');
  
  // Fix malformed array closing
  // Pattern: ]; -> ]
  fixed = fixed.replace(/\];/g, ']');
  
  // Fix malformed object closing
  // Pattern: }; -> }
  fixed = fixed.replace(/\};/g, '}');
  
  // Fix malformed function calls
  // Pattern: function(; -> function(
  fixed = fixed.replace(/function\s*\(;/g, 'function(');
  
  // Fix malformed method calls
  // Pattern: .method(; -> .method(
  fixed = fixed.replace(/\.(\w+)\(;/g, '.$1(');
  
  // Fix malformed conditional statements
  // Pattern: if (condition) {; -> if (condition) {
  fixed = fixed.replace(/if\s*\([^)]+\)\s*\{;/g, (match) => match.replace('{;', '{'));
  
  // Fix malformed for loops
  // Pattern: for (init; condition; increment) {; -> for (init; condition; increment) {
  fixed = fixed.replace(/for\s*\([^)]+\)\s*\{;/g, (match) => match.replace('{;', '{'));
  
  // Fix malformed while loops
  // Pattern: while (condition) {; -> while (condition) {
  fixed = fixed.replace(/while\s*\([^)]+\)\s*\{;/g, (match) => match.replace('{;', '{'));
  
  // Fix malformed switch statements
  // Pattern: switch (expression) {; -> switch (expression) {
  fixed = fixed.replace(/switch\s*\([^)]+\)\s*\{;/g, (match) => match.replace('{;', '{'));
  
  // Fix malformed try-catch blocks
  // Pattern: try {; -> try {
  fixed = fixed.replace(/try\s*\{;/g, 'try {');
  
  // Fix malformed catch blocks
  // Pattern: catch (error) {; -> catch (error) {
  fixed = fixed.replace(/catch\s*\([^)]*\)\s*\{;/g, (match) => match.replace('{;', '{'));
  
  // Fix malformed finally blocks
  // Pattern: finally {; -> finally {
  fixed = fixed.replace(/finally\s*\{;/g, 'finally {');
  
  return fixed;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixSyntaxErrors(content);
    
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

// Main function
function main() {
  const patterns = [
    'app/**/*.tsx',
    'app/**/*.ts',
    'components/**/*.tsx',
    'components/**/*.ts'
  ];
  
  let totalFiles = 0;
  let fixedFiles = 0;
  
  patterns.forEach(pattern => {
    const files = glob.sync(pattern, { cwd: process.cwd() });
    totalFiles += files.length;
    
    files.forEach(file => {
      if (processFile(file)) {
        fixedFiles++;
      }
    });
  });
  
  console.log(`\nProcessed ${totalFiles} files, fixed ${fixedFiles} files.`);
}

if (require.main === module) {
  main();
}

module.exports = { fixSyntaxErrors, processFile };