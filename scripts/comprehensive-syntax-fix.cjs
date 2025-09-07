const fs = require('fs')
const path = require('path')
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

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
    content = content.replace(/<div className="([^"]*)\n\s*([^"]*)\s*>/g, '<div className="$1 $2"

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
    content = content.replace(/<div className="([^"]*)\n\s*([^"]*)\s*>/g, '<div className="$1 $2"
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
=======
    content = content.replace(/<div className="([^"]*)\n\s*([^"]*)\s*>/g, '<div className="$1 $2"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7
