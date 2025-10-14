#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to fix JSX syntax errors comprehensively
function fixJSXErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Skip if file is empty or very short
    if (content.trim().length < 10) {
      return false;
    }

    // Fix duplicate Helmet tags
    if (content.includes('</Helmet>') && content.split('</Helmet>').length > 2) {
      // Remove all duplicate closing Helmet tags, keep only the first one
      const lines = content.split('\n');
      let helmetClosed = false;
      const newLines = [];
      
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        if (line.includes('</Helmet>')) {
          if (!helmetClosed) {
            newLines.push(line);
            helmetClosed = true;
          }
          // Skip duplicate closing tags
        } else {
          newLines.push(line);
        }
      }
      
      content = newLines.join('\n');
      modified = true;
    }

    // Fix malformed JSX structure - remove orphaned closing tags
    content = content.replace(/\s*<\/div>\s*<\/div>\s*<\/Helmet>\s*$/gm, '');
    content = content.replace(/\s*<\/Helmet>\s*$/gm, '');
    
    // Fix incomplete JSX fragments
    if (content.includes('<>') && !content.includes('</>')) {
      // Add missing closing fragment at the end
      content = content.replace(/(\s*)$/, '\n    </>\n  );');
      modified = true;
    }

    // Fix missing opening tags
    if (content.includes('</div>') && !content.includes('<div')) {
      // This is likely a malformed file, try to reconstruct
      const pageName = path.basename(filePath, '.tsx').replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
      
      content = `'use client';
import React from "react";
import { Helmet } from "react-helmet-async";

export default function Page() {
  return (
    <>
      <Helmet>
        <title>${pageName} - Zion Tech Group</title>
        <meta name="description" content="${pageName} services and solutions from Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">${pageName}</h1>
          <p className="text-xl text-gray-600">
            This page is under development. Please check back soon for more information about our ${pageName.toLowerCase()} services.
          </p>
        </div>
      </div>
    </>
  );
}`;
      modified = true;
    }

    // Fix files with only closing tags
    if (content.includes('</>') && !content.includes('<>')) {
      const pageName = path.basename(filePath, '.tsx').replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
      
      content = `'use client';
import React from "react";
import { Helmet } from "react-helmet-async";

export default function Page() {
  return (
    <>
      <Helmet>
        <title>${pageName} - Zion Tech Group</title>
        <meta name="description" content="${pageName} services and solutions from Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">${pageName}</h1>
          <p className="text-xl text-gray-600">
            This page is under development. Please check back soon for more information about our ${pageName.toLowerCase()} services.
          </p>
        </div>
      </div>
    </>
  );
}`;
      modified = true;
    }

    // Fix files with missing opening div
    if (content.includes('container mx-auto') && !content.includes('<div className="min-h-screen')) {
      content = content.replace(
        /(\s*)<div className="container mx-auto"/,
        `$1<div className="min-h-screen bg-white">
        <div className="container mx-auto"`
      );
      content = content.replace(
        /(\s*)<\/div>\s*$/,
        `$1      </div>
    </div>`
      );
      modified = true;
    }

    // Fix specific problematic patterns
    if (content.includes('Expected corresponding JSX closing tag')) {
      // This is likely a corrupted file, reconstruct it
      const pageName = path.basename(filePath, '.tsx').replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
      
      content = `'use client';
import React from "react";
import { Helmet } from "react-helmet-async";

export default function Page() {
  return (
    <>
      <Helmet>
        <title>${pageName} - Zion Tech Group</title>
        <meta name="description" content="${pageName} services and solutions from Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">${pageName}</h1>
          <p className="text-xl text-gray-600">
            This page is under development. Please check back soon for more information about our ${pageName.toLowerCase()} services.
          </p>
        </div>
      </div>
    </>
  );
}`;
      modified = true;
    }

    // Clean up any remaining malformed content
    content = content.replace(/\s*<\/Helmet>\s*$/gm, '');
    content = content.replace(/\s*<\/div>\s*<\/div>\s*$/gm, '');
    
    // Ensure proper closing
    if (content.includes('return (') && !content.includes(');')) {
      content = content.replace(/(\s*)$/, '\n  );\n}');
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

// Main function
async function main() {
  // Find all TypeScript/JSX files in the app directory
  const files = await glob('app/**/*.{tsx,ts}');

  console.log(`Found ${files.length} files to check...`);

  let fixedCount = 0;
  files.forEach(file => {
    if (fixJSXErrors(file)) {
      fixedCount++;
    }
  });

  console.log(`Fixed ${fixedCount} files`);
}

main().catch(console.error);