<<<<<<< HEAD
#!/usr/bin/env node





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
=======
const fs = require('fs');
const path = require('path');

// Function to fix merge conflicts in a file
function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflicts
    if (!content.includes('<<<<<<< HEAD')) {
      return false; // No conflicts to fix
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-3ea5
    }
    
    console.log(`Fixing merge conflicts in: ${filePath}`);
    
<<<<<<< HEAD

    // Remove merge conflict markers and keep the second version (after )

    // Remove merge conflict markers and keep the second version (after )
    const lines = content.split('\n');
    const fixedLines = [];
=======
    // Remove merge conflict markers and keep the content after =======
    // This is a simple approach - we'll take the "incoming" changes (after =======)
    let lines = content.split('\n');
    let fixedLines = [];
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-3ea5
    let inConflict = false;
    let keepContent = false;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
<<<<<<< HEAD



    return false;
  }
}

function findAndFixConflicts(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;
  


  function scanDirectory(currentDir) {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflicts
    if (!content.includes('')) {
      return false;
    }
    
    console.log(`Fixing merge conflicts in: ${filePath}`);
    
    // Split by merge conflict markers
    const lines = content.split('\n');
    const fixedLines = [];
    let inConflict = false;
    let conflictType = '';
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      

    let keepLines = false;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];

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


      if (!inConflict || keepLines) {
        resolvedLines.push(line);
      }
    }

    const resolvedContent = resolvedLines.join('\n');
    fs.writeFileSync(filePath, resolvedContent, 'utf8');
=======
      if (line.includes('<<<<<<< HEAD')) {
        inConflict = true;
        keepContent = false;
        continue;
      }
      
      if (line.includes('=======')) {
        keepContent = true;
        continue;
      }
      
      if (line.includes('>>>>>>>')) {
        inConflict = false;
        keepContent = false;
        continue;
      }
      
      if (!inConflict || keepContent) {
        fixedLines.push(line);
      }
    }
    
    // Write the fixed content back
    fs.writeFileSync(filePath, fixedLines.join('\n'));
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-3ea5
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
<<<<<<< HEAD

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
};

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
        }
      }
    }

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
  }
  
  scanDirectory(dir);
  return files;
}

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
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        scanDirectory(fullPath);
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.js') || item.endsWith('.jsx') || item.endsWith('.css'))) {
        try {
          const content = fs.readFileSync(fullPath, 'utf8');
          if (content.includes('')) {
            files.push(fullPath);
          }
        } catch (error) {
          // Skip files that can't be read

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
            if (content.includes('')) {
              files.push(fullPath);
            }
          } catch (error) {
            // Skip files that can't be read
          }

function findAndFixConflicts(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;
  

=======
  }
}

// Function to recursively find and fix merge conflicts
function fixAllMergeConflicts(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;
  
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-3ea5
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      fixedCount += fixAllMergeConflicts(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.js') || file.endsWith('.jsx')) {
      if (fixMergeConflicts(filePath)) {
        fixedCount++;
<<<<<<< HEAD


=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-3ea5
      }
    }
  }
  
<<<<<<< HEAD

  return files;
}

// Main execution


console.log('Finding files with merge conflicts...');
const conflictedFiles = findFilesWithConflicts('/workspace');

console.log(`Found ${conflictedFiles.length} files with merge conflicts`);

let fixedCount = 0;
for (const file of conflictedFiles) {
  if (fixMergeConflicts(file)) {
    fixedCount++;
  }
}

console.log(`✅ Fixed merge conflicts in ${fixedCount} files`);
console.log('🎉 Merge conflict resolution complete!');

=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-3ea5
  return fixedCount;
}

// Fix merge conflicts in the app directory
const appDir = '/workspace/app';
const fixedCount = fixAllMergeConflicts(appDir);

<<<<<<< HEAD
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


  resolveMergeConflicts(filePath) {
    try {
      this.log(`Processing: ${filePath}`);
      
      let content = fs.readFileSync(filePath, 'utf8');
      let modified = false;
      
      // Remove merge conflict markers and keep HEAD version
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



  return totalFixed;
}

// Main execution
console.log('Starting merge conflict resolution...');
const totalFixed = processDirectory('.');
console.log(`\nResolved conflicts in ${totalFixed} files.`);
console.log('Merge conflict resolution complete!');

=======
console.log(`Fixed merge conflicts in ${fixedCount} files`);
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-3ea5
