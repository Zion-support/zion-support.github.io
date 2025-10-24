const fs = require('fs');
const path = require('path');

// Function to fix common syntax errors in page files
function fixPageFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix $1 placeholders
    if (content.includes('$1')) {
      content = content.replace(/content="\$1"/g, 'content="Professional services and solutions for modern businesses."');
      content = content.replace(/content="\$1"/g, 'content="index, follow"');
      content = content.replace(/content="\$1"/g, 'content="website"');
      content = content.replace(/content="\$1"/g, 'content="Zion Tech Group"');
      modified = true;
    }

    // Fix malformed JSX structure
    if (content.includes('return (\n    <div>')) {
      content = content.replace(/return \(\n    <div>/g, 'return (\n    <div>');
      modified = true;
    }

    // Fix semicolons in JSX
    content = content.replace(/;\s*</g, '<');
    content = content.replace(/>\s*;\s*</g, '><');
    content = content.replace(/>\s*;\s*$/g, '>');
    
    // Fix malformed closing tags
    content = content.replace(/<Footer\s+\/>\s*<\/div>\);\s*\)\s*;\s*\}\s*;\s*'\s*"$/g, '<Footer />\n    </div>\n  );\n}');
    
    // Fix malformed function endings
    content = content.replace(/;\s*\}\s*;\s*'\s*"$/g, '\n}');
    
    // Fix missing closing tags
    if (content.includes('Get Started </Link>')) {
      content = content.replace(/Get Started <\/Link>/g, 'Get Started\n            </Link>');
      modified = true;
    }
    
    if (content.includes('Learn More </Link>')) {
      content = content.replace(/Learn More <\/Link>/g, 'Learn More\n            </Link>');
      modified = true;
    }

    // Fix malformed meta tags
    content = content.replace(/content="[^"]*"\s*\/>\"/g, (match) => {
      const content = match.match(/content="([^"]*)"/);
      if (content) {
        return `content="${content[1]}" />`;
      }
      return match;
    });

    // Fix malformed className attributes
    content = content.replace(/className="[^"]*"\s*\/>\"/g, (match) => {
      const className = match.match(/className="([^"]*)"/);
      if (className) {
        return `className="${className[1]}" />`;
      }
      return match;
    });

    // Fix malformed href attributes
    content = content.replace(/href="[^"]*"\s*\/>\"/g, (match) => {
      const href = match.match(/href="([^"]*)"/);
      if (href) {
        return `href="${href[1]}" />`;
      }
      return match;
    });

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
console.log('Starting syntax error fixes v2...');
const appDir = path.join(__dirname, 'app');
const fixedCount = fixAllPages(appDir);
console.log(`Fixed ${fixedCount} files`);