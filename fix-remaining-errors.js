#!/usr/bin/env node

import fs from 'fs';
import { glob } from 'glob';

// Function to fix common parsing errors
function fixParsingErrors(content) {
  // Fix malformed JSX with unexpected tokens
  content = content.replace(/(\w+="[^"]*")\s*>\s*([^<]+)\s*>\s*([^<]+)\s*<\/\w+>/g, '$1>$2</$3>');
  
  // Fix malformed onClick handlers with unexpected tokens
  content = content.replace(/onClick=\{\(\) => ([^}]+)\}\s*>\s*([^<]+)\s*>\s*([^<]+)\s*<\/button>/g, 'onClick={() => $1}>$2</button>');
  
  // Fix malformed className attributes
  content = content.replace(/className=\{`([^`]+)`\}\s*>\s*([^<]+)\s*className=\{`([^`]+)`\}/g, 'className={`$1`}>$2');
  
  // Fix missing closing braces in JSX
  content = content.replace(/(\w+="[^"]*")\s*>\s*([^<]+)\s*>\s*([^<]+)\s*<\/\w+>/g, '$1>$2</$3>');
  
  // Fix malformed motion.button tags
  content = content.replace(/<motion\.button([^>]*)>\s*([^<]+)\s*>\s*([^<]+)\s*<\/motion\.button>/g, '<motion.button$1>$2</motion.button>');
  
  // Fix missing commas in object literals
  content = content.replace(/(\w+):\s*([^,}]+)\s*(\w+):/g, '$1: $2, $3:');
  
  // Fix malformed JSX expressions
  content = content.replace(/(\w+="[^"]*")\s*>\s*([^<]+)\s*>\s*([^<]+)\s*<\/\w+>/g, '$1>$2</$3>');
  
  return content;
}

// Function to fix specific file patterns
function fixSpecificFiles(content, filePath) {
  // Fix ServiceCard.tsx specific issue
  if (filePath.includes('ServiceCard.tsx')) {
    content = content.replace(/(\w+="[^"]*")\s*>\s*([^<]+)\s*>\s*([^<]+)\s*<\/\w+>/g, '$1>$2</$3>');
  }
  
  // Fix FileUpload.tsx specific issue
  if (filePath.includes('FileUpload.tsx')) {
    content = content.replace(/(\w+):\s*([^,}]+)\s*(\w+):/g, '$1: $2, $3:');
  }
  
  return content;
}

async function main() {
  // Get all TypeScript/JavaScript files in src/components
  const files = await glob('src/components/**/*.{ts,tsx,js,jsx}');

  let fixedFiles = 0;

  files.forEach(file => {
    try {
      const content = fs.readFileSync(file, 'utf8');
      let fixedContent = content;
      
      // Apply general fixes
      fixedContent = fixParsingErrors(fixedContent);
      
      // Apply file-specific fixes
      fixedContent = fixSpecificFiles(fixedContent, file);
      
      // Only write if content changed
      if (fixedContent !== content) {
        fs.writeFileSync(file, fixedContent, 'utf8');
        console.log(`Fixed: ${file}`);
        fixedFiles++;
      }
    } catch (error) {
      console.error(`Error processing ${file}:`, error.message);
    }
  });

  console.log(`\nFixed ${fixedFiles} files`);
}

main().catch(console.error);