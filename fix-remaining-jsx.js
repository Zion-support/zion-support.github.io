const fs = require('fs');
const path = require('path');

// Function to fix remaining JSX syntax errors
function fixJSXFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix React Fragment syntax issues - replace <> with <div> and </> with </div>
    if (content.includes('<>') && content.includes('</>')) {
      // Check if React is imported
      if (!content.includes("import React from 'react'")) {
        content = content.replace(/'use client';/, "'use client';\nimport React from 'react';");
        modified = true;
      }
      
      // Replace React Fragment with div
      content = content.replace(/<>/g, '<div>');
      content = content.replace(/<\/>/g, '</div>');
      modified = true;
    }

    // Fix missing semicolon after return statement
    if (content.includes('  )\n}') && !content.includes('  );\n}')) {
      content = content.replace(/  \)\n}/g, '  );\n}');
      modified = true;
    }

    // Fix any remaining malformed JSX
    if (content.includes('LinkContact Us')) {
      content = content.replace(
        /<LinkContact Us\s*>\s*\$\d+\s*<ArrowRight\$\d+ \/>\s*<\/Link>/g,
        `<Link
            href="/contact"
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
          >
            Contact Us
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>`
      );
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and fix all TSX files
function fixAllTSXFiles(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      fixedCount += fixAllTSXFiles(filePath);
    } else if (file.endsWith('.tsx')) {
      if (fixJSXFile(filePath)) {
        fixedCount++;
      }
    }
  }

  return fixedCount;
}

// Start fixing from the app directory
const appDir = path.join(__dirname, 'app');
console.log('Starting remaining JSX fixes...');
const fixedCount = fixAllTSXFiles(appDir);
console.log(`Fixed ${fixedCount} files`);