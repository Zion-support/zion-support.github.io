const fs = require('fs')
const path = require('path')
console.log(' Fixing remaining syntax errors...')
  '/workspace/components/Footer.tsx'
  '/workspace/pages/about.tsx'
  '/workspace/pages/ai-services.tsx'
  '/workspace/pages/index.tsx'
  '/workspace/pages/it-services.tsx'
    let content = fs.readFileSync(filePath, 'utf8')
    content = content.replace(/className="([^"]*)\n\s*([^"]*)"/g, 'className="$1 $2"
    content = content.replace(/className="([^"]*)\n\s*([^"]*)"\s*>/g, 'className="$1 $2"