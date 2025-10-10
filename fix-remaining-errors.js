#!/usr/bin/env node

import fs from 'fs';
import { glob } from 'glob';

// Function to fix remaining syntax errors
function fixRemainingErrors(content) {
  let fixed = content;
  
  // Fix JSX expressions that need one parent element
  fixed = fixed.replace(/return\s*\(\s*<>\s*<\/>\s*([^<]+)/g, 'return (\n    <>\n      $1');
  
  // Fix malformed JSX structure
  fixed = fixed.replace(/<>\s*<\/>\s*<Helmet>/g, '<>\n      <Helmet>');
  fixed = fixed.replace(/<>\s*<\/>\s*<Navigation/g, '<>\n      <Navigation');
  
  // Fix missing closing tags
  fixed = fixed.replace(/<div[^>]*>\s*<\/div>\s*<section/g, '<div>\n        <section');
  fixed = fixed.replace(/<section[^>]*>\s*<\/section>\s*<div/g, '<section>\n          <div');
  
  // Fix self-closing tags that should be opening tags
  fixed = fixed.replace(/<div[^>]*>\s*<\/div>\s*<h1/g, '<div>\n            <h1');
  fixed = fixed.replace(/<div[^>]*>\s*<\/div>\s*<p/g, '<div>\n            <p');
  fixed = fixed.replace(/<div[^>]*>\s*<\/div>\s*<button/g, '<div>\n            <button');
  
  // Fix malformed object properties
  fixed = fixed.replace(/benefits:\s*\[([^\]]+)\]\s*}\s*}/g, 'benefits: [$1]\n    }');
  fixed = fixed.replace(/benefits:\s*\[([^\]]+)\]\s*}\s*,/g, 'benefits: [$1]\n    },');
  
  // Fix missing commas in arrays
  fixed = fixed.replace(/benefits:\s*\[([^\]]+)\]\s*}\s*}/g, 'benefits: [$1]\n    }');
  
  // Fix JSX attribute issues
  fixed = fixed.replace(/=\s*{([^}]+)}\s*}/g, '={$1}');
  fixed = fixed.replace(/=\s*"([^"]*);\s*"/g, '="$1"');
  
  // Fix malformed function calls
  fixed = fixed.replace(/\(\s*\)\s*=>\s*{\s*}/g, '() => {\n    // TODO: Implement\n  }');
  
  // Fix missing semicolons
  fixed = fixed.replace(/from '([^']+)'\s*const/g, "from '$1';\nconst");
  fixed = fixed.replace(/from '([^']+)'\s*import/g, "from '$1';\nimport");
  
  // Fix malformed JSX expressions
  fixed = fixed.replace(/{\s*([^}]+)\s*}\s*}/g, '{$1}');
  
  // Clean up extra whitespace
  fixed = fixed.replace(/\n\s*\n\s*\n/g, '\n\n');
  
  return fixed;
}

// Function to process a single file
function processFile(filePath) {
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
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Main function
async function main() {
  const patterns = [
    'app/**/*.tsx',
    'app/**/*.ts'
  ];
  
  let totalFixed = 0;
  
  for (const pattern of patterns) {
    const files = await glob(pattern, { cwd: process.cwd() });
    for (const file of files) {
      if (processFile(file)) {
        totalFixed++;
      }
    }
  }
  
  console.log(`\nFixed ${totalFixed} files`);
}

main().catch(console.error);