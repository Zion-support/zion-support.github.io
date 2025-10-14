#!/usr/bin/env node

import fs from 'fs';
import { glob } from 'glob';

// Function to fix remaining syntax errors
function fixRemainingErrors(content) {
  let fixed = content;
  
  // Fix malformed JSX attributes
  fixed = fixed.replace(/className=([^"'\s>]+)/g, 'className="$1"');
  fixed = fixed.replace(/className="([^"]*?)\s+([^"]*?)"/g, 'className="$1 $2"');
  
  // Fix malformed JSX elements
  fixed = fixed.replace(/<(\w+)\s*\/>/g, '<$1 />');
  
  // Fix unterminated strings in JSX
  fixed = fixed.replace(/title="([^"]*?)(?=\s*[>}])/g, 'title="$1"');
  fixed = fixed.replace(/description="([^"]*?)(?=\s*[>}])/g, 'description="$1"');
  fixed = fixed.replace(/keywords="([^"]*?)(?=\s*[>}])/g, 'keywords="$1"');
  
  // Fix malformed function calls
  fixed = fixed.replace(/features\.map\(\(feature", index\)/g, 'features.map((feature, index)');
  
  // Fix malformed JSX expressions
  fixed = fixed.replace(/\{feature\.icon\}/g, '{feature.icon}');
  fixed = fixed.replace(/\{feature\.title\}/g, '{feature.title}');
  fixed = fixed.replace(/\{feature\.description\}/g, '{feature.description}');
  
  // Fix malformed button attributes
  fixed = fixed.replace(/hover:\s*"bg-blue-700/g, 'hover:bg-blue-700');
  fixed = fixed.replace(/hover:\s*"bg-white/g, 'hover:bg-white');
  fixed = fixed.replace(/hover:\s*"text-gray-900/g, 'hover:text-gray-900');
  
  // Fix malformed grid classes
  fixed = fixed.replace(/grid md:grid-cols-2 lg:grid-cols-3/g, 'grid md:grid-cols-2 lg:grid-cols-3');
  
  // Fix malformed JSX structure
  fixed = fixed.replace(/<EnhancedSEO\s*;\s*>/g, '<EnhancedSEO');
  fixed = fixed.replace(/<EnhancedSEO\s*>\s*<\/EnhancedSEO>/g, '<EnhancedSEO />');
  
  // Fix malformed closing tags
  fixed = fixed.replace(/<\/\w+>\s*;\s*$/gm, '');
  
  // Fix malformed semicolons in JSX
  fixed = fixed.replace(/;\s*$/gm, '');
  
  return fixed;
}

// Function to fix specific file patterns
function fixFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixRemainingErrors(content);
    
    if (content !== fixed) {
      fs.writeFileSync(filePath, fixed, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
console.log('Fixing remaining syntax errors...');

async function main() {
  const files = await glob('app/**/*.{tsx,jsx}', { cwd: process.cwd() });
  let fixedCount = 0;

  for (const file of files) {
    if (fixFile(file)) {
      fixedCount++;
    }
  }

  console.log(`Fixed ${fixedCount} files`);
}

main().catch(console.error);