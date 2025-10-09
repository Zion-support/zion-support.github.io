#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to fix common syntax errors
function fixSyntaxErrors(content) {
  let fixed = content;

  // Fix malformed import statements (e.g., "UsersUsers from")
  fixed = fixed.replace(/([A-Za-z_][A-Za-z0-9_]*)\s*([A-Za-z_][A-Za-z0-9_]*)\s*from/g, '$1, $2 from');
  fixed = fixed.replace(/([A-Za-z_][A-Za-z0-9_]*)\s*,\s*([A-Za-z_][A-Za-z0-9_]*)\s*,\s*([A-Za-z_][A-Za-z0-9_]*)\s*from/g, '$1, $2, $3 from');

  // Fix duplicate function declarations
  fixed = fixed.replace(/(const\s+[A-Za-z_][A-Za-z0-9_]*\s*:\s*React\.FC\s*=\s*\(\)\s*=>\s*{[\s\S]*?};\s*)+/g, (match) => {
    const functions = match.split('};').filter(f => f.trim());
    return functions[functions.length - 1] + '};';
  });

  // Fix missing return statements
  fixed = fixed.replace(/(const\s+[A-Za-z_][A-Za-z0-9_]*\s*:\s*React\.FC\s*=\s*\(\)\s*=>\s*{\s*)(<[^>]+>)/g, '$1return $2');

  // Fix malformed JSX without return
  fixed = fixed.replace(/(const\s+[A-Za-z_][A-Za-z0-9_]*\s*:\s*React\.FC\s*=\s*\(\)\s*=>\s*{\s*)(<div[^>]*>)/g, '$1return $2');

  // Fix missing opening brace after function declaration
  fixed = fixed.replace(/(const\s+[A-Za-z_][A-Za-z0-9_]*\s*:\s*React\.FC\s*=\s*\(\)\s*=>\s*)(<[^>]+>)/g, '$1{ return $2');

  // Fix missing closing brace before export
  fixed = fixed.replace(/(\s*}\s*)(export\s+default)/g, '$1\n$2');

  // Fix duplicate closing braces
  fixed = fixed.replace(/(\s*}\s*){2,}/g, '$1');

  // Fix malformed object literals
  fixed = fixed.replace(/{\s*,/g, '{');
  fixed = fixed.replace(/,\s*}/g, '}');

  // Fix missing semicolons
  fixed = fixed.replace(/from\s+['"][^'"]+['"]\s*$/gm, (match) => {
    if (!match.endsWith(';')) {
      return match + ';';
    }
    return match;
  });

  // Fix JSX closing tag issues
  fixed = fixed.replace(/<h2([^>]*)>\s*$/gm, '<h2$1>');
  fixed = fixed.replace(/<\/h2>\s*$/gm, '</h2>');

  // Fix expression expected errors
  fixed = fixed.replace(/=\s*{\s*$/gm, '= {');

  // Fix unexpected token issues
  fixed = fixed.replace(/>\s*$/gm, '>');

  // Fix missing return in arrow functions
  fixed = fixed.replace(/(const\s+[A-Za-z_][A-Za-z0-9_]*\s*:\s*React\.FC\s*=\s*\(\)\s*=>\s*{\s*)([^<]*)(<[^>]+>)/g, '$1return $3');

  // Fix malformed function declarations
  fixed = fixed.replace(/(const\s+[A-Za-z_][A-Za-z0-9_]*\s*:\s*React\.FC\s*=\s*\(\)\s*=>\s*{\s*)([^}]*)(\s*}\s*)(const\s+[A-Za-z_][A-Za-z0-9_]*\s*:\s*React\.FC\s*=\s*\(\)\s*=>\s*{\s*)/g, '$1$2$3\n$4');

  // Fix missing opening brace
  fixed = fixed.replace(/(const\s+[A-Za-z_][A-Za-z0-9_]*\s*:\s*React\.FC\s*=\s*\(\)\s*=>\s*)([^{])/g, '$1{ $2');

  // Fix missing closing brace
  fixed = fixed.replace(/(\s*}\s*)(export\s+default\s+[A-Za-z_][A-Za-z0-9_]*;?\s*)$/gm, '$1\n$2');

  // Fix malformed JSX attributes
  fixed = fixed.replace(/className="([^"]*)"\s*$/gm, 'className="$1"');

  // Fix missing closing parenthesis
  fixed = fixed.replace(/(\s*}\s*)(\s*}\s*)(export\s+default)/g, '$1\n$2\n$3');

  // Fix duplicate function names
  const functionNameRegex = /const\s+([A-Za-z_][A-Za-z0-9_]*)\s*:\s*React\.FC\s*=\s*\(\)\s*=>\s*{[\s\S]*?};\s*const\s+\1\s*:\s*React\.FC\s*=\s*\(\)\s*=>\s*{[\s\S]*?};/g;
  fixed = fixed.replace(functionNameRegex, (match, functionName) => {
    const functions = match.split(`const ${functionName}`);
    return functions[functions.length - 1];
  });

  return fixed;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixSyntaxErrors(content);
    
    if (content !== fixed) {
      fs.writeFileSync(filePath, fixed, 'utf8');
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
  const srcDir = path.join(process.cwd(), 'src');
  const pattern = path.join(srcDir, '**/*.{tsx,ts,jsx,js}');
  
  console.log('Scanning for files...');
  const files = await glob(pattern, { ignore: ['**/node_modules/**'] });
  
  console.log(`Found ${files.length} files to process`);
  
  let fixedCount = 0;
  files.forEach(file => {
    if (processFile(file)) {
      fixedCount++;
    }
  });
  
  console.log(`Fixed ${fixedCount} files`);
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { fixSyntaxErrors, processFile };