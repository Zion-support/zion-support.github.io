const fs = require('fs');
const path = require('path');

// Function to fix common syntax errors in TSX files
function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix extra semicolon in import statements
    if (content.includes('import React from "react";"')) {
      content = content.replace(/import React from "react";"/g, 'import React from "react";');
      modified = true;
    }

    // Fix malformed JSX fragments and Helmet tags
    if (content.includes('<>    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>')) {
      content = content.replace(
        /<>    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"><\/div>\s*<Helmet><\/Helmet>\s*<title>([^<]+)<\/title>\s*<meta name="description" content="([^"]+)" \/><\/meta>\s*<\/Helmet>/g,
        '<>\n      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">\n        <Helmet>\n          <title>$1</title>\n          <meta name="description" content="$2" />\n        </Helmet>'
      );
      modified = true;
    }

    // Fix malformed closing tags
    if (content.includes('</div>\n    </div>\n  );\n};')) {
      content = content.replace(/<\/div>\n    <\/div>\n  \);\n\};/g, '</div>\n        </div>\n      </div>\n    </>\n  );\n};');
      modified = true;
    }

    // Fix missing closing tags for fragments
    if (content.includes('  );\n};') && !content.includes('</>')) {
      content = content.replace(/  \);\n\};/g, '    </>\n  );\n};');
      modified = true;
    }

    // Fix malformed paragraph tags
    if (content.includes('<p className="text-gray-300 text-lg"></p>')) {
      content = content.replace(
        /<p className="text-gray-300 text-lg"><\/p>\s*This page is under construction\. Please check back later\.\s*<\/p>/g,
        '<p className="text-gray-300 text-lg">\n              This page is under construction. Please check back later.\n            </p>'
      );
      modified = true;
    }

    // Fix extra spaces in Helmet import
    if (content.includes('import { Helmet    } from "react-helmet-async";')) {
      content = content.replace(/import { Helmet    } from "react-helmet-async";/g, 'import { Helmet } from "react-helmet-async";');
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed syntax errors in: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and fix TSX files
function findAndFixTSXFiles(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      fixedCount += findAndFixTSXFiles(filePath);
    } else if (file.endsWith('.tsx')) {
      if (fixSyntaxErrors(filePath)) {
        fixedCount++;
      }
    }
  }

  return fixedCount;
}

// Main execution
console.log('Starting syntax error fixes...');
const fixedCount = findAndFixTSXFiles('./app');
console.log(`Fixed syntax errors in ${fixedCount} files.`);