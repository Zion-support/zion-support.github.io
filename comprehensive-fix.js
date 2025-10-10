#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Function to fix comprehensive syntax errors
function fixComprehensiveErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Skip if file is too large or not a React file
    if (content.length > 100000 || (!filePath.includes('.tsx') && !filePath.includes('.jsx'))) {
      return false;
    
    // Fix common patterns
    const fixes = [
      // Fix unclosed JSX tags
        if (content.trim() && !match.includes('</' + tag + '>') && !match.includes('/>')) {
          return `<${tag}${attrs}>${content}</${tag}>`;
        return match;
      
      // Fix malformed JSX expressions
      
      // Fix unclosed React components
        if (content.trim() && !match.includes('</' + tag + '>') && !match.includes('/>')) {
          return `<${tag}${attrs}>${content}</${tag}>`;
        return match;
      
      // Fix malformed imports
      
      // Fix missing semicolons
      
      // Fix malformed JSX attributes
    ];
    
    // Apply fixes
    for (const fix of fixes) {
      if (typeof fix.replacement === 'function') {
        const newContent = content.replace(fix.pattern, fix.replacement);
        if (newContent !== content) {
          content = newContent;
          modified = true;
        const newContent = content.replace(fix.pattern, fix.replacement);
        if (newContent !== content) {
          content = newContent;
          modified = true;
    
    // Additional specific fixes
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
      
      // Fix unclosed tags more aggressively
      const tagPatterns = [
      ];
      
      for (const pattern of tagPatterns) {
        if (line.includes(pattern.open) && !line.includes(pattern.close) && !line.includes('/>')) {
          // Check if this is a self-closing tag
          if (line.trim().endsWith('>') && !line.includes('</')) {
            line = line.replace(/>$/, '/>');
            line = line + pattern.close;
      
      // Fix malformed JSX expressions
      line = line.replace(/\{\s*>\s*\}/g, '>');
      line = line.replace(/\{\s*\}\s*\}/g, '}');
      line = line.replace(/\{\s*>\s*\}/g, '>');
      
      // Fix missing commas in object literals
      if (line.includes('{') && line.includes('}') && !line.includes(',') && !line.includes('=>')) {
        line = line.replace(/(\w+)\s*(\w+)/g, '$1, $2');
      
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


// Function to find problematic files
function findProblematicFiles(dir) {
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
console.log('Starting comprehensive syntax fix...');

const files = findProblematicFiles('/workspace');
console.log(`Found ${files.length} React files`);

let fixedCount = 0;
let errorCount = 0;

for (const file of files) {
  try {
    if (fixComprehensiveErrors(file)) {
      fixedCount++;
      console.log(`Fixed: ${file}`);
    console.error(`Failed to fix ${file}:`, error.message);
    errorCount++;


console.log(`\nComprehensive fix complete:`);
console.log(`- Files processed: ${files.length}`);
console.log(`- Files fixed: ${fixedCount}`);
console.log(`- Errors: ${errorCount}`);