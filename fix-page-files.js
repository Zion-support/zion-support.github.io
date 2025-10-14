#!/usr/bin/env node

import fs from 'fs';
import { glob } from 'glob';

// Function to fix page files
function fixPageFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Check if file has the problematic pattern
    if (content.includes('export default function') && content.includes('return (') && content.includes(');') && content.includes('}')) {
      // Extract the function name from the export statement
      const functionNameMatch = content.match(/export default function (\w+)/);
      if (functionNameMatch) {
        const functionName = functionNameMatch[1];
        
        // Create a proper page component
        const newContent = `'use client';
import React from 'react';

export default function ${functionName}() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-4">${functionName.replace(/([A-Z])/g, ' $1').trim()}</h1>
        <p className="text-gray-300">Coming soon...</p>
      </div>
    </div>
  );
}`;

        fs.writeFileSync(filePath, newContent, 'utf8');
        console.log(`Fixed: ${filePath}`);
        return true;
      }
    }
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Main function
async function main() {
  // Find all page.tsx files
  const pageFiles = await glob('app/**/page.tsx', { cwd: process.cwd() });

  console.log(`Found ${pageFiles.length} page files to check...`);

  let fixedCount = 0;
  pageFiles.forEach(file => {
    if (fixPageFile(file)) {
      fixedCount++;
    }
  });

  console.log(`Fixed ${fixedCount} files out of ${pageFiles.length} total files.`);
}

main().catch(console.error);