const fs = require('fs');

// Read the file
let content = fs.readFileSync('/workspace/app/page.tsx', 'utf8');

// Fix common HTML structure issues
// 1. Fix self-closing tags with content
content = content.replace(/<(\w+)([^>]*?)\s*><\/\1>([^<]+)<\/\w+>/g, '<$1$2>$3</$1>');

// 2. Fix specific patterns we've seen
content = content.replace(/<(\w+)([^>]*?)\s*><\/\1>([^<]+)<\/di>/g, '<$1$2>$3</$1>');
content = content.replace(/<(\w+)([^>]*?)\s*><\/\1>([^<]+)<\/h>/g, '<$1$2>$3</$1>');

// 3. Fix self-closing tags that should have content
content = content.replace(/<(\w+)([^>]*?)\s*><\/\1>([^<]+)<\/\1>/g, '<$1$2>$3</$1>');

// 4. Fix specific malformed patterns
content = content.replace(/<(\w+)([^>]*?)\s*><\/\1>([^<]+)<\/\w+>/g, '<$1$2>$3</$1>');

// 5. Fix article tags that are self-closing but have content
content = content.replace(/<article([^>]*?)\s*><\/article>([^<]+)<\/article>/g, '<article$1>$2</article>');

// 6. Fix div tags that are self-closing but have content
content = content.replace(/<div([^>]*?)\s*><\/div>([^<]+)<\/div>/g, '<div$1>$2</div>');

// 7. Fix h3 tags that are self-closing but have content
content = content.replace(/<h3([^>]*?)\s*><\/h3>([^<]+)<\/h3>/g, '<h3$1>$2</h3>');

// 8. Fix Suspense tags that are self-closing but have content
content = content.replace(/<Suspense([^>]*?)\s*><\/Suspense>([^<]+)<\/Suspense>/g, '<Suspense$1>$2</Suspense>');

// 9. Fix section tags that are self-closing but have content
content = content.replace(/<section([^>]*?)\s*><\/section>([^<]+)<\/section>/g, '<section$1>$2</section>');

// 10. Fix main tags that are self-closing but have content
content = content.replace(/<main([^>]*?)\s*><\/main>([^<]+)<\/main>/g, '<main$1>$2</main>');

// Write back to file
fs.writeFileSync('/workspace/app/page.tsx', content);

console.log('Fixed all HTML structure issues in page.tsx');