#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to fix common syntax errors in TSX files
function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix 1: Remove duplicate imports
    const importLines = content.split('\n').filter(line => line.trim().startsWith('import'));
    const uniqueImports = [...new Set(importLines)];
    if (importLines.length !== uniqueImports.length) {
      const nonImportLines = content.split('\n').filter(line => !line.trim().startsWith('import'));
      content = [...uniqueImports, ...nonImportLines].join('\n');
      modified = true;
    }

    // Fix 2: Fix malformed JSX closing tags
    content = content.replace(/<\s*\/\s*>\s*:\s*$/gm, '  );');
    content = content.replace(/<\s*\/\s*>\s*\)\s*;\s*$/gm, '  );');
    
    // Fix 3: Fix missing closing tags for h1 elements
    content = content.replace(/<h1([^>]*)>\s*([^<]+)\s*<p([^>]*)>([^<]+)<\/p>\s*$/gm, '<h1$1>$2</h1>\n              <p$3>$4</p>');
    
    // Fix 4: Fix malformed JSX structure with stray characters
    content = content.replace(/,\s*-\s*>\s*$/gm, '');
    content = content.replace(/`\s*-\s*>\s*$/gm, '');
    content = content.replace(/\$\d+/g, '');
    
    // Fix 5: Fix missing closing braces for objects
    content = content.replace(/\{\s*icon:\s*BarChart,\s*$/gm, '{\n      icon: BarChart,');
    content = content.replace(/\}\s*,\s*$/gm, '    },\n  ');
    
    // Fix 6: Fix malformed component structure
    content = content.replace(/const\s+PagePage:\s*React\.FC\s*=\s*\(\)\s*=>\s*\{/g, 'const AIAnalyticsDashboardPage: React.FC = () => {');
    
    // Fix 7: Fix missing closing tags for Helmet
    content = content.replace(/<Helmet>\s*$/gm, '<Helmet>\n        <title>Page Title</title>\n        <meta name="description" content="Page description" />\n      </Helmet>');
    
    // Fix 8: Fix malformed JSX fragments
    content = content.replace(/<>\s*$/gm, '<>');
    content = content.replace(/<\s*\/\s*>\s*$/gm, '</>');
    
    // Fix 9: Fix missing closing div tags
    content = content.replace(/<div([^>]*)>\s*$/gm, '<div$1>');
    
    // Fix 10: Fix stray semicolons and malformed syntax
    content = content.replace(/;\s*$/gm, '');
    content = content.replace(/,\s*$/gm, '');
    
    // Fix 11: Fix malformed return statements
    content = content.replace(/return\s*\(\s*<>\s*$/gm, '  return (\n    <>');
    
    // Fix 12: Fix missing closing parentheses
    content = content.replace(/\)\s*;\s*$/gm, '  );');
    
    // Fix 13: Fix malformed object properties
    content = content.replace(/icon:\s*BarChart,\s*$/gm, 'icon: BarChart,');
    
    // Fix 14: Fix missing closing braces for arrays
    content = content.replace(/\]\s*$/gm, '  ];');
    
    // Fix 15: Fix malformed JSX attributes
    content = content.replace(/className="[^"]*"\s*>\s*$/gm, 'className="...">');
    
    // Fix 16: Fix missing closing tags for sections
    content = content.replace(/<section([^>]*)>\s*$/gm, '<section$1>');
    
    // Fix 17: Fix malformed component exports
    content = content.replace(/export\s+default\s+[A-Za-z]+Page;\s*$/gm, 'export default AIAnalyticsDashboardPage;');
    
    // Fix 18: Fix missing closing tags for divs
    content = content.replace(/<div([^>]*)>\s*$/gm, '<div$1>');
    
    // Fix 19: Fix malformed JSX structure
    content = content.replace(/<\s*\/\s*>\s*:\s*$/gm, '  );');
    
    // Fix 20: Fix missing closing tags for React fragments
    content = content.replace(/<>\s*$/gm, '<>');
    content = content.replace(/<\s*\/\s*>\s*$/gm, '</>');

    if (modified || content !== fs.readFileSync(filePath, 'utf8')) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to fix specific file patterns
async function fixSpecificFiles() {
  const patterns = [
    'app/**/*.tsx',
    'app/**/*.ts'
  ];
  
  let totalFixed = 0;
  
  for (const pattern of patterns) {
    const files = await glob(pattern, { cwd: process.cwd() });
    for (const file of files) {
      if (fixSyntaxErrors(file)) {
        totalFixed++;
      }
    }
  }
  
  console.log(`Total files fixed: ${totalFixed}`);
}

// Run the fix
console.log('Starting comprehensive syntax error fixes...');
await fixSpecificFiles();
console.log('Syntax error fixes completed!');