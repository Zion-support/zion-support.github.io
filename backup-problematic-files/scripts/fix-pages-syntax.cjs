const fs = require('fs')
const path = require('path')
<<<<<<< HEAD
console.log(' Fixing pages syntax errors...')
const pagesDir = path.join(__dirname, '..', 'pages')
const files = fs.readdirSync(pagesDir).filter(file => file.endsWith('.tsx')
  let content = fs.readFileSync(filePath, 'utf8')
=======
console.log(' Fixing pages syntax errors...)
const pagesDir = path.join(__dirname,..,pages')
const files = fs.readdirSync(pagesDir).filter(file => file.endsWith('.tsx')
  let content = fs.readFileSync(filePath,utf8)
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
  if (content.includes('import React') && !content.includes('const ') && !content.includes('function ')
    const lines = content.split('\n')
    const importLines = lines.filter(line => line.startsWith('import')
    const otherLines = lines.filter(line => !line.startsWith('import')
<<<<<<< HEAD
    if (otherLines.length > 0 && otherLines[0].includes('{'})
      const componentName = file.replace('.tsx', ).replace(/-/g, )
      content = importLines.join('\n') + '\n\n
        otherLines.join('\n') + '\n
        '};\n\n
    if (p1.includes("'") && p2.includes("'") && !p1.includes("'") && !p2.includes(")""
=======
    if (otherLines.length > 0 && otherLines[0].includes('{})
      const componentName = file.replace('.tsx, ).replace(/-/g, )
      content = importLines.join('\n') +\n\n'
        otherLines.join('\n') +\n'
        };\n\n'
    if (p1.includes("'") && p2.includes("") && !p1.includes("") && !p2.includes(")
    if (p1.includes("") && p2.includes("") && !p1.includes("") && !p2.includes(")
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
