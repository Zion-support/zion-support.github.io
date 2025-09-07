#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔧 Fixing all syntax errors...\n');

// Function to fix common syntax errors
function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let fixed = false;

    // Fix unterminated strings
    content = content.replace(/\"[^"]*$/gm, (match) => {
      if (!match.endsWith('"')) {
        fixed = true;
        return match + '"';
      }
      return match;
    });

    // Fix trailing commas in objects/arrays
    content = content.replace(/,(\s*[}\]])/g, '$1');

    // Fix malformed JSX
    content = content.replace(/className=\"[^"]*\"\s*\/>/g, (match) => {
      return match.replace(/\/>$/, '></div>');
    });

    // Fix broken import statements
    content = content.replace(/import\s+React\s+from\s+"react";/g, 'import React from "react";');

    // Fix broken metadata objects
    content = content.replace(/export\s+const\s+metadata\s*=\s*\{[^}]*\},?\s*\}/g, (match) => {
      return match.replace(/,\s*}/g, '}');
    });

    // Fix broken JSX elements
    content = content.replace(/<(\w+)\s+className="[^"]*"\s*\/>/g, '<$1 className="$2"></$1>');

    // Fix broken function declarations
    content = content.replace(/function\s+(\w+)\s*\(\s*\)\s*\{[^}]*\},?\s*\}/g, (match) => {
      return match.replace(/,\s*}/g, '}');
    });

    if (fixed) {
      fs.writeFileSync(filePath, content);
      console.log(`✅ Fixed syntax errors in ${filePath}`);
      return true;
    }
  } catch (error) {
    console.log(`❌ Error fixing ${filePath}: ${error.message}`);
  }
  return false;
}

// Function to find and fix all TypeScript/JavaScript files
function fixAllFiles() {
  const patterns = [
    'app/**/*.tsx',
    'app/**/*.ts',
    'pages/**/*.tsx',
    'pages/**/*.ts',
    'components/**/*.tsx',
    'components/**/*.ts',
    'src/**/*.tsx',
    'src/**/*.ts'
  ];

  let totalFixed = 0;

  for (const pattern of patterns) {
    try {
      const files = execSync(`find . -path "./${pattern}" -type f 2>/dev/null || true`, { 
        cwd: '/workspace', 
        encoding: 'utf8' 
      }).trim().split('\n').filter(f => f);

      for (const file of files) {
        if (fs.existsSync(file)) {
          if (fixSyntaxErrors(file)) {
            totalFixed++;
          }
        }
      }
    } catch (error) {
      console.log(`⚠️  Error processing pattern ${pattern}: ${error.message}`);
    }
  }

  return totalFixed;
}

// Main execution
try {
  const totalFixed = fixAllFiles();
  console.log(`\n🎉 Fixed syntax errors in ${totalFixed} files`);
} catch (error) {
  console.error('💥 Error during syntax fixing:', error.message);
  process.exit(1);
}