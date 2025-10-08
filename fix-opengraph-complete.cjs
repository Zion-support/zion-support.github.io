const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Find all blog pages
const files = glob.sync('app/blog/**/*.tsx');

let totalFixed = 0;

files.forEach(file => {
  try {
    let content = fs.readFileSync(file, 'utf8');
    let modified = false;
    
    // Fix incomplete OpenGraph objects
    if (content.includes('openGraph: {') && content.includes('authors: [')) {
      // Check if OpenGraph is incomplete (only has authors)
      const openGraphMatch = content.match(/openGraph:\s*\{\s*authors:\s*\[[^\]]+\]\s*,?\s*\}/);
      if (openGraphMatch) {
        // Extract the title and description from the main metadata
        const titleMatch = content.match(/title:\s*['"`]([^'"`]+)['"`]/);
        const descMatch = content.match(/description:\s*['"`]([^'"`]+)['"`]/);
        
        if (titleMatch && descMatch) {
          const title = titleMatch[1];
          const description = descMatch[1];
          
          // Replace the incomplete OpenGraph
          content = content.replace(
            /openGraph:\s*\{\s*authors:\s*\[[^\]]+\]\s*,?\s*\}/,
            `openGraph: {
    title: '${title}',
    description: '${description}',
    type: 'article',
    authors: ['Zion Tech Group'],
  }`
          );
          modified = true;
        }
      }
    }
    
    if (modified) {
      fs.writeFileSync(file, content, 'utf8');
      console.log(`Fixed incomplete OpenGraph in: ${file}`);
      totalFixed++;
    }
  } catch (error) {
    console.error(`Error processing ${file}:`, error.message);
  }
});

console.log(`\nFixed incomplete OpenGraph in ${totalFixed} files`);