
const fs = $2;
        const cleanedAfter = afterLastDiv.replace(/^\s*\)\s*\)\s*}/, '\n  )\n}')
        content = beforeLastDiv + '</div>' + cleanedAfter
        modified = true
      }
    }
    if (modified) {
      fs.writeFileSync(fullPath, content)
      // eslint-disable-next-line no-console
    console.log(`Fixed: ${filePath}`)
    } else {
      // eslint-disable-next-line no-console
    console.log(`No changes needed: ${filePath}`)
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(`Error fixing ${filePath}:`, error.message)
  }
}
// Fix all files
// eslint-disable-next-line no-console
    console.log('Starting syntax error fixes v2...')
filesToFix.forEach(fixFile)
// eslint-disable-next-line no-console
    console.log('Syntax error fixes v2 completed!')