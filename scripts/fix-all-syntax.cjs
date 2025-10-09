#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

function fixAllSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix React.memo syntax errors - remove React.memo wrapper
    if (content.includes('React.memo(() => {')) {
      content = content.replace(/const (\w+): React\.FC = React\.memo\(\(\) => \{/g, 'const $1: React.FC = () => {');
      modified = true;
    }
    
    // Fix missing React imports
    if (content.includes('useState') && !content.includes("import React") && content.includes('const ') && content.includes(': React.FC')) {
      content = content.replace(/('use client';\n)/, '$1import React, { useState, useEffect } from \'react\';\n');
      modified = true;
    }
    
    // Fix missing useState imports
    if (content.includes('useState') && !content.includes('useState') && content.includes('import React')) {
      content = content.replace(/import React from 'react';/, 'import React, { useState, useEffect } from \'react\';');
      modified = true;
    }
    
    // Fix missing useEffect imports
    if (content.includes('useEffect') && !content.includes('useEffect') && content.includes('import React')) {
      content = content.replace(/import React, { useState } from 'react';/, 'import React, { useState, useEffect } from \'react\';');
      modified = true;
    }
    
    // Fix any remaining React.memo issues
    if (content.includes('React.memo')) {
      content = content.replace(/React\.memo\(\(\) => \{/g, '() => {');
      modified = true;
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content);
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
const files = glob.sync('src/**/*.{ts,tsx,js,jsx}', {
  ignore: ['src/**/*.d.ts', 'node_modules/**']
});

let fixedCount = 0;

console.log('Fixing all syntax errors...');

files.forEach(file => {
  if (fixAllSyntaxErrors(file)) {
    fixedCount++;
  }
});

console.log(`\nFixed ${fixedCount} files.`);
console.log('All syntax error fixes completed!');