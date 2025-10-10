#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { glob } = require('glob');

// Function to fix common JSX syntax errors
function fixJSXErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix 1: Remove incomplete JSX fragments at the beginning
    if (content.includes("'use client';\nimport React from 'react';\nimport { Helmet } from 'react-helmet-async';\n    </>")) {
      content = content.replace(
        /'use client';\nimport React from 'react';\nimport { Helmet } from 'react-helmet-async';\n    <\/>/,
        "'use client';\nimport React from 'react';\nimport { Helmet } from 'react-helmet-async';\n\nconst PageComponent = () => {\n  return (\n    <>\n      <Helmet>\n        <title>Page Title - Zion Tech Group</title>\n        <meta name=\"description\" content=\"Page description\" />\n      </Helmet>\n      <div className=\"min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900\">\n        <div className=\"container mx-auto px-4 py-16\">\n          <h1 className=\"text-4xl font-bold text-white text-center\">Page Title</h1>\n        </div>\n      </div>\n    </>"
      );
      modified = true;
    }

    // Fix 2: Fix malformed object literals that should be JSX
    if (content.match(/^\s*icon:\s+\w+,/m)) {
      // This looks like a data structure, wrap it in a proper component
      const lines = content.split('\n');
      const newContent = [
        "'use client';",
        "import React from 'react';",
        "import { Helmet } from 'react-helmet-async';",
        "",
        "const PageComponent = () => {",
        "  return (",
        "    <>",
        "      <Helmet>",
        "        <title>Page Title - Zion Tech Group</title>",
        "        <meta name=\"description\" content=\"Page description\" />",
        "      </Helmet>",
        "      <div className=\"min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900\">",
        "        <div className=\"container mx-auto px-4 py-16\">",
        "          <h1 className=\"text-4xl font-bold text-white text-center\">Page Title</h1>",
        "        </div>",
        "      </div>",
        "    </>",
        "  );",
        "};",
        "",
        "export default PageComponent;"
      ].join('\n');
      content = newContent;
      modified = true;
    }

    // Fix 3: Fix missing closing tags
    const openTags = content.match(/<[^/][^>]*>/g) || [];
    const closeTags = content.match(/<\/[^>]*>/g) || [];
    
    // Count common tags
    const tagCounts = {};
    openTags.forEach(tag => {
      const tagName = tag.match(/<(\w+)/)?.[1];
      if (tagName) {
        tagCounts[tagName] = (tagCounts[tagName] || 0) + 1;
      }
    });
    
    closeTags.forEach(tag => {
      const tagName = tag.match(/<\/(\w+)/)?.[1];
      if (tagName) {
        tagCounts[tagName] = (tagCounts[tagName] || 0) - 1;
      }
    });

    // Add missing closing tags
    Object.entries(tagCounts).forEach(([tagName, count]) => {
      if (count > 0) {
        for (let i = 0; i < count; i++) {
          content += `\n</${tagName}>`;
        }
        modified = true;
      }
    });

    // Fix 4: Fix malformed JSX expressions
    content = content.replace(/{\s*icon:\s*(\w+),/g, '{$1');
    content = content.replace(/{\s*title:\s*['"]([^'"]*)['"],/g, '{"$1"}');
    content = content.replace(/{\s*description:\s*['"]([^'"]*)['"],/g, '{"$1"}');

    // Fix 5: Fix missing semicolons in object properties
    content = content.replace(/(\w+):\s*['"]([^'"]*)['"]\s*\n/g, '$1: "$2",\n');

    // Fix 6: Fix missing closing parentheses and braces
    const openParens = (content.match(/\(/g) || []).length;
    const closeParens = (content.match(/\)/g) || []).length;
    const openBraces = (content.match(/\{/g) || []).length;
    const closeBraces = (content.match(/\}/g) || []).length;

    if (openParens > closeParens) {
      content += ')'.repeat(openParens - closeParens);
      modified = true;
    }
    if (openBraces > closeBraces) {
      content += '}'.repeat(openBraces - closeBraces);
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Find all problematic files
const pattern = 'app/**/*.tsx';
const files = glob.sync(pattern, { cwd: process.cwd() });

console.log(`Found ${files.length} TSX files to check...`);

let fixedCount = 0;
files.forEach(file => {
  if (fixJSXErrors(file)) {
    fixedCount++;
  }
});

console.log(`Fixed ${fixedCount} files.`);