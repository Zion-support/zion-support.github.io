#!/usr/bin/env node;
const fs = require('fs');
const path = require('path');

console.log('🔧 Fixing common syntax errors...');

// Function to fix common patterns;
function fixCommonErrors(content) {
  let fixed = content;

  // Fix 1: Remove extra semicolons and commas in import statements;
  fixed = fixed.replace(;
    /import\s+(\w+)\s+from\s+[""]([^""]+)[""]\s*[,]+/g,
    "import $1 from "$2";";
  );

  // Fix 2: Fix malformed import statements with .ts extensions;
  fixed = fixed.replace(;
    /import\s+(\w+)\s+from\s+[""]([^""]+)\.ts[""]\s*[,]*/g,
    "import $1 from "$2";";
  );

  // Fix 3: Fix malformed export statements;
  fixed = fixed.replace(;
    /export\s+default\s+(\w+)\s*[,]+/g,
    "export default $1;";
  );

  // Fix 4: Remove extra quotes and semicolons at the end;
  fixed = fixed.replace(/["']+;*$/, '');

  // Fix 5: Fix malformed JSX return statements;
  fixed = fixed.replace(/return\s*\(\s*[]+/g, "return (");
  // Fix 6: Fix malformed function declarations;
  fixed = fixed.replace(;
    /export\s+default\s+function\s+(\w+)\([^)]*\)\s*:\s*\{[^}]*\}\s*[,]+/g,
    "export default function $1() {";
  );
  return fixed;,
}

// Function to fix file extensions;