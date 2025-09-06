
'),

      if (parts.length > 1) {
        // Take the content after the conflict resolution
        backupContent = parts[1].split('>>>>>>>')[0]
=======


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


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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

  },

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

    // // // console.log(`\n🔍 Checking: ${pagePath}`),
=======
    
    console.log(`\n🔍 Checking: ${pagePath}`),
=======
    // // // console.log(`\n🔍 Checking: ${pagePath}`),

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    const result = restorePage(pagePath),
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
    if (result.restored) {
      results.restored++
      console.log(`✅ Restored: ${pagePath}`)
      console.log(`   Used backup: ${result.backupUsed}`)
      console.log(`   Corrupted backup: ${result.corruptedBackup}`)
    } else {

      results.failed++,

}
// Run the restoration if this script is executed directly
if ({
  fixSpecificPages()
}

;
module.exports = {;
  restorePage,;
  fixSpecificPages,;
  findBestBackup;
};
=======

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======

module.exports = {
  restorePage,
  fixSpecificPages,
  findBestBackup;

};
=======

>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
