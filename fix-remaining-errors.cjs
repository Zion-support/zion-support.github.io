#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to fix remaining syntax errors
function fixRemainingErrors(content) {
  let fixed = content;
  
  // Fix semicolons after closing braces in object literals
  // Pattern: } },; -> } },
  fixed = fixed.replace(/\}\s*\},;/g, '},');
  
  // Fix semicolons after closing braces in arrays
  // Pattern: } ]; -> } ]
  fixed = fixed.replace(/\}\s*\];/g, '} ]');
  
  // Fix semicolons after closing braces in function parameters
  // Pattern: } ); -> } )
  fixed = fixed.replace(/\}\s*\);/g, '} )');
  
  // Fix malformed object property assignments with semicolons
  // Pattern: property: value,; -> property: value,
  fixed = fixed.replace(/(\w+):\s*([^,}]+),;/g, '$1: $2,');
  
  // Fix malformed array elements with semicolons
  // Pattern: [item,; -> [item,
  fixed = fixed.replace(/\[([^,\]]+),;/g, '[$1,');
  
  // Fix malformed function calls with semicolons
  // Pattern: function(; -> function(
  fixed = fixed.replace(/function\s*\(;/g, 'function(');
  
  // Fix malformed method calls with semicolons
  // Pattern: .method(; -> .method(
  fixed = fixed.replace(/\.(\w+)\(;/g, '.$1(');
  
  // Fix malformed conditional statements with semicolons
  // Pattern: if (condition) {; -> if (condition) {
  fixed = fixed.replace(/if\s*\([^)]+\)\s*\{;/g, (match) => match.replace('{;', '{'));
  
  // Fix malformed for loops with semicolons
  // Pattern: for (init; condition; increment) {; -> for (init; condition; increment) {
  fixed = fixed.replace(/for\s*\([^)]+\)\s*\{;/g, (match) => match.replace('{;', '{'));
  
  // Fix malformed while loops with semicolons
  // Pattern: while (condition) {; -> while (condition) {
  fixed = fixed.replace(/while\s*\([^)]+\)\s*\{;/g, (match) => match.replace('{;', '{'));
  
  // Fix malformed switch statements with semicolons
  // Pattern: switch (expression) {; -> switch (expression) {
  fixed = fixed.replace(/switch\s*\([^)]+\)\s*\{;/g, (match) => match.replace('{;', '{'));
  
  // Fix malformed try-catch blocks with semicolons
  // Pattern: try {; -> try {
  fixed = fixed.replace(/try\s*\{;/g, 'try {');
  
  // Fix malformed catch blocks with semicolons
  // Pattern: catch (error) {; -> catch (error) {
  fixed = fixed.replace(/catch\s*\([^)]*\)\s*\{;/g, (match) => match.replace('{;', '{'));
  
  // Fix malformed finally blocks with semicolons
  // Pattern: finally {; -> finally {
  fixed = fixed.replace(/finally\s*\{;/g, 'finally {');
  
  // Fix malformed JSX with semicolons
  // Pattern: <Component>; -> <Component>
  fixed = fixed.replace(/<(\w+)>;/g, '<$1>');
  
  // Fix malformed JSX closing with semicolons
  // Pattern: </Component>; -> </Component>
  fixed = fixed.replace(/<\/(\w+)>;/g, '</$1>');
  
  // Fix malformed JSX fragments with semicolons
  // Pattern: <></>; -> <>
  fixed = fixed.replace(/<><\/>;/g, '<>');
  
  // Fix malformed return statements with semicolons
  // Pattern: return (; -> return (
  fixed = fixed.replace(/return\s*\(;/g, 'return (');
  
  // Fix malformed arrow functions with semicolons
  // Pattern: () => {; -> () => {
  fixed = fixed.replace(/\([^)]*\)\s*=>\s*\{;/g, (match) => match.replace('{;', '{'));
  
  // Fix malformed object literals with semicolons
  // Pattern: { property: value,; -> { property: value,
  fixed = fixed.replace(/\{\s*(\w+):\s*([^,}]+),;/g, '{ $1: $2,');
  
  // Fix malformed array literals with semicolons
  // Pattern: [item,; -> [item,
  fixed = fixed.replace(/\[\s*([^,\]]+),;/g, '[$1,');
  
  // Fix malformed function expressions with semicolons
  // Pattern: function() {; -> function() {
  fixed = fixed.replace(/function\s*\([^)]*\)\s*\{;/g, (match) => match.replace('{;', '{'));
  
  // Fix malformed class methods with semicolons
  // Pattern: method() {; -> method() {
  fixed = fixed.replace(/(\w+)\s*\([^)]*\)\s*\{;/g, (match) => match.replace('{;', '{'));
  
  // Fix malformed interface properties with semicolons
  // Pattern: property: type,; -> property: type,
  fixed = fixed.replace(/(\w+):\s*([^,}]+),;/g, '$1: $2,');
  
  // Fix malformed type definitions with semicolons
  // Pattern: type Name = {; -> type Name = {
  fixed = fixed.replace(/type\s+(\w+)\s*=\s*\{;/g, 'type $1 = {');
  
  // Fix malformed interface definitions with semicolons
  // Pattern: interface Name {; -> interface Name {
  fixed = fixed.replace(/interface\s+(\w+)\s*\{;/g, 'interface $1 {');
  
  // Fix malformed enum definitions with semicolons
  // Pattern: enum Name {; -> enum Name {
  fixed = fixed.replace(/enum\s+(\w+)\s*\{;/g, 'enum $1 {');
  
  // Fix malformed class definitions with semicolons
  // Pattern: class Name {; -> class Name {
  fixed = fixed.replace(/class\s+(\w+)\s*\{;/g, 'class $1 {');
  
  return fixed;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixRemainingErrors(content);
    
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

module.exports = { fixRemainingErrors, processFile };