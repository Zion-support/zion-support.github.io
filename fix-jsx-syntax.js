#!/usr/bin/env node

import fs from 'fs';

function fixJSXSyntax(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Fix malformed JSX elements with content outside tags
    // Pattern: <div></div>content</div> -> <div>content</div>
    content = content.replace(/<(\w+)([^>]*?)\s*><\/\1>([^<]+)<\/\1>/g, '<$1$2>$3</$1>');
    
    // Pattern: <div></div>content -> <div>content</div>
    content = content.replace(/<(\w+)([^>]*?)\s*><\/\1>([^<]+)(?=\s*<\/\1>)/g, '<$1$2>$3</$1>');
    
    // Fix self-closing tags with content after them
    content = content.replace(/<(\w+)([^>]*?)\s*\/>([^<]+)(?=\s*<\/\1>)/g, '<$1$2>$3</$1>');
    
    // Fix malformed anchor tags with emoji
    content = content.replace(/<a([^>]*?)>([^<]*?)([📞📧])([^<]*?)<\/a>/g, '<a$1>$2$3$4</a>');
    
    // Fix malformed anchor tags without proper attributes
    content = content.replace(/<a([^>]*?)>([^<]*?)<\/a>/g, (match, attrs, content) => {
      if (!attrs.includes('href') && !attrs.includes('className')) {
        return `<a href="#" className="btn-primary">${content}</a>`;
      }
      return match;
    });
    
    // Fix malformed paragraph tags
    content = content.replace(/<p([^>]*?)><\/p>([^<]+)<\/p>/g, '<p$1>$2</p>');
    
    // Fix malformed div tags
    content = content.replace(/<div([^>]*?)><\/div>([^<]+)<\/div>/g, '<div$1>$2</div>');
    
    // Fix malformed h3 tags
    content = content.replace(/<h3([^>]*?)><\/h3>([^<]+)<\/h3>/g, '<h3$1>$2</h3>');
    
    // Fix malformed closing tags like </di> -> </div>
    content = content.replace(/<\/di>/g, '</div>');
    content = content.replace(/<\/h>/g, '</h3>');
    
    // Fix template literal issues
    content = content.replace(/`([^`]*?)\$\{([^}]*?)\[([^\]]*?)\]\}`/g, '`$1${$2[$3]}`');
    
    // Fix missing closing braces in JSX
    content = content.replace(/(\w+)\s*=\s*\{([^}]*?)\s*$/gm, '$1={$2}');
    
    // Fix malformed React.Fragment
    content = content.replace(/<React\.Fragment>([^<]*?)<\/React\.Fragment>/g, '<React.Fragment>$1</React.Fragment>');
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed JSX syntax in: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Fix the main page file
console.log('Fixing JSX syntax in page.tsx...');
if (fixJSXSyntax('/workspace/app/page.tsx')) {
  console.log('JSX syntax fixes applied successfully.');
} else {
  console.log('No JSX syntax issues found.');
}