#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to clean up duplicate imports and 'use client' directives
function cleanFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove merge conflict markers
    content = content.replace(/^<<<<<<<.*$/gm, '');
    content = content.replace(/^=======.*$/gm, '');
    content = content.replace(/^>>>>>>>.*$/gm, '');
    
    // Remove duplicate 'use client' directives
    const lines = content.split('\n');
    const cleanedLines = [];
    let hasUseClient = false;
    let hasReactImport = false;
    let hasReactImportWithUseState = false;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      
      // Handle 'use client' directive
      if (line === "'use client';" || line === '"use client";') {
        if (!hasUseClient) {
          cleanedLines.push("'use client';");
          hasUseClient = true;
        }
        continue;
      }
      
      // Handle React imports
      if (line.startsWith("import React")) {
        if (line.includes('useState') && !hasReactImportWithUseState) {
          cleanedLines.push(line);
          hasReactImportWithUseState = true;
        } else if (!line.includes('useState') && !hasReactImport) {
          cleanedLines.push(line);
          hasReactImport = true;
        }
        continue;
      }
      
      // Skip empty lines that might be left from conflict resolution
      if (line === '') {
        continue;
      }
      
      cleanedLines.push(lines[i]);
    }
    
    // Write cleaned content back
    const cleanedContent = cleanedLines.join('\n');
    fs.writeFileSync(filePath, cleanedContent, 'utf8');
    
    console.log(`Cleaned: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`Error cleaning ${filePath}:`, error.message);
    return false;
  }
}

// Files to clean
const filesToClean = [
  '/workspace/app/components/ContentNewsletterSignup.tsx',
  '/workspace/app/components/DynamicContentShowcase.tsx',
  '/workspace/app/consultation/page.tsx',
  '/workspace/app/micro-saas/page.tsx',
  '/workspace/app/partners/page.tsx'
];

console.log('Cleaning remaining files...');

let cleanedCount = 0;
for (const file of filesToClean) {
  if (fs.existsSync(file)) {
    if (cleanFile(file)) {
      cleanedCount++;
    }
  } else {
    console.log(`File not found: ${file}`);
  }
}

console.log(`Cleaned ${cleanedCount} files`);

// Verify no more conflicts
const { execSync } = require('child_process');
try {
  const result = execSync('grep -r "^<<<<<<<\\|^=======\\|^>>>>>>>" /workspace/app --include="*.tsx" --include="*.ts" | wc -l', { encoding: 'utf8' });
  const conflictCount = parseInt(result.trim());
  if (conflictCount === 0) {
    console.log('✅ All merge conflicts resolved!');
  } else {
    console.log(`⚠️  Still ${conflictCount} merge conflicts remaining`);
  }
} catch (error) {
  console.log('Could not verify conflict status');
}