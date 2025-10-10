const fs = require('fs');

// Read the file
let content = fs.readFileSync('app/page.tsx', 'utf8');

// Fix malformed tags - pattern: ></tag>content</tag>
// This matches tags that are self-closing but have content and closing tags
const malformedTagPattern = /><\/([^>]+)>([^<]+)<\/\1>/g;

// Replace with proper opening and closing tags
content = content.replace(malformedTagPattern, '>$2</$1>');

// Fix specific patterns that are common
content = content.replace(/><\/di>/g, '>');
content = content.replace(/><\/h>/g, '>');
content = content.replace(/><\/div>/g, '>');

// Fix self-closing divs that should have content
content = content.replace(/<div([^>]*)><\/div>([^<]+)<\/div>/g, '<div$1>$2</div>');

// Fix self-closing h3 tags that should have content
content = content.replace(/<h3([^>]*)><\/h3>([^<]+)<\/h3>/g, '<h3$1>$2</h3>');

// Fix self-closing p tags that should have content
content = content.replace(/<p([^>]*)><\/p>([^<]+)<\/p>/g, '<p$1>$2</p>');

// Write the fixed content back
fs.writeFileSync('app/page.tsx', content);

console.log('Fixed malformed tags in app/page.tsx');