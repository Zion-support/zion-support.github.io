#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Fix double quotes in object properties
    content = content
      .replace(/(\w+):\s*'([^']+)'\s*',\s*$/gm, "$1: '$2',")
      .replace(/(\w+):\s*"([^"]+)"\s*",\s*$/gm, '$1: "$2",')
      .replace(/(\w+):\s*'([^']+)'\s*'}/gm, "$1: '$2' }")
      .replace(/(\w+):\s*"([^"]+)"\s*"}/gm, '$1: "$2" }')
      .replace(/(\w+):\s*'([^']+)'\s*'$/gm, "$1: '$2'")
      .replace(/(\w+):\s*"([^"]+)"\s*"$/gm, '$1: "$2"')
      // Fix double quotes in array elements
      .replace(/\['([^']+)'\s*',\s*$/gm, "['$1',")
      .replace(/\["([^"]+)"\s*",\s*$/gm, '["$1",')
      .replace(/\['([^']+)'\s*'\]/gm, "['$1']")
      .replace(/\["([^"]+)"\s*"\]/gm, '["$1"]')
      // Fix double quotes in JSX attributes
      .replace(/className="([^"]+)"\s*"$/gm, 'className="$1"')
      .replace(/content="([^"]+)"\s*"$/gm, 'content="$1"')
      .replace(/title="([^"]+)"\s*"$/gm, 'title="$1"')
      .replace(/name="([^"]+)"\s*"$/gm, 'name="$1"')
      // Fix double quotes in import statements
      .replace(/import\s+([^']+)'\s*'/g, "import $1'")
      .replace(/from\s+'([^']+)'\s*'/g, "from '$1'")
      .replace(/import\s+([^"]+)"\s*"/g, 'import $1"')
      .replace(/from\s+"([^"]+)"\s*"/g, 'from "$1"')
      // Fix double quotes in function calls
      .replace(/(\w+)\s*\(\s*\)\s*{\s*$/gm, '$1() {\n')
      // Fix double quotes in JSX closing tags
      .replace(/<\/([^>]+)>\s*"$/gm, '</$1>')
      // Fix double quotes at end of lines
      .replace(/([^'"\s])\s*"\s*$/gm, '$1"')
      .replace(/([^'"\s])\s*'\s*$/gm, "$1'");
    
    if (content !== originalContent) {
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

function main() {
  console.log('Starting remaining quote fixes...');
  
  // Find all TypeScript and JSX files
  const patterns = [
    'app/**/*.tsx',
    'app/**/*.ts',
    'api/**/*.js'
  ];
  
  let totalFixed = 0;
  
  patterns.forEach(pattern => {
    const files = glob.sync(pattern, { cwd: process.cwd() });
    files.forEach(file => {
      if (fixFile(file)) {
        totalFixed++;
      }
    });
  });
  
  console.log(`Fixed ${totalFixed} files`);
}

if (require.main === module) {
  main();
}

module.exports = { fixFile };