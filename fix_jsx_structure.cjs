const fs = require('fs');

// Read the App.tsx file
let content = fs.readFileSync('/workspace/src/App.tsx', 'utf8');

// Fix the JSX structure by ensuring proper closing tags
// The issue is that the main route element is not properly closed

// Find the problematic section and fix it
const lines = content.split('\n');
let fixedLines = [];
let inMainRoute = false;
let divCount = 0;
let mainCount = 0;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  
  if (line.includes('<Route path="/" element={')) {
    inMainRoute = true;
    fixedLines.push(line);
    continue;
  }
  
  if (inMainRoute) {
    if (line.includes('<div')) {
      divCount++;
    }
    if (line.includes('</div>')) {
      divCount--;
    }
    if (line.includes('<main')) {
      mainCount++;
    }
    if (line.includes('</main>')) {
      mainCount--;
    }
    
    // Check if we're at the end of the main route
    if (line.includes('} />') && inMainRoute) {
      // Ensure all divs and main are closed
      while (mainCount > 0) {
        fixedLines.push('              </main>');
        mainCount--;
      }
      while (divCount > 0) {
        fixedLines.push('            </div>');
        divCount--;
      }
      inMainRoute = false;
    }
  }
  
  fixedLines.push(line);
}

// Write the fixed content
fs.writeFileSync('/workspace/src/App.tsx', fixedLines.join('\n'));
console.log('JSX structure fixed!');