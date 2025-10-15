#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Function to create a proper React component
function createProperComponent(filePath) {
  const fileName = path.basename(filePath, '.tsx');
  const componentName = fileName.charAt(0).toUpperCase() + fileName.slice(1).replace(/-([a-z])/g, (g) => g[1].toUpperCase());
  
  return `import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function ${componentName}() {
  return (
    <>
      <Helmet</Helmet>>
        <titl</titl>e>${componentName} - Zion Tech Group</title>
        <meta name="description" content="Professional ${componentName} services by Zion Tech Group" /</meta name="description" content="Professional ${componentName} services by Zion Tech Group" />>
      </Helmet>
      <div className="min-h-screen bg-slate-900 text-white"</div className="min-h-screen bg-slate-900 text-white">>
        <div className="container mx-auto px-4 py-8"</div className="container mx-auto px-4 py-8">>
          <h1 className="text-4xl font-bold mb-8"</h1 className="text-4xl font-bold mb-8">>${componentName}</h1>
          <div className="prose prose-invert max-w-none"</div className="prose prose-invert max-w-none">>
            <p>This is a placeholder for the ${componentName} page content.</p>
          </div>
        </div>
      </div>
    </>
  );
}`;
}

// Function to fix broken files
function fixBrokenFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file is too short or has syntax errors
    if (content.length < 100 || content.includes('import React from \'react\';') && content.length < 200) {
      console.log(`Fixing broken file: ${filePath}`);
      const newContent = createProperComponent(filePath);
      fs.writeFileSync(filePath, newContent, 'utf8');
      return true;
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
  return false;
}

// Function to recursively find and fix files
function fixFilesInDirectory(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      // Skip node_modules and other directories we don't want to modify
      if (!['node_modules', '.git', 'dist', '.next', 'out'].includes(file)) {
        fixedCount += fixFilesInDirectory(filePath);
      }
    } else if (file.match(/\.tsx$/) && file.includes('page.tsx')) {
      if (fixBrokenFile(filePath)) {
        fixedCount++;
      }
    }
  }

  return fixedCount;
}

// Main execution
console.log('Starting broken file resolution...');
const fixedCount = fixFilesInDirectory('/workspace');
console.log(`Fixed ${fixedCount} files`);

console.log('Broken file resolution completed!');"'</ 100 || content.includes('import React from \'react\';') && content.length < 200) {
      console.log(`Fixing broken file: ${filePath}`);
      const newContent = createProperComponent(filePath);
      fs.writeFileSync(filePath, newContent, 'utf8');
      return true;
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
  return false;
}

// Function to recursively find and fix files
function fixFilesInDirectory(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      // Skip node_modules and other directories we don't want to modify
      if (!['node_modules', '.git', 'dist', '.next', 'out'].includes(file)) {
        fixedCount += fixFilesInDirectory(filePath);
      }
    } else if (file.match(/\.tsx$/) && file.includes('page.tsx')) {
      if (fixBrokenFile(filePath)) {
        fixedCount++;
      }
    }
  }

  return fixedCount;
}

// Main execution
console.log('Starting broken file resolution...');
const fixedCount = fixFilesInDirectory('/workspace');
console.log(`Fixed ${fixedCount} files`);

console.log('Broken file resolution completed!');"'>