#!/usr/bin/env node

const fs = require('fs');

// Function to check JSX structure
function checkJsxStructure(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split('\n');
    
    let openTags = [];
    let errors = [];
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const lineNumber = i + 1;
      
      // Check for opening tags
      const openTagMatches = line.match(/<(\w+)(?:\s[^>]*)?>/g);
      if (openTagMatches) {
        for (const match of openTagMatches) {
          const tagName = match.match(/<(\w+)/)[1];
          if (tagName !== 'br' && tagName !== 'hr' && tagName !== 'img' && tagName !== 'input' && tagName !== 'meta' && tagName !== 'link') {
            openTags.push({ tag: tagName, line: lineNumber });
          }
        }
      }
      
      // Check for closing tags
      const closeTagMatches = line.match(/<\/(\w+)>/g);
      if (closeTagMatches) {
        for (const match of closeTagMatches) {
          const tagName = match.match(/<\/(\w+)>/)[1];
          const lastOpenTag = openTags.pop();
          if (!lastOpenTag || lastOpenTag.tag !== tagName) {
            errors.push(`Line ${lineNumber}: Mismatched closing tag </${tagName}>`);
          }
        }
      }
    }
    
    // Check for unclosed tags
    if (openTags.length > 0) {
      for (const openTag of openTags) {
        errors.push(`Line ${openTag.line}: Unclosed tag <${openTag.tag}>`);
      }
    }
    
    if (errors.length > 0) {
      console.log(`\nErrors in ${filePath}:`);
      errors.forEach(error => console.log(`  ${error}`));
      return false;
    }
    
    return true;
  } catch (error) {
    console.error(`Error checking ${filePath}:`, error.message);
    return false;
  }
}

// Check Footer.tsx
const footerPath = './app/components/Footer.tsx';
console.log(`Checking JSX structure in ${footerPath}...`);
checkJsxStructure(footerPath);