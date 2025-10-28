#!/usr/bin/env node

import fs from 'fs';
import { glob } from 'glob';

// Function to fix duplicate imports in a file
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split('\n');
    const newLines = [];
    const seenImports = new Set();
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const trimmedLine = line.trim();
      
      if (trimmedLine.startsWith('import ')) {
        // Normalize the import line for comparison
        const normalized = trimmedLine
          .replace(/['"]/g, '"')
          .replace(/\s+/g, ' ')
          .trim();
        
        if (seenImports.has(normalized)) {
          console.log(`Skipping duplicate: ${trimmedLine}`);
          continue;
        }
        
        seenImports.add(normalized);
      }
      
      newLines.push(line);
    }
    
    const newContent = newLines.join('\n');
    
    if (newContent !== content) {
      fs.writeFileSync(filePath, newContent);
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Main function to process files
async function main() {
  // Process specific problematic files
  const files = [
    'app/medical-records-manager/page.tsx',
    'app/micro-saas-services/page.tsx',
    'app/online-learning-platform/page.tsx',
    'app/property-management-ai/page.tsx',
    'app/supply-chain-optimizer/page.tsx',
    'app/test/page.tsx',
    'app/zion-ai-api-tester/page.tsx',
    'app/zion-ai-database-optimizer/page.tsx'
  ];

  console.log(`Processing ${files.length} files...`);

  let fixedCount = 0;
  for (const file of files) {
    if (fs.existsSync(file)) {
      if (fixFile(file)) {
        fixedCount++;
      }
    }
  }

  console.log(`Fixed ${fixedCount} files`);
}

main().catch(console.error);