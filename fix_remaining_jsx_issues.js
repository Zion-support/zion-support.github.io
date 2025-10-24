
const fs = require('fs')
const path = require('path')
function fixJSXIssues(content) {
  let fixed = content
  // Fix JSX structure issues
  // Pattern: return (\n    <div> -> return (\n    <div>
  fixed = fixed.replace(/return \(\s*\n\s*<div/g, 'return (\n    <div')
  // Fix malformed closing tags
  fixed = fixed.replace(/<\/a>a>/g, '</a>')
  fixed = fixed.replace(/<\/h1>h1>/g, '</h1>')
  fixed = fixed.replace(/<\/h2>h2>/g, '</h2>')
  fixed = fixed.replace(/<\/h3>h3>/g, '</h3>')
  fixed = fixed.replace(/<\/p>p>/g, '</p>')
  fixed = fixed.replace(/<\/div>div>/g, '</div>')
  // Fix JSX fragments
  fixed = fixed.replace(/<>\s*\n\s*<div/g, '<>\n      <div')
  fixed = fixed.replace(/<>\s*\n\s*<Helmet/g, '<>\n      <Helmet')
  fixed = fixed.replace(/<>\s*\n\s*<Head/g, '<>\n      <Head')
  // Fix malformed JSX structure
  fixed = fixed.replace(/<div([^>]*)>\s*\{\/\*[^*]+\*\/\}\s*<\/div>\s*\n\s*<a/g, '<div$1>\n        <a')
  return fixed
}
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8')
    const fixed = fixJSXIssues(content)
    if (content !== fixed) {
      // eslint-disable-next-line no-console
    console.log(`Fixing JSX issues in: ${filePath}`)
      fs.writeFileSync(filePath, fixed)
      return true
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(`Error processing ${filePath}:`, error.message)
  }
  return false
}
function walkDirectory(dir) {
  const files = fs.readdirSync(dir)
  let fixedCount = 0
  for (const file of files) {
    const filePath = path.join(dir, file)
    const stat = fs.statSync(filePath)
    if (stat.isDirectory()) {
      if (file !== 'node_modules' && file !== '.git') {
        fixedCount += walkDirectory(filePath)
      }
    } else if (file.endsWith('.tsx') || file.endsWith('.jsx')) {
  if (processFile(filePath)) {
        fixedCount++
}
    }
  }
  return fixedCount
}
// eslint-disable-next-line no-console
    console.log('Starting JSX issues fix...')
const fixedCount = walkDirectory('app')
// eslint-disable-next-line no-console
    console.log(`Fixed JSX issues in ${fixedCount} files`)