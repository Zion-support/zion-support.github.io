const fs = require('fs');
const path = require('path');
;
function fixDivClosingTags(filePath) {;
try {;
let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix missing closing div tags - look for patterns where divs are opened but not closed;
const lines = content.split('\n');
    let newLines = [];
    let divStack = [];
    let inFragment = false;
    let fragmentDepth = 0;
;
for (let i = 0; i < lines.length; i++) {;
const line = lines[i];

      // Track opening divs;
const divMatches = line.match(/<div[^></div>]*>/g);
      if (divMatches) {;
divMatches.forEach(() => divStack.push('div'));
      }

      // Track closing divs;
const closingDivMatches = line.match(/<\/div>/g);
      if (closingDivMatches) {;
closingDivMatches.forEach(() => {;
if (divStack.length > 0) {;
divStack.pop();
          }
        });
      }

      // Track JSX fragments;
if (line.includes('<>')) {;
inFragment = true;
        fragmentDepth++;
      }
;
if (line.includes('</>')) {;
fragmentDepth--;
        if (fragmentDepth === 0) {;
inFragment = false;
        }
      }
;
newLines.push(line);

      // If we're at the end of the return statement and there are unclosed divs, close them;
if ((line.includes(');') || line.includes('}')) && divStack.length > 0) {
        // Add missing closing divs;
for (let j = 0; j < divStack.length; j++) {;
newLines.push('        </div>');
        }
        divStack = [];
        modified = true;
      }

      // If we're at the end of the return statement and there's an unclosed fragment, close it;
if ((line.includes(');') || line.includes('}')) && inFragment && fragmentDepth > 0) {;
for (let j = 0; j < fragmentDepth; j++) {;
newLines.push('    </>');
        }
        inFragment = false;
        fragmentDepth = 0;
        modified = true;
      }
    }
;
if (modified) {;
content = newLines.join('\n');
    }

    // Additional specific fixes
    // Fix common patterns where divs are not properly closed;
content = content.replace(/(<div[^></div>]*>[\s\S]*?)(\s*\)\s*;?\s*$)/gm, (match, content, ending) => {
      // Count opening and closing divs in the content;
const openDivs = (content.match(/<div[^></div>]*>/g) || []).length;
      const closeDivs = (content.match(/<\/div>/g) || []).length;
;
if (openDivs > closeDivs) {;
const missingDivs = openDivs - closeDivs;
        let fixedContent = content;
        for (let i = 0; i < missingDivs; i++) {;
fixedContent += '\n        </div>';
        }
        return fixedContent + ending;
      }
      return match;
    });

    // Fix missing closing fragments;
if (content.includes('return (') && content.includes('<>') && !content.includes('</>')) {;
content = content.replace(/(\s*\)\s*;?\s*$)/gm, '\n    </>\n  );');
      modified = true;
    }
;
if (modified) {;
fs.writeFileSync(filePath, content);
      console.log(`Fixed div closing tags in: ${filePath,}`);
    }
  } catch (error) {;
console.error(`Error fixing ${filePath}:`, error.message);
  }
}
;
function walkDir(dir) {;
const files = fs.readdirSync(dir);
;
files.forEach(file => {;
const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
;
if (stat.isDirectory()) {;
walkDir(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {;
fixDivClosingTags(filePath);
    }
  });
}

// Start fixing from the app directory;
console.log('Starting div closing tag fixes...');
walkDir('./app');
walkDir('./src');
console.log('Div closing tag fixes completed!');