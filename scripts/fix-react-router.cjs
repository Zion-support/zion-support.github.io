<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
const fs = require('fs')
const path = require('path')
<<<<<<< HEAD
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
<<<<<<< HEAD
        "
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
        "
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a


>>>>>>> 61d39dd026fe5549161165ead85b131541010508
