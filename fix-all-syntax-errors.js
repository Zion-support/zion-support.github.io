#!/usr/bin/env node

import fs from 'fs';
import { glob } from 'glob';

async function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Fix imports inside function declarations
    content = content.replace(
      /const\s+(\w+):\s*React\.FC\s*=\s*\(\)\s*=>\s*{\s*\n\s*import\s+([^;]+);/g,
      'import $2;\n\nconst $1: React.FC = () => {'
    );
    
    // Fix duplicate function declarations
    content = content.replace(
      /const\s+(\w+):\s*React\.FC\s*=\s*\(\)\s*=>\s*{\s*\n\s*const\s+(\w+):\s*React\.FC\s*=\s*\(\)\s*=>\s*{/g,
      'const $1: React.FC = () => {'
    );
    
    // Fix malformed object properties
    content = content.replace(/title:\s*description,/g, 'title: "Service",');
    content = content.replace(/\$4:\s*'([^']*)',/g, 'description: "$1",');
    content = content.replace(/price:\s*(\w+),\s*'([^']*)',/g, '$1: "$2",');
    content = content.replace(/price:\s*benefits,\s*\[([^\]]*)\],/g, 'benefits: [$1],');
    
    // Fix missing commas in arrays
    content = content.replace(/(\s+)(\w+):\s*'([^']*)',\s*\n\s*(\w+):/g, '$1$2: "$3",\n      $4:');
    
    // Fix missing closing brackets
    content = content.replace(/(\s+)(\w+):\s*'([^']*)',\s*\n\s*(\w+):\s*'([^']*)',\s*\n\s*(\w+):\s*'([^']*)',\s*\n\s*(\w+):/g, '$1$2: "$3",\n      $4: "$5",\n      $6: "$7",\n      $8:');
    
    // Fix duplicate export statements
    content = content.replace(/export\s+default\s+(\w+);\s*\n\s*export\s+default\s+\w+;/g, 'export default $1;');
    
    // Fix missing closing div tags
    content = content.replace(
      /(\s+)(<div[^>]*>)\s*\n\s*(<h1[^>]*>.*<\/h1>)\s*\n\s*(<p[^>]*>.*<\/p>)\s*\n\s*(<a[^>]*>.*<\/a>)\s*\n\s*\);$/gm,
      '$1$2\n$1  $3\n$1  $4\n$1  $5\n$1);'
    );
    
    // Fix malformed JSX
    content = content.replace(
      /(\s+)(<div[^>]*>)\s*\n\s*(<div[^>]*>)\s*\n\s*(<h1[^>]*>.*<\/h1>)\s*\n\s*(<p[^>]*>.*<\/p>)\s*\n\s*(<a[^>]*>.*<\/a>)\s*\n\s*\);$/gm,
      '$1$2\n$1  $3\n$1    $4\n$1    $5\n$1    $6\n$1  $7\n$1);'
    );
    
    // Fix missing semicolons
    content = content.replace(/(\s+)(return\s+\([^)]+\))\s*\n\s*(\}\);)/g, '$1$2;\n$1$3');
    
    // Fix malformed array structures
    content = content.replace(
      /(\s+)(\w+):\s*'([^']*)',\s*\n\s*(\w+):\s*'([^']*)',\s*\n\s*(\w+):\s*'([^']*)',\s*\n\s*(\w+):\s*'([^']*)',\s*\n\s*(\w+):/g,
      '$1$2: "$3",\n      $4: "$5",\n      $6: "$7",\n      $8: "$9",\n      $10:'
    );
    
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