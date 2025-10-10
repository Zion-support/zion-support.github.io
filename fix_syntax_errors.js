#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Function to fix common syntax errors in TSX files
function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix common patterns that cause syntax errors
    const fixes = [
      // Fix missing closing tags
      {
        pattern: /<h1([^>]*)>([^<]*?)(?=\s*<[^/])/g,
        replacement: '<h1$1>$2</h1>'
      },
      {
        pattern: /<h2([^>]*)>([^<]*?)(?=\s*<[^/])/g,
        replacement: '<h2$1>$2</h2>'
      },
      {
        pattern: /<h3([^>]*)>([^<]*?)(?=\s*<[^/])/g,
        replacement: '<h3$1>$2</h3>'
      },
      {
        pattern: /<button([^>]*)>([^<]*?)(?=\s*<[^/])/g,
        replacement: '<button$1>$2</button>'
      },
      {
        pattern: /<p([^>]*)>([^<]*?)(?=\s*<[^/])/g,
        replacement: '<p$1>$2</p>'
      },
      {
        pattern: /<section([^>]*)>([^<]*?)(?=\s*<[^/])/g,
        replacement: '<section$1>$2</section>'
      },
      {
        pattern: /<main([^>]*)>([^<]*?)(?=\s*<[^/])/g,
        replacement: '<main$1>$2</main>'
      },
      {
        pattern: /<div([^>]*)>([^<]*?)(?=\s*<[^/])/g,
        replacement: '<div$1>$2</div>'
      },
      // Fix missing closing tags for React.Fragment
      {
        pattern: /<React\.Fragment>([^<]*?)(?=\s*<[^/])/g,
        replacement: '<React.Fragment>$1</React.Fragment>'
      },
      // Fix missing closing tags for CheckCircle
      {
        pattern: /<CheckCircle([^>]*)>([^<]*?)(?=\s*<[^/])/g,
        replacement: '<CheckCircle$1>$2</CheckCircle>'
      },
      // Fix malformed JSX expressions
      {
        pattern: /<meta([^>]*?)(?=\s*<[^/])/g,
        replacement: '<meta$1 />'
      },
      // Fix missing commas in object properties
      {
        pattern: /(\w+):\s*'([^']*)'(\s*[^,}])/g,
        replacement: '$1: \'$2\',$3'
      },
      // Fix missing closing braces
      {
        pattern: /(\w+):\s*'([^']*)'(\s*)(?=\s*})/g,
        replacement: '$1: \'$2\'$3'
      },
      // Fix malformed JSX fragments
      {
        pattern: /<>([^<]*?)(?=\s*<[^/])/g,
        replacement: '<>$1</>'
      },
      // Fix missing semicolons
      {
        pattern: /(\w+):\s*'([^']*)'(\s*)(?=\s*;)/g,
        replacement: '$1: \'$2\';$3'
      }
    ];
    
    for (const fix of fixes) {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    }
    
    // Additional specific fixes
    // Fix common malformed patterns
    content = content.replace(/,\s*}/g, '}');
    content = content.replace(/,\s*]/g, ']');
    content = content.replace(/,\s*\)/g, ')');
    
    // Fix missing closing tags for common elements
    const selfClosingTags = ['meta', 'img', 'br', 'hr', 'input', 'link'];
    for (const tag of selfClosingTags) {
      const regex = new RegExp(`<${tag}([^>]*?)(?=\\s*<[^/])`, 'g');
      content = content.replace(regex, `<${tag}$1 />`);
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all TSX/TS files
function findTSXFiles(dir) {
  const files = [];
  
  function walkDir(currentPath) {
    const items = fs.readdirSync(currentPath);
    
    for (const item of items) {
      const fullPath = path.join(currentPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        walkDir(fullPath);
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts'))) {
        files.push(fullPath);
      }
    }
  }
  
  walkDir(dir);
  return files;
}

// Main execution
console.log('🔍 Finding TSX/TS files to fix...');
const files = findTSXFiles('.');
console.log(`Found ${files.length} files to check`);

let fixedCount = 0;
for (const file of files) {
  if (fixSyntaxErrors(file)) {
    fixedCount++;
    console.log(`✅ Fixed: ${file}`);
  }
}

console.log(`✅ Fixed syntax errors in ${fixedCount} files`);

// Run git add for all fixed files
if (fixedCount > 0) {
  try {
    const { execSync } = await import('child_process');
    execSync('git add .', { stdio: 'inherit' });
    console.log('📝 Added all fixed files to git');
  } catch (error) {
    console.error('Error adding files to git:', error.message);
  }
}