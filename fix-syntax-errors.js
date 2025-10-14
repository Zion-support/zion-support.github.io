#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to fix common syntax errors
function fixSyntaxErrors(content, filePath) {
  let fixed = content;
  let changes = 0;

  // Fix 1: Function names that should be quoted (like 404)
  if (filePath.includes('404.tsx') || filePath.includes('not-found.tsx')) {
    fixed = fixed.replace(/export default function 404\(\)/g, 'export default function NotFound()');
    fixed = fixed.replace(/export default function not-found\(\)/g, 'export default function NotFound()');
    changes++;
  }

  // Fix 2: Unterminated string literals with semicolons
  fixed = fixed.replace(/content="([^"]*);/g, 'content="$1"');
  fixed = fixed.replace(/className="([^"]*);/g, 'className="$1"');
  fixed = fixed.replace(/title="([^"]*);/g, 'title="$1"');
  fixed = fixed.replace(/alt="([^"]*);/g, 'alt="$1"');
  fixed = fixed.replace(/href="([^"]*);/g, 'href="$1"');
  fixed = fixed.replace(/src="([^"]*);/g, 'src="$1"');
  
  // Fix 3: Malformed 'use client' directive
  fixed = fixed.replace(/'use client;;/g, "'use client';");
  fixed = fixed.replace(/'use client;'/g, "'use client';");
  
  // Fix 4: Remove duplicate return statements
  const returnMatches = fixed.match(/return\s*\(/g);
  if (returnMatches && returnMatches.length > 1) {
    // Find the first return statement and remove subsequent ones
    const lines = fixed.split('\n');
    let returnCount = 0;
    const newLines = [];
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      if (line.trim().startsWith('return')) {
        returnCount++;
        if (returnCount === 1) {
          newLines.push(line);
        }
        // Skip subsequent return statements
      } else {
        newLines.push(line);
      }
    }
    fixed = newLines.join('\n');
    changes++;
  }

  // Fix 5: Fix unterminated JSX attributes
  fixed = fixed.replace(/className="([^"]*)$/gm, 'className="$1"');
  fixed = fixed.replace(/content="([^"]*)$/gm, 'content="$1"');
  fixed = fixed.replace(/title="([^"]*)$/gm, 'title="$1"');
  
  // Fix 6: Fix malformed JSX closing tags
  fixed = fixed.replace(/\);$/gm, ');');
  fixed = fixed.replace(/\);$/gm, ');');
  
  // Fix 7: Fix unterminated string literals in general
  fixed = fixed.replace(/'([^']*)$/gm, "'$1'");
  fixed = fixed.replace(/"([^"]*)$/gm, '"$1"');
  
  // Fix 8: Remove stray semicolons in JSX
  fixed = fixed.replace(/;$/gm, '');
  
  // Fix 9: Fix malformed function declarations
  fixed = fixed.replace(/export default function ComponentsPage\(\) \{\}/g, 'export default function ComponentsPage() {');
  
  // Fix 10: Fix unterminated string literals with specific patterns
  fixed = fixed.replace(/content="([^"]*);/g, 'content="$1"');
  fixed = fixed.replace(/className="([^"]*);/g, 'className="$1"');
  
  return { content: fixed, changes };
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const { content: fixedContent, changes } = fixSyntaxErrors(content, filePath);
    
    if (changes > 0) {
      fs.writeFileSync(filePath, fixedContent, 'utf8');
      console.log(`Fixed ${changes} issues in ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
async function main() {
  console.log('Starting syntax error fixes...');

  // Get all TypeScript/JavaScript files
  const files = await glob('**/*.{ts,tsx,js,jsx}', {
    ignore: ['node_modules/**', 'dist/**', '.next/**', 'out/**']
  });

  let totalFixed = 0;
  let filesProcessed = 0;

  for (const file of files) {
    if (processFile(file)) {
      totalFixed++;
    }
    filesProcessed++;
  }

  console.log(`\nProcessed ${filesProcessed} files`);
  console.log(`Fixed syntax errors in ${totalFixed} files`);
  console.log('Syntax error fixes completed!');
}

main().catch(console.error);