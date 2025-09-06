<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
=======
<<<<<<< HEAD
#!/usr/bin/env node/usr/bin/env node/usr/bin/env node];import { glob } from "glob;""
#!/usr/bin/env node];import { glob } from "glob;""
=======
>>>>>>> origin/main
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
=======
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
=======
#!/usr/bin/env node/usr/bin/env node/usr/bin/env node];import { glob } from "glob;""
#!/usr/bin/env node];import { glob } from "glob;""


>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
<<<<<<< HEAD


=======


<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======


>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
=======
=======
>>>>>>> d0a9ec4ff3a15c755bf51b53a72e5129849de793
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
#!/usr/bin/env node/usr/bin/env node/usr/bin/env node];import { glob } from "glob;""
#!/usr/bin/env node];import { glob } from "glob;""
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
#!/usr/bin/env node/usr/bin/env node/usr/bin/env node];import { glob } from "glob;""
#!/usr/bin/env node];import { glob } from "glob;""
#!/usr/bin/env node/usr/bin/env node/usr/bin/env node];import { glob } from "glob;""
#!/usr/bin/env node];import { glob } from "glob;""
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
#!/usr/bin/env node/usr/bin/env node/usr/bin/env node];import { glob } from "glob;""
#!/usr/bin/env node];import { glob } from "glob;""
<<<<<<< HEAD
#!/usr/bin/env node/usr/bin/env node/usr/bin/env node];import { glob } from "glob;""
#!/usr/bin/env node];import { glob } from "glob;""
origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
=======
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
=======
<<<<<<< HEAD
#!/usr/bin/env node/usr/bin/env node/usr/bin/env node];import { glob } from "glob;""
#!/usr/bin/env node];import { glob } from "glob;""
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> origin/main
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
>>>>>>> main
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
#!/usr/bin/env node];import { glob } from "glob;""
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
#!/usr/bin/env node/usr/bin/env node/usr/bin/env node];import { glob } from "glob;""
#!/usr/bin/env node];import { glob } from "glob;""
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
=======
=======
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
origin/main

main

>>>>>>> 61d39dd026fe5549161165ead85b131541010508
// Directories to clean
const directories = [
  'src/**/*.{js,jsx,ts,tsx}',
  'pages/**/*.{js,jsx,ts,tsx}',
  'components/**/*.{js,jsx,ts,tsx}',
];

// Directories to exclude
const excludeDirs = [
  'node_modules',
  '.next',
  'build',
  'dist',
  'scripts',
  'automation',
  'automation_backup',
  'src.disabled',
  'pages.disabled',
  'components.disabled',
  'backup-pages',
  'pages_backup',
  'pages.__backup',
];

let totalFiles = 0;
let cleanedFiles = 0;
let totalRemoved = 0;

function cleanConsoleLogs(content, filePath) {
  const originalContent = content;

  // Remove console.log, console.warn, console.error, console.debug statements
  // But keep console.error in error handling contexts
  const patterns = [
    // Remove standalone console.log statements
    /^\s*console\.log\s*\([^)]*\)\s*;?\s*$/gm,
    // Remove console.warn statements
    /^\s*console\.warn\s*\([^)]*\)\s*;?\s*$/gm,
    // Remove console.debug statements
    /^\s*console\.debug\s*\([^)]*\)\s*;?\s*$/gm,
    // Remove console.log in multi-line statements (be careful with this)
    /console\.log\s*\([^)]*\)\s*;?\s*(?=\n)/g,
  ];

  let cleanedContent = content;
  let removedCount = 0;

  patterns.forEach(pattern => {
    const matches = cleanedContent.match(pattern);
    if (matches) {
      removedCount += matches.length;
      cleanedContent = cleanedContent.replace(pattern, '');
    }
  });

  // Clean up empty lines that might be left behind
  cleanedContent = cleanedContent.replace(/\n\s*\n\s*\n/g, '\n\n');

  if (cleanedContent !== originalContent) {
    return { content: cleanedContent, removed: removedCount };
  }

  return null;
}

function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const result = cleanConsoleLogs(content, filePath);

    if (result) {
      fs.writeFileSync(filePath, result.content, 'utf8');
      cleanedFiles++;
      totalRemoved += result.removed;
      console.log(
        `✅ Cleaned ${filePath} (removed ${result.removed} console statements)`
      );
    }

    totalFiles++;
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
  }
}

function shouldExcludeFile(filePath) {
  return excludeDirs.some(excludeDir => filePath.includes(excludeDir));
}

async function main() {
  console.log('🧹 Starting console.log cleanup...\n');

  for (const pattern of directories) {
    const files = await glob(pattern, {
      ignore: excludeDirs.map(dir => `**/${dir}/**`),
    });

    for (const file of files) {
      if (!shouldExcludeFile(file)) {
        processFile(file);
      }
    }
  }

  console.log(`\n📊 Cleanup Summary:`);
  console.log(`   Total files processed: ${totalFiles}`);
  console.log(`   Files cleaned: ${cleanedFiles}`);
  console.log(`   Console statements removed: ${totalRemoved}`);
  console.log(`\n✨ Console.log cleanup completed!`);
}

// Run the script
main().catch(console.error);

export { cleanConsoleLogs, processFile };
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
=======
>>>>>>> d0a9ec4ff3a15c755bf51b53a72e5129849de793
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-fix-improve-and-merge-code-7ff0

<<<<<<< HEAD
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======



#!/usr/bin/env node/usr/bin/env node/usr/bin/env node];import { glob } from "glob;"""
#!/usr/bin/env node];import { glob } from "glob;"""
#!/usr/bin/env node/usr/bin/env node/usr/bin/env node];import { glob } from "glob;"""
#!/usr/bin/env node];import { glob } from "glob;""






"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
