
#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Function to fix common syntax errors in files
function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix malformed imports - add missing semicolons
    content = content.replace(
      /import\s+{[^}]+}\s+from\s+['"][^'"]+['"]\s*(?!;)/g,
      match => {
        if (!match.endsWith(';')) {
          modified = true;
          return match + ';';
        }
        return match;
      }
    );

    // Fix broken import statements with missing commas
    content = content.replace(
      /import\s+{\s*([^}]+)\s*}\s+from\s+['"][^'"]+['"]/g,
      (match, imports) => {
        // Check if imports have proper comma separation
        if (imports.includes(' ') && !imports.includes(',')) {
          modified = true;
          const fixedImports = imports.split(/\s+/).join(', ');
          return match.replace(imports, fixedImports);
        }
        return match;
      }
    );

    // Fix missing semicolons after variable declarations
    content = content.replace(
      /(const|let|var)\s+\w+\s*=\s*[^;]+(?!;)\s*(?=\n|$)/g,
      match => {
        if (!match.endsWith(';')) {
          modified = true;
          return match + ';';
        }
        return match;
      }
    );

    // Fix broken JSX syntax - missing closing tags
    content = content.replace(
      /<(\w+)([^>]*)>(?!.*<\/\1>)/g,
      (match, tagName, attributes) => {
        // Only fix if it's not a self-closing tag and doesn't have a closing tag
        if (!match.endsWith('/>') && !content.includes(`</${tagName}>`)) {
          modified = true;
          return match + `</${tagName}>`;
        }
        return match;
      }
    );

    // Fix malformed function declarations
    content = content.replace(
      /export\s+{\s*function\s*}\s*export\s+default\s+function/g,
      'export default function'
    );

    // Fix broken arrow functions
    content = content.replace(/=>\s*\(\s*\)\s*=>/g, '=> () =>');

    // Fix malformed object literals
    content = content.replace(/\{\s*([^}]*)\s*\}\s*}/g, (match, content) => {
      if (content.includes('{') && !content.includes('}')) {
        modified = true;
        return match.replace('}}', '}');
      }
      return match;
    });

    // Fix broken string literals
    content = content.replace(/['"]([^'"]*)\s*['"]\s*['"]/g, (match, str) => {
      modified = true;
      return `"${str}"`;
    });

    // Fix missing commas in arrays and objects
    content = content.replace(/\[\s*([^\]]*)\s*\]/g, (match, arrayContent) => {
      if (
        arrayContent &&
        !arrayContent.endsWith(',') &&
        !arrayContent.endsWith(';')
      ) {
        const items = arrayContent
          .split(',')
          .map(item => item.trim())
          .filter(item => item);
        if (items.length > 1) {
          modified = true;
          return `[${items.join(', ')}]`;
=======
        }
        return match;
      },
    );

          modified = true;
          return match + ";";
        }
        return match;
      },
    );

});

console.log(`\nTotal files fixed: ${totalFixed}`);
  }


#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔧 Fixing syntax errors in API files...');

const fixFile = (filePath) => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix common syntax issues
    content = content.replace(/,\s*$/gm, ''); // Remove trailing commas
    content = content.replace(/,\s*}/g, '}'); // Remove trailing commas before closing braces
    content = content.replace(/,\s*]/g, ']'); // Remove trailing commas before closing brackets
    content = content.replace(/,\s*\)/g, ')'); // Remove trailing commas before closing parentheses
    
    // Fix missing semicolons
    content = content.replace(/([^;}])\n(\s*[a-zA-Z])/g, '$1;\n$2');
    
    // Fix import statements
    content = content.replace(/import\s+([^;]+),\s*;/g, 'import $1;');
    
    // Fix function declarations
    content = content.replace(/export default function\s+(\w+)\s*\([^)]*\)\s*{/g, 'export default function $1($2) {');
    
    fs.writeFileSync(filePath, content);
    console.log(`✅ Fixed: ${filePath}`);
    return true;
  } catch (error) {
    console.log(`❌ Failed to fix: ${filePath} - ${error.message}`);
    return false;
  }
};

const main = () => {
  const apiDir = 'pages/api';
  const files = [];
  
  const walkDir = (dir) => {
    const items = fs.readdirSync(dir);
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory()) {
        walkDir(fullPath);
      } else if (item.endsWith('.ts') || item.endsWith('.js')) {
        files.push(fullPath);
      }
    }
  };
  
  walkDir(apiDir);
  
  let fixed = 0;
  files.forEach(file => {
    if (fixFile(file)) {
      fixed++;
    }
  });
  
  console.log(`\n🎉 Fixed ${fixed}/${files.length} files`);
};

main();
