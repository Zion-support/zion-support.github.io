<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
#!/usr/bin/env node;
const fs = require('fs');
const path = require('path');
// List of specific pages that were identified as corrupted;
const corruptedPages = [;
  'pages/403.tsxpages/ProductsList.tsxpages/faq.tsxpages/order-success.tsxpages/thank-you.tsxpages/gpt-library.tsxpages/order-confirmation/[orderId].tsxpages/governance/zgp-library.tsx';
  'pages/governance/create.tsxpages/governance/my-votes.tsxpages/governance/[proposalId].tsx';
],;
// Function to find the best backup file for a given page;
function findBestBackup(pagePath) {;
  const dir = path.dirname(pagePath);
  const baseName = path.basename(pagePath, path.extname(pagePath)),;
  const ext = path.extname(pagePath);
  // Look for backup files;
  const backupPattern = new RegExp(`^${baseName}\\.tsx\\.backup\\.\\d+$`);
  const files = fs.readdirSync(dir).filter(file => backupPattern.test(file));
  if (files.length === 0) return null,;
  // Sort by timestamp (newest first) and find the first valid one;
  files.sort((a, b) => {;
    const timestampA = parseInt(a.match(/\.backup\.(\d+)$/)[1]);
    const timestampB = parseInt(b.match(/\.backup\.(\d+)$/)[1]);
    return timestampB - timestampA;
  }),;
  for (const backupFile of files) {;
    const backupPath = path.join(dir, backupFile);
    try {;
      const content = fs.readFileSync(backupPath, 'utf8'),;
      // Check if this backup has proper content;
      if (content.includes('export default') &&;
          (content.includes('function') || content.includes('const') || content.includes('class')) &&;
          content.includes('return') &&;
          content.length > 100) {;
        return backupPath;
      }
    } catch (error) {
      // // // console.log(`Error reading backup ${backupPath}:`, error.message)
    } catch (error) {;
      // // // console.log(`Error reading backup ${backupPath}:`, error.message);
    }
  }
;
  return null;
}
;
// Function to restore a corrupted page;
function restorePage(pagePath) {;
  try {;
    const currentContent = fs.readFileSync(pagePath, 'utf8'),;
    // Check if the page is corrupted;
    const isCorrupted = !currentContent.includes('export default') ||;
                        currentContent.length < 100 ||;
                        !currentContent.includes('return');
    if (!isCorrupted) {;
      return { restored: false, reason: 'Page is not corrupted' }
    }
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5


'),


      if (parts.length > 1) {
        // Take the content after the conflict resolution
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
        backupContent = parts[1].split('>>>>>>>')[0]

=======



<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
      }
    }
    // Clean up the content

    backupContent = backupContent.trim()

    // Ensure it has proper structure
    if (!backupContent.includes('export default')) {
      return { restored: false, reason: 'Backup content is also corrupted' }
    }



    


    // Create a backup of the current corrupted file

    const timestamp = Date.now()
    const corruptedBackupPath = `${pagePath}.corrupted.${timestamp}`
    fs.writeFileSync(corruptedBackupPath, currentContent)
    // Restore the page
    fs.writeFileSync(pagePath, backupContent)
    return {
      restored: true
      backupUsed: backupPath

      corruptedBackup: corruptedBackupPath
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
'),
      // Check condition
if ( {) {
  $2
}
        // Take the content after the conflict resolution;
        backup_content = parts[1].split ('      }
    }
    // Clean up the content;
    backup_content = backup_content.trim (),
    // Ensure it has proper structure;
    if () {) {
  $2
}
      return { restored: false, reason: 'Backup content is also corrupted' }
    }
    // Create a backup of the current corrupted file;
    const timestamp = Date.now (),
    const corruptedBackupPath = `${page_path}.corrupted.${timestamp}`,
    fs.writeFileSync (corruptedBackupPath, current_content),
    // Restore the page;

<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
;
    // Create a backup of the current corrupted file;
    const timestamp = Date.now();
    const corruptedBackupPath = `${pagePath}.corrupted.${timestamp}`;
    fs.writeFileSync(corruptedBackupPath, currentContent),;
    // Restore the page;
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
    fs.writeFileSync(pagePath, backupContent),;
    return {;
      restored: true,;
      backupUsed: backupPath,;
      corruptedBackup: corruptedBackupPath;



<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
    }
  } catch (error) {
    return { restored: false, reason: `Error: ${error.message}` }
  }
}

// Function to fix specific corrupted pages
function fixSpecificPages() {
  const results = {

    total: corruptedPages.length
    restored: 0
    failed: 0
    details: []
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD

  },


=======
  },


  }
  console.log('🚀 Starting targeted page restoration...')
  console.log(`📋 Targeting ${corruptedPages.length} specific corrupted pages`)
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
  },
  
  console.log('🚀 Starting targeted page restoration...'),
  console.log(`📋 Targeting ${corruptedPages.length} specific corrupted pages`),
  
  // // // console.log('🚀 Starting targeted page restoration...'),
  // // // console.log(`📋 Targeting ${corruptedPages.length} specific corrupted pages`),



  },


  for (const pagePath of corruptedPages) {
    if (!fs.existsSync(pagePath)) {
      console.log(`⚠️  Page not found: ${pagePath}`)
      results.failed++

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
  },
  // // // console.log('🚀 Starting targeted page restoration...'),
  // // // console.log(`📋 Targeting ${corruptedPages.length} specific corrupted pages`),
  for (const pagePath of corruptedPages) {
    if (!fs.existsSync(pagePath)) {
      // // // console.log(`⚠️  Page not found: ${pagePath}`),
      results.failed++,
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
      results.details.push({
        file: pagePath
        restored: false
        reason: 'Page not found'

      })
      continue
    }
<<<<<<< HEAD
=======
<<<<<<< HEAD
    console.log(`\n🔍 Checking: ${pagePath}`)
    const result = restorePage(pagePath)
=======
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
    console.log(`\n🔍 Checking: ${pagePath}`)
    const result = restorePage(pagePath)

<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
    // // // console.log(`\n🔍 Checking: ${pagePath}`),
    
    console.log(`\n🔍 Checking: ${pagePath}`),
    // // // console.log(`\n🔍 Checking: ${pagePath}`),
<<<<<<< HEAD


    const result = restorePage(pagePath),
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b


    const result = restorePage(pagePath),
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
=======
    const result = restorePage(pagePath),
    const result = restorePage(pagePath),
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5


    // // // console.log(`\n🔍 Checking: ${pagePath}`),
    
    console.log(`\n🔍 Checking: ${pagePath}`),
    // // // console.log(`\n🔍 Checking: ${pagePath}`),


    const result = restorePage(pagePath),
    const result = restorePage(pagePath),
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
    if (result.restored) {
      results.restored++
      console.log(`✅ Restored: ${pagePath}`)
      console.log(`   Used backup: ${result.backupUsed}`)
      console.log(`   Corrupted backup: ${result.corruptedBackup}`)
    } else {
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
      results.failed++
      console.log(`❌ Failed: ${pagePath}`)

      results.failed++,
      console.log(`❌ Failed: ${pagePath}`),
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
      console.log(`   Reason: ${result.reason}`)
    }
    results.details.push({
      file: pagePath
      ...result
    })
  }
  // Generate summary


      results.failed++,



  return results

      // // // console.log(`❌ Failed: ${pagePath}`),
      // // // console.log(`   Reason: ${result.reason}`)
;
// Function to fix specific corrupted pages;
function fixSpecificPages() {;
  const results = {;
    total: corruptedPages.length;
    restored: 0,;
    failed: 0,;
    details: [];
  },;
  // // // console.log('🚀 Starting targeted page restoration...'),;
  // // // console.log(`📋 Targeting ${corruptedPages.length} specific corrupted pages`),;
  for (const pagePath of corruptedPages) {;
    if (!fs.existsSync(pagePath)) {;
      // // // console.log(`⚠️  Page not found: ${pagePath}`),;
      results.failed++,;
      results.details.push({;
        file: pagePath,;
        restored: false,;
        reason: 'Page not found';
      }),;
      continue;
    }
;
    // // // console.log(`\n🔍 Checking: ${pagePath}`),;
    const result = restorePage(pagePath);
    if (result.restored) {;
      results.restored++,;
      // // // console.log(`✅ Restored: ${pagePath}`),;
      // // // console.log(`   Used backup: ${result.backupUsed}`),;
      // // // console.log(`   Corrupted backup: ${result.corruptedBackup}`);
    } else {;
      results.failed++,;
      // // // console.log(`❌ Failed: ${pagePath}`),;
      // // // console.log(`   Reason: ${result.reason}`);
    }
;
    results.details.push({;
      file: pagePath,;
      ...result;
    });
  }
  // Generate summary
  // // // console.log('\n📊 Restoration Summary: '),
  // // // console.log(`   Total pages: ${results.total}`),
  // // // console.log(`   Restored: ${results.restored}`),
  // // // console.log(`   Failed: ${results.failed}`),
  // // // console.log(`   Success rate: ${((results.restored / results.total) * 100).toFixed(1)}%`),
  // Save detailed report
  const reportPath = path.join(process.cwd(), 'targeted-page-restoration-report.json'),
  fs.writeFileSync(reportPath, JSON.stringify(results, null, 2)),
  // // // console.log(`\n📄 Detailed report saved to: ${reportPath}`),
  return results
;
  // Generate summary;
  // // // console.log('\n📊 Restoration Summary: '),;
  // // // console.log(`   Total pages: ${results.total}`),;
  // // // console.log(`   Restored: ${results.restored}`),;
  // // // console.log(`   Failed: ${results.failed}`),;
  // // // console.log(`   Success rate: ${((results.restored / results.total) * 100).toFixed(1)}%`),;
  // Save detailed report;
  const reportPath = path.join(process.cwd(), 'targeted-page-restoration-report.json'),;
  fs.writeFileSync(reportPath, JSON.stringify(results, null, 2)),;
  // // // console.log(`\n📄 Detailed report saved to: ${reportPath}`),;
  return results;

  console.log('\n📊 Restoration Summary: ')
  console.log(`   Total pages: ${results.total}`)
  console.log(`   Restored: ${results.restored}`)
  console.log(`   Failed: ${results.failed}`)
  console.log(`   Success rate: ${((results.restored / results.total) * 100).toFixed(1)}%`)
  // Save detailed report
  const reportPath = path.join(process.cwd(), 'targeted-page-restoration-report.json')
  fs.writeFileSync(reportPath, JSON.stringify(results, null, 2))
  console.log(`\n📄 Detailed report saved to: ${reportPath}`)

  return results
      // // // console.log(`❌ Failed: ${pagePath}`),
      // // // console.log(`   Reason: ${result.reason}`)
;
// Function to fix specific corrupted pages;
function fixSpecificPages() {;
  const results = {;
    total: corruptedPages.length;
    restored: 0,;
    failed: 0,;
    details: [];
  },;
  // // // console.log('🚀 Starting targeted page restoration...'),;
  // // // console.log(`📋 Targeting ${corruptedPages.length} specific corrupted pages`),;
  for (const pagePath of corruptedPages) {;
    if (!fs.existsSync(pagePath)) {;
      // // // console.log(`⚠️  Page not found: ${pagePath}`),;
      results.failed++,;
      results.details.push({;
        file: pagePath,;
        restored: false,;
        reason: 'Page not found';
      }),;
      continue;
    }
;
    // // // console.log(`\n🔍 Checking: ${pagePath}`),;
    const result = restorePage(pagePath);
    if (result.restored) {;
      results.restored++,;
      // // // console.log(`✅ Restored: ${pagePath}`),;
      // // // console.log(`   Used backup: ${result.backupUsed}`),;
      // // // console.log(`   Corrupted backup: ${result.corruptedBackup}`);
    } else {;
      results.failed++,;
      // // // console.log(`❌ Failed: ${pagePath}`),;
      // // // console.log(`   Reason: ${result.reason}`);
    }
;
    results.details.push({;
      file: pagePath,;
      ...result;
    });
  }
  // Generate summary
  // // // console.log('\n📊 Restoration Summary: '),
  // // // console.log(`   Total pages: ${results.total}`),
  // // // console.log(`   Restored: ${results.restored}`),
  // // // console.log(`   Failed: ${results.failed}`),
  // // // console.log(`   Success rate: ${((results.restored / results.total) * 100).toFixed(1)}%`),
  // Save detailed report
  const reportPath = path.join(process.cwd(), 'targeted-page-restoration-report.json'),
  fs.writeFileSync(reportPath, JSON.stringify(results, null, 2)),
  // // // console.log(`\n📄 Detailed report saved to: ${reportPath}`),
  return results
;
  // Generate summary;
  // // // console.log('\n📊 Restoration Summary: '),;
  // // // console.log(`   Total pages: ${results.total}`),;
  // // // console.log(`   Restored: ${results.restored}`),;
  // // // console.log(`   Failed: ${results.failed}`),;
  // // // console.log(`   Success rate: ${((results.restored / results.total) * 100).toFixed(1)}%`),;
  // Save detailed report;
  const reportPath = path.join(process.cwd(), 'targeted-page-restoration-report.json'),;
  fs.writeFileSync(reportPath, JSON.stringify(results, null, 2)),;
  // // // console.log(`\n📄 Detailed report saved to: ${reportPath}`),;
  return results;
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
}
// Run the restoration if this script is executed directly
if ({
  fixSpecificPages()
}


// Function to fix specific corrupted pages;
/**
 * fixSpecificPages - Function description
 */
function fixSpecificPages() {
  const results = {
    total: corrupted_pages.length,
    restored: 0,
    failed: 0,
    details: [];
  },
  console.log ('🚀 Starting targeted page restoration...'),
  console.log (`📋 Targeting ${corrupted_pages.length} specific corrupted pages`),
  for (const page_path of corrupted_pages) {
    if () {) {
  $2
}
      console.log (`⚠️  Page not found: ${page_path}`),
      results.failed++,
      results.details.push ({
        file: page_path,
        restored: false,
        reason: 'Page not found';
      }),
      continue;
    }
    console.log (`\n🔍 Checking: ${page_path}`),
    const result = restore_page (page_path),
    // Check condition
if ( {) {
  $2
}
      results.restored++,
      console.log (`✅ Restored: ${page_path}`),
      console.log (`   Used backup: ${result.backup_used}`),
      console.log (`   Corrupted backup: ${result.corrupted_backup}`);
    } else {
      results.failed++,
      console.log (`❌ Failed: ${page_path}`),
      console.log (`   Reason: ${result.reason}`);
    }
    results.details.push ({
      file: page_path,
      ...result;
    });
  }
  // Generate summary;
  console.log ('\n📊 Restoration Summary: '),
  console.log (`   Total pages: ${results.total}`),
  console.log (`   Restored: ${results.restored}`),
  console.log (`   Failed: ${results.failed}`),
  console.log (`   Success rate: ${((results.restored / results.total) * 100).to_fixed (1)}%`),
  // Save detailed report;
  const report_path = path.join (process.cwd (), 'targeted - page - restoration - report.json'),
  fs.writeFileSync (report_path, JSON.stringify (results, null, 2)),
  console.log (`\n📄 Detailed report saved to: ${report_path}`),
  return results;
}
// Run the restoration if this script is executed directly;
// Check condition
if ( {) {
  $2
}
  fixSpecificPages ();
}
<<<<<<< HEAD
=======
<<<<<<< HEAD
}
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d

<<<<<<< HEAD
=======
module.exports = {

  restorePage
  fixSpecificPages
  findBestBackup
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
}


;
module.exports = {;
  restorePage,;
  fixSpecificPages,;
  findBestBackup;
};
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5




module.exports = {
  restore_page,
  fixSpecificPages,
  findBestBackup;
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD


};
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5


main

module.exports = {
  restorePage,
  fixSpecificPages,
  findBestBackup;
},;

};
main


<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
