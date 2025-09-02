#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Fix missing types in function parameters
    content = content.replace(/\(key: keyof (\w+), value: \)/g, '(key: keyof $1, value: any)');
    content = content.replace(/\(key: keyof (\w+), value: \)/g, '(key: keyof $1, value: any)');
    
    // Fix malformed useState
    content = content.replace(/useState<>\(null\)/g, 'useState(null)');
    content = content.replace(/useState<>\(null\)/g, 'useState(null)');
    
    // Fix malformed type annotations
    content = content.replace(/:\s*{;/g, ': {');
    content = content.replace(/:\s*};/g, ': };');
    
    // Fix malformed object properties
    content = content.replace(/(\w+)\s*:\s*{;/g, '$1: {');
    content = content.replace(/(\w+)\s*:\s*string\s*;/g, '$1: string;');
    content = content.replace(/(\w+)\s*:\s*number\s*;/g, '$1: number;');
    content = content.replace(/(\w+)\s*:\s*boolean\s*;/g, '$1: boolean;');
    
    // Fix malformed function parameters
    content = content.replace(/\(\s*(\w+)\s*:\s*string\s*\)/g, '($1: string)');
    content = content.replace(/\(\s*(\w+)\s*:\s*number\s*\)/g, '($1: number)');
    content = content.replace(/\(\s*(\w+)\s*:\s*boolean\s*\)/g, '($1: boolean)');
    
    // Fix malformed JSX
    content = content.replace(/<\/([^>]+)>/g, '</$1>');
    
    // Fix specific patterns
    content = content.replace(/:\s*{(\w+)\s*,\s*(\w+)\s*,\s*(\w+)\s*,\s*(\w+)\s*,\s*(\w+)\s*}/g, ': { $1, $2, $3, $4, $5 }');
    content = content.replace(/:\s*{(\w+)\s*,\s*(\w+)\s*,\s*(\w+)\s*,\s*(\w+)\s*}/g, ': { $1, $2, $3, $4 }');
    content = content.replace(/:\s*{(\w+)\s*,\s*(\w+)\s*,\s*(\w+)\s*}/g, ': { $1, $2, $3 }');
    content = content.replace(/:\s*{(\w+)\s*,\s*(\w+)\s*}/g, ': { $1, $2 }');
    
    // Fix malformed interface declarations
    content = content.replace(/interface\s+(\w+)\s*{;/g, 'interface $1 {');
    content = content.replace(/interface\s+(\w+)\s*{/g, 'interface $1 {');
    
    // Fix malformed type declarations
    content = content.replace(/type\s+(\w+)\s*=\s*{;/g, 'type $1 = {');
    content = content.replace(/type\s+(\w+)\s*=\s*{/g, 'type $1 = {');
    
    // Fix malformed function declarations
    content = content.replace(/export function (\w+)\(\.\.\.args: \[\]\): \{/g, 'export function $1() {');
    content = content.replace(/export function (\w+)\(\.\.\.args: \[\]\): \{/g, 'export function $1() {');
    
    // Fix malformed const declarations
    content = content.replace(/const\s+(\w+)\s*:\s*(\w+)\s*=\s*{;/g, 'const $1: $2 = {');
    content = content.replace(/const\s+(\w+)\s*:\s*(\w+)\s*=\s*{/g, 'const $1: $2 = {');
    
    // Fix malformed object literals
    content = content.replace(/{\s*(\w+)\s*:\s*([^,}]+)\s*}/g, '{ $1: $2 }');
    content = content.replace(/{\s*(\w+)\s*:\s*([^,}]+)\s*,/g, '{ $1: $2,');
    
    // Write back if changed
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

function getAllFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files.push(...getAllFiles(fullPath));
    } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Main execution
const srcDir = path.join(process.cwd(), 'src');
if (fs.existsSync(srcDir)) {
  const files = getAllFiles(srcDir);
  let fixedCount = 0;
  
  for (const file of files) {
    if (fixFile(file)) {
      fixedCount++;
    }
  }
  
  console.log(`\nFixed ${fixedCount} files.`);
} else {
  console.log('src directory not found');
}