#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to fix merge conflict markers
function fixMergeConflicts(content) {
  // Remove merge conflict markers and keep the HEAD version
  return content
// Merge conflict resolved - keeping HEAD version
    .replace(/=======.*?\n<<<<<<< [^\n]+\n?/gs, '')
    .replace(/>>>>>>> [^\n]+\n?/g, '');
}

// Function to fix common JSX syntax errors
function fixJSXSyntax(content) {
  return content
    // Fix missing closing tags
    .replace(/<div([^>]*)>(?!.*<\/div>)/gs, (match, attrs) => {
      const lines = match.split('\n');
      const lastLine = lines[lines.length - 1];
      if (lastLine.trim() && !lastLine.includes('</div>')) {
        return match + '\n    </div>';
      }
      return match;
    })
    // Fix missing semicolons
    .replace(/([^;}])\n(\s*[a-zA-Z])/g, '$1;\n$2')
    // Fix missing commas in objects
    .replace(/(\w+):\s*([^,}\n]+)\n(\s*[a-zA-Z])/g, '$1: $2,\n$3')
    // Fix missing commas in arrays
    .replace(/([^,}\]])\n(\s*[a-zA-Z])/g, '$1,\n$2')
    // Fix empty interfaces
    .replace(/interface\s+\w+\s*{\s*}/g, 'interface $1 {\n  [key: string]: any;\n}')
    // Fix malformed JSX fragments
    .replace(/<>([^<]*?)<\/>/gs, '<React.Fragment>$1</React.Fragment>')
    // Fix missing React import
    .replace(/^import\s+React[^;]*;$/m, 'import React from \'react\';');
}

// Function to fix TypeScript syntax errors
function fixTypeScriptSyntax(content) {
  return content
    // Fix missing type annotations
    .replace(/const\s+(\w+)\s*=\s*\([^)]*\)\s*=>/g, 'const $1 = ($2: any) =>')
    // Fix missing return types
    .replace(/function\s+(\w+)\s*\([^)]*\)\s*{/g, 'function $1($2: any): any {')
    // Fix missing property types
    .replace(/(\w+):\s*([^:;,\n]+)(?![;,\n])/g, '$1: $2')
    // Fix missing semicolons after type declarations
    .replace(/(\w+:\s*[^;]+)(?![;,\n])/g, '$1;');
}

// Function to fix common parsing errors
function fixParsingErrors(content) {
  return content
    // Fix missing closing braces
    .replace(/(\w+)\s*{\s*([^}]*?)\n(\s*[a-zA-Z])/gs, (match, name, body, next) => {
      if (!body.includes('}')) {
        return `${name} {\n  ${body}\n}\n${next}`;
      }
      return match;
    })
    // Fix missing closing parentheses
    .replace(/(\w+)\s*\(\s*([^)]*?)\n(\s*[a-zA-Z])/gs, (match, name, params, next) => {
      if (!params.includes(')')) {
        return `${name}(\n  ${params}\n)\n${next}`;
      }
      return match;
    })
    // Fix missing closing brackets
    .replace(/(\w+)\s*\[\s*([^\]]*?)\n(\s*[a-zA-Z])/gs, (match, name, content, next) => {
      if (!content.includes(']')) {
        return `${name}[\n  ${content}\n]\n${next}`;
      }
      return match;
    });
}

// Main function to process files
function processFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Apply fixes
    content = fixMergeConflicts(content);
    content = fixJSXSyntax(content);
    content = fixTypeScriptSyntax(content);
    content = fixParsingErrors(content);
    
    // Only write if content changed
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Get all TypeScript and JavaScript files
const patterns = [
  'app/**/*.tsx',
  'app/**/*.ts',
  'app/**/*.js',
  'app/**/*.jsx'
];

let totalFiles = 0;
let fixedFiles = 0;

for (const pattern of patterns) {
  const files = await glob(pattern, { cwd: process.cwd() });
  totalFiles += files.length;
  
  for (const file of files) {
    if (processFile(file)) {
      fixedFiles++;
    }
  }
}

console.log(`\nProcessed ${totalFiles} files, fixed ${fixedFiles} files.`);