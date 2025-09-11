=======

'),


=======


'),


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      if (parts.length > 1) {
        // Take the content after the conflict resolution
        backupContent = parts[1].split('>>>>>>>')[0]



>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      }
    }
    // Clean up the content

    backupContent = backupContent.trim()

    // Ensure it has proper structure
    if (!backupContent.includes('export default')) {
      return { restored: false, reason: 'Backup content is also corrupted' }
    }

    


    const timestamp = Date.now()
    const corruptedBackupPath = `${pagePath}.corrupted.${timestamp}`
    fs.writeFileSync(corruptedBackupPath, currentContent)
    // Restore the page
    fs.writeFileSync(pagePath, backupContent)
    return {
      restored: true
      backupUsed: backupPath

      corruptedBackup: corruptedBackupPath
}
        // Take the content after the conflict resolution;
      }
    }
    // Clean up the content;
    backup_content = backup_content.trim (),
    // Ensure it has proper structure;
    if () {) {}
  $2;
}'
      return { restored: false, reason: 'Backup content is also corrupted' }
    }
=======
;    // Create a backup of the current corrupted file;
    const timestamp = Date.now (),
    const corruptedBackupPath = `${page_path}.corrupted.${timestamp}`,
    fs.writeFileSync (corruptedBackupPath, current_content),
    // Restore the page;


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


  }
  console.log('🚀 Starting targeted page restoration...')
  console.log(`📋 Targeting ${corruptedPages.length} specific corrupted pages`)

  },

  console.log(`📋 Targeting ${corruptedPages.length} specific corrupted pages`),
  '
  // // // console.log('🚀 Starting targeted page restoration...'),`

  // // // console.log(`📋 Targeting ${corruptedPages.length} specific corrupted pages`),
=======

  },
=======

  },


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  for (const pagePath of corruptedPages) {
    if (!fs.existsSync(pagePath)) {
      console.log(`⚠️  Page not found: ${pagePath}`)
      results.failed++

      })
      continue
    }

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    // // // console.log(`\n🔍 Checking: ${pagePath}`),
=======
    
    console.log(`\n🔍 Checking: ${pagePath}`),
=======
    // // // console.log(`\n🔍 Checking: ${pagePath}`),

    const result = restorePage(pagePath),
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
