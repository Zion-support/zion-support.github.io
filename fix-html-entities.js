
const fs = require('fs')
const path = require('path')
function fixHtmlEntities(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8')
    // Fix common HTML entities
    const replacements = {
      '&quot;': '"'
      '&apos;': "'"
      '&lt;': '<'
      '&gt;': '>'
      '&amp;': '&'
      '&nbsp;': ' '
      '&ldquo;': '"'
      '&rdquo;': '"'
      '&lsquo;': "'"
      '&rsquo;': "'"
      '&#39;': "'"
      '&#34;': '"'
      '&#60;': '<'
      '&#62;': '>'
      '&#38;': '&'
}
    let hasChanges = false
    for (const [entity, replacement] of Object.entries(replacements)) {
  if (content.includes(entity)) {
        content = content.replace(new RegExp(entity, 'g'), replacement)
        hasChanges = true
}
    }
    if (hasChanges) {
      fs.writeFileSync(filePath, content, 'utf8')
      // eslint-disable-next-line no-console
    console.log(`Fixed HTML entities in: ${filePath}`)
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(`Error processing ${filePath}:`, error.message)
  }
}
function walkDirectory(dir) {
  const files = fs.readdirSync(dir)
  for (const file of files) {
    const filePath = path.join(dir, file)
    const stat = fs.statSync(filePath)
    if (stat.isDirectory()) {
      walkDirectory(filePath)
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js')) {
      fixHtmlEntities(filePath)
    }
  }
}
// Start from the app directory
walkDirectory('./app')
// eslint-disable-next-line no-console
    console.log('HTML entities fix completed!')