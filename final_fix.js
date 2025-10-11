import fs from 'fs';
import path from 'path';

// Function to fix a single TSX file
function fixTSXFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Remove duplicate 'use client' and function declarations
    const lines = content.split('\n');
    const cleanedLines = [];
    let inFunction = false;
    let functionCount = 0;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      // Skip duplicate 'use client' directives
      if (line.includes("'use client'") && cleanedLines.some(l => l.includes("'use client'"))) {
        continue;
      }
      
      // Skip duplicate function declarations
      if (line.includes('export default function') && functionCount > 0) {
        continue;
      }
      
      // Skip duplicate React imports
      if (line.includes("import React from 'react'") && cleanedLines.some(l => l.includes("import React from 'react'"))) {
        continue;
      }
      
      // Track function declarations
      if (line.includes('export default function') || line.includes('const ') && line.includes(': React.FC')) {
        functionCount++;
        inFunction = true;
      }
      
      // Skip lines that are part of duplicate content
      if (inFunction && line.includes('export default function') && functionCount > 1) {
        continue;
      }
      
      cleanedLines.push(line);
    }

    const cleanedContent = cleanedLines.join('\n');
    
    if (cleanedContent !== content) {
      fs.writeFileSync(filePath, cleanedContent, 'utf8');
      console.log(`Fixed: ${filePath}`);
      modified = true;
    }

    // Additional fixes for specific patterns
    let finalContent = cleanedContent;
    
    // Fix empty import statements
    finalContent = finalContent.replace(/import\s*{\s*}\s*from\s*['"][^'"]+['"];?\s*\n?/g, '');
    
    // Fix malformed function declarations
    finalContent = finalContent.replace(/export default function PagePage\(\)/g, 'export default function AiAccountingAssistantPage()');
    
    // Remove trailing code after function ends
    const functionEndMatch = finalContent.match(/(export default function[^}]+}\s*;?\s*)(.*)/s);
    if (functionEndMatch) {
      finalContent = functionEndMatch[1];
    }

    if (finalContent !== content) {
      fs.writeFileSync(filePath, finalContent, 'utf8');
      console.log(`Fixed: ${filePath}`);
      modified = true;
    }

  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
  return false;
}

// Function to find all TSX files
function findTSXFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files.push(...findTSXFiles(fullPath));
    } else if (item.endsWith('.tsx')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Main execution
const appDir = './app';
const tsxFiles = findTSXFiles(appDir);

console.log(`Found ${tsxFiles.length} TSX files to check`);

let fixedCount = 0;
for (const file of tsxFiles) {
  if (fixTSXFile(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files`);