#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Function to fix remaining specific errors
function fixRemainingErrors(content, filePath) {
  let fixed = content;
  
  // Fix 'Right' references that should be 'ChevronRight'
  fixed = fixed.replace(/\bRight\b/g, 'ChevronRight');
  
  // Fix duplicate imports by removing duplicates
  const lines = fixed.split('\n');
  const importLines = [];
  const otherLines = [];
  const seenImports = new Set();
  
  for (const line of lines) {
    if (line.trim().startsWith('import ')) {
      const importKey = line.trim();
      if (!seenImports.has(importKey)) {
        importLines.push(line);
        seenImports.add(importKey);
      }
    } else {
      otherLines.push(line);
    }
  }
  
  fixed = [...importLines, ...otherLines].join('\n');
  
  // Fix duplicate object properties
  fixed = fixed.replace(/(\w+):\s*[^,}]+,\s*\1:/g, '$1:');
  
  // Fix duplicate JSX attributes
  fixed = fixed.replace(/(\w+)=[^>]+\s+\1=/g, '$1=');
  
  // Fix duplicate variable declarations
  fixed = fixed.replace(/const\s+(\w+)\s*=\s*[^;]+;\s*const\s+\1\s*=/g, 'const $1 =');
  
  // Fix missing defaultStructuredData variable
  if (fixed.includes('defaultStructuredData') && !fixed.includes('const defaultStructuredData')) {
    fixed = fixed.replace(/defaultStructuredData/g, 'structuredData');
  }
  
  // Fix children prop type issues
  if (fixed.includes('({ children })') && !fixed.includes('({ children }: { children: React.ReactNode })')) {
    fixed = fixed.replace(/\(\{\s*children\s*\}\)/g, '({ children }: { children: React.ReactNode })');
  }
  
  // Fix className prop issues on custom components
  fixed = fixed.replace(/className=\{([^}]+)\}/g, (match, className) => {
    // Only fix if it's on a custom component (not standard HTML elements)
    const lines = fixed.split('\n');
    const lineIndex = lines.findIndex(line => line.includes(match));
    if (lineIndex >= 0) {
      const line = lines[lineIndex];
      const beforeMatch = line.substring(0, line.indexOf(match));
      const componentMatch = beforeMatch.match(/<(\w+)/);
      if (componentMatch && !['div', 'span', 'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'a', 'button', 'input', 'textarea', 'select', 'img'].includes(componentMatch[1])) {
        return `{...{ className: ${className} }}`;
      }
    }
    return match;
  });
  
  return fixed;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixedContent = fixRemainingErrors(content, filePath);
    
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

// Main execution
console.log('Starting remaining error fixes...');

// List of files that need fixing based on the error output
const filesToFix = [
  'app/5g-solutions/page.tsx',
  'app/ai-automation-platform/page.tsx',
  'app/ai-services/page.tsx',
  'app/blog/page.tsx',
  'app/components/LazyWrapper.tsx',
  'app/components/SEOHead.tsx',
  'app/contact/page.tsx',
  'app/contexts/AnalyticsContext.tsx',
  'app/demo/page.tsx',
  'app/pages/HomePage.tsx',
  'app/partners/page.tsx',
  'app/services/page.tsx',
  'app/support/page.tsx',
  'app/tutorials/page.tsx'
];

let processedCount = 0;
let errorCount = 0;

for (const file of filesToFix) {
  if (fs.existsSync(file)) {
    if (processFile(file)) {
      processedCount++;
    } else {
      errorCount++;
    }
  }
}

console.log(`\nFix complete:`);
console.log(`- Files processed: ${processedCount}`);
console.log(`- Errors: ${errorCount}`);

console.log('Remaining error fixes completed!');