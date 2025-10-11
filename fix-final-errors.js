#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to fix the remaining parsing errors
function fixFinalErrors(content) {
  let fixed = content;

  // Fix 'use client' directive placement
  if (fixed.includes("'use client'")) {
    fixed = fixed.replace(/'use client';?\s*/g, '');
    fixed = "'use client';\n" + fixed;
  }

  // Fix orphaned object literals outside of arrays
  const lines = fixed.split('\n');
  const newLines = [];
  let inFeaturesArray = false;
  let featuresArrayStart = -1;
  
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
      continue;
    }
    
    if (inFeaturesArray && line.trim().startsWith('}') && line.includes(',')) {
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

  // Fix missing semicolons
  fixed = fixed.replace(/const\s+\w+\s*=\s*\[\s*$/gm, 'const features = [\n    // Features will be added here\n  ];');

  // Fix malformed JSX
  fixed = fixed.replace(/{\s*}\s*}/g, '}');
  fixed = fixed.replace(/{\s*}\s*\)/g, ')');
  fixed = fixed.replace(/{\s*}\s*,/g, ',');

  // Fix missing return statement
  if (fixed.includes('const') && fixed.includes('React.FC') && !fixed.includes('return (')) {
    fixed = fixed.replace(/(const\s+\w+:\s*React\.FC\s*=\s*\(\)\s*=>\s*{)/, '$1\n  return (');
  }

  // Fix component structure
  if (fixed.includes('return (') && !fixed.includes('<div className=')) {>
    fixed = fixed.replace(/return\s*\(\s*/, 'return (\n    <div className="min-h-screen bg-gray-50">\n      ');
    fixed = fixed.replace(/(\s*)\s*\)\s*;?\s*$/, '\n    </div>\n  );');
  }

  return fixed;
}

// Main function to process files
async function main() {
  const appDir = path.join(process.cwd(), 'app');
  const pattern = path.join(appDir, '**/*.tsx');
  
  console.log('Scanning for TSX files with final errors...');
  const files = await glob(pattern);
  
  let fixedCount = 0;
  
  for (const file of files) {
    try {
      const content = fs.readFileSync(file, 'utf8');
      const fixed = fixFinalErrors(content);
      
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