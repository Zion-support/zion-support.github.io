#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// List of files that need fixing
const filesToFix = [
  'app/zion-ai-performance-optimizer/page.tsx',
  'app/zion-ai-social-media-manager/page.tsx',
  'app/zion-ai-voice-assistant-pro/page.tsx',
  'app/zion-smart-expense-categorizer/page.tsx',
  'app/zion-smart-inventory-optimizer/page.tsx'
];

function fixPageFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Find the pattern and fix it
    const lines = content.split('\n');
    const fixedLines = [];
    let foundPattern = false;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      // Look for the pattern where we have the closing div and then the function ends
      if (line.includes('</div>') && i + 1 < lines.length && lines[i + 1].trim() === ');') {
        fixedLines.push(line);
        fixedLines.push('        </div>');
        fixedLines.push('      </div>');
        fixedLines.push('    </div>');
        fixedLines.push('  );');
        foundPattern = true;
        i++; // Skip the next line since we're handling it
      } else {
        fixedLines.push(line);
      }
    }
    
    if (foundPattern) {
      fs.writeFileSync(filePath, fixedLines.join('\n'), 'utf8');
      console.log(`Fixed syntax errors in: ${filePath}`);
      return true;
    } else {
      console.log(`No pattern found in: ${filePath}`);
      return false;
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Fix each file
console.log('Fixing remaining syntax errors...');

let successCount = 0;
for (const file of filesToFix) {
  const fullPath = path.join(__dirname, file);
  if (fs.existsSync(fullPath)) {
    if (fixPageFile(fullPath)) {
      successCount++;
    }
  } else {
    console.log(`File not found: ${fullPath}`);
  }
}

console.log(`Successfully fixed ${successCount} out of ${filesToFix.length} files`);