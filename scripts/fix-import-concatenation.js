#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

console.log('🔧 Fixing import statement concatenation issues...');

async function main() {

// Function to fix concatenated import statements
function fixImportConcatenation(content) {
  // Fix patterns like: import React from 'react';'import Head from 'next/head';
  let fixed = content.replace(
    /import\s+[^;]+;'import\s+/g,
    (match) => {
      const firstImport = match.split(";'import")[0] + ';';
      const remainingImports = match.split(";'import").slice(1);
      return firstImport + '\n' + remainingImports.map(imp => 'import ' + imp).join('\n');
    }
  );

  // Fix patterns like: 'interface SomeProps {prop: string;'
  fixed = fixed.replace(
    /'interface\s+([^{]+)\s*{\s*([^}]*);'/g,
    (match, interfaceName, props) => {
      return `interface ${interfaceName.trim()} {\n  ${props.trim()}`;
    }
  );

  // Fix patterns like: 'const someVariants = cva(;
  fixed = fixed.replace(
    /'const\s+([^=]+)=\s*cva\(;/g,
    (match, varName) => {return `const ${varName.trim()} = cva(`;
    }
  );

  // Fix patterns with multiple concatenated strings
  fixed = fixed.replace(
    /'([^']+)',\s*'([^']+)',\s*'([^']+)'/g,
    (match, str1, str2, str3) => {return `'${str1}${str2}${str3}'`;
    }
  );

  // Fix patterns with semicolons in strings
  fixed = fixed.replace(
    /'([^']*);([^']*)'/g,
    (match, before, after) => {return `'${before}${after}'`;
    }
  );

  return fixed;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixImportConcatenation(content);
    
    if (content !== fixed) {
      fs.writeFileSync(filePath, fixed, 'utf8');console.log(`✅ Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {console.error(`❌ Error processing ${filePath}:', error.message);
    return false;
  }
}

// Find all TypeScript and JavaScript files
const patterns = [components/**/*.{ts,tsx,js,jsx}',
  'pages/**/*.{ts,tsx,js,jsx}',src/**/*.{ts,tsx,js,jsx}',
  '*.{ts,tsx,js,jsx}'
];

let totalFixed = 0;

for (const pattern of patterns) {
  const files = await glob(pattern, { ignore: ['node_modules/**', 'dist/**', '.next/**'] });
  
  for (const file of files) {
    if (processFile(file)) {
      totalFixed++;
    }
  }
}

console.log(`\n🎉 Import concatenation fix completed!`);console.log(`📊 Total files fixed: ${totalFixed}`);

// Generate report
let totalProcessed = 0;
for (const pattern of patterns) {
  const files = await glob(pattern, { ignore: ['node_modules/**', 'dist/**', '.next/**'] });
  totalProcessed += files.length;
}

const report = {
  timestamp: new Date().toISOString(),
  totalFilesProcessed: totalProcessed,
  totalFilesFixed: totalFixed,
  patterns: patterns
};

fs.writeFileSync('import-concatenation-fix-report.json', JSON.stringify(report, null, 2));
console.log('📄 Report saved to: import-concatenation-fix-report.json');
}

main().catch(console.error);