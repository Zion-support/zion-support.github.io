#!/usr/bin/env node

import fs from 'fs';
import { glob } from 'glob';

// Function to fix common JSX syntax issues
function fixJSXIssues(content) {
  // Fix malformed return statements
  content = content.replace(/return\(<>\)/g, 'return (\n    <>');
  content = content.replace(/return\(<[A-Z][^>]*>\)/g, (match) => {
    const tag = match.match(/return\(<([A-Z][^>]*)>/);
    if (tag) {
      return `return (\n      <${tag[1]}>`;
    }
    return match;
  });
  
  // Fix duplicate closing tags
  content = content.replace(/<\/h1>\s*,\s*<\/h1>/g, '</h1>');
  content = content.replace(/<\/h2>\s*,\s*<\/h2>/g, '</h2>');
  content = content.replace(/<\/h3>\s*,\s*<\/h3>/g, '</h3>');
  content = content.replace(/<\/p>\s*,\s*<\/p>/g, '</p>');
  content = content.replace(/<\/div>\s*,\s*<\/div>/g, '</div>');
  content = content.replace(/<\/section>\s*,\s*<\/section>/g, '</section>');
  
  // Fix broken JSX expressions
  content = content.replace(/\{\s*,\s*\}/g, '{}');
  content = content.replace(/\{\s*,\s*$/gm, '{');
  
  // Fix broken closing statements
  content = content.replace(/\);};/g, ');\n};');
  content = content.replace(/\);\)/g, ');');
  
  // Fix broken button tags
  content = content.replace(/<button[^>]*><\/button>\s*([^<]+);\s*<\/button>/g, (match, text) => {
    const buttonMatch = match.match(/<button([^>]*)>/);
    if (buttonMatch) {
      return `<button${buttonMatch[1]}>${text.trim()}</button>`;
    }
    return match;
  });
  
  // Fix broken div tags with comments
  content = content.replace(/<div[^>]*>\{\/\*[^}]*\*\/\}<\/div>\s*<([a-z]+)/g, '<div$1');
  
  // Fix broken section tags with comments
  content = content.replace(/<section[^>]*>\{\/\*[^}]*\*\/\}<\/section>\s*<([a-z]+)/g, '<section$1');
  
  return content;
}

// Function to fix specific file patterns
function fixSpecificPatterns(content, filePath) {
  // Fix accessibility page specific issues
  if (filePath.includes('accessibility')) {
    // Fix malformed return statement
    content = content.replace(/return\(<>\)/g, 'return (\n    <>');
    
    // Fix broken JSX structure
    content = content.replace(/<div className="min-h-screen[^>]*>\{\/\*[^}]*\*\/\}<\/div>\s*<section/g, 
      '<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">\n      <section');
  }
  
  return content;
}

// Main function to process files
function processFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Apply fixes
    content = fixJSXIssues(content);
    content = fixSpecificPatterns(content, filePath);
    
    // Only write if content changed
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Main function to process files
async function main() {
  const patterns = [
    'app/**/*.tsx',
    'app/**/*.ts'
  ];

  let totalFiles = 0;
  let fixedFiles = 0;

  for (const pattern of patterns) {
    const files = await glob(pattern, { 
      ignore: ['node_modules/**', 'dist/**', '.next/**', 'build/**'] 
    });
    
    for (const file of files) {
      totalFiles++;
      if (processFile(file)) {
        fixedFiles++;
      }
    }
  }

  console.log(`\nProcessed ${totalFiles} files, fixed ${fixedFiles} files`);
}

main().catch(console.error);