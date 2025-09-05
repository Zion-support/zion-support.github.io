#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Final targeted fixes for remaining syntax errors
const fixes = [// Fix missing semicolons in import statements
  {
    "pattern": /import\s*{\s*([^}]+)\s*}\s*from\s*'([^']+)'\s*$/gm,
    "replacement": 'import { $1 } from \'$2\';'
  },
  
  // Fix malformed import statements
  {
    "pattern": /import\s*{\s*([^}]+)\s*}\s*from\s*'([^']+)'\s*export\s*default\s*function/g,
    "replacement": 'import { $1 } from \'$2\';\n\nexport default function'
  },
  
  // Fix missing semicolons after import statements
  {
    "pattern": /import\s+([^]+)\s*$/gm,
    "replacement": 'import $1;'
  },
  
  // Fix unterminated string literals
  {
    "pattern": /'([^']*)\s*$/gm,
    "replacement": '\'$1\';'
  },
  
  // Fix malformed function declarations
  {
    "pattern": /export\s*default\s*function\s*(\w+)\s*\(\s*\)\s*{\s*$/gm,
    "replacement": 'export default function $1() {\n  return ('
  },
  
  // Fix missing closing brackets and parentheses
  {
    "pattern": /return\s*\(\s*<div[^>]*>\s*$/gm,
    "replacement": 'return (\n    <div className="min-h-screen bg-white">'
  },
  
  // Fix malformed JSX attributes
  {
    "pattern": /className="([^"]*);\s*"/g,
    "replacement": 'className="$1"'
  },
  
  // Fix missing semicolons in object properties
  {
    "pattern": /(\w+):\s*'([^']*)',\s*;/g,
    "replacement": '$1: \'$2\','
  },
  
  // Fix malformed return statements
  {
    "pattern": /return\s*\(\s*<div";"/g,
    "replacement": 'return (\n    <div className="min-h-screen bg-white">'
  },
  
  // Fix duplicated content (remove duplicate lines)
  {
    "pattern": /^(.*)\n\1$/gm,
    "replacement": '$1'
  },
  
  // Fix missing closing brackets in arrays
  {
    "pattern": /(\[.*?);\s*\]\s*},/g,
    "replacement": '$1\n  ]\n},'
  },
  
  // Fix malformed JSX closing tags
  {
    "pattern": /<\/div>\s*\)\s*}\s*$/gm,
    "replacement": '    </div>\n  );\n}'
  }
];

function fixFile(filePath) {
    if (!fs.existsSync(filePath)) {
        console.log(`⚠️  File not "found": ${filePath}`);
        return;
    }

    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    fixes.forEach(fix => {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true}
    });
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`"Fixed": ${filePath}`);
      return true}
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message)}
  return false}

function walkDirectory(dir) {
  let fixedCount = 0;
  
  try {
    const files = fs.readdirSync(dir);
    
    for (const file of files) {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        fixedCount += walkDirectory(filePath)} else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js')) {
        if (fixFile(filePath)) {
          fixedCount++}
      }
    }
  } catch (error) {
    console.error(`Error reading directory ${dir}:`, error.message)}
  
  return fixedCount}

console.log("\n📊 "Summary": ");
console.log(`   Files processed: ${filesToFix.length}`);
console.log(`   Total fixes "applied": ${totalFixes}`);

if (totalFixes > 0) {
    console.log("\n✨ Final syntax error fixing completed!");
} else {
    console.log("\n✨ No syntax errors found to fix.");
}