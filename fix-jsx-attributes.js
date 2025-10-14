#!/usr/bin/env node

import fs from 'fs';
import { glob } from 'glob';

// Function to fix JSX attribute issues
function fixJSXAttributes(content) {
  let fixed = content;

  // Fix malformed JSX attributes with unescaped > characters
  fixed = fixed.replace(/content="([^"]*?)>([^"]*?)"/g, 'content="$1&gt;$2"');
  fixed = fixed.replace(/name="([^"]*?)>([^"]*?)"/g, 'name="$1&gt;$2"');
  fixed = fixed.replace(/description="([^"]*?)>([^"]*?)"/g, 'description="$1&gt;$2"');
  fixed = fixed.replace(/title="([^"]*?)>([^"]*?)"/g, 'title="$1&gt;$2"');
  
  // Fix malformed JSX attributes with missing quotes
  fixed = fixed.replace(/content="([^"]*?)(?=\s*\/>)/g, 'content="$1"');
  fixed = fixed.replace(/name="([^"]*?)(?=\s*\/>)/g, 'name="$1"');
  fixed = fixed.replace(/description="([^"]*?)(?=\s*\/>)/g, 'description="$1"');
  fixed = fixed.replace(/title="([^"]*?)(?=\s*\/>)/g, 'title="$1"');
  
  // Fix malformed JSX with orphaned closing tags
  fixed = fixed.replace(/<\/[^>]*>\s*<\/[^>]*>\s*<\/[^>]*>/g, (match) => {
    const tags = match.match(/<\/[^>]*>/g);
    return tags[tags.length - 1];
  });
  
  // Fix malformed function returns
  fixed = fixed.replace(/return\s*\(\s*<[^>]*>\s*\)\s*;\s*\)\s*;\s*\)\s*;/g, 'return (');
  fixed = fixed.replace(/return\s*\(\s*<[^>]*>\s*\)\s*;\s*\)\s*;/g, 'return (');
  
  // Fix multiple closing parentheses and semicolons
  fixed = fixed.replace(/\)\s*;\s*\)\s*;\s*\)\s*;/g, ');');
  fixed = fixed.replace(/\)\s*;\s*\)\s*;/g, ');');
  
  // Fix orphaned semicolons and braces
  fixed = fixed.replace(/;\s*}\s*;\s*}\s*;\s*}/g, '}');
  fixed = fixed.replace(/;\s*}\s*;\s*}/g, '}');
  
  // Fix malformed JSX structure
  fixed = fixed.replace(/<([^>]+)>\s*<\/\1>\s*<([^>]+)>/g, '<$1>');
  
  // Fix unterminated JSX elements
  fixed = fixed.replace(/<([^>]+)(?![^<]*\/>)(?![^<]*<\/\1>)/g, (match, tagName) => {
    if (match.includes('=') && !match.includes('/>')) {
      return match + '>';
    }
    return match;
  });

  // Fix specific malformed patterns
  fixed = fixed.replace(/export default function Page\(\) \{'  return \(\s*<React\.Fragment>\s*\)\s*;\s*<\/React\.Fragment>/g, 
    'export default function Page() {\n  return (\n    <React.Fragment>\n    </React.Fragment>\n  );');
  
  // Fix malformed JSX with orphaned closing tags
  fixed = fixed.replace(/<div[^>]*>\s*<\/div>\s*<\/div>/g, '<div>');
  fixed = fixed.replace(/<main[^>]*>\s*<\/main>\s*<\/main>/g, '<main>');
  fixed = fixed.replace(/<section[^>]*>\s*<\/section>\s*<\/section>/g, '<section>');
  
  // Fix malformed function returns
  fixed = fixed.replace(/return\s*\(\s*<[^>]*>\s*\)\s*;\s*\)\s*;\s*\)\s*;/g, 'return (');
  fixed = fixed.replace(/return\s*\(\s*<[^>]*>\s*\)\s*;\s*\)\s*;/g, 'return (');
  
  // Fix malformed JSX structure
  fixed = fixed.replace(/<([^>]+)>\s*<\/\1>\s*<([^>]+)>/g, '<$1>');
  
  // Fix unterminated JSX elements
  fixed = fixed.replace(/<([^>]+)(?![^<]*\/>)(?![^<]*<\/\1>)/g, (match, tagName) => {
    if (match.includes('=') && !match.includes('/>')) {
      return match + '>';
    }
    return match;
  });

  return fixed;
}

// Function to fix specific file patterns
function fixFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixJSXAttributes(content);
    
    if (content !== fixed) {
      fs.writeFileSync(filePath, fixed, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
async function main() {
  console.log('Starting JSX attribute fixes...');

  // Get all TypeScript/JavaScript files
  const patterns = [
    'app/**/*.tsx',
    'app/**/*.ts',
    'app/**/*.jsx',
    'app/**/*.js',
    '__tests__/**/*.tsx',
    '__tests__/**/*.ts'
  ];

  let totalFixed = 0;

  for (const pattern of patterns) {
    const files = await glob(pattern, { cwd: process.cwd() });
    for (const file of files) {
      if (fixFile(file)) {
        totalFixed++;
      }
    }
  }

  console.log(`Fixed ${totalFixed} files.`);
}

main().catch(console.error);