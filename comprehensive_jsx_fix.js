
// Function to fix common JSX errors comprehensively
function fixJSXErrors(content) {
  let fixed = content;
  
  // Remove merge conflict markers completely
  fixed = fixed.replace(/<<<<<<< HEAD\n.*?\n=======\n.*?\n>>>>>>> [^\n]+\n/g, '');
  
  // Fix unclosed JSX fragments - find and close them properly
  const fragmentRegex = /<>\s*$/gm;
  const closingFragmentRegex = /^\s*<\/>/gm;
  
  // Count opening and closing fragments
  const openingFragments = (fixed.match(fragmentRegex) || []).length;
  const closingFragments = (fixed.match(closingFragmentRegex) || []).length;
  
  // If there are unclosed fragments, add closing tags
  if (openingFragments > closingFragments) {
    const missingClosing = openingFragments - closingFragments;
    for (let i = 0; i < missingClosing; i++) {
      fixed += '\n  </>';
    }
  }
  
  // Fix malformed JSX elements
  fixed = fixed.replace(/<(\w+)\s*>\s*<\/\1>\s*$/gm, '');
  
  // Fix common syntax errors
  fixed = fixed.replace(/\*\s*100\s+0\)/g, '* 1000)');
  fixed = fixed.replace(/,\s*\)/g, ')');
  fixed = fixed.replace(/,\s*}/g, '}');
  fixed = fixed.replace(/,\s*\]/g, ']');
  
  // Fix missing closing tags for common elements
  const tagPairs = [
    ['<div', '</div>'],
    ['<section', '</section>'],
    ['<main', '</main>'],
    ['<article', '</article>'],
    ['<header', '</header>'],
    ['<footer', '</footer>'],
    ['<nav', '</nav>'],
    ['<aside', '</aside>']
  ];
  
  for (const [openTag, closeTag] of tagPairs) {
    const openRegex = new RegExp(`<${openTag}[^>]*>`, 'g');
    const closeRegex = new RegExp(closeTag, 'g');
    
    const openMatches = (fixed.match(openRegex) || []).length;
    const closeMatches = (fixed.match(closeRegex) || []).length;
    
    if (openMatches > closeMatches) {
      const missing = openMatches - closeMatches;
      for (let i = 0; i < missing; i++) {
        fixed += `\n        ${closeTag}`;
      }
    }
  }
  
  // Fix JSX expressions that need one parent element
  // Look for multiple top-level elements and wrap them
  const lines = fixed.split('\n');
  let inJSX = false;
  let braceCount = 0;
  let parenCount = 0;
  let topLevelElements = [];
  let currentElement = '';
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    // Track JSX state
    if (line.includes('return (') || line.includes('return(')) {
      inJSX = true;
      braceCount = 0;
      parenCount = 0;
    }
    
    if (inJSX) {
      // Count braces and parentheses
      for (const char of line) {
        if (char === '{') braceCount++;
        if (char === '}') braceCount--;
        if (char === '(') parenCount++;
        if (char === ')') parenCount--;
      }
      
      currentElement += line + '\n';
      
      // If we've closed all braces and parentheses, we're done with JSX
      if (braceCount === 0 && parenCount === 0 && line.includes(')')) {
        inJSX = false;
        topLevelElements.push(currentElement.trim());
        currentElement = '';
      }
    }
  }
  
  // If we have multiple top-level elements, wrap them in a fragment
  if (topLevelElements.length > 1) {
    const returnIndex = fixed.indexOf('return (');
    if (returnIndex !== -1) {
      const beforeReturn = fixed.substring(0, returnIndex);
      const afterReturn = fixed.substring(returnIndex);
      fixed = beforeReturn + 'return (\n    <>\n' + afterReturn.replace('return (', '') + '\n    </>';
    }
  }
  
  // Fix specific common patterns
  fixed = fixed.replace(/className="[^"]*"\s*>\s*$/gm, (match) => {
    if (!match.includes('</div>') && !match.includes('</section>')) {
      return match + '\n        </div>';
    }
    return match;
  });
  
  // Fix missing closing parentheses in function calls
  fixed = fixed.replace(/\(\s*$/gm, '()');
  
  // Fix missing closing brackets in arrays
  fixed = fixed.replace(/\[\s*$/gm, '[]');
  
  // Fix missing closing braces in objects
  fixed = fixed.replace(/{\s*$/gm, '{}');
  
  return fixed;
}

// Function to process a file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixJSXErrors(content);
    
    if (content !== fixed) {
      fs.writeFileSync(filePath, fixed);
      console.log(`Fixed: ${filePath}`);
=======
const fs = require('fs')
const path = require('path')
function fixJSXIssues(content) {
  let fixed = content
  // Fix specific patterns where JSX tags are not properly closed
  // Pattern: <h1>text\n  </ -> <h1>text</h1>
  fixed = fixed.replace(/<h1([^>]*)>\s*([^<\n]+)\s*\n\s*<\//g, '<h1$1>$2</h1>')
  fixed = fixed.replace(/<h2([^>]*)>\s*([^<\n]+)\s*\n\s*<\//g, '<h2$1>$2</h2>')
  fixed = fixed.replace(/<h3([^>]*)>\s*([^<\n]+)\s*\n\s*<\//g, '<h3$1>$2</h3>')
  fixed = fixed.replace(/<p([^>]*)>\s*([^<\n]+)\s*\n\s*<\//g, '<p$1>$2</p>')
  fixed = fixed.replace(/<div([^>]*)>\s*([^<\n]+)\s*\n\s*<\//g, '<div$1>$2</div>')
  fixed = fixed.replace(/<span([^>]*)>\s*([^<\n]+)\s*\n\s*<\//g, '<span$1>$2</span>')
  fixed = fixed.replace(/<button([^>]*)>\s*([^<\n]+)\s*\n\s*<\//g, '<button$1>$2</button>')
  fixed = fixed.replace(/<a([^>]*)>\s*([^<\n]+)\s*\n\s*<\//g, '<a$1>$2</a>')
  // Fix patterns where JSX tags are missing closing tags entirely
  fixed = fixed.replace(/<h1([^>]*)>\s*([^<\n]+)\s*$/gm, '<h1$1>$2</h1>')
  fixed = fixed.replace(/<h2([^>]*)>\s*([^<\n]+)\s*$/gm, '<h2$1>$2</h2>')
  fixed = fixed.replace(/<h3([^>]*)>\s*([^<\n]+)\s*$/gm, '<h3$1>$2</h3>')
  fixed = fixed.replace(/<p([^>]*)>\s*([^<\n]+)\s*$/gm, '<p$1>$2</p>')
  fixed = fixed.replace(/<div([^>]*)>\s*([^<\n]+)\s*$/gm, '<div$1>$2</div>')
  fixed = fixed.replace(/<span([^>]*)>\s*([^<\n]+)\s*$/gm, '<span$1>$2</span>')
  fixed = fixed.replace(/<button([^>]*)>\s*([^<\n]+)\s*$/gm, '<button$1>$2</button>')
  fixed = fixed.replace(/<a([^>]*)>\s*([^<\n]+)\s*$/gm, '<a$1>$2</a>')
  return fixed
}
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8')
    const fixed = fixJSXIssues(content)
    if (content !== fixed) {
      // eslint-disable-next-line no-console
    console.log(`Fixing JSX issues in: ${filePath}`)
      fs.writeFileSync(filePath, fixed)
      return true
>>>>>>> 9dec2721a0f50ac14397b8d140dbd45d3cfacd15
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(`Error processing ${filePath}:`, error.message)
  }
}

// Function to recursively find and process files
function processDirectory(dirPath) {
  const items = fs.readdirSync(dirPath);
  
  for (const item of items) {
    const fullPath = path.join(dirPath, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      processDirectory(fullPath);
    } else if (item.endsWith('.tsx') || item.endsWith('.jsx')) {
      processFile(fullPath);
    }
  }
}

// Process the app directory
console.log('Fixing JSX errors comprehensively...');
processDirectory('/workspace/app');
processDirectory('/workspace/src');
console.log('Comprehensive JSX error fixing complete!');
=======
  return false
}
function walkDirectory(dir) {
  const files = fs.readdirSync(dir)
  let fixedCount = 0
  for (const file of files) {
    const filePath = path.join(dir, file)
    const stat = fs.statSync(filePath)
    if (stat.isDirectory()) {
      if (file !== 'node_modules' && file !== '.git') {
        fixedCount += walkDirectory(filePath)
      }
    } else if (file.endsWith('.tsx') || file.endsWith('.jsx')) {
  if (processFile(filePath)) {
        fixedCount++
}
    }
  }
  return fixedCount
}
// eslint-disable-next-line no-console
    console.log('Starting comprehensive JSX fix...')
const fixedCount = walkDirectory('app')
// eslint-disable-next-line no-console
    console.log(`Fixed JSX issues in ${fixedCount} files`)
>>>>>>> 9dec2721a0f50ac14397b8d140dbd45d3cfacd15
