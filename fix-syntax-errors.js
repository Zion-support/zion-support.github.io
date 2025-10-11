#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to fix common syntax errors in JSX files
function fixSyntaxErrors(content) {
  let fixed = content;

  // Fix malformed import statements
  fixed = fixed.replace(/import\s*{\s*Helmet;\s*}\s*from\s*['"]react-helmet-async['"]/g, 
    "import { Helmet } from 'react-helmet-async'");
  
  // Fix malformed object syntax with extra semicolons
  fixed = fixed.replace(/{\s*;\s*,/g, '{');
  fixed = fixed.replace(/,\s*;\s*}/g, '}');
  fixed = fixed.replace(/;\s*,/g, ',');
  fixed = fixed.replace(/,\s*;/g, ',');
  
  // Fix malformed array syntax
  fixed = fixed.replace(/\[\s*;\s*,/g, '[');
  fixed = fixed.replace(/,\s*;\s*\]/g, ']');
  
  // Remove orphaned closing tags that appear after export default
  const exportDefaultRegex = /export\s+default\s+\w+[\s\S]*?(?=\n\s*<\/\w+>)/g;
  const matches = fixed.match(exportDefaultRegex);
  if (matches) {
    matches.forEach(match => {
      const afterExport = fixed.substring(fixed.indexOf(match) + match.length);
      const orphanedTags = afterExport.match(/\s*<\/\w+>/g);
      if (orphanedTags) {
        orphanedTags.forEach(tag => {
          fixed = fixed.replace(tag, '');
        });
      }
    });
  }
  
  // Fix malformed JSX fragments
  fixed = fixed.replace(/<>\s*\)\s*<\/>/g, '</>');
  fixed = fixed.replace(/<>\s*\)\s*\)\s*<\/>/g, '</>');
  
  // Fix missing opening tags for common elements
  fixed = fixed.replace(/(\s*)<\/Footer>(\s*)(?!\s*<\/)/g, '$1</Footer>$2');
  fixed = fixed.replace(/(\s*)<\/Navigation>(\s*)(?!\s*<\/)/g, '$1</Navigation>$2');
  fixed = fixed.replace(/(\s*)<\/ArrowRight>(\s*)(?!\s*<\/)/g, '$1</ArrowRight>$2');
  fixed = fixed.replace(/(\s*)<\/CheckCircle>(\s*)(?!\s*<\/)/g, '$1</CheckCircle>$2');
  
  // Fix malformed JSX structure
  fixed = fixed.replace(/\s*\)\s*\)\s*\)\s*<\/\w+>/g, '');
  fixed = fixed.replace(/\s*\)\s*\)\s*<\/\w+>/g, '');
  fixed = fixed.replace(/\s*\)\s*<\/\w+>/g, '');
  
  // Fix missing closing tags for common patterns
  fixed = fixed.replace(/(<div[^>]*>)(?!.*<\/div>)/g, (match, opening) => {
    // Check if there's a corresponding closing tag
    const content = fixed.substring(fixed.indexOf(match));
    const closingIndex = content.indexOf('</div>');
    if (closingIndex === -1) {
      return match;
    }
    return match;
  });
  
  return fixed;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixSyntaxErrors(content);
    
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

// Main function
async function main() {
  const patterns = [
    'app/**/*.tsx',
    'app/**/*.ts',
    '*.tsx',
    '*.ts'
  ];
  
  let totalFixed = 0;
  
  for (const pattern of patterns) {
    const files = await glob(pattern, { 
      ignore: [
        'node_modules/**',
        'dist/**',
        '.next/**',
        '**/disabled/**',
        '**/backup/**',
        '**/disabled*/**'
      ]
    });
    
    for (const file of files) {
      if (processFile(file)) {
        totalFixed++;
      }
    }
  }
  
  console.log(`\nTotal files fixed: ${totalFixed}`);
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { fixSyntaxErrors, processFile };