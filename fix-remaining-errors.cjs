const fs = require('fs');
const path = require('path');

// Function to fix remaining syntax errors in TSX files
function fixRemainingErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix malformed closing tags pattern
    if (content.includes('</div>\n        </div>\n      </div>\n        </div>\n      </div>')) {
      content = content.replace(
        /<\/div>\n        <\/div>\n      <\/div>\n        <\/div>\n      <\/div>/g,
        '</div>\n        </div>\n      </div>'
      );
      modified = true;
    }

    // Fix malformed paragraph tags
    if (content.includes('<p className="text-gray-300 text-lg">\n              This page is under construction. Please check back later.\n            </p>')) {
      content = content.replace(
        /<p className="text-gray-300 text-lg">\n              This page is under construction\. Please check back later\.\n            <\/p>/g,
        '<p className="text-gray-300 text-lg">\n            This page is under construction. Please check back later.\n          </p>'
      );
      modified = true;
    }

    // Fix missing closing tags for fragments
    if (content.includes('  );\n};') && !content.includes('</>')) {
      content = content.replace(/  \);\n\};/g, '    </>\n  );\n};');
      modified = true;
    }

    // Fix malformed div structure
    if (content.includes('<div className="container mx-auto px-4 py-16"></>')) {
      content = content.replace(
        /<div className="container mx-auto px-4 py-16"><\/>/g,
        '<div className="container mx-auto px-4 py-16">'
      );
      modified = true;
    }

    if (content.includes('<div className="text-center"></div>')) {
      content = content.replace(
        /<div className="text-center"><\/div>/g,
        '<div className="text-center">'
      );
      modified = true;
    }

    // Fix title and meta content
    if (content.includes('content="Page - Zion Tech Group"')) {
      const fileName = path.basename(filePath, '.tsx');
      const pageName = fileName.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
      content = content.replace(
        /<title>Page - Zion Tech Group<\/title>/g,
        `<title>${pageName} - Zion Tech Group</title>`
      );
      content = content.replace(
        /content="Page - Zion Tech Group"/g,
        `content="${pageName} - Zion Tech Group"`
      );
      modified = true;
    }

    if (content.includes('<h1 className="text-4xl font-bold text-white mb-8">Page</h1>')) {
      const fileName = path.basename(filePath, '.tsx');
      const pageName = fileName.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
      content = content.replace(
        /<h1 className="text-4xl font-bold text-white mb-8">Page<\/h1>/g,
        `<h1 className="text-4xl font-bold text-white mb-8">${pageName}</h1>`
      );
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed remaining errors in: ${filePath}`);
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
      if (fixRemainingErrors(filePath)) {
        fixedCount++;
      }
    }
  }

  return fixedCount;
}

// Main execution
console.log('Starting remaining error fixes...');
const fixedCount = findAndFixTSXFiles('./app');
console.log(`Fixed remaining errors in ${fixedCount} files.`);