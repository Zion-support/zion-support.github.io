const fs = require('fs');
const path = require('path');

// Read the clean template
const cleanTemplate = fs.readFileSync('/workspace/clean-page-template.tsx', 'utf8');

// List of problematic files we know about
const problematicFiles = [
  '/workspace/app/accessibility-page/page.tsx',
  '/workspace/app/accessibility/page.tsx',
  '/workspace/app/ad-management/page.tsx',
  '/workspace/app/advanced-security-suite/page.tsx',
  '/workspace/app/ai-accounting-assistant/page.tsx'
];

// Function to create a page with custom title and description
function createPage(title, description) {
  return cleanTemplate
    .replace(/Service Page/g, title)
    .replace(/Professional services and solutions for modern businesses\./g, description);
}

// Function to process a single file
function processFile(filePath) {
  try {
    if (fs.existsSync(filePath)) {
      console.log(`Replacing file: ${filePath}`);
      
      // Extract title from the file path
      const pathParts = filePath.split('/');
      const fileName = pathParts[pathParts.length - 2]; // Get the directory name
      const title = fileName.split('-').map(word =>
        word.charAt(0).toUpperCase() + word.slice(1)
      ).join(' ');
      
      const description = `Professional ${fileName.replace(/-/g, ' ')} services and solutions for modern businesses.`;
      
      const newContent = createPage(title, description);
      
      fs.writeFileSync(filePath, newContent);
      console.log(`✓ Replaced: ${filePath}`);
      return true;
    } else {
      console.log(`File not found: ${filePath}`);
      return false;
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
console.log('Starting replacement of specific problematic pages...');
let processedCount = 0;

for (const filePath of problematicFiles) {
  if (processFile(filePath)) {
    processedCount++;
  }
}

console.log(`\n✓ Replaced ${processedCount} problematic page files`);
console.log('\nPage replacement completed!');