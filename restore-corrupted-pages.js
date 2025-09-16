#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to find the best backup file for a given page
function findBestBackup(pagePath) {
  const dir = path.dirname(pagePath);
  const baseName = path.basename(pagePath, path.extname(pagePath));
  const ext = path.extname(pagePath);
  
  // Look for backup files
  const backupPattern = new RegExp(`^${baseName}\\.tsx\\.backup\\.\\d+$`);
  const files = fs.readdirSync(dir).filter(file => backupPattern.test(file));
  
  if (files.length === 0) return null;
  
  // Sort by timestamp (newest first) and find the first valid one
  files.sort((a, b) => {
    const timestampA = parseInt(a.match(/\.backup\.(\d+)$/)[1]);
    const timestampB = parseInt(b.match(/\.backup\.(\d+)$/)[1]);
    return timestampB - timestampA;
  });
  
  for (const backupFile of files) {
    const backupPath = path.join(dir, backupFile);
    try {
      const content = fs.readFileSync(backupPath, 'utf8');
      
      // Check if this backup has proper content
      if (content.includes('export default') && 
          (content.includes('function') || content.includes('const') || content.includes('class')) &&
          content.includes('return') &&
          content.length > 100) {
        return backupPath;
      }
    } catch (error) {
      console.log(`Error reading backup ${backupPath}:`, error.message);
    }
<<<<<<< HEAD
  }
  
  return null;
}
=======
;
    // Find backup;
    const backupPath = findBestBackup(pagePath);
    if (!backupPath) {;
      return { restored: false, reason: 'No valid backup found' }
    }
;
    // Read backup content;
    let backupContent = fs.readFileSync(backupPath, 'utf8'),;
    // Handle merge conflicts by taking the content after the conflict markers;
    if (backupContent.includes('')) {;
      const parts = backupContent.split('');
      if (parts.length > 1) {;
        // Take the content after the conflict resolution;


'),


      if (parts.length > 1) {
        // Take the content after the conflict resolution




      }
    }
    // Clean up the content

    backupContent = backupContent.trim()

    // Ensure it has proper structure
    if (!backupContent.includes('export default')) {
      return { restored: false, reason: 'Backup content is also corrupted' }
    }



>>>>>>> origin/merge-pr-12271

// Function to restore a corrupted page
function restorePage(pagePath) {
  try {
    const currentContent = fs.readFileSync(pagePath, 'utf8');
    
    // Check if the page is corrupted
    const isCorrupted = !currentContent.includes('export default') || 
                        currentContent.length < 100 ||
                        !currentContent.includes('return');
    
    if (!isCorrupted) {
      return { restored: false, reason: 'Page is not corrupted' };
    }
    
    // Find backup
    const backupPath = findBestBackup(pagePath);
    if (!backupPath) {
      return { restored: false, reason: 'No valid backup found' };
    }
<<<<<<< HEAD
    
    // Read backup content
    let backupContent = fs.readFileSync(backupPath, 'utf8');
    
    // Handle merge conflicts by taking the content after the conflict markers
=======
    // Clean up the content;
    backup_content = backup_content.trim (),// Ensure it has proper structure;
    if () {) {$2;
}
      return { restored: false, reason: 'Backup content is also corrupted' }
    }
    // Create a backup of the current corrupted file;
    const timestamp = Date.now (),const corruptedBackupPath = `${page_path}.corrupted.${timestamp}`,fs.writeFileSync (corruptedBackupPath, current_content),// Restore the page;;
    // Create a backup of the current corrupted file;
    const timestamp = Date.now()const corruptedBackupPath = `${pagePath}.corrupted.${timestamp}`;
    fs.writeFileSync(corruptedBackupPath, currentContent),// Restore the page;
    fs.writeFileSync(pagePath, backupContent),return {restored: true,backupUsed: backupPath,corruptedBackup: corruptedBackupPath;}
  } catch (error) {return { restored: false, reason: `Error: ${error.message}` }
  }
}// Function to scan and restore all corrupted pages;
function restoreAllCorruptedPages() {const pagesDir = path.join(process.cwd(), 'pages')const results = {total: 0;
    restored: 0;
    failed: 0;
    details: [];
  }
  function scanDirectory() {const entries = fs.readdirSync(dir, { withFileTypes: true })for (const entry of entries) {const fullPath = path.join(dir, entry.name)if (entry.isDirectory()) {if ({scanDirectory(fullPath)}} else if (entry.name.endsWith('.tsx') |entry.name.endsWith('.jsx')) {results.total++;
        console.log(`\n🔍 Checking: ${fullPath}`)const result = restorePage(fullPath)} else if (entry.name.endsWith('.tsx') || entry.name.endsWith('.jsx')) {results.total++,console.log(`\n🔍 Checking: ${fullPath}`)} else if (entry.name.endsWith('.tsx') || entry.name.endsWith('.jsx')) {results.total++,console.log(`\n🔍 Checking: ${fullPath}`)} else if (entry.name.endsWith('.tsx') || entry.name.endsWith('.jsx')) {results.total++,console.log(`\n🔍 Checking: ${fullPath}`),// Function to scan and restore all corrupted pages;
function restoreAllCorruptedPages() {const pagesDir = path.join(process.cwd(), 'pages'),const results = {total: 0;
    restored: 0,failed: 0,details: [];
  },function scanDirectory() {const entries = fs.readdirSync(dir, { withFileTypes: true }),for (const entry of entries) {const fullPath = path.join(dir, entry.name)if (entry.isDirectory()) {if (entry.name !== 'node_modules' && entry.name !== '.git' && entry.name !== '.next') {scanDirectory(fullPath)}
      } else if (entry.name.endsWith('.tsx') || entry.name.endsWith('.jsx')) {results.total++,// // // console.log(`\n🔍 Checking: ${fullPath}`),const result = restorePage(fullPath),const result = restorePage(fullPath),const result = restorePage(fullPath),const result = restorePage(fullPath),const result = restorePage(fullPath),const result = restorePage(fullPath),const result = restorePage(fullPath),const result = restorePage(fullPath),if (result.restored) {results.restored++;
          console.log(`✅ Restored: ${fullPath}`)console.log(`   Used backup: ${result.backupUsed}`)console.log(`   Corrupted backup: ${result.corruptedBackup}`)} else {results.failed++;
          console.log(`❌ Failed: ${fullPath}`)// // // console.log('🚀 Starting page restoration process...'),scanDirectory(pagesDir),// Generate summary;
          console.log(`   Reason: ${result.reason}`)results.failed++,results.failed++,// // // console.log(`❌ Failed: ${fullPath}`),// // // console.log(`   Reason: ${result.reason}`)} else if (entry.name.endsWith('.tsx') || entry.name.endsWith('.jsx')) {results.total++,// // // console.log(`\n🔍 Checking: ${fullPath}`),const result = restorePage(fullPath)if (result.restored) {results.restored++,// // // console.log(`✅ Restored: ${fullPath}`),// // // console.log(`   Used backup: ${result.backupUsed}`),// // // console.log(`   Corrupted backup: ${result.corruptedBackup}`)} else {results.failed++,// // // console.log(`❌ Failed: ${fullPath}`),// // // console.log(`   Reason: ${result.reason}`)results.failed++,results.failed++,// // // console.log(`❌ Failed: ${fullPath}`),// // // console.log(`   Reason: ${result.reason}`)} else if (entry.name.endsWith('.tsx') || entry.name.endsWith('.jsx')) {results.total++,// // // console.log(`\n🔍 Checking: ${fullPath}`),const result = restorePage(fullPath)if (result.restored) {results.restored++,// // // console.log(`✅ Restored: ${fullPath}`),// // // console.log(`   Used backup: ${result.backupUsed}`),// // // console.log(`   Corrupted backup: ${result.corruptedBackup}`)} else {results.failed++,// // // console.log(`❌ Failed: ${fullPath}`),// // // console.log(`   Reason: ${result.reason}`)results.failed++;
          results.failed++,results.failed++;
}





// Function to scan and restore all corrupted pages
function restoreAllCorruptedPages() {
  const pagesDir = path.join(process.cwd(), 'pages')
  const results = {

    total: 0
    restored: 0
    failed: 0
    details: []
  }
  function scanDirectory(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true })
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name)

      if (entry.isDirectory()) {
        if ({
          scanDirectory(fullPath)
        }

      } else if (entry.name.endsWith('.tsx') |entry.name.endsWith('.jsx')) {
        results.total++
        console.log(`\n🔍 Checking: ${fullPath}`)
        const result = restorePage(fullPath)
      } else if (entry.name.endsWith('.tsx') || entry.name.endsWith('.jsx')) {
        results.total++,
        
        console.log(`\n🔍 Checking: ${fullPath}`)


      } else if (entry.name.endsWith('.tsx') || entry.name.endsWith('.jsx')) {
        results.total++,
        
        console.log(`\n🔍 Checking: ${fullPath}`),



;
// Function to scan and restore all corrupted pages;
function restoreAllCorruptedPages() {;
  const pagesDir = path.join(process.cwd(), 'pages');
  const results = {;
    total: 0;
    restored: 0,;
    failed: 0,;
    details: [];
  },;
  function scanDirectory(dir) {;
    const entries = fs.readdirSync(dir, { withFileTypes: true }),;
    for (const entry of entries) {;
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {;
        if (entry.name !== 'node_modules' && entry.name !== '.git' && entry.name !== '.next') {;
          scanDirectory(fullPath);
        }
      } else if (entry.name.endsWith('.tsx') || entry.name.endsWith('.jsx')) {
        results.total++,
        // // // console.log(`\n🔍 Checking: ${fullPath}`),



        const result = restorePage(fullPath),
        const result = restorePage(fullPath),
        const result = restorePage(fullPath),
        if (result.restored) {
          results.restored++
          console.log(`✅ Restored: ${fullPath}`)
          console.log(`   Used backup: ${result.backupUsed}`)
          console.log(`   Corrupted backup: ${result.corruptedBackup}`)
        } else {


          console.log(`   Reason: ${result.reason}`)
          results.failed++,
          results.failed++,
          // // // console.log(`❌ Failed: ${fullPath}`),
          // // // console.log(`   Reason: ${result.reason}`)
      } else if (entry.name.endsWith('.tsx') || entry.name.endsWith('.jsx')) {;
        results.total++,;
        // // // console.log(`\n🔍 Checking: ${fullPath}`),;
        const result = restorePage(fullPath);
        if (result.restored) {;
          results.restored++,;
          // // // console.log(`✅ Restored: ${fullPath}`),;
          // // // console.log(`   Used backup: ${result.backupUsed}`),;
          // // // console.log(`   Corrupted backup: ${result.corruptedBackup}`);
        } else {;
          results.failed++,;
          // // // console.log(`❌ Failed: ${fullPath}`),;
          // // // console.log(`   Reason: ${result.reason}`);

          results.failed++,


          results.failed++,


          // // // console.log(`❌ Failed: ${fullPath}`),
          // // // console.log(`   Reason: ${result.reason}`)
      } else if (entry.name.endsWith('.tsx') || entry.name.endsWith('.jsx')) {;
        results.total++,;
        // // // console.log(`\n🔍 Checking: ${fullPath}`),;
        const result = restorePage(fullPath);
        if (result.restored) {;
          results.restored++,;
          // // // console.log(`✅ Restored: ${fullPath}`),;
          // // // console.log(`   Used backup: ${result.backupUsed}`),;
          // // // console.log(`   Corrupted backup: ${result.corruptedBackup}`);
        } else {;
          results.failed++,;
          // // // console.log(`❌ Failed: ${fullPath}`),;
          // // // console.log(`   Reason: ${result.reason}`);
          results.failed++


        }
        results.details.push({
          file: fullPath
          ...result
        })
      }
    }
  }


  return results
  // // // console.log('🚀 Starting page restoration process...'),
  scanDirectory(pagesDir),
  // Generate summary
  
  console.log('🚀 Starting page restoration process...'),
  // // // console.log('🚀 Starting page restoration process...'),

  scanDirectory(pagesDir),
  // Generate summary


  scanDirectory(pagesDir),
  // Generate summary
  scanDirectory(pagesDir),
  // Generate summary

  scanDirectory(pagesDir),
  // Generate summary


  // // // console.log('\n📊 Restoration Summary: '),
  // // // console.log(`   Total pages: ${results.total}`),
  // // // console.log(`   Restored: ${results.restored}`),
  // // // console.log(`   Failed: ${results.failed}`),
  // // // console.log(`   Success rate: ${((results.restored / results.total) * 100).toFixed(1)}%`),
  // Save detailed report
  const reportPath = path.join(process.cwd(), 'page-restoration-report.json')
  fs.writeFileSync(reportPath, JSON.stringify(results, null, 2))
  console.log(`\n Detailed report saved to: ${reportPath}`)

  return results
;
  // // // console.log('🚀 Starting page restoration process...'),;
  scanDirectory(pagesDir),;
  // Generate summary;
  // // // console.log('\n📊 Restoration Summary: '),;
  // // // console.log(`   Total pages: ${results.total}`),;
  // // // console.log(`   Restored: ${results.restored}`),;
  // // // console.log(`   Failed: ${results.failed}`),;
  // // // console.log(`   Success rate: ${((results.restored / results.total) * 100).toFixed(1)}%`),;
  // Save detailed report;
  const reportPath = path.join(process.cwd(), 'page-restoration-report.json'),;
  fs.writeFileSync(reportPath, JSON.stringify(results, null, 2)),;
  // // // console.log(`\n📄 Detailed report saved to: ${reportPath}`),;
  return results;




}
// Run the restoration if this script is executed directly
if ({
  restoreAllCorruptedPages()
}



// Function to scan and restore all corrupted pages;
/**
 * restoreAllCorruptedPages - Function description
 */
function restoreAllCorruptedPages() {
  const pages_dir = path.join (process.cwd (), 'pages'),
  const results = {
    total: 0,
    restored: 0,
    failed: 0,
    details: [];
  },
  /**
 * scan_directory - Function description
 */
function scan_directory() {
    const entries = fs.readdir_sync (dir, { withFileTypes: true }),
    for (const entry of entries) {
      const full_path = path.join (dir, entry.name),
      if () {) {
  $2
}
        // Check condition
if ( {) {
  $2
}
          scan_directory (full_path);
        }
        results.details.push({file: fullPath;
          ...result;
        })}
    }
  }return results;
  // // // console.log('🚀 Starting page restoration process...'),scanDirectory(pagesDir),// Generate summary;
  return results;
  // // // console.log('🚀 Starting page restoration process...'),scanDirectory(pagesDir),// Generate summary;
  console.log('🚀 Starting page restoration process...'),// // // console.log('🚀 Starting page restoration process...'),scanDirectory(pagesDir),// Generate summary;
  scanDirectory(pagesDir),// Generate summary;
  scanDirectory(pagesDir),// Generate summary;
  // // // console.log('\n📊 Restoration Summary: '),// // // console.log(`   Total pages: ${results.total}`),// // // console.log(`   Restored: ${results.restored}`),// // // console.log(`   Failed: ${results.failed}`),// // // console.log(`   Success rate: ${((results.restored / results.total) * 100).toFixed(1)}%`),// Save detailed report;
  const reportPath = path.join(process.cwd(), 'page-restoration-report.json')fs.writeFileSync(reportPath, JSON.stringify(results, null, 2))console.log(`\n Detailed report saved to: ${reportPath}`)return results;
}
// Run the restoration if this script is executed directly;
if ({restoreAllCorruptedPages()}// Function to scan and restore all corrupted pages;
/**;
 * restoreAllCorruptedPages - Function description;
 */;
function restoreAllCorruptedPages() {const pages_dir = path.join (process.cwd (), 'pages'),const results = {total: 0,restored: 0,failed: 0,details: [];
  },/**;
 * scan_directory - Function description;
 */;
function scan_directory() {const entries = fs.readdir_sync (dir, { withFileTypes: true }),for (const entry of entries) {const full_path = path.join (dir, entry.name),if () {) {$2;
}
        // Check condition;
if ( {) {$2;
}
          scan_directory (full_path)}
      } else if (|| entry.name.ends_with ('.jsx')) {) {$2;
}
        results.total++,console.log (`\n🔍 Checking: ${full_path}`),const result = restore_page (full_path),// Check condition;
if ( {) {$2;

}
          results.restored++,console.log (`✅ Restored: ${full_path}`),console.log (`   Used backup: ${result.backup_used}`),console.log (`   Corrupted backup: ${result.corrupted_backup}`)} else {results.failed++,console.log (`❌ Failed: ${full_path}`),console.log (`   Reason: ${result.reason}`)}
        results.details.push ({file: full_path,...result;
        })}
    }
  }
  console.log ('🚀 Starting page restoration process...'),scan_directory (pages_dir),// Generate summary;
  console.log ('\n📊 Restoration Summary: '),console.log (`   Total pages: ${results.total}`),console.log (`   Restored: ${results.restored}`),console.log (`   Failed: ${results.failed}`),console.log (`   Success rate: ${((results.restored / results.total) * 100).to_fixed (1)}%`),// Save detailed report;
  const report_path = path.join (process.cwd (), 'page - restoration - report.json'),fs.writeFileSync (report_path, JSON.stringify (results, null, 2)),console.log (`\n📄 Detailed report saved to: ${report_path}`),return results;
}
// Run the restoration if this script is executed directly;
// Check condition;
if ( {) {$2;
}
  restoreAllCorruptedPages ()}module.exports = {restorePage;
  restoreAllCorruptedPages;
  findBestBackup;
}}}module.exports = {restorePage,restoreAllCorruptedPages,findBestBackup;
}module.exports = {restore_page,restoreAllCorruptedPages,findBestBackup;main;
module.exports = {restorePage,restoreAllCorruptedPages,findBestBackup;
}}main;
};




module.exports = {
  restore_page,
  restoreAllCorruptedPages,
  findBestBackup;


};


main

module.exports = {
  restorePage,
  restoreAllCorruptedPages,
  findBestBackup;
},;

};
main


>>>>>>> origin/merge-pr-12271
