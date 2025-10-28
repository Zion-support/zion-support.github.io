const fs = require('fs');
const { glob } = require('glob');

async function fixOpenGraph() {
  try {
    const files = await glob('app/**/*.{ts,tsx}');
    console.log(`Found ${files.length} files to process`);

    let fixedCount = 0;

    for (const filePath of files) {
      try {
        let content = fs.readFileSync(filePath, 'utf8');
        let modified = false;
        const originalContent = content;

        // Fix openGraph syntax errors
        // Pattern: openGraph: {, -> openGraph: {
        content = content.replace(
          /openGraph:\s*\{\s*,/g,
          'openGraph: {'
        );

        // Fix twitter syntax errors
        // Pattern: twitter: {, -> twitter: {
        content = content.replace(
          /twitter:\s*\{\s*,/g,
          'twitter: {'
        );

        // Fix any other object with trailing comma
        // Pattern: prop: {, -> prop: {
        content = content.replace(
          /(\w+):\s*\{\s*,/g,
          '$1: {'
        );

        if (content !== originalContent) {
          fs.writeFileSync(filePath, content, 'utf8');
          console.log(`Fixed: ${filePath}`);
          fixedCount++;
          modified = true;
        }
      } catch (error) {
        console.error(`Error processing ${filePath}:`, error.message);
      }
    }

    console.log(`\nFixed ${fixedCount} files`);
  } catch (error) {
    console.error('Error:', error);
  }
}

fixOpenGraph();