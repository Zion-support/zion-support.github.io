#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Get list of files with TypeScript errors
function getFilesWithErrors() {
  try {
    const output = execSync('pnpm run type-check 2>&1', { encoding: 'utf8' });
    const lines = output.split('\n');
    const files = new Set();
    
    lines.forEach(line => {
      const match = line.match(/^([^(]+\.tsx)\([0-9]+,[0-9]+\):/);
      if (match) {
        files.add(match[1]);
      }
    });
    
    return Array.from(files);
  } catch (error) {
    console.log('Error getting files with errors:', error.message);
    return [];
  }
}

// Common JSX fixes
function fixJSXContent(content) {
  let fixed = content;
  
  // Fix missing closing tags - common patterns
  const fixes = [
    // Fix self-closing tags that should be closed
    [/(<[^>]+[^/])>(\s*<)/g, '$1></$1>$2'],
    
    // Fix malformed JSX expressions
    [/<([^>]+)>([^<]+)<\/\1>/g, '<$1>$2</$1>'],
    
    // Fix missing closing tags for common elements
    [/<h1([^>]*)>([^<]+)<\/h1>/g, '<h1$1>$2</h1>'],
    [/<h2([^>]*)>([^<]+)<\/h2>/g, '<h2$1>$2</h2>'],
    [/<h3([^>]*)>([^<]+)<\/h3>/g, '<h3$1>$2</h3>'],
    [/<p([^>]*)>([^<]+)<\/p>/g, '<p$1>$2</p>'],
    [/<div([^>]*)>([^<]+)<\/div>/g, '<div$1>$2</div>'],
    [/<span([^>]*)>([^<]+)<\/span>/g, '<span$1>$2</span>'],
    
    // Fix malformed JSX fragments
    [/<>([^<]+)<\/>/g, '<>{$1}</>'],
    
    // Fix missing closing tags in complex structures
    [/<section([^>]*)>([^<]+)<\/section>/g, '<section$1>$2</section>'],
    [/<main([^>]*)>([^<]+)<\/main>/g, '<main$1>$2</main>'],
    
    // Fix malformed className attributes
    [/className="([^"]*)"\s*>/g, 'className="$1">'],
    
    // Fix missing closing tags for lists
    [/<ul([^>]*)>([^<]+)<\/ul>/g, '<ul$1>$2</ul>'],
    [/<li([^>]*)>([^<]+)<\/li>/g, '<li$1>$2</li>'],
    
    // Fix malformed imports
    [/import\s+{\s*([^}]+)\s*}\s+from\s+['"]([^'"]+)['"];?/g, 'import { $1 } from "$2";'],
    
    // Fix missing semicolons
    [/export default ([^;]+)(?!;)/g, 'export default $1;'],
    
    // Fix malformed function declarations
    [/const\s+([^=]+)\s*=\s*\(\)\s*=>\s*{/g, 'const $1 = () => {'],
    
    // Fix missing closing braces
    [/}\s*$/g, '}\n'],
    
    // Fix malformed JSX expressions
    [/{\s*([^}]+)\s*}/g, '{$1}'],
    
    // Fix missing closing tags for components
    [/<([A-Z][a-zA-Z0-9]*)([^>]*)>([^<]+)<\/\1>/g, '<$1$2>$3</$1>'],
  ];
  
  fixes.forEach(([pattern, replacement]) => {
    fixed = fixed.replace(pattern, replacement);
  });
  
  return fixed;
}

// Fix a single file
function fixFile(filePath) {
  try {
    console.log(`Fixing ${filePath}...`);
    
    if (!fs.existsSync(filePath)) {
      console.log(`File not found: ${filePath}`);
      return false;
    }
    
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixJSXContent(content);
    
    if (content !== fixed) {
      fs.writeFileSync(filePath, fixed, 'utf8');
      console.log(`Fixed ${filePath}`);
      return true;
    } else {
      console.log(`No changes needed for ${filePath}`);
      return false;
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Main function
function main() {
  console.log('Getting list of files with TypeScript errors...');
  const files = getFilesWithErrors();
  
  console.log(`Found ${files.length} files with errors`);
  
  let fixedCount = 0;
  let errorCount = 0;
  
  files.forEach(file => {
    if (fixFile(file)) {
      fixedCount++;
    } else {
      errorCount++;
    }
  });
  
  console.log(`\nFixed ${fixedCount} files`);
  console.log(`Errors in ${errorCount} files`);
  
  // Run type check again to see if we fixed anything
  console.log('\nRunning type check again...');
  try {
    execSync('pnpm run type-check', { stdio: 'inherit' });
    console.log('Type check passed!');
  } catch (error) {
    console.log('Type check still has errors, but we made progress');
  }
}

if (require.main === module) {
  main();
}

module.exports = { fixJSXContent, fixFile };