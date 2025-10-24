
const fs = require('fs')
const path = require('path')
function fixJSXStructure(content) {
  let fixed = content
  // Fix JSX structure issues where JSX is not properly wrapped
  // Pattern: return (\n    <>\n      <Head> -> return (\n    <>\n      <Head>
  fixed = fixed.replace(/return \(\s*\n\s*<>\s*\n\s*<Head>/g, 'return (\n    <>\n      <Head>')
  fixed = fixed.replace(/return \(\s*\n\s*<>\s*\n\s*<Helmet>/g, 'return (\n    <>\n      <Helmet>')
  // Fix missing closing tags and malformed JSX
  fixed = fixed.replace(/<h1([^>]*)>\s*([^<]+)\s*<\/h1>h1>/g, '<h1$1>$2</h1>')
  fixed = fixed.replace(/<h2([^>]*)>\s*([^<]+)\s*<\/h2>h2>/g, '<h2$1>$2</h2>')
  fixed = fixed.replace(/<h3([^>]*)>\s*([^<]+)\s*<\/h3>h3>/g, '<h3$1>$3</h3>')
  // Fix JSX fragments that are not properly closed
  fixed = fixed.replace(/<>\s*\n\s*<Head>/g, '<>\n      <Head>')
  fixed = fixed.replace(/<>\s*\n\s*<Helmet>/g, '<>\n      <Helmet>')
  // Fix malformed div tags
  fixed = fixed.replace(/<div([^>]*)>\s*\{\/\*[^*]+\*\/\}\s*<\/div>\s*\n\s*<section/g, '<div$1>\n        <section')
  // Fix missing closing tags for JSX fragments
  fixed = fixed.replace(/<>\s*\n\s*<div([^>]*)>\s*\{\/\*[^*]+\*\/\}\s*<\/div>\s*\n\s*<section/g, '<>\n      <div$1>\n        <section')
  return fixed
}
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8')
    const fixed = fixJSXStructure(content)
    if (content !== fixed) {
      // eslint-disable-next-line no-console
    console.log(`Fixing JSX structure in: ${filePath}`)
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
    console.log('Starting final JSX structure fix...')
const fixedCount = walkDirectory('app')
// eslint-disable-next-line no-console
    console.log(`Fixed JSX structure in ${fixedCount} files`)