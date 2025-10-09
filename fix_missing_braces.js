#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

function fixMissingBraces(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has export default but might be missing closing brace
    if (content.includes('export default') && content.includes(');')) {
      const lines = content.split('\n');
      let braceCount = 0;
      let exportLine = -1;
      
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        
        if (line.includes('export default')) {
          exportLine = i;
        }
        
        // Count braces
        for (const char of line) {
          if (char === '{') braceCount++;
          if (char === '}') braceCount--;
        }
      }
      
      // If we have more opening braces than closing braces, add missing ones
      if (braceCount > 0 && exportLine > 0) {
        console.log(`Fixing missing braces in: ${filePath} (missing ${braceCount} closing braces)`);
        
        // Add missing closing braces before export
        const fixedLines = [];
        for (let i = 0; i < lines.length; i++) {
          if (i === exportLine) {
            // Add missing closing braces before export
            for (let j = 0; j < braceCount; j++) {
              fixedLines.push('}');
            }
            fixedLines.push(''); // Empty line
          }
          fixedLines.push(lines[i]);
        }
        
        fs.writeFileSync(filePath, fixedLines.join('\n'), 'utf8');
        return true;
      }
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing braces in ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and fix files
function fixAllMissingBraces(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      // Skip node_modules and other directories we don't want to process
      if (file === 'node_modules' || file === '.git' || file === 'dist' || file === '.next' || file === 'build') {
        continue;
      }
      fixedCount += fixAllMissingBraces(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.js') || file.endsWith('.jsx')) {
      if (fixMissingBraces(filePath)) {
        fixedCount++;
      }
    }
  }
  
  return fixedCount;
}

// Main execution
console.log('Starting missing braces fix...');
const fixedCount = fixAllMissingBraces('/workspace/src');
console.log(`Fixed missing braces in ${fixedCount} files.`);