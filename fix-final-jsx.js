#!/usr/bin/env node

import fs from 'fs';
import { glob } from 'glob';

// Function to fix final JSX syntax errors
function fixFinalJSX(content) {
  // Fix malformed JSX attributes with trailing quotes
  content = content.replace(/className="([^"]*)"\s*"/g, 'className="$1"');
  content = content.replace(/content="([^"]*)"\s*"/g, 'content="$1"');
  content = content.replace(/name="([^"]*)"\s*"/g, 'name="$1"');
  content = content.replace(/type="([^"]*)"\s*"/g, 'type="$1"');
  content = content.replace(/placeholder="([^"]*)"\s*"/g, 'placeholder="$1"');
  content = content.replace(/alt="([^"]*)"\s*"/g, 'alt="$1"');
  content = content.replace(/src="([^"]*)"\s*"/g, 'src="$1"');
  content = content.replace(/href="([^"]*)"\s*"/g, 'href="$1"');
  
  // Fix malformed JSX closing tags
  content = content.replace(/<\/>\s*"/g, '</>');
  content = content.replace(/<\/div>\s*"/g, '</div>');
  content = content.replace(/<\/section>\s*"/g, '</section>');
  content = content.replace(/<\/h1>\s*"/g, '</h1>');
  content = content.replace(/<\/h2>\s*"/g, '</h2>');
  content = content.replace(/<\/h3>\s*"/g, '</h3>');
  content = content.replace(/<\/p>\s*"/g, '</p>');
  content = content.replace(/<\/span>\s*"/g, '</span>');
  content = content.replace(/<\/button>\s*"/g, '</button>');
  content = content.replace(/<\/a>\s*"/g, '</a>');
  content = content.replace(/<\/img>\s*"/g, '</img>');
  content = content.replace(/<\/ul>\s*"/g, '</ul>');
  content = content.replace(/<\/li>\s*"/g, '</li>');
  
  // Fix malformed JSX opening tags
  content = content.replace(/<div className="([^"]*)"\s*"/g, '<div className="$1"');
  content = content.replace(/<section className="([^"]*)"\s*"/g, '<section className="$1"');
  content = content.replace(/<h1 className="([^"]*)"\s*"/g, '<h1 className="$1"');
  content = content.replace(/<h2 className="([^"]*)"\s*"/g, '<h2 className="$1"');
  content = content.replace(/<h3 className="([^"]*)"\s*"/g, '<h3 className="$1"');
  content = content.replace(/<p className="([^"]*)"\s*"/g, '<p className="$1"');
  content = content.replace(/<span className="([^"]*)"\s*"/g, '<span className="$1"');
  content = content.replace(/<button className="([^"]*)"\s*"/g, '<button className="$1"');
  content = content.replace(/<a className="([^"]*)"\s*"/g, '<a className="$1"');
  content = content.replace(/<ul className="([^"]*)"\s*"/g, '<ul className="$1"');
  content = content.replace(/<li className="([^"]*)"\s*"/g, '<li className="$1"');
  
  // Fix malformed self-closing tags
  content = content.replace(/<img([^>]*)\s*"/g, '<img$1');
  content = content.replace(/<input([^>]*)\s*"/g, '<input$1');
  content = content.replace(/<br\s*"/g, '<br');
  content = content.replace(/<hr\s*"/g, '<hr');
  
  // Fix malformed JSX fragments
  content = content.replace(/<>\s*"/g, '<>');
  content = content.replace(/<\/>\s*"/g, '</>');
  
  // Fix malformed comments
  content = content.replace(/{\/\*([^*]|\*[^/])*\*\/}\s*"/g, (match) => match.replace(/"$/, ''));
  
  // Fix malformed string literals in JSX
  content = content.replace(/'([^']*)'\s*"/g, "'$1'");
  content = content.replace(/"([^"]*)"\s*"/g, '"$1"');
  
  // Fix malformed template literals
  content = content.replace(/`([^`]*)`\s*"/g, '`$1`');
  
  // Fix malformed array syntax in JSX
  content = content.replace(/\[([^\]]*)\]\s*"/g, '[$1]');
  
  // Fix malformed object syntax in JSX
  content = content.replace(/\{([^}]*)\}\s*"/g, '{$1}');
  
  // Fix malformed function calls in JSX
  content = content.replace(/(\w+)\(([^)]*)\)\s*"/g, '$1($2)');
  
  // Fix malformed ternary operators
  content = content.replace(/\?([^:]*):([^}]*)\s*"/g, '?$1:$2');
  
  // Fix malformed logical operators
  content = content.replace(/&&\s*([^&]*)\s*"/g, '&& $1');
  content = content.replace(/\|\|\s*([^|]*)\s*"/g, '|| $1');
  
  // Fix malformed closing parentheses
  content = content.replace(/\)\s*"/g, ')');
  
  // Fix malformed semicolons
  content = content.replace(/;\s*"/g, ';');
  
  // Fix malformed commas
  content = content.replace(/,\s*"/g, ',');
  
  // Fix malformed closing braces
  content = content.replace(/\}\s*"/g, '}');
  
  // Fix malformed closing brackets
  content = content.replace(/\]\s*"/g, ']');
  
  // Fix malformed map functions
  content = content.replace(/\.map\(([^)]*)\)\s*"/g, '.map($1)');
  
  // Fix malformed arrow functions
  content = content.replace(/=>\s*\(\s*"/g, '=> (');
  content = content.replace(/=>\s*\{\s*"/g, '=> {');
  
  // Fix malformed return statements
  content = content.replace(/return\s*\(\s*"/g, 'return (');
  
  // Fix malformed closing parentheses in JSX
  content = content.replace(/\)\s*\)\s*"/g, '))');
  content = content.replace(/\)\s*\}\s*"/g, ')}');
  
  return content;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixedContent = fixFinalJSX(content);
    
    if (content !== fixedContent) {
      fs.writeFileSync(filePath, fixedContent, 'utf8');
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
  const patterns = [
    'app/**/*.tsx',
    'app/**/*.ts',
    'api/**/*.js'
  ];
  
  let totalFixed = 0;
  
  for (const pattern of patterns) {
    const files = await glob(pattern, { cwd: process.cwd() });
    files.forEach(file => {
      if (processFile(file)) {
        totalFixed++;
      }
    });
  }
  
  console.log(`\nTotal files fixed: ${totalFixed}`);
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { fixFinalJSX, processFile };