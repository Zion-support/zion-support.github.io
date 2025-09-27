#!/usr/bin/env node

import { readFileSync, writeFileSync } from 'fs';
import { glob } from 'glob';

console.log('🔧 Fixing JSX syntax errors...');

const files = await glob('pages/*.tsx');

for (const file of files) {
  console.log(`Processing ${file}...`);
  
  let content = readFileSync(file, 'utf8');
  let originalContent = content;
  
  // Fix return statement indentation
  content = content.replace(/^(\s*)return \(\s*$/gm, '\treturn (');
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

console.log('🎉 JSX syntax fixes completed!');