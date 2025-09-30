import fs from 'fs';
// Read the accessibility.tsx file;
const content = fs.readFileSync('pages/accessibility.tsxutf8')
// Fix the malformed array structure
let fixedContent = content
// Fix the guidelines arrays
fixedContent = fixedContent.replace(/guidelines: []\s*"([^"]+)"/g, 'guidelines: [\n      "$1"')
fixedContent = fixedContent.replace(/"([^"]+)"]\s*]/g, '"$1"\n    ]\n  }')
// Fix missing commas between array items
fixedContent = fixedContent.replace(/}\s*\n\s*{/g, '},\n  {')
// Fix trailing commas
fixedContent = fixedContent.replace(/,(\s*])/g, '$1')
// Write the fixed content back
fs.writeFileSync('pages/accessibility.tsx', fixedContent)
console.log('Fixed accessibility.tsx')