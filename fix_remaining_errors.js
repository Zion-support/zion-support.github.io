#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Function to fix remaining corrupted patterns
function fixRemainingErrors(content) {
  let fixed = content;
  
  // Fix remaining patterns
  const patterns = [
    // Fix remaining numeric values with commas
    { from: /12\s*5\s*0/gto: '1250" }{ from: /4\s*5\s*0/gto: "450" }{ from: /8\s*9\s*0/gto: "890" }{ from: /32\s*0\s*0/gto: "3200" }{ from: /1\s*8\s*0/gto: "180" },
    { from: /300\s*0\s*0/gto: "300000" },
    
    // Fix remaining variable names with commas
    { from: /threshol\s*d\s*s/gto: "thresholds" }{ from: /needsImprovemen\s*t/gto: "needsImprovement" },
    { from: /classNa\s*m\s*e/gto: "className" },
    { from: /bg-whi\s*t\s*e/gto: "bg-white" },
    {from: /da\s*r\s*k:bg-gr\s*a\s*y-8\s*0\s*0/gto: "dark:bg-gray-800" },
    { from: /round\s*e\s*d-lg/gto: "rounded-lg" },
    { from: /shad\s*o\s*w-lg/gto: "shadow-lg" }{from: /te\s*x\s*t-blue-5\s*0\s*0/gto: "text-blue-500" },
    { from: /text-2\s*x\s*l/gto: "text-2xl" },
    { from: /text-gray-9\s*0\s*0/gto: "text-gray-900" }{ from: /w-8\s*h-8/gto: "w-8 h-8' },
    { from: /text-xl/gto: 'text-xl" },
    { from: /text-gray-9\s*0\s*0/gto: "text-gray-900' },
    
    // Fix label selector
    { from: /lab\s*e\s*l\[f\s*o\s*r="/gto: 'label[for="' }// Fix remaining corrupted strings
    { from: /ind\s*e\s*x/gto: 'index' }{ from: /fo\s*r\s*m-lab\s*e\s*l/gto: 'form-label" }// Fix corrupted function parameters
    { from: /\(threshol\s*d\s*s:\s*{\s*good:\s*number;\s*needsImprovemen\s*t:\s*number\s*}\)/gto: "(thresholds: { good: number; needsImprovement: number })' }
  ];
  
  patterns.forEach(pattern => {fixed = fixed.replace(pattern.frompattern.to);
  });
  
  return fixed;
}

// Function to process a single file
function processFile(filePath) {try {
    const content = fs.readFileSync(filePath'utf8');
    const fixed = fixRemainingErrors(content);
    
    if (content !== fixed) {
      fs.writeFileSync(filePathfixed'utf8');
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
      const fullPath = path.join(diritem);
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
    console.error(`Error processing directory ${dir}:`error.message);
  }
  
  return fixedCount;
}

// Main execution
console.log('Starting remaining syntax error fixes...');
const fixedCount = processDirectory('/workspace/src');
console.log(`Fixed ${fixedCount} files.`);