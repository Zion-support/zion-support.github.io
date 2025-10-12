#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Function to fix common syntax errors in React/TypeScript files
function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix JSX fragment issues
    content = content.replace(/<>([^<]*?)<\/>/gs, (match, inner) => {
      if (inner.trim()) {
        modified = true;
        return `<div>${inner}</div>`;
      }
      return match;
    });

    // Fix unclosed JSX tags by adding proper closing tags
    const unclosedTags = [
      'main', 'section', 'div', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
      'p', 'span', 'button', 'a', 'ul', 'ol', 'li', 'form', 'input',
      'textarea', 'select', 'option', 'table', 'tr', 'td', 'th',
      'thead', 'tbody', 'tfoot', 'nav', 'header', 'footer', 'article',
      'aside', 'figure', 'figcaption', 'blockquote', 'code', 'pre'
    ];

    for (const tag of unclosedTags) {
      // Find unclosed opening tags
      const openTagRegex = new RegExp(`<${tag}([^>]*)>(?!.*</${tag}>)`, 'gs');
      const matches = content.match(openTagRegex);
      
      if (matches) {
        // This is a complex fix, let's use a simpler approach
        // Just ensure proper closing for common patterns
        content = content.replace(new RegExp(`<${tag}([^>]*)>\\s*$`, 'gm'), `<${tag}$1></${tag}>`);
    }

    // Fix missing closing tags for self-closing elements
    const selfClosingElements = ['img', 'br', 'hr', 'input', 'meta', 'link'];
    for (const element of selfClosingElements) {
      content = content.replace(new RegExp(`<${element}([^>]*?)(?<!/)>`, 'g'), `<${element}$1 />`);
      modified = true;

    // Fix JSX expressions that need wrapping
    content = content.replace(/\{([^}]*?)\s*\}\s*\{([^}]*?)\s*\}/g, '{$1}{$2}');
    
    // Fix missing semicolons in JSX
    content = content.replace(/(\w+)\s*(\n\s*<)/g, '$1;$2');
    
    // Fix broken JSX attributes
    content = content.replace(/className\s*=\s*"([^"]*?)\s*"/g, 'className="$1"');
    content = content.replace(/className\s*=\s*'([^']*?)\s*'/g, "className='$1'");
    
    // Fix broken string literals
    content = content.replace(/"([^"]*?)\s*"/g, '"$1"');
    content = content.replace(/'([^']*?)\s*'/g, "'$1'");
    
    // Fix missing commas in arrays and objects
    content = content.replace(/(\w+)\s*\n\s*(\w+)/g, '$1,\n$2');
    
    // Fix broken function calls
    content = content.replace(/(\w+)\s*\(\s*\)\s*(\w+)/g, '$1();\n$2');
    
    // Clean up extra whitespace
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    content = content.replace(/^\s*\n/g, '');
    content = content.replace(/\n\s*$/g, '');

    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed syntax errors in: ${filePath}`);
      return true;
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

// Function to find all TypeScript/JavaScript files
function findSourceFiles(dir, extensions = ['.ts', '.tsx', '.js', '.jsx']) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip node_modules, .git, and other common directories
        if (!['node_modules', '.git', '.next', 'dist', 'build', 'out'].includes(item)) {
          traverse(fullPath);
        }
      } else if (stat.isFile()) {
        const ext = path.extname(item);
        if (extensions.includes(ext)) {
          files.push(fullPath);
  
  traverse(dir);
  return files;

// Main function
function main() {
  console.log('Starting syntax error resolution...');
  
  const sourceFiles = findSourceFiles(process.cwd());
  let fixedCount = 0;
  
  for (const file of sourceFiles) {
    if (fixSyntaxErrors(file)) {
      fixedCount++;
  
  console.log(`\nFixed syntax errors in ${fixedCount} files.`);

main();