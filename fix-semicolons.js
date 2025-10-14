#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to fix semicolon issues
function fixSemicolons(content) {
  let fixed = content;
  
  // Fix missing semicolons after 'use client' directive
  fixed = fixed.replace(/^'use client';\s*$/gm, "'use client';");
  
  // Fix missing semicolons after imports
  fixed = fixed.replace(/import\s+.*?from\s+["'][^"']*["']\s*(?=\n)/g, (match) => {
    if (!match.endsWith(';')) {
      return match + ';';
    }
    return match;
  });
  
  // Fix unterminated string literals
  fixed = fixed.replace(/import\s+.*?from\s+["']([^"']*?)(?=\s*["'])/g, (match, importPath) => {
    const cleanPath = importPath.replace(/["']/g, '');
    return match.replace(importPath, `"${cleanPath}"`);
  });
  
  // Fix unterminated string literals in JSX attributes
  fixed = fixed.replace(/="([^"]*?)(?=\s*\/?>)/g, (match, content) => {
    if (content.includes('"') && !content.endsWith('"')) {
      const cleanContent = content.replace(/"/g, '&quot;');
      return `="${cleanContent}"`;
    }
    return match;
  });
  
  return fixed;
}

// Main function to process files
async function fixAllFiles() {
  console.log('Fixing semicolon issues...');
  
  // Get all TypeScript and TSX files
  const files = await glob('app/**/*.{ts,tsx}', { cwd: process.cwd() });
  
  let fixedCount = 0;
  let errorCount = 0;
  
  for (const file of files) {
    try {
      const filePath = path.join(process.cwd(), file);
      const content = fs.readFileSync(filePath, 'utf8');
      
      // Apply fixes
      const fixedContent = fixSemicolons(content);
      
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