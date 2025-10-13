const fs = require('fs');
const path = require('path');

// Files with merge conflicts
const files = [
  '/workspace/app/zion-ai-inventory-manager/page.tsx',
  '/workspace/app/zion-ai-social-media-manager/page.tsx',
  '/workspace/app/zion-ai-email-analyzer/page.tsx',
  '/workspace/app/zion-smart-inventory-optimizer/page.tsx',
  '/workspace/app/zion-ai-performance-optimizer/page.tsx',
  '/workspace/app/zion-smart-expense-categorizer/page.tsx',
  '/workspace/app/zion-ai-voice-assistant-pro/page.tsx'
];

function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove merge conflict markers and keep the content between HEAD and the first =======
    const lines = content.split('\n');
    const fixedLines = [];
    let inConflict = false;
    let keepContent = true;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.startsWith('<<<<<<< HEAD')) {
        inConflict = true;
        keepContent = true;
        continue;
      } else if (line.startsWith('=======')) {
        keepContent = false;
        continue;
      } else if (line.startsWith('>>>>>>>')) {
        inConflict = false;
        keepContent = true;
        continue;
      }
      
      if (!inConflict || keepContent) {
        fixedLines.push(line);
      }
    }
    
    const fixedContent = fixedLines.join('\n');
    fs.writeFileSync(filePath, fixedContent, 'utf8');
    console.log(`Fixed merge conflicts in: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all files
files.forEach(fixMergeConflicts);

console.log('All merge conflicts fixed!');