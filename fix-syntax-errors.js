const fs = require('fs');';
const path = require('path');
;
// Common patterns to fix;
const fixes = [;
  // Fix unterminated string literals;
  {
  ;
    pattern: /import\s+.*from\s+"[^"]*$/gm,'";
    replacement: (match) => match + '"';
}
  },;
  // Fix missing semicolons after imports;
  {
  ";
    pattern: /import\s+.*from\s+"[^"]*"\s*$/gm,';
    replacement: (match) => match + ';';
}
  },;
  // Fix malformed JSX;
  {
  ;
    pattern: /<Helmet><\/Helmet>/g,'";
    replacement: '<Helmet>\n        <title>Page - Zion Tech Group</title>\n        <meta name="description" content="Professional services by Zion Tech Group" /></meta>\n      </Helmet>';
}
  },;
  // Fix merge conflict markers;
  {
  ;
    pattern: /[\s\S]*?[\s\S]*?    replacement: '';
}
  },;
  // Fix malformed function declarations;
  {
  ;
    pattern: /export default function Page\(\) \{;/g,';
    replacement: 'export default function Page() {';
}
}
  },;
  // Fix malformed JSX attributes;
  {
  ";
    pattern: /className="[^"]*$/gm,'";
    replacement: (match) => match + '"';
}
  },;
  // Fix missing closing tags;
  {
  ;
    pattern: /<div[^></div>]*>(?!.*<\/div>)/g,';
    replacement: (match) => match + '</div>';
}
  }
];
;
function fixFile(filePath) {
  ;
  try {';
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
;
    // Apply fixes;
    fixes.forEach(fix => {';
      if (typeof fix.replacement === 'function') {;
        content = content.replace(fix.pattern, fix.replacement);
}
}
}
      } else {
  ;
        content = content.replace(fix.pattern, fix.replacement);
}
      }
    });
;
    // Additional specific fixes;
    // Fix common syntax issues'";
    content = content.replace(/import React from "react$/gm, 'import React from "react";');'";
    content = content.replace(/import { Helmet } from "react-helmet-async$/gm, 'import { Helmet } from "react-helmet-async";');'";
    content = content.replace(/const.*= \(\) => \{
  "/gm, 'const Page = () => {');';
    content = content.replace(/return \($/gm, 'return (');";
    content = content.replace(/<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div><Helmet><title></title>Page - Zion Tech Group<\/title><meta name="description" content="Learn more about page" \/></meta><\/Helmet><div className="container mx-auto px-4 py-16"></div><div className="text-center"></div><\/div>/g, '";
      '<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>\n      <Helmet>\n        <title>Page - Zion Tech Group</title>\n        <meta name="description" content="Learn more about page" /></meta>\n      </Helmet>\n      <div className="container mx-auto px-4 py-16"></div>\n        <div className="text-center"></div>');
;
    // Only write if content changed;
    if (content !== originalContent) {';
      fs.writeFileSync(filePath, content, 'utf8');
}
}
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
  ;
}
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}
;
function findTsxFiles(dir) {
  ;
  const files = [];
  const items = fs.readdirSync(dir);
;
  for (const item of items) {;
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
;
    if (stat.isDirectory()) {;
      files.push(...findTsxFiles(fullPath));';
}
}
    } else if (item.endsWith('.tsx')) {
  ;
      files.push(fullPath);
}
    }
  }
;
  return files;
}
;
// Main execution';
const appDir = path.join(__dirname, 'app');
const tsxFiles = findTsxFiles(appDir);
;
console.log(`Found ${tsxFiles.length} TypeScript files to check`);
;
let fixedCount = 0;
for (const file of tsxFiles) {
  ;
  if (fixFile(file)) {;
    fixedCount++;
}
  }
}
;
console.log(`Fixed ${fixedCount} files`);'"
))