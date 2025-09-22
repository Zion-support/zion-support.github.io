#!/usr/bin/env node
#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔧 Starting merge conflict resolution...');

// Function to fix merge conflicts in a file
function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');

    // Check if file has merge conflicts
      return false;
    }

    console.log(`Fixing merge conflicts in: ${filePath}`);

    // Remove merge conflict markers and keep the HEAD version
    content = content.replace(/
    const lines = content.split('\n');
    const fixedLines = [];
    let inConflict = false;
    let keepContent = false;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
ursor/integrate-build-improve-and-re-verify-9d47
        keepVersion = true;
        continue;
      }

        inConflict = false;
        keepVersion = false;
        continue;
      }

      if (!inConflict || keepVersion) {
        fixedLines.push(line);
      }
    }

    // Clean up any remaining conflict markers
    resolved = resolved.replace(/

    // Write resolved content
    fs.writeFileSync(filePath, resolved, 'utf8');
    return true;
  } catch (error) {
    console.error(`❌ Error resolving conflicts in ${filePath}:`, error.message);

    console.log(`Fixing merge conflicts in: ${filePath}`);


    // Clean up any remaining conflict markers
    content = content.replace(/content = content.replace(/.*?\n?/g, '');
    content = content.replace(/

    // Write the cleaned content back
    fs.writeFileSync(filePath, content, 'utf8');
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    // Check if file has merge conflicts
      return false;
    }

    // Remove merge conflict markers and keep the HEAD version
    content = content.replace(/
    return false;
  }
}


    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];

keepVersion = true;
        continue;
      }

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

      if (!inConflict || keepLines) {
        resolvedLines.push(line);
      }
    }

    const resolvedContent = resolvedLines.join('\n');
    fs.writeFileSync(filePath, resolvedContent, 'utf8');
origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
/**
 * Merge Conflict Resolver
 * Automatically resolves merge conflicts by keeping HEAD version
 */
class MergeConflictResolver {
  constructor() {
    this.projectRoot = process.cwd();
    this.fixedFiles = [];
    this.errors = [];
  }
}

// Function to recursively find and process files
function processDirectory(dirPath) {
  const items = fs.readdirSync(dirPath);
  let totalFixed = 0;

  for (const item of items) {
    const fullPath = path.join(dirPath, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      // Skip node_modules and .git directories
      if (item === 'node_modules' || item === '.git' || item === '.next') {
        continue;
      }
      try {
        totalFixed += processDirectory(fullPath);
      } catch (error) {
        console.log(`Skipping directory ${fullPath}: ${error.message}`);
      }
    } else if (stat.isFile()) {
      // Process JavaScript, TypeScript, and JSX files
      if (/\.(js|jsx|ts|tsx|json|css|html)$/.test(item)) {
        if (fixMergeConflicts(fullPath)) {
          totalFixed++;
  }

  scanDirectory(dir);
  return files;
}

    const items = fs.readdirSync(currentDir);

    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
            files.push(fullPath);
          }
        } catch (error) {
          // Skip files that can't be read

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      fixedCount += findAndFixConflicts(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js')) {
      if (fixMergeConflicts(filePath)) {
        fixedCount++;

        }
      }
    }
  }

  return files;
}

// Main execution

console.log('🔍 Scanning for files with merge conflicts...');
const filesWithConflicts = findFilesWithConflicts(process.cwd());

console.log(`Found ${filesWithConflicts.length} files with merge conflicts`);

let fixedCount = 0;
for (const file of filesWithConflicts) {
main

  if (fixMergeConflicts(file)) {
    fixedCount++;
  }
}

main
ursor/integrate-build-improve-and-re-verify-9d47
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

console.log('Merge conflict fixing completed!');

  walkDir(dir);
origin/cursor/fix-website-loading-errors-and-merge-8eb6
  return files;
origin/cursor/expand-services-advertise-and-build-project-c28b
}

// Main execution
console.log('Finding files with merge conflicts...');
const conflictedFiles = findFilesWithConflicts('/workspace');

}

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
  resolveMergeConflicts(filePath) {
    try {
      this.log(`Processing: ${filePath}`);

      let content = fs.readFileSync(filePath, 'utf8');
      let modified = false;

      // Remove merge conflict markers and keep HEAD version
      content = content.replace(/[^\n]+\n?/g, '');

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

  return totalFixed;
}

// Main execution
console.log('Starting merge conflict resolution...');
const totalFixed = processDirectory('.');
console.log(`\nResolved conflicts in ${totalFixed} files.`);
console.log('Merge conflict resolution complete!');

