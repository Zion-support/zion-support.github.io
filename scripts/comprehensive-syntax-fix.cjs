const fs = require('fs');
const path = require('path');
console.log(' Comprehensive syntax fix...')
  '/workspace/pages/about.tsx'
  '/workspace/pages/ai-services.tsx'
  '/workspace/pages/index.tsx'
  '/workspace/pages/it-services.tsx'
  '/workspace/pages/micro-saas.tsx'
let content = fs.readFileSync(filePath, 'utf8');
    content = content.replace(/>\s*<div className="([^"]*)\n\s*([^"]*)"/g, '>\n                  <div className="$1 $2"
    content = content.replace(/>\s*<h2 className="([^"]*)\n\s*([^"]*)"/g, '>\n            <h2 className="$1 $2"
    content = content.replace(/<h1 className="([^"]*)\n\s*([^"]*)\s*>/g, '<h1 className="$1 $2"
    content = content.replace(/<p className="([^"]*)\n\s*([^"]*)\s*>/g, '<p className="$1 $2"
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> fe40038fc50c97a9241476e2e4238d38f839f5b2

>>>>>>> 76112d4ec2170757d73ae14979f1846daff39ac5
    content = content.replace(/<div className="([^"]*)\n\s*([^"]*)\s*>/g, '<div className="$1 $2"
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
<<<<<<< HEAD
=======

>>>>>>> 4571daf261a52428d1b7657006d5eae04fbdc4bb
    content = content.replace(/<div className="([^"]*)\n\s*([^"]*)\s*>/g, '<div className="$1 $2"
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
    content = content.replace(/<div className="([^"]*)\n\s*([^"]*)\s*>/g, '<div className="$1 $2"
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
=======
>>>>>>> fe40038fc50c97a9241476e2e4238d38f839f5b2

</div>"
    content = content.replace(/>\s*<h2 className="([^"]*)\n\s*([^"]*)"/g,>\n            <h2 className="$1 $2
</h2>"
    content = content.replace(/<h1 className="([^"]*)\n\s*([^"]*)\s*>/g,<h1 className="$1 $2
</h1>"
    content = content.replace(/<p className="([^"]*)\n\s*([^"]*)\s*>/g,<p className="$1 $2
</p>"

