#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to fix JSX syntax errors more precisely
function fixJSXSyntax(content) {
  let fixed = content;
  
  // Fix over-escaped > characters in JSX tags
  fixed = fixed.replace(/<title&gt;/g, '<title>');
  fixed = fixed.replace(/<meta&gt;/g, '<meta>');
  fixed = fixed.replace(/<link&gt;/g, '<link>');
  fixed = fixed.replace(/<script&gt;/g, '<script>');
  fixed = fixed.replace(/<style&gt;/g, '<style>');
  
  // Fix other common JSX tags that got over-escaped
  fixed = fixed.replace(/<div&gt;/g, '<div>');
  fixed = fixed.replace(/<span&gt;/g, '<span>');
  fixed = fixed.replace(/<p&gt;/g, '<p>');
  fixed = fixed.replace(/<h1&gt;/g, '<h1>');
  fixed = fixed.replace(/<h2&gt;/g, '<h2>');
  fixed = fixed.replace(/<h3&gt;/g, '<h3>');
  fixed = fixed.replace(/<h4&gt;/g, '<h4>');
  fixed = fixed.replace(/<h5&gt;/g, '<h5>');
  fixed = fixed.replace(/<h6&gt;/g, '<h6>');
  fixed = fixed.replace(/<button&gt;/g, '<button>');
  fixed = fixed.replace(/<a&gt;/g, '<a>');
  fixed = fixed.replace(/<img&gt;/g, '<img>');
  fixed = fixed.replace(/<ul&gt;/g, '<ul>');
  fixed = fixed.replace(/<ol&gt;/g, '<ol>');
  fixed = fixed.replace(/<li&gt;/g, '<li>');
  fixed = fixed.replace(/<section&gt;/g, '<section>');
  fixed = fixed.replace(/<article&gt;/g, '<article>');
  fixed = fixed.replace(/<header&gt;/g, '<header>');
  fixed = fixed.replace(/<footer&gt;/g, '<footer>');
  fixed = fixed.replace(/<nav&gt;/g, '<nav>');
  fixed = fixed.replace(/<main&gt;/g, '<main>');
  fixed = fixed.replace(/<aside&gt;/g, '<aside>');
  
  // Fix closing tags
  fixed = fixed.replace(/<\/title&gt;/g, '</title>');
  fixed = fixed.replace(/<\/meta&gt;/g, '</meta>');
  fixed = fixed.replace(/<\/link&gt;/g, '</link>');
  fixed = fixed.replace(/<\/script&gt;/g, '</script>');
  fixed = fixed.replace(/<\/style&gt;/g, '</style>');
  fixed = fixed.replace(/<\/div&gt;/g, '</div>');
  fixed = fixed.replace(/<\/span&gt;/g, '</span>');
  fixed = fixed.replace(/<\/p&gt;/g, '</p>');
  fixed = fixed.replace(/<\/h1&gt;/g, '</h1>');
  fixed = fixed.replace(/<\/h2&gt;/g, '</h2>');
  fixed = fixed.replace(/<\/h3&gt;/g, '</h3>');
  fixed = fixed.replace(/<\/h4&gt;/g, '</h4>');
  fixed = fixed.replace(/<\/h5&gt;/g, '</h5>');
  fixed = fixed.replace(/<\/h6&gt;/g, '</h6>');
  fixed = fixed.replace(/<\/button&gt;/g, '</button>');
  fixed = fixed.replace(/<\/a&gt;/g, '</a>');
  fixed = fixed.replace(/<\/img&gt;/g, '</img>');
  fixed = fixed.replace(/<\/ul&gt;/g, '</ul>');
  fixed = fixed.replace(/<\/ol&gt;/g, '</ol>');
  fixed = fixed.replace(/<\/li&gt;/g, '</li>');
  fixed = fixed.replace(/<\/section&gt;/g, '</section>');
  fixed = fixed.replace(/<\/article&gt;/g, '</article>');
  fixed = fixed.replace(/<\/header&gt;/g, '</header>');
  fixed = fixed.replace(/<\/footer&gt;/g, '</footer>');
  fixed = fixed.replace(/<\/nav&gt;/g, '</nav>');
  fixed = fixed.replace(/<\/main&gt;/g, '</main>');
  fixed = fixed.replace(/<\/aside&gt;/g, '</aside>');
  
  // Fix self-closing tags
  fixed = fixed.replace(/<img[^>]*\/&gt;/g, (match) => match.replace(/\/&gt;/, '/>'));
  fixed = fixed.replace(/<meta[^>]*\/&gt;/g, (match) => match.replace(/\/&gt;/, '/>'));
  fixed = fixed.replace(/<link[^>]*\/&gt;/g, (match) => match.replace(/\/&gt;/, '/>'));
  fixed = fixed.replace(/<input[^>]*\/&gt;/g, (match) => match.replace(/\/&gt;/, '/>'));
  fixed = fixed.replace(/<br[^>]*\/&gt;/g, (match) => match.replace(/\/&gt;/, '/>'));
  fixed = fixed.replace(/<hr[^>]*\/&gt;/g, (match) => match.replace(/\/&gt;/, '/>'));
  
  // Fix any remaining malformed closing tags
  fixed = fixed.replace(/><\/<([^>]+)>/g, '></$1>');
  
  // Fix incomplete JSX elements
  fixed = fixed.replace(/;\s*$/gm, '');
  
  // Fix React.Fragment issues
  fixed = fixed.replace(/<\/React\.Fragment>\s*\)\s*$/gm, '</React.Fragment>');
  
  // Fix incomplete JSX expressions
  fixed = fixed.replace(/{\s*;\s*}/g, '{}');
  
  // Fix any remaining semicolons in JSX
  fixed = fixed.replace(/;\s*>/g, '>');
  fixed = fixed.replace(/;\s*<\/\s*([^>]+)>/g, '></$1>');
  
  return fixed;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixJSXSyntax(content);
    
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

// Main function
function main() {
  const patterns = [
    'app/**/*.tsx',
    'app/**/*.jsx'
  ];
  
  let totalFixed = 0;
  
  patterns.forEach(pattern => {
    const files = glob.sync(pattern, { cwd: process.cwd() });
    console.log(`Processing ${files.length} files matching ${pattern}...`);
    
    files.forEach(file => {
      if (processFile(file)) {
        totalFixed++;
      }
    });
  });
  
  console.log(`\nTotal files fixed: ${totalFixed}`);
}

// Run if this is the main module
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { fixJSXSyntax, processFile };