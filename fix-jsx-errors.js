#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Find all TypeScript/JSX files in the app directory
const files = glob.sync('app/**/*.{tsx,ts}', { cwd: process.cwd() });

console.log(`Found ${files.length} files to process...`);

let fixedCount = 0;

files.forEach(file => {
  try {
    let content = fs.readFileSync(file, 'utf8');
    let originalContent = content;
    
    // Fix malformed Tailwind classes
    content = content.replace(/slate-9\s+0\s+0/g, 'slate-900');
    content = content.replace(/purple-9\s+0\s+0/g, 'purple-900');
    content = content.replace(/gray-9\s+0\s+0/g, 'gray-900');
    content = content.replace(/blue-9\s+0\s+0/g, 'blue-900');
    content = content.replace(/green-9\s+0\s+0/g, 'green-900');
    content = content.replace(/purple-9\s+0\s+0/g, 'purple-900');
    content = content.replace(/red-9\s+0\s+0/g, 'red-900');
    content = content.replace(/yellow-9\s+0\s+0/g, 'yellow-900');
    content = content.replace(/indigo-9\s+0\s+0/g, 'indigo-900');
    content = content.replace(/pink-9\s+0\s+0/g, 'pink-900');
    
    content = content.replace(/gray-3\s+0\s+0/g, 'gray-300');
    content = content.replace(/blue-7\s+0\s+0/g, 'blue-700');
    content = content.replace(/green-7\s+0\s+0/g, 'green-700');
    content = content.replace(/purple-7\s+0\s+0/g, 'purple-700');
    content = content.replace(/red-7\s+0\s+0/g, 'red-700');
    content = content.replace(/yellow-7\s+0\s+0/g, 'yellow-700');
    content = content.replace(/indigo-7\s+0\s+0/g, 'indigo-700');
    content = content.replace(/pink-7\s+0\s+0/g, 'pink-700');
    
    content = content.replace(/blue-2\s+0\s+0/g, 'blue-200');
    content = content.replace(/green-2\s+0\s+0/g, 'green-200');
    content = content.replace(/purple-2\s+0\s+0/g, 'purple-200');
    content = content.replace(/red-2\s+0\s+0/g, 'red-200');
    content = content.replace(/yellow-2\s+0\s+0/g, 'yellow-200');
    content = content.replace(/indigo-2\s+0\s+0/g, 'indigo-200');
    content = content.replace(/pink-2\s+0\s+0/g, 'pink-200');
    
    // Fix missing closing JSX fragments
    if (content.includes('<>') && !content.includes('</>')) {
      // Find the last closing div before the return statement ends
      const returnMatch = content.match(/return\s*\(\s*<>[\s\S]*?(\s*\)\s*;)/);
      if (returnMatch) {
        const beforeReturn = returnMatch[0].slice(0, -returnMatch[1].length);
        const afterReturn = returnMatch[1];
        content = content.replace(returnMatch[0], beforeReturn + '\n    </>' + afterReturn);
      }
    }
    
    // Fix malformed JSX with extra spaces and line breaks
    content = content.replace(/\s+mb-2\s+\s+">/g, ' mb-2">');
    content = content.replace(/\s+text-\w+-\d+\s+\s+">/g, (match) => {
      return match.replace(/\s+/g, ' ').trim() + '">';
    });
    
    // Fix incomplete JSX structures
    content = content.replace(/\s+">\s*$/gm, '">');
    content = content.replace(/\s+">\s*\n\s*<\/h3>/g, '">\n                </h3>');
    content = content.replace(/\s+">\s*\n\s*<\/p>/g, '">\n                </p>');
    
    // Clean up extra whitespace and malformed structures
    content = content.replace(/\s+\s+/g, ' ');
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    // Fix specific patterns like "5g" to "5G"
    content = content.replace(/\b5g\b/g, '5G');
    content = content.replace(/\b5G\s+([a-z])/g, (match, letter) => `5G ${letter.toUpperCase()}`);
    
    // Remove duplicate content blocks
    const lines = content.split('\n');
    const seen = new Set();
    const cleanedLines = [];
    
    for (const line of lines) {
      const trimmed = line.trim();
      if (trimmed && !seen.has(trimmed)) {
        seen.add(trimmed);
        cleanedLines.push(line);
      } else if (!trimmed) {
        cleanedLines.push(line);
      }
    }
    
    content = cleanedLines.join('\n');
    
    // Remove trailing empty lines and fix final structure
    content = content.replace(/\n\s*\n\s*$/, '\n');
    
    if (content !== originalContent) {
      fs.writeFileSync(file, content, 'utf8');
      console.log(`Fixed: ${file}`);
      fixedCount++;
    }
    
  } catch (error) {
    console.error(`Error processing ${file}:`, error.message);
  }
});

console.log(`\nFixed ${fixedCount} files.`);