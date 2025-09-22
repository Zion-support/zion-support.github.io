#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Find all blog page files
const blogFiles = glob.sync('app/blog/**/page.tsx');

console.log(`Found ${blogFiles.length} blog files to check...`);

let fixedCount = 0;

blogFiles.forEach(filePath => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Remove merge conflict markers
    content = content.replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+/g, '');
    content = content.replace(/=======[\s\S]*?>>>>>>> [^\n]+/g, '');
    
    // Remove duplicate imports at the end of files
    const lines = content.split('\n');
    const importLines = [];
    const otherLines = [];
    let inDuplicateSection = false;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      
      // Check if we're in a duplicate section (after the main component ends)
      if (line === '}' && i > 0 && lines[i-1].trim().includes('export default')) {
        inDuplicateSection = true;
        otherLines.push(lines[i]);
        continue;
      }
      
      if (inDuplicateSection) {
        // Skip duplicate imports and metadata in the duplicate section
        if (line.startsWith('import ') || line.startsWith('export const metadata')) {
          continue;
        }
        // If we hit another component definition, stop skipping
        if (line.includes('export default function') || line.includes('const ') && line.includes('= () =>')) {
          inDuplicateSection = false;
        }
      }
      
      if (inDuplicateSection) {
        continue;
      }
      
      otherLines.push(lines[i]);
    }
    
    content = otherLines.join('\n');
    
    // Clean up any remaining duplicate exports
    content = content.replace(/export default [^;]+;\s*export default [^;]+;/g, (match) => {
      const exports = match.split(';').filter(e => e.trim());
      return exports[exports.length - 1] + ';';
    });
    
    // Remove empty lines at the end
    content = content.replace(/\n\s*$/, '');
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath}`);
      fixedCount++;
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
});

console.log(`Fixed ${fixedCount} files`);