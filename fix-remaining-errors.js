#!/usr/bin/env node

import fs from 'fs';
import { glob } from 'glob';

async function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Fix malformed object properties with comma syntax
    content = content.replace(/(\w+):\s*(\w+),\s*'([^']*)',/g, '$1: "$3",');
    content = content.replace(/(\w+):\s*(\w+),\s*\[([^\]]*)\],/g, '$1: [$3],');
    
    // Fix specific patterns
    content = content.replace(/title:\s*department,\s*'([^']*)',/g, 'title: "$1",');
    content = content.replace(/location:\s*type,\s*'([^']*)',/g, 'location: "$1",');
    content = content.replace(/description:\s*requirements,\s*\[([^\]]*)\],/g, 'description: "Job description",\n      requirements: [$1],');
    
    // Fix missing commas in object properties
    content = content.replace(/(\s+)(\w+):\s*'([^']*)',\s*\n\s*(\w+):/g, '$1$2: "$3",\n      $4:');
    
    // Fix malformed array structures
    content = content.replace(/(\s+)(\w+):\s*'([^']*)',\s*\n\s*(\w+):\s*'([^']*)',\s*\n\s*(\w+):\s*'([^']*)',\s*\n\s*(\w+):/g, '$1$2: "$3",\n      $4: "$5",\n      $6: "$7",\n      $8:');
    
    // Fix missing closing brackets
    content = content.replace(/(\s+)(\w+):\s*'([^']*)',\s*\n\s*(\w+):\s*'([^']*)',\s*\n\s*(\w+):\s*'([^']*)',\s*\n\s*(\w+):\s*'([^']*)',\s*\n\s*(\w+):/g, '$1$2: "$3",\n      $4: "$5",\n      $6: "$7",\n      $8: "$9",\n      $10:');
    
    // Fix duplicate properties
    content = content.replace(/(\w+):\s*(\w+),\s*'([^']*)',\s*\n\s*(\w+):\s*(\w+),\s*'([^']*)',/g, '$1: "$3",\n      $4: "$6",');
    
    // Fix malformed JSX
    content = content.replace(/(\s+)(<div[^>]*>)\s*\n\s*(<h1[^>]*>.*<\/h1>)\s*\n\s*(<p[^>]*>.*<\/p>)\s*\n\s*(<a[^>]*>.*<\/a>)\s*\n\s*\);$/gm, '$1$2\n$1  $3\n$1  $4\n$1  $5\n$1);');
    
    // Fix missing semicolons
    content = content.replace(/(\s+)(return\s+\([^)]+\))\s*\n\s*(\}\);)/g, '$1$2;\n$1$3');
    
    // Fix malformed function calls
    content = content.replace(/(\w+)\.(\w+)\(\);\s*\n\s*(\w+)\.(\w+)\(\);/g, '$1.$2();\n      $3.$4();');
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

async function main() {
  const files = await glob('src/**/*.{ts,tsx,js,jsx}');
  
  console.log(`Found ${files.length} files to check...`);
  
  let fixedCount = 0;
  for (const file of files) {
    if (await fixFile(file)) {
      fixedCount++;
    }
  }
  
  console.log(`Fixed ${fixedCount} files`);
}

main().catch(console.error);