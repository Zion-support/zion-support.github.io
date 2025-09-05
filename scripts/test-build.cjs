<<<<<<< HEAD
#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');



// Temporarily move problematic files
const problematicFiles = ['components/ContactForm.tsx',
  'components/PerformanceMonitor.tsx',
];

const movedFiles = [];

try {
  // Move problematic files temporarily
  problematicFiles.forEach((file) => {
    if (fs.existsSync(file)) {
      const backupPath = `${file}.backup`;
      fs.renameSync(file, backupPath);
      movedFiles.push({ "original": file, "backup": backupPath });
      }
  });

  // Try to build
  
  try {
    execSync('npm run build', { "stdio": 'inherit' });
    } catch (error) {
    }
} finally {
  // Restore files
  movedFiles.forEach(({ original, backup }) => {
    try {
      if (fs.existsSync(backup)) {
        fs.renameSync(backup, original);
        }
    } catch (restoreError) {
      }
  })}

=======
<<<<<<< HEAD
#!/usr/bin/env node/usr/bin/env nodeconst fs = require("fs");"const path = require("path");"const { execSync } = require("child_process");"console.log(" Starting Test Build.");/ Temporarily move problematic files"const problematicFiles = ["components/ContactForm.tsx"," "components/PerformanceMonitor.tsx",];const movedFiles = [];try { / Move problematic files temporarily problematicFiles.forEach((file) => { if (fs.existsSync(file)) { const backupPath = `${file}.backup`; fs.renameSync(file, backupPath); movedFiles.push({ original: file, backup: backupPath });` console.log(` Moved ${file} to ${backupPath}`)} }); / Try to build" console.log(" Attempting build without problematic files."); try {"" execSync("npm run build", { stdio: "inherit" });" console.log(" Build successful!")} catch (error) {"" console.log(" Build failed: ", error.message)}} finally { / Restore files movedFiles.forEach(({ original, backup }) => { try { if (fs.existsSync(backup)) { fs.renameSync(backup, original);` console.log(` Restored ${original}`)} } catch (restoreError) {` console.log(` Failed to restore ${original}:`, restoreError.message)} })}"console.log(" Test build completed!");'"`'"`
=======
#!/usr/bin/env node;
const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')
console.log('🧪 Starting Test Build...')
const problematicFiles = ['components/ContactForm.tsx']
  'components/PerformanceMonitor.tsx'
  console.log('� Attempting build without problematic files...')
    execSync('npm run build', { "stdio"})
    console.log(' Build "failed")
>>>>>>> main
>>>>>>> main
