#!/usr/bin/env node

/**
 * Critical syntax fix script for the most important files
 */

const fs = require('fs');
const path = require('path');

// Critical files that need immediate fixing
const criticalFiles = [
  'pages/about.tsx',
  'pages/pricing.tsx', 
  'pages/services.tsx',
  'src/main.tsx',
  'App.tsx',
  'App.test.tsx'
];

// Fix unescaped entities in React components
function fixUnescapedEntities(content) {
  return content
    .replace(/'/g, '&apos;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/&/g, '&amp;');
}

// Fix import statements
function fixImports(content) {
  return content
    .replace(/import\s+([^;]+);/g, 'import $1;')
    .replace(/import\s+([^,]+),\s*([^;]+);/g, 'import $1, $2;')
    .replace(/import\s+{\s*([^}]+)\s*}\s*from\s*['"]([^'"]+)['"];?/g, 'import { $1 } from "$2";');
}

// Fix TypeScript syntax
function fixTypeScript(content) {
  return content
    .replace(/:\s*([^=,;]+)\s*=/g, ': $1 =')
    .replace(/interface\s+([^{]+)\s*{/g, 'interface $1 {')
    .replace(/type\s+([^=]+)\s*=/g, 'type $1 =')
    .replace(/export\s+default\s+([^;]+);/g, 'export default $1;');
}

// Process each critical file
criticalFiles.forEach(filePath => {
  if (fs.existsSync(filePath)) {
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      
      // Apply fixes
      content = fixUnescapedEntities(content);
      content = fixImports(content);
      content = fixTypeScript(content);
      
      // Write back
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath}`);
    } catch (error) {
      console.error(`Error fixing ${filePath}:`, error.message);
    }
  }
});

console.log('Critical syntax fixes completed');