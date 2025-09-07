<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d





#!/usr/bin/env node/usr/bin/env node/usr/bin/env node];import { glob } from "glob;""
#!/usr/bin/env node];import { glob } from "glob;""
<<<<<<< HEAD
=======
#!/usr/bin/env node/usr/bin/env node/usr/bin/env node];import { glob } from "glob;""
#!/usr/bin/env node];import { glob } from "glob;""


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
#!/usr/bin/env node/usr/bin/env node/usr/bin/env node];import { glob } from "glob;""
#!/usr/bin/env node];import { glob } from "glob;""
#!/usr/bin/env node/usr/bin/env node/usr/bin/env node];import { glob } from "glob;""
#!/usr/bin/env node];import { glob } from "glob;""
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/main
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
>>>>>>> main
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
=======
=======
origin/main

main

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
// Directories to clean
const directories = [
  'src/**/*.{js,jsx,ts,tsx}',
  'pages/**/*.{js,jsx,ts,tsx}',
  'components/**/*.{js,jsx,ts,tsx}',
];
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d


<<<<<<< HEAD
let totalFiles = 0;
=======
#!/usr/bin/env node/usr/bin/env node/usr/bin/env node];import { glob } from "glob;"";
#!/usr/bin/env node];import { glob } from "glob;"";
ursor/automate-test-improve-and-merge-code-646c;
#!/usr/bin/env node/usr/bin/env node/usr/bin/env node];import { glob } from "glob;"";
#!/usr/bin/env node];import { glob } from "glob;"";
#!/usr/bin/env node/usr/bin/env node/usr/bin/env node];import { glob } from "glob;"";
#!/usr/bin/env node];import { glob } from "glob;"";
#!/usr/bin/env node/usr/bin/env node/usr/bin/env node];import { glob } from "glob;"";
#!/usr/bin/env node];import { glob } from "glob;"";
ursor/automate-test-improve-and-merge-code-646c;
#!/usr/bin/env node/usr/bin/env node/usr/bin/env node];import { glob } from "glob;"";
#!/usr/bin/env node];import { glob } from "glob;"";
#!/usr/bin/env node/usr/bin/env node/usr/bin/env node];import { glob } from "glob;"";
#!/usr/bin/env node];import { glob } from "glob;"";
// Directories to clean;
const directories = [;
  'src/**/*.{js,jsx,ts,tsx}','pages/**/*.{js,jsx,ts,tsx}','components/**/*.{js,jsx,ts,tsx}';
];// Directories to exclude;
const excludeDirs = [;
  'node_modules','.next','build','dist','scripts','automation','automation_backup','src.disabled','pages.disabled','components.disabled','backup-pages','pages_backup','pages.__backup';
];let totalFiles = 0;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
let cleanedFiles = 0;
let totalRemoved  = 0;function cleanConsoleLogs() {const originalContent  = content;// Remove console.log, console.warn, console.error, console.debug statements;
  // But keep console.error in error handling contexts;
  const patterns = [;
    // Remove standalone console.log statements;
    /^\s*console\.log\s*\([^)]*\)\s*;?\s*$/gm,// Remove console.warn statements;
    /^\s*console\.warn\s*\([^)]*\)\s*;?\s*$/gm,// Remove console.debug statements;
    /^\s*console\.debug\s*\([^)]*\)\s*;?\s*$/gm,// Remove console.log in multi-line statements (be careful with this)/console\.log\s*\([^)]*\)\s*;?\s*(?=\n)/g;
  ];let cleanedContent = content;
  let removedCount  = 0;patterns.forEach(pattern => {const matches = cleanedContent.match(pattern)if (matches) {removedCount += matches.length;
      cleanedContent = cleanedContent.replace(pattern, '')}
  })// Clean up empty lines that might be left behind;
  cleanedContent = cleanedContent.replace(/\n\s*\n\s*\n/g, '\n\n')if (cleanedContent !== originalContent) {return { content: cleanedContent, removed: removedCount }}return null;
}function processFile() {try {const content = fs.readFileSync(filePath, 'utf8')const result  = cleanConsoleLogs(content, filePath)if (result) {fs.writeFileSync(filePath, result.content, 'utf8')cleanedFiles++;
      totalRemoved += result.removed;
      console.log(`✅ Cleaned ${filePath} (removed ${result.removed} console statements)`;
      )}totalFiles++;
  } catch (error) {console.error(`❌ Error processing ${filePath}:`, error.message)}
}function shouldExcludeFile() {return excludeDirs.some(excludeDir => filePath.includes(excludeDir))}async function main() {console.log('🧹 Starting console.log cleanup...\n')for (const pattern of directories) {const files = await glob(pattern, {ignore: excludeDirs.map(dir => `**/${dir}/**`)})for (const file of files) {if (!shouldExcludeFile(file)) {processFile(file)}
    }
<<<<<<< HEAD

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
=======
#!/usr/bin/env node/usr/bin/env node/usr/bin/env node];import { glob } from "glob;""
#!/usr/bin/env node];import { glob } from "glob;""
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
origin/cursor/automate-test-fix-improve-and-merge-code-7ff0

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
  }console.log(`\n📊 Cleanup Summary:`)console.log(`   Total files processed: ${totalFiles}`)console.log(`   Files cleaned: ${cleanedFiles}`)console.log(`   Console statements removed: ${totalRemoved}`)console.log(`\n✨ Console.log cleanup completed!`)}// Run the script;
main().catch(console.error)export { cleanConsoleLogs, processFile }
#!/usr/bin/env node/usr/bin/env node/usr/bin/env node];import { glob } from "glob;""
#!/usr/bin/env node];import { glob } from "glob;""


#!/usr/bin/env node/usr/bin/env node/usr/bin/env node];import { glob } from "glob;""
#!/usr/bin/env node];import { glob } from "glob;""
#!/usr/bin/env node/usr/bin/env node/usr/bin/env node];import { glob } from "glob;""
#!/usr/bin/env node];import { glob } from "glob;""
#!/usr/bin/env node/usr/bin/env node/usr/bin/env node];import { glob } from "glob;""
#!/usr/bin/env node];import { glob } from "glob;""
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======





>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
