const fs = require('fs');

// Read the file
const filePath = '/workspace/app/page.tsx';
let content = fs.readFileSync(filePath, 'utf8');

// Fix common JSX syntax errors
const fixes = [
  // Fix malformed anchor tags
  { pattern: /<a([^>]*)><\/a>\s*([^<]+)\s*<\/a>/g, replacement: '<a$1>$2</a>' },
  
  // Fix malformed div tags
  { pattern: /<div([^>]*)><\/div>\s*([^<]+)\s*<\/div>/g, replacement: '<div$1>$2</div>' },
  
  // Fix malformed section tags
  { pattern: /<section([^>]*)><\/section>\s*([^<]+)\s*<\/section>/g, replacement: '<section$1>$2</section>' },
  
  // Fix malformed h1, h2, h3 tags
  { pattern: /<h([1-6])([^>]*)><\/h[1-6]>\s*([^<]+)\s*<\/h[1-6]>/g, replacement: '<h$1$2>$3</h$1>' },
  
  // Fix malformed p tags
  { pattern: /<p([^>]*)><\/p>\s*([^<]+)\s*<\/p>/g, replacement: '<p$1>$2</p>' },
  
  // Fix malformed article tags
  { pattern: /<article([^>]*)><\/article>\s*([^<]+)\s*<\/article>/g, replacement: '<article$1>$2</article>' },
  
  // Fix malformed main tags
  { pattern: /<main([^>]*)><\/main>\s*([^<]+)\s*<\/main>/g, replacement: '<main$1>$2</main>' },
  
  // Fix malformed button tags
  { pattern: /<button([^>]*)><\/button>\s*([^<]+)\s*<\/button>/g, replacement: '<button$1>$2</button>' },
  
  // Fix malformed span tags
  { pattern: /<span([^>]*)><\/span>\s*([^<]+)\s*<\/span>/g, replacement: '<span$1>$2</span>' },
  
  // Fix malformed li tags
  { pattern: /<li([^>]*)><\/li>\s*([^<]+)\s*<\/li>/g, replacement: '<li$1>$2</li>' },
  
  // Fix malformed ul/ol tags
  { pattern: /<(ul|ol)([^>]*)><\/(ul|ol)>\s*([^<]+)\s*<\/(ul|ol)>/g, replacement: '<$1$2>$4</$1>' },
  
  // Fix malformed nav tags
  { pattern: /<nav([^>]*)><\/nav>\s*([^<]+)\s*<\/nav>/g, replacement: '<nav$1>$2</nav>' },
  
  // Fix malformed header/footer tags
  { pattern: /<(header|footer)([^>]*)><\/(header|footer)>\s*([^<]+)\s*<\/(header|footer)>/g, replacement: '<$1$2>$4</$1>' },
  
  // Fix malformed form tags
  { pattern: /<form([^>]*)><\/form>\s*([^<]+)\s*<\/form>/g, replacement: '<form$1>$2</form>' },
  
  // Fix malformed input tags
  { pattern: /<input([^>]*)><\/input>\s*([^<]+)\s*<\/input>/g, replacement: '<input$1 />' },
  
  // Fix malformed textarea tags
  { pattern: /<textarea([^>]*)><\/textarea>\s*([^<]+)\s*<\/textarea>/g, replacement: '<textarea$1>$2</textarea>' },
  
  // Fix malformed select tags
  { pattern: /<select([^>]*)><\/select>\s*([^<]+)\s*<\/select>/g, replacement: '<select$1>$2</select>' },
  
  // Fix malformed option tags
  { pattern: /<option([^>]*)><\/option>\s*([^<]+)\s*<\/option>/g, replacement: '<option$1>$2</option>' },
  
  // Fix malformed label tags
  { pattern: /<label([^>]*)><\/label>\s*([^<]+)\s*<\/label>/g, replacement: '<label$1>$2</label>' },
  
  // Fix malformed img tags
  { pattern: /<img([^>]*)><\/img>\s*([^<]+)\s*<\/img>/g, replacement: '<img$1 />' },
  
  // Fix malformed br tags
  { pattern: /<br([^>]*)><\/br>\s*([^<]+)\s*<\/br>/g, replacement: '<br$1 />' },
  
  // Fix malformed hr tags
  { pattern: /<hr([^>]*)><\/hr>\s*([^<]+)\s*<\/hr>/g, replacement: '<hr$1 />' },
  
  // Fix malformed meta tags
  { pattern: /<meta([^>]*)><\/meta>\s*([^<]+)\s*<\/meta>/g, replacement: '<meta$1 />' },
  
  // Fix malformed link tags
  { pattern: /<link([^>]*)><\/link>\s*([^<]+)\s*<\/link>/g, replacement: '<link$1 />' },
  
  // Fix malformed script tags
  { pattern: /<script([^>]*)><\/script>\s*([^<]+)\s*<\/script>/g, replacement: '<script$1>$2</script>' },
  
  // Fix malformed style tags
  { pattern: /<style([^>]*)><\/style>\s*([^<]+)\s*<\/style>/g, replacement: '<style$1>$2</style>' },
  
  // Fix malformed title tags
  { pattern: /<title([^>]*)><\/title>\s*([^<]+)\s*<\/title>/g, replacement: '<title$1>$2</title>' },
  
  // Fix malformed Suspense tags
  { pattern: /<Suspense([^>]*)><\/Suspense>\s*([^<]+)\s*<\/Suspense>/g, replacement: '<Suspense$1>$2</Suspense>' },
  
  // Fix malformed React.Fragment tags
  { pattern: /<React\.Fragment([^>]*)><\/React\.Fragment>\s*([^<]+)\s*<\/React\.Fragment>/g, replacement: '<React.Fragment$1>$2</React.Fragment>' },
  
  // Fix malformed <> tags
  { pattern: /<>([^<]+)<\/>/g, replacement: '<>$1</>' },
  
  // Fix malformed closing tags that don't match opening tags
  { pattern: /<\/a>\s*([^<]+)\s*<\/a>/g, replacement: '$1</a>' },
  { pattern: /<\/div>\s*([^<]+)\s*<\/div>/g, replacement: '$1</div>' },
  { pattern: /<\/section>\s*([^<]+)\s*<\/section>/g, replacement: '$1</section>' },
  { pattern: /<\/main>\s*([^<]+)\s*<\/main>/g, replacement: '$1</main>' },
  { pattern: /<\/article>\s*([^<]+)\s*<\/article>/g, replacement: '$1</article>' },
  { pattern: /<\/h[1-6]>\s*([^<]+)\s*<\/h[1-6]>/g, replacement: '$1</h$1>' },
  { pattern: /<\/p>\s*([^<]+)\s*<\/p>/g, replacement: '$1</p>' },
  { pattern: /<\/button>\s*([^<]+)\s*<\/button>/g, replacement: '$1</button>' },
  { pattern: /<\/span>\s*([^<]+)\s*<\/span>/g, replacement: '$1</span>' },
  { pattern: /<\/li>\s*([^<]+)\s*<\/li>/g, replacement: '$1</li>' },
  { pattern: /<\/(ul|ol)>\s*([^<]+)\s*<\/(ul|ol)>/g, replacement: '$2</$1>' },
  { pattern: /<\/(header|footer)>\s*([^<]+)\s*<\/(header|footer)>/g, replacement: '$2</$1>' },
  { pattern: /<\/nav>\s*([^<]+)\s*<\/nav>/g, replacement: '$1</nav>' },
  { pattern: /<\/form>\s*([^<]+)\s*<\/form>/g, replacement: '$1</form>' },
  { pattern: /<\/textarea>\s*([^<]+)\s*<\/textarea>/g, replacement: '$1</textarea>' },
  { pattern: /<\/select>\s*([^<]+)\s*<\/select>/g, replacement: '$1</select>' },
  { pattern: /<\/option>\s*([^<]+)\s*<\/option>/g, replacement: '$1</option>' },
  { pattern: /<\/label>\s*([^<]+)\s*<\/label>/g, replacement: '$1</label>' },
  { pattern: /<\/script>\s*([^<]+)\s*<\/script>/g, replacement: '$1</script>' },
  { pattern: /<\/style>\s*([^<]+)\s*<\/style>/g, replacement: '$1</style>' },
  { pattern: /<\/title>\s*([^<]+)\s*<\/title>/g, replacement: '$1</title>' },
  { pattern: /<\/Suspense>\s*([^<]+)\s*<\/Suspense>/g, replacement: '$1</Suspense>' },
  { pattern: /<\/React\.Fragment>\s*([^<]+)\s*<\/React\.Fragment>/g, replacement: '$1</React.Fragment>' },
  { pattern: /<\/>\s*([^<]+)\s*<\/>/g, replacement: '$1</>' },
];

// Apply fixes
fixes.forEach(fix => {
  content = content.replace(fix.pattern, fix.replacement);
});

// Write the fixed content back
fs.writeFileSync(filePath, content, 'utf8');

console.log('Comprehensive JSX syntax fixes applied to page.tsx');