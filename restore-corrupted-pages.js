#!/usr/bin/env node,
const fs = require('fs');
const path = require('path');
// Function to find the best backup file for a given page,
function findBestBackup(pagePath) {,
  const dir = path.dirname(pagePath);
  const baseName = path.basename(pagePath, path.extname(pagePath));
  const ext = path.extname(pagePath);
  // Look for backup files,
  const backupPattern = new RegExp(`^${baseName}\\.tsx\\.backup\\.\\d+$`);
  const files = fs.readdirSync(dir).filter(file => backupPattern.test(file));
  if (files.length === 0) return null;
  // Sort by timestamp (newest first) and find the first valid one,
  files.sort((a, b) => {,
    const timestampA = parseInt(a.match(/\.backup\.(\d+)$/)[1]);
    const timestampB = parseInt(b.match(/\.backup\.(\d+)$/)[1]);
    return timestampB - timestampA;
  });
  for (const backupFile of files) {,
    const backupPath = path.join(dir, backupFile);
    try {,
      const content = fs.readFileSync(backupPath, 'utf8');
      // Check if this backup has proper content,
      if (content.includes('export default') &&,
          (content.includes('function') || content.includes('const') || content.includes('class')) &&,
          content.includes('return') &&,
          content.length > 100) {,
        return backupPath;
      }
    } catch (error) {,
      console.log(`Error reading backup ${backupPath}:`, error.message);
    }
,
}}