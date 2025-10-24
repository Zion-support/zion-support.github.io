
const fs = $2;
      const lastLine = lines[lastNonEmptyLine].trim()
      // If the last line is just a closing tag without proper structure, fix it
      if (lastLine.match(/^<\/[^>]+>$/)) {
        // Find the proper end of the component
        let properEndIndex = lastNonEmptyLine
        // Look for the closing of the main return statement
        for (let i = lastNonEmptyLine; i >= 0; i--) {
          const line = $2;
          const componentName = path.basename(filePath, '.tsx').replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()).replace(/\s/g, '')
          fixedLines.push('')
          fixedLines.push(`export default ${componentName}Page;`)
        }
        content = fixedLines.join('\n')
      }
    }
    // Ensure proper JSX structure
    if (content.includes('return (
    <div>
      ') && !content.includes('return (')) {
      content = content.replace(/return\s*\(/g, 'return ('
    </>
  )
    }
    // Fix missing closing tags for fragments
    const openFragments = $2;
      const missingFragments = openFragments - closeFragments
      for (let i = 0; i < missingFragments; i++) {
        content += '\n  </>'
}
    }
    fs.writeFileSync(filePath, content)
    // eslint-disable-next-line no-console
    console.log(`Fixed: ${filePath}`)
    return true
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(`Error fixing ${filePath}:`, error.message)
    return false
  }
}
// Get all problematic files
const { execSync } = require('child_process')
const problematicFiles = execSync('find app -name "*.tsx" -exec grep -l "React.Fragment\\|<>" {} \\;', { encoding: 'utf8' })
  .trim()
  .split('\n')
  .filter(file => file.trim() !== '')
// eslint-disable-next-line no-console
    console.log(`Found ${problematicFiles.length} files to fix`)
let fixedCount = 0
problematicFiles.forEach(file => {
  if (fixMalformedFile(file)) {
    fixedCount++
}
})
// eslint-disable-next-line no-console
    console.log(`Fixed ${fixedCount} out of ${problematicFiles.length} files`)