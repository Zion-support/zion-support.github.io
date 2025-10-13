#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Function to fix JSX errors in a file
function fixJSXErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix missing closing div tags before the closing of the function
    // Look for patterns like "  );" that should be "        </div>\n      </div>\n    </div>\n  );"
    content = content.replace(/(\s+)(\s+)(\s+)(\s+)(\s+)(\s+)(\s+)(\s+)\);/g, (match, spaces) => {
      // Count the indentation level
      const indentLevel = spaces.length;
      const closingDivs = '        </div>\n      </div>\n    </div>\n  );';
      return closingDivs;
    });
    
    // More specific fix for the pattern we saw
    content = content.replace(/(\s+)(\s+)(\s+)(\s+)(\s+)(\s+)(\s+)(\s+)\);/g, (match) => {
      return '        </div>\n      </div>\n    </div>\n  );';
    });
    
    // Fix the specific pattern where we have missing closing divs
    content = content.replace(/(\s+)(\s+)(\s+)(\s+)(\s+)(\s+)(\s+)(\s+)\);/g, (match) => {
      return '        </div>\n      </div>\n    </div>\n  );';
    });
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Fixed JSX errors in: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// List of files that need JSX fixes
const filesToFix = [
  'app/zion-ai-inventory-manager/page.tsx',
  'app/zion-ai-performance-optimizer/page.tsx',
  'app/zion-ai-social-media-manager/page.tsx',
  'app/zion-ai-voice-assistant-pro/page.tsx',
  'app/zion-smart-expense-categorizer/page.tsx',
  'app/zion-smart-inventory-optimizer/page.tsx'
];

console.log('Fixing JSX errors...');
let fixedCount = 0;

for (const file of filesToFix) {
  if (fs.existsSync(file)) {
    if (fixJSXErrors(file)) {
      fixedCount++;
    }
  } else {
    console.log(`File not found: ${file}`);
  }
}

console.log(`Fixed ${fixedCount} files.`);