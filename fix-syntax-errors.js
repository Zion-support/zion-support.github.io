#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Function to fix common syntax errors in TypeScript/JSX files
function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix common patterns that cause syntax errors
    const fixes = [
      // Fix malformed JSX attributes
      {
        pattern: /(\w+)\s*=\s*{\s*['"`]([^'"`]*?)['"`]\s*}\s*([^>]*?)(\w+)\s*=\s*{\s*['"`]([^'"`]*?)['"`]\s*}/g,
        replacement: '$1={"$2"} $4={"$5"}'
      },
      // Fix missing commas in object literals
      {
        pattern: /(\w+)\s*:\s*([^,}]+)\s*(\w+)\s*:/g,
        replacement: '$1: $2, $3:'
      },
      // Fix unclosed JSX tags
      {
        pattern: /<(\w+)([^>]*?)(?<!\/)>/g,
        replacement: (match, tagName, attributes) => {
          if (match.endsWith('/>')) return match;
          return `<${tagName}${attributes}>`;
        }
      },
      // Fix malformed JSX expressions
      {
        pattern: /\{\s*([^}]*?)\s*\}\s*([^<>\s])/g,
        replacement: '{$1} $2'
      },
      // Fix missing closing tags
      {
        pattern: /<(\w+)([^>]*?)>\s*([^<]*?)\s*$/g,
        replacement: '<$1$2>$3</$1>'
      },
      // Fix malformed object properties
      {
        pattern: /(\w+)\s*:\s*([^,}]+)\s*(\w+)\s*:\s*([^,}]+)/g,
        replacement: '$1: $2,\n    $3: $4'
      }
    ];
    
    for (const fix of fixes) {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    }
    
    // Additional specific fixes for common patterns
    const specificFixes = [
      // Fix malformed JSX with missing closing tags
      {
        pattern: /<div([^>]*)>\s*([^<]*?)\s*$/g,
        replacement: '<div$1>$2</div>'
      },
      // Fix malformed section tags
      {
        pattern: /<section([^>]*)>\s*([^<]*?)\s*$/g,
        replacement: '<section$1>$2</section>'
      },
      // Fix malformed main tags
      {
        pattern: /<main([^>]*)>\s*([^<]*?)\s*$/g,
        replacement: '<main$1>$2</main>'
      },
      // Fix malformed Helmet tags
      {
        pattern: /<Helmet([^>]*)>\s*([^<]*?)\s*$/g,
        replacement: '<Helmet$1>$2</Helmet>'
      }
    ];
    
    for (const fix of specificFixes) {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    }
    
    // Try to fix malformed JSX by ensuring proper closing
    const lines = content.split('\n');
    const fixedLines = [];
    const openTags = [];
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      // Check for opening tags
      const openTagMatch = line.match(/<(\w+)([^>]*?)(?<!\/)>/g);
      if (openTagMatch) {
        for (const tag of openTagMatch) {
          const tagName = tag.match(/<(\w+)/)[1];
          if (tagName && !tag.endsWith('/>') && !['img', 'br', 'hr', 'input', 'meta', 'link'].includes(tagName)) {
            openTags.push(tagName);
          }
        }
      }
      
      // Check for closing tags
      const closeTagMatch = line.match(/<\/(\w+)>/g);
      if (closeTagMatch) {
        for (const tag of closeTagMatch) {
          const tagName = tag.match(/<\/(\w+)>/)[1];
          const index = openTags.lastIndexOf(tagName);
          if (index !== -1) {
            openTags.splice(index, 1);
          }
        }
      }
      
      fixedLines.push(line);
    }
    
    // Add missing closing tags at the end
    if (openTags.length > 0) {
      for (let i = openTags.length - 1; i >= 0; i--) {
        fixedLines.push(`</${openTags[i]}>`);
      }
      modified = true;
    }
    
    if (modified) {
      fs.writeFileSync(filePath, fixedLines.join('\n'), 'utf8');
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing syntax in ${filePath}:`, error.message);
    return false;
  }
}

// Function to find files with syntax errors
function findFilesWithErrors() {
  try {
    const result = execSync('pnpm run type-check 2>&1', { encoding: 'utf8' });
    return [];
  } catch (error) {
    const output = error.stdout || error.stderr || '';
    const files = new Set();
    
    // Extract file paths from TypeScript errors
    const fileMatches = output.match(/app\/[^:]+\.tsx/g);
    if (fileMatches) {
      fileMatches.forEach(file => files.add(`/workspace/${file}`));
    }
    
    return Array.from(files);
  }
}

// Main execution
function main() {
  console.log('Finding files with syntax errors...');
  
  const errorFiles = findFilesWithErrors();
  console.log(`Found ${errorFiles.length} files with syntax errors`);
  
  let fixedCount = 0;
  for (const file of errorFiles) {
    if (fixSyntaxErrors(file)) {
      fixedCount++;
      console.log(`Fixed syntax errors in: ${file}`);
    }
  }
  
  console.log(`Fixed syntax errors in ${fixedCount} files`);
  
  // Run type check again
  try {
    console.log('Running type check...');
    execSync('pnpm run type-check', { stdio: 'inherit' });
    console.log('Type check passed!');
  } catch (error) {
    console.log('Type check still has errors, but some fixes were applied.');
  }
}

main();