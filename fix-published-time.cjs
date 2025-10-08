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
    
    // Fix publishedTime - it should be in openGraph, not in main metadata
    if (content.includes('publishedTime:') && content.includes('export const metadata')) {
      // Extract publishedTime value
      const publishedTimeMatch = content.match(/publishedTime:\s*["']([^"']+)["']/);
      if (publishedTimeMatch) {
        const publishedTime = publishedTimeMatch[1];
        
        // Remove publishedTime from main metadata
        content = content.replace(/,\s*publishedTime:\s*["'][^"']+["']/g, '');
        
        // Add publishedTime to openGraph if it exists
        if (content.includes('openGraph:')) {
          content = content.replace(
            /(openGraph:\s*\{[^}]*)(\})/,
            `$1\n    publishedTime: '${publishedTime}',$2`
          );
        } else {
          // Add openGraph section if it doesn't exist
          content = content.replace(
            /(export const metadata:\s*Metadata\s*=\s*\{[^}]*)(\})/,
            `$1,\n  openGraph: {\n    publishedTime: '${publishedTime}'\n  }$2`
          );
        }
        
        modified = true;
      }
    }
    
    if (modified) {
      fs.writeFileSync(file, content, 'utf8');
      console.log(`Fixed publishedTime in: ${file}`);
      totalFixed++;
    }
  } catch (error) {
    console.error(`Error processing ${file}:`, error.message);
  }
});

console.log(`\nFixed publishedTime in ${totalFixed} files`);