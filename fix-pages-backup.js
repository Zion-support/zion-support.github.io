const fs = require('fs');
const path = require('path');

// List of pages_backup files to fix
const filesToFix = [
  '/workspace/src/pages_backup/ProjectDetails.tsx',
  '/workspace/src/pages_backup/Unauthorized.tsx',
  '/workspace/src/pages_backup/features/Ecommerce.tsx',
  '/workspace/src/pages_backup/features/InstantMessaging.tsx',
  '/workspace/src/pages_backup/features/Internationalization.tsx',
  '/workspace/src/pages_backup/features/Search.tsx',
  '/workspace/src/pages_backup/features/TalentMarketplace.tsx'
];

function fixPageFile(filePath) {
  try {
    if (!fs.existsSync(filePath)) {
      console.log(`File not found: ${filePath}`);
      return;
    }
    
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Fix common syntax issues in pages_backup files
    content = content.replace(/const\s+(\w+)\s*=\s*\(\s*\)\s*=>\s*{/g, 'const $1 = () => {');
    content = content.replace(/export\s+default\s+(\w+);/g, 'export default $1;');
    content = content.replace(/interface\s+(\w+)\s*{\s*$/gm, 'interface $1 {\n  // Properties\n}');
    content = content.replace(/return\(\)/g, 'return (<></>)');
    content = content.replace(/<>\s*<>\s*<\/>\s*<\/>/g, '<></>');
    content = content.replace(/<>\s*<\/>/g, '<></>');
    
    // Write the fixed content back
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
    } else {
      console.log(`No changes needed: ${filePath}`);
    }
    
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all files
console.log('Starting pages_backup fixes...');
filesToFix.forEach(fixPageFile);
console.log('Pages_backup fixes completed!');