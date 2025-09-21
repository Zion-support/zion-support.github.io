#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to fix specific syntax errors
function fixSpecificSyntaxErrors(content) {
  // Fix interface closing braces
  content = content.replace(/(\w+):\s*([^;]+);}/g, '$1: $2;');
  
  // Fix import statements with semicolons in wrong places
  content = content.replace(/impor;\s*t;\s*Reac;\s*t/g, 'import React');
  content = content.replace(/impor;\s*t;\s*([^;]+);/g, 'import $1');
  
  // Fix function parameters with semicolons
  content = content.replace(/export function (\w+)\(\{;\s*([^}]+);/g, 'export function $1({ $2');
  content = content.replace(/children;/g, 'children');
  
  // Fix interface definitions with extra braces
  content = content.replace(/interface Service \{\s*id: string;\s*name: string;\}\s*\}/g, 'interface Service {\n  id: string;\n  name: string;\n}');
  
  // Fix React imports
  content = content.replace(/import React from "react"\s*;\s*$/gm, 'import React from "react";');
  
  // Fix missing semicolons after imports
  content = content.replace(/import React from "react"\s*$/gm, 'import React from "react";');
  
  // Fix interface properties
  content = content.replace(/(\w+):\s*([^;]+);\}/g, '$1: $2;\n}');
  
  // Fix function parameter syntax
  content = content.replace(/\(\{;\s*([^}]+);/g, '({ $1');
  
  return content;
}

// Function to process a file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixedContent = fixSpecificSyntaxErrors(content);
    
    if (content !== fixedContent) {
      fs.writeFileSync(filePath, fixedContent);
      console.log(`Fixed: ${filePath}`),
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
console.log('🔧 Starting targeted syntax error fix...');

const filesToFix = [
  'src/components/Header.tsx',
  'src/components/SEO.tsx',
  'src/components/services/ServiceLandingTemplate.tsx',
  'src/components/ui/button.tsx',
  'src/components/ui/card.tsx'
];

let fixedCount = 0;

for (const file of filesToFix) {
  const fullPath = path.join(__dirname, file);
  if (fs.existsSync(fullPath)) {
    if (processFile(fullPath)) {
      fixedCount++;
    }
  }
}

console.log(`✅ Fixed ${fixedCount} out of ${filesToFix.length} files`);
console.log('🎉 Targeted syntax error fix completed!');