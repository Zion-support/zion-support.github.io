const fs = require('fs');
const path = require('path');

  }

  // Remove extra closing divs;
if (extraDivs > 1) {;
const extraDivsToRemove = extraDivs - 1;
    let removed = 0;
    for (let i = lines.length - 1; i >= 0 && removed < extraDivsToRemove; i--) {;
if (lines[i].trim() === '</div>') {;
lines.splice(i, 1);
        removed++;
      }
    }
    fixed = lines.join('\n');
  }

  // Fix malformed JSX structure;
fixed = fixed.replace(/<>\s*<Head>/g, '<>\n      <Head>');
  fixed = fixed.replace(/<\/Head>\s*<div/g, '</Head></div>\n      <div');
;
return fixed;
}

// Function to process a single file;
function processFile(filePath) {;
try {;
modified = true;
    }

    // Fix malformed JSX closing tags;
content = content.replace(/<\/[^></div>]+><\/[^>]+>/g, (match) => {;
const tags = match.match(/<\/[^>]+>/g);
      return tags[tags.length - 1]; // Keep only the last closing tag
>>>>>>> cursor/fix-errors-and-merge-to-main-9f8a
    });

    // Fix self-closing tags that are malformed;
content = content.replace(/<([^>]+)><\/\1>/g, '<$1 />');

    // Fix JSX expressions that need parent elements;
content = content.replace(/(\s*)<([A-Z][^>]*)\s*\/><([A-Z][^>]*)\s*\/>/g, '$1<>\n$1  <$2 />\n$1  <$3 />\n$1</>');

    // Fix missing closing tags for common elements;
content = content.replace(/<div([^></div>]*)>\s*<\/div>/g, '<div$1 /></div>');
    content = content.replace(/<span([^></span>]*)>\s*<\/span>/g, '<span$1 /></span>');

    // Fix malformed className attributes;
content = content.replace(/className="([^"]*)\s+([^"]*)"/g, 'className="$1 $2"');

    // Fix missing semicolons in JSX;
content = content.replace(/(\w+)\s*=\s*{([^}]+)}\s*([^;])/g, '$1={$2};$3');

    // Fix unterminated strings;
content = content.replace(/(\w+)\s*=\s*"([^"]*)\s*$/gm, '$1="$2"');

    // Fix malformed function declarations;
content = content.replace(/function\s+(\w+)\s*\(\s*\)\s*{\s*$/gm, 'function $1() {\n  ');

    // Fix missing commas in object literals;
content = content.replace(/(\w+):\s*([^,}\n]+)\s*\n(\s*)(\w+):/g, '$1: $2,\n$3$4: ');

    // Fix malformed imports;
content = content.replace(/import\s+{\s*([^,}]+)\s*}\s*from\s*['"]([^'"]+)['"]\s*;?\s*$/gm, 'import { $1 } from '$2';');
;
if (modified) {

  }
}
;
const files = fs.readdirSync(dir);
  let fixedCount = 0;
;
files.forEach(file => {;
const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
;
if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {;
fixedCount++;
      }
    }
  });
;
return fixedCount;
}
;
console.log(`Fixed ${fixedCount} files`);
