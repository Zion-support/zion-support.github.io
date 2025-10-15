#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to fix common syntax errors
function fixSyntaxErrors(content) {
  // Remove extra semicolons and quotes from import statements
  content = content.replace(/import\s+([^;]+);/g, 'import $1;');
  content = content.replace(/import\s+([^;]+);";/g, 'import $1;');
  content = content.replace(/import\s+([^;]+);";/g, 'import $1;');
  content = content.replace(/import\s+([^;]+);";";/g, 'import $1;');
  content = content.replace(/import\s+([^;]+);";";/g, 'import $1;');
  
  // Fix const declarations
  content = content.replace(/const:\s+/g, 'const ');
  
  // Fix className attributes with extra quotes and semicolons
  content = content.replace(/className\s*=\s*"([^"]+)";/g, 'className="$1"');
  content = content.replace(/className\s*=\s*"([^"]+)";/g, 'className="$1"');
  content = content.replace(/className\s*=\s*"([^"]+)";";/g, 'className="$1"');
  
  // Fix other attributes with similar issues
  content = content.replace(/name\s*=\s*"([^"]+)";/g, 'name="$1"');
  content = content.replace(/name\s*=\s*"([^"]+)";/g, 'name="$1"');
  content = content.replace(/name\s*=\s*"([^"]+)";";/g, 'name="$1"');
  
  content = content.replace(/content\s*=\s*{([^}]+)}/g, 'content={$1}');
  content = content.replace(/content\s*=\s*{([^}]+)}/g, 'content={$1}');
  content = content.replace(/content\s*=\s*{([^}]+)}";/g, 'content={$1}');
  
  // Fix JSX attributes
  content = content.replace(/strokeLinecap\s*=\s*"([^"]+)";/g, 'strokeLinecap="$1"');
  content = content.replace(/strokeLinejoin\s*=\s*"([^"]+)";/g, 'strokeLinejoin="$1"');
  content = content.replace(/strokeWidth\s*=\s*{([^}]+)}/g, 'strokeWidth={$1}');
  
  // Fix function declarations
  content = content.replace(/const\s+([^=]+):\s*React\.FC\s*=\s*\(\)\s*\{\}/g, 'const $1: React.FC = () => {');
  content = content.replace(/const\s+([^=]+):\s*React\.FC\s*=\s*\(\)\s*\{\}\s*return\s*\(\)/g, 'const $1: React.FC = () => { return (');
  
  // Fix JSX element syntax
  content = content.replace(/<div \s*className/g, '<div className');
  content = content.replace(/<h3:\s*className/g, '<h3 className');
  content = content.replace(/<p:\s*className/g, '<p className');
  content = content.replace(/<button:\s*onClick/g, '<button onClick');
  content = content.replace(/<svg:\s*className/g, '<svg className');
  content = content.replace(/<path:\s*strokeLinecap/g, '<path strokeLinecap');
  content = content.replace(/<main:\s*className/g, '<main className');
  content = content.replace(/<Suspense:\s*fallback/g, '<Suspense fallback');
  content = content.replace(/<Route:\s*path/g, '<Route path');
  content = content.replace(/<a:\s*href/g, '<a href');
  
  // Fix closing tags
  content = content.replace(/<\/div>/g, '</div>');
  content = content.replace(/<\/h3>/g, '</h3>');
  content = content.replace(/<\/p>/g, '</p>');
  content = content.replace(/<\/button>/g, '</button>');
  content = content.replace(/<\/svg>/g, '</svg>');
  content = content.replace(/<\/path>/g, '</path>');
  content = content.replace(/<\/main>/g, '</main>');
  content = content.replace(/<\/Suspense>/g, '</Suspense>');
  content = content.replace(/<\/Route>/g, '</Route>');
  content = content.replace(/<\/a>/g, '</a>');
  
  // Fix other common issues
  content = content.replace(/from\s+"([^"]+)";/g, 'from "$1";');
  content = content.replace(/from\s+"([^"]+)";/g, 'from "$1";');
  content = content.replace(/from\s+"([^"]+)";";/g, 'from "$1";');
  
  return content;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixedContent = fixSyntaxErrors(content);
    
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
function main() {
  const patterns = [
    '**/*.tsx',
    '**/*.ts',
    '**/*.jsx',
    '**/*.js'
  ];
  
  let totalFixed = 0;
  
  patterns.forEach(pattern => {
    const files = glob.sync(pattern, { 
      ignore: ['node_modules/**', 'dist/**', '.next/**', 'out/**'] 
    });
    
    files.forEach(file => {
      if (processFile(file)) {
        totalFixed++;
      }
    });
  });
  
  console.log(`\nTotal files fixed: ${totalFixed}`);
}

if (require.main === module) {
  main();
}

module.exports = { fixSyntaxErrors, processFile };