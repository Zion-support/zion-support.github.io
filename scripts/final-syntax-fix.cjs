const fs = require('fs')
const path = require('path')
console.log(' Final syntax fix...')
  '/workspace/pages/services.tsx'
  '/workspace/pages/talent.tsx'
    let content = fs.readFileSync(filePath, 'utf8')
    content = content.replace(/>\s*<div className="([^"]*)\n\s*([^"]*)"/g, '>\n                  <div className="$1 $2"
    content = content.replace(/>\s*<h2 className="([^"]*)\n\s*([^"]*)"/g, '>\n            <h2 className="$1 $2"
    content = content.replace(/<h1 className="([^"]*)\n\s*([^"]*)\s*>/g, '<h1 className="$1 $2"
    content = content.replace(/<h2 className="([^"]*)\n\s*([^"]*)\s*>/g, '<h2 className="$1 $2"
    content = content.replace(/<p className="([^"]*)\n\s*([^"]*)\s*>/g, '<p className="$1 $2"
    content = content.replace(/<div className="([^"]*)\n\s*([^"]*)\s*>/g, '<div className="$1 $2"