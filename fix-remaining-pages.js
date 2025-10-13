#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Function to fix a malformed page file
function fixMalformedPage(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has JSX syntax errors
    if (content.includes('JSX element') || content.includes('Expression expected') || 
        content.includes('Declaration or statement expected') || content.includes('} expected')) {
      
      const pathParts = filePath.split('/');
      const fileName = pathParts[pathParts.length - 2]; // Get directory name
      
      let pageName;
      if (fileName.startsWith('ai-')) {
        pageName = 'AI' + fileName.split('-').slice(1).map(word => 
          word.charAt(0).toUpperCase() + word.slice(1)
        ).join('') + 'Page';
      } else if (fileName.startsWith('micro-saas')) {
        pageName = 'MicroSaas' + fileName.split('-').slice(1).map(word => 
          word.charAt(0).toUpperCase() + word.slice(1)
        ).join('') + 'Page';
      } else if (fileName.startsWith('it-services')) {
        pageName = 'ItServices' + fileName.split('-').slice(1).map(word => 
          word.charAt(0).toUpperCase() + word.slice(1)
        ).join('') + 'Page';
      } else {
        pageName = fileName.split('-').map(word => 
          word.charAt(0).toUpperCase() + word.slice(1)
        ).join('') + 'Page';
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and fix malformed page files
function fixMalformedPages(dirPath) {
  const items = fs.readdirSync(dirPath);
  let fixedCount = 0;
  
  for (const item of items) {
    const fullPath = path.join(dirPath, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      // Skip certain directories
      if (['node_modules', '.git', 'dist', 'build', '.next', 'components', 'hooks', 'lib', 'utils'].includes(item)) {
        continue;
      }
      fixedCount += fixMalformedPages(fullPath);
    } else if (stat.isFile() && item === 'page.tsx') {
      if (fixMalformedPage(fullPath)) {
        fixedCount++;
      }
    }
  }
  
  return fixedCount;
}

// Main execution
console.log('Starting malformed page fixes...');
const fixedCount = fixMalformedPages('/workspace/app');
console.log(`Fixed ${fixedCount} malformed page files.`);