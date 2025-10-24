const fs = require('fs');
const path = require('path');

function fixJSXFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix common JSX issues
    const fixes = [
      // Fix malformed Head tags
      {
        pattern: /<Head><\/Head>\s*<title>([^<]+)<\/title>\s*<meta[^>]*\/><\/meta>\s*<\/Head>/gs,
        replacement: '<Head>\n        <title>$1</title>\n        <meta name="description" content="Professional services by Zion Tech Group." />\n      </Head>'
      },
      // Fix malformed div tags
      {
        pattern: /<div[^>]*><\/div>\s*<div[^>]*>([^<]+)<\/div>/gs,
        replacement: '<div$1</div>'
      },
      // Fix malformed h1 tags
      {
        pattern: /<h1[^>]*><\/h1>\s*([^<]+)\s*<\/h1>/gs,
        replacement: '<h1$1</h1>'
      },
      // Fix malformed p tags
      {
        pattern: /<p[^>]*><\/p>\s*([^<]+)\s*<\/p>/gs,
        replacement: '<p$1</p>'
      },
      // Fix missing closing tags for fragments
      {
        pattern: /<>\s*([^<]*?)\s*$/gm,
        replacement: '<>\n      $1\n    </>'
      },
      // Fix malformed className attributes
      {
        pattern: /className=\"([^"]*?)\s*,\s*([^"]*?)\"/g,
        replacement: 'className="$1 $2"'
      },
      // Fix missing semicolons
      {
        pattern: /(\w+)\s*\n\s*export/g,
        replacement: '$1;\n\nexport'
      },
      // Fix malformed return statements
      {
        pattern: /return\s*\(\s*([^<]*?)\s*\)\s*;?\s*$/gm,
        replacement: 'return (\n    <>\n      $1\n    </>\n  );'
      }
    ];

    fixes.forEach(fix => {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    });

    // Additional specific fixes for common patterns
    // Fix the specific pattern in 5g pages
    if (content.includes('5g Data Analytics')) {
      content = content.replace(
        /<Head><\/Head>\s*<title>([^<]+)<\/title>\s*<meta[^>]*\/><\/meta>\s*<\/Head>/gs,
        '<Head>\n        <title>$1</title>\n        <meta name="description" content="Professional 5g data analytics services by Zion Tech Group." />\n      </Head>'
      );
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed JSX in: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
  return false;
}

function walkDirectory(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      fixedCount += walkDirectory(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      if (fixJSXFile(filePath)) {
        fixedCount++;
      }
    }
  });

  return fixedCount;
}

console.log('Starting comprehensive JSX fixes...');
const fixedCount = walkDirectory('./app');
console.log(`Fixed JSX in ${fixedCount} files`);
