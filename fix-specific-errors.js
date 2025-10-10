#!/usr/bin/env node

import fs from 'fs';
import { glob } from 'glob';

// Function to fix specific syntax errors
function fixSpecificErrors(content) {
  let fixed = content;
  
  // Fix array syntax issues
  fixed = fixed.replace(/benefits:\s*\[([^\]]+)\]\s*}\s*}/g, 'benefits: [$1] } }');
  fixed = fixed.replace(/benefits:\s*\[([^\]]+)\]\s*}\s*,/g, 'benefits: [$1] },');
  
  // Fix duplicate React imports
  fixed = fixed.replace(/import React from 'react'\s*import React, {[^}]+} from 'react'/g, (match) => {
    const secondImport = match.match(/import React, {([^}]+)} from 'react'/);
    if (secondImport) {
      return `import React, {${secondImport[1]}} from 'react'`;
    }
    return match;
  });
  
  // Fix missing semicolons after imports
  fixed = fixed.replace(/from '([^']+)'\s*const/g, "from '$1';\nconst");
  fixed = fixed.replace(/from '([^']+)'\s*import/g, "from '$1';\nimport");
  
  // Fix JSX closing tag issues
  fixed = fixed.replace(/<Helmet>\s*<title>([^<]+)<\/title>\s*<meta[^>]*\/>\s*<\/Helmet>/g, '<Helmet>\n        <title>$1</title>\n        <meta name="description" content="AI Services - Advanced AI Solutions" />\n      </Helmet>');
  
  // Fix malformed object properties
  fixed = fixed.replace(/{\s*icon:\s*([^,]+),\s*title:\s*'([^']+)',\s*description:\s*'([^']+)',\s*benefits:\s*\[([^\]]+)\]\s*}\s*}/g, '{\n      icon: $1,\n      title: \'$2\',\n      description: \'$3\',\n      benefits: [$4]\n    }');
  
  // Fix missing commas in arrays
  fixed = fixed.replace(/benefits:\s*\[([^\]]+)\]\s*}\s*}/g, 'benefits: [$1]\n    }');
  
  // Fix merge conflict markers that might have been missed
  fixed = fixed.replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+/g, '');
  fixed = fixed.replace(/<<<<<<< [^\n]+[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+/g, '');
  
  // Fix malformed JSX attributes
  fixed = fixed.replace(/=\s*{([^}]+)}\s*}/g, '={$1}');
  
  // Clean up extra whitespace
  fixed = fixed.replace(/\n\s*\n\s*\n/g, '\n\n');
  
  return fixed;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixSpecificErrors(content);
    
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