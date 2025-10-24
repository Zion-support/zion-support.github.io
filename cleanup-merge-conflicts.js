<<<<<<< HEAD
#!/usr/bin/env node
import fs from '
import path from '
      fs.writeFileSync(filePath, content, 'utf8'
      if (!['node_modules', '.git', 'dist', 'build', '.next'
console.log('Starting merge conflict cleanup...'
=======
const fs = require('fs''
const path = require('path''
    let content = fs.readFileSync(filePath, 'utf8''
    content = content.replace(/[\s\S]*?[\s\S]*?    content = content.replace(/<<<<<<< [^\n]+[\s\S]*?[\s\S]*?    content = content.replace(/,\s*}/g, '}''
    content = content.replace(/,\s*]/g, ']''
    content = content.replace(/,\s*\)/g, ')''
    content = content.replace(/<(\w+)([^>]*?)\s*>\s*<\/\1>/g, '<$1$2 />''
    content = content.replace(/^\s*$/gm, '''
    content = content.replace(/:\s*any\[\]/g, ': any[]''
    content = content.replace(/:\s*string\[\]/g, ': string[]''
    content = content.replace(/:\s*number\[\]/g, ': number[]''
    } else if (item.endsWith('.tsx') || item.endsWith('.ts''
const appDir = './app''
console.log('Cleanup complete!''
>>>>>>> origin/main
