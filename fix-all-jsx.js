import fs from 'fs';
import { glob } from 'glob';

async function fixAllJSX() {
  const files = await glob('app/**/*.tsx');
  let fixedCount = 0;

  for (const file of files) {
    try {
      let content = fs.readFileSync(file, 'utf8');
      let modified = false;

      // Fix common JSX issues
      const fixes = [
        // Fix malformed div tags
        { pattern: /<\/div><div>/g, replacement: '<div>' },
        { pattern: /<\/div><div className=/g, replacement: '<div className=' },
        { pattern: /<\/div><div>/g, replacement: '<div>' },
        
        // Fix missing closing tags
        { pattern: /<section([^>]*)>([\s\S]*?)(?=<section|$)/g, replacement: (match, attrs, content) => {
          if (!content.includes('</section>')) {
            return `<section${attrs}>${content}</section>`;
          }
          return match;
        }},
        
        // Fix missing closing div tags
        { pattern: /<div([^>]*)>([\s\S]*?)(?=<div|$)/g, replacement: (match, attrs, content) => {
          if (!content.includes('</div>') && !content.includes('<section') && !content.includes('<main')) {
            return `<div${attrs}>${content}</div>`;
          }
          return match;
        }},
        
        // Fix missing closing main tags
        { pattern: /<main([^>]*)>([\s\S]*?)(?=<main|$)/g, replacement: (match, attrs, content) => {
          if (!content.includes('</main>')) {
            return `<main${attrs}>${content}</main>`;
          }
          return match;
        }},
        
        // Fix JSX fragment issues
        { pattern: /<>([\s\S]*?)(?=<>|$)/g, replacement: (match, content) => {
          if (!content.includes('</>')) {
            return `<>${content}</>`;
          }
          return match;
        }}
      ];

      // Apply fixes
      fixes.forEach(fix => {
        if (typeof fix.replacement === 'function') {
          const newContent = content.replace(fix.pattern, fix.replacement);
          if (newContent !== content) {
            content = newContent;
            modified = true;
          }
        } else {
          const newContent = content.replace(fix.pattern, fix.replacement);
          if (newContent !== content) {
            content = newContent;
            modified = true;
          }
        }
      });

      if (modified) {
        fs.writeFileSync(file, content, 'utf8');
        console.log(`Fixed: ${file}`);
        fixedCount++;
      }
    } catch (error) {
      console.error(`Error fixing ${file}:`, error.message);
    }
  }

  console.log(`Fixed ${fixedCount} files`);
}

fixAllJSX().catch(console.error);