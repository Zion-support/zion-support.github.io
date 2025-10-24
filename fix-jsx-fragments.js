const fs = require('fs');
const path = require('path');

// Function to fix JSX fragment syntax issues
function fixJSXFragmentSyntax(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix malformed JSX fragments - replace <> with <div>
    if (content.includes('return (\n    <>')) {
      content = content.replace(/return \(\n\s*<>/g, 'return (\n    <div>');
      modified = true;
    }

    // Fix closing fragments - replace </> with </div>
    if (content.includes('</>')) {
      content = content.replace(/<\/>/g, '</div>');
      modified = true;
    }

    // Fix malformed JSX where fragments are not properly closed
    if (content.includes('  )\n}') && !content.includes('  );\n}')) {
      content = content.replace(/  \)\n}/g, '  );\n}');
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed JSX fragments in: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and fix all .tsx files
function fixAllJSXFragmentSyntax(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      fixedCount += fixAllJSXFragmentSyntax(filePath);
    } else if (file.endsWith('.tsx')) {
      if (fixJSXFragmentSyntax(filePath)) {
        fixedCount++;
      }
    }
  }

  return fixedCount;
}

// Start fixing from the app directory
const appDir = path.join(__dirname, 'app');
console.log('Fixing JSX fragment syntax...');
const totalFixed = fixAllJSXFragmentSyntax(appDir);
console.log(`Fixed ${totalFixed} files`);