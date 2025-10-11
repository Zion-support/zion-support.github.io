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

    // Check if file has JSX mixed in arrays or objects
    if (content.includes('const ') && content.includes('<') && content.includes('>')) {
      const lines = content.split('\n');
      let inArray = false;
      let inObject = false;
      let braceCount = 0;
      let bracketCount = 0;
      let newLines = [];
      
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        
        // Track array/object state
        for (let char of line) {
          if (char === '[') bracketCount++;
          if (char === ']') bracketCount--;
          if (char === '{') braceCount++;
          if (char === '}') braceCount--;
        }
        
        inArray = bracketCount > 0;
        inObject = braceCount > 0;
        
        // Skip lines that have JSX inside arrays/objects
        if ((inArray || inObject) && line.includes('<') && line.includes('>')) {
          console.log(`Skipping corrupted line in ${file}: ${line.trim()}`);
          continue;
        }
        
        newLines.push(line);
      }
      
      if (newLines.length !== lines.length) {
        content = newLines.join('\n');
        modified = true;
      }
    }

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

    // Remove lines with malformed JSX in wrong places
    const lines = content.split('\n');
    const cleanLines = lines.filter(line => {
      // Skip lines that have JSX in wrong contexts
      if (line.trim().startsWith('const ') && line.includes('<') && line.includes('>')) {
        return false;
      }
      if (line.trim().startsWith('[') && line.includes('<') && line.includes('>')) {
        return false;
      }
      if (line.trim().startsWith('{') && line.includes('<') && line.includes('>')) {
        return false;
      }
      return true;
    });
    
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