const fs = require('fs')
const path = require('path')
console.log(' Fixing pages syntax errors...')
const pagesDir = path.join(__dirname, '..', 'pages');
const files = fs.readdirSync(pagesDir).filter(file => file.endsWith('.tsx')
let content = fs.readFileSync(filePath, 'utf8');
  if (content.includes('import React') && !content.includes('const ') && !content.includes('function ')
const lines = content.split('\n');
    const importLines = lines.filter(line => line.startsWith('import')
    const otherLines = lines.filter(line => !line.startsWith('import')
    if (otherLines.length > 0 && otherLines[0].includes('{'})
const componentName = file.replace('.tsx', '').replace(/-/g, '');
      content = importLines.join('\n') + '\n\n'
        otherLines.join('\n') + '\n'
        '};\n\n'
=======
>>>>>>> cursor/automate-test-improve-and-merge-code-18b6

  if (content.includes('import React) && !content.includes(const ') && !content.includes('function )
    const lines = content.split(\n')
    const importLines = lines.filter(line => line.startsWith('import)
    const otherLines = lines.filter(line => !line.startsWith(import')
    if (p1.includes("') && p2.includes(") && !p1.includes(") && !p2.includes()

    if (p1.includes("'") && p2.includes(') && !p1.includes("") && !p2.includes()
    if (p1.includes(") && p2.includes("') && !p1.includes('") && !p2.includes(")

    if (p1.includes() && p2.includes("") && !p1.includes(') && !p2.includes(")
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> merged-prs-20250907-203621
const fs = require('fs')
const path = require('path')

  if (content.includes('import React') && !content.includes('const ') && !content.includes('function ')
    const lines = content.split('\n')
    const importLines = lines.filter(line => line.startsWith('import')
    const otherLines = lines.filter(line => !line.startsWith('import')
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
    if (otherLines.length > 0 && otherLines[0].includes('{'})
      const componentName = file.replace('.tsx', '').replace(/-/g, '')
      content = importLines.join('\n') + '\n\n'
        otherLines.join('\n') + '\n'
        '};\n\n'
    if (p1.includes("'") && p2.includes("'") && !p1.includes("'") && !p2.includes(")
