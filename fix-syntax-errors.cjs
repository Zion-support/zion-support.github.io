const fs = require('fs');
const path = require('path');

// Function to fix common syntax errors in React files
function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix broken JSX closing tags
    if (content.includes('  </\n              </div>')) {
      content = content.replace(/  <\/\n              <\/div>/g, '              </button>\n            </div>');
      modified = true;
    }

    // Fix broken meta descriptions
    if (content.includes('content="Professional Page services by Zion Tech Group. Advanced AI and IT solutions...')) {
      content = content.replace(
        /content="Professional Page services by Zion Tech Group\. Advanced AI and IT solutions\.\.\./g,
        'content="Professional services by Zion Tech Group. Advanced AI and IT solutions for your business."'
      );
      modified = true;
    }

    // Fix broken title tags
    if (content.includes('<title>Page | Zion Tech Group</title>')) {
      const fileName = path.basename(filePath, '.tsx');
      const properTitle = fileName.charAt(0).toUpperCase() + fileName.slice(1).replace(/-/g, ' ') + ' | Zion Tech Group';
      content = content.replace(/<title>Page \| Zion Tech Group<\/title>/g, `<title>${properTitle}</title>`);
      modified = true;
    }

    // Fix broken keywords
    if (content.includes('content="page, AI solutions, IT services, Zion Tech Group, page"')) {
      const fileName = path.basename(filePath, '.tsx');
      const properKeywords = fileName.replace(/-/g, ', ') + ', AI solutions, IT services, Zion Tech Group';
      content = content.replace(/content="page, AI solutions, IT services, Zion Tech Group, page"/g, `content="${properKeywords}"`);
      modified = true;
    }

    // Fix broken JSX structure
    if (content.includes('</div>\n      <Helmet>')) {
      content = content.replace(/<\/div>\n      <Helmet>/g, '\n      <Helmet>');
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed syntax errors in: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Function to recursively find all .tsx files
function findTsxFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      files.push(...findTsxFiles(fullPath));
    } else if (item.endsWith('.tsx')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Main execution
const appDir = path.join(__dirname, 'app');
const tsxFiles = findTsxFiles(appDir);

console.log(`Found ${tsxFiles.length} .tsx files to check`);

tsxFiles.forEach(fixSyntaxErrors);

console.log('Syntax error fixing completed');