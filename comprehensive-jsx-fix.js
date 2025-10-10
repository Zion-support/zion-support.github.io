#!/usr/bin/env node

import fs from 'fs';
import { glob } from 'glob';

// Comprehensive JSX fixes
function fixJsxFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix 1: Add missing semicolons after imports
    const importRegex = /import\s+[^;]+$/gm;
    content = content.replace(importRegex, (match) => {
      if (!match.endsWith(';')) {
        modified = true;
        return match + ';';
      }
      return match;
    });

    // Fix 2: Fix malformed JSX fragments - replace empty fragments with proper ones
    content = content.replace(/<React\.Fragment><\/React\.Fragment>/g, '<>');
    content = content.replace(/<React\.Fragment>/g, '<>');
    content = content.replace(/<\/React\.Fragment>/g, '</>');

    // Fix 3: Fix self-closing tags that should be properly closed
    const selfClosingTags = ['img', 'br', 'hr', 'input', 'meta', 'link'];
    selfClosingTags.forEach(tag => {
      const regex = new RegExp(`<${tag}([^>]*?)(?<!/)>`, 'g');
      content = content.replace(regex, (match, attrs) => {
        if (!match.endsWith('/>')) {
          modified = true;
          return `<${tag}${attrs} />`;
        }
        return match;
      });
    });

    // Fix 4: Fix missing closing tags for common elements
    const commonTags = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'div', 'span', 'button', 'section', 'main', 'article', 'aside', 'header', 'footer', 'nav'];
    
    // Fix unclosed tags by adding proper closing tags
    commonTags.forEach(tag => {
      // Find patterns like <tag>content without closing tag
      const openTagRegex = new RegExp(`<${tag}([^>]*?)>([^<]*?)(?![^<]*</${tag}>)`, 'g');
      content = content.replace(openTagRegex, (match, attrs, content) => {
        if (content.trim() && !content.includes(`</${tag}>`)) {
          modified = true;
          return `<${tag}${attrs}>${content}</${tag}>`;
        }
        return match;
      });
    });

    // Fix 5: Fix malformed JSX expressions
    content = content.replace(/\{([^}]*?)\s*$/gm, (match, expr) => {
      if (expr.trim() && !expr.includes('}')) {
        modified = true;
        return `{${expr.trim()}}`;
      }
      return match;
    });

    // Fix 6: Fix missing commas in arrays and objects
    content = content.replace(/(\w+)\s*\n\s*(\w+):/g, '$1,\n    $2:');
    content = content.replace(/(\w+)\s*\n\s*]/g, '$1\n  ]');

    // Fix 7: Fix malformed JSX syntax like missing closing parentheses
    content = content.replace(/\)\s*$/gm, ')');
    content = content.replace(/\(\s*$/gm, '(');

    // Fix 8: Fix missing semicolons in variable declarations
    content = content.replace(/(const|let|var)\s+\w+\s*=\s*[^;]+$/gm, (match) => {
      if (!match.endsWith(';')) {
        modified = true;
        return match + ';';
      }
      return match;
    });

    // Fix 9: Fix malformed JSX attributes
    content = content.replace(/className="([^"]*?)\s*$/gm, 'className="$1"');
    content = content.replace(/style=\{([^}]*?)\s*$/gm, 'style={$1}');

    // Fix 10: Fix missing closing tags in JSX maps
    content = content.replace(/\.map\(([^)]*?)\s*$/gm, '.map($1)');
    content = content.replace(/\)\s*\)\s*$/gm, '))');

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed JSX errors in: ${filePath}`);
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
  // Find all TypeScript/JSX files in the app directory
  const files = await glob('app/**/*.{ts,tsx}');

  console.log(`Found ${files.length} files to check...`);

  let fixedCount = 0;
  files.forEach(file => {
    if (fixJsxFile(file)) {
      fixedCount++;
    }
  });

  console.log(`Fixed ${fixedCount} files`);
}

main().catch(console.error);