#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to fix orphaned objects and malformed arrays
function fixOrphanedObjects(content) {
  let fixed = content;

  // Remove duplicate array declarations
  fixed = fixed.replace(/const features = \[\s*\/\/ Features will be added here\s*\];\s*const features = \[\s*\/\/ Features will be added here\s*\];/g, 'const features = [\n    // Features will be added here\n  ];');

  // Fix orphaned object literals outside of arrays
  const lines = fixed.split('\n');
  const newLines = [];
  let inFeaturesArray = false;
  let featuresArrayStart = -1;
  let braceCount = 0;
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    if (line.includes('const features = [')) {
      inFeaturesArray = true;
      featuresArrayStart = i;
      newLines.push(line);
      continue;
    }
    
    if (inFeaturesArray && line.includes('];')) {
      inFeaturesArray = false;
      newLines.push(line);
      continue;
    }
    
    if (inFeaturesArray && line.trim().startsWith('{') && line.includes('icon:')) {
      newLines.push(line);
      braceCount = 1;
      continue;
    }
    
    if (inFeaturesArray && braceCount > 0) {
      if (line.trim().startsWith('{')) {
        braceCount++;
      }
      if (line.trim().startsWith('}')) {
        braceCount--;
      }
      newLines.push(line);
      continue;
    }
    
    if (inFeaturesArray && line.trim().startsWith('{') && !line.includes('icon:')) {
      // Skip orphaned objects
      continue;
    }
    
    if (inFeaturesArray && line.trim().startsWith('}') && !line.includes(',')) {
      // Skip orphaned closing braces
      continue;
    }
    
    newLines.push(line);
  }
  
  fixed = newLines.join('\n');

  // Clean up any remaining orphaned objects
  fixed = fixed.replace(/^\s*{\s*$/gm, '');
  fixed = fixed.replace(/^\s*}\s*$/gm, '');
  fixed = fixed.replace(/^\s*{\s*icon:\s*[^,]+,\s*$/gm, '');
  fixed = fixed.replace(/^\s*title:\s*[^,]+,\s*$/gm, '');
  fixed = fixed.replace(/^\s*description:\s*[^,]+,\s*$/gm, '');
  fixed = fixed.replace(/^\s*benefits:\s*\[[^\]]+\]\s*$/gm, '');

  return fixed;
}

// Main function to process files
async function main() {
  const appDir = path.join(process.cwd(), 'app');
  const pattern = path.join(appDir, '**/*.tsx');
  
  console.log('Scanning for TSX files with orphaned objects...');
  const files = await glob(pattern);
  
  let fixedCount = 0;
  
  for (const file of files) {
    try {
      const content = fs.readFileSync(file, 'utf8');
      const fixed = fixOrphanedObjects(content);
      
      if (fixed !== content) {
        fs.writeFileSync(file, fixed, 'utf8');
        console.log(`Fixed: ${path.relative(process.cwd(), file)}`);
        fixedCount++;
      }
    } catch (error) {
      console.error(`Error processing ${file}:`, error.message);
    }
  }
  
  console.log(`\nFixed ${fixedCount} files`);
}

// Run the script
main().catch(console.error);