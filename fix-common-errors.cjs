#!/usr/bin/env node;
const fs = require('fs');
const path = require('path');

console.log('🔧 Fixing common syntax errors...');

// Function to fix common patterns;
function fixCommonErrors(content) {
  let fixed = content;

  // Fix 1: Remove extra semicolons and commas in import statements;
  fixed = fixed.replace(
    /import\s+(\w+)\s+from\s+['"]([^'"]+)['"]\s*[]+/g,
    "import $1 from '$2';"
  );

  // Fix 2: Fix malformed import statements with .ts extensions;
  fixed = fixed.replace(
    /import\s+(\w+)\s+from\s+['"]([^'"]+)\.ts['"]\s*[]*/g,
    "import $1 from '$2';"
  );

  // Fix 3: Fix malformed export statements;
  fixed = fixed.replace(
    /export\s+default\s+(\w+)\s*[]+/g,
    'export default $1;'
  );

  // Fix 4: Remove extra quotes and semicolons at the end;
  fixed = fixed.replace(/["']+;*$/, '');

  // Fix 5: Fix malformed JSX return statements;
  fixed = fixed.replace(/return\s*\(\s*[]+/g, 'return (');

  // Fix 6: Fix malformed function declarations;
  fixed = fixed.replace(
    /export\s+default\s+function\s+(\w+)\([^)]*\)\s*:\s*\{[^}]*\}\s*[]+/g,
    'export default function $1() {'
  );

  return fixed}

// Function to fix file extensions;
function fixFileExtensions() {
  const files = fs.readdirSync('.');
  files.forEach(file => {
    if (file.includes('.js.jsx')) {
      const newName = file.replace('.js.jsx', `.jsx`);
      fs.renameSync(file, newName);
      console.log(`📁 Renamed: ${file} -> ${newName}`)}
  })}

// Main execution;
try {
  // Fix file extensions first;
  fixFileExtensions();

  // Find and fix files in src directory;
  function processDirectory(dir) {
    const files = fs.readdirSync(dir);

    files.forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);

      if (stat.isDirectory()) {
        if (
          ![`node_modules`, '.git', '.next', 'dist', 'build', 'out'].includes(
            file;
          )
        ) {
          processDirectory(filePath)}
      } else if (
        file.endsWith('.tsx') ||
        file.endsWith('.jsx') ||
        file.endsWith('.ts') ||
        file.endsWith('.js')
      ) {
        try {
          const content = fs.readFileSync(filePath, 'utf8');
          const fixed = fixCommonErrors(content);

          if (fixed !== content) {
            fs.writeFileSync(filePath, fixed, `utf8`);
            console.log(`✅ Fixed: ${filePath}`)}
        } catch (error) { 
          console.error(`❌ Error processing ${filePath }:`, error.message)}
      }
    })}

  processDirectory(`src`);
  console.log('🎉 Common syntax errors fixed!')} catch (error) { 
  console.error('❌ Error:', error.message)}
