#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to fix specific syntax errors
function fixSpecificSyntax(filePath) {
  const fullPath = path.join(__dirname, filePath);
  try {
    let content = fs.readFileSync(fullPath, 'utf8');
    
    // Fix malformed array syntax
    content = content.replace(/,\s*\]\s*;\s*\]\s*;\s*\]\s*;/g, '];');
    content = content.replace(/,\s*\)\s*;\s*\)\s*;\s*\)\s*;/g, ');');
    content = content.replace(/,\s*\}\s*;\s*\}\s*;\s*\}\s*;/g, '};');
    
    // Fix malformed object properties
    content = content.replace(/,\s*\}\s*,\s*\{/g, '},\n    {');
    content = content.replace(/,\s*\}\s*,\s*\]/g, '}\n  ];');
    
    // Fix malformed function declarations
    content = content.replace(/;\s*const\s+(\w+):\s*React\.FC\s*=\s*\(\)\s*=>\s*\{;/g, ';\n\nconst $1: React.FC = () => {');
    content = content.replace(/;\s*export\s+default\s*;/g, ';\n\nexport default ');
    content = content.replace(/;\s*function\s+(\w+)\s*\(\s*\)\s*\{;/g, ';\n\nfunction $1() {');
    
    // Fix malformed JSX
    content = content.replace(/<\/Helmet>\s*$/gm, '</Helmet>');
    content = content.replace(/<Helmet>\s*<title[^>]*><\/title>\s*<meta[^>]*><\/meta>\s*<meta[^>]*><\/meta>\s*<\/Helmet>/g, (match) => {
      return match.replace(/<\/Helmet>/, '</Helmet>');
    });
    
    // Fix missing semicolons and commas in object literals
    content = content.replace(/temperature:\s*0\.7;,/g, 'temperature: 0.7');
    content = content.replace(/response:\s*\{,/g, 'response: {');
    content = content.replace(/confidence:\s*0\.95,/g, 'confidence: 0.95');
    
    // Fix malformed array declarations
    content = content.replace(/const\s+(\w+)\s*=\s*\[([^]]*)\]\s*;\s*\]\s*;\s*\]\s*;/g, (match, varName, arrayContent) => {
      return `const ${varName} = [${arrayContent}];`;
    });
    
    // Fix malformed function calls
    content = content.replace(/copyToClipboard\s*=\s*\([^)]*\)\s*=>\s*\{,/g, 'copyToClipboard = (code, id) => {\n    ');
    content = content.replace(/setCopiedCode\(id\),\s*setTimeout/g, 'setCopiedCode(id);\n    setTimeout');
    content = content.replace(/setTimeout\(\(\)\s*=>\s*setCopiedCode\(null\),\s*2000\)\}\s*const/g, 'setTimeout(() => setCopiedCode(null), 2000);\n  };\n\n  const');
    
    // Fix missing imports
    if (content.includes('useState') && !content.includes("import { useState }")) {
      content = content.replace(/import React[^;]*;/g, (match) => {
        if (match.includes('useState')) return match;
        return match.replace('import React', 'import React, { useState }');
      });
    }
    
    // Fix missing Helmet import
    if (content.includes('<Helmet>') && !content.includes("import { Helmet }")) {
      content = content.replace(/import React[^;]*;/g, (match) => {
        return match + '\nimport { Helmet } from \'react-helmet-async\';';
      });
    }
    
    // Fix malformed export statements
    content = content.replace(/;\s*export\s+default\s*;/g, ';\n\nexport default ');
    content = content.replace(/export\s+default\s*;/g, 'export default ');
    
    // Fix malformed function declarations
    content = content.replace(/;\s*function\s+(\w+)\s*\(\s*\)\s*\{;/g, ';\n\nfunction $1() {');
    
    // Fix malformed object literals
    content = content.replace(/example:\s*\{,\s*request:\s*\{,/g, 'example: {\n    request: {');
    
    // Fix malformed array syntax with multiple closing brackets
    content = content.replace(/\]\s*;\s*\]\s*;\s*\]\s*;/g, '];');
    
    // Fix malformed object syntax with multiple closing braces
    content = content.replace(/\}\s*;\s*\}\s*;\s*\}\s*;/g, '};');
    
    // Fix malformed function syntax with multiple closing parentheses
    content = content.replace(/\)\s*;\s*\)\s*;\s*\)\s*;/g, ');');
    
    fs.writeFileSync(fullPath, content);
    console.log(`Fixed specific syntax errors in: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// List of files with specific syntax errors
const filesWithSpecificErrors = [
  'app/analytics-tools/page.tsx',
  'app/api-development/page.tsx',
  'app/api-docs/page.tsx',
  'app/api/page.tsx',
  'app/ar-vr-platform/page.tsx'
];

// Main function
function fixSpecificSyntaxErrors() {
  console.log('Starting to fix specific syntax errors...');
  
  filesWithSpecificErrors.forEach(fixSpecificSyntax);
  
  console.log('Finished fixing specific syntax errors!');
}

// Run the fix
fixSpecificSyntaxErrors();