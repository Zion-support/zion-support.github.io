const fs = require('fs')
const path = require('path')
=======


>>>>>>> 76112d4ec2170757d73ae14979f1846daff39ac5
    content = content.replace(/<div className="([^]*)\n\s*([^]*)\s*>/g, '<div className="$1 $2"

    content = content.replace(/<div className=([^]*)\n\s*([^"]*)\s*>/g, '<div className="$1 $2
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
const fs = require('fs')
const path = require('path')
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
console.log(' Comprehensive syntax fix...')
  '/workspace/pages/about.tsx'
  '/workspace/pages/ai-services.tsx'
  '/workspace/pages/index.tsx'
  '/workspace/pages/it-services.tsx'
  '/workspace/pages/micro-saas.tsx'
    let content = fs.readFileSync(filePath, 'utf8')
    content = content.replace(/>\s*<div className="([^"]*)\n\s*([^"]*)"/g, '>\n                  <div className="$1 $2"
    content = content.replace(/>\s*<h2 className="([^"]*)\n\s*([^"]*)"/g, '>\n            <h2 className="$1 $2"
    content = content.replace(/<h1 className="([^"]*)\n\s*([^"]*)\s*>/g, '<h1 className="$1 $2"
    content = content.replace(/<p className="([^"]*)\n\s*([^"]*)\s*>/g, '<p className="$1 $2"
    content = content.replace(/<div className="([^"]*)\n\s*([^"]*)\s*>/g, '<div className="$1 $2"
