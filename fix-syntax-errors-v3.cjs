const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to fix import statements with duplicate imports
function fixImports(content) {
  // Fix patterns like: import {Target,  BarChart,  Target,  Settings from 'lucide-react'
  content = content.replace(/import\s*\{\s*([^}]+?)\s*\}\s*from\s*['"]([^'"]+)['"];?/g, (match, imports, module) => {
    // Clean up the imports - remove extra spaces, duplicates, and fix formatting
    const cleanImports = imports
      .split(',')
      .map(s => s.trim())
      .filter(s => s && s.length > 0)
      .filter((value, index, self) => self.indexOf(value) === index); // Remove duplicates
    
    return `import { ${cleanImports.join(', ')} } from '${module}';`;
  });

  return content;
}

// Function to fix duplicate function declarations
function fixDuplicateFunctions(content) {
  // Fix patterns like: const AICRMPage: React.FC = () => { ... } const AiCrmPage: React.FC = () => { ... }
  content = content.replace(/(const\s+(\w+):\s*React\.FC\s*=\s*\(\)\s*=>\s*\{[^}]*\})\s*(const\s+\2:\s*React\.FC\s*=\s*\(\)\s*=>\s*\{[^}]*\})/g, (match, firstFunc, name) => {
    // Keep only the first function declaration
    return firstFunc;
  });

  // Fix patterns with multiple closing braces
  content = content.replace(/\}\s*\}\s*const\s+\w+:\s*React\.FC\s*=\s*\(\)\s*=>\s*\{[^}]*\}/g, '}');

  return content;
}

// Function to fix malformed TypeScript declarations
function fixTypeScriptDeclarations(content) {
  // Fix vite-env.d.ts file
  content = content.replace(/\/\/ \/ \s*\n\s*\n\s*\n\s*\n\s*\n\s*\n\s*\n\s*\n\s*\n\s*<reference types="vite\/client" \/>/g, '/// <reference types="vite/client" />');
  
  // Fix malformed interface declarations
  content = content.replace(/interface\s+(\w+)\s*\{\s*\/\/ TODO: Add content\s*\}/g, 'interface $1 {\n  // TODO: Add content\n}');
  
  // Fix malformed property declarations
  content = content.replace(/readonly\s+(\w+):\s*(\w+)\s*\}/g, 'readonly $1: $2;\n}');

  return content;
}

// Function to fix object property syntax
function fixObjectProperties(content) {
  // Fix patterns like: { icon: BarChart, (missing proper object structure)
  content = content.replace(/\{\s*icon:\s*(\w+),/g, '{\n    icon: $1,');
  
  // Fix patterns like: { // TODO: Add content } icon: BarChart,
  content = content.replace(/\{\s*\/\/ TODO: Add content\s*\}\s*icon:\s*(\w+),/g, '{\n    icon: $1,');
  
  // Fix malformed object structures
  content = content.replace(/\{\s*\/\/ TODO: Add content\s*\}/g, '{\n    // TODO: Add content\n  }');

  return content;
}

// Function to fix JSX syntax issues
function fixJSX(content) {
  // Fix missing closing braces in JSX
  content = content.replace(/\}\s*\)\s*$/gm, '}\n  )');
  
  // Fix malformed JSX tags
  content = content.replace(/<(\w+)\s*([^>]*?)\s*>\s*<\/(\w+)>/g, '<$1 $2></$3>');
  
  // Fix missing semicolons in JSX
  content = content.replace(/;\s*$/gm, '');

  return content;
}

// Function to fix specific syntax patterns
function fixSpecificPatterns(content) {
  // Fix patterns like: const features = [ { icon: BarChart, (missing proper array structure)
  content = content.replace(/const\s+(\w+)\s*=\s*\[\s*\{\s*icon:\s*(\w+),/g, 'const $1 = [\n    {\n      icon: $2,');
  
  // Fix patterns like: const AICRMPage: React.FC = () => { const AiCrmPage: React.FC = () => {
  content = content.replace(/const\s+(\w+):\s*React\.FC\s*=\s*\(\)\s*=>\s*\{\s*const\s+\1:\s*React\.FC\s*=\s*\(\)\s*=>\s*\{/g, 'const $1: React.FC = () => {');
  
  // Fix patterns with missing closing braces
  content = content.replace(/\}\s*\}\s*const\s+\w+:\s*React\.FC\s*=\s*\(\)\s*=>\s*\{[^}]*\}/g, '}');

  return content;
}

// Main function to process files
function processFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    const originalContent = content;

    // Apply fixes in order
    content = fixImports(content);
    content = fixDuplicateFunctions(content);
    content = fixTypeScriptDeclarations(content);
    content = fixObjectProperties(content);
    content = fixJSX(content);
    content = fixSpecificPatterns(content);

    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      modified = true;
    }

    return modified;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Find all TypeScript/JavaScript files
const files = glob.sync('src/**/*.{ts,tsx,js,jsx}', { 
  cwd: process.cwd(),
  ignore: ['node_modules/**', 'dist/**', 'build/**']
});

console.log(`Found ${files.length} files to process...`);

let fixedCount = 0;
files.forEach(file => {
  if (processFile(file)) {
    fixedCount++;
  }
});

console.log(`Fixed ${fixedCount} files`);