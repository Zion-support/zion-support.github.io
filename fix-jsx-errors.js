#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to fix JSX errors in a file
function fixJSXErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix duplicate closing Helmet tags
    const duplicateHelmetRegex = /<\/Helmet>\s*<\/Helmet>/g;
    if (duplicateHelmetRegex.test(content)) {
      content = content.replace(duplicateHelmetRegex, '</Helmet>');
      modified = true;
    }

    // Fix missing closing div tags and add proper structure
    // Pattern: Missing closing div for min-h-screen background
    const missingClosingDivRegex = /<div className="container mx-auto px-4 py-16">\s*<div className="text-center">\s*<h1[^>]*>.*?<\/h1>\s*<p[^>]*>.*?<\/p>\s*<\/div>\s*<\/div>\s*<\/>\s*\);\s*};/gs;
    
    if (missingClosingDivRegex.test(content)) {
      content = content.replace(missingClosingDivRegex, (match) => {
        // Add the missing min-h-screen div wrapper
        return match.replace(
          /<div className="container mx-auto px-4 py-16">/,
          '<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">\n        <div className="container mx-auto px-4 py-16">'
        ).replace(
          /<\/div>\s*<\/div>\s*<\/>/,
          '</div>\n        </div>\n      </div>\n    </>'
        );
      });
      modified = true;
    }

    // Fix incomplete JSX structure - missing closing tags
    const incompleteJSXRegex = /<div className="container mx-auto px-4 py-16">\s*<div className="text-center">\s*<h1[^>]*>.*?<\/h1>\s*<p[^>]*>.*?<\/p>\s*<\/div>\s*<\/div>\s*<\/>\s*\);\s*};/gs;
    
    if (incompleteJSXRegex.test(content)) {
      content = content.replace(incompleteJSXRegex, (match) => {
        return match.replace(
          /<div className="container mx-auto px-4 py-16">/,
          '<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">\n        <div className="container mx-auto px-4 py-16">'
        ).replace(
          /<\/div>\s*<\/div>\s*<\/>/,
          '</div>\n        </div>\n      </div>\n    </>'
        );
      });
      modified = true;
    }

    // Fix specific pattern: missing min-h-screen wrapper
    const missingWrapperRegex = /<Helmet>[\s\S]*?<\/Helmet>\s*<div className="container mx-auto px-4 py-16">/g;
    if (missingWrapperRegex.test(content)) {
      content = content.replace(missingWrapperRegex, (match) => {
        return match.replace(
          /<div className="container mx-auto px-4 py-16">/,
          '<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">\n        <div className="container mx-auto px-4 py-16">'
        );
      });
      modified = true;
    }

    // Ensure proper closing structure
    const closingStructureRegex = /<\/div>\s*<\/div>\s*<\/>\s*\);\s*};/g;
    if (closingStructureRegex.test(content)) {
      content = content.replace(closingStructureRegex, '</div>\n        </div>\n      </div>\n    </>\n  );\n};');
      modified = true;
    }

    // Fix any remaining incomplete closing tags
    const incompleteClosingRegex = /<\/div>\s*<\/>\s*\);\s*};/g;
    if (incompleteClosingRegex.test(content)) {
      content = content.replace(incompleteClosingRegex, '</div>\n        </div>\n      </div>\n    </>\n  );\n};');
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed JSX errors in: ${filePath}`);
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
  console.log('Starting JSX error fixes...');
  
  // Find all page.tsx files
  const pageFiles = await glob('app/**/page.tsx', { cwd: process.cwd() });
  
  let fixedCount = 0;
  
  for (const file of pageFiles) {
    if (fixJSXErrors(file)) {
      fixedCount++;
    }
  }
  
  console.log(`Fixed JSX errors in ${fixedCount} files`);
  
  // Also fix the main App.tsx file
  if (fixJSXErrors('app/App.tsx')) {
    fixedCount++;
    console.log('Fixed App.tsx');
  }
  
  console.log(`Total files fixed: ${fixedCount}`);
}

main().catch(console.error);