#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Function to fix JSX syntax issues
function fixJSXSyntax(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let fixed = false;
    
    // Fix incomplete closing tags like "  </" -> proper closing tags
    const lines = content.split('\n');
    const fixedLines = [];
    
    for (let i = 0; i < lines.length; i++) {
      let line = lines[i];
      
      // Fix incomplete closing tags
      if (line.trim() === '</' || line.trim().endsWith(';')) {
        // Look at the previous lines to determine what tag should be closed
        let j = i - 1;
        let foundOpeningTag = false;
        
        while (j >= 0 && !foundOpeningTag) {
          const prevLine = lines[j].trim();
          if (prevLine.startsWith('<') && !prevLine.startsWith('</') && !prevLine.endsWith('/>')) {
            // Extract tag name
            const tagMatch = prevLine.match(/<(\w+)/);
            if (tagMatch) {
              const tagName = tagMatch[1];
              if (line.trim() === '</') {
                line = `          </${tagName}>`;
              } else if (line.trim().endsWith(';')) {
                line = line.replace(/;$/, '');
                line += `\n          </${tagName}>`;
              }
              foundOpeningTag = true;
            }
          }
          j--;
        }
        
        if (!foundOpeningTag) {
          // If we can't find the opening tag, just remove the incomplete closing tag
          line = '';
        }
      }
      
      // Fix semicolons at the end of JSX text content
      if (line.trim().endsWith(';') && !line.includes('className') && !line.includes('id=') && !line.includes('aria-')) {
        line = line.replace(/;$/, '');
      }
      
      fixedLines.push(line);
    }
    
    const newContent = fixedLines.join('\n');
    
    if (newContent !== content) {
      fs.writeFileSync(filePath, newContent, 'utf8');
      console.log(`Fixed JSX syntax in: ${filePath}`);
      fixed = true;
    }
    
    return fixed;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and process files
function processDirectory(dirPath) {
  const items = fs.readdirSync(dirPath);
  let totalFixed = 0;
  
  for (const item of items) {
    const fullPath = path.join(dirPath, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      // Skip node_modules and other common directories
      if (['node_modules', '.git', 'dist', '.next', 'out'].includes(item)) {
        continue;
      }
      totalFixed += processDirectory(fullPath);
    } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.jsx'))) {
      if (fixJSXSyntax(fullPath)) {
        totalFixed++;
      }
    }
  }
  
  return totalFixed;
}

console.log('Starting JSX syntax fix...');
const totalFixed = processDirectory('.');
console.log(`Fixed JSX syntax in ${totalFixed} files.`);
console.log('JSX syntax fix completed!');