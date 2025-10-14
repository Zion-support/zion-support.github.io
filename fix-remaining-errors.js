#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to fix remaining syntax errors
function fixRemainingErrors(content) {
  let fixed = content;
  
  // Fix missing closing tags for JSX fragments
  // Look for patterns where we have content but missing closing fragment
  fixed = fixed.replace(/(<\/div>)\s*\);\s*}/g, (match, closingDiv) => {
    // Check if we're inside a fragment that needs closing
    const beforeMatch = fixed.substring(0, fixed.indexOf(match));
    const fragmentStart = beforeMatch.lastIndexOf('<>');
    const fragmentEnd = beforeMatch.lastIndexOf('</>');
    
    if (fragmentStart > fragmentEnd && fragmentStart > 0) {
      return closingDiv + '\n    </>\n  );\n}';
    }
    return match;
  });
  
  // Fix unterminated string literals in JSX attributes
  fixed = fixed.replace(/content="([^"]*?)\s*$/gm, (match, content) => {
    if (!content.endsWith('"')) {
      return `content="${content}"`;
    }
    return match;
  });
  
  // Fix unterminated string literals in className
  fixed = fixed.replace(/className="([^"]*?)\s*$/gm, (match, className) => {
    if (!className.endsWith('"')) {
      return `className="${className}"`;
    }
    return match;
  });
  
  // Fix unterminated string literals in title
  fixed = fixed.replace(/<title>([^<]*?)\s*$/gm, (match, title) => {
    if (!title.endsWith('</title>')) {
      return `<title>${title}</title>`;
    }
    return match;
  });
  
  // Fix malformed JSX fragments - add missing closing tags
  fixed = fixed.replace(/(<\/div>)\s*\);\s*}/g, (match, closingDiv) => {
    const beforeMatch = fixed.substring(0, fixed.indexOf(match));
    const openFragments = (beforeMatch.match(/<>/g) || []).length;
    const closeFragments = (beforeMatch.match(/<\/>/g) || []).length;
    
    if (openFragments > closeFragments) {
      return closingDiv + '\n    </>\n  );\n}';
    }
    return match;
  });
  
  // Fix specific patterns for page components
  fixed = fixed.replace(/(<\/div>)\s*\);\s*}/g, (match, closingDiv) => {
    // Check if this is a page component pattern
    if (fixed.includes('export default function Page()') || fixed.includes('const Page = ()')) {
      const beforeMatch = fixed.substring(0, fixed.indexOf(match));
      const hasFragment = beforeMatch.includes('<>');
      const hasClosingFragment = beforeMatch.includes('</>');
      
      if (hasFragment && !hasClosingFragment) {
        return closingDiv + '\n    </>\n  );\n}';
      }
    }
    return match;
  });
  
  // Fix specific malformed components that start with invalid syntax
  if (fixed.startsWith('import React from "react";\nimport { Helmet } from "react-helmet-async";\n\nconst Page = () => {\n  return (\n    <>\n      <Helmet>\n        <title>')) {
    // This is a common pattern, ensure proper closing
    if (!fixed.includes('</>')) {
      fixed = fixed.replace(/(<\/div>)\s*\);\s*}/g, '$1\n    </>\n  );\n}');
    }
  }
  
  return fixed;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixRemainingErrors(content);
    
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
    '**/*.tsx',
    '**/*.ts'
  ];
  
  let totalFixed = 0;
  
  for (const pattern of patterns) {
    const files = await glob(pattern, { 
      ignore: ['node_modules/**', 'dist/**', '.next/**'] 
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
  main().catch(console.error);
}

export { fixRemainingErrors, processFile };