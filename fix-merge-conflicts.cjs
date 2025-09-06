<<<<<<< HEAD
<<<<<<< HEAD
=======
#!/usr/bin/env node

=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 5148ad4d0139b0ae9d3b89060f38b2be94f75652
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 43b43566c4674ad4aea00a6e4be20bc929909b52
=======
#!/usr/bin/env node

>>>>>>> cursor/automate-test-improve-and-merge-code-59d5
>>>>>>> a44a2a22d07cd86ac622dee3484c03de69b51a7b
>>>>>>> main
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

<<<<<<< HEAD
console.log('🔧 Starting comprehensive merge conflict resolution...');
=======
<<<<<<< HEAD
<<<<<<< HEAD
console.log('🔧 Starting merge conflict resolution...');
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358

// Function to resolve merge conflicts in a file
function resolveMergeConflicts(filePath) {
=======
// Function to fix merge conflicts in a file
function fixMergeConflicts(filePath) {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  try {
<<<<<<< HEAD
=======
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflicts
    if (!content.includes('<<<<<<< HEAD')) {
      return false;
    }
    
<<<<<<< HEAD
    console.log(`📝 Resolving conflicts in: ${filePath}`);
    
    // Split by merge conflict markers
    const parts = content.split(/<<<<<<< HEAD\n?/);
    let resolved = parts[0]; // Content before first conflict
    
    for (let i = 1; i < parts.length; i++) {
      const conflictPart = parts[i];
      const conflictSections = conflictPart.split(/=======\n?/);
      
      if (conflictSections.length >= 2) {
        const headContent = conflictSections[0];
        const remaining = conflictSections.slice(1).join('=======');
        const endMarker = remaining.split(/>>>>>>> [a-f0-9]+\n?/);
        
        // Choose HEAD content (first part) and remove conflict markers
        resolved += headContent;
        if (endMarker.length > 1) {
          resolved += endMarker.slice(1).join('>>>>>>> ');
        }
      }
    }
    
    // Clean up any remaining conflict markers
    resolved = resolved.replace(/<<<<<<< HEAD\n?/g, '');
    resolved = resolved.replace(/=======\n?/g, '');
    resolved = resolved.replace(/>>>>>>> [a-f0-9]+\n?/g, '');
    
    // Write resolved content
    fs.writeFileSync(filePath, resolved, 'utf8');
    return true;
  } catch (error) {
    console.error(`❌ Error resolving conflicts in ${filePath}:`, error.message);
=======
    console.log(`Fixing merge conflicts in: ${filePath}`);
    
<<<<<<< HEAD
    // Remove merge conflict markers and keep the content after the last =======
    const lines = content.split('\n');
    const fixedLines = [];
    let inConflict = false;
    let keepContent = false;

    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
=======
    // Remove merge conflict markers and keep the HEAD version
    content = content.replace(/<<<<<<< HEAD\n?/g, '');
    content = content.replace(/=======.*?\n?/g, '');
    content = content.replace(/>>>>>>> [a-f0-9]+.*?\n?/g, '');
    
    // Clean up any remaining conflict markers
    content = content.replace(/<<<<<<< .*?\n?/g, '');
    content = content.replace(/=======.*?\n?/g, '');
    content = content.replace(/>>>>>>> .*?\n?/g, '');
    
    // Write the cleaned content back
    fs.writeFileSync(filePath, content, 'utf8');
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
    return false;
  }
}

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
  let fixedCount = 0;
=======
// Function to find all files with merge conflicts
function findFilesWithConflicts(dir) {
  const files = [];
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
  
<<<<<<< HEAD
  function scanDirectory(currentDir) {
=======
console.log('🔧 Starting comprehensive merge conflict resolution...');

// Function to fix merge conflicts in a file
function fixMergeConflicts(filePath) {
  try {
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
<<<<<<< HEAD
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflicts
=======
#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

<<<<<<< HEAD
function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflicts
    if (!content.includes('<<<<<<< HEAD')) {
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
class MergeConflictFixer {
  constructor() {
    this.fixedFiles = [];
    this.errors = [];
  }

  log(message, type = 'INFO') {
    const timestamp = new Date().toISOString();
    const prefix = {
      'INFO': 'ℹ️',
      'SUCCESS': '✅',
      'ERROR': '❌',
      'WARNING': '⚠️',
      'PROGRESS': '🔄'
    }[type] || 'ℹ️';
    console.log(`${prefix} [${timestamp}] ${message}`);
  }

  fixMergeConflicts(filePath) {
    try {
      if (!fs.existsSync(filePath)) {
        return false;
      }

      const content = fs.readFileSync(filePath, 'utf8');
      
      // Check if file has merge conflicts
      if (!content.includes('          !content.includes('') && 
          !content.includes('        return false;
      }

      this.log(`Fixing merge conflicts in: ${filePath}`, 'PROGRESS');

      let fixedContent = content
        // Remove merge conflict markers and keep HEAD version
        .replace(/        // Remove any remaining conflict markers
        .replace(/        .replace(/\n?/g, '')
        .replace(/        // Clean up extra newlines
        .replace(/\n{3,}/g, '\n\n')
        .trim();

      // Write the fixed content back
      fs.writeFileSync(filePath, fixedContent);
      this.fixedFiles.push(filePath);
      this.log(`Fixed merge conflicts in: ${filePath}`, 'SUCCESS');
      return true;
    } catch (error) {
      this.log(`Error fixing ${filePath}: ${error.message}`, 'ERROR');
      this.errors.push({ file: filePath, error: error.message });
>>>>>>> cursor/automate-test-improve-and-merge-code-ac88
      return false;
    }
  }

  async findAndFixConflicts() {
    this.log('🔍 Searching for files with merge conflicts...', 'PROGRESS');
    
<<<<<<< HEAD
    console.log(`Fixing merge conflicts in: ${filePath}`);
    
<<<<<<< HEAD
    // Split by merge conflict markers
    const lines = content.split('\n');
    const fixedLines = [];
    let inConflict = false;
    let conflictType = '';
=======
    // Remove merge conflict markers and keep the second version (after =======)
    const lines = content.split('\n');
    const fixedLines = [];
    let inConflict = false;
    let keepVersion = false;
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
<<<<<<< HEAD
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
=======
      if (line.includes('<<<<<<< HEAD')) {
        inConflict = true;
        keepVersion = false;
        continue;
      }
=======
    try {
      // Use git to find files with merge conflicts
      const result = execSync('git grep -l "        encoding: 'utf8',
        cwd: process.cwd()
      });
      
      const files = result.trim().split('\n').filter(f => f.length > 0);
>>>>>>> cursor/automate-test-improve-and-merge-code-ac88
      
      if (files.length === 0) {
        this.log('No merge conflicts found', 'SUCCESS');
        return;
      }

      this.log(`Found ${files.length} files with merge conflicts`, 'INFO');

      for (const file of files) {
        this.fixMergeConflicts(file);
      }

      this.log(`✅ Fixed merge conflicts in ${this.fixedFiles.length} files`, 'SUCCESS');
      
      if (this.errors.length > 0) {
        this.log(`❌ ${this.errors.length} files had errors`, 'WARNING');
        this.errors.forEach(err => {
          this.log(`   - ${err.file}: ${err.error}`, 'ERROR');
        });
      }

    } catch (error) {
      this.log(`Error searching for conflicts: ${error.message}`, 'ERROR');
    }
  }

  async run() {
    this.log('🚀 Starting merge conflict fixer...', 'PROGRESS');
    await this.findAndFixConflicts();
    
<<<<<<< HEAD
    const fixedContent = fixedLines.join('\n');
    fs.writeFileSync(filePath, fixedContent, 'utf8');
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

<<<<<<< HEAD
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
        }
      }
    }
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-28da
  }
  
  scanDirectory(dir);
  return files;
}

<<<<<<< HEAD
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
=======
function findFilesWithConflicts(dir) {
  const files = [];
  
  function traverse(currentDir) {
>>>>>>> main
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
<<<<<<< HEAD
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        scanDirectory(fullPath);
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.js') || item.endsWith('.jsx') || item.endsWith('.css'))) {
        try {
          const content = fs.readFileSync(fullPath, 'utf8');
          if (content.includes('<<<<<<< HEAD')) {
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
>>>>>>> main
            files.push(fullPath);
          }
        } catch (error) {
          // Skip files that can't be read
<<<<<<< HEAD
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======
>>>>>>> main
        }
<<<<<<< HEAD
=======
function findAndFixConflicts(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      fixedCount += findAndFixConflicts(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js')) {
      if (fixMergeConflicts(filePath)) {
        fixedCount++;
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
      }
    }
  }
  
<<<<<<< HEAD
<<<<<<< HEAD
  traverse(dir);
=======
<<<<<<< HEAD
  walkDir(dir);
=======
  traverse(dir);
>>>>>>> main
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
  return files;
}

// Main execution
<<<<<<< HEAD
=======
<<<<<<< HEAD
console.log('Finding files with merge conflicts...');
const conflictedFiles = findFilesWithConflicts('/workspace');

console.log(`Found ${conflictedFiles.length} files with merge conflicts`);

let fixedCount = 0;
for (const file of conflictedFiles) {
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
console.log('🔍 Scanning for files with merge conflicts...');
const filesWithConflicts = findFilesWithConflicts(process.cwd());

console.log(`Found ${filesWithConflicts.length} files with merge conflicts`);

let fixedCount = 0;
for (const file of filesWithConflicts) {
<<<<<<< HEAD
=======
>>>>>>> main
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
  if (fixMergeConflicts(file)) {
    fixedCount++;
  }
}

<<<<<<< HEAD
console.log(`✅ Fixed merge conflicts in ${fixedCount} files`);
console.log('🎉 Merge conflict resolution complete!');
>>>>>>> cursor/fix-lint-push-and-merge-to-main-28da
=======
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
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
<<<<<<< HEAD
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
=======
<<<<<<< HEAD
  scanDirectory(dir);
=======
  walkDir(dir);
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  return files;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
}

// Main execution
<<<<<<< HEAD
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
=======
console.log('Finding files with merge conflicts...');
const conflictedFiles = findFilesWithConflicts('/workspace');

console.log(`Found ${conflictedFiles.length} files with merge conflicts`);

let fixedCount = 0;
for (const file of conflictedFiles) {
  if (fixMergeConflicts(file)) {
    fixedCount++;
  }
}

<<<<<<< HEAD
console.log('Merge conflict fix completed.');
=======
console.log(`Fixed merge conflicts in ${fixedCount} files`);

// Try to build after fixing conflicts
console.log('Attempting build after fixing conflicts...');
try {
  execSync('npm run build', { stdio: 'inherit', cwd: '/workspace' });
  console.log('Build successful!');
} catch (error) {
  console.error('Build failed:', error.message);
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
console.log(`✅ Fixed merge conflicts in ${fixedCount} files`);
console.log('🎉 Merge conflict resolution complete!');
>>>>>>> cursor/fix-lint-push-and-merge-to-main-28da
>>>>>>> main
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
=======
    const report = {
      timestamp: new Date().toISOString(),
      fixedFiles: this.fixedFiles.length,
      errors: this.errors.length,
      files: this.fixedFiles,
      errorDetails: this.errors
    };

    fs.writeFileSync('merge-conflict-fix-report.json', JSON.stringify(report, null, 2));
    this.log('📊 Report saved to merge-conflict-fix-report.json', 'SUCCESS');
  }
}

// Run if called directly
if (require.main === module) {
  const fixer = new MergeConflictFixer();
  fixer.run().catch(error => {
    console.error('Merge conflict fixer failed:', error);
    process.exit(1);
  });
}

module.exports = MergeConflictFixer;
>>>>>>> cursor/automate-test-improve-and-merge-code-ac88
