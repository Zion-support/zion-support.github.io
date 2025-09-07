#!/usr/bin/env node

<<<<<<< HEAD





#!/usr/bin/env node





#!/usr/bin/env node


=======
>>>>>>> 505950bb5f65df61118ac41ff4bde74d3caba4f4
const fs = require('fs');
const path = require('path');

console.log('🔧 Starting merge conflict resolution...');
<<<<<<< HEAD


// Function to resolve merge conflicts in a file
function resolveMergeConflicts(filePath) {
  try {
let content = fs.readFileSync(filePath, 'utf8');
=======

// Function to fix merge conflicts in a file
function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
>>>>>>> 505950bb5f65df61118ac41ff4bde74d3caba4f4
    
    // Check if file has merge conflicts
    if (!content.includes('') && !content.includes('>>>>>>>')) {
      return false;
    }
    
<<<<<<< HEAD
    console.log(`📝 Fixing merge conflicts in: ${filePath}`);
    
    // Remove merge conflict markers and keep HEAD version
    content = content
      .replace(/\n?/g, '')
      .replace(/\n?/g, '')
      .replace(/      .replace(/:.*\n?/g, '')
      .replace(/    
    // Clean up any remaining conflict markers
    console.log(`Fixing merge conflicts in: ${filePath}`);
    
const lines = content.split('\n');
    const fixedLines = [];
    let inConflict = false;
    let keepContent = false;

    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      

=======
    console.log(`Fixing merge conflicts in: ${filePath}`);
    
>>>>>>> 505950bb5f65df61118ac41ff4bde74d3caba4f4
    // Remove merge conflict markers and keep the HEAD version
    content = content.replace(/<<<<<<< HEAD\n?/g, '');
    content = content.replace(/=======.*?\n?/g, '');
    content = content.replace(/
    
    // Clean up any remaining conflict markers
    content = content.replace(/<<<<<<< .*?\n?/g, '');
    content = content.replace(/=======.*?\n?/g, '');
    content = content.replace(/
    
    // Write the cleaned content back
    fs.writeFileSync(filePath, content, 'utf8');
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
<<<<<<< HEAD


=======
>>>>>>> 505950bb5f65df61118ac41ff4bde74d3caba4f4
    return false;
  }
}

<<<<<<< HEAD
// Function to find all files with merge conflicts
function findFilesWithConflicts(dir) {
  const files = [];
  
console.log('🔧 Starting comprehensive merge conflict resolution...');

// Function to fix merge conflicts in a file
function fixMergeConflicts(filePath) {
  try {
#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

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

      return false;
    }
  }

  async findAndFixConflicts() {
    this.log('🔍 Searching for files with merge conflicts...', 'PROGRESS');
    
// Remove merge conflict markers and keep the second version (after =======)
    const lines = content.split('\n');
    const fixedLines = [];
    let inConflict = false;
    let keepVersion = false;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
if (line.includes('<<<<<<< HEAD')) {
        inConflict = true;
        keepVersion = false;
        continue;
      }

    try {
      // Use git to find files with merge conflicts
      const result = execSync('git grep -l "        encoding: 'utf8',
        cwd: process.cwd()
      });
      
      const files = result.trim().split('\n').filter(f => f.length > 0);
      
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
    
let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Remove merge conflict markers and keep the latest version
    // Patter: n:  ... 
    content = content.replace(/([\s\S]*?)
    
    // Also handle cases where there might be multiple conflict sections
    content = content.replace(//g, '');
    content = content.replace(/
    

    content = content
      .replace(/^<<<<<<< .*$/gm, '')
      .replace(/^.*$/gm, '')
      .replace(/^
    // Remove empty lines that might be left behind
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    fs.writeFileSync(filePath, content);
    console.log(`✅ Fixed merge conflicts in: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`❌ Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all files with merge conflicts
function findFilesWithConflicts(dir) {
  const files = [];
  
  function scanDirectory(currentDir) {
    try {
      const items = fs.readdirSync(currentDir);
      
      for (const item of items) {
        const fullPath = path.join(currentDir, item);
        let stat;
        
        try {
          stat = fs.statSync(fullPath);
        } catch (error) {
          // Skip broken symlinks or inaccessible files
          continue;
        }
        
        if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
          scanDirectory(fullPath);
        } else if (stat.isFile() && (item.endsWith('.js') || item.endsWith('.cjs') || item.endsWith('.ts') || item.endsWith('.tsx'))) {
          try {
            const content = fs.readFileSync(fullPath, 'utf8');
            if (content.includes('') || content.includes('>>>>>>>')) {
              files.push(fullPath);
            }
          } catch (error) {
            // Skip files that can't be read
          }
        }
      }
    } catch (error) {
      // Skip directories that can't be read
    }
  }
  
  scanDirectory(dir);
  return files;
}

// Main execution
try {
  console.log('🔍 Scanning for files with merge conflicts...');
  const conflictedFiles = findFilesWithConflicts('/workspace');
  
  console.log(`📊 Found ${conflictedFiles.length} files with merge conflicts`);
  
  let fixedCount = 0;
  for (const file of conflictedFiles) {
    if (resolveMergeConflicts(file)) {
      fixedCount++;
    }
  }
  
  console.log(`✅ Successfully fixed ${fixedCount} files`);
  console.log('🎉 Merge conflict resolution completed!');
  
} catch (error) {
  console.error('❌ Error during merge conflict resolution:', error);
  process.exit(1);
function findFilesWithConflicts(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
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
            if (content.includes('<<<<<<< HEAD')) {
              files.push(fullPath);
            }
          } catch (error) {
            // Skip files that can't be read
          }


        }
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


      }
    }
  }
  
  traverse(dir);

  return files;
}

// Main execution
console.log('🔍 Scanning for files with merge conflicts...');
const filesWithConflicts = findFilesWithConflicts(process.cwd());

console.log(`Found ${filesWithConflicts.length} files with merge conflicts`);

let fixedCount = 0;
for (const file of filesWithConflicts) {


  if (fixMergeConflicts(file)) {
    fixedCount++;
  }
}

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

console.log(`Fixed merge conflicts in ${fixedCount} files`);

// Try to build after fixing conflicts
console.log('Attempting build after fixing conflicts...');
try {
  execSync('npm run build', { stdio: 'inherit', cwd: '/workspace' });
  console.log('Build successful!');
} catch (error) {
  console.error('Build failed:', error.message);
}


console.log(`✅ Fixed merge conflicts in ${fixedCount} files`);
console.log('🎉 Merge conflict resolution complete!');




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


}

=======
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
      }
    }
  }

  return totalFixed;
}

// Main execution
console.log('Starting merge conflict resolution...');
const totalFixed = processDirectory('.');
console.log(`\nResolved conflicts in ${totalFixed} files.`);
console.log('Merge conflict resolution complete!');
>>>>>>> 505950bb5f65df61118ac41ff4bde74d3caba4f4
