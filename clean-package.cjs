const fs = require('fs');

// Read the package.json file as text
let content = fs.readFileSync('package.json', 'utf8');

// Find the first dependencies section and remove the second one
const lines = content.split('\n');
let inFirstDeps = false;
let inSecondDeps = false;
let braceCount = 0;
let cleanedLines = [];
let skipUntilBrace = false;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  
  if (line.includes('"dependencies": {')) {
    if (!inFirstDeps) {
      inFirstDeps = true;
      cleanedLines.push(line);
      braceCount = 1;
    } else {
      // This is the second dependencies section, skip it
      inSecondDeps = true;
      skipUntilBrace = true;
      continue;
    }
  } else if (inFirstDeps && !inSecondDeps) {
    if (line.includes('{')) braceCount++;
    if (line.includes('}')) braceCount--;
    
    if (braceCount === 0) {
      inFirstDeps = false;
    }
    cleanedLines.push(line);
  } else if (inSecondDeps && skipUntilBrace) {
    if (line.includes('}')) {
      inSecondDeps = false;
      skipUntilBrace = false;
    }
    // Skip this line
  } else {
    cleanedLines.push(line);
  }
}

// Write the cleaned content
fs.writeFileSync('package.json', cleanedLines.join('\n'));

console.log('Cleaned package.json');