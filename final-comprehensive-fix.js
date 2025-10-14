#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to fix all remaining syntax errors
function fixAllErrors(content) {
  let fixed = content;
  
  // Remove 'use client' directives that are causing issues
  fixed = fixed.replace(/'use client'\s*\n/g, '');
  
  // Fix malformed JSX attributes
  fixed = fixed.replace(/className="([^"]*);\s*"/g, 'className="$1"');
  
  // Fix missing closing tags by analyzing structure
  const lines = fixed.split('\n');
  const stack = [];
  const result = [];
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();
    
    // Check for opening tags
    const openTagMatch = trimmed.match(/<(\w+)(?:\s[^>]*)?(?:>|$)/);
    if (openTagMatch && !trimmed.includes('/>')) {
      const tagName = openTagMatch[1];
      // Skip self-closing tags and void elements
      if (!['img', 'br', 'hr', 'input', 'meta', 'link', 'area', 'base', 'col', 'embed', 'source', 'track', 'wbr'].includes(tagName)) {
        stack.push({ tag: tagName, line: i, indent: line.match(/^(\s*)/)[1] });
      }
    }
    
    // Check for closing tags
    const closeTagMatch = trimmed.match(/<\/(\w+)>/);
    if (closeTagMatch) {
      const tagName = closeTagMatch[1];
      // Find matching opening tag
      for (let j = stack.length - 1; j >= 0; j--) {
        if (stack[j].tag === tagName) {
          stack.splice(j, 1);
          break;
        }
      }
    }
    
    result.push(line);
  }
  
  // Add missing closing tags
  while (stack.length > 0) {
    const { tag, indent } = stack.pop();
    result.push(`${indent}</${tag}>`);
  }
  
  fixed = result.join('\n');
  
  // Fix specific common issues
  fixed = fixed.replace(/(<[^>]+>)\s*([^<]+)\s*;\s*(<\/[^>]+>)/g, '$1$2$3');
  fixed = fixed.replace(/(<[^>]+>)\s*;\s*(<\/[^>]+>)/g, '$1$2');
  
  // Fix malformed object properties
  fixed = fixed.replace(/(\w+):\s*([^,}]+)\s*(\n\s*)(\w+):/g, '$1: $2,\n$3$4:');
  
  // Fix missing commas in arrays
  fixed = fixed.replace(/(\w+)\s*(\n\s*)(\w+):/g, '$1,\n$2$3:');
  
  // Fix JSX fragments
  fixed = fixed.replace(/<>\s*<\/>/g, '<></>');
  
  // Fix missing closing parentheses
  fixed = fixed.replace(/(<[^>]+>)\s*([^<]+)\s*;\s*(<\/[^>]+>)/g, '$1$2$3');
  
  // Fix duplicate content (remove everything after the first closing brace of a function)
  const functionMatch = fixed.match(/(export\s+default\s+function[^{]+\{[^}]+})/s);
  if (functionMatch) {
    const functionEnd = fixed.indexOf('}', functionMatch.index + functionMatch[0].length);
    if (functionEnd !== -1) {
      const afterFunction = fixed.substring(functionEnd + 1);
      if (afterFunction.trim().length > 0) {
        // Keep only the function and remove everything after
        fixed = fixed.substring(0, functionEnd + 1) + '\n}';
      }
    }
  }
  
  // Fix malformed grid classes
  fixed = fixed.replace(/grid md:\s*grid-cols/g, 'grid md:grid-cols');
  
  // Fix missing semicolons in object properties
  fixed = fixed.replace(/(\w+):\s*([^,}]+)\s*(\n\s*)(\w+):/g, '$1: $2,\n$3$4:');
  
  // Fix malformed JSX fragments
  fixed = fixed.replace(/<>\s*<\/>/g, '<></>');
  
  // Fix missing closing braces
  const openBraces = (fixed.match(/\{/g) || []).length;
  const closeBraces = (fixed.match(/\}/g) || []).length;
  if (openBraces > closeBraces) {
    fixed += '\n}'.repeat(openBraces - closeBraces);
  }
  
  // Fix specific patterns that cause parsing errors
  fixed = fixed.replace(/(\w+):\s*([^,}]+)\s*(\n\s*)(\w+):/g, '$1: $2,\n$3$4:');
  fixed = fixed.replace(/(\w+)\s*(\n\s*)(\w+):/g, '$1,\n$2$3:');
  
  return fixed;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixAllErrors(content);
    
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
    'app/**/*.ts',
    '*.tsx',
    '*.ts'
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
  
  console.log(`\nTotal files fixed: ${totalFixed}`);
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { fixAllErrors, processFile };