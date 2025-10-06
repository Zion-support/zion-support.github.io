#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';
<<<<<<< HEAD

// Find all TypeScript/JSX files in src/components
const files = await glob('src/components/**/*.{tsx,ts}');

console.log(`Found ${files.length} files to check...`);

let fixedFiles = 0;

for (const filePath of files) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;

    // Fix orphaned /> tags (standalone /> on their own lines)
    content = content.replace(/^\s*\/>\s*$/gm, '');

    // Fix unterminated regular expression literals
    // Look for patterns like /pattern without closing /
    content = content.replace(/(\w+):\s*\/[^\/\n]*$/gm, (match, prop) => {
      // If it looks like a regex but isn't closed, it's probably a string
      return `${prop}: '${match.split(':')[1].trim().substring(1)}'`;
    });

    // Fix JSX attributes that look like regex but are actually strings
    content = content.replace(/={\s*\/[^\/\n]*$/gm, match => {
      const value = match
        .match(/={\s*\/[^\/\n]*$/)[0]
        .replace(/={\s*\//, '')
        .trim();
      return `={'${value}'}`;
    });

    // Fix common patterns where /> appears in wrong places
    content = content.replace(/\s*\/>\s*<span/g, ' <span');
    content = content.replace(/\s*\/>\s*<\/span>/g, '</span>');

    // Fix patterns where /> appears before closing tags
    content = content.replace(/\s*\/>\s*<\/div>/g, '</div>');
    content = content.replace(/\s*\/>\s*<\/a>/g, '</a>');
    content = content.replace(/\s*\/>\s*<\/Link>/g, '</Link>');

    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      fixedFiles++;
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

console.log(`\nFixed ${fixedFiles} files.`);
=======
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to fix common JSX errors
function fixJSXErrors(content) {
  let fixed = content;
  
  // Fix unterminated string literals in JSX
  fixed = fixed.replace(/className="([^"]*)\n/g, (match, className) => {
    return `className="${className}"\n`;
  });
  
  // Fix missing closing tags for common elements
  const openTags = ['div', 'section', 'article', 'header', 'main', 'span', 'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
  
  // Fix JSX fragments
  fixed = fixed.replace(/<>([^<]*?)(?=<[^>]*>|$)/g, (match, content) => {
    if (content.trim()) {
      return `<>${content}</>`;
    }
    return match;
  });
  
  // Fix malformed JSX structure - ensure proper nesting
  const lines = fixed.split('\n');
  const stack = [];
  const result = [];
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();
    
    // Skip empty lines and comments
    if (!trimmed || trimmed.startsWith('//') || trimmed.startsWith('/*')) {
      result.push(line);
      continue;
    }
    
    // Check for opening tags
    const openMatch = trimmed.match(/<(\w+)(?:\s[^>]*)?(?:>|\s*$)/);
    if (openMatch) {
      const tagName = openMatch[1];
      if (!trimmed.includes('/>') && !trimmed.includes('</')) {
        stack.push({ tag: tagName, line: i });
      }
      result.push(line);
      continue;
    }
    
    // Check for closing tags
    const closeMatch = trimmed.match(/<\/(\w+)>/);
    if (closeMatch) {
      const tagName = closeMatch[1];
      // Remove from stack
      const stackIndex = stack.findIndex(item => item.tag === tagName);
      if (stackIndex !== -1) {
        stack.splice(stackIndex, 1);
      }
      result.push(line);
      continue;
    }
    
    // Check for self-closing tags
    if (trimmed.includes('/>')) {
      result.push(line);
      continue;
    }
    
    result.push(line);
  }
  
  // Add missing closing tags
  while (stack.length > 0) {
    const { tag } = stack.pop();
    result.push(`</${tag}>`);
  }
  
  return result.join('\n');
}

// Function to fix specific file
function fixFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixJSXErrors(content);
    
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

// Main function
function main() {
  const blogDir = path.join(__dirname, 'app', 'blog');
  
  if (!fs.existsSync(blogDir)) {
    console.error('Blog directory not found');
    return;
  }
  
  // Find all .tsx files in blog directory
  const pattern = path.join(blogDir, '**', '*.tsx');
  const files = glob.sync(pattern);
  
  console.log(`Found ${files.length} TSX files to check`);
  
  let fixedCount = 0;
  
  for (const file of files) {
    if (fixFile(file)) {
      fixedCount++;
    }
  }
  
  console.log(`Fixed ${fixedCount} files`);
}

main();
>>>>>>> origin/fix-errors-and-merge-final
