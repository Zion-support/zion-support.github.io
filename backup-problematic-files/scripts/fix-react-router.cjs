const fs = require('fs')
<<<<<<< HEAD
const path = require(path')
console.log(' Fixing react-router-dom imports...)
const pagesDir = path.join(__dirname, ..', 'pages)
const files = fs.readdirSync(pagesDir).filter(file => file.endsWith(.tsx')
=======
const path = require('path')
<<<<<<< HEAD
console.log(' Fixing react-router-dom imports...')
const pagesDir = path.join(__dirname, '..', 'pages')
const files = fs.readdirSync(pagesDir).filter(file => file.endsWith('.tsx')
>>>>>>> origin/chore/fix-lint-and-merge
  let content = fs.readFileSync(filePath, 'utf8')
  if (content.includes(react-router-dom')
      /import\s*{\s*Link\s*}\s*from\s*[']
      "
<<<<<<< HEAD
      /import\s*{\s*Link\s*,\s*useNavigate\s*}\s*from\s*[']
      
      /import\s*{\s*useNavigate\s*}\s*from\s*[']
      
    content = content.replace(/to="/g, href=')

=======
      /import\s*{\s*Link\s*,\s*useNavigate\s*}\s*from\s*['']
      "
      /import\s*{\s*useNavigate\s*}\s*from\s*['']
      "
    content = content.replace(/to="/g, 'href=')
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
=======
        "
        "
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
=======
        "
=======
        "
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
