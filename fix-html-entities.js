import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to fix HTML entity issues
function fixHtmlEntities(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;

  // Fix HTML entities in JSX attributes
  const htmlEntityFixes = [
    { pattern: /&quot;/g, replacement: '"' },
    { pattern: /&apos;/g, replacement: "'" },
    { pattern: /&lt;/g, replacement: '<' },
    { pattern: /&gt;/g, replacement: '>' },
    { pattern: /&amp;/g, replacement: '&' }
  ];

  for (const fix of htmlEntityFixes) {
    if (content.includes(fix.pattern.source.replace(/[\\^$.*+?()[\]{}|]/g, '\\$&'))) {
      content = content.replace(fix.pattern, fix.replacement);
      modified = true;
    }
  }

  if (modified) {
    fs.writeFileSync(filePath, content);
    console.log(`Fixed HTML entities in: ${filePath}`);
    return true;
  }
  return false;
}

// Main function
async function main() {
  // Find all TypeScript/JavaScript files
  const files = await glob('app/**/*.{ts,tsx,js,jsx}');
  
  console.log(`Found ${files.length} files to check for HTML entity issues...`);
  
  let fixedCount = 0;
  for (const file of files) {
    const fullPath = path.join(process.cwd(), file);
    try {
      if (fixHtmlEntities(fullPath)) {
        fixedCount++;
      }
    } catch (error) {
      console.error(`Error processing ${file}:`, error.message);
    }
  }
  
  console.log(`Fixed HTML entities in ${fixedCount} files`);
}

main().catch(console.error);