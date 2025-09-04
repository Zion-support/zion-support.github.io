const fs = require('fs');

// Read the file
let content = fs.readFileSync('pages/micro-saas.tsx', 'utf8');

// Fix missing closing brackets in features arrays
// Look for patterns like:
// 'some feature',
// ],
// and replace with:
// 'some feature'
// ],

content = content.replace(
  /(\s+'[^']+',\s*)\n\s*(\],)/g,
  (match, text, closing) => {
    // Remove the comma from the last item
    const fixedText = text.replace(/,\s*$/, '');
    return `${fixedText}\n${closing}`;
  }
);

// Fix missing closing brackets in benefits arrays
content = content.replace(
  /(\s+'[^']+',\s*)\n\s*(\],)/g,
  (match, text, closing) => {
    // Remove the comma from the last item
    const fixedText = text.replace(/,\s*$/, '');
    return `${fixedText}\n${closing}`;
  }
);

// Write the fixed content back
fs.writeFileSync('pages/micro-saas.tsx', content);

console.log('Fixed array brackets in micro-saas.tsx');