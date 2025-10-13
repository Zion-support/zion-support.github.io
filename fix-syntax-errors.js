#!/usr/bin/env node

import fs from 'fs';
import { glob } from 'glob';

async function fixSyntaxErrors() {
  console.log('Fixing syntax errors...');
  
  const patterns = [
    'api/**/*.{js,ts}',
    'app-broken/**/*.{js,ts,tsx}',
    'app-disabled/**/*.{js,ts,tsx}',
  ];
  
  let totalFixed = 0;
  
  for (const pattern of patterns) {
    const files = await glob(pattern, { cwd: process.cwd() });
    for (const file of files) {
      try {
        let content = fs.readFileSync(file, 'utf8');
        let modified = false;
        
        // Fix common syntax errors
        const fixes = [
          // Fix missing semicolons after console.error
          { pattern: /console\.error\('[^']*'(?!;)/g, replacement: (match) => match + ';' },
          { pattern: /console\.log\('[^']*'(?!;)/g, replacement: (match) => match + ';' },
          
          // Fix missing semicolons after return statements
          { pattern: /return [^;]+(?!;)/g, replacement: (match) => match + ';' },
          
          // Fix missing semicolons after if statements
          { pattern: /if \([^)]+\)\s*$/gm, replacement: (match) => match + ';' },
          
          // Fix incomplete JSON.stringify calls
          { pattern: /JSON\.stringify\(\{[^}]*$/g, replacement: (match) => match + '})' },
          
          // Fix incomplete res.status calls
          { pattern: /res\.status\(\d+\)\.json\(\{[^}]*$/g, replacement: (match) => match + '})' },
          
          // Fix incomplete res.setHeader calls
          { pattern: /res\.setHeader\('[^']*',\s*'[^']*$/g, replacement: (match) => match + "');" },
          
          // Fix missing closing braces
          { pattern: /\{([^}]*)$/gm, replacement: (match, content) => {
            if (content.trim() && !content.includes('}')) {
              return match + '}';
            }
            return match;
          }},
          
          // Fix missing closing parentheses
          { pattern: /\(([^)]*)$/gm, replacement: (match, content) => {
            if (content.trim() && !content.includes(')')) {
              return match + ')';
            }
            return match;
          }},
        ];
        
        fixes.forEach(fix => {
          const newContent = content.replace(fix.pattern, fix.replacement);
          if (newContent !== content) {
            content = newContent;
            modified = true;
          }
        });
        
        if (modified) {
          fs.writeFileSync(file, content, 'utf8');
          console.log(`Fixed: ${file}`);
          totalFixed++;
        }
      } catch (error) {
        console.error(`Error fixing ${file}:`, error.message);
      }
    }
  }
  
  console.log(`Fixed ${totalFixed} files`);
}

if (import.meta.url === `file://${process.argv[1]}`) {
  fixSyntaxErrors();
}

export { fixSyntaxErrors };