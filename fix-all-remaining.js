#!/usr/bin/env node

import fs from 'fs';
import { glob } from 'glob';

// Function to fix all remaining issues in a file
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix 1: Remove all unused Page variable declarations
    const pagePatterns = [
      /function Page\(\) \{\s*return \([\s\S]*?\)\s*\}/g,
      /const Page = \(\) => \{\s*return \([\s\S]*?\)\s*\};?\n?/g,
      /function \w+Page\(\) \{\s*return \([\s\S]*?\)\s*\}/g,
      /const \w+Page = \(\) => \{\s*return \([\s\S]*?\)\s*\};?\n?/g
    ];

    pagePatterns.forEach(pattern => {
      if (pattern.test(content)) {
        content = content.replace(pattern, '');
        modified = true;
      }
    });

    // Fix 2: Remove unused Head imports if Head is not used
    if (content.includes("import Head from 'next/head'") && !content.includes('<Head>')) {
      content = content.replace(/import Head from 'next\/head';\n?/g, '');
      modified = true;
    }

    // Fix 3: Remove unused Footer imports if Footer is not used
    if (content.includes("import Footer from '../components/Footer'") && !content.includes('<Footer')) {
      content = content.replace(/import Footer from '\.\.\/components\/Footer';\n?/g, '');
      modified = true;
    }

    // Fix 4: Fix Footer import path for nested directories
    if (content.includes("import Footer from '../components/Footer'") && filePath.includes('/ai-services/')) {
      content = content.replace(/import Footer from '\.\.\/components\/Footer'/, "import Footer from '../../components/Footer'");
      modified = true;
    }

    // Fix 5: Clean up any empty lines and ensure proper structure
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    content = content.replace(/^;\s*\n/gm, '');
    content = content.replace(/\n\s*$/g, '\n');

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
  console.log('Starting comprehensive fixes...');

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
  console.log('Comprehensive fixes completed!');
}

main().catch(console.error);