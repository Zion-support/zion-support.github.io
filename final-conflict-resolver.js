
const fs = require('fs');
const path = require('path');

console.log('🚀 Final comprehensive merge conflict resolution...');

// Function to clean a single file
function cleanFile(filePath) {
    try {
        let content = fs.readFileSync(filePath, 'utf8');
        if (!content.includes('
        content = content.replace(/
    .replace(/
    .replace(/\n\n\n+/g, '\n\n'); // Clean up excessive newlines
}

// Function to process a single file
function processFile(filePath) {
  try {
    if (!fs.existsSync(filePath)) return false;
    
    const content = fs.readFileSync(filePath, 'utf8');
    
    if (!content.includes('')) return false;
    
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
              if (content.includes('')) {
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

