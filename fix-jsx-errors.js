const fs = require('fs');
const path = require('path');

// Function to fix common JSX syntax errors
function fixJsxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix 1: Add missing React import if not present
    if (!content.includes("import React from 'react'") && content.includes('return (') && content.includes('<')) {
      if (content.includes("'use client'")) {
        content = content.replace("'use client';", "'use client';\nimport React from 'react';");
      } else {
        content = "'use client';\nimport React from 'react';\n" + content;
      }
      modified = true;
    }

    // Fix 2: Fix malformed LinkContact components
    content = content.replace(/<LinkContact([^>]*)>/g, '<Link href="/contact"$1>');
    content = content.replace(/<\/LinkContact>/g, '</Link>');

    // Fix 3: Fix malformed JSX with extra characters
    content = content.replace(/\$(\d+)/g, ''); // Remove $1, $2, etc.
    content = content.replace(/<ArrowRight\$3 \/>/g, '<ArrowRight className="w-5 h-5 ml-2" />');

    // Fix 4: Fix malformed className attributes (missing spaces)
    content = content.replace(/className="([^"]*?)([a-zA-Z])([a-zA-Z])/g, (match, prefix, char1, char2) => {
      if (char1 !== ' ' && char2 !== ' ') {
        return `className="${prefix} ${char1}${char2}`;
      }
      return match;
    });

    // Fix 5: Fix malformed closing tags
    content = content.replace(/<\/Search>/g, '');
    content = content.replace(/<\/ArrowLeft>/g, '');
    content = content.replace(/<\/ArrowRight>/g, '');

    // Fix 6: Fix malformed div closing
    content = content.replace(/<\/div>,\s*<div/g, '</div>\n        <div');
    content = content.replace(/<\/div>,\s*{/g, '</div>\n            {');

    // Fix 7: Fix malformed array syntax
    content = content.replace(/{\s*\[\s*{([^}]+)}\s*</g, '{\n                { $1 },\n                { name: "About", path: "/about" },\n                { name: "Services", path: "/services" },\n                { name: "Contact", path: "/contact" }\n              ].map((item, index) => (\n                <Link');

    // Fix 8: Fix malformed Head tags
    content = content.replace(/<Head><\/Head>\s*<title>/g, '<Head>\n        <title>');
    content = content.replace(/<meta name="robots" content="noindex, nofollow" \/>\s*<meta property="og:type" content="website" \/>\s*<\/Head>/g, '<meta name="robots" content="noindex, nofollow" />\n        <meta property="og:type" content="website" />\n      </Head>');

    // Fix 9: Fix malformed div attributes
    content = content.replace(/className="([^"]*?)justify-centerp-4"/g, 'className="$1justify-center p-4"');
    content = content.replace(/className="([^"]*?)max-w-2xlw-fulltext-center"/g, 'className="$1max-w-2xl w-full text-center"');
    content = content.replace(/className="([^"]*?)rounded-xlp-6mb-8"/g, 'className="$1rounded-xl p-6 mb-8"');
    content = content.replace(/className="([^"]*?)justify-centermb-4"/g, 'className="$1justify-center mb-4"');
    content = content.replace(/className="([^"]*?)w-6h-6text-cyan-400mr-2"/g, 'className="$1w-6 h-6 text-cyan-400 mr-2"');
    content = content.replace(/className="([^"]*?)text-lgfont-semiboldtext-white"/g, 'className="$1text-lg font-semibold text-white"');
    content = content.replace(/className="([^"]*?)w-5h-5mr-2"/g, 'className="$1w-5 h-5 mr-2"');
    content = content.replace(/className="([^"]*?)mt-8p-4bg-slate-800\/30rounded-lg"/g, 'className="$1mt-8 p-4 bg-slate-800/30 rounded-lg"');
    content = content.replace(/className="([^"]*?)text-smtext-gray-400"/g, 'className="$1text-sm text-gray-400"');

    // Fix 10: Fix malformed closing tags and structure
    content = content.replace(/<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>/g, '</div>\n        </div>\n      </div>\n    </div>');

    // Fix 11: Fix missing closing h1 tag
    content = content.replace(/(<h1[^>]*>[\s\S]*?)\s*<\/h1>\s*<\/h1>/g, '$1\n          </h1>');

    // Fix 12: Fix extra closing divs
    content = content.replace(/<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>/g, '</div>\n      </div>\n    </div>');

    // Fix 13: Fix malformed JSX fragments and components
    content = content.replace(/<>\s*<\/>/g, '');
    content = content.replace(/<Fragment>\s*<\/Fragment>/g, '');

    // Fix 14: Fix missing closing tags for specific components
    content = content.replace(/<Suspense([^>]*)>/g, '<Suspense$1>');
    content = content.replace(/<div([^>]*)>\s*<\/div>/g, '<div$1></div>');

    // Fix 15: Fix malformed function parameters
    content = content.replace(/function\s+(\w+)\(\)\s*{\s*return\s*\(\s*<div>/g, 'function $1() {\n  return (\n    <div>');

    if (modified || content !== fs.readFileSync(filePath, 'utf8')) {
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

// Function to recursively find all .tsx files
function findTsxFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      files.push(...findTsxFiles(fullPath));
    } else if (item.endsWith('.tsx')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Main execution
console.log('Starting JSX error fixes...');
const appDir = path.join(__dirname, 'app');
const tsxFiles = findTsxFiles(appDir);

let fixedCount = 0;
for (const file of tsxFiles) {
  if (fixJsxErrors(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files out of ${tsxFiles.length} total .tsx files`);