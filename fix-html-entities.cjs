const fs = require('fs');
const path = require('path');

// List of files that have HTML entities
const filesToFix = [
  'app/ai-social-media-manager-pro/page.tsx',
  'app/ai-social-media-manager/page.tsx',
  'app/ai-voice-assistant-enterprise/page.tsx'
];

function fixFile(filePath) {
  try {
    const fullPath = path.join(__dirname, filePath);
    if (!fs.existsSync(fullPath)) {
      console.log(`File not found: ${filePath}`);
      return;
    }

    let content = fs.readFileSync(fullPath, 'utf8');
    
    // Replace HTML entities with proper characters
    content = content.replace(/&quot;/g, '"');
    content = content.replace(/&amp;/g, '&');
    content = content.replace(/&lt;/g, '<');
    content = content.replace(/&gt;/g, '>');
    content = content.replace(/&#39;/g, "'");
    content = content.replace(/&apos;/g, "'");

    // Write the fixed content back
    fs.writeFileSync(fullPath, content, 'utf8');
    console.log(`Fixed HTML entities in: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all files
console.log('Starting to fix HTML entities...');
filesToFix.forEach(fixFile);
console.log('Done fixing HTML entities!');