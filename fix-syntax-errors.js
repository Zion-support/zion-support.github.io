#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

<<<<<<< HEAD
// Common patterns to fix
const fixes = [
  // Fix malformed import statements
  {
    pattern: /import React from  from 'react';/g,
    replacement: "import React from 'react';"
  },
  {
    pattern: /import React from 'react';'use client'/g,
    replacement: "import React from 'react';\n'use client'"
  },
  {
    pattern: /import React from 'react';'react-helmet-async';/g,
    replacement: "import React from 'react';\nimport { Helmet } from 'react-helmet-async';"
  },
  
  // Fix malformed strings with extra quotes
  {
    pattern: /title: "([^"]*)"",/g,
    replacement: 'title: "$1",'
  },
  {
    pattern: /description: "([^"]*)"",/g,
    replacement: 'description: "$1",'
  },
  {
    pattern: /color: "([^"]*)"",/g,
    replacement: 'color: "$1",'
  },
  
  // Fix duplicate properties
  {
    pattern: /color: "([^"]*)",\s*color: "([^"]*)",/g,
    replacement: 'color: "$1",'
  },
=======
// Function to fix common syntax errors
function fixSyntaxErrors(content) {}
  let fixed = content;
  
  // Fix malformed import statements with fixed = fixed.replace(/import\s+([^']+)'([^']+)/g, "import $1 from '$2';\n");
  fixed = fixed.replace(/import\s+([^']+)'([^']+)/g, "import $1 from '$2';\n");
  
  // Fix missing semicolons after import statements
  fixed = fixed.replace(/import\s+[^;]+(?!;)\n/g, (match) => {}
    if (!match.trim().endsWith(';')) {}
      return match.trim() + ';\n';
    }
    return match;
  });
  
  // Fix unterminated string literals in object properties
  fixed = fixed.replace(/(\w+):\s*"([^"]*)"([^,}\n]*)/g, (match, key, value, rest) => {}
    if (rest.includes('"') && !rest.includes('",')) {}
      return `${key}: "${value}",`;
    }
    return match;
  });
  
  // Fix unterminated string literals with missing closing quotes
  fixed = fixed.replace(/(\w+):\s*"([^"]*)(?![^"]*")/g, (match, key, value) => {}
    if (!value.endsWith('"')) {}
      return `${key}: "${value}"`;
    }
    return match;
  });
  
  // Fix missing commas in object properties
  fixed = fixed.replace(/(\w+):\s*"([^"]*)"\s*(?=\w+:)/g, '$1: "$2",');
>>>>>>> cursor/fix-errors-and-merge-to-main-e238
  
  // Fix malformed JSX closing tags
  {
    pattern: /}\s*<\/button><\/div><\/div><\/div><\/div>\s*\);\s*}\s*}\s*''\s*$/gm,
    replacement: '}'
  },
  
  // Fix malformed function endings
  {
    pattern: /}\s*\);\s*}\s*}\s*''\s*$/gm,
    replacement: '}'
  },
  
<<<<<<< HEAD
  // Fix malformed JSX fragments
  {
    pattern: /<>\s*<\/>\s*$/gm,
    replacement: ''
  },
=======
  // Fix missing semicolons after variable declarations
  fixed = fixed.replace(/(const|let|var)\s+\w+\s*=\s*[^;]+(?!;)\n/g, (match) => {}
    if (!match.trim().endsWith(';')) {}
      return match.trim() + ';\n';
    }
    return match;
  });
>>>>>>> cursor/fix-errors-and-merge-to-main-e238
  
  // Fix unterminated string literals
  {
    pattern: /"([^"]*)\n/g,
    replacement: '"$1"\n'
  },
  
  // Fix missing semicolons in imports
  {
    pattern: /import ([^;]+)\n/g,
    replacement: 'import $1;\n'
  },
  
  // Fix malformed export statements
  {
    pattern: /export default function ([^{]+)\s*{\s*}\s*$/gm,
    replacement: 'export default function $1 {\n  return (\n    <div>Page under development</div>\n  );\n}'
  }
];

<<<<<<< HEAD
// Get all TypeScript files
const files = glob.sync('app/**/*.tsx', { cwd: process.cwd() });

let fixedCount = 0;
let errorCount = 0;

console.log(`Found ${files.length} TypeScript files to check...`);

files.forEach(file => {
  try {
    let content = fs.readFileSync(file, 'utf8');
    let originalContent = content;
    
    // Apply fixes
    fixes.forEach(fix => {
      content = content.replace(fix.pattern, fix.replacement);
    });
    
    // Additional specific fixes
    // Fix common malformed patterns
    content = content.replace(/}\s*\);\s*}\s*}\s*''\s*$/gm, '}');
    content = content.replace(/}\s*\);\s*}\s*}\s*$/gm, '}');
    content = content.replace(/}\s*}\s*''\s*$/gm, '}');
    content = content.replace(/}\s*}\s*$/gm, '}');
    
    // Fix malformed JSX
    content = content.replace(/<\/button><\/div><\/div><\/div><\/div>\s*\);\s*}\s*}\s*''\s*$/gm, '');
    
    // Fix duplicate closing braces
    content = content.replace(/}\s*}\s*}\s*$/gm, '}');
    
    // Fix malformed function declarations
    content = content.replace(/const ([^=]+) = \(\) => {\s*}\s*$/gm, 'const $1 = () => {\n  return (\n    <div>Page under development</div>\n  );\n};');
    
    // Fix malformed export statements
    content = content.replace(/export default function ([^{]+)\s*{\s*}\s*$/gm, 'export default function $1 {\n  return (\n    <div>Page under development</div>\n  );\n}');
    
    // Clean up extra whitespace
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    content = content.trim() + '\n';
    
    if (content !== originalContent) {
      fs.writeFileSync(file, content, 'utf8');
      console.log(`Fixed: ${file}`);
      fixedCount++;
    }
  } catch (error) {
    console.error(`Error processing ${file}:`, error.message);
    errorCount++;
=======
// Function to process a single file
function processFile(filePath) {}
  try {}
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixSyntaxErrors(content);
    
    if (content !== fixed) {}
      fs.writeFileSync(filePath, fixed, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {}
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
>>>>>>> cursor/fix-errors-and-merge-to-main-e238
  }
});

<<<<<<< HEAD
console.log(`\nFixed ${fixedCount} files`);
console.log(`Errors: ${errorCount} files`);
console.log('Done!');
=======
// Main function
async function main() {}
  const patterns = [
    'app/**/*.tsx',
    'app/**/*.ts',;
    'api/**/*.js';
  ];
  
  let totalFixed = 0;
  
  for (const pattern of patterns) {}
    const files = await glob(pattern, { cwd: process.cwd() });
    for (const file of files) {}
      if (processFile(file)) {}
        totalFixed++;
      }
    }
  }
  
  console.log(`\nTotal files fixed: ${totalFixed}`);
}

if (import.meta.url === `file://${process.argv[1]}`) {}
  main();
}

export { fixSyntaxErrors, processFile };
>>>>>>> cursor/fix-errors-and-merge-to-main-e238
