const fs = require('fs');
const path = require('path');

// Function to recursively find all .tsx files
function findTsxFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files.push(...findTsxFiles(fullPath));
    } else if (item.endsWith('.tsx')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Function to fix JSX structure issues
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix self-closing div tags that should be opening tags with content
    const patterns = [
      // Fix div tags with content inside - more comprehensive patterns
      { 
        pattern: /<div([^>]*?)><\/div>\s*([^<]+?)\s*<\/div>/g, 
        replacement: '<div$1>$2</div>' 
      },
      // Fix div tags with nested JSX content
      { 
        pattern: /<div([^>]*?)><\/div>\s*<([^>]+?)><\/\2>/g, 
        replacement: '<div$1><$2></$2></div>' 
      },
      // Fix div tags with mapped content
      { 
        pattern: /<div([^>]*?)><\/div>\s*\{[^}]+\.map\([^)]+\)\s*=>\s*\(/g, 
        replacement: '<div$1>{' 
      },
      // Fix button tags with content
      { 
        pattern: /<button([^>]*?)><\/button>\s*([^<]+?)\s*<\/button>/g, 
        replacement: '<button$1>$2</button>' 
      },
      // Fix p tags with content
      { 
        pattern: /<p([^>]*?)><\/p>\s*([^<]+?)\s*<\/p>/g, 
        replacement: '<p$1>$2</p>' 
      },
      // Fix h1, h2, h3, h4, h5, h6 tags with content
      { 
        pattern: /<(h[1-6])([^>]*?)><\/\1>\s*([^<]+?)\s*<\/\1>/g, 
        replacement: '<$1$2>$3</$1>' 
      },
      // Fix ul tags with content
      { 
        pattern: /<ul([^>]*?)><\/ul>\s*([^<]+?)\s*<\/ul>/g, 
        replacement: '<ul$1>$2</ul>' 
      },
      // Fix li tags with content
      { 
        pattern: /<li([^>]*?)><\/li>\s*([^<]+?)\s*<\/li>/g, 
        replacement: '<li$1>$2</li>' 
      },
      // Fix section tags with content
      { 
        pattern: /<section([^>]*?)><\/section>\s*([^<]+?)\s*<\/section>/g, 
        replacement: '<section$1>$2</section>' 
      },
      // Fix main tags with content
      { 
        pattern: /<main([^>]*?)><\/main>\s*([^<]+?)\s*<\/main>/g, 
        replacement: '<main$1>$2</main>' 
      },
      // Fix article tags with content
      { 
        pattern: /<article([^>]*?)><\/article>\s*([^<]+?)\s*<\/article>/g, 
        replacement: '<article$1>$2</article>' 
      },
      // Fix header tags with content
      { 
        pattern: /<header([^>]*?)><\/header>\s*([^<]+?)\s*<\/header>/g, 
        replacement: '<header$1>$2</header>' 
      },
      // Fix aside tags with content
      { 
        pattern: /<aside([^>]*?)><\/aside>\s*([^<]+?)\s*<\/aside>/g, 
        replacement: '<aside$1>$2</aside>' 
      },
      // Fix nav tags with content
      { 
        pattern: /<nav([^>]*?)><\/nav>\s*([^<]+?)\s*<\/nav>/g, 
        replacement: '<nav$1>$2</nav>' 
      },
      // Fix footer tags with content
      { 
        pattern: /<footer([^>]*?)><\/footer>\s*([^<]+?)\s*<\/footer>/g, 
        replacement: '<footer$1>$2</footer>' 
      }
    ];
    
    for (const { pattern, replacement } of patterns) {
      const newContent = content.replace(pattern, replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    }
    
    // Fix specific malformed patterns
    const specificFixes = [
      // Fix malformed JSX with strange characters
      { 
        pattern: /,\s*-\s*>\s*([^<]+?)\s*`\s*-\s*>\s*([^<]+?)\s*`/g, 
        replacement: '$1$2' 
      },
      // Fix malformed closing tags
      { 
        pattern: /,\s*-\s*>\s*([^<]+?)\s*`\s*-\s*>\s*([^<]+?)\s*`\s*-\s*>\s*([^<]+?)\s*`/g, 
        replacement: '$1$2$3' 
      },
      // Fix malformed JSX structure
      { 
        pattern: /,\s*-\s*>\s*([^<]+?)\s*`\s*-\s*>\s*([^<]+?)\s*`\s*-\s*>\s*([^<]+?)\s*`\s*-\s*>\s*([^<]+?)\s*`/g, 
        replacement: '$1$2$3$4' 
      }
    ];
    
    for (const { pattern, replacement } of specificFixes) {
      const newContent = content.replace(pattern, replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed JSX structure: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Main execution
const appDir = path.join(__dirname, 'app');
const tsxFiles = findTsxFiles(appDir);

console.log(`Found ${tsxFiles.length} .tsx files to check`);

let fixedCount = 0;
for (const file of tsxFiles) {
  const originalContent = fs.readFileSync(file, 'utf8');
  fixFile(file);
  const newContent = fs.readFileSync(file, 'utf8');
  if (originalContent !== newContent) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files`);