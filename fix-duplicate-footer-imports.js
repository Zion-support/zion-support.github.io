const fs = require('fs');
const path = require('path');

// Function to fix duplicate Footer imports
function fixDuplicateFooterImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Remove duplicate Footer imports
    if (content.includes("import Footer from '../components/Footer';") && content.includes("import Footer from '@/components/Footer';")) {
      content = content.replace(/import Footer from '\.\.\/components\/Footer';\n/, '');
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath}`);
      return true;
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
  return false;
}

// List of problematic files
const problematicFiles = [
  '/workspace/app/ai-email-marketing-automation/page.tsx',
  '/workspace/app/ai-expense-tracker/page.tsx',
  '/workspace/app/ai-invoice-generator/page.tsx',
  '/workspace/app/ai-social-media-manager/page.tsx',
  '/workspace/app/ai-video-editor/page.tsx'
];

console.log('Fixing duplicate Footer imports...');

let fixedCount = 0;
for (const file of problematicFiles) {
  if (fixDuplicateFooterImports(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files`);