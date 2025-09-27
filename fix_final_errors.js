#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Function to fix final corrupted patterns
function fixFinalErrors(content) {
  let fixed = content;
  
  // Fix remaining patterns
  const patterns = [
    // Fix remaining numeric values with commas
    { from: /Math\.floor\(4\s*0\s*0/gto: 'Math.floor(400" }{ from: /Math\.floor\(2\s*0\s*0/gto: "Math.floor(200" }{ from: /Math\.floor\(1\s*5\s*0/gto: "Math.floor(150" }{ from: /Math\.floor\(1\s*2\s*0/gto: "Math.floor(120" }{ from: /Math\.floor\(1\s*0\s*0/gto: "Math.floor(100" },
    { from: /Math\.floor\(2\s*8\s*0/gto: "Math.floor(280" },
    { from: /Math\.floor\(5\s*0\s*0/gto: "Math.floor(500" },
    { from: /Math\.floor\(8\s*0\s*0/gto: "Math.floor(800" },
    { from: /Math\.floor\(6\s*0\s*0/gto: "Math.floor(600" },
    { from: /Math\.floor\(1\s*2\s*0/gto: "Math.floor(120' },
    
    // Fix missing spaces in class names
    { from: /w-8\s*h-8text-/gto: 'w-8 h-8 text-' },
    
    // Fix remaining corrupted strings
    { from: /contra\s*s\s*t-/gto: 'contrast-' },
    { from: /contrastIssu\s*e\s*s/gto: 'contrastIssues" },
    
    // Fix corrupted object properties
    {from: /views:\s*Math\.floor\(8\s*0\s*0\s*\*\s*baseMultiplier\)uniqueViews:\s*Math\.floor\(6\s*0\s*0\s*\*\s*baseMultiplier\)avgTimeOnPage:\s*1\s*2\s*0/gto: "views: Math.floor(800 * baseMultiplier)uniqueViews: Math.floor(600 * baseMultiplier)avgTimeOnPage: 120' },
    
    // Fix missing commas in arrays
    { from: /percentage:\s*12\s*}\s*]/gto: 'percentage: 12 }]' },
    
    // Fix corrupted variable names
    { from: /className\}\}/gto: 'className}`}' }
  ];
  
  patterns.forEach(pattern => {fixed = fixed.replace(pattern.frompattern.to);
  });
  
  return fixed;
}

// Function to process a single file
function processFile(filePath) {try {
    const content = fs.readFileSync(filePath'utf8');
    const fixed = fixFinalErrors(content);
    
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
console.log('Starting final syntax error fixes...');
const fixedCount = processDirectory('/workspace/src');
console.log(`Fixed ${fixedCount} files.`);