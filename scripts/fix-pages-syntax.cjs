const fs = require('fs')
const path = require('path')

  if (content.includes('import React') && !content.includes('const ') && !content.includes('function ')
    const lines = content.split('\n')
    const importLines = lines.filter(line => line.startsWith('import')
    const otherLines = lines.filter(line => !line.startsWith('import')
    if (otherLines.length > 0 && otherLines[0].includes('{'})
      const componentName = file.replace('.tsx', '').replace(/-/g, '')
      content = importLines.join('\n') + '\n\n'
        otherLines.join('\n') + '\n'
        '};\n\n'
    if (p1.includes("'") && p2.includes("'") && !p1.includes("'") && !p2.includes(")
    if (p1.includes("'") && p2.includes("'") && !p1.includes("'") && !p2.includes(")

