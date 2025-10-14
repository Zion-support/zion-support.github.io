#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to fix common syntax errors in TSX files
function fixSyntaxErrors(content, filePath) {
  let fixed = content;
  
  // Fix unterminated string literals
  fixed = fixed.replace(/content="([^"]*)$/gm, 'content="$1"');
  
  // Fix missing closing tags and malformed JSX
  fixed = fixed.replace(/}\s*;\s*}\s*;\s*}\s*;\s*$/gm, '}');
  fixed = fixed.replace(/}\s*;\s*}\s*;\s*$/gm, '}');
  fixed = fixed.replace(/}\s*;\s*$/gm, '}');
  
  // Fix malformed JSX structure
  fixed = fixed.replace(/<div[^>]*>\s*\)\s*;\s*$/gm, '</div>');
  fixed = fixed.replace(/<main[^>]*>\s*\)\s*;\s*$/gm, '</main>');
  fixed = fixed.replace(/<Router[^>]*>\s*\)\s*;\s*$/gm, '</Router>');
  fixed = fixed.replace(/<HelmetProvider[^>]*>\s*\)\s*;\s*$/gm, '</HelmetProvider>');
  
  // Fix broken JSX expressions
  fixed = fixed.replace(/\)\s*;\s*<([^>]+)>/gm, '>\n      <$1>');
  fixed = fixed.replace(/<\/[^>]+>\s*<([^>]+)>/gm, '</$1>');
  
  // Fix missing return statements
  if (fixed.includes('export default function') && !fixed.includes('return (')) {
    fixed = fixed.replace(/export default function[^{]*{([^}]*)}/gm, (match, body) => {
      if (!body.trim().includes('return')) {
        return match.replace('{', '{\n  return (');
      }
      return match;
    });
  }
  
  // Fix broken function declarations
  fixed = fixed.replace(/export default function[^{]*{\s*'([^']*)'\s*return\s*\(/gm, 'export default function Page() {\n  return (');
  
  // Fix malformed JSX structure in specific patterns
  fixed = fixed.replace(/<React\.Fragment>\s*\)\s*;\s*<\/React\.Fragment>/gm, '<React.Fragment>\n      </React.Fragment>');
  
  // Fix broken closing tags
  fixed = fixed.replace(/<\/[^>]+>\s*;\s*$/gm, '');
  fixed = fixed.replace(/;\s*<\/[^>]+>/gm, '</$1>');
  
  // Fix missing semicolons and brackets
  fixed = fixed.replace(/}\s*export default/gm, '}\n\nexport default');
  
  // Clean up extra semicolons and brackets
  fixed = fixed.replace(/;\s*;\s*$/gm, ';');
  fixed = fixed.replace(/}\s*}\s*$/gm, '}');
  
  return fixed;
}

// Function to fix specific file patterns
function fixSpecificFiles() {
  const files = [
    'app/404.tsx',
    'app/App.tsx',
    'app/ad-management/page.tsx',
    'app/ai-3d-generation/page.tsx',
    'app/ai-analytics/page.tsx',
    'app/ai-automation-platform/page.tsx',
    'app/ai-automation-suite/page.tsx',
    'app/ai-automation/page.tsx'
  ];
  
  files.forEach(filePath => {
    const fullPath = path.join(process.cwd(), filePath);
    if (fs.existsSync(fullPath)) {
      let content = fs.readFileSync(fullPath, 'utf8');
      const fixed = fixSyntaxErrors(content, filePath);
      
      if (fixed !== content) {
        fs.writeFileSync(fullPath, fixed);
        console.log(`Fixed: ${filePath}`);
      }
    }
  });
}

// Main execution
console.log('Fixing syntax errors...');
fixSpecificFiles();

// Find and fix all TSX files with common patterns
const tsxFiles = glob.sync('app/**/*.tsx', { cwd: process.cwd() });

tsxFiles.forEach(filePath => {
  const fullPath = path.join(process.cwd(), filePath);
  let content = fs.readFileSync(fullPath, 'utf8');
  const fixed = fixSyntaxErrors(content, filePath);
  
  if (fixed !== content) {
    fs.writeFileSync(fullPath, fixed);
    console.log(`Fixed: ${filePath}`);
  }
});

console.log('Syntax error fixing completed!');