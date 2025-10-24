
const fs = $2;
    const replacements = {
      '"': '"'
      '&apos;': "'"
      '<': '<'
      '>': '>'
      '&': '&'
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
    let hasChanges = $2;
  const files = $2;
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