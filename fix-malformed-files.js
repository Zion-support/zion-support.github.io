#!/usr/bin/env node

import fs from 'fs';
import { glob } from 'glob';

// Function to fix malformed files
function fixMalformedFile(content, filePath) {
  let fixed = content;
  let changes = 0;

  // Extract title from file path
  const pathParts = filePath.split('/');
  const fileName = pathParts[pathParts.length - 2]; // Get the directory name before page.tsx
  const title = fileName.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');

  // Check if file has malformed structure
  const hasMalformedStructure = content.includes('    </>') && 
                                content.includes('  );') && 
                                content.includes('}') &&
                                content.includes('      </div>') &&
                                content.includes('    </div>');

  if (hasMalformedStructure) {
    const properStructure = `import React from "react";
import { Helmet } from "react-helmet-async";

const PagePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>${title} - Zion Tech Group</title>
        <meta name="description" content="${title} - Zion Tech Group" />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-8">${title}</h1>
          <p className="text-gray-300 text-lg">
            This page is under construction. Please check back later.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PagePage;`;
    
    fixed = properStructure;
    changes++;
  }

  return { content: fixed, changes };
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const result = fixMalformedFile(content, filePath);
    
    if (result.changes > 0) {
      fs.writeFileSync(filePath, result.content);
      console.log(`Fixed malformed file: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
async function main() {
  console.log('Starting fix for malformed files...');

  // Get all TypeScript/TSX files in the app directory
  const files = await glob('app/**/*.tsx', { cwd: process.cwd() });

  let totalFixed = 0;
  let filesProcessed = 0;

  files.forEach(file => {
    if (processFile(file)) {
      totalFixed++;
    }
    filesProcessed++;
  });

  console.log(`\nProcessed ${filesProcessed} files, fixed ${totalFixed} files`);
  console.log('Malformed files fix completed!');
}

main().catch(console.error);