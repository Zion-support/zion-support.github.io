#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function fixSyntaxErrors(filePath) {
  console.log(`Fixing syntax errors in ${filePath}`);
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Fix common syntax errors
  const fixes = [
    // Fix object property syntax errors
    { pattern: /(\w+):\s*s:\s*/g, replacement: '$1: ' },
    { pattern: /(\w+):\s*n:\s*/g, replacement: '$1: ' },
    { pattern: /(\w+):\s*t:\s*/g, replacement: '$1: ' },
    { pattern: /(\w+):\s*y:\s*/g, replacement: '$1: ' },
    { pattern: /(\w+):\s*g:\s*/g, replacement: '$1: ' },
    
    // Fix variable name syntax errors
    { pattern: /succes:\s*s:\s*/g, replacement: 'success: ' },
    { pattern: /duratio:\s*n:\s*/g, replacement: 'duration: ' },
    { pattern: /error:\s*s:\s*/g, replacement: 'errors: ' },
    { pattern: /warning:\s*s:\s*/g, replacement: 'warnings: ' },
    { pattern: /outpu:\s*t:\s*/g, replacement: 'output: ' },
    { pattern: /erro:\s*r:\s*/g, replacement: 'error: ' },
    { pattern: /faile:\s*d:\s*/g, replacement: 'failed: ' },
    { pattern: /Runnin:\s*g:\s*/g, replacement: 'Running: ' },
    { pattern: /cw:\s*d:\s*/g, replacement: 'cwd: ' },
    { pattern: /stdi:\s*o:\s*/g, replacement: 'stdio: ' },
    { pattern: /encodin:\s*g:\s*/g, replacement: 'encoding: ' },
    
    // Fix string syntax errors
    { pattern: /"no-unused-var:\s*s:\s*error"/g, replacement: '"no-unused-vars: error"' },
    { pattern: /"no-unused-import:\s*s:\s*error"/g, replacement: '"no-unused-imports: error"' },
    { pattern: /"prefer-cons:\s*t:\s*error"/g, replacement: '"prefer-const: error"' },
    { pattern: /"no-va:\s*r:\s*error"/g, replacement: '"no-var: error"' },
  ];
  
  fixes.forEach(fix => {
    content = content.replace(fix.pattern, fix.replacement);
  });
  
  fs.writeFileSync(filePath, content);
  console.log(`✅ Fixed syntax errors in ${filePath}`);
}

// Fix the enhanced automation suite
fixSyntaxErrors('/workspace/enhanced-automation-suite.cjs');

console.log('🎉 All syntax errors fixed!');