#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to fix common JSX errors
function fixJSXErrors(content) {
  let fixed = content;
  
  // Fix duplicate closing tags
  fixed = fixed.replace(/<\/Helmet>\s*<\/Helmet>/g, '</Helmet>');
  fixed = fixed.replace(/<\/div>\s*<\/div>/g, '</div>');
  fixed = fixed.replace(/<\/section>\s*<\/section>/g, '</section>');
  fixed = fixed.replace(/<\/>\s*<\/>/g, '</>');
  
  // Fix missing closing tags for fragments
  fixed = fixed.replace(/<>\s*<Helmet>[\s\S]*?<\/Helmet>\s*<\/Helmet>\s*([\s\S]*?)<\/div>\s*<\/div>\s*<\/>/g, (match, content) => {
    return `<>${content}</>`;
  });
  
  // Fix missing closing tags for div elements
  fixed = fixed.replace(/<div([^>]*)>\s*<div([^>]*)>([\s\S]*?)<\/div>\s*<\/div>\s*<\/div>\s*<\/div>/g, (match, attrs1, attrs2, content) => {
    return `<div${attrs1}><div${attrs2}>${content}</div></div>`;
  });
  
  // Fix malformed JSX structure in About.tsx
  fixed = fixed.replace(/<div>\s*<\/div>\s*<div className="flex items-start">/g, '<div className="space-y-6"><div className="flex items-start">');
  
  // Fix missing closing section tag
  fixed = fixed.replace(/<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/section>/g, '</div></div></div></div></section>');
  
  return fixed;
}

// Function to fix specific files
function fixSpecificFiles() {
  const patterns = [
    'app/**/*.tsx',
    'app/**/*.ts',
    'app/components/**/*.tsx',
    'app/components/**/*.ts'
  ];
  
  patterns.forEach(pattern => {
    const files = glob.sync(pattern, { cwd: process.cwd() });
    
    files.forEach(file => {
      try {
        const filePath = path.join(process.cwd(), file);
        let content = fs.readFileSync(filePath, 'utf8');
        const originalContent = content;
        
        // Apply fixes
        content = fixJSXErrors(content);
        
        // Write back if changed
        if (content !== originalContent) {
          fs.writeFileSync(filePath, content, 'utf8');
          console.log(`Fixed: ${file}`);
        }
      } catch (error) {
        console.error(`Error processing ${file}:`, error.message);
      }
    });
  });
}

// Run the fixes
console.log('Starting JSX error fixes...');
fixSpecificFiles();
console.log('JSX error fixes completed!');