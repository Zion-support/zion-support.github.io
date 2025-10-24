
const fs = $2;
    const exportMatches = content.match(/export default [^;]+;/g)
    if (exportMatches && exportMatches.length > 1) {
      // Keep only the first export
      const firstExport = exportMatches[0]
      content = content.replace(/export default [^;]+;/g, '')
      content += '\n' + firstExport
      modified = true
}
    // Fix JSX structure issues
    const lines = $2;
    const fixedLines = []
    let inJSX = false
    let braceCount = 0
    let parenCount = 0
    for (let i = 0; i < lines.length; i++) {
  const line = $2;
const allFiles = execSync('find app -name "*.tsx" -type f', { encoding: 'utf8' })
  .trim()
  .split('\n')
  .filter(file => file.trim() !== '')
// eslint-disable-next-line no-console
    console.log(`Found ${allFiles.length} files to check`)
let fixedCount = 0
allFiles.forEach(file => {
  if (fixFile(file)) {
    fixedCount++
}
})
// eslint-disable-next-line no-console
    console.log(`Fixed ${fixedCount} out of ${allFiles.length} files`)