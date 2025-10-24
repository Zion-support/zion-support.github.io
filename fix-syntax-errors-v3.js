const fs = require('fs');
const path = require('path');

// Function to fix common syntax errors in page files
function fixPageFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix stray quotes
    content = content.replace(/<\/Head>"\n/g, '</Head>\n');
    content = content.replace(/<\/div>\);"\n/g, '</div>);\n');
    content = content.replace(/;\s*\}\s*;\s*'\s*"$/g, '\n}');
    
    // Fix malformed meta tags
    content = content.replace(/content="Professional services and solutions for modern businesses\.\" \/>/g, 'content="index, follow" />');
    content = content.replace(/content="Professional services and solutions for modern businesses\.\" \/>/g, 'content="website" />');
    content = content.replace(/content="Professional services and solutions for modern businesses\.\" \/>/g, 'content="Zion Tech Group" />');
    
    // Fix malformed closing tags
    content = content.replace(/<Footer\s+\/>\s*<\/div>\);\s*\)\s*;\s*\}\s*;\s*'\s*"$/g, '<Footer />\n    </div>\n  );\n}');
    
    // Fix missing closing tags for links
    content = content.replace(/Get Started <\/Link>/g, 'Get Started\n            </Link>');
    content = content.replace(/Learn More <\/Link>/g, 'Learn More\n            </Link>');
    
    // Fix any remaining semicolons in JSX
    content = content.replace(/;\s*</g, '<');
    content = content.replace(/>\s*;\s*</g, '><');
    content = content.replace(/>\s*;\s*$/g, '>');
    
    // Fix malformed function endings
    content = content.replace(/;\s*\}\s*;\s*'\s*"$/g, '\n}');
    
    // Ensure proper JSX structure
    if (content.includes('return (\n    <div>')) {
      // This is correct, no change needed
    } else if (content.includes('return (<div>')) {
      content = content.replace(/return \(<div>/g, 'return (\n    <div>');
      modified = true;
    }

    if (modified || content !== fs.readFileSync(filePath, 'utf8')) {
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
console.log('Starting syntax error fixes v3...');
const appDir = path.join(__dirname, 'app');
const fixedCount = fixAllPages(appDir);
console.log(`Fixed ${fixedCount} files`);