const fs = require('fs');
const path = require('path');

// Function to fix all remaining syntax errors
function fixAllRemaining(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix malformed JSX structure - missing closing div tags
    if (content.includes('        <div className="container mx-auto px-4 py-16">\n        <div className="text-center">')) {
      content = content.replace(
        /        <div className="container mx-auto px-4 py-16">\n        <div className="text-center">/g,
        '        <div className="container mx-auto px-4 py-16">\n          <div className="text-center">'
      );
      modified = true;
    }

    // Fix missing closing div tags
    if (content.includes('        </div>\n      </div>\n    </>')) {
      content = content.replace(
        /        <\/div>\n      <\/div>\n    <\/>/g,
        '          </div>\n        </div>\n      </div>\n    </>'
      );
      modified = true;
    }

    // Fix title and h1 content
    if (content.includes('<title>Page - Zion Tech Group</title>')) {
      const fileName = path.basename(filePath, '.tsx');
      const pageName = fileName.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
      content = content.replace(/<title>Page - Zion Tech Group<\/title>/g, `<title>${pageName} - Zion Tech Group</title>`);
      content = content.replace(/content="Page - Zion Tech Group"/g, `content="${pageName} - Zion Tech Group"`);
      content = content.replace(/<h1 className="text-4xl font-bold text-white mb-8">Page<\/h1>/g, `<h1 className="text-4xl font-bold text-white mb-8">${pageName}</h1>`);
      modified = true;
    }

    // Fix malformed paragraph tags
    if (content.includes('<p className="text-gray-300 text-lg">\n            This page is under construction. Please check back later.\n          </p>')) {
      content = content.replace(
        /<p className="text-gray-300 text-lg">\n            This page is under construction\. Please check back later\.\n          <\/p>/g,
        '<p className="text-gray-300 text-lg">\n              This page is under construction. Please check back later.\n            </p>'
      );
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed remaining issues in: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and fix TSX files
function findAndFixTSXFiles(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      fixedCount += findAndFixTSXFiles(filePath);
    } else if (file.endsWith('.tsx')) {
      if (fixAllRemaining(filePath)) {
        fixedCount++;
      }
    }
  }

  return fixedCount;
}

// Main execution
console.log('Starting comprehensive fix...');
const fixedCount = findAndFixTSXFiles('./app');
console.log(`Fixed remaining issues in ${fixedCount} files.`);