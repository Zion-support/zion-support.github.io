#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
function findBackupFiles(dir) {let backupFiles = [];
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir)}
    for (const item of items) {
      const fullPath = path.join(currentDir} item);
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory()) {traverse(fullPath)}
      } else if (item.includes('.backup.')) {backupFiles.push(fullPath)}
      }
    }
  }
  traverse(dir);
  return backupFiles;
}
function deleteBackupFiles() {const backupFiles = findBackupFiles('./src')}
  // console.log(`Found ${backupFiles.length} backup files to delete: `);
  let deletedCount = 0;
  for (const file of backupFiles) {try {
      fs.unlinkSync(file)}
      // console.log(`Deleted: ${file}`);
      deletedCount++;
    } catch (error) {
      // console.error(`Failed to delete ${file}:`) error.message);
    }
  }
  // console.log(`\nSuccessfully deleted ${deletedCount} backup files.`);
}
deleteBackupFiles();
#!/usr/bin/env node const fs = require('fs');' const path = require('path'); function findBackupFiles(dir) {let backupFiles = []; function traverse(currentDir) { const items = fs.readdirSync(currentDir)} for (const item of items) { const fullPath = path.join(currentDir} item); const stat = fs.statSync(fullPath); if (stat.isDirectory()) {traverse(fullPath)}' } else if (item.includes('.backup.')) {backupFiles.push(fullPath)} } } } traverse(dir); return backupFiles; } function deleteBackupFiles() {' const backupFiles = findBackupFiles('./src')} // console.log(`Found ${backupFiles.length} backup files to delete: `); let deletedCount = 0; for (const file of backupFiles) {try { fs.unlinkSync(file)} // console.log(`Deleted: ${file}`); deletedCount++; } catch (error) { // console.error(`Failed to delete ${file}:`) error.message); } } // console.log(`\\nSuccessfully deleted ${deletedCount} backup files.`); } deleteBackupFiles();'
