const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Find all backup files
const result = execSync('find app -name "*.backup" -type f', { encoding: 'utf-8' });
const backupFiles = result.trim().split('\n').filter(f => f);

// console.log(`Found ${backupFiles.length} backup files`);

backupFiles.forEach(backupFile => {
  const targetFile = backupFile.replace('.backup', '');
  // console.log(`Processing: ${backupFile} -> ${targetFile}`);
  
  try {
    let content = fs.readFileSync(backupFile, 'utf-8');
    
    // Check if backup has merge conflicts
    if (content.includes('<<<<<<<') || content.includes('=======') || content.includes('>>>>>>>')) {
      // console.log(`  Backup has merge conflicts, keeping original`);
      return;
    }
    
    // If backup is clean, use it
    fs.copyFileSync(backupFile, targetFile);
    // console.log(`  ✓ Restored from backup`);
  } catch (err) {
    // console.log(`  ✗ Error: ${err.message}`);
  }
});

// console.log('\\nDone!');