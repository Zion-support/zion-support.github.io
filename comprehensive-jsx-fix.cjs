#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { glob } = require('glob');

// Function to fix comprehensive JSX syntax errors
function fixJSXErrors(content) {
  let fixed = content;
  
  // Fix semicolons in JSX attributes and classes
  fixed = fixed.replace(/className="([^"]*)\s+([^"]*)"/g, 'className="$1$2"');
  fixed = fixed.replace(/hover:\s+([a-zA-Z-]+)/g, 'hover:$1');
  fixed = fixed.replace(/grid\s+md:\s+grid-cols/g, 'grid md:grid-cols');
  
  // Fix semicolons after JSX elements
  fixed = fixed.replace(/(<\/[^>]+>);/g, '$1');
  
  // Fix missing closing tags for specific patterns
  // Look for unclosed <p> tags that are missing closing tags
  const lines = fixed.split('\n');
  const fixedLines = [];
  let inUnclosedP = false;
  let pTagLine = -1;
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();
    
    // Check for opening <p> tag
    if (trimmed.match(/<p\s+[^>]*>/) && !trimmed.includes('</p>')) {
      inUnclosedP = true;
      pTagLine = i;
    }
    
    // Check for closing </p> tag
    if (inUnclosedP && trimmed.includes('</p>')) {
      inUnclosedP = false;
      pTagLine = -1;
    }
    
    // If we're in an unclosed <p> and hit a new opening tag or end of content, close it
    if (inUnclosedP && (trimmed.match(/<[a-zA-Z]/) || i === lines.length - 1)) {
      // Add closing </p> tag before the new opening tag
      if (trimmed.match(/<[a-zA-Z]/)) {
        fixedLines.push('</p>');
        inUnclosedP = false;
        pTagLine = -1;
      }
    }
    
    fixedLines.push(line);
  }
  
  // Close any remaining unclosed <p> tags
  if (inUnclosedP) {
    fixedLines.push('</p>');
  }
  
  // Fix specific malformed patterns
  fixed = fixedLines.join('\n');
  
  // Fix missing closing tags for div elements in grid patterns
  fixed = fixed.replace(
    /<div className="grid[^"]*">([\s\S]*?)(?=<div className="[^"]*">|$)/g,
    (match, content) => {
      // Count opening and closing divs in the content
      const openDivs = (content.match(/<div/g) || []).length;
      const closeDivs = (content.match(/<\/div>/g) || []).length;
      const missingDivs = openDivs - closeDivs;
      
      let result = match;
      for (let i = 0; i < missingDivs; i++) {
        result += '</div>';
      }
      return result;
    }
  );
  
  // Fix specific malformed JSX patterns
  fixed = fixed.replace(/className="([^"]*)\s+([^"]*)"/g, 'className="$1$2"');
  
  // Fix missing closing tags for common patterns
  // Look for unclosed JSX elements and add closing tags
  const tagStack = [];
  const lines2 = fixed.split('\n');
  const resultLines = [];
  
  for (let i = 0; i < lines2.length; i++) {
    const line = lines2[i];
    const trimmed = line.trim();
    
    // Track opening tags
    const openTagMatch = trimmed.match(/<([a-zA-Z][a-zA-Z0-9]*)[^>]*>(?!.*<\/\1>)/);
    if (openTagMatch) {
      tagStack.push({ tag: openTagMatch[1], line: i });
    }
    
    // Track closing tags
    const closeTagMatch = trimmed.match(/<\/([a-zA-Z][a-zA-Z0-9]*)>/);
    if (closeTagMatch) {
      const tagToClose = closeTagMatch[1];
      const lastOpenIndex = tagStack.findLastIndex(item => item.tag === tagToClose);
      if (lastOpenIndex !== -1) {
        tagStack.splice(lastOpenIndex, 1);
      }
    }
    
    resultLines.push(line);
  }
  
  // Add missing closing tags at the end
  while (tagStack.length > 0) {
    const { tag } = tagStack.pop();
    resultLines.push(`</${tag}>`);
  }
  
  return resultLines.join('\n');
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixJSXErrors(content);
    
    if (content !== fixed) {
      fs.writeFileSync(filePath, fixed, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
async function main() {
  const pattern = 'app/**/*.tsx';
  const files = await glob(pattern, { cwd: process.cwd() });
  
  console.log(`Found ${files.length} TSX files to process...`);
  
  let fixedCount = 0;
  files.forEach(file => {
    if (processFile(file)) {
      fixedCount++;
    }
  });
  
  console.log(`Fixed ${fixedCount} files`);
}

if (require.main === module) {
  main();
}

module.exports = { fixJSXErrors, processFile };