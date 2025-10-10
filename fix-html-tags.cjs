const fs = require('fs');

// Read the file
let content = fs.readFileSync('/workspace/app/page.tsx', 'utf8');

// Fix self-closing tags that have content
// Pattern: <tag></tag>content</tag> -> <tag>content</tag>
content = content.replace(/<(\w+)([^>]*?)\s*><\/\1>([^<]+)<\/\1>/g, '<$1$2>$3</$1>');

// Fix self-closing tags with content but wrong closing tag
// Pattern: <tag></tag>content</wrongtag> -> <tag>content</tag>
content = content.replace(/<(\w+)([^>]*?)\s*><\/\1>([^<]+)<\/\w+>/g, '<$1$2>$3</$1>');

// Fix specific patterns we've seen
content = content.replace(/<(\w+)([^>]*?)\s*><\/\1>([^<]+)<\/di>/g, '<$1$2>$3</$1>');
content = content.replace(/<(\w+)([^>]*?)\s*><\/\1>([^<]+)<\/h>/g, '<$1$2>$3</$1>');

// Write back to file
fs.writeFileSync('/workspace/app/page.tsx', content);

console.log('Fixed HTML tags in page.tsx');