#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Common syntax fixes
const fixes = [
  // Fix malformed icon property
  {
    pattern: /ico,\s*n:\s*/g,
    replacement: 'icon: '
  },
  // Fix missing closing brace for function declarations
  {
    pattern: /const\s+(\w+):\s*React\.FC\s*=\s*\(\)\s*=>\s*{([^}]*?)(?=\s*const\s|\s*return\s|\s*$)/g,
    replacement: (match, funcName, body) => {
      // Count opening and closing braces
      let openBraces = (body.match(/{/g) || []).length;
      let closeBraces = (body.match(/}/g) || []).length;
      
      if (openBraces > closeBraces) {
        return `const ${funcName}: React.FC = () => {${body}}`;
      }
      return match;
    }
  },
  // Fix missing closing brace after array declarations
  {
    pattern: /(\]\s*)(?=\s*const\s|\s*return\s)/g,
    replacement: '$1\n  '
  },
  // Fix missing closing tags in JSX
  {
    pattern: /<(\w+)([^>]*?)(?=\s*<[^/]|\s*$)/g,
    replacement: (match, tagName, attributes) => {
      // This is a complex fix that needs more context
      return match;
    }
  }
];

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Apply fixes
    fixes.forEach(fix => {
      if (typeof fix.replacement === 'function') {
        content = content.replace(fix.pattern, fix.replacement);
      } else {
        content = content.replace(fix.pattern, fix.replacement);
      }
    });
    
    // Additional specific fixes
    // Fix missing closing brace for React.FC functions
    content = content.replace(
      /const\s+(\w+):\s*React\.FC\s*=\s*\(\)\s*=>\s*{([^}]*?)(?=\s*const\s|\s*return\s)/g,
      (match, funcName, body) => {
        const lines = body.split('\n');
        let braceCount = 0;
        let fixedBody = '';
        
        for (let i = 0; i < lines.length; i++) {
          const line = lines[i];
          braceCount += (line.match(/{/g) || []).length;
          braceCount -= (line.match(/}/g) || []).length;
          fixedBody += line + '\n';
        }
        
        if (braceCount > 0) {
          fixedBody += '  '.repeat(Math.max(0, 2 - fixedBody.split('\n').length)) + '}';
        }
        
        return `const ${funcName}: React.FC = () => {${fixedBody}`;
      }
    );
    
    // Fix malformed object properties
    content = content.replace(/ico,\s*n:\s*/g, 'icon: ');
    
    // Fix missing closing braces in arrays
    content = content.replace(/(\]\s*)(?=\s*const\s)/g, '$1\n  ');
    
    // Fix missing closing braces in objects
    content = content.replace(/(\}\s*)(?=\s*const\s)/g, '$1\n  ');
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

async function main() {
  // Find all TypeScript/JSX files
  const files = await glob('**/*.{ts,tsx}', {
    ignore: ['node_modules/**', 'dist/**', '.next/**', 'out/**']
  });
  console.log(`Found ${files.length} files to check...`);

  let fixedCount = 0;
  for (const file of files) {
    if (fixFile(file)) {
      fixedCount++;
    }
  }

  console.log(`Fixed ${fixedCount} files`);
}

main().catch(console.error);