#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Files with JSX syntax errors
const filesToFix = [
  'pages/dashboard.tsx',
  'pages/faq.tsx', 
  'pages/index.tsx',
  'pages/portfolio.tsx',
  'pages/privacy-policy.tsx'
];

function fixJSXSyntax(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let fixed = false;

    // Fix missing closing brace before return statement
    content = content.replace(/^\s*}\s*;\s*$/m, '}\n\t};');

    // Fix JSX structure issues
    content = content.replace(/return \(\s*<>/g, 'return (\n\t\t<>\n\t\t\t');
    content = content.replace(/<\/>\s*\)/g, '\n\t\t</>\n\t);');

    // Fix missing React import if not present
    if (!content.includes("import React from 'react'") && !content.includes("import React, {") && content.includes('<')) {
      content = "import React from 'react';\n" + content;
      fixed = true;
    }

    // Fix indentation issues
    content = content.replace(/\n\s*<Head>/g, '\n\t\t<Head>');
    content = content.replace(/\n\s*<title>/g, '\n\t\t\t<title>');
    content = content.replace(/\n\s*<meta/g, '\n\t\t\t<meta');

    // Fix className spacing issues
    content = content.replace(/className="([^"]*)\s+([^"]*)"/g, 'className="$1 $2"');

    if (fixed) {
      fs.writeFileSync(filePath, content);
      console.log(`✓ Fixed JSX syntax in ${filePath}`);
    } else {
      console.log(`- No changes needed for ${filePath}`);
    }

  } catch (error) {
    console.error(`✗ Error fixing ${filePath}:`, error.message);
  }
}

console.log('Fixing JSX syntax errors...\n');

filesToFix.forEach(file => {
  if (fs.existsSync(file)) {
    fixJSXSyntax(file);
  } else {
    console.log(`⚠ File ${file} not found, skipping...`);
  }
});

console.log('\nJSX syntax fixes completed!');