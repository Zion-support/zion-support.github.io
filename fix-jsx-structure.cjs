const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Find all TypeScript/JSX files in the app directory
const files = glob.sync('app/**/*.{ts,tsx}', { cwd: __dirname });

console.log(`Found ${files.length} files to process`);

let fixedCount = 0;

files.forEach(file => {
  const filePath = path.join(__dirname, file);
  
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix common JSX structure issues
    const fixes = [
      // Fix malformed sections with content outside
      {
        pattern: /<section[^>]*>\s*<\/section>\s*<ResponsiveContainer>/g,
        replacement: '<section$1>\n        <ResponsiveContainer>'
      },
      // Fix extra closing braces and parentheses
      {
        pattern: /export default \w+;\s*\);\s*}/g,
        replacement: 'export default $1;'
      },
      // Fix missing closing section tags
      {
        pattern: /<section[^>]*>\s*<ResponsiveContainer>([\s\S]*?)<\/ResponsiveContainer>\s*$/gm,
        replacement: (match, content) => {
          if (!match.includes('</section>')) {
            return match + '\n      </section>';
          }
          return match;
        }
      }
    ];
    
    // Apply basic fixes
    fixes.forEach(fix => {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    });
    
    // Write back if modified
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${file}`);
      fixedCount++;
    }
  } catch (error) {
    console.error(`Error processing ${file}:`, error.message);
  }
});

console.log(`Fixed ${fixedCount} files`);