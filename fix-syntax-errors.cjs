#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to fix common syntax errors in JSX/TSX files
function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix common patterns that cause syntax errors
    const fixes = [
      // Fix unclosed JSX tags - add missing closing tags
      {
        pattern: /<h1([^>]*)>\s*([^<]+)\s*$/gm,
        replacement: '<h1$1>$2</h1>'
      },
      {
        pattern: /<h2([^>]*)>\s*([^<]+)\s*$/gm,
        replacement: '<h2$1>$2</h2>'
      },
      {
        pattern: /<h3([^>]*)>\s*([^<]+)\s*$/gm,
        replacement: '<h3$1>$2</h3>'
      },
      {
        pattern: /<p([^>]*)>\s*([^<]+)\s*$/gm,
        replacement: '<p$1>$2</p>'
      },
      {
        pattern: /<span([^>]*)>\s*([^<]+)\s*$/gm,
        replacement: '<span$1>$2</span>'
      },
      {
        pattern: /<button([^>]*)>\s*([^<]+)\s*$/gm,
        replacement: '<button$1>$2</button>'
      },
      // Fix malformed JSX expressions
      {
        pattern: /className="([^"]*)\s*$/gm,
        replacement: 'className="$1"'
      },
      // Fix incomplete JSX expressions
      {
        pattern: /\{\s*$/gm,
        replacement: '{}'
      },
      // Fix malformed template literals
      {
        pattern: /\$\{([^}]*)\s*$/gm,
        replacement: '${$1}'
      },
      // Remove orphaned characters that cause parsing errors
      {
        pattern: /^\s*[)}\]]\s*$/gm,
        replacement: ''
      },
      // Fix incomplete function calls
      {
        pattern: /\(\s*$/gm,
        replacement: '()'
      },
      // Fix incomplete object literals
      {
        pattern: /\{\s*$/gm,
        replacement: '{}'
      },
      // Fix incomplete array literals
      {
        pattern: /\[\s*$/gm,
        replacement: '[]'
      }
    ];
    
    for (const fix of fixes) {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    }
    
    // Additional specific fixes for common patterns
    const lines = content.split('\n');
    const newLines = [];
    
    for (let i = 0; i < lines.length; i++) {
      let line = lines[i];
      const originalLine = line;
      
      // Fix lines that end with incomplete JSX
      if (line.match(/<[^>]*>\s*$/) && !line.match(/<[^>]*\/>\s*$/)) {
        // This is an incomplete JSX tag, try to close it
        const tagMatch = line.match(/<(\w+)([^>]*)>\s*$/);
        if (tagMatch) {
          const tagName = tagMatch[1];
          const attributes = tagMatch[2];
          line = `<${tagName}${attributes}></${tagName}>`;
          modified = true;
        }
      }
      
      // Fix lines that have incomplete expressions
      if (line.match(/\{\s*$/) && !line.match(/\{\s*[^}]*\}\s*$/)) {
        line = line.replace(/\{\s*$/, '{}');
        modified = true;
      }
      
      // Fix lines with incomplete template literals
      if (line.match(/\$\{\s*$/) && !line.match(/\$\{[^}]*\}\s*$/)) {
        line = line.replace(/\$\{\s*$/, '${}');
        modified = true;
      }
      
      // Remove lines that are just orphaned characters
      if (line.match(/^\s*[)}\]]\s*$/) || line.match(/^\s*[;,]\s*$/)) {
        line = '';
        modified = true;
      }
      
      newLines.push(line);
    }
    
    const finalContent = newLines.join('\n');
    
    if (modified) {
      fs.writeFileSync(filePath, finalContent, 'utf8');
      console.log(`Fixed syntax errors in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (err) {
    console.error(`Error fixing ${filePath}:`, err.message);
    return false;
  }
}

// Function to find all TSX/JSX files
function findTsxFiles(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        if (!['node_modules', '.git', 'dist', 'build', '.next'].includes(item)) {
          traverse(fullPath);
        }
      } else if (stat.isFile()) {
        const ext = path.extname(item);
        if (['.tsx', '.jsx'].includes(ext)) {
          files.push(fullPath);
        }
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main function
function main() {
  console.log('🔍 Searching for TSX/JSX files to fix...');
  
  const workspaceDir = process.cwd();
  const files = findTsxFiles(workspaceDir);
  
  console.log(`📁 Found ${files.length} TSX/JSX files`);
  
  console.log('\n🔧 Fixing syntax errors...');
  let fixedCount = 0;
  
  for (const file of files) {
    if (fixSyntaxErrors(file)) {
      fixedCount++;
    }
  }
  
  console.log(`\n✅ Fixed syntax errors in ${fixedCount} files`);
}

if (require.main === module) {
  main();
}

module.exports = { fixSyntaxErrors, findTsxFiles };