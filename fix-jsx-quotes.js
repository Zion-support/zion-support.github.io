#!/usr/bin/env node

import fs from 'fs';
import { glob } from 'glob';

// Function to fix JSX attribute quotes
function fixJSXQuotes(content) {
  let fixed = content;

  // Fix import statements
  fixed = fixed.replace(/import\s+([^;]+)\s+from\s+([^;]+)\s*$/gm, 'import $1 from "$2";');
  fixed = fixed.replace(/import\s+\{\s*([^}]+)\s*\}\s+from\s+([^;]+)\s*$/gm, 'import { $1 } from "$2";');

  // Fix JSX attributes - add quotes around unquoted attributes
  fixed = fixed.replace(/className=([a-zA-Z0-9\-_\s]+)(?![^<]*>)/g, 'className="$1"');
  fixed = fixed.replace(/name=([a-zA-Z0-9\-_\s]+)(?![^<]*>)/g, 'name="$1"');
  fixed = fixed.replace(/content=([a-zA-Z0-9\-_\s]+)(?![^<]*>)/g, 'content="$1"');
  fixed = fixed.replace(/href=([a-zA-Z0-9\-_\/]+)(?![^<]*>)/g, 'href="$1"');
  fixed = fixed.replace(/title=([a-zA-Z0-9\-_\s]+)(?![^<]*>)/g, 'title="$1"');
  fixed = fixed.replace(/id=([a-zA-Z0-9\-_]+)(?![^<]*>)/g, 'id="$1"');
  fixed = fixed.replace(/type=([a-zA-Z0-9\-_]+)(?![^<]*>)/g, 'type="$1"');
  fixed = fixed.replace(/value=([a-zA-Z0-9\-_]+)(?![^<]*>)/g, 'value="$1"');
  fixed = fixed.replace(/placeholder=([a-zA-Z0-9\-_\s]+)(?![^<]*>)/g, 'placeholder="$1"');
  fixed = fixed.replace(/alt=([a-zA-Z0-9\-_\s]+)(?![^<]*>)/g, 'alt="$1"');
  fixed = fixed.replace(/src=([a-zA-Z0-9\-_\/\.]+)(?![^<]*>)/g, 'src="$1"');

  // Fix specific patterns
  fixed = fixed.replace(/className=([^"'\s][^"'>\s]*)/g, 'className="$1"');
  fixed = fixed.replace(/name=([^"'\s][^"'>\s]*)/g, 'name="$1"');
  fixed = fixed.replace(/content=([^"'\s][^"'>\s]*)/g, 'content="$1"');
  fixed = fixed.replace(/href=([^"'\s][^"'>\s]*)/g, 'href="$1"');

  // Fix JSX closing tags
  fixed = fixed.replace(/<\/div>;\s*$/gm, '</div>');
  fixed = fixed.replace(/;\s*\)\s*;\s*$/gm, ');');
  fixed = fixed.replace(/;\s*\}\s*;\s*$/gm, '};');

  // Fix function declarations
  fixed = fixed.replace(/const\s+([A-Za-z]+):\s*React\.FC\s*=\s*\(\)\s*=>\s*\{/g, 'const $1: React.FC = () => {');
  fixed = fixed.replace(/const\s+([A-Za-z]+)\s*=\s*\(\)\s*=>\s*\{/g, 'const $1 = () => {');

  // Fix export statements
  fixed = fixed.replace(/export\s+default\s+([^;]+)\s*$/gm, 'export default $1;');

  // Fix JSX comments
  fixed = fixed.replace(/\/\*([^*]|\*[^/])*\*\/\s*;/g, (match) => match.replace(/;$/, ''));

  return fixed;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixJSXQuotes(content);
    
    if (content !== fixed) {
      fs.writeFileSync(filePath, fixed);
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Main function
async function main() {
  const patterns = [
    'app/**/*.tsx',
    'app/**/*.ts'
  ];
  
  let totalFixed = 0;
  
  for (const pattern of patterns) {
    const files = await glob(pattern, { 
      ignore: ['node_modules/**', 'dist/**', '.next/**'] 
    });
    
    for (const file of files) {
      if (processFile(file)) {
        totalFixed++;
      }
    }
  }
  
  console.log(`\nTotal files fixed: ${totalFixed}`);
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { fixJSXQuotes, processFile };