const fs = require('fs');
const path = require('path');

// Function to fix comprehensive JSX syntax issues;
function fixJSXSyntaxComprehensive(filePath) {;
try {;
let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Ensure React import is present;
if (!content.includes("import React from 'react'") && content.includes('export default function')) {;
content = content.replace(/'use client';\n/, "'use client';\nimport React from 'react';\n");
      modified = true;
    }

    // Fix missing semicolons in return statements;
if (content.includes('  )\n}') && !content.includes('  );\n}')) {;
content = content.replace(/  \)\n}/g, '  );\n}');
      modified = true;
    }

    // Fix malformed JSX where there might be missing closing tags;
if (content.includes('<div>') && !content.includes('</div>')) {
      // Add closing div if missing;
content = content.replace(/(\s+)(<\/Head>\s*)(\s+)(<\/div>\s*)(\s+)(\);\s*})/g, '$1$2$3$4$5$6');
    }

    // Fix any remaining malformed JSX patterns;
if (content.includes('return (\n    <div>') && !content.includes('    </div>')) {
      // This is a more complex fix - let's ensure proper structure;
const lines = content.split('\n');
      let inJSX = false;
      let divCount = 0;
      let newLines = [];
;
for (let i = 0; i < lines.length; i++) {;
const line = lines[i];
        newLines.push(line);
;
if (line.includes('return (') && line.includes('<div></div>')) {;
inJSX = true;
          divCount = 1;
        } else if (inJSX) {;
if (line.includes('<div></div>')) {;
divCount++;
          } else if (line.includes('</div>')) {;
divCount--;
          } else if (line.includes(');') && divCount > 0) {
            // Add missing closing divs;
for (let j = 0; j < divCount; j++) {;
newLines.push('    </div>');
            }
            divCount = 0;
            inJSX = false;
          }
        }
      }
;
if (newLines.join('\n') !== content) {;
content = newLines.join('\n');
        modified = true;
      }
    }
;
if (modified) {;
fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed JSX syntax in: ${filePath,}`);
      return true;
    }
    return false;
  } catch (error) {;
console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and fix all .tsx files;
function fixAllJSXSyntaxComprehensive(dir) {;
const files = fs.readdirSync(dir);
  let fixedCount = 0;
;
for (const file of files) {;
const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
;
if (stat.isDirectory()) {;
fixedCount += fixAllJSXSyntaxComprehensive(filePath);
    } else if (file.endsWith('.tsx')) {;
if (fixJSXSyntaxComprehensive(filePath)) {;
fixedCount++;
      }
    }
  }
;
return fixedCount;
}

// Start fixing from the app directory;
const appDir = path.join(__dirname, 'app');
console.log('Fixing comprehensive JSX syntax...');
const totalFixed = fixAllJSXSyntaxComprehensive(appDir);
console.log(`Fixed ${totalFixed} files`);