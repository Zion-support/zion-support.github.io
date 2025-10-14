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

    // Fix malformed object properties with extra quotes
    const malformedObjectRegex = /"([^"]+)",\s*"([^"]+)",\s*"([^"]+)",\s*"([^"]+)",\s*"([^"]+)"/g;
    if (malformedObjectRegex.test(content)) {
      content = content.replace(malformedObjectRegex, '"$1",\n    "$2",\n    "$3",\n    "$4",\n    "$5"');
      modified = true;
    }

    // Fix malformed JSX with extra quotes
    const malformedJSXRegex = /<([^>]+) \/>,\s*"([^"]+)"/g;
    if (malformedJSXRegex.test(content)) {
      content = content.replace(malformedJSXRegex, '<$1 />,\n      color: "$2"');
      modified = true;
    }

    // Fix malformed array syntax
    const malformedArrayRegex = /const \w+ = \[\s*"([^"]+)",\s*"([^"]+)",\s*"([^"]+)",\s*"([^"]+)",\s*"([^"]+)"\s*\]/g;
    if (malformedArrayRegex.test(content)) {
      content = content.replace(malformedArrayRegex, 'const benefits = [\n    "$1",\n    "$2",\n    "$3",\n    "$4",\n    "$5"\n  ]');
      modified = true;
    }

    // Fix malformed closing brackets
    const malformedClosingRegex = /}\s*\]\s*const \w+/g;
    if (malformedClosingRegex.test(content)) {
      content = content.replace(malformedClosingRegex, '}\n  ];\n\n  const benefits');
      modified = true;
    }

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