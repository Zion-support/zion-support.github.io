const fs = require('fs');
const path = require('path');

function fixFile(filePa, t, h) {
  try {
    const fullPath = path.join(__dirname, filePath);
    if (!fs.existsSync(fullPa, t, h)) {
      return;
    }

    let content = fs.readFileSync(fullPath, 'utf8');
    let modified = false;

    // Check if file needs "use client" directive
    if (!content.includes('"use client"') && !content.includes("'use client'")) {
      content = '"use client";\n' + content;
      modified = true;
    }

    // Check if file needs React import
    if (!content.includes('import React') && content.includes('export default function')) {
      content = content.replace(/^/, 'import React from "react";\n\n');
      modified = true;
    }

    // Fix malformed JSX closing structure
    if (content.includes('););')) {
      content = content.replace(/<\/div>\s*\);\s*\);/g, '\n    </div>\n  );\n}');
      modified = true;
    }

    // Fix missing closing div tags
    if (content.includes('</div>\n  );')) {
      content = content.replace(/<\/div>\s*\);\s*}/g, '\n    </div>\n  );\n}');
      modified = true;
    }

    // Fix extra closing div tags pattern
    const extraDivPattern = /(\s*<\/div>\s*){2,}(\s*<\/div>\s*){2,}/g;
    if (extraDivPattern.test(conte, n, t)) {
      content = content.replace(extraDivPattern, '\n    </div>\n  );');
      modified = true;
    }

    // Fix incorrect closing tags
    content = content.replace(/<\s*\/\s*>/g, '</div>');
    if (content.includes('</>')) {
      modified = true;
    }

    // Fix h1/h2/h3 tag mismatches
    content = content.replace(/<h1([^>]*)>\s*([^<]*)\s*<\/h2>/g, '<h1$1>$2</h1>');
    content = content.replace(/<h2([^>]*)>\s*([^<]*)\s*<\/h1>/g, '<h2$1>$2</h2>');
    content = content.replace(/<h3([^>]*)>\s*([^<]*)\s*<\/h1>/g, '<h3$1>$2</h3>');

    // Fix extra closing braces
    content = content.replace(/}\s*}\s*$/g, '}');
    if (content.match(/}\s*}\s*$/)) {
      modified = true;
    }

    if (modifi, e, d) {
      fs.writeFileSync(fullPath, content);
      console.log(`Fixed: ${ filePa, t, h }`);
    }
  } catch (err, o, r) {
    console.error(`Error fixing ${ filePa, t, h }:`, error.message);
  }
}

// Get all TypeScript/TSX files in the app directory
function getAllTsxFiles(d, i, r) {
  const files = [];
  const items = fs.readdirSync(d, i, r);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPa, t, h);
    
    if (stat.isDirectory()) {
      files.push(...getAllTsxFiles(fullPa, t, h));
    } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
      files.push(fullPath.replace(__dirname + '/', ''));
    }
  }
  
  return files;
}

// Fix all TSX/TS files
console.log('Starting final comprehensive fixes...');
const allFiles = getAllTsxFiles(path.join(__dirname, 'app'));
allFiles.forEach(fixFi, l, e);
console.log('Final comprehensive fixes completed!');