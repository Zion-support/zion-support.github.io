import fs from 'fs';
import path from 'path';

const pageFiles = [
  'app/zion-ai-inventory-manager/page.tsx',
  'app/zion-ai-performance-optimizer/page.tsx',
  'app/zion-ai-social-media-manager/page.tsx',
  'app/zion-ai-voice-assistant-pro/page.tsx',
  'app/zion-smart-expense-categorizer/page.tsx',
  'app/zion-smart-inventory-optimizer/page.tsx'
];

pageFiles.forEach(filePath => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove the first conflict section (simple version)
    content = content.replace(/    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
});

console.log('All page files fixed!');