const fs = require('fs');

// Read the file
let content = fs.readFileSync('/workspace/app/page.tsx', 'utf8');

// Check for unclosed JSX tags
const lines = content.split('\n');
let inJSX = false;
let jsxDepth = 0;
let issues = [];

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  const lineNum = i + 1;
  
  // Check for JSX opening tags
  const openTags = line.match(/<[^/][^>]*>/g);
  if (openTags) {
    openTags.forEach(tag => {
      if (!tag.includes('/>')) { // Not self-closing
        jsxDepth++;
      }
    });
  }
  
  // Check for JSX closing tags
  const closeTags = line.match(/<\/[^>]*>/g);
  if (closeTags) {
    closeTags.forEach(tag => {
      jsxDepth--;
    });
  }
  
  // Check for component definition
  if (line.includes('const HomePage: React.FC = () => {')) {
    if (jsxDepth > 0) {
      issues.push(`Line ${lineNum}: Component definition inside JSX (depth: ${jsxDepth})`);
    }
  }
  
  // Check for unexpected characters
  if (line.includes('const ') && jsxDepth > 0) {
    issues.push(`Line ${lineNum}: const declaration inside JSX (depth: ${jsxDepth})`);
  }
}

console.log('JSX Structure Analysis:');
console.log(`Final JSX depth: ${jsxDepth}`);
console.log(`Issues found: ${issues.length}`);
issues.forEach(issue => console.log(issue));

if (issues.length > 0) {
  console.log('\nTrying to fix issues...');
  
  // Try to find and fix the problematic area
  let fixed = false;
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line.includes('const HomePage: React.FC = () => {')) {
      // Check if we're inside JSX
      let depth = 0;
      for (let j = 0; j < i; j++) {
        const checkLine = lines[j];
        const openTags = checkLine.match(/<[^/][^>]*>/g);
        const closeTags = checkLine.match(/<\/[^>]*>/g);
        
        if (openTags) {
          openTags.forEach(tag => {
            if (!tag.includes('/>')) {
              depth++;
            }
          });
        }
        if (closeTags) {
          closeTags.forEach(tag => {
            depth--;
          });
        }
      }
      
      if (depth > 0) {
        console.log(`Found component definition inside JSX at line ${i + 1} (depth: ${depth})`);
        // Try to close the JSX before the component definition
        lines[i] = '  '.repeat(depth) + ');\n\n' + line;
        fixed = true;
        break;
      }
    }
  }
  
  if (fixed) {
    fs.writeFileSync('/workspace/app/page.tsx', lines.join('\n'));
    console.log('Fixed JSX structure issues');
  }
}