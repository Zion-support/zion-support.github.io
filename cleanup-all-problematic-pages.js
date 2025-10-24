const fs = require('fs');
const path = require('path');

// Create backup directory
const backupDir = './all-pages-backup';
if (!fs.existsSync(backupDir)) {
  fs.mkdirSync(backupDir, { recursive: true });
}

// Function to move directory to backup
function moveDirectoryToBackup(dirPath) {
  try {
    if (fs.existsSync(dirPath)) {
      const dirName = path.basename(dirPath);
      const backupPath = path.join(backupDir, dirName);
      fs.renameSync(dirPath, backupPath);
      console.log(`Moved ${dirPath} to ${backupPath}`);
    }
  } catch (error) {
    console.error(`Error moving ${dirPath}:`, error.message);
  }
}

// Keep only these core pages
const keepPages = [
  'app/page.tsx',
  'app/layout.tsx',
  'app/404.tsx',
  'app/about',
  'app/contact',
  'app/globals.css'
];

// Get all directories in app folder
const appDir = './app';
const allItems = fs.readdirSync(appDir);

// Move all directories except the ones we want to keep
allItems.forEach(item => {
  const itemPath = path.join(appDir, item);
  const stat = fs.statSync(itemPath);
  
  if (stat.isDirectory()) {
    // Skip the directories we want to keep
    if (!keepPages.includes(itemPath)) {
      moveDirectoryToBackup(itemPath);
    }
  }
});

console.log('Cleanup completed! Only core pages remain.');