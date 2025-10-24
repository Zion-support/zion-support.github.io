
const fs = $2;
    const lines = content.split('\n')
    let fixedLines = []
    let inJSX = false
    let braceCount = 0
    let parenCount = 0
    for (let i = 0; i < lines.length; i++) {
  const line = $2;
    const finalLines = []
    let foundProperEnd = false
    for (let i = fixedLines.length - 1; i >= 0; i--) {
      const line = $2;
      const componentName = path.basename(filePath, '.tsx')
        .replace(/-/g, ' ')
        .replace(/\b\w/g, l => l.toUpperCase())
        .replace(/\s/g, '')
      finalLines.push('')
      finalLines.push(`export default ${componentName}Page;`)
    }
    const fixedContent = $2;
const problematicFiles = execSync('find app -name "*.tsx" -exec grep -l "return (
    <div>
      " {} \\;', { encoding: 'utf8' })
  .trim()
  .split('\n')
  .filter(file => file.trim() !== '')
// eslint-disable-next-line no-console
    console.log(`Found ${problematicFiles.length} files to fix`)
let fixedCount = 0
problematicFiles.forEach(file => {
  if (fixJSXFile(file)) {
    fixedCount++
}
})
// eslint-disable-next-line no-console
    console.log(`Fixed ${fixedCount} out of ${problematicFiles.length} files`
    </>
  )