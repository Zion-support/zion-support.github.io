#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Function to fix JSX and className issues
function fixJSXErrors(content) {
  let fixed = content;
  
  // Fix remaining patterns
  const patterns = [
    // Fix remaining className issues
    { from: /bg-whi\s*t\s*e\s*da\s*r\s*k:bg-gr\s*a\s*y-8\s*0\s*0\s*round\s*e\s*d-lg\s*shad\s*o\s*w-lg\s*p-6/g, to: 'bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6' },
    { from: /classNa\s*m\s*e/g, to: 'className' },
    { from: /text-gray-6,\s*0,\s*0/g, to: 'text-gray-600' },
    { from: /text-gray-4,\s*0,\s*0/g, to: 'text-gray-400' },
    
    // Fix motion import issues - check if framer-motion is properly imported
    { from: /import\s*{\s*motion,\s*AnimatePresence\s*}\s*from\s*'framer-motion';/g, to: "import { motion, AnimatePresence } from 'framer-motion';" },
    
    // Fix any remaining corrupted variable names
    { from: /contrastIssu\s*e\s*s/g, to: 'contrastIssues' },
    { from: /timeRang\s*e/g, to: 'timeRange' },
    
    // Fix remaining numeric values
    { from: /Math\.floor\(10,\s*0,\s*0/g, to: 'Math.floor(1000' },
    { from: /Math\.floor\(3,\s*0,\s*0/g, to: 'Math.floor(300' },
    { from: /Math\.floor\(2,\s*5,\s*0/g, to: 'Math.floor(250' },
    { from: /Math\.floor\(1,\s*5,\s*0/g, to: 'Math.floor(150' },
    { from: /Math\.floor\(1,\s*2,\s*0/g, to: 'Math.floor(120' },
    { from: /Math\.floor\(1,\s*8,\s*0/g, to: 'Math.floor(180' },
    { from: /Math\.floor\(2,\s*0,\s*0/g, to: 'Math.floor(200' },
    { from: /Math\.floor\(4,\s*0,\s*0/g, to: 'Math.floor(400' },
    { from: /Math\.floor\(6,\s*0,\s*0/g, to: 'Math.floor(600' },
    { from: /Math\.floor\(8,\s*0,\s*0/g, to: 'Math.floor(800' },
    
    // Fix remaining time values
    { from: /1,\s*2,\s*0/g, to: '120' },
    { from: /1,\s*8,\s*0/g, to: '180' },
    { from: /2,\s*4,\s*0/g, to: '240' },
    { from: /3,\s*0,\s*0/g, to: '300' },
    { from: /9,\s*0/g, to: '90' },
    
    // Fix remaining corrupted strings
    { from: /contra\s*s\s*t-/g, to: 'contrast-' },
    { from: /contrastIssu\s*e\s*s/g, to: 'contrastIssues' },
    { from: /classNa\s*m\s*e/g, to: 'className' },
    { from: /spl\s*i\s*t/g, to: 'split' },
    { from: /colo\s*r\s*2/g, to: 'color2' }
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
    const fixed = fixJSXErrors(content);
    
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
console.log('Starting JSX and className fixes...');
const fixedCount = processDirectory('/workspace/src');
console.log(`Fixed ${fixedCount} files.`);