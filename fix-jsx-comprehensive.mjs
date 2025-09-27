#!/usr/bin/env node

import { readFileSync, writeFileSync } from 'fs';
import { glob } from 'glob';

console.log('🔧 Fixing comprehensive JSX syntax errors...');

const files = await glob('pages/*.tsx');

for (const file of files) {
  console.log(`Processing ${file}...`);
  
  let content = readFileSync(file, 'utf8');
  let originalContent = content;
  
  // Fix missing commas in destructuring
  content = content.replace(/(\w+)\s+(\w+)\s*=\s*useState/g, '$1, $2 = useState');
  content = content.replace(/(\w+)\s+(\w+)\s*=\s*useMemo/g, '$1, $2 = useMemo');
  content = content.replace(/(\w+)\s+(\w+)\s*=\s*useCallback/g, '$1, $2 = useCallback');
  
  // Fix missing commas in function parameters
  content = content.replace(/\(([^)]+)\s+([^)]+)\)\s*=>/g, '($1, $2) =>');
  
  // Fix missing commas in object properties
  content = content.replace(/(\w+):\s*'([^']+)'\s+(\w+):/g, '$1: \'$2\', $3:');
  content = content.replace(/(\w+):\s*"([^"]+)"\s+(\w+):/g, '$1: "$2", $3:');
  
  // Fix missing commas in array methods
  content = content.replace(/Array\.from\([^,]+,\s*\(([^)]+)\s+([^)]+)\)/g, 'Array.from($1, ($2, $3)');
  
  // Fix missing commas in setTimeout
  content = content.replace(/setTimeout\(([^,]+)\s+(\d+)\)/g, 'setTimeout($1, $2)');
  
  // Fix missing commas in useMemo dependencies
  content = content.replace(/\[([^]]+)\s+([^]]+)\]/g, '[$1, $2]');
  
  // Fix return statement structure
  content = content.replace(/^(\s*)return\s*\(\s*$/gm, '\treturn (');
  content = content.replace(/^(\s*)<>$/gm, '\t\t<>');
  content = content.replace(/^(\s*)<\/>$/gm, '\t\t</>');
  
  // Fix JSX element indentation
  content = content.replace(/^(\s*)<Head>$/gm, '\t\t\t<Head>');
  content = content.replace(/^(\s*)<\/Head>$/gm, '\t\t\t</Head>');
  content = content.replace(/^(\s*)<div/gm, '\t\t\t<div');
  content = content.replace(/^(\s*)<nav/gm, '\t\t\t\t<nav');
  content = content.replace(/^(\s*)<Link/gm, '\t\t\t\t\t<Link');
  
  if (content !== originalContent) {
    writeFileSync(file, content);
    console.log(`✅ Fixed ${file}`);
  } else {
    console.log(`ℹ️  No changes needed for ${file}`);
  }
}

console.log('🎉 Comprehensive JSX syntax fixes completed!');