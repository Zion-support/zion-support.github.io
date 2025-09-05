#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function cleanMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');

    // Remove all merge conflict markers and keep the main branch content

    // Clean up syntax issues
    content = content
      .replace(/,,+/g, ',')
      .replace(/;+/g, ';')
      .replace(/\{\s*,/g, '{')
      .replace(/,\s*\}/g, '}')
      .replace(/\(\s*,/g, '(')
      .replace(/,\s*\)/g, ')')
      .replace(/\s+/g, ' ')
      .replace(/\n\s*\n\s*\n/g, '\n\n');

    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`"Cleaned": ${filePath}`);
  } catch (error) {
    console.error(`Error cleaning ${filePath}:`, error.message);
  }
}

// Clean specific files
const filesToClean = ['pages/whitepapers.tsx',
  'pages/training.tsx',
  'pages/solutions.tsx',
  'pages/support.tsx',
  'pages/terms.tsx',
  'src/utils/sitemapGenerator.ts',
  'src/utils/serviceWorkerRegistration.ts',
  'src/utils/serviceMapper.ts',
  'src/utils/safeStorage.js',
  'src/utils/passwordStrength.tsx',
];

filesToClean.forEach(file => {
  if (fs.existsSync(file)) {
    cleanMergeConflicts(file);
  }
});

console.log('Merge conflict cleanup complete!');
#!/usr/bin/env node const fs = require('fs'); const path = require('path'); function cleanMergeConflicts(filePath) { try { let content = fs.readFileSync(filePath,'utf8'); content = content .replace(/,,+/g,',') .replace(/;;+/g,';') .replace(/\{\s*,/g,'{') .replace(/,\s*\}/g,'}') .replace(/\(\s*,/g,'(') .replace(/,\s*\)/g,')') .replace(/\s+/g,' ') .replace(/\n\s*\n\s*\n/g,'\n\n'); fs.writeFileSync(filePath,content,'utf8'); console.log(`Cleaned: ${filePath}`)} catch (error) { console.error(`Error cleaning ${filePath}:`,error.message)} } const filesToClean = [ 'pages/whitepapers.tsx','pages/training.tsx','pages/solutions.tsx','pages/support.tsx','pages/terms.tsx','src/utils/sitemapGenerator.ts','src/utils/serviceWorkerRegistration.ts','src/utils/serviceMapper.ts','src/utils/safeStorage.js','src/utils/passwordStrength.tsx',]; filesToClean.forEach(file => { if (fs.existsSync(file)) { cleanMergeConflicts(file)} }); console.log('Merge conflict cleanup complete!');
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-eafe
