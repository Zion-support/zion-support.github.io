const fs = require('fs')
const path = require('path')
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

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
        "

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
        "
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
=======
        "
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7
