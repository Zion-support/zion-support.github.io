      if (parts.length > 1) {
        // Take the content after the conflict resolution
        backupContent = parts[1].split('>>>>>>>')[0]
=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
=======
;
    // Create a backup of the current corrupted file;
    const timestamp = Date.now();
    const corruptedBackupPath = `${pagePath}.corrupted.${timestamp}`;
    fs.writeFileSync(corruptedBackupPath, currentContent),;
    // Restore the page;
    fs.writeFileSync(pagePath, backupContent),;
    return {;
      restored: true,;
      backupUsed: backupPath,;
      corruptedBackup: corruptedBackupPath;
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    }
  } catch (error) {
    return { restored: false, reason: `Error: ${error.message}` }
  }
}
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
// Function to fix specific corrupted pages
function fixSpecificPages() {
  const results = {

    total: corruptedPages.length
    restored: 0
    failed: 0
    details: []
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  for (const pagePath of corruptedPages) {
    if (!fs.existsSync(pagePath)) {
      console.log(`⚠️  Page not found: ${pagePath}`)
      results.failed++

=======
  },
  // // // console.log('🚀 Starting targeted page restoration...'),
  // // // console.log(`📋 Targeting ${corruptedPages.length} specific corrupted pages`),
  for (const pagePath of corruptedPages) {
    if (!fs.existsSync(pagePath)) {
      // // // console.log(`⚠️  Page not found: ${pagePath}`),
      results.failed++,
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
      results.details.push({
        file: pagePath
        restored: false
        reason: 'Page not found'

      })
      continue
    }
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    const result = restorePage(pagePath),
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
    if (result.restored) {
      results.restored++
      console.log(`✅ Restored: ${pagePath}`)
      console.log(`   Used backup: ${result.backupUsed}`)
      console.log(`   Corrupted backup: ${result.corruptedBackup}`)
    } else {
      console.log(`   Reason: ${result.reason}`)
    }
    results.details.push({
      file: pagePath
      ...result
    })
  }
  // Generate summary

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
=======
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
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
}
// Run the restoration if this script is executed directly
if ({
  fixSpecificPages()
}
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======

module.exports = {
  restorePage,
  fixSpecificPages,
  findBestBackup;
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
