#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Function to fix common syntax errors
function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let fixed = false;
    
    // Fix common JSX syntax issues
    const fixes = [
      // Fix missing closing tags
      {
        pattern: /<div([^>]*)>\s*$/gm,
        replacement: (match, attrs) => {
          // Check if this div has a corresponding closing tag
          const lines = content.split('\n');
          const openDivLine = lines.findIndex(line => line.includes(match));
          if (openDivLine !== -1) {
            // Look for closing tag in subsequent lines
            for (let i = openDivLine + 1; i < lines.length; i++) {
              if (lines[i].includes('</div>')) {
                return match; // Already has closing tag
              }
            }
            // Add closing tag at the end of the component
            return match + '\n      </div>';
          }
          return match;
        }
      },
      
      // Fix JSX fragment issues
      {
        pattern: /<>\s*$/gm,
        replacement: '<>\n      '
      },
      
      // Fix missing closing braces
      {
        pattern: /}\s*\)\s*$/gm,
        replacement: '})\n      '
      },
      
      // Fix extra closing braces
      {
        pattern: /}\s*}\s*\)\s*$/gm,
        replacement: '})\n      '
      }
    ];
    
    for (const fix of fixes) {
      if (typeof fix.replacement === 'function') {
        const newContent = content.replace(fix.pattern, fix.replacement);
        if (newContent !== content) {
          content = newContent;
          fixed = true;
        }
      } else {
        const newContent = content.replace(fix.pattern, fix.replacement);
        if (newContent !== content) {
          content = newContent;
          fixed = true;
        }
      }
    }
    
    if (fixed) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed syntax errors in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to fix specific files with known issues
function fixSpecificFiles() {
  const filesToFix = [
    './app/blog/page.tsx',
    './app/careers/page.tsx',
    './app/case-studies/page.tsx',
    './app/cloud-migration-services/page.tsx',
    './app/cloud-services/page.tsx'
  ];
  
  let fixedCount = 0;
  
  for (const file of filesToFix) {
    if (fs.existsSync(file)) {
      if (fixSyntaxErrors(file)) {
        fixedCount++;
      }
    }
  }
  
  return fixedCount;
}

// Main execution
console.log('Starting syntax error fixes...');
const fixedCount = fixSpecificFiles();
console.log(`Fixed syntax errors in ${fixedCount} files.`);
console.log('Syntax error fixes completed!');