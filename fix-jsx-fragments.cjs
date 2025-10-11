#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to fix JSX fragment issues
function fixJSXFragments(content) {
  let fixed = content;
  
  // Fix missing React fragments around JSX elements
  // Look for return statements followed by JSX without fragments
  const returnMatch = fixed.match(/return\s*\(\s*\n\s*<[^>]+>/);
  if (returnMatch) {
    // Check if there's already a fragment
    const afterReturn = fixed.substring(returnMatch.index + returnMatch[0].length);
    const hasFragment = afterReturn.match(/^\s*<[^>]*>\s*$/m) || afterReturn.match(/^\s*<[^>]*>\s*<[^>]+>/m);
    
    if (!hasFragment) {
      // Add React fragment
      fixed = fixed.replace(/return\s*\(\s*\n\s*</, 'return (\n    <>\n      <');
      
      // Find the end of the JSX and add closing fragment
      const lastClosingTag = fixed.lastIndexOf('</');
      if (lastClosingTag !== -1) {
        const afterLastTag = fixed.substring(lastClosingTag);
        const nextClosingParen = afterLastTag.indexOf(')');
        if (nextClosingParen !== -1) {
          const insertPos = lastClosingTag + afterLastTag.substring(0, nextClosingParen).lastIndexOf('>') + 1;
          fixed = fixed.substring(0, insertPos) + '\n    </>\n  ' + fixed.substring(insertPos);
        }
      }
    }
  }
  
  // Fix missing closing brackets for arrays
  if (fixed.includes('const benefits = [') && !fixed.includes(']')) {
    fixed = fixed.replace(/const benefits = \[\s*\]/, 'const benefits = []');
  }
  
  // Fix missing closing brackets for features array
  if (fixed.includes('const features = [') && !fixed.includes(']')) {
    fixed = fixed.replace(/const features = \[\s*{\s*icon:\s*(\w+),\s*title:\s*'([^']+)'\s*}\s*\]/, 
      `const features = [
  {
    icon: $1,
    title: '$2'
  }
]`);
  }
  
  // Fix missing closing tags
  const openDivs = (fixed.match(/<div[^>]*>/g) || []).length;
  const closeDivs = (fixed.match(/<\/div>/g) || []).length;
  
  if (openDivs > closeDivs) {
    const missingDivs = openDivs - closeDivs;
    for (let i = 0; i < missingDivs; i++) {
      fixed += '\n        </div>';
    }
  }
  
  // Fix missing closing section tags
  const openSections = (fixed.match(/<section[^>]*>/g) || []).length;
  const closeSections = (fixed.match(/<\/section>/g) || []).length;
  
  if (openSections > closeSections) {
    const missingSections = openSections - closeSections;
    for (let i = 0; i < missingSections; i++) {
      fixed += '\n      </section>';
    }
  }
  
  // Fix missing closing main tags
  const openMains = (fixed.match(/<main[^>]*>/g) || []).length;
  const closeMains = (fixed.match(/<\/main>/g) || []).length;
  
  if (openMains > closeMains) {
    const missingMains = openMains - closeMains;
    for (let i = 0; i < missingMains; i++) {
      fixed += '\n    </main>';
    }
  }
  
  return fixed;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixJSXFragments(content);
    
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

// Main function
function main() {
  const pattern = 'app/**/*.tsx';
  const files = glob.sync(pattern);
  
  console.log(`Found ${files.length} TypeScript files to process...`);
  
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

module.exports = { fixJSXFragments, processFile };