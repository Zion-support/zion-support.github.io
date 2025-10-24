const fs = require('fs');
const path = require('path');

// Function to fix JSX syntax issues in a file
function fixJSXSyntax(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix malformed Link components
    if (content.includes('LinkContact Us')) {
      content = content.replace(
        /<LinkContact Us\s*>\s*\$\d+\s*<ArrowRight\$\d+\s*\/>\s*<\/Link>/g,
        `<Link
            href="/contact"
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
          >
            Contact Us
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>`
      );
      modified = true;
    }

    // Fix extra closing div tags
    const divCount = (content.match(/<div/g) || []).length;
    const closingDivCount = (content.match(/<\/div>/g) || []).length;
    
    if (closingDivCount > divCount) {
      // Remove extra closing div tags
      const extraDivs = closingDivCount - divCount;
      let removed = 0;
      content = content.replace(/<\/div>/g, (match) => {
        if (removed < extraDivs) {
          removed++;
          return '';
        }
        return match;
      });
      modified = true;
    }

    // Fix malformed JSX fragments
    if (content.includes('</div>\n  )\n}') && !content.includes('</>')) {
      content = content.replace(/<\/div>\n  \)\n}/g, '</div>\n  );\n}');
      modified = true;
    }

    // Fix missing semicolons in return statements
    if (content.includes('  )\n}') && !content.includes('  );\n}')) {
      content = content.replace(/  \)\n}/g, '  );\n}');
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and fix all .tsx files
function fixAllTSXFiles(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      fixedCount += fixAllTSXFiles(filePath);
    } else if (file.endsWith('.tsx')) {
      if (fixJSXSyntax(filePath)) {
        fixedCount++;
      }
    }
  }

  return fixedCount;
}

// Start fixing from the app directory
const appDir = path.join(__dirname, 'app');
console.log('Starting JSX syntax fixes...');
const totalFixed = fixAllTSXFiles(appDir);
console.log(`Fixed ${totalFixed} files`);