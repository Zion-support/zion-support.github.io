const fs = require('fs');
const path = require('path');
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> fe40038fc50c97a9241476e2e4238d38f839f5b2
>>>>>>> 76112d4ec2170757d73ae14979f1846daff39ac5

  if (content.includes('import React') && !content.includes('const ') && !content.includes('function ')
    const lines = content.split('\n')
    const importLines = lines.filter(line => line.startsWith('import')
    const otherLines = lines.filter(line => !line.startsWith('import')
    if (p1.includes("'") && p2.includes("'") && !p1.includes("'") && !p2.includes(")

    if (p1.includes("'") && p2.includes("'") && !p1.includes("'") && !p2.includes(")
    if (p1.includes("'") && p2.includes("'") && !p1.includes("'") && !p2.includes(")
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
<<<<<<< HEAD
=======

>>>>>>> 4571daf261a52428d1b7657006d5eae04fbdc4bb
    if (p1.includes("'") && p2.includes("'") && !p1.includes("'") && !p2.includes(")
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
    if (p1.includes("'") && p2.includes("'") && !p1.includes("'") && !p2.includes(")
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a


<<<<<<< HEAD
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======

>>>>>>> fe40038fc50c97a9241476e2e4238d38f839f5b2
>>>>>>> 76112d4ec2170757d73ae14979f1846daff39ac5
