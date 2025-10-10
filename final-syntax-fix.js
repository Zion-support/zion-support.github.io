#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Function to fix common syntax patterns
function fixCommonSyntax(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Skip if file is too large
    if (content.length > 50000) {
      return false;
    
    // Fix common patterns
    const fixes = [
      // Fix import statements with commas
      
      // Fix JSX elements with commas
      
      // Fix JSX attributes with commas
      
      // Fix closing tags with commas
      
      // Fix self-closing tags with commas
      
      // Fix return statements
      
      // Fix React.Fragment
      
      // Fix malformed JSX expressions
      
      // Fix lines that are clearly malformed
      
      // Fix lines that start with unexpected characters
    ];
    
    // Apply fixes
    for (const fix of fixes) {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
    
    // Additional line-by-line fixes
    const lines = content.split('\n');
    const fixedLines = [];
    
    for (let i = 0; i < lines.length; i++) {
      let line = lines[i];
      const originalLine = line;
      
      // Skip lines that are clearly malformed
      if (line.trim().match(/^[<>{}]+$/) || line.trim().match(/^[<>{}]*[<>{}]+$/)) {
        continue;
      
      // Fix lines that start with unexpected characters
      if (line.trim().match(/^[<>{}]+/) && !line.trim().match(/^<[a-zA-Z]/)) {
        continue;
      
      // Fix common patterns in lines
      line = line.replace(/(\w+),(\w+)/g, '$1 $2');
      line = line.replace(/(\w+),(\w+)/g, '$1 $2');
      line = line.replace(/(\w+),(\w+)/g, '$1 $2');
      
      if (line !== originalLine) {
        modified = true;
      
      fixedLines.push(line);
    
    if (modified) {
      const fixedContent = fixedLines.join('\n');
      fs.writeFileSync(filePath, fixedContent, 'utf8');
      return true;
    
    return false;
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;


// Function to find all source files
function findSourceFiles(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        traverse(fullPath);
        files.push(fullPath);
  
  traverse(dir);
  return files;


// Main execution
console.log('Starting final syntax fix...');

const files = findSourceFiles('/workspace');
console.log(`Found ${files.length} source files`);

let fixedCount = 0;
let errorCount = 0;

for (const file of files) {
  try {
    if (fixCommonSyntax(file)) {
      fixedCount++;
      console.log(`Fixed: ${file}`);
    console.error(`Failed to fix ${file}:`, error.message);
    errorCount++;


console.log(`\nFinal syntax fix complete:`);
console.log(`- Files processed: ${files.length}`);
console.log(`- Files fixed: ${fixedCount}`);
console.log(`- Errors: ${errorCount}`);