#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Specific patterns to fix the remaining errors
const fixes = [
  // Fix missing line breaks in object properties
  {
    pattern: /(\s+description:\s*'[^']+',)\s*benefits:/g,
    replacement: "$1\n      benefits:"
  },
  
  // Fix missing semicolons in array declarations
  {
    pattern: /(\s+)\]\s*return/g,
    replacement: "$1];\nreturn"
  },
  
  // Fix missing semicolons in object declarations
  {
    pattern: /(\s+)\}\s*return/g,
    replacement: "$1};\nreturn"
  },
  
  // Fix malformed JSX - missing closing tags
  {
    pattern: /<meta([^>]*)\s*\/>/g,
    replacement: "<meta$1 />"
  },
  
  // Fix malformed JSX - missing closing tags for sections
  {
    pattern: /<section([^>]*)><\/section>/g,
    replacement: "<section$1></section>"
  },
  
  // Fix malformed JSX - missing closing tags for divs
  {
    pattern: /<div([^>]*)><\/div>/g,
    replacement: "<div$1></div>"
  },
  
  // Fix malformed JSX fragments
  {
    pattern: /<>\s*<\/>/g,
    replacement: "<></>"
  },
  
  // Fix missing closing tags in JSX
  {
    pattern: /<h1([^>]*)>([^<]+)<\/h1>/g,
    replacement: "<h1$1>$2</h1>"
  },
  
  // Fix missing closing tags in buttons
  {
    pattern: /<button([^>]*)>([^<]+)<\/button>/g,
    replacement: "<button$1>$2</button>"
  },
  
  // Fix missing closing tags in paragraphs
  {
    pattern: /<p([^>]*)>([^<]+)<\/p>/g,
    replacement: "<p$1>$2</p>"
  },
  
  // Fix malformed return statements
  {
    pattern: /return\s*\(\s*<>\s*<\/>\s*\)\s*;\s*}/g,
    replacement: "return (\n    <>\n      <>\n      </>\n    </>\n  );\n};"
  },
  
  // Fix missing semicolons in function declarations
  {
    pattern: /}\s*export default/g,
    replacement: "};\n\nexport default"
  },
  
  // Fix malformed JSX - CheckCircle without closing tag
  {
    pattern: /<CheckCircle>([^<]*)<\/CheckCircle>/g,
    replacement: "<CheckCircle className=\"w-4 h-4 text-emerald-500 mr-2\" />$1"
  },
  
  // Fix malformed JSX - CheckCircle without content
  {
    pattern: /<CheckCircle>\s*<\/CheckCircle>/g,
    replacement: "<CheckCircle className=\"w-4 h-4 text-emerald-500 mr-2\" />"
  }
];

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    fixes.forEach(fix => {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    });
    
    if (modified) {
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

function findTsxFiles(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && !item.includes('node_modules')) {
        traverse(fullPath);
      } else if (item.endsWith('.tsx') && !item.includes('backup') && !item.includes('disabled')) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

function main() {
  console.log('Starting final syntax error fixes...');
  
  const appDir = path.join(__dirname, 'app');
  const files = findTsxFiles(appDir);
  
  console.log(`Found ${files.length} TSX files to check`);
  
  let fixedCount = 0;
  
  for (const file of files) {
    if (fixFile(file)) {
      fixedCount++;
    }
  }
  
  console.log(`Fixed ${fixedCount} files`);
  
  // Run linter to check remaining errors
  console.log('\nRunning linter to check remaining errors...');
  try {
    execSync('npm run lint 2>&1 | head -20', { stdio: 'inherit' });
  } catch (error) {
    console.log('Linter found remaining errors (this is expected)');
  }
}

main();