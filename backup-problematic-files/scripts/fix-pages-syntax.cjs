const fs = require('fs')
<<<<<<< HEAD
const path = require(path')
console.log(' Fixing pages syntax errors...)
const pagesDir = path.join(__dirname, ..', 'pages)
const files = fs.readdirSync(pagesDir).filter(file => file.endsWith(.tsx')
  let content = fs.readFileSync(filePath, 'utf8')
  if (content.includes(import React') && !content.includes('const ) && !content.includes(function ')
    const lines = content.split('\n)
    const importLines = lines.filter(line => line.startsWith(import')
    const otherLines = lines.filter(line => !line.startsWith('import)
    if (otherLines.length > 0 && otherLines[0].includes({'})
      const componentName = file.replace('.tsx, ').replace(/-/g, ')
      content = importLines.join(\n') + '\n\n
        otherLines.join(\n') + '\n
        }\n\n'

=======
const path = require('path')

  if (content.includes('import React') && !content.includes('const ') && !content.includes('function ')
    const lines = content.split('\n')
    const importLines = lines.filter(line => line.startsWith('import')
    const otherLines = lines.filter(line => !line.startsWith('import')
<<<<<<< HEAD
    if (otherLines.length > 0 && otherLines[0].includes('{'})
      const componentName = file.replace('.tsx', '').replace(/-/g, '')
      content = importLines.join('\n') + '\n\n'
        otherLines.join('\n') + '\n'
        '};\n\n'
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
=======
    if (p1.includes("'") && p2.includes("'") && !p1.includes("'") && !p2.includes(")
    if (p1.includes("'") && p2.includes("'") && !p1.includes("'") && !p2.includes(")
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
=======
    if (p1.includes("'") && p2.includes("'") && !p1.includes("'") && !p2.includes(")
=======
    if (p1.includes("'") && p2.includes("'") && !p1.includes("'") && !p2.includes(")
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
