#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to fix import statements
function fixImportStatements(content) {
  // Fix malformed import statements
  // Pattern: import {something}}from 'module' -> import {something} from 'module'
  content = content.replace(/import\s*\{([^}]+)\}\}from\s*['"`]([^'"`]+)['"`]/g, "import {$1} from '$2'");
  
  // Pattern: import {something}from 'module' -> import {something} from 'module'
  content = content.replace(/import\s*\{([^}]+)\}from\s*['"`]([^'"`]+)['"`]/g, "import {$1} from '$2'");
  
  // Pattern: import React, {something}from 'module' -> import React, {something} from 'module'
  content = content.replace(/import\s*([^,]+),\s*\{([^}]+)\}from\s*['"`]([^'"`]+)['"`]/g, "import $1, {$2} from '$3'");
  
  // Pattern: import React from 'module' -> import React from 'module' (fix missing space)
  content = content.replace(/import\s*([^{][^,}]+)from\s*['"`]([^'"`]+)['"`]/g, "import $1 from '$2'");
  
  return content;
}

// Function to fix function declarations
function fixFunctionDeclarations(content) {
  // Fix: const Component: React.FC = () => {, -> const Component: React.FC = () => {
  content = content.replace(/const\s+(\w+):\s*React\.FC\s*=\s*\(\)\s*=>\s*\{,/g, 'const $1: React.FC = () => {');
  
  // Fix: const Component = () => {, -> const Component = () => {
  content = content.replace(/const\s+(\w+)\s*=\s*\(\)\s*=>\s*\{,/g, 'const $1 = () => {');
  
  return content;
}

// Function to remove merge conflict markers
function removeMergeConflicts(content) {
  // Remove merge conflict markers
  content = content.replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+/g, '');
  content = content.replace(/<<<<<<< HEAD[\s\S]*?>>>>>>> [^\n]+/g, '');
  
  return content;
}

// Function to fix JSX syntax
function fixJSXSyntax(content) {
  // Fix extra commas in JSX
  content = content.replace(/,(\s*[<>])/g, '$1');
  
  // Fix malformed JSX fragments
  content = content.replace(/<>(\s*<[^>]+>)/g, '<>$1');
  
  return content;
}

// Main function to process files
function processFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Apply fixes
    content = fixImportStatements(content);
    content = fixFunctionDeclarations(content);
    content = removeMergeConflicts(content);
    content = fixJSXSyntax(content);
    
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

// Find all TypeScript/JavaScript files
const patterns = [
  'app/**/*.tsx',
  'app/**/*.ts',
  'components/**/*.tsx',
  'components/**/*.ts',
  '**/*.tsx',
  '**/*.ts'
];

let totalFixed = 0;

(async () => {
  for (const pattern of patterns) {
    const files = await glob(pattern, { cwd: process.cwd() });
    for (const file of files) {
      if (processFile(file)) {
        totalFixed++;
      }
    }
  }
  
  console.log(`\nTotal files fixed: ${totalFixed}`);
})();