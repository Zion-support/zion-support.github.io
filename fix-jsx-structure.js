#!/usr/bin/env node

import fs from 'fs';
import { execSync } from 'child_process';

// Find files with JSX syntax errors
function findJSXErrorFiles() {
  try {
    const result = execSync('npm run build 2>&1 | grep -E "ERROR.*\.tsx|ERROR.*\.ts" | head -10', { encoding: 'utf8' });
    return result.trim().split('\n').filter(line => line.includes('ERROR'));
  } catch (error) {
    return [];
  }
}

// Fix common JSX structure issues
function fixJSXStructure(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let fixed = false;
    
    // Fix missing closing tags by checking for common patterns
    const lines = content.split('\n');
    const openTags = [];
    const fixedLines = [];
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      // Track opening tags
      const openTagMatch = line.match(/<(\w+)(?:\s[^>]*)?(?!\/)>/g);
      if (openTagMatch) {
        openTagMatch.forEach(tag => {
          const tagName = tag.match(/<(\w+)/)?.[1];
          if (tagName && !['img', 'br', 'hr', 'input', 'meta', 'link'].includes(tagName)) {
            openTags.push(tagName);
          }
        });
      }
      
      // Track closing tags
      const closeTagMatch = line.match(/<\/(\w+)>/g);
      if (closeTagMatch) {
        closeTagMatch.forEach(tag => {
          const tagName = tag.match(/<\/(\w+)>/)?.[1];
          if (tagName) {
            const lastIndex = openTags.lastIndexOf(tagName);
            if (lastIndex !== -1) {
              openTags.splice(lastIndex, 1);
            }
          }
        });
      }
      
      fixedLines.push(line);
    }
    
    // Add missing closing tags at the end
    while (openTags.length > 0) {
      const tag = openTags.pop();
      fixedLines.push(`</${tag}>`);
      fixed = true;
    }
    
    if (fixed) {
      const fixedContent = fixedLines.join('\n');
      fs.writeFileSync(filePath, fixedContent, 'utf8');
      console.log(`Fixed JSX structure in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Main function
function main() {
  console.log('Checking for JSX structure issues...');
  
  // Try to fix the consultation page specifically
  const consultationFile = '/workspace/app/consultation/page.tsx';
  if (fs.existsSync(consultationFile)) {
    console.log('Fixing consultation page...');
    fixJSXStructure(consultationFile);
  }
  
  console.log('JSX structure fixes completed.');
}

main();