#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Find all TypeScript/TSX files
const files = glob.sync('app/**/*.{ts,tsx}', { ignore: ['node_modules/**'] });

console.log(`Found ${files.length} files to check`);

let fixedCount = 0;

files.forEach(file => {
  try {
    let content = fs.readFileSync(file, 'utf8');
    let modified = false;

    // Fix malformed imports: }}from -> } from
    if (content.includes('}}from')) {
      content = content.replace(/}}from/g, '} from');
      modified = true;
    }

    // Fix malformed JSX tags: <$2 /> -> <div />
    if (content.includes('<$2 />')) {
      content = content.replace(/<\$2 \/>/g, '<div />');
      modified = true;
    }

    // Fix malformed JSX tags: <$2> -> <div>
    if (content.includes('<$2>')) {
      content = content.replace(/<\$2>/g, '<div>');
      modified = true;
    }

    // Fix malformed JSX tags: </$2> -> </div>
    if (content.includes('</$2>')) {
      content = content.replace(/<\/\$2>/g, '</div>');
      modified = true;
    }

    // Fix malformed syntax: const Component = () => {,
    if (content.includes('const ') && content.includes('() => {,')) {
      content = content.replace(/\(\)\s*=>\s*{,\s*$/gm, '() => {');
      modified = true;
    }

    // Fix malformed syntax: 'use client' without proper placement
    if (content.includes("'use client'") && !content.startsWith("'use client'")) {
      content = content.replace(/'use client'\s*/g, '');
      content = "'use client';\n" + content;
      modified = true;
    }

    // Fix duplicate imports by removing them
    const lines = content.split('\n');
    const seenImports = new Set();
    const cleanLines = [];
    
    for (const line of lines) {
      if (line.trim().startsWith('import ')) {
        if (!seenImports.has(line.trim())) {
          seenImports.add(line.trim());
          cleanLines.push(line);
        }
      } else {
        cleanLines.push(line);
      }
    }
    
    if (cleanLines.length !== lines.length) {
      content = cleanLines.join('\n');
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(file, content);
      console.log(`Fixed: ${file}`);
      fixedCount++;
    }
  } catch (error) {
    console.error(`Error processing ${file}:`, error.message);
  }
});

console.log(`Fixed ${fixedCount} files`);