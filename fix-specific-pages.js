
=======

'),


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
      if (parts.length > 1) {
        // Take the content after the conflict resolution
        backupContent = parts[1].split('>>>>>>>')[0]

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
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

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
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

  for (const pagePath of corruptedPages) {
    if (!fs.existsSync(pagePath)) {
      console.log(`⚠️  Page not found: ${pagePath}`)
      results.failed++

      results.details.push({
        file: pagePath
        restored: false
        reason: 'Page not found'

      })
      continue
    }

    const result = restorePage(pagePath),

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
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


  return results

module.exports = {
  restore_page,
  fixSpecificPages,
  findBestBackup;


};
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
