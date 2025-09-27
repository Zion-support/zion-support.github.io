#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Function to fix common syntax errors in JSX/TSX files
function fixSyntaxErrors(content) {
  // Fix malformed className attributes
  content = content.replace(/className="([^"]*),([^"]*)"/g, (match, before, after) => {
    return `className="${before} ${after}"`;
  });
  
  // Fix missing spaces in className
  content = content.replace(/className="([^"]*)([a-zA-Z])([a-zA-Z])/g, (match, before, char1, char2) => {
    if (char1 === 'k' && char2 === ':') {
      return `className="${before} dark:`;
    }
    return match;
  });
  
  // Fix specific patterns
  content = content.replace(/dar,k:/g, 'dark:');
  content = content.replace(/dar, k:/g, 'dark:');
  content = content.replace(/dar,k:/g, 'dark:');
  content = content.replace(/dar, k:/g, 'dark:');
  content = content.replace(/dar,k:/g, 'dark:');
  content = content.replace(/dar, k:/g, 'dark:');
  
  // Fix missing spaces in className attributes
  content = content.replace(/className="([^"]*)([a-zA-Z])([a-zA-Z])([^"]*)"/g, (match, before, char1, char2, after) => {
    if (char1 === 'k' && char2 === ':') {
      return `className="${before} dark:${after}"`;
    }
    return match;
  });
  
  // Fix specific malformed patterns
  content = content.replace(/className="([^"]*)([a-zA-Z])([a-zA-Z])([^"]*)"/g, (match, before, char1, char2, after) => {
    if (char1 === 'k' && char2 === ':') {
      return `className="${before} dark:${after}"`;
    }
    return match;
  });
  
  // Fix missing spaces in grid classes
  content = content.replace(/grid-cols-([0-9]+)\s+([a-zA-Z]+):grid-cols-([0-9]+)/g, 'grid-cols-$1 $2:grid-cols-$3');
  content = content.replace(/gap-([0-9]+)mb-([0-9]+)/g, 'gap-$1 mb-$2');
  content = content.replace(/p-([0-9]+)text-white/g, 'p-$1 text-white');
  content = content.replace(/text-([0-9]+)xlfont-bold/g, 'text-$1xl font-bold');
  content = content.replace(/text-([0-9]+)smopacity-([0-9]+)/g, 'text-$1sm opacity-$2');
  content = content.replace(/items-centerspace-x-([0-9]+)/g, 'items-center space-x-$1');
  content = content.replace(/font-mediumtransition-colors/g, 'font-medium transition-colors');
  content = content.replace(/onClick={() =>setIsRealTime/g, 'onClick={() => setIsRealTime');
  
  // Fix specific malformed className patterns
  content = content.replace(/className="([^"]*)([a-zA-Z])([a-zA-Z])([^"]*)"/g, (match, before, char1, char2, after) => {
    if (char1 === 'k' && char2 === ':') {
      return `className="${before} dark:${after}"`;
    }
    return match;
  });
  
  return content;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixedContent = fixSyntaxErrors(content);
    
    if (content !== fixedContent) {
      fs.writeFileSync(filePath, fixedContent, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and process TSX/JSX files
function processDirectory(dirPath) {
  let fixedCount = 0;
  
  try {
    const items = fs.readdirSync(dirPath);
    
    for (const item of items) {
      const fullPath = path.join(dirPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        fixedCount += processDirectory(fullPath);
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.jsx'))) {
        if (processFile(fullPath)) {
          fixedCount++;
        }
      }
    }
  } catch (error) {
    console.error(`Error processing directory ${dirPath}:`, error.message);
  }
  
  return fixedCount;
}

// Main execution
console.log('Starting comprehensive syntax error fixes...');
const fixedCount = processDirectory('./src/components');
console.log(`Fixed ${fixedCount} files.`);