#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to fix JSX syntax errors comprehensively
function fixJSXErrors(content) {
  let fixed = content;
  
  // Fix malformed JSX structure by analyzing and fixing common patterns
  const lines = fixed.split('\n');
  const fixedLines = [];
  const tagStack = [];
  let inJSX = false;
  let braceCount = 0;
  let parenCount = 0;
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmedLine = line.trim();
    
    // Count braces and parentheses
    const openBraces = (line.match(/\{/g) || []).length;
    const closeBraces = (line.match(/\}/g) || []).length;
    const openParens = (line.match(/\(/g) || []).length;
    const closeParens = (line.match(/\)/g) || []).length;
    
    braceCount += openBraces - closeBraces;
    parenCount += openParens - closeParens;
    
    // Check for JSX opening tags
    const openTagMatch = trimmedLine.match(/<(\w+)(?:\s[^>]*)?(?:>|$)/);
    if (openTagMatch && !trimmedLine.includes('/>')) {
      const tagName = openTagMatch[1];
      // Skip self-closing tags and script/style tags
      if (!['img', 'br', 'hr', 'input', 'meta', 'link', 'script', 'style'].includes(tagName)) {
        tagStack.push({ tag: tagName, line: i });
        inJSX = true;
      }
    }
    
    // Check for JSX closing tags
    const closeTagMatch = trimmedLine.match(/<\/(\w+)>/);
    if (closeTagMatch) {
      const tagName = closeTagMatch[1];
      // Remove from stack
      const lastIndex = tagStack.findLastIndex(item => item.tag === tagName);
      if (lastIndex !== -1) {
        tagStack.splice(lastIndex, 1);
      }
    }
    
    // Fix specific malformed patterns
    let fixedLine = line;
    
    // Fix missing closing tags for common elements
    if (trimmedLine.includes('<div') && !trimmedLine.includes('</div>') && !trimmedLine.includes('/>')) {
      // Check if this div needs a closing tag
      const divMatch = trimmedLine.match(/<div[^>]*>([^<]*?)(?=\s*<)/);
      if (divMatch && !divMatch[1].includes('</div>')) {
        // This div needs a closing tag, but we'll handle it in the stack
      }
    }
    
    // Fix malformed className attributes
    fixedLine = fixedLine.replace(/className="([^"]*?)([a-zA-Z])([a-zA-Z])/g, (match, prefix, char1, char2) => {
      if (char1 === char1.toUpperCase() && char2 === char2.toLowerCase()) {
        return `className="${prefix}${char1} ${char2}`;
      }
      return match;
    });
    
    // Fix missing spaces in className attributes
    fixedLine = fixedLine.replace(/className="([^"]*?)([a-zA-Z])([0-9])/g, 'className="$1$2 $3');
    fixedLine = fixedLine.replace(/className="([^"]*?)([0-9])([a-zA-Z])/g, 'className="$1$2 $3');
    
    // Fix malformed grid classes
    fixedLine = fixedLine.replace(/grid-cols-(\d+)gap-/g, 'grid-cols-$1 gap-');
    fixedLine = fixedLine.replace(/gap-(\d+)mt-/g, 'gap-$1 mt-');
    
    // Fix malformed padding/margin classes
    fixedLine = fixedLine.replace(/px-(\d+)py-/g, 'px-$1 py-');
    fixedLine = fixedLine.replace(/py-(\d+)px-/g, 'py-$1 px-');
    fixedLine = fixedLine.replace(/p-(\d+)mt-/g, 'p-$1 mt-');
    fixedLine = fixedLine.replace(/mt-(\d+)p-/g, 'mt-$1 p-');
    
    // Fix malformed text color classes
    fixedLine = fixedLine.replace(/text-([a-zA-Z]+)(\d+)/g, 'text-$1-$2');
    fixedLine = fixedLine.replace(/bg-([a-zA-Z]+)(\d+)/g, 'bg-$1-$2');
    fixedLine = fixedLine.replace(/border-([a-zA-Z]+)(\d+)/g, 'border-$1-$2');
    
    // Fix malformed rounded classes
    fixedLine = fixedLine.replace(/rounded-lgp-/g, 'rounded-lg p-');
    fixedLine = fixedLine.replace(/rounded-lgp(\d+)/g, 'rounded-lg p$1');
    
    // Fix malformed font classes
    fixedLine = fixedLine.replace(/font-boldtext-/g, 'font-bold text-');
    fixedLine = fixedLine.replace(/font-semiboldtext-/g, 'font-semibold text-');
    
    // Fix malformed container classes
    fixedLine = fixedLine.replace(/mx-autopx-/g, 'mx-auto px-');
    fixedLine = fixedLine.replace(/mx-autopx-(\d+)py-/g, 'mx-auto px-$1 py-');
    
    // Fix malformed gradient classes
    fixedLine = fixedLine.replace(/from-slate-9\s+00via-purple-9\s+0\s+0to-slate-9\s+0\s+0/g, 'from-slate-900 via-purple-900 to-slate-900');
    
    // Fix malformed text classes
    fixedLine = fixedLine.replace(/text-gray-30\s+0/g, 'text-gray-300');
    fixedLine = fixedLine.replace(/text-blue-90\s+0/g, 'text-blue-900');
    fixedLine = fixedLine.replace(/text-green-90\s+0/g, 'text-green-900');
    fixedLine = fixedLine.replace(/text-purple-90\s+0/g, 'text-purple-900');
    fixedLine = fixedLine.replace(/text-blue-70\s+0/g, 'text-blue-700');
    fixedLine = fixedLine.replace(/text-green-70\s+0/g, 'text-green-700');
    fixedLine = fixedLine.replace(/text-purple-70\s+0/g, 'text-purple-700');
    
    // Fix malformed border classes
    fixedLine = fixedLine.replace(/border-blue-20\s+0/g, 'border-blue-200');
    fixedLine = fixedLine.replace(/border-green-20\s+0/g, 'border-green-200');
    fixedLine = fixedLine.replace(/border-purple-20\s+0/g, 'border-purple-200');
    
    // Fix malformed background classes
    fixedLine = fixedLine.replace(/bg-blue-50\s+/g, 'bg-blue-50 ');
    fixedLine = fixedLine.replace(/bg-green-50\s+/g, 'bg-green-50 ');
    fixedLine = fixedLine.replace(/bg-purple-50\s+/g, 'bg-purple-50 ');
    
    // Fix specific malformed patterns
    fixedLine = fixedLine.replace(/;\s*$/gm, '');
    fixedLine = fixedLine.replace(/>\s*;\s*$/gm, '>');
    
    // Fix malformed closing tags
    fixedLine = fixedLine.replace(/<\/\s*>/g, '');
    
    fixedLines.push(fixedLine);
  }
  
  // Add missing closing tags
  while (tagStack.length > 0) {
    const { tag } = tagStack.pop();
    fixedLines.push(`</${tag}>`);
  }
  
  // Add missing closing braces and parentheses
  if (braceCount > 0) {
    fixedLines.push('}'.repeat(braceCount));
  }
  if (parenCount > 0) {
    fixedLines.push(')'.repeat(parenCount));
  }
  
  fixed = fixedLines.join('\n');
  
  // Fix specific malformed patterns
  fixed = fixed.replace(/;\s*$/gm, '');
  fixed = fixed.replace(/>\s*;\s*$/gm, '>');
  
  // Fix malformed closing tags
  fixed = fixed.replace(/<\/\s*>/g, '');
  
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
  console.log('Starting final JSX error fixing...');
  
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
  console.log('Final JSX error fixing completed!');
}

if (require.main === module) {
  main();
}

module.exports = { fixJSXErrors, processFile };
