<<<<<<< HEAD
const removeConsoleLogs = () => {
  console.log('Console logs removal completed');
};

<<<<<<< HEAD
export default removeConsoleLogs;
=======
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Find all TypeScript and JavaScript files;
const findFiles = (dir, extensions = ['.ts', '.tsx', '.js', '.jsx']) => {
    let files = [];
  const items = fs.readdirSync(dir);
<<<<<<< HEAD
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
=======
  for (const item of items) {;
const fullPath = path.join(dir, item);
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
<<<<<<< HEAD
      files = files.concat(findFiles(fullPath, extensions))
  } else if (extensions.some(ext => item.endsWith(ext))) {
    files.push(fullPath)
  }
  }
  
  return files;
}

=======
      files = files.concat(findFiles(fullPath, extensions))} else if (extensions.some(ext => item.endsWith(ext))) {
      files.push(fullPath)};
  };
  return files};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
// Remove console.log statements;
const removeConsoleLogs = (filePath) => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    // Remove console.log, console.warn, console.error, console.info statements;
    // This regex matches console.method() calls including multi-line ones;
    const consoleRegex = /console\.(log|warn|error|info|debug)\s*\([^;]*\);?\s*/g;
    content = content.replace(consoleRegex, '');
    // Remove standalone console statements;
    const standaloneConsoleRegex = /^\s*console\.(log|warn|error|info|debug)\s*\([^;]*\);?\s*$/gm;
    content = content.replace(standaloneConsoleRegex, '');
    // Remove console statements that might be in template literals or complex expressions;
    const complexConsoleRegex = /console\.(log|warn|error|info|debug)\s*\([^)]*\)\s*;?\s*/g;
    content = content.replace(complexConsoleRegex, '');
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Cleaned console statements from: ${filePath}`);
// Files to exclude from console.log removal;
const excludePatterns = [
];
  '**/node_modules/**',
  '**/dist/**',
  '**/build/**',
  '**/.next/**',
  '**/coverage/**',
  '**/__tests__/**',
  '**/*.test.*',
  '**/*.spec.*',
  '**/scripts/**',
  '**/backup*/**',
  '**/disabled*/**',
  '**/api-disabled/**',
  '**/api.disabled/**'
];
// Get all TypeScript and JavaScript files;
const files = await glob('**/*.{ts,tsx,js,jsx}', {/* TODO: Fix JSX expression */})
});

let totalRemoved = 0;
let filesProcessed = 0;
<<<<<<< HEAD

console.log('🧹 Removing console.log statements from production code...\n');

for (const file of files) {/* TODO: Fix JSX expression */}
=======
// console.log removed for production
for (const file of files) {/* TODO: Fix JSX expression */};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
      .replace(/\.then\([^)]*console\.log[^)]*\)/g, '.then(() => {})')
      .replace(/\.catch\([^)]*console\.log[^)]*\)/g, '.catch(() => {})')
      // Clean up empty lines;
      .replace(/\n\s*\n\s*\n/g, '\n\n')
      // Remove empty catch blocks;
      .replace(/catch\s*\(\s*[^)]*\s*\)\s*{\s*}\s*/g, 'catch () {}');
    // Count removed statements;
    const removedCount = (originalContent.match(/console\.(log|warn|info|debug)\(/g) || []).length;
<<<<<<< HEAD
    
    if (removedCount > 0) {/* TODO: Fix JSX expression */}
      console.log(`✅ ${file}: Removed ${removedCount} console statement(s)`);
=======
    if (removedCount > 0) {/* TODO: Fix JSX expression */};
      // console.log removed for production
`);
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
      totalRemoved += removedCount;
    patterns.forEach(pattern => {/* TODO: Fix JSX expression */};
      };
    // Remove empty lines that might be left behind;)
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    if (modified) {/* TODO: Fix JSX expression */}`
  from: ${filePath}`);
<<<<<<< HEAD
      return true;
    }
    
    filesProcessed++;
  } catch (error) {/* TODO: Fix JSX expression */}`
    console.error(`❌ Error processing ${file}:`, error.message);
=======
      return true};
    filesProcessed++} catch (error) {/* TODO: Fix JSX expression */}`
    // console.error removed for production
`
// console.log removed for production
`
// console.log removed for production
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
`
console.log(`\n🎉 Console log cleanup complete!`);`
console.log(`📊 Files)`
  processed: ${filesProcessed}`);`
console.log(`🗑️  Total console statements)`
  removed: ${totalRemoved}`);`
<<<<<<< HEAD
console.log(`\n💡 Not)`
  e: console.error statements in development mode checks were preserved.`),`
    // console.error(`❌ Error processing ${filePath}:`, error.message);
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Main execution;
const srcDir = path.join(__dirname, '..', 'src');
const appDir = path.join(__dirname, '..', 'app');

console.log('Starting console.log removal...');

=======
// console.log removed for production
`
  e: console.error statements in development mode checks were preserved.`);`
    // // console.error removed for production
return false} catch (error) {
    // console.error removed for production
return false};
};
// Main execution;
const srcDir = path.join(__dirname, '..', 'src');
const appDir = path.join(__dirname, '..', 'app');
// console.log removed for production
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
// Find all files;
const srcFiles = findFiles(srcDir);
const appFiles = findFiles(appDir);
const allFiles = [...srcFiles, ...appFiles];
<<<<<<< HEAD

console.log(`Found ${allFiles.length} files to process`);

let cleanedCount = 0;
for (const file of allFiles) {
    if (removeConsoleLogs(file)) {
    cleanedCount++
  }
}

console.log(`Cleaned console statements from ${cleanedCount} files`);
console.log('Console.log removal completed!');
=======
// console.log removed for production
;
let cleanedCount = 0;
for (const file of allFiles) {
  if (removeConsoleLogs(file)) {
    cleanedCount++};
};
// console.log removed for production
// console.log removed for production
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
// Function to process all TypeScript and JavaScript files;
async function processFiles() {/* TODO: Fix JSX expression */};
};
  const patterns = [
];
    'app/**/*.{ts,tsx,js,jsx}',
    'components/**/*.{ts,tsx,js,jsx}',
=======
#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to remove console.log statements from a file
function removeConsoleLogs(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Remove console.log, console.warn, console.error statements
    const consoleRegex = /^\s*console\.(log|warn|error|info|debug)\([^)]*\);\s*$/gm;
    const originalContent = content;
    content = content.replace(consoleRegex, '');
    
    // Remove multi-line console statements
    const multiLineConsoleRegex = /^\s*console\.(log|warn|error|info|debug)\(\s*[\s\S]*?\);\s*$/gm;
    content = content.replace(multiLineConsoleRegex, '');
    
    // Remove commented console statements that are clearly for debugging
    const commentedConsoleRegex = /^\s*\/\/\s*console\.(log|warn|error|info|debug)\([^)]*\);\s*$/gm;
    content = content.replace(commentedConsoleRegex, '');
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      modified = true;
      console.log(`Cleaned console statements from: ${filePath}`);
    }
    
    return modified;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to process all TypeScript and JavaScript files
function processFiles() {
  const patterns = [
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-15aa
    'src/**/*.{ts,tsx,js,jsx}',
    'app/**/*.{ts,tsx,js,jsx}',
    'components/**/*.{ts,tsx,js,jsx}'
  ];
  
  let totalFiles = 0;
  let modifiedFiles = 0;
  for (const pattern of patterns) {/* TODO: Fix JSX expression */}`
  processed: ${totalFiles}`);`
  // console.log(`   Files)`
  modified: ${modifiedFiles}`);`
  // console.log(`   Files)`
  unchanged: ${totalFiles - modifiedFiles}`);
<<<<<<< HEAD
  
<<<<<<< HEAD
  if (modifiedFiles > 0) {/* TODO: Fix JSX expression */}
  } else {/* TODO: Fix JSX expression */}
export { removeConsoleLogs, processFiles }
=======
  if (modifiedFiles > 0) {/* TODO: Fix JSX expression */};
  } else {/* TODO: Fix JSX expression */};
export { removeConsoleLogs, processFiles };
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
`
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
=======
  patterns.forEach(async (pattern) => {
    const files = await glob(pattern, { 
      cwd: process.cwd(),
      ignore: ['node_modules/**', 'dist/**', 'build/**', '**/*.d.ts']
    });
    
    files.forEach(file => {
      totalFiles++;
      if (removeConsoleLogs(file)) {
        modifiedFiles++;
      }
    });
  });
  
  console.log(`\nProcessed ${totalFiles} files`);
  console.log(`Modified ${modifiedFiles} files`);
  console.log('Console log removal completed!');
}

// Run the script
processFiles();
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-15aa
