const fs = require('fs')
const path = require('path')
<<<<<<< HEAD
console.log(' Fixing react-router-dom imports...')
const pagesDir = path.join(__dirname, '..', 'pages')
const files = fs.readdirSync(pagesDir).filter(file => file.endsWith('.tsx')
  let content = fs.readFileSync(filePath, 'utf8')
  if (content.includes('react-router-dom')
      /import\s*{\s*Link\s*}\s*from\s*[]
      """
      /import\s*{\s*Link\s*,\s*useNavigate\s*}\s*from\s*[]
      /import\s*{\s*useNavigate\s*}\s*from\s*[]
    content = content.replace(/to="/g, 'href=')
=======
console.log(' Fixing react-router-dom imports...)
const pagesDir = path.join(__dirname,..,pages')
const files = fs.readdirSync(pagesDir).filter(file => file.endsWith('.tsx')
  let content = fs.readFileSync(filePath,utf8)
  if (content.includes('react-router-dom')
      /import\s*{\s*Link\s*}\s*from\s*[]
      "
      /import\s*{\s*Link\s*,\s*useNavigate\s*}\s*from\s*[]
      "
      /import\s*{\s*useNavigate\s*}\s*from\s*[]
      "
    content = content.replace(/to="/g,href=')
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
