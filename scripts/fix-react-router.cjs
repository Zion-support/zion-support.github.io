const fs = require('fs')
const path = require('path')
=======

>>>>>>> 76112d4ec2170757d73ae14979f1846daff39ac5
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
const fs = require('fs')
const path = require('path')
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
console.log(' Fixing react-router-dom imports...')
const pagesDir = path.join(__dirname, '..', 'pages')
const files = fs.readdirSync(pagesDir).filter(file => file.endsWith('.tsx')
  let content = fs.readFileSync(filePath, 'utf8')
  if (content.includes('react-router-dom')
      /import\s*{\s*Link\s*}\s*from\s*['']
      "
      /import\s*{\s*Link\s*,\s*useNavigate\s*}\s*from\s*['']
      "
      /import\s*{\s*useNavigate\s*}\s*from\s*['']
      "
    content = content.replace(/to="/g, 'href=')
        "
