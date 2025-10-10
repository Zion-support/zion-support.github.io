#!/usr/bin/env node

import fs from 'fs';
import { glob } from 'glob';

// Function to fix JSX parent element issues
function fixJSXParentElements(content) {
  let fixed = content;
  
  // Check if there are multiple root elements
  const lines = fixed.split('\n');
  let inReturn = false;
  let returnStart = -1;
  let braceCount = 0;
  let hasMultipleRoots = false;
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    if (line.trim().startsWith('return (')) {
      inReturn = true;
      returnStart = i;
      braceCount = 0;
    }
    
    if (inReturn) {
      // Count braces to find the end of return statement
      for (const char of line) {
        if (char === '(') braceCount++;
        if (char === ')') braceCount--;
      }
      
      // Check for multiple root elements (JSX elements at same level)
      if (line.trim().match(/^<[A-Z]/) && braceCount > 1) {
        hasMultipleRoots = true;
      }
      
      if (braceCount === 0 && line.trim().endsWith(')')) {
        break;
      }
    }
  }
  
  if (hasMultipleRoots) {
    // Wrap everything in a React Fragment
    fixed = fixed.replace(
      /return \(\s*<div/g,
      'return (\n    <>\n      <div'
    );
    
    // Find the closing of the return statement and add closing fragment
    const returnMatch = fixed.match(/return \([\s\S]*?\);/);
    if (returnMatch) {
      const returnContent = returnMatch[0];
      const lastDivClose = returnContent.lastIndexOf('</div>');
      if (lastDivClose !== -1) {
        const beforeClose = returnContent.substring(0, lastDivClose + 6);
        const afterClose = returnContent.substring(lastDivClose + 6);
        fixed = fixed.replace(
          returnContent,
          beforeClose + '\n    </>\n  )'
        );
      }
    }
  }
  
  return fixed;
}

// Function to fix missing closing tags
function fixMissingClosingTags(content) {
  let fixed = content;
  
  // Common elements that need closing tags
  const elements = ['div', 'section', 'main', 'article', 'header', 'footer', 'nav', 'aside', 'p', 'span'];
  
  for (const element of elements) {
    // Count opening and closing tags
    const openRegex = new RegExp(`<${element}(?:\\s[^>]*)?(?:>|$)`, 'g');
    const closeRegex = new RegExp(`</${element}>`, 'g');
    
    const openMatches = (fixed.match(openRegex) || []).length;
    const closeMatches = (fixed.match(closeRegex) || []).length;
    
    if (openMatches > closeMatches) {
      // Add missing closing tags at the end
      const missing = openMatches - closeMatches;
      for (let i = 0; i < missing; i++) {
        fixed += `</${element}>`;
      }
    }
  }
  
  return fixed;
}

// Function to fix TypeScript interface issues
function fixTypeScriptIssues(content) {
  let fixed = content;
  
  // Fix syntax errors like ,)
  fixed = fixed.replace(/,\)/g, ')');
  fixed = fixed.replace(/,;/g, ';');
  
  // Fix missing semicolons in interfaces
  fixed = fixed.replace(/(\w+:\s*[^,;}\n]+)\n\s*(\w+:\s*)/g, '$1;\n  $2');
  
  return fixed;
}

// Main function to process files
async function processFiles() {
  console.log('Starting JSX error fixes...');
  
  const patterns = [
    'app/**/*.tsx',
    'app/**/*.ts'
  ];
  
  let processedCount = 0;
  let errorCount = 0;
  
  for (const pattern of patterns) {
    const files = await glob(pattern, { 
      ignore: [
        'node_modules/**',
        'dist/**',
        '*.disabled/**',
        '*-disabled/**',
        'backup*/**',
        '**/*.backup',
        '**/*.broken'
      ]
    })
    for (const file of files) {
      try {


        const content = fs.readFileSync(file, 'utf8');
        
        // Check if file has JSX issues
        if (content.includes('JSX expressions must have one parent element') || 
            content.includes('Expected corresponding JSX closing tag') ||
            content.includes(',)') ||
            content.includes(',;')) {
          
          console.log(`Processing JSX errors in: ${file}`);
          
          let fixed = fixJSXParentElements(content);
          fixed = fixMissingClosingTags(fixed);
          fixed = fixTypeScriptIssues(fixed);
          
          fs.writeFileSync(file, fixed);
          processedCount++;
        }
      

} catch (error) {
        console.error(`Error processing ${file}:`, error.message);
        errorCount++;
      }
    }
  }
  
  console.log(`\nJSX error fixes complete!`);
  console.log(`Files processed: ${processedCount}`);
  console.log(`Errors encountered: ${errorCount}`);
}

// Run the script
processFiles().catch(console.error);