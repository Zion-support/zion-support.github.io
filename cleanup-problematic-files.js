const fs = require('fs');
const path = require('path');

// Create backup directory
const backupDir = './problematic-files-backup';
if (!fs.existsSync(backupDir)) {
  fs.mkdirSync(backupDir, { recursive: true });
}

// List of problematic files that are causing build failures
const problematicFiles = [
  'app/accessibility-page/page.tsx',
  'app/accessibility/page.tsx',
  'app/advanced-security-suite/page.tsx',
  'app/ai-accounting-assistant/page.tsx',
  'app/ai-agricultural-intelligence-pro/page.tsx'
];

// Function to move file to backup
function moveToBackup(filePath) {
  try {
    if (fs.existsSync(filePath)) {
      const fileName = path.basename(filePath);
      const backupPath = path.join(backupDir, fileName);
      fs.renameSync(filePath, backupPath);
      console.log(`Moved ${filePath} to ${backupPath}`);
    }
  } catch (error) {
    console.error(`Error moving ${filePath}:`, error.message);
  }
}

// Move all problematic files
console.log('Moving problematic files to backup...');
problematicFiles.forEach(moveToBackup);
console.log('Cleanup completed!');