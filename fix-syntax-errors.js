#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to fix common syntax errors in React/TypeScript files
function fixSyntaxErrors(content) {
  let fixed = content;
  
  // Fix missing commas in object arrays
  fixed = fixed.replace(/\}\s*\n\s*icon:/g, '},\n    {');
  fixed = fixed.replace(/\}\s*\n\s*name:/g, '},\n    {');
  fixed = fixed.replace(/\}\s*\n\s*title:/g, '},\n    {');
  
  // Fix missing commas after benefits arrays
  fixed = fixed.replace(/benefits: \[[^\]]+\]\s*\n\s*icon:/g, (match) => {
    return match.replace(/\]\s*\n\s*icon:/, ']\n    },\n    {\n      icon:');
  });
  
  // Fix missing commas after benefits arrays followed by other properties
  fixed = fixed.replace(/benefits: \[[^\]]+\]\s*\n\s*([a-zA-Z])/g, (match, nextChar) => {
    return match.replace(/\]\s*\n\s*/, ']\n    },\n    {\n      ');
  });
  
  // Fix missing closing brackets and commas in arrays
  fixed = fixed.replace(/benefits: \[[^\]]+\]\s*\n\s*\]/g, (match) => {
    return match.replace(/\]\s*\n\s*\]/, ']\n    }\n  ]');
  });
  
  // Fix missing semicolons after variable declarations
  fixed = fixed.replace(/(const|let|var)\s+\w+\s*=\s*\[[^\]]*\]\s*\n\s*return/g, (match) => {
    return match.replace(/\]\s*\n\s*return/, '];\n\n  return');
  });
  
  // Fix missing semicolons after const declarations
  fixed = fixed.replace(/(const|let|var)\s+\w+\s*=\s*\[[^\]]*\]\s*\n\s*const/g, (match) => {
    return match.replace(/\]\s*\n\s*const/, '];\n\n  const');
  });
  
  // Fix missing semicolons after const declarations before return
  fixed = fixed.replace(/(const|let|var)\s+\w+\s*=\s*\[[^\]]*\]\s*\n\s*return/g, (match) => {
    return match.replace(/\]\s*\n\s*return/, '];\n\n  return');
  });
  
  // Fix missing closing brackets in function declarations
  fixed = fixed.replace(/(const|let|var)\s+\w+\s*:\s*React\.FC\s*=\s*\(\)\s*=>\s*\{\s*\n\s*\/\/ TODO: Add content\s*\n\}/g, (match) => {
    return match.replace(/\{\s*\n\s*\/\/ TODO: Add content\s*\n\}/, '{\n  // TODO: Add content\n  ');
  });
  
  // Fix missing imports for commonly used icons
  if (fixed.includes('BarChart') && !fixed.includes('import {BarChart')) {
    fixed = fixed.replace(/import\s*\{[^}]*\}\s*from\s*['"]lucide-react['"];/, (match) => {
      const icons = match.match(/\{([^}]+)\}/)[1];
      const iconList = icons.split(',').map(icon => icon.trim());
      if (!iconList.includes('BarChart')) {
        iconList.push('BarChart');
      }
      return `import {${iconList.join(', ')}} from 'lucide-react';`;
    });
  }
  
  if (fixed.includes('Settings') && !fixed.includes('import {Settings')) {
    fixed = fixed.replace(/import\s*\{[^}]*\}\s*from\s*['"]lucide-react['"];/, (match) => {
      const icons = match.match(/\{([^}]+)\}/)[1];
      const iconList = icons.split(',').map(icon => icon.trim());
      if (!iconList.includes('Settings')) {
        iconList.push('Settings');
      }
      return `import {${iconList.join(', ')}} from 'lucide-react';`;
    });
  }
  
  // Fix missing closing brackets in arrays
  fixed = fixed.replace(/const\s+\w+\s*=\s*\[[^\]]*$/gm, (match) => {
    if (!match.includes('];')) {
      return match + '\n  ];';
    }
    return match;
  });
  
  // Fix missing closing brackets in objects
  fixed = fixed.replace(/\{\s*\/\/ TODO: Add content\s*\n\s*\}/g, '{\n    // TODO: Add content\n  }');
  
  return fixed;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixSyntaxErrors(content);
    
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
    'src/**/*.tsx',
    'src/**/*.ts'
  ];
  
  let totalFiles = 0;
  let fixedFiles = 0;
  
  for (const pattern of patterns) {
    const files = await glob(pattern, { cwd: process.cwd() });
    
    for (const file of files) {
      totalFiles++;
      if (processFile(file)) {
        fixedFiles++;
      }
    }
  }
  
  console.log(`\nProcessed ${totalFiles} files, fixed ${fixedFiles} files.`);
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { fixSyntaxErrors, processFile };