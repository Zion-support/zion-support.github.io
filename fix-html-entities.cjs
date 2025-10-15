const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to fix HTML entities in files
function fixHtmlEntities(content, filePath) {
  let fixed = content;
  let changes = 0;

  // Replace common HTML entities
  const replacements = [
    { from: /&quot;/g, to: '"' },
    { from: /&apos;/g, to: "'" },
    { from: /&lt;/g, to: '<' },
    { from: /&gt;/g, to: '>' },
    { from: /&amp;/g, to: '&' },
    { from: /&nbsp;/g, to: ' ' },
    { from: /&copy;/g, to: '©' },
    { from: /&reg;/g, to: '®' },
    { from: /&trade;/g, to: '™' }
  ];

  replacements.forEach(({ from, to }) => {
    const before = fixed;
    fixed = fixed.replace(from, to);
    if (fixed !== before) {
      changes++;
    }
  });

  return { content: fixed, changes };
}

// Function to process all TSX files
function processFiles() {
  const pattern = 'app/**/*.tsx';
  const files = glob.sync(pattern);
  let totalChanges = 0;
  let processedFiles = 0;

  console.log(`Found ${files.length} TSX files to process...`);

  files.forEach(filePath => {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      const result = fixHtmlEntities(content, filePath);
      
      if (result.changes > 0) {
        fs.writeFileSync(filePath, result.content);
        console.log(`Fixed ${result.changes} HTML entities in ${filePath}`);
        totalChanges += result.changes;
        processedFiles++;
      }
    } catch (error) {
      console.error(`Error processing ${filePath}:`, error.message);
    }
  });

  console.log(`\nProcessed ${processedFiles} files with ${totalChanges} total changes.`);
}

// Run the fix
processFiles();