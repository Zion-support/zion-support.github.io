#!/usr/bin/env node

import fs from 'fs';
import { glob } from 'glob';

// Function to fix remaining syntax errors
function fixRemainingErrors(content) {
  // Fix malformed function declarations with missing opening braces
  content = content.replace(/const (\w+) = \(([^)]*)\) => \{\}/g, 'const $1 = ($2) => {');
  content = content.replace(/export default function (\w+)\(\) \{\}/g, 'export default function $1() {');
  
  // Fix malformed try-catch blocks
  content = content.replace(/try \{\}/g, 'try {');
  content = content.replace(/catch \(error\) \{\}/g, 'catch (error) {');
  
  // Fix malformed object literals in arrays
  content = content.replace(/\[\s*\{\s*icon: "([^"]+)",\s*title: '([^']+)',\s*description: '([^']+)',\s*benefits: \[([^\]]+)\]\s*'\s*\}/g, 
    '[\n    {\n      icon: "$1",\n      title: "$2",\n      description: "$3",\n      benefits: [$4]\n    }');
  
  // Fix malformed object properties
  content = content.replace(/icon: "([^"]+)",\s*title: '([^']+)',\s*description: '([^']+)',\s*benefits: \[([^\]]+)\]\s*'/g, 
    'icon: "$1",\n      title: "$2",\n      description: "$3",\n      benefits: [$4]');
  
  // Fix malformed string literals with trailing quotes
  content = content.replace(/'([^']*)';'/g, "'$1';");
  content = content.replace(/"([^"]*)";"/g, '"$1";');
  
  // Fix malformed console.error statements
  content = content.replace(/console\.error\('([^']*)', error\);'/g, "console.error('$1', error);");
  
  // Fix malformed res.setHeader statements
  content = content.replace(/res\.setHeader\('([^']*)', '([^']*)'\);'/g, "res.setHeader('$1', '$2');");
  
  // Fix malformed res.end statements
  content = content.replace(/res\.end\(([^)]+)\);'/g, 'res.end($1);');
  
  // Fix malformed if statements
  content = content.replace(/if \(([^)]+)\) \{\}'/g, 'if ($1) {');
  
  // Fix malformed return statements
  content = content.replace(/return\s*'/g, 'return');
  
  // Fix malformed closing braces
  content = content.replace(/\}\s*'/g, '}');
  
  // Fix malformed array syntax
  content = content.replace(/\[\s*\{\s*icon: "([^"]+)",\s*title: '([^']+)',\s*description: '([^']+)',\s*benefits: \[([^\]]+)\]\s*'\s*\}\s*\]/g, 
    '[\n    {\n      icon: "$1",\n      title: "$2",\n      description: "$3",\n      benefits: [$4]\n    }\n  ]');
  
  // Fix malformed object syntax in arrays
  content = content.replace(/\{\s*icon: "([^"]+)",\s*title: '([^']+)',\s*description: '([^']+)',\s*benefits: \[([^\]]+)\]\s*'\s*\}/g, 
    '{\n      icon: "$1",\n      title: "$2",\n      description: "$3",\n      benefits: [$4]\n    }');
  
  // Fix malformed string concatenation
  content = content.replace(/'([^']*)'\s*\+\s*'([^']*)'/g, "'$1$2'");
  
  // Fix malformed template literals
  content = content.replace(/`([^`]*)`\s*'/g, '`$1`');
  
  // Fix malformed JSX attributes
  content = content.replace(/className="([^"]*)"\s*'/g, 'className="$1"');
  content = content.replace(/content="([^"]*)"\s*'/g, 'content="$1"');
  
  // Fix malformed function calls
  content = content.replace(/JSON\.stringify\(\{ error: '([^']*)' \}\)\s*'/g, "JSON.stringify({ error: '$1' })");
  
  // Fix malformed closing parentheses
  content = content.replace(/\)\s*'/g, ')');
  
  // Fix malformed semicolons
  content = content.replace(/;\s*'/g, ';');
  
  // Fix malformed commas
  content = content.replace(/,\s*'/g, ',');
  
  // Fix malformed array brackets
  content = content.replace(/\[\s*'/g, '[');
  content = content.replace(/\s*'\s*\]/g, ']');
  
  // Fix malformed object brackets
  content = content.replace(/\{\s*'/g, '{');
  content = content.replace(/\s*'\s*\}/g, '}');
  
  return content;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixedContent = fixRemainingErrors(content);
    
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

export { fixRemainingErrors, processFile };