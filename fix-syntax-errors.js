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

    // Fix malformed JSX with incorrect parentheses
    const malformedJSXRegex = /{solutions\.map\(\(solution, index\) => \(}/g;
    if (malformedJSXRegex.test(content)) {
      content = content.replace(malformedJSXRegex, '{solutions.map((solution, index) => (');
      modified = true;
    }

    const malformedJSXRegex2 = /{solution\.features\.map\(\(feature, idx\) => \(}/g;
    if (malformedJSXRegex2.test(content)) {
      content = content.replace(malformedJSXRegex2, '{solution.features.map((feature, idx) => (');
      modified = true;
    }

    // Fix malformed object syntax with extra quotes
    const malformedObjectRegex = /title: "([^"]+)",\s*description: "([^"]+)",\s*icon: <([^>]+) \/>,\s*color: "([^"]+)"}/g;
    if (malformedObjectRegex.test(content)) {
      content = content.replace(malformedObjectRegex, (match, title, description, icon, color) => {
        return `title: "${title}",\n      description: "${description}",\n      icon: <${icon} />,\n      color: "${color}"`;
      });
      modified = true;
    }

    // Fix unterminated string literals
    const unterminatedStringRegex = /"([^"]*)"\s*"\s*$/gm;
    if (unterminatedStringRegex.test(content)) {
      content = content.replace(unterminatedStringRegex, '"$1"');
      modified = true;
    }

    // Fix malformed closing tags and brackets
    const malformedClosingRegex = /}\s*<\/div><\/div><\/div><\/div>\s*\);\s*}\s*}\s*''\s*$/gm;
    if (malformedClosingRegex.test(content)) {
      content = content.replace(malformedClosingRegex, '}\n          </div>\n        </div>\n      </div>\n    </div>\n  );\n}');
      modified = true;
    }

    // Fix duplicate color properties
    const duplicateColorRegex = /color: "([^"]+)"\s*color: "([^"]+)"/g;
    if (duplicateColorRegex.test(content)) {
      content = content.replace(duplicateColorRegex, 'color: "$1"');
      modified = true;
    }

    // Fix malformed closing brackets
    const malformedBracketsRegex = /}\s*\);\s*}\s*}\s*''\s*$/gm;
    if (malformedBracketsRegex.test(content)) {
      content = content.replace(malformedBracketsRegex, '}\n  );\n}');
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