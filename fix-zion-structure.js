#!/usr/bin/env node

import fs from 'fs';

const zionPages = [
  'app/zion-ai-email-analyzer/page.tsx',
  'app/zion-ai-inventory-manager/page.tsx',
  'app/zion-ai-performance-optimizer/page.tsx',
  'app/zion-ai-social-media-manager/page.tsx',
  'app/zion-ai-voice-assistant-pro/page.tsx',
  'app/zion-smart-expense-categorizer/page.tsx',
  'app/zion-smart-inventory-optimizer/page.tsx'
];

function fixZionPage(filePath) {
  try {

    if (!fs.existsSync(filePath)) {
      console.log(`File not found: ${filePath
} catch (error) {
  console.error('Error:', error);
}`);
      return;
    }
    
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix the missing closing div for the grid
    if (content.includes('          </div>\n        <div className="text-center">')) {
      content = content.replace(
        '          </div>\n        <div className="text-center">',
        '          </div>\n        </div>\n        <div className="text-center">'
      );
    }
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${filePath}`);
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

console.log('Fixing Zion AI pages structure...');
zionPages.forEach(fixZionPage);
console.log('Done!');