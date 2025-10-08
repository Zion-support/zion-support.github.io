#!/usr/bin/env node

import fs from 'fs';
import { glob } from 'glob';

// Function to fix syntax errors in a file
function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix double brace imports
    content = content.replace(/import\s*{\s*{\s*([^}]+)\s*}\s*}\s*from\s*['"]([^'"]+)['"];?/g, 'import { $1 } from \'$2\';');
    
    // Fix malformed imports with extra braces
    content = content.replace(/import\s*{\s*([^}]+)\s*}\s*from\s*['"]([^'"]+)['"];?\s*import\s*{\s*([^}]+)\s*}\s*from\s*['"]([^'"]+)['"];?/g, (match, imports1, module1, imports2, module2) => {
      if (module1 === module2) {
        return `import { ${imports1}, ${imports2} } from '${module1}';`;
      } else {
        return `import { ${imports1} } from '${module1}';\nimport { ${imports2} } from '${module2}';`;
      }
    });
    
    // Fix empty imports
    content = content.replace(/import\s*{\s*}\s*from\s*['"][^'"]+['"];?\s*\n/g, '');
    
    // Fix malformed metadata exports
    content = content.replace(/\/\/ Metadata moved to Helmet component\s*([^}]+)\s*};/g, '');
    
    // Fix malformed function declarations
    content = content.replace(/export\s+default\s+function\s+([^(]+)\s*\(\s*\)\s*{\s*return\s*\(\s*<>\s*<Helmet>\s*([^<]+)\s*<\/Helmet>/g, (match, funcName, helmetContent) => {
      return `export default function ${funcName}() {\n  return (\n    <>\n      <Helmet>\n        ${helmetContent}\n      </Helmet>`;
    });
    
    // Fix missing semicolons and brackets
    content = content.replace(/([^;}])\s*$/gm, '$1;');
    
    // Clean up excessive whitespace
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    // Fix React import issues
    content = content.replace(/import\s*{\s*React\s*,\s*([^}]+)\s*}\s*from\s*['"]react['"];?/g, 'import React, { $1 } from \'react\';');
    
    // Fix Helmet import issues
    content = content.replace(/import\s*{\s*Helmet\s*}\s*from\s*['"]react-helmet-async['"];?/g, 'import { Helmet } from \'react-helmet-async\';');
    
    // Fix Router import issues
    content = content.replace(/import\s*{\s*([^}]+)\s*}\s*from\s*['"]react-router-dom['"];?/g, 'import { $1 } from \'react-router-dom\';');
    
    if (content !== fs.readFileSync(filePath, 'utf8')) {
      fs.writeFileSync(filePath, content);
      console.log(`✅ Fixed syntax errors in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`❌ Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
async function main() {
  console.log('🔧 Fixing syntax errors in converted files...\n');
  
  const patterns = [
    'app/**/*.tsx',
    'app/**/*.ts'
  ];
  
  let totalFiles = 0;
  let fixedFiles = 0;
  
  for (const pattern of patterns) {
    const files = await glob(pattern, { 
      cwd: process.cwd(),
      ignore: [
        '**/node_modules/**',
        '**/dist/**',
        '**/build/**',
        '**/*.disabled/**',
        '**/*backup*/**',
        '**/*corrupted*/**',
        '**/*temp*/**',
        '**/*.broken/**'
      ]
    });
    
    for (const file of files) {
      totalFiles++;
      if (fixSyntaxErrors(file)) {
        fixedFiles++;
      }
    }
  }
  
  console.log(`\n📊 Summary:`);
  console.log(`   Total files processed: ${totalFiles}`);
  console.log(`   Files fixed: ${fixedFiles}`);
  console.log(`   Files unchanged: ${totalFiles - fixedFiles}`);
  
  if (fixedFiles > 0) {
    console.log('\n✨ Syntax error fixes completed!');
  } else {
    console.log('\n✅ No syntax errors found.');
  }
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { fixSyntaxErrors };