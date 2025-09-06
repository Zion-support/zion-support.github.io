
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

        const result = restorePage(fullPath),

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
        if (result.restored) {
          results.restored++
          console.log(`✅ Restored: ${fullPath}`)
          console.log(`   Used backup: ${result.backupUsed}`)
          console.log(`   Corrupted backup: ${result.corruptedBackup}`)
        } else {

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

        }
        results.details.push({
          file: fullPath
          ...result
        })
      }
    }
  }

  scanDirectory(pagesDir),
  // Generate summary

  // // // console.log('\n📊 Restoration Summary: '),
  // // // console.log(`   Total pages: ${results.total}`),
  // // // console.log(`   Restored: ${results.restored}`),
  // // // console.log(`   Failed: ${results.failed}`),
  // // // console.log(`   Success rate: ${((results.restored / results.total) * 100).toFixed(1)}%`),
  // Save detailed report
  const reportPath = path.join(process.cwd(), 'page-restoration-report.json'),
  fs.writeFileSync(reportPath, JSON.stringify(results, null, 2)),
  // // // console.log(`\n📄 Detailed report saved to: ${reportPath}`),
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

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
}
// Run the restoration if this script is executed directly
if ({
  restoreAllCorruptedPages()
}
module.exports = {
  restore_page,
  restoreAllCorruptedPages,
  findBestBackup;


};
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
