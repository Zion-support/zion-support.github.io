import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to fix corrupted TSX files
function fixCorruptedFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Common patterns to fix
    const fixes = [
      // Fix unterminated string literals
      { pattern: /export default function Page\(\) \{'  return \(/, replace: 'export default function Page() {\n  return (' },
      { pattern: /export default function Page\(\) \{'  return \(/, replace: 'export default function Page() {\n  return (' },
      
      // Fix malformed JSX structure
      { pattern: /<React\.Fragment>\s*\);\s*<\/React\.Fragment><Helmet>/, replace: '<React.Fragment>\n      <Helmet>' },
      { pattern: /<\/Helmet>;\s*<div>\s*<div>/, replace: '</Helmet>\n      <div>\n        <div>' },
      { pattern: /}\s*\};\s*\};\s*$/, replace: '  );\n}' },
      
      // Fix missing quotes in meta descriptions
      { pattern: /name="description"content=/, replace: 'name="description" content=' },
      
      // Fix malformed JSX closing tags
      { pattern: /<\/div>\s*<\/div>\s*<\/React\.Fragment>;\s*\);\s*\};\s*$/, replace: '        </div>\n      </div>\n    </React.Fragment>\n  );\n}' },
      
      // Fix missing opening div tags
      { pattern: /return \(\s*div>/, replace: 'return (\n    <div>' },
      
      // Fix malformed function declarations
      { pattern: /const PagePage = \(\) => \{\s*return \(\s*div>/, replace: 'const PagePage = () => {\n  return (\n    <div>' },
      
      // Fix missing closing parentheses and braces
      { pattern: /}\s*\};\s*export default PagePage;\s*$/, replace: '  );\n};\n\nexport default PagePage;' },
      
      // Fix malformed JSX expressions
      { pattern: /JSX expressions must have one parent element/, replace: '' },
      
      // Fix unterminated string literals
      { pattern: /content="[^"]*$/, replace: (match) => match + '"' },
      
      // Fix missing closing tags
      { pattern: /<div>\s*<div>\s*<h1[^>]*>[^<]*<\/h1>\s*<p[^>]*>[^<]*<\/p>\s*<\/div>\s*<\/div>\s*$/, replace: '        <div>\n          <h1 className="text-4xl font-bold text-white mb-4">Page Title</h1>\n          <p className="text-gray-300">Coming soon...</p>\n        </div>\n      </div>' }
    ];
    
    // Apply fixes
    fixes.forEach(fix => {
      if (typeof fix.replace === 'function') {
        content = content.replace(fix.pattern, fix.replace);
      } else {
        content = content.replace(fix.pattern, fix.replace);
      }
    });
    
    // Additional cleanup
    content = content
      .replace(/\s*;\s*$/, '')
      .replace(/\}\s*;\s*$/, '}')
      .replace(/\}\s*;\s*;\s*$/, '}')
      .replace(/\}\s*;\s*;\s*;\s*$/, '}')
      .replace(/\s*;\s*;\s*$/, '')
      .replace(/\s*;\s*;\s*;\s*$/, '');
    
    // Write the fixed content back
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Fixed: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to get all TSX files in the app directory
function getAllTSXFiles(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        traverse(fullPath);
      } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
const appDir = path.join(__dirname, 'app');
const tsxFiles = getAllTSXFiles(appDir);

console.log(`Found ${tsxFiles.length} TSX/TS files to check...`);

let fixedCount = 0;
for (const file of tsxFiles) {
  if (fixCorruptedFile(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} out of ${tsxFiles.length} files.`);
