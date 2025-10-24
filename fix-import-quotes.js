<<<<<<< HEAD
#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix the specific pattern of extra quotes after semicolons
    const patterns = [
      // Fix import statements with extra quotes
      /import\s+[^;]*;\s*"/g,
      // Fix any line ending with ;"
      /;\s*"/g,
      // Fix any line ending with just a quote
      /"\s*$/gm,
      // Fix unterminated string literals in JSX
      /className="([^"]*)\s*$/gm,
      /href="([^"]*)\s*$/gm,
      /src="([^"]*)\s*$/gm,
      /alt="([^"]*)\s*$/gm,
      /title="([^"]*)\s*$/gm,
      // Fix extra quotes in text content
      />\s*([^<]*)"\s*</gm,
      // Fix missing closing quotes in JSX attributes
      /(\w+)="([^"]*)\s*$/gm
    ];

    for (const pattern of patterns) {
      const newContent = content.replace(pattern, (match) => {
        if (pattern === /import\s+[^;]*;\s*"/g) {
          return match.replace(/;\s*"/, ';');
        } else if (pattern === /;\s*"/g) {
          return match.replace(/;\s*"/, ';');
        } else if (pattern === /"\s*$/gm) {
          return match.replace(/"\s*$/, '');
        } else if (pattern === /className="([^"]*)\s*$/gm) {
          return match.replace(/className="([^"]*)\s*$/, 'className="$1"');
        } else if (pattern === /href="([^"]*)\s*$/gm) {
          return match.replace(/href="([^"]*)\s*$/, 'href="$1"');
        } else if (pattern === /src="([^"]*)\s*$/gm) {
          return match.replace(/src="([^"]*)\s*$/, 'src="$1"');
        } else if (pattern === /alt="([^"]*)\s*$/gm) {
          return match.replace(/alt="([^"]*)\s*$/, 'alt="$1"');
        } else if (pattern === /title="([^"]*)\s*$/gm) {
          return match.replace(/title="([^"]*)\s*$/, 'title="$1"');
        } else if (pattern === />\s*([^<]*)"\s*</gm) {
          return match.replace(/>\s*([^<]*)"\s*</, '>$1<');
        } else if (pattern === /(\w+)="([^"]*)\s*$/gm) {
          return match.replace(/(\w+)="([^"]*)\s*$/, '$1="$2"');
        }
        return match;
      });
      
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    }

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
=======
const fs = require('fs');
const path = require('path');

// Function to fix import statement quotes
function fixImportQuotes(content) {
  let fixed = content;
  
  // Fix unterminated string literals in import statements
  // Pattern: import React from 'react (missing closing quote)'
  fixed = fixed.replace(/import\s+(\w+)\s+from\s+'([^']*?)(?<!')$/gm, (match, p1, p2) => {
    return `import ${p1} from '${p2}'`;
  });
  
  // Fix unterminated string literals in import statements with destructuring
  // Pattern: import { something } from 'module (missing closing quote)'
  fixed = fixed.replace(/import\s+\{([^}]*?)\}\s+from\s+'([^']*?)(?<!')$/gm, (match, p1, p2) => {
    return `import {${p1}} from '${p2}'`;
  });
  
  // Fix unterminated string literals in import statements with default and named imports
  // Pattern: import React, { something } from 'module (missing closing quote)'
  fixed = fixed.replace(/import\s+(\w+),\s*\{([^}]*?)\}\s+from\s+'([^']*?)(?<!')$/gm, (match, p1, p2, p3) => {
    return `import ${p1}, {${p2}} from '${p3}'`;
  });
  
  // Fix any remaining unterminated single quotes in import statements
  fixed = fixed.replace(/from\s+'([^']*?)(?<!')$/gm, (match, p1) => {
    return `from '${p1}'`;
  });
  
  return fixed;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixImportQuotes(content);
    
    if (content !== fixed) {
      fs.writeFileSync(filePath, fixed, 'utf8');
>>>>>>> origin/main
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
<<<<<<< HEAD
    console.error(`Error fixing ${filePath}:`, error.message);
=======
    console.error(`Error processing ${filePath}:`, error.message);
>>>>>>> origin/main
    return false;
  }
}

<<<<<<< HEAD
function main() {
  console.log('Starting import quote fixes...');
  
  // Get all TypeScript/TSX files
  const files = glob.sync('**/*.{ts,tsx}', {
    ignore: ['node_modules/**', '.next/**', 'dist/**']
  });

  let fixedCount = 0;
  let totalFiles = files.length;

  for (const file of files) {
    if (fixFile(file)) {
      fixedCount++;
    }
  }

  console.log(`\nFixed ${fixedCount} out of ${totalFiles} files`);
  console.log('Import quote fixes completed!');
}

if (require.main === module) {
  main();
}

module.exports = { fixFile };
=======
// Function to recursively find and process files
function processDirectory(dirPath) {
  let fixedCount = 0;
  
  try {
    const items = fs.readdirSync(dirPath);
    
    for (const item of items) {
      const fullPath = path.join(dirPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip node_modules and .next directories
        if (item === 'node_modules' || item === '.next' || item === 'dist') {
          continue;
        }
        fixedCount += processDirectory(fullPath);
      } else if (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.jsx') || item.endsWith('.js')) {
        if (processFile(fullPath)) {
          fixedCount++;
        }
      }
    }
  } catch (error) {
    console.error(`Error processing directory ${dirPath}:`, error.message);
  }
  
  return fixedCount;
}

// Main execution
console.log('Starting import quote fixes...');
const fixedCount = processDirectory('/workspace');
console.log(`Fixed ${fixedCount} files`);
>>>>>>> origin/main
