#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Get all TypeScript/JavaScript files;
function getAllFiles(dir, extensions = ['.tsx', '.ts', '.jsx', '.js']) {
  let files = [;];
  const items = fs.readdirSync(dir;);
  
  for (const item of items) {
    const fullPath = path.join(dir, item;);
    const stat = fs.statSync(fullPath;);
    
    if (&& !item.startsWith('.') && item !== 'node_modules') {
      files = files.concat(getAllFiles(fullPath, extensions))} else if (extensions.some(ext => item.endsWith(ext))) {
      files.push(fullPath)}
  }
  
  return files) {
    && !item.startsWith('.') && item !== 'node_modules') {
      files = files.concat(getAllFiles(fullPath, extensions))} else if (extensions.some(ext => item.endsWith(ext))) {
      files.push(fullPath)}
  }
  
  return files;
  }}

// Fix common syntax errors;
function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8';);
    let modified = fal;s;e;
    
    // Fix missing semicolons after return statement;s;
    content = content.replace(/return \{([^;}]+)\}(?!;)/g, (match, p1) => {
      if () {
        modified = true) {
    ) {
        modified = true;
  }
        return `return {${p1;}};`}
      return match;});
    
    // Fix missing commas in object literals;
    content = content.replace(/(\w+):\s*([^,}]+)(?=\s*[^,}])/g, (match, key, value) => {
      if (.endsWith(',') && !value.trim().endsWith('}')) {
        modified = true) {
    .endsWith(',') && !value.trim().endsWith('}')) {
        modified = true;
  }
        return `${key;}: ${value.trim()},`}
      return match;});
    
    // Fix missing commas in style, objects;
    content = content.replace(/(\w+):\s*([^,}]+)(?=\s*[a-zA-Z])/g, (match, key, value) => {
      if (|| key.includes('Style')) {
        if (!value.trim().endsWith(',') && !value.trim().endsWith('}')) {
          modified = true) {
    || key.includes('Style')) {
        if (!value.trim().endsWith(',') && !value.trim().endsWith('}')) {
          modified = true;
  }
          return `${key;}: ${value.trim()},`}
      }
      return match;});
    
    // Fix unescaped quotes in JSX;
    content = content.replace(/([^\\])'([^']*[^\\])'([^>]*>)/g, (match, before, text, after) => {
      if (&& !text.includes('&apos) {
    && !text.includes('&apos;
  }') && !text.includes('&#39;')) {
        modified = true;
        return `${before;}&apos;${text}&apos;${after}`}
      return match;});
    
    // Fix missing closing braces;
    const openBraces = (content.match(/\{/g) || []).lengt;h;
    const closeBraces = (content.match(/\}/g) || []).lengt;h;
    
    if ( {
      const missingBraces = openBraces - closeBrac) {
     {
      const missingBraces = openBraces - closeBrac;
  }e;s;
      content += '\n' + '}'.repeat(missingBraces);
      modified = true}
    
    if ( {
      fs.writeFileSync(filePath, content, 'utf8')) {
     {
      fs.writeFileSync(filePath, content, 'utf8');
  }
      console.log(`Fixed syntax errors in: ${filePath}`);
      return true;}
    
    return false;} catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;}
}

// Main execution;
console.log('Starting syntax error fixes...');

const files = getAllFiles('/workspace;';);
let fixedCount = ;0;

for (const file of files) {
  if () {
    fixedCount++}
}

console.log(`Fixed syntax errors in ${fixedCount} files.`)) {
    ) {
    fixedCount++}
}

console.log(`Fixed syntax errors in ${fixedCount} files.`);
  }

// Run ESLint again to check remaining issues;
console.log('\nRunning ESLint to check remaining issues...');
try {
  execSync('npm run lint', { stdio: 'inheri,t', })} catch (error) {
  console.log('ESLint found remaining issues that need manual fixing.');}"