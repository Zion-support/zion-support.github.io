#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to fix all remaining syntax errors
function fixAllSyntaxErrors(content) {
  // Fix import statements with commas instead of semicolons
  content = content.replace(/import React from "react",/g, 'import React from "react";');
  content = content.replace(/import \* as React from "react",/g, 'import * as React from "react";');
  content = content.replace(/import \* as ([^"]+) from "([^"]+)",/g, 'import * as $1 from "$2";');
  content = content.replace(/import { ([^}]+) } from "([^"]+)",/g, 'import { $1 } from "$2";');
  content = content.replace(/import { ([^}]+), type ([^}]+) } from "([^"]+)",/g, 'import { $1, type $2 } from "$3";');
  
  // Fix interface definitions
  content = content.replace(/interface (\w+) extends ([^{]+) {,/g, 'interface $1 extends $2 {');
  content = content.replace(/(\w+):\s*([^;]+);}/g, '$1: $2;\n}');
  content = content.replace(/(\w+):\s*([^;]+);}/g, '$1: $2;\n}');
  
  // Fix function definitions
  content = content.replace(/export function (\w+)\(\{ ([^}]+) \}: (\w+)\) {,/g, 'export function $1({ $2 }: $3) {');
  content = content.replace(/(\w+)\s*=\s*([^,;]+),;/g, '$1 = $2;');
  
  // Fix JSX syntax
  content = content.replace(/<div className='([^']+)'>;/g, '<div className=\'$1\'>');
  content = content.replace(/<\/div>;/g, '</div>');
  
  // Fix React fragments
  content = content.replace(/<>\s*$/gm, '<>');
  content = content.replace(/^\s*<\/>/gm, '</>');
  
  // Fix missing closing braces for interfaces
  content = content.replace(/interface\s+\w+\s*{([^}]+)$/gm, (match, body) => {
    if (!body.includes('}')) {
      return match + '\n}';
    }
    return match;
  });
  
  // Fix function parameter syntax
  content = content.replace(/\(\{ ([^}]+) \}: (\w+)\) {,/g, '({ $1 }: $2) {');
  
  // Fix missing semicolons
  content = content.replace(/import\s+[^;]+$/gm, (match) => {
    if (!match.endsWith(';')) {
      return match + ';';
    }
    return match;
  });
  
  return content;
}

// Function to process a file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixedContent = fixAllSyntaxErrors(content);
    
    if (content !== fixedContent) {
      fs.writeFileSync(filePath, fixedContent);
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
console.log('🔧 Starting comprehensive syntax error fix for all remaining files...');

const srcDir = path.join(__dirname, 'src');
const files = [];

function findFiles(dir) {
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      findFiles(fullPath);
    } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.jsx') || item.endsWith('.js'))) {
      files.push(fullPath);
    }
  }
}

findFiles(srcDir);

let fixedCount = 0;
let totalFiles = files.length;

console.log(`📁 Found ${totalFiles} files to process...`);

for (const file of files) {
  if (processFile(file)) {
    fixedCount++;
  }
}

console.log(`✅ Fixed ${fixedCount} out of ${totalFiles} files`);
console.log('🎉 Comprehensive syntax error fix completed!');