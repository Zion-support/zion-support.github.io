#!/usr/bin/env node

import fs from 'fs';
import { glob } from 'glob';

// Function to fix remaining lint errors
function fixRemainingLintErrors(content) {
  let fixed = content;

  // Fix unescaped entities
  fixed = fixed.replace(/(?<!&)([^&])'([^&])/g, '$1&apos;$2');
  fixed = fixed.replace(/(?<!&)([^&])"([^&])/g, '$1&quot;$2');

  // Fix Next.js link issues - replace <a> with <Link> for internal navigation
  fixed = fixed.replace(
    /<a\s+href="\/([^"]+)"([^>]*)>/g,
    '<Link href="/$1"$2>'
  );
  fixed = fixed.replace(/<\/a>/g, '</Link>');

  // Add Link import if not present
<<<<<<< HEAD
  if (
    fixed.includes('<Link') &&
    !fixed.includes("import Link from 'next/link'")
  ) {
    fixed = fixed.replace(
      /import\s+([^;]+);/,
      "import $1;\nimport Link from 'next/link';"
    );
=======
  if (fixed.includes('<Link') && !fixed.includes("import Link  from 'next/link)) {
    fixed = fixed.replace(/import\s+([^;]+);/, "import $1;\nimport Link from 'next/link);
>>>>>>> main
  }

  return fixed;
}

// Main function
async function main() {
  // Get all TypeScript/JavaScript files
  const files = await glob('pages/**/*.{ts,tsx,js,jsx}', {
    ignore: ['node_modules/**'],
  });

  console.log(`Found ${files.length} files to process...`);

  let fixedCount = 0;
  let errorCount = 0;

  for (const file of files) {
    try {
      const content = fs.readFileSync(file, 'utf8');
      const fixed = fixRemainingLintErrors(content);

      if (content !== fixed) {
        fs.writeFileSync(file, fixed, 'utf8');
        console.log(`Fixed: ${file}`);
        fixedCount++;
      }
    } catch (error) {
      console.error(`Error processing ${file}:`, error.message);
      errorCount++;
    }
  }

  console.log(`\nCompleted: ${fixedCount} files fixed, ${errorCount} errors`);
}

main().catch(console.error);
