#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix merge conflicts
    if (content.includes('<<<<<<< HEAD') || content.includes('=======') || content.includes('>>>>>>>')) {
      content = content.replace(/<<<<<<< HEAD[\s\S]*?=======\n?/g, '');
      content = content.replace(/>>>>>>> [^\n]+/g, '');
      content = content.replace(/<<<<<<< HEAD[\s\S]*?>>>>>>> [^\n]+/g, '');
      modified = true;
    }
    
    // Fix common JSX structure issues
    const fixes = [
      // Fix missing fragment opening
      {
        pattern: /return\s*\(\s*<div className="min-h-screen[^>]*>\s*<Helmet>/g,
        replacement: 'return (\n    <>\n      <Helmet>'
      },
      // Fix missing fragment closing
      {
        pattern: /(\s*)<\/div>\s*\);\s*};/g,
        replacement: '$1</div>\n    </>\n  );\n};'
      },
      // Fix duplicate div wrappers
      {
        pattern: /<div className="min-h-screen[^>]*>\s*<Helmet>/g,
        replacement: '<>\n      <Helmet>'
      },
      // Fix missing closing tags
      {
        pattern: /(\s*)<\/div>\s*\);\s*};/g,
        replacement: '$1</div>\n    </>\n  );\n};'
      },
      // Fix misplaced closing braces
      {
        pattern: /(\s*)}\)\s*<\/div>\s*<\/div>\s*\);\s*};/g,
        replacement: '$1})\n            </div>\n          </div>\n        </section>\n      </div>\n    </>\n  );\n};'
      }
    ];
    
    for (const fix of fixes) {
      if (fix.pattern.test(content)) {
        content = content.replace(fix.pattern, fix.replacement);
        modified = true;
      }
    }
    
    // Clean up extra whitespace
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      fixedCount += processDirectory(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.jsx')) {
      if (fixFile(filePath)) {
        fixedCount++;
      }
    }
  }
  
  return fixedCount;
}

console.log('Starting comprehensive fix...');
const fixedCount = processDirectory('./app');
console.log(`Fixed ${fixedCount} files.`);