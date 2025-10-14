#!/usr/bin/env node

import fs from 'fs';
import { glob } from 'glob';

// Function to fix common syntax errors
function fixSyntaxErrors(content) {
  let fixed = content;
  
  // Fix unterminated string literals
  fixed = fixed.replace(/import\s+(\w+)\s+from\s+([^'";\n]+);?/g, (match, name, importPath) => {
    if (!importPath.startsWith("'") && !importPath.startsWith('"')) {
      return `import ${name} from '${importPath}';`;
    }
    return match;
  });
  
  // Fix malformed JSX with missing opening tags
  fixed = fixed.replace(/<(\w+)\s*\/>/g, '<$1 />');
  
  // Fix JSX expressions that need a parent element
  fixed = fixed.replace(/(<div[^>]*><\/div>)\s*(<div[^>]*><\/div>)/g, '<>$1$2</>');
  
  // Fix unterminated strings in object properties
  fixed = fixed.replace(/(\w+):\s*'([^']*?)(?=\s*[,}])/g, (match, key, value) => {
    if (!value.endsWith("'") && !value.includes("'")) {
      return `${key}: '${value}'`;
    }
    return match;
  });
  
  // Fix malformed JSX return statements
  fixed = fixed.replace(/return\s*\(\s*<([^>]+)>\s*<\/\1>\s*\)\s*;?\s*$/gm, 'return <$1></$1>;');
  
  // Fix missing closing brackets in arrays
  fixed = fixed.replace(/(\[[^\]]*?)(?=\s*;)/g, (match) => {
    const openBrackets = (match.match(/\[/g) || []).length;
    const closeBrackets = (match.match(/\]/g) || []).length;
    if (openBrackets > closeBrackets) {
      return match + ']'.repeat(openBrackets - closeBrackets);
    }
    return match;
  });
  
  // Fix missing closing parentheses
  fixed = fixed.replace(/(\([^)]*?)(?=\s*;)/g, (match) => {
    const openParens = (match.match(/\(/g) || []).length;
    const closeParens = (match.match(/\)/g) || []).length;
    if (openParens > closeParens) {
      return match + ')'.repeat(openParens - closeParens);
    }
    return match;
  });
  
  // Fix malformed JSX attributes
  fixed = fixed.replace(/(\w+):\s*([^,}]+)(?=\s*[,}])/g, (match, key, value) => {
    if (value.includes('"') && !value.startsWith('"')) {
      return `${key}: "${value.replace(/"/g, '')}"`;
    }
    return match;
  });
  
  // Fix specific patterns for corrupted files
  fixed = fixed.replace(/<><><div>div<\/div>\s*<div><\/div><\/><\/>/g, '<div></div>');
  fixed = fixed.replace(/<div>div<\/div>/g, '<div></div>');
  fixed = fixed.replace(/<div>h3<\/div>/g, '<h3></h3>');
  fixed = fixed.replace(/<div>Route<\/div>/g, '<Route></Route>');
  fixed = fixed.replace(/<div>Routes<\/div>/g, '<Routes></Routes>');
  
  // Fix malformed function declarations
  fixed = fixed.replace(/export default function (\w+)\(\) \{\}/g, 'export default function $1() {\n  return <div></div>;\n}');
  
  // Fix malformed JSX structure
  fixed = fixed.replace(/<(\w+)><\/\1>\s*<(\w+)><\/\2>/g, '<$1>$2</$1>');
  
  // Fix missing semicolons at end of statements
  fixed = fixed.replace(/(\w+)\s*$/gm, (match) => {
    if (match.trim() && !match.endsWith(';') && !match.endsWith('}') && !match.endsWith(')') && !match.endsWith(']')) {
      return match + ';';
    }
    return match;
  });
  
  // Fix specific patterns for about page and similar
  fixed = fixed.replace(/<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"><\/div>\s*<Helmet><\/Helmet>/g, 
    '<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">\n      <Helmet>');
  
  // Fix malformed JSX structure
  fixed = fixed.replace(/<title>([^<]*)<\/title>\s*<meta[^>]*\/>\s*<\/meta>/g, 
    '<title>$1</title>\n        <meta name="description" content="About Zion Tech Group" />');
  
  // Fix missing closing tags
  fixed = fixed.replace(/<(\w+)[^>]*>\s*<\/\1>\s*<(\w+)[^>]*>/g, '<$1>$2</$1>\n      <$2>');
  
  return fixed;
}

// Function to fix specific file patterns
function fixFile(filePath) {
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
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
console.log('Starting final syntax fixes...');

async function main() {
  const files = await glob('app/**/*.{tsx,jsx}', { cwd: process.cwd() });
  let fixedCount = 0;

  for (const file of files) {
    if (fixFile(file)) {
      fixedCount++;
    }
  }

  console.log(`Fixed ${fixedCount} files`);
}

main().catch(console.error);