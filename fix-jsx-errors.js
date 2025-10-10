import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Common JSX fixes
const fixes = [
  // Fix missing closing tags
  {
    pattern: /<section([^>]*)>([\s\S]*?)(?=<section|$)/g,
    replacement: (match, attrs, content) => {
      if (!content.includes('</section>')) {
        return `<section${attrs}>${content}</section>`;
      }
      return match;
    }
  },
  // Fix missing closing div tags
  {
    pattern: /<div([^>]*)>([\s\S]*?)(?=<div|$)/g,
    replacement: (match, attrs, content) => {
      if (!content.includes('</div>') && !content.includes('<section') && !content.includes('<main')) {
        return `<div${attrs}>${content}</div>`;
      }
      return match;
    }
  },
  // Fix missing closing main tags
  {
    pattern: /<main([^>]*)>([\s\S]*?)(?=<main|$)/g,
    replacement: (match, attrs, content) => {
      if (!content.includes('</main>')) {
        return `<main${attrs}>${content}</main>`;
      }
      return match;
    }
  },
  // Fix JSX fragment issues
  {
    pattern: /<>([\s\S]*?)(?=<>|$)/g,
    replacement: (match, content) => {
      if (!content.includes('</>')) {
        return `<>${content}</>`;
      }
      return match;
    }
  }
];

function fixJSXErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Apply fixes
    fixes.forEach(fix => {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    });

    // Fix common syntax errors
    const syntaxFixes = [
      // Fix missing semicolons in imports
      { pattern: /import\s+([^;]+)\s*$/gm, replacement: 'import $1;' },
      // Fix missing closing braces
      { pattern: /(\w+)\s*=\s*\{([^}]*)$/gm, replacement: '$1 = {$2}' },
      // Fix missing closing parentheses
      { pattern: /(\w+)\s*=\s*\(([^)]*)$/gm, replacement: '$1 = ($2)' }
    ];

    syntaxFixes.forEach(fix => {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    });

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed JSX errors in: ${filePath}`);
      return true;
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
  return false;
}

// Find all TSX files with errors
async function main() {
  const files = await glob('app/**/*.tsx');
  let fixedCount = 0;

  files.forEach(file => {
    if (fixJSXErrors(file)) {
      fixedCount++;
    }
  });

  console.log(`Fixed ${fixedCount} files`);
}

main().catch(console.error);