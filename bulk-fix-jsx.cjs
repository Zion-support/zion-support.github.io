const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Get all problematic files
function getProblematicFiles() {
  try {
    const output = execSync('pnpm run type-check 2>&1', { encoding: 'utf8' });
    const lines = output.split('\n');
    const files = new Set();
    
    lines.forEach(line => {
      const match = line.match(/^([^(]+\.tsx)\(/);
      if (match) {
        files.add(match[1]);
      }
    });
    
    return Array.from(files);
  } catch (error) {
    console.error('Error getting problematic files:', error.message);
    return [];
  }
}

// Fix a single file with common patterns
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Skip if file doesn't exist or is too small
    if (content.length < 100) {
      return false;
    }

    // Check if file has basic structure
    const hasReturnStatement = content.includes('return (');
    const hasReactFragment = content.includes('<>') || content.includes('<React.Fragment>');
    const hasHelmet = content.includes('<Helmet>');
    
    if (!hasReturnStatement) {
      console.log(`Skipping ${filePath} - no return statement found`);
      return false;
    }

    // Fix missing React import
    if (!content.includes("import React from 'react'") && !content.includes('import React from "react"')) {
      if (content.includes("'use client'")) {
        content = content.replace("'use client';", "'use client';\nimport React from 'react';");
      } else {
        content = "import React from 'react';\n" + content;
      }
      modified = true;
    }

    // Fix missing Helmet import
    if (content.includes('<Helmet>') && !content.includes("from 'react-helmet-async'")) {
      const importMatch = content.match(/import React from ['"]react['"];?/);
      if (importMatch) {
        content = content.replace(
          importMatch[0],
          `${importMatch[0]}\nimport { Helmet } from 'react-helmet-async';`
        );
        modified = true;
      }
    }

    // Fix missing React Fragment wrapper
    if (hasHelmet && !hasReactFragment) {
      // Find the return statement and add fragment wrapper
      content = content.replace(
        /return\s*\(\s*<Helmet>/,
        'return (\n    <>\n      <Helmet>'
      );
      
      // Add closing fragment before the final closing parenthesis
      content = content.replace(
        /(\s*\);\s*$)/m,
        '\n    </>\n  );'
      );
      modified = true;
    }

    // Fix missing closing tags for common patterns
    const patterns = [
      {
        // Fix missing opening div tags
        pattern: /<div className="container mx-auto"><\/div>/g,
        replacement: '<div className="container mx-auto">'
      },
      {
        // Fix missing opening div tags for text-center
        pattern: /<div className="text-center mb-16"><\/div>/g,
        replacement: '<div className="text-center mb-16">'
      },
      {
        // Fix malformed section tags
        pattern: /<section className="py-20 px-4">\s*<div className="container mx-auto"><\/div>/g,
        replacement: '<section className="py-20 px-4">\n          <div className="container mx-auto">'
      },
      {
        // Fix missing closing tags for main sections
        pattern: /<\/section>\s*<\/div>\s*\);\s*$/m,
        replacement: '        </section>\n      </div>\n    </>\n  );'
      }
    ];

    patterns.forEach(({ pattern, replacement }) => {
      const newContent = content.replace(pattern, replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    });

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

// Main function
function main() {
  console.log('Starting bulk JSX fixes...');
  
  const problematicFiles = getProblematicFiles();
  console.log(`Found ${problematicFiles.length} files with errors`);
  
  let fixedCount = 0;
  problematicFiles.forEach(file => {
    if (fs.existsSync(file)) {
      if (fixFile(file)) {
        fixedCount++;
      }
    }
  });
  
  console.log(`Fixed ${fixedCount} files`);
  
  // Run type check to see remaining errors
  console.log('\nRunning type check to verify fixes...');
  try {
    execSync('pnpm run type-check', { stdio: 'inherit' });
    console.log('All TypeScript errors fixed!');
  } catch (error) {
    console.log('Some errors remain, continuing with fixes...');
  }
}

main();