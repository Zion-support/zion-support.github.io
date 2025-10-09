#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix React.memo syntax errors
    if (content.includes('React.memo(() => {') && !content.includes('React.memo(() => {')) {
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

console.log('Fixing syntax errors...');

files.forEach(file => {
  if (fixSyntaxErrors(file)) {
    fixedCount++;
  }
});

console.log(`\nFixed ${fixedCount} files.`);
console.log('Syntax error fixes completed!');