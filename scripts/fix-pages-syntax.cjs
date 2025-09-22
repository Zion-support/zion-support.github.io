<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
const fs = require('fs')
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
    if (p1.includes("'") && p2.includes("'") && !p1.includes("'") && !p2.includes(")
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
<<<<<<< HEAD
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


>>>>>>> 61d39dd026fe5549161165ead85b131541010508
