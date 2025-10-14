#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { glob } = require('glob');

// Function to fix common JSX syntax errors
function fixJSXErrors(content) {
  let fixed = content;
  
  // Fix semicolons in JSX attributes (e.g., className="md: grid-cols-2" -> className="md:grid-cols-2")
  fixed = fixed.replace(/className="([^"]*)\s+([^"]*)"/g, 'className="$1$2"');
  
  // Fix semicolons after JSX elements (e.g., </div>; -> </div>)
  fixed = fixed.replace(/(<\/[^>]+>);/g, '$1');
  
  // Fix semicolons in JSX attributes (e.g., hover: text-blue-800 -> hover:text-blue-800)
  fixed = fixed.replace(/hover:\s+([a-zA-Z-]+)/g, 'hover:$1');
  
  // Fix missing closing tags for common patterns
  // Look for unclosed <p> tags
  const pTagRegex = /<p\s+[^>]*>([^<]*(?:<[^/][^>]*>[^<]*)*?)(?=<[^/]|$)/g;
  let match;
  while ((match = pTagRegex.exec(fixed)) !== null) {
    const fullMatch = match[0];
    const content = match[1];
    
    // Check if this <p> tag is already closed
    if (!fullMatch.includes('</p>')) {
      // Find the next opening tag or end of content
      const nextTagMatch = fixed.indexOf('<', match.index + fullMatch.length);
      const endOfContent = fixed.indexOf('\n', match.index + fullMatch.length);
      const nextBreak = Math.min(
        nextTagMatch === -1 ? Infinity : nextTagMatch,
        endOfContent === -1 ? Infinity : endOfContent
      );
      
      if (nextBreak !== Infinity) {
        const beforeNext = fixed.substring(0, nextBreak);
        const afterNext = fixed.substring(nextBreak);
        
        // Insert closing </p> tag
        fixed = beforeNext + '</p>' + afterNext;
        
        // Reset regex position
        pTagRegex.lastIndex = 0;
      }
    }
  }
  
  // Fix malformed grid classes
  fixed = fixed.replace(/grid\s+md:\s+grid-cols/g, 'grid md:grid-cols');
  
  // Fix missing closing tags for div elements in specific patterns
  // This is a more complex fix that looks for common patterns
  const lines = fixed.split('\n');
  const fixedLines = [];
  const openTags = [];
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();
    
    // Track opening tags
    const openTagMatch = trimmed.match(/<([a-zA-Z][a-zA-Z0-9]*)[^>]*>(?!.*<\/\1>)/);
    if (openTagMatch) {
      openTags.push({ tag: openTagMatch[1], line: i });
    }
    
    // Track closing tags
    const closeTagMatch = trimmed.match(/<\/([a-zA-Z][a-zA-Z0-9]*)>/);
    if (closeTagMatch) {
      const tagToClose = closeTagMatch[1];
      const lastOpenIndex = openTags.findLastIndex(item => item.tag === tagToClose);
      if (lastOpenIndex !== -1) {
        openTags.splice(lastOpenIndex, 1);
      }
    }
    
    fixedLines.push(line);
  }
  
  // Add missing closing tags at the end
  while (openTags.length > 0) {
    const { tag } = openTags.pop();
    fixedLines.push(`</${tag}>`);
  }
  
  return fixedLines.join('\n');
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