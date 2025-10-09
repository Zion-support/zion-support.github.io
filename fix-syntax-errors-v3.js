#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to fix specific syntax errors
function fixSyntaxErrors(content) {
  let fixed = content;

  // Fix duplicate imports (e.g., "Brain, Shield, Target, Users ,  Brain,  Shield,  Target,  Users")
  fixed = fixed.replace(/([A-Za-z_][A-Za-z0-9_]*\s*,\s*)+([A-Za-z_][A-Za-z0-9_]*)\s*,\s*(\s*[A-Za-z_][A-Za-z0-9_]*\s*,\s*)+/g, (match) => {
    const items = match.split(',').map(item => item.trim()).filter(item => item);
    const uniqueItems = [...new Set(items)];
    return uniqueItems.join(', ');
  });

  // Fix malformed object literals with trailing commas (e.g., "{,")
  fixed = fixed.replace(/{\s*,/g, '{');

  // Fix missing return statements in arrow functions
  fixed = fixed.replace(/(const\s+[A-Za-z_][A-Za-z0-9_]*\s*:\s*React\.FC\s*=\s*\(\)\s*=>\s*{\s*)(<[^>]+>)/g, '$1return $2');

  // Fix duplicate return statements - keep only the last one
  const returnMatches = fixed.match(/return\s*\(/g);
  if (returnMatches && returnMatches.length > 1) {
    const lines = fixed.split('\n');
    let returnCount = 0;
    const fixedLines = lines.map(line => {
      if (line.trim().startsWith('return')) {
        returnCount++;
        if (returnCount < returnMatches.length) {
          return ''; // Remove duplicate return statements
        }
      }
      return line;
    });
    fixed = fixedLines.join('\n');
  }

  // Fix missing semicolons after import statements
  fixed = fixed.replace(/from\s+['"][^'"]+['"]\s*$/gm, (match) => {
    if (!match.endsWith(';')) {
      return match + ';';
    }
    return match;
  });

  // Fix JSX closing tag issues
  fixed = fixed.replace(/<h2([^>]*)>\s*$/gm, '<h2$1>');
  fixed = fixed.replace(/<\/h2>\s*$/gm, '</h2>');

  // Fix missing closing brackets in function declarations
  fixed = fixed.replace(/\)\s*{\s*$/gm, ') {');

  // Fix expression expected errors
  fixed = fixed.replace(/=\s*{\s*$/gm, '= {');

  // Fix unexpected token issues
  fixed = fixed.replace(/>\s*$/gm, '>');

  // Fix malformed function declarations with missing opening brace
  fixed = fixed.replace(/(const\s+[A-Za-z_][A-Za-z0-9_]*\s*:\s*React\.FC\s*=\s*\(\)\s*=>\s*)(<[^>]+>)/g, '$1{ return $2');

  // Fix missing closing brace before export
  fixed = fixed.replace(/(\s*}\s*)(export\s+default)/g, '$1\n$2');

  // Fix duplicate function declarations - keep only the last one
  const functionMatches = fixed.match(/const\s+([A-Za-z_][A-Za-z0-9_]*)\s*:\s*React\.FC\s*=\s*\(\)\s*=>\s*{[\s\S]*?};\s*const\s+\1\s*:\s*React\.FC\s*=\s*\(\)\s*=>\s*{[\s\S]*?};/g);
  if (functionMatches) {
    functionMatches.forEach(match => {
      const functions = match.split('};');
      const lastFunction = functions[functions.length - 1] + '};';
      fixed = fixed.replace(match, lastFunction);
    });
  }

  // Fix malformed JSX without proper return
  fixed = fixed.replace(/(const\s+[A-Za-z_][A-Za-z0-9_]*\s*:\s*React\.FC\s*=\s*\(\)\s*=>\s*{\s*)(<div[^>]*>)/g, '$1return $2');

  // Fix missing closing parenthesis
  fixed = fixed.replace(/(\s*}\s*)(\s*}\s*)(export\s+default)/g, '$1\n$2\n$3');

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