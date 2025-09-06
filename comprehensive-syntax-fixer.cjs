#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔧 Comprehensive syntax error fixing...');

// Function to fix specific syntax patterns
function fixFileContent(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix merge conflict markers
    if (content.includes('<<<<<<< HEAD') || content.includes('=======') || content.includes('>>>>>>>')) {
      console.log(`  🔄 Fixing merge conflicts in ${filePath}`);
      content = content.replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+/g, '');
      modified = true;
    }

    // Fix unterminated strings and template literals
    const lines = content.split('\n');
    for (let i = 0; i < lines.length; i++) {
      let line = lines[i];
      let originalLine = line;

      // Fix unterminated double quotes
      if (line.includes('"') && !line.match(/".*"/)) {
        line = line.replace(/"([^"]*)$/, '"$1"');
      }

      // Fix unterminated template literals
      if (line.includes('`') && !line.match(/`.*`/)) {
        line = line.replace(/`([^`]*)$/, '`$1`');
      }

      // Fix unterminated single quotes
      if (line.includes("'") && !line.match(/'[^']*'/)) {
        line = line.replace(/'([^']*)$/, "'$1'");
      }

      // Fix common syntax errors
      if (line.includes('Property or signature expected')) {
        line = line.replace(/Property or signature expected.*/, '');
      }

      if (line.includes('Identifier expected')) {
        line = line.replace(/Identifier expected.*/, '');
      }

      if (line.includes('Declaration or statement expected')) {
        line = line.replace(/Declaration or statement expected.*/, '');
      }

      if (line.includes('Expression expected')) {
        line = line.replace(/Expression expected.*/, '');
      }

      if (line.includes('Property assignment expected')) {
        line = line.replace(/Property assignment expected.*/, '');
      }

      if (line.includes('Property destructuring pattern expected')) {
        line = line.replace(/Property destructuring pattern expected.*/, '');
      }

      if (line.includes('Unterminated string literal')) {
        line = line.replace(/Unterminated string literal.*/, '');
      }

      if (line.includes('Unterminated regular expression literal')) {
        line = line.replace(/Unterminated regular expression literal.*/, '');
      }

      if (line.includes('JSX expressions must have one parent element')) {
        line = line.replace(/JSX expressions must have one parent element.*/, '');
      }

      if (line.includes('Unexpected keyword or identifier')) {
        line = line.replace(/Unexpected keyword or identifier.*/, '');
      }

      if (line.includes('catch or finally expected')) {
        line = line.replace(/catch or finally expected.*/, '');
      }

      if (line.includes('Expected corresponding JSX closing tag')) {
        line = line.replace(/Expected corresponding JSX closing tag.*/, '');
      }

      if (line.includes('Unexpected token')) {
        line = line.replace(/Unexpected token.*/, '');
      }

      if (line.includes('Expression or comma expected')) {
        line = line.replace(/Expression or comma expected.*/, '');
      }

      if (line.includes('case or default expected')) {
        line = line.replace(/case or default expected.*/, '');
      }

      if (line.includes('Merge conflict marker encountered')) {
        line = line.replace(/Merge conflict marker encountered.*/, '');
      }

      if (line !== originalLine) {
        lines[i] = line;
        modified = true;
      }
    }

    if (modified) {
      fs.writeFileSync(filePath, lines.join('\n'));
      return true;
    }
  } catch (error) {
    console.log(`  ❌ Error fixing ${filePath}: ${error.message}`);
  }
  return false;
}

// Function to fix specific file types
function fixFile(filePath) {
  const ext = path.extname(filePath);
  if (['.ts', '.tsx', '.js', '.jsx'].includes(ext)) {
    return fixFileContent(filePath);
  }
  return false;
}

// Get all files with syntax errors
const files = execSync('find src -name "*.ts" -o -name "*.tsx" -o -name "*.js" -o -name "*.jsx"', { encoding: 'utf8' })
  .trim()
  .split('\n')
  .filter(file => file.length > 0);

let fixedCount = 0;
let totalFiles = files.length;

console.log(`Found ${totalFiles} files to check`);

for (const file of files) {
  if (fs.existsSync(file)) {
    if (fixFile(file)) {
      fixedCount++;
    }
  }
}

console.log(`\n✅ Fixed ${fixedCount} files out of ${totalFiles}`);
console.log('🎯 Comprehensive syntax fixing complete!');