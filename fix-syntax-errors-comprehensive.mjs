#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

const filesToFix = [
  'src/components/PerformanceOptimizations.tsx',
  'src/components/TestDashboard.tsx',
  'src/components/AnalyticsDashboard.tsx',
  'src/components/EnhancedErrorBoundary.tsx',
  'src/components/EnhancedSearch.tsx',
  'src/components/ErrorBoundary.tsx'
];

function fixSyntaxErrors(content) {
  // Fix common JSX syntax errors
  let fixed = content;
  
  // Fix className spacing issues
  fixed = fixed.replace(/className="([^"]*?)"([^"]*?)"/g, (match, p1, p2) => {
    const cleanP1 = p1.replace(/([a-zA-Z])([A-Z])/g, '$1 $2').replace(/([a-z])([A-Z])/g, '$1 $2');
    const cleanP2 = p2.replace(/([a-zA-Z])([A-Z])/g, '$1 $2').replace(/([a-z])([A-Z])/g, '$1 $2');
    return `className="${cleanP1}${cleanP2}"`;
  });
  
  // Fix missing spaces in className attributes
  fixed = fixed.replace(/className="([^"]*?)([a-z])([A-Z])([^"]*?)"/g, 'className="$1$2 $3$4"');
  fixed = fixed.replace(/className="([^"]*?)([a-z])([0-9])([^"]*?)"/g, 'className="$1$2 $3$4"');
  fixed = fixed.replace(/className="([^"]*?)([0-9])([a-zA-Z])([^"]*?)"/g, 'className="$1$2 $3$4"');
  
  // Fix specific common patterns
  fixed = fixed.replace(/className="([^"]*?)space-y-2""/g, 'className="$1space-y-2"');
  fixed = fixed.replace(/className="([^"]*?)text-sm font-medium""/g, 'className="$1text-sm font-medium"');
  fixed = fixed.replace(/className="([^"]*?)grid grid-cols-2md: grid-cols-4gap-4""/g, 'className="$1grid grid-cols-2 md:grid-cols-4 gap-4"');
  fixed = fixed.replace(/className="([^"]*?)block text-sm font-medium""/g, 'className="$1block text-sm font-medium"');
  
  // Fix array length syntax
  fixed = fixed.replace(/Array\.from\(\{\s*lengt,\s*h:\s*(\d+)\s*\}/g, 'Array.from({ length: $1 }');
  
  // Fix malformed JSX elements
  fixed = fixed.replace(/<h3className=/g, '<h3 className=');
  fixed = fixed.replace(/<div className="([^"]*?)""/g, '<div className="$1"');
  fixed = fixed.replace(/<label className="([^"]*?)""/g, '<label className="$1"');
  
  // Fix switch statement syntax
  fixed = fixed.replace(/switch\s*\(\s*([^)]+)\s*\)\s*\{;/g, 'switch ($1) {');
  fixed = fixed.replace(/case\s*'([^']+)':\s*return\s*'([^']+)';/g, "case '$1': return '$2';");
  fixed = fixed.replace(/default:\s*return\s*'([^']+)';\s*\}/g, "default: return '$1'; }");
  
  // Fix comparison operators
  fixed = fixed.replace(/=\s*==/g, '===');
  fixed = fixed.replace(/=\s*!=/g, '!==');
  
  // Fix function syntax
  fixed = fixed.replace(/\(\s*([^)]+)\s*\)\s*=>\s*\{/g, '($1) => {');
  fixed = fixed.replace(/\(\s*([^)]+)\s*\)\s*=>\s*\(/g, '($1) => (');
  
  // Fix object syntax
  fixed = fixed.replace(/\{\s*([^}]+)\s*;\s*\}/g, '{ $1 }');
  
  // Fix template literals
  fixed = fixed.replace(/`([^`]*?)\$\{([^}]+)\}([^`]*?)`/g, '`$1${$2}$3`');
  
  return fixed;
}

async function fixFile(filePath) {
  try {
    if (!fs.existsSync(filePath)) {
      console.log(`File not found: ${filePath}`);
      return;
    }
    
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixSyntaxErrors(content);
    
    if (content !== fixed) {
      fs.writeFileSync(filePath, fixed, 'utf8');
      console.log(`Fixed syntax errors in: ${filePath}`);
    } else {
      console.log(`No syntax errors found in: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

async function main() {
  console.log('Starting comprehensive syntax error fixes...');
  
  for (const file of filesToFix) {
    await fixFile(file);
  }
  
  console.log('Syntax error fixes completed!');
}

main().catch(console.error);