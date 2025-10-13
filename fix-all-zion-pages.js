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
    
    // Fix the structure by ensuring proper closing tags
    // The issue is that the grid div is not properly closed
    if (content.includes('        </div>\n        <div className="text-center">')) {
      // This is correct structure
    } else if (content.includes('        <div className="text-center">')) {
      // Need to close the grid div first
      content = content.replace(
        '        <div className="text-center">',
        '        </div>\n        <div className="text-center">'
      );
    }
    
    // Ensure proper closing of all divs
    if (content.includes('          </div>\n  );')) {
      content = content.replace(
        '          </div>\n  );',
        '          </div>\n        </div>\n      </div>\n    </div>\n  );'
      );
    }
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${filePath}`);
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

console.log('Fixing all Zion AI pages...');
zionPages.forEach(fixZionPage);
console.log('Done!');