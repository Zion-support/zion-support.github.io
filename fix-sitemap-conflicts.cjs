const fs = require('fs');

// Read the sitemap file
let content = fs.readFileSync('app/sitemap/page.tsx', 'utf8');

// Remove all merge conflict markers and keep the newer version (after =======)
content = content.replace(/<<<<<<< HEAD[\s\S]*?=======\s*([\s\S]*?)>>>>>>> cursor\/website-audit-and-update-with-deployment-26c5/g, '$1');

// Clean up any remaining syntax issues
content = content.replace(/;\s*]/g, ']');
content = content.replace(/]\s*;\s*]/g, ']');

// Write the cleaned content back
fs.writeFileSync('app/sitemap/page.tsx', content, 'utf8');

console.log('Sitemap merge conflicts resolved!');