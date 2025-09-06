<<<<<<< HEAD
=======
  },;
}},;
// Run all fixes,;
fixFooter(),;
fixAccessibility(),;
fixAiServices(),;
fixApiDocs(),;
fixCareers(),;
// // // console.log('🎉 Syntax error fixes completed'),,
// Run all fixes,
fixFooter(),
fixAccessibility(),
fixAiServices(),
fixApiDocs(),
fixCareers(),
,
console.log('🎉 Syntax error fixes completed'),
>>>>>>> cursor/fix-lint-push-and-merge-to-main-e10e
#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
<<<<<<< HEAD
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🔧 Starting syntax error fixes...');

// Function to fix merge conflict markers and syntax errors
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Remove merge conflict markers
    const conflictRegex = /^[<>=]{7}.*$/gm;
    if (conflictRegex.test(content)) {
      content = content.replace(conflictRegex, '');
      modified = true;
    }

    // Fix common syntax patterns
    const fixes = [
      // Fix function declarations with semicolons
      { pattern: /export function (\w+)\s*\(\s*\{([^}]*)\}\s*\)\s*\{/g, replacement: 'export function $1({ $2 }) {' },
      // Fix object destructuring with semicolons
      { pattern: /const\s*\{\s*([^}]*)\s*\}\s*=\s*([^;]+);/g, replacement: 'const { $1 } = $2;' },
      // Fix JSX with semicolons
      { pattern: /className=\s*\{\s*cn\s*\(\s*"([^"]*)"\s*([^}]*)\s*\)\s*;\s*"/g, replacement: 'className={cn("$1", $2)}' },
      // Fix unterminated strings
      { pattern: /"([^"]*)\n/g, replacement: '"$1"' },
      // Fix missing semicolons in object properties
      { pattern: /(\w+):\s*"([^"]*)"\s*([^,}\n])/g, replacement: '$1: "$2",' },
      // Fix malformed JSX
      { pattern: /<(\w+)\s*([^>]*)\s*>\s*\{([^}]*)\}\s*<\/\1>/g, replacement: '<$1 $2>{$3}</$1>' },
    ];

    fixes.forEach(fix => {
      if (fix.pattern.test(content)) {
        content = content.replace(fix.pattern, fix.replacement);
        modified = true;
      }
    });

    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`✅ Fixed: ${filePath}`);
      return true;
    }
  } catch (error) {
    console.log(`❌ Error fixing ${filePath}:`, error.message);
  }
  return false;
=======

// Function to fix common syntax errors
function fixSyntaxErrors(content) {
  // Remove trailing commas before semicolons
  content = content.replace(/;/g, ';');
  
  // Remove standalone commas
  content = content.replace(/^;$/gm, '');
  
  // Fix malformed JSX attributes
  content = content.replace(/\s+src={src};/g, '');
  content = content.replace(/\s+alt={alt};/g, '');
  content = content.replace(/\s+width={width};/g, '');
  content = content.replace(/\s+height={height};/g, '');
  content = content.replace(/\s+className={className};/g, '');
  content = content.replace(/\s+priority={priority};/g, '');
  content = content.replace(/\s+quality={quality};/g, '');
  
  // Fix malformed function declarations
  content = content.replace(/^    };$/gm, '  };');
  content = content.replace(/^  };$/gm, '};');
  
  // Fix malformed imports
  content = content.replace(/import\s+React\s+from\s+'react';/g, "import React from 'react';");
  content = content.replace(/import\s+{\s*([^}]+)\s*}\s+from\s+'([^']+)';/g, "import { $1 } from '$2';");
  
  // Fix malformed exports
  content = content.replace(/export\s+default\s+([^;]+);/g, 'export default $1;');
  
  // Fix malformed JSX
  content = content.replace(/<([^>]+)>;/g, '<$1>');
  content = content.replace(/<\/([^>]+)>;/g, '</$1>');
  
  // Fix malformed object literals
  content = content.replace(/{\s*([^}]+)\s*;/g, '{\n    $1\n  }');
  
  // Fix malformed function calls
  content = content.replace(/\(\s*([^)]+)\s*;/g, '($1);');
  
  // Remove empty lines with just commas
  content = content.replace(/^;$/gm, '');
  
  // Fix malformed CSS
  content = content.replace(/,\s*};/g, ';');
  content = content.replace(/,\s*}/g, '}');
  
  return content;
}

// Function to process a file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixedContent = fixSyntaxErrors(content);
    
    if (content !== fixedContent) {
      fs.writeFileSync(filePath, fixedContent);
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
>>>>>>> cursor/fix-lint-push-and-merge-to-main-e10e
}

// Function to find all TypeScript/JavaScript files
function findFiles(dir, extensions = ['.ts', '.tsx', '.js', '.jsx']) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        traverse(fullPath);
      } else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
<<<<<<< HEAD
const srcDir = path.join(__dirname, 'src');
const files = findFiles(srcDir);

console.log(`📁 Found ${files.length} files to check...`);

let fixedCount = 0;
for (const file of files) {
  if (fixFile(file)) {
=======
const projectRoot = process.cwd();
const files = findFiles(projectRoot);

console.log(`Found ${files.length} files to process...`);

let fixedCount = 0;
for (const file of files) {
  if (processFile(file)) {
>>>>>>> cursor/fix-lint-push-and-merge-to-main-e10e
    fixedCount++;
  }
}

<<<<<<< HEAD
console.log(`🎉 Fixed ${fixedCount} files`);

// Try to run build again
console.log('🏗️  Running build...');
try {
  execSync('npm run build', { stdio: 'inherit' });
  console.log('✅ Build successful!');
} catch (error) {
  console.log('❌ Build still has errors, continuing with manual fixes...');
}
=======
console.log(`Fixed ${fixedCount} files`);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-e10e
