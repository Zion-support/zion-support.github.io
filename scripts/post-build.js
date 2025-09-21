#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('Running post-build script...');

const outDir = path.join(__dirname, '..', 'out');
const serverPagesDir = path.join(outDir, 'server', 'pages');

// Check if server/pages directory exists
if (fs.existsSync(serverPagesDir)) {
  console.log('Moving HTML files from server/pages to root...');
  
  // Read all files in server/pages
  const files = fs.readdirSync(serverPagesDir);
  
  files.forEach(file => {
    if (file.endsWith('.html')) {
      const sourcePath = path.join(serverPagesDir, file);
      const targetPath = path.join(outDir, file);
      
      // Copy file to root of out directory
      fs.copyFileSync(sourcePath, targetPath);
      console.log(`Moved ${file} to root`);
    }
  });
  
  // Create index.html if it doesn't exist in root
  const indexPath = path.join(outDir, 'index.html');
  if (!fs.existsSync(indexPath)) {
    const serverIndexPath = path.join(serverPagesDir, 'index.html');
    if (fs.existsSync(serverIndexPath)) {
      fs.copyFileSync(serverIndexPath, indexPath);
      console.log('Created index.html in root');
    }
  }
  
  console.log('Post-build script completed successfully!');
} else {
  console.log('No server/pages directory found, skipping post-build steps');
}