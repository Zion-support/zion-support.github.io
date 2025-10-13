const { ESLint } = require('eslint');
const fs = require('fs');
const path = require('path');

async function fixImports() {
  const eslint = new ESLint({
    fix: true,
    baseConfig: {
      extends: ['@typescript-eslint/recommended'],
      rules: {
        '@typescript-eslint/no-unused-vars': 'error'
      }
    }
  });

  // Get all TypeScript files
  const files = await eslint.lintFiles(['app/**/*.{ts,tsx}']);
  
  console.log(`Found ${files.length} files to process`);

  for (const file of files) {
    if (file.messages.length > 0) {
      console.log(`Fixing ${file.filePath}...`);
      
      // Apply fixes
      const fixedCode = file.output || file.source;
      if (fixedCode && fixedCode !== file.source) {
        fs.writeFileSync(file.filePath, fixedCode);
        console.log(`Fixed ${file.filePath}`);
      }
    }
  }

  console.log('Import fixing completed');
}

fixImports().catch(console.error);