<<<<<<< HEAD
<<<<<<< HEAD
#!/usr/bin/env node

<<<<<<< HEAD
<<<<<<< HEAD
#!/usr/bin/env node




#!/usr/bin/env node

ursor/automate-test-improve-and-merge-code-59d5

main
main
origin/cursor/automate-test-improve-and-merge-code-2533
const fs = require('fs');
const path = require('path');

// Function to fix merge conflicts in a file
main
const fs = require('fs');
const path = require('path');

ursor/integrate-build-improve-and-re-verify-9d47
function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflicts
main
    // Remove merge conflict markers and keep the second version (after =======)
<<<<<<< HEAD
=======
<<<<<<< HEAD
    // Remove merge conflict markers and keep the content after the last =======
>>>>>>> main
=======
    // Remove merge conflict markers and keep the second version (after =======)
>>>>>>> cursor/integrate-build-improve-and-re-verify-9d47
=======
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c

=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7

const fs = require('fs');
const path = require('path');

// Function to resolve merge conflicts in a file
function resolveMergeConflicts(filePath) {

function fixMergeConflicts(filePath) {
  try {

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
ursor/integrate-build-improve-and-re-verify-9d47
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======




#!/usr/bin/env node






const fs = require('fs');
const path = require('path');


// Function to resolve merge conflicts in a file
function resolveMergeConflicts(filePath) {

// Function to fix merge conflicts in a file

const fs = require('fs');
const path = require('path');


function fixMergeConflicts(filePath) {
  try {

    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflicts
    if (!content.includes('')) {
      return false;
    }
    
    console.log(`Fixing merge conflicts in: ${filePath}`);
    

    // Remove merge conflict markers and keep the second version (after )

    // Remove merge conflict markers and keep the second version (after )
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7
    const lines = content.split('\n');
    const fixedLines = [];
    let inConflict = false;
    let keepContent = false;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      
ursor/integrate-build-improve-and-re-verify-9d47
        keepVersion = true;
        continue;
      }
      
      if (line.includes('>>>>>>>')) {
        inConflict = false;
        keepVersion = false;
        continue;
      }
      
      if (!inConflict || keepVersion) {
        fixedLines.push(line);
      }
    }
    
    const fixedContent = fixedLines.join('\n');
    fs.writeFileSync(filePath, fixedContent, 'utf8');
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    // Remove merge conflict markers and keep the HEAD version
    content = content.replace(/[a-f0-9]+.*?\n?/g, '');
    
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7
    // Clean up any remaining conflict markers
    content = content.replace(/<<<<<<< .*?\n?/g, '');
<<<<<<< HEAD
    content = content.replace(/
=======
    content = content.replace(/=======.*?\n?/g, '');
    content = content.replace(/.*?\n?/g, '');
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
    
    // Write the cleaned content back
    fs.writeFileSync(filePath, content, 'utf8');
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> main
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-9d47
=======
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
origin/cursor/fix-website-loading-errors-and-merge-8eb6
origin/cursor/expand-services-advertise-and-build-project-c28b
main
ursor/integrate-build-improve-and-re-verify-9d47
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======
      



>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
    return false;
  }
}

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
function findAndFixConflicts(dir) {
  const files = fs.readdirSync(dir);
=======
<<<<<<< HEAD
  function walkDir(currentPath) {
    const items = fs.readdirSync(currentPath);
    
    for (const item of items) {
      const fullPath = path.join(currentPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip node_modules and other irrelevant directories
        if (!['node_modules', '.git', 'dist', 'build', '.next'].includes(item)) {
          walkDir(fullPath);
        }
      } else if (stat.isFile()) {
        const ext = path.extname(item);
        if (['.ts', '.tsx', '.js', '.jsx', '.json', '.css', '.html'].includes(ext)) {
          try {
            const content = fs.readFileSync(fullPath, 'utf8');
            if (content.includes('<<<<<<< HEAD')) {
              files.push(fullPath);
            }
          } catch (error) {
            // Skip files that can't be read
          }
        }
// Function to recursively find and fix files
function fixFilesInDirectory(dirPath) {
  const items = fs.readdirSync(dirPath);
>>>>>>> main
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
  let fixedCount = 0;
=======
console.log('🔧 Starting comprehensive merge conflict resolution...');
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc

<<<<<<< HEAD
<<<<<<< HEAD
// Function to fix merge conflicts in a file
function fixMergeConflicts(filePath) {
  try {

#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');

    // Check if file has merge conflict markers
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
    if (!content.includes('<<<<<<< HEAD')) {
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======
function findAndFixConflicts(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;
  


  function scanDirectory(currentDir) {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflicts
    if (!content.includes('')) {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
=======
  let fixedCount = 0;

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7
      return false;
    }
    
    console.log(`Fixing merge conflicts in: ${filePath}`);
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    
    // Split by merge conflict markers
<<<<<<< HEAD
=======
=======
origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc

    console.log(`Resolving conflicts in: ${filePath}`);

    // Split content by conflict markers and keep HEAD version
origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
    const lines = content.split('\n');
    const fixedLines = [];
    let inConflict = false;
    // Remove merge conflict markers and keep the second version (after =======)
    const lines = content.split('\n');
    const fixedLines = [];
    let inConflict = false;
    let keepVersion = false;

=======
    const lines = content.split('\n');
    const fixedLines = [];
    let inConflict = false;
    let conflictType = '';
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
    let keepLines = false;
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        keepVersion = true;
        continue;
      }
      
      if (line.includes('>>>>>>>')) {
        inConflict = false;
        keepVersion = false;
        continue;
      }
      
      if (!inConflict || keepVersion) {
        fixedLines.push(line);
      }
    }
    
    const fixedContent = fixedLines.join('\n');
    fs.writeFileSync(filePath, fixedContent, 'utf8');
=======
      if (line.includes('')) {
        inConflict = true;
        conflictType = 'head';
        continue;
      }
      
        inConflict = false;
        conflictType = '';
        continue;
      }
      
      if (!inConflict) {
        fixedLines.push(line);
      } else if (conflictType === 'head') {
        // Keep the HEAD version (first part)
        fixedLines.push(line);
      }
      // Skip the other branch content
    }
    
    // Write the fixed content
    fs.writeFileSync(filePath, fixedLines.join('\n'));
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d


      if (!inConflict || keepLines) {
        resolvedLines.push(line);
      }
    }

    const resolvedContent = resolvedLines.join('\n');
    fs.writeFileSync(filePath, resolvedContent, 'utf8');
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
=======

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
/**
 * Merge Conflict Resolver
 * Automatically resolves merge conflicts by keeping HEAD version
 */
class MergeConflictResolver {
  constructor() {
    this.projectRoot = process.cwd();
    this.fixedFiles = [];
    this.errors = [];
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
  }
}

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
  log(message, type = 'INFO') {
    const timestamp = new Date().toISOString();
    const prefix = type === 'ERROR' ? '❌' : type === 'SUCCESS' ? '✅' : type === 'WARNING' ? '⚠️' : 'ℹ️';
    console.log(`${prefix} [${timestamp}] ${message}`);

  }


// Function to find all files with merge conflicts
function findFilesWithConflicts(dir) {
  const files = [];
  
  function scanDirectory(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip node_modules and other common directories
        if (!['node_modules', '.git', '.next', 'dist', 'build', 'out', 'coverage'].includes(item)) {
          scanDirectory(fullPath);
        }
      } else if (stat.isFile()) {
        // Check for TypeScript, JavaScript, and other relevant files
        if (/\.(ts|tsx|js|jsx|cjs|mjs)$/.test(item)) {
          try {
            const content = fs.readFileSync(fullPath, 'utf8');
              files.push(fullPath);
            }
          } catch (error) {
            // Skip files that can't be read
          }
<<<<<<< HEAD
=======
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
// Function to recursively find and process files
function processDirectory(dirPath) {
  const items = fs.readdirSync(dirPath);
  let totalFixed = 0;

  for (const item of items) {
    const fullPath = path.join(dirPath, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      // Skip node_modules and .git directories
      if (item === 'node_modules' || item === '.git') {
        continue;
      }
      totalFixed += processDirectory(fullPath);
    } else if (stat.isFile()) {
      // Process JavaScript, TypeScript, and JSX files
      if (/\.(js|jsx|ts|tsx|json)$/.test(item)) {
        if (resolveMergeConflicts(fullPath)) {
          totalFixed++;
origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
        }
      }
    }
=======
        }
      }
    }

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Remove merge conflict markers and keep the latest version
    // Patter: n:  ... 
    content = content.replace(/([\s\S]*?)
    
    // Also handle cases where there might be multiple conflict sections
    content = content.replace(//g, '');
    content = content.replace(/
    
    // Remove empty lines that might be left behind
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed merge conflicts: in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-lint-push-and-merge-to-main-28da
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
  }
<<<<<<< HEAD
=======
  }
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======
  }
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
=======
  }
}

  }
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7
  
  scanDirectory(dir);
  return files;
}

<<<<<<< HEAD
<<<<<<< HEAD
=======
ursor/fix-lint-push-and-merge-to-main-28da
  }
function findFilesWithConflicts(dir) {
  const files = [];
  
  function traverse(currentDir) {
main
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
// Main execution
try {
  const filesWithConflicts = findFilesWithConflicts('/workspace');
  console.log(`Found ${filesWithConflicts.length} files with merge conflicts`);
  
  let fixedCount = 0;
  for (const file of filesWithConflicts) {
    if (fixMergeConflicts(file)) {
      fixedCount++;
    }
  }
  
  console.log(`✅ Fixed merge conflicts in ${fixedCount} files`);
  
  // Run a quick syntax check
  console.log('🔍 Running syntax check...');
  try {
    execSync('npm run type-check', { stdio: 'pipe' });
    console.log('✅ TypeScript check passed');
  } catch (error) {
    console.log('⚠️  TypeScript check failed, but merge conflicts are resolved');
  }
  
} catch (error) {
  console.error('❌ Error during merge conflict resolution:', error.message);
  process.exit(1);
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
      
      if (stat.isDirectory()) {
        // Skip node_modules, .git, and other common directories
        if (!['node_modules', '.git', '.next', 'dist', 'build'].includes(item)) {
          traverse(fullPath);
        }
      } else if (stat.isFile()) {
        // Check if file contains merge conflict markers
        try {
          const content = fs.readFileSync(fullPath, 'utf8');
          if (content.includes('<<<<<<<') || content.includes('') || content.includes('>>>>>>>')) {
main
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        scanDirectory(fullPath);
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.js') || item.endsWith('.jsx') || item.endsWith('.css'))) {
        try {
          const content = fs.readFileSync(fullPath, 'utf8');
          if (content.includes('')) {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7
            files.push(fullPath);
          }
        } catch (error) {
          // Skip files that can't be read
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
  function walkDir(currentPath) {
    const items = fs.readdirSync(currentPath);
    
    for (const item of items) {
      const fullPath = path.join(currentPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip node_modules and other irrelevant directories
        if (!['node_modules', '.git', 'dist', 'build', '.next'].includes(item)) {
          walkDir(fullPath);
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
        }
<<<<<<< HEAD
<<<<<<< HEAD
      } else if (stat.isFile()) {
        const ext = path.extname(item);
        if (['.ts', '.tsx', '.js', '.jsx', '.json', '.css', '.html'].includes(ext)) {
          try {
            const content = fs.readFileSync(fullPath, 'utf8');
<<<<<<< HEAD
main
        }
=======
            if (content.includes('')) {
              files.push(fullPath);
            }
          } catch (error) {
            // Skip files that can't be read
          }

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
function findAndFixConflicts(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;
  
<<<<<<< HEAD
main
function findAndFixConflicts(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;
  
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-9d47
=======
=======
        }
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
ursor/integrate-build-improve-and-re-verify-9d47
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      fixedCount += findAndFixConflicts(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js')) {
      if (fixMergeConflicts(filePath)) {
        fixedCount++;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> main
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-9d47
=======

<<<<<<< HEAD

main
ursor/integrate-build-improve-and-re-verify-9d47
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
      }
    }
  }
  
<<<<<<< HEAD
  traverse(dir);
<<<<<<< HEAD
=======
<<<<<<< HEAD
  walkDir(dir);
=======
  traverse(dir);
>>>>>>> main
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
=======
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c

      }
    }
  }
=======
      }
    }
  }
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7

<<<<<<< HEAD
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
main

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
  return files;
}

// Main execution
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7

console.log('🔍 Scanning for files with merge conflicts...');
const filesWithConflicts = findFilesWithConflicts(process.cwd());

console.log(`Found ${filesWithConflicts.length} files with merge conflicts`);

let fixedCount = 0;
for (const file of filesWithConflicts) {
<<<<<<< HEAD
<<<<<<< HEAD
=======
main
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc

=======


console.log('Finding files with merge conflicts...');
const conflictedFiles = findFilesWithConflicts('/workspace');

console.log(`Found ${conflictedFiles.length} files with merge conflicts`);

let fixedCount = 0;
for (const file of conflictedFiles) {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7
  if (fixMergeConflicts(file)) {
    fixedCount++;
  }
}

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
console.log(`✅ Fixed merge conflicts in ${fixedCount} files`);
console.log('🎉 Merge conflict resolution complete!');
>>>>>>> cursor/fix-lint-push-and-merge-to-main-28da
=======
>>>>>>> main
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-9d47
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
main
ursor/integrate-build-improve-and-re-verify-9d47
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======
console.log(`✅ Fixed merge conflicts in ${fixedCount} files`);
console.log('🎉 Merge conflict resolution complete!');

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7
  return fixedCount;
}

// Fix conflicts in src/pages directory
const pagesDir = path.join(__dirname, 'src', 'pages');
if (fs.existsSync(pagesDir)) {
  const fixedCount = findAndFixConflicts(pagesDir);
  console.log(`Fixed merge conflicts in ${fixedCount} files`);
} else {
  console.log('src/pages directory not found');
}

// Also fix other common directories
const otherDirs = ['src/components', 'src'];
for (const dir of otherDirs) {
  const fullPath = path.join(__dirname, dir);
  if (fs.existsSync(fullPath)) {
    const fixedCount = findAndFixConflicts(fullPath);
    if (fixedCount > 0) {
      console.log(`Fixed merge conflicts in ${fixedCount} files in ${dir}`);
    }
  }
}

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
console.log('Merge conflict fixing completed!');

  walkDir(dir);
origin/cursor/fix-website-loading-errors-and-merge-8eb6
  return files;
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
}

// Main execution
=======
origin/cursor/expand-services-advertise-and-build-project-c28b
}

// Main execution
console.log('Finding files with merge conflicts...');
const conflictedFiles = findFilesWithConflicts('/workspace');
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc

}

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
console.log('Merge conflict fix completed.');
=======
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
console.log(`Fixed merge conflicts in ${fixedCount} files`);

// Try to build after fixing conflicts
console.log('Attempting build after fixing conflicts...');
try {
  execSync('npm run build', { stdio: 'inherit', cwd: '/workspace' });
  console.log('Build successful!');
} catch (error) {
  console.error('Build failed:', error.message);
origin/cursor/fix-website-loading-errors-and-merge-8eb6
}
origin/cursor/expand-services-advertise-and-build-project-c28b
console.log(`✅ Fixed merge conflicts in ${fixedCount} files`);
console.log('🎉 Merge conflict resolution complete!');
ursor/fix-lint-push-and-merge-to-main-28da
main

main
console.log('Merge conflict fixing completed!');
ursor/integrate-build-improve-and-re-verify-9d47
=======
console.log('Merge conflict fixing completed!');

console.log(`Fixed merge conflicts in ${fixedCount} files`);

// Try to build after fixing conflicts
console.log('Attempting build after fixing conflicts...');
try {
  execSync('npm run build', { stdio: 'inherit', cwd: '/workspace' });
  console.log('Build successful!');
} catch (error) {
  console.error('Build failed:', error.message);
}
  return fixedCount;
  return files;
}

// Main execution
try {
  const srcDir = path.join(__dirname, 'src');
  const filesWithConflicts = findFilesWithConflicts(srcDir);
  
  console.log(`🔍 Found ${filesWithConflicts.length} files with merge conflicts`);
  
  let resolvedCount = 0;
  for (const filePath of filesWithConflicts) {
    if (resolveMergeConflicts(filePath)) {
      resolvedCount++;
    }
  }
  
  console.log(`✅ Resolved conflicts in ${resolvedCount} files`);
  
  // Verify no more conflicts
  const remainingConflicts = findFilesWithConflicts(srcDir);
  if (remainingConflicts.length === 0) {
    console.log('🎉 All merge conflicts resolved successfully!');
  } else {
    console.log(`⚠️  ${remainingConflicts.length} files still have conflicts:`);
    remainingConflicts.forEach(file => console.log(`   - ${file}`));
  }
  
} catch (error) {
  console.error('❌ Error during merge conflict resolution:', error.message);
  process.exit(1);
}


console.log(`✅ Fixed merge conflicts in ${fixedCount} files`);
console.log('🎉 Merge conflict resolution complete!');





console.log('Merge conflict fixing completed!');


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
  resolveMergeConflicts(filePath) {
    try {
      this.log(`Processing: ${filePath}`);
      
      let content = fs.readFileSync(filePath, 'utf8');
      let modified = false;
      
      // Remove merge conflict markers and keep HEAD version
<<<<<<< HEAD
      content = content.replace(/[^\n]+\n?/g, '');
=======
      const conflictPattern = /\n([\s\S]*?)\n\n([\s\S]*?)\n
      
      content = content.replace(conflictPattern, (match, headContent, otherContent) => {
        modified = true;
        this.log(`Resolved conflict in ${filePath} - keeping HEAD version`);
        return headContent.trim();
      });
      
      // Remove any remaining conflict markers
      content = content.replace(/\n?/g, '');
      content = content.replace(/\n?/g, '');
      content = content.replace(/
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
      
      if (modified) {
        fs.writeFileSync(filePath, content);
        this.fixedFiles.push(filePath);
        this.log(`✅ Fixed merge conflicts in: ${filePath}`, 'SUCCESS');
        return true;
      }
      
      return false;
    } catch (error) {
      this.log(`❌ Error processing ${filePath}: ${error.message}`, 'ERROR');
      this.errors.push({ file: filePath, error: error.message });
      return false;
    }
  } catch (error) {
    console.log(`⚠️  Could not fix ${filePath}: ${error.message}`);
  }

  async findFilesWithConflicts() {
    this.log('🔍 Searching for files with merge conflicts...');
    
    try {
      // Find all TypeScript and JavaScript files with merge conflicts
<<<<<<< HEAD
=======
      const command = `find ${this.projectRoot} -path "*/node_modules" -prune -o -path "*/.next" -prune -o -name "*.ts" -o -name "*.tsx" -o -name "*.js" -o -name "*.jsx" | grep -v node_modules | grep -v .next | xargs grep -l "" 2>/dev/null || true`;
      
      const result = execSync(command, { encoding: 'utf8' });
      const files = result.trim().split('\n').filter(file => file.length > 0);
      
      this.log(`Found ${files.length} files with merge conflicts`);
      return files;
    } catch (error) {
      this.log(`Error finding files: ${error.message}`, 'ERROR');
      return [];
    }
  }

  async resolveAllConflicts() {
    this.log('🚀 Starting merge conflict resolution...');
    
    const files = await this.findFilesWithConflicts();
    
    if (files.length === 0) {
      this.log('✅ No merge conflicts found!', 'SUCCESS');
      return;
    }
    
    let fixedCount = 0;
    
    for (const file of files) {
      if (this.resolveMergeConflicts(file)) {
        fixedCount++;
      }
    }
    
    this.log(`🎉 Merge conflict resolution completed!`, 'SUCCESS');
    this.log(`📊 Summary: ${fixedCount}/${files.length} files fixed`);
    
    if (this.errors.length > 0) {
      this.log(`⚠️ ${this.errors.length} errors occurred:`, 'WARNING');
      this.errors.forEach(err => {
        this.log(`  - ${err.file}: ${err.error}`, 'ERROR');
      });
    }
    
    // Generate report
    this.generateReport();
  }

  generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      totalFilesProcessed: this.fixedFiles.length + this.errors.length,
      fixedFiles: this.fixedFiles.length,
      errors: this.errors.length,
      fixedFileList: this.fixedFiles,
      errorList: this.errors
    };
    
    const reportPath = path.join(this.projectRoot, 'merge-conflict-resolution-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    this.log(`📄 Report saved to: ${reportPath}`);
  }
}

// Run the resolver
if (require.main === module) {
  const resolver = new MergeConflictResolver();
  resolver.resolveAllConflicts().catch(console.error);
}

module.exports = MergeConflictResolver;


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d

  return totalFixed;
}

// Main execution
console.log('Starting merge conflict resolution...');
const totalFixed = processDirectory('.');
console.log(`\nResolved conflicts in ${totalFixed} files.`);
console.log('Merge conflict resolution complete!');
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
=======
}

// Main execution

}

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7
