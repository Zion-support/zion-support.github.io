#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Function to fix remaining corrupted patterns
function fixRemainingErrors(content) {
  let fixed = content;
  
  // Fix remaining patterns
  const patterns = [
    // Fix remaining numeric values with commas
    { from: /12,\s*5,\s*0/g, to: '1250' },
    { from: /4,\s*5,\s*0/g, to: '450' },
    { from: /8,\s*9,\s*0/g, to: '890' },
    { from: /32,\s*0,\s*0/g, to: '3200' },
    { from: /1,\s*8,\s*0/g, to: '180' },
    { from: /300,\s*0,\s*0/g, to: '300000' },
    
    // Fix remaining variable names with commas
    { from: /threshol,\s*d,\s*s/g, to: 'thresholds' },
    { from: /needsImprovemen,\s*t/g, to: 'needsImprovement' },
    { from: /classNa,\s*m,\s*e/g, to: 'className' },
    { from: /bg-whi,\s*t,\s*e/g, to: 'bg-white' },
    { from: /da,\s*r,\s*k:bg-gr,\s*a,\s*y-8,\s*0,\s*0/g, to: 'dark:bg-gray-800' },
    { from: /round,\s*e,\s*d-lg/g, to: 'rounded-lg' },
    { from: /shad,\s*o,\s*w-lg/g, to: 'shadow-lg' },
    { from: /te,\s*x,\s*t-blue-5,\s*0,\s*0/g, to: 'text-blue-500' },
    { from: /text-2,\s*x,\s*l/g, to: 'text-2xl' },
    { from: /text-gray-9,\s*0,\s*0/g, to: 'text-gray-900' },
    { from: /w-8,\s*h-8/g, to: 'w-8 h-8' },
    { from: /text-xl/g, to: 'text-xl' },
    { from: /text-gray-9,\s*0,\s*0/g, to: 'text-gray-900' },
    
    // Fix label selector
    { from: /lab\s*e\s*l\[f\s*o\s*r="/g, to: 'label[for="' },
    
    // Fix remaining corrupted strings
    { from: /ind\s*e\s*x/g, to: 'index' },
    { from: /fo\s*r\s*m-lab\s*e\s*l/g, to: 'form-label' },
    
    // Fix corrupted function parameters
    { from: /\(threshol,\s*d,\s*s:\s*{\s*good:\s*number;\s*needsImprovemen,\s*t:\s*number\s*}\)/g, to: '(thresholds: { good: number; needsImprovement: number })' }
  ];
  
  patterns.forEach(pattern => {
    fixed = fixed.replace(pattern.from, pattern.to);
  });
  
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

// Function to recursively find and process TypeScript/JavaScript files
function processDirectory(dir) {
  let fixedCount = 0;
  
  try {
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        fixedCount += processDirectory(fullPath);
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.jsx') || item.endsWith('.js'))) {
        if (processFile(fullPath)) {
          fixedCount++;
        }
      }
    }
  } catch (error) {
    console.error(`Error processing directory ${dir}:`, error.message);
  }
  
  return fixedCount;
}

// Main execution
console.log('Starting remaining syntax error fixes...');
const fixedCount = processDirectory('/workspace/src');
console.log(`Fixed ${fixedCount} files.`);