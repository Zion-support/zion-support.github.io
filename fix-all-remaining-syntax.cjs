#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { glob } = require('glob');

// Function to fix all remaining syntax errors
function fixAllRemainingSyntax(content) {
  let fixed = content;

  // Fix import statements missing closing quotes and semicolons
  fixed = fixed.replace(/import\s+([^;]+)from\s+"([^"]+)\n/g, 'import $1 from "$2";\n');
  fixed = fixed.replace(/import\s+([^;]+)from\s+"([^"]+)$/gm, 'import $1 from "$2";');
  fixed = fixed.replace(/import\s+([^;]+)from\s+"([^"]+)\s*$/gm, 'import $1 from "$2";');
  
  // Fix import statements with missing semicolons
  fixed = fixed.replace(/import\s+([^;]+)from\s+"([^"]+)"\s*$/gm, 'import $1 from "$2";');
  fixed = fixed.replace(/import\s+([^;]+)from\s+"([^"]+)"\s*\n/g, 'import $1 from "$2";\n');

  // Fix React.lazy statements
  fixed = fixed.replace(/React\.lazy\(\(\)\s*=>\s*import\("([^"]+)"\)\s*$/gm, 'React.lazy(() => import("$1"));');
  fixed = fixed.replace(/React\.lazy\(\(\)\s*=>\s*import\("([^"]+)"\)\s*;/g, 'React.lazy(() => import("$1"));');
  
  // Fix const declarations
  fixed = fixed.replace(/const\s+([^=]+)=\s*React\.lazy\(\(\)\s*=>\s*import\("([^"]+)"\)\s*$/gm, 'const $1 = React.lazy(() => import("$1"));');
  fixed = fixed.replace(/const\s+([^=]+)=\s*React\.lazy\(\(\)\s*=>\s*import\("([^"]+)"\)\s*;/g, 'const $1 = React.lazy(() => import("$1"));');

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

  // Fix specific patterns for pages
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

  // Fix double quotes at the end of lines
  fixed = fixed.replace(/"\s*"\s*\n/g, '"\n');
  fixed = fixed.replace(/"\s*"\s*;/g, '";');
  fixed = fixed.replace(/"\s*"\s*,/g, '",');
  fixed = fixed.replace(/"\s*"\s*\)/g, '")');

  // Fix malformed JSX - common patterns
  fixed = fixed.replace(/<div className="([^"]*?)"\s*>\s*<\/div>\s*"/g, '<div className="$1"></div>');
  fixed = fixed.replace(/<div className="([^"]*?)"\s*>\s*<\/div>\s*"/g, '<div className="$1"></div>');
  
  // Fix extra semicolons and quotes
  fixed = fixed.replace(/;\s*"/g, '');
  fixed = fixed.replace(/,\s*"/g, '');
  fixed = fixed.replace(/\)\s*"/g, ')');
  fixed = fixed.replace(/}\s*"/g, '}');
  fixed = fixed.replace(/]\s*"/g, ']');
  fixed = fixed.replace(/>\s*"/g, '>');

  // Fix import statements with extra quotes
  fixed = fixed.replace(/import\s+([^;]+);\s*"/g, 'import $1;');
  fixed = fixed.replace(/from\s+"([^"]+)"\s*"/g, 'from "$1"');

  // Fix JSX closing tags
  fixed = fixed.replace(/<\/div>\s*"/g, '</div>');
  fixed = fixed.replace(/<\/h[1-6]>\s*"/g, (match) => match.replace('"', ''));
  fixed = fixed.replace(/<\/p>\s*"/g, '</p>');
  fixed = fixed.replace(/<\/span>\s*"/g, '</span>');
  fixed = fixed.replace(/<\/button>\s*"/g, '</button>');

  // Fix function declarations
  fixed = fixed.replace(/const\s+([^=]+)=\s*\(\)\s*=>\s*\(\s*"/g, 'const $1 = () => (');
  fixed = fixed.replace(/export\s+default\s+([^;]+);\s*"/g, 'export default $1;');

  // Fix return statements
  fixed = fixed.replace(/return\s*\(\s*"/g, 'return (');
  fixed = fixed.replace(/return\s*\(\s*<([^>]+)>\s*"/g, 'return (<$1>');

  // Remove extra quotes at the end of lines
  fixed = fixed.replace(/\s*"\s*\n/g, '\n');
  fixed = fixed.replace(/\s*"\s*$/g, '');

  // Fix JSX fragments
  fixed = fixed.replace(/<>\s*"/g, '<>');
  fixed = fixed.replace(/<\/>\s*"/g, '</>');

  // Fix Helmet tags
  fixed = fixed.replace(/<Helmet>\s*<\/Helmet>\s*"/g, '<Helmet></Helmet>');
  fixed = fixed.replace(/<title>([^<]+)<\/title>\s*"/g, '<title>$1</title>');
  fixed = fixed.replace(/<meta\s+([^>]+)\s*\/>\s*"/g, '<meta $1 />');

  // Fix common JSX patterns
  fixed = fixed.replace(/className="([^"]*?)"\s*>\s*<\/div>\s*"/g, 'className="$1"></div>');
  fixed = fixed.replace(/className="([^"]*?)"\s*>\s*<\/h[1-6]>\s*"/g, 'className="$1"></h1>');

  // Remove trailing quotes and semicolons
  fixed = fixed.replace(/\s*"\s*;\s*$/gm, '');
  fixed = fixed.replace(/\s*"\s*$/gm, '');

  return fixed;
}

// Function to fix specific file types
function fixFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixAllRemainingSyntax(content);
    
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
  console.log('Starting comprehensive syntax fixes for all remaining files...');

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