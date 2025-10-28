#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to fix common TypeScript/JSX syntax errors
function fixSyntaxErrors(content) {
  // Fix missing React import
  if ((content.includes('<') && content.includes('>')) && !content.includes("import React")) {
    content = "import React from 'react';\n" + content;
  }
  
  // Fix missing semicolons after imports
  content = content.replace(/(import [^;]+)(\n)/g, '$1;$2');
  
  // Fix malformed JSX attributes
  content = content.replace(/className\s*=\s*\{([^}]+)\}\s*$/gm, 'className={$1}');
  
  // Fix missing closing tags
  content = content.replace(/<(\w+)([^>]*)\s*$/gm, '<$1$2>');
  
  // Fix unterminated strings
  content = content.replace(/className\s*=\s*"([^"]*)$/gm, 'className="$1"');
  content = content.replace(/className\s*=\s*'([^']*)$/gm, "className='$1'");
  
  // Fix missing closing parentheses in function calls
  content = content.replace(/(\w+)\s*\(\s*([^)]*)\s*$/gm, '$1($2)');
  
  // Fix missing closing braces
  content = content.replace(/(\w+)\s*\{\s*([^}]*)\s*$/gm, '$1{$2}');
  
  // Fix JSX expressions
  content = content.replace(/\{\s*([^}]*)\s*$/gm, '{$1}');
  
  return content;
}

// Function to fix specific component patterns
function fixComponentPatterns(content, filePath) {
  // Fix missing export default
  if (content.includes('function ') && !content.includes('export default') && !content.includes('export ')) {
    content = content.replace(/function (\w+)/g, 'export default function $1');
  }
  
  // Fix missing return statements in components
  if (content.includes('function ') && content.includes('{') && !content.includes('return')) {
    content = content.replace(/(function \w+[^{]*\{)/g, '$1\n  return null;');
  }
  
  // Fix missing closing JSX tags
  content = content.replace(/<(\w+)([^>]*)\s*$/gm, '<$1$2>');
  
  // Fix malformed JSX attributes
  content = content.replace(/className\s*=\s*\{([^}]+)\}\s*$/gm, 'className={$1}');
  
  return content;
}

// Function to fix specific file issues
function fixFileSpecificIssues(content, filePath) {
  // Fix specific patterns based on file name
  if (filePath.includes('AccessibilityEnhancer')) {
    content = content.replace(/import\s*{\s*([^}]+)\s*}\s*from\s*['"]([^'"]+)['"]\s*$/gm, 'import { $1 } from "$2";');
  }
  
  if (filePath.includes('PerformanceMonitor')) {
    content = content.replace(/interface\s+(\w+)\s*\{([^}]*)\s*$/gm, 'interface $1 {$2}');
  }
  
  if (filePath.includes('LazyImage')) {
    content = content.replace(/<img([^>]*)\s*$/gm, '<img$1 />');
  }
  
  return content;
}

// Function to fix malformed function declarations
function fixFunctionDeclarations(content) {
  // Fix function declarations with missing syntax
  content = content.replace(/function\s+(\w+)\s*\(\s*([^)]*)\s*\)\s*\{([^}]*)\s*$/gm, 'function $1($2) {\n  $3\n}');
  
  // Fix arrow functions
  content = content.replace(/const\s+(\w+)\s*=\s*\(\s*([^)]*)\s*\)\s*=>\s*\{([^}]*)\s*$/gm, 'const $1 = ($2) => {\n  $3\n}');
  
  return content;
}

// Function to fix JSX syntax issues
function fixJSXIssues(content) {
  // Fix self-closing tags
  content = content.replace(/<(\w+)([^>]*)\s*$/gm, '<$1$2 />');
  
  // Fix missing closing tags
  content = content.replace(/<(\w+)([^>]*)>\s*$/gm, '<$1$2></$1>');
  
  // Fix malformed attributes
  content = content.replace(/className\s*=\s*\{([^}]+)\}\s*$/gm, 'className={$1}');
  
  return content;
}

// Main function to process files
function processFiles() {
  const patterns = [
    'app/**/*.tsx',
    'app/**/*.ts',
    'components/**/*.tsx',
    'components/**/*.ts'
  ];
  
  let processedFiles = 0;
  let errorFiles = 0;
  
  patterns.forEach(pattern => {
    const files = glob.sync(pattern, { cwd: process.cwd() });
    
    files.forEach(file => {
      try {
        const fullPath = path.resolve(file);
        let content = fs.readFileSync(fullPath, 'utf8');
        
        // Skip if file is empty
        if (!content.trim()) {
          return;
        }
        
        const originalContent = content;
        
        // Apply fixes
        content = fixSyntaxErrors(content);
        content = fixComponentPatterns(content, file);
        content = fixFileSpecificIssues(content, file);
        content = fixFunctionDeclarations(content);
        content = fixJSXIssues(content);
        
        // Only write if content changed
        if (content !== originalContent) {
          fs.writeFileSync(fullPath, content, 'utf8');
          console.log(`Fixed: ${file}`);
          processedFiles++;
        }
      } catch (error) {
        console.error(`Error processing ${file}:`, error.message);
        errorFiles++;
      }
    });
  });
  
  console.log(`\nProcessed ${processedFiles} files`);
  console.log(`Errors in ${errorFiles} files`);
}

// Run the script
processFiles();