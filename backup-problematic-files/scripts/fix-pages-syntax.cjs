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
<<<<<<< HEAD

>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
