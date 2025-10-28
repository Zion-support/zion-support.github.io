#!/usr/bin/env node

import fs from 'fs';
import { glob } from 'glob';

// Function to fix final issues in a file
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix 1: Ensure Head and Footer imports are present
    if (content.includes('<Head>') || content.includes('<Footer')) {
      if (!content.includes("import Head from 'next/head'")) {
        content = "import Head from 'next/head';\n" + content;
        modified = true;
      }
      if (!content.includes("import Footer from '../components/Footer'")) {
        content = content.replace(/import Head from 'next\/head';\n/, "import Head from 'next/head';\nimport Footer from '../components/Footer';\n");
        modified = true;
      }
    }

    // Fix 2: Remove unused props parameter
    if (content.includes('props: any') && !content.includes('{...props}')) {
      content = content.replace(/\(props: any\)/g, '()');
      modified = true;
    }

    // Fix 3: Remove unused Page variable declarations
    if (content.includes("function Page() {")) {
      content = content.replace(/function Page\(\) \{\s*return \([\s\S]*?\)\s*\}/g, '');
      modified = true;
    }

    // Fix 4: Remove unused Page variable declarations (alternative pattern)
    if (content.includes("const Page = () => {")) {
      content = content.replace(/const Page = \(\) => \{\s*return \([\s\S]*?\)\s*\};?\n?/g, '');
      modified = true;
    }

    // Fix 5: Remove any other unused function declarations that match the pattern
    const unusedFunctionPattern = /function \w+Page\(\) \{\s*return \([\s\S]*?\)\s*\}/g;
    if (unusedFunctionPattern.test(content)) {
      content = content.replace(unusedFunctionPattern, '');
      modified = true;
    }

    // Fix 6: Clean up any empty lines and ensure proper structure
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    content = content.replace(/^;\s*\n/gm, '');

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
async function main() {
  console.log('Starting final issues fixes...');

  // Find all page.tsx files
  const pageFiles = await glob('app/**/page.tsx', { cwd: process.cwd() });

  let fixedCount = 0;
  const totalCount = pageFiles.length;

  console.log(`Found ${totalCount} page files to process...`);

  pageFiles.forEach(file => {
    if (fixFile(file)) {
      fixedCount++;
    }
  });

  console.log(`\nFixed ${fixedCount} out of ${totalCount} files.`);
  console.log('Final issues fixes completed!');
}

main().catch(console.error);