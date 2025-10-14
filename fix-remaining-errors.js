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
    
    // Fix malformed function declarations that are on one line
    content = content.replace(
      /import\s+(\w+)\s+from\s+['"][^'"]+['"];\s*const\s+(\w+)\s*=\s*\(\s*\)\s*=>\s*{\s*const\s+(\w+)\s*=\s*\[/g,
      'import $1 from \'$1\';\n\nconst $2 = () => {\n  const $3 = ['
    );
    
    // Fix missing semicolons after imports
    content = content.replace(/import\s+(\w+)\s+from\s+['"][^'"]+['"]\s*const/g, 'import $1 from \'$1\';\n\nconst');
    
    // Fix malformed JSX attributes
    content = content.replace(/className="h-8w-8/g, 'className="h-8 w-8');
    content = content.replace(/className="ml-2h-4 w-4/g, 'className="ml-2 h-4 w-4');
    content = content.replace(/className="ml-2h-5 w-5/g, 'className="ml-2 h-5 w-5');
    content = content.replace(/className="flexitems-center/g, 'className="flex items-center');
    
    // Fix missing spaces in className attributes
    content = content.replace(/className="([^"]*?)([a-z])([A-Z])/g, 'className="$1$2 $3');
    
    // Fix malformed JSX structure - add proper line breaks
    content = content.replace(/return\s*\(\s*<div/g, 'return (\n    <div');
    content = content.replace(/<div\s+className="min-h-screen/g, '<div className="min-h-screen');
    
    // Fix missing closing tags and fragments
    if (content.includes('<>') && !content.includes('</>')) {
      // Find the pattern where we have <> but no </>
      const lines = content.split('\n');
      let inFragment = false;
      
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        if (line.includes('<>') && !line.includes('</>')) {
          inFragment = true;
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
    
    // Fix duplicate content blocks
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
    
    // Clean up extra whitespace
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
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