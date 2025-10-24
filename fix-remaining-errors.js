const fs = require('fs');
const path = require('path');

function fixRemainingErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix common remaining issues
    const fixes = [
      // Fix malformed h1 tags
      {
        pattern: /<h1([^>]*)>\s*([^<]+)\s*<\/h1>/gs,
        replacement: '<h1$1>$2</h1>'
      },
      // Fix malformed p tags
      {
        pattern: /<p([^>]*)>\s*([^<]+)\s*<\/p>/gs,
        replacement: '<p$1>$2</p>'
      },
      // Fix malformed div tags
      {
        pattern: /<div([^>]*)>\s*<\/div><div([^>]*)>\s*([^<]+)\s*<\/div>/gs,
        replacement: '<div$1>\n        <div$2>$3</div>'
      },
      // Fix malformed className attributes
      {
        pattern: /className="([^"]*?)\s*,\s*([^"]*?)"/g,
        replacement: 'className="$1 $2"'
      },
      // Fix malformed hover classes
      {
        pattern: /hover:\s*from-([^-\s]+)\s*hover:\s*to-([^-\s]+)/g,
        replacement: 'hover:from-$1 hover:to-$2'
      },
      // Fix missing semicolons
      {
        pattern: /(\w+)\s*\n\s*export/g,
        replacement: '$1;\n\nexport'
      }
    ];

    fixes.forEach(fix => {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    });

    // Additional specific fixes
    // Fix the specific pattern in 5g pages
    if (content.includes('5g') && content.includes('Edge Computing')) {
      content = content.replace(
        /<div[^>]*>\s*<\/div><div[^>]*>\s*([^<]+)\s*<\/div>/gs,
        '<div$1>\n        <div$2>$3</div>'
      );
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed remaining errors in: ${filePath}`);
      return true;
    }
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
      if (fixRemainingErrors(filePath)) {
        fixedCount++;
      }
    }
  });

  return fixedCount;
}

console.log('Starting remaining error fixes...');
const fixedCount = walkDirectory('./app');
console.log(`Fixed remaining errors in ${fixedCount} files`);
