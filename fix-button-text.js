#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to fix malformed button text
function fixButtonText(content) {
  let fixed = content;
  
  // Fix patterns like { Get Started }}
  fixed = fixed.replace(
    /\{\s*Get Started\s*\}\}/g,
    'Get Started'
  );
  
  // Fix patterns like { Learn More }}
  fixed = fixed.replace(
    /\{\s*Learn More\s*\}\}/g,
    'Learn More'
  );
  
  // Fix patterns like { Contact Us }}
  fixed = fixed.replace(
    /\{\s*Contact Us\s*\}\}/g,
    'Contact Us'
  );
  
  return fixed;
}

// Main function to process files
function processFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Apply fixes
    content = fixButtonText(content);
    
    // Only write if content changed
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
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
  // Find all TypeScript/TSX files
  const files = await glob('app/**/*.{ts,tsx}');

  console.log(`Found ${files.length} TypeScript files to process...`);

  let fixedCount = 0;
  for (const file of files) {
    if (processFile(file)) {
      fixedCount++;
    }
  }

  console.log(`Fixed ${fixedCount} files`);
}

main().catch(console.error);