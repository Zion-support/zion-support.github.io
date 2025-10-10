#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function fixJSXStructure(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix common JSX structure issues
    const lines = content.split('\n');
    const result = [];
    let inJSX = false;
    let openTags = [];
    
    for (let i = 0; i < lines.length; i++) {
      let line = lines[i];
      const originalLine = line;
      
      // Skip lines that are clearly malformed or contain error markers
      if (line.includes('Unexpected closing') || 
          line.includes('Expected corresponding') ||
          line.includes('Unterminated regular expression') ||
          line.includes('Expected identifier but found') ||
          line.includes('Declaration or statement expected') ||
          line.includes('Property assignment expected') ||
          line.includes('Expression expected') ||
          line.includes('JSX expressions must have one parent element')) {
        continue;
      }
      
      // Fix stray closing tags that don't match opening tags
      if (line.trim().startsWith('</') && !line.includes('{')) {
        const tagMatch = line.match(/<\/([^>]+)>/);
        if (tagMatch) {
          const closingTag = tagMatch[1];
          // Check if this closing tag has a matching opening tag
          const hasMatchingOpen = content.includes(`<${closingTag}`) && 
                                 content.indexOf(`<${closingTag}`) < content.indexOf(line);
          if (!hasMatchingOpen) {
            // Remove the stray closing tag
            line = line.replace(/<\/[^>]+>/, '');
            modified = true;
          }
        }
      }
      
      // Fix missing closing tags by adding them at the end of the component
      if (line.includes('export default') && openTags.length > 0) {
        // Add missing closing tags before the export
        for (let j = openTags.length - 1; j >= 0; j--) {
          result.push(`</${openTags[j]}>`);
        }
        openTags = [];
        modified = true;
      }
      
      result.push(line);
    }
    
    if (modified) {
      fs.writeFileSync(filePath, result.join('\n'), 'utf8');
      console.log(`Fixed JSX structure in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Get all TypeScript/JSX files that might have issues
const { execSync } = require('child_process');

const files = execSync('find ./app -name "*.tsx" -o -name "*.ts" | head -20', { encoding: 'utf8' })
  .trim()
  .split('\n')
  .filter(f => f.length > 0);

console.log(`Processing ${files.length} files for JSX structure fixes`);

let fixedCount = 0;
files.forEach(file => {
  if (fixJSXStructure(file)) {
    fixedCount++;
  }
});

console.log(`Fixed JSX structure in ${fixedCount} files`);