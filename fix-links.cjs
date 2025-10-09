const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Find all TypeScript/TSX files
const files = glob.sync('src/**/*.{ts,tsx}', { ignore: ['src/**/*.d.ts'] });

console.log(`Found ${files.length} files to process`);

let totalFixed = 0;

files.forEach(file => {
  try {
    let content = fs.readFileSync(file, 'utf8');
    let modified = false;
    
    // Fix Link components using href instead of to
    const linkHrefRegex = /<Link\s+([^>]*?)href="([^"]*)"([^>]*?)>/g;
    const linkMatches = content.match(linkHrefRegex);
    
    if (linkMatches) {
      content = content.replace(linkHrefRegex, (match, before, href, after) => {
        // Only replace if it's not already using 'to='
        if (!before.includes('to=') && !after.includes('to=')) {
          modified = true;
          return `<Link ${before}to="${href}"${after}>`;
        }
        return match;
      });
    }
    
    if (modified) {
      fs.writeFileSync(file, content, 'utf8');
      console.log(`Fixed Link href issues in: ${file}`);
      totalFixed++;
    }
  } catch (error) {
    console.error(`Error processing ${file}:`, error.message);
  }
});

console.log(`Fixed Link href issues in ${totalFixed} files`);