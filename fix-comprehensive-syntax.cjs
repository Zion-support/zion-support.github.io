#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { glob } = require('glob');

// Function to fix comprehensive syntax errors
function fixComprehensiveSyntax(content) {
  let fixed = content;

  // Fix import statements missing closing quotes
  fixed = fixed.replace(/import\s+([^;]+)from\s+"([^"]+)\n/g, 'import $1 from "$2";\n');
  fixed = fixed.replace(/import\s+([^;]+)from\s+"([^"]+)$/gm, 'import $1 from "$2";');
  fixed = fixed.replace(/import\s+([^;]+)from\s+"([^"]+)\s*$/gm, 'import $1 from "$2";');
  
  // Fix import statements with missing semicolons
  fixed = fixed.replace(/import\s+([^;]+)from\s+"([^"]+)"\s*$/gm, 'import $1 from "$2";');
  fixed = fixed.replace(/import\s+([^;]+)from\s+"([^"]+)"\s*\n/g, 'import $1 from "$2";\n');

  // Fix JSX structure issues
  // Fix missing opening tags
  fixed = fixed.replace(/<div className="([^"]*?)"\s*>\s*<\/div>\s*<([^>]+)>/g, '<div className="$1"><$2>');
  
  // Fix malformed JSX fragments
  fixed = fixed.replace(/<>\s*<\/>\s*<([^>]+)>/g, '<$1>');
  
  // Fix JSX return statements
  fixed = fixed.replace(/return\s*\(\s*<div([^>]*)>\s*<\/div>\s*<([^>]+)>/g, 'return (<div$1><$2>');
  
  // Fix Helmet structure
  fixed = fixed.replace(/<Helmet>\s*<\/Helmet>\s*<title>/g, '<Helmet><title>');
  fixed = fixed.replace(/<\/title>\s*<meta/g, '</title><meta');
  fixed = fixed.replace(/\/>\s*<\/Helmet>/g, '/></Helmet>');

  // Fix function declarations
  fixed = fixed.replace(/const\s+([^=]+)=\s*\(\)\s*=>\s*\(\s*<div([^>]*)>\s*<\/div>\s*<([^>]+)>/g, 'const $1 = () => (<div$2><$3>');
  
  // Fix export statements
  fixed = fixed.replace(/export\s+default\s+([^;]+)\s*$/gm, 'export default $1;');
  fixed = fixed.replace(/export\s+default\s+([^;]+)\s*\n/g, 'export default $1;\n');

  // Fix JSX closing tags
  fixed = fixed.replace(/<\/div>\s*\)\s*;\s*$/gm, '</div>);');
  fixed = fixed.replace(/<\/div>\s*\)\s*;\s*\n/g, '</div>);\n');

  // Fix extra semicolons
  fixed = fixed.replace(/;\s*;\s*$/gm, ';');
  fixed = fixed.replace(/;\s*;\s*\n/g, ';\n');

  // Fix JSX structure - ensure proper nesting
  fixed = fixed.replace(/<div className="([^"]*?)"\s*>\s*<\/div>\s*<div/g, '<div className="$1"><div');
  fixed = fixed.replace(/<\/div>\s*<\/div>\s*\)\s*;\s*$/gm, '</div></div>);');
  fixed = fixed.replace(/<\/div>\s*<\/div>\s*\)\s*;\s*\n/g, '</div></div>);\n');

  // Fix specific patterns for 5G pages
  fixed = fixed.replace(/<div className="min-h-screen[^>]*><\/div>\s*<Helmet>/g, '<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"><Helmet>');
  fixed = fixed.replace(/<\/Helmet>\s*<div className="container/g, '</Helmet><div className="container');
  fixed = fixed.replace(/<\/div>\s*<\/div>\s*<\/div>\s*\)\s*;\s*$/gm, '</div></div></div>);');

  // Fix missing closing quotes in strings
  fixed = fixed.replace(/"([^"]*?)\n/g, (match, content) => {
    if (content.endsWith('"')) return match;
    return `"${content}"\n`;
  });

  // Fix unterminated string literals
  fixed = fixed.replace(/"([^"]*?)$/gm, (match, content) => {
    if (content.endsWith('"')) return match;
    return `"${content}"`;
  });

  return fixed;
}

// Function to fix specific file types
function fixFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixComprehensiveSyntax(content);
    
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

// Main execution
async function main() {
  console.log('Starting comprehensive syntax fixes...');

  // Get all TypeScript and JavaScript files
  const patterns = [
    'app/**/*.tsx',
    'app/**/*.ts',
    '*.tsx',
    '*.ts'
  ];

  let totalFixed = 0;

  for (const pattern of patterns) {
    const files = await glob(pattern, { ignore: ['node_modules/**', 'dist/**', '.next/**'] });
    
    for (const file of files) {
      if (fixFile(file)) {
        totalFixed++;
      }
    }
  }

  console.log(`Fixed ${totalFixed} files`);
  console.log('Comprehensive syntax fixes completed!');
}

main().catch(console.error);