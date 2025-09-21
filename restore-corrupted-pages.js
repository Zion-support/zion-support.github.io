if (parts.length > 1) {
        // Take the content after the conflict resolution,
backupContent = parts[1].split('>>>>>>>')[0]
      }
    }
    // Clean up the content
    // Ensure it has proper structure,
if (!backupContent.includes('export default')) {
      return { restored: false, reason: 'Backup content is also corrupted' }
    }
    // Create a backup of the current corrupted file
corruptedBackup: corruptedBackupPath}
  } catch (error) {
    return { restored: false, reason: `Error: ${error.message}` }
  }
}
// Function to scan and restore all corrupted pages,
function restoreAllCorruptedPages() {
  const pagesDir = path.join(process.cwd(), 'pages')
  const results = {
if (entry.isDirectory()) {
        if ({
          scanDirectory(fullPath)
        }
console.log(`   Reason: ${result.reason}`)
        }
        results.details.push({
          file: fullPath
          ...result})
      }
    }
  }
return results}
// Run the restoration if this script is executed directly,
if ({
  restoreAllCorruptedPages()
}
module.exports = {
