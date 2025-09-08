<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f0e1294785e083e3a9ce6b4bf5f6686fd9008276
=======
>>>>>>> 2a52ffcaecd5f6a836f52d5d40dfd3f48a28a425
#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

<<<<<<< HEAD
<<<<<<< HEAD
console.log('🚀 Starting final merge conflict resolution...');

// Function to resolve merge conflicts in a file
function resolveMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflict markers
    if (!content.includes('<<<<<<<') && !content.includes('=======') && !content.includes('>>>>>>>')) {
      return false; // No conflicts in this file
    }
    
    console.log(`🔧 Resolving conflicts in: ${filePath}`);
    
    // Remove all merge conflict markers and keep the incoming changes (after =======)
    let resolvedContent = content;
    
    // Pattern 1: Conflicts with file paths - keep incoming changes
    resolvedContent = resolvedContent.replace(/const fs = require('fs');
const path = require('path');

console.log('🚀 Final comprehensive merge conflict resolution...');

// Function to clean a single file
function cleanFile(filePath) {
    try {
        let content = fs.readFileSync(filePath, 'utf8');
        if (!content.includes('
        content = content.replace(/<<<<<<< [^\n]+\n?/g, '');
        content = content.replace(/
        // Clean up duplicate lines
        const lines = content.split('\n');
        const seen = new Set();
        const cleaned = [];
        for (const line of lines) {
            const trimmed = line.trim();
            if (trimmed && !seen.has(trimmed)) {
                seen.add(trimmed);
                cleaned.push(line);
            } else if (!trimmed) {
                cleaned.push(line);
            }
        }
        content = cleaned.join('\n');
        // Remove excessive empty lines
        content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
        fs.writeFileSync(filePath, content);
        return true;
    } catch (error) {
        console.error(`Error cleaning ${filePath}:`, error.message);
        return false;
    }
}

// Find all files with conflicts
function findConflicts(dir) {
    const conflicts = [];
    function scan(currentDir) {
        try {
            const items = fs.readdirSync(currentDir);
            for (const item of items) {
                const itemPath = path.join(currentDir, item);
                const stat = fs.statSync(itemPath);
                if (stat.isDirectory()) {
                    if (!['node_modules', '.git', 'dist', 'build', '.next', 'temp_exclude', 'backup-problematic-files'].includes(item)) {
                        scan(itemPath);
                    }
                } else if (stat.isFile()) {
                    try {
                        const content = fs.readFileSync(itemPath, 'utf8');
                        if (content.includes('')) {
                            conflicts.push(itemPath);
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
    scan(dir);
    return conflicts;
}

// Main execution
const conflictFiles = findConflicts('/workspace');
console.log(`Found ${conflictFiles.length} files with conflicts`);

let cleanedCount = 0;
for (const file of conflictFiles) {
    if (cleanFile(file)) {
        cleanedCount++;
    }
}

console.log(`Cleaned ${cleanedCount} files`);

// Final verification
const remaining = findConflicts('/workspace');
console.log(`Remaining conflicts: ${remaining.length}`);

if (remaining.length === 0) {
    console.log('🎉 All conflicts resolved!');
} else {
    console.log('⚠️  Some conflicts remain:');
    remaining.forEach(file => console.log(`  - ${file}`));
}
=======
=======
>>>>>>> 2a52ffcaecd5f6a836f52d5d40dfd3f48a28a425
console.log('🚀 Final comprehensive merge conflict resolution...\n');

// Function to clean merge conflict markers
function cleanMergeConflicts(content) {
  return content
    .replace(/
    .replace(/
    .replace(/\n?[\s\S]*?
    .replace(/
    .replace(//g, '')
    .replace(/
    .replace(/\n\n\n+/g, '\n\n'); // Clean up excessive newlines
}

// Function to process a single file
function processFile(filePath) {
  try {
    if (!fs.existsSync(filePath)) return false;
    
    const content = fs.readFileSync(filePath, 'utf8');
    
    if (!content.includes('
    
    console.log(`📝 Processing: ${filePath}`);
    
    const cleaned = cleanMergeConflicts(content);
    fs.writeFileSync(filePath, cleaned);
    
    return true;
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find files with conflicts
function findConflictedFiles(dir, extensions = ['.js', '.ts', '.tsx', '.jsx', '.json', '.md', '.sh', '.cjs', '.xml']) {
  const conflictedFiles = [];
  
  function scanDir(currentDir) {
    try {
      const items = fs.readdirSync(currentDir);
      
      for (const item of items) {
        const fullPath = path.join(currentDir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          // Skip certain directories
          if (!['node_modules', '.git', 'dist', 'build', '.next', 'out'].includes(item)) {
            scanDir(fullPath);
          }
        } else if (stat.isFile()) {
          const ext = path.extname(item);
          if (extensions.includes(ext)) {
            try {
              const content = fs.readFileSync(fullPath, 'utf8');
              if (content.includes('
                conflictedFiles.push(fullPath);
              }
            } catch (error) {
              // Skip files that can't be read
            }
          }
        }
      }
    } catch (error) {
      // Skip directories that can't be read
    }
  }
  
  scanDir(dir);
  return conflictedFiles;
}

// Main execution
try {
  console.log('🔍 Scanning for conflicted files...\n');
  
  const conflictedFiles = findConflictedFiles('.');
  console.log(`Found ${conflictedFiles.length} files with merge conflicts\n`);
  
  if (conflictedFiles.length === 0) {
    console.log('✅ No merge conflicts found!');
    process.exit(0);
  }
  
  let processed = 0;
  let errors = 0;
  
  // Process files in batches to avoid memory issues
  const batchSize = 50;
  for (let i = 0; i < conflictedFiles.length; i += batchSize) {
    const batch = conflictedFiles.slice(i, i + batchSize);
    
    console.log(`Processing batch ${Math.floor(i / batchSize) + 1}/${Math.ceil(conflictedFiles.length / batchSize)}...`);
    
    for (const file of batch) {
      if (processFile(file)) {
        processed++;
      } else {
        errors++;
      }
    }
  }
  
  console.log(`\n📊 Resolution Summary:`);
  console.log(`✅ Successfully processed: ${processed} files`);
  console.log(`❌ Errors: ${errors} files`);
  
  if (processed > 0) {
    console.log('\n🔄 Staging resolved files...');
    try {
      const { execSync } = require('child_process');
      execSync('git add .', { stdio: 'inherit' });
      console.log('✅ Files staged successfully');
    } catch (error) {
      console.log('⚠️  Could not stage files:', error.message);
    }
  }
  
  console.log('\n🎉 Merge conflict resolution completed!');
  
} catch (error) {
  console.error('💥 Fatal error:', error.message);
  process.exit(1);
}
<<<<<<< HEAD
>>>>>>> f0e1294785e083e3a9ce6b4bf5f6686fd9008276
=======

>>>>>>> 2a52ffcaecd5f6a836f52d5d40dfd3f48a28a425
