import fs from 'fs';
import { glob } from 'glob';

// Find all page.tsx files
const pageFiles = await glob('app/**/page.tsx');

console.log(`Found ${pageFiles.length} page files to fix`);

let fixedCount = 0;

for (const filePath of pageFiles) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix duplicate closing parentheses
    const duplicateParenRegex = /}\s*\);\s*}\s*\);/g;
    if (duplicateParenRegex.test(content)) {
      content = content.replace(duplicateParenRegex, '}\n  );');
      modified = true;
    }

    // Fix malformed ending with extra characters
    const extraCharsRegex = /}\s*\);\s*}\s*''\s*$/gm;
    if (extraCharsRegex.test(content)) {
      content = content.replace(extraCharsRegex, '}\n  );');
      modified = true;
    }

    // Fix malformed ending with extra closing tags
    const extraTagsRegex = /}\s*<\/p><\/div><\/div><\/div><\/div>\s*\);\s*}\s*}\s*''\s*$/gm;
    if (extraTagsRegex.test(content)) {
      content = content.replace(extraTagsRegex, '}\n  );');
      modified = true;
    }

    // Clean up any remaining malformed syntax
    const cleanSyntaxRegex = /}\s*\);\s*}\s*}\s*''\s*$/gm;
    if (cleanSyntaxRegex.test(content)) {
      content = content.replace(cleanSyntaxRegex, '}\n  );');
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      fixedCount++;
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

console.log(`Fixed ${fixedCount} files`);