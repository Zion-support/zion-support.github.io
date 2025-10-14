#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to fix specific JSX syntax errors
function fixJSXErrors(content) {
  let fixed = content;
  
  // Fix missing closing tags for specific patterns
  // Pattern 1: Fix missing closing tags for h3 elements
  const h3Pattern = /<h3[^>]*>([^<]*?)(?=\s*<)/g;
  fixed = fixed.replace(h3Pattern, (match, content) => {
    if (!content.includes('</h3>')) {
      return match + '</h3>';
    }
    return match;
  });
  
  // Pattern 2: Fix missing closing tags for p elements
  const pPattern = /<p[^>]*>([^<]*?)(?=\s*<)/g;
  fixed = fixed.replace(pPattern, (match, content) => {
    if (!content.includes('</p>') && !match.includes('</p>')) {
      return match + '</p>';
    }
    return match;
  });
  
  // Pattern 3: Fix missing closing tags for section elements
  const sectionPattern = /<section[^>]*>([^<]*?)(?=\s*<)/g;
  fixed = fixed.replace(sectionPattern, (match, content) => {
    if (!content.includes('</section>') && !match.includes('</section>')) {
      return match + '</section>';
    }
    return match;
  });
  
  // Pattern 4: Fix missing closing tags for Router elements
  const routerPattern = /<Router[^>]*>([^<]*?)(?=\s*<)/g;
  fixed = fixed.replace(routerPattern, (match, content) => {
    if (!content.includes('</Router>') && !match.includes('</Router>')) {
      return match + '</Router>';
    }
    return match;
  });
  
  // Pattern 5: Fix missing closing tags for HelmetProvider elements
  const helmetProviderPattern = /<HelmetProvider[^>]*>([^<]*?)(?=\s*<)/g;
  fixed = fixed.replace(helmetProviderPattern, (match, content) => {
    if (!content.includes('</HelmetProvider>') && !match.includes('</HelmetProvider>')) {
      return match + '</HelmetProvider>';
    }
    return match;
  });
  
  // Pattern 6: Fix missing closing tags for JSX fragments
  const fragmentPattern = /<>([^<]*?)(?=\s*<)/g;
  fixed = fixed.replace(fragmentPattern, (match, content) => {
    if (!content.includes('</>') && !match.includes('</>')) {
      return match + '</>';
    }
    return match;
  });
  
  // Pattern 7: Fix malformed JSX structure - missing closing parentheses
  const lines = fixed.split('\n');
  const fixedLines = [];
  let inJSX = false;
  let openParens = 0;
  let openBraces = 0;
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmedLine = line.trim();
    
    // Count parentheses and braces
    const parens = (line.match(/\(/g) || []).length;
    const closeParens = (line.match(/\)/g) || []).length;
    const braces = (line.match(/\{/g) || []).length;
    const closeBraces = (line.match(/\}/g) || []).length;
    
    openParens += parens - closeParens;
    openBraces += braces - closeBraces;
    
    // Check if we're in JSX
    if (trimmedLine.includes('<') && !trimmedLine.includes('</')) {
      inJSX = true;
    }
    if (trimmedLine.includes('</') && !trimmedLine.includes('<')) {
      inJSX = false;
    }
    
    fixedLines.push(line);
  }
  
  // Add missing closing parentheses and braces
  if (openParens > 0) {
    fixedLines.push(')'.repeat(openParens));
  }
  if (openBraces > 0) {
    fixedLines.push('}'.repeat(openBraces));
  }
  
  fixed = fixedLines.join('\n');
  
  // Pattern 8: Fix specific malformed patterns
  fixed = fixed.replace(/;\s*$/gm, '');
  fixed = fixed.replace(/>\s*;\s*$/gm, '>');
  
  // Pattern 9: Fix malformed closing tags
  fixed = fixed.replace(/<\/\s*>/g, '');
  
  // Pattern 10: Fix missing closing tags by analyzing the structure
  const tagStack = [];
  const lines2 = fixed.split('\n');
  const fixedLines2 = [];
  
  for (let i = 0; i < lines2.length; i++) {
    const line = lines2[i];
    const trimmedLine = line.trim();
    
    // Check for opening tags
    const openTagMatch = trimmedLine.match(/<(\w+)(?:\s[^>]*)?(?:>|$)/);
    if (openTagMatch && !trimmedLine.includes('/>')) {
      const tagName = openTagMatch[1];
      // Skip self-closing tags and script/style tags
      if (!['img', 'br', 'hr', 'input', 'meta', 'link', 'script', 'style'].includes(tagName)) {
        tagStack.push({ tag: tagName, line: i });
      }
    }
    
    // Check for closing tags
    const closeTagMatch = trimmedLine.match(/<\/(\w+)>/);
    if (closeTagMatch) {
      const tagName = closeTagMatch[1];
      // Remove from stack
      const lastIndex = tagStack.findLastIndex(item => item.tag === tagName);
      if (lastIndex !== -1) {
        tagStack.splice(lastIndex, 1);
      }
    }
    
    fixedLines2.push(line);
  }
  
  // Add missing closing tags
  while (tagStack.length > 0) {
    const { tag } = tagStack.pop();
    fixedLines2.push(`</${tag}>`);
  }
  
  fixed = fixedLines2.join('\n');
  
  return fixed;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixedContent = fixJSXErrors(content);
    
    if (content !== fixedContent) {
      fs.writeFileSync(filePath, fixedContent, 'utf8');
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
  console.log('Starting targeted JSX error fixing...');
  
  // Get all TypeScript/JavaScript files in the app directory
  const pattern = 'app/**/*.{ts,tsx,js,jsx}';
  const files = glob.sync(pattern);
  
  let fixedCount = 0;
  let totalFiles = files.length;
  
  console.log(`Found ${totalFiles} files to process`);
  
  for (const file of files) {
    if (processFile(file)) {
      fixedCount++;
    }
  }
  
  console.log(`\nFixed ${fixedCount} out of ${totalFiles} files`);
  console.log('Targeted JSX error fixing completed!');
}

if (require.main === module) {
  main();
}

module.exports = { fixJSXErrors, processFile };