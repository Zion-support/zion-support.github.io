#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to fix the 'use client' directive issue
function fixClientDirective(content, filePath) {
  // Only fix page files and component files
  if (!filePath.includes('/page.tsx') && !filePath.includes('/components/')) {
    return content;
  }
  
  // Check if file already has 'use client' directive
  if (content.includes("'use client'")) {
    return content;
  }
  
  // Add 'use client' directive at the beginning
  const lines = content.split('\n');
  const newLines = ["'use client';", ...lines];
  
  return newLines.join('\n');
}

// Function to fix common syntax issues
function fixCommonSyntax(content) {
  let fixed = content;
  
  // Fix unterminated string literals
  fixed = fixed.replace(/import\s+.*?from\s+["']([^"']*?)(?=\s*["'])/g, (match, importPath) => {
    const cleanPath = importPath.replace(/["']/g, '');
    return match.replace(importPath, `"${cleanPath}"`);
  });
  
  // Fix unterminated string literals in JSX
  fixed = fixed.replace(/="([^"]*?)(?=\s*\/?>)/g, (match, content) => {
    if (content.includes('"') && !content.endsWith('"')) {
      const cleanContent = content.replace(/"/g, '&quot;');
      return `="${cleanContent}"`;
    }
    return match;
  });
  
  // Fix missing semicolons after imports
  fixed = fixed.replace(/import\s+.*?from\s+["'][^"']*["']\s*(?=\n)/g, (match) => {
    if (!match.endsWith(';')) {
      return match + ';';
    }
    return match;
  });
  
  return fixed;
}

// Main function to process files
async function fixAllFiles() {
  console.log('Fixing client directive and syntax issues...');
  
  // Get all TypeScript and TSX files
  const files = await glob('app/**/*.{ts,tsx}', { cwd: process.cwd() });
  
  let fixedCount = 0;
  let errorCount = 0;
  
  for (const file of files) {
    try {
      const filePath = path.join(process.cwd(), file);
      const content = fs.readFileSync(filePath, 'utf8');
      
      // Apply fixes
      let fixedContent = fixClientDirective(content, filePath);
      fixedContent = fixCommonSyntax(fixedContent);
      
      // Only write if content changed
      if (fixedContent !== content) {
        fs.writeFileSync(filePath, fixedContent, 'utf8');
        console.log(`Fixed: ${file}`);
        fixedCount++;
      }
    } catch (error) {
      console.error(`Error fixing ${file}:`, error.message);
      errorCount++;
    }
  }
  
  console.log(`\nFixed ${fixedCount} files, ${errorCount} errors`);
}

// Run the fix
fixAllFiles().catch(console.error);