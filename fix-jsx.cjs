const fs = require('fs');

// Read the file
let content = fs.readFileSync('app/page.tsx', 'utf8');

// Fix self-closing div tags with content
content = content.replace(/<div([^>]*)><\/div>([^<]+)<\/div>/g, '<div$1>$2</div>');

// Fix self-closing h3 tags with content
content = content.replace(/<h3([^>]*)><\/h3>([^<]+)<\/h3>/g, '<h3$1>$2</h3>');

// Fix self-closing p tags with content
content = content.replace(/<p([^>]*)><\/p>([^<]+)<\/p>/g, '<p$1>$2</p>');

// Fix self-closing a tags with content
content = content.replace(/<a([^>]*)><\/a>([^<]+)<\/a>/g, '<a$1>$2</a>');

// Fix self-closing article tags with content
content = content.replace(/<article([^>]*)><\/article>([^<]+)<\/article>/g, '<article$1>$2</article>');

// Write the fixed content back
fs.writeFileSync('app/page.tsx', content);

console.log('Fixed malformed JSX tags in app/page.tsx');