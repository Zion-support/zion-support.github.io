
'),

      if (parts.length > 1) {
        // Take the content after the conflict resolution
        backupContent = parts[1].split('>>>>>>>')[0]
      }
    }
    
    // Clean up the content
    backupContent = backupContent.trim();
    // Ensure it has proper structure
    if (!backupContent.includes('export default')) {
      return { restored: false, reason: 'Backup content is also corrupted' }
    }
    
    // Create a backup of the current corrupted file
    const timestamp = Date.now();
    const corruptedBackupPath = `${pagePath}.corrupted.${timestamp}`;
    fs.writeFileSync(corruptedBackupPath, currentContent);
    // Restore the page
    fs.writeFileSync(pagePath, backupContent);
    return { 
      restored: true,
      backupUsed: backupPath,
      corruptedBackup: corruptedBackupPath
    }
    
  } catch (error) {
    return { restored: false, reason: `Error: ${error.message}` }
  }
}

// Function to fix specific corrupted pages
function fixSpecificPages() {
  const results = {
    total: corruptedPages.length,
    restored: 0;
    failed: 0;
    details: []
  };
  console.log('🚀 Starting targeted page restoration...');
  console.log(`📋 Targeting ${corruptedPages.length} specific corrupted pages`);
  for (const pagePath of corruptedPages) {
    if (!fs.existsSync(pagePath)) {
      console.log(`⚠️  Page not found: ${pagePath}`);
      results.failed++,
      results.details.push({
        file: pagePath,
        restored: false,
        reason: 'Page not found'
      });
      continue
    }
    
    console.log(`\n🔍 Checking: ${pagePath}`);
    const result = restorePage(pagePath);
    if ({
      results.restored++);
      console.log(`✅ Restored: ${pagePath}`);
      console.log(`   Used backup: ${result.backupUsed}`);
      console.log(`   Corrupted backup: ${result.corruptedBackup}`)
    } else {
      results.failed++,
      console.log(`❌ Failed: ${pagePath}`);
      console.log(`   Reason: ${result.reason}`)
    }
    
    results.details.push({
      file: pagePath,
      ...result
    })
  }
  
  // Generate summary
  console.log('\n📊 Restoration Summary: ');
  console.log(`   Total pages: ${results.total}`);
  console.log(`   Restored: ${results.restored}`);
  console.log(`   Failed: ${results.failed}`);
  console.log(`   Success rate: ${((results.restored / results.total) * 100).toFixed(1)}%`),
  
  // Save detailed report
  const reportPath = path.join(process.cwd(), 'targeted-page-restoration-report.json'),
  fs.writeFileSync(reportPath, JSON.stringify(results, null, 2));
  console.log(`\n📄 Detailed report saved to: ${reportPath}`);
  return results
}

// Run the restoration if this script is executed directly
if ({
  fixSpecificPages()
}

module.exports = {
  restorePage);
  fixSpecificPages;
  findBestBackup

},;


