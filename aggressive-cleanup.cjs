#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to aggressively clean a file
function aggressiveClean(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Remove everything after the first export default function
    const lines = content.split('\n');
    const cleanedLines = [];
    let foundDefaultExport = false;
    let braceCount = 0;
    let inFunction = false;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.includes('export default function') && !foundDefaultExport) {
        foundDefaultExport = true;
        inFunction = true;
        cleanedLines.push(line);
        continue;
      }
      
      if (inFunction) {
        cleanedLines.push(line);
        
        // Count braces to know when the function ends
        braceCount += (line.match(/\{/g) || []).length;
        braceCount -= (line.match(/\}/g) || []).length;
        
        if (braceCount <= 0 && line.trim() === '}') {
          inFunction = false;
          break;
        }
      } else if (!foundDefaultExport) {
        cleanedLines.push(line);
      }
    }

    const newContent = cleanedLines.join('\n');

    if (newContent !== content) {
      fs.writeFileSync(filePath, newContent, 'utf8');
      console.log(`Aggressively cleaned: ${filePath}`);
      modified = true;
    }

    return modified;
  } catch (error) {
    console.error(`Error cleaning ${filePath}:`, error.message);
    return false;
  }
}

// List of problematic files to clean
const problematicFiles = [
  'app/blog/ai-2026-secure-agent-architecture/page.tsx',
  'app/blog/new-insightful-ai-strategy-2025/page.tsx',
  'app/content/ai-agents-roi-playbook-2026/page.tsx',
  'app/content/ai-2026-agent-incident-response-playbook/page.tsx'
];

console.log('Starting aggressive cleanup...');
let fixedCount = 0;

for (const file of problematicFiles) {
  const filePath = path.join(__dirname, file);
  if (fs.existsSync(filePath)) {
    if (aggressiveClean(filePath)) {
      fixedCount++;
    }
  }
}

console.log(`Aggressively cleaned ${fixedCount} files.`);