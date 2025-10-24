const fs = require('fs');
const path = require('path');

// Function to fix common syntax errors in page files
function fixPageFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix common syntax errors
    const fixes = [
      // Fix semicolons after imports
      { pattern: /import Footer from '\.\.\/components\/Footer'\n;/g, replacement: "import Footer from '../components/Footer'\n" },
      
      // Fix semicolons in function declarations
      { pattern: /export default function ServicePage\(\) \{\n  return \(<div>/g, replacement: "export default function ServicePage() {\n  return (\n    <div>" },
      
      // Fix semicolons in JSX attributes
      { pattern: /content="[^"]*" \/>\"/g, replacement: 'content="$1" />' },
      
      // Fix semicolons in className attributes
      { pattern: /className="[^"]*" \/>\"/g, replacement: 'className="$1" />' },
      
      // Fix semicolons in href attributes
      { pattern: /href="[^"]*" \/>\"/g, replacement: 'href="$1" />' },
      
      // Fix semicolons in text content
      { pattern: />\s*[^<]*;\s*</g, replacement: (match) => match.replace(/;\s*/, ' ') },
      
      // Fix semicolons in closing tags
      { pattern: /<\/[^>]+>;\s*</g, replacement: (match) => match.replace(/;\s*/, '') },
      
      // Fix semicolons in function returns
      { pattern: /\)\s*;\s*\}\s*;\s*'\s*"/g, replacement: ')\n  );\n}' },
      
      // Fix malformed JSX structure
      { pattern: /return \(<div>\n\s*<Head>/g, replacement: "return (\n    <div>\n      <Head>" },
      
      // Fix Footer component calls
      { pattern: /<Footer\s+\/>;\s*<\/div>\);\s*\)\s*;\s*\}\s*;\s*'\s*"/g, replacement: '<Footer />\n    </div>\n  );\n}' },
      
      // Fix malformed closing
      { pattern: /;\s*\}\s*;\s*'\s*"$/g, replacement: '\n}' }
    ];

    fixes.forEach(fix => {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    });

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and fix all page.tsx files
function fixAllPages(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      // Skip node_modules and other non-page directories
      if (!['node_modules', '.next', '.git'].includes(file)) {
        fixedCount += fixAllPages(filePath);
      }
    } else if (file === 'page.tsx') {
      if (fixPageFile(filePath)) {
        fixedCount++;
      }
    }
  });
  
  return fixedCount;
}

// Main execution
console.log('Starting syntax error fixes...');
const appDir = path.join(__dirname, 'app');
const fixedCount = fixAllPages(appDir);
console.log(`Fixed ${fixedCount} files`);