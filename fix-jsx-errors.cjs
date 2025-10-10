const fs = require('fs');
const path = require('path');

// Function to fix JSX closing tag errors
function fixJsxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix incomplete closing tags like "  </" to proper closing tags
    const patterns = [
      // Fix h1, h2, h3, etc.
      { pattern: /(\s+)<\/\s*$/gm, replacement: '$1' },
      // Fix button tags
      { pattern: /(\s+)<\/\s*$/gm, replacement: '$1' },
      // Fix p tags
      { pattern: /(\s+)<\/\s*$/gm, replacement: '$1' },
      // Fix span tags
      { pattern: /(\s+)<\/\s*$/gm, replacement: '$1' },
      // Fix section tags
      { pattern: /(\s+)<\/\s*$/gm, replacement: '$1' },
      // Fix main tags
      { pattern: /(\s+)<\/\s*$/gm, replacement: '$1' },
      // Fix React.Fragment tags
      { pattern: /(\s+)<\/\s*$/gm, replacement: '$1' }
    ];

    // More specific patterns for common JSX issues
    const specificPatterns = [
      // Fix incomplete h1 closing tags
      { pattern: /<h1[^>]*>([^<]*)<\/\s*$/gm, replacement: '<h1$1</h1>' },
      // Fix incomplete h2 closing tags
      { pattern: /<h2[^>]*>([^<]*)<\/\s*$/gm, replacement: '<h2$1</h2>' },
      // Fix incomplete button closing tags
      { pattern: /<button[^>]*>([^<]*)<\/\s*$/gm, replacement: '<button$1</button>' },
      // Fix incomplete p closing tags
      { pattern: /<p[^>]*>([^<]*)<\/\s*$/gm, replacement: '<p$1</p>' },
      // Fix incomplete span closing tags
      { pattern: /<span[^>]*>([^<]*)<\/\s*$/gm, replacement: '<span$1</span>' },
      // Fix incomplete section closing tags
      { pattern: /<section[^>]*>([^<]*)<\/\s*$/gm, replacement: '<section$1</section>' },
      // Fix incomplete main closing tags
      { pattern: /<main[^>]*>([^<]*)<\/\s*$/gm, replacement: '<main$1</main>' },
      // Fix incomplete React.Fragment closing tags
      { pattern: /<React\.Fragment[^>]*>([^<]*)<\/\s*$/gm, replacement: '<React.Fragment$1</React.Fragment>' }
    ];

    // Apply specific patterns
    for (const { pattern, replacement } of specificPatterns) {
      const newContent = content.replace(pattern, replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    }

    // Fix common incomplete closing tags
    const incompleteClosingTags = [
      { pattern: /(\s+)<\/\s*$/gm, replacement: '$1' },
      { pattern: /(\s+)<\/\s*$/gm, replacement: '$1' },
      { pattern: /(\s+)<\/\s*$/gm, replacement: '$1' },
      { pattern: /(\s+)<\/\s*$/gm, replacement: '$1' },
      { pattern: /(\s+)<\/\s*$/gm, replacement: '$1' },
      { pattern: /(\s+)<\/\s*$/gm, replacement: '$1' },
      { pattern: /(\s+)<\/\s*$/gm, replacement: '$1' },
      { pattern: /(\s+)<\/\s*$/gm, replacement: '$1' }
    ];

    for (const { pattern, replacement } of incompleteClosingTags) {
      const newContent = content.replace(pattern, replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    }

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed JSX errors in: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all TypeScript/TSX files
function findTsxFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      files.push(...findTsxFiles(fullPath));
    } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Main execution
const appDir = path.join(__dirname, 'app');
const apiDir = path.join(__dirname, 'api');

console.log('Starting JSX error fixes...');

// Find all TSX/TS files
const tsxFiles = [
  ...findTsxFiles(appDir),
  ...findTsxFiles(apiDir)
];

let fixedCount = 0;
for (const file of tsxFiles) {
  if (fixJsxErrors(file)) {
    fixedCount++;
  }
}

console.log(`Fixed JSX errors in ${fixedCount} files.`);