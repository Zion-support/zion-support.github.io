#!/usr/bin/env node

import fs from 'fs';
import { glob } from 'glob';

// Function to fix common syntax errors in React/JSX files
function fixSyntaxErrors(content) {
  let fixed = content;
  
  // Fix missing closing tags by adding them at the end of the component
  const lines = fixed.split('\n');
  const fixedLines = [];
  let openTags = [];
  let inJSX = false;
  let braceCount = 0;
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();
    
    // Track JSX state
    if (trimmed.includes('<') && !trimmed.includes('//')) {
      inJSX = true;
    }
    if (trimmed.includes('{') && inJSX) {
      braceCount += (line.match(/\{/g) || []).length;
    }
    if (trimmed.includes('}') && inJSX) {
      braceCount -= (line.match(/\}/g) || []).length;
    }
    
    // Track opening tags
    const openTagMatch = line.match(/<(\w+)(?:\s[^>]*)?>(?!\s*<\/\1>)/g);
    if (openTagMatch) {
      openTagMatch.forEach(tag => {
        const tagName = tag.match(/<(\w+)/)[1];
        if (!['img', 'br', 'hr', 'input', 'meta', 'link'].includes(tagName)) {
          openTags.push(tagName);
        }
      });
    }
    
    // Track closing tags
    const closeTagMatch = line.match(/<\/(\w+)>/g);
    if (closeTagMatch) {
      closeTagMatch.forEach(tag => {
        const tagName = tag.match(/<\/(\w+)>/)[1];
        const index = openTags.lastIndexOf(tagName);
        if (index !== -1) {
          openTags.splice(index, 1);
        }
      });
    }
    
    fixedLines.push(line);
    
    // If we're at the end of the component and there are unclosed tags, add them
    if (i === lines.length - 1 && openTags.length > 0 && inJSX && braceCount === 0) {
      // Add missing closing tags in reverse order
      for (let j = openTags.length - 1; j >= 0; j--) {
        fixedLines.push('  '.repeat(j + 1) + `</${openTags[j]}>`);
      }
    }
  }
  
  fixed = fixedLines.join('\n');
  
  // Fix JSX fragment issues
  fixed = fixed.replace(/<>([^<]*?)(?!<\/>)/g, '<React.Fragment>$1</React.Fragment>');
  
  // Fix missing React import
  if (fixed.includes('React.Fragment') && !fixed.includes("import React")) {
    fixed = "import React from 'react';\n" + fixed;
  }
  
  // Fix missing closing parentheses in JSX
  fixed = fixed.replace(/(\s*<[^>]+>\s*)([^<]*?)(\s*<\/[^>]+>\s*)(?!\s*[<>])/g, (match, openTag, content, closeTag) => {
    if (content.trim() && !content.includes('<') && !content.includes('>')) {
      return openTag + content + closeTag;
    }
    return match;
  });
  
  // Fix malformed JSX expressions
  fixed = fixed.replace(/\{\s*([^}]*?)\s*\}/g, (match, content) => {
    if (content.trim() && !content.includes('{') && !content.includes('}')) {
      return `{${content.trim()}}`;
    }
    return match;
  });
  
  // Fix missing semicolons
  fixed = fixed.replace(/(\w+)\s*$/gm, (match, word) => {
    if (['return', 'const', 'let', 'var', 'function'].includes(word)) {
      return match;
    }
    if (match.trim() && !match.includes(';') && !match.includes('{') && !match.includes('}')) {
      return match + ';';
    }
    return match;
  });
  
  // Fix import statements
  if (fixed.includes('Lightbulb') && !fixed.includes("import { Lightbulb }")) {
    fixed = fixed.replace(
      /import { ([^}]+) } from 'lucide-react'/,
      (match, imports) => {
        if (!imports.includes('Lightbulb')) {
          return `import { ${imports}, Lightbulb } from 'lucide-react'`;
        }
        return match;
      }
    );
  }
  
  // Fix component structure - ensure single parent element
  const componentMatch = fixed.match(/const\s+\w+\s*:\s*React\.FC\s*=\s*\(\)\s*=>\s*\{([\s\S]*?)\}/);
  if (componentMatch) {
    const componentBody = componentMatch[1];
    const jsxMatch = componentBody.match(/return\s*\(([\s\S]*?)\)\s*;?\s*}/);
    if (jsxMatch) {
      const jsxContent = jsxMatch[1].trim();
      if (!jsxContent.startsWith('<') || jsxContent.split('<').length > 2) {
        // Wrap in a single parent element
        const wrappedJSX = `<div className="min-h-screen">\n${jsxContent}\n</div>`;
        fixed = fixed.replace(jsxMatch[1], wrappedJSX);
      }
    }
  }
  
  return fixed;
}

// Function to process a single file
function processFile(filePath) {
  try {
    console.log(`Processing: ${filePath}`);
    
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Skip if not a React component file
    if (!filePath.endsWith('.tsx') && !filePath.endsWith('.jsx')) {
      return;
    }
    
    // Skip if no obvious syntax errors
    if (!content.includes('JSX') && !content.includes('React') && !content.includes('<div')) {
      return;
    }
    
    // Fix syntax errors
    const fixed = fixSyntaxErrors(content);
    
    // Only write if content changed
    if (fixed !== content) {
      fs.writeFileSync(filePath, fixed, 'utf8');
      console.log(`✓ Fixed: ${filePath}`);
    }
  } catch (error) {
    console.error(`✗ Error processing ${filePath}:`, error.message);
  }
}

// Main execution
async function main() {
  console.log('Starting syntax error fixes...');
  
  // Get all TypeScript/JavaScript files in the app directory
  const patterns = [
    'app/**/*.tsx',
    'components/**/*.tsx',
    '*.tsx'
  ];
  
  let allFiles = [];
  
  for (const pattern of patterns) {
    const files = await glob(pattern, { cwd: process.cwd() });
    allFiles = allFiles.concat(files);
  }
  
  // Remove duplicates
  allFiles = [...new Set(allFiles)];
  
  console.log(`Found ${allFiles.length} files to process`);
  
  // Process each file
  allFiles.forEach(processFile);
  
  console.log('Syntax error fixes completed!');
}

// Run the main function
main().catch(console.error);

export { fixSyntaxErrors, processFile };