#!/usr/bin/env node

import fs from 'fs';
import { execSync } from 'child_process';

// Function to fix JSX syntax errors
function fixJSXSyntax(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let fixed = false;
    
    // Fix missing closing tags
    content = content.replace(/<div([^>]*)>\s*$/gm, '<div$1>');
    content = content.replace(/<section([^>]*)>\s*$/gm, '<section$1>');
    content = content.replace(/<main([^>]*)>\s*$/gm, '<main$1>');
    
    // Fix malformed JSX elements
    content = content.replace(/<(\w+)([^>]*)\s*$/gm, '<$1$2>');
    
    // Fix missing closing brackets in JSX
    content = content.replace(/className="([^"]*)"\s*$/gm, 'className="$1">');
    content = content.replace(/key={([^}]*)\}\s*$/gm, 'key={$1}>');
    
    // Fix duplicate Footer components
    content = content.replace(/\s*<Footer \/>\s*<Footer \/>/g, '<Footer />');
    
    // Fix malformed closing tags
    content = content.replace(/<\/>\s*<\/>/g, '</>');
    
    // Fix missing closing tags for common elements
    const openTags = ['div', 'section', 'main', 'article', 'header', 'footer'];
    openTags.forEach(tag => {
      const openRegex = new RegExp(`<${tag}([^>]*)>`, 'g');
      const closeRegex = new RegExp(`</${tag}>`, 'g');
      const openMatches = content.match(openRegex);
      const closeMatches = content.match(closeRegex);
      
      if (openMatches && closeMatches && openMatches.length > closeMatches.length) {
        // Add missing closing tags at the end
        const missing = openMatches.length - closeMatches.length;
        for (let i = 0; i < missing; i++) {
          content += `</${tag}>`;
        }
      }
    });
    
    // Fix malformed JSX structure
    content = content.replace(/\s*<\/>\s*<div/g, '</div><div');
    content = content.replace(/\s*<\/>\s*<section/g, '</section><section');
    
    // Fix missing export statement
    if (!content.includes('export default') && content.includes('const PagePage')) {
      content += '\n\nexport default PagePage;';
    }
    
    // Fix missing closing parenthesis and bracket
    if (content.includes('const PagePage: React.FC = () => {') && !content.includes('};')) {
      content += '\n};';
    }
    
    if (content !== fs.readFileSync(filePath, 'utf8')) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed JSX syntax: ${filePath}`);
      fixed = true;
    }
    
    return fixed;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Get all files with JSX syntax errors
const files = execSync("grep -l 'Identifier expected\\|Expected corresponding JSX closing tag\\|JSX expressions must have one parent element' app/**/*.tsx", { encoding: 'utf8' }).trim().split('\n').filter(f => f);

console.log(`Found ${files.length} files with JSX syntax errors`);

let fixed = 0;
let failed = 0;

files.forEach(file => {
  if (fixJSXSyntax(file)) {
    fixed++;
  } else {
    failed++;
  }
});

console.log(`\nFixed: ${fixed} files`);
console.log(`Failed: ${failed} files`);