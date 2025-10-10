const fs = require('fs');

// Read the Navigation.tsx file
let content = fs.readFileSync('/workspace/app/components/Navigation.tsx', 'utf8');

// Find the end of the component and clean up
const lines = content.split('\n');
let cleanLines = [];
let foundEnd = false;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  
  if (line.includes('export default Navigation;')) {
    cleanLines.push(line);
    foundEnd = true;
    break;
  }
  
  cleanLines.push(line);
}

if (foundEnd) {
  // Write the cleaned content back
  fs.writeFileSync('/workspace/app/components/Navigation.tsx', cleanLines.join('\n'), 'utf8');
  console.log('Cleaned up Navigation.tsx file');
} else {
  console.log('Could not find end of Navigation component');
}