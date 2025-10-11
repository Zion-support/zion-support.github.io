#!/usr/bin/env node

import fs from 'fs';
import { glob } from 'glob';

// Function to fix final syntax errors
function fixFinalErrors(content) {
  let fixed = content;
  
  // Remove stray semicolons and malformed JSX
  fixed = fixed.replace(/;\s*$/gm, '');
  fixed = fixed.replace(/;\s*<[^>]*>/g, (match) => match.replace(';', ''));
  fixed = fixed.replace(/<[^>]*>;\s*$/gm, (match) => match.replace(';', ''));
  
  // Fix malformed JSX attributes
  fixed = fixed.replace(/<(\w+)([^>]*?);\s*>/g, '<$1$2>');
  
  // Fix missing closing tags
  const lines = fixed.split('\n');
  const fixedLines = [];
  let openTags = [];
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    // Track opening tags
    const openTagMatch = line.match(/<(\w+)(?:\s[^>]*)?>(?!\s*<\/\1>)/g);
    if (openTagMatch) {
      openTagMatch.forEach(tag => {
        const tagName = tag.match(/<(\w+)/)[1];
        if (!['img', 'br', 'hr', 'input', 'meta', 'link', 'Helmet'].includes(tagName)) {
          openTags.push(tagName);
        }
      });
    }
    
    // Track closing tags
    const closeTagMatch = line.match(/<\/(\w+)>/g);
    if (closeTagMatch) {
      closeTagMatch.forEach(tag => {
        const tagName = tag.match(/<\/(\w+)>/)[1];
        const index = openTags.lastIndexOf(tagName);
        if (index !== -1) {
          openTags.splice(index, 1);
        }
      });
    }
    
    fixedLines.push(line);
    
    // Add missing closing tags at the end
    if (i === lines.length - 1 && openTags.length > 0) {
      for (let j = openTags.length - 1; j >= 0; j--) {
        fixedLines.push('  '.repeat(j + 1) + `</${openTags[j]}>`);
      }
    }
  }
  
  fixed = fixedLines.join('\n');
  
  // Fix JSX expressions that need single parent
  const returnMatch = fixed.match(/return\s*\(\s*([\s\S]*?)\s*\)\s*;?\s*}/);
  if (returnMatch) {
    const returnContent = returnMatch[1].trim();
    const lines = returnContent.split('\n');
    
    // Check if there are multiple top-level elements
    let topLevelElements = 0;
    let inJSX = false;
    let braceCount = 0;
    
    for (const line of lines) {
      const trimmed = line.trim();
      if (trimmed.startsWith('<') && !trimmed.startsWith('</') && !trimmed.includes('//')) {
        if (braceCount === 0) {
          topLevelElements++;
        }
        inJSX = true;
      }
      if (trimmed.includes('{')) {
        braceCount += (line.match(/\{/g) || []).length;
      }
      if (trimmed.includes('}')) {
        braceCount -= (line.match(/\}/g) || []).length;
      }
    }
    
    // If multiple top-level elements, wrap in fragment
    if (topLevelElements > 1 && !returnContent.includes('<>') && !returnContent.includes('<React.Fragment>')) {
      fixed = fixed.replace(returnMatch[0], `return (\n    <>\n${returnContent}\n    </>\n  );`);
    }
  }
  
  return fixed;
}

// Function to process a single file
function processFile(filePath) {
  try {
    console.log(`Processing: ${filePath}`);
    
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Skip if not a React component file
    if (!filePath.endsWith('.tsx') && !filePath.endsWith('.jsx')) {
      return;
    }
    
    // Fix final errors
    const fixed = fixFinalErrors(content);
    
    // Only write if content changed
    if (fixed !== content) {
      fs.writeFileSync(filePath, fixed, 'utf8');
      console.log(`✓ Fixed: ${filePath}`);
    }
  } catch (error) {
    console.error(`✗ Error processing ${filePath}:`, error.message);
  }
}

// Main execution
async function main() {
  console.log('Starting final error fixes...');
  
  // Get all TypeScript/JavaScript files
  const patterns = [
    'app/**/*.tsx',
    'components/**/*.tsx',
    '*.tsx',
    '*.jsx'
  ];
  
  let allFiles = [];
  
  for (const pattern of patterns) {
    const files = await glob(pattern, { cwd: process.cwd() });
    allFiles = allFiles.concat(files);
  }
  
  // Remove duplicates
  allFiles = [...new Set(allFiles)];
  
  console.log(`Found ${allFiles.length} files to process`);
  
  // Process each file
  allFiles.forEach(processFile);
  
  console.log('Final error fixes completed!');
}

// Run the main function
main().catch(console.error);

export { fixFinalErrors, processFile };