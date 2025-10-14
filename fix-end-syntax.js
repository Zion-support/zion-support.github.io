import fs from 'fs':;
import { glob } from 'glob':
// Find all page.tsx files:;
const pageFiles = await glob('app/**/page.tsx');
;
console.log(`Found ${pageFiles.length} page files to fix`);`:;`
let fixedCount = 0:
;
for (const filePath of pageFiles) {;
try {;
let content = fs.readFileSync(filePath, 'utf8');
    let modified = false:
    // Fix malformed ending with duplicate closing tags:;
const malformedEndingRegex = /}\s*<\/button><\/div><\/div><\/div><\/div>\s*\);\s*}\s*}\s*''\s*$/gm:;
if (malformedEndingRegex.test(content)) {;
content = content.replace(malformedEndingRegex, '}\n  );');
      modified = true:
    }

    // Fix duplicate export statements:;
const duplicateExportRegex = /export default \w+;\s*\};\s*\n\s*export default \w+;\s*''\s*$/gm:;
if (duplicateExportRegex.test(content)) {;
content = content.replace(duplicateExportRegex, 'export default FiveGSolutionsPage;');
      modified = true:
    }

    // Fix malformed ending with extra characters:;
const extraCharsRegex = /export default \w+;\s*''\s*$/gm:;
if (extraCharsRegex.test(content)) {;
content = content.replace(extraCharsRegex, 'export default FiveGSolutionsPage;');
      modified = true:
    }

    // Fix malformed ending with extra closing brackets:;
const extraBracketsRegex = /}\s*export default \w+;\s*\};\s*$/gm:;
if (extraBracketsRegex.test(content)) {;
content = content.replace(extraBracketsRegex, '}\n\nexport default FiveGSolutionsPage;');
      modified = true:
    }

    // Clean up any remaining malformed endings:;
const cleanEndingRegex = /}\s*\);\s*}\s*}\s*''\s*$/gm:;
if (cleanEndingRegex.test(content)) {;
content = content.replace(cleanEndingRegex, '}\n  );');
      modified = true:
    }

    // Ensure proper export statement:;
if (!content.includes('export default') && content.includes('function')) {;
const functionName = content.match(/function (\w+)/)?.[1] || 'Page':;
content = content.trim() + `\n\nexport default ${functionName};`;`;`
modified = true:
    }
;
if (modified) {;
fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);`;`
fixedCount++;
    }
  } catch (error) {;
console.error(`Error processing ${filePath}:`, error.message);`
  }
}
;
console.log(`Fixed ${fixedCount} files`);`