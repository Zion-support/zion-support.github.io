#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

function fixObjectsAndArrays(content) {
  // Fix object literals - replace semicolons with commas
  content = content.replace(
    /(\w+):\s*([^,;]+);\s*$/gm,
    '$1: $2,'
  );
  
  // Fix array spreads - replace semicolons with commas
  content = content.replace(
    /\.\.\.\s*([^,;]+);\s*$/gm,
    '...$1,'
  );
  
  // Fix specific patterns
  content = content.replace(
    /mobile:\s*'[^']+';/g,
    (match) => match.replace(/;$/, ',')
  );
  
  content = content.replace(
    /email:\s*'[^']+';/g,
    (match) => match.replace(/;$/, ',')
  );
  
  content = content.replace(
    /address:\s*'[^']+';/g,
    (match) => match.replace(/;$/, ',')
  );
  
  content = content.replace(
    /website:\s*'[^']+';/g,
    (match) => match.replace(/;$/, ',')
  );
  
  // Fix array spread patterns
  content = content.replace(
    /\.\.\.\s*advancedEnterpriseServices2025;/g,
    '...advancedEnterpriseServices2025,'
  );
  
  content = content.replace(
    /\.\.\.\s*innovativeMicroSaasExpansion2025;/g,
    '...innovativeMicroSaasExpansion2025,'
  );
  
  content = content.replace(
    /\.\.\.\s*cuttingEdgeITInfrastructureServices;/g,
    '...cuttingEdgeITInfrastructureServices,'
  );
  
  // Fix other common patterns
  content = content.replace(
    /\.\.\.\s*([^,;]+);\s*$/gm,
    '...$1,'
  );
  
  return content;
}

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    content = fixObjectsAndArrays(content);
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed objects/arrays in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

function main() {
  const patterns = [
    'components/**/*.tsx',
    'components/**/*.ts',
    'pages/**/*.tsx',
    'pages/**/*.ts',
    'src/**/*.tsx',
    'src/**/*.ts'
  ];
  
  let totalFixed = 0;
  
  patterns.forEach(pattern => {
    const files = glob.sync(pattern, { cwd: process.cwd() });
    files.forEach(file => {
      if (fixFile(file)) {
        totalFixed++;
      }
    });
  });
  
  console.log(`\nTotal files fixed: ${totalFixed}`);
}

if (require.main === module) {
  main();
}

module.exports = { fixFile, fixObjectsAndArrays };