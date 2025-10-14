#!/usr/bin/env node

import fs from 'fs';
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
    content = content.replace(/\b(slate|purple|gray|blue|green|red|yellow|indigo|pink)-9\s+0\s+0\b/g, '$1-900');
    content = content.replace(/\b(slate|purple|gray|blue|green|red|yellow|indigo|pink)-7\s+0\s+0\b/g, '$1-700');
    content = content.replace(/\b(slate|purple|gray|blue|green|red|yellow|indigo|pink)-3\s+0\s+0\b/g, '$1-300');
    content = content.replace(/\b(slate|purple|gray|blue|green|red|yellow|indigo|pink)-2\s+0\s+0\b/g, '$1-200');
    content = content.replace(/\b(slate|purple|gray|blue|green|red|yellow|indigo|pink)-6\s+0\s+0\b/g, '$1-600');
    content = content.replace(/\b(slate|purple|gray|blue|green|red|yellow|indigo|pink)-8\s+0\s+0\b/g, '$1-800');
    
    // Fix specific patterns like "5g" to "5G"
    content = content.replace(/\b5g\b/g, '5G');
    content = content.replace(/\b5G\s+([a-z])/g, (match, letter) => `5G ${letter.toUpperCase()}`);
    
    // Fix the main issue: malformed function declarations and JSX structure
    // Pattern: const ComponentName: React.FC = () => { return ( <> ... </> ); }
    content = content.replace(
      /const\s+(\w+):\s*React\.FC\s*=\s*\(\s*\)\s*=>\s*{\s*return\s*\(\s*<>/g,
      'const $1: React.FC = () => {\n  return (\n    <>'
    );
    
    // Fix the closing pattern
    content = content.replace(/}\s*export\s+default\s+(\w+);?\s*<\/p>\s*<\/p>/g, '}\n\nexport default $1;');
    content = content.replace(/}\s*export\s+default\s+(\w+);?\s*$/g, '}\n\nexport default $1;');
    
    // Fix missing closing JSX fragments
    if (content.includes('<>') && !content.includes('</>')) {
      // Find the pattern where we have <> but no </>
      const lines = content.split('\n');
      let inFragment = false;
      // let fragmentStartLine = -1;
      
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        if (line.includes('<>') && !line.includes('</>')) {
          inFragment = true;
          // fragmentStartLine = i;
        }
        if (inFragment && line.includes(');')) {
          // Found the end of return statement, need to add </>
          const beforeSemicolon = line.substring(0, line.lastIndexOf(');'));
          const afterSemicolon = line.substring(line.lastIndexOf(');'));
          lines[i] = beforeSemicolon + '\n    </>' + afterSemicolon;
          inFragment = false;
          break;
        }
      }
      content = lines.join('\n');
    }
    
    // Fix malformed JSX attributes
    content = content.replace(/\s+mb-2\s+\s+">/g, ' mb-2">');
    content = content.replace(/\s+text-\w+-\d+\s+\s+">/g, (match) => {
      return match.replace(/\s+/g, ' ').trim() + '">';
    });
    
    // Fix incomplete JSX structures
    content = content.replace(/\s+">\s*$/gm, '">');
    content = content.replace(/\s+">\s*\n\s*<\/h3>/g, '">\n                </h3>');
    content = content.replace(/\s+">\s*\n\s*<\/p>/g, '">\n                </p>');
    
    // Clean up extra whitespace but preserve structure
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    // Remove trailing empty lines
    content = content.replace(/\n\s*$/, '');
    
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