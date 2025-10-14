const fs = require('fs');
const path = require('path');

// Function to fix all remaining syntax errors
function fixFinalErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix malformed JSX fragments and structure
    if (content.includes('return (\n<>') && !content.includes('return (\n    <>')) {
      content = content.replace(/return \(\n<>/g, 'return (\n    <>');
      modified = true;
    }

    // Fix missing closing tags for fragments
    if (content.includes('  );\n};') && !content.includes('</>')) {
      content = content.replace(/  \);\n\};/g, '    </>\n  );\n};');
      modified = true;
    }

    // Fix malformed div structure
    if (content.includes('      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">\n        <Helmet>\n          <title>Page - Zion Tech Group</title>\n          <meta name="description" content="Page - Zion Tech Group" />\n        </Helmet>\n      <div className="container mx-auto px-4 py-16">')) {
      const fileName = path.basename(filePath, '.tsx');
      const pageName = fileName.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
      
      content = content.replace(
        /      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">\n        <Helmet>\n          <title>Page - Zion Tech Group<\/title>\n          <meta name="description" content="Page - Zion Tech Group" \/>\n        <\/Helmet>\n      <div className="container mx-auto px-4 py-16">/g,
        `      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">\n        <Helmet>\n          <title>${pageName} - Zion Tech Group</title>\n          <meta name="description" content="${pageName} - Zion Tech Group" />\n        </Helmet>\n        <div className="container mx-auto px-4 py-16">`
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

    // Fix malformed closing tags
    if (content.includes('        </div>\n      </div>\n        </div>\n      </div>')) {
      content = content.replace(/        <\/div>\n      <\/div>\n        <\/div>\n      <\/div>/g, '        </div>\n      </div>');
      modified = true;
    }

    // Fix missing closing tags
    if (content.includes('        </div>\n      </div>\n    </>')) {
      content = content.replace(/        <\/div>\n      <\/div>\n    <\/>/g, '        </div>\n      </div>\n    </>');
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed final errors in: ${filePath}`);
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
      if (fixFinalErrors(filePath)) {
        fixedCount++;
      }
    }
  }

  return fixedCount;
}

// Main execution
console.log('Starting final error fixes...');
const fixedCount = findAndFixTSXFiles('./app');
console.log(`Fixed final errors in ${fixedCount} files.`);