const fs = require('fs');
const path = require('path');

// Read the template
const template = fs.readFileSync('./template-page.tsx', 'utf8');

// List of problematic files to replace
const problematicFiles = [
  'app/accessibility-page/page.tsx',
  'app/accessibility/page.tsx',
  'app/ad-management/page.tsx',
  'app/advanced-security-suite/page.tsx',
  'app/ai-accounting-assistant/page.tsx'
];

function replaceFile(filePath) {
  try {
    // Get the directory name to create a proper title
    const dirName = path.dirname(filePath).split('/').pop();
    const title = dirName.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    
    // Replace the title in the template
    const content = template.replace('Page - Zion Tech Group', `${title} - Zion Tech Group`);
    
    // Write the file
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Replaced: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`Error replacing ${filePath}:`, error.message);
    return false;
  }
}

console.log('Replacing problematic files...');
let replacedCount = 0;

problematicFiles.forEach(file => {
  if (replaceFile(file)) {
    replacedCount++;
  }
});

console.log(`Replaced ${replacedCount} files`);