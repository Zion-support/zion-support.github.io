#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to fix all JSX attributes
function fixAllJSXFinal(content) {
  let fixed = content;

  // Fix JSX attributes with colons instead of equals
  fixed = fixed.replace(/(\w+):\s*"([^"]*)"/g, '$1="$2"');
  fixed = fixed.replace(/(\w+):\s*'([^']*)'/g, "$1='$2'");
  
  // Fix JSX attributes with quotes around JavaScript expressions
  fixed = fixed.replace(/key="\{([^}]+)\}"/g, 'key={$1}');
  fixed = fixed.replace(/to="\{([^}]+)\}"/g, 'to={$1}');
  fixed = fixed.replace(/className="\{([^}]+)\}"/g, 'className={$1}');
  fixed = fixed.replace(/onClick="\{([^}]+)\}"/g, 'onClick={$1}');
  fixed = fixed.replace(/href="\{([^}]+)\}"/g, 'href={$1}');
  fixed = fixed.replace(/src="\{([^}]+)\}"/g, 'src={$1}');
  fixed = fixed.replace(/alt="\{([^}]+)\}"/g, 'alt={$1}');
  fixed = fixed.replace(/id="\{([^}]+)\}"/g, 'id={$1}');
  fixed = fixed.replace(/type="\{([^}]+)\}"/g, 'type={$1}');
  fixed = fixed.replace(/value="\{([^}]+)\}"/g, 'value={$1}');
  fixed = fixed.replace(/placeholder="\{([^}]+)\}"/g, 'placeholder={$1}');
  fixed = fixed.replace(/name="\{([^}]+)\}"/g, 'name={$1}');
  fixed = fixed.replace(/role="\{([^}]+)\}"/g, 'role={$1}');
  fixed = fixed.replace(/aria-label="\{([^}]+)\}"/g, 'aria-label={$1}');
  fixed = fixed.replace(/aria-labelledby="\{([^}]+)\}"/g, 'aria-labelledby={$1}');
  fixed = fixed.replace(/aria-describedby="\{([^}]+)\}"/g, 'aria-describedby={$1}');
  fixed = fixed.replace(/data-testid="\{([^}]+)\}"/g, 'data-testid={$1}');
  
  return fixed;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixAllJSXFinal(content);
    
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
    'app/**/*.jsx'
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

export { fixAllJSXFinal, processFile };