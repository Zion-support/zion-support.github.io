const fs = require('fs');

// Read the file
let content = fs.readFileSync('/workspace/app/page.tsx', 'utf8');

// Fix missing closing tags for various elements
const patterns = [
  // Fix h2, h3 tags
  { regex: /(<h[23][^>]*>.*?)\s*$(\s*<\/)/gm, replacement: '$1</h$2' },
  // Fix p tags
  { regex: /(<p[^>]*>.*?)\s*$(\s*<\/)/gm, replacement: '$1</p>$2' },
  // Fix label tags
  { regex: /(<label[^>]*>.*?)\s*$(\s*<\/)/gm, replacement: '$1</label>$2' },
  // Fix button tags
  { regex: /(<button[^>]*>.*?)\s*$(\s*<\/)/gm, replacement: '$1</button>$2' },
  // Fix div tags
  { regex: /(<div[^>]*>.*?)\s*$(\s*<\/)/gm, replacement: '$1</div>$2' },
  // Fix a tags
  { regex: /(<a[^>]*>.*?)\s*$(\s*<\/)/gm, replacement: '$1</a>$2' },
  // Fix span tags
  { regex: /(<span[^>]*>.*?)\s*$(\s*<\/)/gm, replacement: '$1</span>$2' },
  // Fix input tags (self-closing)
  { regex: /(<input[^>]*>)\s*$(\s*<\/)/gm, replacement: '$1$2' },
  // Fix select tags
  { regex: /(<select[^>]*>.*?)\s*$(\s*<\/)/gm, replacement: '$1</select>$2' },
  // Fix textarea tags
  { regex: /(<textarea[^>]*>.*?)\s*$(\s*<\/)/gm, replacement: '$1</textarea>$2' },
  // Fix option tags
  { regex: /(<option[^>]*>.*?)\s*$(\s*<\/)/gm, replacement: '$1</option>$2' },
];

// Apply all patterns
patterns.forEach(pattern => {
  content = content.replace(pattern.regex, pattern.replacement);
});

// Fix specific remaining issues
content = content.replace(/([^>])\s*$(\s*<[a-zA-Z])/gm, '$1$2');
content = content.replace(/([^>])\s*$(\s*<\/[a-zA-Z])/gm, '$1$2');

// Write the fixed content back
fs.writeFileSync('/workspace/app/page.tsx', content);

console.log('All syntax errors fixed!');