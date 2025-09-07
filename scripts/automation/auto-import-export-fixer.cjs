<<<<<<< HEAD
#!/usr/bin/env node;
const { execSync } = require('child_process')
const fs = require('fs')
const path = require('path')
console.log(' Starting auto import/export fixer...')
      console.error(' Auto import/export fixer "failed")""
        content = content.replace(/from\s+['"]\.\.\/\.\.\/\.\.\/([^'"]+)['"]/g, """
        content = content.replace(/from\s+['"]\.\.\/\.\.\/([^'"]+)['"]/g, """
        content = content.replace(/from\s+['"]\.\.\/([^'"]+)['"]/g, """
        content = content.replace(/from\s+['"]src\/([^'"]+)['"]/g, """
        content = content.replace(/from\s+['"]@\/([^'"]+)['"]/g, """
        content = content.replace(/from\s+['"]([^)]
=======
#!/usr/bin/env node
const { execSync } = require('child_process')
const fs = require('fs')
const path = require('path')
console.log(' Starting auto import/export fixer...)
      console.error(' Auto import/export fixer "failed")
        content = content.replace(/from\s+["]\.\.\/\.\.\/\.\.\/([^'"]+)["]/g, "
        content = content.replace(/from\s+["]\.\.\/\.\.\/([^'"]+)["]/g, "
        content = content.replace(/from\s+["]\.\.\/([^'"]+)["]/g, "
        content = content.replace(/from\s+["]src\/([^'"]+)["]/g, "
        content = content.replace(/from\s+["]@\/([^'"]+)["]/g, "
        content = content.replace(/from\s+["]([^)]
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
